---
title: "The Library vs. The Warehouse: Why Your Database Can't Have It All"
date: 2025-11-18T00:00:00+05:30
basecolor: "#16A085"
author: Mayank Raj
enablecomments: true
category: Database Architecture
keywords: [btree, lsm-tree, database-storage, read-write-tradeoffs, database-internals, rocksdb, storage-engines]
bgimage: default-blog-cover
page_slug: "/blog/btree-lsm-database-storage-tradeoffs"
description: "Why databases can't optimize for both reads and writes. Explore the fundamental tradeoffs between B-Trees and LSM Trees, and learn when to choose each storage engine for your workload."
draft: false
aiDisclosure: true
---

# The Library vs. The Warehouse: Why Your Database Can't Have It All

Your application just hit 10,000 writes per second, and your database is quite literally screaming. Looking at the write latency chart is like watching a heart attack ...while it's in progress! Your on-call engineer is panic texting, ALL CAPS, in the team chat. Someone just spoke out the obvious - "maybe we need to throw more RAM at it." You've been here before, many many times. Every engineering team eventually faces the same brutal question: do we optimize for reading data, or writing it?

**We can't have both.** Not really.

---

## The Physics Problem (Or: Why Libraries and Warehouses Don't Work the Same Way)

Let's talk about two very different buildings. The first is a traditional library, the kind with the musty smell and the Dewey Decimal System. Every book has exactly one location, known neighbors and predictable rack. When a new book comes in, a librarian walks to a very precise shelf, shifts everything over (yes, physically moves books), and slots it into its ordained position. Want to get that book later? Instant. You look it up in the catalog, walk directly to QA76.76, and voila - there it is. The second building is an Amazon fulfillment center. Packages arrive by the truckload. Workers don't, or rather can't carefully organize them by the category which means that they throw them into the nearest available bin as fast as humanly possible. Need to find something? You end up having to scan barcodes, check multiple bins, and hope your "smart system" knows which bins might contain your item. But the receive rate? Absolutely insane.

B-Trees are the library while LSM Trees are the warehouse.

Every modern database is exactly one of these two buildings. Even worse, few act as the clever hybrid trying to be both, usually succeeding at neither. The fundamental constraint isn't in the software but the physics. Specifically, the physics of moving bits between RAM and disk.

---

## The B-Tree: Pay Now, Read Fast Forever

B-Tree have dominated relational databases since the 1970s and for a good reason: they minimizes the number of times you have to ask the disk for data. Back then hard drives were physical entities with actual spinning platters and moving read/write heads. A random disk seek could take 10 milliseconds. That's couple of centuries in human timescale. In the time it takes to move a mechanical arm across a platter, a modern CPU could execute about 30 million instructions. We're looking at ~100x performance gap between sequential and random I/O on HDDs.

The B-Tree was designed for this mechanical sloth as per today's standards. It organizes data into fixed-size pages (~4-16 KB) and maintains a sorted tree structure where the internal nodes act as the navigation layer. The tree's fan-out is high wherein each internal node can point to hundreds of children. This enables databases with millions of records to remains only 3 or 4 levels deep. What you get in return is a point lookup requiring just a few disk reads, most of which are probably cached in memory anyway. Range scans are even better. Given that the leaf nodes are linked together, once you find your starting point, you just walk forward reading contiguous pages. The database is *always* organized, *always* sorted, *always* ready for your read query.

### The Write Tax

Writes are where the librarian starts sweating. When you update a single 100 byte record in the B-Tree, you don't just write 100 bytes to disk. You instead write the whole of 16 KB page containing that record. That's 160x more data than you actually changed. It gets even worse. To ensure durability, every modification is written twice: once to a Write Ahead Log (WAL), and once to the B-Tree page itself. So now we're at 320x amplification for that poor 100-byte update.

And then there's fragmentation as B-Tree nodes are rarely 100% full. If they were then every insertion would trigger an expensive page split! In practice, a B-Tree under an active workload might have a 50-70% fill factor. That means 30-50% of your disk space is just... well... empty. Reserved for future insertions which may never come.

> The B-Tree is the database equivalent of paying your taxes upfront. You may suffer during the write, but your reads never have to worry.

---

## The LSM Tree: The Art of Organized Procrastination

In 1996 [Patrick O'Neil](https://en.wikipedia.org/wiki/Patrick_O%27Neil) (aka DB legend) and colleagues asked a dangerous question: *What if we just... didn't organize data immediately?* The Log-Structured Merge Tree, or LSM Tree was born from this very simple question. Sequential writes are 100x faster than random writes on HDDs. If we stop trying to update data in place and instead treat every write as an append operation, we can match the theoretical maximum throughput of the storage device, at least for the writing part.

Here's how it works. When your application writes a record:

1. **Append to the Write-Ahead Log**: The record is appended to a sequential log file on disk. This is extremely fast because we're just writing to the end of a file. There's no seeking, no shuffling, just raw sequential bandwidth.

2. **Insert into the MemTable**: The record is added to an in-memory sorted structure. This happens in RAM in nanoseconds.

3. **Flush to Disk**: When the MemTable fills up (say 64 MB), it's marked immutable and flushed to disk as a new Sorted String Table (SSTable). This flush is purely sequential and so at maximum speed.

4. **Immutable writes**: SSTable is strictly immutable. So If you update a record then you don't modify the old one but you write a new version. The old version sits there until a background process cleans it up later.

The throughput difference is staggering. LSM Trees like RocksDB can sustain 2-5x higher write rates than B-Trees. In Facebook's benchmarks, RocksDB regularly exceeded 100 MB/s ingestion while WiredTiger (a B-Tree engine) bottlenecked at 20 MB/s.

### The Read Debt

You cannot escape tradeoffs. The warehouse model has a problem and it's in finding the stuff you stored. To read a single key in an LSM Tree, you have to check:

- The active MemTable (in RAM)
- Any immutable MemTables waiting to be flushed
- All the Level 0 SSTables on disk with overlapping key ranges
- One SSTable per level in the hierarchy

As you can imagine, this is slow. A single key lookup could require checking a dozen files across RAM and disk. So LSM Trees cheat in two ways:

**Bloom Filters**: Before reading an SSTable the DB engine checks a probabilistic data structure to see if the key is definitely not in this file? If the Bloom filter says no, then it skips the entire file or else it'll have to check. There are chances of false positive, but majority cases proceeds.

**Sparse Indexes**: Inside each SSTable, data is stored in sorted blocks. With this the system maintains a sparse index with pointers indicating the start and end keys for each block. This allows binary search within the file, narrowing down to a single 4 KB block instead of scanning the entire thing.

Even with these tricks, LSM's read latency is higher than B-Trees. The 95th percentile latency in production LSM systems can be 2-3x worse than B-Trees for point lookups.

---

## The NVMe Twist

For decades the LSM Tree's dominance in write-heavy workloads was justified by the extreme cost of random writes on spinning disks. But NVMe SSDs have fundamentally changed the equations now. Modern NVMe drives don't have any mechanical heads. They use parallel flash channels which can handle thousands of random 4 KB writes per second at microsecond latency. The performance gap between random and sequential I/O has collapsed to as little as 2-3x. Now as the random writes are no longer prohibitively expensive, the value add to the LSM Tree's weakens.

Recent research on Bf-Trees shows write throughput 6x higher than traditional B-Trees and point lookups 2x faster than both B-Trees and LSM Trees! It's a next-generation B-Tree variant designed for SSDs. The future of database storage might not be LSM Trees and we might get back to the roots of B-Trees.

---

## The Framework: Organize Now, or Organize Later?

You'll learn within years of working with databases - there is no perfect database. The space is as specialized as it gets. Each has its tradeoffs and is applicable for a given use case.

**B-Trees organize at ingestion.** Write pays the cost of finding the correct sorted position then updating pages in place, and finally maintaining the tree invariant. The benefit? Reads are orders of magnitude faster.

**LSM Trees organize at compaction.** Every write feels fast because you're just appending. The cost is deferred to background processes that merge, sort, and garbage-collect. The benefit? Extreme write throughput.

This isn't just a software problem but it's hardware and physics. The RUM conjecture (Read, Update, Memory overhead) states that you can optimize for two of these three dimensions, but not all three. B-Trees choose Read and Memory efficiency at the cost of Update performance. LSM Trees choose Update efficiency at the cost of Read complexity and Space overhead. The library and the warehouse both work. It's just that they are optimized for different realities. Understand the trade-offs well enough that when your database inevitably melts down at 3 AM, you'll know why and more importantly what lever to pull.
