// Module ID: 293
// Function ID: 3372
// Name: PressabilityPerformanceEventEmitter
// Dependencies: [1, 12, 13]

// Module 293 (PressabilityPerformanceEventEmitter)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import module_1 from "module_1" /* 1 */;

let closure_0 = module_1(_classCallCheck);
let closure_1 = module_1(_defineProperties);
let tmp3 = (() => {
  class PressabilityPerformanceEventEmitter {
    constructor() {
      defaultResult = PressabilityPerformanceEventEmitter.default(this, PressabilityPerformanceEventEmitter);
      this._listeners = [];
      return;
    }
  }
  let obj = {
    key: "addListener",
    value: function addListener(arg0) {
      const _listeners = this._listeners;
      _listeners.push(arg0);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "removeListener",
    value: function removeListener(arg0) {
      const _listeners = this._listeners;
      const index = _listeners.indexOf(arg0);
      if (index > -1) {
        const _listeners1 = this._listeners;
        _listeners1.splice(index, 1);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "emitEvent",
    value: function emitEvent(arg0) {
      if (this._listeners.length !== 0) {
        closure_0 = arg0();
        const _listeners = tmp._listeners;
        const item = _listeners.forEach((arg0) => arg0(closure_0));
      }
    }
  };
  items[2] = obj;
  return closure_1.default(PressabilityPerformanceEventEmitter, items);
})();
tmp3 = new tmp3();

export default tmp3;
