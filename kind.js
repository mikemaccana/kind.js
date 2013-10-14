// A simple way to get the kind of a value in JS.
// Specifically, the global/window object that a human being would logically say best matches an item

// note: we test a wide variety of ways to make an object, so jshint will warn with http://jslinterrors.com/do-not-use-a-as-a-constructor/
// This warning is expected, and cannot be disabled in the current version of jslint.

var assert = require('assert')

global.kind = function(item) {
  // Always returns same name as global objects, ie Titlecase except for undefined
  var kind = typeof(item)
  if ( kind !== 'undefined' ) {
    kind = kind.charAt(0).toUpperCase() + kind.slice(1);
  }
  if ( ( kind === 'Number' ) && ( isNaN(item) ) ) {
    kind = 'NaN'
  }
  if ( kind === 'Object' ) {
    if ( Array.isArray(item) ) {
      kind = 'Array'
    }
    if ( item instanceof Date ) {
      kind = 'Date'
    } else {
      if ( item instanceof Boolean) {
        kind = 'Boolean'
      } else {
        if ( item instanceof Number ) {
          kind = 'Number'
        } else {
          if ( item instanceof String ) {
            kind = 'String'
          }
        }
      }
    }
  }
  return kind
}

assert(kind(37) === 'Number')
assert(kind(3.14) === 'Number')
assert(kind(Math.LN2) === 'Number')
assert(kind(Infinity) === 'Number')
assert(kind(Number(1)) === 'Number')
assert(kind(new Number(1)) === 'Number')

assert(kind(NaN) === 'NaN')

assert(kind('') === 'String')
assert(kind('bla') === 'String')
assert(kind(String("abc")) === 'String')
assert(kind(new String("abc")) === 'String')

assert(kind(true) === 'Boolean')
assert(kind(false) === 'Boolean')
assert(kind(new Boolean(true)) === 'Boolean')

assert(kind(undefined) === 'undefined')

assert(kind([1, 2, 4]) === 'Array')

assert(kind({a:1}) === 'Object')

assert(kind(new Date()) === 'Date')

assert(kind(function(){}) === 'Function')
assert(kind(new Function("console.log(arguments)")) === 'Function')
assert(kind(Math.sin) === 'Function')