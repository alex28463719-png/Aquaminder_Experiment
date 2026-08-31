// Module ID: 309
// Function ID: 3595
// Dependencies: [1, 307, 36]

// Module 309
import requireModule2 from "requireModule" /* 36 */;
import shouldUseTurboAnimatedModule2 from "shouldUseTurboAnimatedModule" /* 307 */;
import module_1 from "module_1" /* 1 */;

const shouldUseTurboAnimatedModule = module_1(shouldUseTurboAnimatedModule2);
const requireModule = _interopRequireWildcard(requireModule2);
let value = null;
if (shouldUseTurboAnimatedModule.default()) {
  value = requireModule.get("NativeAnimatedTurboModule");
}

export default value;
