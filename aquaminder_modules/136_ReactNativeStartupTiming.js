// Module ID: 136
// Function ID: 1520
// Name: ReactNativeStartupTiming
// Dependencies: [1, 12, 13, 31, 32]

// Module 136 (ReactNativeStartupTiming)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _classPrivateFieldBase from "_classPrivateFieldBase" /* 31 */;
import _classPrivateFieldKey2 from "_classPrivateFieldKey" /* 32 */;
import module_1 from "module_1" /* 1 */;

let closure_0 = module_1(_classCallCheck);
let closure_1 = module_1(_defineProperties);
let closure_2 = module_1(_classPrivateFieldBase);
const _classPrivateFieldKey = module_1(_classPrivateFieldKey2);
const field = _classPrivateFieldKey.default("startTime");
const field2 = _classPrivateFieldKey.default("endTime");
const field3 = _classPrivateFieldKey.default("initializeRuntimeStart");
const field4 = _classPrivateFieldKey.default("initializeRuntimeEnd");
const field5 = _classPrivateFieldKey.default("executeJavaScriptBundleEntryPointStart");
const field6 = _classPrivateFieldKey.default("executeJavaScriptBundleEntryPointEnd");

export default (() => {
  class ReactNativeStartupTiming {
    constructor(arg0) {
      self = this;
      defaultResult = ReactNativeStartupTiming.default(this, ReactNativeStartupTiming);
      definePropertyResult = Object.defineProperty(this, closure_1_3, { writable: true, value: undefined });
      definePropertyResult1 = Object.defineProperty(this, closure_1_4, { writable: true, value: undefined });
      definePropertyResult2 = Object.defineProperty(this, closure_1_5, { writable: true, value: undefined });
      definePropertyResult3 = Object.defineProperty(this, closure_1_6, { writable: true, value: undefined });
      definePropertyResult4 = Object.defineProperty(this, closure_1_7, { writable: true, value: undefined });
      definePropertyResult5 = Object.defineProperty(this, closure_1_8, { writable: true, value: undefined });
      if (arg0 != null) {
        tmp8 = closure_1_2;
        tmp9 = closure_1_3;
        closure_1_2.default(self, closure_1_3)[closure_1_3] = arg0.startTime;
        tmp10 = closure_1_4;
        closure_1_2.default(self, closure_1_4)[closure_1_4] = arg0.endTime;
        tmp11 = closure_1_5;
        closure_1_2.default(self, closure_1_5)[closure_1_5] = arg0.initializeRuntimeStart;
        tmp12 = closure_1_6;
        closure_1_2.default(self, closure_1_6)[closure_1_6] = arg0.initializeRuntimeEnd;
        tmp13 = closure_1_7;
        closure_1_2.default(self, closure_1_7)[closure_1_7] = arg0.executeJavaScriptBundleEntryPointStart;
        tmp14 = closure_1_8;
        closure_1_2.default(self, closure_1_8)[closure_1_8] = arg0.executeJavaScriptBundleEntryPointEnd;
      }
      return;
    }
  }
  let obj = {
    key: "startTime",
    get() {
      return closure_1_2.default(this, closure_1_3)[closure_1_3];
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "endTime",
    get() {
      return closure_1_2.default(this, closure_1_4)[closure_1_4];
    }
  };
  items[1] = obj;
  obj = {
    key: "initializeRuntimeStart",
    get() {
      return closure_1_2.default(this, closure_1_5)[closure_1_5];
    }
  };
  items[2] = obj;
  items[3] = {
    key: "initializeRuntimeEnd",
    get() {
      return closure_1_2.default(this, closure_1_6)[closure_1_6];
    }
  };
  items[4] = {
    key: "executeJavaScriptBundleEntryPointStart",
    get() {
      return closure_1_2.default(this, closure_1_7)[closure_1_7];
    }
  };
  items[5] = {
    key: "executeJavaScriptBundleEntryPointEnd",
    get() {
      return closure_1_2.default(this, closure_1_8)[closure_1_8];
    }
  };
  return closure_1.default(ReactNativeStartupTiming, items);
})();
