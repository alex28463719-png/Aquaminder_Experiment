// Module ID: 339
// Function ID: 4125
// Name: _callSuper
// Dependencies: [1, 12, 13, 23, 25, 26, 28, 321, 317, 313]

// Module 339 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _get from "_get" /* 26 */;
import _inherits from "_inherits" /* 28 */;
import _callSuper2 from "_callSuper" /* 313 */;
import _callSuper3 from "_callSuper" /* 317 */;
import _callSuper4 from "_callSuper" /* 321 */;
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
let closure_6 = module_1(_callSuper4);
let closure_7 = module_1(_callSuper3);

export default ((arg0) => {
  class AnimatedMultiplication {
    constructor(arg0, arg1, arg2) {
      defaultResult = AnimatedMultiplication.default(this, AnimatedMultiplication);
      items = [];
      items[0] = arg2;
      tmp2 = closure_1_8(this, AnimatedMultiplication, items);
      _default = arg0;
      if (typeof arg0 === "number") {
        tmp4 = closure_1_7;
        _default = closure_1_7.default;
        prototype = _default.prototype;
        tmp5 = new.target;
        tmp6 = new.target;
        tmp7 = arg0;
        _default = new _default(arg0);
      }
      tmp2._a = _default;
      _default2 = arg1;
      if (typeof arg1 === "number") {
        tmp9 = closure_1_7;
        _default2 = closure_1_7.default;
        prototype2 = _default2.prototype;
        tmp10 = new.target;
        tmp11 = new.target;
        tmp12 = arg1;
        _default2 = new _default2(arg1);
      }
      tmp2._b = _default2;
      return tmp2;
    }
  }
  closure_5.default(AnimatedMultiplication, arg0);
  let obj = {
    key: "__makeNative",
    value: function __makeNative(arg0) {
      const _a = this._a;
      _a.__makeNative(arg0);
      const _b = this._b;
      _b.__makeNative(arg0);
      const items = [arg0];
      closure_1_10(AnimatedMultiplication, "__makeNative", this, 3)(items);
    }
  };
  let items = [obj, , , , , ];
  obj = {
    key: "__getValue",
    value: function __getValue() {
      ({ _a, _b } = this);
      return _a.__getValue() * _b.__getValue();
    }
  };
  items[1] = obj;
  obj = {
    key: "interpolate",
    value: function interpolate(arg0) {
      return new closure_1_6.default(this, arg0);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "__attach",
    value: function __attach() {
      const _a = this._a;
      _a.__addChild(this);
      const _b = this._b;
      _b.__addChild(this);
      closure_1_10(AnimatedMultiplication, "__attach", this, 3)([]);
    }
  };
  items[4] = {
    key: "__detach",
    value: function __detach() {
      const _a = this._a;
      _a.__removeChild(this);
      const _b = this._b;
      _b.__removeChild(this);
      closure_1_10(AnimatedMultiplication, "__detach", this, 3)([]);
    }
  };
  items[5] = {
    key: "__getNativeConfig",
    value: function __getNativeConfig() {
      const obj = { type: "multiplication" };
      const _a = this._a;
      const items = [_a.__getNativeTag(), ];
      const _b = this._b;
      items[1] = _b.__getNativeTag();
      obj.input = items;
      obj.debugID = this.__getDebugID();
      return obj;
    }
  };
  return closure_1.default(AnimatedMultiplication, items);
})(module_1(_callSuper2).default);
