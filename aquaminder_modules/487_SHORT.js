// Module ID: 487
// Function ID: 5394
// Name: SHORT
// Dependencies: [1, 488]

// Module 487 (SHORT)
import ToastAndroid2 from "ToastAndroid" /* 488 */;
import module_1 from "module_1" /* 1 */;

const ToastAndroid = module_1(ToastAndroid2);
const constants = ToastAndroid.default.getConstants();

export default {
  SHORT: constants.SHORT,
  LONG: constants.LONG,
  TOP: constants.TOP,
  BOTTOM: constants.BOTTOM,
  CENTER: constants.CENTER,
  show(arg0, arg1) {
    ToastAndroid.default.show(arg0, arg1);
  },
  showWithGravity(arg0, arg1, arg2) {
    ToastAndroid.default.showWithGravity(arg0, arg1, arg2);
  },
  showWithGravityAndOffset(arg0, arg1, arg2, arg3, arg4) {
    const result = ToastAndroid.default.showWithGravityAndOffset(arg0, arg1, arg2, arg3, arg4);
  }
};
