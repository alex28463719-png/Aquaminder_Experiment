// Module ID: 321
// Function ID: 3833
// Name: _callSuper
// Dependencies: [1, 12, 13, 23, 25, 26, 28, 304, 90, 89, 322, 313, 20]

// Module 321 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import invariant from "invariant" /* 20 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _get from "_get" /* 26 */;
import _inherits from "_inherits" /* 28 */;
import processColor from "processColor" /* 89 */;
import normalizeColor from "normalizeColor" /* 90 */;
import ensureGlobalEventEmitterListeners from "ensureGlobalEventEmitterListeners" /* 304 */;
import _callSuper2 from "_callSuper" /* 313 */;
import A from "A" /* 322 */;
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
function createNumericInterpolation(extrapolateLeft) {
  ({ outputRange: closure_0, inputRange: closure_1, easing } = extrapolateLeft);
  if (!easing) {
    easing = mod.default.linear;
  }
  let extrapolate = "extend";
  if (extrapolateLeft.extrapolateLeft !== undefined) {
    extrapolate = extrapolateLeft.extrapolateLeft;
  } else if (extrapolateLeft.extrapolate !== undefined) {
    extrapolate = extrapolateLeft.extrapolate;
  }
  extrapolate = "extend";
  if (extrapolateLeft.extrapolateRight !== undefined) {
    extrapolate = extrapolateLeft.extrapolateRight;
  } else if (extrapolateLeft.extrapolate !== undefined) {
    extrapolate = extrapolateLeft.extrapolate;
  }
  return (num) => {
    closure_1_10.default(typeof num === "number", "Cannot interpolation an input which is not a number");
    const tmp2 = closure_1_19(num, dependencyMap2);
    const sum = tmp2 + 1;
    return closure_1_16(num, dependencyMap2[tmp2], dependencyMap2[sum], dependencyMap[tmp2], dependencyMap[sum], easing, extrapolate, extrapolate);
  };
}
function interpolate(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
  let tmp = arg0;
  if (arg0 < arg1) {
    if (arg6 === "identity") {
      return arg0;
    } else {
      tmp = arg1;
      if (arg6 !== "clamp") {
        tmp = arg0;
      }
    }
  }
  let tmp2 = tmp;
  if (tmp > arg2) {
    if (arg7 === "identity") {
      return tmp;
    } else {
      tmp2 = arg2;
      if (arg7 !== "clamp") {
        tmp2 = tmp;
      }
    }
  }
  if (arg3 === arg4) {
    return arg3;
  } else if (arg1 === arg2) {
    return arg0 <= arg1 ? arg3 : arg4;
  } else {
    if (arg1 === -Infinity) {
      let diff = -tmp2;
    } else {
      const _Infinity = Infinity;
      if (arg2 === Infinity) {
        diff = tmp2 - arg1;
      } else {
        diff = (tmp2 - arg1) / (arg2 - arg1);
      }
    }
    const tmp6 = arg5(diff);
    if (arg3 === -Infinity) {
      let sum = -tmp6;
    } else {
      const _Infinity2 = Infinity;
      if (arg4 === Infinity) {
        sum = tmp6 + arg3;
      } else {
        sum = tmp6 * (arg4 - arg3) + arg3;
      }
    }
    return sum;
  }
}
function mapStringToNumericComponents(str) {
  let num = closure_7.default(str);
  let tmp = num == null;
  if (!tmp) {
    tmp = typeof num !== "object";
  }
  closure_10.default(tmp, "PlatformColors are not supported");
  if (typeof num === "number") {
    if (!num) {
      num = 0;
    }
    let obj = { isColor: true };
    const items = [(num & 4278190080) >>> 24, (num & 16711680) >>> 16, (num & 65280) >>> 8, (num & 255) / 255];
    obj.components = items;
    return obj;
  } else {
    const items1 = [];
    let match = regex.exec(str);
    let num2 = 0;
    let num3 = 0;
    while (match != null) {
      let tmp3 = num2;
      let tmp4 = match;
      if (match.index > num2) {
        let arr = items1.push(str.substring(num2, match.index));
      }
      let _parseFloat = parseFloat;
      arr = items1.push(parseFloat(match[0]));
      num2 = match.index + match[0].length;
      let tmp7 = regex;
      match = regex.exec(str);
      num3 = num2;
    }
    closure_10.default(items1.length > 0, "outputRange must contain color or value with numeric component");
    if (num3 < str.length) {
      items1.push(str.substring(num3, str.length));
    }
    obj = { isColor: false, components: items1 };
    return obj;
  }
}
function createStringInterpolation(outputRange) {
  closure_0 = outputRange;
  closure_10.default(outputRange.outputRange.length >= 2, "Bad output range");
  outputRange = outputRange.outputRange;
  let mapped = outputRange.map(mapStringToNumericComponents);
  const isColor = mapped[0].isColor;
  const mapped1 = mapped.map((components) => {
    components = components.components;
    if (isColor) {
      let found = components;
    } else {
      found = components.filter((num) => typeof num === "number");
    }
    return found;
  });
  const first = mapped1[0];
  closure_4 = first.map((arg0, arg1) => {
    closure_0 = arg1;
    return closure_1_15(Object.assign({}, closure_0, { outputRange: mapped1.map((arg0) => arg0[closure_0]) }));
  });
  return isColor ? ((arg0) => {
    closure_0 = arg0;
    mapped = closure_4.map((arg0, arg1) => {
      const tmp = arg0(closure_0);
      if (arg1 < 3) {
        const _Math2 = Math;
        let rounded = Math.round(tmp);
      } else {
        const _Math = Math;
        rounded = Math.round(tmp * 1000) / 1000;
      }
      return rounded;
    });
    return "rgba(" + mapped[0] + ", " + mapped[1] + ", " + mapped[2] + ", " + mapped[3] + ")";
  }) : ((arg0) => {
    closure_0 = arg0;
    mapped = closure_4.map((arg0) => arg0(closure_0));
    c2 = 0;
    const components = mapped[0].components;
    mapped = components.map((num) => {
      let tmp = num;
      if (typeof num === "number") {
        closure_2 = tmp4 + 1;
        tmp = table[tmp4];
      }
      return tmp;
    });
    return mapped.join("");
  });
}
function findRange(arg0, arg1) {
  let num = 1;
  let num2 = 1;
  if (1 < arg1.length - 1) {
    num2 = num;
    while (arg1[num] < arg0) {
      num = num + 1;
      num2 = num;
      if (num >= arg1.length - 1) {
        break;
      }
    }
  }
  return num2 - 1;
}
let closure_0 = module_1(_classCallCheck);
let closure_1 = module_1(_defineProperties);
let closure_2 = module_1(_possibleConstructorReturn);
let closure_3 = module_1(_getPrototypeOf);
let closure_4 = module_1(_get);
let closure_5 = module_1(_inherits);
let closure_6 = module_1(ensureGlobalEventEmitterListeners);
let closure_7 = module_1(normalizeColor);
let closure_8 = module_1(processColor);
let closure_9 = module_1(A);
_callSuper = module_1(_callSuper2);
let closure_10 = module_1(invariant);
const re11 = /[+-]?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?/g;

export default ((arg0) => {
  class AnimatedInterpolation {
    constructor(arg0, arg1) {
      defaultResult = AnimatedInterpolation.default(this, AnimatedInterpolation);
      items = [];
      items[0] = arg1;
      tmp2 = closure_1_12(this, AnimatedInterpolation, items);
      tmp2._parent = arg0;
      tmp2._config = arg1;
      return tmp2;
    }
  }
  closure_5.default(AnimatedInterpolation, arg0);
  let obj = {
    key: "_getInterpolation",
    value: function _getInterpolation() {
      const self = this;
      if (!this._interpolation) {
        const _config = self._config;
        if (_config.outputRange) {
          if (typeof _config.outputRange[0] === "string") {
            self._interpolation = closure_1_18(_config);
          }
        }
        self._interpolation = closure_1_15(_config);
      }
      return self._interpolation;
    }
  };
  let items = [obj, , , , , , ];
  obj = {
    key: "__makeNative",
    value: function __makeNative(arg0) {
      const _parent = this._parent;
      _parent.__makeNative(arg0);
      const items = [arg0];
      closure_1_14(AnimatedInterpolation, "__makeNative", this, 3)(items);
    }
  };
  items[1] = obj;
  obj = {
    key: "__getValue",
    value: function __getValue() {
      const _parent = this._parent;
      const __getValueResult = _parent.__getValue();
      closure_1_10.default(typeof __getValueResult === "number", "Cannot interpolate an input which is not a number.");
      return this._getInterpolation()(__getValueResult);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "interpolate",
    value: function interpolate(_config) {
      return new AnimatedInterpolation(this, _config);
    }
  };
  items[4] = {
    key: "__attach",
    value: function __attach() {
      const _parent = this._parent;
      _parent.__addChild(this);
      closure_1_14(AnimatedInterpolation, "__attach", this, 3)([]);
    }
  };
  items[5] = {
    key: "__detach",
    value: function __detach() {
      const _parent = this._parent;
      _parent.__removeChild(this);
      closure_1_14(AnimatedInterpolation, "__detach", this, 3)([]);
    }
  };
  items[6] = {
    key: "__getNativeConfig",
    value: function __getNativeConfig() {
      const self = this;
      const outputRange = this._config.outputRange;
      c0 = null;
      let mapped = outputRange;
      if (typeof outputRange[0] === "string") {
        mapped = outputRange.map((arg0) => {
          const defaultResult = closure_2_8.default(arg0);
          if (typeof defaultResult === "number") {
            const color = "color";
            return defaultResult;
          } else {
            return closure_2_6.default.transformDataType(arg0);
          }
        });
      }
      const obj = { inputRange: self._config.inputRange, outputRange: mapped, outputType: c0, extrapolateLeft: self._config.extrapolateLeft || self._config.extrapolate || "extend", extrapolateRight: self._config.extrapolateRight || self._config.extrapolate || "extend", type: "interpolation", debugID: self.__getDebugID() };
      return obj;
    }
  };
  return closure_1.default(AnimatedInterpolation, items);
})(_callSuper.default);
