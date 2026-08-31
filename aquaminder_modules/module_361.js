// Module ID: 361
// Function ID: 4525
// Dependencies: [1, 362, 329, 119]

// Module 361
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import unstable_createAnimatedComponentWithAllowlist2 from "unstable_createAnimatedComponentWithAllowlist" /* 329 */;
import generateRequestId2 from "generateRequestId" /* 362 */;
import module_1 from "module_1" /* 1 */;

const generateRequestId = module_1(generateRequestId2);
const unstable_createAnimatedComponentWithAllowlist = module_1(unstable_createAnimatedComponentWithAllowlist2);
const getIteratorFn = _interopRequireWildcard(getIteratorFn2);

export default unstable_createAnimatedComponentWithAllowlist.default(generateRequestId.default);
