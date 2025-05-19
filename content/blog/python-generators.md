---
title: "Python Building Blocks - Generators"
date: 2021-07-16T01:10:46+05:30
category: "Python Fundamentals"
external_link: "https://medium.com/cactus-techblog/python-building-blocks-generators-f747717a0bf4"
external_site_name: "Cactus Tech Blog"
external_site_link: "https://medium.com/cactus-techblog"
page_slug: "/blog/python-generators"
---


Python Building Blocks - Generators
===================================

![captionless image](https://miro.medium.com/v2/resize:fit:3840/format:webp/1*7nMyswfep-1mgq3MCU4R4A.jpeg)

[Reference](https://medium.com/cactus-techblog/python-building-blocks-generators-f747717a0bf4)

by [Mayank Raj](https://medium.com/@mayank9856?source=post_page---byline--f747717a0bf4---------------------------------------)

Follow





Every programming language has few aspects that always remain in play and go unnoticed. They take the front seat only in two scenarios - when you read about it and it clicks, “Hey ! I’ve been using this all along. Looks like there’s a term for it” or have some niche use case that is satisfied by that exact phenomena. There are few such aspects common across all languages like Scopes, Closures etc and few that are language specific. In the Python ecosystem, generators, iterators, comprehensions etc fall in this category. There’s a good chance you have already used them if you have written more than 100 lines in python.

In this article, a part of a series touching on such details of the languages we will be looking at one such aspect of Python - Generators. Generators are really powerful if used well. Just like any other tool it works the other way around as well, it can be really bad if not used well or used incorrectly. To a great extent, one can also say that _generators_ are a specialised _iterators._ Iterators is another beast that deserves a spot of its’s own. For this post, we will focus on just _generators_.

**Before Generators…**
======================

Let’s start by looking at a few cases wherein you would want to iterate over a set of objects. You would write something like this…

```
for item in items:  # items is a list of _something_
     process(item)  # We process each of them one by one
```

This looks good. You get the job done and move on. Nothing too fancy here.
…or is there? Can it really be that simple?

**The bottlenecks**
===================

Notice how when you are looping over `items` you have to have the `items` available to the python interpreter. This means the whole object has to be in memory.

1.  **What if you had to loop over something that is HUGE !
    **What if you had to process lines in a 2TB file. You certainly cannot hold the whole of the 2TB in memory to loop over it.
2.  **What happens when the items are dynamically generated ?
    **In such cases external factors might affect the items that have to be processed.
    eg, You took a fresh dump of 100K subscribers of your newsletter and started sending out email to them in a _loop._ While sending out, you were 2/5th in and someone unsubscribed from the mailing list. Ideally you would not want to take a fresh dump of subscribers after every email sent out nor would you want to send email to this user after they have unsubscribed because of a race condition.
3.  **What if you had to abort the loop midway ?
    **If the items of the loop were processed beforehand to be made available for looping through them, then you have essentially wasted the processing units.
4.  How do you structure your code such that it’s intuitive to read and is not sprinkled with list aggregations and processes all over the place ?

**Enter - Generators…**
=======================

> Generator functions allow you to declare a function that behaves like an iterator, i.e. it can be used in a for loop.
> (source: [Python docs](https://wiki.python.org/moin/Generators))

Essentially Generators are simple python functions that make it possible to loop through each item of a _list_ in a truly sequential manner_,_ without the need of having all the items of the list available beforehand. If it took some computation to generate these items then these computations are done during the loop execution rather than before the loop execution.

Let’s look at a simple example

Generators are simple case wherein instead of returning the value, we are instead giving a token for it. This token can be exchanged for the actual value and this exchange happens at the run time. Things become more interesting when you go about using them…

Do you notice how the response is not the value itself but rather a memory reference ?

At this point, all that the interpreter has done is take the instructions that you have given it and kept it in memory along with every detail that it needs to execute them and give you the correct answer. **It is however holding back on actually executing on this bit of information until you give the green light.**
Loosely speaking, this can be called lazy execution. Figuratively and literally. It has the same attitude that you had for your university submissions - procrastinate everything to the last moment until it is absolutely necessary to execute on the plan.

When you finally need the data…

**Usage Patterns for Generators**
=================================

If you had to read a large file and only process a part of it at once, then generators can help you achieve the goal in an easy manner.

If your operation on the other hand is expensive, takes time or consumes a lot of resources and you have a case wherein if certain conditions are met you can skip performing the operation on the rest of unchecked items, _generators_ can save you from building your own logic to handle the use case.

Finally, you may have also noticed that _generators_ also help in making the code easier to read. Instead of building the logic as a part of your application, it’s a built in functionality at your disposal.

**Antipatterns for Generators**
===============================

Just like any tool, _generators_ do have a flip side as well. You should not throw around _generators_ for every loop statement in your application but rather assess the situation and then use it wisely.

Remember that _generator_s are executed when you actually ask for the value. This makes it a good candidate when you need to factor in the most accurate environmental conditions in your execution (eg, the email newsletter that we discussed earlier)

> However when you need the environments to be locked in and do not do so explicitly, _generators_ will pick these dynamically. In some cases, this might not be desirable

For example, in a stock exchange wherein every second the condition changes, the bets placed have to be evaluated with the parameters (or the environment) present when the orders were placed. If you have a backlog of bets to process, you cannot process a bet with new prices.
Let’s see this in action

Can you guess what the output of the snippet above would be ? Notice how we change `theGlobalMultiplier` midway through our processing. Can you do a dryrun to come up with how the `multipliedNumber` would turn out ?

_Followup question: Can you fix the issue ? We expect all the numbers to be multiplied by the `_theGlobalMultiplier` at the time of trigger and not execution.

Conclusion
==========

Generators should be treated as a tool. Any good tool has a way to use it optimally, at the right time and under the correct situation. If done so, _generators_ can not only simplify your logic, but also improve the flow of your code and increase its readability. However you should know its working well enough because if used under the wrong situation, it can go undetected. It becomes very tricky and hard to spot the source of the problem in such cases.

Next time you are looping over something, ask yourself a few questions…
Is there any space or memory constraints that I should be taking into consideration ? Do I need to process a chunk of data at a time or the whole data ?
Do I know of cases which I can use to exit for the loop early ? How do I make the best use of those to optimise for computation time ?

Do share the situations in which you have seen a clever use of this gem of python or better yet, used it.