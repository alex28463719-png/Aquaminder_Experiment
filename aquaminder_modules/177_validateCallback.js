// Module ID: 177
// Function ID: 1961
// Name: validateCallback
// Dependencies: [1, 12, 13, 175, 176, 178]

// Module 177 (validateCallback)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import Event from "Event" /* 175 */;
import getComposedPath from "getComposedPath" /* 176 */;
import dispatchTrustedEvent from "dispatchTrustedEvent" /* 178 */;
import module_1 from "module_1" /* 1 */;

function validateCallback(arg0, arg1) {
  if (typeof arg0 !== "function") {
    if (tmp !== "object") {
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Failed to execute '" + arg1 + "' on 'EventTarget': parameter 2 is not of type 'Object'.");
      throw typeError;
    }
  }
}
function getDefaultPassiveValue(arg0, arg1) {
  return false;
}
function dispatch(arg0, bubbles) {
  setEventDispatchFlag(bubbles, true);
  const arr = getEventPath(arg0, undefined);
  getComposedPath.setComposedPath(bubbles, arr);
  getComposedPath.setTarget(bubbles, arg0);
  let diff = arr.length - 1;
  if (diff >= 0) {
    while (!getComposedPath.getStopPropagationFlag(bubbles)) {
      let tmp9 = arr[diff];
      let tmp10 = require;
      let tmp11 = dependencyMap;
      let tmp12 = bubbles;
      let tmp13 = arg0;
      if (tmp9 === arg0) {
        let tmp15 = mod;
        let CAPTURING_PHASE = mod.default.AT_TARGET;
      } else {
        let tmp14 = mod;
        CAPTURING_PHASE = mod.default.CAPTURING_PHASE;
      }
      let setEventPhaseResult = getComposedPath.setEventPhase(bubbles, CAPTURING_PHASE);
      let tmp17 = invoke;
      let tmp18 = bubbles;
      let tmp19 = mod;
      let tmp20 = invoke(tmp9, bubbles, mod.default.CAPTURING_PHASE);
      diff = diff - 1;
      if (diff < 0) {
        break;
      }
    }
  }
  const iter = arr[Symbol.iterator]();
  while (true) {
    let nextResult = iter.next();
    let tmp22 = iter;
    if (iter === undefined) {
      break;
    } else {
      let tmp23 = nextResult;
      let tmp24 = require;
      let tmp25 = dependencyMap;
      let tmp26 = bubbles;
      if (getComposedPath.getStopPropagationFlag(bubbles)) {
        iter.return();
        break;
      } else {
        let tmp27 = bubbles;
        if (!bubbles.bubbles) {
          let tmp28 = nextResult;
          let tmp29 = arg0;
          if (tmp23 !== arg0) {
            iter.return();
            break;
          }
        }
        let tmp30 = require;
        let tmp31 = dependencyMap;
        let setEventPhase = getComposedPath.setEventPhase;
        let tmp32 = bubbles;
        let tmp33 = nextResult;
        let tmp34 = arg0;
        if (tmp23 === arg0) {
          let tmp36 = mod;
          let BUBBLING_PHASE = mod.default.AT_TARGET;
        } else {
          let tmp35 = mod;
          BUBBLING_PHASE = mod.default.BUBBLING_PHASE;
        }
        let setEventPhaseResult1 = setEventPhase(tmp32, BUBBLING_PHASE);
        let tmp38 = invoke;
        setEventPhase = nextResult;
        tmp32 = bubbles;
        let tmp39 = mod;
        let tmp40 = invoke(nextResult, bubbles, mod.default.BUBBLING_PHASE);
      }
      break;
    }
    let tmp41 = require;
    let tmp42 = dependencyMap;
    let tmp43 = mod;
    let setEventPhaseResult2 = getComposedPath.setEventPhase(bubbles, mod.default.NONE);
    let tmp45 = null;
    let setCurrentTargetResult = getComposedPath.setCurrentTarget(bubbles, null);
    let setComposedPathResult1 = getComposedPath.setComposedPath(bubbles, []);
    let tmp48 = setEventDispatchFlag;
    let flag = false;
    let tmp49 = setEventDispatchFlag(bubbles, false);
    let result = getComposedPath.setStopImmediatePropagationFlag(bubbles, false);
    let result1 = getComposedPath.setStopPropagationFlag(bubbles, false);
  }
}
function getEventPath(arg0, arg1) {
  let tmp = arg0;
  const items = [];
  if (arg0 != null) {
    do {
      let arr = items.push(tmp);
      let tmp3 = require;
      let tmp4 = dependencyMap;
      tmp = tmp[dispatchTrustedEvent.EVENT_TARGET_GET_THE_PARENT_KEY]();
    } while (tmp != null);
  }
  return items;
}
function invoke(removeEventListener, type) {
  const obj = getListenersForPhase(removeEventListener, arg2 === mod.default.CAPTURING_PHASE);
  getComposedPath.setCurrentTarget(type, removeEventListener);
  let value;
  if (obj != null) {
    value = obj.get(type.type);
  }
  if (value != null) {
    const _Array = Array;
    const arr = Array.from(value.values());
    getComposedPath.setCurrentTarget(type, removeEventListener);
    const iter = arr[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp7 = nextResult;
      if (nextResult.removed) {
        continue;
      } else {
        let tmp8 = nextResult;
        if (tmp7.once) {
          let tmp9 = removeEventListener;
          let tmp10 = type;
          let tmp11 = nextResult;
          let tmp12 = arg2;
          let tmp13 = mod;
          let removed = removeEventListener.removeEventListener(type.type, tmp7.callback, arg2 === mod.default.CAPTURING_PHASE);
        }
        let tmp15 = nextResult;
        if (tmp7.passive) {
          let tmp16 = require;
          let tmp17 = dependencyMap;
          let tmp18 = type;
          let result = getComposedPath.setInPassiveListenerFlag(type, true);
        }
        let tmp20 = global;
        let event = global.event;
        let tmp21 = type;
        global.event = type;
        let tmp22 = nextResult;
        let callback = tmp7.callback;
        try {
          let tmp23 = callback;
          if (typeof callback === "function") {
            let tmp28 = callback;
            let tmp29 = removeEventListener;
            let tmp30 = type;
            let callResult = callback.call(removeEventListener, type);
          } else {
            let tmp24 = callback;
            if (typeof callback.handleEvent === "function") {
              let tmp25 = callback;
              let tmp26 = type;
              let handleEventResult = callback.handleEvent(type);
            }
          }
          let tmp34 = nextResult;
          if (tmp7.passive) {
            let tmp35 = require;
            let tmp36 = dependencyMap;
            let tmp37 = type;
            let result1 = getComposedPath.setInPassiveListenerFlag(type, false);
          }
          let tmp39 = global;
          let tmp40 = event;
          global.event = event;
          let tmp41 = require;
          let tmp42 = dependencyMap;
          let tmp43 = type;
          if (getComposedPath.getStopImmediatePropagationFlag(type)) {
            iter.return();
            break;
          }
          break;
        } catch (tmp32) {
          let _console = tmp.console;
          let errorResult = _console.error(tmp32);
        }
      }
    }
  }
}
function getListenersForPhase(removeEventListener, arg1) {
  if (arg1) {
    let tmp2 = removeEventListener[closure_6];
  } else {
    tmp2 = removeEventListener[closure_7];
  }
  return tmp2;
}
function setListenersMap(arg0, arg1, arg2) {
  if (arg1) {
    arg0[closure_6] = arg2;
  } else {
    arg0[closure_7] = arg2;
  }
}
function getEventDispatchFlag(arg0) {
  return arg0[closure_8];
}
function setEventDispatchFlag(bubbles, arg1) {
  bubbles[closure_8] = arg1;
}
let closure_3 = module_1(_classCallCheck);
let closure_4 = module_1(_defineProperties);
let closure_5 = module_1(Event);
let closure_6 = Symbol("capturingListeners");
let closure_7 = Symbol("bubblingListeners");
let closure_8 = Symbol("Event.dispatch");

export default (() => {
  class EventTarget {
    constructor() {
      defaultResult = closure_1_3.default(this, EventTarget);
      return;
    }
  }
  let obj = {
    key: "addEventListener",
    value: function addEventListener(arg0, callback) {
      const self = this;
      closure_0 = callback;
      if (arguments.length > 2) {
        if (arguments[2] !== undefined) {
          let obj = arguments[2];
        }
        if (arguments.length < 2) {
          const _TypeError2 = TypeError;
          const _HermesInternal = HermesInternal;
          const typeError = new TypeError("Failed to execute 'addEventListener' on 'EventTarget': 2 arguments required, but only " + arguments.length + " present.");
          throw typeError;
        } else if (callback != null) {
          closure_1_9(callback, "addEventListener");
          const _String = String;
          const StringResult = String(arg0);
          if (obj != null) {
            if (typeof obj !== "object") {
              const obj2 = closure_1_14(self, BooleanResult2);
              let value;
              if (obj2 != null) {
                value = obj2.get(StringResult);
              }
              if (value == null) {
                let obj3 = obj2;
                if (obj2 == null) {
                  const _Map = Map;
                  const map = new Map();
                  closure_1_15(self, BooleanResult2, map);
                  obj3 = map;
                }
                const _Map2 = Map;
                const map1 = new Map();
                const result = obj3.set(StringResult, map1);
                value = map1;
              }
              obj = { callback, passive: flag, once: flag2, removed: false };
              const result1 = value.set(callback, obj);
              closure_2 = value;
              if (tmp3 != null) {
                obj = { once: true };
                const listener = tmp3.addEventListener("abort", () => {
                  obj.removed = true;
                  if (value.get(closure_0) === obj) {
                    value.delete(closure_0);
                  }
                }, obj);
              }
            }
            const _Boolean2 = Boolean;
            const BooleanResult = Boolean(obj.capture);
            if (obj.passive == null) {
              closure_1_10(undefined, undefined);
              let flag3 = false;
            } else {
              const _Boolean3 = Boolean;
              flag3 = Boolean(obj.passive);
            }
            const _Boolean4 = Boolean;
            const BooleanResult1 = Boolean(obj.once);
            const signal = obj.signal;
            BooleanResult2 = BooleanResult;
            flag = flag3;
            flag2 = BooleanResult1;
            tmp3 = signal;
            if (signal !== undefined) {
              const _AbortSignal = AbortSignal;
              BooleanResult2 = BooleanResult;
              flag = flag3;
              flag2 = BooleanResult1;
              tmp3 = signal;
              if (!(signal instanceof AbortSignal)) {
                const _TypeError = TypeError;
                const typeError1 = new TypeError("Failed to execute 'addEventListener' on 'EventTarget': Failed to read the 'signal' property from 'AddEventListenerOptions': Failed to convert value to 'AbortSignal'.");
                throw typeError1;
              }
            }
          }
          const _Boolean = Boolean;
          BooleanResult2 = Boolean(obj);
          flag = false;
          flag2 = false;
          tmp3 = null;
        }
      }
      obj = {};
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "removeEventListener",
    value: function removeEventListener(arg0, arg1) {
      if (arguments.length > 2) {
        if (arguments[2] !== undefined) {
          let obj = arguments[2];
        }
        if (arguments.length < 2) {
          const _TypeError = TypeError;
          const _HermesInternal = HermesInternal;
          const typeError = new TypeError("Failed to execute 'removeEventListener' on 'EventTarget': 2 arguments required, but only " + arguments.length + " present.");
          throw typeError;
        } else if (arg1 != null) {
          closure_1_9(arg1, "removeEventListener");
          const _String = String;
          let BooleanResult = obj;
          if (typeof obj !== "boolean") {
            const _Boolean = Boolean;
            BooleanResult = Boolean(obj.capture);
          }
          const self = this;
          const obj2 = closure_1_14(this, BooleanResult);
          let value;
          if (obj2 != null) {
            value = obj2.get(StringResult);
          }
          if (value != null) {
            value = value.get(arg1);
            if (value != null) {
              value.removed = true;
              value.delete(arg1);
            }
          }
          StringResult = String(arg0);
        }
      }
      obj = {};
    }
  };
  items[1] = obj;
  obj = {
    key: "dispatchEvent",
    value: function dispatchEvent(defaultPrevented) {
      if (defaultPrevented instanceof closure_1_5.default) {
        if (closure_1_16(defaultPrevented)) {
          const _Error = Error;
          const error = new Error("Failed to execute 'dispatchEvent' on 'EventTarget': The event is already being dispatched.");
          throw error;
        } else {
          closure_1_1(closure_1_2[4]).setIsTrusted(defaultPrevented, false);
          const self = this;
          closure_1_11(this, defaultPrevented);
          return !defaultPrevented.defaultPrevented;
        }
      } else {
        const _TypeError = TypeError;
        const typeError = new TypeError("Failed to execute 'dispatchEvent' on 'EventTarget': parameter 1 is not of type 'Event'.");
        throw typeError;
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: dispatchTrustedEvent.EVENT_TARGET_GET_THE_PARENT_KEY,
    value() {
      return null;
    }
  };
  const obj1 = {
    key: dispatchTrustedEvent.EVENT_TARGET_GET_THE_PARENT_KEY,
    value() {
      return null;
    }
  };
  items[4] = {
    key: dispatchTrustedEvent.INTERNAL_DISPATCH_METHOD_KEY,
    value(arg0) {
      closure_1_11(this, arg0);
    }
  };
  return closure_4.default(EventTarget, items);
})();
