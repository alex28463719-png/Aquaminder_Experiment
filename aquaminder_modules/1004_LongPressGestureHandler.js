// Module ID: 1004
// Function ID: 10743
// Name: LongPressGestureHandler
// Dependencies: [1, 6, 965, 979]

// Module 1004 (LongPressGestureHandler)
import _toConsumableArray2 from "_toConsumableArray" /* 6 */;
import _callSuper from "_callSuper" /* 965 */;
import _mod979 from "module_979" /* 979 */;
import module_1 from "module_1" /* 1 */;

const _toConsumableArray = module_1(_toConsumableArray2);
const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler" };
const items1 = [];
obj.allowedProps = items1.concat(_toConsumableArray.default(_mod979.baseGestureHandlerProps), items);
obj.config = { shouldCancelWhenOutside: true };

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = module_1(_callSuper).default(obj);
