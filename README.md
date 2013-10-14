# kind.js

## Tells you what something is, the same way you'd describe it.

kind.js returns the kind of a JS object (the same as what a human would).

[![Build Status](https://secure.travis-ci.org/mikemaccana/kind.js.png?branch=master)](https://travis-ci.org/mikemaccana/kind.js)

## What sort of thing does kind do?

### Numbers

    assert(kind(37) === 'Number')
    assert(kind(3.14) === 'Number')
    assert(kind(Math.LN2) === 'Number')
    assert(kind(Infinity) === 'Number')
    assert(kind(Number(1)) === 'Number')
    assert(kind(new Number(1)) === 'Number')

### Nan

    assert(kind(NaN) === 'NaN')

### Strings

    assert(kind('') === 'String')
    assert(kind('bla') === 'String')
    assert(kind(String("abc")) === 'String')
    assert(kind(new String("abc")) === 'String')


### Booleans

    assert(kind(true) === 'Boolean')
    assert(kind(false) === 'Boolean')
    assert(kind(new Boolean(true)) === 'Boolean')

### Arrays

    assert(kind([1, 2, 4]) === 'Array')

### Objects

    assert(kind({a:1}) === 'Object')

### Dates

    assert(kind(new Date()) === 'Date')

### Function

    assert(kind(function(){}) === 'Function')
    assert(kind(new Function("console.log(arguments)")) === 'Function')
    assert(kind(Math.sin) === 'Function')


### undefined

    assert(kind(undefined) === 'undefined')

## Usage

Kind is a UMD module (compatible with both AMD and CommonJS).  **kind grabs the global 'kind'**, so you can call it easily.

## Unit tests

    npm install -g mocha
    mocha