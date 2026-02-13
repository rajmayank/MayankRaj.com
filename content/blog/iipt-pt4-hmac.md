---
title: "Insights in Plaintext: Hashing out HMAC"
date: 2024-09-28T00:00:00+05:30
basecolor: "#6fa6bb"
author: "Mayank Raj"
category: "Cryptography"
keywords: "HMAC, Hash-based Message Authentication Code, cryptography, authentication, integrity, security, SHA-256, SHA-3, CMAC, Poly1305, Key Derivation Function, KDF, side-channel attack, length extension attack, pseudorandom function, PRF"
bgimage: "insights-in-plaintext-hashing-out-hmac"
page_slug: "/blog/insights-in-plaintext-hashing-out-hmac"
description: "Dive deep into HMAC's role in modern cryptography. Everything from its mathematical foundations to practical implementations. Learn how this battle-tested authentication mechanism secures APIs, blockchain transactions, and also digital communications. With real-world Python examples and security insights, discover why HMAC remains the gold standard for message authentication in an increasingly hostile digital landscape."
draft: false
enablecomments: true
aiDisclosure: true
---

# Insights in Plaintext: Hashing out HMAC

Continuing our journey through the cryptographic landscape in the "Insights in Plaintext" series, we're shifting gears from symmetric encryption. We'll now look into the critical world of message authentication. Part 4 brings us face-to-face with HMAC. It's a cryptographic heavyweight that's been silently securing our digital world for decades now.

While HMAC might not be the newest kid on the cryptographic block, its battle-tested reliability makes it the backbone of countless security protocols today. It plays vital role in securing API calls to protecting blockchain transactions. HMAC's elegant design continues to shine in our increasingly complex digital landscape. So grab your favorite debugging mug as we're about to dissect the inner workings of Hash-based Message Authentication Codes and understand why this seemingly simple construction remains a cornerstone of modern security architecture.

## The HMAC Origin Story

In the digital Wild West of the mid-90s, one of the top challenges in front of engineering teams was to secure online communications. Existing Message Authentication Codes (MACs) were either computationally expensive, relying on slower block ciphers, or suffered from security vulnerabilities, either ones that were already exploitable or could be in the next few years. This cryptographic conundrum called for a hero, and then in 1996 we witnessed HMAC riding into the town with guns blazing (metaphorically, of course). Born from the minds of cryptographic pioneers [Mihir Bellare](https://en.wikipedia.org/wiki/Mihir_Bellare), [Ran Canetti](https://en.wikipedia.org/wiki/Ran_Canetti), and [Hugo Krawczyk](https://en.wikipedia.org/wiki/Hugo_Krawczyk), HMAC came in with a simple yet elegant solution: provide robust security all while leveraging the speed and ubiquity of hash functions. Their groundbreaking paper, "[Keying Hash Functions for Message Authentication](https://link.springer.com/chapter/10.1007/3-540-68697-5_1)," laid the groundwork for a MAC function that was three - fast, secure, and easy to implement.

The nested hashing construction is at the core of HMACs, incorporating inner and outer padding to thwart length extension attacks and other vulnerabilities that plagued earlier MAC designs. This clever approach, formalized in [RFC 2104](https://datatracker.ietf.org/doc/html/rfc2104) in 1997, quickly propelled HMAC to the forefront of web security. It became everyone's go-to solution for protecting everything under the sun - from financial transactions to sensitive data. HMAC’s enduring popularity after all these years is a testament to its ingenious design and the foresight of its creators. They were able to recognize the need for a practical and robust authentication mechanism in the burgeoning digital age.

## HMAC Under the Microscope

Enough with the hand-waving. Let's get down to the brass tacks of how HMAC _actually_ operates. As we discussed earlier, it's all about nested hashing modules. But there's more to it than just slapping some padding on and calling it a day. The devil, as they say, is in the details ...or in this case - the hashing modules.

Let's start our discussion with the Keys. HMAC expects a key of a certain length. If your key is shorter than the block size of the underlying hash function (e.g., 64 bytes for SHA-256), then the key is padded with zeros up to that block size. If it's longer, it's first hashed down to a smaller size such that it fits in the block size. From there if it's smaller than the block size then it's padded up to the size. All of this is to make sure that we are dealing with a consistent key size, irrespective of what we started with.

Next comes the padding. We have two options at our disposal here - inner padding (`ipad`) and outer padding (`opad`). Both are derived from the key using a bitwise XOR operation with fixed constants: 0x36 for `ipad` and 0x5c for `opad`. Why these specific constants? Well, they are carefully chosen so as to have good bitwise difference properties. This helps in ensuring the security of the construction even if the underlying hash function has some weaknesses. Think of it as adding a layer of obfuscation. All of this is for one goal - making it harder for attackers to reverse-engineer the process.

```python
import hmac
import hashlib

def hmac_calculate(key, message, blocksize=64):
    """Calculate HMAC using SHA-256."""

    # Ensure key and message are bytes
    if isinstance(key, str):
        key = key.encode('utf-8')
    if isinstance(message, str):
        message = message.encode('utf-8')

    # Hash the key if it exceeds the block size
    if len(key) > blocksize:
        key = hashlib.sha256(key).digest()

    # Pad the key if it's shorter than the block size
    if len(key) < blocksize:
        key = key + b'\x00' * (blocksize - len(key))

    # Create the inner (ipad) and outer (opad) padding
    opad = bytes(x ^ 0x5c for x in key)
    ipad = bytes(x ^ 0x36 for x in key)

    # Perform inner hash
    inner_hash = hashlib.sha256(ipad + message).digest()
    # Perform outer hash
    outer_hash = hashlib.sha256(opad + inner_hash).digest()

    return outer_hash.hex()

# Example usage
key = "MySuperSecretKey"
message = "Top Secret Message"
hmac_output = hmac_calculate(key, message)
print(f"HMAC: {hmac_output}")

# Verification against Python's built-in hmac library
built_in_hmac = hmac.new(
    key.encode('utf-8'),
    message.encode('utf-8'),
    hashlib.sha256
).hexdigest()
print(f"Built-in HMAC: {built_in_hmac}")
assert hmac_output == built_in_hmac, "HMAC implementation doesn't match built-in function"

# $> Python my-hmac-py
#       HMAC: a8da02b39f6144341be7b70adda46893255c6de31cadc44b90f6c9d02fb9bbac
#       Built-in HMAC: a8da02b39f6144341be7b70adda46893255c6de31cadc44b90f6c9d02fb9bbac
```

Now, for the start of the show: the nested hashing. First, the key is XORed with the `ipad`, and then the message is concatenated to the result. This whole shebang is then hashed using the chosen hash function (SHA-256 in our example). The output of this first hash becomes the input of the second hash. For the second round, the key is XORed with the `opad`, and then the output of the first hash is concatenated to it. Finally, this is hashed again, producing the final HMAC output.

This two-step hashing process is what makes HMAC so secure. Even if an attacker finds a collision in the inner hash, they're still faced with the outer hash, which effectively acts as a one-way function protecting the secret key. Sounds simple right? It is. A simple-er yet elegant solution.

## Padding: More Than Just Fluff

As you can make out by now - the `ipad` and `opad` aren't just random voodoo. These constants (0x36 and 0x5c) are XORed with the key. Why XOR and why these specific values? Well, they're chosen such that the chances of collision the minimized, and to make sure that the inner and outer keys are different. This is done even if the original key is short or contains repeated bytes. This is very important for preventing attacks like length extension. Imagine if an attacker could append some random data to your legitimate message and then somehow calculate the new valid HMAC without knowing your key. A complete disaster, right? The padding is what helps prevent this by effectively rendering it computationally infeasible to extend the message without knowing the original key.

## HMAC Security: From Street Smarts to Mathematical Muscle

Let's now turn our attention to security. In the world of cryptography, paranoia is not just a virtue; it's a damn necessity. Over the years HMAC has proven itself to earn its reputation as a robust MAC. Let's look at both the practical security considerations and the theoretical underpinnings that make it so tough to crack.

From a practical standpoint, HMAC boasts some impressive defenses:

- **Length Extension Attacks:** Thanks to the clever use of inner and outer padding, HMAC is immune to length extension attacks. This style of attack has plauged many of the more simpler hash-based MACs. Those simple paddings effectively prevent an attacker from appending data to a message and calculating a valid MAC without knowing the secret key.
- **Timing Attacks:** Timing attacks exploit the fact that cryptographic operations can take slightly different amounts of time depending on the data being processed. At times it's mere CPU clock cycles that are enough to give away the secrets. To mitigate this, constant-time comparison functions are essential when verifying HMACs.
- **Collision Resistance:** HMAC inherits the collision resistance of the underlying hash function. So, if you're using a strong hash function like SHA-256 or, even SHA-3, you're in good shape. The topic is further addressed with the nested hashing construction, making finding collisions even harder.
- **Key Size:** The bigger, the better. A general guideline is to use a key at least as long as the output of the hash function. A longer key increases the computational effort required to brute-force it, making your HMAC more resistant to attacks.

HMAC just keeps on giving. For the true crypto nerds, HMAC's security isn't just based on empirical testing and real-world observations. We also have the mighty mathematicians backing it! As long as we can make sure that the underlying hash function behaves like a pseudorandom function (PRF), formal security proofs show that forging an HMAC is computationally infeasible. A PRF outputs values that are indistinguishable from random to an attacker, even if they know the input (except, of course, for the secret key). This PRF assumption allows us to mathematically prove the security of HMAC, giving us a high level of confidence in its overall robustness.

## HMAC in the Real World: Practical Considerations and Applications

Okay, we've covered the theoretical muscle and security properties of HMAC. But how does this all play out in practice? That's where it should shine right? Well, let's explore some practical considerations for implementation and deployment, along with a look at HMAC's wide range of applications.

**Choosing the Right Ingredients:** Selecting the appropriate hash function is crucial for HMAC's security and performance. SHA-256 and SHA-3 are generally solid choices. Goes without saying but the key management is equally critical. Store your keys securely, using robust key management systems, and always rotate them regularly. And please, for the love of all that is holy, don't hardcode your keys directly into your code!

**Key Derivation:** Where do those secret keys come from? Are they really secret? Key Derivation Functions (KDFs) are the answer. KDFs take a high-entropy input (like a password or a random seed) and churn out a strong, uniformly distributed key suitable for cryptographic use. Popular KDFs include [PBKDF2](https://en.wikipedia.org/wiki/PBKDF2#:~:text=PBKDF2%20applies%20a%20pseudorandom%20function,cryptographic%20key%20in%20subsequent%20operations.), [bcrypt](https://en.wikipedia.org/wiki/Bcrypt), [scrypt](https://en.wikipedia.org/wiki/Scrypt), and [Argon2](https://en.wikipedia.org/wiki/Argon2). Remember - the best choice is the one you choose, and then the next moment it becomes the one you didn't.

**Beyond HMAC:** While HMAC is the undisputed king of the MAC hill, it's not the only name in town, far from it. Other contenders like CMAC (Cipher-based Message Authentication Code) and [Poly1305](https://en.wikipedia.org/wiki/Poly1305) offer alternatives, each with its own strengths and weaknesses. However, HMAC's simplicity, widespread availability, and extensive vetting make it a compelling default choice for many applications.

**Advanced Attacks and Staying Ahead of the Curve:** No cryptographic system is ever impenetrable. While HMAC is generally very secure, advanced attacks like [side-channel](https://en.wikipedia.org/wiki/Side-channel_attack) attacks, exploiting information leakage through timing, power consumption, or electromagnetic emissions, can pose a threat that you will find difficult to design for. Vulnerabilities in the underlying hash function can also weaken HMAC's security. Staying up-to-date on the latest security research and best practices is paramount.

**HMAC in Action:** HMAC is ubiquitous in today's interconnected world - you may not realize it. It safeguards API authentication, ensures data integrity, secures blockchain transactions, and plays a crucial role in protocols like SSL/TLS. It's the silent guardian, the watchful protector, working tirelessly behind the scenes to keep your data safe from those pesky eavesdroppers and malicious actors.

## The Bottom Line: HMAC's Enduring Legacy in Modern Security

Our deep dive into HMAC has revealed why this elegant cryptographic construction continues to dominate the authentication landscape. Its clever combination of nested hashing and key management provides robust security. It does so while remaining remarkably simple to implement. From its mathematical foundations to practical Python implementations, we saw how HMAC effectively addresses critical security challenges. This becomes crucial in domains like API authentication, blockchain transactions, and secure communications.

Stay tuned for our next article, where we'll explore SHA-3 and its revolutionary sponge construction. We'll also see why it's a perfect complement to HMAC in building comprehensive cryptographic solutions. Until then, remember that HMAC's enduring success stems from its elegant simplicity: sometimes the most effective solutions are built with simple fundamentals rather than chasing complexity for complexity's sake.
