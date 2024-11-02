---
title: "JWT Revocation: Taming the Stateless Beast"
date: 2024-05-02T00:00:00+05:30
basecolor: "#4285f4"
author: "Mayank Raj"
enablecomments: true
category: JWT
keywords: "JWT, JSON Web Token, revocation, stateless, authentication, security, authorization, OAuth 2.0, blacklisting, token introspection, refresh token, WebSockets, SSE, scaling, enterprise, architecture"
bgimage: jwt-revocation-strategies
page_slug: "/blog/jwt-revocation-strategies"
description: "Let's explore the facinating world of JWT revocation - the strategies in play in the stateless environments, comparing their pros, cons, security implications, and also the cost considerations. From blacklisting to push-based revocation, learn how to choose the right approach for your needs."
draft: false
---

# JWT Revocation: When "Stateless" Becomes a Swear Word

Let's just admit it, we've all been seduced by the siren song of stateless authentication with JSON Web Tokens (JWT). No more dealing with sticky sessions, no more multiple database lookups for every request… bliss,right? That's until you need to revoke a token. That's when it feels less like bliss and more like stepping on a LEGO brick ...barefoot ..at 3 AM. The promise of statelessness, while alluring, introduces a unique challenge no one asked for: how do you effectively revoke access when the very nature of your architecture eschews persistent state?

In a much more comfortable, traditional, stateful world, revocation is relatively straightforward. You simply invalidate a session on the server, and boom, the user is locked out. But in the ephemeral realm of JWTs, things get a just a little bit trickier. The token is self contained, i.e. it has all the information needed for authentication. This means the server doesn't inherently "remember" who has access. So, how do we wrestle with this beast of revocation in a stateless world? Let's dive into the mosh pit of strategies, evaluate them and see what comes out alive.

## The Usual Suspects (Standard Approaches)

- **Blacklisting:** This is the "if it ain't broke, don't fix it" approach, albeit with some duct tape and good old-trusty WD-40. You start by maintaining a list of revoked tokens, often in a database or distributed cache. Then you check against it on every single request. Simple in concept, but a potential scalability nightmare. Imagine the latency implications of checking against a list containing thousands of revoked tokens, if not millions. Furthermore, managing this ever-growing list introduces its own set of operational headaches. You also have to flush the _expired_ token from this list from time to time. All in all, While suitable for smaller applications with a relatively low revocation rates, blacklisting quickly becomes unwieldy in enterprise environments. From a security standpoint, it's reactive rather than proactive which involves dealing with the aftermath of a potential breach instead of preventing it in real-time. Furthermore, a failure of system leads to token being valid, which means it's not failsafe in any sizable production environment.

- **Short-lived Tokens:** This strategy embraces the ephemeral nature of JWTs and cranks it all the way up to eleven. By issuing tokens with very short expiry times (e.g., a few seconds to minutes), the need for explicit revocation diminishes. Compromised tokens become less of a threat because they expire quickly anyway. This time-to-live can be tuned according to the use case and what time seems acceptable for a stray token to be active. However, this introduces the overhead on the systems wherein frequent token refreshes increases the load on your authorization servers. It's a delicate balancing act, just a tad bit simpler than trying to find the perfect water temperature in a shared shower. Security-wise, it minimizes the window of opportunity for attackers, but requires careful consideration of the refresh token mechanism itself. If you did not guess it already - this mechanism itself becomes a new attack vector if not implemented securely.

## Scaling Shenanigans

- **Token Introspection:** Shifting gears from client-side checks to a more predictable server-side validation, token introspection involves querying an authorization server to determine a token's validity. Instead of maintaining a cumbersome blacklist, the app servers simply ask the authorization server, "Is this token still good?". This centralizes revocation management while also providing real-time validation. On the flip side, it places a significant burden on the authorization server. Think of it as hiring a highly efficient but also super expensive bouncer for your API party – they'll keep the riff-raff out, but you'll need deep pockets to keep them on the payroll. This approach is better suited for scenarios where real-time revocation and centralized control are paramount to everything else.

- **Refresh Token Rotation:** This strategy adds a layer of indirection by introducing two sets of tokens - refresh and access tokens. Access tokens remain short-lived, while refresh tokens have a relatively longer lifespan. When an access token expires, the client uses the already issued refresh token to obtain a new access token. This can also be considered as refreshing a token pair, hence _refresh token_. More importantly, the old refresh token is invalidated during this process. This sets up mechanisms for indirect revocation i.e. if a refresh token is compromised, only future access is blocked thus limiting the blast radius. It's like changing the locks after losing your keys – a bit of a hassle, but seems reasonable than having your house ransacked. This approach strikes a good balance between security and usability, while limiting the impact of compromised tokens without constantly interrupting user sessions.

- **Database Lookup (with Caching):** While seemingly contradictory to the stateless paradigm we started with, database lookups, when combined with very aggressive caching strategies, can provide a robust and performant revocation solution. Token's validity is stored in a database, but a distributed cache like Redis acts as a first line of defense, significantly reducing database hits. This approach offers a good balance between security and performance, providing real-time revocation without stressing out your database. Think of it as having a well-organized cheat sheet for your exam – much faster than flipping through the entire textbook and gives you the answers you need. However, this requires careful consideration of cache invalidation strategies to ensure consistency between the cache and the database. The value of still using JWT here lies in the fact that the tokens have other metadata like user details, preferences etc which reduce DB roundtrips.

## Code (Example: Refresh Token Rotation in Go)

```go
// ...Import packages

// Define token claims
type Claims struct {
	UserID uint `json:"user_id"`
	jwt.RegisteredClaims
}

func generateRefreshToken(userID uint, secretKey []byte) (refreshToken string, err error) {
	// Start by creating refresh token
	refreshClaims := &Claims{
		UserID: userID,
		RegisteredClaims: jwt.RegisteredClaims{
			ExpiresAt: jwt.NewNumericDate(time.Now().Add(7 * 24 * time.Hour)),
			Issuer:    "my_important_issuer",
			ID:        "unique_id_for_tracking",
            // ...other claims
		},
	}
	refreshToken, err = jwt.NewWithClaims(jwt.SigningMethodHS256, refreshClaims).SignedString(secretKey)
	return
}

func main() {
	secretKey := []byte("my_super_secret_key")
	userID := uint(123)

	refreshToken, err := generateRefreshToken(userID, secretKey)
	if err != nil {
		fmt.Println("Error generating token:", err)
		return
	}
	fmt.Println("Refresh Token:", refreshToken)

	// ... (Code to store and invalidate refresh tokens would go here)
}
```

## Pushing the Boundaries: Emerging Approaches

- **Push-based Revocation:** Cue with WebSockets. Imagine proactively pushing revocation notifications to your services instead of constantly querying from the clients. This minimizes the reliance on checking lists or managing querying endpoints, offering near real-time revocation. The approach is still relatively new and requiring more sophisticated infrastructure, it holds significant promises in terms of enhanced security and performance.

  - **WebSockets:** Setup a persistent, bi-directional connection between your authorization server and your resource servers. When a token is revoked, the authorization server pushes a notification over the WebSocket in near-real time. This notification instruct the resource servers to invalidate the token in their local cache. This approach provides the most responsive revocation mechanism, significantly reducing the window of vulnerability. However, it requires managing persistent connections, a cache on the resource servers and also handling of potential disruptions.

  - **Server-Sent Events (SSE):** We don't really need a bi-directional communication channel and this is where SSE comes in. It's a lighter-weight alternative to WebSockets. SSE allows the authorization server to push updates to resource servers. This is ideal for scenarios where real-time revocation is desired, but the complexity of WebSockets is not called for. SSE provides a unidirectional communication channel, making it simpler to implement, maintain and debug.

  - **Challenges:** Implementing a push-based revocation introduces complexities related to scalability as well as reliability. Your messaging infrastructure should be able to handle the volume of revocation events, and resource servers need to process these events efficiently. Robust error handling and retry mechanisms are essential to account for the inevitable network interruptions. While not a trivial undertaking, the potential benefits in terms of responsiveness and reduced latency make this an area worth exploring for applications demanding high-security and high-performance applications. Imagine the possibilities!

## The Good, the Bad, and the Ugly (Trade-offs) -

| Strategy                       | Pros                                          | Cons                                          | Security Implications                                                     |
| ------------------------------ | --------------------------------------------- | --------------------------------------------- | ------------------------------------------------------------------------- |
| Blacklisting                   | Simple to implement                           | Doesn't scale well, potential latency issues  | Reactive, relies on identifying compromised tokens after potential misuse |
| Short-lived Tokens             | Reduces impact of compromised tokens          | Increased token refresh overhead              | Minimizes attack window but doesn't eliminate risk                        |
| Token Introspection            | Centralized revocation management             | Increased load on authorization server        | Real-time validation, reduces risk of stale data                          |
| Refresh Token Rotation         | Limits damage from compromised refresh tokens | Requires careful management of refresh tokens | Good balance, limits damage without constant interruptions                |
| Database Lookup (with caching) | Balance of security and performance           | Relies on caching infrastructure              | Effective with proper cache invalidation                                  |

## Choosing the Right Strategy: A Balancing Act

Choosing the right JWT revocation strategy is not a decision for the faint of heart. It requires carefully balancing security requirements, performance goals, all while staying within the budget constraints. Consider the following factors:

- **Scale:** How many users and tokens will your system handle?
- **Security Requirements:** How sensitive is the data you are protecting?
- **Performance Goals:** What are your acceptable latency targets?
- **Budget:** How much can you invest in revocation infrastructure?
- **Development Resources:** What expertise and resources do you have available?

For smaller applications with less stringent security requirements to deal with, short-lived tokens or blacklisting might be enough. For much larger, enterprise-level applications with high-security needs, token introspection, refresh token rotation, or database lookup with caching are more suitable. Push-based revocation is an emerging approach which is gaining popularity because it offers promising performance benefits but requires more specialized expertise and infrastructure.

## Bottom Line

Sadly but to no one's surprise - there's no silver bullet for JWT revocation in stateless environments. The best approach depends on a nuanced understanding of your specific needs and scale of operations. Carefully consider the trade-offs, balancing security requirements, performance goals, and budget constraints. Make sure that you get creative and combine approaches – a hybrid strategy might be the perfect fit. And remember, a well-designed revocation strategy can be the difference between a secure system and a security nightmare.

What's your go-to strategy? Share your thoughts and experiences. Let's learn from each other. I'm especially interested in hearing from folks who've implemented push-based revocation in production!
