// Module ID: 178
// Function ID: 1979
// Name: dispatchTrustedEvent
// Dependencies: [176]

// Module 178 (dispatchTrustedEvent)
import getComposedPath from "getComposedPath" /* 176 */;

require = arg1;
const dependencyMap = arg6;
arg5.EVENT_TARGET_GET_THE_PARENT_KEY = undefined;
arg5.INTERNAL_DISPATCH_METHOD_KEY = undefined;
arg5.dispatchTrustedEvent = function dispatchTrustedEvent(self, _default) {
  getComposedPath.setIsTrusted(_default, true);
  return self[closure_2](_default);
};
arg5.EVENT_TARGET_GET_THE_PARENT_KEY = Symbol("EventTarget[get the parent]");
const SymbolResult = Symbol("EventTarget[dispatch]");
arg5.INTERNAL_DISPATCH_METHOD_KEY = SymbolResult;
