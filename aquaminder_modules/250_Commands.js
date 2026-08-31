// Module ID: 250
// Function ID: 2646
// Name: Commands
// Dependencies: [1, 86, 125]

// Module 250 (Commands)
import get2 from "get" /* 86 */;
import codegenNativeCommands2 from "codegenNativeCommands" /* 125 */;
import module_1 from "module_1" /* 1 */;

const get = _interopRequireWildcard(get2);
const codegenNativeCommands = module_1(codegenNativeCommands2);
const value = get.get("RCTView", () => ({ uiViewClassName: "RCTView" }));

export const Commands = codegenNativeCommands.default({ supportedCommands: ["hotspotUpdate", "setPressed"] });
export default value;
