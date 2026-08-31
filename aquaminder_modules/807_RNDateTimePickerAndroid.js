// Module ID: 807
// Function ID: 8456
// Name: RNDateTimePickerAndroid
// Dependencies: [119, 801, 798, 793]
// Exports: default

// Module 807 (RNDateTimePickerAndroid)
import closure_2 from "getIteratorFn" /* 119 */;


export default function RNDateTimePickerAndroid(mode) {
  date(_default[1]).validateAndroidProps(mode);
  date = mode.mode;
  if (date === undefined) {
    date = date(_default[2]).ANDROID_MODE.date;
  }
  _default = mode.display;
  if (_default === undefined) {
    _default = date(_default[2]).ANDROID_DISPLAY.default;
  }
  ({ value, onChange } = mode);
  ({ is24Hour: closure_3, minimumDate: closure_4, maximumDate: closure_5, minuteInterval: closure_6, onError: closure_7, timeZoneOffsetInMinutes: closure_8, timeZoneName: closure_9, positiveButton: closure_10, negativeButton: closure_11, neutralButton: closure_12, positiveButtonLabel: closure_13, negativeButtonLabel: closure_14, neutralButtonLabel: closure_15, testID: closure_16, firstDayOfWeek: closure_17, title: closure_18, initialInputMode: closure_19, design } = mode);
  const fullscreen = mode.fullscreen;
  const time = value.getTime();
  const items = [date, design];
  const effect = onChange.useEffect(() => () => {
    const DateTimePickerAndroid = date(_default[3]).DateTimePickerAndroid;
    return DateTimePickerAndroid.dismiss(closure_1_0, closure_1_20);
  }, items);
  const items1 = [onChange, time, date];
  const effect1 = onChange.useEffect(function showOrUpdatePicker() {
    const obj = { mode: date };
    date = new Date(time);
    obj.value = date;
    obj.display = _default;
    obj.is24Hour = closure_3;
    obj.minimumDate = closure_4;
    obj.maximumDate = closure_5;
    obj.minuteInterval = closure_6;
    obj.timeZoneOffsetInMinutes = closure_8;
    obj.timeZoneName = closure_9;
    obj.onError = closure_7;
    obj.onChange = onChange;
    obj.positiveButton = closure_10;
    obj.negativeButton = closure_11;
    obj.neutralButton = closure_12;
    obj.positiveButtonLabel = closure_13;
    obj.negativeButtonLabel = closure_14;
    obj.neutralButtonLabel = closure_15;
    obj.testID = closure_16;
    obj.firstDayOfWeek = closure_17;
    obj.title = closure_18;
    obj.initialInputMode = closure_19;
    obj.design = design;
    obj.fullscreen = fullscreen;
    const DateTimePickerAndroid = date(_default[3]).DateTimePickerAndroid;
    DateTimePickerAndroid.open(obj);
  }, items1);
  return null;
};
