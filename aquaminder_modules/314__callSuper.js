// Module ID: 314
// Function ID: 3687
// Name: _callSuper
// Dependencies: [1, 38, 12, 13, 23, 25, 26, 28, 31, 32, 73, 128, 33, 311, 312, 315, 313]

// Module 314 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _get from "_get" /* 26 */;
import _inherits from "_inherits" /* 28 */;
import _classPrivateFieldBase from "_classPrivateFieldBase" /* 31 */;
import _classPrivateFieldKey2 from "_classPrivateFieldKey" /* 32 */;
import get_Version from "get Version" /* 33 */;
import _slicedToArray from "_slicedToArray" /* 38 */;
import animatedShouldDebounceQueueFlush from "animatedShouldDebounceQueueFlush" /* 73 */;
import flattenStyle from "flattenStyle" /* 128 */;
import _assertNativeAnimatedModule from "_assertNativeAnimatedModule" /* 311 */;
import _callSuper2 from "_callSuper" /* 312 */;
import _callSuper3 from "_callSuper" /* 313 */;
import _callSuper4 from "_callSuper" /* 315 */;
import module_1 from "module_1" /* 1 */;

function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const defaultResult = closure_4.default(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(defaultResult, items, closure_4.default(arg0).constructor);
  } else {
    constructResult = defaultResult.apply(arg0, items);
  }
  return closure_3.default(arg0, constructResult);
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
  const defaultResult = closure_5.default(closure_4.default(prototype), arg1, arg2);
  fn = defaultResult;
  if (2) {
    fn = defaultResult;
    if ("function" === typeof defaultResult) {
      fn = (arg0) => defaultResult.apply(closure_0, arg0);
    }
  }
  return fn;
}
function createAnimatedStyle(arg0, arg1, arg2) {
  let tmp3;
  const items = [];
  const items1 = [];
  const obj = {};
  const keys = Object.keys(arg0);
  let num = 0;
  if (0 < keys.length) {
    while (true) {
      let tmp2 = keys[num];
      tmp3 = arg0[tmp2];
      let tmp4 = num;
      let tmp5 = tmp;
      if (arg1 != null) {
        let tmp6 = fn;
        if (!fn(arg1, tmp2)) {
          let tmp7 = tmp;
          if (arg2) {
            obj[tmp2] = tmp3;
            tmp7 = tmp;
          }
        }
        num = num + 1;
        tmp = tmp7;
      }
      if (tmp3 != null) {
        if (tmp2 === "transform") {
          break;
        }
      }
      let tmp8 = mod;
      let fromResult = tmp3;
      if (!(tmp3 instanceof mod.default)) {
        let tmp10 = mod2;
        let _default = mod2.default;
        fromResult = _default.from(tmp3);
      }
      if (fromResult == null) {
        tmp7 = fromResult;
        if (arg2) {
          obj[tmp2] = tmp3;
          tmp7 = fromResult;
        }
      } else {
        let arr = items.push(tmp2);
        arr = items1.push(fromResult);
        obj[tmp2] = fromResult;
        tmp7 = fromResult;
      }
    }
    if (closure_8.shouldUseAnimatedObjectForTransform()) {
      let fromResult1 = mod2.default.from(tmp3);
      const _default3 = mod2.default;
    } else {
      fromResult1 = mod3.default.from(tmp3);
      const _default2 = mod3.default;
    }
  }
  const items2 = [items, items1, obj];
  return items2;
}
let closure_0 = module_1(_slicedToArray);
let closure_1 = module_1(_classCallCheck);
let closure_2 = module_1(_defineProperties);
let closure_3 = module_1(_possibleConstructorReturn);
let closure_4 = module_1(_getPrototypeOf);
let closure_5 = module_1(_get);
let closure_6 = module_1(_inherits);
let closure_7 = module_1(_classPrivateFieldBase);
const _classPrivateFieldKey = module_1(_classPrivateFieldKey2);
let closure_8 = _interopRequireWildcard(animatedShouldDebounceQueueFlush);
let closure_9 = module_1(flattenStyle);
let closure_10 = module_1(get_Version);
let closure_11 = module_1(_assertNativeAnimatedModule);
let closure_12 = module_1(_callSuper2);
let closure_13 = module_1(_callSuper4);
_callSuper = module_1(_callSuper3);
const field = _classPrivateFieldKey.default("inputStyle");
const field2 = _classPrivateFieldKey.default("nodeKeys");
const field3 = _classPrivateFieldKey.default("nodes");
const field4 = _classPrivateFieldKey.default("style");
let fn = Object.hasOwn;
if (fn == null) {
  fn = (closure_1, key10018) => hasOwnProperty.call(closure_1, key10018);
}

export default ((arg0) => {
  class AnimatedStyle {
    constructor(arg0, arg1, arg2, arg3, arg4) {
      defaultResult = closure_1_1.default(this, AnimatedStyle);
      items = [];
      items[0] = arg4;
      tmp2 = closure_1_21(this, AnimatedStyle, items);
      definePropertyResult = Object.defineProperty(tmp2, closure_1_14, { writable: true, value: undefined });
      definePropertyResult1 = Object.defineProperty(tmp2, closure_1_15, { writable: true, value: undefined });
      definePropertyResult2 = Object.defineProperty(tmp2, closure_1_16, { writable: true, value: undefined });
      definePropertyResult3 = Object.defineProperty(tmp2, closure_1_17, { writable: true, value: undefined });
      closure_1_7.default(tmp2, closure_1_15)[closure_1_15] = arg0;
      closure_1_7.default(tmp2, closure_1_16)[closure_1_16] = arg1;
      closure_1_7.default(tmp2, closure_1_17)[closure_1_17] = arg2;
      closure_1_7.default(tmp2, closure_1_14)[closure_1_14] = arg3;
      return tmp2;
    }
  }
  closure_6.default(AnimatedStyle, arg0);
  let obj = {
    key: "__getValue",
    value: function __getValue() {
      const self = this;
      const obj = {};
      const keys = Object.keys(closure_1_7.default(this, closure_1_17)[closure_1_17]);
      for (let num = 0; num < length; num = num + 1) {
        let tmp = keys[num];
        let tmp2 = closure_1_7;
        let tmp3 = closure_1_17;
        let obj2 = closure_1_7.default(self, closure_1_17)[closure_1_17][tmp];
        let tmp4 = closure_1_11;
        let tmp5 = num;
        if (obj2 instanceof closure_1_11.default) {
          obj[tmp] = obj2.__getValue();
        } else {
          obj[tmp] = obj2;
        }
      }
      let tmp6 = obj;
      if (closure_1_10.default.OS === "web") {
        const items = [closure_1_7.default(self, closure_1_14)[closure_1_14], obj];
        tmp6 = items;
      }
      return tmp6;
    }
  };
  let items = [obj, , , , , , ];
  obj = {
    key: "__getValueWithStaticStyle",
    value: function __getValueWithStaticStyle(style) {
      let obj2;
      let tmp3;
      const self = this;
      const defaultResult = closure_1_9.default(style);
      if (defaultResult == null) {
        let merged = {};
      } else {
        merged = defaultResult;
        if (defaultResult === style) {
          const _Object = Object;
          merged = Object.assign({}, defaultResult);
        }
      }
      const keys = Object.keys(merged);
      let num = 0;
      if (0 < keys.length) {
        while (true) {
          tmp3 = keys[num];
          let tmp4 = closure_1_7;
          let tmp5 = closure_1_17;
          obj2 = closure_1_7.default(self, closure_1_17)[closure_1_17][tmp3];
          let tmp6 = num;
          if (tmp3 === "transform") {
            let tmp7 = closure_1_13;
            if (obj2 instanceof closure_1_13.default) {
              break;
            }
          }
          let tmp8 = closure_1_12;
          if (obj2 instanceof closure_1_12.default) {
            merged[tmp3] = obj2.__getValueWithStaticObject(merged[tmp3]);
          } else {
            let tmp9 = closure_1_11;
            if (obj2 instanceof closure_1_11.default) {
              merged[tmp3] = obj2.__getValue();
            }
          }
          num = num + 1;
        }
        const _Array = Array;
        merged[tmp3] = obj2.__getValueWithStaticTransforms(Array.isArray(merged[tmp3]) ? merged[tmp3] : []);
      }
      let tmp10 = merged;
      if (closure_1_10.default.OS === "web") {
        const items = [closure_1_7.default(self, closure_1_14)[closure_1_14], merged];
        tmp10 = items;
      }
      return tmp10;
    }
  };
  items[1] = obj;
  obj = {
    key: "__getAnimatedValue",
    value: function __getAnimatedValue() {
      const obj = {};
      const arr = closure_1_7.default(this, closure_1_16)[closure_1_16];
      for (let num = 0; num < length; num = num + 1) {
        let obj2 = arr[num];
        obj[tmp[num]] = obj2.__getAnimatedValue();
      }
      return obj;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "__attach",
    value: function __attach() {
      const self = this;
      const arr = closure_1_7.default(this, closure_1_16)[closure_1_16];
      for (let num = 0; num < length; num = num + 1) {
        let obj = arr[num];
        let __addChildResult = obj.__addChild(self);
      }
      closure_1_23(AnimatedStyle, "__attach", self, 3)([]);
    }
  };
  items[4] = {
    key: "__detach",
    value: function __detach() {
      const self = this;
      const arr = closure_1_7.default(this, closure_1_16)[closure_1_16];
      for (let num = 0; num < length; num = num + 1) {
        let obj = arr[num];
        let __removeChildResult = obj.__removeChild(self);
      }
      closure_1_23(AnimatedStyle, "__detach", self, 3)([]);
    }
  };
  items[5] = {
    key: "__makeNative",
    value: function __makeNative(arg0) {
      const self = this;
      const arr = closure_1_7.default(this, closure_1_16)[closure_1_16];
      for (let num = 0; num < length; num = num + 1) {
        let obj = arr[num];
        let __makeNativeResult = obj.__makeNative(arg0);
      }
      const items = [arg0];
      closure_1_23(AnimatedStyle, "__makeNative", self, 3)(items);
    }
  };
  items[6] = {
    key: "__getNativeConfig",
    value: function __getNativeConfig() {
      const self = this;
      let obj = {};
      const arr = closure_1_7.default(this, closure_1_16)[closure_1_16];
      for (let num = 0; num < length; num = num + 1) {
        let obj2 = arr[num];
        let __makeNativeResult = obj2.__makeNative(__getPlatformConfigResult);
        obj[tmp2[num]] = obj2.__getNativeTag();
      }
      obj = { type: "style", style: obj, debugID: self.__getDebugID() };
      return obj;
    }
  };
  const items1 = [
    {
      key: "from",
      value: function from(arg0, arg1) {
        const defaultResult = closure_1_9.default(arg0);
        if (defaultResult == null) {
          return null;
        } else {
          const defaultResult1 = AnimatedStyle.default(closure_1_24(defaultResult, arg1, closure_1_10.default.OS !== "web"), 3);
          const first = defaultResult1[0];
          if (defaultResult1[1].length === 0) {
            return null;
          } else {
            const prototype = AnimatedStyle.prototype;
            const tmp9 = new AnimatedStyle(first, arr, tmp17, arg0);
            return tmp9;
          }
        }
      }
    }
  ];
  return closure_2.default(AnimatedStyle, items, items1);
})(_callSuper.default);
