// Module ID: 198
// Function ID: 2159
// Name: pd
// Dependencies: []

// Module 198 (pd)
function pd(arg0) {
  const value = weakMap.get(arg0);
  console.assert(value != null, "'this' is expected an Event object, but got", arg0);
  return value;
}
function setCancelFlag(passiveListener) {
  if (passiveListener.passiveListener != null) {
    const _console = console;
    if (typeof console !== "undefined") {
      const _console2 = console;
      if (typeof console.error === "function") {
        const _console3 = console;
        console.error("Unable to preventDefault inside passive event listener invocation.", passiveListener.passiveListener);
      }
    }
  } else if (passiveListener.event.cancelable) {
    passiveListener.canceled = true;
    if (typeof passiveListener.event.preventDefault === "function") {
      const event = passiveListener.event;
      event.preventDefault();
    }
  }
}
class Event {
  constructor(arg0, arg1) {
    self = this;
    obj = { eventTarget: null, event: null, eventPhase: 2, currentTarget: null, canceled: false, stopped: false, immediateStopped: false, passiveListener: null };
    obj.eventTarget = global;
    obj.event = require;
    obj.currentTarget = global;
    timeStamp = require.timeStamp;
    tmp = closure_0;
    if (!timeStamp) {
      tmp2 = globalThis;
      _Date = Date;
      timeStamp = Date.now();
    }
    obj.timeStamp = timeStamp;
    result = closure_0.set(self, obj);
    definePropertyResult = Object.defineProperty(self, "isTrusted", { value: false, enumerable: true });
    keys = Object.keys(require);
    for (let num = 0; num < keys.length; num = num + 1) {
      tmp5 = keys[num];
      tmp6 = num;
      if (!(tmp5 in self)) {
        _Object = Object;
        tmp7 = defineRedirectDescriptor;
        definePropertyResult1 = Object.defineProperty(self, tmp5, defineRedirectDescriptor(tmp5));
      }
    }
    return;
  }
}
function defineRedirectDescriptor(arg0) {
  closure_0 = arg0;
  return {
    get() {
      return closure_1_6(this).event[closure_0];
    },
    set(arg0) {
      closure_1_6(this).event[closure_0] = arg0;
    },
    configurable: true,
    enumerable: true
  };
}
function defineCallDescriptor(arg0) {
  closure_0 = arg0;
  const obj = {
    value() {
      const event = closure_1_6(this).event;
      return event[closure_0](...arguments);
    },
    configurable: true,
    enumerable: true
  };
  return obj;
}
function defineWrapper(wrapper, prototypeOf) {
  closure_0 = wrapper;
  class CustomEvent {
    constructor(arg0, arg1) {
      callResult = closure_0.call(this, wrapper, prototypeOf);
      return;
    }
  }
  const keys = Object.keys(prototypeOf);
  if (keys.length === 0) {
    return wrapper;
  } else {
    const _Object2 = Object;
    let obj = {};
    obj = { value: null, configurable: true, writable: true };
    class CustomEvent {
      constructor(arg0, arg1) {
        callResult = closure_0.call(this, wrapper, prototypeOf);
        return;
      }
    }
    obj.constructor = obj;
    CustomEvent.prototype = Object.create(wrapper.prototype, obj);
    if (0 < keys.length) {
      class CustomEvent {
        constructor(arg0, arg1) {
          callResult = closure_0.call(this, wrapper, prototypeOf);
          return;
        }
      }
      const _Object = Object;
      if (typeof Object.getOwnPropertyDescriptor(prototypeOf, keys[num]).value === "function") {
        let tmp4 = defineCallDescriptor(tmp);
      } else {
        tmp4 = defineRedirectDescriptor(tmp);
      }
      Object.defineProperty(CustomEvent.prototype, keys[num], tmp4);
    }
    return CustomEvent;
  }
}
function getWrapper(prototypeOf) {
  if (prototypeOf != null) {
    const _Object = Object;
    if (prototypeOf !== Object.prototype) {
      let value = weakMap1.get(prototypeOf);
      if (value == null) {
        const _Object2 = Object;
        const tmp6 = defineWrapper(getWrapper(Object.getPrototypeOf(prototypeOf)), prototypeOf);
        const result = weakMap1.set(prototypeOf, tmp6);
        value = tmp6;
      }
      return value;
    }
  }
  return Event;
}
function wrapEvent(self, type) {
  let tmp = getWrapper(Object.getPrototypeOf(type));
  tmp = new tmp(self, type);
  return tmp;
}
function isStopped(arg0) {
  return pd(arg0).immediateStopped;
}
function setEventPhase(arg0, arg1) {
  pd(arg0).eventPhase = 0;
}
function setCurrentTarget(arg0, arg1) {
  pd(arg0).currentTarget = null;
}
function setPassiveListener(arg0, passiveListener) {
  pd(arg0).passiveListener = passiveListener;
}
function isObject(obj) {
  let tmp = obj !== null;
  if (tmp) {
    tmp = typeof obj === "object";
  }
  return tmp;
}
function getListeners(self) {
  const value = weakMap2.get(self);
  if (value == null) {
    const _TypeError = TypeError;
    const typeError = new TypeError("'this' is expected an EventTarget object, but got another value.");
    throw typeError;
  } else {
    return value;
  }
}
function defineEventAttributeDescriptor(abort) {
  closure_0 = abort;
  return {
    get() {
      let iter = closure_1_19(this).get(closure_0);
      if (iter != null) {
        while (iter.listenerType !== closure_1_5) {
          iter = iter.next;
        }
        return iter.listener;
      }
      return null;
    },
    set(fn) {
      let tmp = fn;
      if (typeof fn !== "function") {
        tmp = fn;
        if (!closure_1_18(fn)) {
          tmp = null;
        }
      }
      let obj = closure_1_19(this);
      const value = obj.get(closure_0);
      let tmp4 = null;
      let iter = value;
      let tmp5 = null;
      if (value != null) {
        do {
          let tmp6 = closure_1_5;
          let tmp7 = tmp4;
          let tmp8 = iter;
          let tmp9 = iter;
          if (iter.listenerType === closure_1_5) {
            if (tmp4 !== null) {
              tmp4.next = iter.next;
              tmp9 = tmp4;
            } else if (iter.next !== null) {
              let tmp12 = closure_0;
              let result = obj.set(closure_0, iter.next);
              tmp9 = tmp4;
            } else {
              let tmp10 = closure_0;
              let deleteResult = obj.delete(closure_0);
              tmp9 = tmp4;
            }
          }
          iter = iter.next;
          tmp4 = tmp9;
          tmp5 = tmp9;
        } while (iter != null);
      }
      if (tmp !== null) {
        obj = { listener: tmp, listenerType: closure_1_5, passive: false, once: false, next: null };
        if (tmp5 === null) {
          const result1 = obj.set(closure_0, obj);
        } else {
          tmp5.next = obj;
        }
      }
    },
    configurable: true,
    enumerable: true
  };
}
function defineEventAttribute(prototype, abort) {
  const combined = "on" + abort;
  Object.defineProperty(prototype, combined, defineEventAttributeDescriptor(abort));
}
function defineCustomEventTarget(array) {
  let length;
  class CustomEventTarget {
    constructor() {
      callResult = closure_1_23.call(this);
      return;
    }
  }
  const obj = { value: CustomEventTarget, configurable: true, writable: true };
  CustomEventTarget.prototype = Object.create(EventTarget.prototype, { constructor: obj });
  let num = 0;
  if (0 < array.length) {
    do {
      let tmp = defineEventAttribute;
      let tmp2 = defineEventAttribute(CustomEventTarget.prototype, array[num]);
      num = num + 1;
      length = array.length;
    } while (num < length);
  }
  return CustomEventTarget;
}
class EventTarget {
  constructor() {
    if (this instanceof EventTarget) {
      tmp15 = closure_2;
      tmp16 = globalThis;
      _Map = Map;
      prototype3 = Map.prototype;
      tmp17 = new.target;
      tmp18 = new.target;
      map = new Map();
      tmp20 = map;
      result = closure_2.set(tmp, map);
      return;
    } else {
      num = 1;
      if (arguments.length === 1) {
        tmp2 = globalThis;
        _Array = Array;
        num2 = 0;
        if (Array.isArray(arguments[0])) {
          tmp14 = defineCustomEventTarget;
          return defineCustomEventTarget(arguments[0]);
        }
      }
      num3 = 0;
      if (arguments.length > 0) {
        tmp8 = globalThis;
        _Array2 = Array;
        prototype2 = Array.prototype;
        tmp9 = new.target;
        tmp10 = new.target;
        array = new Array(arguments.length);
        tmp12 = array;
        num4 = 0;
        if (0 < arguments.length) {
          do {
            array[num4] = arguments[num4];
            num4 = num4 + 1;
            length = arguments.length;
          } while (num4 < length);
        }
        tmp13 = defineCustomEventTarget;
        return defineCustomEventTarget(array);
      } else {
        tmp3 = globalThis;
        _TypeError = TypeError;
        prototype = TypeError.prototype;
        tmp4 = new.target;
        str = "Cannot call a class as a function";
        tmp5 = new.target;
        typeError = new TypeError("Cannot call a class as a function");
        tmp7 = typeError;
        throw typeError;
      }
    }
  }
}
const weakMap = new WeakMap();
const weakMap1 = new WeakMap();
let obj = {};
Object.defineProperty(obj, "type", {
  get: function() {
    return pd(this).event.type;
  },
  set: undefined
});
Object.defineProperty(obj, "target", {
  get: function() {
    return pd(this).eventTarget;
  },
  set: undefined
});
Object.defineProperty(obj, "currentTarget", {
  get: function() {
    return pd(this).currentTarget;
  },
  set: undefined
});
obj.composedPath = function composedPath() {
  const currentTarget = pd(this).currentTarget;
  if (currentTarget == null) {
    return [];
  } else {
    const items = [currentTarget];
    return items;
  }
};
Object.defineProperty(obj, "NONE", { get: () => 0, set: undefined });
Object.defineProperty(obj, "CAPTURING_PHASE", { get: () => 1, set: undefined });
Object.defineProperty(obj, "AT_TARGET", { get: () => 2, set: undefined });
Object.defineProperty(obj, "BUBBLING_PHASE", { get: () => 3, set: undefined });
Object.defineProperty(obj, "eventPhase", {
  get: function() {
    return pd(this).eventPhase;
  },
  set: undefined
});
obj.stopPropagation = function stopPropagation() {
  const tmp = pd(this);
  tmp.stopped = true;
  if (typeof tmp.event.stopPropagation === "function") {
    const event = tmp.event;
    event.stopPropagation();
  }
};
obj.stopImmediatePropagation = function stopImmediatePropagation() {
  const tmp = pd(this);
  tmp.stopped = true;
  tmp.immediateStopped = true;
  if (typeof tmp.event.stopImmediatePropagation === "function") {
    const event = tmp.event;
    const result = event.stopImmediatePropagation();
  }
};
Object.defineProperty(obj, "bubbles", {
  get: function() {
    return Boolean(pd(this).event.bubbles);
  },
  set: undefined
});
Object.defineProperty(obj, "cancelable", {
  get: function() {
    return Boolean(pd(this).event.cancelable);
  },
  set: undefined
});
obj.preventDefault = function preventDefault() {
  setCancelFlag(pd(this));
};
Object.defineProperty(obj, "defaultPrevented", {
  get: function() {
    return pd(this).canceled;
  },
  set: undefined
});
Object.defineProperty(obj, "composed", {
  get: function() {
    return Boolean(pd(this).event.composed);
  },
  set: undefined
});
Object.defineProperty(obj, "timeStamp", {
  get: function() {
    return pd(this).timeStamp;
  },
  set: undefined
});
Object.defineProperty(obj, "srcElement", {
  get: function() {
    return pd(this).eventTarget;
  },
  set: undefined
});
Object.defineProperty(obj, "cancelBubble", {
  get: function() {
    return pd(this).stopped;
  },
  set: function(arg0) {
    if (arg0) {
      const self = this;
      const tmp2 = pd(this);
      tmp2.stopped = true;
      if (typeof tmp2.event.cancelBubble === "boolean") {
        tmp2.event.cancelBubble = true;
      }
    }
  }
});
Object.defineProperty(obj, "returnValue", {
  get: function() {
    return !pd(this).canceled;
  },
  set: function(arg0) {
    if (!arg0) {
      const self = this;
      setCancelFlag(pd(this));
    }
  }
});
obj.initEvent = function initEvent() {

};
Event.prototype = obj;
obj = { value: Event, configurable: true, writable: true };
Object.defineProperty(Event.prototype, "constructor", obj);
if (typeof window !== "undefined") {
  const _window = window;
  if (typeof window.Event !== "undefined") {
    let _Object = Object;
    const _window2 = window;
    Object.setPrototypeOf(Event.prototype, window.Event.prototype);
    const _window3 = window;
    class Event {
      constructor(arg0, arg1) {
        self = this;
        obj = { eventTarget: null, event: null, eventPhase: 2, currentTarget: null, canceled: false, stopped: false, immediateStopped: false, passiveListener: null };
        obj.eventTarget = global;
        obj.event = require;
        obj.currentTarget = global;
        timeStamp = require.timeStamp;
        tmp = closure_0;
        if (!timeStamp) {
          tmp2 = globalThis;
          _Date = Date;
          timeStamp = Date.now();
        }
        obj.timeStamp = timeStamp;
        result = closure_0.set(self, obj);
        definePropertyResult = Object.defineProperty(self, "isTrusted", { value: false, enumerable: true });
        keys = Object.keys(require);
        for (let num = 0; num < keys.length; num = num + 1) {
          tmp5 = keys[num];
          tmp6 = num;
          if (!(tmp5 in self)) {
            _Object = Object;
            tmp7 = defineRedirectDescriptor;
            definePropertyResult1 = Object.defineProperty(self, tmp5, defineRedirectDescriptor(tmp5));
          }
        }
        return;
      }
    }
  }
}
const weakMap2 = new WeakMap();
let c3 = 1;
let c4 = 2;
let c5 = 3;
EventTarget.prototype = {
  addEventListener(arg0, fn, capture) {
    if (fn != null) {
      if (typeof fn !== "function") {
        if (!isObject(fn)) {
          const _TypeError = TypeError;
          const typeError = new TypeError("'listener' should be a function or an object.");
          throw typeError;
        }
      }
      const self = this;
      let obj = getListeners(this);
      let BooleanResult1 = isObject(capture);
      const _Boolean = Boolean;
      if (BooleanResult1) {
        let _BooleanResult = _Boolean(capture.capture);
      } else {
        _BooleanResult = _Boolean(capture);
      }
      const tmp12 = _BooleanResult ? c3 : c4;
      obj = { listener: fn, listenerType: tmp12 };
      let BooleanResult = BooleanResult1;
      if (BooleanResult1) {
        const _Boolean2 = Boolean;
        BooleanResult = Boolean(capture.passive);
      }
      obj.passive = BooleanResult;
      if (BooleanResult1) {
        const _Boolean3 = Boolean;
        BooleanResult1 = Boolean(capture.once);
      }
      obj.once = BooleanResult1;
      obj.next = null;
      const value = obj.get(arg0);
      if (value === undefined) {
        const result = obj.set(arg0, obj);
      } else {
        let iter = value;
        let tmp15 = null;
        if (value != null) {
          while (true) {
            let tmp16 = iter;
            if (iter.listener === fn) {
              if (iter.listenerType === tmp12) {
                break;
              }
            }
            iter = iter.next;
            tmp15 = tmp16;
          }
        }
        tmp15.next = obj;
      }
    }
  },
  removeEventListener(arg0, arg1, capture) {
    if (arg1 != null) {
      const self = this;
      const obj = getListeners(this);
      const _Boolean = Boolean;
      if (isObject(capture)) {
        let _BooleanResult = _Boolean(capture.capture);
      } else {
        _BooleanResult = _Boolean(capture);
      }
      const value = obj.get(arg0);
      let tmp4 = null;
      let iter = value;
      if (value != null) {
        while (true) {
          let tmp5 = tmp4;
          let tmp6 = iter;
          if (iter.listener === arg1) {
            if (iter.listenerType === tmp2) {
              break;
            }
          }
          iter = iter.next;
          tmp4 = tmp6;
        }
        if (tmp4 !== null) {
          tmp4.next = iter.next;
        } else if (iter.next !== null) {
          const result = obj.set(arg0, iter.next);
        } else {
          obj.delete(arg0);
        }
      }
    }
  },
  dispatchEvent(type) {
    const self = this;
    if (type != null) {
      if (typeof type.type === "string") {
        const obj = getListeners(self);
        type = type.type;
        const value = obj.get(type);
        let iter = value;
        if (value == null) {
          return true;
        } else {
          const tmp44 = wrapEvent(self, type);
          let tmp33 = null;
          if (iter != null) {
            if (iter.once) {
              if (tmp33 !== null) {
                tmp33.next = iter.next;
                let tmp6 = tmp33;
              } else if (iter.next !== null) {
                const result = obj.set(type, iter.next);
                tmp6 = tmp33;
              } else {
                obj.delete(type);
                tmp6 = tmp33;
              }
            } else {
              tmp6 = iter;
            }
            let listener = null;
            if (iter.passive) {
              listener = iter.listener;
            }
            setPassiveListener(tmp44, listener);
            if (typeof iter.listener === "function") {
              try {
                const listener2 = iter.listener;
                listener2.call(self, tmp44);
              } catch (tmp27) {
                if (typeof tmp3.console !== tmp) {
                  if (typeof tmp3.console.error === tmp2) {
                    const _console = tmp3.console;
                    _console.error(tmp27);
                  }
                }
              }
            } else if (iter.listenerType !== c5) {
              if (typeof iter.listener.handleEvent === "function") {
                listener = iter.listener;
                listener.handleEvent(tmp44);
              }
            }
            if (!isStopped(tmp44)) {
              const next = iter.next;
              iter = next;
              tmp33 = tmp6;
            }
            const tmp12 = setPassiveListener;
          }
          setPassiveListener(tmp44, null);
          setEventPhase(tmp44, 0);
          setCurrentTarget(tmp44, null);
          return !tmp44.defaultPrevented;
        }
      }
    }
    const typeError = new TypeError("\"event.type\" should be a string.");
    throw typeError;
  }
};
obj = { value: EventTarget, configurable: true, writable: true };
Object.defineProperty(EventTarget.prototype, "constructor", obj);
if (typeof window !== "undefined") {
  const _window4 = window;
  if (typeof window.EventTarget !== "undefined") {
    let _Object2 = Object;
    const _window5 = window;
    Object.setPrototypeOf(EventTarget.prototype, window.EventTarget.prototype);
  }
}
module.exports.default = EventTarget;
module.exports.EventTarget = EventTarget;
module.exports.defineEventAttribute = defineEventAttribute;

export { defineEventAttribute };
export { EventTarget };
export default EventTarget;
