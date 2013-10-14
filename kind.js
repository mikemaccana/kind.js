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
  this.kind = function(item) {
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
      } else {
        if ( item === null) {
          kind = 'null'
        } else {
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
      }

    }
    return kind
  }

  // People should generally use the global 'kind', but since 'var _ = require('kind')' can freak people out
  // return the kind function when the module is imported as well.
  return this.kind

}));