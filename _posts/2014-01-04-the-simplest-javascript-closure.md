---
layout: minimal/post
title: "The Simplest Javascript Closure"
description: ""
category: "Misc"
tags: []
---

Understanding javascript closures has become a right of passage for javascript developers. And so I embark on this rite:

A closure is when a function keeps a reference to the scope in which that function was defined.

This is useful so that when this function is executed, it can access variables declared outside itself.

Example:

```javascript
    // outer scope
    var x = 1;

    function funcShowNum() {
        // inner scope
        alert(x);
    }

    funcShowNum();    // alerts 1
```
Why will this work? How can funcShowNum alert the value of x even though x is not in funcShowNum's scope, ie. not defined inside funcShowNum.

The reason is because when any function is defined in javascript it holds on to all the data available in its outer scope. This is referred to as a closure.
Since 'var x' is defined in this 'outer' scope `funcShowNum` is able to access it.

To recap:
A closure is the scope in which a function is defined, referenced by that function.
Whenever this function is called at a future time it can access the data in this scope.
