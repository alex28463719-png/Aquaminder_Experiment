// Module ID: 408
// Function ID: 4876
// Name: getConstants
// Dependencies: [36]

// Module 408 (getConstants)
import requireModule2 from "requireModule" /* 36 */;

const requireModule = _interopRequireWildcard(requireModule2);
const enforcing = requireModule.getEnforcing("StatusBarManager");
let c1 = null;

export default {
  getConstants() {
    if (constants == null) {
      constants = uiStore.getConstants();
    }
    return constants;
  },
  getHeight(arg0) {
    const height = uiStore.getHeight(arg0);
  },
  setNetworkActivityIndicatorVisible(arg0) {
    const result = uiStore.setNetworkActivityIndicatorVisible(arg0);
  },
  addListener(arg0) {
    uiStore.addListener(arg0);
  },
  removeListeners(self) {
    uiStore.removeListeners(self);
  },
  setStyle(arg0, arg1) {
    uiStore.setStyle(arg0, arg1);
  },
  setHidden(arg0, arg1) {
    uiStore.setHidden(arg0, arg1);
  }
};
