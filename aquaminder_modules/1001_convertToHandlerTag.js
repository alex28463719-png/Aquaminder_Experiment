// Module ID: 1001
// Function ID: 10727
// Name: convertToHandlerTag
// Dependencies: [1, 38, 6, 2, 119, 979, 1002, 1003, 1004, 985, 984, 998, 964, 989, 971, 1005, 1006, 1009]
// Exports: checkGestureCallbacksForWorklets, extractGestureRelations, useForceRender, useWebEventHandlers, validateDetectorChildren

// Module 1001 (convertToHandlerTag)
import _toConsumableArray2 from "_toConsumableArray" /* 6 */;
import _slicedToArray from "_slicedToArray" /* 38 */;
import NativeViewGestureHandler from "NativeViewGestureHandler" /* 964 */;
import _mod979 from "module_979" /* 979 */;
import FlingGestureHandler from "FlingGestureHandler" /* 984 */;
import _callSuper from "_callSuper" /* 985 */;
import _callSuper2 from "_callSuper" /* 989 */;
import _callSuper3 from "_callSuper" /* 998 */;
import TapGestureHandler from "TapGestureHandler" /* 1002 */;
import transformPanGestureHandlerProps from "transformPanGestureHandlerProps" /* 1003 */;
import LongPressGestureHandler from "LongPressGestureHandler" /* 1004 */;
import enableExperimentalWebImplementation from "enableExperimentalWebImplementation" /* 1009 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_3 from "getIteratorFn" /* 119 */;

function convertToHandlerTag(num) {
  if (typeof num === "number") {
    return num;
  } else if (num instanceof _callSuper2.BaseGesture) {
    return num.handlerTag;
  } else {
    const current = num.current;
    let handlerTag;
    if (current != null) {
      handlerTag = current.handlerTag;
    }
    let num2 = -1;
    if (handlerTag != null) {
      num2 = handlerTag;
    }
    return num2;
  }
}
function extractValidHandlerTags(blocksHandlers) {
  let found;
  if (blocksHandlers != null) {
    const mapped = blocksHandlers.map(convertToHandlerTag);
    if (mapped != null) {
      found = mapped.filter((arg0) => arg0 > 0);
    }
  }
  if (found == null) {
    found = [];
  }
  return found;
}
let closure_2 = module_1(_slicedToArray);
const _toConsumableArray = module_1(_toConsumableArray2);
let items = [];
let defaultResult = _toConsumableArray.default(_mod979.baseGestureHandlerWithDetectorProps);
const defaultResult1 = _toConsumableArray.default(TapGestureHandler.tapGestureHandlerProps);
const defaultResult2 = _toConsumableArray.default(transformPanGestureHandlerProps.panGestureHandlerProps);
const defaultResult3 = _toConsumableArray.default(transformPanGestureHandlerProps.panGestureHandlerCustomNativeProps);
const defaultResult4 = _toConsumableArray.default(LongPressGestureHandler.longPressGestureHandlerProps);
const defaultResult5 = _toConsumableArray.default(_callSuper.forceTouchGestureHandlerProps);
const defaultResult6 = _toConsumableArray.default(FlingGestureHandler.flingGestureHandlerProps);

export function checkGestureCallbacksForWorklets(nextResult) {

}
export function extractGestureRelations(nextResult) {
  const tmp = extractValidHandlerTags(nextResult.config.requireToFail);
  const tmp2 = extractValidHandlerTags(nextResult.config.simultaneousWith);
  return { waitFor: tmp, simultaneousHandlers: extractValidHandlerTags(nextResult.config.simultaneousWith), blocksHandlers: extractValidHandlerTags(nextResult.config.blocksHandlers) };
}
export function useForceRender() {
  const defaultResult = closure_2.default(React.useState(false), 2);
  const first = defaultResult[0];
  closure_1 = tmp3;
  const items = [first, defaultResult[1]];
  return React.useCallback(() => {
    callback(!first);
  }, items);
}
export function useWebEventHandlers() {
  const obj = {
    onGestureHandlerEvent(nativeEvent) {
      const result = closure_1_0(closure_1_1[16]).onGestureHandlerEvent(nativeEvent.nativeEvent);
    }
  };
  let fn;
  if (enableExperimentalWebImplementation.isNewWebImplementationEnabled()) {
    fn = (nativeEvent) => {
      const result = closure_1_0(closure_1_1[16]).onGestureHandlerEvent(nativeEvent.nativeEvent);
    };
  }
  obj.onGestureHandlerStateChange = fn;
  return React.useRef(obj);
}
export function validateDetectorChildren(viewRef) {

}
export const ALLOWED_PROPS = items.concat(defaultResult, defaultResult1, defaultResult2, defaultResult3, defaultResult4, defaultResult5, defaultResult6, _toConsumableArray.default(_callSuper3.hoverGestureHandlerProps), _toConsumableArray.default(NativeViewGestureHandler.nativeViewGestureHandlerProps));
