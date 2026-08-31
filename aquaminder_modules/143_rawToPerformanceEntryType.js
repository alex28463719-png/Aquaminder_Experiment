// Module ID: 143
// Function ID: 1579
// Name: rawToPerformanceEntryType
// Dependencies: [138, 144, 142, 139]

// Module 143 (rawToPerformanceEntryType)
import _callSuper from "_callSuper" /* 138 */;
import PerformanceEntry2 from "PerformanceEntry" /* 139 */;
import _callSuper2 from "_callSuper" /* 142 */;
import _superPropGet from "_superPropGet" /* 144 */;

require = arg1;
const dependencyMap = arg6;
function rawToPerformanceEntryType(entryType) {
  if (obj.MARK === entryType) {
    return "mark";
  } else if (obj.MEASURE === entryType) {
    return "measure";
  } else if (obj.EVENT === entryType) {
    return "event";
  } else if (obj.LONGTASK === entryType) {
    return "longtask";
  } else {
    const _TypeError = TypeError;
    const _HermesInternal = HermesInternal;
    const typeError = new TypeError("rawToPerformanceEntryType: unexpected performance entry type received: " + entryType);
    throw typeError;
  }
}
arg5.RawPerformanceEntryTypeValues = undefined;
arg5.performanceEntryTypeToRaw = function performanceEntryTypeToRaw(result) {
  if ("mark" === result) {
    return obj.MARK;
  } else if ("measure" === result) {
    return obj.MEASURE;
  } else if ("event" === result) {
    return obj.EVENT;
  } else if ("longtask" === result) {
    return obj.LONGTASK;
  } else {
    const _TypeError = TypeError;
    const _HermesInternal = HermesInternal;
    const typeError = new TypeError("performanceEntryTypeToRaw: unexpected performance entry type received: " + result);
    throw typeError;
  }
};
arg5.rawToPerformanceEntry = function rawToPerformanceEntry(entryType) {
  if (entryType.entryType === obj.EVENT) {
    const PerformanceEventTiming = _callSuper.PerformanceEventTiming;
    obj = {};
    ({ name: obj5.name, startTime: obj5.startTime, duration: obj5.duration, processingStart: obj5.processingStart, processingEnd: obj5.processingEnd, interactionId: obj5.interactionId } = entryType);
    const prototype5 = PerformanceEventTiming.prototype;
    const performanceEventTiming = new PerformanceEventTiming(obj);
    return performanceEventTiming;
  } else if (entryType.entryType === obj.LONGTASK) {
    const PerformanceLongTaskTiming = _superPropGet.PerformanceLongTaskTiming;
    obj = { name: entryType.name, entryType: rawToPerformanceEntryType(entryType.entryType) };
    ({ startTime: obj4.startTime, duration: obj4.duration } = entryType);
    const prototype4 = PerformanceLongTaskTiming.prototype;
    const performanceLongTaskTiming = new PerformanceLongTaskTiming(obj);
    return performanceLongTaskTiming;
  } else if (entryType.entryType === obj.MARK) {
    const PerformanceMark = _callSuper2.PerformanceMark;
    const obj1 = { startTime: entryType.startTime };
    const prototype3 = PerformanceMark.prototype;
    const performanceMark = new PerformanceMark(entryType.name, obj1);
    return performanceMark;
  } else if (entryType.entryType === obj.MEASURE) {
    const PerformanceMeasure = _callSuper2.PerformanceMeasure;
    const obj2 = {};
    ({ startTime: obj2.startTime, duration: obj2.duration } = entryType);
    const prototype2 = PerformanceMeasure.prototype;
    const performanceMeasure = new PerformanceMeasure(entryType.name, obj2);
    return performanceMeasure;
  } else {
    const PerformanceEntry = PerformanceEntry2.PerformanceEntry;
    obj = { name: entryType.name, entryType: rawToPerformanceEntryType(entryType.entryType) };
    ({ startTime: obj.startTime, duration: obj.duration } = entryType);
    const prototype = PerformanceEntry.prototype;
    const performanceEntry = new PerformanceEntry(obj);
    return performanceEntry;
  }
};
arg5.rawToPerformanceEntryType = rawToPerformanceEntryType;
let obj = { MARK: 1, MEASURE: 2, EVENT: 3, LONGTASK: 4 };
arg5.RawPerformanceEntryTypeValues = obj;
