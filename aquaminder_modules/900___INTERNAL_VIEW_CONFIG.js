// Module ID: 900
// Function ID: 9706
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [1, 279, 89, 124, 86]

// Module 900 (__INTERNAL_VIEW_CONFIG)
import processColor from "processColor" /* 89 */;
import ConditionallyIgnoredEventHandlers from "ConditionallyIgnoredEventHandlers" /* 124 */;
import codegenNativeComponent2 from "codegenNativeComponent" /* 279 */;
import module_1 from "module_1" /* 1 */;
import get from "get" /* 86 */;

const codegenNativeComponent = module_1(codegenNativeComponent2);
let obj = { uiViewClassName: "RNSScreenStackHeaderConfig", directEventTypes: { topAttached: { registrationName: "onAttached" }, topDetached: { registrationName: "onDetached" } } };
obj = { backgroundColor: null, backTitle: true, backTitleFontFamily: true, backTitleFontSize: true, backTitleVisible: true, color: null, direction: true, hidden: true, hideShadow: true, largeTitle: true, largeTitleFontFamily: true, largeTitleFontSize: true, largeTitleFontWeight: true, largeTitleBackgroundColor: null, largeTitleHideShadow: true };
obj = { process: processColor.default };
obj.backgroundColor = obj;
obj.color = { process: processColor.default };
const obj1 = { process: processColor.default };
obj.largeTitleBackgroundColor = { process: processColor.default };
const obj2 = { process: processColor.default };
obj.largeTitleColor = { process: processColor.default };
obj.translucent = true;
obj.title = true;
obj.titleFontFamily = true;
obj.titleFontSize = true;
obj.titleFontWeight = true;
const obj3 = { process: processColor.default };
obj.titleColor = { process: processColor.default };
obj.disableBackButtonMenu = true;
obj.backButtonDisplayMode = true;
obj.hideBackButton = true;
obj.backButtonInCustomView = true;
obj.blurEffect = true;
obj.topInsetEnabled = true;
const obj4 = { process: processColor.default };
obj.validAttributes = Object.assign(obj, ConditionallyIgnoredEventHandlers.ConditionallyIgnoredEventHandlers({ onAttached: true, onDetached: true }));

export const __INTERNAL_VIEW_CONFIG = obj;
export default get.get("RNSScreenStackHeaderConfig", () => obj);
