// Module ID: 389
// Function ID: 4745
// Dependencies: [1, 125, 119]

// Module 389
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import codegenNativeCommands2 from "codegenNativeCommands" /* 125 */;
import module_1 from "module_1" /* 1 */;

const codegenNativeCommands = module_1(codegenNativeCommands2);
const getIteratorFn = _interopRequireWildcard(getIteratorFn2);

export default codegenNativeCommands.default({ supportedCommands: ["flashScrollIndicators", "scrollTo", "scrollToEnd", "zoomToRect"] });
