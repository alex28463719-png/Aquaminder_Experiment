// Module ID: 493
// Function ID: 5413
// Name: vibrateScheduler
// Dependencies: [1, 494]

// Module 493 (vibrateScheduler)
import Vibration from "Vibration" /* 494 */;
import module_1 from "module_1" /* 1 */;

function vibrateScheduler(arg0, arg1, arg2, c3) {
  let num = c3;
  const mod = arg0;
  c1 = arg1;
  closure_2 = arg2;
  if (c1) {
    if (arg0 === closure_2) {
      mod.default.vibrate(c3);
      if (num >= arg1.length) {
        if (arg2) {
          c3 = 0;
          num = 0;
        } else {
          c1 = false;
        }
      }
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        closure_1_4(closure_0, c1, closure_2, c3 + 1);
      }, arg1[num]);
    }
  }
}
let closure_0 = module_1(Vibration);
let c1 = false;
let c2 = 0;
let c3 = 400;

export default {
  vibrate(c3) {
    if (arguments.length > 0) {
      if (arguments[0] !== undefined) {
        let first = arguments[0];
      }
      let flag = false;
      if (arguments.length > 1) {
        flag = false;
        if (arguments[1] !== undefined) {
          flag = arguments[1];
        }
      }
      if (typeof first === "number") {
        mod.default.vibrate(first);
        const _default2 = mod.default;
      } else {
        const _Array = Array;
        if (Array.isArray(first)) {
          let num2 = -1;
          if (flag) {
            num2 = 0;
          }
          mod.default.vibrateByPattern(first, num2);
          const _default = mod.default;
        } else {
          const _Error = Error;
          const error = new Error("Vibration pattern should be a number or array");
          throw error;
        }
      }
    }
    first = c3;
  },
  cancel() {
    mod.default.cancel();
  }
};
