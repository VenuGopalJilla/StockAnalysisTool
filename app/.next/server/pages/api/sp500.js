(function() {
var exports = {};
exports.id = "pages/api/sp500";
exports.ids = ["pages/api/sp500"];
exports.modules = {

/***/ "./pages/api/sp500.js":
/*!****************************!*\
  !*** ./pages/api/sp500.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const underscore = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore-node.cjs");

const axios = __webpack_require__(/*! axios */ "axios");

/* harmony default export */ __webpack_exports__["default"] = ((req, res, next) => {
  try {
    const sp500URL = "https://raw.githubusercontent.com/saikr789/stock-analysis-tool-1011/master/Data/sp500.csv";
    axios.get(sp500URL).then(s => {
      if (s.status === 200) {
        let sp500details = [];
        let rows = s.data.split("\n");
        const header = rows[0].split(",");

        for (let i = 1; i < rows.length; i++) {
          const row = rows[i];
          const cols = row.split(",");
          var result = cols.reduce(function (result, field, index) {
            result[header[index].replace(/(\r\n|\n|\r)/gm, "")] = field.replace(/(\r\n|\n|\r)/gm, "");
            return result;
          }, {});
          sp500details.push(result);
        }

        res.send(sp500details);
      } else {
        res.status(404).send({
          error: "error"
        });
      }
    }).catch(error => {
      console.log(error);
      res.status(404).send({
        error: "error"
      });
    });
  } catch (error) {
    console.log(error);
    res.status(404).send({
      error: "error"
    });
  }
});

/***/ }),

/***/ "./node_modules/underscore/underscore-node-f.cjs":
/*!*******************************************************!*\
  !*** ./node_modules/underscore/underscore-node-f.cjs ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports) {

//     Underscore.js 1.13.1
//     https://underscorejs.org
//     (c) 2009-2021 Jeremy Ashkenas, Julian Gonggrijp, and DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

Object.defineProperty(exports, "__esModule", ({ value: true }));

// Current version.
var VERSION = '1.13.1';

// Establish the root object, `window` (`self`) in the browser, `global`
// on the server, or `this` in some virtual machines. We use `self`
// instead of `window` for `WebWorker` support.
var root = typeof self == 'object' && self.self === self && self ||
          typeof global == 'object' && global.global === global && global ||
          Function('return this')() ||
          {};

// Save bytes in the minified (but not gzipped) version:
var ArrayProto = Array.prototype, ObjProto = Object.prototype;
var SymbolProto = typeof Symbol !== 'undefined' ? Symbol.prototype : null;

// Create quick reference variables for speed access to core prototypes.
var push = ArrayProto.push,
    slice = ArrayProto.slice,
    toString = ObjProto.toString,
    hasOwnProperty = ObjProto.hasOwnProperty;

// Modern feature detection.
var supportsArrayBuffer = typeof ArrayBuffer !== 'undefined',
    supportsDataView = typeof DataView !== 'undefined';

// All **ECMAScript 5+** native function implementations that we hope to use
// are declared here.
var nativeIsArray = Array.isArray,
    nativeKeys = Object.keys,
    nativeCreate = Object.create,
    nativeIsView = supportsArrayBuffer && ArrayBuffer.isView;

// Create references to these builtin functions because we override them.
var _isNaN = isNaN,
    _isFinite = isFinite;

// Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
  'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

// The largest integer that can be represented exactly.
var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;

// Some functions take a variable number of arguments, or a few expected
// arguments at the beginning and then a variable number of values to operate
// on. This helper accumulates all remaining arguments past the function’s
// argument length (or an explicit `startIndex`), into an array that becomes
// the last argument. Similar to ES6’s "rest parameter".
function restArguments(func, startIndex) {
  startIndex = startIndex == null ? func.length - 1 : +startIndex;
  return function() {
    var length = Math.max(arguments.length - startIndex, 0),
        rest = Array(length),
        index = 0;
    for (; index < length; index++) {
      rest[index] = arguments[index + startIndex];
    }
    switch (startIndex) {
      case 0: return func.call(this, rest);
      case 1: return func.call(this, arguments[0], rest);
      case 2: return func.call(this, arguments[0], arguments[1], rest);
    }
    var args = Array(startIndex + 1);
    for (index = 0; index < startIndex; index++) {
      args[index] = arguments[index];
    }
    args[startIndex] = rest;
    return func.apply(this, args);
  };
}

// Is a given variable an object?
function isObject(obj) {
  var type = typeof obj;
  return type === 'function' || type === 'object' && !!obj;
}

// Is a given value equal to null?
function isNull(obj) {
  return obj === null;
}

// Is a given variable undefined?
function isUndefined(obj) {
  return obj === void 0;
}

// Is a given value a boolean?
function isBoolean(obj) {
  return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
}

// Is a given value a DOM element?
function isElement(obj) {
  return !!(obj && obj.nodeType === 1);
}

// Internal function for creating a `toString`-based type tester.
function tagTester(name) {
  var tag = '[object ' + name + ']';
  return function(obj) {
    return toString.call(obj) === tag;
  };
}

var isString = tagTester('String');

var isNumber = tagTester('Number');

var isDate = tagTester('Date');

var isRegExp = tagTester('RegExp');

var isError = tagTester('Error');

var isSymbol = tagTester('Symbol');

var isArrayBuffer = tagTester('ArrayBuffer');

var isFunction = tagTester('Function');

// Optimize `isFunction` if appropriate. Work around some `typeof` bugs in old
// v8, IE 11 (#1621), Safari 8 (#1929), and PhantomJS (#2236).
var nodelist = root.document && root.document.childNodes;
if ( true && typeof Int8Array != 'object' && typeof nodelist != 'function') {
  isFunction = function(obj) {
    return typeof obj == 'function' || false;
  };
}

var isFunction$1 = isFunction;

var hasObjectTag = tagTester('Object');

// In IE 10 - Edge 13, `DataView` has string tag `'[object Object]'`.
// In IE 11, the most common among them, this problem also applies to
// `Map`, `WeakMap` and `Set`.
var hasStringTagBug = (
      supportsDataView && hasObjectTag(new DataView(new ArrayBuffer(8)))
    ),
    isIE11 = (typeof Map !== 'undefined' && hasObjectTag(new Map));

var isDataView = tagTester('DataView');

// In IE 10 - Edge 13, we need a different heuristic
// to determine whether an object is a `DataView`.
function ie10IsDataView(obj) {
  return obj != null && isFunction$1(obj.getInt8) && isArrayBuffer(obj.buffer);
}

var isDataView$1 = (hasStringTagBug ? ie10IsDataView : isDataView);

// Is a given value an array?
// Delegates to ECMA5's native `Array.isArray`.
var isArray = nativeIsArray || tagTester('Array');

// Internal function to check whether `key` is an own property name of `obj`.
function has$1(obj, key) {
  return obj != null && hasOwnProperty.call(obj, key);
}

var isArguments = tagTester('Arguments');

// Define a fallback version of the method in browsers (ahem, IE < 9), where
// there isn't any inspectable "Arguments" type.
(function() {
  if (!isArguments(arguments)) {
    isArguments = function(obj) {
      return has$1(obj, 'callee');
    };
  }
}());

var isArguments$1 = isArguments;

// Is a given object a finite number?
function isFinite$1(obj) {
  return !isSymbol(obj) && _isFinite(obj) && !isNaN(parseFloat(obj));
}

// Is the given value `NaN`?
function isNaN$1(obj) {
  return isNumber(obj) && _isNaN(obj);
}

// Predicate-generating function. Often useful outside of Underscore.
function constant(value) {
  return function() {
    return value;
  };
}

// Common internal logic for `isArrayLike` and `isBufferLike`.
function createSizePropertyCheck(getSizeProperty) {
  return function(collection) {
    var sizeProperty = getSizeProperty(collection);
    return typeof sizeProperty == 'number' && sizeProperty >= 0 && sizeProperty <= MAX_ARRAY_INDEX;
  }
}

// Internal helper to generate a function to obtain property `key` from `obj`.
function shallowProperty(key) {
  return function(obj) {
    return obj == null ? void 0 : obj[key];
  };
}

// Internal helper to obtain the `byteLength` property of an object.
var getByteLength = shallowProperty('byteLength');

// Internal helper to determine whether we should spend extensive checks against
// `ArrayBuffer` et al.
var isBufferLike = createSizePropertyCheck(getByteLength);

// Is a given value a typed array?
var typedArrayPattern = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;
function isTypedArray(obj) {
  // `ArrayBuffer.isView` is the most future-proof, so use it when available.
  // Otherwise, fall back on the above regular expression.
  return nativeIsView ? (nativeIsView(obj) && !isDataView$1(obj)) :
                isBufferLike(obj) && typedArrayPattern.test(toString.call(obj));
}

var isTypedArray$1 = supportsArrayBuffer ? isTypedArray : constant(false);

// Internal helper to obtain the `length` property of an object.
var getLength = shallowProperty('length');

// Internal helper to create a simple lookup structure.
// `collectNonEnumProps` used to depend on `_.contains`, but this led to
// circular imports. `emulatedSet` is a one-off solution that only works for
// arrays of strings.
function emulatedSet(keys) {
  var hash = {};
  for (var l = keys.length, i = 0; i < l; ++i) hash[keys[i]] = true;
  return {
    contains: function(key) { return hash[key]; },
    push: function(key) {
      hash[key] = true;
      return keys.push(key);
    }
  };
}

// Internal helper. Checks `keys` for the presence of keys in IE < 9 that won't
// be iterated by `for key in ...` and thus missed. Extends `keys` in place if
// needed.
function collectNonEnumProps(obj, keys) {
  keys = emulatedSet(keys);
  var nonEnumIdx = nonEnumerableProps.length;
  var constructor = obj.constructor;
  var proto = isFunction$1(constructor) && constructor.prototype || ObjProto;

  // Constructor is a special case.
  var prop = 'constructor';
  if (has$1(obj, prop) && !keys.contains(prop)) keys.push(prop);

  while (nonEnumIdx--) {
    prop = nonEnumerableProps[nonEnumIdx];
    if (prop in obj && obj[prop] !== proto[prop] && !keys.contains(prop)) {
      keys.push(prop);
    }
  }
}

// Retrieve the names of an object's own properties.
// Delegates to **ECMAScript 5**'s native `Object.keys`.
function keys(obj) {
  if (!isObject(obj)) return [];
  if (nativeKeys) return nativeKeys(obj);
  var keys = [];
  for (var key in obj) if (has$1(obj, key)) keys.push(key);
  // Ahem, IE < 9.
  if (hasEnumBug) collectNonEnumProps(obj, keys);
  return keys;
}

// Is a given array, string, or object empty?
// An "empty" object has no enumerable own-properties.
function isEmpty(obj) {
  if (obj == null) return true;
  // Skip the more expensive `toString`-based type checks if `obj` has no
  // `.length`.
  var length = getLength(obj);
  if (typeof length == 'number' && (
    isArray(obj) || isString(obj) || isArguments$1(obj)
  )) return length === 0;
  return getLength(keys(obj)) === 0;
}

// Returns whether an object has a given set of `key:value` pairs.
function isMatch(object, attrs) {
  var _keys = keys(attrs), length = _keys.length;
  if (object == null) return !length;
  var obj = Object(object);
  for (var i = 0; i < length; i++) {
    var key = _keys[i];
    if (attrs[key] !== obj[key] || !(key in obj)) return false;
  }
  return true;
}

// If Underscore is called as a function, it returns a wrapped object that can
// be used OO-style. This wrapper holds altered versions of all functions added
// through `_.mixin`. Wrapped objects may be chained.
function _$1(obj) {
  if (obj instanceof _$1) return obj;
  if (!(this instanceof _$1)) return new _$1(obj);
  this._wrapped = obj;
}

_$1.VERSION = VERSION;

// Extracts the result from a wrapped and chained object.
_$1.prototype.value = function() {
  return this._wrapped;
};

// Provide unwrapping proxies for some methods used in engine operations
// such as arithmetic and JSON stringification.
_$1.prototype.valueOf = _$1.prototype.toJSON = _$1.prototype.value;

_$1.prototype.toString = function() {
  return String(this._wrapped);
};

// Internal function to wrap or shallow-copy an ArrayBuffer,
// typed array or DataView to a new view, reusing the buffer.
function toBufferView(bufferSource) {
  return new Uint8Array(
    bufferSource.buffer || bufferSource,
    bufferSource.byteOffset || 0,
    getByteLength(bufferSource)
  );
}

// We use this string twice, so give it a name for minification.
var tagDataView = '[object DataView]';

// Internal recursive comparison function for `_.isEqual`.
function eq(a, b, aStack, bStack) {
  // Identical objects are equal. `0 === -0`, but they aren't identical.
  // See the [Harmony `egal` proposal](https://wiki.ecmascript.org/doku.php?id=harmony:egal).
  if (a === b) return a !== 0 || 1 / a === 1 / b;
  // `null` or `undefined` only equal to itself (strict comparison).
  if (a == null || b == null) return false;
  // `NaN`s are equivalent, but non-reflexive.
  if (a !== a) return b !== b;
  // Exhaust primitive checks
  var type = typeof a;
  if (type !== 'function' && type !== 'object' && typeof b != 'object') return false;
  return deepEq(a, b, aStack, bStack);
}

// Internal recursive comparison function for `_.isEqual`.
function deepEq(a, b, aStack, bStack) {
  // Unwrap any wrapped objects.
  if (a instanceof _$1) a = a._wrapped;
  if (b instanceof _$1) b = b._wrapped;
  // Compare `[[Class]]` names.
  var className = toString.call(a);
  if (className !== toString.call(b)) return false;
  // Work around a bug in IE 10 - Edge 13.
  if (hasStringTagBug && className == '[object Object]' && isDataView$1(a)) {
    if (!isDataView$1(b)) return false;
    className = tagDataView;
  }
  switch (className) {
    // These types are compared by value.
    case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
    case '[object String]':
      // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
      // equivalent to `new String("5")`.
      return '' + a === '' + b;
    case '[object Number]':
      // `NaN`s are equivalent, but non-reflexive.
      // Object(NaN) is equivalent to NaN.
      if (+a !== +a) return +b !== +b;
      // An `egal` comparison is performed for other numeric values.
      return +a === 0 ? 1 / +a === 1 / b : +a === +b;
    case '[object Date]':
    case '[object Boolean]':
      // Coerce dates and booleans to numeric primitive values. Dates are compared by their
      // millisecond representations. Note that invalid dates with millisecond representations
      // of `NaN` are not equivalent.
      return +a === +b;
    case '[object Symbol]':
      return SymbolProto.valueOf.call(a) === SymbolProto.valueOf.call(b);
    case '[object ArrayBuffer]':
    case tagDataView:
      // Coerce to typed array so we can fall through.
      return deepEq(toBufferView(a), toBufferView(b), aStack, bStack);
  }

  var areArrays = className === '[object Array]';
  if (!areArrays && isTypedArray$1(a)) {
      var byteLength = getByteLength(a);
      if (byteLength !== getByteLength(b)) return false;
      if (a.buffer === b.buffer && a.byteOffset === b.byteOffset) return true;
      areArrays = true;
  }
  if (!areArrays) {
    if (typeof a != 'object' || typeof b != 'object') return false;

    // Objects with different constructors are not equivalent, but `Object`s or `Array`s
    // from different frames are.
    var aCtor = a.constructor, bCtor = b.constructor;
    if (aCtor !== bCtor && !(isFunction$1(aCtor) && aCtor instanceof aCtor &&
                             isFunction$1(bCtor) && bCtor instanceof bCtor)
                        && ('constructor' in a && 'constructor' in b)) {
      return false;
    }
  }
  // Assume equality for cyclic structures. The algorithm for detecting cyclic
  // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

  // Initializing stack of traversed objects.
  // It's done here since we only need them for objects and arrays comparison.
  aStack = aStack || [];
  bStack = bStack || [];
  var length = aStack.length;
  while (length--) {
    // Linear search. Performance is inversely proportional to the number of
    // unique nested structures.
    if (aStack[length] === a) return bStack[length] === b;
  }

  // Add the first object to the stack of traversed objects.
  aStack.push(a);
  bStack.push(b);

  // Recursively compare objects and arrays.
  if (areArrays) {
    // Compare array lengths to determine if a deep comparison is necessary.
    length = a.length;
    if (length !== b.length) return false;
    // Deep compare the contents, ignoring non-numeric properties.
    while (length--) {
      if (!eq(a[length], b[length], aStack, bStack)) return false;
    }
  } else {
    // Deep compare objects.
    var _keys = keys(a), key;
    length = _keys.length;
    // Ensure that both objects contain the same number of properties before comparing deep equality.
    if (keys(b).length !== length) return false;
    while (length--) {
      // Deep compare each member
      key = _keys[length];
      if (!(has$1(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
    }
  }
  // Remove the first object from the stack of traversed objects.
  aStack.pop();
  bStack.pop();
  return true;
}

// Perform a deep comparison to check if two objects are equal.
function isEqual(a, b) {
  return eq(a, b);
}

// Retrieve all the enumerable property names of an object.
function allKeys(obj) {
  if (!isObject(obj)) return [];
  var keys = [];
  for (var key in obj) keys.push(key);
  // Ahem, IE < 9.
  if (hasEnumBug) collectNonEnumProps(obj, keys);
  return keys;
}

// Since the regular `Object.prototype.toString` type tests don't work for
// some types in IE 11, we use a fingerprinting heuristic instead, based
// on the methods. It's not great, but it's the best we got.
// The fingerprint method lists are defined below.
function ie11fingerprint(methods) {
  var length = getLength(methods);
  return function(obj) {
    if (obj == null) return false;
    // `Map`, `WeakMap` and `Set` have no enumerable keys.
    var keys = allKeys(obj);
    if (getLength(keys)) return false;
    for (var i = 0; i < length; i++) {
      if (!isFunction$1(obj[methods[i]])) return false;
    }
    // If we are testing against `WeakMap`, we need to ensure that
    // `obj` doesn't have a `forEach` method in order to distinguish
    // it from a regular `Map`.
    return methods !== weakMapMethods || !isFunction$1(obj[forEachName]);
  };
}

// In the interest of compact minification, we write
// each string in the fingerprints only once.
var forEachName = 'forEach',
    hasName = 'has',
    commonInit = ['clear', 'delete'],
    mapTail = ['get', hasName, 'set'];

// `Map`, `WeakMap` and `Set` each have slightly different
// combinations of the above sublists.
var mapMethods = commonInit.concat(forEachName, mapTail),
    weakMapMethods = commonInit.concat(mapTail),
    setMethods = ['add'].concat(commonInit, forEachName, hasName);

var isMap = isIE11 ? ie11fingerprint(mapMethods) : tagTester('Map');

var isWeakMap = isIE11 ? ie11fingerprint(weakMapMethods) : tagTester('WeakMap');

var isSet = isIE11 ? ie11fingerprint(setMethods) : tagTester('Set');

var isWeakSet = tagTester('WeakSet');

// Retrieve the values of an object's properties.
function values(obj) {
  var _keys = keys(obj);
  var length = _keys.length;
  var values = Array(length);
  for (var i = 0; i < length; i++) {
    values[i] = obj[_keys[i]];
  }
  return values;
}

// Convert an object into a list of `[key, value]` pairs.
// The opposite of `_.object` with one argument.
function pairs(obj) {
  var _keys = keys(obj);
  var length = _keys.length;
  var pairs = Array(length);
  for (var i = 0; i < length; i++) {
    pairs[i] = [_keys[i], obj[_keys[i]]];
  }
  return pairs;
}

// Invert the keys and values of an object. The values must be serializable.
function invert(obj) {
  var result = {};
  var _keys = keys(obj);
  for (var i = 0, length = _keys.length; i < length; i++) {
    result[obj[_keys[i]]] = _keys[i];
  }
  return result;
}

// Return a sorted list of the function names available on the object.
function functions(obj) {
  var names = [];
  for (var key in obj) {
    if (isFunction$1(obj[key])) names.push(key);
  }
  return names.sort();
}

// An internal function for creating assigner functions.
function createAssigner(keysFunc, defaults) {
  return function(obj) {
    var length = arguments.length;
    if (defaults) obj = Object(obj);
    if (length < 2 || obj == null) return obj;
    for (var index = 1; index < length; index++) {
      var source = arguments[index],
          keys = keysFunc(source),
          l = keys.length;
      for (var i = 0; i < l; i++) {
        var key = keys[i];
        if (!defaults || obj[key] === void 0) obj[key] = source[key];
      }
    }
    return obj;
  };
}

// Extend a given object with all the properties in passed-in object(s).
var extend = createAssigner(allKeys);

// Assigns a given object with all the own properties in the passed-in
// object(s).
// (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
var extendOwn = createAssigner(keys);

// Fill in a given object with default properties.
var defaults = createAssigner(allKeys, true);

// Create a naked function reference for surrogate-prototype-swapping.
function ctor() {
  return function(){};
}

// An internal function for creating a new object that inherits from another.
function baseCreate(prototype) {
  if (!isObject(prototype)) return {};
  if (nativeCreate) return nativeCreate(prototype);
  var Ctor = ctor();
  Ctor.prototype = prototype;
  var result = new Ctor;
  Ctor.prototype = null;
  return result;
}

// Creates an object that inherits from the given prototype object.
// If additional properties are provided then they will be added to the
// created object.
function create(prototype, props) {
  var result = baseCreate(prototype);
  if (props) extendOwn(result, props);
  return result;
}

// Create a (shallow-cloned) duplicate of an object.
function clone(obj) {
  if (!isObject(obj)) return obj;
  return isArray(obj) ? obj.slice() : extend({}, obj);
}

// Invokes `interceptor` with the `obj` and then returns `obj`.
// The primary purpose of this method is to "tap into" a method chain, in
// order to perform operations on intermediate results within the chain.
function tap(obj, interceptor) {
  interceptor(obj);
  return obj;
}

// Normalize a (deep) property `path` to array.
// Like `_.iteratee`, this function can be customized.
function toPath$1(path) {
  return isArray(path) ? path : [path];
}
_$1.toPath = toPath$1;

// Internal wrapper for `_.toPath` to enable minification.
// Similar to `cb` for `_.iteratee`.
function toPath(path) {
  return _$1.toPath(path);
}

// Internal function to obtain a nested property in `obj` along `path`.
function deepGet(obj, path) {
  var length = path.length;
  for (var i = 0; i < length; i++) {
    if (obj == null) return void 0;
    obj = obj[path[i]];
  }
  return length ? obj : void 0;
}

// Get the value of the (deep) property on `path` from `object`.
// If any property in `path` does not exist or if the value is
// `undefined`, return `defaultValue` instead.
// The `path` is normalized through `_.toPath`.
function get(object, path, defaultValue) {
  var value = deepGet(object, toPath(path));
  return isUndefined(value) ? defaultValue : value;
}

// Shortcut function for checking if an object has a given property directly on
// itself (in other words, not on a prototype). Unlike the internal `has`
// function, this public version can also traverse nested properties.
function has(obj, path) {
  path = toPath(path);
  var length = path.length;
  for (var i = 0; i < length; i++) {
    var key = path[i];
    if (!has$1(obj, key)) return false;
    obj = obj[key];
  }
  return !!length;
}

// Keep the identity function around for default iteratees.
function identity(value) {
  return value;
}

// Returns a predicate for checking whether an object has a given set of
// `key:value` pairs.
function matcher(attrs) {
  attrs = extendOwn({}, attrs);
  return function(obj) {
    return isMatch(obj, attrs);
  };
}

// Creates a function that, when passed an object, will traverse that object’s
// properties down the given `path`, specified as an array of keys or indices.
function property(path) {
  path = toPath(path);
  return function(obj) {
    return deepGet(obj, path);
  };
}

// Internal function that returns an efficient (for current engines) version
// of the passed-in callback, to be repeatedly applied in other Underscore
// functions.
function optimizeCb(func, context, argCount) {
  if (context === void 0) return func;
  switch (argCount == null ? 3 : argCount) {
    case 1: return function(value) {
      return func.call(context, value);
    };
    // The 2-argument case is omitted because we’re not using it.
    case 3: return function(value, index, collection) {
      return func.call(context, value, index, collection);
    };
    case 4: return function(accumulator, value, index, collection) {
      return func.call(context, accumulator, value, index, collection);
    };
  }
  return function() {
    return func.apply(context, arguments);
  };
}

// An internal function to generate callbacks that can be applied to each
// element in a collection, returning the desired result — either `_.identity`,
// an arbitrary callback, a property matcher, or a property accessor.
function baseIteratee(value, context, argCount) {
  if (value == null) return identity;
  if (isFunction$1(value)) return optimizeCb(value, context, argCount);
  if (isObject(value) && !isArray(value)) return matcher(value);
  return property(value);
}

// External wrapper for our callback generator. Users may customize
// `_.iteratee` if they want additional predicate/iteratee shorthand styles.
// This abstraction hides the internal-only `argCount` argument.
function iteratee(value, context) {
  return baseIteratee(value, context, Infinity);
}
_$1.iteratee = iteratee;

// The function we call internally to generate a callback. It invokes
// `_.iteratee` if overridden, otherwise `baseIteratee`.
function cb(value, context, argCount) {
  if (_$1.iteratee !== iteratee) return _$1.iteratee(value, context);
  return baseIteratee(value, context, argCount);
}

// Returns the results of applying the `iteratee` to each element of `obj`.
// In contrast to `_.map` it returns an object.
function mapObject(obj, iteratee, context) {
  iteratee = cb(iteratee, context);
  var _keys = keys(obj),
      length = _keys.length,
      results = {};
  for (var index = 0; index < length; index++) {
    var currentKey = _keys[index];
    results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
  }
  return results;
}

// Predicate-generating function. Often useful outside of Underscore.
function noop(){}

// Generates a function for a given object that returns a given property.
function propertyOf(obj) {
  if (obj == null) return noop;
  return function(path) {
    return get(obj, path);
  };
}

// Run a function **n** times.
function times(n, iteratee, context) {
  var accum = Array(Math.max(0, n));
  iteratee = optimizeCb(iteratee, context, 1);
  for (var i = 0; i < n; i++) accum[i] = iteratee(i);
  return accum;
}

// Return a random integer between `min` and `max` (inclusive).
function random(min, max) {
  if (max == null) {
    max = min;
    min = 0;
  }
  return min + Math.floor(Math.random() * (max - min + 1));
}

// A (possibly faster) way to get the current timestamp as an integer.
var now = Date.now || function() {
  return new Date().getTime();
};

// Internal helper to generate functions for escaping and unescaping strings
// to/from HTML interpolation.
function createEscaper(map) {
  var escaper = function(match) {
    return map[match];
  };
  // Regexes for identifying a key that needs to be escaped.
  var source = '(?:' + keys(map).join('|') + ')';
  var testRegexp = RegExp(source);
  var replaceRegexp = RegExp(source, 'g');
  return function(string) {
    string = string == null ? '' : '' + string;
    return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
  };
}

// Internal list of HTML entities for escaping.
var escapeMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '`': '&#x60;'
};

// Function for escaping strings to HTML interpolation.
var _escape = createEscaper(escapeMap);

// Internal list of HTML entities for unescaping.
var unescapeMap = invert(escapeMap);

// Function for unescaping strings from HTML interpolation.
var _unescape = createEscaper(unescapeMap);

// By default, Underscore uses ERB-style template delimiters. Change the
// following template settings to use alternative delimiters.
var templateSettings = _$1.templateSettings = {
  evaluate: /<%([\s\S]+?)%>/g,
  interpolate: /<%=([\s\S]+?)%>/g,
  escape: /<%-([\s\S]+?)%>/g
};

// When customizing `_.templateSettings`, if you don't want to define an
// interpolation, evaluation or escaping regex, we need one that is
// guaranteed not to match.
var noMatch = /(.)^/;

// Certain characters need to be escaped so that they can be put into a
// string literal.
var escapes = {
  "'": "'",
  '\\': '\\',
  '\r': 'r',
  '\n': 'n',
  '\u2028': 'u2028',
  '\u2029': 'u2029'
};

var escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;

function escapeChar(match) {
  return '\\' + escapes[match];
}

// In order to prevent third-party code injection through
// `_.templateSettings.variable`, we test it against the following regular
// expression. It is intentionally a bit more liberal than just matching valid
// identifiers, but still prevents possible loopholes through defaults or
// destructuring assignment.
var bareIdentifier = /^\s*(\w|\$)+\s*$/;

// JavaScript micro-templating, similar to John Resig's implementation.
// Underscore templating handles arbitrary delimiters, preserves whitespace,
// and correctly escapes quotes within interpolated code.
// NB: `oldSettings` only exists for backwards compatibility.
function template(text, settings, oldSettings) {
  if (!settings && oldSettings) settings = oldSettings;
  settings = defaults({}, settings, _$1.templateSettings);

  // Combine delimiters into one regular expression via alternation.
  var matcher = RegExp([
    (settings.escape || noMatch).source,
    (settings.interpolate || noMatch).source,
    (settings.evaluate || noMatch).source
  ].join('|') + '|$', 'g');

  // Compile the template source, escaping string literals appropriately.
  var index = 0;
  var source = "__p+='";
  text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
    source += text.slice(index, offset).replace(escapeRegExp, escapeChar);
    index = offset + match.length;

    if (escape) {
      source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
    } else if (interpolate) {
      source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
    } else if (evaluate) {
      source += "';\n" + evaluate + "\n__p+='";
    }

    // Adobe VMs need the match returned to produce the correct offset.
    return match;
  });
  source += "';\n";

  var argument = settings.variable;
  if (argument) {
    // Insure against third-party code injection. (CVE-2021-23358)
    if (!bareIdentifier.test(argument)) throw new Error(
      'variable is not a bare identifier: ' + argument
    );
  } else {
    // If a variable is not specified, place data values in local scope.
    source = 'with(obj||{}){\n' + source + '}\n';
    argument = 'obj';
  }

  source = "var __t,__p='',__j=Array.prototype.join," +
    "print=function(){__p+=__j.call(arguments,'');};\n" +
    source + 'return __p;\n';

  var render;
  try {
    render = new Function(argument, '_', source);
  } catch (e) {
    e.source = source;
    throw e;
  }

  var template = function(data) {
    return render.call(this, data, _$1);
  };

  // Provide the compiled source as a convenience for precompilation.
  template.source = 'function(' + argument + '){\n' + source + '}';

  return template;
}

// Traverses the children of `obj` along `path`. If a child is a function, it
// is invoked with its parent as context. Returns the value of the final
// child, or `fallback` if any child is undefined.
function result(obj, path, fallback) {
  path = toPath(path);
  var length = path.length;
  if (!length) {
    return isFunction$1(fallback) ? fallback.call(obj) : fallback;
  }
  for (var i = 0; i < length; i++) {
    var prop = obj == null ? void 0 : obj[path[i]];
    if (prop === void 0) {
      prop = fallback;
      i = length; // Ensure we don't continue iterating.
    }
    obj = isFunction$1(prop) ? prop.call(obj) : prop;
  }
  return obj;
}

// Generate a unique integer id (unique within the entire client session).
// Useful for temporary DOM ids.
var idCounter = 0;
function uniqueId(prefix) {
  var id = ++idCounter + '';
  return prefix ? prefix + id : id;
}

// Start chaining a wrapped Underscore object.
function chain(obj) {
  var instance = _$1(obj);
  instance._chain = true;
  return instance;
}

// Internal function to execute `sourceFunc` bound to `context` with optional
// `args`. Determines whether to execute a function as a constructor or as a
// normal function.
function executeBound(sourceFunc, boundFunc, context, callingContext, args) {
  if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
  var self = baseCreate(sourceFunc.prototype);
  var result = sourceFunc.apply(self, args);
  if (isObject(result)) return result;
  return self;
}

// Partially apply a function by creating a version that has had some of its
// arguments pre-filled, without changing its dynamic `this` context. `_` acts
// as a placeholder by default, allowing any combination of arguments to be
// pre-filled. Set `_.partial.placeholder` for a custom placeholder argument.
var partial = restArguments(function(func, boundArgs) {
  var placeholder = partial.placeholder;
  var bound = function() {
    var position = 0, length = boundArgs.length;
    var args = Array(length);
    for (var i = 0; i < length; i++) {
      args[i] = boundArgs[i] === placeholder ? arguments[position++] : boundArgs[i];
    }
    while (position < arguments.length) args.push(arguments[position++]);
    return executeBound(func, bound, this, this, args);
  };
  return bound;
});

partial.placeholder = _$1;

// Create a function bound to a given object (assigning `this`, and arguments,
// optionally).
var bind = restArguments(function(func, context, args) {
  if (!isFunction$1(func)) throw new TypeError('Bind must be called on a function');
  var bound = restArguments(function(callArgs) {
    return executeBound(func, bound, context, this, args.concat(callArgs));
  });
  return bound;
});

// Internal helper for collection methods to determine whether a collection
// should be iterated as an array or as an object.
// Related: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
// Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
var isArrayLike = createSizePropertyCheck(getLength);

// Internal implementation of a recursive `flatten` function.
function flatten$1(input, depth, strict, output) {
  output = output || [];
  if (!depth && depth !== 0) {
    depth = Infinity;
  } else if (depth <= 0) {
    return output.concat(input);
  }
  var idx = output.length;
  for (var i = 0, length = getLength(input); i < length; i++) {
    var value = input[i];
    if (isArrayLike(value) && (isArray(value) || isArguments$1(value))) {
      // Flatten current level of array or arguments object.
      if (depth > 1) {
        flatten$1(value, depth - 1, strict, output);
        idx = output.length;
      } else {
        var j = 0, len = value.length;
        while (j < len) output[idx++] = value[j++];
      }
    } else if (!strict) {
      output[idx++] = value;
    }
  }
  return output;
}

// Bind a number of an object's methods to that object. Remaining arguments
// are the method names to be bound. Useful for ensuring that all callbacks
// defined on an object belong to it.
var bindAll = restArguments(function(obj, keys) {
  keys = flatten$1(keys, false, false);
  var index = keys.length;
  if (index < 1) throw new Error('bindAll must be passed function names');
  while (index--) {
    var key = keys[index];
    obj[key] = bind(obj[key], obj);
  }
  return obj;
});

// Memoize an expensive function by storing its results.
function memoize(func, hasher) {
  var memoize = function(key) {
    var cache = memoize.cache;
    var address = '' + (hasher ? hasher.apply(this, arguments) : key);
    if (!has$1(cache, address)) cache[address] = func.apply(this, arguments);
    return cache[address];
  };
  memoize.cache = {};
  return memoize;
}

// Delays a function for the given number of milliseconds, and then calls
// it with the arguments supplied.
var delay = restArguments(function(func, wait, args) {
  return setTimeout(function() {
    return func.apply(null, args);
  }, wait);
});

// Defers a function, scheduling it to run after the current call stack has
// cleared.
var defer = partial(delay, _$1, 1);

// Returns a function, that, when invoked, will only be triggered at most once
// during a given window of time. Normally, the throttled function will run
// as much as it can, without ever going more than once per `wait` duration;
// but if you'd like to disable the execution on the leading edge, pass
// `{leading: false}`. To disable execution on the trailing edge, ditto.
function throttle(func, wait, options) {
  var timeout, context, args, result;
  var previous = 0;
  if (!options) options = {};

  var later = function() {
    previous = options.leading === false ? 0 : now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };

  var throttled = function() {
    var _now = now();
    if (!previous && options.leading === false) previous = _now;
    var remaining = wait - (_now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = _now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };

  throttled.cancel = function() {
    clearTimeout(timeout);
    previous = 0;
    timeout = context = args = null;
  };

  return throttled;
}

// When a sequence of calls of the returned function ends, the argument
// function is triggered. The end of a sequence is defined by the `wait`
// parameter. If `immediate` is passed, the argument function will be
// triggered at the beginning of the sequence instead of at the end.
function debounce(func, wait, immediate) {
  var timeout, previous, args, result, context;

  var later = function() {
    var passed = now() - previous;
    if (wait > passed) {
      timeout = setTimeout(later, wait - passed);
    } else {
      timeout = null;
      if (!immediate) result = func.apply(context, args);
      // This check is needed because `func` can recursively invoke `debounced`.
      if (!timeout) args = context = null;
    }
  };

  var debounced = restArguments(function(_args) {
    context = this;
    args = _args;
    previous = now();
    if (!timeout) {
      timeout = setTimeout(later, wait);
      if (immediate) result = func.apply(context, args);
    }
    return result;
  });

  debounced.cancel = function() {
    clearTimeout(timeout);
    timeout = args = context = null;
  };

  return debounced;
}

// Returns the first function passed as an argument to the second,
// allowing you to adjust arguments, run code before and after, and
// conditionally execute the original function.
function wrap(func, wrapper) {
  return partial(wrapper, func);
}

// Returns a negated version of the passed-in predicate.
function negate(predicate) {
  return function() {
    return !predicate.apply(this, arguments);
  };
}

// Returns a function that is the composition of a list of functions, each
// consuming the return value of the function that follows.
function compose() {
  var args = arguments;
  var start = args.length - 1;
  return function() {
    var i = start;
    var result = args[start].apply(this, arguments);
    while (i--) result = args[i].call(this, result);
    return result;
  };
}

// Returns a function that will only be executed on and after the Nth call.
function after(times, func) {
  return function() {
    if (--times < 1) {
      return func.apply(this, arguments);
    }
  };
}

// Returns a function that will only be executed up to (but not including) the
// Nth call.
function before(times, func) {
  var memo;
  return function() {
    if (--times > 0) {
      memo = func.apply(this, arguments);
    }
    if (times <= 1) func = null;
    return memo;
  };
}

// Returns a function that will be executed at most one time, no matter how
// often you call it. Useful for lazy initialization.
var once = partial(before, 2);

// Returns the first key on an object that passes a truth test.
function findKey(obj, predicate, context) {
  predicate = cb(predicate, context);
  var _keys = keys(obj), key;
  for (var i = 0, length = _keys.length; i < length; i++) {
    key = _keys[i];
    if (predicate(obj[key], key, obj)) return key;
  }
}

// Internal function to generate `_.findIndex` and `_.findLastIndex`.
function createPredicateIndexFinder(dir) {
  return function(array, predicate, context) {
    predicate = cb(predicate, context);
    var length = getLength(array);
    var index = dir > 0 ? 0 : length - 1;
    for (; index >= 0 && index < length; index += dir) {
      if (predicate(array[index], index, array)) return index;
    }
    return -1;
  };
}

// Returns the first index on an array-like that passes a truth test.
var findIndex = createPredicateIndexFinder(1);

// Returns the last index on an array-like that passes a truth test.
var findLastIndex = createPredicateIndexFinder(-1);

// Use a comparator function to figure out the smallest index at which
// an object should be inserted so as to maintain order. Uses binary search.
function sortedIndex(array, obj, iteratee, context) {
  iteratee = cb(iteratee, context, 1);
  var value = iteratee(obj);
  var low = 0, high = getLength(array);
  while (low < high) {
    var mid = Math.floor((low + high) / 2);
    if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
  }
  return low;
}

// Internal function to generate the `_.indexOf` and `_.lastIndexOf` functions.
function createIndexFinder(dir, predicateFind, sortedIndex) {
  return function(array, item, idx) {
    var i = 0, length = getLength(array);
    if (typeof idx == 'number') {
      if (dir > 0) {
        i = idx >= 0 ? idx : Math.max(idx + length, i);
      } else {
        length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
      }
    } else if (sortedIndex && idx && length) {
      idx = sortedIndex(array, item);
      return array[idx] === item ? idx : -1;
    }
    if (item !== item) {
      idx = predicateFind(slice.call(array, i, length), isNaN$1);
      return idx >= 0 ? idx + i : -1;
    }
    for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
      if (array[idx] === item) return idx;
    }
    return -1;
  };
}

// Return the position of the first occurrence of an item in an array,
// or -1 if the item is not included in the array.
// If the array is large and already in sort order, pass `true`
// for **isSorted** to use binary search.
var indexOf = createIndexFinder(1, findIndex, sortedIndex);

// Return the position of the last occurrence of an item in an array,
// or -1 if the item is not included in the array.
var lastIndexOf = createIndexFinder(-1, findLastIndex);

// Return the first value which passes a truth test.
function find(obj, predicate, context) {
  var keyFinder = isArrayLike(obj) ? findIndex : findKey;
  var key = keyFinder(obj, predicate, context);
  if (key !== void 0 && key !== -1) return obj[key];
}

// Convenience version of a common use case of `_.find`: getting the first
// object containing specific `key:value` pairs.
function findWhere(obj, attrs) {
  return find(obj, matcher(attrs));
}

// The cornerstone for collection functions, an `each`
// implementation, aka `forEach`.
// Handles raw objects in addition to array-likes. Treats all
// sparse array-likes as if they were dense.
function each(obj, iteratee, context) {
  iteratee = optimizeCb(iteratee, context);
  var i, length;
  if (isArrayLike(obj)) {
    for (i = 0, length = obj.length; i < length; i++) {
      iteratee(obj[i], i, obj);
    }
  } else {
    var _keys = keys(obj);
    for (i = 0, length = _keys.length; i < length; i++) {
      iteratee(obj[_keys[i]], _keys[i], obj);
    }
  }
  return obj;
}

// Return the results of applying the iteratee to each element.
function map(obj, iteratee, context) {
  iteratee = cb(iteratee, context);
  var _keys = !isArrayLike(obj) && keys(obj),
      length = (_keys || obj).length,
      results = Array(length);
  for (var index = 0; index < length; index++) {
    var currentKey = _keys ? _keys[index] : index;
    results[index] = iteratee(obj[currentKey], currentKey, obj);
  }
  return results;
}

// Internal helper to create a reducing function, iterating left or right.
function createReduce(dir) {
  // Wrap code that reassigns argument variables in a separate function than
  // the one that accesses `arguments.length` to avoid a perf hit. (#1991)
  var reducer = function(obj, iteratee, memo, initial) {
    var _keys = !isArrayLike(obj) && keys(obj),
        length = (_keys || obj).length,
        index = dir > 0 ? 0 : length - 1;
    if (!initial) {
      memo = obj[_keys ? _keys[index] : index];
      index += dir;
    }
    for (; index >= 0 && index < length; index += dir) {
      var currentKey = _keys ? _keys[index] : index;
      memo = iteratee(memo, obj[currentKey], currentKey, obj);
    }
    return memo;
  };

  return function(obj, iteratee, memo, context) {
    var initial = arguments.length >= 3;
    return reducer(obj, optimizeCb(iteratee, context, 4), memo, initial);
  };
}

// **Reduce** builds up a single result from a list of values, aka `inject`,
// or `foldl`.
var reduce = createReduce(1);

// The right-associative version of reduce, also known as `foldr`.
var reduceRight = createReduce(-1);

// Return all the elements that pass a truth test.
function filter(obj, predicate, context) {
  var results = [];
  predicate = cb(predicate, context);
  each(obj, function(value, index, list) {
    if (predicate(value, index, list)) results.push(value);
  });
  return results;
}

// Return all the elements for which a truth test fails.
function reject(obj, predicate, context) {
  return filter(obj, negate(cb(predicate)), context);
}

// Determine whether all of the elements pass a truth test.
function every(obj, predicate, context) {
  predicate = cb(predicate, context);
  var _keys = !isArrayLike(obj) && keys(obj),
      length = (_keys || obj).length;
  for (var index = 0; index < length; index++) {
    var currentKey = _keys ? _keys[index] : index;
    if (!predicate(obj[currentKey], currentKey, obj)) return false;
  }
  return true;
}

// Determine if at least one element in the object passes a truth test.
function some(obj, predicate, context) {
  predicate = cb(predicate, context);
  var _keys = !isArrayLike(obj) && keys(obj),
      length = (_keys || obj).length;
  for (var index = 0; index < length; index++) {
    var currentKey = _keys ? _keys[index] : index;
    if (predicate(obj[currentKey], currentKey, obj)) return true;
  }
  return false;
}

// Determine if the array or object contains a given item (using `===`).
function contains(obj, item, fromIndex, guard) {
  if (!isArrayLike(obj)) obj = values(obj);
  if (typeof fromIndex != 'number' || guard) fromIndex = 0;
  return indexOf(obj, item, fromIndex) >= 0;
}

// Invoke a method (with arguments) on every item in a collection.
var invoke = restArguments(function(obj, path, args) {
  var contextPath, func;
  if (isFunction$1(path)) {
    func = path;
  } else {
    path = toPath(path);
    contextPath = path.slice(0, -1);
    path = path[path.length - 1];
  }
  return map(obj, function(context) {
    var method = func;
    if (!method) {
      if (contextPath && contextPath.length) {
        context = deepGet(context, contextPath);
      }
      if (context == null) return void 0;
      method = context[path];
    }
    return method == null ? method : method.apply(context, args);
  });
});

// Convenience version of a common use case of `_.map`: fetching a property.
function pluck(obj, key) {
  return map(obj, property(key));
}

// Convenience version of a common use case of `_.filter`: selecting only
// objects containing specific `key:value` pairs.
function where(obj, attrs) {
  return filter(obj, matcher(attrs));
}

// Return the maximum element (or element-based computation).
function max(obj, iteratee, context) {
  var result = -Infinity, lastComputed = -Infinity,
      value, computed;
  if (iteratee == null || typeof iteratee == 'number' && typeof obj[0] != 'object' && obj != null) {
    obj = isArrayLike(obj) ? obj : values(obj);
    for (var i = 0, length = obj.length; i < length; i++) {
      value = obj[i];
      if (value != null && value > result) {
        result = value;
      }
    }
  } else {
    iteratee = cb(iteratee, context);
    each(obj, function(v, index, list) {
      computed = iteratee(v, index, list);
      if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
        result = v;
        lastComputed = computed;
      }
    });
  }
  return result;
}

// Return the minimum element (or element-based computation).
function min(obj, iteratee, context) {
  var result = Infinity, lastComputed = Infinity,
      value, computed;
  if (iteratee == null || typeof iteratee == 'number' && typeof obj[0] != 'object' && obj != null) {
    obj = isArrayLike(obj) ? obj : values(obj);
    for (var i = 0, length = obj.length; i < length; i++) {
      value = obj[i];
      if (value != null && value < result) {
        result = value;
      }
    }
  } else {
    iteratee = cb(iteratee, context);
    each(obj, function(v, index, list) {
      computed = iteratee(v, index, list);
      if (computed < lastComputed || computed === Infinity && result === Infinity) {
        result = v;
        lastComputed = computed;
      }
    });
  }
  return result;
}

// Sample **n** random values from a collection using the modern version of the
// [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
// If **n** is not specified, returns a single random element.
// The internal `guard` argument allows it to work with `_.map`.
function sample(obj, n, guard) {
  if (n == null || guard) {
    if (!isArrayLike(obj)) obj = values(obj);
    return obj[random(obj.length - 1)];
  }
  var sample = isArrayLike(obj) ? clone(obj) : values(obj);
  var length = getLength(sample);
  n = Math.max(Math.min(n, length), 0);
  var last = length - 1;
  for (var index = 0; index < n; index++) {
    var rand = random(index, last);
    var temp = sample[index];
    sample[index] = sample[rand];
    sample[rand] = temp;
  }
  return sample.slice(0, n);
}

// Shuffle a collection.
function shuffle(obj) {
  return sample(obj, Infinity);
}

// Sort the object's values by a criterion produced by an iteratee.
function sortBy(obj, iteratee, context) {
  var index = 0;
  iteratee = cb(iteratee, context);
  return pluck(map(obj, function(value, key, list) {
    return {
      value: value,
      index: index++,
      criteria: iteratee(value, key, list)
    };
  }).sort(function(left, right) {
    var a = left.criteria;
    var b = right.criteria;
    if (a !== b) {
      if (a > b || a === void 0) return 1;
      if (a < b || b === void 0) return -1;
    }
    return left.index - right.index;
  }), 'value');
}

// An internal function used for aggregate "group by" operations.
function group(behavior, partition) {
  return function(obj, iteratee, context) {
    var result = partition ? [[], []] : {};
    iteratee = cb(iteratee, context);
    each(obj, function(value, index) {
      var key = iteratee(value, index, obj);
      behavior(result, value, key);
    });
    return result;
  };
}

// Groups the object's values by a criterion. Pass either a string attribute
// to group by, or a function that returns the criterion.
var groupBy = group(function(result, value, key) {
  if (has$1(result, key)) result[key].push(value); else result[key] = [value];
});

// Indexes the object's values by a criterion, similar to `_.groupBy`, but for
// when you know that your index values will be unique.
var indexBy = group(function(result, value, key) {
  result[key] = value;
});

// Counts instances of an object that group by a certain criterion. Pass
// either a string attribute to count by, or a function that returns the
// criterion.
var countBy = group(function(result, value, key) {
  if (has$1(result, key)) result[key]++; else result[key] = 1;
});

// Split a collection into two arrays: one whose elements all pass the given
// truth test, and one whose elements all do not pass the truth test.
var partition = group(function(result, value, pass) {
  result[pass ? 0 : 1].push(value);
}, true);

// Safely create a real, live array from anything iterable.
var reStrSymbol = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
function toArray(obj) {
  if (!obj) return [];
  if (isArray(obj)) return slice.call(obj);
  if (isString(obj)) {
    // Keep surrogate pair characters together.
    return obj.match(reStrSymbol);
  }
  if (isArrayLike(obj)) return map(obj, identity);
  return values(obj);
}

// Return the number of elements in a collection.
function size(obj) {
  if (obj == null) return 0;
  return isArrayLike(obj) ? obj.length : keys(obj).length;
}

// Internal `_.pick` helper function to determine whether `key` is an enumerable
// property name of `obj`.
function keyInObj(value, key, obj) {
  return key in obj;
}

// Return a copy of the object only containing the allowed properties.
var pick = restArguments(function(obj, keys) {
  var result = {}, iteratee = keys[0];
  if (obj == null) return result;
  if (isFunction$1(iteratee)) {
    if (keys.length > 1) iteratee = optimizeCb(iteratee, keys[1]);
    keys = allKeys(obj);
  } else {
    iteratee = keyInObj;
    keys = flatten$1(keys, false, false);
    obj = Object(obj);
  }
  for (var i = 0, length = keys.length; i < length; i++) {
    var key = keys[i];
    var value = obj[key];
    if (iteratee(value, key, obj)) result[key] = value;
  }
  return result;
});

// Return a copy of the object without the disallowed properties.
var omit = restArguments(function(obj, keys) {
  var iteratee = keys[0], context;
  if (isFunction$1(iteratee)) {
    iteratee = negate(iteratee);
    if (keys.length > 1) context = keys[1];
  } else {
    keys = map(flatten$1(keys, false, false), String);
    iteratee = function(value, key) {
      return !contains(keys, key);
    };
  }
  return pick(obj, iteratee, context);
});

// Returns everything but the last entry of the array. Especially useful on
// the arguments object. Passing **n** will return all the values in
// the array, excluding the last N.
function initial(array, n, guard) {
  return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
}

// Get the first element of an array. Passing **n** will return the first N
// values in the array. The **guard** check allows it to work with `_.map`.
function first(array, n, guard) {
  if (array == null || array.length < 1) return n == null || guard ? void 0 : [];
  if (n == null || guard) return array[0];
  return initial(array, array.length - n);
}

// Returns everything but the first entry of the `array`. Especially useful on
// the `arguments` object. Passing an **n** will return the rest N values in the
// `array`.
function rest(array, n, guard) {
  return slice.call(array, n == null || guard ? 1 : n);
}

// Get the last element of an array. Passing **n** will return the last N
// values in the array.
function last(array, n, guard) {
  if (array == null || array.length < 1) return n == null || guard ? void 0 : [];
  if (n == null || guard) return array[array.length - 1];
  return rest(array, Math.max(0, array.length - n));
}

// Trim out all falsy values from an array.
function compact(array) {
  return filter(array, Boolean);
}

// Flatten out an array, either recursively (by default), or up to `depth`.
// Passing `true` or `false` as `depth` means `1` or `Infinity`, respectively.
function flatten(array, depth) {
  return flatten$1(array, depth, false);
}

// Take the difference between one array and a number of other arrays.
// Only the elements present in just the first array will remain.
var difference = restArguments(function(array, rest) {
  rest = flatten$1(rest, true, true);
  return filter(array, function(value){
    return !contains(rest, value);
  });
});

// Return a version of the array that does not contain the specified value(s).
var without = restArguments(function(array, otherArrays) {
  return difference(array, otherArrays);
});

// Produce a duplicate-free version of the array. If the array has already
// been sorted, you have the option of using a faster algorithm.
// The faster algorithm will not work with an iteratee if the iteratee
// is not a one-to-one function, so providing an iteratee will disable
// the faster algorithm.
function uniq(array, isSorted, iteratee, context) {
  if (!isBoolean(isSorted)) {
    context = iteratee;
    iteratee = isSorted;
    isSorted = false;
  }
  if (iteratee != null) iteratee = cb(iteratee, context);
  var result = [];
  var seen = [];
  for (var i = 0, length = getLength(array); i < length; i++) {
    var value = array[i],
        computed = iteratee ? iteratee(value, i, array) : value;
    if (isSorted && !iteratee) {
      if (!i || seen !== computed) result.push(value);
      seen = computed;
    } else if (iteratee) {
      if (!contains(seen, computed)) {
        seen.push(computed);
        result.push(value);
      }
    } else if (!contains(result, value)) {
      result.push(value);
    }
  }
  return result;
}

// Produce an array that contains the union: each distinct element from all of
// the passed-in arrays.
var union = restArguments(function(arrays) {
  return uniq(flatten$1(arrays, true, true));
});

// Produce an array that contains every item shared between all the
// passed-in arrays.
function intersection(array) {
  var result = [];
  var argsLength = arguments.length;
  for (var i = 0, length = getLength(array); i < length; i++) {
    var item = array[i];
    if (contains(result, item)) continue;
    var j;
    for (j = 1; j < argsLength; j++) {
      if (!contains(arguments[j], item)) break;
    }
    if (j === argsLength) result.push(item);
  }
  return result;
}

// Complement of zip. Unzip accepts an array of arrays and groups
// each array's elements on shared indices.
function unzip(array) {
  var length = array && max(array, getLength).length || 0;
  var result = Array(length);

  for (var index = 0; index < length; index++) {
    result[index] = pluck(array, index);
  }
  return result;
}

// Zip together multiple lists into a single array -- elements that share
// an index go together.
var zip = restArguments(unzip);

// Converts lists into objects. Pass either a single array of `[key, value]`
// pairs, or two parallel arrays of the same length -- one of keys, and one of
// the corresponding values. Passing by pairs is the reverse of `_.pairs`.
function object(list, values) {
  var result = {};
  for (var i = 0, length = getLength(list); i < length; i++) {
    if (values) {
      result[list[i]] = values[i];
    } else {
      result[list[i][0]] = list[i][1];
    }
  }
  return result;
}

// Generate an integer Array containing an arithmetic progression. A port of
// the native Python `range()` function. See
// [the Python documentation](https://docs.python.org/library/functions.html#range).
function range(start, stop, step) {
  if (stop == null) {
    stop = start || 0;
    start = 0;
  }
  if (!step) {
    step = stop < start ? -1 : 1;
  }

  var length = Math.max(Math.ceil((stop - start) / step), 0);
  var range = Array(length);

  for (var idx = 0; idx < length; idx++, start += step) {
    range[idx] = start;
  }

  return range;
}

// Chunk a single array into multiple arrays, each containing `count` or fewer
// items.
function chunk(array, count) {
  if (count == null || count < 1) return [];
  var result = [];
  var i = 0, length = array.length;
  while (i < length) {
    result.push(slice.call(array, i, i += count));
  }
  return result;
}

// Helper function to continue chaining intermediate results.
function chainResult(instance, obj) {
  return instance._chain ? _$1(obj).chain() : obj;
}

// Add your own custom functions to the Underscore object.
function mixin(obj) {
  each(functions(obj), function(name) {
    var func = _$1[name] = obj[name];
    _$1.prototype[name] = function() {
      var args = [this._wrapped];
      push.apply(args, arguments);
      return chainResult(this, func.apply(_$1, args));
    };
  });
  return _$1;
}

// Add all mutator `Array` functions to the wrapper.
each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
  var method = ArrayProto[name];
  _$1.prototype[name] = function() {
    var obj = this._wrapped;
    if (obj != null) {
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) {
        delete obj[0];
      }
    }
    return chainResult(this, obj);
  };
});

// Add all accessor `Array` functions to the wrapper.
each(['concat', 'join', 'slice'], function(name) {
  var method = ArrayProto[name];
  _$1.prototype[name] = function() {
    var obj = this._wrapped;
    if (obj != null) obj = method.apply(obj, arguments);
    return chainResult(this, obj);
  };
});

// Named Exports

var allExports = {
  __proto__: null,
  VERSION: VERSION,
  restArguments: restArguments,
  isObject: isObject,
  isNull: isNull,
  isUndefined: isUndefined,
  isBoolean: isBoolean,
  isElement: isElement,
  isString: isString,
  isNumber: isNumber,
  isDate: isDate,
  isRegExp: isRegExp,
  isError: isError,
  isSymbol: isSymbol,
  isArrayBuffer: isArrayBuffer,
  isDataView: isDataView$1,
  isArray: isArray,
  isFunction: isFunction$1,
  isArguments: isArguments$1,
  isFinite: isFinite$1,
  isNaN: isNaN$1,
  isTypedArray: isTypedArray$1,
  isEmpty: isEmpty,
  isMatch: isMatch,
  isEqual: isEqual,
  isMap: isMap,
  isWeakMap: isWeakMap,
  isSet: isSet,
  isWeakSet: isWeakSet,
  keys: keys,
  allKeys: allKeys,
  values: values,
  pairs: pairs,
  invert: invert,
  functions: functions,
  methods: functions,
  extend: extend,
  extendOwn: extendOwn,
  assign: extendOwn,
  defaults: defaults,
  create: create,
  clone: clone,
  tap: tap,
  get: get,
  has: has,
  mapObject: mapObject,
  identity: identity,
  constant: constant,
  noop: noop,
  toPath: toPath$1,
  property: property,
  propertyOf: propertyOf,
  matcher: matcher,
  matches: matcher,
  times: times,
  random: random,
  now: now,
  escape: _escape,
  unescape: _unescape,
  templateSettings: templateSettings,
  template: template,
  result: result,
  uniqueId: uniqueId,
  chain: chain,
  iteratee: iteratee,
  partial: partial,
  bind: bind,
  bindAll: bindAll,
  memoize: memoize,
  delay: delay,
  defer: defer,
  throttle: throttle,
  debounce: debounce,
  wrap: wrap,
  negate: negate,
  compose: compose,
  after: after,
  before: before,
  once: once,
  findKey: findKey,
  findIndex: findIndex,
  findLastIndex: findLastIndex,
  sortedIndex: sortedIndex,
  indexOf: indexOf,
  lastIndexOf: lastIndexOf,
  find: find,
  detect: find,
  findWhere: findWhere,
  each: each,
  forEach: each,
  map: map,
  collect: map,
  reduce: reduce,
  foldl: reduce,
  inject: reduce,
  reduceRight: reduceRight,
  foldr: reduceRight,
  filter: filter,
  select: filter,
  reject: reject,
  every: every,
  all: every,
  some: some,
  any: some,
  contains: contains,
  includes: contains,
  include: contains,
  invoke: invoke,
  pluck: pluck,
  where: where,
  max: max,
  min: min,
  shuffle: shuffle,
  sample: sample,
  sortBy: sortBy,
  groupBy: groupBy,
  indexBy: indexBy,
  countBy: countBy,
  partition: partition,
  toArray: toArray,
  size: size,
  pick: pick,
  omit: omit,
  first: first,
  head: first,
  take: first,
  initial: initial,
  last: last,
  rest: rest,
  tail: rest,
  drop: rest,
  compact: compact,
  flatten: flatten,
  without: without,
  uniq: uniq,
  unique: uniq,
  union: union,
  intersection: intersection,
  difference: difference,
  unzip: unzip,
  transpose: unzip,
  zip: zip,
  object: object,
  range: range,
  chunk: chunk,
  mixin: mixin,
  'default': _$1
};

// Default Export

// Add all of the Underscore functions to the wrapper object.
var _ = mixin(allExports);
// Legacy Node.js API.
_._ = _;

exports.VERSION = VERSION;
exports._ = _;
exports._escape = _escape;
exports._unescape = _unescape;
exports.after = after;
exports.allKeys = allKeys;
exports.before = before;
exports.bind = bind;
exports.bindAll = bindAll;
exports.chain = chain;
exports.chunk = chunk;
exports.clone = clone;
exports.compact = compact;
exports.compose = compose;
exports.constant = constant;
exports.contains = contains;
exports.countBy = countBy;
exports.create = create;
exports.debounce = debounce;
exports.defaults = defaults;
exports.defer = defer;
exports.delay = delay;
exports.difference = difference;
exports.each = each;
exports.every = every;
exports.extend = extend;
exports.extendOwn = extendOwn;
exports.filter = filter;
exports.find = find;
exports.findIndex = findIndex;
exports.findKey = findKey;
exports.findLastIndex = findLastIndex;
exports.findWhere = findWhere;
exports.first = first;
exports.flatten = flatten;
exports.functions = functions;
exports.get = get;
exports.groupBy = groupBy;
exports.has = has;
exports.identity = identity;
exports.indexBy = indexBy;
exports.indexOf = indexOf;
exports.initial = initial;
exports.intersection = intersection;
exports.invert = invert;
exports.invoke = invoke;
exports.isArguments = isArguments$1;
exports.isArray = isArray;
exports.isArrayBuffer = isArrayBuffer;
exports.isBoolean = isBoolean;
exports.isDataView = isDataView$1;
exports.isDate = isDate;
exports.isElement = isElement;
exports.isEmpty = isEmpty;
exports.isEqual = isEqual;
exports.isError = isError;
exports.isFinite = isFinite$1;
exports.isFunction = isFunction$1;
exports.isMap = isMap;
exports.isMatch = isMatch;
exports.isNaN = isNaN$1;
exports.isNull = isNull;
exports.isNumber = isNumber;
exports.isObject = isObject;
exports.isRegExp = isRegExp;
exports.isSet = isSet;
exports.isString = isString;
exports.isSymbol = isSymbol;
exports.isTypedArray = isTypedArray$1;
exports.isUndefined = isUndefined;
exports.isWeakMap = isWeakMap;
exports.isWeakSet = isWeakSet;
exports.iteratee = iteratee;
exports.keys = keys;
exports.last = last;
exports.lastIndexOf = lastIndexOf;
exports.map = map;
exports.mapObject = mapObject;
exports.matcher = matcher;
exports.max = max;
exports.memoize = memoize;
exports.min = min;
exports.mixin = mixin;
exports.negate = negate;
exports.noop = noop;
exports.now = now;
exports.object = object;
exports.omit = omit;
exports.once = once;
exports.pairs = pairs;
exports.partial = partial;
exports.partition = partition;
exports.pick = pick;
exports.pluck = pluck;
exports.property = property;
exports.propertyOf = propertyOf;
exports.random = random;
exports.range = range;
exports.reduce = reduce;
exports.reduceRight = reduceRight;
exports.reject = reject;
exports.rest = rest;
exports.restArguments = restArguments;
exports.result = result;
exports.sample = sample;
exports.shuffle = shuffle;
exports.size = size;
exports.some = some;
exports.sortBy = sortBy;
exports.sortedIndex = sortedIndex;
exports.tap = tap;
exports.template = template;
exports.templateSettings = templateSettings;
exports.throttle = throttle;
exports.times = times;
exports.toArray = toArray;
exports.toPath = toPath$1;
exports.union = union;
exports.uniq = uniq;
exports.uniqueId = uniqueId;
exports.unzip = unzip;
exports.values = values;
exports.where = where;
exports.without = without;
exports.wrap = wrap;
exports.zip = zip;
//# sourceMappingURL=underscore-node-f.cjs.map


/***/ }),

/***/ "./node_modules/underscore/underscore-node.cjs":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/underscore-node.cjs ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

//     Underscore.js 1.13.1
//     https://underscorejs.org
//     (c) 2009-2021 Jeremy Ashkenas, Julian Gonggrijp, and DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

var underscoreNodeF = __webpack_require__(/*! ./underscore-node-f.cjs */ "./node_modules/underscore/underscore-node-f.cjs");



module.exports = underscoreNodeF._;
//# sourceMappingURL=underscore-node.cjs.map


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/sp500.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9hcGkvc3A1MDAuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvdW5kZXJzY29yZS1ub2RlLWYuY2pzIiwid2VicGFjazovL25leHRqcy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL3VuZGVyc2NvcmUtbm9kZS5janMiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiYXhpb3NcIiJdLCJuYW1lcyI6WyJ1bmRlcnNjb3JlIiwicmVxdWlyZSIsImF4aW9zIiwicmVxIiwicmVzIiwibmV4dCIsInNwNTAwVVJMIiwiZ2V0IiwidGhlbiIsInMiLCJzdGF0dXMiLCJzcDUwMGRldGFpbHMiLCJyb3dzIiwiZGF0YSIsInNwbGl0IiwiaGVhZGVyIiwiaSIsImxlbmd0aCIsInJvdyIsImNvbHMiLCJyZXN1bHQiLCJyZWR1Y2UiLCJmaWVsZCIsImluZGV4IiwicmVwbGFjZSIsInB1c2giLCJzZW5kIiwiZXJyb3IiLCJjYXRjaCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsTUFBTUEsVUFBVSxHQUFHQyxtQkFBTyxDQUFDLGlFQUFELENBQTFCOztBQUNBLE1BQU1DLEtBQUssR0FBR0QsbUJBQU8sQ0FBQyxvQkFBRCxDQUFyQjs7QUFFQSwrREFBZSxDQUFDRSxHQUFELEVBQU1DLEdBQU4sRUFBV0MsSUFBWCxLQUFvQjtBQUNqQyxNQUFJO0FBQ0YsVUFBTUMsUUFBUSxHQUNaLDJGQURGO0FBRUFKLFNBQUssQ0FDRkssR0FESCxDQUNPRCxRQURQLEVBRUdFLElBRkgsQ0FFU0MsQ0FBRCxJQUFPO0FBQ1gsVUFBSUEsQ0FBQyxDQUFDQyxNQUFGLEtBQWEsR0FBakIsRUFBc0I7QUFDcEIsWUFBSUMsWUFBWSxHQUFHLEVBQW5CO0FBQ0EsWUFBSUMsSUFBSSxHQUFHSCxDQUFDLENBQUNJLElBQUYsQ0FBT0MsS0FBUCxDQUFhLElBQWIsQ0FBWDtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsT0FBTztBQUN6QztBQUNBLDZCQUE2QixrQkFBa0IsRUFBRTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFlBQVk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxlQUFlO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsWUFBWTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDhCQUE4QjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLDBCQUEwQjtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsWUFBWTtBQUNoRDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esc0NBQXNDLFlBQVk7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsZ0JBQWdCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSw4QkFBOEI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsZ0JBQWdCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixnQkFBZ0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsWUFBWTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsWUFBWTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixXQUFXO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QyxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsWUFBWTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFlBQVk7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFlBQVk7QUFDeEQ7QUFDQTtBQUNBO0FBQ0EsZUFBZSxnQkFBZ0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLGdCQUFnQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxZQUFZO0FBQ3ZEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUJBQW1CLGNBQWM7QUFDakM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDaEIsYUFBYTtBQUNiLGNBQWM7QUFDZCxhQUFhO0FBQ2IsZUFBZTtBQUNmLFlBQVk7QUFDWixXQUFXO0FBQ1g7Ozs7Ozs7Ozs7O0FDN21FQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsbUJBQU8sQ0FBQyxnRkFBeUI7Ozs7QUFJdkQ7QUFDQTs7Ozs7Ozs7Ozs7O0FDVkEsbUMiLCJmaWxlIjoicGFnZXMvYXBpL3NwNTAwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdW5kZXJzY29yZSA9IHJlcXVpcmUoXCJ1bmRlcnNjb3JlXCIpO1xuY29uc3QgYXhpb3MgPSByZXF1aXJlKFwiYXhpb3NcIik7XG5cbmV4cG9ydCBkZWZhdWx0IChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHNwNTAwVVJMID1cbiAgICAgIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3NhaWtyNzg5L3N0b2NrLWFuYWx5c2lzLXRvb2wtMTAxMS9tYXN0ZXIvRGF0YS9zcDUwMC5jc3ZcIjtcbiAgICBheGlvc1xuICAgICAgLmdldChzcDUwMFVSTClcbiAgICAgIC50aGVuKChzKSA9PiB7XG4gICAgICAgIGlmIChzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgbGV0IHNwNTAwZGV0YWlscyA9IFtdO1xuICAgICAgICAgIGxldCByb3dzID0gcy5kYXRhLnNwbGl0KFwiXFxuXCIpO1xuICAgICAgICAgIGNvbnN0IGhlYWRlciA9IHJvd3NbMF0uc3BsaXQoXCIsXCIpO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gcm93c1tpXTtcbiAgICAgICAgICAgIGNvbnN0IGNvbHMgPSByb3cuc3BsaXQoXCIsXCIpO1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGNvbHMucmVkdWNlKGZ1bmN0aW9uIChyZXN1bHQsIGZpZWxkLCBpbmRleCkge1xuICAgICAgICAgICAgICByZXN1bHRbXG4gICAgICAgICAgICAgICAgaGVhZGVyW2luZGV4XS5yZXBsYWNlKC8oXFxyXFxufFxcbnxcXHIpL2dtLCBcIlwiKVxuICAgICAgICAgICAgICBdID0gZmllbGQucmVwbGFjZSgvKFxcclxcbnxcXG58XFxyKS9nbSwgXCJcIik7XG4gICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9LCB7fSk7XG4gICAgICAgICAgICBzcDUwMGRldGFpbHMucHVzaChyZXN1bHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXMuc2VuZChzcDUwMGRldGFpbHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5zZW5kKHsgZXJyb3I6IFwiZXJyb3JcIiB9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICByZXMuc3RhdHVzKDQwNCkuc2VuZCh7IGVycm9yOiBcImVycm9yXCIgfSk7XG4gICAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgcmVzLnN0YXR1cyg0MDQpLnNlbmQoeyBlcnJvcjogXCJlcnJvclwiIH0pO1xuICB9XG59O1xuIiwiLy8gICAgIFVuZGVyc2NvcmUuanMgMS4xMy4xXG4vLyAgICAgaHR0cHM6Ly91bmRlcnNjb3JlanMub3JnXG4vLyAgICAgKGMpIDIwMDktMjAyMSBKZXJlbXkgQXNoa2VuYXMsIEp1bGlhbiBHb25nZ3JpanAsIGFuZCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbi8vICAgICBVbmRlcnNjb3JlIG1heSBiZSBmcmVlbHkgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG4vLyBDdXJyZW50IHZlcnNpb24uXG52YXIgVkVSU0lPTiA9ICcxLjEzLjEnO1xuXG4vLyBFc3RhYmxpc2ggdGhlIHJvb3Qgb2JqZWN0LCBgd2luZG93YCAoYHNlbGZgKSBpbiB0aGUgYnJvd3NlciwgYGdsb2JhbGBcbi8vIG9uIHRoZSBzZXJ2ZXIsIG9yIGB0aGlzYCBpbiBzb21lIHZpcnR1YWwgbWFjaGluZXMuIFdlIHVzZSBgc2VsZmBcbi8vIGluc3RlYWQgb2YgYHdpbmRvd2AgZm9yIGBXZWJXb3JrZXJgIHN1cHBvcnQuXG52YXIgcm9vdCA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYuc2VsZiA9PT0gc2VsZiAmJiBzZWxmIHx8XG4gICAgICAgICAgdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwuZ2xvYmFsID09PSBnbG9iYWwgJiYgZ2xvYmFsIHx8XG4gICAgICAgICAgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKSB8fFxuICAgICAgICAgIHt9O1xuXG4vLyBTYXZlIGJ5dGVzIGluIHRoZSBtaW5pZmllZCAoYnV0IG5vdCBnemlwcGVkKSB2ZXJzaW9uOlxudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGUsIE9ialByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcbnZhciBTeW1ib2xQcm90byA9IHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnID8gU3ltYm9sLnByb3RvdHlwZSA6IG51bGw7XG5cbi8vIENyZWF0ZSBxdWljayByZWZlcmVuY2UgdmFyaWFibGVzIGZvciBzcGVlZCBhY2Nlc3MgdG8gY29yZSBwcm90b3R5cGVzLlxudmFyIHB1c2ggPSBBcnJheVByb3RvLnB1c2gsXG4gICAgc2xpY2UgPSBBcnJheVByb3RvLnNsaWNlLFxuICAgIHRvU3RyaW5nID0gT2JqUHJvdG8udG9TdHJpbmcsXG4gICAgaGFzT3duUHJvcGVydHkgPSBPYmpQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLy8gTW9kZXJuIGZlYXR1cmUgZGV0ZWN0aW9uLlxudmFyIHN1cHBvcnRzQXJyYXlCdWZmZXIgPSB0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnLFxuICAgIHN1cHBvcnRzRGF0YVZpZXcgPSB0eXBlb2YgRGF0YVZpZXcgIT09ICd1bmRlZmluZWQnO1xuXG4vLyBBbGwgKipFQ01BU2NyaXB0IDUrKiogbmF0aXZlIGZ1bmN0aW9uIGltcGxlbWVudGF0aW9ucyB0aGF0IHdlIGhvcGUgdG8gdXNlXG4vLyBhcmUgZGVjbGFyZWQgaGVyZS5cbnZhciBuYXRpdmVJc0FycmF5ID0gQXJyYXkuaXNBcnJheSxcbiAgICBuYXRpdmVLZXlzID0gT2JqZWN0LmtleXMsXG4gICAgbmF0aXZlQ3JlYXRlID0gT2JqZWN0LmNyZWF0ZSxcbiAgICBuYXRpdmVJc1ZpZXcgPSBzdXBwb3J0c0FycmF5QnVmZmVyICYmIEFycmF5QnVmZmVyLmlzVmlldztcblxuLy8gQ3JlYXRlIHJlZmVyZW5jZXMgdG8gdGhlc2UgYnVpbHRpbiBmdW5jdGlvbnMgYmVjYXVzZSB3ZSBvdmVycmlkZSB0aGVtLlxudmFyIF9pc05hTiA9IGlzTmFOLFxuICAgIF9pc0Zpbml0ZSA9IGlzRmluaXRlO1xuXG4vLyBLZXlzIGluIElFIDwgOSB0aGF0IHdvbid0IGJlIGl0ZXJhdGVkIGJ5IGBmb3Iga2V5IGluIC4uLmAgYW5kIHRodXMgbWlzc2VkLlxudmFyIGhhc0VudW1CdWcgPSAhe3RvU3RyaW5nOiBudWxsfS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgndG9TdHJpbmcnKTtcbnZhciBub25FbnVtZXJhYmxlUHJvcHMgPSBbJ3ZhbHVlT2YnLCAnaXNQcm90b3R5cGVPZicsICd0b1N0cmluZycsXG4gICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICdoYXNPd25Qcm9wZXJ0eScsICd0b0xvY2FsZVN0cmluZyddO1xuXG4vLyBUaGUgbGFyZ2VzdCBpbnRlZ2VyIHRoYXQgY2FuIGJlIHJlcHJlc2VudGVkIGV4YWN0bHkuXG52YXIgTUFYX0FSUkFZX0lOREVYID0gTWF0aC5wb3coMiwgNTMpIC0gMTtcblxuLy8gU29tZSBmdW5jdGlvbnMgdGFrZSBhIHZhcmlhYmxlIG51bWJlciBvZiBhcmd1bWVudHMsIG9yIGEgZmV3IGV4cGVjdGVkXG4vLyBhcmd1bWVudHMgYXQgdGhlIGJlZ2lubmluZyBhbmQgdGhlbiBhIHZhcmlhYmxlIG51bWJlciBvZiB2YWx1ZXMgdG8gb3BlcmF0ZVxuLy8gb24uIFRoaXMgaGVscGVyIGFjY3VtdWxhdGVzIGFsbCByZW1haW5pbmcgYXJndW1lbnRzIHBhc3QgdGhlIGZ1bmN0aW9u4oCZc1xuLy8gYXJndW1lbnQgbGVuZ3RoIChvciBhbiBleHBsaWNpdCBgc3RhcnRJbmRleGApLCBpbnRvIGFuIGFycmF5IHRoYXQgYmVjb21lc1xuLy8gdGhlIGxhc3QgYXJndW1lbnQuIFNpbWlsYXIgdG8gRVM24oCZcyBcInJlc3QgcGFyYW1ldGVyXCIuXG5mdW5jdGlvbiByZXN0QXJndW1lbnRzKGZ1bmMsIHN0YXJ0SW5kZXgpIHtcbiAgc3RhcnRJbmRleCA9IHN0YXJ0SW5kZXggPT0gbnVsbCA/IGZ1bmMubGVuZ3RoIC0gMSA6ICtzdGFydEluZGV4O1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxlbmd0aCA9IE1hdGgubWF4KGFyZ3VtZW50cy5sZW5ndGggLSBzdGFydEluZGV4LCAwKSxcbiAgICAgICAgcmVzdCA9IEFycmF5KGxlbmd0aCksXG4gICAgICAgIGluZGV4ID0gMDtcbiAgICBmb3IgKDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHJlc3RbaW5kZXhdID0gYXJndW1lbnRzW2luZGV4ICsgc3RhcnRJbmRleF07XG4gICAgfVxuICAgIHN3aXRjaCAoc3RhcnRJbmRleCkge1xuICAgICAgY2FzZSAwOiByZXR1cm4gZnVuYy5jYWxsKHRoaXMsIHJlc3QpO1xuICAgICAgY2FzZSAxOiByZXR1cm4gZnVuYy5jYWxsKHRoaXMsIGFyZ3VtZW50c1swXSwgcmVzdCk7XG4gICAgICBjYXNlIDI6IHJldHVybiBmdW5jLmNhbGwodGhpcywgYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0sIHJlc3QpO1xuICAgIH1cbiAgICB2YXIgYXJncyA9IEFycmF5KHN0YXJ0SW5kZXggKyAxKTtcbiAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBzdGFydEluZGV4OyBpbmRleCsrKSB7XG4gICAgICBhcmdzW2luZGV4XSA9IGFyZ3VtZW50c1tpbmRleF07XG4gICAgfVxuICAgIGFyZ3Nbc3RhcnRJbmRleF0gPSByZXN0O1xuICAgIHJldHVybiBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9O1xufVxuXG4vLyBJcyBhIGdpdmVuIHZhcmlhYmxlIGFuIG9iamVjdD9cbmZ1bmN0aW9uIGlzT2JqZWN0KG9iaikge1xuICB2YXIgdHlwZSA9IHR5cGVvZiBvYmo7XG4gIHJldHVybiB0eXBlID09PSAnZnVuY3Rpb24nIHx8IHR5cGUgPT09ICdvYmplY3QnICYmICEhb2JqO1xufVxuXG4vLyBJcyBhIGdpdmVuIHZhbHVlIGVxdWFsIHRvIG51bGw/XG5mdW5jdGlvbiBpc051bGwob2JqKSB7XG4gIHJldHVybiBvYmogPT09IG51bGw7XG59XG5cbi8vIElzIGEgZ2l2ZW4gdmFyaWFibGUgdW5kZWZpbmVkP1xuZnVuY3Rpb24gaXNVbmRlZmluZWQob2JqKSB7XG4gIHJldHVybiBvYmogPT09IHZvaWQgMDtcbn1cblxuLy8gSXMgYSBnaXZlbiB2YWx1ZSBhIGJvb2xlYW4/XG5mdW5jdGlvbiBpc0Jvb2xlYW4ob2JqKSB7XG4gIHJldHVybiBvYmogPT09IHRydWUgfHwgb2JqID09PSBmYWxzZSB8fCB0b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IEJvb2xlYW5dJztcbn1cblxuLy8gSXMgYSBnaXZlbiB2YWx1ZSBhIERPTSBlbGVtZW50P1xuZnVuY3Rpb24gaXNFbGVtZW50KG9iaikge1xuICByZXR1cm4gISEob2JqICYmIG9iai5ub2RlVHlwZSA9PT0gMSk7XG59XG5cbi8vIEludGVybmFsIGZ1bmN0aW9uIGZvciBjcmVhdGluZyBhIGB0b1N0cmluZ2AtYmFzZWQgdHlwZSB0ZXN0ZXIuXG5mdW5jdGlvbiB0YWdUZXN0ZXIobmFtZSkge1xuICB2YXIgdGFnID0gJ1tvYmplY3QgJyArIG5hbWUgKyAnXSc7XG4gIHJldHVybiBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbChvYmopID09PSB0YWc7XG4gIH07XG59XG5cbnZhciBpc1N0cmluZyA9IHRhZ1Rlc3RlcignU3RyaW5nJyk7XG5cbnZhciBpc051bWJlciA9IHRhZ1Rlc3RlcignTnVtYmVyJyk7XG5cbnZhciBpc0RhdGUgPSB0YWdUZXN0ZXIoJ0RhdGUnKTtcblxudmFyIGlzUmVnRXhwID0gdGFnVGVzdGVyKCdSZWdFeHAnKTtcblxudmFyIGlzRXJyb3IgPSB0YWdUZXN0ZXIoJ0Vycm9yJyk7XG5cbnZhciBpc1N5bWJvbCA9IHRhZ1Rlc3RlcignU3ltYm9sJyk7XG5cbnZhciBpc0FycmF5QnVmZmVyID0gdGFnVGVzdGVyKCdBcnJheUJ1ZmZlcicpO1xuXG52YXIgaXNGdW5jdGlvbiA9IHRhZ1Rlc3RlcignRnVuY3Rpb24nKTtcblxuLy8gT3B0aW1pemUgYGlzRnVuY3Rpb25gIGlmIGFwcHJvcHJpYXRlLiBXb3JrIGFyb3VuZCBzb21lIGB0eXBlb2ZgIGJ1Z3MgaW4gb2xkXG4vLyB2OCwgSUUgMTEgKCMxNjIxKSwgU2FmYXJpIDggKCMxOTI5KSwgYW5kIFBoYW50b21KUyAoIzIyMzYpLlxudmFyIG5vZGVsaXN0ID0gcm9vdC5kb2N1bWVudCAmJiByb290LmRvY3VtZW50LmNoaWxkTm9kZXM7XG5pZiAodHlwZW9mIC8uLyAhPSAnZnVuY3Rpb24nICYmIHR5cGVvZiBJbnQ4QXJyYXkgIT0gJ29iamVjdCcgJiYgdHlwZW9mIG5vZGVsaXN0ICE9ICdmdW5jdGlvbicpIHtcbiAgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09ICdmdW5jdGlvbicgfHwgZmFsc2U7XG4gIH07XG59XG5cbnZhciBpc0Z1bmN0aW9uJDEgPSBpc0Z1bmN0aW9uO1xuXG52YXIgaGFzT2JqZWN0VGFnID0gdGFnVGVzdGVyKCdPYmplY3QnKTtcblxuLy8gSW4gSUUgMTAgLSBFZGdlIDEzLCBgRGF0YVZpZXdgIGhhcyBzdHJpbmcgdGFnIGAnW29iamVjdCBPYmplY3RdJ2AuXG4vLyBJbiBJRSAxMSwgdGhlIG1vc3QgY29tbW9uIGFtb25nIHRoZW0sIHRoaXMgcHJvYmxlbSBhbHNvIGFwcGxpZXMgdG9cbi8vIGBNYXBgLCBgV2Vha01hcGAgYW5kIGBTZXRgLlxudmFyIGhhc1N0cmluZ1RhZ0J1ZyA9IChcbiAgICAgIHN1cHBvcnRzRGF0YVZpZXcgJiYgaGFzT2JqZWN0VGFnKG5ldyBEYXRhVmlldyhuZXcgQXJyYXlCdWZmZXIoOCkpKVxuICAgICksXG4gICAgaXNJRTExID0gKHR5cGVvZiBNYXAgIT09ICd1bmRlZmluZWQnICYmIGhhc09iamVjdFRhZyhuZXcgTWFwKSk7XG5cbnZhciBpc0RhdGFWaWV3ID0gdGFnVGVzdGVyKCdEYXRhVmlldycpO1xuXG4vLyBJbiBJRSAxMCAtIEVkZ2UgMTMsIHdlIG5lZWQgYSBkaWZmZXJlbnQgaGV1cmlzdGljXG4vLyB0byBkZXRlcm1pbmUgd2hldGhlciBhbiBvYmplY3QgaXMgYSBgRGF0YVZpZXdgLlxuZnVuY3Rpb24gaWUxMElzRGF0YVZpZXcob2JqKSB7XG4gIHJldHVybiBvYmogIT0gbnVsbCAmJiBpc0Z1bmN0aW9uJDEob2JqLmdldEludDgpICYmIGlzQXJyYXlCdWZmZXIob2JqLmJ1ZmZlcik7XG59XG5cbnZhciBpc0RhdGFWaWV3JDEgPSAoaGFzU3RyaW5nVGFnQnVnID8gaWUxMElzRGF0YVZpZXcgOiBpc0RhdGFWaWV3KTtcblxuLy8gSXMgYSBnaXZlbiB2YWx1ZSBhbiBhcnJheT9cbi8vIERlbGVnYXRlcyB0byBFQ01BNSdzIG5hdGl2ZSBgQXJyYXkuaXNBcnJheWAuXG52YXIgaXNBcnJheSA9IG5hdGl2ZUlzQXJyYXkgfHwgdGFnVGVzdGVyKCdBcnJheScpO1xuXG4vLyBJbnRlcm5hbCBmdW5jdGlvbiB0byBjaGVjayB3aGV0aGVyIGBrZXlgIGlzIGFuIG93biBwcm9wZXJ0eSBuYW1lIG9mIGBvYmpgLlxuZnVuY3Rpb24gaGFzJDEob2JqLCBrZXkpIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIGhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpO1xufVxuXG52YXIgaXNBcmd1bWVudHMgPSB0YWdUZXN0ZXIoJ0FyZ3VtZW50cycpO1xuXG4vLyBEZWZpbmUgYSBmYWxsYmFjayB2ZXJzaW9uIG9mIHRoZSBtZXRob2QgaW4gYnJvd3NlcnMgKGFoZW0sIElFIDwgOSksIHdoZXJlXG4vLyB0aGVyZSBpc24ndCBhbnkgaW5zcGVjdGFibGUgXCJBcmd1bWVudHNcIiB0eXBlLlxuKGZ1bmN0aW9uKCkge1xuICBpZiAoIWlzQXJndW1lbnRzKGFyZ3VtZW50cykpIHtcbiAgICBpc0FyZ3VtZW50cyA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIGhhcyQxKG9iaiwgJ2NhbGxlZScpO1xuICAgIH07XG4gIH1cbn0oKSk7XG5cbnZhciBpc0FyZ3VtZW50cyQxID0gaXNBcmd1bWVudHM7XG5cbi8vIElzIGEgZ2l2ZW4gb2JqZWN0IGEgZmluaXRlIG51bWJlcj9cbmZ1bmN0aW9uIGlzRmluaXRlJDEob2JqKSB7XG4gIHJldHVybiAhaXNTeW1ib2wob2JqKSAmJiBfaXNGaW5pdGUob2JqKSAmJiAhaXNOYU4ocGFyc2VGbG9hdChvYmopKTtcbn1cblxuLy8gSXMgdGhlIGdpdmVuIHZhbHVlIGBOYU5gP1xuZnVuY3Rpb24gaXNOYU4kMShvYmopIHtcbiAgcmV0dXJuIGlzTnVtYmVyKG9iaikgJiYgX2lzTmFOKG9iaik7XG59XG5cbi8vIFByZWRpY2F0ZS1nZW5lcmF0aW5nIGZ1bmN0aW9uLiBPZnRlbiB1c2VmdWwgb3V0c2lkZSBvZiBVbmRlcnNjb3JlLlxuZnVuY3Rpb24gY29uc3RhbnQodmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcbn1cblxuLy8gQ29tbW9uIGludGVybmFsIGxvZ2ljIGZvciBgaXNBcnJheUxpa2VgIGFuZCBgaXNCdWZmZXJMaWtlYC5cbmZ1bmN0aW9uIGNyZWF0ZVNpemVQcm9wZXJ0eUNoZWNrKGdldFNpemVQcm9wZXJ0eSkge1xuICByZXR1cm4gZnVuY3Rpb24oY29sbGVjdGlvbikge1xuICAgIHZhciBzaXplUHJvcGVydHkgPSBnZXRTaXplUHJvcGVydHkoY29sbGVjdGlvbik7XG4gICAgcmV0dXJuIHR5cGVvZiBzaXplUHJvcGVydHkgPT0gJ251bWJlcicgJiYgc2l6ZVByb3BlcnR5ID49IDAgJiYgc2l6ZVByb3BlcnR5IDw9IE1BWF9BUlJBWV9JTkRFWDtcbiAgfVxufVxuXG4vLyBJbnRlcm5hbCBoZWxwZXIgdG8gZ2VuZXJhdGUgYSBmdW5jdGlvbiB0byBvYnRhaW4gcHJvcGVydHkgYGtleWAgZnJvbSBgb2JqYC5cbmZ1bmN0aW9uIHNoYWxsb3dQcm9wZXJ0eShrZXkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBvYmogPT0gbnVsbCA/IHZvaWQgMCA6IG9ialtrZXldO1xuICB9O1xufVxuXG4vLyBJbnRlcm5hbCBoZWxwZXIgdG8gb2J0YWluIHRoZSBgYnl0ZUxlbmd0aGAgcHJvcGVydHkgb2YgYW4gb2JqZWN0LlxudmFyIGdldEJ5dGVMZW5ndGggPSBzaGFsbG93UHJvcGVydHkoJ2J5dGVMZW5ndGgnKTtcblxuLy8gSW50ZXJuYWwgaGVscGVyIHRvIGRldGVybWluZSB3aGV0aGVyIHdlIHNob3VsZCBzcGVuZCBleHRlbnNpdmUgY2hlY2tzIGFnYWluc3Rcbi8vIGBBcnJheUJ1ZmZlcmAgZXQgYWwuXG52YXIgaXNCdWZmZXJMaWtlID0gY3JlYXRlU2l6ZVByb3BlcnR5Q2hlY2soZ2V0Qnl0ZUxlbmd0aCk7XG5cbi8vIElzIGEgZ2l2ZW4gdmFsdWUgYSB0eXBlZCBhcnJheT9cbnZhciB0eXBlZEFycmF5UGF0dGVybiA9IC9cXFtvYmplY3QgKChJfFVpKW50KDh8MTZ8MzIpfEZsb2F0KDMyfDY0KXxVaW50OENsYW1wZWR8QmlnKEl8VWkpbnQ2NClBcnJheVxcXS87XG5mdW5jdGlvbiBpc1R5cGVkQXJyYXkob2JqKSB7XG4gIC8vIGBBcnJheUJ1ZmZlci5pc1ZpZXdgIGlzIHRoZSBtb3N0IGZ1dHVyZS1wcm9vZiwgc28gdXNlIGl0IHdoZW4gYXZhaWxhYmxlLlxuICAvLyBPdGhlcndpc2UsIGZhbGwgYmFjayBvbiB0aGUgYWJvdmUgcmVndWxhciBleHByZXNzaW9uLlxuICByZXR1cm4gbmF0aXZlSXNWaWV3ID8gKG5hdGl2ZUlzVmlldyhvYmopICYmICFpc0RhdGFWaWV3JDEob2JqKSkgOlxuICAgICAgICAgICAgICAgIGlzQnVmZmVyTGlrZShvYmopICYmIHR5cGVkQXJyYXlQYXR0ZXJuLnRlc3QodG9TdHJpbmcuY2FsbChvYmopKTtcbn1cblxudmFyIGlzVHlwZWRBcnJheSQxID0gc3VwcG9ydHNBcnJheUJ1ZmZlciA/IGlzVHlwZWRBcnJheSA6IGNvbnN0YW50KGZhbHNlKTtcblxuLy8gSW50ZXJuYWwgaGVscGVyIHRvIG9idGFpbiB0aGUgYGxlbmd0aGAgcHJvcGVydHkgb2YgYW4gb2JqZWN0LlxudmFyIGdldExlbmd0aCA9IHNoYWxsb3dQcm9wZXJ0eSgnbGVuZ3RoJyk7XG5cbi8vIEludGVybmFsIGhlbHBlciB0byBjcmVhdGUgYSBzaW1wbGUgbG9va3VwIHN0cnVjdHVyZS5cbi8vIGBjb2xsZWN0Tm9uRW51bVByb3BzYCB1c2VkIHRvIGRlcGVuZCBvbiBgXy5jb250YWluc2AsIGJ1dCB0aGlzIGxlZCB0b1xuLy8gY2lyY3VsYXIgaW1wb3J0cy4gYGVtdWxhdGVkU2V0YCBpcyBhIG9uZS1vZmYgc29sdXRpb24gdGhhdCBvbmx5IHdvcmtzIGZvclxuLy8gYXJyYXlzIG9mIHN0cmluZ3MuXG5mdW5jdGlvbiBlbXVsYXRlZFNldChrZXlzKSB7XG4gIHZhciBoYXNoID0ge307XG4gIGZvciAodmFyIGwgPSBrZXlzLmxlbmd0aCwgaSA9IDA7IGkgPCBsOyArK2kpIGhhc2hba2V5c1tpXV0gPSB0cnVlO1xuICByZXR1cm4ge1xuICAgIGNvbnRhaW5zOiBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIGhhc2hba2V5XTsgfSxcbiAgICBwdXNoOiBmdW5jdGlvbihrZXkpIHtcbiAgICAgIGhhc2hba2V5XSA9IHRydWU7XG4gICAgICByZXR1cm4ga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICB9O1xufVxuXG4vLyBJbnRlcm5hbCBoZWxwZXIuIENoZWNrcyBga2V5c2AgZm9yIHRoZSBwcmVzZW5jZSBvZiBrZXlzIGluIElFIDwgOSB0aGF0IHdvbid0XG4vLyBiZSBpdGVyYXRlZCBieSBgZm9yIGtleSBpbiAuLi5gIGFuZCB0aHVzIG1pc3NlZC4gRXh0ZW5kcyBga2V5c2AgaW4gcGxhY2UgaWZcbi8vIG5lZWRlZC5cbmZ1bmN0aW9uIGNvbGxlY3ROb25FbnVtUHJvcHMob2JqLCBrZXlzKSB7XG4gIGtleXMgPSBlbXVsYXRlZFNldChrZXlzKTtcbiAgdmFyIG5vbkVudW1JZHggPSBub25FbnVtZXJhYmxlUHJvcHMubGVuZ3RoO1xuICB2YXIgY29uc3RydWN0b3IgPSBvYmouY29uc3RydWN0b3I7XG4gIHZhciBwcm90byA9IGlzRnVuY3Rpb24kMShjb25zdHJ1Y3RvcikgJiYgY29uc3RydWN0b3IucHJvdG90eXBlIHx8IE9ialByb3RvO1xuXG4gIC8vIENvbnN0cnVjdG9yIGlzIGEgc3BlY2lhbCBjYXNlLlxuICB2YXIgcHJvcCA9ICdjb25zdHJ1Y3Rvcic7XG4gIGlmIChoYXMkMShvYmosIHByb3ApICYmICFrZXlzLmNvbnRhaW5zKHByb3ApKSBrZXlzLnB1c2gocHJvcCk7XG5cbiAgd2hpbGUgKG5vbkVudW1JZHgtLSkge1xuICAgIHByb3AgPSBub25FbnVtZXJhYmxlUHJvcHNbbm9uRW51bUlkeF07XG4gICAgaWYgKHByb3AgaW4gb2JqICYmIG9ialtwcm9wXSAhPT0gcHJvdG9bcHJvcF0gJiYgIWtleXMuY29udGFpbnMocHJvcCkpIHtcbiAgICAgIGtleXMucHVzaChwcm9wKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gUmV0cmlldmUgdGhlIG5hbWVzIG9mIGFuIG9iamVjdCdzIG93biBwcm9wZXJ0aWVzLlxuLy8gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYE9iamVjdC5rZXlzYC5cbmZ1bmN0aW9uIGtleXMob2JqKSB7XG4gIGlmICghaXNPYmplY3Qob2JqKSkgcmV0dXJuIFtdO1xuICBpZiAobmF0aXZlS2V5cykgcmV0dXJuIG5hdGl2ZUtleXMob2JqKTtcbiAgdmFyIGtleXMgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIG9iaikgaWYgKGhhcyQxKG9iaiwga2V5KSkga2V5cy5wdXNoKGtleSk7XG4gIC8vIEFoZW0sIElFIDwgOS5cbiAgaWYgKGhhc0VudW1CdWcpIGNvbGxlY3ROb25FbnVtUHJvcHMob2JqLCBrZXlzKTtcbiAgcmV0dXJuIGtleXM7XG59XG5cbi8vIElzIGEgZ2l2ZW4gYXJyYXksIHN0cmluZywgb3Igb2JqZWN0IGVtcHR5P1xuLy8gQW4gXCJlbXB0eVwiIG9iamVjdCBoYXMgbm8gZW51bWVyYWJsZSBvd24tcHJvcGVydGllcy5cbmZ1bmN0aW9uIGlzRW1wdHkob2JqKSB7XG4gIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIHRydWU7XG4gIC8vIFNraXAgdGhlIG1vcmUgZXhwZW5zaXZlIGB0b1N0cmluZ2AtYmFzZWQgdHlwZSBjaGVja3MgaWYgYG9iamAgaGFzIG5vXG4gIC8vIGAubGVuZ3RoYC5cbiAgdmFyIGxlbmd0aCA9IGdldExlbmd0aChvYmopO1xuICBpZiAodHlwZW9mIGxlbmd0aCA9PSAnbnVtYmVyJyAmJiAoXG4gICAgaXNBcnJheShvYmopIHx8IGlzU3RyaW5nKG9iaikgfHwgaXNBcmd1bWVudHMkMShvYmopXG4gICkpIHJldHVybiBsZW5ndGggPT09IDA7XG4gIHJldHVybiBnZXRMZW5ndGgoa2V5cyhvYmopKSA9PT0gMDtcbn1cblxuLy8gUmV0dXJucyB3aGV0aGVyIGFuIG9iamVjdCBoYXMgYSBnaXZlbiBzZXQgb2YgYGtleTp2YWx1ZWAgcGFpcnMuXG5mdW5jdGlvbiBpc01hdGNoKG9iamVjdCwgYXR0cnMpIHtcbiAgdmFyIF9rZXlzID0ga2V5cyhhdHRycyksIGxlbmd0aCA9IF9rZXlzLmxlbmd0aDtcbiAgaWYgKG9iamVjdCA9PSBudWxsKSByZXR1cm4gIWxlbmd0aDtcbiAgdmFyIG9iaiA9IE9iamVjdChvYmplY3QpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IF9rZXlzW2ldO1xuICAgIGlmIChhdHRyc1trZXldICE9PSBvYmpba2V5XSB8fCAhKGtleSBpbiBvYmopKSByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8vIElmIFVuZGVyc2NvcmUgaXMgY2FsbGVkIGFzIGEgZnVuY3Rpb24sIGl0IHJldHVybnMgYSB3cmFwcGVkIG9iamVjdCB0aGF0IGNhblxuLy8gYmUgdXNlZCBPTy1zdHlsZS4gVGhpcyB3cmFwcGVyIGhvbGRzIGFsdGVyZWQgdmVyc2lvbnMgb2YgYWxsIGZ1bmN0aW9ucyBhZGRlZFxuLy8gdGhyb3VnaCBgXy5taXhpbmAuIFdyYXBwZWQgb2JqZWN0cyBtYXkgYmUgY2hhaW5lZC5cbmZ1bmN0aW9uIF8kMShvYmopIHtcbiAgaWYgKG9iaiBpbnN0YW5jZW9mIF8kMSkgcmV0dXJuIG9iajtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIF8kMSkpIHJldHVybiBuZXcgXyQxKG9iaik7XG4gIHRoaXMuX3dyYXBwZWQgPSBvYmo7XG59XG5cbl8kMS5WRVJTSU9OID0gVkVSU0lPTjtcblxuLy8gRXh0cmFjdHMgdGhlIHJlc3VsdCBmcm9tIGEgd3JhcHBlZCBhbmQgY2hhaW5lZCBvYmplY3QuXG5fJDEucHJvdG90eXBlLnZhbHVlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLl93cmFwcGVkO1xufTtcblxuLy8gUHJvdmlkZSB1bndyYXBwaW5nIHByb3hpZXMgZm9yIHNvbWUgbWV0aG9kcyB1c2VkIGluIGVuZ2luZSBvcGVyYXRpb25zXG4vLyBzdWNoIGFzIGFyaXRobWV0aWMgYW5kIEpTT04gc3RyaW5naWZpY2F0aW9uLlxuXyQxLnByb3RvdHlwZS52YWx1ZU9mID0gXyQxLnByb3RvdHlwZS50b0pTT04gPSBfJDEucHJvdG90eXBlLnZhbHVlO1xuXG5fJDEucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBTdHJpbmcodGhpcy5fd3JhcHBlZCk7XG59O1xuXG4vLyBJbnRlcm5hbCBmdW5jdGlvbiB0byB3cmFwIG9yIHNoYWxsb3ctY29weSBhbiBBcnJheUJ1ZmZlcixcbi8vIHR5cGVkIGFycmF5IG9yIERhdGFWaWV3IHRvIGEgbmV3IHZpZXcsIHJldXNpbmcgdGhlIGJ1ZmZlci5cbmZ1bmN0aW9uIHRvQnVmZmVyVmlldyhidWZmZXJTb3VyY2UpIHtcbiAgcmV0dXJuIG5ldyBVaW50OEFycmF5KFxuICAgIGJ1ZmZlclNvdXJjZS5idWZmZXIgfHwgYnVmZmVyU291cmNlLFxuICAgIGJ1ZmZlclNvdXJjZS5ieXRlT2Zmc2V0IHx8IDAsXG4gICAgZ2V0Qnl0ZUxlbmd0aChidWZmZXJTb3VyY2UpXG4gICk7XG59XG5cbi8vIFdlIHVzZSB0aGlzIHN0cmluZyB0d2ljZSwgc28gZ2l2ZSBpdCBhIG5hbWUgZm9yIG1pbmlmaWNhdGlvbi5cbnZhciB0YWdEYXRhVmlldyA9ICdbb2JqZWN0IERhdGFWaWV3XSc7XG5cbi8vIEludGVybmFsIHJlY3Vyc2l2ZSBjb21wYXJpc29uIGZ1bmN0aW9uIGZvciBgXy5pc0VxdWFsYC5cbmZ1bmN0aW9uIGVxKGEsIGIsIGFTdGFjaywgYlN0YWNrKSB7XG4gIC8vIElkZW50aWNhbCBvYmplY3RzIGFyZSBlcXVhbC4gYDAgPT09IC0wYCwgYnV0IHRoZXkgYXJlbid0IGlkZW50aWNhbC5cbiAgLy8gU2VlIHRoZSBbSGFybW9ueSBgZWdhbGAgcHJvcG9zYWxdKGh0dHBzOi8vd2lraS5lY21hc2NyaXB0Lm9yZy9kb2t1LnBocD9pZD1oYXJtb255OmVnYWwpLlxuICBpZiAoYSA9PT0gYikgcmV0dXJuIGEgIT09IDAgfHwgMSAvIGEgPT09IDEgLyBiO1xuICAvLyBgbnVsbGAgb3IgYHVuZGVmaW5lZGAgb25seSBlcXVhbCB0byBpdHNlbGYgKHN0cmljdCBjb21wYXJpc29uKS5cbiAgaWYgKGEgPT0gbnVsbCB8fCBiID09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgLy8gYE5hTmBzIGFyZSBlcXVpdmFsZW50LCBidXQgbm9uLXJlZmxleGl2ZS5cbiAgaWYgKGEgIT09IGEpIHJldHVybiBiICE9PSBiO1xuICAvLyBFeGhhdXN0IHByaW1pdGl2ZSBjaGVja3NcbiAgdmFyIHR5cGUgPSB0eXBlb2YgYTtcbiAgaWYgKHR5cGUgIT09ICdmdW5jdGlvbicgJiYgdHlwZSAhPT0gJ29iamVjdCcgJiYgdHlwZW9mIGIgIT0gJ29iamVjdCcpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIGRlZXBFcShhLCBiLCBhU3RhY2ssIGJTdGFjayk7XG59XG5cbi8vIEludGVybmFsIHJlY3Vyc2l2ZSBjb21wYXJpc29uIGZ1bmN0aW9uIGZvciBgXy5pc0VxdWFsYC5cbmZ1bmN0aW9uIGRlZXBFcShhLCBiLCBhU3RhY2ssIGJTdGFjaykge1xuICAvLyBVbndyYXAgYW55IHdyYXBwZWQgb2JqZWN0cy5cbiAgaWYgKGEgaW5zdGFuY2VvZiBfJDEpIGEgPSBhLl93cmFwcGVkO1xuICBpZiAoYiBpbnN0YW5jZW9mIF8kMSkgYiA9IGIuX3dyYXBwZWQ7XG4gIC8vIENvbXBhcmUgYFtbQ2xhc3NdXWAgbmFtZXMuXG4gIHZhciBjbGFzc05hbWUgPSB0b1N0cmluZy5jYWxsKGEpO1xuICBpZiAoY2xhc3NOYW1lICE9PSB0b1N0cmluZy5jYWxsKGIpKSByZXR1cm4gZmFsc2U7XG4gIC8vIFdvcmsgYXJvdW5kIGEgYnVnIGluIElFIDEwIC0gRWRnZSAxMy5cbiAgaWYgKGhhc1N0cmluZ1RhZ0J1ZyAmJiBjbGFzc05hbWUgPT0gJ1tvYmplY3QgT2JqZWN0XScgJiYgaXNEYXRhVmlldyQxKGEpKSB7XG4gICAgaWYgKCFpc0RhdGFWaWV3JDEoYikpIHJldHVybiBmYWxzZTtcbiAgICBjbGFzc05hbWUgPSB0YWdEYXRhVmlldztcbiAgfVxuICBzd2l0Y2ggKGNsYXNzTmFtZSkge1xuICAgIC8vIFRoZXNlIHR5cGVzIGFyZSBjb21wYXJlZCBieSB2YWx1ZS5cbiAgICBjYXNlICdbb2JqZWN0IFJlZ0V4cF0nOlxuICAgICAgLy8gUmVnRXhwcyBhcmUgY29lcmNlZCB0byBzdHJpbmdzIGZvciBjb21wYXJpc29uIChOb3RlOiAnJyArIC9hL2kgPT09ICcvYS9pJylcbiAgICBjYXNlICdbb2JqZWN0IFN0cmluZ10nOlxuICAgICAgLy8gUHJpbWl0aXZlcyBhbmQgdGhlaXIgY29ycmVzcG9uZGluZyBvYmplY3Qgd3JhcHBlcnMgYXJlIGVxdWl2YWxlbnQ7IHRodXMsIGBcIjVcImAgaXNcbiAgICAgIC8vIGVxdWl2YWxlbnQgdG8gYG5ldyBTdHJpbmcoXCI1XCIpYC5cbiAgICAgIHJldHVybiAnJyArIGEgPT09ICcnICsgYjtcbiAgICBjYXNlICdbb2JqZWN0IE51bWJlcl0nOlxuICAgICAgLy8gYE5hTmBzIGFyZSBlcXVpdmFsZW50LCBidXQgbm9uLXJlZmxleGl2ZS5cbiAgICAgIC8vIE9iamVjdChOYU4pIGlzIGVxdWl2YWxlbnQgdG8gTmFOLlxuICAgICAgaWYgKCthICE9PSArYSkgcmV0dXJuICtiICE9PSArYjtcbiAgICAgIC8vIEFuIGBlZ2FsYCBjb21wYXJpc29uIGlzIHBlcmZvcm1lZCBmb3Igb3RoZXIgbnVtZXJpYyB2YWx1ZXMuXG4gICAgICByZXR1cm4gK2EgPT09IDAgPyAxIC8gK2EgPT09IDEgLyBiIDogK2EgPT09ICtiO1xuICAgIGNhc2UgJ1tvYmplY3QgRGF0ZV0nOlxuICAgIGNhc2UgJ1tvYmplY3QgQm9vbGVhbl0nOlxuICAgICAgLy8gQ29lcmNlIGRhdGVzIGFuZCBib29sZWFucyB0byBudW1lcmljIHByaW1pdGl2ZSB2YWx1ZXMuIERhdGVzIGFyZSBjb21wYXJlZCBieSB0aGVpclxuICAgICAgLy8gbWlsbGlzZWNvbmQgcmVwcmVzZW50YXRpb25zLiBOb3RlIHRoYXQgaW52YWxpZCBkYXRlcyB3aXRoIG1pbGxpc2Vjb25kIHJlcHJlc2VudGF0aW9uc1xuICAgICAgLy8gb2YgYE5hTmAgYXJlIG5vdCBlcXVpdmFsZW50LlxuICAgICAgcmV0dXJuICthID09PSArYjtcbiAgICBjYXNlICdbb2JqZWN0IFN5bWJvbF0nOlxuICAgICAgcmV0dXJuIFN5bWJvbFByb3RvLnZhbHVlT2YuY2FsbChhKSA9PT0gU3ltYm9sUHJvdG8udmFsdWVPZi5jYWxsKGIpO1xuICAgIGNhc2UgJ1tvYmplY3QgQXJyYXlCdWZmZXJdJzpcbiAgICBjYXNlIHRhZ0RhdGFWaWV3OlxuICAgICAgLy8gQ29lcmNlIHRvIHR5cGVkIGFycmF5IHNvIHdlIGNhbiBmYWxsIHRocm91Z2guXG4gICAgICByZXR1cm4gZGVlcEVxKHRvQnVmZmVyVmlldyhhKSwgdG9CdWZmZXJWaWV3KGIpLCBhU3RhY2ssIGJTdGFjayk7XG4gIH1cblxuICB2YXIgYXJlQXJyYXlzID0gY2xhc3NOYW1lID09PSAnW29iamVjdCBBcnJheV0nO1xuICBpZiAoIWFyZUFycmF5cyAmJiBpc1R5cGVkQXJyYXkkMShhKSkge1xuICAgICAgdmFyIGJ5dGVMZW5ndGggPSBnZXRCeXRlTGVuZ3RoKGEpO1xuICAgICAgaWYgKGJ5dGVMZW5ndGggIT09IGdldEJ5dGVMZW5ndGgoYikpIHJldHVybiBmYWxzZTtcbiAgICAgIGlmIChhLmJ1ZmZlciA9PT0gYi5idWZmZXIgJiYgYS5ieXRlT2Zmc2V0ID09PSBiLmJ5dGVPZmZzZXQpIHJldHVybiB0cnVlO1xuICAgICAgYXJlQXJyYXlzID0gdHJ1ZTtcbiAgfVxuICBpZiAoIWFyZUFycmF5cykge1xuICAgIGlmICh0eXBlb2YgYSAhPSAnb2JqZWN0JyB8fCB0eXBlb2YgYiAhPSAnb2JqZWN0JykgcmV0dXJuIGZhbHNlO1xuXG4gICAgLy8gT2JqZWN0cyB3aXRoIGRpZmZlcmVudCBjb25zdHJ1Y3RvcnMgYXJlIG5vdCBlcXVpdmFsZW50LCBidXQgYE9iamVjdGBzIG9yIGBBcnJheWBzXG4gICAgLy8gZnJvbSBkaWZmZXJlbnQgZnJhbWVzIGFyZS5cbiAgICB2YXIgYUN0b3IgPSBhLmNvbnN0cnVjdG9yLCBiQ3RvciA9IGIuY29uc3RydWN0b3I7XG4gICAgaWYgKGFDdG9yICE9PSBiQ3RvciAmJiAhKGlzRnVuY3Rpb24kMShhQ3RvcikgJiYgYUN0b3IgaW5zdGFuY2VvZiBhQ3RvciAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0Z1bmN0aW9uJDEoYkN0b3IpICYmIGJDdG9yIGluc3RhbmNlb2YgYkN0b3IpXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiAoJ2NvbnN0cnVjdG9yJyBpbiBhICYmICdjb25zdHJ1Y3RvcicgaW4gYikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgLy8gQXNzdW1lIGVxdWFsaXR5IGZvciBjeWNsaWMgc3RydWN0dXJlcy4gVGhlIGFsZ29yaXRobSBmb3IgZGV0ZWN0aW5nIGN5Y2xpY1xuICAvLyBzdHJ1Y3R1cmVzIGlzIGFkYXB0ZWQgZnJvbSBFUyA1LjEgc2VjdGlvbiAxNS4xMi4zLCBhYnN0cmFjdCBvcGVyYXRpb24gYEpPYC5cblxuICAvLyBJbml0aWFsaXppbmcgc3RhY2sgb2YgdHJhdmVyc2VkIG9iamVjdHMuXG4gIC8vIEl0J3MgZG9uZSBoZXJlIHNpbmNlIHdlIG9ubHkgbmVlZCB0aGVtIGZvciBvYmplY3RzIGFuZCBhcnJheXMgY29tcGFyaXNvbi5cbiAgYVN0YWNrID0gYVN0YWNrIHx8IFtdO1xuICBiU3RhY2sgPSBiU3RhY2sgfHwgW107XG4gIHZhciBsZW5ndGggPSBhU3RhY2subGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAvLyBMaW5lYXIgc2VhcmNoLiBQZXJmb3JtYW5jZSBpcyBpbnZlcnNlbHkgcHJvcG9ydGlvbmFsIHRvIHRoZSBudW1iZXIgb2ZcbiAgICAvLyB1bmlxdWUgbmVzdGVkIHN0cnVjdHVyZXMuXG4gICAgaWYgKGFTdGFja1tsZW5ndGhdID09PSBhKSByZXR1cm4gYlN0YWNrW2xlbmd0aF0gPT09IGI7XG4gIH1cblxuICAvLyBBZGQgdGhlIGZpcnN0IG9iamVjdCB0byB0aGUgc3RhY2sgb2YgdHJhdmVyc2VkIG9iamVjdHMuXG4gIGFTdGFjay5wdXNoKGEpO1xuICBiU3RhY2sucHVzaChiKTtcblxuICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgYW5kIGFycmF5cy5cbiAgaWYgKGFyZUFycmF5cykge1xuICAgIC8vIENvbXBhcmUgYXJyYXkgbGVuZ3RocyB0byBkZXRlcm1pbmUgaWYgYSBkZWVwIGNvbXBhcmlzb24gaXMgbmVjZXNzYXJ5LlxuICAgIGxlbmd0aCA9IGEubGVuZ3RoO1xuICAgIGlmIChsZW5ndGggIT09IGIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gRGVlcCBjb21wYXJlIHRoZSBjb250ZW50cywgaWdub3Jpbmcgbm9uLW51bWVyaWMgcHJvcGVydGllcy5cbiAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgIGlmICghZXEoYVtsZW5ndGhdLCBiW2xlbmd0aF0sIGFTdGFjaywgYlN0YWNrKSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBEZWVwIGNvbXBhcmUgb2JqZWN0cy5cbiAgICB2YXIgX2tleXMgPSBrZXlzKGEpLCBrZXk7XG4gICAgbGVuZ3RoID0gX2tleXMubGVuZ3RoO1xuICAgIC8vIEVuc3VyZSB0aGF0IGJvdGggb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIG51bWJlciBvZiBwcm9wZXJ0aWVzIGJlZm9yZSBjb21wYXJpbmcgZGVlcCBlcXVhbGl0eS5cbiAgICBpZiAoa2V5cyhiKS5sZW5ndGggIT09IGxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgIHdoaWxlIChsZW5ndGgtLSkge1xuICAgICAgLy8gRGVlcCBjb21wYXJlIGVhY2ggbWVtYmVyXG4gICAgICBrZXkgPSBfa2V5c1tsZW5ndGhdO1xuICAgICAgaWYgKCEoaGFzJDEoYiwga2V5KSAmJiBlcShhW2tleV0sIGJba2V5XSwgYVN0YWNrLCBiU3RhY2spKSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICAvLyBSZW1vdmUgdGhlIGZpcnN0IG9iamVjdCBmcm9tIHRoZSBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAgYVN0YWNrLnBvcCgpO1xuICBiU3RhY2sucG9wKCk7XG4gIHJldHVybiB0cnVlO1xufVxuXG4vLyBQZXJmb3JtIGEgZGVlcCBjb21wYXJpc29uIHRvIGNoZWNrIGlmIHR3byBvYmplY3RzIGFyZSBlcXVhbC5cbmZ1bmN0aW9uIGlzRXF1YWwoYSwgYikge1xuICByZXR1cm4gZXEoYSwgYik7XG59XG5cbi8vIFJldHJpZXZlIGFsbCB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBhbiBvYmplY3QuXG5mdW5jdGlvbiBhbGxLZXlzKG9iaikge1xuICBpZiAoIWlzT2JqZWN0KG9iaikpIHJldHVybiBbXTtcbiAgdmFyIGtleXMgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIG9iaikga2V5cy5wdXNoKGtleSk7XG4gIC8vIEFoZW0sIElFIDwgOS5cbiAgaWYgKGhhc0VudW1CdWcpIGNvbGxlY3ROb25FbnVtUHJvcHMob2JqLCBrZXlzKTtcbiAgcmV0dXJuIGtleXM7XG59XG5cbi8vIFNpbmNlIHRoZSByZWd1bGFyIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYCB0eXBlIHRlc3RzIGRvbid0IHdvcmsgZm9yXG4vLyBzb21lIHR5cGVzIGluIElFIDExLCB3ZSB1c2UgYSBmaW5nZXJwcmludGluZyBoZXVyaXN0aWMgaW5zdGVhZCwgYmFzZWRcbi8vIG9uIHRoZSBtZXRob2RzLiBJdCdzIG5vdCBncmVhdCwgYnV0IGl0J3MgdGhlIGJlc3Qgd2UgZ290LlxuLy8gVGhlIGZpbmdlcnByaW50IG1ldGhvZCBsaXN0cyBhcmUgZGVmaW5lZCBiZWxvdy5cbmZ1bmN0aW9uIGllMTFmaW5nZXJwcmludChtZXRob2RzKSB7XG4gIHZhciBsZW5ndGggPSBnZXRMZW5ndGgobWV0aG9kcyk7XG4gIHJldHVybiBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAob2JqID09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICAvLyBgTWFwYCwgYFdlYWtNYXBgIGFuZCBgU2V0YCBoYXZlIG5vIGVudW1lcmFibGUga2V5cy5cbiAgICB2YXIga2V5cyA9IGFsbEtleXMob2JqKTtcbiAgICBpZiAoZ2V0TGVuZ3RoKGtleXMpKSByZXR1cm4gZmFsc2U7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCFpc0Z1bmN0aW9uJDEob2JqW21ldGhvZHNbaV1dKSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBJZiB3ZSBhcmUgdGVzdGluZyBhZ2FpbnN0IGBXZWFrTWFwYCwgd2UgbmVlZCB0byBlbnN1cmUgdGhhdFxuICAgIC8vIGBvYmpgIGRvZXNuJ3QgaGF2ZSBhIGBmb3JFYWNoYCBtZXRob2QgaW4gb3JkZXIgdG8gZGlzdGluZ3Vpc2hcbiAgICAvLyBpdCBmcm9tIGEgcmVndWxhciBgTWFwYC5cbiAgICByZXR1cm4gbWV0aG9kcyAhPT0gd2Vha01hcE1ldGhvZHMgfHwgIWlzRnVuY3Rpb24kMShvYmpbZm9yRWFjaE5hbWVdKTtcbiAgfTtcbn1cblxuLy8gSW4gdGhlIGludGVyZXN0IG9mIGNvbXBhY3QgbWluaWZpY2F0aW9uLCB3ZSB3cml0ZVxuLy8gZWFjaCBzdHJpbmcgaW4gdGhlIGZpbmdlcnByaW50cyBvbmx5IG9uY2UuXG52YXIgZm9yRWFjaE5hbWUgPSAnZm9yRWFjaCcsXG4gICAgaGFzTmFtZSA9ICdoYXMnLFxuICAgIGNvbW1vbkluaXQgPSBbJ2NsZWFyJywgJ2RlbGV0ZSddLFxuICAgIG1hcFRhaWwgPSBbJ2dldCcsIGhhc05hbWUsICdzZXQnXTtcblxuLy8gYE1hcGAsIGBXZWFrTWFwYCBhbmQgYFNldGAgZWFjaCBoYXZlIHNsaWdodGx5IGRpZmZlcmVudFxuLy8gY29tYmluYXRpb25zIG9mIHRoZSBhYm92ZSBzdWJsaXN0cy5cbnZhciBtYXBNZXRob2RzID0gY29tbW9uSW5pdC5jb25jYXQoZm9yRWFjaE5hbWUsIG1hcFRhaWwpLFxuICAgIHdlYWtNYXBNZXRob2RzID0gY29tbW9uSW5pdC5jb25jYXQobWFwVGFpbCksXG4gICAgc2V0TWV0aG9kcyA9IFsnYWRkJ10uY29uY2F0KGNvbW1vbkluaXQsIGZvckVhY2hOYW1lLCBoYXNOYW1lKTtcblxudmFyIGlzTWFwID0gaXNJRTExID8gaWUxMWZpbmdlcnByaW50KG1hcE1ldGhvZHMpIDogdGFnVGVzdGVyKCdNYXAnKTtcblxudmFyIGlzV2Vha01hcCA9IGlzSUUxMSA/IGllMTFmaW5nZXJwcmludCh3ZWFrTWFwTWV0aG9kcykgOiB0YWdUZXN0ZXIoJ1dlYWtNYXAnKTtcblxudmFyIGlzU2V0ID0gaXNJRTExID8gaWUxMWZpbmdlcnByaW50KHNldE1ldGhvZHMpIDogdGFnVGVzdGVyKCdTZXQnKTtcblxudmFyIGlzV2Vha1NldCA9IHRhZ1Rlc3RlcignV2Vha1NldCcpO1xuXG4vLyBSZXRyaWV2ZSB0aGUgdmFsdWVzIG9mIGFuIG9iamVjdCdzIHByb3BlcnRpZXMuXG5mdW5jdGlvbiB2YWx1ZXMob2JqKSB7XG4gIHZhciBfa2V5cyA9IGtleXMob2JqKTtcbiAgdmFyIGxlbmd0aCA9IF9rZXlzLmxlbmd0aDtcbiAgdmFyIHZhbHVlcyA9IEFycmF5KGxlbmd0aCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICB2YWx1ZXNbaV0gPSBvYmpbX2tleXNbaV1dO1xuICB9XG4gIHJldHVybiB2YWx1ZXM7XG59XG5cbi8vIENvbnZlcnQgYW4gb2JqZWN0IGludG8gYSBsaXN0IG9mIGBba2V5LCB2YWx1ZV1gIHBhaXJzLlxuLy8gVGhlIG9wcG9zaXRlIG9mIGBfLm9iamVjdGAgd2l0aCBvbmUgYXJndW1lbnQuXG5mdW5jdGlvbiBwYWlycyhvYmopIHtcbiAgdmFyIF9rZXlzID0ga2V5cyhvYmopO1xuICB2YXIgbGVuZ3RoID0gX2tleXMubGVuZ3RoO1xuICB2YXIgcGFpcnMgPSBBcnJheShsZW5ndGgpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgcGFpcnNbaV0gPSBbX2tleXNbaV0sIG9ialtfa2V5c1tpXV1dO1xuICB9XG4gIHJldHVybiBwYWlycztcbn1cblxuLy8gSW52ZXJ0IHRoZSBrZXlzIGFuZCB2YWx1ZXMgb2YgYW4gb2JqZWN0LiBUaGUgdmFsdWVzIG11c3QgYmUgc2VyaWFsaXphYmxlLlxuZnVuY3Rpb24gaW52ZXJ0KG9iaikge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIHZhciBfa2V5cyA9IGtleXMob2JqKTtcbiAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IF9rZXlzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgcmVzdWx0W29ialtfa2V5c1tpXV1dID0gX2tleXNbaV07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gUmV0dXJuIGEgc29ydGVkIGxpc3Qgb2YgdGhlIGZ1bmN0aW9uIG5hbWVzIGF2YWlsYWJsZSBvbiB0aGUgb2JqZWN0LlxuZnVuY3Rpb24gZnVuY3Rpb25zKG9iaikge1xuICB2YXIgbmFtZXMgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChpc0Z1bmN0aW9uJDEob2JqW2tleV0pKSBuYW1lcy5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIG5hbWVzLnNvcnQoKTtcbn1cblxuLy8gQW4gaW50ZXJuYWwgZnVuY3Rpb24gZm9yIGNyZWF0aW5nIGFzc2lnbmVyIGZ1bmN0aW9ucy5cbmZ1bmN0aW9uIGNyZWF0ZUFzc2lnbmVyKGtleXNGdW5jLCBkZWZhdWx0cykge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgaWYgKGRlZmF1bHRzKSBvYmogPSBPYmplY3Qob2JqKTtcbiAgICBpZiAobGVuZ3RoIDwgMiB8fCBvYmogPT0gbnVsbCkgcmV0dXJuIG9iajtcbiAgICBmb3IgKHZhciBpbmRleCA9IDE7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2luZGV4XSxcbiAgICAgICAgICBrZXlzID0ga2V5c0Z1bmMoc291cmNlKSxcbiAgICAgICAgICBsID0ga2V5cy5sZW5ndGg7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgaWYgKCFkZWZhdWx0cyB8fCBvYmpba2V5XSA9PT0gdm9pZCAwKSBvYmpba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9O1xufVxuXG4vLyBFeHRlbmQgYSBnaXZlbiBvYmplY3Qgd2l0aCBhbGwgdGhlIHByb3BlcnRpZXMgaW4gcGFzc2VkLWluIG9iamVjdChzKS5cbnZhciBleHRlbmQgPSBjcmVhdGVBc3NpZ25lcihhbGxLZXlzKTtcblxuLy8gQXNzaWducyBhIGdpdmVuIG9iamVjdCB3aXRoIGFsbCB0aGUgb3duIHByb3BlcnRpZXMgaW4gdGhlIHBhc3NlZC1pblxuLy8gb2JqZWN0KHMpLlxuLy8gKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9hc3NpZ24pXG52YXIgZXh0ZW5kT3duID0gY3JlYXRlQXNzaWduZXIoa2V5cyk7XG5cbi8vIEZpbGwgaW4gYSBnaXZlbiBvYmplY3Qgd2l0aCBkZWZhdWx0IHByb3BlcnRpZXMuXG52YXIgZGVmYXVsdHMgPSBjcmVhdGVBc3NpZ25lcihhbGxLZXlzLCB0cnVlKTtcblxuLy8gQ3JlYXRlIGEgbmFrZWQgZnVuY3Rpb24gcmVmZXJlbmNlIGZvciBzdXJyb2dhdGUtcHJvdG90eXBlLXN3YXBwaW5nLlxuZnVuY3Rpb24gY3RvcigpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCl7fTtcbn1cblxuLy8gQW4gaW50ZXJuYWwgZnVuY3Rpb24gZm9yIGNyZWF0aW5nIGEgbmV3IG9iamVjdCB0aGF0IGluaGVyaXRzIGZyb20gYW5vdGhlci5cbmZ1bmN0aW9uIGJhc2VDcmVhdGUocHJvdG90eXBlKSB7XG4gIGlmICghaXNPYmplY3QocHJvdG90eXBlKSkgcmV0dXJuIHt9O1xuICBpZiAobmF0aXZlQ3JlYXRlKSByZXR1cm4gbmF0aXZlQ3JlYXRlKHByb3RvdHlwZSk7XG4gIHZhciBDdG9yID0gY3RvcigpO1xuICBDdG9yLnByb3RvdHlwZSA9IHByb3RvdHlwZTtcbiAgdmFyIHJlc3VsdCA9IG5ldyBDdG9yO1xuICBDdG9yLnByb3RvdHlwZSA9IG51bGw7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIENyZWF0ZXMgYW4gb2JqZWN0IHRoYXQgaW5oZXJpdHMgZnJvbSB0aGUgZ2l2ZW4gcHJvdG90eXBlIG9iamVjdC5cbi8vIElmIGFkZGl0aW9uYWwgcHJvcGVydGllcyBhcmUgcHJvdmlkZWQgdGhlbiB0aGV5IHdpbGwgYmUgYWRkZWQgdG8gdGhlXG4vLyBjcmVhdGVkIG9iamVjdC5cbmZ1bmN0aW9uIGNyZWF0ZShwcm90b3R5cGUsIHByb3BzKSB7XG4gIHZhciByZXN1bHQgPSBiYXNlQ3JlYXRlKHByb3RvdHlwZSk7XG4gIGlmIChwcm9wcykgZXh0ZW5kT3duKHJlc3VsdCwgcHJvcHMpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBDcmVhdGUgYSAoc2hhbGxvdy1jbG9uZWQpIGR1cGxpY2F0ZSBvZiBhbiBvYmplY3QuXG5mdW5jdGlvbiBjbG9uZShvYmopIHtcbiAgaWYgKCFpc09iamVjdChvYmopKSByZXR1cm4gb2JqO1xuICByZXR1cm4gaXNBcnJheShvYmopID8gb2JqLnNsaWNlKCkgOiBleHRlbmQoe30sIG9iaik7XG59XG5cbi8vIEludm9rZXMgYGludGVyY2VwdG9yYCB3aXRoIHRoZSBgb2JqYCBhbmQgdGhlbiByZXR1cm5zIGBvYmpgLlxuLy8gVGhlIHByaW1hcnkgcHVycG9zZSBvZiB0aGlzIG1ldGhvZCBpcyB0byBcInRhcCBpbnRvXCIgYSBtZXRob2QgY2hhaW4sIGluXG4vLyBvcmRlciB0byBwZXJmb3JtIG9wZXJhdGlvbnMgb24gaW50ZXJtZWRpYXRlIHJlc3VsdHMgd2l0aGluIHRoZSBjaGFpbi5cbmZ1bmN0aW9uIHRhcChvYmosIGludGVyY2VwdG9yKSB7XG4gIGludGVyY2VwdG9yKG9iaik7XG4gIHJldHVybiBvYmo7XG59XG5cbi8vIE5vcm1hbGl6ZSBhIChkZWVwKSBwcm9wZXJ0eSBgcGF0aGAgdG8gYXJyYXkuXG4vLyBMaWtlIGBfLml0ZXJhdGVlYCwgdGhpcyBmdW5jdGlvbiBjYW4gYmUgY3VzdG9taXplZC5cbmZ1bmN0aW9uIHRvUGF0aCQxKHBhdGgpIHtcbiAgcmV0dXJuIGlzQXJyYXkocGF0aCkgPyBwYXRoIDogW3BhdGhdO1xufVxuXyQxLnRvUGF0aCA9IHRvUGF0aCQxO1xuXG4vLyBJbnRlcm5hbCB3cmFwcGVyIGZvciBgXy50b1BhdGhgIHRvIGVuYWJsZSBtaW5pZmljYXRpb24uXG4vLyBTaW1pbGFyIHRvIGBjYmAgZm9yIGBfLml0ZXJhdGVlYC5cbmZ1bmN0aW9uIHRvUGF0aChwYXRoKSB7XG4gIHJldHVybiBfJDEudG9QYXRoKHBhdGgpO1xufVxuXG4vLyBJbnRlcm5hbCBmdW5jdGlvbiB0byBvYnRhaW4gYSBuZXN0ZWQgcHJvcGVydHkgaW4gYG9iamAgYWxvbmcgYHBhdGhgLlxuZnVuY3Rpb24gZGVlcEdldChvYmosIHBhdGgpIHtcbiAgdmFyIGxlbmd0aCA9IHBhdGgubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gdm9pZCAwO1xuICAgIG9iaiA9IG9ialtwYXRoW2ldXTtcbiAgfVxuICByZXR1cm4gbGVuZ3RoID8gb2JqIDogdm9pZCAwO1xufVxuXG4vLyBHZXQgdGhlIHZhbHVlIG9mIHRoZSAoZGVlcCkgcHJvcGVydHkgb24gYHBhdGhgIGZyb20gYG9iamVjdGAuXG4vLyBJZiBhbnkgcHJvcGVydHkgaW4gYHBhdGhgIGRvZXMgbm90IGV4aXN0IG9yIGlmIHRoZSB2YWx1ZSBpc1xuLy8gYHVuZGVmaW5lZGAsIHJldHVybiBgZGVmYXVsdFZhbHVlYCBpbnN0ZWFkLlxuLy8gVGhlIGBwYXRoYCBpcyBub3JtYWxpemVkIHRocm91Z2ggYF8udG9QYXRoYC5cbmZ1bmN0aW9uIGdldChvYmplY3QsIHBhdGgsIGRlZmF1bHRWYWx1ZSkge1xuICB2YXIgdmFsdWUgPSBkZWVwR2V0KG9iamVjdCwgdG9QYXRoKHBhdGgpKTtcbiAgcmV0dXJuIGlzVW5kZWZpbmVkKHZhbHVlKSA/IGRlZmF1bHRWYWx1ZSA6IHZhbHVlO1xufVxuXG4vLyBTaG9ydGN1dCBmdW5jdGlvbiBmb3IgY2hlY2tpbmcgaWYgYW4gb2JqZWN0IGhhcyBhIGdpdmVuIHByb3BlcnR5IGRpcmVjdGx5IG9uXG4vLyBpdHNlbGYgKGluIG90aGVyIHdvcmRzLCBub3Qgb24gYSBwcm90b3R5cGUpLiBVbmxpa2UgdGhlIGludGVybmFsIGBoYXNgXG4vLyBmdW5jdGlvbiwgdGhpcyBwdWJsaWMgdmVyc2lvbiBjYW4gYWxzbyB0cmF2ZXJzZSBuZXN0ZWQgcHJvcGVydGllcy5cbmZ1bmN0aW9uIGhhcyhvYmosIHBhdGgpIHtcbiAgcGF0aCA9IHRvUGF0aChwYXRoKTtcbiAgdmFyIGxlbmd0aCA9IHBhdGgubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IHBhdGhbaV07XG4gICAgaWYgKCFoYXMkMShvYmosIGtleSkpIHJldHVybiBmYWxzZTtcbiAgICBvYmogPSBvYmpba2V5XTtcbiAgfVxuICByZXR1cm4gISFsZW5ndGg7XG59XG5cbi8vIEtlZXAgdGhlIGlkZW50aXR5IGZ1bmN0aW9uIGFyb3VuZCBmb3IgZGVmYXVsdCBpdGVyYXRlZXMuXG5mdW5jdGlvbiBpZGVudGl0eSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWU7XG59XG5cbi8vIFJldHVybnMgYSBwcmVkaWNhdGUgZm9yIGNoZWNraW5nIHdoZXRoZXIgYW4gb2JqZWN0IGhhcyBhIGdpdmVuIHNldCBvZlxuLy8gYGtleTp2YWx1ZWAgcGFpcnMuXG5mdW5jdGlvbiBtYXRjaGVyKGF0dHJzKSB7XG4gIGF0dHJzID0gZXh0ZW5kT3duKHt9LCBhdHRycyk7XG4gIHJldHVybiBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gaXNNYXRjaChvYmosIGF0dHJzKTtcbiAgfTtcbn1cblxuLy8gQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQsIHdoZW4gcGFzc2VkIGFuIG9iamVjdCwgd2lsbCB0cmF2ZXJzZSB0aGF0IG9iamVjdOKAmXNcbi8vIHByb3BlcnRpZXMgZG93biB0aGUgZ2l2ZW4gYHBhdGhgLCBzcGVjaWZpZWQgYXMgYW4gYXJyYXkgb2Yga2V5cyBvciBpbmRpY2VzLlxuZnVuY3Rpb24gcHJvcGVydHkocGF0aCkge1xuICBwYXRoID0gdG9QYXRoKHBhdGgpO1xuICByZXR1cm4gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIGRlZXBHZXQob2JqLCBwYXRoKTtcbiAgfTtcbn1cblxuLy8gSW50ZXJuYWwgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIGVmZmljaWVudCAoZm9yIGN1cnJlbnQgZW5naW5lcykgdmVyc2lvblxuLy8gb2YgdGhlIHBhc3NlZC1pbiBjYWxsYmFjaywgdG8gYmUgcmVwZWF0ZWRseSBhcHBsaWVkIGluIG90aGVyIFVuZGVyc2NvcmVcbi8vIGZ1bmN0aW9ucy5cbmZ1bmN0aW9uIG9wdGltaXplQ2IoZnVuYywgY29udGV4dCwgYXJnQ291bnQpIHtcbiAgaWYgKGNvbnRleHQgPT09IHZvaWQgMCkgcmV0dXJuIGZ1bmM7XG4gIHN3aXRjaCAoYXJnQ291bnQgPT0gbnVsbCA/IDMgOiBhcmdDb3VudCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gZnVuYy5jYWxsKGNvbnRleHQsIHZhbHVlKTtcbiAgICB9O1xuICAgIC8vIFRoZSAyLWFyZ3VtZW50IGNhc2UgaXMgb21pdHRlZCBiZWNhdXNlIHdl4oCZcmUgbm90IHVzaW5nIGl0LlxuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbikge1xuICAgICAgcmV0dXJuIGZ1bmMuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pO1xuICAgIH07XG4gICAgY2FzZSA0OiByZXR1cm4gZnVuY3Rpb24oYWNjdW11bGF0b3IsIHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbikge1xuICAgICAgcmV0dXJuIGZ1bmMuY2FsbChjb250ZXh0LCBhY2N1bXVsYXRvciwgdmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZnVuYy5hcHBseShjb250ZXh0LCBhcmd1bWVudHMpO1xuICB9O1xufVxuXG4vLyBBbiBpbnRlcm5hbCBmdW5jdGlvbiB0byBnZW5lcmF0ZSBjYWxsYmFja3MgdGhhdCBjYW4gYmUgYXBwbGllZCB0byBlYWNoXG4vLyBlbGVtZW50IGluIGEgY29sbGVjdGlvbiwgcmV0dXJuaW5nIHRoZSBkZXNpcmVkIHJlc3VsdCDigJQgZWl0aGVyIGBfLmlkZW50aXR5YCxcbi8vIGFuIGFyYml0cmFyeSBjYWxsYmFjaywgYSBwcm9wZXJ0eSBtYXRjaGVyLCBvciBhIHByb3BlcnR5IGFjY2Vzc29yLlxuZnVuY3Rpb24gYmFzZUl0ZXJhdGVlKHZhbHVlLCBjb250ZXh0LCBhcmdDb3VudCkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIGlkZW50aXR5O1xuICBpZiAoaXNGdW5jdGlvbiQxKHZhbHVlKSkgcmV0dXJuIG9wdGltaXplQ2IodmFsdWUsIGNvbnRleHQsIGFyZ0NvdW50KTtcbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiAhaXNBcnJheSh2YWx1ZSkpIHJldHVybiBtYXRjaGVyKHZhbHVlKTtcbiAgcmV0dXJuIHByb3BlcnR5KHZhbHVlKTtcbn1cblxuLy8gRXh0ZXJuYWwgd3JhcHBlciBmb3Igb3VyIGNhbGxiYWNrIGdlbmVyYXRvci4gVXNlcnMgbWF5IGN1c3RvbWl6ZVxuLy8gYF8uaXRlcmF0ZWVgIGlmIHRoZXkgd2FudCBhZGRpdGlvbmFsIHByZWRpY2F0ZS9pdGVyYXRlZSBzaG9ydGhhbmQgc3R5bGVzLlxuLy8gVGhpcyBhYnN0cmFjdGlvbiBoaWRlcyB0aGUgaW50ZXJuYWwtb25seSBgYXJnQ291bnRgIGFyZ3VtZW50LlxuZnVuY3Rpb24gaXRlcmF0ZWUodmFsdWUsIGNvbnRleHQpIHtcbiAgcmV0dXJuIGJhc2VJdGVyYXRlZSh2YWx1ZSwgY29udGV4dCwgSW5maW5pdHkpO1xufVxuXyQxLml0ZXJhdGVlID0gaXRlcmF0ZWU7XG5cbi8vIFRoZSBmdW5jdGlvbiB3ZSBjYWxsIGludGVybmFsbHkgdG8gZ2VuZXJhdGUgYSBjYWxsYmFjay4gSXQgaW52b2tlc1xuLy8gYF8uaXRlcmF0ZWVgIGlmIG92ZXJyaWRkZW4sIG90aGVyd2lzZSBgYmFzZUl0ZXJhdGVlYC5cbmZ1bmN0aW9uIGNiKHZhbHVlLCBjb250ZXh0LCBhcmdDb3VudCkge1xuICBpZiAoXyQxLml0ZXJhdGVlICE9PSBpdGVyYXRlZSkgcmV0dXJuIF8kMS5pdGVyYXRlZSh2YWx1ZSwgY29udGV4dCk7XG4gIHJldHVybiBiYXNlSXRlcmF0ZWUodmFsdWUsIGNvbnRleHQsIGFyZ0NvdW50KTtcbn1cblxuLy8gUmV0dXJucyB0aGUgcmVzdWx0cyBvZiBhcHBseWluZyB0aGUgYGl0ZXJhdGVlYCB0byBlYWNoIGVsZW1lbnQgb2YgYG9iamAuXG4vLyBJbiBjb250cmFzdCB0byBgXy5tYXBgIGl0IHJldHVybnMgYW4gb2JqZWN0LlxuZnVuY3Rpb24gbWFwT2JqZWN0KG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgaXRlcmF0ZWUgPSBjYihpdGVyYXRlZSwgY29udGV4dCk7XG4gIHZhciBfa2V5cyA9IGtleXMob2JqKSxcbiAgICAgIGxlbmd0aCA9IF9rZXlzLmxlbmd0aCxcbiAgICAgIHJlc3VsdHMgPSB7fTtcbiAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgIHZhciBjdXJyZW50S2V5ID0gX2tleXNbaW5kZXhdO1xuICAgIHJlc3VsdHNbY3VycmVudEtleV0gPSBpdGVyYXRlZShvYmpbY3VycmVudEtleV0sIGN1cnJlbnRLZXksIG9iaik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdHM7XG59XG5cbi8vIFByZWRpY2F0ZS1nZW5lcmF0aW5nIGZ1bmN0aW9uLiBPZnRlbiB1c2VmdWwgb3V0c2lkZSBvZiBVbmRlcnNjb3JlLlxuZnVuY3Rpb24gbm9vcCgpe31cblxuLy8gR2VuZXJhdGVzIGEgZnVuY3Rpb24gZm9yIGEgZ2l2ZW4gb2JqZWN0IHRoYXQgcmV0dXJucyBhIGdpdmVuIHByb3BlcnR5LlxuZnVuY3Rpb24gcHJvcGVydHlPZihvYmopIHtcbiAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gbm9vcDtcbiAgcmV0dXJuIGZ1bmN0aW9uKHBhdGgpIHtcbiAgICByZXR1cm4gZ2V0KG9iaiwgcGF0aCk7XG4gIH07XG59XG5cbi8vIFJ1biBhIGZ1bmN0aW9uICoqbioqIHRpbWVzLlxuZnVuY3Rpb24gdGltZXMobiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgdmFyIGFjY3VtID0gQXJyYXkoTWF0aC5tYXgoMCwgbikpO1xuICBpdGVyYXRlZSA9IG9wdGltaXplQ2IoaXRlcmF0ZWUsIGNvbnRleHQsIDEpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG47IGkrKykgYWNjdW1baV0gPSBpdGVyYXRlZShpKTtcbiAgcmV0dXJuIGFjY3VtO1xufVxuXG4vLyBSZXR1cm4gYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIGBtaW5gIGFuZCBgbWF4YCAoaW5jbHVzaXZlKS5cbmZ1bmN0aW9uIHJhbmRvbShtaW4sIG1heCkge1xuICBpZiAobWF4ID09IG51bGwpIHtcbiAgICBtYXggPSBtaW47XG4gICAgbWluID0gMDtcbiAgfVxuICByZXR1cm4gbWluICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKTtcbn1cblxuLy8gQSAocG9zc2libHkgZmFzdGVyKSB3YXkgdG8gZ2V0IHRoZSBjdXJyZW50IHRpbWVzdGFtcCBhcyBhbiBpbnRlZ2VyLlxudmFyIG5vdyA9IERhdGUubm93IHx8IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG59O1xuXG4vLyBJbnRlcm5hbCBoZWxwZXIgdG8gZ2VuZXJhdGUgZnVuY3Rpb25zIGZvciBlc2NhcGluZyBhbmQgdW5lc2NhcGluZyBzdHJpbmdzXG4vLyB0by9mcm9tIEhUTUwgaW50ZXJwb2xhdGlvbi5cbmZ1bmN0aW9uIGNyZWF0ZUVzY2FwZXIobWFwKSB7XG4gIHZhciBlc2NhcGVyID0gZnVuY3Rpb24obWF0Y2gpIHtcbiAgICByZXR1cm4gbWFwW21hdGNoXTtcbiAgfTtcbiAgLy8gUmVnZXhlcyBmb3IgaWRlbnRpZnlpbmcgYSBrZXkgdGhhdCBuZWVkcyB0byBiZSBlc2NhcGVkLlxuICB2YXIgc291cmNlID0gJyg/OicgKyBrZXlzKG1hcCkuam9pbignfCcpICsgJyknO1xuICB2YXIgdGVzdFJlZ2V4cCA9IFJlZ0V4cChzb3VyY2UpO1xuICB2YXIgcmVwbGFjZVJlZ2V4cCA9IFJlZ0V4cChzb3VyY2UsICdnJyk7XG4gIHJldHVybiBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICBzdHJpbmcgPSBzdHJpbmcgPT0gbnVsbCA/ICcnIDogJycgKyBzdHJpbmc7XG4gICAgcmV0dXJuIHRlc3RSZWdleHAudGVzdChzdHJpbmcpID8gc3RyaW5nLnJlcGxhY2UocmVwbGFjZVJlZ2V4cCwgZXNjYXBlcikgOiBzdHJpbmc7XG4gIH07XG59XG5cbi8vIEludGVybmFsIGxpc3Qgb2YgSFRNTCBlbnRpdGllcyBmb3IgZXNjYXBpbmcuXG52YXIgZXNjYXBlTWFwID0ge1xuICAnJic6ICcmYW1wOycsXG4gICc8JzogJyZsdDsnLFxuICAnPic6ICcmZ3Q7JyxcbiAgJ1wiJzogJyZxdW90OycsXG4gIFwiJ1wiOiAnJiN4Mjc7JyxcbiAgJ2AnOiAnJiN4NjA7J1xufTtcblxuLy8gRnVuY3Rpb24gZm9yIGVzY2FwaW5nIHN0cmluZ3MgdG8gSFRNTCBpbnRlcnBvbGF0aW9uLlxudmFyIF9lc2NhcGUgPSBjcmVhdGVFc2NhcGVyKGVzY2FwZU1hcCk7XG5cbi8vIEludGVybmFsIGxpc3Qgb2YgSFRNTCBlbnRpdGllcyBmb3IgdW5lc2NhcGluZy5cbnZhciB1bmVzY2FwZU1hcCA9IGludmVydChlc2NhcGVNYXApO1xuXG4vLyBGdW5jdGlvbiBmb3IgdW5lc2NhcGluZyBzdHJpbmdzIGZyb20gSFRNTCBpbnRlcnBvbGF0aW9uLlxudmFyIF91bmVzY2FwZSA9IGNyZWF0ZUVzY2FwZXIodW5lc2NhcGVNYXApO1xuXG4vLyBCeSBkZWZhdWx0LCBVbmRlcnNjb3JlIHVzZXMgRVJCLXN0eWxlIHRlbXBsYXRlIGRlbGltaXRlcnMuIENoYW5nZSB0aGVcbi8vIGZvbGxvd2luZyB0ZW1wbGF0ZSBzZXR0aW5ncyB0byB1c2UgYWx0ZXJuYXRpdmUgZGVsaW1pdGVycy5cbnZhciB0ZW1wbGF0ZVNldHRpbmdzID0gXyQxLnRlbXBsYXRlU2V0dGluZ3MgPSB7XG4gIGV2YWx1YXRlOiAvPCUoW1xcc1xcU10rPyklPi9nLFxuICBpbnRlcnBvbGF0ZTogLzwlPShbXFxzXFxTXSs/KSU+L2csXG4gIGVzY2FwZTogLzwlLShbXFxzXFxTXSs/KSU+L2dcbn07XG5cbi8vIFdoZW4gY3VzdG9taXppbmcgYF8udGVtcGxhdGVTZXR0aW5nc2AsIGlmIHlvdSBkb24ndCB3YW50IHRvIGRlZmluZSBhblxuLy8gaW50ZXJwb2xhdGlvbiwgZXZhbHVhdGlvbiBvciBlc2NhcGluZyByZWdleCwgd2UgbmVlZCBvbmUgdGhhdCBpc1xuLy8gZ3VhcmFudGVlZCBub3QgdG8gbWF0Y2guXG52YXIgbm9NYXRjaCA9IC8oLileLztcblxuLy8gQ2VydGFpbiBjaGFyYWN0ZXJzIG5lZWQgdG8gYmUgZXNjYXBlZCBzbyB0aGF0IHRoZXkgY2FuIGJlIHB1dCBpbnRvIGFcbi8vIHN0cmluZyBsaXRlcmFsLlxudmFyIGVzY2FwZXMgPSB7XG4gIFwiJ1wiOiBcIidcIixcbiAgJ1xcXFwnOiAnXFxcXCcsXG4gICdcXHInOiAncicsXG4gICdcXG4nOiAnbicsXG4gICdcXHUyMDI4JzogJ3UyMDI4JyxcbiAgJ1xcdTIwMjknOiAndTIwMjknXG59O1xuXG52YXIgZXNjYXBlUmVnRXhwID0gL1xcXFx8J3xcXHJ8XFxufFxcdTIwMjh8XFx1MjAyOS9nO1xuXG5mdW5jdGlvbiBlc2NhcGVDaGFyKG1hdGNoKSB7XG4gIHJldHVybiAnXFxcXCcgKyBlc2NhcGVzW21hdGNoXTtcbn1cblxuLy8gSW4gb3JkZXIgdG8gcHJldmVudCB0aGlyZC1wYXJ0eSBjb2RlIGluamVjdGlvbiB0aHJvdWdoXG4vLyBgXy50ZW1wbGF0ZVNldHRpbmdzLnZhcmlhYmxlYCwgd2UgdGVzdCBpdCBhZ2FpbnN0IHRoZSBmb2xsb3dpbmcgcmVndWxhclxuLy8gZXhwcmVzc2lvbi4gSXQgaXMgaW50ZW50aW9uYWxseSBhIGJpdCBtb3JlIGxpYmVyYWwgdGhhbiBqdXN0IG1hdGNoaW5nIHZhbGlkXG4vLyBpZGVudGlmaWVycywgYnV0IHN0aWxsIHByZXZlbnRzIHBvc3NpYmxlIGxvb3Bob2xlcyB0aHJvdWdoIGRlZmF1bHRzIG9yXG4vLyBkZXN0cnVjdHVyaW5nIGFzc2lnbm1lbnQuXG52YXIgYmFyZUlkZW50aWZpZXIgPSAvXlxccyooXFx3fFxcJCkrXFxzKiQvO1xuXG4vLyBKYXZhU2NyaXB0IG1pY3JvLXRlbXBsYXRpbmcsIHNpbWlsYXIgdG8gSm9obiBSZXNpZydzIGltcGxlbWVudGF0aW9uLlxuLy8gVW5kZXJzY29yZSB0ZW1wbGF0aW5nIGhhbmRsZXMgYXJiaXRyYXJ5IGRlbGltaXRlcnMsIHByZXNlcnZlcyB3aGl0ZXNwYWNlLFxuLy8gYW5kIGNvcnJlY3RseSBlc2NhcGVzIHF1b3RlcyB3aXRoaW4gaW50ZXJwb2xhdGVkIGNvZGUuXG4vLyBOQjogYG9sZFNldHRpbmdzYCBvbmx5IGV4aXN0cyBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG5mdW5jdGlvbiB0ZW1wbGF0ZSh0ZXh0LCBzZXR0aW5ncywgb2xkU2V0dGluZ3MpIHtcbiAgaWYgKCFzZXR0aW5ncyAmJiBvbGRTZXR0aW5ncykgc2V0dGluZ3MgPSBvbGRTZXR0aW5ncztcbiAgc2V0dGluZ3MgPSBkZWZhdWx0cyh7fSwgc2V0dGluZ3MsIF8kMS50ZW1wbGF0ZVNldHRpbmdzKTtcblxuICAvLyBDb21iaW5lIGRlbGltaXRlcnMgaW50byBvbmUgcmVndWxhciBleHByZXNzaW9uIHZpYSBhbHRlcm5hdGlvbi5cbiAgdmFyIG1hdGNoZXIgPSBSZWdFeHAoW1xuICAgIChzZXR0aW5ncy5lc2NhcGUgfHwgbm9NYXRjaCkuc291cmNlLFxuICAgIChzZXR0aW5ncy5pbnRlcnBvbGF0ZSB8fCBub01hdGNoKS5zb3VyY2UsXG4gICAgKHNldHRpbmdzLmV2YWx1YXRlIHx8IG5vTWF0Y2gpLnNvdXJjZVxuICBdLmpvaW4oJ3wnKSArICd8JCcsICdnJyk7XG5cbiAgLy8gQ29tcGlsZSB0aGUgdGVtcGxhdGUgc291cmNlLCBlc2NhcGluZyBzdHJpbmcgbGl0ZXJhbHMgYXBwcm9wcmlhdGVseS5cbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIHNvdXJjZSA9IFwiX19wKz0nXCI7XG4gIHRleHQucmVwbGFjZShtYXRjaGVyLCBmdW5jdGlvbihtYXRjaCwgZXNjYXBlLCBpbnRlcnBvbGF0ZSwgZXZhbHVhdGUsIG9mZnNldCkge1xuICAgIHNvdXJjZSArPSB0ZXh0LnNsaWNlKGluZGV4LCBvZmZzZXQpLnJlcGxhY2UoZXNjYXBlUmVnRXhwLCBlc2NhcGVDaGFyKTtcbiAgICBpbmRleCA9IG9mZnNldCArIG1hdGNoLmxlbmd0aDtcblxuICAgIGlmIChlc2NhcGUpIHtcbiAgICAgIHNvdXJjZSArPSBcIicrXFxuKChfX3Q9KFwiICsgZXNjYXBlICsgXCIpKT09bnVsbD8nJzpfLmVzY2FwZShfX3QpKStcXG4nXCI7XG4gICAgfSBlbHNlIGlmIChpbnRlcnBvbGF0ZSkge1xuICAgICAgc291cmNlICs9IFwiJytcXG4oKF9fdD0oXCIgKyBpbnRlcnBvbGF0ZSArIFwiKSk9PW51bGw/Jyc6X190KStcXG4nXCI7XG4gICAgfSBlbHNlIGlmIChldmFsdWF0ZSkge1xuICAgICAgc291cmNlICs9IFwiJztcXG5cIiArIGV2YWx1YXRlICsgXCJcXG5fX3ArPSdcIjtcbiAgICB9XG5cbiAgICAvLyBBZG9iZSBWTXMgbmVlZCB0aGUgbWF0Y2ggcmV0dXJuZWQgdG8gcHJvZHVjZSB0aGUgY29ycmVjdCBvZmZzZXQuXG4gICAgcmV0dXJuIG1hdGNoO1xuICB9KTtcbiAgc291cmNlICs9IFwiJztcXG5cIjtcblxuICB2YXIgYXJndW1lbnQgPSBzZXR0aW5ncy52YXJpYWJsZTtcbiAgaWYgKGFyZ3VtZW50KSB7XG4gICAgLy8gSW5zdXJlIGFnYWluc3QgdGhpcmQtcGFydHkgY29kZSBpbmplY3Rpb24uIChDVkUtMjAyMS0yMzM1OClcbiAgICBpZiAoIWJhcmVJZGVudGlmaWVyLnRlc3QoYXJndW1lbnQpKSB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAndmFyaWFibGUgaXMgbm90IGEgYmFyZSBpZGVudGlmaWVyOiAnICsgYXJndW1lbnRcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIElmIGEgdmFyaWFibGUgaXMgbm90IHNwZWNpZmllZCwgcGxhY2UgZGF0YSB2YWx1ZXMgaW4gbG9jYWwgc2NvcGUuXG4gICAgc291cmNlID0gJ3dpdGgob2JqfHx7fSl7XFxuJyArIHNvdXJjZSArICd9XFxuJztcbiAgICBhcmd1bWVudCA9ICdvYmonO1xuICB9XG5cbiAgc291cmNlID0gXCJ2YXIgX190LF9fcD0nJyxfX2o9QXJyYXkucHJvdG90eXBlLmpvaW4sXCIgK1xuICAgIFwicHJpbnQ9ZnVuY3Rpb24oKXtfX3ArPV9fai5jYWxsKGFyZ3VtZW50cywnJyk7fTtcXG5cIiArXG4gICAgc291cmNlICsgJ3JldHVybiBfX3A7XFxuJztcblxuICB2YXIgcmVuZGVyO1xuICB0cnkge1xuICAgIHJlbmRlciA9IG5ldyBGdW5jdGlvbihhcmd1bWVudCwgJ18nLCBzb3VyY2UpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgZS5zb3VyY2UgPSBzb3VyY2U7XG4gICAgdGhyb3cgZTtcbiAgfVxuXG4gIHZhciB0ZW1wbGF0ZSA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICByZXR1cm4gcmVuZGVyLmNhbGwodGhpcywgZGF0YSwgXyQxKTtcbiAgfTtcblxuICAvLyBQcm92aWRlIHRoZSBjb21waWxlZCBzb3VyY2UgYXMgYSBjb252ZW5pZW5jZSBmb3IgcHJlY29tcGlsYXRpb24uXG4gIHRlbXBsYXRlLnNvdXJjZSA9ICdmdW5jdGlvbignICsgYXJndW1lbnQgKyAnKXtcXG4nICsgc291cmNlICsgJ30nO1xuXG4gIHJldHVybiB0ZW1wbGF0ZTtcbn1cblxuLy8gVHJhdmVyc2VzIHRoZSBjaGlsZHJlbiBvZiBgb2JqYCBhbG9uZyBgcGF0aGAuIElmIGEgY2hpbGQgaXMgYSBmdW5jdGlvbiwgaXRcbi8vIGlzIGludm9rZWQgd2l0aCBpdHMgcGFyZW50IGFzIGNvbnRleHQuIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBmaW5hbFxuLy8gY2hpbGQsIG9yIGBmYWxsYmFja2AgaWYgYW55IGNoaWxkIGlzIHVuZGVmaW5lZC5cbmZ1bmN0aW9uIHJlc3VsdChvYmosIHBhdGgsIGZhbGxiYWNrKSB7XG4gIHBhdGggPSB0b1BhdGgocGF0aCk7XG4gIHZhciBsZW5ndGggPSBwYXRoLmxlbmd0aDtcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICByZXR1cm4gaXNGdW5jdGlvbiQxKGZhbGxiYWNrKSA/IGZhbGxiYWNrLmNhbGwob2JqKSA6IGZhbGxiYWNrO1xuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcHJvcCA9IG9iaiA9PSBudWxsID8gdm9pZCAwIDogb2JqW3BhdGhbaV1dO1xuICAgIGlmIChwcm9wID09PSB2b2lkIDApIHtcbiAgICAgIHByb3AgPSBmYWxsYmFjaztcbiAgICAgIGkgPSBsZW5ndGg7IC8vIEVuc3VyZSB3ZSBkb24ndCBjb250aW51ZSBpdGVyYXRpbmcuXG4gICAgfVxuICAgIG9iaiA9IGlzRnVuY3Rpb24kMShwcm9wKSA/IHByb3AuY2FsbChvYmopIDogcHJvcDtcbiAgfVxuICByZXR1cm4gb2JqO1xufVxuXG4vLyBHZW5lcmF0ZSBhIHVuaXF1ZSBpbnRlZ2VyIGlkICh1bmlxdWUgd2l0aGluIHRoZSBlbnRpcmUgY2xpZW50IHNlc3Npb24pLlxuLy8gVXNlZnVsIGZvciB0ZW1wb3JhcnkgRE9NIGlkcy5cbnZhciBpZENvdW50ZXIgPSAwO1xuZnVuY3Rpb24gdW5pcXVlSWQocHJlZml4KSB7XG4gIHZhciBpZCA9ICsraWRDb3VudGVyICsgJyc7XG4gIHJldHVybiBwcmVmaXggPyBwcmVmaXggKyBpZCA6IGlkO1xufVxuXG4vLyBTdGFydCBjaGFpbmluZyBhIHdyYXBwZWQgVW5kZXJzY29yZSBvYmplY3QuXG5mdW5jdGlvbiBjaGFpbihvYmopIHtcbiAgdmFyIGluc3RhbmNlID0gXyQxKG9iaik7XG4gIGluc3RhbmNlLl9jaGFpbiA9IHRydWU7XG4gIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8gSW50ZXJuYWwgZnVuY3Rpb24gdG8gZXhlY3V0ZSBgc291cmNlRnVuY2AgYm91bmQgdG8gYGNvbnRleHRgIHdpdGggb3B0aW9uYWxcbi8vIGBhcmdzYC4gRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIGV4ZWN1dGUgYSBmdW5jdGlvbiBhcyBhIGNvbnN0cnVjdG9yIG9yIGFzIGFcbi8vIG5vcm1hbCBmdW5jdGlvbi5cbmZ1bmN0aW9uIGV4ZWN1dGVCb3VuZChzb3VyY2VGdW5jLCBib3VuZEZ1bmMsIGNvbnRleHQsIGNhbGxpbmdDb250ZXh0LCBhcmdzKSB7XG4gIGlmICghKGNhbGxpbmdDb250ZXh0IGluc3RhbmNlb2YgYm91bmRGdW5jKSkgcmV0dXJuIHNvdXJjZUZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gIHZhciBzZWxmID0gYmFzZUNyZWF0ZShzb3VyY2VGdW5jLnByb3RvdHlwZSk7XG4gIHZhciByZXN1bHQgPSBzb3VyY2VGdW5jLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICBpZiAoaXNPYmplY3QocmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgcmV0dXJuIHNlbGY7XG59XG5cbi8vIFBhcnRpYWxseSBhcHBseSBhIGZ1bmN0aW9uIGJ5IGNyZWF0aW5nIGEgdmVyc2lvbiB0aGF0IGhhcyBoYWQgc29tZSBvZiBpdHNcbi8vIGFyZ3VtZW50cyBwcmUtZmlsbGVkLCB3aXRob3V0IGNoYW5naW5nIGl0cyBkeW5hbWljIGB0aGlzYCBjb250ZXh0LiBgX2AgYWN0c1xuLy8gYXMgYSBwbGFjZWhvbGRlciBieSBkZWZhdWx0LCBhbGxvd2luZyBhbnkgY29tYmluYXRpb24gb2YgYXJndW1lbnRzIHRvIGJlXG4vLyBwcmUtZmlsbGVkLiBTZXQgYF8ucGFydGlhbC5wbGFjZWhvbGRlcmAgZm9yIGEgY3VzdG9tIHBsYWNlaG9sZGVyIGFyZ3VtZW50LlxudmFyIHBhcnRpYWwgPSByZXN0QXJndW1lbnRzKGZ1bmN0aW9uKGZ1bmMsIGJvdW5kQXJncykge1xuICB2YXIgcGxhY2Vob2xkZXIgPSBwYXJ0aWFsLnBsYWNlaG9sZGVyO1xuICB2YXIgYm91bmQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcG9zaXRpb24gPSAwLCBsZW5ndGggPSBib3VuZEFyZ3MubGVuZ3RoO1xuICAgIHZhciBhcmdzID0gQXJyYXkobGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2ldID0gYm91bmRBcmdzW2ldID09PSBwbGFjZWhvbGRlciA/IGFyZ3VtZW50c1twb3NpdGlvbisrXSA6IGJvdW5kQXJnc1tpXTtcbiAgICB9XG4gICAgd2hpbGUgKHBvc2l0aW9uIDwgYXJndW1lbnRzLmxlbmd0aCkgYXJncy5wdXNoKGFyZ3VtZW50c1twb3NpdGlvbisrXSk7XG4gICAgcmV0dXJuIGV4ZWN1dGVCb3VuZChmdW5jLCBib3VuZCwgdGhpcywgdGhpcywgYXJncyk7XG4gIH07XG4gIHJldHVybiBib3VuZDtcbn0pO1xuXG5wYXJ0aWFsLnBsYWNlaG9sZGVyID0gXyQxO1xuXG4vLyBDcmVhdGUgYSBmdW5jdGlvbiBib3VuZCB0byBhIGdpdmVuIG9iamVjdCAoYXNzaWduaW5nIGB0aGlzYCwgYW5kIGFyZ3VtZW50cyxcbi8vIG9wdGlvbmFsbHkpLlxudmFyIGJpbmQgPSByZXN0QXJndW1lbnRzKGZ1bmN0aW9uKGZ1bmMsIGNvbnRleHQsIGFyZ3MpIHtcbiAgaWYgKCFpc0Z1bmN0aW9uJDEoZnVuYykpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0JpbmQgbXVzdCBiZSBjYWxsZWQgb24gYSBmdW5jdGlvbicpO1xuICB2YXIgYm91bmQgPSByZXN0QXJndW1lbnRzKGZ1bmN0aW9uKGNhbGxBcmdzKSB7XG4gICAgcmV0dXJuIGV4ZWN1dGVCb3VuZChmdW5jLCBib3VuZCwgY29udGV4dCwgdGhpcywgYXJncy5jb25jYXQoY2FsbEFyZ3MpKTtcbiAgfSk7XG4gIHJldHVybiBib3VuZDtcbn0pO1xuXG4vLyBJbnRlcm5hbCBoZWxwZXIgZm9yIGNvbGxlY3Rpb24gbWV0aG9kcyB0byBkZXRlcm1pbmUgd2hldGhlciBhIGNvbGxlY3Rpb25cbi8vIHNob3VsZCBiZSBpdGVyYXRlZCBhcyBhbiBhcnJheSBvciBhcyBhbiBvYmplY3QuXG4vLyBSZWxhdGVkOiBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9sZW5ndGhcbi8vIEF2b2lkcyBhIHZlcnkgbmFzdHkgaU9TIDggSklUIGJ1ZyBvbiBBUk0tNjQuICMyMDk0XG52YXIgaXNBcnJheUxpa2UgPSBjcmVhdGVTaXplUHJvcGVydHlDaGVjayhnZXRMZW5ndGgpO1xuXG4vLyBJbnRlcm5hbCBpbXBsZW1lbnRhdGlvbiBvZiBhIHJlY3Vyc2l2ZSBgZmxhdHRlbmAgZnVuY3Rpb24uXG5mdW5jdGlvbiBmbGF0dGVuJDEoaW5wdXQsIGRlcHRoLCBzdHJpY3QsIG91dHB1dCkge1xuICBvdXRwdXQgPSBvdXRwdXQgfHwgW107XG4gIGlmICghZGVwdGggJiYgZGVwdGggIT09IDApIHtcbiAgICBkZXB0aCA9IEluZmluaXR5O1xuICB9IGVsc2UgaWYgKGRlcHRoIDw9IDApIHtcbiAgICByZXR1cm4gb3V0cHV0LmNvbmNhdChpbnB1dCk7XG4gIH1cbiAgdmFyIGlkeCA9IG91dHB1dC5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBnZXRMZW5ndGgoaW5wdXQpOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdmFsdWUgPSBpbnB1dFtpXTtcbiAgICBpZiAoaXNBcnJheUxpa2UodmFsdWUpICYmIChpc0FycmF5KHZhbHVlKSB8fCBpc0FyZ3VtZW50cyQxKHZhbHVlKSkpIHtcbiAgICAgIC8vIEZsYXR0ZW4gY3VycmVudCBsZXZlbCBvZiBhcnJheSBvciBhcmd1bWVudHMgb2JqZWN0LlxuICAgICAgaWYgKGRlcHRoID4gMSkge1xuICAgICAgICBmbGF0dGVuJDEodmFsdWUsIGRlcHRoIC0gMSwgc3RyaWN0LCBvdXRwdXQpO1xuICAgICAgICBpZHggPSBvdXRwdXQubGVuZ3RoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGogPSAwLCBsZW4gPSB2YWx1ZS5sZW5ndGg7XG4gICAgICAgIHdoaWxlIChqIDwgbGVuKSBvdXRwdXRbaWR4KytdID0gdmFsdWVbaisrXTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFzdHJpY3QpIHtcbiAgICAgIG91dHB1dFtpZHgrK10gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuLy8gQmluZCBhIG51bWJlciBvZiBhbiBvYmplY3QncyBtZXRob2RzIHRvIHRoYXQgb2JqZWN0LiBSZW1haW5pbmcgYXJndW1lbnRzXG4vLyBhcmUgdGhlIG1ldGhvZCBuYW1lcyB0byBiZSBib3VuZC4gVXNlZnVsIGZvciBlbnN1cmluZyB0aGF0IGFsbCBjYWxsYmFja3Ncbi8vIGRlZmluZWQgb24gYW4gb2JqZWN0IGJlbG9uZyB0byBpdC5cbnZhciBiaW5kQWxsID0gcmVzdEFyZ3VtZW50cyhmdW5jdGlvbihvYmosIGtleXMpIHtcbiAga2V5cyA9IGZsYXR0ZW4kMShrZXlzLCBmYWxzZSwgZmFsc2UpO1xuICB2YXIgaW5kZXggPSBrZXlzLmxlbmd0aDtcbiAgaWYgKGluZGV4IDwgMSkgdGhyb3cgbmV3IEVycm9yKCdiaW5kQWxsIG11c3QgYmUgcGFzc2VkIGZ1bmN0aW9uIG5hbWVzJyk7XG4gIHdoaWxlIChpbmRleC0tKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaW5kZXhdO1xuICAgIG9ialtrZXldID0gYmluZChvYmpba2V5XSwgb2JqKTtcbiAgfVxuICByZXR1cm4gb2JqO1xufSk7XG5cbi8vIE1lbW9pemUgYW4gZXhwZW5zaXZlIGZ1bmN0aW9uIGJ5IHN0b3JpbmcgaXRzIHJlc3VsdHMuXG5mdW5jdGlvbiBtZW1vaXplKGZ1bmMsIGhhc2hlcikge1xuICB2YXIgbWVtb2l6ZSA9IGZ1bmN0aW9uKGtleSkge1xuICAgIHZhciBjYWNoZSA9IG1lbW9pemUuY2FjaGU7XG4gICAgdmFyIGFkZHJlc3MgPSAnJyArIChoYXNoZXIgPyBoYXNoZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSA6IGtleSk7XG4gICAgaWYgKCFoYXMkMShjYWNoZSwgYWRkcmVzcykpIGNhY2hlW2FkZHJlc3NdID0gZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHJldHVybiBjYWNoZVthZGRyZXNzXTtcbiAgfTtcbiAgbWVtb2l6ZS5jYWNoZSA9IHt9O1xuICByZXR1cm4gbWVtb2l6ZTtcbn1cblxuLy8gRGVsYXlzIGEgZnVuY3Rpb24gZm9yIHRoZSBnaXZlbiBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLCBhbmQgdGhlbiBjYWxsc1xuLy8gaXQgd2l0aCB0aGUgYXJndW1lbnRzIHN1cHBsaWVkLlxudmFyIGRlbGF5ID0gcmVzdEFyZ3VtZW50cyhmdW5jdGlvbihmdW5jLCB3YWl0LCBhcmdzKSB7XG4gIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBmdW5jLmFwcGx5KG51bGwsIGFyZ3MpO1xuICB9LCB3YWl0KTtcbn0pO1xuXG4vLyBEZWZlcnMgYSBmdW5jdGlvbiwgc2NoZWR1bGluZyBpdCB0byBydW4gYWZ0ZXIgdGhlIGN1cnJlbnQgY2FsbCBzdGFjayBoYXNcbi8vIGNsZWFyZWQuXG52YXIgZGVmZXIgPSBwYXJ0aWFsKGRlbGF5LCBfJDEsIDEpO1xuXG4vLyBSZXR1cm5zIGEgZnVuY3Rpb24sIHRoYXQsIHdoZW4gaW52b2tlZCwgd2lsbCBvbmx5IGJlIHRyaWdnZXJlZCBhdCBtb3N0IG9uY2Vcbi8vIGR1cmluZyBhIGdpdmVuIHdpbmRvdyBvZiB0aW1lLiBOb3JtYWxseSwgdGhlIHRocm90dGxlZCBmdW5jdGlvbiB3aWxsIHJ1blxuLy8gYXMgbXVjaCBhcyBpdCBjYW4sIHdpdGhvdXQgZXZlciBnb2luZyBtb3JlIHRoYW4gb25jZSBwZXIgYHdhaXRgIGR1cmF0aW9uO1xuLy8gYnV0IGlmIHlvdSdkIGxpa2UgdG8gZGlzYWJsZSB0aGUgZXhlY3V0aW9uIG9uIHRoZSBsZWFkaW5nIGVkZ2UsIHBhc3Ncbi8vIGB7bGVhZGluZzogZmFsc2V9YC4gVG8gZGlzYWJsZSBleGVjdXRpb24gb24gdGhlIHRyYWlsaW5nIGVkZ2UsIGRpdHRvLlxuZnVuY3Rpb24gdGhyb3R0bGUoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgdGltZW91dCwgY29udGV4dCwgYXJncywgcmVzdWx0O1xuICB2YXIgcHJldmlvdXMgPSAwO1xuICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcblxuICB2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICBwcmV2aW91cyA9IG9wdGlvbnMubGVhZGluZyA9PT0gZmFsc2UgPyAwIDogbm93KCk7XG4gICAgdGltZW91dCA9IG51bGw7XG4gICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICBpZiAoIXRpbWVvdXQpIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgfTtcblxuICB2YXIgdGhyb3R0bGVkID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIF9ub3cgPSBub3coKTtcbiAgICBpZiAoIXByZXZpb3VzICYmIG9wdGlvbnMubGVhZGluZyA9PT0gZmFsc2UpIHByZXZpb3VzID0gX25vdztcbiAgICB2YXIgcmVtYWluaW5nID0gd2FpdCAtIChfbm93IC0gcHJldmlvdXMpO1xuICAgIGNvbnRleHQgPSB0aGlzO1xuICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgaWYgKHJlbWFpbmluZyA8PSAwIHx8IHJlbWFpbmluZyA+IHdhaXQpIHtcbiAgICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICB9XG4gICAgICBwcmV2aW91cyA9IF9ub3c7XG4gICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgaWYgKCF0aW1lb3V0KSBjb250ZXh0ID0gYXJncyA9IG51bGw7XG4gICAgfSBlbHNlIGlmICghdGltZW91dCAmJiBvcHRpb25zLnRyYWlsaW5nICE9PSBmYWxzZSkge1xuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHJlbWFpbmluZyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgdGhyb3R0bGVkLmNhbmNlbCA9IGZ1bmN0aW9uKCkge1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICBwcmV2aW91cyA9IDA7XG4gICAgdGltZW91dCA9IGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgfTtcblxuICByZXR1cm4gdGhyb3R0bGVkO1xufVxuXG4vLyBXaGVuIGEgc2VxdWVuY2Ugb2YgY2FsbHMgb2YgdGhlIHJldHVybmVkIGZ1bmN0aW9uIGVuZHMsIHRoZSBhcmd1bWVudFxuLy8gZnVuY3Rpb24gaXMgdHJpZ2dlcmVkLiBUaGUgZW5kIG9mIGEgc2VxdWVuY2UgaXMgZGVmaW5lZCBieSB0aGUgYHdhaXRgXG4vLyBwYXJhbWV0ZXIuIElmIGBpbW1lZGlhdGVgIGlzIHBhc3NlZCwgdGhlIGFyZ3VtZW50IGZ1bmN0aW9uIHdpbGwgYmVcbi8vIHRyaWdnZXJlZCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBzZXF1ZW5jZSBpbnN0ZWFkIG9mIGF0IHRoZSBlbmQuXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBpbW1lZGlhdGUpIHtcbiAgdmFyIHRpbWVvdXQsIHByZXZpb3VzLCBhcmdzLCByZXN1bHQsIGNvbnRleHQ7XG5cbiAgdmFyIGxhdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHBhc3NlZCA9IG5vdygpIC0gcHJldmlvdXM7XG4gICAgaWYgKHdhaXQgPiBwYXNzZWQpIHtcbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0IC0gcGFzc2VkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICBpZiAoIWltbWVkaWF0ZSkgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVlZGVkIGJlY2F1c2UgYGZ1bmNgIGNhbiByZWN1cnNpdmVseSBpbnZva2UgYGRlYm91bmNlZGAuXG4gICAgICBpZiAoIXRpbWVvdXQpIGFyZ3MgPSBjb250ZXh0ID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGRlYm91bmNlZCA9IHJlc3RBcmd1bWVudHMoZnVuY3Rpb24oX2FyZ3MpIHtcbiAgICBjb250ZXh0ID0gdGhpcztcbiAgICBhcmdzID0gX2FyZ3M7XG4gICAgcHJldmlvdXMgPSBub3coKTtcbiAgICBpZiAoIXRpbWVvdXQpIHtcbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgICAgIGlmIChpbW1lZGlhdGUpIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0pO1xuXG4gIGRlYm91bmNlZC5jYW5jZWwgPSBmdW5jdGlvbigpIHtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgdGltZW91dCA9IGFyZ3MgPSBjb250ZXh0ID0gbnVsbDtcbiAgfTtcblxuICByZXR1cm4gZGVib3VuY2VkO1xufVxuXG4vLyBSZXR1cm5zIHRoZSBmaXJzdCBmdW5jdGlvbiBwYXNzZWQgYXMgYW4gYXJndW1lbnQgdG8gdGhlIHNlY29uZCxcbi8vIGFsbG93aW5nIHlvdSB0byBhZGp1c3QgYXJndW1lbnRzLCBydW4gY29kZSBiZWZvcmUgYW5kIGFmdGVyLCBhbmRcbi8vIGNvbmRpdGlvbmFsbHkgZXhlY3V0ZSB0aGUgb3JpZ2luYWwgZnVuY3Rpb24uXG5mdW5jdGlvbiB3cmFwKGZ1bmMsIHdyYXBwZXIpIHtcbiAgcmV0dXJuIHBhcnRpYWwod3JhcHBlciwgZnVuYyk7XG59XG5cbi8vIFJldHVybnMgYSBuZWdhdGVkIHZlcnNpb24gb2YgdGhlIHBhc3NlZC1pbiBwcmVkaWNhdGUuXG5mdW5jdGlvbiBuZWdhdGUocHJlZGljYXRlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gIXByZWRpY2F0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufVxuXG4vLyBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBpcyB0aGUgY29tcG9zaXRpb24gb2YgYSBsaXN0IG9mIGZ1bmN0aW9ucywgZWFjaFxuLy8gY29uc3VtaW5nIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGZ1bmN0aW9uIHRoYXQgZm9sbG93cy5cbmZ1bmN0aW9uIGNvbXBvc2UoKSB7XG4gIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICB2YXIgc3RhcnQgPSBhcmdzLmxlbmd0aCAtIDE7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgaSA9IHN0YXJ0O1xuICAgIHZhciByZXN1bHQgPSBhcmdzW3N0YXJ0XS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHdoaWxlIChpLS0pIHJlc3VsdCA9IGFyZ3NbaV0uY2FsbCh0aGlzLCByZXN1bHQpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG5cbi8vIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgb25seSBiZSBleGVjdXRlZCBvbiBhbmQgYWZ0ZXIgdGhlIE50aCBjYWxsLlxuZnVuY3Rpb24gYWZ0ZXIodGltZXMsIGZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGlmICgtLXRpbWVzIDwgMSkge1xuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH07XG59XG5cbi8vIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgb25seSBiZSBleGVjdXRlZCB1cCB0byAoYnV0IG5vdCBpbmNsdWRpbmcpIHRoZVxuLy8gTnRoIGNhbGwuXG5mdW5jdGlvbiBiZWZvcmUodGltZXMsIGZ1bmMpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBpZiAoLS10aW1lcyA+IDApIHtcbiAgICAgIG1lbW8gPSBmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIGlmICh0aW1lcyA8PSAxKSBmdW5jID0gbnVsbDtcbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn1cblxuLy8gUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBleGVjdXRlZCBhdCBtb3N0IG9uZSB0aW1lLCBubyBtYXR0ZXIgaG93XG4vLyBvZnRlbiB5b3UgY2FsbCBpdC4gVXNlZnVsIGZvciBsYXp5IGluaXRpYWxpemF0aW9uLlxudmFyIG9uY2UgPSBwYXJ0aWFsKGJlZm9yZSwgMik7XG5cbi8vIFJldHVybnMgdGhlIGZpcnN0IGtleSBvbiBhbiBvYmplY3QgdGhhdCBwYXNzZXMgYSB0cnV0aCB0ZXN0LlxuZnVuY3Rpb24gZmluZEtleShvYmosIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICBwcmVkaWNhdGUgPSBjYihwcmVkaWNhdGUsIGNvbnRleHQpO1xuICB2YXIgX2tleXMgPSBrZXlzKG9iaiksIGtleTtcbiAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IF9rZXlzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gX2tleXNbaV07XG4gICAgaWYgKHByZWRpY2F0ZShvYmpba2V5XSwga2V5LCBvYmopKSByZXR1cm4ga2V5O1xuICB9XG59XG5cbi8vIEludGVybmFsIGZ1bmN0aW9uIHRvIGdlbmVyYXRlIGBfLmZpbmRJbmRleGAgYW5kIGBfLmZpbmRMYXN0SW5kZXhgLlxuZnVuY3Rpb24gY3JlYXRlUHJlZGljYXRlSW5kZXhGaW5kZXIoZGlyKSB7XG4gIHJldHVybiBmdW5jdGlvbihhcnJheSwgcHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgcHJlZGljYXRlID0gY2IocHJlZGljYXRlLCBjb250ZXh0KTtcbiAgICB2YXIgbGVuZ3RoID0gZ2V0TGVuZ3RoKGFycmF5KTtcbiAgICB2YXIgaW5kZXggPSBkaXIgPiAwID8gMCA6IGxlbmd0aCAtIDE7XG4gICAgZm9yICg7IGluZGV4ID49IDAgJiYgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IGRpcikge1xuICAgICAgaWYgKHByZWRpY2F0ZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkpIHJldHVybiBpbmRleDtcbiAgICB9XG4gICAgcmV0dXJuIC0xO1xuICB9O1xufVxuXG4vLyBSZXR1cm5zIHRoZSBmaXJzdCBpbmRleCBvbiBhbiBhcnJheS1saWtlIHRoYXQgcGFzc2VzIGEgdHJ1dGggdGVzdC5cbnZhciBmaW5kSW5kZXggPSBjcmVhdGVQcmVkaWNhdGVJbmRleEZpbmRlcigxKTtcblxuLy8gUmV0dXJucyB0aGUgbGFzdCBpbmRleCBvbiBhbiBhcnJheS1saWtlIHRoYXQgcGFzc2VzIGEgdHJ1dGggdGVzdC5cbnZhciBmaW5kTGFzdEluZGV4ID0gY3JlYXRlUHJlZGljYXRlSW5kZXhGaW5kZXIoLTEpO1xuXG4vLyBVc2UgYSBjb21wYXJhdG9yIGZ1bmN0aW9uIHRvIGZpZ3VyZSBvdXQgdGhlIHNtYWxsZXN0IGluZGV4IGF0IHdoaWNoXG4vLyBhbiBvYmplY3Qgc2hvdWxkIGJlIGluc2VydGVkIHNvIGFzIHRvIG1haW50YWluIG9yZGVyLiBVc2VzIGJpbmFyeSBzZWFyY2guXG5mdW5jdGlvbiBzb3J0ZWRJbmRleChhcnJheSwgb2JqLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICBpdGVyYXRlZSA9IGNiKGl0ZXJhdGVlLCBjb250ZXh0LCAxKTtcbiAgdmFyIHZhbHVlID0gaXRlcmF0ZWUob2JqKTtcbiAgdmFyIGxvdyA9IDAsIGhpZ2ggPSBnZXRMZW5ndGgoYXJyYXkpO1xuICB3aGlsZSAobG93IDwgaGlnaCkge1xuICAgIHZhciBtaWQgPSBNYXRoLmZsb29yKChsb3cgKyBoaWdoKSAvIDIpO1xuICAgIGlmIChpdGVyYXRlZShhcnJheVttaWRdKSA8IHZhbHVlKSBsb3cgPSBtaWQgKyAxOyBlbHNlIGhpZ2ggPSBtaWQ7XG4gIH1cbiAgcmV0dXJuIGxvdztcbn1cblxuLy8gSW50ZXJuYWwgZnVuY3Rpb24gdG8gZ2VuZXJhdGUgdGhlIGBfLmluZGV4T2ZgIGFuZCBgXy5sYXN0SW5kZXhPZmAgZnVuY3Rpb25zLlxuZnVuY3Rpb24gY3JlYXRlSW5kZXhGaW5kZXIoZGlyLCBwcmVkaWNhdGVGaW5kLCBzb3J0ZWRJbmRleCkge1xuICByZXR1cm4gZnVuY3Rpb24oYXJyYXksIGl0ZW0sIGlkeCkge1xuICAgIHZhciBpID0gMCwgbGVuZ3RoID0gZ2V0TGVuZ3RoKGFycmF5KTtcbiAgICBpZiAodHlwZW9mIGlkeCA9PSAnbnVtYmVyJykge1xuICAgICAgaWYgKGRpciA+IDApIHtcbiAgICAgICAgaSA9IGlkeCA+PSAwID8gaWR4IDogTWF0aC5tYXgoaWR4ICsgbGVuZ3RoLCBpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxlbmd0aCA9IGlkeCA+PSAwID8gTWF0aC5taW4oaWR4ICsgMSwgbGVuZ3RoKSA6IGlkeCArIGxlbmd0aCArIDE7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzb3J0ZWRJbmRleCAmJiBpZHggJiYgbGVuZ3RoKSB7XG4gICAgICBpZHggPSBzb3J0ZWRJbmRleChhcnJheSwgaXRlbSk7XG4gICAgICByZXR1cm4gYXJyYXlbaWR4XSA9PT0gaXRlbSA/IGlkeCA6IC0xO1xuICAgIH1cbiAgICBpZiAoaXRlbSAhPT0gaXRlbSkge1xuICAgICAgaWR4ID0gcHJlZGljYXRlRmluZChzbGljZS5jYWxsKGFycmF5LCBpLCBsZW5ndGgpLCBpc05hTiQxKTtcbiAgICAgIHJldHVybiBpZHggPj0gMCA/IGlkeCArIGkgOiAtMTtcbiAgICB9XG4gICAgZm9yIChpZHggPSBkaXIgPiAwID8gaSA6IGxlbmd0aCAtIDE7IGlkeCA+PSAwICYmIGlkeCA8IGxlbmd0aDsgaWR4ICs9IGRpcikge1xuICAgICAgaWYgKGFycmF5W2lkeF0gPT09IGl0ZW0pIHJldHVybiBpZHg7XG4gICAgfVxuICAgIHJldHVybiAtMTtcbiAgfTtcbn1cblxuLy8gUmV0dXJuIHRoZSBwb3NpdGlvbiBvZiB0aGUgZmlyc3Qgb2NjdXJyZW5jZSBvZiBhbiBpdGVtIGluIGFuIGFycmF5LFxuLy8gb3IgLTEgaWYgdGhlIGl0ZW0gaXMgbm90IGluY2x1ZGVkIGluIHRoZSBhcnJheS5cbi8vIElmIHRoZSBhcnJheSBpcyBsYXJnZSBhbmQgYWxyZWFkeSBpbiBzb3J0IG9yZGVyLCBwYXNzIGB0cnVlYFxuLy8gZm9yICoqaXNTb3J0ZWQqKiB0byB1c2UgYmluYXJ5IHNlYXJjaC5cbnZhciBpbmRleE9mID0gY3JlYXRlSW5kZXhGaW5kZXIoMSwgZmluZEluZGV4LCBzb3J0ZWRJbmRleCk7XG5cbi8vIFJldHVybiB0aGUgcG9zaXRpb24gb2YgdGhlIGxhc3Qgb2NjdXJyZW5jZSBvZiBhbiBpdGVtIGluIGFuIGFycmF5LFxuLy8gb3IgLTEgaWYgdGhlIGl0ZW0gaXMgbm90IGluY2x1ZGVkIGluIHRoZSBhcnJheS5cbnZhciBsYXN0SW5kZXhPZiA9IGNyZWF0ZUluZGV4RmluZGVyKC0xLCBmaW5kTGFzdEluZGV4KTtcblxuLy8gUmV0dXJuIHRoZSBmaXJzdCB2YWx1ZSB3aGljaCBwYXNzZXMgYSB0cnV0aCB0ZXN0LlxuZnVuY3Rpb24gZmluZChvYmosIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICB2YXIga2V5RmluZGVyID0gaXNBcnJheUxpa2Uob2JqKSA/IGZpbmRJbmRleCA6IGZpbmRLZXk7XG4gIHZhciBrZXkgPSBrZXlGaW5kZXIob2JqLCBwcmVkaWNhdGUsIGNvbnRleHQpO1xuICBpZiAoa2V5ICE9PSB2b2lkIDAgJiYga2V5ICE9PSAtMSkgcmV0dXJuIG9ialtrZXldO1xufVxuXG4vLyBDb252ZW5pZW5jZSB2ZXJzaW9uIG9mIGEgY29tbW9uIHVzZSBjYXNlIG9mIGBfLmZpbmRgOiBnZXR0aW5nIHRoZSBmaXJzdFxuLy8gb2JqZWN0IGNvbnRhaW5pbmcgc3BlY2lmaWMgYGtleTp2YWx1ZWAgcGFpcnMuXG5mdW5jdGlvbiBmaW5kV2hlcmUob2JqLCBhdHRycykge1xuICByZXR1cm4gZmluZChvYmosIG1hdGNoZXIoYXR0cnMpKTtcbn1cblxuLy8gVGhlIGNvcm5lcnN0b25lIGZvciBjb2xsZWN0aW9uIGZ1bmN0aW9ucywgYW4gYGVhY2hgXG4vLyBpbXBsZW1lbnRhdGlvbiwgYWthIGBmb3JFYWNoYC5cbi8vIEhhbmRsZXMgcmF3IG9iamVjdHMgaW4gYWRkaXRpb24gdG8gYXJyYXktbGlrZXMuIFRyZWF0cyBhbGxcbi8vIHNwYXJzZSBhcnJheS1saWtlcyBhcyBpZiB0aGV5IHdlcmUgZGVuc2UuXG5mdW5jdGlvbiBlYWNoKG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgaXRlcmF0ZWUgPSBvcHRpbWl6ZUNiKGl0ZXJhdGVlLCBjb250ZXh0KTtcbiAgdmFyIGksIGxlbmd0aDtcbiAgaWYgKGlzQXJyYXlMaWtlKG9iaikpIHtcbiAgICBmb3IgKGkgPSAwLCBsZW5ndGggPSBvYmoubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGl0ZXJhdGVlKG9ialtpXSwgaSwgb2JqKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIF9rZXlzID0ga2V5cyhvYmopO1xuICAgIGZvciAoaSA9IDAsIGxlbmd0aCA9IF9rZXlzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpdGVyYXRlZShvYmpbX2tleXNbaV1dLCBfa2V5c1tpXSwgb2JqKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cblxuLy8gUmV0dXJuIHRoZSByZXN1bHRzIG9mIGFwcGx5aW5nIHRoZSBpdGVyYXRlZSB0byBlYWNoIGVsZW1lbnQuXG5mdW5jdGlvbiBtYXAob2JqLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICBpdGVyYXRlZSA9IGNiKGl0ZXJhdGVlLCBjb250ZXh0KTtcbiAgdmFyIF9rZXlzID0gIWlzQXJyYXlMaWtlKG9iaikgJiYga2V5cyhvYmopLFxuICAgICAgbGVuZ3RoID0gKF9rZXlzIHx8IG9iaikubGVuZ3RoLFxuICAgICAgcmVzdWx0cyA9IEFycmF5KGxlbmd0aCk7XG4gIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICB2YXIgY3VycmVudEtleSA9IF9rZXlzID8gX2tleXNbaW5kZXhdIDogaW5kZXg7XG4gICAgcmVzdWx0c1tpbmRleF0gPSBpdGVyYXRlZShvYmpbY3VycmVudEtleV0sIGN1cnJlbnRLZXksIG9iaik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdHM7XG59XG5cbi8vIEludGVybmFsIGhlbHBlciB0byBjcmVhdGUgYSByZWR1Y2luZyBmdW5jdGlvbiwgaXRlcmF0aW5nIGxlZnQgb3IgcmlnaHQuXG5mdW5jdGlvbiBjcmVhdGVSZWR1Y2UoZGlyKSB7XG4gIC8vIFdyYXAgY29kZSB0aGF0IHJlYXNzaWducyBhcmd1bWVudCB2YXJpYWJsZXMgaW4gYSBzZXBhcmF0ZSBmdW5jdGlvbiB0aGFuXG4gIC8vIHRoZSBvbmUgdGhhdCBhY2Nlc3NlcyBgYXJndW1lbnRzLmxlbmd0aGAgdG8gYXZvaWQgYSBwZXJmIGhpdC4gKCMxOTkxKVxuICB2YXIgcmVkdWNlciA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0ZWUsIG1lbW8sIGluaXRpYWwpIHtcbiAgICB2YXIgX2tleXMgPSAhaXNBcnJheUxpa2Uob2JqKSAmJiBrZXlzKG9iaiksXG4gICAgICAgIGxlbmd0aCA9IChfa2V5cyB8fCBvYmopLmxlbmd0aCxcbiAgICAgICAgaW5kZXggPSBkaXIgPiAwID8gMCA6IGxlbmd0aCAtIDE7XG4gICAgaWYgKCFpbml0aWFsKSB7XG4gICAgICBtZW1vID0gb2JqW19rZXlzID8gX2tleXNbaW5kZXhdIDogaW5kZXhdO1xuICAgICAgaW5kZXggKz0gZGlyO1xuICAgIH1cbiAgICBmb3IgKDsgaW5kZXggPj0gMCAmJiBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gZGlyKSB7XG4gICAgICB2YXIgY3VycmVudEtleSA9IF9rZXlzID8gX2tleXNbaW5kZXhdIDogaW5kZXg7XG4gICAgICBtZW1vID0gaXRlcmF0ZWUobWVtbywgb2JqW2N1cnJlbnRLZXldLCBjdXJyZW50S2V5LCBvYmopO1xuICAgIH1cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcblxuICByZXR1cm4gZnVuY3Rpb24ob2JqLCBpdGVyYXRlZSwgbWVtbywgY29udGV4dCkge1xuICAgIHZhciBpbml0aWFsID0gYXJndW1lbnRzLmxlbmd0aCA+PSAzO1xuICAgIHJldHVybiByZWR1Y2VyKG9iaiwgb3B0aW1pemVDYihpdGVyYXRlZSwgY29udGV4dCwgNCksIG1lbW8sIGluaXRpYWwpO1xuICB9O1xufVxuXG4vLyAqKlJlZHVjZSoqIGJ1aWxkcyB1cCBhIHNpbmdsZSByZXN1bHQgZnJvbSBhIGxpc3Qgb2YgdmFsdWVzLCBha2EgYGluamVjdGAsXG4vLyBvciBgZm9sZGxgLlxudmFyIHJlZHVjZSA9IGNyZWF0ZVJlZHVjZSgxKTtcblxuLy8gVGhlIHJpZ2h0LWFzc29jaWF0aXZlIHZlcnNpb24gb2YgcmVkdWNlLCBhbHNvIGtub3duIGFzIGBmb2xkcmAuXG52YXIgcmVkdWNlUmlnaHQgPSBjcmVhdGVSZWR1Y2UoLTEpO1xuXG4vLyBSZXR1cm4gYWxsIHRoZSBlbGVtZW50cyB0aGF0IHBhc3MgYSB0cnV0aCB0ZXN0LlxuZnVuY3Rpb24gZmlsdGVyKG9iaiwgcHJlZGljYXRlLCBjb250ZXh0KSB7XG4gIHZhciByZXN1bHRzID0gW107XG4gIHByZWRpY2F0ZSA9IGNiKHByZWRpY2F0ZSwgY29udGV4dCk7XG4gIGVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICBpZiAocHJlZGljYXRlKHZhbHVlLCBpbmRleCwgbGlzdCkpIHJlc3VsdHMucHVzaCh2YWx1ZSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0cztcbn1cblxuLy8gUmV0dXJuIGFsbCB0aGUgZWxlbWVudHMgZm9yIHdoaWNoIGEgdHJ1dGggdGVzdCBmYWlscy5cbmZ1bmN0aW9uIHJlamVjdChvYmosIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICByZXR1cm4gZmlsdGVyKG9iaiwgbmVnYXRlKGNiKHByZWRpY2F0ZSkpLCBjb250ZXh0KTtcbn1cblxuLy8gRGV0ZXJtaW5lIHdoZXRoZXIgYWxsIG9mIHRoZSBlbGVtZW50cyBwYXNzIGEgdHJ1dGggdGVzdC5cbmZ1bmN0aW9uIGV2ZXJ5KG9iaiwgcHJlZGljYXRlLCBjb250ZXh0KSB7XG4gIHByZWRpY2F0ZSA9IGNiKHByZWRpY2F0ZSwgY29udGV4dCk7XG4gIHZhciBfa2V5cyA9ICFpc0FycmF5TGlrZShvYmopICYmIGtleXMob2JqKSxcbiAgICAgIGxlbmd0aCA9IChfa2V5cyB8fCBvYmopLmxlbmd0aDtcbiAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgIHZhciBjdXJyZW50S2V5ID0gX2tleXMgPyBfa2V5c1tpbmRleF0gOiBpbmRleDtcbiAgICBpZiAoIXByZWRpY2F0ZShvYmpbY3VycmVudEtleV0sIGN1cnJlbnRLZXksIG9iaikpIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLy8gRGV0ZXJtaW5lIGlmIGF0IGxlYXN0IG9uZSBlbGVtZW50IGluIHRoZSBvYmplY3QgcGFzc2VzIGEgdHJ1dGggdGVzdC5cbmZ1bmN0aW9uIHNvbWUob2JqLCBwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgcHJlZGljYXRlID0gY2IocHJlZGljYXRlLCBjb250ZXh0KTtcbiAgdmFyIF9rZXlzID0gIWlzQXJyYXlMaWtlKG9iaikgJiYga2V5cyhvYmopLFxuICAgICAgbGVuZ3RoID0gKF9rZXlzIHx8IG9iaikubGVuZ3RoO1xuICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgdmFyIGN1cnJlbnRLZXkgPSBfa2V5cyA/IF9rZXlzW2luZGV4XSA6IGluZGV4O1xuICAgIGlmIChwcmVkaWNhdGUob2JqW2N1cnJlbnRLZXldLCBjdXJyZW50S2V5LCBvYmopKSByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8vIERldGVybWluZSBpZiB0aGUgYXJyYXkgb3Igb2JqZWN0IGNvbnRhaW5zIGEgZ2l2ZW4gaXRlbSAodXNpbmcgYD09PWApLlxuZnVuY3Rpb24gY29udGFpbnMob2JqLCBpdGVtLCBmcm9tSW5kZXgsIGd1YXJkKSB7XG4gIGlmICghaXNBcnJheUxpa2Uob2JqKSkgb2JqID0gdmFsdWVzKG9iaik7XG4gIGlmICh0eXBlb2YgZnJvbUluZGV4ICE9ICdudW1iZXInIHx8IGd1YXJkKSBmcm9tSW5kZXggPSAwO1xuICByZXR1cm4gaW5kZXhPZihvYmosIGl0ZW0sIGZyb21JbmRleCkgPj0gMDtcbn1cblxuLy8gSW52b2tlIGEgbWV0aG9kICh3aXRoIGFyZ3VtZW50cykgb24gZXZlcnkgaXRlbSBpbiBhIGNvbGxlY3Rpb24uXG52YXIgaW52b2tlID0gcmVzdEFyZ3VtZW50cyhmdW5jdGlvbihvYmosIHBhdGgsIGFyZ3MpIHtcbiAgdmFyIGNvbnRleHRQYXRoLCBmdW5jO1xuICBpZiAoaXNGdW5jdGlvbiQxKHBhdGgpKSB7XG4gICAgZnVuYyA9IHBhdGg7XG4gIH0gZWxzZSB7XG4gICAgcGF0aCA9IHRvUGF0aChwYXRoKTtcbiAgICBjb250ZXh0UGF0aCA9IHBhdGguc2xpY2UoMCwgLTEpO1xuICAgIHBhdGggPSBwYXRoW3BhdGgubGVuZ3RoIC0gMV07XG4gIH1cbiAgcmV0dXJuIG1hcChvYmosIGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZnVuYztcbiAgICBpZiAoIW1ldGhvZCkge1xuICAgICAgaWYgKGNvbnRleHRQYXRoICYmIGNvbnRleHRQYXRoLmxlbmd0aCkge1xuICAgICAgICBjb250ZXh0ID0gZGVlcEdldChjb250ZXh0LCBjb250ZXh0UGF0aCk7XG4gICAgICB9XG4gICAgICBpZiAoY29udGV4dCA9PSBudWxsKSByZXR1cm4gdm9pZCAwO1xuICAgICAgbWV0aG9kID0gY29udGV4dFtwYXRoXTtcbiAgICB9XG4gICAgcmV0dXJuIG1ldGhvZCA9PSBudWxsID8gbWV0aG9kIDogbWV0aG9kLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICB9KTtcbn0pO1xuXG4vLyBDb252ZW5pZW5jZSB2ZXJzaW9uIG9mIGEgY29tbW9uIHVzZSBjYXNlIG9mIGBfLm1hcGA6IGZldGNoaW5nIGEgcHJvcGVydHkuXG5mdW5jdGlvbiBwbHVjayhvYmosIGtleSkge1xuICByZXR1cm4gbWFwKG9iaiwgcHJvcGVydHkoa2V5KSk7XG59XG5cbi8vIENvbnZlbmllbmNlIHZlcnNpb24gb2YgYSBjb21tb24gdXNlIGNhc2Ugb2YgYF8uZmlsdGVyYDogc2VsZWN0aW5nIG9ubHlcbi8vIG9iamVjdHMgY29udGFpbmluZyBzcGVjaWZpYyBga2V5OnZhbHVlYCBwYWlycy5cbmZ1bmN0aW9uIHdoZXJlKG9iaiwgYXR0cnMpIHtcbiAgcmV0dXJuIGZpbHRlcihvYmosIG1hdGNoZXIoYXR0cnMpKTtcbn1cblxuLy8gUmV0dXJuIHRoZSBtYXhpbXVtIGVsZW1lbnQgKG9yIGVsZW1lbnQtYmFzZWQgY29tcHV0YXRpb24pLlxuZnVuY3Rpb24gbWF4KG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgdmFyIHJlc3VsdCA9IC1JbmZpbml0eSwgbGFzdENvbXB1dGVkID0gLUluZmluaXR5LFxuICAgICAgdmFsdWUsIGNvbXB1dGVkO1xuICBpZiAoaXRlcmF0ZWUgPT0gbnVsbCB8fCB0eXBlb2YgaXRlcmF0ZWUgPT0gJ251bWJlcicgJiYgdHlwZW9mIG9ialswXSAhPSAnb2JqZWN0JyAmJiBvYmogIT0gbnVsbCkge1xuICAgIG9iaiA9IGlzQXJyYXlMaWtlKG9iaikgPyBvYmogOiB2YWx1ZXMob2JqKTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gb2JqLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB2YWx1ZSA9IG9ialtpXTtcbiAgICAgIGlmICh2YWx1ZSAhPSBudWxsICYmIHZhbHVlID4gcmVzdWx0KSB7XG4gICAgICAgIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpdGVyYXRlZSA9IGNiKGl0ZXJhdGVlLCBjb250ZXh0KTtcbiAgICBlYWNoKG9iaiwgZnVuY3Rpb24odiwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIGNvbXB1dGVkID0gaXRlcmF0ZWUodiwgaW5kZXgsIGxpc3QpO1xuICAgICAgaWYgKGNvbXB1dGVkID4gbGFzdENvbXB1dGVkIHx8IGNvbXB1dGVkID09PSAtSW5maW5pdHkgJiYgcmVzdWx0ID09PSAtSW5maW5pdHkpIHtcbiAgICAgICAgcmVzdWx0ID0gdjtcbiAgICAgICAgbGFzdENvbXB1dGVkID0gY29tcHV0ZWQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gUmV0dXJuIHRoZSBtaW5pbXVtIGVsZW1lbnQgKG9yIGVsZW1lbnQtYmFzZWQgY29tcHV0YXRpb24pLlxuZnVuY3Rpb24gbWluKG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgdmFyIHJlc3VsdCA9IEluZmluaXR5LCBsYXN0Q29tcHV0ZWQgPSBJbmZpbml0eSxcbiAgICAgIHZhbHVlLCBjb21wdXRlZDtcbiAgaWYgKGl0ZXJhdGVlID09IG51bGwgfHwgdHlwZW9mIGl0ZXJhdGVlID09ICdudW1iZXInICYmIHR5cGVvZiBvYmpbMF0gIT0gJ29iamVjdCcgJiYgb2JqICE9IG51bGwpIHtcbiAgICBvYmogPSBpc0FycmF5TGlrZShvYmopID8gb2JqIDogdmFsdWVzKG9iaik7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IG9iai5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdmFsdWUgPSBvYmpbaV07XG4gICAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiB2YWx1ZSA8IHJlc3VsdCkge1xuICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaXRlcmF0ZWUgPSBjYihpdGVyYXRlZSwgY29udGV4dCk7XG4gICAgZWFjaChvYmosIGZ1bmN0aW9uKHYsIGluZGV4LCBsaXN0KSB7XG4gICAgICBjb21wdXRlZCA9IGl0ZXJhdGVlKHYsIGluZGV4LCBsaXN0KTtcbiAgICAgIGlmIChjb21wdXRlZCA8IGxhc3RDb21wdXRlZCB8fCBjb21wdXRlZCA9PT0gSW5maW5pdHkgJiYgcmVzdWx0ID09PSBJbmZpbml0eSkge1xuICAgICAgICByZXN1bHQgPSB2O1xuICAgICAgICBsYXN0Q29tcHV0ZWQgPSBjb21wdXRlZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBTYW1wbGUgKipuKiogcmFuZG9tIHZhbHVlcyBmcm9tIGEgY29sbGVjdGlvbiB1c2luZyB0aGUgbW9kZXJuIHZlcnNpb24gb2YgdGhlXG4vLyBbRmlzaGVyLVlhdGVzIHNodWZmbGVdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Zpc2hlcuKAk1lhdGVzX3NodWZmbGUpLlxuLy8gSWYgKipuKiogaXMgbm90IHNwZWNpZmllZCwgcmV0dXJucyBhIHNpbmdsZSByYW5kb20gZWxlbWVudC5cbi8vIFRoZSBpbnRlcm5hbCBgZ3VhcmRgIGFyZ3VtZW50IGFsbG93cyBpdCB0byB3b3JrIHdpdGggYF8ubWFwYC5cbmZ1bmN0aW9uIHNhbXBsZShvYmosIG4sIGd1YXJkKSB7XG4gIGlmIChuID09IG51bGwgfHwgZ3VhcmQpIHtcbiAgICBpZiAoIWlzQXJyYXlMaWtlKG9iaikpIG9iaiA9IHZhbHVlcyhvYmopO1xuICAgIHJldHVybiBvYmpbcmFuZG9tKG9iai5sZW5ndGggLSAxKV07XG4gIH1cbiAgdmFyIHNhbXBsZSA9IGlzQXJyYXlMaWtlKG9iaikgPyBjbG9uZShvYmopIDogdmFsdWVzKG9iaik7XG4gIHZhciBsZW5ndGggPSBnZXRMZW5ndGgoc2FtcGxlKTtcbiAgbiA9IE1hdGgubWF4KE1hdGgubWluKG4sIGxlbmd0aCksIDApO1xuICB2YXIgbGFzdCA9IGxlbmd0aCAtIDE7XG4gIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBuOyBpbmRleCsrKSB7XG4gICAgdmFyIHJhbmQgPSByYW5kb20oaW5kZXgsIGxhc3QpO1xuICAgIHZhciB0ZW1wID0gc2FtcGxlW2luZGV4XTtcbiAgICBzYW1wbGVbaW5kZXhdID0gc2FtcGxlW3JhbmRdO1xuICAgIHNhbXBsZVtyYW5kXSA9IHRlbXA7XG4gIH1cbiAgcmV0dXJuIHNhbXBsZS5zbGljZSgwLCBuKTtcbn1cblxuLy8gU2h1ZmZsZSBhIGNvbGxlY3Rpb24uXG5mdW5jdGlvbiBzaHVmZmxlKG9iaikge1xuICByZXR1cm4gc2FtcGxlKG9iaiwgSW5maW5pdHkpO1xufVxuXG4vLyBTb3J0IHRoZSBvYmplY3QncyB2YWx1ZXMgYnkgYSBjcml0ZXJpb24gcHJvZHVjZWQgYnkgYW4gaXRlcmF0ZWUuXG5mdW5jdGlvbiBzb3J0Qnkob2JqLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICB2YXIgaW5kZXggPSAwO1xuICBpdGVyYXRlZSA9IGNiKGl0ZXJhdGVlLCBjb250ZXh0KTtcbiAgcmV0dXJuIHBsdWNrKG1hcChvYmosIGZ1bmN0aW9uKHZhbHVlLCBrZXksIGxpc3QpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgaW5kZXg6IGluZGV4KyssXG4gICAgICBjcml0ZXJpYTogaXRlcmF0ZWUodmFsdWUsIGtleSwgbGlzdClcbiAgICB9O1xuICB9KS5zb3J0KGZ1bmN0aW9uKGxlZnQsIHJpZ2h0KSB7XG4gICAgdmFyIGEgPSBsZWZ0LmNyaXRlcmlhO1xuICAgIHZhciBiID0gcmlnaHQuY3JpdGVyaWE7XG4gICAgaWYgKGEgIT09IGIpIHtcbiAgICAgIGlmIChhID4gYiB8fCBhID09PSB2b2lkIDApIHJldHVybiAxO1xuICAgICAgaWYgKGEgPCBiIHx8IGIgPT09IHZvaWQgMCkgcmV0dXJuIC0xO1xuICAgIH1cbiAgICByZXR1cm4gbGVmdC5pbmRleCAtIHJpZ2h0LmluZGV4O1xuICB9KSwgJ3ZhbHVlJyk7XG59XG5cbi8vIEFuIGludGVybmFsIGZ1bmN0aW9uIHVzZWQgZm9yIGFnZ3JlZ2F0ZSBcImdyb3VwIGJ5XCIgb3BlcmF0aW9ucy5cbmZ1bmN0aW9uIGdyb3VwKGJlaGF2aW9yLCBwYXJ0aXRpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgICB2YXIgcmVzdWx0ID0gcGFydGl0aW9uID8gW1tdLCBbXV0gOiB7fTtcbiAgICBpdGVyYXRlZSA9IGNiKGl0ZXJhdGVlLCBjb250ZXh0KTtcbiAgICBlYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4KSB7XG4gICAgICB2YXIga2V5ID0gaXRlcmF0ZWUodmFsdWUsIGluZGV4LCBvYmopO1xuICAgICAgYmVoYXZpb3IocmVzdWx0LCB2YWx1ZSwga2V5KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufVxuXG4vLyBHcm91cHMgdGhlIG9iamVjdCdzIHZhbHVlcyBieSBhIGNyaXRlcmlvbi4gUGFzcyBlaXRoZXIgYSBzdHJpbmcgYXR0cmlidXRlXG4vLyB0byBncm91cCBieSwgb3IgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIGNyaXRlcmlvbi5cbnZhciBncm91cEJ5ID0gZ3JvdXAoZnVuY3Rpb24ocmVzdWx0LCB2YWx1ZSwga2V5KSB7XG4gIGlmIChoYXMkMShyZXN1bHQsIGtleSkpIHJlc3VsdFtrZXldLnB1c2godmFsdWUpOyBlbHNlIHJlc3VsdFtrZXldID0gW3ZhbHVlXTtcbn0pO1xuXG4vLyBJbmRleGVzIHRoZSBvYmplY3QncyB2YWx1ZXMgYnkgYSBjcml0ZXJpb24sIHNpbWlsYXIgdG8gYF8uZ3JvdXBCeWAsIGJ1dCBmb3Jcbi8vIHdoZW4geW91IGtub3cgdGhhdCB5b3VyIGluZGV4IHZhbHVlcyB3aWxsIGJlIHVuaXF1ZS5cbnZhciBpbmRleEJ5ID0gZ3JvdXAoZnVuY3Rpb24ocmVzdWx0LCB2YWx1ZSwga2V5KSB7XG4gIHJlc3VsdFtrZXldID0gdmFsdWU7XG59KTtcblxuLy8gQ291bnRzIGluc3RhbmNlcyBvZiBhbiBvYmplY3QgdGhhdCBncm91cCBieSBhIGNlcnRhaW4gY3JpdGVyaW9uLiBQYXNzXG4vLyBlaXRoZXIgYSBzdHJpbmcgYXR0cmlidXRlIHRvIGNvdW50IGJ5LCBvciBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGVcbi8vIGNyaXRlcmlvbi5cbnZhciBjb3VudEJ5ID0gZ3JvdXAoZnVuY3Rpb24ocmVzdWx0LCB2YWx1ZSwga2V5KSB7XG4gIGlmIChoYXMkMShyZXN1bHQsIGtleSkpIHJlc3VsdFtrZXldKys7IGVsc2UgcmVzdWx0W2tleV0gPSAxO1xufSk7XG5cbi8vIFNwbGl0IGEgY29sbGVjdGlvbiBpbnRvIHR3byBhcnJheXM6IG9uZSB3aG9zZSBlbGVtZW50cyBhbGwgcGFzcyB0aGUgZ2l2ZW5cbi8vIHRydXRoIHRlc3QsIGFuZCBvbmUgd2hvc2UgZWxlbWVudHMgYWxsIGRvIG5vdCBwYXNzIHRoZSB0cnV0aCB0ZXN0LlxudmFyIHBhcnRpdGlvbiA9IGdyb3VwKGZ1bmN0aW9uKHJlc3VsdCwgdmFsdWUsIHBhc3MpIHtcbiAgcmVzdWx0W3Bhc3MgPyAwIDogMV0ucHVzaCh2YWx1ZSk7XG59LCB0cnVlKTtcblxuLy8gU2FmZWx5IGNyZWF0ZSBhIHJlYWwsIGxpdmUgYXJyYXkgZnJvbSBhbnl0aGluZyBpdGVyYWJsZS5cbnZhciByZVN0clN5bWJvbCA9IC9bXlxcdWQ4MDAtXFx1ZGZmZl18W1xcdWQ4MDAtXFx1ZGJmZl1bXFx1ZGMwMC1cXHVkZmZmXXxbXFx1ZDgwMC1cXHVkZmZmXS9nO1xuZnVuY3Rpb24gdG9BcnJheShvYmopIHtcbiAgaWYgKCFvYmopIHJldHVybiBbXTtcbiAgaWYgKGlzQXJyYXkob2JqKSkgcmV0dXJuIHNsaWNlLmNhbGwob2JqKTtcbiAgaWYgKGlzU3RyaW5nKG9iaikpIHtcbiAgICAvLyBLZWVwIHN1cnJvZ2F0ZSBwYWlyIGNoYXJhY3RlcnMgdG9nZXRoZXIuXG4gICAgcmV0dXJuIG9iai5tYXRjaChyZVN0clN5bWJvbCk7XG4gIH1cbiAgaWYgKGlzQXJyYXlMaWtlKG9iaikpIHJldHVybiBtYXAob2JqLCBpZGVudGl0eSk7XG4gIHJldHVybiB2YWx1ZXMob2JqKTtcbn1cblxuLy8gUmV0dXJuIHRoZSBudW1iZXIgb2YgZWxlbWVudHMgaW4gYSBjb2xsZWN0aW9uLlxuZnVuY3Rpb24gc2l6ZShvYmopIHtcbiAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gMDtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iaikgPyBvYmoubGVuZ3RoIDoga2V5cyhvYmopLmxlbmd0aDtcbn1cblxuLy8gSW50ZXJuYWwgYF8ucGlja2AgaGVscGVyIGZ1bmN0aW9uIHRvIGRldGVybWluZSB3aGV0aGVyIGBrZXlgIGlzIGFuIGVudW1lcmFibGVcbi8vIHByb3BlcnR5IG5hbWUgb2YgYG9iamAuXG5mdW5jdGlvbiBrZXlJbk9iaih2YWx1ZSwga2V5LCBvYmopIHtcbiAgcmV0dXJuIGtleSBpbiBvYmo7XG59XG5cbi8vIFJldHVybiBhIGNvcHkgb2YgdGhlIG9iamVjdCBvbmx5IGNvbnRhaW5pbmcgdGhlIGFsbG93ZWQgcHJvcGVydGllcy5cbnZhciBwaWNrID0gcmVzdEFyZ3VtZW50cyhmdW5jdGlvbihvYmosIGtleXMpIHtcbiAgdmFyIHJlc3VsdCA9IHt9LCBpdGVyYXRlZSA9IGtleXNbMF07XG4gIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIHJlc3VsdDtcbiAgaWYgKGlzRnVuY3Rpb24kMShpdGVyYXRlZSkpIHtcbiAgICBpZiAoa2V5cy5sZW5ndGggPiAxKSBpdGVyYXRlZSA9IG9wdGltaXplQ2IoaXRlcmF0ZWUsIGtleXNbMV0pO1xuICAgIGtleXMgPSBhbGxLZXlzKG9iaik7XG4gIH0gZWxzZSB7XG4gICAgaXRlcmF0ZWUgPSBrZXlJbk9iajtcbiAgICBrZXlzID0gZmxhdHRlbiQxKGtleXMsIGZhbHNlLCBmYWxzZSk7XG4gICAgb2JqID0gT2JqZWN0KG9iaik7XG4gIH1cbiAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGtleXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICB2YXIgdmFsdWUgPSBvYmpba2V5XTtcbiAgICBpZiAoaXRlcmF0ZWUodmFsdWUsIGtleSwgb2JqKSkgcmVzdWx0W2tleV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufSk7XG5cbi8vIFJldHVybiBhIGNvcHkgb2YgdGhlIG9iamVjdCB3aXRob3V0IHRoZSBkaXNhbGxvd2VkIHByb3BlcnRpZXMuXG52YXIgb21pdCA9IHJlc3RBcmd1bWVudHMoZnVuY3Rpb24ob2JqLCBrZXlzKSB7XG4gIHZhciBpdGVyYXRlZSA9IGtleXNbMF0sIGNvbnRleHQ7XG4gIGlmIChpc0Z1bmN0aW9uJDEoaXRlcmF0ZWUpKSB7XG4gICAgaXRlcmF0ZWUgPSBuZWdhdGUoaXRlcmF0ZWUpO1xuICAgIGlmIChrZXlzLmxlbmd0aCA+IDEpIGNvbnRleHQgPSBrZXlzWzFdO1xuICB9IGVsc2Uge1xuICAgIGtleXMgPSBtYXAoZmxhdHRlbiQxKGtleXMsIGZhbHNlLCBmYWxzZSksIFN0cmluZyk7XG4gICAgaXRlcmF0ZWUgPSBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgICByZXR1cm4gIWNvbnRhaW5zKGtleXMsIGtleSk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gcGljayhvYmosIGl0ZXJhdGVlLCBjb250ZXh0KTtcbn0pO1xuXG4vLyBSZXR1cm5zIGV2ZXJ5dGhpbmcgYnV0IHRoZSBsYXN0IGVudHJ5IG9mIHRoZSBhcnJheS4gRXNwZWNpYWxseSB1c2VmdWwgb25cbi8vIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBQYXNzaW5nICoqbioqIHdpbGwgcmV0dXJuIGFsbCB0aGUgdmFsdWVzIGluXG4vLyB0aGUgYXJyYXksIGV4Y2x1ZGluZyB0aGUgbGFzdCBOLlxuZnVuY3Rpb24gaW5pdGlhbChhcnJheSwgbiwgZ3VhcmQpIHtcbiAgcmV0dXJuIHNsaWNlLmNhbGwoYXJyYXksIDAsIE1hdGgubWF4KDAsIGFycmF5Lmxlbmd0aCAtIChuID09IG51bGwgfHwgZ3VhcmQgPyAxIDogbikpKTtcbn1cblxuLy8gR2V0IHRoZSBmaXJzdCBlbGVtZW50IG9mIGFuIGFycmF5LiBQYXNzaW5nICoqbioqIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBOXG4vLyB2YWx1ZXMgaW4gdGhlIGFycmF5LiBUaGUgKipndWFyZCoqIGNoZWNrIGFsbG93cyBpdCB0byB3b3JrIHdpdGggYF8ubWFwYC5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5LCBuLCBndWFyZCkge1xuICBpZiAoYXJyYXkgPT0gbnVsbCB8fCBhcnJheS5sZW5ndGggPCAxKSByZXR1cm4gbiA9PSBudWxsIHx8IGd1YXJkID8gdm9pZCAwIDogW107XG4gIGlmIChuID09IG51bGwgfHwgZ3VhcmQpIHJldHVybiBhcnJheVswXTtcbiAgcmV0dXJuIGluaXRpYWwoYXJyYXksIGFycmF5Lmxlbmd0aCAtIG4pO1xufVxuXG4vLyBSZXR1cm5zIGV2ZXJ5dGhpbmcgYnV0IHRoZSBmaXJzdCBlbnRyeSBvZiB0aGUgYGFycmF5YC4gRXNwZWNpYWxseSB1c2VmdWwgb25cbi8vIHRoZSBgYXJndW1lbnRzYCBvYmplY3QuIFBhc3NpbmcgYW4gKipuKiogd2lsbCByZXR1cm4gdGhlIHJlc3QgTiB2YWx1ZXMgaW4gdGhlXG4vLyBgYXJyYXlgLlxuZnVuY3Rpb24gcmVzdChhcnJheSwgbiwgZ3VhcmQpIHtcbiAgcmV0dXJuIHNsaWNlLmNhbGwoYXJyYXksIG4gPT0gbnVsbCB8fCBndWFyZCA/IDEgOiBuKTtcbn1cblxuLy8gR2V0IHRoZSBsYXN0IGVsZW1lbnQgb2YgYW4gYXJyYXkuIFBhc3NpbmcgKipuKiogd2lsbCByZXR1cm4gdGhlIGxhc3QgTlxuLy8gdmFsdWVzIGluIHRoZSBhcnJheS5cbmZ1bmN0aW9uIGxhc3QoYXJyYXksIG4sIGd1YXJkKSB7XG4gIGlmIChhcnJheSA9PSBudWxsIHx8IGFycmF5Lmxlbmd0aCA8IDEpIHJldHVybiBuID09IG51bGwgfHwgZ3VhcmQgPyB2b2lkIDAgOiBbXTtcbiAgaWYgKG4gPT0gbnVsbCB8fCBndWFyZCkgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdO1xuICByZXR1cm4gcmVzdChhcnJheSwgTWF0aC5tYXgoMCwgYXJyYXkubGVuZ3RoIC0gbikpO1xufVxuXG4vLyBUcmltIG91dCBhbGwgZmFsc3kgdmFsdWVzIGZyb20gYW4gYXJyYXkuXG5mdW5jdGlvbiBjb21wYWN0KGFycmF5KSB7XG4gIHJldHVybiBmaWx0ZXIoYXJyYXksIEJvb2xlYW4pO1xufVxuXG4vLyBGbGF0dGVuIG91dCBhbiBhcnJheSwgZWl0aGVyIHJlY3Vyc2l2ZWx5IChieSBkZWZhdWx0KSwgb3IgdXAgdG8gYGRlcHRoYC5cbi8vIFBhc3NpbmcgYHRydWVgIG9yIGBmYWxzZWAgYXMgYGRlcHRoYCBtZWFucyBgMWAgb3IgYEluZmluaXR5YCwgcmVzcGVjdGl2ZWx5LlxuZnVuY3Rpb24gZmxhdHRlbihhcnJheSwgZGVwdGgpIHtcbiAgcmV0dXJuIGZsYXR0ZW4kMShhcnJheSwgZGVwdGgsIGZhbHNlKTtcbn1cblxuLy8gVGFrZSB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIG9uZSBhcnJheSBhbmQgYSBudW1iZXIgb2Ygb3RoZXIgYXJyYXlzLlxuLy8gT25seSB0aGUgZWxlbWVudHMgcHJlc2VudCBpbiBqdXN0IHRoZSBmaXJzdCBhcnJheSB3aWxsIHJlbWFpbi5cbnZhciBkaWZmZXJlbmNlID0gcmVzdEFyZ3VtZW50cyhmdW5jdGlvbihhcnJheSwgcmVzdCkge1xuICByZXN0ID0gZmxhdHRlbiQxKHJlc3QsIHRydWUsIHRydWUpO1xuICByZXR1cm4gZmlsdGVyKGFycmF5LCBmdW5jdGlvbih2YWx1ZSl7XG4gICAgcmV0dXJuICFjb250YWlucyhyZXN0LCB2YWx1ZSk7XG4gIH0pO1xufSk7XG5cbi8vIFJldHVybiBhIHZlcnNpb24gb2YgdGhlIGFycmF5IHRoYXQgZG9lcyBub3QgY29udGFpbiB0aGUgc3BlY2lmaWVkIHZhbHVlKHMpLlxudmFyIHdpdGhvdXQgPSByZXN0QXJndW1lbnRzKGZ1bmN0aW9uKGFycmF5LCBvdGhlckFycmF5cykge1xuICByZXR1cm4gZGlmZmVyZW5jZShhcnJheSwgb3RoZXJBcnJheXMpO1xufSk7XG5cbi8vIFByb2R1Y2UgYSBkdXBsaWNhdGUtZnJlZSB2ZXJzaW9uIG9mIHRoZSBhcnJheS4gSWYgdGhlIGFycmF5IGhhcyBhbHJlYWR5XG4vLyBiZWVuIHNvcnRlZCwgeW91IGhhdmUgdGhlIG9wdGlvbiBvZiB1c2luZyBhIGZhc3RlciBhbGdvcml0aG0uXG4vLyBUaGUgZmFzdGVyIGFsZ29yaXRobSB3aWxsIG5vdCB3b3JrIHdpdGggYW4gaXRlcmF0ZWUgaWYgdGhlIGl0ZXJhdGVlXG4vLyBpcyBub3QgYSBvbmUtdG8tb25lIGZ1bmN0aW9uLCBzbyBwcm92aWRpbmcgYW4gaXRlcmF0ZWUgd2lsbCBkaXNhYmxlXG4vLyB0aGUgZmFzdGVyIGFsZ29yaXRobS5cbmZ1bmN0aW9uIHVuaXEoYXJyYXksIGlzU29ydGVkLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICBpZiAoIWlzQm9vbGVhbihpc1NvcnRlZCkpIHtcbiAgICBjb250ZXh0ID0gaXRlcmF0ZWU7XG4gICAgaXRlcmF0ZWUgPSBpc1NvcnRlZDtcbiAgICBpc1NvcnRlZCA9IGZhbHNlO1xuICB9XG4gIGlmIChpdGVyYXRlZSAhPSBudWxsKSBpdGVyYXRlZSA9IGNiKGl0ZXJhdGVlLCBjb250ZXh0KTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgc2VlbiA9IFtdO1xuICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gZ2V0TGVuZ3RoKGFycmF5KTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaV0sXG4gICAgICAgIGNvbXB1dGVkID0gaXRlcmF0ZWUgPyBpdGVyYXRlZSh2YWx1ZSwgaSwgYXJyYXkpIDogdmFsdWU7XG4gICAgaWYgKGlzU29ydGVkICYmICFpdGVyYXRlZSkge1xuICAgICAgaWYgKCFpIHx8IHNlZW4gIT09IGNvbXB1dGVkKSByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgICBzZWVuID0gY29tcHV0ZWQ7XG4gICAgfSBlbHNlIGlmIChpdGVyYXRlZSkge1xuICAgICAgaWYgKCFjb250YWlucyhzZWVuLCBjb21wdXRlZCkpIHtcbiAgICAgICAgc2Vlbi5wdXNoKGNvbXB1dGVkKTtcbiAgICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIWNvbnRhaW5zKHJlc3VsdCwgdmFsdWUpKSB7XG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIFByb2R1Y2UgYW4gYXJyYXkgdGhhdCBjb250YWlucyB0aGUgdW5pb246IGVhY2ggZGlzdGluY3QgZWxlbWVudCBmcm9tIGFsbCBvZlxuLy8gdGhlIHBhc3NlZC1pbiBhcnJheXMuXG52YXIgdW5pb24gPSByZXN0QXJndW1lbnRzKGZ1bmN0aW9uKGFycmF5cykge1xuICByZXR1cm4gdW5pcShmbGF0dGVuJDEoYXJyYXlzLCB0cnVlLCB0cnVlKSk7XG59KTtcblxuLy8gUHJvZHVjZSBhbiBhcnJheSB0aGF0IGNvbnRhaW5zIGV2ZXJ5IGl0ZW0gc2hhcmVkIGJldHdlZW4gYWxsIHRoZVxuLy8gcGFzc2VkLWluIGFycmF5cy5cbmZ1bmN0aW9uIGludGVyc2VjdGlvbihhcnJheSkge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBhcmdzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGdldExlbmd0aChhcnJheSk7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gYXJyYXlbaV07XG4gICAgaWYgKGNvbnRhaW5zKHJlc3VsdCwgaXRlbSkpIGNvbnRpbnVlO1xuICAgIHZhciBqO1xuICAgIGZvciAoaiA9IDE7IGogPCBhcmdzTGVuZ3RoOyBqKyspIHtcbiAgICAgIGlmICghY29udGFpbnMoYXJndW1lbnRzW2pdLCBpdGVtKSkgYnJlYWs7XG4gICAgfVxuICAgIGlmIChqID09PSBhcmdzTGVuZ3RoKSByZXN1bHQucHVzaChpdGVtKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBDb21wbGVtZW50IG9mIHppcC4gVW56aXAgYWNjZXB0cyBhbiBhcnJheSBvZiBhcnJheXMgYW5kIGdyb3Vwc1xuLy8gZWFjaCBhcnJheSdzIGVsZW1lbnRzIG9uIHNoYXJlZCBpbmRpY2VzLlxuZnVuY3Rpb24gdW56aXAoYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5ICYmIG1heChhcnJheSwgZ2V0TGVuZ3RoKS5sZW5ndGggfHwgMDtcbiAgdmFyIHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG5cbiAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgIHJlc3VsdFtpbmRleF0gPSBwbHVjayhhcnJheSwgaW5kZXgpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIFppcCB0b2dldGhlciBtdWx0aXBsZSBsaXN0cyBpbnRvIGEgc2luZ2xlIGFycmF5IC0tIGVsZW1lbnRzIHRoYXQgc2hhcmVcbi8vIGFuIGluZGV4IGdvIHRvZ2V0aGVyLlxudmFyIHppcCA9IHJlc3RBcmd1bWVudHModW56aXApO1xuXG4vLyBDb252ZXJ0cyBsaXN0cyBpbnRvIG9iamVjdHMuIFBhc3MgZWl0aGVyIGEgc2luZ2xlIGFycmF5IG9mIGBba2V5LCB2YWx1ZV1gXG4vLyBwYWlycywgb3IgdHdvIHBhcmFsbGVsIGFycmF5cyBvZiB0aGUgc2FtZSBsZW5ndGggLS0gb25lIG9mIGtleXMsIGFuZCBvbmUgb2Zcbi8vIHRoZSBjb3JyZXNwb25kaW5nIHZhbHVlcy4gUGFzc2luZyBieSBwYWlycyBpcyB0aGUgcmV2ZXJzZSBvZiBgXy5wYWlyc2AuXG5mdW5jdGlvbiBvYmplY3QobGlzdCwgdmFsdWVzKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGdldExlbmd0aChsaXN0KTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHZhbHVlcykge1xuICAgICAgcmVzdWx0W2xpc3RbaV1dID0gdmFsdWVzW2ldO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRbbGlzdFtpXVswXV0gPSBsaXN0W2ldWzFdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBHZW5lcmF0ZSBhbiBpbnRlZ2VyIEFycmF5IGNvbnRhaW5pbmcgYW4gYXJpdGhtZXRpYyBwcm9ncmVzc2lvbi4gQSBwb3J0IG9mXG4vLyB0aGUgbmF0aXZlIFB5dGhvbiBgcmFuZ2UoKWAgZnVuY3Rpb24uIFNlZVxuLy8gW3RoZSBQeXRob24gZG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly9kb2NzLnB5dGhvbi5vcmcvbGlicmFyeS9mdW5jdGlvbnMuaHRtbCNyYW5nZSkuXG5mdW5jdGlvbiByYW5nZShzdGFydCwgc3RvcCwgc3RlcCkge1xuICBpZiAoc3RvcCA9PSBudWxsKSB7XG4gICAgc3RvcCA9IHN0YXJ0IHx8IDA7XG4gICAgc3RhcnQgPSAwO1xuICB9XG4gIGlmICghc3RlcCkge1xuICAgIHN0ZXAgPSBzdG9wIDwgc3RhcnQgPyAtMSA6IDE7XG4gIH1cblxuICB2YXIgbGVuZ3RoID0gTWF0aC5tYXgoTWF0aC5jZWlsKChzdG9wIC0gc3RhcnQpIC8gc3RlcCksIDApO1xuICB2YXIgcmFuZ2UgPSBBcnJheShsZW5ndGgpO1xuXG4gIGZvciAodmFyIGlkeCA9IDA7IGlkeCA8IGxlbmd0aDsgaWR4KyssIHN0YXJ0ICs9IHN0ZXApIHtcbiAgICByYW5nZVtpZHhdID0gc3RhcnQ7XG4gIH1cblxuICByZXR1cm4gcmFuZ2U7XG59XG5cbi8vIENodW5rIGEgc2luZ2xlIGFycmF5IGludG8gbXVsdGlwbGUgYXJyYXlzLCBlYWNoIGNvbnRhaW5pbmcgYGNvdW50YCBvciBmZXdlclxuLy8gaXRlbXMuXG5mdW5jdGlvbiBjaHVuayhhcnJheSwgY291bnQpIHtcbiAgaWYgKGNvdW50ID09IG51bGwgfHwgY291bnQgPCAxKSByZXR1cm4gW107XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwLCBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHdoaWxlIChpIDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0LnB1c2goc2xpY2UuY2FsbChhcnJheSwgaSwgaSArPSBjb3VudCkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBjb250aW51ZSBjaGFpbmluZyBpbnRlcm1lZGlhdGUgcmVzdWx0cy5cbmZ1bmN0aW9uIGNoYWluUmVzdWx0KGluc3RhbmNlLCBvYmopIHtcbiAgcmV0dXJuIGluc3RhbmNlLl9jaGFpbiA/IF8kMShvYmopLmNoYWluKCkgOiBvYmo7XG59XG5cbi8vIEFkZCB5b3VyIG93biBjdXN0b20gZnVuY3Rpb25zIHRvIHRoZSBVbmRlcnNjb3JlIG9iamVjdC5cbmZ1bmN0aW9uIG1peGluKG9iaikge1xuICBlYWNoKGZ1bmN0aW9ucyhvYmopLCBmdW5jdGlvbihuYW1lKSB7XG4gICAgdmFyIGZ1bmMgPSBfJDFbbmFtZV0gPSBvYmpbbmFtZV07XG4gICAgXyQxLnByb3RvdHlwZVtuYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGFyZ3MgPSBbdGhpcy5fd3JhcHBlZF07XG4gICAgICBwdXNoLmFwcGx5KGFyZ3MsIGFyZ3VtZW50cyk7XG4gICAgICByZXR1cm4gY2hhaW5SZXN1bHQodGhpcywgZnVuYy5hcHBseShfJDEsIGFyZ3MpKTtcbiAgICB9O1xuICB9KTtcbiAgcmV0dXJuIF8kMTtcbn1cblxuLy8gQWRkIGFsbCBtdXRhdG9yIGBBcnJheWAgZnVuY3Rpb25zIHRvIHRoZSB3cmFwcGVyLlxuZWFjaChbJ3BvcCcsICdwdXNoJywgJ3JldmVyc2UnLCAnc2hpZnQnLCAnc29ydCcsICdzcGxpY2UnLCAndW5zaGlmdCddLCBmdW5jdGlvbihuYW1lKSB7XG4gIHZhciBtZXRob2QgPSBBcnJheVByb3RvW25hbWVdO1xuICBfJDEucHJvdG90eXBlW25hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG9iaiA9IHRoaXMuX3dyYXBwZWQ7XG4gICAgaWYgKG9iaiAhPSBudWxsKSB7XG4gICAgICBtZXRob2QuYXBwbHkob2JqLCBhcmd1bWVudHMpO1xuICAgICAgaWYgKChuYW1lID09PSAnc2hpZnQnIHx8IG5hbWUgPT09ICdzcGxpY2UnKSAmJiBvYmoubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGRlbGV0ZSBvYmpbMF07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjaGFpblJlc3VsdCh0aGlzLCBvYmopO1xuICB9O1xufSk7XG5cbi8vIEFkZCBhbGwgYWNjZXNzb3IgYEFycmF5YCBmdW5jdGlvbnMgdG8gdGhlIHdyYXBwZXIuXG5lYWNoKFsnY29uY2F0JywgJ2pvaW4nLCAnc2xpY2UnXSwgZnVuY3Rpb24obmFtZSkge1xuICB2YXIgbWV0aG9kID0gQXJyYXlQcm90b1tuYW1lXTtcbiAgXyQxLnByb3RvdHlwZVtuYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBvYmogPSB0aGlzLl93cmFwcGVkO1xuICAgIGlmIChvYmogIT0gbnVsbCkgb2JqID0gbWV0aG9kLmFwcGx5KG9iaiwgYXJndW1lbnRzKTtcbiAgICByZXR1cm4gY2hhaW5SZXN1bHQodGhpcywgb2JqKTtcbiAgfTtcbn0pO1xuXG4vLyBOYW1lZCBFeHBvcnRzXG5cbnZhciBhbGxFeHBvcnRzID0ge1xuICBfX3Byb3RvX186IG51bGwsXG4gIFZFUlNJT046IFZFUlNJT04sXG4gIHJlc3RBcmd1bWVudHM6IHJlc3RBcmd1bWVudHMsXG4gIGlzT2JqZWN0OiBpc09iamVjdCxcbiAgaXNOdWxsOiBpc051bGwsXG4gIGlzVW5kZWZpbmVkOiBpc1VuZGVmaW5lZCxcbiAgaXNCb29sZWFuOiBpc0Jvb2xlYW4sXG4gIGlzRWxlbWVudDogaXNFbGVtZW50LFxuICBpc1N0cmluZzogaXNTdHJpbmcsXG4gIGlzTnVtYmVyOiBpc051bWJlcixcbiAgaXNEYXRlOiBpc0RhdGUsXG4gIGlzUmVnRXhwOiBpc1JlZ0V4cCxcbiAgaXNFcnJvcjogaXNFcnJvcixcbiAgaXNTeW1ib2w6IGlzU3ltYm9sLFxuICBpc0FycmF5QnVmZmVyOiBpc0FycmF5QnVmZmVyLFxuICBpc0RhdGFWaWV3OiBpc0RhdGFWaWV3JDEsXG4gIGlzQXJyYXk6IGlzQXJyYXksXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24kMSxcbiAgaXNBcmd1bWVudHM6IGlzQXJndW1lbnRzJDEsXG4gIGlzRmluaXRlOiBpc0Zpbml0ZSQxLFxuICBpc05hTjogaXNOYU4kMSxcbiAgaXNUeXBlZEFycmF5OiBpc1R5cGVkQXJyYXkkMSxcbiAgaXNFbXB0eTogaXNFbXB0eSxcbiAgaXNNYXRjaDogaXNNYXRjaCxcbiAgaXNFcXVhbDogaXNFcXVhbCxcbiAgaXNNYXA6IGlzTWFwLFxuICBpc1dlYWtNYXA6IGlzV2Vha01hcCxcbiAgaXNTZXQ6IGlzU2V0LFxuICBpc1dlYWtTZXQ6IGlzV2Vha1NldCxcbiAga2V5czoga2V5cyxcbiAgYWxsS2V5czogYWxsS2V5cyxcbiAgdmFsdWVzOiB2YWx1ZXMsXG4gIHBhaXJzOiBwYWlycyxcbiAgaW52ZXJ0OiBpbnZlcnQsXG4gIGZ1bmN0aW9uczogZnVuY3Rpb25zLFxuICBtZXRob2RzOiBmdW5jdGlvbnMsXG4gIGV4dGVuZDogZXh0ZW5kLFxuICBleHRlbmRPd246IGV4dGVuZE93bixcbiAgYXNzaWduOiBleHRlbmRPd24sXG4gIGRlZmF1bHRzOiBkZWZhdWx0cyxcbiAgY3JlYXRlOiBjcmVhdGUsXG4gIGNsb25lOiBjbG9uZSxcbiAgdGFwOiB0YXAsXG4gIGdldDogZ2V0LFxuICBoYXM6IGhhcyxcbiAgbWFwT2JqZWN0OiBtYXBPYmplY3QsXG4gIGlkZW50aXR5OiBpZGVudGl0eSxcbiAgY29uc3RhbnQ6IGNvbnN0YW50LFxuICBub29wOiBub29wLFxuICB0b1BhdGg6IHRvUGF0aCQxLFxuICBwcm9wZXJ0eTogcHJvcGVydHksXG4gIHByb3BlcnR5T2Y6IHByb3BlcnR5T2YsXG4gIG1hdGNoZXI6IG1hdGNoZXIsXG4gIG1hdGNoZXM6IG1hdGNoZXIsXG4gIHRpbWVzOiB0aW1lcyxcbiAgcmFuZG9tOiByYW5kb20sXG4gIG5vdzogbm93LFxuICBlc2NhcGU6IF9lc2NhcGUsXG4gIHVuZXNjYXBlOiBfdW5lc2NhcGUsXG4gIHRlbXBsYXRlU2V0dGluZ3M6IHRlbXBsYXRlU2V0dGluZ3MsXG4gIHRlbXBsYXRlOiB0ZW1wbGF0ZSxcbiAgcmVzdWx0OiByZXN1bHQsXG4gIHVuaXF1ZUlkOiB1bmlxdWVJZCxcbiAgY2hhaW46IGNoYWluLFxuICBpdGVyYXRlZTogaXRlcmF0ZWUsXG4gIHBhcnRpYWw6IHBhcnRpYWwsXG4gIGJpbmQ6IGJpbmQsXG4gIGJpbmRBbGw6IGJpbmRBbGwsXG4gIG1lbW9pemU6IG1lbW9pemUsXG4gIGRlbGF5OiBkZWxheSxcbiAgZGVmZXI6IGRlZmVyLFxuICB0aHJvdHRsZTogdGhyb3R0bGUsXG4gIGRlYm91bmNlOiBkZWJvdW5jZSxcbiAgd3JhcDogd3JhcCxcbiAgbmVnYXRlOiBuZWdhdGUsXG4gIGNvbXBvc2U6IGNvbXBvc2UsXG4gIGFmdGVyOiBhZnRlcixcbiAgYmVmb3JlOiBiZWZvcmUsXG4gIG9uY2U6IG9uY2UsXG4gIGZpbmRLZXk6IGZpbmRLZXksXG4gIGZpbmRJbmRleDogZmluZEluZGV4LFxuICBmaW5kTGFzdEluZGV4OiBmaW5kTGFzdEluZGV4LFxuICBzb3J0ZWRJbmRleDogc29ydGVkSW5kZXgsXG4gIGluZGV4T2Y6IGluZGV4T2YsXG4gIGxhc3RJbmRleE9mOiBsYXN0SW5kZXhPZixcbiAgZmluZDogZmluZCxcbiAgZGV0ZWN0OiBmaW5kLFxuICBmaW5kV2hlcmU6IGZpbmRXaGVyZSxcbiAgZWFjaDogZWFjaCxcbiAgZm9yRWFjaDogZWFjaCxcbiAgbWFwOiBtYXAsXG4gIGNvbGxlY3Q6IG1hcCxcbiAgcmVkdWNlOiByZWR1Y2UsXG4gIGZvbGRsOiByZWR1Y2UsXG4gIGluamVjdDogcmVkdWNlLFxuICByZWR1Y2VSaWdodDogcmVkdWNlUmlnaHQsXG4gIGZvbGRyOiByZWR1Y2VSaWdodCxcbiAgZmlsdGVyOiBmaWx0ZXIsXG4gIHNlbGVjdDogZmlsdGVyLFxuICByZWplY3Q6IHJlamVjdCxcbiAgZXZlcnk6IGV2ZXJ5LFxuICBhbGw6IGV2ZXJ5LFxuICBzb21lOiBzb21lLFxuICBhbnk6IHNvbWUsXG4gIGNvbnRhaW5zOiBjb250YWlucyxcbiAgaW5jbHVkZXM6IGNvbnRhaW5zLFxuICBpbmNsdWRlOiBjb250YWlucyxcbiAgaW52b2tlOiBpbnZva2UsXG4gIHBsdWNrOiBwbHVjayxcbiAgd2hlcmU6IHdoZXJlLFxuICBtYXg6IG1heCxcbiAgbWluOiBtaW4sXG4gIHNodWZmbGU6IHNodWZmbGUsXG4gIHNhbXBsZTogc2FtcGxlLFxuICBzb3J0Qnk6IHNvcnRCeSxcbiAgZ3JvdXBCeTogZ3JvdXBCeSxcbiAgaW5kZXhCeTogaW5kZXhCeSxcbiAgY291bnRCeTogY291bnRCeSxcbiAgcGFydGl0aW9uOiBwYXJ0aXRpb24sXG4gIHRvQXJyYXk6IHRvQXJyYXksXG4gIHNpemU6IHNpemUsXG4gIHBpY2s6IHBpY2ssXG4gIG9taXQ6IG9taXQsXG4gIGZpcnN0OiBmaXJzdCxcbiAgaGVhZDogZmlyc3QsXG4gIHRha2U6IGZpcnN0LFxuICBpbml0aWFsOiBpbml0aWFsLFxuICBsYXN0OiBsYXN0LFxuICByZXN0OiByZXN0LFxuICB0YWlsOiByZXN0LFxuICBkcm9wOiByZXN0LFxuICBjb21wYWN0OiBjb21wYWN0LFxuICBmbGF0dGVuOiBmbGF0dGVuLFxuICB3aXRob3V0OiB3aXRob3V0LFxuICB1bmlxOiB1bmlxLFxuICB1bmlxdWU6IHVuaXEsXG4gIHVuaW9uOiB1bmlvbixcbiAgaW50ZXJzZWN0aW9uOiBpbnRlcnNlY3Rpb24sXG4gIGRpZmZlcmVuY2U6IGRpZmZlcmVuY2UsXG4gIHVuemlwOiB1bnppcCxcbiAgdHJhbnNwb3NlOiB1bnppcCxcbiAgemlwOiB6aXAsXG4gIG9iamVjdDogb2JqZWN0LFxuICByYW5nZTogcmFuZ2UsXG4gIGNodW5rOiBjaHVuayxcbiAgbWl4aW46IG1peGluLFxuICAnZGVmYXVsdCc6IF8kMVxufTtcblxuLy8gRGVmYXVsdCBFeHBvcnRcblxuLy8gQWRkIGFsbCBvZiB0aGUgVW5kZXJzY29yZSBmdW5jdGlvbnMgdG8gdGhlIHdyYXBwZXIgb2JqZWN0LlxudmFyIF8gPSBtaXhpbihhbGxFeHBvcnRzKTtcbi8vIExlZ2FjeSBOb2RlLmpzIEFQSS5cbl8uXyA9IF87XG5cbmV4cG9ydHMuVkVSU0lPTiA9IFZFUlNJT047XG5leHBvcnRzLl8gPSBfO1xuZXhwb3J0cy5fZXNjYXBlID0gX2VzY2FwZTtcbmV4cG9ydHMuX3VuZXNjYXBlID0gX3VuZXNjYXBlO1xuZXhwb3J0cy5hZnRlciA9IGFmdGVyO1xuZXhwb3J0cy5hbGxLZXlzID0gYWxsS2V5cztcbmV4cG9ydHMuYmVmb3JlID0gYmVmb3JlO1xuZXhwb3J0cy5iaW5kID0gYmluZDtcbmV4cG9ydHMuYmluZEFsbCA9IGJpbmRBbGw7XG5leHBvcnRzLmNoYWluID0gY2hhaW47XG5leHBvcnRzLmNodW5rID0gY2h1bms7XG5leHBvcnRzLmNsb25lID0gY2xvbmU7XG5leHBvcnRzLmNvbXBhY3QgPSBjb21wYWN0O1xuZXhwb3J0cy5jb21wb3NlID0gY29tcG9zZTtcbmV4cG9ydHMuY29uc3RhbnQgPSBjb25zdGFudDtcbmV4cG9ydHMuY29udGFpbnMgPSBjb250YWlucztcbmV4cG9ydHMuY291bnRCeSA9IGNvdW50Qnk7XG5leHBvcnRzLmNyZWF0ZSA9IGNyZWF0ZTtcbmV4cG9ydHMuZGVib3VuY2UgPSBkZWJvdW5jZTtcbmV4cG9ydHMuZGVmYXVsdHMgPSBkZWZhdWx0cztcbmV4cG9ydHMuZGVmZXIgPSBkZWZlcjtcbmV4cG9ydHMuZGVsYXkgPSBkZWxheTtcbmV4cG9ydHMuZGlmZmVyZW5jZSA9IGRpZmZlcmVuY2U7XG5leHBvcnRzLmVhY2ggPSBlYWNoO1xuZXhwb3J0cy5ldmVyeSA9IGV2ZXJ5O1xuZXhwb3J0cy5leHRlbmQgPSBleHRlbmQ7XG5leHBvcnRzLmV4dGVuZE93biA9IGV4dGVuZE93bjtcbmV4cG9ydHMuZmlsdGVyID0gZmlsdGVyO1xuZXhwb3J0cy5maW5kID0gZmluZDtcbmV4cG9ydHMuZmluZEluZGV4ID0gZmluZEluZGV4O1xuZXhwb3J0cy5maW5kS2V5ID0gZmluZEtleTtcbmV4cG9ydHMuZmluZExhc3RJbmRleCA9IGZpbmRMYXN0SW5kZXg7XG5leHBvcnRzLmZpbmRXaGVyZSA9IGZpbmRXaGVyZTtcbmV4cG9ydHMuZmlyc3QgPSBmaXJzdDtcbmV4cG9ydHMuZmxhdHRlbiA9IGZsYXR0ZW47XG5leHBvcnRzLmZ1bmN0aW9ucyA9IGZ1bmN0aW9ucztcbmV4cG9ydHMuZ2V0ID0gZ2V0O1xuZXhwb3J0cy5ncm91cEJ5ID0gZ3JvdXBCeTtcbmV4cG9ydHMuaGFzID0gaGFzO1xuZXhwb3J0cy5pZGVudGl0eSA9IGlkZW50aXR5O1xuZXhwb3J0cy5pbmRleEJ5ID0gaW5kZXhCeTtcbmV4cG9ydHMuaW5kZXhPZiA9IGluZGV4T2Y7XG5leHBvcnRzLmluaXRpYWwgPSBpbml0aWFsO1xuZXhwb3J0cy5pbnRlcnNlY3Rpb24gPSBpbnRlcnNlY3Rpb247XG5leHBvcnRzLmludmVydCA9IGludmVydDtcbmV4cG9ydHMuaW52b2tlID0gaW52b2tlO1xuZXhwb3J0cy5pc0FyZ3VtZW50cyA9IGlzQXJndW1lbnRzJDE7XG5leHBvcnRzLmlzQXJyYXkgPSBpc0FycmF5O1xuZXhwb3J0cy5pc0FycmF5QnVmZmVyID0gaXNBcnJheUJ1ZmZlcjtcbmV4cG9ydHMuaXNCb29sZWFuID0gaXNCb29sZWFuO1xuZXhwb3J0cy5pc0RhdGFWaWV3ID0gaXNEYXRhVmlldyQxO1xuZXhwb3J0cy5pc0RhdGUgPSBpc0RhdGU7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNFbXB0eSA9IGlzRW1wdHk7XG5leHBvcnRzLmlzRXF1YWwgPSBpc0VxdWFsO1xuZXhwb3J0cy5pc0Vycm9yID0gaXNFcnJvcjtcbmV4cG9ydHMuaXNGaW5pdGUgPSBpc0Zpbml0ZSQxO1xuZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbiQxO1xuZXhwb3J0cy5pc01hcCA9IGlzTWFwO1xuZXhwb3J0cy5pc01hdGNoID0gaXNNYXRjaDtcbmV4cG9ydHMuaXNOYU4gPSBpc05hTiQxO1xuZXhwb3J0cy5pc051bGwgPSBpc051bGw7XG5leHBvcnRzLmlzTnVtYmVyID0gaXNOdW1iZXI7XG5leHBvcnRzLmlzT2JqZWN0ID0gaXNPYmplY3Q7XG5leHBvcnRzLmlzUmVnRXhwID0gaXNSZWdFeHA7XG5leHBvcnRzLmlzU2V0ID0gaXNTZXQ7XG5leHBvcnRzLmlzU3RyaW5nID0gaXNTdHJpbmc7XG5leHBvcnRzLmlzU3ltYm9sID0gaXNTeW1ib2w7XG5leHBvcnRzLmlzVHlwZWRBcnJheSA9IGlzVHlwZWRBcnJheSQxO1xuZXhwb3J0cy5pc1VuZGVmaW5lZCA9IGlzVW5kZWZpbmVkO1xuZXhwb3J0cy5pc1dlYWtNYXAgPSBpc1dlYWtNYXA7XG5leHBvcnRzLmlzV2Vha1NldCA9IGlzV2Vha1NldDtcbmV4cG9ydHMuaXRlcmF0ZWUgPSBpdGVyYXRlZTtcbmV4cG9ydHMua2V5cyA9IGtleXM7XG5leHBvcnRzLmxhc3QgPSBsYXN0O1xuZXhwb3J0cy5sYXN0SW5kZXhPZiA9IGxhc3RJbmRleE9mO1xuZXhwb3J0cy5tYXAgPSBtYXA7XG5leHBvcnRzLm1hcE9iamVjdCA9IG1hcE9iamVjdDtcbmV4cG9ydHMubWF0Y2hlciA9IG1hdGNoZXI7XG5leHBvcnRzLm1heCA9IG1heDtcbmV4cG9ydHMubWVtb2l6ZSA9IG1lbW9pemU7XG5leHBvcnRzLm1pbiA9IG1pbjtcbmV4cG9ydHMubWl4aW4gPSBtaXhpbjtcbmV4cG9ydHMubmVnYXRlID0gbmVnYXRlO1xuZXhwb3J0cy5ub29wID0gbm9vcDtcbmV4cG9ydHMubm93ID0gbm93O1xuZXhwb3J0cy5vYmplY3QgPSBvYmplY3Q7XG5leHBvcnRzLm9taXQgPSBvbWl0O1xuZXhwb3J0cy5vbmNlID0gb25jZTtcbmV4cG9ydHMucGFpcnMgPSBwYWlycztcbmV4cG9ydHMucGFydGlhbCA9IHBhcnRpYWw7XG5leHBvcnRzLnBhcnRpdGlvbiA9IHBhcnRpdGlvbjtcbmV4cG9ydHMucGljayA9IHBpY2s7XG5leHBvcnRzLnBsdWNrID0gcGx1Y2s7XG5leHBvcnRzLnByb3BlcnR5ID0gcHJvcGVydHk7XG5leHBvcnRzLnByb3BlcnR5T2YgPSBwcm9wZXJ0eU9mO1xuZXhwb3J0cy5yYW5kb20gPSByYW5kb207XG5leHBvcnRzLnJhbmdlID0gcmFuZ2U7XG5leHBvcnRzLnJlZHVjZSA9IHJlZHVjZTtcbmV4cG9ydHMucmVkdWNlUmlnaHQgPSByZWR1Y2VSaWdodDtcbmV4cG9ydHMucmVqZWN0ID0gcmVqZWN0O1xuZXhwb3J0cy5yZXN0ID0gcmVzdDtcbmV4cG9ydHMucmVzdEFyZ3VtZW50cyA9IHJlc3RBcmd1bWVudHM7XG5leHBvcnRzLnJlc3VsdCA9IHJlc3VsdDtcbmV4cG9ydHMuc2FtcGxlID0gc2FtcGxlO1xuZXhwb3J0cy5zaHVmZmxlID0gc2h1ZmZsZTtcbmV4cG9ydHMuc2l6ZSA9IHNpemU7XG5leHBvcnRzLnNvbWUgPSBzb21lO1xuZXhwb3J0cy5zb3J0QnkgPSBzb3J0Qnk7XG5leHBvcnRzLnNvcnRlZEluZGV4ID0gc29ydGVkSW5kZXg7XG5leHBvcnRzLnRhcCA9IHRhcDtcbmV4cG9ydHMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbmV4cG9ydHMudGVtcGxhdGVTZXR0aW5ncyA9IHRlbXBsYXRlU2V0dGluZ3M7XG5leHBvcnRzLnRocm90dGxlID0gdGhyb3R0bGU7XG5leHBvcnRzLnRpbWVzID0gdGltZXM7XG5leHBvcnRzLnRvQXJyYXkgPSB0b0FycmF5O1xuZXhwb3J0cy50b1BhdGggPSB0b1BhdGgkMTtcbmV4cG9ydHMudW5pb24gPSB1bmlvbjtcbmV4cG9ydHMudW5pcSA9IHVuaXE7XG5leHBvcnRzLnVuaXF1ZUlkID0gdW5pcXVlSWQ7XG5leHBvcnRzLnVuemlwID0gdW56aXA7XG5leHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcbmV4cG9ydHMud2hlcmUgPSB3aGVyZTtcbmV4cG9ydHMud2l0aG91dCA9IHdpdGhvdXQ7XG5leHBvcnRzLndyYXAgPSB3cmFwO1xuZXhwb3J0cy56aXAgPSB6aXA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD11bmRlcnNjb3JlLW5vZGUtZi5janMubWFwXG4iLCIvLyAgICAgVW5kZXJzY29yZS5qcyAxLjEzLjFcbi8vICAgICBodHRwczovL3VuZGVyc2NvcmVqcy5vcmdcbi8vICAgICAoYykgMjAwOS0yMDIxIEplcmVteSBBc2hrZW5hcywgSnVsaWFuIEdvbmdncmlqcCwgYW5kIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuLy8gICAgIFVuZGVyc2NvcmUgbWF5IGJlIGZyZWVseSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG5cbnZhciB1bmRlcnNjb3JlTm9kZUYgPSByZXF1aXJlKCcuL3VuZGVyc2NvcmUtbm9kZS1mLmNqcycpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSB1bmRlcnNjb3JlTm9kZUYuXztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVuZGVyc2NvcmUtbm9kZS5janMubWFwXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==