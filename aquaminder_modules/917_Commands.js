// Module ID: 917
// Function ID: 9776
// Name: Commands
// Dependencies: [1, 279, 125, 89, 124, 86, 57]

// Module 917 (Commands)
import keys from "keys" /* 57 */;
import processColor from "processColor" /* 89 */;
import ConditionallyIgnoredEventHandlers from "ConditionallyIgnoredEventHandlers" /* 124 */;
import codegenNativeCommands2 from "codegenNativeCommands" /* 125 */;
import codegenNativeComponent2 from "codegenNativeComponent" /* 279 */;
import module_1 from "module_1" /* 1 */;
import get from "get" /* 86 */;

const codegenNativeComponent = module_1(codegenNativeComponent2);
const codegenNativeCommands = module_1(codegenNativeCommands2);
let obj = { uiViewClassName: "RNSSearchBar", directEventTypes: { topSearchFocus: { registrationName: "onSearchFocus" }, topSearchBlur: { registrationName: "onSearchBlur" }, topSearchButtonPress: { registrationName: "onSearchButtonPress" }, topCancelButtonPress: { registrationName: "onCancelButtonPress" }, topChangeText: { registrationName: "onChangeText" }, topClose: { registrationName: "onClose" }, topOpen: { registrationName: "onOpen" } } };
obj = { hideWhenScrolling: true, autoCapitalize: true, placeholder: true, placement: true, obscureBackground: true, hideNavigationBar: true, cancelButtonText: true, barTintColor: null, tintColor: null, textColor: null, disableBackButtonOverride: true, inputType: true };
obj = { process: processColor.default };
obj.barTintColor = obj;
obj.tintColor = { process: processColor.default };
const obj1 = { process: processColor.default };
obj.textColor = { process: processColor.default };
const obj2 = { process: processColor.default };
obj.hintTextColor = { process: processColor.default };
const obj3 = { process: processColor.default };
obj.headerIconColor = { process: processColor.default };
obj.shouldShowHintSearchIcon = true;
const obj4 = { process: processColor.default };
obj.validAttributes = Object.assign(obj, ConditionallyIgnoredEventHandlers.ConditionallyIgnoredEventHandlers({ onSearchFocus: true, onSearchBlur: true, onSearchButtonPress: true, onCancelButtonPress: true, onChangeText: true, onClose: true, onOpen: true }));

export const __INTERNAL_VIEW_CONFIG = obj;
export default get.get("RNSSearchBar", () => obj);
export const Commands = {
  blur(result) {
    keys.dispatchCommand(result, "blur", []);
  },
  focus(result) {
    keys.dispatchCommand(result, "focus", []);
  },
  clearText(result) {
    keys.dispatchCommand(result, "clearText", []);
  },
  toggleCancelButton(result) {
    const items = [arg1];
    keys.dispatchCommand(result, "toggleCancelButton", items);
  },
  setText(result) {
    const items = [arg1];
    keys.dispatchCommand(result, "setText", items);
  },
  cancelSearch(result) {
    keys.dispatchCommand(result, "cancelSearch", []);
  }
};
