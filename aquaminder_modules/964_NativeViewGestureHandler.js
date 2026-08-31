// Module ID: 964
// Function ID: 10405
// Name: NativeViewGestureHandler
// Dependencies: [1, 6, 965, 979]

// Module 964 (NativeViewGestureHandler)
import _toConsumableArray2 from "_toConsumableArray" /* 6 */;
import _callSuper2 from "_callSuper" /* 965 */;
import _mod979 from "module_979" /* 979 */;
import module_1 from "module_1" /* 1 */;

const _toConsumableArray = module_1(_toConsumableArray2);
const items = ["shouldActivateOnStart", "disallowInterruption"];
const items1 = [];
const _callSuper = module_1(_callSuper2);
const combined = items1.concat(_toConsumableArray.default(_mod979.baseGestureHandlerProps), items);

export const nativeViewGestureHandlerProps = items;
export const nativeViewProps = combined;
export const nativeViewHandlerName = "NativeViewGestureHandler";
export const NativeViewGestureHandler = _callSuper.default({ name: "NativeViewGestureHandler", allowedProps: combined, config: {} });
