// Module ID: 341
// Function ID: 4155
// Name: _callSuper
// Dependencies: [1, 12, 13, 23, 25, 26, 28, 304, 311]

// Module 341 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _get from "_get" /* 26 */;
import _inherits from "_inherits" /* 28 */;
import ensureGlobalEventEmitterListeners from "ensureGlobalEventEmitterListeners" /* 304 */;
import _assertNativeAnimatedModule from "_assertNativeAnimatedModule" /* 311 */;
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
let closure_6 = module_1(ensureGlobalEventEmitterListeners);

export default ((arg0) => {
  class AnimatedTracking {
    constructor(arg0, arg1, arg2, arg3, arg4, arg5) {
      defaultResult = AnimatedTracking.default(this, AnimatedTracking);
      items = [];
      items[0] = arg5;
      obj = closure_1_7(this, AnimatedTracking, items);
      obj._value = arg0;
      obj._parent = arg1;
      obj._animationClass = arg2;
      obj._animationConfig = arg3;
      _default = closure_1_6.default;
      obj._useNativeDriver = _default.shouldUseNativeDriver(arg3);
      obj._callback = arg4;
      __attachResult = obj.__attach();
      return obj;
    }
  }
  closure_5.default(AnimatedTracking, arg0);
  let obj = {
    key: "__makeNative",
    value: function __makeNative(arg0) {
      this.__isNative = true;
      const _parent = this._parent;
      _parent.__makeNative(arg0);
      const items = [arg0];
      closure_1_9(AnimatedTracking, "__makeNative", this, 3)(items);
      const _value = this._value;
      _value.__makeNative(arg0);
    }
  };
  let items = [obj, , , , , ];
  obj = {
    key: "__getValue",
    value: function __getValue() {
      const _parent = this._parent;
      return _parent.__getValue();
    }
  };
  items[1] = obj;
  obj = {
    key: "__attach",
    value: function __attach() {
      const self = this;
      const _parent = this._parent;
      _parent.__addChild(this);
      if (this._useNativeDriver) {
        self.__makeNative(self._animationConfig.platformConfig);
      }
      closure_1_9(AnimatedTracking, "__attach", self, 3)([]);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "__detach",
    value: function __detach() {
      const _parent = this._parent;
      _parent.__removeChild(this);
      closure_1_9(AnimatedTracking, "__detach", this, 3)([]);
    }
  };
  items[4] = {
    key: "update",
    value: function update() {
      ({ _value, _animationClass } = this);
      const toValue = this._animationConfig.toValue;
      _animationClass = new _animationClass(Object.assign({}, this._animationConfig, { toValue: toValue.__getValue() }));
      _value.animate(_animationClass, this._callback);
    }
  };
  items[5] = {
    key: "__getNativeConfig",
    value: function __getNativeConfig() {
      const _animationClass = new this._animationClass(Object.assign({}, this._animationConfig, { toValue: undefined }));
      const obj = { type: "tracking" };
      const result = _animationClass.__getNativeAnimationConfig();
      obj.animationId = closure_1_6.default.generateNewAnimationId();
      obj.animationConfig = result;
      const _parent = this._parent;
      obj.toValue = _parent.__getNativeTag();
      const _value = this._value;
      obj.value = _value.__getNativeTag();
      obj.debugID = this.__getDebugID();
      return obj;
    }
  };
  return closure_1.default(AnimatedTracking, items);
})(module_1(_assertNativeAnimatedModule).default);
