// Module ID: 124
// Function ID: 1444
// Name: ConditionallyIgnoredEventHandlers
// Dependencies: [1, 33]
// Exports: ConditionallyIgnoredEventHandlers, DynamicallyInjectedByGestureHandler, isIgnored

// Module 124 (ConditionallyIgnoredEventHandlers)
import get_Version from "get Version" /* 33 */;
import module_1 from "module_1" /* 1 */;

let closure_0 = module_1(get_Version);
const weakSet = new WeakSet();

export function ConditionallyIgnoredEventHandlers(arg0) {
  if (mod.default.OS === "ios") {
    return arg0;
  }
}
export function DynamicallyInjectedByGestureHandler(arg0) {
  weakSet.add(arg0);
  return arg0;
}
export function isIgnored(obj) {
  if (typeof obj === "object") {
    if (obj != null) {
      return weakSet.has(obj);
    }
  }
  return false;
}
