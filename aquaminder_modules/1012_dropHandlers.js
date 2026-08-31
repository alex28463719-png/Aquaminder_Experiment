// Module ID: 1012
// Function ID: 10768
// Name: dropHandlers
// Dependencies: [1, 966, 975, 978, 976]
// Exports: dropHandlers

// Module 1012 (dropHandlers)
import _mod966 from "module_966" /* 966 */;
import findHandler from "findHandler" /* 975 */;
import isConfigParam from "isConfigParam" /* 976 */;
import MountRegistry2 from "MountRegistry" /* 978 */;
import module_1 from "module_1" /* 1 */;

let closure_2 = module_1(_mod966);

export function dropHandlers(closure_1) {
  const iter = closure_1.attachedGestures[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = mod;
    let _default = mod.default;
    let dropGestureHandlerResult = _default.dropGestureHandler(nextResult.handlerTag);
    let tmp4 = require;
    let tmp5 = dependencyMap;
    let unregisterHandlerResult = findHandler.unregisterHandler(nextResult.handlerTag, nextResult.config.testId);
    let MountRegistry = MountRegistry2.MountRegistry;
    let gestureWillUnmountResult = MountRegistry.gestureWillUnmount(nextResult);
    continue;
  }
  const result = isConfigParam.scheduleFlushOperations();
}
