// Module ID: 441
// Function ID: 5090
// Name: Commands
// Dependencies: [1, 86, 125, 440]

// Module 441 (Commands)
import get2 from "get" /* 86 */;
import codegenNativeCommands2 from "codegenNativeCommands" /* 125 */;
import _mod440 from "module_440" /* 440 */;
import module_1 from "module_1" /* 1 */;

let get = _interopRequireWildcard(get2);
const codegenNativeCommands = module_1(codegenNativeCommands2);
const module_440 = module_1(_mod440);
get = { validAttributes: Object.assign({}, module_440.default.validAttributes, { dataDetectorTypes: true }) };
const merged = Object.assign({ uiViewClassName: "RCTMultilineTextInputView" }, module_440.default, get);

export const Commands = codegenNativeCommands.default({ supportedCommands: ["focus", "blur", "setTextAndSelection"] });
export const __INTERNAL_VIEW_CONFIG = merged;
export default get.get("RCTMultilineTextInputView", () => merged);
