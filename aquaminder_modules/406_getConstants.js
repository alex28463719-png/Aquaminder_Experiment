// Module ID: 406
// Function ID: 4863
// Name: getConstants
// Dependencies: [36]

// Module 406 (getConstants)
import requireModule2 from "requireModule" /* 36 */;

const requireModule = _interopRequireWildcard(requireModule2);
const enforcing = requireModule.getEnforcing("StatusBarManager");
let c1 = null;

export default {
  getConstants() {
    if (constants == null) {
      constants = store.getConstants();
    }
    return constants;
  },
  setColor(defaultResult, animated) {
    store.setColor(defaultResult, animated);
  },
  setTranslucent(arg0) {
    store.setTranslucent(arg0);
  },
  setStyle(arg0) {
    store.setStyle(arg0);
  },
  setHidden(arg0) {
    store.setHidden(arg0);
  }
};
