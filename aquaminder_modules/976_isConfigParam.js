// Module ID: 976
// Function ID: 10467
// Name: isConfigParam
// Dependencies: [1, 2, 966, 971, 975, 977]
// Exports: filterConfig, findNodeHandle, scheduleFlushOperations

// Module 976 (isConfigParam)
import _mod966 from "module_966" /* 966 */;
import hasProperty from "hasProperty" /* 971 */;
import _mod977 from "module_977" /* 977 */;
import module_1 from "module_1" /* 1 */;
import closure_2 from "get registerCallableModule" /* 2 */;

function isConfigParam(arg0, arg1) {
  let tmp = arg0 !== undefined;
  if (tmp) {
    const _Object = Object;
    let tmp3 = arg0 !== Object(arg0);
    if (!tmp3) {
      tmp3 = !("__isNative" in arg0);
    }
    tmp = tmp3;
  }
  if (tmp) {
    tmp = arg1 !== "onHandlerStateChange";
  }
  if (tmp) {
    tmp = arg1 !== "onGestureEvent";
  }
  return tmp;
}
function transformIntoHandlerTags(arg0) {
  const toArrayResult = hasProperty.toArray(arg0);
  if (Platform.Platform.OS === "web") {
    const mapped = toArrayResult.map((current) => current.current);
    return mapped.filter((arg0) => arg0);
  } else {
    const mapped1 = toArrayResult.map((current) => {
      let num = closure_1_0(closure_1_1[4]).handlerIDToTag[current];
      if (!num) {
        current = current.current;
        let handlerTag;
        if (current != null) {
          handlerTag = current.handlerTag;
        }
        num = handlerTag;
      }
      if (!num) {
        num = -1;
      }
      return num;
    });
    return mapped1.filter((arg0) => arg0 > 0);
  }
}
let closure_3 = module_1(_mod966);
let c4 = false;

export function filterConfig(config, ALLOWED_PROPS, closure_1_2) {
  let str = 2;
  if (arguments.length <= 2) {
    let obj = {};
    const _Object = Object;
    const merged = Object.assign({}, obj);
    ALLOWED_PROPS[Symbol.iterator]();
    str = "simultaneousHandlers";
  }
  obj = arguments[str];
}
export function findNodeHandle(arg0) {
  if (Platform.Platform.OS === "web") {
    return arg0;
  } else {
    const findNodeHandleResult = Platform.findNodeHandle(arg0);
    let tmp3 = null;
    if (findNodeHandleResult != null) {
      tmp3 = findNodeHandleResult;
    }
    return tmp3;
  }
}
export function scheduleFlushOperations() {
  if (!c4) {
    c4 = true;
    _mod977.ghQueueMicrotask(() => {
      closure_1_3.default.flushOperations();
      c4 = false;
    });
  }
}
export { transformIntoHandlerTags };
