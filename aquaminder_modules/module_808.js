// Module ID: 808
// Function ID: 8461
// Dependencies: [1, 2, 809, 811]

// Module 808
import _callSuper2 from "_callSuper" /* 809 */;
import _callSuper3 from "_callSuper" /* 811 */;
import module_1 from "module_1" /* 1 */;
import closure_0 from "get registerCallableModule" /* 2 */;

const _callSuper = module_1(_callSuper2);
let closure_1 = module_1(_callSuper3).default;

export default {
  Picker: _callSuper.default,
  DatePicker: closure_1,
  registerCustomDatePickerIOS(arg0) {
    if (Platform.Platform.OS === "ios") {
      closure_1 = arg0;
    }
    return closure_1;
  }
};
