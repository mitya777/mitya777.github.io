---
layout: post
title: "What is a hash?"
description: ""
category: "bitcoin"
tags: [bitcoin, cryptography, software-engineering]
---
{% include JB/setup %}

<span style='color:rgb(189, 51, 51);'>
    A hash function is a mathematical function which takes any number and converts it to another number of some fixed size.
</span>

We could have a function which takes a 1,2,3,..., or n digit number and always converts it to a 2 digit number.

A simple example is the 'modulus 100' function:
    
    function mod_100(x) {
        return x % 100;
    }

    mod_100( 1 ) // => 01 ie. 1
    mod_100( 42 ) // => 42
    mod_100( 888 ) // => 88
    mod_100( 7777 ) // => 77

Regardless of the input's length, the modulus function always returns a two digit number.


A more sophisticated example of a hash function is the MD5 function which converts all number inputs to a 128-bit binary or the equivalent 32-digit hexadecimal number. 

Computers represent data (numbers, text, audio, video) as binary numbers 0's and 1's. 
The MD5 and other hash functions allow us to map these long binary file encodings, regardless of length, to much shorter 128-bit (binary) or 32-digit (hex) strings.

    MD5( Declaration of Independence ) // => ca3b0dcdc926ed4a8e60cfcad676915e (hexadecimal)

The above example shows that the Declaration of Independence hashes to the string 'ca3b0dcdc926ed4a8e60cfcad676915e'. 
If we were to change one word of the Declaration it would map to a totally different number.
'ca3b0dcdc926ed4a8e60cfcad676915e' can be considered a kind of math-based fingerprint of the text of the Declaration of Independence.

This is useful because, among other things, we can compare the MD5 fingerprints of texts, or video files, or any large files, instead of comparing the actual files.

So let's say we always wanted to have the latest version of a large video file.
We could periodically download the much smaller MD5 hash of that file and compare it to the hash of the file on our local system.
This wouls save a lot of network bandwidth, and if they are the same we could be confident that the file hadn't changed and we still had the latest version.
If the hash came back changed, we could then go ahead and download the updated video.
