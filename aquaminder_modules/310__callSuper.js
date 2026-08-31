// Module ID: 310
// Function ID: 3598
// Name: _callSuper
// Dependencies: [1, 38, 12, 13, 23, 25, 26, 28, 31, 32, 304, 311, 312, 314, 20, 316, 57]

// Module 310 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import invariant from "invariant" /* 20 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _get from "_get" /* 26 */;
import _inherits from "_inherits" /* 28 */;
import _classPrivateFieldBase from "_classPrivateFieldBase" /* 31 */;
import _classPrivateFieldKey2 from "_classPrivateFieldKey" /* 32 */;
import _slicedToArray from "_slicedToArray" /* 38 */;
import ensureGlobalEventEmitterListeners from "ensureGlobalEventEmitterListeners" /* 304 */;
import _assertNativeAnimatedModule2 from "_assertNativeAnimatedModule" /* 311 */;
import _callSuper2 from "_callSuper" /* 312 */;
import _callSuper3 from "_callSuper" /* 314 */;
import module_1 from "module_1" /* 1 */;

function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const defaultResult = closure_6.default(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(defaultResult, items, closure_6.default(arg0).constructor);
  } else {
    constructResult = defaultResult.apply(arg0, items);
  }
  return closure_5.default(arg0, constructResult);
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
  const defaultResult = closure_7.default(closure_6.default(prototype), arg1, arg2);
  dependencyMap = defaultResult;
  fn = defaultResult;
  if (2) {
    fn = defaultResult;
    if ("function" === typeof defaultResult) {
      fn = (arg0) => defaultResult.apply(closure_0, arg0);
    }
  }
  return fn;
}
function createAnimatedProps(arg0, style) {
  const items = [];
  const items1 = [];
  const obj = {};
  const keys = Object.keys(arg0);
  let num = 0;
  if (0 < keys.length) {
    while (true) {
      let tmp2 = keys[num];
      let tmp3 = arg0[tmp2];
      let tmp4 = num;
      let tmp5 = tmp;
      if (style != null) {
        let tmp6 = fn;
        if (!fn(style, tmp2)) {
          obj[tmp2] = tmp3;
        }
        num = num + 1;
        tmp = tmp5;
        if (num >= length) {
          break;
        }
      }
      if (tmp2 === "style") {
        let tmp10 = mod2;
        let _default2 = mod2.default;
        style = undefined;
        if (style != null) {
          style = style.style;
        }
        let fromResult = _default2.from(tmp3, style);
      } else {
        let tmp7 = _assertNativeAnimatedModule;
        fromResult = tmp3;
        if (!(tmp3 instanceof _assertNativeAnimatedModule.default)) {
          let tmp9 = mod;
          let _default = mod.default;
          fromResult = _default.from(tmp3);
        }
      }
      if (fromResult == null) {
        obj[tmp2] = tmp3;
        tmp5 = fromResult;
      } else {
        let arr = items.push(tmp2);
        arr = items1.push(fromResult);
        obj[tmp2] = fromResult;
        tmp5 = fromResult;
      }
    }
  }
  const items2 = [items, items1, obj];
  return items2;
}
let closure_2 = module_1(_slicedToArray);
let closure_3 = module_1(_classCallCheck);
let closure_4 = module_1(_defineProperties);
let closure_5 = module_1(_possibleConstructorReturn);
let closure_6 = module_1(_getPrototypeOf);
let closure_7 = module_1(_get);
let closure_8 = module_1(_inherits);
let closure_9 = module_1(_classPrivateFieldBase);
const _classPrivateFieldKey = module_1(_classPrivateFieldKey2);
let closure_10 = module_1(ensureGlobalEventEmitterListeners);
const _assertNativeAnimatedModule = module_1(_assertNativeAnimatedModule2);
let closure_12 = module_1(_callSuper2);
let closure_13 = module_1(_callSuper3);
let closure_14 = module_1(invariant);
const field = _classPrivateFieldKey.default("animatedView");
const field2 = _classPrivateFieldKey.default("callback");
const field3 = _classPrivateFieldKey.default("nodeKeys");
const field4 = _classPrivateFieldKey.default("nodes");
const field5 = _classPrivateFieldKey.default("props");
let fn = Object.hasOwn;
if (fn == null) {
  fn = (closure_1, key10018) => hasOwnProperty.call(closure_1, key10018);
}

export default ((arg0) => {
  class AnimatedProps {
    constructor(arg0, arg1, arg2, arg3) {
      defaultResult = closure_1_3.default(this, AnimatedProps);
      items = [];
      items[0] = arg3;
      tmp2 = closure_1_22(this, AnimatedProps, items);
      definePropertyResult = Object.defineProperty(tmp2, closure_1_15, { writable: true, value: null });
      definePropertyResult1 = Object.defineProperty(tmp2, closure_1_16, { writable: true, value: undefined });
      definePropertyResult2 = Object.defineProperty(tmp2, closure_1_17, { writable: true, value: undefined });
      definePropertyResult3 = Object.defineProperty(tmp2, closure_1_18, { writable: true, value: undefined });
      definePropertyResult4 = Object.defineProperty(tmp2, closure_1_19, { writable: true, value: undefined });
      defaultResult1 = closure_1_2.default(closure_1_25(arg0, arg2), 3);
      [tmp9, tmp10, tmp11] = defaultResult1;
      closure_1_9.default(tmp2, closure_1_17)[closure_1_17] = tmp9;
      closure_1_9.default(tmp2, closure_1_18)[closure_1_18] = tmp10;
      closure_1_9.default(tmp2, closure_1_19)[closure_1_19] = tmp11;
      closure_1_9.default(tmp2, closure_1_16)[closure_1_16] = arg1;
      return tmp2;
    }
  }
  closure_8.default(AnimatedProps, arg0);
  let obj = {
    key: "__getValue",
    value: function __getValue() {
      const obj = {};
      const keys = Object.keys(closure_1_9.default(this, closure_1_19)[closure_1_19]);
      for (let num = 0; num < length; num = num + 1) {
        let tmp = keys[num];
        let tmp2 = closure_1_9;
        let tmp3 = closure_1_19;
        let obj2 = closure_1_9.default(this, closure_1_19)[closure_1_19][tmp];
        let tmp4 = closure_1_11;
        let tmp5 = num;
        if (obj2 instanceof closure_1_11.default) {
          obj[tmp] = obj2.__getValue();
        } else {
          let tmp6 = AnimatedProps;
          let tmp7 = closure_1_1;
          if (obj2 instanceof AnimatedProps(closure_1_1[15]).AnimatedEvent) {
            obj[tmp] = obj2.__getHandler();
          } else {
            obj[tmp] = obj2;
          }
        }
      }
      return obj;
    }
  };
  let items = [obj, , , , , , , , , , , ];
  obj = {
    key: "__getValueWithStaticProps",
    value: function __getValueWithStaticProps(style) {
      const merged = Object.assign({}, style);
      const keys = Object.keys(style);
      let num = 0;
      if (0 < keys.length) {
        while (true) {
          let tmp2 = keys[num];
          let tmp3 = closure_1_9;
          let tmp4 = closure_1_19;
          let obj = closure_1_9.default(this, closure_1_19)[closure_1_19][tmp2];
          let tmp5 = num;
          if (tmp2 === "style") {
            let tmp6 = closure_1_13;
            if (obj instanceof closure_1_13.default) {
              merged[tmp2] = obj.__getValueWithStaticStyle(style.style);
              num = num + 1;
              if (num >= length) {
                break;
              }
            }
          }
          let tmp7 = closure_1_11;
          if (obj instanceof closure_1_11.default) {
            merged[tmp2] = obj.__getValue();
          } else {
            let tmp8 = AnimatedProps;
            let tmp9 = closure_1_1;
            if (obj instanceof AnimatedProps(closure_1_1[15]).AnimatedEvent) {
              merged[tmp2] = obj.__getHandler();
            }
          }
        }
      }
      return merged;
    }
  };
  items[1] = obj;
  obj = {
    key: "__getAnimatedValue",
    value: function __getAnimatedValue() {
      const obj = {};
      const arr = closure_1_9.default(this, closure_1_18)[closure_1_18];
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
      const arr = closure_1_9.default(this, closure_1_18)[closure_1_18];
      for (let num = 0; num < length; num = num + 1) {
        let obj = arr[num];
        let __addChildResult = obj.__addChild(self);
      }
      closure_1_24(AnimatedProps, "__attach", self, 3)([]);
    }
  };
  items[4] = {
    key: "__detach",
    value: function __detach() {
      const self = this;
      if (this.__isNative) {
        if (closure_1_9.default(self, closure_1_15)[closure_1_15]) {
          const result = self.__disconnectAnimatedView();
        }
      }
      closure_1_9.default(self, closure_1_15)[closure_1_15] = null;
      const arr = closure_1_9.default(self, closure_1_18)[closure_1_18];
      for (let num = 0; num < length; num = num + 1) {
        let obj = arr[num];
        let __removeChildResult = obj.__removeChild(self);
      }
      closure_1_24(AnimatedProps, "__detach", self, 3)([]);
    }
  };
  items[5] = {
    key: "update",
    value: function update() {
      closure_1_9.default(this, closure_1_16)[closure_1_16]();
    }
  };
  items[6] = {
    key: "__makeNative",
    value: function __makeNative(arg0) {
      const self = this;
      const arr = closure_1_9.default(this, closure_1_18)[closure_1_18];
      for (let num = 0; num < length; num = num + 1) {
        let obj = arr[num];
        let __makeNativeResult = obj.__makeNative(arg0);
      }
      if (!self.__isNative) {
        self.__isNative = true;
        const items = [arg0];
        closure_1_24(AnimatedProps, "__setPlatformConfig", self, 3)(items);
        if (closure_1_9.default(self, closure_1_15)[closure_1_15]) {
          const result = self.__connectAnimatedView();
        }
      }
    }
  };
  items[7] = {
    key: "setNativeView",
    value: function setNativeView(arg0) {
      const self = this;
      if (closure_1_9.default(this, closure_1_15)[closure_1_15] !== arg0) {
        closure_1_9.default(self, closure_1_15)[closure_1_15] = arg0;
        if (self.__isNative) {
          const result = self.__connectAnimatedView();
        }
      }
    }
  };
  items[8] = {
    key: "__connectAnimatedView",
    value: function __connectAnimatedView() {
      const self = this;
      closure_1_14.default(this.__isNative, "Expected node to be marked as \"native\"");
      const findNodeHandleResult = AnimatedProps(closure_1_1[16]).findNodeHandle(closure_1_9.default(this, closure_1_15)[closure_1_15]);
      if (findNodeHandleResult == null) {
        const _Error = Error;
        const error = new Error("Unable to locate attached view in the native tree");
        throw error;
      } else {
        const API = closure_1_10.default.API;
        const result = API.connectAnimatedNodeToView(self.__getNativeTag(), findNodeHandleResult);
      }
    }
  };
  items[9] = {
    key: "__disconnectAnimatedView",
    value: function __disconnectAnimatedView() {
      const self = this;
      closure_1_14.default(this.__isNative, "Expected node to be marked as \"native\"");
      const findNodeHandleResult = AnimatedProps(closure_1_1[16]).findNodeHandle(closure_1_9.default(this, closure_1_15)[closure_1_15]);
      if (findNodeHandleResult == null) {
        const _Error = Error;
        const error = new Error("Unable to locate attached view in the native tree");
        throw error;
      } else {
        const API = closure_1_10.default.API;
        const result = API.disconnectAnimatedNodeFromView(self.__getNativeTag(), findNodeHandleResult);
      }
    }
  };
  items[10] = {
    key: "__restoreDefaultValues",
    value: function __restoreDefaultValues() {
      const self = this;
      if (this.__isNative) {
        const API = closure_1_10.default.API;
        API.restoreDefaultValues(self.__getNativeTag());
      }
    }
  };
  items[11] = {
    key: "__getNativeConfig",
    value: function __getNativeConfig() {
      const self = this;
      let obj = {};
      const arr = closure_1_9.default(this, closure_1_18)[closure_1_18];
      for (let num = 0; num < length; num = num + 1) {
        let obj2 = arr[num];
        let __makeNativeResult = obj2.__makeNative(__getPlatformConfigResult);
        obj[tmp2[num]] = obj2.__getNativeTag();
      }
      obj = { type: "props", props: obj, debugID: self.__getDebugID() };
      return obj;
    }
  };
  return closure_4.default(AnimatedProps, items);
})(_assertNativeAnimatedModule.default);
