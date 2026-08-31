// Module ID: 328
// Function ID: 3980
// Name: _callSuper
// Dependencies: [1, 134, 12, 13, 23, 25, 26, 28, 326, 303, 322]

// Module 328 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _get from "_get" /* 26 */;
import _inherits from "_inherits" /* 28 */;
import _readOnlyError2 from "_readOnlyError" /* 134 */;
import Animation from "Animation" /* 303 */;
import A from "A" /* 322 */;
import _callSuper2 from "_callSuper" /* 326 */;
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
  require = defaultResult;
  let fn = defaultResult;
  if (2) {
    fn = defaultResult;
    if ("function" === typeof defaultResult) {
      fn = (arg0) => defaultResult.apply(closure_0, arg0);
    }
  }
  return fn;
}
function easeInOut() {
  if (!closure_9) {
    const _default = A.default;
    closure_9 = _default.inOut(_default.ease);
  }
  return closure_9;
}
const _readOnlyError = module_1(_readOnlyError2);
let closure_3 = module_1(_classCallCheck);
let closure_4 = module_1(_defineProperties);
let closure_5 = module_1(_possibleConstructorReturn);
let closure_6 = module_1(_getPrototypeOf);
let closure_7 = module_1(_get);
let closure_8 = module_1(_inherits);
_callSuper = module_1(_callSuper2);

export default ((arg0) => {
  class TimingAnimation {
    constructor(arg0) {
      defaultResult = closure_1_3.default(this, TimingAnimation);
      items = [];
      items[0] = arg0;
      tmp2 = closure_1_10(this, TimingAnimation, items);
      ({ toValue: tmp2._toValue, easing } = arg0);
      if (easing == null) {
        tmp3 = closure_1_13;
        easing = closure_1_13();
      }
      tmp2._easing = easing;
      duration = arg0.duration;
      num = 500;
      if (duration != null) {
        num = duration;
      }
      tmp2._duration = num;
      delay = arg0.delay;
      num2 = 0;
      if (delay != null) {
        num2 = delay;
      }
      tmp2._delay = num2;
      tmp2._platformConfig = arg0.platformConfig;
      return tmp2;
    }
  }
  closure_8.default(TimingAnimation, arg0);
  let obj = {
    key: "__getNativeAnimationConfig",
    value: function __getNativeAnimationConfig() {
      const self = this;
      const items = [];
      const rounded = Math.round(this._duration / 16.666666666666668);
      for (let num = 0; num < rounded; num = num + 1) {
        let arr = items.push(self._easing(num / rounded));
      }
      items.push(self._easing(1));
      return { type: "frames", frames: items, toValue: self._toValue, iterations: self.__iterations, platformConfig: self._platformConfig, debugID: self.__getDebugID() };
    }
  };
  let items = [obj, , , ];
  obj = {
    key: "start",
    value: function start(_fromValue, _onUpdate) {
      let self = this;
      closure_0 = arg4;
      self = this;
      const items = [_fromValue, _onUpdate, arg2, arg3, arg4];
      closure_1_12(closure_0, "start", this, 3)(items);
      this._fromValue = _fromValue;
      this._onUpdate = _onUpdate;
      function start() {
        self._startTime = Date.now();
        if (!self.__startAnimationIfNative(closure_0)) {
          if (self._duration === 0) {
            self._onUpdate(self._toValue);
            const obj = { finished: true };
            self.__notifyAnimationEnd(obj);
          } else {
            const _requestAnimationFrame = requestAnimationFrame;
            self._animationFrame = requestAnimationFrame(() => closure_1_1.onUpdate());
          }
        }
      }
      if (this._delay) {
        const _setTimeout = setTimeout;
        self._timeout = setTimeout(start, self._delay);
      } else {
        start();
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "onUpdate",
    value: function onUpdate() {
      const self = this;
      const timestamp = Date.now();
      if (timestamp >= this._startTime + this._duration) {
        if (self._duration === 0) {
          self._onUpdate(self._toValue);
        } else {
          ({ _onUpdate: _onUpdate2, _fromValue: _fromValue2 } = self);
          _onUpdate2(_fromValue2 + self._easing(1) * (self._toValue - self._fromValue));
        }
        const obj = { finished: true };
        self.__notifyAnimationEnd(obj);
      } else {
        ({ _onUpdate, _fromValue } = self);
        _onUpdate(_fromValue + self._easing((timestamp - self._startTime) / self._duration) * (self._toValue - self._fromValue));
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
      closure_1_12(TimingAnimation, "stop", this, 3)([]);
      clearTimeout(this._timeout);
      if (this._animationFrame != null) {
        TimingAnimation.cancelAnimationFrame(self._animationFrame);
      }
      self.__notifyAnimationEnd({ finished: false });
    }
  };
  return closure_4.default(TimingAnimation, items);
})(module_1(Animation).default);
