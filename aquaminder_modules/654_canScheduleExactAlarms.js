// Module ID: 654
// Function ID: 6960
// Name: canScheduleExactAlarms
// Dependencies: [1, 363]

// Module 654 (canScheduleExactAlarms)
import asyncGeneratorStep from "asyncGeneratorStep" /* 363 */;
import module_1 from "module_1" /* 1 */;

let closure_0 = module_1(asyncGeneratorStep);
function getUnsupportedError(arg0, arg1) {
  const error = new Error("Only supported by " + arg0 + " " + arg1 + " and above");
  return error;
}

export const canScheduleExactAlarms = (() => {
  closure_0 = closure_0.default(async () => {
    if (obj) {
      return obj.resume();
    } else {
      throw closure_2_1("Android", 12);
    }
  });
  return function canScheduleExactAlarms() {
    return callback(...arguments);
  };
})();
export const canUseFullScreenIntent = (() => {
  closure_0 = closure_0.default(async () => {
    if (obj) {
      return obj.resume();
    } else {
      throw closure_2_1("Android", 14);
    }
  });
  return function canUseFullScreenIntent() {
    return callback(...arguments);
  };
})();
export const openPhotoPicker = (() => {
  closure_0 = closure_0.default(async () => {
    if (obj) {
      return obj.resume();
    } else {
      throw closure_2_1("iOS", 14);
    }
  });
  return function openPhotoPicker() {
    return callback(...arguments);
  };
})();
export const requestLocationAccuracy = (() => {
  closure_0 = closure_0.default(async () => {
    if (obj) {
      return obj.resume();
    } else {
      throw closure_2_1("iOS", 14);
    }
  });
  return function requestLocationAccuracy() {
    return callback(...arguments);
  };
})();
export const checkLocationAccuracy = (() => {
  closure_0 = closure_0.default(async () => {
    if (obj) {
      return obj.resume();
    } else {
      throw closure_2_1("iOS", 14);
    }
  });
  return function checkLocationAccuracy() {
    return callback(...arguments);
  };
})();
