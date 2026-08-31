// Module ID: 258
// Function ID: 2669
// Dependencies: [1, 259, 22]

// Module 258
import _callSuper from "_callSuper" /* 22 */;
import DeviceEventManager from "DeviceEventManager" /* 259 */;
import module_1 from "module_1" /* 1 */;

let closure_0 = module_1(DeviceEventManager);
let closure_1 = [];
module_1(_callSuper).default.addListener("hardwareBackPress", () => {
  let diff = arr.length - 1;
  if (diff >= 0) {
    while (true) {
      let tmp2 = arr;
      obj = arr[diff];
      let tmp3 = diff;
      if (obj != null) {
        let tmp4 = arr;
        if (obj.call(arr)) {
          break;
        }
      }
      diff = diff - 1;
    }
  }
  obj.exitApp();
});
let obj = {
  exitApp() {
    if (mod.default) {
      const result = mod.default.invokeDefaultBackPressHandler();
    }
  },
  addEventListener(arg0, arg1) {
    closure_0 = arg1;
    if (arr.indexOf(arg1) === -1) {
      arr = arr.push(arg1);
    }
    return {
      remove() {
        const index = closure_1_1.indexOf(closure_0);
        if (index !== -1) {
          closure_1_1.splice(index, 1);
        }
      }
    };
  }
};

export default obj;
