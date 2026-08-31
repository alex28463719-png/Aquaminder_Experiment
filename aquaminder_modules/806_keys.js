// Module ID: 806
// Function ID: 8452
// Name: keys
// Dependencies: [798]

// Module 806 (keys)
import frozen from "frozen" /* 798 */;

require = arg1;
const dependencyMap = arg6;
arg5.createDateTimeSetEvtParams = undefined;
arg5.createDismissEvtParams = undefined;
arg5.createNeutralEvtParams = undefined;
arg5.createDateTimeSetEvtParams = function createDateTimeSetEvtParams(getTime, utcOffset) {
  let obj = { type: frozen.EVENT_TYPE_SET };
  obj = { timestamp: getTime.getTime(), utcOffset };
  obj.nativeEvent = obj;
  const items = [obj, getTime];
  return items;
};
arg5.createDismissEvtParams = function createDismissEvtParams(closure_2_1, utcOffset) {
  let obj = { type: frozen.ANDROID_EVT_TYPE.dismissed };
  obj = { timestamp: closure_2_1.getTime(), utcOffset };
  obj.nativeEvent = obj;
  const items = [obj, closure_2_1];
  return items;
};
arg5.createNeutralEvtParams = function createNeutralEvtParams(closure_2_1, utcOffset) {
  let obj = { type: frozen.ANDROID_EVT_TYPE.neutralButtonPressed };
  obj = { timestamp: closure_2_1.getTime(), utcOffset };
  obj.nativeEvent = obj;
  const items = [obj, closure_2_1];
  return items;
};
