// Module ID: 793
// Function ID: 8384
// Name: DateTimePickerAndroid
// Dependencies: [1, 38, 363, 20, 794, 2, 798, 801, 806]

// Module 793 (DateTimePickerAndroid)
import invariant from "invariant" /* 20 */;
import _slicedToArray from "_slicedToArray" /* 38 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 363 */;
import _default2 from "_default2" /* 794 */;
import frozen from "frozen" /* 798 */;
import validateMaterial3PropsNotUsed from "validateMaterial3PropsNotUsed" /* 801 */;
import module_1 from "module_1" /* 1 */;
import closure_6 from "get registerCallableModule" /* 2 */;

let closure_2 = module_1(_slicedToArray);
let closure_3 = module_1(asyncGeneratorStep);
let closure_4 = module_1(invariant);
let closure_5 = module_1(_default2);

export const DateTimePickerAndroid = {
  open(mode) {
    let date = mode.mode;
    if (date === undefined) {
      date = frozen.ANDROID_MODE.date;
    }
    ({ display: require, value } = mode);
    dependencyMap = value;
    ({ is24Hour: closure_2, minimumDate: closure_3, maximumDate: closure_4, minuteInterval: closure_5, timeZoneOffsetInMinutes: closure_6, timeZoneName: closure_7, onChange: closure_8, onError: closure_9, positiveButton: closure_10, negativeButton: closure_11, neutralButton: closure_12, neutralButtonLabel: closure_13, positiveButtonLabel: closure_14, negativeButtonLabel: closure_15, testID: closure_16, firstDayOfWeek: closure_17, title: closure_18, initialInputMode: closure_19, fullscreen: closure_20 } = mode);
    validateMaterial3PropsNotUsed.validateAndroidProps(mode);
    closure_4.default(value, "A date or time must be specified as `value` prop.");
    const time = value.getTime();
    const openPicker = validateMaterial3PropsNotUsed.getOpenPicker(date, mode.design);
    (() => {
      closure_0 = closure_1_3.default(async () => {
        try {
          let obj = {};
          obj = { label: closure_2_14 };
          obj = {};
          let textColor;
          if (closure_2_10 != null) {
            textColor = closure_2_10.textColor;
          }
          obj.textColor = closure_3_6.processColor(textColor);
          obj.positive = Object.assign(obj, closure_2_10, obj);
          const obj1 = { label: closure_2_13 };
          const obj2 = {};
          let textColor1;
          if (closure_2_12 != null) {
            textColor1 = closure_2_12.textColor;
          }
          obj2.textColor = closure_3_6.processColor(textColor1);
          obj.neutral = Object.assign(obj1, closure_2_12, obj2);
          const obj3 = { label: closure_2_15 };
          const obj4 = {};
          let textColor2;
          if (closure_2_11 != null) {
            textColor2 = closure_2_11.textColor;
          }
          obj4.textColor = closure_3_6.processColor(textColor2);
          obj.negative = Object.assign(obj3, closure_2_11, obj4);
          if (closure_0 === closure_3_0(value[6]).ANDROID_DISPLAY.spinner) {
            let _default = closure_3_0(value[6]).ANDROID_DISPLAY.spinner;
          } else {
            _default = closure_3_0(value[6]).ANDROID_DISPLAY.default;
          }
          const obj5 = { value: closure_2_21, display: _default, is24Hour: closure_2_2, minimumDate: closure_2_3, maximumDate: closure_2_4, minuteInterval: closure_2_5, timeZoneOffsetInMinutes: closure_2_6, timeZoneName: closure_2_7, dialogButtons: obj, testID: closure_2_16, firstDayOfWeek: closure_2_17, title: closure_2_18, initialInputMode: closure_2_19, fullscreen: closure_2_20 };
          ({ action, timestamp, utcOffset } = yield closure_2_22(obj5));
          if (closure_3_0(value[6]).DATE_SET_ACTION !== action) {
            if (closure_3_0(value[6]).TIME_SET_ACTION !== action) {
              if (closure_3_0(value[6]).NEUTRAL_BUTTON_ACTION === action) {
                const first = closure_3_2.default(closure_3_0(value[8]).createNeutralEvtParams(closure_2_1, utcOffset), 1)[0];
                if (closure_2_8 != null) {
                  closure_2_8(first, closure_2_1);
                }
              } else {
                const DISMISS_ACTION = closure_3_0(value[6]).DISMISS_ACTION;
                const first1 = closure_3_2.default(closure_3_0(value[8]).createDismissEvtParams(closure_2_1, utcOffset), 1)[0];
                if (closure_2_8 != null) {
                  closure_2_8(first1, closure_2_1);
                }
              }
            }
          }
          const _Date = Date;
          const date = new Date(timestamp);
          if (closure_2_8 != null) {
            closure_2_8(tmp69, tmp64);
          }
          const tmp11 = closure_2_12;
          const tmp17 = closure_2_11;
          const tmp4 = closure_2_10;
          const tmp43 = yield closure_2_22(obj5);
          tmp64 = date;
        } catch (tmp73) {
          if (closure_2_9) {
            closure_2_9(tmp73);
          }
        }
      });
      return function presentPicker() {
        return callback(...arguments);
      };
    })()();
  },
  dismiss(arg0) {
    let str = "default";
    if (arguments.length > 1) {
      str = "default";
      if (arguments[1] !== undefined) {
        str = arguments[1];
      }
    }
    if (str === "material") {
      let _default = validateMaterial3PropsNotUsed.materialPickers;
    } else {
      _default = mod.default;
    }
    return _default[arg0].dismiss();
  }
};
