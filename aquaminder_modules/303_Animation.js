// Module ID: 303
// Function ID: 3522
// Name: Animation
// Dependencies: [1, 6, 12, 13, 31, 32, 304, 73, 310]

// Module 303 (Animation)
import _toConsumableArray from "_toConsumableArray" /* 6 */;
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _classPrivateFieldBase from "_classPrivateFieldBase" /* 31 */;
import _classPrivateFieldKey2 from "_classPrivateFieldKey" /* 32 */;
import animatedShouldDebounceQueueFlush2 from "animatedShouldDebounceQueueFlush" /* 73 */;
import ensureGlobalEventEmitterListeners from "ensureGlobalEventEmitterListeners" /* 304 */;
import _callSuper from "_callSuper" /* 310 */;
import module_1 from "module_1" /* 1 */;

let closure_0 = module_1(_toConsumableArray);
let closure_1 = module_1(_classCallCheck);
let closure_2 = module_1(_defineProperties);
let closure_3 = module_1(_classPrivateFieldBase);
const _classPrivateFieldKey = module_1(_classPrivateFieldKey2);
let closure_4 = module_1(ensureGlobalEventEmitterListeners);
const animatedShouldDebounceQueueFlush = _interopRequireWildcard(animatedShouldDebounceQueueFlush2);
let closure_5 = module_1(_callSuper);
let c6 = 1;
const field = _classPrivateFieldKey.default("nativeID");
const field2 = _classPrivateFieldKey.default("onEnd");
const field3 = _classPrivateFieldKey.default("useNativeDriver");

export default (() => {
  class Animation {
    constructor(arg0) {
      self = this;
      defaultResult = closure_1_1.default(this, Animation);
      definePropertyResult = Object.defineProperty(this, closure_1_7, { writable: true, value: undefined });
      definePropertyResult1 = Object.defineProperty(this, closure_1_8, { writable: true, value: undefined });
      definePropertyResult2 = Object.defineProperty(this, closure_1_9, { writable: true, value: undefined });
      _default = closure_1_4.default;
      defaultResult1 = closure_1_3.default(this, closure_1_9);
      defaultResult1[closure_1_9] = _default.shouldUseNativeDriver(arg0);
      this.__active = false;
      isInteraction = arg0.isInteraction;
      if (isInteraction == null) {
        tmp6 = closure_1_3;
        tmp7 = closure_1_9;
        isInteraction = !closure_1_3.default(self, closure_1_9)[closure_1_9];
      }
      self.__isInteraction = isInteraction;
      ({ isLooping: self.__isLooping, iterations } = arg0);
      num = 1;
      if (iterations != null) {
        num = iterations;
      }
      self.__iterations = num;
      return;
    }
  }
  let obj = {
    key: "start",
    value: function start(arg0, arg1, arg2, arg3, __isNative) {
      const self = this;
      if (!closure_1_3.default(this, closure_1_9)[closure_1_9]) {
        if (__isNative.__isNative === true) {
          const _Error = Error;
          const error = new Error("Attempting to run JS driven animation on animated node that has been moved to \"native\" earlier by starting an animation with `useNativeDriver: true`");
          throw error;
        }
      }
      closure_1_3.default(self, closure_1_8)[closure_1_8] = arg2;
      self.__active = true;
    }
  };
  let items = [obj, , , , , , ];
  obj = {
    key: "stop",
    value: function stop() {
      const self = this;
      if (closure_1_3.default(this, closure_1_7)[closure_1_7] != null) {
        const tmp14 = closure_1_3.default(self, closure_1_7)[closure_1_7];
        const _HermesInternal = HermesInternal;
        const combined = "" + tmp14 + ":stopAnimation";
        try {
          const API = closure_1_4.default.API;
          const result = API.setWaitingForIdentifier(combined);
          const API2 = closure_1_4.default.API;
          API2.stopAnimation(tmp14);
          const API3 = closure_1_4.default.API;
          const result1 = API3.unsetWaitingForIdentifier(combined);
        } catch (tmp9) {
          const API4 = closure_1_4.default.API;
          const result2 = API4.unsetWaitingForIdentifier(tmp);
          throw tmp9;
        }
      }
      self.__active = false;
    }
  };
  items[1] = obj;
  obj = {
    key: "__getNativeAnimationConfig",
    value: function __getNativeAnimationConfig() {
      const error = new Error("This animation type cannot be offloaded to native");
      throw error;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "__findAnimatedPropsNodes",
    value: function __findAnimatedPropsNodes(closure_0) {
      const self = this;
      const items = [];
      if (closure_0 instanceof closure_1_5.default) {
        items.push(closure_0);
        return items;
      } else {
        const __getChildrenResult = closure_0.__getChildren();
        for (const item10011 of __getChildrenResult) {
          let tmp3 = items;
          let push = items.push;
          let tmp4 = Animation;
          let applyResult = push.apply(items, Animation.default(self.__findAnimatedPropsNodes(item10011)));
          continue;
        }
        return items;
      }
    }
  };
  items[4] = {
    key: "__startAnimationIfNative",
    value: function __startAnimationIfNative(closure_0) {
      let self = this;
      self = this;
      if (closure_1_3.default(this, closure_1_9)[closure_1_9]) {
        const _HermesInternal = HermesInternal;
        const combined = "" + closure_6 + ":startAnimation";
        closure_6 = closure_6 + 1;
        const API = closure_1_4.default.API;
        let result = API.setWaitingForIdentifier(combined);
        try {
          let result1 = self.__getNativeAnimationConfig();
          closure_0.__makeNative(result1.platformConfig);
          closure_1_3.default(self, closure_1_7)[closure_1_7] = closure_1_4.default.generateNewAnimationId();
          const API2 = closure_1_4.default.API;
          API2.startAnimatingNode(closure_1_3.default(self, closure_1_7)[closure_1_7], closure_0.__getNativeTag(), result1, (value) => {
            self.__notifyAnimationEnd(value);
            value = value.value;
            if (value != null) {
              const result = closure_0.__onAnimatedValueUpdateReceived(value);
              if (self.__isLooping !== true) {
                const result1 = self.__findAnimatedPropsNodes(closure_0);
                const item = result1.forEach((update) => update.update());
              }
            }
          });
          const API3 = closure_1_4.default.API;
          const result2 = API3.unsetWaitingForIdentifier(tmp5);
          return true;
        } catch (tmp22) {
          const API4 = closure_1_4.default.API;
          const result3 = API4.unsetWaitingForIdentifier(tmp);
          throw tmp22;
        }
        tmp5 = combined;
      } else {
        return false;
      }
    }
  };
  items[5] = {
    key: "__notifyAnimationEnd",
    value: function __notifyAnimationEnd(value) {
      const tmp = closure_1_3.default(this, closure_1_8)[closure_1_8];
      if (tmp != null) {
        closure_1_3.default(this, closure_1_8)[closure_1_8] = null;
        tmp(value);
      }
    }
  };
  items[6] = {
    key: "__getDebugID",
    value: function __getDebugID() {

    }
  };
  return closure_2.default(Animation, items);
})();
