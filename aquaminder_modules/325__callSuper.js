// Module ID: 325
// Function ID: 3924
// Name: _callSuper
// Dependencies: [1, 134, 12, 13, 23, 25, 26, 28, 326, 327, 303, 20]

// Module 325 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import invariant from "invariant" /* 20 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _get from "_get" /* 26 */;
import _inherits from "_inherits" /* 28 */;
import _readOnlyError2 from "_readOnlyError" /* 134 */;
import Animation2 from "Animation" /* 303 */;
import _callSuper2 from "_callSuper" /* 326 */;
import stiffnessFromOrigamiValue from "stiffnessFromOrigamiValue" /* 327 */;
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
const _readOnlyError = module_1(_readOnlyError2);
let closure_1 = module_1(_classCallCheck);
let closure_2 = module_1(_defineProperties);
let closure_3 = module_1(_possibleConstructorReturn);
let closure_4 = module_1(_getPrototypeOf);
let closure_5 = module_1(_get);
let closure_6 = module_1(_inherits);
_callSuper = module_1(_callSuper2);
let closure_7 = _interopRequireWildcard(stiffnessFromOrigamiValue);
const Animation = module_1(Animation2);
let closure_8 = module_1(invariant);

export default ((arg0) => {
  class SpringAnimation {
    constructor(arg0) {
      defaultResult = closure_1_1.default(this, SpringAnimation);
      items = [];
      items[0] = arg0;
      tmp2 = closure_1_10(this, SpringAnimation, items);
      overshootClamping = arg0.overshootClamping;
      flag = false;
      if (overshootClamping != null) {
        flag = overshootClamping;
      }
      tmp2._overshootClamping = flag;
      restDisplacementThreshold = arg0.restDisplacementThreshold;
      num = 0.001;
      num2 = 0.001;
      if (restDisplacementThreshold != null) {
        num2 = restDisplacementThreshold;
      }
      tmp2._restDisplacementThreshold = num2;
      restSpeedThreshold = arg0.restSpeedThreshold;
      if (restSpeedThreshold != null) {
        num = restSpeedThreshold;
      }
      tmp2._restSpeedThreshold = num;
      velocity = arg0.velocity;
      num3 = 0;
      if (velocity != null) {
        num3 = velocity;
      }
      tmp2._initialVelocity = num3;
      velocity2 = arg0.velocity;
      num4 = 0;
      if (velocity2 != null) {
        num4 = velocity2;
      }
      tmp2._lastVelocity = num4;
      ({ toValue: tmp2._toValue, delay } = arg0);
      num5 = 0;
      if (delay != null) {
        num5 = delay;
      }
      tmp2._delay = num5;
      tmp2._platformConfig = arg0.platformConfig;
      if (arg0.stiffness === undefined) {
        if (arg0.damping === undefined) {
          if (arg0.mass === undefined) {
            if (arg0.bounciness === undefined) {
              if (arg0.speed === undefined) {
                tension = arg0.tension;
                num6 = 40;
                tmp3 = closure_1_7;
                if (tension != null) {
                  num6 = tension;
                }
                friction = arg0.friction;
                num7 = 7;
                if (friction != null) {
                  num7 = friction;
                }
                result = closure_1_7.fromOrigamiTensionAndFriction(num6, num7);
                ({ stiffness: tmp2._stiffness, damping: tmp2._damping } = result);
                num8 = 1;
                tmp2._mass = 1;
              }
            }
            tmp5 = closure_1_8;
            tmp6 = arg0.tension === undefined;
            if (tmp6) {
              tmp6 = arg0.friction === undefined;
            }
            if (tmp6) {
              tmp6 = arg0.stiffness === undefined;
            }
            if (tmp6) {
              tmp6 = arg0.damping === undefined;
            }
            if (tmp6) {
              tmp6 = arg0.mass === undefined;
            }
            str = "You can define one of bounciness/speed, tension/friction, or stiffness/damping/mass, but not more than one";
            defaultResult1 = closure_1_8.default(tmp6, "You can define one of bounciness/speed, tension/friction, or stiffness/damping/mass, but not more than one");
            bounciness = arg0.bounciness;
            num9 = 8;
            tmp8 = closure_1_7;
            if (bounciness != null) {
              num9 = bounciness;
            }
            speed = arg0.speed;
            num10 = 12;
            if (speed != null) {
              num10 = speed;
            }
            result1 = closure_1_7.fromBouncinessAndSpeed(num9, num10);
            ({ stiffness: tmp2._stiffness, damping: tmp2._damping } = result1);
            num11 = 1;
            tmp2._mass = 1;
          }
          tmp12 = closure_1_8;
          str2 = "Stiffness value must be greater than 0";
          defaultResult2 = closure_1_8.default(tmp2._stiffness > 0, "Stiffness value must be greater than 0");
          str3 = "Damping value must be greater than 0";
          defaultResult3 = closure_1_8.default(tmp2._damping > 0, "Damping value must be greater than 0");
          str4 = "Mass value must be greater than 0";
          defaultResult4 = closure_1_8.default(tmp2._mass > 0, "Mass value must be greater than 0");
          return tmp2;
        }
      }
      tmp10 = arg0.bounciness === undefined;
      if (tmp10) {
        tmp10 = arg0.speed === undefined;
      }
      if (tmp10) {
        tmp10 = arg0.tension === undefined;
      }
      if (tmp10) {
        tmp10 = arg0.friction === undefined;
      }
      defaultResult5 = closure_1_8.default(tmp10, "You can define one of bounciness/speed, tension/friction, or stiffness/damping/mass, but not more than one");
      stiffness = arg0.stiffness;
      num12 = 100;
      if (stiffness != null) {
        num12 = stiffness;
      }
      tmp2._stiffness = num12;
      damping = arg0.damping;
      num13 = 10;
      if (damping != null) {
        num13 = damping;
      }
      tmp2._damping = num13;
      mass = arg0.mass;
      num14 = 1;
      if (mass != null) {
        num14 = mass;
      }
      tmp2._mass = num14;
      return;
    }
  }
  closure_6.default(SpringAnimation, arg0);
  let obj = {
    key: "__getNativeAnimationConfig",
    value: function __getNativeAnimationConfig() {
      const self = this;
      const obj = { type: "spring", overshootClamping: this._overshootClamping, restDisplacementThreshold: this._restDisplacementThreshold, restSpeedThreshold: this._restSpeedThreshold, stiffness: this._stiffness, damping: this._damping, mass: this._mass };
      let _lastVelocity = this._initialVelocity;
      if (_lastVelocity == null) {
        _lastVelocity = self._lastVelocity;
      }
      obj.initialVelocity = _lastVelocity;
      ({ _toValue: obj.toValue, __iterations: obj.iterations, _platformConfig: obj.platformConfig } = self);
      obj.debugID = self.__getDebugID();
      return obj;
    }
  };
  let items = [obj, , , , ];
  obj = {
    key: "start",
    value: function start(_startPosition, _onUpdate, arg2, getInternalState) {
      let self = this;
      closure_0 = arg4;
      self = this;
      const items = [_startPosition, _onUpdate, arg2, getInternalState, arg4];
      closure_1_12(closure_0, "start", this, 3)(items);
      this._startPosition = _startPosition;
      this._lastPosition = this._startPosition;
      this._onUpdate = _onUpdate;
      this._lastTime = Date.now();
      this._frameTime = 0;
      if (getInternalState instanceof closure_0) {
        const internalState = getInternalState.getInternalState();
        ({ lastPosition: self._lastPosition, lastVelocity: self._lastVelocity } = internalState);
        self._initialVelocity = self._lastVelocity;
        self._lastTime = internalState.lastTime;
      }
      function start() {
        if (!self.__startAnimationIfNative(closure_0)) {
          self.onUpdate();
        }
      }
      if (self._delay) {
        const _setTimeout = setTimeout;
        self._timeout = setTimeout(start, self._delay);
      } else {
        start();
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "getInternalState",
    value: function getInternalState() {
      return { lastPosition: this._lastPosition, lastVelocity: this._lastVelocity, lastTime: this._lastTime };
    }
  };
  items[2] = obj;
  items[3] = {
    key: "onUpdate",
    value: function onUpdate() {
      const self = this;
      let timestamp = Date.now();
      if (timestamp > this._lastTime + 64) {
        timestamp = self._lastTime + 64;
      }
      self._frameTime = self._frameTime + (timestamp - self._lastTime) / 1000;
      ({ _mass, _stiffness } = self);
      const result = self._damping / (2 * Math.sqrt(_stiffness * _mass));
      const sqrtResult = Math.sqrt(_stiffness / _mass);
      const result1 = sqrtResult * Math.sqrt(1 - result * result);
      const diff = self._toValue - self._startPosition;
      const _frameTime = self._frameTime;
      if (result < 1) {
        const _Math2 = Math;
        const expResult = Math.exp(-result * sqrtResult * _frameTime);
        const _Math3 = Math;
        const result2 = (tmp2 + result * sqrtResult * diff) / result1;
        const _Math4 = Math;
        const result3 = result2 * Math.sin(result1 * _frameTime);
        let diff1 = self._toValue - expResult * (result3 + diff * Math.cos(result1 * _frameTime));
        const _Math5 = Math;
        const result4 = result * sqrtResult * expResult;
        const _Math6 = Math;
        const result5 = Math.sin(result1 * _frameTime) * (tmp2 + result * sqrtResult * diff) / result1;
        const _Math7 = Math;
        const sum = result5 + diff * Math.cos(result1 * _frameTime);
        const _Math8 = Math;
        const result6 = Math.cos(result1 * _frameTime) * (tmp2 + result * sqrtResult * diff);
        const result7 = result1 * diff;
        let diff2 = result4 * sum - expResult * (result6 - result7 * Math.sin(result1 * _frameTime));
      } else {
        const _Math = Math;
        const expResult1 = Math.exp(-sqrtResult * _frameTime);
        diff1 = self._toValue - expResult1 * (diff + (tmp2 + sqrtResult * diff) * _frameTime);
        diff2 = expResult1 * (tmp2 * (_frameTime * sqrtResult - 1) + _frameTime * diff * (sqrtResult * sqrtResult));
      }
      self._lastTime = timestamp;
      self._lastPosition = diff1;
      self._lastVelocity = diff2;
      self._onUpdate(diff1);
      if (self.__active) {
        let flag = false;
        if (self._overshootClamping) {
          flag = false;
          if (self._stiffness !== 0) {
            if (self._startPosition < self._toValue) {
              flag = diff1 > self._toValue;
            } else {
              flag = diff1 < self._toValue;
            }
          }
        }
        const _Math9 = Math;
        let flag3 = true;
        if (self._stiffness !== 0) {
          const _Math10 = Math;
          flag3 = Math.abs(self._toValue - diff1) <= self._restDisplacementThreshold;
        }
        if (!flag) {
          const _requestAnimationFrame = requestAnimationFrame;
          const onUpdate = self.onUpdate;
          self._animationFrame = requestAnimationFrame(onUpdate.bind(self));
        }
        if (self._stiffness !== 0) {
          self._lastPosition = self._toValue;
          self._lastVelocity = 0;
          self._onUpdate(self._toValue);
        }
        const obj = { finished: true };
        self.__notifyAnimationEnd(obj);
      }
    }
  };
  items[4] = {
    key: "stop",
    value: function stop() {
      const self = this;
      closure_1_12(SpringAnimation, "stop", this, 3)([]);
      clearTimeout(this._timeout);
      if (this._animationFrame != null) {
        SpringAnimation.cancelAnimationFrame(self._animationFrame);
      }
      self.__notifyAnimationEnd({ finished: false });
    }
  };
  return closure_2.default(SpringAnimation, items);
})(Animation.default);
