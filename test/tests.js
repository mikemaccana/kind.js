/*jshint multistr:true */
// Tests. Mocha/assert style. See
// http://visionmedia.github.com/mocha/
// http://nodejs.org/docs/latest/api/assert.html

var assert = require('assert');
var _ = require('../kind.js');

describe('Numbers', function(){
  it('shows number-like things as numbers', function(){
    assert(kind(37) === 'Number')
    assert(kind(3.14) === 'Number')
    assert(kind(Math.LN2) === 'Number')
    assert(kind(Infinity) === 'Number')
    assert(kind(Number(1)) === 'Number')
    assert(kind(new Number(1)) === 'Number')
  });
});

describe('NaN', function(){
  it('shows NaN as NaN', function(){
    assert(kind(NaN) === 'NaN')
  });
});

describe('Strings', function(){
  it('Shows strings as strings', function(){
    assert(kind('') === 'String')
    assert(kind('bla') === 'String')
    assert(kind(String("abc")) === 'String')
    assert(kind(new String("abc")) === 'String')
  });
});

describe('Booleans', function(){
  it('shows strings accurately', function(){
    assert(kind(true) === 'Boolean')
    assert(kind(false) === 'Boolean')
    assert(kind(new Boolean(true)) === 'Boolean')
  });
});

describe('Array', function(){
  it('shows arrays accurately', function(){
    assert(kind([1, 2, 4]) === 'Array')
  });
});

describe('Object', function(){
  it('shows objects accurately', function(){
    assert(kind({a:1}) === 'Object')
  });
});

describe('Dates', function(){
  it('shows dates accurately', function(){
    assert(kind(new Date()) === 'Date')
  });
});

describe('Function', function(){
  it('loves Functions too', function(){
    assert(kind(function(){}) === 'Function')
    assert(kind(new Function("console.log(arguments)")) === 'Function')
    assert(kind(Math.sin) === 'Function')
  });
});

describe('undefined', function(){
  it('shows undefined accurately', function(){
    assert(kind(undefined) === 'undefined')
  });
});

describe('null', function(){
  it('shows null accurately', function(){
    assert(kind(null) === 'null')
  });
});