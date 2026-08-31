// Module ID: 902
// Function ID: 9710
// Name: EDGE_TO_EDGE
// Dependencies: [1, 203, 903]
// Exports: transformEdgeToEdgeProps

// Module 902 (EDGE_TO_EDGE)
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import controlEdgeToEdgeValues from "controlEdgeToEdgeValues" /* 903 */;
import module_1 from "module_1" /* 1 */;

let closure_0 = module_1(_objectWithoutProperties);
let closure_1 = ["statusBarColor", "statusBarTranslucent", "navigationBarColor", "navigationBarTranslucent"];

export function transformEdgeToEdgeProps(arg0) {
  ({ statusBarColor, statusBarTranslucent, navigationBarColor, navigationBarTranslucent } = arg0);
  return closure_0.default(arg0, closure_1);
}
export const EDGE_TO_EDGE = controlEdgeToEdgeValues.isEdgeToEdge();
