// Module ID: 302
// Function ID: 3508
// Name: _callSuper
// Dependencies: [1, 12, 13, 23, 25, 26, 28, 303]

// Module 302 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _get from "_get" /* 26 */;
import _inherits from "_inherits" /* 28 */;
import Animation from "Animation" /* 303 */;
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
  let fn = defaultResult;
  if (2) {
    fn = defaultResult;
    if ("function" === typeof defaultResult) {
      fn = (arg0) => defaultResult.apply(closure_0, arg0);
    }
  }
  return fn;
}
let closure_1 = module_1(_classCallCheck);
let closure_2 = module_1(_defineProperties);
let closure_3 = module_1(_possibleConstructorReturn);
let closure_4 = module_1(_getPrototypeOf);
let closure_5 = module_1(_get);
let closure_6 = module_1(_inherits);

export default ((arg0) => {
  class DecayAnimation {
    constructor(arg0) {
      defaultResult = closure_1_1.default(this, DecayAnimation);
      items = [];
      items[0] = arg0;
      tmp2 = closure_1_7(this, DecayAnimation, items);
      deceleration = arg0.deceleration;
      num = 0.998;
      if (deceleration != null) {
        num = deceleration;
      }
      tmp2._deceleration = num;
      ({ velocity: tmp2._velocity, platformConfig: tmp2._platformConfig } = arg0);
      return tmp2;
    }
  }
  closure_6.default(DecayAnimation, arg0);
  let obj = {
    key: "__getNativeAnimationConfig",
    value: function __getNativeAnimationConfig() {
      return { type: "decay", deceleration: this._deceleration, velocity: this._velocity, iterations: this.__iterations, platformConfig: this._platformConfig, debugID: this.__getDebugID() };
    }
  };
  let items = [obj, , , ];
  obj = {
    key: "start",
    value: function start(_lastValue, _onUpdate, arg2, arg3, closure_0) {
      const self = this;
      const items = [_lastValue, _onUpdate, arg2, arg3, closure_0];
      closure_1_9(self, "start", this, 3)(items);
      this._lastValue = _lastValue;
      this._fromValue = _lastValue;
      this._onUpdate = _onUpdate;
      this._startTime = Date.now();
      if (!this.__startAnimationIfNative(closure_0)) {
        const _requestAnimationFrame = requestAnimationFrame;
        this._animationFrame = requestAnimationFrame(() => self.onUpdate());
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "onUpdate",
    value: function onUpdate() {
      const self = this;
      const result = this._velocity / (1 - this._deceleration);
      const sum = this._fromValue + result * (1 - Math.exp(-1 - this._deceleration * (Date.now() - this._startTime)));
      this._onUpdate(sum);
      if (Math.abs(this._lastValue - sum) < 0.1) {
        const obj = { finished: true };
        self.__notifyAnimationEnd(obj);
      } else {
        self._lastValue = sum;
        if (self.__active) {
          const _requestAnimationFrame = requestAnimationFrame;
          const onUpdate = self.onUpdate;
          self._animationFrame = requestAnimationFrame(onUpdate.bind(self));
        }
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "stop",
    value: function stop() {
      const self = this;
      closure_1_9(DecayAnimation, "stop", this, 3)([]);
      if (this._animationFrame != null) {
        DecayAnimation.cancelAnimationFrame(self._animationFrame);
      }
      self.__notifyAnimationEnd({ finished: false });
    }
  };
  return closure_2.default(DecayAnimation, items);
})(module_1(Animation).default);
