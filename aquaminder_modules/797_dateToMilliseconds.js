// Module ID: 797
// Function ID: 8404
// Name: dateToMilliseconds
// Dependencies: [1, 20]
// Exports: dateToMilliseconds, sharedPropsValidation, toMilliseconds

// Module 797 (dateToMilliseconds)
import invariant from "invariant" /* 20 */;
import module_1 from "module_1" /* 1 */;

let closure_0 = module_1(invariant);

export function dateToMilliseconds(getTime) {
  return getTime ? getTime.getTime() : undefined;
}
export function sharedPropsValidation(timeZoneName) {
  ({ value, timeZoneOffsetInMinutes } = timeZoneName);
  closure_0.default(value, "A date or time must be specified as `value` prop");
  closure_0.default(value instanceof Date, "`value` prop must be an instance of Date object");
  let tmp3 = timeZoneName.timeZoneName == null;
  if (!tmp3) {
    tmp3 = timeZoneOffsetInMinutes == null;
  }
  closure_0.default(tmp3, "`timeZoneName` and `timeZoneOffsetInMinutes` cannot be specified at the same time");
  if (timeZoneOffsetInMinutes !== undefined) {
    const _console = console;
    console.warn("`timeZoneOffsetInMinutes` is deprecated and will be removed in a future release. Use `timeZoneName` instead.");
  }
}
export function toMilliseconds(display, value, minimumDate, maximumDate) {
  closure_0 = display;
  const length = arguments.length;
  let num = 0;
  if (length > 1) {
    num = length - 1;
  }
  const arr = new Array(num);
  for (let num2 = 1; num2 < length; num2 = num2 + 1) {
    arr[num2 - 1] = arguments[num2];
  }
  const item = arr.forEach(function each(arg0) {
    if (toString.call(display[arg0]) === "[object Date]") {
      display[arg0] = obj.getTime();
    }
  });
}
