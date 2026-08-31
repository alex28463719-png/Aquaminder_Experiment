// Module ID: 324
// Function ID: 3899
// Name: _callSuper
// Dependencies: [1, 12, 13, 23, 25, 26, 28, 317, 313, 20]

// Module 324 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import invariant from "invariant" /* 20 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _get from "_get" /* 26 */;
import _inherits from "_inherits" /* 28 */;
import _callSuper2 from "_callSuper" /* 313 */;
import _callSuper3 from "_callSuper" /* 317 */;
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
let closure_0 = module_1(_classCallCheck);
let closure_1 = module_1(_defineProperties);
let closure_2 = module_1(_possibleConstructorReturn);
let closure_3 = module_1(_getPrototypeOf);
let closure_4 = module_1(_get);
let closure_5 = module_1(_inherits);
let closure_6 = module_1(_callSuper3);
_callSuper = module_1(_callSuper2);
let closure_7 = module_1(invariant);
let c8 = 1;

export default ((arg0) => {
  class AnimatedValueXY {
    constructor(arg0, arg1) {
      point = arg0;
      defaultResult = AnimatedValueXY.default(this, AnimatedValueXY);
      items = [];
      items[0] = arg1;
      obj = closure_1_9(this, AnimatedValueXY, items);
      if (!arg0) {
        point = { x: 0, y: 0 };
      }
      if (typeof point.x === "number") {
        if (typeof point.y === "number") {
          tmp5 = closure_1_6;
          _default = closure_1_6.default;
          prototype = _default.prototype;
          tmp6 = new.target;
          tmp7 = new.target;
          _default = new _default(point.x);
          tmp9 = _default;
          obj.x = _default;
          _default2 = closure_1_6.default;
          prototype2 = _default2.prototype;
          tmp10 = new.target;
          tmp11 = new.target;
          _default2 = new _default2(point.y);
          tmp13 = _default2;
          obj.y = _default2;
        }
        obj._listeners = {};
        if (arg1) {
          if (arg1.useNativeDriver) {
            __makeNativeResult = obj.__makeNative();
          }
        }
        return obj;
      }
      tmp2 = point.x instanceof closure_1_6.default;
      if (tmp2) {
        tmp3 = closure_1_6;
        tmp2 = point.y instanceof closure_1_6.default;
      }
      defaultResult1 = closure_1_7.default(tmp2, "AnimatedValueXY must be initialized with an object of numbers or AnimatedValues.");
      ({ x: obj.x, y: obj.y } = point);
      return;
    }
  }
  closure_5.default(AnimatedValueXY, arg0);
  let obj = {
    key: "setValue",
    value: function setValue(arg0) {
      const x = this.x;
      x.setValue(arg0.x);
      const y = this.y;
      y.setValue(arg0.y);
    }
  };
  let items = [obj, , , , , , , , , , , , , , ];
  obj = {
    key: "setOffset",
    value: function setOffset(arg0) {
      const x = this.x;
      x.setOffset(arg0.x);
      const y = this.y;
      y.setOffset(arg0.y);
    }
  };
  items[1] = obj;
  obj = {
    key: "flattenOffset",
    value: function flattenOffset() {
      const x = this.x;
      x.flattenOffset();
      const y = this.y;
      y.flattenOffset();
    }
  };
  items[2] = obj;
  items[3] = {
    key: "extractOffset",
    value: function extractOffset() {
      const x = this.x;
      x.extractOffset();
      const y = this.y;
      y.extractOffset();
    }
  };
  items[4] = {
    key: "__getValue",
    value: function __getValue() {
      ({ x, y } = this);
      return { x: x.__getValue(), y: y.__getValue() };
    }
  };
  items[5] = {
    key: "resetAnimation",
    value: function resetAnimation(arg0) {
      const self = this;
      const x = this.x;
      x.resetAnimation();
      const y = this.y;
      y.resetAnimation();
      if (arg0) {
        arg0(self.__getValue());
      }
    }
  };
  items[6] = {
    key: "stopAnimation",
    value: function stopAnimation(arg0) {
      const self = this;
      const x = this.x;
      x.stopAnimation();
      const y = this.y;
      y.stopAnimation();
      if (arg0) {
        arg0(self.__getValue());
      }
    }
  };
  items[7] = {
    key: "addListener",
    value: function addListener(arg0) {
      closure_0 = arg0;
      const self = this;
      closure_8 = tmp + 1;
      const StringResult = String(+closure_8);
      function jointCallback(arg0) {
        callback(self.__getValue());
      }
      ({ x, _listeners, y } = this);
      _listeners[StringResult] = { x: x.addListener(jointCallback), y: y.addListener(jointCallback) };
      return StringResult;
    }
  };
  items[8] = {
    key: "removeListener",
    value: function removeListener(arg0) {
      const x = this.x;
      x.removeListener(this._listeners[arg0].x);
      const y = this.y;
      y.removeListener(this._listeners[arg0].y);
      delete tmp[tmp2];
    }
  };
  items[9] = {
    key: "removeAllListeners",
    value: function removeAllListeners() {
      const x = this.x;
      x.removeAllListeners();
      const y = this.y;
      y.removeAllListeners();
      this._listeners = {};
    }
  };
  items[10] = {
    key: "getLayout",
    value: function getLayout() {
      return { left: this.x, top: this.y };
    }
  };
  items[11] = {
    key: "getTranslateTransform",
    value: function getTranslateTransform() {
      const items = [{ translateX: this.x }, { translateY: this.y }];
      return items;
    }
  };
  items[12] = {
    key: "__attach",
    value: function __attach() {
      const x = this.x;
      x.__addChild(this);
      const y = this.y;
      y.__addChild(this);
      closure_1_11(AnimatedValueXY, "__attach", this, 3)([]);
    }
  };
  items[13] = {
    key: "__detach",
    value: function __detach() {
      const x = this.x;
      x.__removeChild(this);
      const y = this.y;
      y.__removeChild(this);
      closure_1_11(AnimatedValueXY, "__detach", this, 3)([]);
    }
  };
  items[14] = {
    key: "__makeNative",
    value: function __makeNative(arg0) {
      const x = this.x;
      x.__makeNative(arg0);
      const y = this.y;
      y.__makeNative(arg0);
      const items = [arg0];
      closure_1_11(AnimatedValueXY, "__makeNative", this, 3)(items);
    }
  };
  return closure_1.default(AnimatedValueXY, items);
})(_callSuper.default);
