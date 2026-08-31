// Module ID: 801
// Function ID: 8422
// Name: validateMaterial3PropsNotUsed
// Dependencies: [1, 99, 794, 20, 2, 802, 804, 798, 797]
// Exports: getOpenPicker, validateAndroidProps

// Module 801 (validateMaterial3PropsNotUsed)
import invariant from "invariant" /* 20 */;
import _defineProperty2 from "_defineProperty" /* 99 */;
import _default2 from "_default2" /* 794 */;
import dateToMilliseconds from "dateToMilliseconds" /* 797 */;
import frozen from "frozen" /* 798 */;
import MaterialDatePickerAndroid2 from "MaterialDatePickerAndroid" /* 802 */;
import MaterialTimePickerAndroid2 from "MaterialTimePickerAndroid" /* 804 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;

function validateMaterial3PropsNotUsed(initialInputMode) {
  if (initialInputMode.initialInputMode) {
    const _console = console;
    console.warn("initialInputMode prop is not supported in default pickers.");
  }
  if (initialInputMode.title !== undefined) {
    const _console2 = console;
    console.warn("title prop is not supported in default pickers.");
  }
  if (initialInputMode.fullscreen !== undefined) {
    const _console3 = console;
    console.warn("fullscreen prop is not supported in default pickers.");
  }
}
const _defineProperty = module_1(_defineProperty2);
let closure_2 = module_1(_default2);
let closure_3 = module_1(invariant);
const MaterialDatePickerAndroid = module_1(MaterialDatePickerAndroid2);
const MaterialTimePickerAndroid = module_1(MaterialTimePickerAndroid2);
({ default: _default, default: _default2 } = _defineProperty);
const _defaultResult = _default(_default2({}, frozen.ANDROID_MODE.date, MaterialDatePickerAndroid.default), frozen.ANDROID_MODE.time, MaterialTimePickerAndroid.default);

export function getOpenPicker(date, design) {
  const _require = date;
  if (design === "material") {
    let _default = closure_4;
  } else {
    _default = mod.default;
  }
  if (_require(_default[7]).ANDROID_MODE.time === date) {
    return (value) => {
      let obj = _default[closure_0];
      obj = { value: value.value, display: value.display, minuteInterval: value.minuteInterval, is24Hour: value.is24Hour, timeZoneOffsetInMinutes: value.timeZoneOffsetInMinutes, timeZoneName: value.timeZoneName, dialogButtons: value.dialogButtons, title: value.title, initialInputMode: value.initialInputMode };
      return obj.open(obj);
    };
  } else {
    return (arg0) => {
      ({ value, display, minimumDate, maximumDate, timeZoneOffsetInMinutes, timeZoneName, dialogButtons, testID, firstDayOfWeek, title, initialInputMode, fullscreen } = arg0);
      return _default[date(undefined, _default[7]).ANDROID_MODE.date].open({ value, display, minimumDate, maximumDate, timeZoneOffsetInMinutes, timeZoneName, dialogButtons, testID, firstDayOfWeek, title, initialInputMode, fullscreen });
    };
  }
}
export function validateAndroidProps(value) {
  const obj = {};
  value = undefined;
  if (value != null) {
    value = value.value;
  }
  obj.value = value;
  const result = dateToMilliseconds.sharedPropsValidation(obj);
  if (value.design !== "material") {
    validateMaterial3PropsNotUsed(value);
  }
  ({ mode, display } = value);
  let tmp5 = display === frozen.ANDROID_DISPLAY.calendar;
  if (tmp5) {
    tmp5 = mode === frozen.ANDROID_MODE.time;
  }
  let tmp8 = !tmp5;
  if (!tmp5) {
    let tmp11 = display === frozen.ANDROID_DISPLAY.clock;
    if (tmp11) {
      tmp11 = mode === frozen.ANDROID_MODE.date;
    }
    tmp8 = !tmp11;
  }
  closure_3.default(tmp8, "display: " + display + " and mode: " + mode + " cannot be used together.");
  let positiveButtonLabel;
  if (value != null) {
    positiveButtonLabel = value.positiveButtonLabel;
  }
  if (positiveButtonLabel === undefined) {
    let negativeButtonLabel;
    if (value != null) {
      negativeButtonLabel = value.negativeButtonLabel;
    }
    if (negativeButtonLabel === undefined) {
      let neutralButtonLabel;
      if (value != null) {
        neutralButtonLabel = value.neutralButtonLabel;
      }
    }
  }
  console.warn("positiveButtonLabel, negativeButtonLabel and neutralButtonLabel are deprecated.Use positive / negative / neutralButton prop instead.");
}
export const materialPickers = _defaultResult;
