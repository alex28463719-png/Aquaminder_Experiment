// Module ID: 135
// Function ID: 1514
// Name: MemoryInfo
// Dependencies: [1, 12, 13, 31, 32]

// Module 135 (MemoryInfo)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _classPrivateFieldBase from "_classPrivateFieldBase" /* 31 */;
import _classPrivateFieldKey2 from "_classPrivateFieldKey" /* 32 */;
import module_1 from "module_1" /* 1 */;

let closure_0 = module_1(_classCallCheck);
let closure_1 = module_1(_defineProperties);
let closure_2 = module_1(_classPrivateFieldBase);
const _classPrivateFieldKey = module_1(_classPrivateFieldKey2);
const field = _classPrivateFieldKey.default("jsHeapSizeLimit");
const field2 = _classPrivateFieldKey.default("totalJSHeapSize");
const field3 = _classPrivateFieldKey.default("usedJSHeapSize");

export default (() => {
  class MemoryInfo {
    constructor(arg0) {
      self = this;
      defaultResult = MemoryInfo.default(this, MemoryInfo);
      definePropertyResult = Object.defineProperty(this, closure_1_3, { writable: true, value: undefined });
      definePropertyResult1 = Object.defineProperty(this, closure_1_4, { writable: true, value: undefined });
      definePropertyResult2 = Object.defineProperty(this, closure_1_5, { writable: true, value: undefined });
      if (arg0 != null) {
        tmp5 = closure_1_2;
        tmp6 = closure_1_3;
        closure_1_2.default(self, closure_1_3)[closure_1_3] = arg0.jsHeapSizeLimit;
        tmp7 = closure_1_4;
        closure_1_2.default(self, closure_1_4)[closure_1_4] = arg0.totalJSHeapSize;
        tmp8 = closure_1_5;
        closure_1_2.default(self, closure_1_5)[closure_1_5] = arg0.usedJSHeapSize;
      }
      return;
    }
  }
  let obj = {
    key: "jsHeapSizeLimit",
    get() {
      return closure_1_2.default(this, closure_1_3)[closure_1_3];
    }
  };
  const items = [obj, , ];
  obj = {
    key: "totalJSHeapSize",
    get() {
      return closure_1_2.default(this, closure_1_4)[closure_1_4];
    }
  };
  items[1] = obj;
  obj = {
    key: "usedJSHeapSize",
    get() {
      return closure_1_2.default(this, closure_1_5)[closure_1_5];
    }
  };
  items[2] = obj;
  return closure_1.default(MemoryInfo, items);
})();
