// Module ID: 679
// Function ID: 7826
// Name: keys2
// Dependencies: [1, 680]

// Module 679 (keys2)
import RNCSafeAreaContext2 from "RNCSafeAreaContext" /* 680 */;
import module_1 from "module_1" /* 1 */;

const RNCSafeAreaContext = module_1(RNCSafeAreaContext2);
let initialWindowMetrics;
if (RNCSafeAreaContext.default != null) {
  if (RNCSafeAreaContext.default.getConstants != null) {
    const constants = RNCSafeAreaContext.default.getConstants();
    if (constants != null) {
      initialWindowMetrics = constants.initialWindowMetrics;
    }
    const _default = RNCSafeAreaContext.default;
  }
}
let tmp6 = null;
if (initialWindowMetrics != null) {
  tmp6 = initialWindowMetrics;
}
let insets;
if (tmp6 != null) {
  insets = tmp6.insets;
}

export const initialWindowMetrics = tmp6;
export const initialWindowSafeAreaInsets = insets;
