// Module ID: 477
// Function ID: 5308
// Name: PermissionsAndroid
// Dependencies: [1, 363, 12, 13, 223, 478, 20]

// Module 477 (PermissionsAndroid)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import invariant from "invariant" /* 20 */;
import DialogManagerAndroid from "DialogManagerAndroid" /* 223 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 363 */;
import PermissionsAndroid2 from "PermissionsAndroid" /* 478 */;
import module_1 from "module_1" /* 1 */;

let closure_0 = module_1(asyncGeneratorStep);
let closure_1 = module_1(_classCallCheck);
let closure_2 = module_1(_defineProperties);
let closure_3 = module_1(DialogManagerAndroid);
let closure_4 = module_1(PermissionsAndroid2);
let closure_5 = module_1(invariant);
let closure_6 = Object.freeze({ GRANTED: "granted", DENIED: "denied", NEVER_ASK_AGAIN: "never_ask_again" });
let closure_7 = Object.freeze({ READ_CALENDAR: "android.permission.READ_CALENDAR", WRITE_CALENDAR: "android.permission.WRITE_CALENDAR", CAMERA: "android.permission.CAMERA", READ_CONTACTS: "android.permission.READ_CONTACTS", WRITE_CONTACTS: "android.permission.WRITE_CONTACTS", GET_ACCOUNTS: "android.permission.GET_ACCOUNTS", ACCESS_FINE_LOCATION: "android.permission.ACCESS_FINE_LOCATION", ACCESS_COARSE_LOCATION: "android.permission.ACCESS_COARSE_LOCATION", ACCESS_BACKGROUND_LOCATION: "android.permission.ACCESS_BACKGROUND_LOCATION", RECORD_AUDIO: "android.permission.RECORD_AUDIO", READ_PHONE_STATE: "android.permission.READ_PHONE_STATE", CALL_PHONE: "android.permission.CALL_PHONE", READ_CALL_LOG: "android.permission.READ_CALL_LOG", WRITE_CALL_LOG: "android.permission.WRITE_CALL_LOG", ADD_VOICEMAIL: "com.android.voicemail.permission.ADD_VOICEMAIL", READ_VOICEMAIL: "com.android.voicemail.permission.READ_VOICEMAIL", WRITE_VOICEMAIL: "com.android.voicemail.permission.WRITE_VOICEMAIL", USE_SIP: "android.permission.USE_SIP", PROCESS_OUTGOING_CALLS: "android.permission.PROCESS_OUTGOING_CALLS", BODY_SENSORS: "android.permission.BODY_SENSORS", BODY_SENSORS_BACKGROUND: "android.permission.BODY_SENSORS_BACKGROUND", SEND_SMS: "android.permission.SEND_SMS", RECEIVE_SMS: "android.permission.RECEIVE_SMS", READ_SMS: "android.permission.READ_SMS", RECEIVE_WAP_PUSH: "android.permission.RECEIVE_WAP_PUSH", RECEIVE_MMS: "android.permission.RECEIVE_MMS", READ_EXTERNAL_STORAGE: "android.permission.READ_EXTERNAL_STORAGE", READ_MEDIA_IMAGES: "android.permission.READ_MEDIA_IMAGES", READ_MEDIA_VIDEO: "android.permission.READ_MEDIA_VIDEO", READ_MEDIA_AUDIO: "android.permission.READ_MEDIA_AUDIO", READ_MEDIA_VISUAL_USER_SELECTED: "android.permission.READ_MEDIA_VISUAL_USER_SELECTED", WRITE_EXTERNAL_STORAGE: "android.permission.WRITE_EXTERNAL_STORAGE", BLUETOOTH_CONNECT: "android.permission.BLUETOOTH_CONNECT", BLUETOOTH_SCAN: "android.permission.BLUETOOTH_SCAN", BLUETOOTH_ADVERTISE: "android.permission.BLUETOOTH_ADVERTISE", ACCESS_MEDIA_LOCATION: "android.permission.ACCESS_MEDIA_LOCATION", ACCEPT_HANDOVER: "android.permission.ACCEPT_HANDOVER", ACTIVITY_RECOGNITION: "android.permission.ACTIVITY_RECOGNITION", ANSWER_PHONE_CALLS: "android.permission.ANSWER_PHONE_CALLS", READ_PHONE_NUMBERS: "android.permission.READ_PHONE_NUMBERS", UWB_RANGING: "android.permission.UWB_RANGING", POST_NOTIFICATIONS: "android.permission.POST_NOTIFICATIONS", NEARBY_WIFI_DEVICES: "android.permission.NEARBY_WIFI_DEVICES" });
let tmp3 = (() => {
  class PermissionsAndroid {
    constructor() {
      defaultResult = closure_1_1.default(this, PermissionsAndroid);
      this.PERMISSIONS = closure_1_7;
      this.RESULTS = closure_1_6;
      return;
    }
  }
  let obj = {
    key: "checkPermission",
    value: function checkPermission(arg0) {
      console.warn("\"PermissionsAndroid.checkPermission\" is deprecated. Use \"PermissionsAndroid.check\" instead");
      closure_1_5.default(closure_1_4.default, "PermissionsAndroid is not installed correctly.");
      return closure_1_4.default.checkPermission(arg0);
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "check",
    value: function check(arg0) {
      closure_1_5.default(closure_1_4.default, "PermissionsAndroid is not installed correctly.");
      return closure_1_4.default.checkPermission(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "requestPermission",
    value: (() => {
      closure_0 = PermissionsAndroid.default(async function(arg0, arg1) {
        const self = this;
        console.warn("\"PermissionsAndroid.requestPermission\" is deprecated. Use \"PermissionsAndroid.request\" instead");
        return (yield self.request(arg0, arg1)) === self.RESULTS.GRANTED;
      });
      return function requestPermission(closure_0) {
        return callback(...arguments);
      };
    })()
  };
  items[2] = obj;
  items[3] = {
    key: "request",
    value: (() => {
      closure_0 = PermissionsAndroid.default(async (arg0, arg1) => {
        closure_0 = arg0;
        closure_1 = arg1;
        closure_3_5.default(closure_3_4.default, "PermissionsAndroid is not installed correctly.");
        if (arg1) {
          if (yield _default.shouldShowRequestPermissionRationale(arg0)) {
            if (closure_3_3.default) {
              const promise = new Promise((arg0, arg1) => {
                closure_0 = arg0;
                closure_1 = arg1;
                closure_4_3.default.showAlert(Object.assign({}, closure_1), () => {
                  const error = new Error("Error showing rationale");
                  return callback2(error);
                }, () => callback(closure_5_4.default.requestPermission(callback)));
              });
              return promise;
            }
          }
          _default = closure_3_4.default;
        }
        return closure_3_4.default.requestPermission(arg0);
      });
      return function request(arg0, arg1) {
        return callback(...arguments);
      };
    })()
  };
  items[4] = {
    key: "requestMultiple",
    value: function requestMultiple(arg0) {
      closure_1_5.default(closure_1_4.default, "PermissionsAndroid is not installed correctly.");
      return closure_1_4.default.requestMultiplePermissions(arg0);
    }
  };
  return closure_2.default(PermissionsAndroid, items);
})();
tmp3 = new tmp3();

export default tmp3;
