// Module ID: 142
// Function ID: 1568
// Name: _callSuper
// Dependencies: [1, 12, 13, 23, 25, 28, 31, 32, 139]

// Module 142 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _inherits from "_inherits" /* 28 */;
import _classPrivateFieldBase from "_classPrivateFieldBase" /* 31 */;
import _classPrivateFieldKey2 from "_classPrivateFieldKey" /* 32 */;
import PerformanceEntry2 from "PerformanceEntry" /* 139 */;
import module_1 from "module_1" /* 1 */;

function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const defaultResult = closure_3.default(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(defaultResult, items, closure_3.default(arg0).constructor);
  } else {
    constructResult = defaultResult.apply(arg0, items);
  }
  return closure_2.default(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
let closure_0 = module_1(_classCallCheck);
let closure_1 = module_1(_defineProperties);
let closure_2 = module_1(_possibleConstructorReturn);
let closure_3 = module_1(_getPrototypeOf);
let closure_4 = module_1(_inherits);
let closure_5 = module_1(_classPrivateFieldBase);
const _classPrivateFieldKey = module_1(_classPrivateFieldKey2);
const field = _classPrivateFieldKey.default("detail");
const field2 = _classPrivateFieldKey.default("detail");

export const PerformanceMark = ((PerformanceEntry) => {
  class PerformanceMark {
    constructor(arg0, arg1) {
      tmp = PerformanceMark;
      defaultResult = PerformanceMark.default(this, PerformanceMark);
      obj = { name: PerformanceEntry, entryType: "mark" };
      startTime = undefined;
      tmp3 = closure_1_8;
      if (arg1 != null) {
        startTime = arg1.startTime;
      }
      if (startTime == null) {
        tmp5 = globalThis;
        _performance = performance;
        startTime = performance.now();
      }
      obj.startTime = startTime;
      obj.duration = 0;
      items = [];
      items[0] = obj;
      tmp3Result = tmp3(this, tmp, items);
      definePropertyResult = Object.defineProperty(tmp3Result, closure_1_6, { writable: true, value: undefined });
      if (arg1) {
        tmp8 = closure_1_5;
        tmp9 = closure_1_6;
        closure_1_5.default(tmp3Result, closure_1_6)[closure_1_6] = arg1.detail;
      }
      return tmp3Result;
    }
  }
  closure_4.default(PerformanceMark, PerformanceEntry);
  let items = [
    {
      key: "detail",
      get() {
        return closure_1_5.default(this, closure_1_6)[closure_1_6];
      }
    }
  ];
  return closure_1.default(PerformanceMark, items);
})(PerformanceEntry2.PerformanceEntry);
export const PerformanceMeasure = ((PerformanceEntry) => {
  class PerformanceMeasure {
    constructor(arg0, arg1) {
      defaultResult = PerformanceMeasure.default(this, PerformanceMeasure);
      obj = { name: PerformanceEntry, entryType: "measure", startTime: arg1.startTime, duration: arg1.duration };
      items = [];
      items[0] = obj;
      tmp2 = closure_1_8(this, PerformanceMeasure, items);
      definePropertyResult = Object.defineProperty(tmp2, closure_1_7, { writable: true, value: undefined });
      if (arg1) {
        tmp4 = closure_1_5;
        tmp5 = closure_1_7;
        closure_1_5.default(tmp2, closure_1_7)[closure_1_7] = arg1.detail;
      }
      return tmp2;
    }
  }
  closure_4.default(PerformanceMeasure, PerformanceEntry);
  let items = [
    {
      key: "detail",
      get() {
        return closure_1_5.default(this, closure_1_7)[closure_1_7];
      }
    }
  ];
  return closure_1.default(PerformanceMeasure, items);
})(PerformanceEntry2.PerformanceEntry);
