// Module ID: 144
// Function ID: 1583
// Name: _superPropGet
// Dependencies: [1, 26, 13, 12, 23, 25, 28, 139]

// Module 144 (_superPropGet)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _get from "_get" /* 26 */;
import _inherits from "_inherits" /* 28 */;
import PerformanceEntry2 from "PerformanceEntry" /* 139 */;
import module_1 from "module_1" /* 1 */;

function _superPropGet(arg0, arg1, arg2, arg3) {
  closure_0 = arg2;
  let prototype = arg0;
  if (1) {
    prototype = arg0.prototype;
  }
  const defaultResult = closure_0.default(closure_4.default(prototype), "toJSON", arg2);
  let fn = defaultResult;
  if (2) {
    fn = defaultResult;
    if ("function" === typeof defaultResult) {
      fn = (arg0) => defaultResult.apply(closure_0, arg0);
    }
  }
  return fn;
}
function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const defaultResult = closure_4.default(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(defaultResult, items, closure_4.default(arg0).constructor);
  } else {
    constructResult = defaultResult.apply(arg0, items);
  }
  return closure_3.default(arg0, constructResult);
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
let closure_0 = module_1(_get);
let closure_1 = module_1(_defineProperties);
let closure_2 = module_1(_classCallCheck);
let closure_3 = module_1(_possibleConstructorReturn);
let closure_4 = module_1(_getPrototypeOf);
let closure_5 = module_1(_inherits);
let closure_6 = Object.preventExtensions([]);

export const TaskAttributionTiming = ((PerformanceEntry) => {
  class TaskAttributionTiming {
    constructor() {
      defaultResult = closure_1_2.default(this, TaskAttributionTiming);
      return closure_1_8(this, TaskAttributionTiming, arguments);
    }
  }
  closure_5.default(TaskAttributionTiming, PerformanceEntry);
  return closure_1.default(TaskAttributionTiming);
})(PerformanceEntry2.PerformanceEntry);
export const PerformanceLongTaskTiming = ((PerformanceEntry) => {
  class PerformanceLongTaskTiming {
    constructor() {
      defaultResult = closure_1_2.default(this, PerformanceLongTaskTiming);
      return closure_1_8(this, PerformanceLongTaskTiming, arguments);
    }
  }
  closure_5.default(PerformanceLongTaskTiming, PerformanceEntry);
  let obj = {
    key: "attribution",
    get() {
      return closure_1_6;
    }
  };
  const items = [obj, ];
  obj = {
    key: "toJSON",
    value: function toJSON() {
      return Object.assign({}, closure_1_7(PerformanceLongTaskTiming, "toJSON", this, 3)([]), { attribution: this.attribution });
    }
  };
  items[1] = obj;
  return closure_1.default(PerformanceLongTaskTiming, items);
})(PerformanceEntry2.PerformanceEntry);
