// Module ID: 222
// Function ID: 2499
// Name: emptyCallback
// Dependencies: [1, 223]

// Module 222 (emptyCallback)
import DialogManagerAndroid from "DialogManagerAndroid" /* 223 */;
import module_1 from "module_1" /* 1 */;

function emptyCallback() {

}
let closure_0 = module_1(DialogManagerAndroid);

export default {
  alertWithArgs(arg0, arg1) {
    let tmp = arg1;
    if (mod.default) {
      if (!tmp) {
        tmp = emptyCallback;
      }
      mod.default.showAlert(arg0, emptyCallback, tmp);
    }
  }
};
