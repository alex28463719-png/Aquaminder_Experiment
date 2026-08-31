// Module ID: 312
// Function ID: 3646
// Name: _callSuper
// Dependencies: [1, 12, 13, 23, 25, 26, 28, 31, 32, 311, 313, 119]

// Module 312 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _get from "_get" /* 26 */;
import _inherits from "_inherits" /* 28 */;
import _classPrivateFieldBase from "_classPrivateFieldBase" /* 31 */;
import _classPrivateFieldKey2 from "_classPrivateFieldKey" /* 32 */;
import getIteratorFn from "getIteratorFn" /* 119 */;
import _assertNativeAnimatedModule from "_assertNativeAnimatedModule" /* 311 */;
import _callSuper2 from "_callSuper" /* 313 */;
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
function _superPropGet(arg0, arg1, arg2, arg3) {
  closure_0 = arg2;
  let prototype = arg0;
  if (1) {
    prototype = arg0.prototype;
  }
  const defaultResult = closure_4.default(closure_3.default(prototype), arg1, arg2);
  let fn = defaultResult;
  if (2) {
    fn = defaultResult;
    if ("function" === typeof defaultResult) {
      fn = (arg0) => defaultResult.apply(closure_0, arg0);
    }
  }
  return fn;
}
function isPlainObject(ItemSeparatorComponent) {
  let isPrototypeOfResult = ItemSeparatorComponent !== null;
  if (isPrototypeOfResult) {
    isPrototypeOfResult = typeof ItemSeparatorComponent === "object";
  }
  if (isPrototypeOfResult) {
    const _Object = Object;
    const prototypeOf = Object.getPrototypeOf(ItemSeparatorComponent);
    const _Object2 = Object;
    isPrototypeOfResult = prototypeOf.isPrototypeOf(Object);
  }
  if (isPrototypeOfResult) {
    isPrototypeOfResult = !validElement.isValidElement(ItemSeparatorComponent);
  }
  return isPrototypeOfResult;
}
function flatAnimatedNodes(arg0) {
  if (arguments.length > 1) {
    if (arguments[1] !== undefined) {
      let items = arguments[1];
    }
    let num3 = 0;
    if (arguments.length > 2) {
      num3 = 0;
      if (arguments[2] !== undefined) {
        num3 = arguments[2];
      }
    }
    if (num3 >= c9) {
      return items;
    } else {
      if (arg0 instanceof mod.default) {
        items.push(arg0);
      } else {
        const _Array = Array;
        if (Array.isArray(arg0)) {
          for (let num5 = 0; num5 < length2; num5 = num5 + 1) {
            let tmp6 = flatAnimatedNodes;
            let tmp7 = flatAnimatedNodes(arg0[num5], items, num3 + 1);
          }
          length2 = arg0.length;
        } else if (isPlainObject(arg0)) {
          const _Object = Object;
          const keys = Object.keys(arg0);
          for (let num4 = 0; num4 < length; num4 = num4 + 1) {
            let tmp4 = flatAnimatedNodes;
            let tmp5 = flatAnimatedNodes(arg0[keys[num4]], items, num3 + 1);
          }
          length = keys.length;
        }
      }
      return items;
    }
  }
  items = [];
}
function mapAnimatedNodes(arr, arg1, arg2) {
  closure_0 = arg1;
  let num = 0;
  if (arguments.length > 2) {
    num = 0;
    if (arguments[2] !== undefined) {
      num = arguments[2];
    }
  }
  if (num >= c9) {
    return arr;
  } else if (arr instanceof mod.default) {
    return arg1(arr);
  } else {
    const _Array = Array;
    if (Array.isArray(arr)) {
      return arr.map((arg0) => closure_1_17(arg0, closure_0, num + 1));
    } else if (isPlainObject(arr)) {
      const obj = {};
      const _Object = Object;
      const keys = Object.keys(arr);
      for (let num3 = 0; num3 < length; num3 = num3 + 1) {
        let tmp3 = keys[num3];
        let tmp4 = mapAnimatedNodes;
        obj[tmp3] = mapAnimatedNodes(arr[tmp3], arg1, num + 1);
      }
      return obj;
    } else {
      return arr;
    }
  }
}
let closure_0 = module_1(_classCallCheck);
let closure_1 = module_1(_defineProperties);
let closure_2 = module_1(_possibleConstructorReturn);
let closure_3 = module_1(_getPrototypeOf);
let closure_4 = module_1(_get);
let closure_5 = module_1(_inherits);
let closure_6 = module_1(_classPrivateFieldBase);
const _classPrivateFieldKey = module_1(_classPrivateFieldKey2);
let closure_7 = module_1(_assertNativeAnimatedModule);
_callSuper = module_1(_callSuper2);
let closure_8 = _interopRequireWildcard(getIteratorFn);
let c9 = 5;
const field = _classPrivateFieldKey.default("nodes");

export { isPlainObject };
export default ((arg0) => {
  class AnimatedObject {
    constructor(arg0, arg1, arg2) {
      defaultResult = AnimatedObject.default(this, AnimatedObject);
      items = [];
      items[0] = arg2;
      tmp2 = closure_1_12(this, AnimatedObject, items);
      definePropertyResult = Object.defineProperty(tmp2, closure_1_10, { writable: true, value: undefined });
      closure_1_6.default(tmp2, closure_1_10)[closure_1_10] = arg0;
      tmp2._value = arg1;
      return tmp2;
    }
  }
  closure_5.default(AnimatedObject, arg0);
  let obj = {
    key: "__getValue",
    value: function __getValue() {
      return closure_1_17(this._value, (__getValue) => __getValue.__getValue());
    }
  };
  let items = [obj, , , , , , ];
  obj = {
    key: "__getValueWithStaticObject",
    value: function __getValueWithStaticObject(arg0) {
      closure_0 = closure_1_6.default(this, closure_1_10)[closure_1_10];
      c1 = 0;
      return closure_1_17(arg0, () => {
        closure_1 = tmp + 1;
        return table[+closure_1].__getValue();
      });
    }
  };
  items[1] = obj;
  obj = {
    key: "__getAnimatedValue",
    value: function __getAnimatedValue() {
      return closure_1_17(this._value, (__getAnimatedValue) => __getAnimatedValue.__getAnimatedValue());
    }
  };
  items[2] = obj;
  items[3] = {
    key: "__attach",
    value: function __attach() {
      const self = this;
      const arr = closure_1_6.default(this, closure_1_10)[closure_1_10];
      for (let num = 0; num < length; num = num + 1) {
        let obj = arr[num];
        let __addChildResult = obj.__addChild(self);
      }
      closure_1_14(AnimatedObject, "__attach", self, 3)([]);
    }
  };
  items[4] = {
    key: "__detach",
    value: function __detach() {
      const self = this;
      const arr = closure_1_6.default(this, closure_1_10)[closure_1_10];
      for (let num = 0; num < length; num = num + 1) {
        let obj = arr[num];
        let __removeChildResult = obj.__removeChild(self);
      }
      closure_1_14(AnimatedObject, "__detach", self, 3)([]);
    }
  };
  items[5] = {
    key: "__makeNative",
    value: function __makeNative(arg0) {
      const self = this;
      const arr = closure_1_6.default(this, closure_1_10)[closure_1_10];
      for (let num = 0; num < length; num = num + 1) {
        let obj = arr[num];
        let __makeNativeResult = obj.__makeNative(arg0);
      }
      const items = [arg0];
      closure_1_14(AnimatedObject, "__makeNative", self, 3)(items);
    }
  };
  items[6] = {
    key: "__getNativeConfig",
    value: function __getNativeConfig() {
      return { type: "object", value: closure_1_17(this._value, (__getNativeTag) => ({ nodeTag: __getNativeTag.__getNativeTag() })), debugID: this.__getDebugID() };
    }
  };
  const items1 = [
    {
      key: "from",
      value: function from(_value) {
        const arr = closure_1_16(_value);
        if (arr.length === 0) {
          return null;
        } else {
          const prototype = AnimatedObject.prototype;
          const tmp6 = new AnimatedObject(arr, _value);
          return tmp6;
        }
      }
    }
  ];
  return closure_1.default(AnimatedObject, items, items1);
})(_callSuper.default);
