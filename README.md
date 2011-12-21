Node C++ module boilerplate
===========================

This project is a gentle introduction to writing Node.js module in C++
I aim for the minimun amount of code necessary to build a working node module.

What does it do?
----------------

The closest equivalent to this C++ Node.js module is :

```javascript
function HelloWorld() {
    // Implicit "return this;"
}

HelloWorld.prototype.say = function say() {
    return new String("Hello world!");
};
```

Requirements
------------

* g++ (tested with v4.2)
* node-waf *
* node headers (node.h) *
* v8 headers (v8.h) *
* some C++ basic knowledge

\* Comes with Node.js

How to build
------------

Clone this repository, cd to it, then configure

    $ node-waf configure

build

    $ node-waf

and test

    $ node test.js

You should see this:

    HelloWorld // Name of the constructor
    Hello world! // Return of HelloWorld.prototype.say

Read more
---------

* [V8 JavaScript Engine: Embedder's Guide](http://code.google.com/apis/v8/embed.html)
* [V8 API Reference Guide](http://izs.me/v8-docs/main.html)
* [Node Addons](http://nodejs.org/docs/latest/api/addons.html)
* [Man node-waf](http://dev.man-online.org/man1/node-waf/)
* [Waf Source, book and demos](http://code.google.com/p/waf/downloads/detail?name=waf-1.5.16.tar.bz2)
