// Module ID: 219
// Function ID: 2473
// Name: _callSuper
// Dependencies: [12, 13, 23, 25, 28, 198]

// Module 219 (_callSuper)
import closure_2 from "_classCallCheck" /* 12 */;
import closure_3 from "_defineProperties" /* 13 */;
import closure_4 from "_possibleConstructorReturn" /* 23 */;
import closure_5 from "_getPrototypeOf" /* 25 */;
import closure_6 from "_inherits" /* 28 */;
import pd from "pd" /* 198 */;

function _callSuper(arg0, arg1, arg2) {
  const obj = callback2(arg1);
  if (_isNativeReflectConstruct()) {
    const _Reflect = Reflect;
    const items = [];
    let constructResult = Reflect.construct(obj, items, callback2(arg0).constructor);
  } else {
    constructResult = obj.apply(arg0, undefined);
  }
  return closure_4(arg0, constructResult);
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
function createAbortSignal() {
  const obj = Object.create(ctor.prototype);
  const _EventTarget = pd.EventTarget;
  _EventTarget.call(obj);
  const result = weakMap.set(obj, false);
  return obj;
}
function abortSignal(dispatchEvent) {
  if (weakMap.get(dispatchEvent) === false) {
    const result = weakMap.set(dispatchEvent, true);
    const obj = { type: "abort" };
    dispatchEvent.dispatchEvent(obj);
  }
}
function getSignal(arg0) {
  const value = weakMap1.get(arg0);
  if (value == null) {
    let _TypeError = TypeError;
    let str = "null";
    if (arg0 !== null) {
      str = typeof arg0;
    }
    const _HermesInternal = HermesInternal;
    const prototype = _TypeError.prototype;
    _TypeError = new _TypeError("Expected 'this' to be an 'AbortController' object, but got " + str);
    throw _TypeError;
  } else {
    return value;
  }
}
const tmp2 = ((EventTarget) => {
  class AbortSignal {
    constructor() {
      tmp = closure_1_2(this, AbortSignal);
      tmp2 = closure_1_10(this, AbortSignal);
      typeError = new TypeError("AbortSignal cannot be constructed directly");
      throw typeError;
    }
  }
  callback3(AbortSignal, EventTarget);
  const items = [
    {
      key: "aborted",
      get() {
        const self = this;
        const value = closure_1_8.get(this);
        if (typeof value !== "boolean") {
          let _TypeError = TypeError;
          let str = "null";
          if (self !== null) {
            str = typeof self;
          }
          const _HermesInternal = HermesInternal;
          const prototype = _TypeError.prototype;
          _TypeError = new _TypeError("Expected 'this' to be an 'AbortSignal' object, but got " + str);
          throw _TypeError;
        } else {
          return value;
        }
      }
    }
  ];
  return callback(AbortSignal, items);
})(pd.EventTarget);
let closure_7 = tmp2;
pd.defineEventAttribute(tmp2.prototype, "abort");
const weakMap = new WeakMap();
Object.defineProperties(tmp2.prototype, { aborted: { enumerable: true } });
if (typeof Symbol === "function") {
  const _Symbol = Symbol;
  if (typeof Symbol.toStringTag === "symbol") {
    const _Object = Object;
    const _Symbol2 = Symbol;
    Object.defineProperty(tmp2.prototype, Symbol.toStringTag, { configurable: true, value: "AbortSignal" });
  }
}
const tmp7 = (() => {
  class AbortController {
    constructor() {
      tmp = closure_1_2(this, AbortController);
      result = closure_1_9.set(this, closure_1_12());
      return;
    }
  }
  let obj = {
    key: "signal",
    get() {
      return closure_1_14(this);
    }
  };
  const items = [obj, ];
  obj = {
    key: "abort",
    value: function abort() {
      closure_1_13(closure_1_14(this));
    }
  };
  items[1] = obj;
  return callback(AbortController, items);
})();
const weakMap1 = new WeakMap();
Object.defineProperties(tmp7.prototype, { signal: { enumerable: true }, abort: { enumerable: true } });
if (typeof Symbol === "function") {
  const _Symbol3 = Symbol;
  if (typeof Symbol.toStringTag === "symbol") {
    const _Object2 = Object;
    const _Symbol4 = Symbol;
    Object.defineProperty(tmp7.prototype, Symbol.toStringTag, { configurable: true, value: "AbortController" });
  }
}
module.exports.default = tmp7;
module.exports.AbortController = tmp7;
module.exports.AbortSignal = tmp2;

export const AbortController = tmp7;
export const AbortSignal = tmp2;
export default tmp7;
