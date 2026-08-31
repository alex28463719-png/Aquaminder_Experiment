// Module ID: 1003
// Function ID: 10740
// Name: transformPanGestureHandlerProps
// Dependencies: [1, 6, 965, 979]
// Exports: managePanProps

// Module 1003 (transformPanGestureHandlerProps)
import _toConsumableArray2 from "_toConsumableArray" /* 6 */;
import _callSuper from "_callSuper" /* 965 */;
import _mod979 from "module_979" /* 979 */;
import module_1 from "module_1" /* 1 */;

function transformPanGestureHandlerProps(activeOffsetX) {
  const merged = Object.assign({}, activeOffsetX);
  if (activeOffsetX.activeOffsetX !== undefined) {
    delete tmp.activeOffsetX;
    const _Array = Array;
    activeOffsetX = activeOffsetX.activeOffsetX;
    if (Array.isArray(activeOffsetX.activeOffsetX)) {
      merged.activeOffsetXStart = activeOffsetX[0];
      merged.activeOffsetXEnd = activeOffsetX.activeOffsetX[1];
    } else if (activeOffsetX < 0) {
      merged.activeOffsetXStart = activeOffsetX.activeOffsetX;
    } else {
      merged.activeOffsetXEnd = activeOffsetX.activeOffsetX;
    }
  }
  if (activeOffsetX.activeOffsetY !== undefined) {
    delete tmp.activeOffsetY;
    const _Array2 = Array;
    const activeOffsetY = activeOffsetX.activeOffsetY;
    if (Array.isArray(activeOffsetX.activeOffsetY)) {
      merged.activeOffsetYStart = activeOffsetY[0];
      merged.activeOffsetYEnd = activeOffsetX.activeOffsetY[1];
    } else if (activeOffsetY < 0) {
      merged.activeOffsetYStart = activeOffsetX.activeOffsetY;
    } else {
      merged.activeOffsetYEnd = activeOffsetX.activeOffsetY;
    }
  }
  if (activeOffsetX.failOffsetX !== undefined) {
    delete tmp.failOffsetX;
    const _Array3 = Array;
    const failOffsetX = activeOffsetX.failOffsetX;
    if (Array.isArray(activeOffsetX.failOffsetX)) {
      merged.failOffsetXStart = failOffsetX[0];
      merged.failOffsetXEnd = activeOffsetX.failOffsetX[1];
    } else if (failOffsetX < 0) {
      merged.failOffsetXStart = activeOffsetX.failOffsetX;
    } else {
      merged.failOffsetXEnd = activeOffsetX.failOffsetX;
    }
  }
  if (activeOffsetX.failOffsetY !== undefined) {
    delete tmp.failOffsetY;
    const _Array4 = Array;
    const failOffsetY = activeOffsetX.failOffsetY;
    if (Array.isArray(activeOffsetX.failOffsetY)) {
      merged.failOffsetYStart = failOffsetY[0];
      merged.failOffsetYEnd = activeOffsetX.failOffsetY[1];
    } else if (failOffsetY < 0) {
      merged.failOffsetYStart = activeOffsetX.failOffsetY;
    } else {
      merged.failOffsetYEnd = activeOffsetX.failOffsetY;
    }
  }
  return merged;
}
function managePanProps(activeOffsetX) {
  return transformPanGestureHandlerProps(activeOffsetX);
}
const _toConsumableArray = module_1(_toConsumableArray2);
const items = ["activeOffsetY", "activeOffsetX", "failOffsetY", "failOffsetX", "minDist", "minVelocity", "minVelocityX", "minVelocityY", "minPointers", "maxPointers", "avgTouches", "enableTrackpadTwoFingerGesture", "activateAfterLongPress"];
const items1 = ["activeOffsetYStart", "activeOffsetYEnd", "activeOffsetXStart", "activeOffsetXEnd", "failOffsetYStart", "failOffsetYEnd", "failOffsetXStart", "failOffsetXEnd"];
const obj = { name: "PanGestureHandler" };
const items2 = [];
obj.allowedProps = items2.concat(_toConsumableArray.default(_mod979.baseGestureHandlerProps), items);
obj.config = {};
obj.transformProps = managePanProps;
obj.customNativeProps = items1;

export { managePanProps };
export const panGestureHandlerProps = items;
export const panGestureHandlerCustomNativeProps = items1;
export const panHandlerName = "PanGestureHandler";
export const PanGestureHandler = module_1(_callSuper).default(obj);
