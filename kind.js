// kind.JS
// I'm a UMD module (works in RequireJS and CommonJS-like environments)
// See https://github.com/umdjs
(function (root, factory) {
  if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(factory);
  } else {
    // Browser globals (root is window)
    root.returnExports = factory();
  }
}(this, function () {

  function getPrototype(item) {
    return Object.prototype.toString.call(item).slice(8, -1)
  }

  this.kind = function(item) {
    var kind, Undefined, Class

    if (item === null ) {
      kind = 'null'
    } else {
      if ( item === Undefined ) {
        kind = 'undefined'
      } else {
        var prototype = getPrototype(item)
        if ( ( prototype === 'Number' ) && isNaN(item) ) {
          kind = 'NaN'
        } else {
          kind = prototype
        }
      }
    }
    return kind
  }

  // People should generally use the global 'kind', but since 'var _ = require('kind')' can freak people out
  // return the kind function when the module is imported as well.
  return this.kind

}));