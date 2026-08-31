// Module ID: 652
// Function ID: 6927
// Name: methods
// Dependencies: [1, 6, 363, 2, 653, 649, 654]

// Module 652 (methods)
import _toConsumableArray from "_toConsumableArray" /* 6 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 363 */;
import proxifyPermissions from "proxifyPermissions" /* 649 */;
import RNPermissions from "RNPermissions" /* 653 */;
import canScheduleExactAlarms from "canScheduleExactAlarms" /* 654 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;

let num = 0;
let closure_2 = module_1(_toConsumableArray);
let closure_3 = module_1(asyncGeneratorStep);
let closure_5 = module_1(RNPermissions);
if (get_registerCallableModule.Platform.OS === "android") {
  num = get_registerCallableModule.Platform.Version;
}
let closure_6 = num < 33;
let closure_7 = (() => {
  closure_0 = closure_3.default(async (arg0, arg1) => {
    closure_0 = arg1;
    if (arg1 != null) {
      if (yield _default.shouldShowRequestRationale(arg0)) {
        if (typeof arg1 === "function") {
          return arg1();
        } else {
          const promise = new Promise((arg0) => {
            closure_0 = arg0;
            const buttonNegative = closure_0.buttonNegative;
            const Alert = closure_3_4.Alert;
            ({ title, message } = closure_0);
            const items = [];
            if (buttonNegative) {
              let obj = {
                text: buttonNegative,
                onPress() {
                    return callback(false);
                  }
              };
              const items1 = [obj];
              let items2 = items1;
            } else {
              items2 = [];
            }
            obj = {
              text: closure_0.buttonPositive,
              onPress() {
                return callback(true);
              }
            };
            const items3 = [obj];
            obj = { cancelable: false };
            Alert.alert(title, message, items.concat(closure_3_2.default(items2), items3), obj);
          });
          return promise;
        }
      }
      _default = closure_2_5.default;
    }
    return true;
  });
  return function shouldRequestPermission(arg0, arg1) {
    return callback(...arguments);
  };
})();
const tmp5 = (() => {
  closure_0 = closure_3.default(async (arg0) => yield closure_2_5.default.check(arg0));
  return function check(arg0) {
    return callback(...arguments);
  };
})();
let closure_8 = tmp5;
const tmp6 = (() => {
  closure_0 = closure_3.default(async (arg0, arg1) => yield (yield closure_2_7(arg0, arg1)) ? closure_2_5.default.request : closure_2_5.default.check(arg0));
  return function request(arg0, arg1) {
    return callback(...arguments);
  };
})();
let closure_9 = tmp6;
const tmp4 = (() => {
  closure_0 = closure_3.default(async () => {
    let str = "application";
    if (arguments.length > 0) {
      str = "application";
      if (arguments[0] !== undefined) {
        str = arguments[0];
      }
    }
    yield closure_2_5.default.openSettings(str);
  });
  return function openSettings() {
    return callback(...arguments);
  };
})();
let obj = {
  canScheduleExactAlarms() {
    return mod.default.canScheduleExactAlarms();
  },
  canUseFullScreenIntent() {
    return mod.default.canUseFullScreenIntent();
  },
  check: tmp5
};
const tmp7 = (() => {
  closure_0 = closure_3.default(async () => {
    if (closure_2_6) {
      return yield closure_2_5.default.checkNotifications();
    } else {
      const obj = { status: yield closure_2_8("android.permission.POST_NOTIFICATIONS"), settings: {} };
      return obj;
    }
  });
  return function checkNotifications() {
    return callback(...arguments);
  };
})();
obj.checkLocationAccuracy = canScheduleExactAlarms.checkLocationAccuracy;
obj.checkMultiple = function checkMultiple(arr) {
  return mod.default.checkMultiple(proxifyPermissions.uniq(arr));
};
obj.checkNotifications = tmp7;
obj.openPhotoPicker = canScheduleExactAlarms.openPhotoPicker;
obj.openSettings = tmp4;
obj.request = tmp6;
obj.requestLocationAccuracy = canScheduleExactAlarms.requestLocationAccuracy;
obj.requestMultiple = function requestMultiple(arr) {
  return mod.default.requestMultiple(proxifyPermissions.uniq(arr));
};
obj.requestNotifications = (() => {
  closure_0 = closure_3.default(async () => {
    if (arguments.length > 0) {
      if (arguments[0] !== undefined) {
        const first = arguments[0];
      }
      if (arguments.length > 1) {
        const tmp2 = arguments[1];
      }
      if (closure_2_6) {
        return yield closure_2_5.default.requestNotifications([]);
      } else {
        const obj = { status: yield closure_2_9("android.permission.POST_NOTIFICATIONS", tmp2), settings: {} };
        return obj;
      }
    }
  });
  return function requestNotifications(arg0) {
    return callback(...arguments);
  };
})();

export const methods = obj;
