---
layout: minimal/post
title: "The Simplest Javascript Closure"
description: ""
category: "Misc"
tags: []
---

Understanding javascript closures has become a right of passage for javascript developers. And so I embark.

```javascript
    var x = 0;
    function showNum() {
        alert(x);
    }

    showNum();    // 0
```

A function's closure is the reference to the scope in which that function is defined.
The scope in which `showNum` is defined is 'closed over', creating a 'closure' containing both `x` and `showNum`.

When `showNum` is called, it is asked to alert the value of `x`.
But `x` is not defined anywhere inside `showNum`. How can `showNum` display `x`'s value?

`showNum` knows because it holds a reference to it's closure, ie. to it's defining scope. When it searches that 'closed-over' scope it finds `x` and can display it!

To review:
A closure is the scope in which a function is defined.
The function keeps a reference to this 'closed-over' scope so it can reference the data contained in it when it is called at a future time.


