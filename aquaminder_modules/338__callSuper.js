// Module ID: 338
// Function ID: 4110
// Name: _callSuper
// Dependencies: [1, 12, 13, 23, 25, 26, 28, 321, 313]

// Module 338 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _get from "_get" /* 26 */;
import _inherits from "_inherits" /* 28 */;
import _callSuper2 from "_callSuper" /* 313 */;
import _callSuper3 from "_callSuper" /* 321 */;
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

export default ((arg0) => {
  class AnimatedModulo {
    constructor(arg0, arg1, arg2) {
      defaultResult = AnimatedModulo.default(this, AnimatedModulo);
      items = [];
      items[0] = arg2;
      tmp2 = closure_1_7(this, AnimatedModulo, items);
      tmp2._a = arg0;
      tmp2._modulus = arg1;
      return tmp2;
    }
  }
  closure_5.default(AnimatedModulo, arg0);
  let obj = {
    key: "__makeNative",
    value: function __makeNative(arg0) {
      const _a = this._a;
      _a.__makeNative(arg0);
      const items = [arg0];
      closure_1_9(AnimatedModulo, "__makeNative", this, 3)(items);
    }
  };
  let items = [obj, , , , , ];
  obj = {
    key: "__getValue",
    value: function __getValue() {
      const _a = this._a;
      return (_a.__getValue() % this._modulus + this._modulus) % this._modulus;
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
      closure_1_9(AnimatedModulo, "__attach", this, 3)([]);
    }
  };
  items[4] = {
    key: "__detach",
    value: function __detach() {
      const _a = this._a;
      _a.__removeChild(this);
      closure_1_9(AnimatedModulo, "__detach", this, 3)([]);
    }
  };
  items[5] = {
    key: "__getNativeConfig",
    value: function __getNativeConfig() {
      const _a = this._a;
      return { type: "modulus", input: _a.__getNativeTag(), modulus: this._modulus, debugID: this.__getDebugID() };
    }
  };
  return closure_1.default(AnimatedModulo, items);
})(module_1(_callSuper2).default);
