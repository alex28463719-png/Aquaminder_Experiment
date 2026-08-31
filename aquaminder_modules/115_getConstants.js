// Module ID: 115
// Function ID: 1348
// Name: getConstants
// Dependencies: [36]

// Module 115 (getConstants)
import requireModule2 from "requireModule" /* 36 */;

const requireModule = _interopRequireWildcard(requireModule2);
const enforcing = requireModule.getEnforcing("DeviceInfo");
let c1 = null;

export default {
  getConstants() {
    if (constants2 == null) {
      constants2 = constants.getConstants();
    }
    return constants2;
  }
};
