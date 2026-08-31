// Module ID: 975
// Function ID: 10459
// Name: findHandler
// Dependencies: [971]

// Module 975 (findHandler)
import hasProperty from "hasProperty" /* 971 */;

require = arg1;
const dependencyMap = arg6;
function findHandler(handlerTag) {
  return map.get(handlerTag);
}
arg5.findHandler = findHandler;
arg5.findHandlerByTestID = function findHandlerByTestID(arg0) {
  const value = map2.get(arg0);
  if (value !== undefined) {
    const tmp4 = findHandler(value);
    let tmp5 = null;
    if (tmp4 != null) {
      tmp5 = tmp4;
    }
    return tmp5;
  } else {
    return null;
  }
};
arg5.findOldGestureHandler = function findOldGestureHandler(handlerTag) {
  return map1.get(handlerTag);
};
arg5.handlerIDToTag = undefined;
arg5.registerHandler = function registerHandler(handlerTag, nextResult, testId) {
  const result = map.set(handlerTag, nextResult);
  if (hasProperty.isTestEnv()) {
    if (testId) {
      const result1 = map2.set(testId, handlerTag);
    }
  }
};
arg5.registerOldGestureHandler = function registerOldGestureHandler(handlerTag, arg1) {
  const result = map1.set(handlerTag, arg1);
};
arg5.unregisterHandler = function unregisterHandler(handlerTag, testId) {
  map.delete(handlerTag);
  if (hasProperty.isTestEnv()) {
    if (testId) {
      map2.delete(testId);
    }
  }
};
arg5.unregisterOldGestureHandler = function unregisterOldGestureHandler(handlerTag) {
  map1.delete(handlerTag);
};
arg5.handlerIDToTag = {};
const map = new Map();
const map1 = new Map();
const map2 = new Map();
