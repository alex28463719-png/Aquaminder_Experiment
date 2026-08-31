// Module ID: 794
// Function ID: 8391
// Name: _default2
// Dependencies: [1, 99, 795, 799, 798]

// Module 794 (_default2)
import _defineProperty2 from "_defineProperty" /* 99 */;
import DatePickerAndroid2 from "DatePickerAndroid" /* 795 */;
import frozen from "frozen" /* 798 */;
import TimePickerAndroid2 from "TimePickerAndroid" /* 799 */;
import module_1 from "module_1" /* 1 */;

const _defineProperty = module_1(_defineProperty2);
const DatePickerAndroid = module_1(DatePickerAndroid2);
const TimePickerAndroid = module_1(TimePickerAndroid2);
({ default: _default, default: _default2 } = _defineProperty);

export default _default(_default2({}, frozen.ANDROID_MODE.date, DatePickerAndroid.default), frozen.ANDROID_MODE.time, TimePickerAndroid.default);
