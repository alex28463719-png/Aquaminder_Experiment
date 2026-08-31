// Module ID: 138
// Function ID: 1532
// Name: _callSuper
// Dependencies: [1, 12, 13, 23, 25, 26, 28, 31, 32, 137, 139, 140]

// Module 138 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _get from "_get" /* 26 */;
import _inherits from "_inherits" /* 28 */;
import _classPrivateFieldBase from "_classPrivateFieldBase" /* 31 */;
import _classPrivateFieldKey2 from "_classPrivateFieldKey" /* 32 */;
import NativePerformanceCxx from "NativePerformanceCxx" /* 137 */;
import PerformanceEntry2 from "PerformanceEntry" /* 139 */;
import warnNoNativePerformance from "warnNoNativePerformance" /* 140 */;
import module_1 from "module_1" /* 1 */;

function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const defaultResult = closure_6.default(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(defaultResult, items, closure_6.default(arg0).constructor);
  } else {
    constructResult = defaultResult.apply(arg0, items);
  }
  return closure_5.default(arg0, constructResult);
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
function _superPropGet(arg0, arg1, arg2, arg3) {
  closure_0 = arg2;
  let prototype = arg0;
  if (1) {
    prototype = arg0.prototype;
  }
  const defaultResult = closure_7.default(closure_6.default(prototype), "toJSON", arg2);
  require = defaultResult;
  let fn = defaultResult;
  if (2) {
    fn = defaultResult;
    if ("function" === typeof defaultResult) {
      fn = (arg0) => defaultResult.apply(closure_0, arg0);
    }
  }
  return fn;
}
function getCachedEventCounts() {
  if (c14) {
    return c14;
  } else {
    if (mod.default) {
      if (mod.default != null) {
        if (mod.default.getEventCounts) {
          let _Map2 = Map;
          let eventCounts;
          if (mod.default.getEventCounts != null) {
            eventCounts = mod.default.getEventCounts();
            const _default = mod.default;
          }
          if (eventCounts == null) {
            eventCounts = [];
          }
          const prototype2 = _Map2.prototype;
          _Map2 = new _Map2(eventCounts);
          c14 = _Map2;
          global.queueMicrotask(() => {
            c14 = null;
          });
          return _Map2;
        }
      }
    }
    const result = warnNoNativePerformance.warnNoNativePerformance();
    const _Map = Map;
    const map = new Map();
    c14 = map;
    return map;
  }
}
let closure_3 = module_1(_classCallCheck);
let closure_4 = module_1(_defineProperties);
let closure_5 = module_1(_possibleConstructorReturn);
let closure_6 = module_1(_getPrototypeOf);
let closure_7 = module_1(_get);
let closure_8 = module_1(_inherits);
let closure_9 = module_1(_classPrivateFieldBase);
const _classPrivateFieldKey = module_1(_classPrivateFieldKey2);
let closure_10 = module_1(NativePerformanceCxx);
const field = _classPrivateFieldKey.default("processingStart");
const field2 = _classPrivateFieldKey.default("processingEnd");
const field3 = _classPrivateFieldKey.default("interactionId");

export const PerformanceEventTiming = ((PerformanceEntry) => {
  class PerformanceEventTiming {
    constructor(arg0) {
      tmp = PerformanceEventTiming;
      defaultResult = closure_1_3.default(this, PerformanceEventTiming);
      obj = { name: PerformanceEntry.name, entryType: "event" };
      startTime = PerformanceEntry.startTime;
      num = 0;
      tmp3 = closure_1_15;
      if (startTime != null) {
        num = startTime;
      }
      obj.startTime = num;
      duration = PerformanceEntry.duration;
      num2 = 0;
      if (duration != null) {
        num2 = duration;
      }
      obj.duration = num2;
      items = [];
      items[0] = obj;
      tmp3Result = tmp3(this, tmp, items);
      tmp5 = closure_1_11;
      definePropertyResult = Object.defineProperty(tmp3Result, closure_1_11, { writable: true, value: undefined });
      definePropertyResult1 = Object.defineProperty(tmp3Result, closure_1_12, { writable: true, value: undefined });
      definePropertyResult2 = Object.defineProperty(tmp3Result, closure_1_13, { writable: true, value: undefined });
      processingStart = PerformanceEntry.processingStart;
      num3 = 0;
      defaultResult1 = closure_1_9.default(tmp3Result, closure_1_11);
      if (processingStart != null) {
        num3 = processingStart;
      }
      defaultResult1[tmp5] = num3;
      tmp10 = closure_1_12;
      processingEnd = PerformanceEntry.processingEnd;
      num4 = 0;
      defaultResult2 = closure_1_9.default(tmp3Result, closure_1_12);
      if (processingEnd != null) {
        num4 = processingEnd;
      }
      defaultResult2[tmp10] = num4;
      tmp12 = closure_1_13;
      interactionId = PerformanceEntry.interactionId;
      num5 = 0;
      defaultResult3 = closure_1_9.default(tmp3Result, closure_1_13);
      if (interactionId != null) {
        num5 = interactionId;
      }
      defaultResult3[tmp12] = num5;
      return tmp3Result;
    }
  }
  closure_8.default(PerformanceEventTiming, PerformanceEntry);
  let obj = {
    key: "processingStart",
    get() {
      return closure_1_9.default(this, closure_1_11)[closure_1_11];
    }
  };
  let items = [obj, , , ];
  obj = {
    key: "processingEnd",
    get() {
      return closure_1_9.default(this, closure_1_12)[closure_1_12];
    }
  };
  items[1] = obj;
  obj = {
    key: "interactionId",
    get() {
      return closure_1_9.default(this, closure_1_13)[closure_1_13];
    }
  };
  items[2] = obj;
  items[3] = {
    key: "toJSON",
    value: function toJSON() {
      const obj = { processingStart: closure_1_9.default(this, closure_1_11)[closure_1_11], processingEnd: closure_1_9.default(this, closure_1_12)[closure_1_12], interactionId: closure_1_9.default(this, closure_1_13)[closure_1_13] };
      return Object.assign({}, closure_1_17(PerformanceEventTiming, "toJSON", this, 3)([]), obj);
    }
  };
  return closure_4.default(PerformanceEventTiming, items);
})(PerformanceEntry2.PerformanceEntry);
export const EventCounts = (() => {
  class EventCounts {
    constructor() {
      defaultResult = closure_1_3.default(this, EventCounts);
      return;
    }
  }
  let obj = {
    key: "size",
    get() {
      return closure_1_18().size;
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "entries",
    value: function entries() {
      return closure_1_18().entries();
    }
  };
  items[1] = obj;
  obj = {
    key: "forEach",
    value: function forEach(arg0) {
      return closure_1_18().forEach(arg0);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "get",
    value: function get(arg0) {
      return closure_1_18().get(arg0);
    }
  };
  items[4] = {
    key: "has",
    value: function has(arg0) {
      return closure_1_18().has(arg0);
    }
  };
  items[5] = {
    key: "keys",
    value: function keys() {
      return closure_1_18().keys();
    }
  };
  items[6] = {
    key: "values",
    value: function values() {
      return closure_1_18().values();
    }
  };
  return closure_4.default(EventCounts, items);
})();
