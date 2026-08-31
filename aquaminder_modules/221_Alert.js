// Module ID: 221
// Function ID: 2490
// Name: Alert
// Dependencies: [1, 12, 13, 33, 222, 223]

// Module 221 (Alert)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import get_Version from "get Version" /* 33 */;
import emptyCallback from "emptyCallback" /* 222 */;
import module_1 from "module_1" /* 1 */;

let closure_2 = module_1(_classCallCheck);
let closure_3 = module_1(_defineProperties);
let closure_4 = module_1(get_Version);
let closure_5 = module_1(emptyCallback);

export default (() => {
  class Alert {
    constructor() {
      defaultResult = closure_1_2.default(this, Alert);
      return;
    }
  }
  let obj = {
    key: "alert",
    value: function alert(message, ARE_YOU_SURE_YOU_WANT_TO_DELETE, items, cancelable) {
      Alert = cancelable;
      if (closure_1_4.default.OS === "ios") {
        Alert.prompt(message, ARE_YOU_SURE_YOU_WANT_TO_DELETE, items, "default", undefined, undefined, cancelable);
      } else if (closure_1_4.default.OS === "android") {
        const _default = Alert(closure_1_1[5]).default;
        if (_default) {
          const constants = _default.getConstants();
          let obj = {};
          let str = message;
          if (!message) {
            str = "";
          }
          obj.title = str;
          let str2 = ARE_YOU_SURE_YOU_WANT_TO_DELETE;
          if (!ARE_YOU_SURE_YOU_WANT_TO_DELETE) {
            str2 = "";
          }
          obj.message = str2;
          obj.cancelable = false;
          if (cancelable) {
            if (cancelable.cancelable) {
              obj.cancelable = cancelable.cancelable;
            }
          }
          if (items) {
            let substr = items.slice(0, 3);
          } else {
            obj = { text: "OK" };
            substr = [obj];
          }
          let arr = substr.pop();
          arr = substr.pop();
          const arr1 = substr.pop();
          if (arr1) {
            obj.buttonNeutral = arr1.text || "";
          }
          if (arr) {
            obj.buttonNegative = arr.text || "";
          }
          if (arr) {
            obj.buttonPositive = arr.text || "OK";
          }
          _default.showAlert(obj, function onError(arg0) {
            return console.warn(arg0);
          }, function onAction(target, set) {
            if (target === closure_1.buttonClicked) {
              if (set === closure_1.buttonNeutral) {
                if (arr1.onPress) {
                  arr1.onPress();
                }
              } else if (set === closure_1.buttonNegative) {
                if (arr.onPress) {
                  arr.onPress();
                }
              } else if (set === closure_1.buttonPositive) {
                if (arr.onPress) {
                  arr.onPress();
                }
              }
            } else if (target === closure_1.dismissed) {
              let onDismiss = cancelable;
              if (cancelable) {
                onDismiss = cancelable.onDismiss;
              }
              if (onDismiss) {
                cancelable.onDismiss();
              }
            }
          });
        }
      }
    }
  };
  let items = [obj, ];
  obj = {
    key: "prompt",
    value: function prompt(message, ARE_YOU_SURE_YOU_WANT_TO_DELETE, fn, arg3, arg4, arg5, cancelable) {
      let str = message;
      closure_0 = fn;
      let str2 = "plain-text";
      if (arguments.length > 3) {
        str2 = "plain-text";
        if (arguments[3] !== undefined) {
          str2 = arguments[3];
        }
      }
      if (arguments.length > 4) {
        const tmp2 = arguments[4];
      }
      if (arguments.length > 5) {
        const tmp3 = arguments[5];
      }
      if (arguments.length > 6) {
        const tmp4 = arguments[6];
      }
      if (closure_1_4.default.OS === "ios") {
        let items1 = [];
        let items = [];
        if (typeof fn === "function") {
          items1 = [fn];
        } else {
          const _Array = Array;
          if (Array.isArray(fn)) {
            const item = fn.forEach((onPress) => {
              items1[arg1] = onPress.onPress;
              if (onPress.style === "cancel") {
                const _String2 = String;
                closure_3 = String(arg1);
              } else if (onPress.style === "destructive") {
                const _String = String;
                closure_4 = String(arg1);
              }
              if (onPress.isPreferred) {
                const _String3 = String;
                closure_5 = String(arg1);
              }
              if (onPress.text) {
                const obj = {};
                obj[arg1] = onPress.text || "";
                items.push(obj);
              } else {
                items = closure_0;
                if (!closure_0) {
                  items = [];
                }
              }
            });
          }
        }
        let obj = {};
        if (!str) {
          str = "";
        }
        obj.title = str;
        obj.message = tmp;
        obj.buttons = items;
        obj.type = str2;
        obj.defaultValue = tmp2;
        obj.cancelButtonKey = closure_3;
        obj.destructiveButtonKey = closure_4;
        obj.preferredButtonKey = closure_5;
        obj.keyboardType = tmp3;
        let userInterfaceStyle;
        if (tmp4 != null) {
          userInterfaceStyle = tmp4.userInterfaceStyle;
        }
        obj.userInterfaceStyle = userInterfaceStyle;
        closure_1_5.default.alertWithArgs(obj, (arg0, arg1) => {
          if (items1[arg0]) {
            tmp(arg1);
          }
        });
        const _default = closure_1_5.default;
      }
    }
  };
  items[1] = obj;
  return closure_3.default(Alert, null, items);
})();
