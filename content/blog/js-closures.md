---
title: "Demystifying JavaScript Closures"
date: 2019-12-01T01:10:46+05:30
category: "JavaScript"
external_link: "https://medium.com/cactus-techblog/demystifying-javascript-closures-2628c807bf18"
external_site_name: "Cactus Tech Blog"
external_site_link: "https://medium.com/cactus-techblog"
page_slug: "/blog/javascript-closures"
---

Demystifying JavaScript Closures
================================

![captionless image](https://miro.medium.com/v2/resize:fit:4000/format:webp/1*3ahzyT4QAHsX_oVoTDv__w.jpeg)

[Reference](https://medium.com/cactus-techblog/demystifying-javascript-closures-2628c807bf18)

by [Mayank Raj](https://medium.com/@mayank9856?source=post_page---byline--2628c807bf18---------------------------------------)

Follow





JavaScript as a language is easy to get started with but difficult to master. This is partly owing to the fact that you can get up and running with a fairly complex application built with JS and not know in detail the workings of it and somewhat because once you have a functional system there is not much motivation to go back and break it down. Hoisting, Lexical Scopes, Closures, `this` and even IIFFE are not well understood by developers. Understanding concepts like these not only make the language interesting but also explain a lot of weird - “Oh this works!! I don't know why or how, but it does!”. Let's break down Closures today.

A write up on Closure is not complete without the line, ‘you have already used them before’, so its only fitting that I start with it as well.

Understanding Lexical Scopes
============================

A good point to start with would be understanding what scopes actually are. Scope, at the most basic level is exactly what it sounds like — scope of the variables. It’s how the compiler answers the following question -

_I have two variable_ `_foo_` _and_ `_bar_`_, if someone (function, assignment, etc.) asks for it should I give it to the requester? Just to break it to you, yes JavaScript is a compiled language. It all happens at run time and not ahead of time like in the case of C++, Java, etc. so it's not very evident. Hoisting is one of the proof of this. Anyways, getting back to the topic, a compiler should know where a variable was declared and who has access to that variable. Apart from this being the basic requirement of a program, it is also useful for garbage collecting (once I know no one can access a variable, I can safely delete it). Everything in JS is defined under a scope. That scope can either be of global execution context or that of a function. Every new scope is a bubble inside of its parent scope. Now the crucial part is that each scope has access to everything declared in itself and also in the scope of its parents, ancestors etc. The first place to look for is the local scope, then one step above and so on. Let's see it in action._

We’ll break down the execution of the above example when we call `greet`. There are three scopes in play here - Global execution, that of function `greet` and of function `printGreet`. The flow of how variables are discovered is as follows. When the execution comes to line 6, there are three variables that are called for here.

1.  `heyString`: There is no declaration found in the local scope i.e. that of the function `printGreet`. We move to an upper bubble and into the scope of the function `greet`. Voila, we got the reference of the variable here.
2.  `name`: Local scope of `printGreet` doesn't have any references of the variable, we go a step above and we get the reference in the function `greet` again. This time it was an argument that was passed to the function.
3.  `greetingEmoji`: The story repeats here as well but we don't find any reference in the scope of the function `greet` as well. We know what we have to do and move up in the scope bubble. We are now in the Global Execution scope and here we find a reference of the variable we were looking for. Thus declaring scope is in the hands of the author. It depends on where you declare something i.e. the scope of the variable, the bubble that it is kept in is dependent on the position of its declaration in the program. The nesting of scopes is a byproduct of this functionality. This is what is termed as `lexical scope`.

Closure
=======

Now on to the main business. Closure can be summed up as:

The ability of a function to hold a reference to it’s Lexical scope even when the execution is happening outside it. With a new profound knowledge of Lexical Scopes and the above line, have a look at the below code and try to guess the final output and reason it.

Let’s make our observations loud and clear:

1.  A function `customGreet` accepts an argument which is assigned to a local variable `customGreetingPrefix`. It also has a declaration of a function which is eventually returned.
2.  This declaration is of a function `printGreet` which accepts an argument `name` and prints a greeting message.
3.  We execute the function `customGreet` twice at line 8 and 9. With that we store the response in the respective variables.
4.  The response itself is a function, thus these two variables now hold a reference to a function (i.e. `printGreet`)
5.  These two functions are then executed. If you notice, the function `printGreet` was declared in the lexical scope of `customGreet`. But when we finally execute it at line 10 and 11, the lexical scopes have now changed, it is executed in the parent of `customGreet`. So going by the theory that access to a variable is only successful if it is present in either the current scope or any of the parent scope, we can say that the function `printGreet` would not be able to access `customGreetingPrefix`. But to our surprise, it can access it! What you see my friend, is closure in pay here. By definition, a function holds the reference to it's scope. So in our case, the function `printGreet` holds the reference to the lexical scope of `customGreet`, which, (you guessed it) brings the reference of `customGreetingPrefix` with it (technically also of `greetingPrefix`). Thus when we create the scope of `customGreet` at line 8 and 9, the two bubbles are preserved by the JS engine as it knows that `printGreet` may ask for anything in that scope at any point later. Thus we get the following output.

```
...
greetWithHey('Tom');     // Hey Tom.
greetWithHello('Jerry'); // Hello Jerry.
```

Now that you know the signature of Closure, they are not very hard to find. Every JS module that you use adopts closure in some form or the other. Consider the following example.

```
function theBestModule(config) {
    var propertyA = config['propertyA'];
    var propertyB = config['propertyB'];
    var propertyC = config['propertyC'];
    def combinePropertyAandB() {
        return (propertyA + propertyB);
    }
    def combinePropertyAandC() {
        return (propertyA + propertyC);
    }
    return {
        'combineAandB': combinePropertyAandB,
        'combineAandC': combinePropertyAandC
    }
}
myModulesConfig = { /* ... */ }
myModule = theBestModule(myModulesConfig);
console.log(myModule.combineAandB) // TADA, we found closure
console.log(myModule.combineAandC) // ...yet again. Not that difficult huh.
```

Virtually all modules in JS accept a set of configuration in some form or the another. Internally, they set these configurations to default and then override it if the user passed something custom. If you notice, these configurations are accessed by methods that the module (a function to be precise) exposes. You don’t have access to these configurations because the lexical scope is not available to you but the functions declared inside the module hold the reference.

With all the knowledge that you have collected, I’ll leave you with the following program. Try to guess what the output would be at each log statement and reason it.

```
for(var i = 0; i<5; i++){
    setTimeout(() => console.log(i), 0); // ?
}
```

Conclusion
==========

Lexical scope is not unique to above examples or to some special cases. It comes into play every time you define a function or create a code block. Even a plain and simple function call has closure over its parent scope. It just becomes more evident in some cases and can quickly become confusing to developers.

You don’t have to know it to use it but the knowledge of the pattern enables you to effectively use it to your benefit. In many cases, it becomes easy to reason why something is happening the way it is. Closure can help you write clean code by best utilizing resources.