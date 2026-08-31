// Module ID: 316
// Function ID: 3733
// Name: attachNativeEvent
// Dependencies: [1, 12, 13, 304, 317, 324, 20, 57]

// Module 316 (attachNativeEvent)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import invariant from "invariant" /* 20 */;
import ensureGlobalEventEmitterListeners from "ensureGlobalEventEmitterListeners" /* 304 */;
import _callSuper from "_callSuper" /* 317 */;
import _callSuper2 from "_callSuper" /* 324 */;
import module_1 from "module_1" /* 1 */;

function attachNativeEvent(nativeScrollRef, onScroll, items) {
  const _require = onScroll;
  dependencyMap = arg3;
  items = [];
  function traverse(nativeEvent, nativeEventPath) {
    if (nativeEvent instanceof closure_1_5.default) {
      nativeEvent.__makeNative(closure_1);
      const obj = { nativeEventPath, animatedValueTag: nativeEvent.__getNativeTag() };
      items.push(obj);
    } else if (nativeEvent instanceof closure_1_6.default) {
      traverse(nativeEvent.x, nativeEventPath.concat("x"));
      traverse(nativeEvent.y, nativeEventPath.concat("y"));
    } else if (typeof nativeEvent === "object") {
      for (const key10010 in arg0) {
        let tmp10 = key10010;
        let tmp11 = traverse;
        let tmp12 = traverse(arg0[key10010], arg1.concat(key10010));
        continue;
      }
    }
  }
  let nativeEvent = items[0];
  if (nativeEvent) {
    nativeEvent = items[0].nativeEvent;
  }
  closure_7.default(nativeEvent, "Native driven events only support animated values contained inside `nativeEvent`.");
  traverse(items[0].nativeEvent, []);
  const findNodeHandleResult = _require(57).findNodeHandle(nativeScrollRef);
  if (findNodeHandleResult != null) {
    let item = items.forEach((arg0) => {
      const API = findNodeHandleResult.default.API;
      const result = API.addAnimatedEventToView(closure_4, closure_0, arg0);
    });
  }
  return {
    detach() {
      if (closure_4 != null) {
        const item = items.forEach((animatedValueTag) => {
          const API = findNodeHandleResult.default.API;
          const result = API.removeAnimatedEventFromView(closure_1_4, closure_1_0, animatedValueTag.animatedValueTag);
        });
      }
    }
  };
}
let closure_2 = module_1(_classCallCheck);
let closure_3 = module_1(_defineProperties);
let closure_4 = module_1(ensureGlobalEventEmitterListeners);
let closure_5 = module_1(_callSuper);
let closure_6 = module_1(_callSuper2);
let closure_7 = module_1(invariant);

export { attachNativeEvent };
export const AnimatedEvent = (() => {
  class AnimatedEvent {
    constructor(arg0, arg1) {
      tmp = arg1;
      self = this;
      self = this;
      defaultResult = closure_1_2.default(this, self);
      this._listeners = [];
      this._callListeners = () => {
        const length = arguments.length;
        const array = new Array(length);
        for (let num = 0; num < length; num = num + 1) {
          array[num] = arguments[num];
        }
        const _listeners = array._listeners;
        const item = _listeners.forEach((apply) => apply.apply(undefined, array));
      };
      this._argMapping = arg0;
      if (arg1 == null) {
        tmp3 = globalThis;
        _console = console;
        str = "Animated.event now requires a second argument for options";
        warnResult = console.warn("Animated.event now requires a second argument for options");
        obj = {};
        flag = false;
        obj.useNativeDriver = false;
        tmp = obj;
      }
      if (tmp.listener) {
        __addListenerResult = self.__addListener(tmp.listener);
      }
      self._attachedEvent = null;
      _default = closure_1_4.default;
      self.__isNative = _default.shouldUseNativeDriver(tmp);
      self.__platformConfig = tmp.platformConfig;
      return;
    }
  }
  let obj = {
    key: "__addListener",
    value: function __addListener(listener) {
      const _listeners = this._listeners;
      _listeners.push(listener);
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "__removeListener",
    value: function __removeListener(arg0) {
      closure_0 = arg0;
      const _listeners = this._listeners;
      this._listeners = _listeners.filter((arg0) => arg0 !== closure_0);
    }
  };
  items[1] = obj;
  obj = {
    key: "__attach",
    value: function __attach(arg0, arg1) {
      closure_1_7.default(this.__isNative, "Only native driven events need to be attached.");
      this._attachedEvent = closure_1_8(arg0, arg1, this._argMapping, this.__platformConfig);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "__detach",
    value: function __detach(arg0, arg1) {
      closure_1_7.default(this.__isNative, "Only native driven events need to be detached.");
      if (this._attachedEvent) {
        const _attachedEvent = this._attachedEvent;
        _attachedEvent.detach();
      }
    }
  };
  items[4] = {
    key: "__getHandler",
    value: function __getHandler() {
      const self = this;
      return this.__isNative ? this._callListeners : (() => {
        const length = arguments.length;
        const array = new Array(length);
        for (let num = 0; num < length; num = num + 1) {
          array[num] = arguments[num];
        }
        function traverse(setValue, num) {
          if (setValue instanceof closure_3_5.default) {
            if (typeof num === "number") {
              setValue.setValue(num);
            }
          } else if (setValue instanceof closure_3_6.default) {
            if (typeof num === "object") {
              traverse(setValue.x, num.x);
              traverse(setValue.y, num.y);
            }
          } else if (typeof setValue === "object") {
            for (const key10010 in arg0) {
              let tmp8 = key10010;
              let tmp9 = traverse;
              let tmp10 = traverse(arg0[key10010], arg1[key10010]);
              continue;
            }
          }
        }
        const _argMapping = array._argMapping;
        const item = _argMapping.forEach((arg0, arg1) => {
          traverse(arg0, array[arg1]);
        });
        const _callListeners = array._callListeners;
        _callListeners.apply(array, array);
      });
    }
  };
  return closure_3.default(AnimatedEvent, items);
})();
