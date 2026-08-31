// Module ID: 133
// Function ID: 1498
// Name: Performance
// Dependencies: [1, 134, 38, 12, 13, 135, 136, 137, 138, 140, 142, 143]

// Module 133 (Performance)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _slicedToArray from "_slicedToArray" /* 38 */;
import _readOnlyError2 from "_readOnlyError" /* 134 */;
import MemoryInfo from "MemoryInfo" /* 135 */;
import ReactNativeStartupTiming from "ReactNativeStartupTiming" /* 136 */;
import NativePerformanceCxx2 from "NativePerformanceCxx" /* 137 */;
import module_1 from "module_1" /* 1 */;

const _readOnlyError = module_1(_readOnlyError2);
let closure_2 = module_1(_slicedToArray);
let closure_3 = module_1(_classCallCheck);
let closure_4 = module_1(_defineProperties);
let closure_5 = module_1(MemoryInfo);
let closure_6 = module_1(ReactNativeStartupTiming);
const NativePerformanceCxx = module_1(NativePerformanceCxx2);
let fn;
if (NativePerformanceCxx.default != null) {
  fn = NativePerformanceCxx.default.now;
}
if (fn == null) {
  fn = global.nativePerformanceNow;
}
if (fn == null) {
  fn = () => Date.now();
}
let closure_9 = ["mark", "measure"];

export default (() => {
  class Performance {
    constructor() {
      defaultResult = closure_1_3.default(this, Performance);
      eventCounts = new Performance(closure_1_1[8]).EventCounts();
      this.eventCounts = eventCounts;
      return;
    }
  }
  let obj = {
    key: "memory",
    get() {
      if (closure_1_7.default != null) {
        if (closure_1_7.default.getSimpleMemoryInfo) {
          let _default = closure_1_7.default;
          const simpleMemoryInfo = _default.getSimpleMemoryInfo();
          if (simpleMemoryInfo.hasOwnProperty("hermes_heapSize")) {
            let _default3 = closure_1_5.default;
            const obj = { jsHeapSizeLimit: null };
            ({ hermes_heapSize: obj2.totalJSHeapSize, hermes_allocatedBytes: obj2.usedJSHeapSize } = simpleMemoryInfo);
            const prototype2 = _default3.prototype;
            _default3 = new _default3(obj);
            return _default3;
          } else {
            let _default2 = closure_1_5.default;
            const prototype = _default2.prototype;
            _default2 = new _default2();
            return _default2;
          }
        }
      }
      _default = new closure_1_5.default();
      return _default;
    }
  };
  const items = [obj, , , , , , , , , ];
  obj = {
    key: "rnStartupTiming",
    get() {
      if (closure_1_7.default != null) {
        if (closure_1_7.default.getReactNativeStartupTiming) {
          let _default = closure_1_7.default;
          const reactNativeStartupTiming = _default.getReactNativeStartupTiming();
          let _default2 = closure_1_6.default;
          const obj = {};
          ({ startTime: obj.startTime, endTime: obj.endTime, initializeRuntimeStart: obj.initializeRuntimeStart, initializeRuntimeEnd: obj.initializeRuntimeEnd, executeJavaScriptBundleEntryPointStart: obj.executeJavaScriptBundleEntryPointStart, executeJavaScriptBundleEntryPointEnd: obj.executeJavaScriptBundleEntryPointEnd } = reactNativeStartupTiming);
          const prototype = _default2.prototype;
          _default2 = new _default2(obj);
          return _default2;
        }
      }
      _default = new closure_1_6.default();
      return _default;
    }
  };
  items[1] = obj;
  obj = {
    key: "mark",
    value: function mark(name, startTime) {
      if (closure_1_7.default != null) {
        if (closure_1_7.default.markWithResult) {
          startTime = undefined;
          if (startTime != null) {
            startTime = startTime.startTime;
          }
          let markWithResultResult = closure_1_7.default.markWithResult(name, startTime);
          const _default = closure_1_7.default;
        }
        let detail;
        const PerformanceMark = Performance(closure_1_1[10]).PerformanceMark;
        const obj = { startTime: markWithResultResult };
        if (startTime != null) {
          detail = startTime.detail;
        }
        obj.detail = detail;
        const prototype = PerformanceMark.prototype;
        const performanceMark = new PerformanceMark(name, obj);
        return performanceMark;
      }
      const result = Performance(closure_1_1[9]).warnNoNativePerformance();
      markWithResultResult = performance.now();
    }
  };
  items[2] = obj;
  items[3] = {
    key: "clearMarks",
    value: function clearMarks(arg0) {
      if (closure_1_7.default != null) {
        if (closure_1_7.default.clearMarks) {
          closure_1_7.default.clearMarks(arg0);
        }
      }
      const result = Performance(closure_1_1[9]).warnNoNativePerformance();
    }
  };
  items[4] = {
    key: "measure",
    value: function measure(name, startTime) {
      if (typeof startTime === "string") {
        let obj = {};
        let num3 = 0;
        let tmp4 = startTime;
        let tmp5 = arg2;
        let num4 = 0;
      } else {
        tmp5 = arg2;
        num3 = 0;
        num4 = 0;
        if (startTime !== undefined) {
          if (arg2 !== undefined) {
            const _TypeError3 = TypeError;
            const typeError = new TypeError("Performance.measure: Can't have both options and endMark");
            throw typeError;
          } else {
            if (startTime.start === undefined) {
              if (startTime.end === undefined) {
                const _TypeError2 = TypeError;
                const typeError1 = new TypeError("Performance.measure: Must have at least one of start/end specified in options");
                throw typeError1;
              }
            }
            if (startTime.start !== undefined) {
              if (startTime.end !== undefined) {
                if (startTime.duration !== undefined) {
                  const _TypeError = TypeError;
                  const typeError2 = new TypeError("Performance.measure: Can't have both start/end and duration explicitly in options");
                  throw typeError2;
                }
              }
            }
            if (typeof startTime.start === "number") {
              let num = startTime.start;
            } else {
              const start = startTime.start;
              num = 0;
            }
            if (typeof startTime.end === "number") {
              let num2 = startTime.end;
              let end = arg2;
            } else {
              end = startTime.end;
              num2 = 0;
            }
            const duration = startTime.duration;
            let tmp2;
            if (duration != null) {
              tmp2 = duration;
            }
            obj = startTime;
            tmp4 = start;
            tmp5 = end;
            num3 = num;
            num4 = num2;
          }
        }
      }
      if (closure_1_7.default != null) {
        if (closure_1_7.default.measureWithResult) {
          const defaultResult = closure_1_2.default(closure_1_7.default.measureWithResult(name, num3, num4, tmp3, tmp4, tmp5), 2);
          let first = defaultResult[0];
          let tmp24 = defaultResult[1];
        }
        const PerformanceMeasure = Performance(closure_1_1[10]).PerformanceMeasure;
        obj = { startTime: first };
        let num9 = 0;
        if (tmp24 != null) {
          num9 = tmp24;
        }
        obj.duration = num9;
        let detail;
        if (obj != null) {
          detail = obj.detail;
        }
        obj.detail = detail;
        const prototype4 = PerformanceMeasure.prototype;
        const performanceMeasure = new PerformanceMeasure(name, obj);
        return performanceMeasure;
      }
      const result = Performance(closure_1_1[9]).warnNoNativePerformance();
      first = num3;
      tmp24 = tmp3;
    }
  };
  items[5] = {
    key: "clearMeasures",
    value: function clearMeasures(arg0) {
      if (closure_1_7.default != null) {
        if (closure_1_7.default.clearMeasures) {
          if (closure_1_7.default != null) {
            closure_1_7.default.clearMeasures(arg0);
            const _default = closure_1_7.default;
          }
        }
      }
      const result = Performance(closure_1_1[9]).warnNoNativePerformance();
    }
  };
  items[6] = {
    key: "now",
    value: function now() {
      return closure_1_8();
    }
  };
  items[7] = {
    key: "getEntries",
    value: function getEntries() {
      if (closure_1_7.default != null) {
        if (closure_1_7.default.getEntries) {
          const entries = closure_1_7.default.getEntries();
          return entries.map(Performance(closure_1_1[11]).rawToPerformanceEntry);
        }
      }
      const result = Performance(closure_1_1[9]).warnNoNativePerformance();
      return [];
    }
  };
  items[8] = {
    key: "getEntriesByType",
    value: function getEntriesByType(name) {
      if (name != null) {
        if (!closure_1_9.includes(name)) {
          const _console = console;
          console.warn("Deprecated API for given entry type.");
          return [];
        }
      }
      if (closure_1_7.default != null) {
        if (closure_1_7.default.getEntriesByType) {
          const entriesByType = closure_1_7.default.getEntriesByType(Performance(closure_1_1[11]).performanceEntryTypeToRaw(name));
          return entriesByType.map(Performance(closure_1_1[11]).rawToPerformanceEntry);
        }
      }
      const result = Performance(closure_1_1[9]).warnNoNativePerformance();
      return [];
    }
  };
  items[9] = {
    key: "getEntriesByName",
    value: function getEntriesByName(arg0, result) {
      if (result != null) {
        if (!closure_1_9.includes(result)) {
          const _console = console;
          console.warn("Deprecated API for given entry type.");
          return [];
        }
      }
      if (closure_1_7.default != null) {
        if (closure_1_7.default.getEntriesByName) {
          result = undefined;
          if (result != null) {
            result = Performance(closure_1_1[11]).performanceEntryTypeToRaw(result);
          }
          const entriesByName = closure_1_7.default.getEntriesByName(arg0, result);
          return entriesByName.map(Performance(closure_1_1[11]).rawToPerformanceEntry);
        }
      }
      const result1 = Performance(closure_1_1[9]).warnNoNativePerformance();
      return [];
    }
  };
  return closure_4.default(Performance, items);
})();
