// Module ID: 664
// Function ID: 7228
// Name: _callSuper
// Dependencies: [1, 363, 99, 23, 25, 28, 160, 6, 12, 13, 38, 665, 667, 668]

// Module 664 (_callSuper)
import _toConsumableArray from "_toConsumableArray" /* 6 */;
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _inherits from "_inherits" /* 28 */;
import _slicedToArray2 from "_slicedToArray" /* 38 */;
import _defineProperty from "_defineProperty" /* 99 */;
import _wrapNativeSuper2 from "_wrapNativeSuper" /* 160 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 363 */;
import AsyncGenerator from "AsyncGenerator" /* 665 */;
import _awaitAsyncGenerator from "_awaitAsyncGenerator" /* 667 */;
import _asyncGeneratorDelegate from "_asyncGeneratorDelegate" /* 668 */;
import module_1 from "module_1" /* 1 */;

function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const defaultResult = closure_3.default(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(defaultResult, items, closure_3.default(arg0).constructor);
  } else {
    constructResult = defaultResult.apply(arg0, items);
  }
  return closure_2.default(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
function _asyncIterator(closure_1) {
  if ("undefined" !== typeof Symbol) {
    const _Symbol = Symbol;
    let str = Symbol.asyncIterator;
    const _Symbol2 = Symbol;
    let str2 = Symbol.iterator;
  }
  let num = 1;
  while (true) {
    let tmp2 = tmp;
    let tmp3 = str;
    let tmp4 = str2;
    let tmp5 = num;
    if (str) {
      obj = closure_1[str];
      tmp2 = obj;
      if (null != obj) {
        break;
      }
    }
    if (str2) {
      let obj2 = closure_1[str2];
      tmp2 = obj2;
      if (null != obj2) {
        let tmp11 = AsyncFromSyncIterator;
        let prototype2 = AsyncFromSyncIterator.prototype;
        let tmp12 = new.target;
        let tmp13 = new.target;
        let tmp14 = new AsyncFromSyncIterator(obj2.call(closure_1));
        let tmp15 = tmp14;
        return tmp14;
      }
    }
    let tmp6 = +num;
    num = tmp6 - 1;
    tmp = tmp2;
    str = "@@asyncIterator";
    str2 = "@@iterator";
    if (tmp6) {
      continue;
    } else {
      let _TypeError = TypeError;
      let tmp7 = new.target;
      let str3 = "Object is not async iterable";
      let tmp8 = new.target;
      let typeError = new TypeError("Object is not async iterable");
      let tmp10 = typeError;
      throw typeError;
    }
  }
  return obj.call(closure_1);
}
function AsyncFromSyncIterator(arg0) {
  function AsyncFromSyncIteratorContinuation(_return) {
    if (Object(_return) !== _return) {
      const _TypeError = TypeError;
      const typeError = new TypeError(_return + " is not an object.");
      return Promise.reject(typeError);
    } else {
      const done = _return.done;
      const resolved = Promise.resolve(_return.value);
      return resolved.then((value) => ({ value, done }));
    }
  }
  class AsyncFromSyncIterator {
    constructor(arg0) {
      this.s = arg0;
      this.n = arg0.next;
      return;
    }
  }
  obj = {
    s: null,
    n: null,
    next() {
      const n = this.n;
      return AsyncFromSyncIteratorContinuation(n(...arguments));
    },
    return: function _return(value) {
      const _return = this.s.return;
      if (undefined === _return) {
        obj = { value, done: true };
        let resolved = Promise.resolve(obj);
      } else {
        resolved = AsyncFromSyncIteratorContinuation(_return(...arguments));
      }
      return resolved;
    },
    throw: function _throw(arg0) {
      const _return = this.s.return;
      if (undefined === _return) {
        let rejectResult = Promise.reject(arg0);
      } else {
        rejectResult = AsyncFromSyncIteratorContinuation(_return(...arguments));
      }
      return rejectResult;
    }
  };
  AsyncFromSyncIterator.prototype = obj;
  return new AsyncFromSyncIterator(arg0);
}
function bind(self, c100, queue, bindResult1, bindResult) {
  closure_0 = self;
  closure_1 = c100;
  return function wrap() {
    return _self(...arguments);
  };
}
function isBuffer(arg0) {
  let isBufferResult = arg0 !== null;
  if (isBufferResult) {
    isBufferResult = !typeOfTestResult(arg0);
  }
  if (isBufferResult) {
    isBufferResult = arg0.constructor !== null;
  }
  if (isBufferResult) {
    isBufferResult = !typeOfTestResult(arg0.constructor);
  }
  if (isBufferResult) {
    isBufferResult = typeOfTestResult2(arg0.constructor.isBuffer);
  }
  if (isBufferResult) {
    const constructor = arg0.constructor;
    isBufferResult = constructor.isBuffer(arg0);
  }
  return isBufferResult;
}
function forEach(arr2, call) {
  if (arguments.length > 2) {
    const allOwnKeys = {}.allOwnKeys;
    let flag = false;
    if (allOwnKeys !== undefined) {
      flag = allOwnKeys;
    }
    if (arr2 !== null) {
      if (typeof arr2 !== "undefined") {
        if (tmp17 !== "object") {
          const items = [arr2];
          arr2 = items;
        }
        if (isArray(arr2)) {
          for (let num2 = 0; num2 < length2; num2 = num2 + 1) {
            let tmp12 = call;
            let tmp13 = null;
            let tmp14 = num2;
            let tmp15 = arr2;
            let callResult = call.call(null, arr2[num2], num2, arr2);
          }
          length2 = arr2.length;
        } else if (!isBuffer(arr2)) {
          const _Object = Object;
          if (flag) {
            let ownPropertyNames = _Object.getOwnPropertyNames(arr2);
          } else {
            ownPropertyNames = _Object.keys(arr2);
          }
          for (let num = 0; num < length; num = num + 1) {
            let tmp6 = ownPropertyNames[num];
            let tmp7 = call;
            let tmp8 = null;
            let tmp9 = tmp6;
            let tmp10 = arr2;
            let callResult1 = call.call(null, arr2[tmp6], tmp6, arr2);
          }
          length = ownPropertyNames.length;
        }
      }
    }
  }
}
function findKey(self, str) {
  if (isBuffer(self)) {
    return null;
  } else {
    const _Object = Object;
    const formatted = str.toLowerCase();
    const keys = Object.keys(self);
    let diff = tmp3 - 1;
    if (+keys.length > 0) {
      while (formatted !== keys[diff].toLowerCase()) {
        let tmp6 = +diff;
        diff = tmp6 - 1;
      }
      return keys[diff];
    }
    return null;
  }
}
function merge() {
  ({ caseless: closure_0, skipUndefined: closure_1 } = isContextDefined(this) && this || {});
  obj = {};
  function assignValue(arr, str) {
    if (str !== "__proto__") {
      if (str !== "constructor") {
        if (str !== "prototype") {
          let tmp = closure_0;
          if (closure_0) {
            tmp = typeof str === "string";
          }
          if (tmp) {
            tmp = closure_1_87(obj, str);
          }
          if (!tmp) {
            tmp = str;
          }
          let tmp6;
          if (closure_1_27(obj, tmp)) {
            tmp6 = obj[tmp];
          }
          if (closure_1_23(tmp6)) {
            if (closure_1_23(arr)) {
              obj[tmp] = closure_1_88(tmp6, arr);
            }
          }
          if (closure_1_23(arr)) {
            obj[tmp] = closure_1_88({}, arr);
          } else if (closure_1_17(arr)) {
            obj[tmp] = arr.slice();
          } else if (!closure_1) {
            obj[tmp] = arr;
          }
        }
      }
    }
  }
  const length = arguments.length;
  let num = 0;
  if (0 < length) {
    do {
      let tmp5 = num;
      let tmp6 = tmp2;
      let tmp7 = tmp3;
      let tmp8 = tmp4;
      let tmp9;
      if (num >= 0) {
        if (arguments.length > num) {
          tmp9 = arguments[num];
        }
      }
      let tmp10 = tmp2;
      let num2 = tmp3;
      let tmp11 = tmp4;
      if (tmp9) {
        let tmp12 = isBuffer;
        tmp10 = tmp2;
        num2 = tmp3;
        tmp11 = tmp4;
        if (!isBuffer(tmp9)) {
          let tmp13 = forEach;
          let tmp14 = forEach(tmp9, assignValue);
          tmp10 = tmp2;
          num2 = tmp3;
          tmp11 = tmp4;
          if (typeof tmp9 === "object") {
            let tmp15 = isArray;
            tmp10 = tmp2;
            num2 = tmp3;
            tmp11 = tmp4;
            if (!isArray(tmp9)) {
              let _Object = Object;
              let ownPropertySymbols = Object.getOwnPropertySymbols(tmp9);
              let num3 = 0;
              tmp10 = ownPropertySymbols;
              num2 = 0;
              tmp11 = tmp4;
              if (0 < ownPropertySymbols.length) {
                do {
                  let tmp16 = ownPropertySymbols[num3];
                  let tmp17 = propertyIsEnumerable;
                  let tmp18 = num3;
                  if (propertyIsEnumerable.call(tmp9, tmp16)) {
                    let assignValueResult = assignValue(tmp9[tmp16], tmp16);
                  }
                  num3 = num3 + 1;
                  tmp10 = ownPropertySymbols;
                  tmp11 = tmp16;
                  num2 = num3;
                } while (num3 < ownPropertySymbols.length);
              }
            }
          }
        }
      }
      num = num + 1;
      tmp2 = tmp10;
      tmp3 = num2;
      tmp4 = tmp11;
    } while (num < length);
  }
  return obj;
}
function trimSPorHTAB(str) {
  let num = 0;
  let num2 = 0;
  if (0 < str.length) {
    while (true) {
      let charCodeAtResult = str.charCodeAt(num);
      let tmp2 = num;
      if (charCodeAtResult === 9) {
        num = num + 1;
        num2 = num;
        if (num >= length) {
          break;
        }
      } else {
        num2 = num;
        if (charCodeAtResult !== 32) {
          break;
        }
      }
      break;
    }
  }
  let diff = length;
  let tmp4 = length;
  if (str.length > num2) {
    while (true) {
      let charCodeAtResult1 = str.charCodeAt(diff - 1);
      let tmp6 = diff;
      if (charCodeAtResult1 === 9) {
        diff = diff - 1;
        tmp4 = diff;
        if (diff <= num2) {
          break;
        }
      } else {
        tmp4 = diff;
        if (charCodeAtResult1 !== 32) {
          break;
        }
      }
      break;
    }
  }
  if (num2 !== 0) {
    let substr = str.slice(num2, tmp4);
  } else {
    substr = str;
  }
  return substr;
}
function sanitizeValue(arr, regExp) {
  closure_0 = regExp;
  if (obj.isArray(arr)) {
    return arr.map((arg0) => closure_1_90(arg0, closure_0));
  } else {
    const _String = String;
    return trimSPorHTAB(String(arr).replace(regExp, ""));
  }
}
function toByteStringHeaderObject(toJSON) {
  obj = Object.create(null);
  const item = obj.forEach(toJSON.toJSON(), (arg0, arg1) => {
    obj[arg1] = closure_1_36(arg0);
  });
  return obj;
}
function normalizeHeader(arg0) {
  let formatted = arg0;
  if (arg0) {
    const _String = String;
    const str = String(arg0);
    formatted = String(arg0).trim().toLowerCase();
    const str2 = String(arg0).trim();
  }
  return formatted;
}
function normalizeValue(arr) {
  if (arr !== false) {
    if (arr != null) {
      if (obj.isArray(arr)) {
        let mapped = arr.map(normalizeValue);
      } else {
        const _String = String;
        mapped = sanitizeHeaderValue(String(arr));
      }
      return mapped;
    }
  }
  return arr;
}
function parseTokens(arg0) {
  obj = Object.create(null);
  obj = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match = obj.exec(arg0);
  while (match) {
    obj[match[1]] = match[2];
    match = obj.exec(arg0);
  }
  return obj;
}
function matchHeaderValue(arg0, key10018, channels, call) {
  if (obj.isFunction(call)) {
    const self = this;
    return call.call(this, key10018, channels);
  } else {
    let arr = key10018;
    if (arg4) {
      arr = channels;
    }
    if (obj.isString(arr)) {
      if (obj.isString(call)) {
        return arr.indexOf(call) !== -1;
      } else if (obj.isRegExp(call)) {
        return call.test(arr);
      }
    }
  }
}
function formatHeader(str) {
  str = str.trim();
  return str.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (arg0, str) => str.toUpperCase() + arg2);
}
function buildAccessors(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = obj.toCamelCase(` ${arg1}`);
  const items = ["get", "set", "has"];
  const item = items.forEach((arg0) => {
    closure_0 = arg0;
    const sum = arg0 + closure_2;
    obj = Object.create(null);
    obj.value = function value(channels, arr2, closure_1_8) {
      return this[closure_0].call(this, closure_1_1, channels, arr2, closure_1_8);
    };
    obj.configurable = true;
    Object.defineProperty(closure_0, sum, obj);
  });
}
function hasOwnOrPrototypeToJSON(closure_0) {
  if (obj.hasOwnProp(closure_0, "toJSON")) {
    return true;
  } else {
    const _Object = Object;
    let prototypeOf = Object.getPrototypeOf(closure_0);
    if (prototypeOf) {
      const _Object2 = Object;
      if (prototypeOf !== Object.prototype) {
        while (!obj.hasOwnProp(prototypeOf, "toJSON")) {
          let _Object3 = Object;
          let prototypeOf1 = Object.getPrototypeOf(prototypeOf);
          if (prototypeOf1) {
            let _Object4 = Object;
            prototypeOf = prototypeOf1;
          }
        }
        return true;
      }
    }
    return false;
  }
}
function redactConfig(arg0, arr) {
  const set = new Set(arr.map((arg0) => String(arg0).toLowerCase()));
  closure_1 = [];
  function visit(obj) {
    if (obj !== null) {
      if (typeof obj === "object") {
        if (closure_1_30.isBuffer(obj)) {
          return obj;
        } else if (arr.indexOf(obj) === -1) {
          let toJSONResult = obj;
          if (obj instanceof closure_1_39) {
            toJSONResult = obj.toJSON();
          }
          arr = arr.push(toJSONResult);
          if (closure_1_30.isArray(toJSONResult)) {
            const items = [];
            let tmp11 = items;
            obj = items;
            const item = toJSONResult.forEach((arg0, arg1) => {
              const tmp = closure_1_2(arg0);
              if (!closure_2_30.isUndefined(tmp)) {
                obj[arg1] = tmp;
              }
            });
          } else {
            if (!closure_1_30.isPlainObject(toJSONResult)) {
              if (closure_1_98(toJSONResult)) {
                arr = arr.pop();
                return toJSONResult;
              }
            }
            const _Object = Object;
            obj = Object.create(null);
            tmp11 = obj;
            const _Object2 = Object;
            const entries = Object.entries(toJSONResult);
            const tmp14 = entries[Symbol.iterator]();
            while (tmp14 !== undefined) {
              let tmp17 = closure_1_8;
              let defaultResult = closure_1_8.default(tmp15, 2);
              [str, tmp20] = defaultResult;
              let tmp21 = obj;
              let tmp19 = str;
              if (obj.has(str.toLowerCase())) {
                let tmp24 = closure_1_40;
              } else {
                let tmp22 = visit;
                let tmp23 = tmp20;
                tmp24 = visit(tmp20);
              }
              let tmp26 = closure_1_30;
              let tmp25 = tmp24;
              if (!closure_1_30.isUndefined(tmp24)) {
                let tmp27 = tmp11;
                let tmp28 = str;
                let tmp29 = tmp24;
                tmp11[tmp19] = tmp25;
              }
              continue;
            }
          }
          arr.pop();
          return tmp11;
        }
      }
    }
    return obj;
  }
  return visit(arg0);
}
function isVisitable(arg0) {
  let isPlainObjectResult = obj.isPlainObject(arg0);
  if (!isPlainObjectResult) {
    isPlainObjectResult = obj.isArray(arg0);
  }
  return isPlainObjectResult;
}
function removeBrackets(arr) {
  let substr = arr;
  if (obj.endsWith(arr, "[]")) {
    substr = arr.slice(0, -2);
  }
  return substr;
}
function renderKey(arr) {
  closure_0 = arg2;
  if (arr) {
    const combined = arr.concat(arg1);
    const mapped = combined.map(function each(arg0, arg1) {
      const tmp = closure_1_101(arg0);
      let text = tmp;
      if (!closure_0) {
        text = tmp;
        if (arg1) {
          text = `${"[" + tmp}]`;
        }
      }
      return text;
    });
    let str = "";
    if (arg2) {
      str = ".";
    }
    return mapped.join(str);
  } else {
    return arg1;
  }
}
function isFlatArray(arr) {
  let isArrayResult = obj.isArray(arr);
  if (isArrayResult) {
    isArrayResult = !arr.some(isVisitable);
  }
  return isArrayResult;
}
function toFormData$1(ownResult8, uRLSearchParams, encode) {
  let formData = uRLSearchParams;
  formData = uRLSearchParams;
  function convertValue(json) {
    if (json === null) {
      return "";
    } else if (closure_1_30.isDate(json)) {
      return json.toISOString();
    } else if (closure_1_30.isBoolean(json)) {
      return json.toString();
    } else {
      if (!_Blob) {
        if (closure_1_30.isBlob(json)) {
          const prototype = closure_1_41.prototype;
          const tmp7 = new closure_1_41("Blob is not supported. Use a Buffer instead.");
          throw tmp7;
        }
      }
      if (!closure_1_30.isArrayBuffer(json)) {
        if (!closure_1_30.isTypedArray(json)) {
          return json;
        }
      }
      if (_Blob) {
        _Blob = Blob;
        if (typeof Blob === "function") {
          const _Blob2 = Blob;
          const items = [json];
          let blob = new Blob(items);
        }
        return blob;
      }
      const _Buffer = Buffer;
      blob = Buffer.from(json);
    }
  }
  function defaultVisitor(navigationKey, arr) {
    closure_0 = arr;
    if (closure_1_30.isReactNative(closure_0)) {
      if (closure_1_30.isReactNativeBlob(navigationKey)) {
        closure_0.append(closure_1_102(arg2, arr, closure_3), convertValue(navigationKey));
        return false;
      }
    }
    let json = navigationKey;
    let tmp3 = arr;
    if (navigationKey) {
      json = navigationKey;
      tmp3 = arr;
      if (!arg2) {
        json = navigationKey;
        tmp3 = arr;
        if (typeof navigationKey === "object") {
          if (closure_1_30.endsWith(arr, "{}")) {
            let substr = arr;
            if (!metaTokens) {
              substr = arr.slice(0, -2);
            }
            closure_0 = substr;
            const _JSON = JSON;
            json = JSON.stringify(navigationKey);
            tmp3 = substr;
          } else {
            if (!closure_1_30.isArray(navigationKey)) {
              if (closure_1_30.isFileList(navigationKey)) {
                let toArrayResult = closure_1_30.toArray(navigationKey);
                json = navigationKey;
                tmp3 = arr;
              } else {
                json = navigationKey;
                tmp3 = arr;
              }
            } else {
              toArrayResult = navigationKey;
            }
            closure_0 = closure_1_101(arr);
            const item = toArrayResult.forEach(function each(arg0, arg1) {
              let isUndefinedResult = closure_2_30.isUndefined(arg0);
              if (!isUndefinedResult) {
                isUndefinedResult = arg0 === null;
              }
              if (!isUndefinedResult) {
                if (closure_1_4 === true) {
                  const items = [closure_0];
                  let text = closure_2_102(items, arg1, closure_1_3);
                } else if (closure_1_4 === null) {
                  text = closure_0;
                } else {
                  text = `${closure_0}[]`;
                }
                closure_0.append(text, closure_1_9(arg0));
              }
            });
            return false;
          }
        }
      }
    }
    if (closure_1_100(json)) {
      return true;
    } else {
      closure_0.append(closure_1_102(arg2, tmp3, closure_3), convertValue(json));
      return false;
    }
  }
  function build(ownResult8) {
    closure_0 = arg1;
    num = 0;
    if (arguments.length > 2) {
      num = 0;
      if (arguments[2] !== undefined) {
        num = arguments[2];
      }
    }
    if (!closure_1_30.isUndefined(ownResult8)) {
      if (num > num) {
        const prototype2 = closure_1_41.prototype;
        const tmp18 = new closure_1_41("Object is too deeply nested (" + num + " levels). Max depth: " + num, closure_1_41.ERR_FORM_DATA_DEPTH_EXCEEDED);
        throw tmp18;
      } else if (arr.indexOf(ownResult8) !== -1) {
        const _Error = Error;
        const error = new Error("Circular reference detected in " + arg1.join("."));
        throw error;
      } else {
        arr = arr.push(ownResult8);
        const item = closure_1_30.forEach(ownResult8, function each(key10018, channels) {
          let isUndefinedResult = closure_2_30.isUndefined(key10018);
          if (!isUndefinedResult) {
            isUndefinedResult = key10018 === null;
          }
          let callResult = !isUndefinedResult;
          if (callResult) {
            let trimmed = channels;
            if (closure_2_30.isString(channels)) {
              trimmed = channels.trim();
            }
            callResult = closure_1_2.call(tmp5, key10018, trimmed, closure_0, closure_1_8);
            const tmp4 = closure_1_2;
          }
          if (callResult === true) {
            if (closure_0) {
              let combined = closure_0.concat(channels);
            } else {
              combined = [channels];
            }
            closure_1_10(key10018, combined, 1 + 1);
            const tmp14 = closure_1_10;
          }
        });
        arr = arr.pop();
      }
    }
  }
  if (obj.isObject(ownResult8)) {
    if (!formData) {
      _FormData = FormData;
      formData = new FormData();
    }
    const toFlatObjectResult = obj.toFlatObject(encode, { metaTokens: true, dots: false, indexes: false }, false, function defined(arg0, arg1) {
      return !closure_1_30.isUndefined(arg1[arg0]);
    });
    const metaTokens = toFlatObjectResult.metaTokens;
    closure_2 = tmp14;
    ({ dots: closure_3, indexes: closure_4, Blob: _Blob } = toFlatObjectResult);
    if (!_Blob) {
      let _Blob2 = Blob;
      _Blob = typeof Blob !== "undefined" && Blob;
      const tmp16 = typeof Blob !== "undefined" && Blob;
    }
    let num = 100;
    if (toFlatObjectResult.maxDepth !== undefined) {
      num = toFlatObjectResult.maxDepth;
    }
    if (_Blob) {
      _Blob = obj.isSpecCompliantForm(formData);
    }
    if (obj.isFunction(toFlatObjectResult.visitor || defaultVisitor)) {
      closure_7 = [];
      const _Object = Object;
      obj = { defaultVisitor, convertValue, isVisitable };
      closure_8 = Object.assign(closure_42, obj);
      if (obj.isObject(ownResult8)) {
        build(ownResult8);
        return formData;
      } else {
        const _TypeError3 = TypeError;
        const typeError = new TypeError("data must be an object");
        throw typeError;
      }
    } else {
      const _TypeError2 = TypeError;
      const typeError1 = new TypeError("visitor must be a function");
      throw typeError1;
    }
  } else {
    const _TypeError = TypeError;
    const typeError2 = new TypeError("target must be an object");
    throw typeError2;
  }
}
function encode$1(arg0) {
  closure_0 = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+" };
  return encodeURIComponent(arg0).replace(/[!'()~]|%20/g, function replacer(arg0) {
    return table[arg0];
  });
}
class AxiosURLSearchParams {
  constructor(arg0, arg1) {
    this._pairs = [];
    if (global) {
      tmp2 = toFormData$1;
      tmp3 = require;
      tmp4 = toFormData$1(global, tmp, require);
    }
    return;
  }
}
function encode(arg0) {
  const str = encodeURIComponent(arg0);
  const str2 = encodeURIComponent(arg0).replace(/%3A/gi, ":");
  const str3 = encodeURIComponent(arg0).replace(/%3A/gi, ":").replace(/%24/g, "$");
  return encodeURIComponent(arg0).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function buildURL(arr, ownResult8, encode) {
  if (ownResult8) {
    if (encode) {
      encode = encode.encode;
    }
    let tmp2 = encode;
    if (obj.isFunction(encode)) {
      obj = { serialize: encode };
      tmp2 = obj;
    }
    let serialize = tmp2;
    if (tmp2) {
      serialize = tmp2.serialize;
    }
    if (serialize) {
      let serializeResult = serialize(ownResult8, tmp2);
    } else if (obj.isURLSearchParams(ownResult8)) {
      serializeResult = ownResult8.toString();
    } else {
      const prototype = AxiosURLSearchParams.prototype;
      const str = new AxiosURLSearchParams(ownResult8, tmp2);
      serializeResult = str.toString(encode);
    }
    let sum = arr;
    if (serializeResult) {
      const index = arr.indexOf("#");
      let substr = arr;
      if (index !== -1) {
        substr = arr.slice(0, index);
      }
      let str4 = "&";
      if (substr.indexOf("?") === -1) {
        str4 = "?";
      }
      sum = substr + (str4 + serializeResult);
    }
    return sum;
  } else {
    return arr;
  }
}
function toURLEncodedForm(ownResult8, arg1) {
  const uRLSearchParams = new merged.classes.URLSearchParams();
  return toFormData$1(ownResult8, uRLSearchParams, Object.assign({
    visitor(arg0, arg1, arg2, defaultVisitor) {
      const self = this;
      if (closure_1_45.isNode) {
        if (closure_1_30.isBuffer(arg0)) {
          self.append(arg1, arg0.toString("base64"));
          return false;
        }
      }
      defaultVisitor = defaultVisitor.defaultVisitor;
      return defaultVisitor(...arguments);
    }
  }, arg1));
}
function parsePropPath(arg0) {
  return obj.matchAll(/\w+|\[(\w*)]/g, arg0).map((arg0) => {
    let str = "";
    if (arg0[0] !== "[]") {
      str = arg0[1] || arg0[0];
      const tmp = arg0[1] || arg0[0];
    }
    return str;
  });
}
function arrayToObject(arg0) {
  obj = {};
  const keys = Object.keys(arg0);
  for (let num = 0; num < length; num = num + 1) {
    let tmp = keys[num];
    obj[tmp] = arg0[tmp];
  }
  return obj;
}
function formDataToJSON(data) {
  function buildPath(arg0, arg1, closure_0, sum) {
    sum = tmp + 1;
    if (arg0[+sum] === "__proto__") {
      return true;
    } else {
      const _Number = Number;
      const isFiniteResult = Number.isFinite(+tmp3);
      let length = tmp3;
      if (!tmp3) {
        length = tmp3;
        if (closure_1_30.isArray(closure_0)) {
          length = closure_0.length;
        }
      }
      const hasOwnPropResult = closure_1_30.hasOwnProp(closure_0, length);
      if (tmp17) {
        if (hasOwnPropResult) {
          if (closure_1_30.isArray(closure_0[length])) {
            let combined = obj.concat(arg1);
          } else {
            combined = [obj, arg1];
          }
          closure_0[length] = combined;
        } else {
          closure_0[length] = arg1;
          return !isFiniteResult;
        }
      } else {
        if (!hasOwnPropResult) {
          closure_0[length] = [];
        }
        if (buildPath(arg0, arg1, closure_0[length], sum)) {
          if (closure_1_30.isArray(closure_0[length])) {
            closure_0[length] = closure_1_111(closure_0[length]);
          }
        }
        return !isFiniteResult;
      }
      tmp17 = sum >= arg0.length;
    }
  }
  if (obj.isFormData(data)) {
    if (obj.isFunction(data.entries)) {
      obj = {};
      obj.forEachEntry(data, (arg0, arg1) => {
        buildPath(closure_1_110(arg0), arg1, obj, 0);
      });
      return obj;
    }
  }
  return null;
}
function stringifySafely(navigationKey) {
  if (!obj.isString(navigationKey)) {
    const _JSON2 = JSON;
    return JSON.stringify(navigationKey);
  } else {
    try {
      let parse;
      if (!undefined) {
        const _JSON = JSON;
        parse = JSON.parse;
      }
      const parsed = parse(navigationKey);
      return obj.trim(navigationKey);
    } catch (tmp6) {
      if (tmp6.name !== "SyntaxError") {
        throw tmp6;
      }
    }
  }
}
function transformData(arg0, arg1) {
  let tmp = arg1;
  let self = this;
  closure_0 = arg1;
  self = obj3;
  if (!tmp) {
    tmp = self;
  }
  const fromResult = obj3.from(tmp.headers);
  const data = tmp.data;
  const item = obj.forEach(arg0, function transform(call) {
    let status;
    if (status) {
      status = status.status;
    }
    closure_3 = call.call(self, closure_3, closure_2.normalize(), status);
  });
  fromResult.normalize();
  return data;
}
function isCancel$1(__CANCEL__) {
  if (__CANCEL__) {
    __CANCEL__ = __CANCEL__.__CANCEL__;
  }
  return __CANCEL__;
}
function settle(arg0, arg1, config) {
  const validateStatus = config.config.validateStatus;
  if (config.status) {
    if (validateStatus) {
      if (!validateStatus(config.status)) {
        let tmp = ctor;
        const text = `Request failed with status code ${config.status}`;
        if (config.status >= 400) {
          if (config.status < 500) {
            let ERR_BAD_RESPONSE = ctor.ERR_BAD_REQUEST;
          }
          const prototype = tmp.prototype;
          tmp = new tmp(text, ERR_BAD_RESPONSE, config.config, config.request, config);
          arg1(tmp);
        }
        ERR_BAD_RESPONSE = ctor.ERR_BAD_RESPONSE;
      }
    }
  }
  arg0(config);
}
function parseProtocol(arg0) {
  const match = /^([-+\w]{1,25}):(?:\/\/)?/.exec(arg0);
  let str = match;
  if (match) {
    str = match[1];
  }
  if (!str) {
    str = "";
  }
  return str;
}
function speedometer(arg0, arg1) {
  c0 = 50;
  let num = 250;
  c0 = 50;
  let array = new Array(50);
  array = new Array(50);
  c4 = 0;
  c5 = 0;
  num = 1000;
  if (250 !== undefined) {
    num = 250;
  }
  return function push(arg0) {
    const timestamp = Date.now();
    array[result1] = arg0;
    array[result1] = timestamp;
    let result = closure_5;
    num = 0;
    let num2 = 0;
    if (closure_5 !== result1) {
      do {
        let tmp4 = array;
        let tmp5 = +result;
        num = num + array[tmp5];
        let tmp6 = c0;
        result = (tmp5 + 1) % c0;
        let tmp7 = result1;
        num2 = num;
      } while (result !== result1);
    }
    result1 = (result1 + 1) % c0;
    if (result1 === closure_5) {
      closure_5 = (closure_5 + 1) % c0;
    }
    if (timestamp - timestamp >= num) {
      let diff = tmp2;
      if (tmp2) {
        diff = timestamp - tmp2;
      }
      let rounded;
      if (diff) {
        const _Math = Math;
        rounded = Math.round(num2 * 1000 / diff);
      }
      return rounded;
    }
  };
}
function throttle(arg0, arg1) {
  closure_0 = arg0;
  c1 = 0;
  closure_2 = 1000 / arg1;
  function invoke(arg0) {
    if (arguments.length > 1) {
      if (arguments[1] !== undefined) {
        let timestamp = arguments[1];
      }
      c3 = null;
      if (c4) {
        const _clearTimeout = clearTimeout;
        clearTimeout(c4);
        c4 = null;
      }
      callback.apply(undefined, invoke.default(arg0));
    }
    timestamp = Date.now();
  }
  const items = [
    function throttled() {
      const timestamp = Date.now();
      const diff = timestamp - c1;
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      if (diff >= closure_2) {
        invoke(array, timestamp);
      } else if (!timeout) {
        const _setTimeout = setTimeout;
        timeout = setTimeout(() => {
          c4 = null;
          closure_1_5(array);
        }, closure_2 - diff);
      }
    },
    function flush() {
      if (closure_3) {
        invoke(closure_3);
      }
      return closure_3;
    }
  ];
  return items;
}
function isAbsoluteURL(ownResult7) {
  if (typeof ownResult7 !== "string") {
    return false;
  } else {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(ownResult7);
  }
}
function combineURLs(ownResult5, ownResult7) {
  let text1 = ownResult5;
  if (ownResult7) {
    const text = `${ownResult5.replace(/\/?\/$/, "")}/`;
    text1 = `${ownResult5.replace(/\/?\/$/, "")}/${ownResult7.replace(/^\/+/, "")}`;
  }
  return text1;
}
function buildFullPath(ownResult5, ownResult7, ownResult6) {
  if (ownResult5) {
    return combineURLs(ownResult5, ownResult7);
  }
  return ownResult7;
}
function mergeConfig$1(arg0, arg1) {
  obj = arg1;
  closure_0 = arg0;
  obj = arg1;
  function getMergedValue(key10018, arr, arg2, caseless) {
    if (closure_1_30.isPlainObject(key10018)) {
      if (closure_1_30.isPlainObject(arr)) {
        merge = closure_1_30.merge;
        obj = { caseless };
        return merge.call(obj, key10018, arr);
      }
    }
    obj = closure_1_30;
    if (closure_1_30.isPlainObject(arr)) {
      return obj.merge({}, arr);
    } else if (obj.isArray(arr)) {
      return arr.slice();
    } else {
      return arr;
    }
  }
  function mergeDeepProperties(arr, arr, arg2, caseless) {
    if (closure_1_30.isUndefined(arr)) {
      if (!closure_1_30.isUndefined(arr)) {
        return getMergedValue(undefined, arr, undefined, caseless);
      }
    } else {
      return getMergedValue(arr, arr, undefined, caseless);
    }
  }
  function valueFromConfig2(arg0, arr) {
    if (!closure_1_30.isUndefined(arr)) {
      return getMergedValue(undefined, arr);
    }
  }
  function defaultToConfig2(arr, arr) {
    if (closure_1_30.isUndefined(arr)) {
      if (!closure_1_30.isUndefined(arr)) {
        return getMergedValue(undefined, arr);
      }
    } else {
      return getMergedValue(undefined, arr);
    }
  }
  function mergeDirectKeys(key10018, arr, key10005) {
    if (closure_1_30.hasOwnProp(obj, key10005)) {
      return getMergedValue(key10018, arr);
    } else if (closure_1_30.hasOwnProp(closure_0, key10005)) {
      return getMergedValue(undefined, key10018);
    }
  }
  if (!arg1) {
    obj = {};
  }
  obj = Object.create(null);
  obj = { value: null, enumerable: false, writable: true, configurable: true };
  Object.setPrototypeOf(null);
  obj.value = Object.prototype.hasOwnProperty;
  Object.defineProperty(obj, "hasOwnProperty", obj);
  closure_3 = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    withXSRFToken: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    allowedSocketPaths: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers(arg0, arg1, arg2) {
      return mergeDeepProperties(closure_1_54(arg0), closure_1_54(arg1), arg2, true);
    }
  };
  const item = obj.forEach(Object.keys(Object.assign({}, arg0, obj)), function computeConfigValue(key10005) {
    if (key10005 !== "__proto__") {
      if (key10005 !== "constructor") {
        if (key10005 !== "prototype") {
          if (closure_1_30.hasOwnProp(table2, key10005)) {
            let tmp = table2[key10005];
          } else {
            tmp = mergeDeepProperties;
          }
          let tmp5;
          if (closure_1_30.hasOwnProp(table, key10005)) {
            tmp5 = table[key10005];
          }
          let tmp9;
          if (closure_1_30.hasOwnProp(obj, key10005)) {
            tmp9 = obj[key10005];
          }
          const tmpResult = tmp(tmp5, tmp9, key10005);
          let isUndefinedResult = closure_1_30.isUndefined(tmpResult);
          if (isUndefinedResult) {
            isUndefinedResult = tmp !== mergeDirectKeys;
          }
          if (!isUndefinedResult) {
            obj[key10005] = tmpResult;
          }
        }
      }
    }
  });
  return obj;
}
function setFormDataHeaders(fromResult, headers, arg2) {
  closure_0 = fromResult;
  if (arg2 !== "content-only") {
    let result = fromResult.set(headers);
  } else {
    const _Object = Object;
    const entries = Object.entries(headers);
    const item = entries.forEach((arg0) => {
      const defaultResult = closure_1_8.default(arg0, 2);
      if (closure_1_55.includes(defaultResult[0].toLowerCase())) {
        const result = closure_0.set(str, defaultResult[1]);
      }
    });
  }
}
function resolveConfig(arg0) {
  let tmp = mergeConfig$1({}, arg0);
  closure_0 = tmp;
  own = function own(allowAbsoluteUrls) {
    let tmp;
    if (closure_1_30.hasOwnProp(table, allowAbsoluteUrls)) {
      tmp = table[allowAbsoluteUrls];
    }
    return tmp;
  };
  const ownResult = own("data");
  const ownResult1 = own("withXSRFToken");
  const ownResult2 = own("xsrfHeaderName");
  const ownResult3 = own("xsrfCookieName");
  const user = own("auth");
  const ownResult4 = own("headers");
  const ownResult5 = own("baseURL");
  const ownResult6 = own("allowAbsoluteUrls");
  const fromResult = obj3.from(ownResult4);
  tmp.headers = fromResult;
  const ownResult7 = own("url");
  const tmp9 = buildFullPath(ownResult5, own("url"), ownResult6);
  tmp.url = buildURL(tmp9, own("params"), own("paramsSerializer"));
  if (user) {
    let str = user.username;
    if (!str) {
      str = "";
    }
    let str3 = "";
    const text = `${str}:`;
    if (user.password) {
      str3 = encodeUTF8$1(user.password);
    }
    const result = fromResult.set("Authorization", `Basic ${tmp12(tmp13 + str3)}`);
  }
  if (obj.isFormData(ownResult)) {
    if (!merged.hasStandardBrowserEnv) {
      if (!merged.hasStandardBrowserWebWorkerEnv) {
        if (!obj.isReactNative(ownResult)) {
          if (obj.isFunction(ownResult.getHeaders)) {
            const headers = ownResult.getHeaders();
            setFormDataHeaders(fromResult, headers, own("formDataHeaderPolicy"));
          }
        }
      }
    }
    fromResult.setContentType(undefined);
  }
  if (merged.hasStandardBrowserEnv) {
    let ownResult1Result = ownResult1;
    if (obj.isFunction(ownResult1)) {
      ownResult1Result = ownResult1(tmp);
    }
    let tmp26 = ownResult1Result === true;
    if (!tmp26) {
      let tmp28 = ownResult1Result == null;
      if (tmp28) {
        tmp28 = fn(tmp.url);
      }
      tmp26 = tmp28;
    }
    if (tmp26) {
      let readResult = ownResult2;
      if (ownResult2) {
        readResult = ownResult3;
      }
      if (readResult) {
        readResult = obj5.read(ownResult3);
      }
      if (readResult) {
        const result1 = fromResult.set(ownResult2, readResult);
      }
    }
  }
  return tmp;
}
function estimateDataURLDecodedBytes(str) {
  if (str) {
    if (typeof str === "string") {
      if (str.startsWith("data:")) {
        const index = str.indexOf(",");
        if (index < 0) {
          return 0;
        } else {
          const substr = str.slice(5, index);
          const substr1 = str.slice(index + 1);
          if (obj.test(substr)) {
            ({ length: length2, length: length3 } = substr1);
            let num21 = 0;
            let tmp14 = length2;
            if (0 < length3) {
              do {
                let tmp15 = length2;
                let tmp16 = num21;
                let tmp17 = tmp12;
                let tmp18 = tmp13;
                let diff = length2;
                let sum = num21;
                let tmp21 = tmp12;
                let tmp22 = tmp13;
                if (substr1.charCodeAt(num21) === 37) {
                  diff = length2;
                  sum = num21;
                  tmp21 = tmp12;
                  tmp22 = tmp13;
                  if (num21 + 2 < length3) {
                    let charCodeAtResult = substr1.charCodeAt(num21 + 1);
                    let charCodeAtResult1 = substr1.charCodeAt(num21 + 2);
                    let tmp23 = charCodeAtResult >= 48 && charCodeAtResult <= 57;
                    if (!tmp23) {
                      let tmp24 = charCodeAtResult >= 65 && charCodeAtResult <= 70;
                      tmp23 = tmp24;
                    }
                    if (!tmp23) {
                      let tmp25 = charCodeAtResult >= 97 && charCodeAtResult <= 102;
                      tmp23 = tmp25;
                    }
                    if (tmp23) {
                      let tmp26 = charCodeAtResult1 >= 48 && charCodeAtResult1 <= 57;
                      if (!tmp26) {
                        let tmp27 = charCodeAtResult1 >= 65 && charCodeAtResult1 <= 70;
                        tmp26 = tmp27;
                      }
                      if (!tmp26) {
                        let tmp28 = charCodeAtResult1 >= 97 && charCodeAtResult1 <= 102;
                        tmp26 = tmp28;
                      }
                      tmp23 = tmp26;
                    }
                    diff = length2;
                    sum = num21;
                    tmp21 = charCodeAtResult;
                    tmp22 = charCodeAtResult1;
                    if (tmp23) {
                      diff = length2 - 2;
                      sum = num21 + 2;
                      tmp21 = charCodeAtResult;
                      tmp22 = charCodeAtResult1;
                    }
                  }
                }
                num21 = sum + 1;
                length2 = diff;
                tmp12 = tmp21;
                tmp13 = tmp22;
                tmp14 = diff;
              } while (num21 < length3);
            }
            const diff1 = length3 - 1;
            function tailIsPct3D(diff1) {
              let tmp = diff1 >= 2;
              if (tmp) {
                tmp = substr1.charCodeAt(diff1 - 2) === 37;
              }
              if (tmp) {
                tmp = substr1.charCodeAt(diff1 - 1) === 51;
              }
              if (tmp) {
                let tmp5 = substr1.charCodeAt(diff1) === 68;
                if (!tmp5) {
                  tmp5 = substr1.charCodeAt(diff1) === 100;
                }
                tmp = tmp5;
              }
              return tmp;
            }
            let num22 = 0;
            let diff2 = diff1;
            if (diff1 >= 0) {
              if (substr1.charCodeAt(diff1) === 61) {
                diff2 = diff1 - 1;
                num22 = 1;
              } else {
                num22 = 0;
                diff2 = diff1;
                if (tailIsPct3D(diff1)) {
                  diff2 = diff1 - 3;
                  num22 = 1;
                }
              }
            }
            let num25 = num22;
            if (num22 === 1) {
              num25 = num22;
              if (diff2 >= 0) {
                if (substr1.charCodeAt(diff2) === 61) {
                  num25 = num22 + 1;
                } else {
                  num25 = num22;
                  if (tailIsPct3D(diff2)) {
                    num25 = num22 + 1;
                  }
                }
              }
            }
            const _Math = Math;
            const result = Math.floor(tmp14 / 4) * 3;
            if (!num25) {
              num25 = 0;
            }
            const diff3 = result - num25;
            let num29 = 0;
            if (diff3 > 0) {
              num29 = diff3;
            }
            return num29;
          } else {
            const _Buffer = Buffer;
            if (typeof Buffer !== "undefined") {
              const _Buffer2 = Buffer;
              if (typeof Buffer.byteLength === "function") {
                const _Buffer3 = Buffer;
                return Buffer.byteLength(substr1, "utf8");
              }
            }
            let num10 = 0;
            let num11 = 0;
            let num12 = 0;
            if (0 < substr1.length) {
              do {
                let charCodeAtResult2 = substr1.charCodeAt(num11);
                let tmp5 = num10;
                let tmp6 = num11;
                let tmp7 = tmp3;
                if (charCodeAtResult2 < 128) {
                  let sum1 = num10 + 1;
                  let sum2 = num11;
                  let tmp10 = tmp3;
                } else if (charCodeAtResult2 < 2048) {
                  sum1 = num10 + 2;
                  sum2 = num11;
                  tmp10 = tmp3;
                } else {
                  if (charCodeAtResult2 >= 55296) {
                    if (charCodeAtResult2 <= 56319) {
                      if (num11 + 1 < length) {
                        let charCodeAtResult3 = substr1.charCodeAt(num11 + 1);
                        if (charCodeAtResult3 >= 56320) {
                          if (charCodeAtResult3 <= 57343) {
                            sum1 = num10 + 4;
                            sum2 = num11 + 1;
                            tmp10 = charCodeAtResult3;
                          }
                        }
                        sum1 = num10 + 3;
                        sum2 = num11;
                        tmp10 = charCodeAtResult3;
                      }
                    }
                  }
                  sum1 = num10 + 3;
                  sum2 = num11;
                  tmp10 = tmp3;
                }
                num11 = sum2 + 1;
                num10 = sum1;
                tmp3 = tmp10;
                num12 = sum1;
              } while (num11 < length);
            }
            return num12;
          }
          obj = /;base64/i;
        }
      } else {
        return 0;
      }
    }
  }
  return 0;
}
function throwIfCancellationRequested(cancelToken) {
  if (cancelToken.cancelToken) {
    cancelToken = cancelToken.cancelToken;
    cancelToken.throwIfRequested();
  }
  if (cancelToken.signal) {
    if (cancelToken.signal.aborted) {
      const prototype = ctor2.prototype;
      const tmp7 = new ctor2(null, cancelToken);
      throw tmp7;
    }
  }
}
function dispatchRequest(headers) {
  closure_0 = headers;
  throwIfCancellationRequested(headers);
  headers.headers = obj3.from(headers.headers);
  headers.data = transformData.call(headers, headers.transformRequest);
  const items = ["post", "put", "patch"];
  if (items.indexOf(headers.method) !== -1) {
    headers = headers.headers;
    headers.setContentType("application/x-www-form-urlencoded", false);
  }
  let adapter = headers.adapter;
  if (!adapter) {
    adapter = obj3.adapter;
  }
  return obj7.getAdapter(adapter, headers)(headers).then(function onAdapterResolution(response) {
    closure_1_127(headers);
    headers.response = response;
    try {
      response.data = closure_1_114.call(headers, headers.transformResponse, response);
      delete tmp2.response;
      response.headers = closure_1_39.from(response.headers);
      return response;
    } catch (tmp9) {
      delete tmp.response;
      throw tmp9;
    }
  }, function onAdapterRejection(response) {
    if (!closure_1_115(response)) {
      closure_1_127(headers);
      if (response) {
        if (response.response) {
          headers.response = response.response;
          try {
            response.response.data = closure_1_114.call(headers, headers.transformResponse, response.response);
            delete tmp.response;
            response.response.headers = closure_1_39.from(response.response.headers);
          } catch (tmp16) {
            delete tmp2.response;
            throw tmp16;
          }
        }
      }
    }
    return Promise.reject(response);
  });
}
function createInstance(arg0) {
  closure_0 = arg0;
  const tmp = new ctor3(arg0);
  const tmp2 = bind(ctor3.prototype.request, tmp);
  obj = { allOwnKeys: true };
  obj.extend(tmp2, ctor3.prototype, tmp, obj);
  obj = { allOwnKeys: true };
  obj.extend(tmp2, tmp, null, obj);
  tmp2.create = function create(arg0) {
    return closure_1_129(closure_1_123(closure_0, arg0));
  };
  return tmp2;
}
let closure_0 = module_1(asyncGeneratorStep);
let closure_1 = module_1(_defineProperty);
let closure_2 = module_1(_possibleConstructorReturn);
let closure_3 = module_1(_getPrototypeOf);
let closure_4 = module_1(_inherits);
const _wrapNativeSuper = module_1(_wrapNativeSuper2);
let closure_5 = module_1(_toConsumableArray);
let closure_6 = module_1(_classCallCheck);
let closure_7 = module_1(_defineProperties);
const _slicedToArray = module_1(_slicedToArray2);
let closure_9 = module_1(AsyncGenerator);
let closure_10 = module_1(_awaitAsyncGenerator);
let closure_11 = module_1(_asyncGeneratorDelegate);
let tmp3 = ((arg0) => {
  closure_0 = arg0;
  return (closure_1) => {
    const callResult = closure_1_12.call(closure_1);
    let tmp = table[callResult];
    if (!tmp) {
      const formatted = callResult.slice(8, -1).toLowerCase();
      table[callResult] = formatted;
      tmp = formatted;
      const str = callResult.slice(8, -1);
    }
    return tmp;
  };
})(Object.create(null));
let closure_16 = tmp3;
function kindOfTest(ArrayBuffer) {
  closure_0 = ArrayBuffer.toLowerCase();
  return (arg0) => closure_1_16(arg0) === closure_0;
}
function typeOfTest(number) {
  closure_0 = number;
  return (arg0) => typeof arg0 === closure_0;
}
const typeOfTestResult = typeOfTest("undefined");
const kindOfTestResult = kindOfTest("ArrayBuffer");
const typeOfTestResult2 = typeOfTest("function");
const typeOfTestResult3 = typeOfTest("number");
function isObject(obj) {
  let tmp = obj !== null;
  if (tmp) {
    tmp = typeof obj === "object";
  }
  return tmp;
}
function isPlainObject(arg0) {
  if (callback(arg0) !== "object") {
    return false;
  } else {
    const tmp2 = getPrototypeOf(arg0);
    let tmp4 = tmp2 === null;
    if (!tmp4) {
      const _Object = Object;
      tmp4 = tmp2 === Object.prototype;
    }
    if (!tmp4) {
      const _Object2 = Object;
      tmp4 = Object.getPrototypeOf(tmp2) === null;
    }
    if (tmp4) {
      tmp4 = !(toStringTag in arg0);
    }
    if (tmp4) {
      tmp4 = !(iterator in arg0);
    }
    return tmp4;
  }
}
const typeOfTestResult1 = typeOfTest("string");
const kindOfTestResult1 = kindOfTest("Date");
const kindOfTestResult2 = kindOfTest("File");
const kindOfTestResult3 = kindOfTest("Blob");
if (typeof globalThis !== "undefined") {
  let _window2 = globalThis;
} else {
  let _self = self;
  if (typeof self !== "undefined") {
    _window2 = self;
  } else {
    const _window = window;
    if (typeof window !== "undefined") {
      _window2 = window;
    } else {
      _window2 = typeof global !== "undefined" ? global : {};
    }
  }
}
let _FormData;
if (typeof _window2.FormData !== "undefined") {
  _FormData = _window2.FormData;
}
let items = ["ReadableStream", "Request", "Response", "Headers"];
const kindOfTestResult4 = kindOfTest("FileList");
const kindOfTestResult5 = kindOfTest("URLSearchParams");
[tmp16, tmp17, tmp18, tmp19] = _slicedToArray.default(items.map(kindOfTest), 4);
if (typeof globalThis !== "undefined") {
  global = globalThis;
} else {
  const _self2 = self;
  if (typeof self !== "undefined") {
    global = self;
  } else {
    const _window3 = window;
    if (typeof window !== "undefined") {
      global = window;
    }
  }
}
function isContextDefined(arg0) {
  let tmp = !typeOfTestResult(arg0);
  if (tmp) {
    tmp = arg0 !== global;
  }
  return tmp;
}
let prototypeOf = typeof Uint8Array !== "undefined";
if (prototypeOf) {
  let _Uint8Array = Uint8Array;
  prototypeOf = getPrototypeOf(Uint8Array);
}
let defaultResult = _slicedToArray.default(items.map(kindOfTest), 4);
let tmp21 = ((prototypeOf) => {
  closure_0 = prototypeOf;
  return (arg0) => {
    let tmp = closure_0;
    if (closure_0) {
      tmp = arg0 instanceof closure_0;
    }
    return tmp;
  };
})(prototypeOf);
let tmp23 = ((prototype) => {
  const hasOwnProperty = prototype.hasOwnProperty;
  return (closure_1, key10018) => hasOwnProperty.call(closure_1, key10018);
})(Object.prototype);
let closure_27 = tmp23;
function reduceDescriptors(prototype, arg1) {
  closure_0 = prototype;
  closure_1 = arg1;
  obj = {};
  forEach(Object.getOwnPropertyDescriptors(prototype), (arg0, arg1) => {
    let tmp = callback(arg0, arg1, closure_0);
    if (tmp !== false) {
      if (!tmp) {
        tmp = arg0;
      }
      obj[arg1] = tmp;
      const tmp2 = obj;
    }
  });
  Object.defineProperties(prototype, obj);
}
const kindOfTestResult6 = kindOfTest("HTMLFormElement");
const kindOfTestResult7 = kindOfTest("RegExp");
let tmp26 = ((arg0, arg1) => {
  if (arg0) {
    const _setImmediate = setImmediate;
    return setImmediate;
  } else {
    if (arg1) {
      const _Math = Math;
      const _HermesInternal = HermesInternal;
      fn = ((arg0, arg1) => {
        closure_0 = arg0;
        closure_1 = arg1;
        const listener = closure_1_25.addEventListener("message", (source) => {
          if (source.source === closure_2_25) {
            if (tmp === closure_0) {
              if (arr.length) {
                arr.shift()();
              }
            }
          }
        }, false);
        return (arg0) => {
          closure_2_25.postMessage(closure_0, "*");
        };
      })("axios@" + Math.random(), []);
    } else {
      fn = (start) => setTimeout(start);
    }
    return fn;
  }
})(typeof setImmediate === "function", typeOfTestResult2(global.postMessage));
if (typeof queueMicrotask !== "undefined") {
  const _queueMicrotask = queueMicrotask;
  let nextTick = queueMicrotask.bind(global);
} else {
  const _process = process;
  nextTick = typeof process !== "undefined";
  if (nextTick) {
    const _process2 = process;
    nextTick = process.nextTick;
  }
  if (!nextTick) {
    nextTick = tmp26;
  }
}
let obj = {
  isArray,
  isArrayBuffer: kindOfTestResult,
  isBuffer,
  isFormData(data) {
    if (data) {
      if (_FormData) {
        if (data instanceof _FormData) {
          return true;
        }
      }
      const tmp4 = getPrototypeOf(data);
      if (tmp4) {
        const _Object = Object;
        if (tmp4 !== Object.prototype) {
          if (typeOfTestResult2(data.append)) {
            const tmp8 = callback(data);
            let tmp9 = tmp8 === "formdata";
            if (!tmp9) {
              let tmp10 = tmp8 === "object";
              if (tmp10) {
                tmp10 = typeOfTestResult2(data.toString);
              }
              if (tmp10) {
                tmp10 = data.toString() === "[object FormData]";
              }
              tmp9 = tmp10;
            }
            return tmp9;
          } else {
            return false;
          }
        }
      }
      return false;
    } else {
      return false;
    }
  },
  isArrayBufferView(buffer) {
    if (typeof ArrayBuffer !== "undefined") {
      const _ArrayBuffer = ArrayBuffer;
      if (ArrayBuffer.isView) {
        const _ArrayBuffer2 = ArrayBuffer;
        buffer = ArrayBuffer.isView(buffer);
      }
      return buffer;
    }
    if (buffer) {
      buffer = buffer.buffer;
    }
    if (buffer) {
      buffer = kindOfTestResult(buffer.buffer);
    }
  },
  isString: typeOfTestResult1,
  isNumber: typeOfTestResult3,
  isBoolean(arg0) {
    let tmp = arg0 === true;
    if (!tmp) {
      tmp = arg0 === false;
    }
    return tmp;
  },
  isObject,
  isPlainObject,
  isEmptyObject(arg0) {
    if (isObject(arg0)) {
      if (!isBuffer(arg0)) {
        try {
          const _Object = Object;
          const tmp5 = Object.keys(arg0).length === 0;
          let tmp6 = tmp5;
          if (tmp5) {
            const _Object2 = Object;
            const _Object3 = Object;
            tmp6 = Object.getPrototypeOf(arg0) === Object.prototype;
          }
          return tmp6;
        } catch (err) {
          return false;
        }
      }
    }
    return false;
  },
  isReadableStream: tmp16,
  isRequest: tmp17,
  isResponse: tmp18,
  isHeaders: tmp19,
  isUndefined: typeOfTestResult,
  isDate: kindOfTestResult1,
  isFile: kindOfTestResult2,
  isReactNativeBlob(uri) {
    let tmp = uri;
    if (uri) {
      tmp = typeof uri.uri !== "undefined";
    }
    return tmp;
  },
  isReactNative(closure_0) {
    let tmp = closure_0;
    if (closure_0) {
      tmp = typeof closure_0.getParts !== "undefined";
    }
    return tmp;
  },
  isBlob: kindOfTestResult3,
  isRegExp: kindOfTestResult7,
  isFunction: typeOfTestResult2,
  isStream(pipe) {
    let tmp = isObject(pipe);
    if (tmp) {
      tmp = typeOfTestResult2(pipe.pipe);
    }
    return tmp;
  },
  isURLSearchParams: kindOfTestResult5,
  isTypedArray: tmp21,
  isFileList: kindOfTestResult4,
  forEach,
  merge,
  extend(arg0, arg1, arg2) {
    closure_0 = arg0;
    closure_1 = arg2;
    if (arguments.length > 3) {
      obj = { allOwnKeys: {}.allOwnKeys };
      forEach(arg1, (value) => {
        if (closure_1) {
          if (closure_1_20(value)) {
            const _Object = Object;
            obj = { value: null, writable: true, enumerable: true, configurable: true };
            Object.setPrototypeOf(null);
            obj.value = closure_1_84(value, closure_1);
            Object.defineProperty(closure_0, arg1, obj);
          }
        }
        obj = { value: null, writable: true, enumerable: true, configurable: true };
        Object.setPrototypeOf(null);
        obj.value = value;
        Object.defineProperty(closure_0, arg1, obj);
      }, obj);
      return arg0;
    }
  },
  trim(navigationKey) {
    if (navigationKey.trim) {
      let trimmed = navigationKey.trim();
    } else {
      trimmed = navigationKey.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    }
    return trimmed;
  },
  stripBOM(str) {
    let substr = str;
    if (str.charCodeAt(0) === 65279) {
      substr = str.slice(1);
    }
    return substr;
  },
  inherits(value) {
    value.prototype = Object.create(arg1.prototype, arg3);
    obj = { value: null, writable: true, enumerable: false, configurable: true };
    Object.setPrototypeOf(null);
    obj.value = value;
    Object.defineProperty(value.prototype, "constructor", obj);
    obj = Object.create(null);
    obj.value = arg1.prototype;
    Object.defineProperty(value, "super", obj);
    if (arg2) {
      const _Object = Object;
      merged = Object.assign(value.prototype, arg2);
    }
  },
  toFlatObject(encode, arg1, arg2, arg3) {
    let tmp = encode;
    obj = arg1;
    obj = {};
    if (!arg1) {
      obj = {};
    }
    if (tmp == null) {
      return obj;
    } else {
      while (true) {
        let _Object = Object;
        let ownPropertyNames = Object.getOwnPropertyNames(tmp);
        let tmp4 = +ownPropertyNames.length;
        let diff = tmp4 - 1;
        let tmp6 = tmp;
        let tmp7 = tmp3;
        if (tmp4 > 0) {
          do {
            let tmp8 = ownPropertyNames[diff];
            let tmp9 = diff;
            if (!arg3) {
              if (!obj[tmp8]) {
                obj[tmp8] = tmp[tmp8];
                obj[tmp8] = true;
              }
            }
            tmp10 = +diff;
            diff = tmp10 - 1;
            tmp7 = tmp8;
          } while (tmp10 > 0);
        }
        let tmp11 = tmp2;
        if (tmp2) {
          let tmp12 = getPrototypeOf;
          tmp11 = getPrototypeOf(tmp);
        }
        if (!tmp11) {
          break;
        } else {
          if (!arg2) {
            let _Object2 = Object;
            tmp3 = tmp7;
            tmp = tmp11;
            if (tmp11 === Object.prototype) {
              break;
            }
          } else if (!arg2(tmp11, obj)) {
            break;
          }
          return obj;
        }
      }
    }
  },
  kindOf: tmp3,
  kindOfTest,
  endsWith(combined, arg1) {
    let length = arg2;
    const StringResult = String(combined);
    if (arg2 === undefined) {
      length = StringResult.length;
    }
    const diff = length - arg1.length;
    const index = StringResult.indexOf(arg1, diff);
    return index !== -1 && index === diff;
  },
  toArray(arg0) {
    let tmp13;
    if (arg0) {
      if (isArray(arg0)) {
        return arg0;
      } else if (typeOfTestResult3(arg0.length)) {
        const _Array = Array;
        const array = new Array(length);
        let diff = tmp11 - 1;
        if (+length > 0) {
          do {
            array[diff] = arg0[diff];
            tmp13 = +diff;
            diff = tmp13 - 1;
          } while (tmp13 > 0);
        }
        return array;
      } else {
        return null;
      }
    } else {
      return null;
    }
  },
  forEachEntry(closure_1, call) {
    obj = closure_1;
    if (closure_1) {
      obj = closure_1[iterator];
    }
    const iter = obj.call(closure_1);
    let iter2 = iter.next();
    if (iter2) {
      if (!iter2.done) {
        const value = iter2.value;
        call.call(closure_1, value[0], value[1]);
        const iter3 = iter.next();
        while (iter3) {
          iter2 = iter3;
          if (iter3.done) {
            break;
          }
        }
      }
    }
  },
  matchAll(exec, arg1) {
    const items = [];
    let match = exec.exec(arg1);
    if (match !== null) {
      do {
        let arr = items.push(match);
        match = exec.exec(arg1);
      } while (match !== null);
    }
    return items;
  },
  isHTMLForm: kindOfTestResult6,
  hasOwnProperty: tmp23,
  hasOwnProp: tmp23,
  reduceDescriptors,
  freezeMethods(prototype) {
    closure_0 = prototype;
    reduceDescriptors(prototype, (set, name) => {
      prototype = name;
      if (closure_1_20(prototype)) {
        const items = ["arguments", "caller", "callee"];
        if (items.includes(name)) {
          return false;
        }
      }
      if (closure_1_20(prototype[name])) {
        set.enumerable = false;
        if ("writable" in set) {
          set.writable = false;
        } else if (!set.set) {
          set.set = () => {
            throw Error("Can not rewrite read-only method '" + closure_0 + "'");
          };
        }
      }
    });
  },
  toObjectSet(arr) {
    obj = {};
    function define(arr) {
      const item = arr.forEach((arg0) => {
        closure_1_0[arg0] = true;
      });
    }
    if (isArray(arr)) {
      define(arr);
    } else {
      const _String = String;
      define(String(arr).split(arg1));
      const str = String(arr);
    }
    return obj;
  },
  toCamelCase(str) {
    return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(arg0, str) {
      return str.toUpperCase() + arg2;
    });
  },
  noop() {

  },
  toFiniteNumber(contentLength) {
    let tmp = arg1;
    if (contentLength != null) {
      const _Number = Number;
      tmp = arg1;
      if (Number.isFinite(+contentLength)) {
        tmp = tmp3;
      }
    }
    return tmp;
  },
  findKey,
  global,
  isContextDefined,
  isSpecCompliantForm(formData) {
    let tmp = formData;
    if (formData) {
      tmp = typeOfTestResult2(formData.append);
    }
    if (tmp) {
      tmp = formData[toStringTag] === "FormData";
    }
    if (tmp) {
      tmp = formData[iterator];
    }
    return tmp;
  },
  toJSONObject(config) {
    let weakSet = new WeakSet();
    function visit(config) {
      if (closure_1_22(config)) {
        if (!weakSet.has(config)) {
          if (closure_1_85(config)) {
            return config;
          } else if (!("toJSON" in config)) {
            weakSet.add(config);
            const tmp6 = closure_1_17(config) ? [] : {};
            weakSet = tmp6;
            closure_1_86(config, (arg0, arg1) => {
              const tmp = closure_1_1(arg0);
              if (!closure_2_18(tmp)) {
                closure_0[arg1] = tmp;
              }
            });
            weakSet.delete(config);
            return tmp6;
          }
        }
      }
      return config;
    }
    return visit(config);
  },
  isAsyncFn: kindOfTest("AsyncFunction"),
  isThenable(self) {
    let tmp = self;
    if (self) {
      let tmp3 = isObject(self);
      if (!tmp3) {
        tmp3 = typeOfTestResult2(self);
      }
      tmp = tmp3;
    }
    if (tmp) {
      tmp = typeOfTestResult2(self.then);
    }
    if (tmp) {
      tmp = typeOfTestResult2(self.catch);
    }
    return tmp;
  },
  setImmediate: tmp26,
  asap: nextTick,
  isIterable(arg0) {
    let tmp = arg0 != null;
    if (tmp) {
      tmp = typeOfTestResult2(arg0[iterator]);
    }
    return tmp;
  }
};
let closure_31 = obj.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]);
function parseHeaders(str) {
  obj = {};
  if (str) {
    const parts = str.split("\n");
    const item = parts.forEach(function parser(arr) {
      closure_3 = arr.indexOf(":");
      const str = arr.substring(0, closure_3);
      closure_1 = arr.substring(0, closure_3).trim().toLowerCase();
      const str2 = arr.substring(0, closure_3).trim();
      closure_2 = arr.substring(closure_3 + 1).trim();
      if (closure_1) {
        if (closure_1 === "set-cookie") {
          if (obj[closure_1]) {
            tmp14[tmp15].push(closure_2);
            const arr2 = tmp14[tmp15];
          } else {
            const items = [closure_2];
            tmp14[tmp15] = items;
          }
        } else {
          if (obj[closure_1]) {
            let text = `${obj[closure_1]}, ${closure_2}`;
          } else {
            text = closure_2;
          }
          obj[closure_1] = text;
          const tmp6 = obj;
          const tmp7 = closure_1;
        }
      }
    });
  }
  return obj;
}
const regExp = new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g");
const regExp1 = new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
function sanitizeHeaderValue(arr) {
  return sanitizeValue(arr, regExp);
}
function sanitizeByteStringHeaderValue(arr) {
  return sanitizeValue(arr, regExp1);
}
let closure_37 = Symbol("internals");
function isValidHeaderName(str) {
  return /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
}
let obj3 = (() => {
  class AxiosHeaders {
    constructor(arg0) {
      self = this;
      defaultResult = closure_1_6.default(this, AxiosHeaders);
      if (arg0) {
        result = self.set(arg0);
      }
      return;
    }
  }
  obj = {
    key: "set",
    value: function set(str) {
      let self = this;
      function setHeader(arg0, arg1, arg2) {
        const tmp = closure_2_92(arg1);
        if (tmp) {
          let findKeyResult = closure_2_30.findKey(self, tmp);
          if (!findKeyResult) {
            findKeyResult = arg1;
          }
          self[findKeyResult] = closure_2_93(arg0);
          const tmp7 = self;
        }
      }
      self = this;
      function setHeaders(arg0, arg1) {
        closure_0 = arg1;
        return closure_2_30.forEach(arg0, (arg0, arg1) => {
          closure_1_1(arg0, arg1, closure_0);
        });
      }
      if (!closure_1_30.isPlainObject(str)) {
        if (!(str instanceof self.constructor)) {
          let tmp2 = str;
          if (closure_1_30.isString(str)) {
            const trimmed = str.trim();
            tmp2 = trimmed;
            if (trimmed) {
              tmp2 = trimmed;
              if (!closure_1_38(trimmed)) {
                setHeaders(closure_1_32(trimmed), arg1);
              }
            }
          }
          if (closure_1_30.isObject(tmp2)) {
            if (closure_1_30.isIterable(tmp2)) {
              obj = {};
              const iter = tmp2[Symbol.iterator]();
              while (true) {
                let nextResult = iter.next();
                let tmp12 = iter;
                if (iter === undefined) {
                  let setHeadersResult1 = setHeaders(obj, arg1);
                } else {
                  let tmp13 = nextResult;
                  let tmp14 = closure_1_30;
                  if (closure_1_30.isArray(nextResult)) {
                    let tmp20 = obj;
                    let tmp21 = nextResult;
                    let first = tmp13[0];
                    let tmp23 = obj[first];
                    let tmp24 = tmp23;
                    if (!tmp23) {
                      let tmp25 = nextResult;
                      obj[first] = tmp13[1];
                    }
                    let tmp26 = closure_1_30;
                    let tmp27 = tmp23;
                    if (closure_1_30.isArray(tmp24)) {
                      let items = [];
                      let tmp30 = closure_1_5;
                      let tmp31 = tmp23;
                      let tmp32 = nextResult;
                      let items1 = [tmp13[1]];
                      let combined = items.concat(closure_1_5.default(tmp24), items1);
                    } else {
                      let tmp28 = tmp23;
                      combined = [tmp24, ];
                      let tmp29 = nextResult;
                      combined[1] = tmp13[1];
                    }
                    let tmp33 = combined;
                  } else {
                    let tmp15 = globalThis;
                    let _TypeError = TypeError;
                    let tmp16 = new.target;
                    str = "Object iterator must return a key-value pair";
                    let tmp17 = new.target;
                    let typeError = new TypeError("Object iterator must return a key-value pair");
                    let tmp19 = typeError;
                    throw typeError;
                  }
                }
              }
            }
          }
          if (tmp2 != null) {
            setHeader(arg1, tmp2, arg2);
          }
        }
        return self;
      }
      setHeaders(str, arg1);
    }
  };
  let items = [obj, , , , , , , , , , , ];
  obj = {
    key: "get",
    value: function get(arg0, call) {
      const self = this;
      const tmp = closure_1_92(arg0);
      if (tmp) {
        const findKeyResult = closure_1_30.findKey(self, tmp);
        if (findKeyResult) {
          if (call) {
            if (call === true) {
              return closure_1_94(tmp4);
            } else if (closure_1_30.isFunction(call)) {
              return call.call(self, tmp4, findKeyResult);
            } else if (closure_1_30.isRegExp(call)) {
              return call.exec(tmp4);
            } else {
              const _TypeError = TypeError;
              const typeError = new TypeError("parser must be boolean|regexp|function");
              throw typeError;
            }
          } else {
            return tmp4;
          }
        }
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "has",
    value: function has(arg0, arg1) {
      const self = this;
      const tmp = closure_1_92(arg0);
      if (tmp) {
        const findKeyResult = closure_1_30.findKey(self, tmp);
        let tmp4 = findKeyResult;
        if (findKeyResult) {
          tmp4 = self[findKeyResult] !== undefined;
        }
        if (tmp4) {
          let tmp5 = !arg1;
          if (!tmp5) {
            tmp5 = closure_1_95(undefined, self[findKeyResult], findKeyResult, arg1);
          }
          tmp4 = tmp5;
        }
        return tmp4;
      } else {
        return false;
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "delete",
    value: function _delete(arr) {
      closure_0 = arg1;
      function deleteHeader(arr) {
        const tmp3 = closure_2_92(arr);
        if (tmp3) {
          const findKeyResult = closure_2_30.findKey(self, tmp3);
          if (findKeyResult) {
            if (!closure_0) {
              delete tmp[tmp2];
              c2 = true;
            }
          }
        }
      }
      const self = this;
      c2 = false;
      if (closure_1_30.isArray(arr)) {
        const item = arr.forEach(deleteHeader);
      } else {
        deleteHeader(arr);
      }
      return c2;
    }
  };
  items[4] = {
    key: "clear",
    value: function clear(arg0) {
      let tmp10;
      const keys = Object.keys(this);
      let diff = tmp3 - 1;
      let flag = false;
      let flag2 = false;
      if (+keys.length) {
        do {
          let tmp5 = keys[diff];
          let tmp6 = diff;
          let flag3 = flag;
          if (!arg0) {
            delete tmp[tmp2];
            flag3 = true;
          } else {
            let tmp7 = closure_1_95;
            let tmp8 = tmp5;
            let tmp9 = arg0;
            let flag4 = true;
          }
          tmp10 = +diff;
          diff = tmp10 - 1;
          flag = flag3;
          flag2 = flag3;
        } while (tmp10);
      }
      return flag2;
    }
  };
  items[5] = {
    key: "normalize",
    value: function normalize(arg0) {
      closure_0 = arg0;
      const self = this;
      closure_2 = {};
      const item = closure_1_30.forEach(this, (arg0, arg1) => {
        const findKeyResult = closure_2_30.findKey(closure_2, arg1);
        if (findKeyResult) {
          self[findKeyResult] = closure_2_93(arg0);
          delete tmp[tmp2];
        } else {
          if (closure_0) {
            let trimmed = closure_2_96(arg1);
          } else {
            const _String = String;
            trimmed = String(arg1).trim();
            const str = String(arg1);
          }
          if (trimmed !== arg1) {
            delete tmp3[tmp2];
          }
          self[trimmed] = closure_2_93(arg0);
          closure_2[trimmed] = true;
        }
      });
      return this;
    }
  };
  items[6] = {
    key: "concat",
    value: function concat() {
      const self = this;
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      const constructor = self.constructor;
      const concat = constructor.concat;
      const items = [self];
      return concat.apply(constructor, items.concat(array));
    }
  };
  items[7] = {
    key: "toJSON",
    value: function toJSON(arg0) {
      closure_0 = arg0;
      obj = Object.create(null);
      const item = closure_1_30.forEach(this, (join) => {
        let tmp = join != null;
        if (tmp) {
          tmp = join !== false;
        }
        if (tmp) {
          let joined = join;
          if (closure_0) {
            joined = join;
            if (closure_2_30.isArray(join)) {
              joined = join.join(", ");
            }
          }
          obj[arg1] = joined;
          const tmp2 = obj;
        }
      });
      return obj;
    }
  };
  items[8] = {
    key: Symbol.iterator,
    value() {
      const entries = Object.entries(this.toJSON());
      return entries[Symbol.iterator]();
    }
  };
  items[9] = {
    key: "toString",
    value: function toString() {
      const entries = Object.entries(this.toJSON());
      const mapped = entries.map((arg0) => {
        const defaultResult = closure_2_8.default(arg0, 2);
        return defaultResult[0] + ": " + defaultResult[1];
      });
      return mapped.join("\n");
    }
  };
  items[10] = {
    key: "getSetCookie",
    value: function getSetCookie() {
      return this.get("set-cookie") || [];
    }
  };
  items[11] = {
    key: Symbol.toStringTag,
    get() {
      return "AxiosHeaders";
    }
  };
  let items1 = [
    {
      key: "from",
      value: function from(arg0) {
        const self = this;
        let _self = arg0;
        if (!(arg0 instanceof this)) {
          const prototype = self.prototype;
          _self = new self(arg0);
        }
        return _self;
      }
    },
    {
      key: "concat",
      value: function concat(arg0) {
        const tmp = new this(arg0);
        closure_0 = tmp;
        const length = arguments.length;
        let num = 0;
        if (length > 1) {
          num = length - 1;
        }
        const arr = new Array(num);
        for (let num2 = 1; num2 < length; num2 = num2 + 1) {
          arr[num2 - 1] = arguments[num2];
        }
        const item = arr.forEach((arg0) => closure_0.set(arg0));
        return tmp;
      }
    },
    {
      key: "accessor",
      value: function accessor(arr) {
        function defineAccessor(arr) {
          const tmp = closure_2_92(arr);
          if (!accessors[tmp]) {
            closure_2_97(closure_1, arr);
            accessors[tmp] = true;
          }
        }
        obj = { accessors: {} };
        this[closure_1_37] = obj;
        const accessors = obj.accessors;
        closure_1 = this.prototype;
        if (closure_1_30.isArray(arr)) {
          const item = arr.forEach(defineAccessor);
        } else {
          defineAccessor(arr);
        }
        return this;
      }
    }
  ];
  return closure_7.default(AxiosHeaders, items, items1);
})();
obj3.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
obj.reduceDescriptors(obj3.prototype, (value, arr) => {
  value = value.value;
  const formatted = arr[0].toUpperCase();
  closure_1 = formatted + arr.slice(1);
  return {
    get() {
      return closure_0;
    },
    set(arg0) {
      this[closure_1] = arg0;
    }
  };
});
obj.freezeMethods(obj3);
let c40 = "[REDACTED ****]";
let tmp32 = ((_wrapNativeSuper) => {
  class AxiosError {
    constructor(arg0, arg1, arg2, arg3, arg4) {
      defaultResult = closure_1_6.default(this, AxiosError);
      items = [];
      items[0] = _wrapNativeSuper;
      tmp2 = closure_1_80(this, AxiosError, items);
      obj = { value: null, enumerable: true, writable: true, configurable: true };
      setPrototypeOfResult = Object.setPrototypeOf(null);
      obj.value = _wrapNativeSuper;
      definePropertyResult = Object.defineProperty(tmp2, "message", obj);
      tmp2.name = "AxiosError";
      tmp2.isAxiosError = true;
      if (arg1) {
        tmp2.code = arg1;
      }
      if (arg2) {
        tmp2.config = arg2;
      }
      if (arg3) {
        tmp2.request = arg3;
      }
      if (arg4) {
        tmp2.response = arg4;
        tmp2.status = arg4.status;
      }
      return tmp2;
    }
  }
  closure_4.default(AxiosError, _wrapNativeSuper);
  obj = {
    key: "toJSON",
    value: function toJSON() {
      const self = this;
      const config = this.config;
      let redact;
      if (config) {
        if (closure_1_30.hasOwnProp(config, "redact")) {
          redact = config.redact;
        }
      }
      if (closure_1_30.isArray(redact)) {
        if (redact.length > 0) {
          let toJSONObjectResult = closure_1_99(config, redact);
        }
        obj = {};
        ({ message: obj.message, name: obj.name, description: obj.description, number: obj.number, fileName: obj.fileName, lineNumber: obj.lineNumber, columnNumber: obj.columnNumber, stack: obj.stack } = self);
        obj.config = toJSONObjectResult;
        ({ code: obj.code, status: obj.status } = self);
        return obj;
      }
      toJSONObjectResult = closure_1_30.toJSONObject(config);
    }
  };
  let items = [obj];
  obj = {
    key: "from",
    value: function from(code) {
      code = arg1;
      let tmp = AxiosError;
      if (!arg1) {
        code = code.code;
      }
      tmp = new tmp(code.message, code, arg2, arg3, arg4);
      tmp.cause = code;
      tmp.name = code.name;
      if (code.status != null) {
        if (tmp.status == null) {
          tmp.status = code.status;
        }
      }
      if (arg5) {
        const _Object = Object;
        merged = Object.assign(tmp, arg5);
      }
      return tmp;
    }
  };
  const items1 = [obj];
  return closure_7.default(AxiosError, items, items1);
})(_wrapNativeSuper.default(Error));
let closure_41 = tmp32;
tmp32.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
tmp32.ERR_BAD_OPTION = "ERR_BAD_OPTION";
tmp32.ECONNABORTED = "ECONNABORTED";
tmp32.ETIMEDOUT = "ETIMEDOUT";
tmp32.ECONNREFUSED = "ECONNREFUSED";
tmp32.ERR_NETWORK = "ERR_NETWORK";
tmp32.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
tmp32.ERR_DEPRECATED = "ERR_DEPRECATED";
tmp32.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
tmp32.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
tmp32.ERR_CANCELED = "ERR_CANCELED";
tmp32.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
tmp32.ERR_INVALID_URL = "ERR_INVALID_URL";
tmp32.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
let closure_42 = obj.toFlatObject(obj, {}, null, function filter(Boolean) {
  return /^is[A-Z]/.test(Boolean);
});
let prototype = AxiosURLSearchParams.prototype;
prototype.append = function append(arg0, arg1) {
  const _pairs = this._pairs;
  const items = [arg0, arg1];
  _pairs.push(items);
};
prototype.toString = function toString(arg0) {
  closure_0 = arg0;
  closure_1 = arg0 ? (function(key10018) {
    return callback.call(this, key10018, closure_1_105);
  }) : encode$1;
  const _pairs = this._pairs;
  const mapped = _pairs.map(function each(arg0) {
    const text = `${closure_1(arg0[0])}=`;
    return `${closure_1(arg0[0])}=` + callback2(arg0[1]);
  }, "");
  return mapped.join("&");
};
let closure_43 = (() => {
  class InterceptorManager {
    constructor() {
      defaultResult = closure_1_6.default(this, InterceptorManager);
      this.handlers = [];
      return;
    }
  }
  obj = {
    key: "use",
    value: function use(fulfilled, rejected, synchronous) {
      const handlers = this.handlers;
      obj = { fulfilled, rejected };
      let flag = false;
      if (synchronous) {
        flag = synchronous.synchronous;
      }
      obj.synchronous = flag;
      let runWhen = null;
      if (synchronous) {
        runWhen = synchronous.runWhen;
      }
      obj.runWhen = runWhen;
      handlers.push(obj);
      return this.handlers.length - 1;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "eject",
    value: function eject(arg0) {
      if (this.handlers[arg0]) {
        this.handlers[arg0] = null;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "clear",
    value: function clear() {
      if (this.handlers) {
        tmp.handlers = [];
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "forEach",
    value: function forEach(arg0) {
      closure_0 = arg0;
      const item = closure_1_30.forEach(this.handlers, function forEachHandler(arg0) {
        if (arg0 !== null) {
          callback(arg0);
        }
      });
    }
  };
  return closure_7.default(InterceptorManager, items);
})();
obj = { silentJSONParsing: true, forcedJSONParsing: true, clarifyTimeoutError: false, legacyInterceptorReqResOrdering: true, advertiseZstdAcceptEncoding: false };
if (typeof URLSearchParams !== "undefined") {
  AxiosURLSearchParams = URLSearchParams;
}
let _FormData1 = null;
if (typeof FormData !== "undefined") {
  _FormData1 = FormData;
}
let _Blob = null;
if (typeof Blob !== "undefined") {
  _Blob = Blob;
}
let obj1 = { URLSearchParams: AxiosURLSearchParams, FormData: _FormData1, Blob: _Blob };
let tmp35 = typeof window !== "undefined";
if (tmp35) {
  let _document = document;
  tmp35 = typeof document !== "undefined";
}
let tmp36 = typeof navigator === "object" && navigator || undefined;
let tmp37 = tmp35;
if (tmp35) {
  let tmp38 = !tmp36;
  if (!tmp38) {
    let items1 = ["ReactNative", "NativeScript", "NS"];
    tmp38 = items1.indexOf(tmp36.product) < 0;
  }
  tmp37 = tmp38;
}
let tmp39 = typeof globalThis.WorkerGlobalScope !== "undefined";
if (tmp39) {
  const _self3 = self;
  tmp39 = self instanceof globalThis.WorkerGlobalScope;
}
if (tmp39) {
  const _self4 = self;
  tmp39 = typeof self.importScripts === "function";
}
let str = tmp35;
if (tmp35) {
  const _window4 = window;
  str = window.location.href;
}
if (!str) {
  str = "http://localhost";
}
let obj2 = Object.create(null);
obj2.hasBrowserEnv = tmp35;
obj2.hasStandardBrowserEnv = tmp37;
obj2.hasStandardBrowserWebWorkerEnv = tmp39;
obj2.navigator = tmp36;
obj2.origin = str;
let merged = Object.assign({}, Object.freeze(obj2), { isBrowser: true, classes: obj1, protocols: ["http", "https", "file", "blob", "url", "data"] });
function own(closure_0, key10005) {
  let tmp;
  if (closure_0 != null) {
    if (obj.hasOwnProp(closure_0, key10005)) {
      tmp = closure_0[key10005];
    }
  }
  return tmp;
}
obj3 = {
  transitional: obj,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: items2,
  transformResponse: items3,
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: obj4,
  validateStatus(status) {
    let tmp = status >= 200;
    if (tmp) {
      tmp = status < 300;
    }
    return tmp;
  },
  headers: { common: { Accept: "application/json, text/plain, */*", "Content-Type": undefined } }
};
items2 = [
  function transformRequest(buffer, getContentType) {
    const self = this;
    const arr = getContentType.getContentType() || "";
    const tmp = arr.indexOf("application/json") > -1;
    const isObjectResult = obj.isObject(buffer);
    let str = buffer;
    if (isObjectResult) {
      str = buffer;
      if (obj.isHTMLForm(buffer)) {
        _FormData = FormData;
        str = new FormData(buffer);
      }
    }
    if (obj.isFormData(str)) {
      let json = str;
      if (tmp) {
        const _JSON = JSON;
        json = JSON.stringify(formDataToJSON(str));
      }
      return json;
    } else {
      if (!obj.isArrayBuffer(str)) {
        if (!obj.isBuffer(str)) {
          if (!obj.isStream(str)) {
            if (!obj.isFile(str)) {
              if (!obj.isBlob(str)) {
                if (!obj.isReadableStream(str)) {
                  if (obj.isArrayBufferView(str)) {
                    return str.buffer;
                  } else if (obj.isURLSearchParams(str)) {
                    getContentType.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
                    return str.toString();
                  } else {
                    if (isObjectResult) {
                      const tmp17 = own(self, "formSerializer");
                      if (arr.indexOf("application/x-www-form-urlencoded") > -1) {
                        return toURLEncodedForm(str, tmp17).toString();
                      } else {
                        const isFileListResult = obj.isFileList(str);
                        const tmp21 = own(self, "env");
                        let _FormData2 = tmp21;
                        if (tmp21) {
                          _FormData2 = tmp21.FormData;
                        }
                        let tmp23 = str;
                        if (isFileListResult) {
                          obj = { "files[]": str };
                          tmp23 = obj;
                        }
                        if (_FormData2) {
                          const prototype2 = _FormData2.prototype;
                          _FormData2 = new _FormData2();
                        }
                        return toFormData$1(tmp23, _FormData2, tmp17);
                      }
                    }
                    if (!isObjectResult) {
                      if (!tmp) {
                        return str;
                      }
                    }
                    getContentType.setContentType("application/json", false);
                    return stringifySafely(str);
                  }
                }
              }
            }
          }
        }
      }
      return str;
    }
  }
];
items3 = [
  function transformResponse(arg0) {
    const self = this;
    let transitional = own(this, "transitional");
    if (!transitional) {
      transitional = obj3.transitional;
    }
    let forcedJSONParsing = transitional;
    if (transitional) {
      forcedJSONParsing = transitional.forcedJSONParsing;
    }
    const tmp5 = own(self, "responseType");
    if (!obj.isResponse(arg0)) {
      if (!obj.isReadableStream(arg0)) {
        if (arg0) {
          if (obj.isString(arg0)) {
            let silentJSONParsing = transitional;
            if (transitional) {
              silentJSONParsing = transitional.silentJSONParsing;
            }
            let tmp13 = tmp12;
            if (!silentJSONParsing) {
              tmp13 = tmp6;
            }
            try {
              const _JSON = JSON;
              return JSON.parse(arg0, own(self, "parseReviver"));
            } catch (tmp18) {
              if (tmp) {
                if (tmp18.name === "SyntaxError") {
                  const ERR_BAD_RESPONSE = ctor.ERR_BAD_RESPONSE;
                  throw ctor.from(tmp18, ERR_BAD_RESPONSE, tmp2, null, own(tmp2, "response"));
                } else {
                  throw tmp18;
                }
              }
            }
          }
        }
        return arg0;
      }
    }
    return arg0;
  }
];
let item = obj.forEach(["delete", "get", "head", "post", "put", "patch", "query"], (arg0) => {
  obj3.headers[arg0] = {};
});
let tmp43 = ((arg0) => {
  class CanceledError {
    constructor(arg0, arg1, arg2) {
      tmp = CanceledError;
      defaultResult = closure_1_6.default(this, CanceledError);
      str = "canceled";
      tmp3 = closure_1_80;
      if (arg0 != null) {
        str = arg0;
      }
      items = [, , , ];
      items[0] = str;
      items[1] = closure_1_41.ERR_CANCELED;
      items[2] = arg1;
      items[3] = arg2;
      tmp3Result = tmp3(this, tmp, items);
      tmp3Result.name = "CanceledError";
      tmp3Result.__CANCEL__ = true;
      return tmp3Result;
    }
  }
  closure_4.default(CanceledError, arg0);
  return closure_7.default(CanceledError);
})(tmp32);
let closure_48 = tmp43;
function progressEventReducer(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  let num = 3;
  if (arguments.length > 2) {
    num = 3;
    if (arguments[2] !== undefined) {
      num = arguments[2];
    }
  }
  c2 = 0;
  closure_3 = speedometer(50, 250);
  return throttle((loaded) => {
    if (loaded) {
      if (typeof loaded.loaded === "number") {
        loaded = loaded.loaded;
        let total;
        if (loaded.lengthComputable) {
          total = loaded.total;
        }
        let bound = loaded;
        if (total != null) {
          const _Math = Math;
          bound = Math.min(loaded, total);
        }
        const _Math2 = Math;
        const bound1 = Math.max(0, bound - closure_2);
        const tmp9 = callback2(bound1);
        const _Math3 = Math;
        closure_2 = Math.max(closure_2, bound);
        obj = { loaded: bound, total };
        let result;
        if (total) {
          result = bound / total;
        }
        obj.progress = result;
        obj.bytes = bound1;
        let tmp13;
        if (tmp9) {
          tmp13 = tmp9;
        }
        obj.rate = tmp13;
        let result1;
        if (tmp9) {
          if (total) {
            result1 = (total - bound) / tmp9;
          }
        }
        obj.estimated = result1;
        obj.event = loaded;
        obj.lengthComputable = total != null;
        let str2 = "upload";
        if (closure_1) {
          str2 = "download";
        }
        callback(closure_1.default(obj, str2, true));
      }
    }
  }, num);
}
function progressEventDecorator(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = arg0 != null;
  const items = [(loaded) => 1({ lengthComputable: closure_2, total: closure_0, loaded }), arg1[1]];
  return items;
}
function asyncDecorator(arg0) {
  closure_0 = arg0;
  return () => {
    const length = arguments.length;
    const array = new Array(length);
    for (let num = 0; num < length; num = num + 1) {
      array[num] = arguments[num];
    }
    return closure_1_30.asap(() => array.apply(undefined, array));
  };
}
if (merged.hasStandardBrowserEnv) {
  let _URL = URL;
  let uRL = new URL(merged.origin);
  let _navigator = merged.navigator;
  if (_navigator) {
    let obj8 = /(msie|trident)/i;
    _navigator = obj8.test(merged.navigator.userAgent);
  }
  let fn = ((uRL, _navigator) => {
    closure_0 = uRL;
    closure_1 = _navigator;
    return (origin) => {
      const url = new URL(origin, closure_1_45.origin);
      let tmp = uRL.protocol === url.protocol;
      if (tmp) {
        tmp = uRL.host === url.host;
      }
      if (tmp) {
        let tmp3 = closure_1;
        if (!closure_1) {
          tmp3 = uRL.port === url.port;
        }
        tmp = tmp3;
      }
      return tmp;
    };
  })(uRL, _navigator);
} else {
  fn = () => true;
}
let obj5 = {};
if (merged.hasStandardBrowserEnv) {
  obj5.write = function write(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
    if (typeof document !== "undefined") {
      const _encodeURIComponent = encodeURIComponent;
      const _HermesInternal5 = HermesInternal;
      const items = ["" + arg0 + "=" + encodeURIComponent(arg1)];
      if (obj.isNumber(arg2)) {
        const _Date = Date;
        const date = new Date(arg2);
        const _HermesInternal = HermesInternal;
        items.push("expires=" + date.toUTCString());
      }
      if (obj.isString(arg3)) {
        const _HermesInternal2 = HermesInternal;
        items.push("path=" + arg3);
      }
      if (obj.isString(arg4)) {
        const _HermesInternal3 = HermesInternal;
        items.push("domain=" + arg4);
      }
      if (arg5 === true) {
        items.push("secure");
      }
      if (obj.isString(arg6)) {
        const _HermesInternal4 = HermesInternal;
        items.push("SameSite=" + arg6);
      }
      const _document = document;
      document.cookie = items.join("; ");
    }
  };
  obj5.read = function read(arg0) {
    let index;
    let replaced;
    if (typeof document === "undefined") {
      return null;
    } else {
      const _document = document;
      const parts = document.cookie.split(";");
      let num = 0;
      if (0 < parts.length) {
        while (true) {
          let str = parts[num];
          replaced = str.replace(/^\s+/, "");
          index = replaced.indexOf("=");
          let tmp2 = num;
          if (index !== -1) {
            if (replaced.slice(0, index) === arg0) {
              break;
            }
          }
          num = num + 1;
        }
        const _decodeURIComponent = decodeURIComponent;
        return decodeURIComponent(replaced.slice(index + 1));
      }
      return null;
    }
  };
  obj5.remove = function remove(arg0) {
    this.write(arg0, "", Date.now() - 86400000, "/");
  };
  let tmp48 = obj5;
} else {
  obj5.write = function write() {

  };
  obj5.read = function read() {
    return null;
  };
  obj5.remove = function remove() {

  };
  tmp48 = obj5;
}
obj5 = tmp48;
function headersToObject(arg0) {
  merged = arg0;
  if (arg0 instanceof obj3) {
    const _Object = Object;
    merged = Object.assign({}, arg0);
  }
  return merged;
}
let closure_55 = ["content-type", "content-length"];
function encodeUTF8$1(password) {
  return encodeURIComponent(password).replace(/%([0-9A-F]{2})/gi, (arg0, arg1) => String.fromCharCode(parseInt(arg1, 16)));
}
function composeSignals(arg0, _delay) {
  let found = arg0;
  closure_1 = _delay;
  if (arg0) {
    const _Boolean = Boolean;
    found = found.filter(Boolean);
  } else {
    found = [];
  }
  const abortController = new AbortController();
  c3 = false;
  function onabort(arg0) {
    let reason = arg0;
    if (!c3) {
      c3 = true;
      unsubscribe();
      const _Error = Error;
      if (!(reason instanceof Error)) {
        const self = this;
        reason = this.reason;
      }
      let tmp7 = reason;
      if (!(reason instanceof closure_1_41)) {
        tmp7 = closure_1_48;
        const _Error2 = Error;
        let message = reason;
        if (reason instanceof Error) {
          message = reason.message;
        }
        const prototype = tmp7.prototype;
        tmp7 = new tmp7(message);
      }
      abortController.abort(tmp7);
    }
  }
  let timerId = _delay;
  if (_delay) {
    const _setTimeout = setTimeout;
    timerId = setTimeout(() => {
      c5 = null;
      onabort(new closure_1_41("timeout of " + closure_1 + "ms exceeded", closure_1_41.ETIMEDOUT));
    }, _delay);
  }
  function unsubscribe() {
    if (c0) {
      if (c5) {
        const _clearTimeout = clearTimeout;
        clearTimeout(c5);
      }
      c5 = null;
      const item = c0.forEach((unsubscribe) => {
        if (unsubscribe.unsubscribe) {
          unsubscribe.unsubscribe(closure_1_4);
        } else {
          const removed = unsubscribe.removeEventListener("abort", closure_1_4);
        }
      });
      c0 = null;
    }
  }
  let item = found.forEach((addEventListener) => addEventListener.addEventListener("abort", onabort));
  const signal = abortController.signal;
  signal.unsubscribe = () => closure_1_30.asap(unsubscribe);
  return signal;
}
function* streamChunk(arg0, arg1) {
  const byteLength = arg0.byteLength;
  if (byteLength < arg1) {
    yield arg0;
  } else {
    let num = 0;
    if (0 < byteLength) {
      const sum = num + arg1;
      yield arg0.slice(num, sum);
      do {
        num = sum;
      } while (sum < byteLength);
    }
  }
}
let closure_59 = (() => {
  closure_0 = closure_9.default(async (arg0, arg1) => {
    try {
      const iter = closure_2_82(closure_2_60(arg0));
      const iter3 = yield closure_2_10.default(iter.next());
      let iter4 = iter3;
      let tmp14 = tmp13;
      if (!iter3.done) {
        const _Symbol = Symbol;
        const iter5 = closure_2_11.default(closure_2_82(closure_2_58(iter4.value, arg1)), closure_2_10.default)[Symbol.iterator]();
        HermesBuiltin.ensureObject("iterator is not an object");
        const iter6 = iter5.next(undefined);
        HermesBuiltin.ensureObject("iterator.next() did not return an object");
        let iter7 = iter6;
        if (iter6.done) {
          const value = iter7.value;
          const iter8 = yield closure_2_10.default(iter2.next());
          iter4 = iter8;
          tmp14 = tmp58;
        } else {
          try {
            const result = HermesBuiltin.generatorSetDelegated();
            let tmp28 = yield iter6;
            while (true) {
              let str7 = "return";
              let tmp37 = iter5;
              let tmp36 = tmp28;
              let method = HermesBuiltin.getMethod("return");
              if (method === undefined) {
                break;
              } else {
                let tmp82 = tmp28;
                let iter10 = method(tmp36);
                let str11 = "iterator.return() did not return an object";
                let tmp83 = iter10;
                let ensureObjectResult2 = HermesBuiltin.ensureObject("iterator.return() did not return an object");
                if (iter10.done) {
                  try {
                    let tmp41 = tmp14;
                    if (tmp14) {
                      let tmp42 = iter;
                      let tmp43 = null;
                      if (iter2.return != null) {
                        let tmp44 = closure_2_10;
                        let tmp45 = iter;
                        let tmp46 = yield closure_2_10.default(iter2.return());
                      }
                    }
                    let tmp47 = flag;
                    if (flag) {
                      let tmp48 = tmp9;
                      throw tmp9;
                    } else {
                      return tmp40;
                    }
                  } catch (tmp49) {
                    let tmp50 = tmp2;
                    if (tmp2) {
                      let tmp51 = tmp;
                      throw tmp;
                    } else {
                      throw tmp49;
                    }
                  }
                } else {
                  let result1 = HermesBuiltin.generatorSetDelegated();
                  tmp28 = yield iter10;
                  continue;
                }
              }
            }
          } catch (tmp29) {
            const method1 = HermesBuiltin.getMethod(tmp5);
            if (method1 === tmp4) {
              const method2 = HermesBuiltin.getMethod("return");
              if (method2 !== tmp4) {
                HermesBuiltin.ensureObject("iterator.return() did not return an object");
              }
              HermesBuiltin.throwTypeError();
              throw tmp4;
            } else {
              const iter9 = method1(tmp29);
              HermesBuiltin.ensureObject(tmp6);
              if (iter9.done) {
                iter7 = iter9;
              } else {
                const result2 = HermesBuiltin.generatorSetDelegated();
                tmp28 = yield iter9;
              }
            }
          }
        }
        const defaultResult = closure_2_11.default(closure_2_82(closure_2_58(iter4.value, arg1)), closure_2_10.default);
      }
      try {
        if (tmp14) {
          if (iter2.return != null) {
            yield closure_2_10.default(iter2.return());
          }
        }
        if (flag) {
          throw tmp9;
        }
      } catch (tmp67) {
        if (tmp2) {
          throw tmp;
        } else {
          throw tmp67;
        }
      }
    } catch (tmp70) {
      try {
        if (tmp3) {
          if (obj.return != null) {
            yield closure_2_10.default(obj.return());
          }
        }
        if (tmp2) {
          throw tmp;
        } else {
          throw tmp70;
        }
      } catch (tmp78) {
        if (tmp2) {
          throw tmp;
        } else {
          throw tmp78;
        }
      }
    }
  });
  return function readBytes(arg0, arg1) {
    return callback(...arguments);
  };
})();
let closure_60 = (() => {
  closure_0 = closure_9.default(async (arg0) => {
    if (arg0[Symbol.asyncIterator]) {
      const _Symbol = Symbol;
      const iter2 = closure_2_11.default(closure_2_82(arg0), closure_2_10.default)[Symbol.iterator]();
      HermesBuiltin.ensureObject("iterator is not an object");
      const iter3 = iter2.next(undefined);
      HermesBuiltin.ensureObject("iterator.next() did not return an object");
      let iter4 = iter3;
      if (iter3.done) {
        const value = iter4.value;
      } else {
        try {
          const result = HermesBuiltin.generatorSetDelegated();
          let tmp30 = yield iter3;
          while (true) {
            let str6 = "return";
            let tmp42 = iter2;
            let tmp41 = tmp30;
            let method = HermesBuiltin.getMethod("return");
            if (method === undefined) {
              break;
            } else {
              let tmp44 = tmp30;
              let iter6 = method(tmp41);
              let str7 = "iterator.return() did not return an object";
              let tmp45 = iter6;
              let ensureObjectResult2 = HermesBuiltin.ensureObject("iterator.return() did not return an object");
              if (iter6.done) {
                return iter6.value;
              } else {
                let result1 = HermesBuiltin.generatorSetDelegated();
                tmp30 = yield iter6;
                continue;
              }
            }
          }
        } catch (tmp31) {
          const method1 = HermesBuiltin.getMethod(tmp3);
          if (method1 === tmp) {
            const method2 = HermesBuiltin.getMethod("return");
            if (method2 !== tmp) {
              HermesBuiltin.ensureObject("iterator.return() did not return an object");
            }
            HermesBuiltin.throwTypeError();
            throw tmp;
          } else {
            const iter5 = method1(tmp31);
            HermesBuiltin.ensureObject(tmp4);
            if (iter5.done) {
              iter4 = iter5;
            } else {
              const result2 = HermesBuiltin.generatorSetDelegated();
              tmp30 = yield iter5;
            }
          }
        }
      }
      const defaultResult = closure_2_11.default(closure_2_82(arg0), closure_2_10.default);
    } else {
      const reader = arg0.getReader();
      try {
        if (iter.done) {
          yield closure_2_10.default(reader.cancel());
        } else {
          yield closure_2_10.default(reader.cancel());
          return yield tmp9;
        }
        iter = yield closure_2_10.default(reader.read());
      } catch (tmp17) {
        yield closure_2_10.default(obj.cancel());
        throw tmp17;
      }
    }
  });
  return function readStream(arg0) {
    return callback(...arguments);
  };
})();
function trackStream(arg0, arg1, arg2, arg3) {
  closure_0 = arg2;
  closure_1 = arg3;
  closure_2 = callback2(arg0, arg1);
  c3 = 0;
  function _onFinish(arg0) {
    if (!c4) {
      c4 = true;
      if (callback) {
        callback(arg0);
      }
    }
  }
  obj = {
    pull: (() => {
      closure_0 = closure_0.default(async (arg0) => {
        try {
          const iter = yield closure_2_2.next();
          const value = iter.value;
          if (iter.done) {
            closure_2_5();
            arg0.close();
          } else {
            if (callback) {
              sum = sum + tmp4;
              callback(sum);
            }
            const _Uint8Array = Uint8Array;
            const uint8Array = new Uint8Array(value);
            arg0.enqueue(uint8Array);
          }
        } catch (tmp22) {
          closure_2_5(tmp22);
          throw tmp22;
        }
      });
      return function pull(arg0) {
        return callback(...arguments);
      };
    })(),
    cancel(arg0) {
      _onFinish(arg0);
      return closure_2.return();
    }
  };
  obj = { highWaterMark: 2 };
  const readableStream = new ReadableStream(obj, obj);
  return readableStream;
}
let c62 = 65536;
const isFunction = obj.isFunction;
function encodeUTF8(arg0) {
  return encodeURIComponent(arg0).replace(/%([0-9A-F]{2})/gi, (arg0, arg1) => String.fromCharCode(parseInt(arg1, 16)));
}
function decodeURIComponentSafe(arg0) {
  if (obj.isString(arg0)) {
    try {
      const _decodeURIComponent = decodeURIComponent;
      return decodeURIComponent(arg0);
    } catch (err) {
      return tmp;
    }
  } else {
    return arg0;
  }
}
function test(replaced) {
  let sum;
  try {
    const length = arguments.length;
    let _Array = Array;
    let num2 = 0;
    if (length > 1) {
      num2 = tmp - 1;
    }
    const prototype = _Array.prototype;
    _Array = new _Array(num2);
    let num3 = 1;
    if (1 < length) {
      do {
        let tmp10 = _Array;
        let tmp11 = num3;
        tmp8[num3 - 1] = arguments[num3];
        sum = num3 + 1;
        num3 = sum;
        let tmp13 = length;
      } while (sum < tmp);
    }
    return replaced.apply(undefined, _Array);
  } catch (err) {
    return false;
  }
}
function maybeWithAuthCredentials(arr) {
  const index = arr.indexOf("://");
  let substr = arr;
  if (index !== -1) {
    substr = arr.slice(index + 3);
  }
  let hasItem = substr.includes("@");
  if (!hasItem) {
    hasItem = substr.includes(":");
  }
  return hasItem;
}
function factory(closure_0, metroRequire, metroImportDefault, metroImportAll, publicModule, exports, dependencyMap) {
  if (obj.global !== undefined) {
    if (obj.global !== null) {
      let _globalThis = obj.global;
    }
    const _ReadableStream = _globalThis.ReadableStream;
    fn = _globalThis.TextEncoder;
    merge = obj.merge;
    obj = { skipUndefined: true };
    obj = {};
    ({ Request: obj2.Request, Response: obj2.Response } = _globalThis);
    const callResult = merge.call(obj, obj, closure_0);
    let _fetch = callResult.fetch;
    const _Request = callResult.Request;
    const _Response = callResult.Response;
    if (_fetch) {
      let tmp8 = isFunction(_fetch);
    } else {
      const _fetch2 = fetch;
      tmp8 = typeof fetch === "function";
    }
    let tmp11 = isFunction(_Request);
    closure_5 = tmp11;
    let fn2 = isFunction(_Response);
    if (tmp8) {
      let tmp13 = tmp8;
      if (tmp8) {
        tmp13 = isFunction(_ReadableStream);
      }
      if (!tmp8) {
        closure_6 = tmp8;
        if (tmp11) {
          tmp11 = tmp13;
        }
        if (tmp11) {
          tmp11 = test(() => {
            c0 = false;
            obj = { body: new c0(), method: "POST" };
            Object.defineProperty(obj, "duplex", {
              get: () => {
                c0 = true;
                return "half";
              },
              set: undefined
            });
            const tmp2 = new _Request(closure_1_45.origin, obj);
            const headers = tmp2.headers;
            const hasItem = headers.has("Content-Type");
            if (tmp2.body != null) {
              const body = tmp2.body;
              body.cancel();
            }
            let tmp5 = c0;
            if (c0) {
              tmp5 = !hasItem;
            }
            return tmp5;
          });
        }
        closure_7 = tmp11;
        if (fn2) {
          fn2 = tmp13;
        }
        if (fn2) {
          fn2 = test(() => closure_1_30.isReadableStream(new _Response("").body));
        }
        obj = {};
        if (fn2) {
          fn2 = (body) => body.body;
        }
        obj.stream = fn2;
        if (tmp8) {
          (() => {
            const items = ["text", "arrayBuffer", "blob", "formData", "stream"];
            const item = items.forEach((arg0) => {
              closure_0 = arg0;
              if (!closure_1_9[arg0]) {
                closure_1_9[arg0] = (closure_1) => {
                  obj = closure_1;
                  if (closure_1) {
                    obj = closure_1[closure_0];
                  }
                  if (obj) {
                    return obj.call(closure_1);
                  } else {
                    const _HermesInternal = HermesInternal;
                    const prototype = closure_3_41.prototype;
                    const tmp9 = new closure_3_41("Response type '" + closure_0 + "' is not supported", closure_3_41.ERR_NOT_SUPPORT, arg1);
                    throw tmp9;
                  }
                };
              }
            });
          })();
        }
        closure_10 = (() => {
          closure_0 = _ReadableStream.default(async (arg0) => {
            if (arg0 == null) {
              return 0;
            } else if (closure_3_30.isBlob(arg0)) {
              return arg0.size;
            } else if (closure_3_30.isSpecCompliantForm(arg0)) {
              obj = { method: "POST", body: arg0 };
              const prototype = closure_2_3.prototype;
              const obj2 = new closure_2_3(closure_3_45.origin, obj);
              return yield obj2.arrayBuffer().byteLength;
            } else {
              if (!closure_3_30.isArrayBufferView(arg0)) {
                if (!closure_3_30.isArrayBuffer(arg0)) {
                  let text = arg0;
                  if (closure_3_30.isURLSearchParams(arg0)) {
                    text = `${arg0}`;
                  }
                  if (closure_3_30.isString(text)) {
                    return yield closure_2_6(text).byteLength;
                  }
                }
              }
              return arg0.byteLength;
            }
          });
          return function getBodyLength(arg0) {
            return callback(...arguments);
          };
        })();
        closure_11 = (() => {
          closure_0 = _ReadableStream.default(async (arg0, arg1) => {
            if (obj) {
              return obj.resume();
            } else {
              let toFiniteNumberResult = closure_3_30.toFiniteNumber(arg0.getContentLength());
              if (toFiniteNumberResult == null) {
                toFiniteNumberResult = closure_2_10(arg1);
              }
              return toFiniteNumberResult;
            }
          });
          return function resolveBodyLength(arg0, arg1) {
            return callback(...arguments);
          };
        })();
        return (() => {
          closure_0 = _ReadableStream.default(async (arg0) => {
            closure_0 = arg0;
            maxContentLength = undefined;
            c2 = undefined;
            closure_3 = undefined;
            let deleteResult1;
            fn = undefined;
            deleteResult1 = undefined;
            let obj2;
            closure_8 = undefined;
            closure_9 = undefined;
            deleteResult1 = undefined;
            const tmp6 = closure_3_125(arg0);
            ({ url, method, data, cancelToken, onDownloadProgress, onUploadProgress, responseType, headers, withCredentials } = tmp6);
            let str = "same-origin";
            ({ signal, timeout } = tmp6);
            if (withCredentials !== undefined) {
              str = withCredentials;
            }
            let tmp7 = str;
            ({ fetchOptions, maxContentLength } = tmp6);
            const maxBodyLength = tmp6.maxBodyLength;
            let isNumberResult = closure_3_30.isNumber(maxContentLength);
            if (isNumberResult) {
              isNumberResult = tmp8 > -1;
            }
            c2 = isNumberResult;
            let isNumberResult1 = closure_3_30.isNumber(maxBodyLength);
            if (isNumberResult1) {
              isNumberResult1 = maxBodyLength > -1;
            }
            own = function own(auth) {
              let tmp;
              if (closure_4_30.hasOwnProp(table, auth)) {
                tmp = table[auth];
              }
              return tmp;
            };
            _fetch = closure_2_2;
            if (!closure_2_2) {
              _fetch = fetch;
            }
            let str2 = "text";
            if (responseType) {
              const text = `${responseType}`;
              str2 = `${responseType}`.toLowerCase();
            }
            const items = [signal, ];
            let toAbortSignalResult = cancelToken;
            if (cancelToken) {
              toAbortSignalResult = cancelToken.toAbortSignal();
            }
            items[1] = toAbortSignalResult;
            const tmp18Result = closure_3_57(items, timeout);
            closure_3 = tmp18Result;
            deleteResult1 = null;
            if (tmp18Result) {
              const unsubscribe = tmp21.unsubscribe;
            }
            fn = tmp18Result;
            if (tmp18Result) {
              fn = () => {
                closure_3.unsubscribe();
              };
            }
            try {
              let tmp23;
              const ownResult = own("auth");
              if (ownResult) {
                const username = tmp26.username;
                let str4 = username;
                if (!username) {
                  str4 = "";
                }
                const password = ownResult.password;
                let str5 = password;
                if (!password) {
                  str5 = "";
                }
                obj = { username: str4, password: str5 };
                tmp23 = obj;
              }
              if (closure_3_67(url)) {
                const _URL = URL;
                const uRL = new URL(url, closure_3_45.origin);
                const user = uRL;
                if (!tmp23) {
                  if (user.username) {
                    obj = { username: closure_3_65(user.username), password: closure_3_65(user.password) };
                    tmp23 = obj;
                    const tmp43 = closure_3_65(user.username);
                  }
                }
                if (user.username) {
                  uRL.username = "";
                  uRL.password = "";
                  url = uRL.href;
                }
              }
              if (tmp23) {
                headers.delete("authorization");
                const username2 = tmp23.username;
                let str8 = username2;
                if (!username2) {
                  str8 = "";
                }
                const password2 = tmp23.password;
                let str10 = password2;
                const text1 = `${str8}:`;
                if (!password2) {
                  str10 = "";
                }
                const result = headers.set("Authorization", "Basic " + btoa(closure_3_64(text1 + str10)));
                const tmp51 = closure_3_64;
              }
              if (tmp11) {
                if (typeof url === "string") {
                  if (url.startsWith("data:")) {
                    if (closure_3_126(url) > tmp8) {
                      deleteResult1 = closure_3_41;
                      deleteResult1 = maxContentLength;
                      deleteResult1 = closure_3_41;
                      deleteResult1 = arg0;
                      deleteResult1 = null;
                      const prototype9 = closure_3_41.prototype;
                      deleteResult1 = new.target;
                      deleteResult1 = new.target;
                      deleteResult1 = new closure_3_41("maxContentLength size of " + tmp8 + " exceeded", closure_3_41.ERR_BAD_RESPONSE, arg0, null);
                      throw deleteResult1;
                    }
                  }
                }
              }
              if (isNumberResult1) {
                if (method !== "get") {
                  if (method !== "head") {
                    const tmp67 = yield closure_2_11(headers, data);
                    if (typeof tmp67 === "number") {
                      const _isFinite = isFinite;
                      if (isFinite(tmp68)) {
                        if (tmp67 > maxBodyLength) {
                          deleteResult1 = closure_3_41;
                          deleteResult1 = arg0;
                          deleteResult1 = null;
                          const prototype8 = closure_3_41.prototype;
                          deleteResult1 = new.target;
                          deleteResult1 = new.target;
                          deleteResult1 = new closure_3_41("Request body larger than maxBodyLength limit", closure_3_41.ERR_BAD_REQUEST, arg0, null);
                          throw deleteResult1;
                        }
                      }
                    }
                  }
                }
              }
              if (onUploadProgress) {
                if (closure_2_7) {
                  if (method !== "get") {
                    deleteResult1 = method;
                    if (method !== "head") {
                      deleteResult1 = closure_2_11;
                      deleteResult1 = headers;
                      deleteResult1 = data;
                      deleteResult1 = yield closure_2_11(headers, data);
                      if (deleteResult1 !== 0) {
                        deleteResult1 = closure_2_3;
                        deleteResult1 = url;
                        obj = { method: "POST", body: null, duplex: "half" };
                        deleteResult1 = data;
                        obj.body = data;
                        const prototype11 = closure_2_3.prototype;
                        deleteResult1 = new.target;
                        deleteResult1 = new.target;
                        deleteResult1 = obj;
                        deleteResult1 = new closure_2_3(url, obj);
                        deleteResult1 = closure_3_30;
                        if (closure_3_30.isFormData(data)) {
                          const headers2 = deleteResult1.headers;
                          const value = headers2.get("content-type");
                          if (value) {
                            headers.setContentType(value);
                          }
                        }
                        if (deleteResult1.body) {
                          const defaultResult = fn2.default(closure_3_50(deleteResult1, closure_3_49(closure_3_51(onUploadProgress))), 2);
                          data = closure_3_61(deleteResult1.body, closure_3_62, defaultResult[0], defaultResult[1]);
                        }
                      }
                    }
                  }
                }
              }
              if (!closure_3_30.isString(tmp7)) {
                let str20 = "omit";
                if (tmp7) {
                  str20 = "include";
                }
                tmp7 = str20;
              }
              let tmp92 = closure_2_5;
              if (closure_2_5) {
                tmp92 = "credentials" in closure_2_3.prototype;
              }
              if (closure_3_30.isFormData(data)) {
                const contentType = headers.getContentType();
                if (contentType) {
                  obj2 = /^multipart\/form-data/i;
                  deleteResult1 = contentType;
                  if (obj2.test(tmp99)) {
                    obj3 = /boundary=/i;
                    if (!obj3.test(contentType)) {
                      deleteResult1 = headers;
                      deleteResult1 = headers.delete("content-type");
                    }
                  }
                }
              }
              deleteResult1 = headers;
              deleteResult1 = headers.set("User-Agent", "axios/1.17.0", false);
              deleteResult1 = globalThis;
              deleteResult1 = fetchOptions;
              const obj1 = {};
              deleteResult1 = tmp21;
              obj1.signal = tmp21;
              deleteResult1 = method;
              obj1.method = method.toUpperCase();
              deleteResult1 = closure_3_91;
              obj1.headers = closure_3_91(headers.normalize());
              obj1.body = data;
              obj1.duplex = "half";
              deleteResult1 = tmp92;
              deleteResult1 = undefined;
              if (tmp92) {
                deleteResult1 = tmp7;
              }
              obj1.credentials = deleteResult1;
              deleteResult1 = Object.assign({}, fetchOptions, obj1);
              deleteResult1 = closure_2_5;
              deleteResult1 = closure_2_5;
              if (closure_2_5) {
                deleteResult1 = closure_2_3;
                deleteResult1 = url;
                const prototype2 = closure_2_3.prototype;
                deleteResult1 = new.target;
                deleteResult1 = new.target;
                deleteResult1 = new closure_2_3(url, deleteResult1);
              }
              deleteResult1 = closure_2_5;
              if (closure_2_5) {
                deleteResult1 = _fetch(deleteResult1, fetchOptions);
              } else {
                deleteResult1 = _fetch(url, deleteResult1);
              }
              deleteResult1 = yield deleteResult1;
              deleteResult1 = isNumberResult;
              if (tmp11) {
                deleteResult1 = closure_3_30;
                const headers3 = deleteResult1.headers;
                deleteResult1 = closure_3_30.toFiniteNumber(headers3.get("content-length"));
                if (deleteResult1 != null) {
                  deleteResult1 = maxContentLength;
                  if (deleteResult1 > tmp8) {
                    deleteResult1 = closure_3_41;
                    deleteResult1 = maxContentLength;
                    deleteResult1 = closure_3_41;
                    deleteResult1 = arg0;
                    const prototype7 = closure_3_41.prototype;
                    deleteResult1 = new.target;
                    deleteResult1 = new.target;
                    deleteResult1 = new closure_3_41("maxContentLength size of " + tmp8 + " exceeded", closure_3_41.ERR_BAD_RESPONSE, arg0, deleteResult1);
                    throw deleteResult1;
                  }
                }
              }
              deleteResult1 = closure_2_8;
              deleteResult1 = closure_2_8;
              if (closure_2_8) {
                deleteResult1 = str2;
                deleteResult1 = tmp17 === "stream";
                if (!deleteResult1) {
                  deleteResult1 = str2;
                  deleteResult1 = tmp17 === "response";
                }
              }
              deleteResult1 = closure_2_8;
              if (closure_2_8) {
                if (deleteResult1.body) {
                  deleteResult1 = onDownloadProgress;
                  if (!onDownloadProgress) {
                    deleteResult1 = isNumberResult;
                    if (!tmp11) {
                      if (deleteResult1) {
                        deleteResult1 = fn;
                      }
                    }
                  }
                  obj2 = {};
                  const items1 = ["status", "statusText", "headers"];
                  deleteResult1 = obj2;
                  deleteResult1 = items1.forEach((arg0) => {
                    obj2[arg0] = deleteResult1[arg0];
                  });
                  deleteResult1 = closure_3_30;
                  const headers4 = deleteResult1.headers;
                  const toFiniteNumber = closure_3_30.toFiniteNumber;
                  deleteResult1 = onDownloadProgress;
                  deleteResult1 = onDownloadProgress;
                  if (onDownloadProgress) {
                    deleteResult1 = closure_3_50;
                    deleteResult1 = closure_3_49;
                    deleteResult1 = closure_3_51;
                    deleteResult1 = closure_3_50(deleteResult1, closure_3_49(closure_3_51(onDownloadProgress), true));
                  }
                  let items2 = deleteResult1;
                  if (!deleteResult1) {
                    items2 = [];
                  }
                  deleteResult1 = items2;
                  deleteResult1 = fn2;
                  deleteResult1 = fn2.default(items2, 2);
                  closure_8 = deleteResult1[0];
                  closure_9 = deleteResult1[1];
                  deleteResult1 = closure_2_4;
                  deleteResult1 = closure_3_61;
                  deleteResult1 = closure_3_62;
                  deleteResult1 = obj2;
                  const prototype3 = closure_2_4.prototype;
                  deleteResult1 = new.target;
                  deleteResult1 = new.target;
                  deleteResult1 = new closure_2_4(closure_3_61(deleteResult1.body, closure_3_62, function onChunkProgress(arg0) {
                    if (c2) {
                      if (arg0 > maxContentLength) {
                        const prototype = closure_4_41.prototype;
                        const tmp11 = new closure_4_41("maxContentLength size of " + maxContentLength + " exceeded", closure_4_41.ERR_BAD_RESPONSE, closure_0, deleteResult1);
                        throw tmp11;
                      }
                    }
                    if (callback) {
                      callback(arg0);
                    }
                  }, () => {
                    if (callback2) {
                      callback2();
                    }
                    if (fn) {
                      fn();
                    }
                  }), deleteResult1);
                }
              }
              deleteResult1 = str2;
              let str30 = tmp17;
              if (!tmp17) {
                str30 = "text";
              }
              deleteResult1 = str30;
              deleteResult1 = str30;
              deleteResult1 = closure_2_9;
              deleteResult1 = closure_3_30;
              deleteResult1 = closure_2_9;
              deleteResult1 = closure_3_30.findKey(closure_2_9, str30);
              let str31 = deleteResult1;
              if (!deleteResult1) {
                str31 = "text";
              }
              deleteResult1 = arg0;
              deleteResult1 = yield deleteResult1[str31](deleteResult1, arg0);
              if (isNumberResult) {
                deleteResult1 = closure_2_8;
                if (!closure_2_8) {
                  if (!deleteResult1) {
                    if (arr4 != null) {
                      if (typeof arr4.byteLength === "number") {
                        let size = deleteResult1.byteLength;
                      } else if (typeof arr4.size === "number") {
                        size = arr4.size;
                      } else if (typeof arr4 === "string") {
                        deleteResult1 = closure_2_1;
                        if (typeof closure_2_1 === "function") {
                          deleteResult1 = closure_2_1;
                          const prototype4 = closure_2_1.prototype;
                          deleteResult1 = new.target;
                          deleteResult1 = new.target;
                          obj7 = new closure_2_1();
                          deleteResult1 = obj7;
                          let length = obj7.encode(arr4).byteLength;
                        } else {
                          length = arr4.length;
                        }
                        size = length;
                      }
                    }
                    deleteResult1 = size;
                    if (typeof size === "number") {
                      deleteResult1 = size;
                      deleteResult1 = maxContentLength;
                      if (size > tmp8) {
                        deleteResult1 = closure_3_41;
                        deleteResult1 = maxContentLength;
                        deleteResult1 = closure_3_41;
                        deleteResult1 = arg0;
                        const prototype5 = closure_3_41.prototype;
                        deleteResult1 = new.target;
                        deleteResult1 = new.target;
                        deleteResult1 = new closure_3_41("maxContentLength size of " + tmp8 + " exceeded", closure_3_41.ERR_BAD_RESPONSE, arg0, deleteResult1);
                        throw deleteResult1;
                      }
                    }
                  }
                }
              }
              deleteResult1 = !deleteResult1;
              if (deleteResult1) {
                deleteResult1 = fn;
              }
              if (deleteResult1) {
                deleteResult1 = fn;
                deleteResult1 = tmp22();
              }
              deleteResult1 = new.target;
              deleteResult1 = new.target;
              return yield new Promise((arg0, arg1) => {
                closure_4_116(arg0, arg1, { data: deleteResult1, headers: closure_4_39.from(deleteResult1.headers), status: deleteResult1.status, statusText: deleteResult1.statusText, config: closure_0, request: deleteResult1 });
              });
            } catch (deleteResult1) {
              deleteResult1 = tmp4;
              if (tmp4) {
                deleteResult1 = tmp4();
              }
              deleteResult1 = tmp3;
              if (tmp3) {
                deleteResult1 = tmp3;
                if (tmp3.aborted) {
                  deleteResult1 = tmp3;
                  deleteResult1 = closure_3_41;
                  if (tmp3.reason instanceof closure_3_41) {
                    const reason = tmp3.reason;
                    deleteResult1 = reason;
                    reason.config = tmp2;
                    if (deleteResult1) {
                      deleteResult1 = reason;
                      deleteResult1.request = deleteResult1;
                    }
                    deleteResult1 = reason;
                    if (deleteResult1 !== deleteResult1) {
                      deleteResult1 = reason;
                      deleteResult1.cause = deleteResult1;
                    }
                    throw reason;
                  }
                }
              }
              if (deleteResult1) {
                if (deleteResult1.name === "TypeError") {
                  if (obj8.test(deleteResult1.message)) {
                    deleteResult1 = globalThis;
                    deleteResult1 = closure_3_41;
                    const ERR_NETWORK = closure_3_41.ERR_NETWORK;
                    let response2 = deleteResult1;
                    deleteResult1 = tmp2;
                    if (deleteResult1) {
                      response2 = deleteResult1.response;
                    }
                    deleteResult1 = response2;
                    const prototype10 = deleteResult1.prototype;
                    deleteResult1 = new.target;
                    deleteResult1 = new.target;
                    deleteResult1 = ERR_NETWORK;
                    deleteResult1 = tmp2;
                    deleteResult1 = new deleteResult1("Network Error", ERR_NETWORK, deleteResult1, deleteResult1, response2);
                    obj3 = {};
                    const cause = deleteResult1.cause;
                    deleteResult1 = cause;
                    obj3.cause = deleteResult1;
                    throw Object.assign(deleteResult1, obj3);
                  }
                  obj8 = /Load failed|fetch/i;
                }
              }
              deleteResult1 = closure_3_41;
              let code = deleteResult1;
              if (deleteResult1) {
                code = deleteResult1.code;
              }
              let response = deleteResult1;
              deleteResult1 = code;
              deleteResult1 = tmp2;
              if (deleteResult1) {
                response = deleteResult1.response;
              }
              deleteResult1 = response;
              deleteResult1 = code;
              deleteResult1 = tmp2;
              throw closure_3_41.from(deleteResult1, deleteResult1, deleteResult1, deleteResult1, response);
            }
          });
          return function(arg0) {
            return callback(...arguments);
          };
        })();
      } else if (typeof fn === "function") {
        let prototype = fn.prototype;
        fn = new fn();
        fn = (fn) => {
          closure_0 = fn;
          return (arg0) => closure_0.encode(arg0);
        };
        let fnResult = fn(fn);
      } else {
        fnResult = (() => {
          closure_0 = _ReadableStream.default(async (arg0) => {
            obj = new closure_2_3(arg0);
            const uint8Array = new Uint8Array(yield new closure_2_3(arg0).arrayBuffer());
            return uint8Array;
          });
          return function(arg0) {
            return callback(...arguments);
          };
        })();
      }
    } else {
      return false;
    }
  }
  _globalThis = globalThis;
}
let map = new Map();
function getFetch(env) {
  if (env) {
    env = env.env;
  }
  if (!env) {
    env = {};
  }
  const items = [, , ];
  ({ Request: arr[0], Response: arr[1], fetch: arr[2] } = env);
  let obj2 = map;
  let diff = tmp - 1;
  let tmp3;
  if (+items.length) {
    const value = obj2.get(tmp4);
    while (value !== undefined) {
      let tmp13 = +diff;
      diff = tmp13 - 1;
      obj2 = value;
      tmp3 = value;
    }
    let set = obj2.set;
    if (diff) {
      const _Map = Map;
      map = new Map();
    } else {
      map = factory(env);
    }
    set = set(tmp4, map);
  }
  return tmp3;
}
let _fetch = getFetch();
const obj6 = {
  http: null,
  xhr: typeof XMLHttpRequest !== "undefined" && ((arg0) => {
    closure_0 = arg0;
    return new Promise(function dispatchXhrRequest(arg0, arg1) {
      closure_0 = arg0;
      closure_1 = arg1;
      function done() {
        if (callback2) {
          callback2();
        }
        if (callback3) {
          callback3();
        }
        if (request.cancelToken) {
          const cancelToken = request.cancelToken;
          cancelToken.unsubscribe(onCanceled);
        }
        if (request.signal) {
          const signal = request.signal;
          const removed = signal.removeEventListener("abort", onCanceled);
        }
      }
      function onloadend() {
        if (xMLHttpRequest) {
          let allResponseHeaders = "getAllResponseHeaders" in xMLHttpRequest;
          const from = closure_2_39.from;
          if (allResponseHeaders) {
            allResponseHeaders = xMLHttpRequest.getAllResponseHeaders();
          }
          if (responseType) {
            if (responseType !== "text") {
              if (responseType !== "json") {
                let responseText = xMLHttpRequest.response;
              }
              obj = { data: responseText, status: xMLHttpRequest.status, statusText: xMLHttpRequest.statusText, headers: tmp5, config: closure_0, request: xMLHttpRequest };
              closure_2_116(function _resolve(arg0) {
                closure_1_0(arg0);
                closure_1_8();
              }, function _reject(arg0) {
                closure_1_1(arg0);
                closure_1_8();
              }, obj);
              xMLHttpRequest = null;
            }
          }
          responseText = xMLHttpRequest.responseText;
        }
      }
      const request = closure_1_125(closure_0);
      let data = request.data;
      const normalizeResult = closure_1_39.from(request.headers).normalize();
      const responseType = request.responseType;
      ({ onUploadProgress, onDownloadProgress } = request);
      let xMLHttpRequest = new XMLHttpRequest();
      xMLHttpRequest.open(request.method.toUpperCase(), request.url, true);
      xMLHttpRequest.timeout = request.timeout;
      if ("onloadend" in xMLHttpRequest) {
        tmp3.onloadend = onloadend;
      } else {
        tmp3.onreadystatechange = function handleLoad() {
          if (xMLHttpRequest) {
            if (xMLHttpRequest.readyState === 4) {
              if (xMLHttpRequest.status === 0) {
                if (xMLHttpRequest.responseURL) {
                  const responseURL = xMLHttpRequest.responseURL;
                }
              }
              const _setTimeout = setTimeout;
              const timerId = setTimeout(onloadend);
            }
          }
        };
      }
      xMLHttpRequest.onabort = function handleAbort() {
        if (c7) {
          const prototype = closure_2_41.prototype;
          const tmp7 = new closure_2_41("Request aborted", closure_2_41.ECONNABORTED, closure_0, c7);
          callback(tmp7);
          done();
          c7 = null;
        }
      };
      xMLHttpRequest.onerror = function handleError(arg0) {
        let tmp = arg0;
        let str = "Network Error";
        if (arg0) {
          str = "Network Error";
          if (tmp.message) {
            str = tmp.message;
          }
        }
        const tmp2 = new closure_2_41(str, closure_2_41.ERR_NETWORK, closure_0, c7);
        if (!tmp) {
          tmp = null;
        }
        tmp2.event = tmp;
        callback(tmp2);
        done();
        c7 = null;
      };
      xMLHttpRequest.ontimeout = function handleTimeout() {
        let str = "timeout exceeded";
        if (request.timeout) {
          str = `${"timeout of " + request.timeout}ms exceeded`;
        }
        if (request.timeoutErrorMessage) {
          str = request.timeoutErrorMessage;
        }
        let tmp5 = closure_2_41;
        tmp5 = new tmp5(str, request.transitional || closure_2_44.clarifyTimeoutError ? closure_2_41.ETIMEDOUT : closure_2_41.ECONNABORTED, closure_0, c7);
        closure_1(tmp5);
        done();
        c7 = null;
      };
      if (data === undefined) {
        normalizeResult.setContentType(null);
      }
      if ("setRequestHeader" in xMLHttpRequest) {
        const item = closure_1_30.forEach(closure_1_91(normalizeResult), function setRequestHeader(arg0, arg1) {
          xMLHttpRequest.setRequestHeader(arg1, arg0);
        });
      }
      if (!closure_1_30.isUndefined(request.withCredentials)) {
        xMLHttpRequest.withCredentials = request.withCredentials;
      }
      if (responseType) {
        if (responseType !== "json") {
          xMLHttpRequest.responseType = request.responseType;
        }
      }
      if (onDownloadProgress) {
        const defaultResult = closure_1_8.default(closure_1_49(onDownloadProgress, true), 2);
        closure_6 = defaultResult[1];
        const listener = xMLHttpRequest.addEventListener("progress", defaultResult[0]);
      }
      if (onUploadProgress) {
        if (xMLHttpRequest.upload) {
          const defaultResult1 = closure_1_8.default(closure_1_49(onUploadProgress), 2);
          closure_5 = tmp20;
          const upload = xMLHttpRequest.upload;
          const listener1 = upload.addEventListener("progress", defaultResult1[0]);
          const upload2 = xMLHttpRequest.upload;
          const listener2 = upload2.addEventListener("loadend", tmp20);
        }
      }
      if (request.cancelToken) {
        function onCanceled(arg0) {
          let tmp = arg0;
          if (xMLHttpRequest) {
            if (!tmp) {
              const prototype = closure_2_48.prototype;
              tmp = new closure_2_48(null, closure_0, xMLHttpRequest);
            }
            closure_1(tmp);
            xMLHttpRequest.abort();
            done();
            xMLHttpRequest = null;
          }
        }
        if (request.cancelToken) {
          let cancelToken = request.cancelToken;
          const subscription = cancelToken.subscribe(onCanceled);
        }
        if (request.signal) {
          if (request.signal.aborted) {
            onCanceled();
          } else {
            let signal = request.signal;
            const listener3 = signal.addEventListener("abort", onCanceled);
          }
        }
      }
      const tmp28 = closure_1_117(request.url);
      if (tmp28) {
        const protocols = closure_1_45.protocols;
        if (!protocols.includes(tmp28)) {
          let prototype = closure_1_41.prototype;
          const tmp35 = new closure_1_41("Unsupported protocol " + tmp28 + ":", closure_1_41.ERR_BAD_REQUEST, closure_0);
          arg1(tmp35);
        }
      }
      if (!data) {
        data = null;
      }
      xMLHttpRequest.send(data);
    });
  }),
  fetch: { get: getFetch }
};
let item1 = obj.forEach(obj6, (arg0, arg1) => {
  obj = arg0;
  let definePropertyResult1 = arg1;
  if (arg0) {
    try {
      const _Object = Object;
      obj = Object.create(null);
      obj.value = definePropertyResult1;
      Object.defineProperty(obj, "name", obj);
      const _Object2 = Object;
      obj = Object.create(null);
      obj.value = definePropertyResult1;
      definePropertyResult1 = Object.defineProperty(obj, "adapterName", obj);
      const tmp10 = obj;
    } catch (err) {
    }
  }
});
function renderReason(arg0) {
  return "- " + arg0;
}
function isResolvedHandle(arg0) {
  let isFunctionResult = obj.isFunction(arg0);
  if (!isFunctionResult) {
    isFunctionResult = arg0 === null;
  }
  if (!isFunctionResult) {
    isFunctionResult = arg0 === false;
  }
  return isFunctionResult;
}
let obj7 = {
  getAdapter: function getAdapter$1(arg0, arg1) {
    let str;
    let arr = arg0;
    if (!obj.isArray(arg0)) {
      const items = [arg0];
      arr = items;
    }
    obj = {};
    let num = 0;
    let tmp;
    if (0 < arr.length) {
      while (true) {
        let tmp2 = arr[num];
        let tmp3 = isResolvedHandle;
        let tmp4 = num;
        let obj2 = tmp2;
        if (!isResolvedHandle(tmp2)) {
          let tmp6 = obj6;
          let _String = String;
          str = String(tmp2);
          let text = str;
          if (obj6[str.toLowerCase(str)] === undefined) {
            break;
          }
        }
        let value = obj2;
        if (!obj2) {
          if (!text) {
            text = `#${num}`;
          }
          obj[text] = value;
          num = num + 1;
          tmp = value;
        } else {
          let tmp13 = obj;
          tmp = obj2;
          if (!obj.isFunction(obj2)) {
            value = obj2.get(arg1);
            tmp = value;
          }
        }
      }
      const _HermesInternal = HermesInternal;
      const prototype = ctor.prototype;
      const tmp10 = new ctor("Unknown adapter '" + str + "'");
      throw tmp10;
    }
    if (tmp) {
      return tmp;
    } else {
      const _Object = Object;
      const entries = Object.entries(obj);
      let mapped = entries.map((arg0) => {
        const defaultResult = closure_1_8.default(arg0, 2);
        let str = "is not available in the build";
        const combined = "adapter " + defaultResult[0] + " ";
        if (defaultResult[1] === false) {
          str = "is not supported by the environment";
        }
        return combined + str;
      });
      if (!length) {
        const prototype2 = ctor.prototype;
        const tmp21 = new ctor("There is no suitable adapter to dispatch the request " + "as no adapter specified", "ERR_NOT_SUPPORT");
        throw tmp21;
      } else if (mapped.length > 1) {
        mapped = mapped.map(renderReason);
        let text1 = `since :
    ${arr4.join("\n")}`;
      } else {
        text1 = ` ${renderReason(arr4[0])}`;
      }
    }
  },
  adapters: obj6
};
obj8 = {};
const items4 = ["object", "boolean", "number", "function", "string", "symbol"];
let item2 = items4.forEach((arg0, arg1) => {
  closure_0 = arg0;
  closure_1 = arg1;
  obj8[arg0] = function validator(arg0) {
    let text = typeof arg0 === closure_0;
    if (!text) {
      let str = " ";
      if (closure_1 < 1) {
        str = "n ";
      }
      text = `a${str}${closure_0}`;
    }
    return text;
  };
});
let closure_75 = {};
obj8.transitional = function transitional(boolean) {
  closure_0 = boolean;
  closure_1 = arg1;
  closure_2 = arg2;
  function formatMessage(arg0, arg1) {
    let str = "";
    const text = `[Axios v1.17.0] Transitional option '${arg0}'${arg1}`;
    if (closure_2) {
      str = `. ${closure_2}`;
    }
    return text + str;
  }
  return (arg0, arg1, arg2) => {
    if (boolean === false) {
      let tmp12 = closure_1_41;
      let str3 = "";
      if (closure_1) {
        str3 = ` in ${closure_1}`;
      }
      const prototype = tmp12.prototype;
      tmp12 = new tmp12(formatMessage(arg1, " has been removed" + str3), closure_1_41.ERR_DEPRECATED);
      throw tmp12;
    } else {
      if (closure_1) {
        if (!closure_1_75[arg1]) {
          closure_1_75[arg1] = true;
          const _console = console;
          console.warn(formatMessage(arg1, ` has been deprecated since v${closure_1} and will be removed in the near future`));
        }
      }
      let flag2 = true;
      if (boolean) {
        flag2 = boolean(arg0, arg1, arg2);
      }
      return flag2;
    }
  };
};
obj8.spelling = function spelling(baseURL) {
  closure_0 = baseURL;
  return (arg0, arg1) => {
    console.warn("" + arg1 + " is likely a misspelling of " + closure_0);
    return true;
  };
};
const obj9 = {
  assertOptions(paramsSerializer, closure_1, arg2) {
    let tmp;
    if (typeof paramsSerializer !== "object") {
      const prototype3 = ctor.prototype;
      const tmp27 = new ctor("options must be an object", ctor.ERR_BAD_OPTION_VALUE);
      throw tmp27;
    } else {
      const _Object2 = Object;
      const keys = Object.keys(paramsSerializer);
      let diff = tmp30 - 1;
      if (+keys.length > 0) {
        while (true) {
          tmp = keys[diff];
          let _Object = Object;
          let tmp2 = diff;
          let tmp3 = tmp16;
          let tmp4 = tmp17;
          let tmp5;
          if (hasOwnProperty.call(closure_1, tmp)) {
            tmp5 = closure_1[tmp];
          }
          if (tmp5) {
            let tmp12 = paramsSerializer[tmp];
            let tmp13 = tmp12 === undefined || tmp5(tmp12, tmp, paramsSerializer);
            tmp3 = tmp12;
            tmp4 = tmp13;
            if (tmp13 !== true) {
              let tmp18 = ctor;
              let str2 = "option ";
              let str3 = " must be ";
              let tmp19 = ctor;
              let prototype2 = ctor.prototype;
              let tmp20 = new.target;
              let tmp21 = new.target;
              let tmp22 = new ctor("option " + tmp + " must be " + tmp13, ctor.ERR_BAD_OPTION_VALUE);
              let tmp23 = tmp22;
              throw tmp22;
            }
          } else if (arg2 !== true) {
            break;
          }
          let tmp14 = +diff;
          diff = tmp14 - 1;
          tmp16 = tmp3;
          tmp17 = tmp4;
        }
        const prototype = ctor.prototype;
        const tmp10 = new ctor("Unknown option " + tmp, ctor.ERR_BAD_OPTION);
        throw tmp10;
      }
    }
  },
  validators: obj8
};
const validators = obj9.validators;
const tmp54 = (() => {
  class Axios {
    constructor(arg0) {
      obj = arg0;
      self = this;
      defaultResult = closure_1_6.default(this, Axios);
      if (!arg0) {
        obj = {};
      }
      self.defaults = obj;
      obj = {};
      tmp2 = new closure_1_43();
      obj.request = tmp2;
      tmp3 = new closure_1_43();
      obj.response = tmp3;
      self.interceptors = obj;
      return;
    }
  }
  obj = {
    key: "request",
    value: (() => {
      closure_0 = Axios.default(async function(arg0, arg1) {
        const self = this;
        try {
          return yield self._request(arg0, arg1);
        } catch (tmp2) {
          const _Error = Error;
          if (tmp2 instanceof Error) {
            obj = {};
            let tmp6 = obj;
            const _Error2 = Error;
            let _Error3 = Error;
            if (Error.captureStackTrace) {
              _Error3.captureStackTrace(obj);
            } else {
              const prototype = _Error3.prototype;
              _Error3 = new _Error3();
              tmp6 = _Error3;
            }
            let str = "";
            let str2 = "";
            if (tmp6.stack) {
              const stack = tmp6.stack;
              const index = stack.indexOf("\n");
              let substr = str;
              if (index !== -1) {
                const stack1 = tmp6.stack;
                substr = stack1.slice(index + 1);
              }
              str2 = substr;
            }
            try {
              if (tmp3.stack) {
                if (arr3) {
                  const index1 = arr3.indexOf("\n");
                  let num4 = -1;
                  if (index1 !== -1) {
                    num4 = arr3.indexOf("\n", tmp23 + 1);
                  }
                  if (num4 !== -1) {
                    str = arr3.slice(tmp26 + 1);
                  }
                  const _String = String;
                  if (!StringResult.endsWith(str)) {
                    tmp3.stack = tmp3.stack + ("\n" + str2);
                  }
                  StringResult = String(tmp3.stack);
                }
              } else {
                tmp3.stack = arr3;
              }
            } catch (err) {
            }
          }
          throw tmp2;
        }
      });
      return function request(arg0, arg1) {
        return callback(...arguments);
      };
    })()
  };
  let items = [obj, , ];
  obj = {
    key: "_request",
    value: function _request(closure_1, arg1) {
      let sum2;
      obj = arg1;
      const self = this;
      closure_0 = arg1;
      if (typeof closure_1 === "string") {
        if (!obj) {
          obj = {};
        }
        closure_0 = obj;
        obj.url = closure_1;
      } else {
        obj = closure_1;
        if (!closure_1) {
          obj = {};
        }
        closure_0 = obj;
      }
      const tmp = closure_1_123(self.defaults, obj);
      closure_0 = tmp;
      ({ transitional, paramsSerializer, headers } = tmp);
      if (transitional !== undefined) {
        obj = { silentJSONParsing: closure_1_77.transitional(closure_1_77.boolean), forcedJSONParsing: closure_1_77.transitional(closure_1_77.boolean), clarifyTimeoutError: closure_1_77.transitional(closure_1_77.boolean), legacyInterceptorReqResOrdering: closure_1_77.transitional(closure_1_77.boolean), advertiseZstdAcceptEncoding: closure_1_77.transitional(closure_1_77.boolean) };
        closure_1_76.assertOptions(transitional, obj, false);
      }
      if (paramsSerializer != null) {
        if (closure_1_30.isFunction(paramsSerializer)) {
          const obj1 = { serialize: paramsSerializer };
          tmp.paramsSerializer = obj1;
        } else {
          const obj2 = { encode: closure_1_77.function, serialize: closure_1_77.function };
          closure_1_76.assertOptions(paramsSerializer, obj2, true);
        }
      }
      if (tmp.allowAbsoluteUrls === undefined) {
        if (self.defaults.allowAbsoluteUrls !== undefined) {
          tmp.allowAbsoluteUrls = self.defaults.allowAbsoluteUrls;
        } else {
          tmp.allowAbsoluteUrls = true;
        }
      }
      closure_1_76.assertOptions(tmp, { baseUrl: closure_1_77.spelling("baseURL"), withXsrfToken: closure_1_77.spelling("withXSRFToken") }, true);
      tmp.method = tmp.method || self.defaults.method || "get".toLowerCase();
      let mergeResult = headers;
      if (headers) {
        mergeResult = closure_1_30.merge(headers.common, headers[tmp.method]);
      }
      if (headers) {
        const item = closure_1_30.forEach(["delete", "get", "head", "post", "put", "patch", "query", "common"], (arg0) => {
          delete tmp2[tmp];
        });
      }
      tmp.headers = closure_1_39.concat(mergeResult, headers);
      const items = [];
      c3 = true;
      const request = self.interceptors.request;
      const item1 = request.forEach(function unshiftRequestInterceptors(runWhen) {
        if (synchronous) {
          synchronous = runWhen.synchronous;
        }
        let legacyInterceptorReqResOrdering = tmp2;
        if (transitional.transitional || closure_2_44) {
          legacyInterceptorReqResOrdering = tmp2.legacyInterceptorReqResOrdering;
        }
        let arr = items;
        if (legacyInterceptorReqResOrdering) {
          arr = arr.unshift(runWhen.fulfilled, runWhen.rejected);
        } else {
          arr = arr.push(runWhen.fulfilled, runWhen.rejected);
        }
      });
      const items1 = [];
      const response = self.interceptors.response;
      const item2 = response.forEach(function pushResponseInterceptors(fulfilled) {
        items1.push(fulfilled.fulfilled, fulfilled.rejected);
      });
      let num = 0;
      if (c3) {
        let tmp40Result = tmp;
        if (num < arr2.length) {
          const sum = tmp37 + 1;
          num = tmp41 + 1;
          while (true) {
            try {
              let tmp43 = tmp40;
              let tmp44 = tmp40Result;
              tmp40Result = tmp40(tmp40Result);
              let tmp45 = num;
              let tmp46 = length2;
              if (num >= tmp32) {
                break;
              }
            } catch (tmp47) {
              let tmp48 = obj6;
              let callResult = obj6.call(self, tmp47);
            }
          }
        }
        try {
          closure_1_128.call(self, tmp40Result);
        } catch (tmp51) {
          return Promise.reject(tmp51);
        }
      } else {
        const items2 = [closure_1_128.bind(self), undefined];
        const unshift = items2.unshift;
        unshift.apply(items2, arr2);
        const push = items2.push;
        push.apply(items2, items1);
        let resolved = Promise.resolve(tmp);
        if (num < items2.length) {
          do {
            let tmp22 = resolved;
            let tmp23 = num;
            let tmp24 = +num;
            let sum1 = tmp24 + 1;
            let tmp26 = sum1;
            let tmp27 = +sum1;
            sum2 = tmp27 + 1;
            num = sum2;
            resolved = resolved.then(items2[tmp24], items2[tmp27]);
            let tmp29 = length;
          } while (sum2 < tmp19);
        }
        return resolved;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "getUri",
    value: function getUri(arg0) {
      const tmp = closure_1_123(this.defaults, arg0);
      return closure_1_108(closure_1_122(tmp.baseURL, tmp.url, tmp.allowAbsoluteUrls), tmp.params, tmp.paramsSerializer);
    }
  };
  items[2] = obj;
  return closure_7.default(Axios, items);
})();
let closure_78 = tmp54;
const item3 = obj.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(arg0) {
  closure_0 = arg0;
  ctor3.prototype[arg0] = function(url) {
    obj = arg1;
    obj = arg1;
    if (!arg1) {
      obj = {};
    }
    obj = { method: closure_0, url };
    if (!obj) {
      obj = {};
    }
    obj.data = obj.data;
    return this.request(closure_1_123(obj, obj));
  };
});
const item4 = obj.forEach(["post", "put", "patch", "query"], function forEachMethodWithData(arg0) {
  closure_0 = arg0;
  function generateHTTPMethod(arg0) {
    closure_0 = arg0;
    return function httpMethod(url, data) {
      obj = arg2;
      if (!arg2) {
        obj = {};
      }
      obj = { method: closure_0 };
      if (closure_0) {
        obj = { "Content-Type": "multipart/form-data" };
        let obj1 = obj;
      } else {
        obj1 = {};
      }
      obj.headers = obj1;
      obj.url = url;
      obj.data = data;
      return this.request(closure_2_123(obj, obj));
    };
  }
  ctor3.prototype[arg0] = generateHTTPMethod();
  if (arg0 !== "query") {
    const text = `${arg0}Form`;
    ctor3.prototype[`${arg0}Form`] = generateHTTPMethod(true);
  }
});
const obj10 = { Continue: 100, SwitchingProtocols: 101, Processing: 102, EarlyHints: 103, Ok: 200, Created: 201, Accepted: 202, NonAuthoritativeInformation: 203, NoContent: 204, ResetContent: 205, PartialContent: 206, MultiStatus: 207, AlreadyReported: 208, ImUsed: 226, MultipleChoices: 300, MovedPermanently: 301, Found: 302, SeeOther: 303, NotModified: 304, UseProxy: 305, Unused: 306, TemporaryRedirect: 307, PermanentRedirect: 308, BadRequest: 400, Unauthorized: 401, PaymentRequired: 402, Forbidden: 403, NotFound: 404, MethodNotAllowed: 405, NotAcceptable: 406, ProxyAuthenticationRequired: 407, RequestTimeout: 408, Conflict: 409, Gone: 410, LengthRequired: 411, PreconditionFailed: 412, PayloadTooLarge: 413, UriTooLong: 414, UnsupportedMediaType: 415, RangeNotSatisfiable: 416, ExpectationFailed: 417, ImATeapot: 418, MisdirectedRequest: 421, UnprocessableEntity: 422, Locked: 423, FailedDependency: 424, TooEarly: 425, UpgradeRequired: 426, PreconditionRequired: 428, TooManyRequests: 429, RequestHeaderFieldsTooLarge: 431, UnavailableForLegalReasons: 451, InternalServerError: 500, NotImplemented: 501, BadGateway: 502, ServiceUnavailable: 503, GatewayTimeout: 504, HttpVersionNotSupported: 505, VariantAlsoNegotiates: 506, InsufficientStorage: 507, LoopDetected: 508, NotExtended: 510, NetworkAuthenticationRequired: 511, WebServerIsDown: 521, ConnectionTimedOut: 522, OriginIsUnreachable: 523, TimeoutOccurred: 524, SslHandshakeFailed: 525, InvalidSslCertificate: 526 };
const kindOfTestResult8 = kindOfTest("AsyncFunction");
obj4 = { FormData: merged.classes.FormData, Blob: merged.classes.Blob };
const tmp49 = typeof XMLHttpRequest !== "undefined" && ((arg0) => {
  closure_0 = arg0;
  return new Promise(function dispatchXhrRequest(arg0, arg1) {
    closure_0 = arg0;
    closure_1 = arg1;
    function done() {
      if (callback2) {
        callback2();
      }
      if (callback3) {
        callback3();
      }
      if (request.cancelToken) {
        const cancelToken = request.cancelToken;
        cancelToken.unsubscribe(onCanceled);
      }
      if (request.signal) {
        const signal = request.signal;
        const removed = signal.removeEventListener("abort", onCanceled);
      }
    }
    function onloadend() {
      if (xMLHttpRequest) {
        let allResponseHeaders = "getAllResponseHeaders" in xMLHttpRequest;
        const from = closure_2_39.from;
        if (allResponseHeaders) {
          allResponseHeaders = xMLHttpRequest.getAllResponseHeaders();
        }
        if (responseType) {
          if (responseType !== "text") {
            if (responseType !== "json") {
              let responseText = xMLHttpRequest.response;
            }
            obj = { data: responseText, status: xMLHttpRequest.status, statusText: xMLHttpRequest.statusText, headers: tmp5, config: closure_0, request: xMLHttpRequest };
            closure_2_116(function _resolve(arg0) {
              closure_1_0(arg0);
              closure_1_8();
            }, function _reject(arg0) {
              closure_1_1(arg0);
              closure_1_8();
            }, obj);
            xMLHttpRequest = null;
          }
        }
        responseText = xMLHttpRequest.responseText;
      }
    }
    const request = closure_1_125(closure_0);
    let data = request.data;
    const normalizeResult = closure_1_39.from(request.headers).normalize();
    const responseType = request.responseType;
    ({ onUploadProgress, onDownloadProgress } = request);
    let xMLHttpRequest = new XMLHttpRequest();
    xMLHttpRequest.open(request.method.toUpperCase(), request.url, true);
    xMLHttpRequest.timeout = request.timeout;
    if ("onloadend" in xMLHttpRequest) {
      tmp3.onloadend = onloadend;
    } else {
      tmp3.onreadystatechange = function handleLoad() {
        if (xMLHttpRequest) {
          if (xMLHttpRequest.readyState === 4) {
            if (xMLHttpRequest.status === 0) {
              if (xMLHttpRequest.responseURL) {
                const responseURL = xMLHttpRequest.responseURL;
              }
            }
            const _setTimeout = setTimeout;
            const timerId = setTimeout(onloadend);
          }
        }
      };
    }
    xMLHttpRequest.onabort = function handleAbort() {
      if (c7) {
        const prototype = closure_2_41.prototype;
        const tmp7 = new closure_2_41("Request aborted", closure_2_41.ECONNABORTED, closure_0, c7);
        callback(tmp7);
        done();
        c7 = null;
      }
    };
    xMLHttpRequest.onerror = function handleError(arg0) {
      let tmp = arg0;
      let str = "Network Error";
      if (arg0) {
        str = "Network Error";
        if (tmp.message) {
          str = tmp.message;
        }
      }
      const tmp2 = new closure_2_41(str, closure_2_41.ERR_NETWORK, closure_0, c7);
      if (!tmp) {
        tmp = null;
      }
      tmp2.event = tmp;
      callback(tmp2);
      done();
      c7 = null;
    };
    xMLHttpRequest.ontimeout = function handleTimeout() {
      let str = "timeout exceeded";
      if (request.timeout) {
        str = `${"timeout of " + request.timeout}ms exceeded`;
      }
      if (request.timeoutErrorMessage) {
        str = request.timeoutErrorMessage;
      }
      let tmp5 = closure_2_41;
      tmp5 = new tmp5(str, request.transitional || closure_2_44.clarifyTimeoutError ? closure_2_41.ETIMEDOUT : closure_2_41.ECONNABORTED, closure_0, c7);
      closure_1(tmp5);
      done();
      c7 = null;
    };
    if (data === undefined) {
      normalizeResult.setContentType(null);
    }
    if ("setRequestHeader" in xMLHttpRequest) {
      const item = closure_1_30.forEach(closure_1_91(normalizeResult), function setRequestHeader(arg0, arg1) {
        xMLHttpRequest.setRequestHeader(arg1, arg0);
      });
    }
    if (!closure_1_30.isUndefined(request.withCredentials)) {
      xMLHttpRequest.withCredentials = request.withCredentials;
    }
    if (responseType) {
      if (responseType !== "json") {
        xMLHttpRequest.responseType = request.responseType;
      }
    }
    if (onDownloadProgress) {
      const defaultResult = closure_1_8.default(closure_1_49(onDownloadProgress, true), 2);
      closure_6 = defaultResult[1];
      const listener = xMLHttpRequest.addEventListener("progress", defaultResult[0]);
    }
    if (onUploadProgress) {
      if (xMLHttpRequest.upload) {
        const defaultResult1 = closure_1_8.default(closure_1_49(onUploadProgress), 2);
        closure_5 = tmp20;
        const upload = xMLHttpRequest.upload;
        const listener1 = upload.addEventListener("progress", defaultResult1[0]);
        const upload2 = xMLHttpRequest.upload;
        const listener2 = upload2.addEventListener("loadend", tmp20);
      }
    }
    if (request.cancelToken) {
      function onCanceled(arg0) {
        let tmp = arg0;
        if (xMLHttpRequest) {
          if (!tmp) {
            const prototype = closure_2_48.prototype;
            tmp = new closure_2_48(null, closure_0, xMLHttpRequest);
          }
          closure_1(tmp);
          xMLHttpRequest.abort();
          done();
          xMLHttpRequest = null;
        }
      }
      if (request.cancelToken) {
        let cancelToken = request.cancelToken;
        const subscription = cancelToken.subscribe(onCanceled);
      }
      if (request.signal) {
        if (request.signal.aborted) {
          onCanceled();
        } else {
          let signal = request.signal;
          const listener3 = signal.addEventListener("abort", onCanceled);
        }
      }
    }
    const tmp28 = closure_1_117(request.url);
    if (tmp28) {
      const protocols = closure_1_45.protocols;
      if (!protocols.includes(tmp28)) {
        let prototype = closure_1_41.prototype;
        const tmp35 = new closure_1_41("Unsupported protocol " + tmp28 + ":", closure_1_41.ERR_BAD_REQUEST, closure_0);
        arg1(tmp35);
      }
    }
    if (!data) {
      data = null;
    }
    xMLHttpRequest.send(data);
  });
});
let entries = Object.entries(obj10);
const item5 = entries.forEach((arg0) => {
  const defaultResult = _slicedToArray.default(arg0, 2);
  obj10[defaultResult[1]] = defaultResult[0];
});
const instance = createInstance(obj3);
instance.Axios = tmp54;
instance.CanceledError = tmp43;
instance.CancelToken = (() => {
  class CancelToken {
    constructor(arg0) {
      self = this;
      defaultResult = closure_1_6.default(this, CancelToken);
      if (typeof arg0 !== "function") {
        tmp9 = globalThis;
        _TypeError = TypeError;
        prototype2 = TypeError.prototype;
        tmp10 = new.target;
        str = "executor must be a function.";
        tmp11 = new.target;
        typeError = new TypeError("executor must be a function.");
        tmp13 = typeError;
        throw typeError;
      } else {
        tmp2 = globalThis;
        _Promise = Promise;
        prototype = Promise.prototype;
        tmp3 = new.target;
        tmp4 = new.target;
        promise = new Promise(function promiseExecutor(arg0) {
          closure_0 = arg0;
        });
        tmp6 = promise;
        self.promise = promise;
        promise = self.promise;
        nextPromise = promise.then((arg0) => {
          let tmp6;
          if (self._listeners) {
            let diff = tmp2 - 1;
            if (+self._listeners.length > 0) {
              do {
                let tmp4 = self;
                let _listeners = self._listeners;
                let tmp5 = _listeners[diff](arg0);
                tmp6 = +diff;
                diff = tmp6 - 1;
              } while (tmp6 > 0);
            }
            self._listeners = null;
          }
        });
        self.promise.then = (arg0) => {
          const nextPromise = new Promise((arg0) => {
            const subscription = closure_1_1.subscribe(arg0);
            closure_0 = arg0;
          }).then(arg0);
          nextPromise.cancel = function reject() {
            closure_1_1.unsubscribe(closure_0);
          };
          return nextPromise;
        };
        tmp8 = arg0(function cancel(arg0, arg1, arg2) {
          if (!self.reason) {
            const prototype = closure_2_48.prototype;
            const tmp8 = new closure_2_48(arg0, arg1, arg2);
            self.reason = tmp8;
            callback(self.reason);
          }
        });
        return;
      }
    }
  }
  obj = {
    key: "throwIfRequested",
    value: function throwIfRequested() {
      if (this.reason) {
        throw this.reason;
      }
    }
  };
  let items = [obj, , , ];
  obj = {
    key: "subscribe",
    value: function subscribe(arg0) {
      const self = this;
      if (this.reason) {
        arg0(self.reason);
      } else if (self._listeners) {
        const _listeners = self._listeners;
        _listeners.push(arg0);
      } else {
        const items = [arg0];
        self._listeners = items;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "unsubscribe",
    value: function unsubscribe(arg0) {
      const self = this;
      if (this._listeners) {
        const _listeners = self._listeners;
        const index = _listeners.indexOf(arg0);
        if (index !== -1) {
          const _listeners1 = self._listeners;
          _listeners1.splice(index, 1);
        }
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "toAbortSignal",
    value: function toAbortSignal() {
      const self = this;
      const abortController = new AbortController();
      function abort(arg0) {
        abortController.abort(arg0);
      }
      const subscription = this.subscribe(abort);
      abortController.signal.unsubscribe = () => self.unsubscribe(abort);
      return abortController.signal;
    }
  };
  const items1 = [
    {
      key: "source",
      value: function source() {
        const tmp = new CancelToken(function executor(arg0) {
          closure_0 = arg0;
        });
        return {
          token: new CancelToken(function executor(arg0) {
            closure_0 = arg0;
          }),
          cancel: CancelToken
        };
      }
    }
  ];
  return closure_7.default(CancelToken, items, items1);
})();
instance.isCancel = isCancel$1;
instance.VERSION = "1.17.0";
instance.toFormData = toFormData$1;
instance.AxiosError = tmp32;
instance.Cancel = instance.CanceledError;
instance.all = function all(arr) {
  return Promise.all(arr);
};
instance.spread = function spread$1(arg0) {
  closure_0 = arg0;
  return function wrap(arg0) {
    return callback.apply(null, arg0);
  };
};
instance.isAxiosError = function isAxiosError$1(isAxiosError) {
  let isObjectResult = obj.isObject(isAxiosError);
  if (isObjectResult) {
    isObjectResult = isAxiosError.isAxiosError === true;
  }
  return isObjectResult;
};
instance.mergeConfig = mergeConfig$1;
instance.AxiosHeaders = obj3;
instance.formToJSON = (buffer) => {
  let formData = buffer;
  if (obj.isHTMLForm(buffer)) {
    _FormData = FormData;
    formData = new FormData(buffer);
  }
  return formDataToJSON(formData);
};
instance.getAdapter = obj7.getAdapter;
instance.HttpStatusCode = obj10;
instance.default = instance;
({ Axios: exports.Axios, AxiosError: exports.AxiosError, CanceledError: exports.CanceledError, isCancel: exports.isCancel, CancelToken: exports.CancelToken, VERSION: exports.VERSION, all: exports.all, Cancel: exports.Cancel, isAxiosError: exports.isAxiosError, spread: exports.spread, toFormData: exports.toFormData, AxiosHeaders: exports.AxiosHeaders, HttpStatusCode: exports.HttpStatusCode, formToJSON: exports.formToJSON, getAdapter: exports.getAdapter, mergeConfig: exports.mergeConfig, create: exports.create } = instance);

export default instance;
