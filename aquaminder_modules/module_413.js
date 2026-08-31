// Module ID: 413
// Function ID: 4913
// Dependencies: [1, 33, 248, 119, 414]

// Module 413
import get_Version from "get Version" /* 33 */;
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import View2 from "View" /* 248 */;
import __INTERNAL_VIEW_CONFIG from "__INTERNAL_VIEW_CONFIG" /* 414 */;
import module_1 from "module_1" /* 1 */;

get_Version = module_1(get_Version);
const View = module_1(View2);
const getIteratorFn = _interopRequireWildcard(getIteratorFn2);

export default get_Version.default.select({ ios: __INTERNAL_VIEW_CONFIG.default, default: View.default });
