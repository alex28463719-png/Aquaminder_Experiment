// Module ID: 1002
// Function ID: 10739
// Name: TapGestureHandler
// Dependencies: [1, 6, 965, 979]

// Module 1002 (TapGestureHandler)
import _toConsumableArray2 from "_toConsumableArray" /* 6 */;
import _callSuper from "_callSuper" /* 965 */;
import _mod979 from "module_979" /* 979 */;
import module_1 from "module_1" /* 1 */;

const _toConsumableArray = module_1(_toConsumableArray2);
const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler" };
const items1 = [];
obj.allowedProps = items1.concat(_toConsumableArray.default(_mod979.baseGestureHandlerProps), items);
obj.config = { shouldCancelWhenOutside: true };

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = module_1(_callSuper).default(obj);
