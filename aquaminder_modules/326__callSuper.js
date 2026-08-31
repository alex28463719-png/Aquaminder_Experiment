// Module ID: 326
// Function ID: 3941
// Name: _callSuper
// Dependencies: [1, 12, 13, 23, 25, 26, 28, 304, 90, 317, 313, 92]

// Module 326 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _get from "_get" /* 26 */;
import _inherits from "_inherits" /* 28 */;
import normalizeColor from "normalizeColor" /* 90 */;
import PlatformColor from "PlatformColor" /* 92 */;
import ensureGlobalEventEmitterListeners2 from "ensureGlobalEventEmitterListeners" /* 304 */;
import _callSuper2 from "_callSuper" /* 313 */;
import _callSuper3 from "_callSuper" /* 317 */;
import module_1 from "module_1" /* 1 */;

function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const defaultResult = closure_5.default(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(defaultResult, items, closure_5.default(arg0).constructor);
  } else {
    constructResult = defaultResult.apply(arg0, items);
  }
  return closure_4.default(arg0, constructResult);
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
  const defaultResult = closure_6.default(closure_5.default(prototype), arg1, arg2);
  dependencyMap = defaultResult;
  let fn = defaultResult;
  if (2) {
    fn = defaultResult;
    if ("function" === typeof defaultResult) {
      fn = (arg0) => defaultResult.apply(closure_0, arg0);
    }
  }
  return fn;
}
function processColor(arg0) {
  if (arg0 !== undefined) {
    if (arg0 !== null) {
      if (isRgbaValue(arg0)) {
        return arg0;
      } else {
        const defaultResult = closure_8.default(arg0);
        if (defaultResult !== undefined) {
          if (defaultResult !== null) {
            if (typeof defaultResult === "object") {
              const processColorObjectResult = PlatformColor.processColorObject(defaultResult);
              if (processColorObjectResult != null) {
                return processColorObjectResult;
              }
            } else if (tmp8 === "number") {
              const obj = { r: (defaultResult & 4278190080) >>> 24, g: (defaultResult & 16711680) >>> 16, b: (defaultResult & 65280) >>> 8, a: (defaultResult & 255) / 255 };
              return obj;
            }
            return null;
          }
        }
        return null;
      }
    }
  }
  return null;
}
function isRgbaValue(arg0) {
  let tmp = arg0;
  if (arg0) {
    tmp = typeof arg0.r === "number";
  }
  if (tmp) {
    tmp = typeof arg0.g === "number";
  }
  if (tmp) {
    tmp = typeof arg0.b === "number";
  }
  if (tmp) {
    tmp = typeof arg0.a === "number";
  }
  return tmp;
}
function isRgbaAnimatedValue(arg0) {
  let tmp = arg0;
  if (arg0) {
    tmp = arg0.r instanceof mod.default;
  }
  if (tmp) {
    tmp = arg0.g instanceof mod.default;
  }
  if (tmp) {
    tmp = arg0.b instanceof mod.default;
  }
  if (tmp) {
    tmp = arg0.a instanceof mod.default;
  }
  return tmp;
}
let closure_2 = module_1(_classCallCheck);
let closure_3 = module_1(_defineProperties);
let closure_4 = module_1(_possibleConstructorReturn);
let closure_5 = module_1(_getPrototypeOf);
let closure_6 = module_1(_get);
let closure_7 = module_1(_inherits);
const ensureGlobalEventEmitterListeners = module_1(ensureGlobalEventEmitterListeners2);
let closure_8 = module_1(normalizeColor);
let closure_9 = _interopRequireWildcard(_callSuper3);
const API = ensureGlobalEventEmitterListeners.default.API;
let closure_11 = { r: 0, g: 0, b: 0, a: 1 };

export default ((arg0) => {
  class AnimatedColor {
    constructor(arg0, arg1) {
      tmp = arg0;
      defaultResult = closure_1_2.default(this, AnimatedColor);
      items = [];
      items[0] = arg1;
      obj = closure_1_13(this, AnimatedColor, items);
      obj._suspendCallbacks = 0;
      if (arg0 == null) {
        tmp = closure_1_11;
      }
      if (closure_1_18(tmp)) {
        ({ r: obj.r, g: obj.g, b: obj.b, a: obj.a } = tmp);
      } else {
        tmp3 = closure_1_16;
        tmp4 = closure_1_16(tmp);
        if (tmp4 == null) {
          tmp4 = closure_1_11;
        }
        tmp6 = closure_1_17;
        tmp5 = closure_1_11;
        tmp7 = tmp4;
        tmp8 = tmp4;
        if (!closure_1_17(tmp4)) {
          obj.nativeColor = tmp4;
          tmp8 = tmp5;
        }
        tmp9 = closure_1_9;
        _default = closure_1_9.default;
        prototype = _default.prototype;
        tmp10 = new.target;
        tmp11 = new.target;
        _default = new _default(tmp8.r);
        tmp13 = _default;
        obj.r = _default;
        tmp14 = closure_1_9;
        _default2 = closure_1_9.default;
        prototype2 = _default2.prototype;
        tmp15 = new.target;
        tmp16 = new.target;
        _default2 = new _default2(tmp8.g);
        tmp18 = _default2;
        obj.g = _default2;
        tmp19 = closure_1_9;
        _default3 = closure_1_9.default;
        prototype3 = _default3.prototype;
        tmp20 = new.target;
        tmp21 = new.target;
        _default3 = new _default3(tmp8.b);
        tmp23 = _default3;
        obj.b = _default3;
        tmp24 = closure_1_9;
        _default4 = closure_1_9.default;
        prototype4 = _default4.prototype;
        tmp25 = new.target;
        tmp26 = new.target;
        _default4 = new _default4(tmp8.a);
        tmp28 = _default4;
        obj.a = _default4;
      }
      if (arg1 != null) {
        if (arg1.useNativeDriver) {
          __makeNativeResult = obj.__makeNative();
        }
      }
      return obj;
    }
  }
  closure_7.default(AnimatedColor, arg0);
  let obj = {
    key: "setValue",
    value: function setValue(arg0) {
      let self = this;
      self = this;
      c1 = false;
      if (this.__isNative) {
        const result = closure_1_10.setWaitingForIdentifier(self.__getNativeTag().toString());
        const str = self.__getNativeTag();
      }
      let tmp3 = closure_1_16(arg0);
      if (tmp3 == null) {
        tmp3 = closure_1_11;
      }
      closure_2 = tmp3;
      const result1 = self._withSuspendedCallbacks(() => {
        if (closure_2_17(closure_2)) {
          const r = tmp2.r;
          r.setValue(tmp.r);
          const g = tmp2.g;
          g.setValue(tmp.g);
          const b = tmp2.b;
          b.setValue(tmp.b);
          const a = tmp2.a;
          a.setValue(tmp.a);
          if (tmp2.nativeColor != null) {
            self.nativeColor = null;
            c1 = true;
          }
        } else if (tmp2.nativeColor !== tmp) {
          self.nativeColor = tmp;
          c1 = true;
        }
      });
      if (self.__isNative) {
        const str2 = self.__getNativeTag();
        if (c1) {
          const result2 = closure_1_10.updateAnimatedNodeConfig(str2, self.__getNativeConfig());
        }
        const result3 = closure_1_10.unsetWaitingForIdentifier(str2.toString());
      } else {
        closure_1_9.flushValue(self);
      }
      self.__callListeners(self.__getValue());
    }
  };
  let items = [obj, , , , , , , , , , , , ];
  obj = {
    key: "setOffset",
    value: function setOffset(arg0) {
      const r = this.r;
      r.setOffset(arg0.r);
      const g = this.g;
      g.setOffset(arg0.g);
      const b = this.b;
      b.setOffset(arg0.b);
      const a = this.a;
      a.setOffset(arg0.a);
    }
  };
  items[1] = obj;
  obj = {
    key: "flattenOffset",
    value: function flattenOffset() {
      const r = this.r;
      r.flattenOffset();
      const g = this.g;
      g.flattenOffset();
      const b = this.b;
      b.flattenOffset();
      const a = this.a;
      a.flattenOffset();
    }
  };
  items[2] = obj;
  items[3] = {
    key: "extractOffset",
    value: function extractOffset() {
      const r = this.r;
      r.extractOffset();
      const g = this.g;
      g.extractOffset();
      const b = this.b;
      b.extractOffset();
      const a = this.a;
      a.extractOffset();
    }
  };
  items[4] = {
    key: "stopAnimation",
    value: function stopAnimation(arg0) {
      const self = this;
      const r = this.r;
      r.stopAnimation();
      const g = this.g;
      g.stopAnimation();
      const b = this.b;
      b.stopAnimation();
      const a = this.a;
      a.stopAnimation();
      if (arg0) {
        arg0(self.__getValue());
      }
    }
  };
  items[5] = {
    key: "resetAnimation",
    value: function resetAnimation(arg0) {
      const self = this;
      const r = this.r;
      r.resetAnimation();
      const g = this.g;
      g.resetAnimation();
      const b = this.b;
      b.resetAnimation();
      const a = this.a;
      a.resetAnimation();
      if (arg0) {
        arg0(self.__getValue());
      }
    }
  };
  items[6] = {
    key: "__getValue",
    value: function __getValue() {
      const self = this;
      if (this.nativeColor != null) {
        return self.nativeColor;
      } else {
        ({ r, g } = self);
        const b = self.b;
        const __getValueResult = r.__getValue();
        const a = self.a;
        const __getValueResult1 = g.__getValue();
        const _HermesInternal = HermesInternal;
        return "rgba(" + __getValueResult + ", " + __getValueResult1 + ", " + b.__getValue() + ", " + a.__getValue() + ")";
      }
    }
  };
  items[7] = {
    key: "__attach",
    value: function __attach() {
      const r = this.r;
      r.__addChild(this);
      const g = this.g;
      g.__addChild(this);
      const b = this.b;
      b.__addChild(this);
      const a = this.a;
      a.__addChild(this);
      closure_1_15(AnimatedColor, "__attach", this, 3)([]);
    }
  };
  items[8] = {
    key: "__detach",
    value: function __detach() {
      const r = this.r;
      r.__removeChild(this);
      const g = this.g;
      g.__removeChild(this);
      const b = this.b;
      b.__removeChild(this);
      const a = this.a;
      a.__removeChild(this);
      closure_1_15(AnimatedColor, "__detach", this, 3)([]);
    }
  };
  items[9] = {
    key: "_withSuspendedCallbacks",
    value: function _withSuspendedCallbacks(arg0) {
      this._suspendCallbacks = this._suspendCallbacks + 1;
      arg0();
      this._suspendCallbacks = this._suspendCallbacks - 1;
    }
  };
  items[10] = {
    key: "__callListeners",
    value: function __callListeners(arg0) {
      const self = this;
      if (this._suspendCallbacks === 0) {
        const items = [arg0];
        closure_1_15(AnimatedColor, "__callListeners", self, 3)(items);
      }
    }
  };
  items[11] = {
    key: "__makeNative",
    value: function __makeNative(arg0) {
      const r = this.r;
      r.__makeNative(arg0);
      const g = this.g;
      g.__makeNative(arg0);
      const b = this.b;
      b.__makeNative(arg0);
      const a = this.a;
      a.__makeNative(arg0);
      const items = [arg0];
      closure_1_15(AnimatedColor, "__makeNative", this, 3)(items);
    }
  };
  items[12] = {
    key: "__getNativeConfig",
    value: function __getNativeConfig() {
      ({ r, g, b, a } = this);
      return { type: "color", r: r.__getNativeTag(), g: g.__getNativeTag(), b: b.__getNativeTag(), a: a.__getNativeTag(), nativeColor: this.nativeColor, debugID: this.__getDebugID() };
    }
  };
  return closure_3.default(AnimatedColor, items);
})(module_1(_callSuper2).default);
