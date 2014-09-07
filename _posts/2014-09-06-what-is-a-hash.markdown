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
    
    function mod100(x) {
        return x % 100;
    }

    mod100( 1 ) // => 01 ie. 1
    mod100( 42 ) // => 42
    mod100( 888 ) // => 88
    mod100( 7777 ) // => 77

Regardless of the input's length the modulus function always returns a two digit number.


A more sophisticated example of a hash function is the MD5 function which converts all number inputs to a 128-bit binary number (or 32-digit in hexadecimal). 

Computers represent data (numbers, text, audio, video) as binary numbers, 0's and 1's. 
The MD5 and other hash functions allow us to map these long binary file encodings, regardless of length, to 32-digit hexadecimal strings.

    MD5( Declaration of Independence ) // => ca3b0dcdc926ed4a8e60cfcad676915e (hexadecimal)

The above example shows that the Declaration of Independence (almost 10,000 characters and about 20,000 hex digits) hashes to the much shorter string 'ca3b0dcdc926ed4a8e60cfcad676915e'. 

<span style='color:rgb(189, 51, 51);'>
    The hash 'ca3b0dcdc926ed4a8e60cfcad676915e' can be considered a kind of math-based fingerprint of the text of the Declaration of Independence because if we were to change one word of the Declaration it would map to a totally different number.
</span>

One, among many, ways this is useful is that we can compare the MD5 fingerprints of texts, or video files, or any large files, instead of comparing the actual files.

Imagine a scenario where we always wanted to have the latest version of a large video file.
We could periodically download the video file and check whether it had changed or not.
But if the file didn't change often this would mean we would keep downloading the same file over and over only to discard it upon finding it is identical to what we have on our local system.

A better solution is to periodically download the much smaller MD5 hash of the remote video file and compare it to the hash of our local video file.
This would save a lot of unnecessary network bandwidth. If the hash comes back the same we can be confident that the file hasn't changed and we still have the latest version.

If the hash came back changed it would signal the video file had been updated and we could then go ahead and download it.
