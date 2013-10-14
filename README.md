# kind.js

## Tells you what something is, the same way you'd describe it.

kind.js returns the kind of a JS object, the way same a human being would.

Specifically, kind(item) returns the global object that best matches that item.

So kind(NaN) is 'NaN', kind([1, 2, 3]) is 'Array', and even Numbers, Functions etc created in odd ways are still 'Number', 'Function', etc.

[![Build Status](https://secure.travis-ci.org/mikemaccana/kind.js.png?branch=master)](https://travis-ci.org/mikemaccana/kind.js)

## What sort of thing does kind do?

### Numbers

    kind(37) === 'Number'
    kind(3.14) === 'Number'
    kind(Math.LN2) === 'Number'
    kind(Infinity) === 'Number'
    kind(Number(1)) === 'Number'
    kind(new Number(1)) === 'Number'

### NaN

    kind(NaN) === 'NaN'

### Strings

    kind('' === 'String'
    kind('bla' === 'String'
    kind(String("abc")) === 'String'
    kind(new String("abc")) === 'String'


### Booleans

    kind(true) === 'Boolean'
    kind(false) === 'Boolean'
    kind(new Boolean(true)) === 'Boolean'

### Arrays

    kind([1, 2, 4]) === 'Array'

### Objects

    kind({a:1}) === 'Object'

### Dates

    kind(new Date()) === 'Date'

### Functions

    kind(function(){}) === 'Function'
    kind(new Function("console.log(arguments)")) === 'Function'
    kind(Math.sin) === 'Function'

### undefined

    kind(undefined) === 'undefined'

## Usage

Kind is a UMD module (compatible with both AMD and CommonJS).  **kind grabs the global 'kind'**, so you can call it easily.

## Unit tests

    npm install -g mocha
    mocha