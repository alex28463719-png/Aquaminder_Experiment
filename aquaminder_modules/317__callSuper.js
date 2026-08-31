// Module ID: 317
// Function ID: 3752
// Name: _callSuper
// Dependencies: [1, 12, 13, 23, 25, 26, 28, 31, 32, 304, 318, 321, 313]

// Module 317 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _get from "_get" /* 26 */;
import _inherits from "_inherits" /* 28 */;
import _classPrivateFieldBase from "_classPrivateFieldBase" /* 31 */;
import _classPrivateFieldKey2 from "_classPrivateFieldKey" /* 32 */;
import ensureGlobalEventEmitterListeners2 from "ensureGlobalEventEmitterListeners" /* 304 */;
import _callSuper2 from "_callSuper" /* 313 */;
import _scheduleUpdate from "_scheduleUpdate" /* 318 */;
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
function flushValue(self) {
  function findAnimatedStyles(update) {
    if (typeof update.update === "function") {
      set.add(update);
    } else {
      const item = update.__getChildren().forEach(findAnimatedStyles);
      const __getChildrenResult = update.__getChildren();
    }
  }
  const set = new Set();
  findAnimatedStyles(self);
  let item = set.forEach((update) => update.update());
}
function _executeAsAnimatedBatch(combined) {
  const result = API.setWaitingForIdentifier(combined);
  arg1();
  const result1 = API.unsetWaitingForIdentifier(combined);
}
function _ensureUpdateSubscriptionExists2() {
  let self = this;
  self = this;
  if (closure_6.default(this, closure_12)[closure_12] == null) {
    const __getNativeTagResult = self.__getNativeTag();
    let result = API.startListeningToAnimatedNodeValue(__getNativeTagResult);
    const nativeEventEmitter = ensureGlobalEventEmitterListeners.default.nativeEventEmitter;
    closure_2 = nativeEventEmitter.addListener("onAnimatedValueUpdate", (tag) => {
      if (tag.tag === closure_1) {
        const result = self.__onAnimatedValueUpdateReceived(tag.value);
      }
    });
    const obj = {
      remove() {
          if (closure_1_6.default(self, closure_1_12)[closure_1_12] != null) {
            closure_1_6.default(self, closure_1_12)[closure_1_12] = null;
            closure_2.remove();
            const result = closure_1_10.stopListeningToAnimatedNodeValue(closure_1);
          }
        }
    };
    closure_6.default(self, closure_12)[closure_12] = obj;
  }
}
let closure_0 = module_1(_classCallCheck);
let closure_1 = module_1(_defineProperties);
let closure_2 = module_1(_possibleConstructorReturn);
let closure_3 = module_1(_getPrototypeOf);
let closure_4 = module_1(_get);
let closure_5 = module_1(_inherits);
let closure_6 = module_1(_classPrivateFieldBase);
const _classPrivateFieldKey = module_1(_classPrivateFieldKey2);
const ensureGlobalEventEmitterListeners = module_1(ensureGlobalEventEmitterListeners2);
let closure_8 = module_1(_scheduleUpdate);
let closure_9 = module_1(_callSuper3);
const API = ensureGlobalEventEmitterListeners.default.API;
_callSuper = module_1(_callSuper2);
const field = _classPrivateFieldKey.default("listenerCount");
const field2 = _classPrivateFieldKey.default("updateSubscription");
const field3 = _classPrivateFieldKey.default("ensureUpdateSubscriptionExists");

export { flushValue };
export default ((arg0) => {
  class AnimatedValue {
    constructor(arg0, arg1) {
      defaultResult = AnimatedValue.default(this, AnimatedValue);
      items = [];
      items[0] = arg1;
      obj = closure_1_14(this, AnimatedValue, items);
      obj = { value: closure_1_19 };
      definePropertyResult = Object.defineProperty(obj, closure_1_13, obj);
      definePropertyResult1 = Object.defineProperty(obj, closure_1_11, { writable: true, value: 0 });
      definePropertyResult2 = Object.defineProperty(obj, closure_1_12, { writable: true, value: null });
      if (typeof arg0 !== "number") {
        _Error = Error;
        prototype = Error.prototype;
        tmp6 = new.target;
        str = "AnimatedValue: Attempting to set value to undefined";
        tmp7 = new.target;
        error = new Error("AnimatedValue: Attempting to set value to undefined");
        tmp9 = error;
        throw error;
      } else {
        obj._value = arg0;
        obj._startingValue = arg0;
        obj._offset = 0;
        obj._animation = null;
        if (arg1) {
          if (arg1.useNativeDriver) {
            __makeNativeResult = obj.__makeNative();
          }
        }
        return obj;
      }
    }
  }
  closure_5.default(AnimatedValue, arg0);
  let obj = {
    key: "__detach",
    value: function __detach() {
      let self = this;
      self = this;
      if (this.__isNative) {
        const value = closure_1_10.getValue(self.__getNativeTag(), (arg0) => {
          self._value = arg0 - self._offset;
        });
      }
      self.stopAnimation();
      closure_1_16(self, "__detach", self, 3)([]);
    }
  };
  let items = [obj, , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "__getValue",
    value: function __getValue() {
      return this._value + this._offset;
    }
  };
  items[1] = obj;
  obj = {
    key: "__makeNative",
    value: function __makeNative(arg0) {
      const items = [arg0];
      closure_1_16(AnimatedValue, "__makeNative", this, 3)(items);
      if (closure_1_6.default(this, closure_1_11)[closure_1_11] > 0) {
        closure_1_6.default(this, closure_1_13)[closure_1_13]();
        const defaultResult = closure_1_6.default(this, closure_1_13);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "addListener",
    value: function addListener(arg0) {
      const items = [arg0];
      const defaultResult = closure_1_6.default(this, closure_1_11);
      defaultResult[closure_1_11] = defaultResult[closure_1_11] + 1;
      if (this.__isNative) {
        closure_1_6.default(this, closure_1_13)[closure_1_13]();
        const defaultResult1 = closure_1_6.default(this, closure_1_13);
      }
      return closure_1_16(AnimatedValue, "addListener", this, 3)(items);
    }
  };
  items[4] = {
    key: "removeListener",
    value: function removeListener(arg0) {
      const self = this;
      const items = [arg0];
      closure_1_16(AnimatedValue, "removeListener", this, 3)(items);
      const defaultResult = closure_1_6.default(this, closure_1_11);
      defaultResult[closure_1_11] = defaultResult[closure_1_11] - 1;
      if (this.__isNative) {
        if (closure_1_6.default(self, closure_1_11)[closure_1_11] === 0) {
          const obj = closure_1_6.default(self, closure_1_12)[closure_1_12];
          if (obj != null) {
            obj.remove();
          }
        }
      }
    }
  };
  items[5] = {
    key: "removeAllListeners",
    value: function removeAllListeners() {
      closure_1_16(AnimatedValue, "removeAllListeners", this, 3)([]);
      closure_1_6.default(this, closure_1_11)[closure_1_11] = 0;
      if (this.__isNative) {
        const obj = closure_1_6.default(this, closure_1_12)[closure_1_12];
        if (obj != null) {
          obj.remove();
        }
      }
    }
  };
  items[6] = {
    key: "setValue",
    value: function setValue(_value) {
      let self = this;
      closure_0 = _value;
      self = this;
      if (this._animation) {
        const _animation = self._animation;
        _animation.stop();
        self._animation = null;
      }
      self._updateValue(_value, !self.__isNative);
      if (self.__isNative) {
        closure_1_18(self.__getNativeTag().toString(), () => closure_2_10.setAnimatedNodeValue(self.__getNativeTag(), closure_0));
        const str = self.__getNativeTag();
      }
    }
  };
  items[7] = {
    key: "setOffset",
    value: function setOffset(_offset) {
      const self = this;
      this._offset = _offset;
      if (this.__isNative) {
        const result = closure_1_10.setAnimatedNodeOffset(self.__getNativeTag(), _offset);
      }
    }
  };
  items[8] = {
    key: "flattenOffset",
    value: function flattenOffset() {
      const self = this;
      this._value = this._value + this._offset;
      this._offset = 0;
      if (this.__isNative) {
        const result = closure_1_10.flattenAnimatedNodeOffset(self.__getNativeTag());
      }
    }
  };
  items[9] = {
    key: "extractOffset",
    value: function extractOffset() {
      const self = this;
      this._offset = this._offset + this._value;
      this._value = 0;
      if (this.__isNative) {
        const result = closure_1_10.extractAnimatedNodeOffset(self.__getNativeTag());
      }
    }
  };
  items[10] = {
    key: "stopAnimation",
    value: function stopAnimation(arg0) {
      const self = this;
      this.stopTracking();
      if (this._animation) {
        const _animation = self._animation;
        _animation.stop();
      }
      self._animation = null;
      if (arg0) {
        if (self.__isNative) {
          const value = closure_1_10.getValue(self.__getNativeTag(), arg0);
        } else {
          arg0(self.__getValue());
        }
      }
    }
  };
  items[11] = {
    key: "resetAnimation",
    value: function resetAnimation(arg0) {
      const self = this;
      this.stopAnimation(arg0);
      this._value = this._startingValue;
      if (this.__isNative) {
        closure_1_10.setAnimatedNodeValue(self.__getNativeTag(), self._startingValue);
      }
    }
  };
  items[12] = {
    key: "__onAnimatedValueUpdateReceived",
    value: function __onAnimatedValueUpdateReceived(_value) {
      this._updateValue(_value, false);
    }
  };
  items[13] = {
    key: "interpolate",
    value: function interpolate(arg0) {
      return new closure_1_9.default(this, arg0);
    }
  };
  items[14] = {
    key: "animate",
    value: function animate(_default, _callback) {
      let self = this;
      closure_0 = _callback;
      self = this;
      closure_2 = null;
      if (_default.__isInteraction) {
        closure_2 = closure_1_8.default.createInteractionHandle();
        _default = closure_1_8.default;
      }
      if (self._animation) {
        const _animation = self._animation;
        _animation.stop();
      }
      self._animation = _default;
      _default.start(self._value, (_value) => {
        self._updateValue(_value, true);
      }, (arg0) => {
        self._animation = null;
        if (closure_2 !== null) {
          const result = closure_2_8.default.clearInteractionHandle(closure_2);
          const _default = closure_2_8.default;
        }
        if (_callback) {
          _callback(arg0);
        }
      }, self._animation, self);
    }
  };
  items[15] = {
    key: "stopTracking",
    value: function stopTracking() {
      const self = this;
      if (this._tracking) {
        const _tracking = self._tracking;
        _tracking.__detach();
      }
      self._tracking = null;
    }
  };
  items[16] = {
    key: "track",
    value: function track(_default2) {
      this.stopTracking();
      this._tracking = _default2;
      if (this._tracking) {
        const _tracking = this._tracking;
        _tracking.update();
      }
    }
  };
  items[17] = {
    key: "_updateValue",
    value: function _updateValue(_value, arg1) {
      const self = this;
      if (_value === undefined) {
        const _Error = Error;
        const error = new Error("AnimatedValue: Attempting to set value to undefined");
        throw error;
      } else {
        self._value = _value;
        if (arg1) {
          closure_1_17(self);
        }
        self.__callListeners(self.__getValue());
      }
    }
  };
  items[18] = {
    key: "__getNativeConfig",
    value: function __getNativeConfig() {
      return { type: "value", value: this._value, offset: this._offset, debugID: this.__getDebugID() };
    }
  };
  return closure_1.default(AnimatedValue, items);
})(_callSuper.default);
