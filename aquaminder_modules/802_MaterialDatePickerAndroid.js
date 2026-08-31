// Module ID: 802
// Function ID: 8428
// Name: MaterialDatePickerAndroid
// Dependencies: [1, 363, 12, 13, 803, 797, 798]

// Module 802 (MaterialDatePickerAndroid)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 363 */;
import frozen from "frozen" /* 798 */;
import RNCMaterialDatePicker from "RNCMaterialDatePicker" /* 803 */;
import module_1 from "module_1" /* 1 */;

let closure_2 = module_1(asyncGeneratorStep);
let closure_3 = module_1(_classCallCheck);
let closure_4 = module_1(_defineProperties);
let closure_5 = module_1(RNCMaterialDatePicker);
const tmp3 = (() => {
  class MaterialDatePickerAndroid {
    constructor() {
      defaultResult = closure_1_3.default(this, MaterialDatePickerAndroid);
      return;
    }
  }
  let obj = {
    key: "open",
    value: (() => {
      closure_0 = closure_1_2.default(async (arg0) => {
        if (obj) {
          return obj.resume();
        } else {
          MaterialDatePickerAndroid(closure_3_1[5]).toMilliseconds(arg0, "value", "minimumDate", "maximumDate");
          return closure_3_5.default.open(arg0);
        }
      });
      return function open(arg0) {
        return callback(...arguments);
      };
    })()
  };
  const items = [obj, ];
  obj = {
    key: "dismiss",
    value: (() => {
      closure_0 = closure_1_2.default(async () => {
        if (obj) {
          return obj.resume();
        } else {
          return closure_3_5.default.dismiss();
        }
      });
      return function dismiss() {
        return callback(...arguments);
      };
    })()
  };
  items[1] = obj;
  return closure_4.default(MaterialDatePickerAndroid, null, items);
})();
tmp3.dateSetAction = frozen.DATE_SET_ACTION;
tmp3.dismissedAction = frozen.DISMISS_ACTION;

export default tmp3;
