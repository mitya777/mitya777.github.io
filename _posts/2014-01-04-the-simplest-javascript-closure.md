---
layout: minimal/post
title: "The Simplest Javascript Closure"
description: ""
category: "Misc"
tags: []
---

Understanding javascript closures has become a right of passage for javascript developers. And so I embark on this rite:

A function's closure is the scope which contains that function's definition.

```javascript
    // outer scope
    var x = 0;

    function showNum() {
        // inner scope
        alert(x);
    }

    showNum();    // 0
```

When `showNum` is defined it also gets a reference to the outer scope in which it was defined. Its parent scope.
This scope which contains `showNum`'s definition also contains `x`. This is a closure.

When `showNum` is called, it is asked to alert the value of `x`.
But `x` is not defined anywhere inside `showNum`.

`showNum` can still display the value of `x` because it holds a reference to the closure, ie. to it's defining scope.
When it searches that 'closed-over' scope it finds `x` and can display it!

To recap:
A closure is the scope in which a function is defined.
Whenever a function is called at a future time it can access the data in this scope.


