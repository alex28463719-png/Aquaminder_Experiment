// Module ID: 984
// Function ID: 10505
// Name: FlingGestureHandler
// Dependencies: [1, 6, 965, 979]

// Module 984 (FlingGestureHandler)
import _toConsumableArray2 from "_toConsumableArray" /* 6 */;
import _callSuper from "_callSuper" /* 965 */;
import _mod979 from "module_979" /* 979 */;
import module_1 from "module_1" /* 1 */;

const _toConsumableArray = module_1(_toConsumableArray2);
const items = ["numberOfPointers", "direction"];
const obj = { name: "FlingGestureHandler" };
const items1 = [];
obj.allowedProps = items1.concat(_toConsumableArray.default(_mod979.baseGestureHandlerProps), items);
obj.config = {};

export const flingGestureHandlerProps = items;
export const flingHandlerName = "FlingGestureHandler";
export const FlingGestureHandler = module_1(_callSuper).default(obj);
