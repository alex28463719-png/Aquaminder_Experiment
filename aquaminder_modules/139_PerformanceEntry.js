// Module ID: 139
// Function ID: 1556
// Name: PerformanceEntry
// Dependencies: [1, 12, 13, 31, 32]

// Module 139 (PerformanceEntry)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _classPrivateFieldBase from "_classPrivateFieldBase" /* 31 */;
import _classPrivateFieldKey2 from "_classPrivateFieldKey" /* 32 */;
import module_1 from "module_1" /* 1 */;

let closure_0 = module_1(_classCallCheck);
let closure_1 = module_1(_defineProperties);
let closure_2 = module_1(_classPrivateFieldBase);
const _classPrivateFieldKey = module_1(_classPrivateFieldKey2);
const field = _classPrivateFieldKey.default("name");
const field2 = _classPrivateFieldKey.default("entryType");
const field3 = _classPrivateFieldKey.default("startTime");
const field4 = _classPrivateFieldKey.default("duration");

export const PerformanceEntry = (() => {
  class PerformanceEntry {
    constructor(arg0) {
      defaultResult = PerformanceEntry.default(this, PerformanceEntry);
      definePropertyResult = Object.defineProperty(this, closure_1_3, { writable: true, value: undefined });
      definePropertyResult1 = Object.defineProperty(this, closure_1_4, { writable: true, value: undefined });
      definePropertyResult2 = Object.defineProperty(this, closure_1_5, { writable: true, value: undefined });
      definePropertyResult3 = Object.defineProperty(this, closure_1_6, { writable: true, value: undefined });
      ({ name: closure_1_2.default(undefined, this, closure_1_3)[closure_1_3], entryType: closure_1_2.default(undefined, this, closure_1_4)[closure_1_4], startTime: closure_1_2.default(undefined, this, closure_1_5)[closure_1_5], duration: closure_1_2.default(undefined, this, closure_1_6)[closure_1_6] } = arg0);
      return;
    }
  }
  let obj = {
    key: "name",
    get() {
      return closure_1_2.default(this, closure_1_3)[closure_1_3];
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "entryType",
    get() {
      return closure_1_2.default(this, closure_1_4)[closure_1_4];
    }
  };
  items[1] = obj;
  obj = {
    key: "startTime",
    get() {
      return closure_1_2.default(this, closure_1_5)[closure_1_5];
    }
  };
  items[2] = obj;
  items[3] = {
    key: "duration",
    get() {
      return closure_1_2.default(this, closure_1_6)[closure_1_6];
    }
  };
  items[4] = {
    key: "toJSON",
    value: function toJSON() {
      return { name: closure_1_2.default(this, closure_1_3)[closure_1_3], entryType: closure_1_2.default(this, closure_1_4)[closure_1_4], startTime: closure_1_2.default(this, closure_1_5)[closure_1_5], duration: closure_1_2.default(this, closure_1_6)[closure_1_6] };
    }
  };
  return closure_1.default(PerformanceEntry, items);
})();
