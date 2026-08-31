// Module ID: 795
// Function ID: 8392
// Name: DatePickerAndroid
// Dependencies: [1, 363, 12, 13, 796, 797, 798]

// Module 795 (DatePickerAndroid)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 363 */;
import RNCDatePicker from "RNCDatePicker" /* 796 */;
import frozen from "frozen" /* 798 */;
import module_1 from "module_1" /* 1 */;

let closure_2 = module_1(asyncGeneratorStep);
let closure_3 = module_1(_classCallCheck);
let closure_4 = module_1(_defineProperties);
let closure_5 = module_1(RNCDatePicker);
const tmp3 = (() => {
  class DatePickerAndroid {
    constructor() {
      defaultResult = closure_1_3.default(this, DatePickerAndroid);
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
          DatePickerAndroid(closure_3_1[5]).toMilliseconds(arg0, "value", "minimumDate", "maximumDate");
          let _default = arg0.display;
          if (!_default) {
            _default = DatePickerAndroid(closure_3_1[6]).ANDROID_DISPLAY.default;
          }
          arg0.display = _default;
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
  return closure_4.default(DatePickerAndroid, null, items);
})();
tmp3.dateSetAction = frozen.DATE_SET_ACTION;
tmp3.dismissedAction = frozen.DISMISS_ACTION;

export default tmp3;
