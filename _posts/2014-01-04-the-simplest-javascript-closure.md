---
layout: minimal/post
title: "The Simplest Javascript Closure"
description: ""
category: "Misc"
tags: []
---

I think every front-end developer job-description I've ever read asked applicants to proclaim their intimate acquaintance with closures.
Understanding closures seems to be a rite of passage for javascript engineers. And so we embark:

<span style='color:rgb(189, 51, 51);'>A closure is just a javascript function's awareness of the scope in which it was defined, and the ability to access the data, ie. variables in that scope.</span>

This is useful because when this function is executed in the future, often in a different scope as a callback, it will still be able to 'reach back' and access variables declared in its 'parent' scope.

A javascript function is like a pigeon. It always knows where home is.

Example:

```javascript
    // outer scope
    var home = 'Moscow';

    function whereIsHome() {
        // inner scope
        alert(home);
    }

    whereIsHome();    // alerts 1
```
Why will this work? How can `whereIsHome` alert the value of `home` even though `home` is not in `whereIsHome`'s scope, ie. not defined inside `whereIsHome`.

The reason is because when any function is defined in javascript it keeps a reference to the data available in its outer scope. This is referred to as a closure.
Since 'var home' is defined in this 'outer scope' `whereIsHome` is able to access it through its closure no matter where or when it is called.

When `whereIsHome` is finally executed it will alert the value of `home` at that particular moment in time.
`home`'s value may have changed since `whereIsHome` was defined.

Let's see how this can happen:

```javascript
    // outer scope
    var home = 'Moscow'

    function moveToBoston() {
        home = 'Boston';
    }

    function whereIsHome() {
        alert(home);
    }

    whereIsHome();  // alerts Moscow 
    moveToBoston(); // changes the value of home!
    whereIsHome();  // alerts Boston
```

Here we have two closures! When both functions were defined they kept a reference to the same 'outer scope'.

Both these functions are sharing state via the closures created when they were defined.

You can do some really cool stuff with this effect.

That's for later.


To recap:
A closure is the scope in which a function is defined, referenced by that function.
Whenever this function is called at a future time it can access the data in this scope.
This is useful because javascript functions can be passed as parameters and may find themselves being called in some strange places.

But they never forget where they came from.
