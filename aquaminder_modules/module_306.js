// Module ID: 306
// Function ID: 3585
// Dependencies: [1, 307, 36]

// Module 306
import requireModule2 from "requireModule" /* 36 */;
import shouldUseTurboAnimatedModule2 from "shouldUseTurboAnimatedModule" /* 307 */;
import module_1 from "module_1" /* 1 */;

const shouldUseTurboAnimatedModule = module_1(shouldUseTurboAnimatedModule2);
const requireModule = _interopRequireWildcard(requireModule2);
let value = null;
if (!shouldUseTurboAnimatedModule.default()) {
  value = requireModule.get("NativeAnimatedModule");
}

export default value;
