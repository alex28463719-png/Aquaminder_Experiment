// Module ID: 267
// Function ID: 2721
// Name: EventPolyfill
// Dependencies: [1, 12, 13]

// Module 267 (EventPolyfill)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import module_1 from "module_1" /* 1 */;

let closure_0 = module_1(_classCallCheck);
let closure_1 = module_1(_defineProperties);
const tmp3 = (() => {
  class EventPolyfill {
    constructor(arg0, arg1) {
      self = this;
      defaultResult = EventPolyfill.default(this, EventPolyfill);
      this.type = arg0;
      tmp2 = arg1 != null && arg1.bubbles || false;
      self.bubbles = tmp2;
      tmp3 = arg1 != null && arg1.cancelable || false;
      self.cancelable = tmp3;
      tmp4 = arg1 != null && arg1.composed || false;
      self.composed = tmp4;
      tmp5 = arg1 != null && arg1.scoped || false;
      self.scoped = tmp5;
      self.isTrusted = false;
      self.timeStamp = Date.now();
      self.defaultPrevented = false;
      self.NONE = 0;
      self.AT_TARGET = 1;
      self.BUBBLING_PHASE = 2;
      self.CAPTURING_PHASE = 3;
      self.eventPhase = self.NONE;
      self.currentTarget = null;
      self.target = null;
      self.srcElement = null;
      return;
    }
  }
  let obj = {
    key: "composedPath",
    value: function composedPath() {
      const error = new Error("TODO: not yet implemented");
      throw error;
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "preventDefault",
    value: function preventDefault() {
      this.defaultPrevented = true;
      if (this._syntheticEvent != null) {
        const _syntheticEvent = this._syntheticEvent;
        _syntheticEvent.preventDefault();
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "initEvent",
    value: function initEvent(arg0, arg1, arg2) {
      const error = new Error("TODO: not yet implemented. This method is also deprecated.");
      throw error;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "stopImmediatePropagation",
    value: function stopImmediatePropagation() {
      const error = new Error("TODO: not yet implemented");
      throw error;
    }
  };
  items[4] = {
    key: "stopPropagation",
    value: function stopPropagation() {
      if (this._syntheticEvent != null) {
        const _syntheticEvent = this._syntheticEvent;
        _syntheticEvent.stopPropagation();
      }
    }
  };
  items[5] = {
    key: "setSyntheticEvent",
    value: function setSyntheticEvent(_syntheticEvent) {
      this._syntheticEvent = _syntheticEvent;
    }
  };
  return closure_1.default(EventPolyfill, items);
})();
global.Event = tmp3;

export default tmp3;
