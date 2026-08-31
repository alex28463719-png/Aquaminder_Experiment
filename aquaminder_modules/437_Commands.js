// Module ID: 437
// Function ID: 5054
// Name: Commands
// Dependencies: [1, 125, 279, 119, 89, 124, 86, 57]

// Module 437 (Commands)
import keys from "keys" /* 57 */;
import processColor from "processColor" /* 89 */;
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import ConditionallyIgnoredEventHandlers from "ConditionallyIgnoredEventHandlers" /* 124 */;
import codegenNativeCommands2 from "codegenNativeCommands" /* 125 */;
import codegenNativeComponent2 from "codegenNativeComponent" /* 279 */;
import module_1 from "module_1" /* 1 */;
import get from "get" /* 86 */;

const codegenNativeCommands = module_1(codegenNativeCommands2);
const codegenNativeComponent = module_1(codegenNativeComponent2);
const getIteratorFn = _interopRequireWildcard(getIteratorFn2);
let obj = { uiViewClassName: "RCTSwitch", bubblingEventTypes: { topChange: { phasedRegistrationNames: { captured: "onChangeCapture", bubbled: "onChange" } } } };
obj = { disabled: true, value: true };
obj = { process: processColor.default };
obj.tintColor = obj;
obj.onTintColor = { process: processColor.default };
const obj1 = { process: processColor.default };
obj.thumbTintColor = { process: processColor.default };
const obj2 = { process: processColor.default };
obj.thumbColor = { process: processColor.default };
const obj3 = { process: processColor.default };
obj.trackColorForFalse = { process: processColor.default };
const obj4 = { process: processColor.default };
obj.trackColorForTrue = { process: processColor.default };
const obj5 = { process: processColor.default };
obj.validAttributes = Object.assign(obj, ConditionallyIgnoredEventHandlers.ConditionallyIgnoredEventHandlers({ onChange: true }));

export const __INTERNAL_VIEW_CONFIG = obj;
export default get.get("RCTSwitch", () => obj);
export const Commands = {
  setValue(result) {
    const items = [arg1];
    keys.dispatchCommand(result, "setValue", items);
  }
};
