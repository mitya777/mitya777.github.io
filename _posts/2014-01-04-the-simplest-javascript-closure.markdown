---
layout: minimal/post
title: "The Simplest Javascript Closure"
description: ""
category: "Misc"
tags: []
---

Understanding closures seems to be a rite of passage for javascript engineers.
Here is the simplest closure:

<span style='color:rgb(189, 51, 51);'>
    A closure is a function along with the data contained by the scope in which that function was defined.
</span>

A closure is created whenever a javascript function is created.
The function keeps a reference to its parent scope so that it is able to access other variables and functions defined in that scope.

    // parent scope
    var home = 'Moscow';

    function whereIsHome() {
        // function scope
        alert(home);
    }

    whereIsHome();    // alerts 'Moscow'

Here the variable `home` is outside of `whereIsHome`'s *function scope*. 

`whereIsHome` keeps a reference to its *parent scope*, the scope where it was defined.

When `whereIsHome` is called, it can access `home`.

