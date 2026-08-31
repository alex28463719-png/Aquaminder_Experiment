// Module ID: 175
// Function ID: 1927
// Name: Event
// Dependencies: [1, 12, 13, 176]

// Module 175 (Event)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import module_1 from "module_1" /* 1 */;

let closure_2 = module_1(_classCallCheck);
let closure_3 = module_1(_defineProperties);
const tmp3 = (() => {
  class Event {
    constructor(arg0, arg1) {
      self = this;
      defaultResult = closure_1_2.default(this, Event);
      this._defaultPrevented = false;
      this._timeStamp = performance.now();
      this[Event(closure_1_1[3]).COMPOSED_PATH_KEY] = [];
      this[Event(closure_1_1[3]).CURRENT_TARGET_KEY] = null;
      this[Event(closure_1_1[3]).EVENT_PHASE_KEY] = Event.NONE;
      this[Event(closure_1_1[3]).IN_PASSIVE_LISTENER_FLAG_KEY] = false;
      this[Event(closure_1_1[3]).IS_TRUSTED_KEY] = false;
      this[Event(closure_1_1[3]).STOP_IMMEDIATE_PROPAGATION_FLAG_KEY] = false;
      this[Event(closure_1_1[3]).STOP_PROPAGATION_FLAG_KEY] = false;
      this[Event(closure_1_1[3]).TARGET_KEY] = null;
      if (arguments.length < 1) {
        _TypeError2 = TypeError;
        prototype2 = TypeError.prototype;
        tmp10 = new.target;
        str4 = "Failed to construct 'Event': 1 argument required, but only 0 present.";
        tmp11 = new.target;
        typeError = new TypeError("Failed to construct 'Event': 1 argument required, but only 0 present.");
        tmp13 = typeError;
        throw typeError;
      } else {
        tmp14 = typeof arg1;
        if (arg1 != null) {
          str = "object";
          if (tmp14 !== "object") {
            str2 = "function";
            if (tmp14 !== "function") {
              _TypeError = TypeError;
              prototype = TypeError.prototype;
              tmp6 = new.target;
              str3 = "Failed to construct 'Event': The provided value is not of type 'EventInit'.";
              tmp7 = new.target;
              typeError1 = new TypeError("Failed to construct 'Event': The provided value is not of type 'EventInit'.");
              tmp9 = typeError1;
              throw typeError1;
            }
          }
        }
        _String = String;
        tmp2 = arg0;
        self._type = String(arg0);
        bubbles = undefined;
        if (arg1 != null) {
          bubbles = arg1.bubbles;
        }
        self._bubbles = Boolean(bubbles);
        cancelable = undefined;
        if (arg1 != null) {
          cancelable = arg1.cancelable;
        }
        self._cancelable = Boolean(cancelable);
        composed = undefined;
        if (arg1 != null) {
          composed = arg1.composed;
        }
        self._composed = Boolean(composed);
        return;
      }
    }
  }
  let obj = {
    key: "bubbles",
    get() {
      return this._bubbles;
    }
  };
  const items = [obj, , , , , , , , , , , , , ];
  obj = {
    key: "cancelable",
    get() {
      return this._cancelable;
    }
  };
  items[1] = obj;
  obj = {
    key: "composed",
    get() {
      return this._composed;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "currentTarget",
    get() {
      return Event(closure_1_1[3]).getCurrentTarget(this);
    }
  };
  items[4] = {
    key: "defaultPrevented",
    get() {
      return this._defaultPrevented;
    }
  };
  items[5] = {
    key: "eventPhase",
    get() {
      return Event(closure_1_1[3]).getEventPhase(this);
    }
  };
  items[6] = {
    key: "isTrusted",
    get() {
      return Event(closure_1_1[3]).getIsTrusted(this);
    }
  };
  items[7] = {
    key: "target",
    get() {
      return Event(closure_1_1[3]).getTarget(this);
    }
  };
  items[8] = {
    key: "timeStamp",
    get() {
      return this._timeStamp;
    }
  };
  items[9] = {
    key: "type",
    get() {
      return this._type;
    }
  };
  items[10] = {
    key: "composedPath",
    value: function composedPath() {
      const composedPath = Event(closure_1_1[3]).getComposedPath(this);
      return composedPath.slice();
    }
  };
  items[11] = {
    key: "preventDefault",
    value: function preventDefault() {
      const self = this;
      if (this._cancelable) {
        if (Event(closure_1_1[3]).getInPassiveListenerFlag(self)) {
          const _console = console;
          const _Error = Error;
          const error = new Error("Unable to preventDefault inside passive event listener invocation.");
          console.error(error);
        } else {
          self._defaultPrevented = true;
        }
      }
    }
  };
  items[12] = {
    key: "stopImmediatePropagation",
    value: function stopImmediatePropagation() {
      const result = Event(closure_1_1[3]).setStopPropagationFlag(this, true);
      const result1 = Event(closure_1_1[3]).setStopImmediatePropagationFlag(this, true);
    }
  };
  items[13] = {
    key: "stopPropagation",
    value: function stopPropagation() {
      const result = Event(closure_1_1[3]).setStopPropagationFlag(this, true);
    }
  };
  return closure_3.default(Event, items);
})();
Object.defineProperty(tmp3, "NONE", { enumerable: true, value: 0 });
Object.defineProperty(tmp3.prototype, "NONE", { enumerable: true, value: 0 });
Object.defineProperty(tmp3, "CAPTURING_PHASE", { enumerable: true, value: 1 });
Object.defineProperty(tmp3.prototype, "CAPTURING_PHASE", { enumerable: true, value: 1 });
Object.defineProperty(tmp3, "AT_TARGET", { enumerable: true, value: 2 });
Object.defineProperty(tmp3.prototype, "AT_TARGET", { enumerable: true, value: 2 });
Object.defineProperty(tmp3, "BUBBLING_PHASE", { enumerable: true, value: 3 });
Object.defineProperty(tmp3.prototype, "BUBBLING_PHASE", { enumerable: true, value: 3 });

export default tmp3;
