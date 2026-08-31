// Module ID: 480
// Function ID: 5333
// Name: _default1
// Dependencies: [1, 12, 13, 191, 33, 481, 20]

// Module 480 (_default1)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import invariant from "invariant" /* 20 */;
import get_Version from "get Version" /* 33 */;
import NativeEventEmitter2 from "NativeEventEmitter" /* 191 */;
import PushNotificationManager2 from "PushNotificationManager" /* 481 */;
import module_1 from "module_1" /* 1 */;

let closure_0 = module_1(_classCallCheck);
let closure_1 = module_1(_defineProperties);
const NativeEventEmitter = module_1(NativeEventEmitter2);
get_Version = module_1(get_Version);
const PushNotificationManager = module_1(PushNotificationManager2);
let closure_3 = module_1(invariant);
let _default = null;
if (get_Version.default.OS === "ios") {
  _default = PushNotificationManager.default;
}
const _default1 = new NativeEventEmitter.default(_default);
const map = new Map();
const remoteNotificationReceived = "remoteNotificationReceived";
const remoteNotificationsRegistered = "remoteNotificationsRegistered";
const remoteNotificationRegistrationError = "remoteNotificationRegistrationError";
const localNotificationReceived = "localNotificationReceived";
const tmp9 = (() => {
  class PushNotificationIOS {
    constructor(arg0) {
      self = this;
      closure_0 = arg0;
      self = this;
      defaultResult = PushNotificationIOS.default(this, closure_0);
      this._data = {};
      this._remoteNotificationCompleteCallbackCalled = false;
      this._isRemote = arg0.remote;
      if (this._isRemote) {
        self._notificationId = arg0.notificationId;
      }
      if (arg0.remote) {
        tmp2 = globalThis;
        _Object = Object;
        keys = Object.keys(arg0);
        item = keys.forEach((arg0) => {
          if (arg0 === "aps") {
            ({ alert: self._alert, sound: self._sound, badge: self._badgeCount, category: self._category, content-available: self._contentAvailable, thread-id: self._threadID } = tmp);
          } else {
            self._data[arg0] = tmp;
          }
        });
      } else {
        ({ applicationIconBadgeNumber: self._badgeCount, soundName: self._sound, alertBody: self._alert, userInfo: self._data, category: self._category } = arg0);
      }
      return;
    }
  }
  let obj = {
    key: "finish",
    value: function finish(arg0) {
      const self = this;
      if (this._isRemote) {
        if (self._notificationId) {
          if (!self._remoteNotificationCompleteCallbackCalled) {
            self._remoteNotificationCompleteCallbackCalled = true;
            closure_1_3.default(closure_1_2.default, "PushNotificationManager is not available.");
            const result = closure_1_2.default.onFinishRemoteNotification(self._notificationId, arg0);
          }
        }
      }
    }
  };
  const items = [obj, , , , , , , , ];
  obj = {
    key: "getMessage",
    value: function getMessage() {
      return this._alert;
    }
  };
  items[1] = obj;
  obj = {
    key: "getSound",
    value: function getSound() {
      return this._sound;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getCategory",
    value: function getCategory() {
      return this._category;
    }
  };
  items[4] = {
    key: "getAlert",
    value: function getAlert() {
      return this._alert;
    }
  };
  items[5] = {
    key: "getContentAvailable",
    value: function getContentAvailable() {
      return this._contentAvailable;
    }
  };
  items[6] = {
    key: "getBadgeCount",
    value: function getBadgeCount() {
      return this._badgeCount;
    }
  };
  items[7] = {
    key: "getData",
    value: function getData() {
      return this._data;
    }
  };
  items[8] = {
    key: "getThreadID",
    value: function getThreadID() {
      return this._threadID;
    }
  };
  const items1 = [
    {
      key: "presentLocalNotification",
      value: function presentLocalNotification(arg0) {
        closure_1_3.default(closure_1_2.default, "PushNotificationManager is not available.");
        const result = closure_1_2.default.presentLocalNotification(arg0);
      }
    },
    {
      key: "scheduleLocalNotification",
      value: function scheduleLocalNotification(arg0) {
        closure_1_3.default(closure_1_2.default, "PushNotificationManager is not available.");
        const result = closure_1_2.default.scheduleLocalNotification(arg0);
      }
    },
    {
      key: "cancelAllLocalNotifications",
      value: function cancelAllLocalNotifications() {
        closure_1_3.default(closure_1_2.default, "PushNotificationManager is not available.");
        const result = closure_1_2.default.cancelAllLocalNotifications();
      }
    },
    {
      key: "removeAllDeliveredNotifications",
      value: function removeAllDeliveredNotifications() {
        closure_1_3.default(closure_1_2.default, "PushNotificationManager is not available.");
        const result = closure_1_2.default.removeAllDeliveredNotifications();
      }
    },
    {
      key: "getDeliveredNotifications",
      value: function getDeliveredNotifications(arg0) {
        closure_1_3.default(closure_1_2.default, "PushNotificationManager is not available.");
        const deliveredNotifications = closure_1_2.default.getDeliveredNotifications(arg0);
      }
    },
    {
      key: "removeDeliveredNotifications",
      value: function removeDeliveredNotifications(arg0) {
        closure_1_3.default(closure_1_2.default, "PushNotificationManager is not available.");
        const result = closure_1_2.default.removeDeliveredNotifications(arg0);
      }
    },
    {
      key: "setApplicationIconBadgeNumber",
      value: function setApplicationIconBadgeNumber(arg0) {
        closure_1_3.default(closure_1_2.default, "PushNotificationManager is not available.");
        const result = closure_1_2.default.setApplicationIconBadgeNumber(arg0);
      }
    },
    {
      key: "getApplicationIconBadgeNumber",
      value: function getApplicationIconBadgeNumber(arg0) {
        closure_1_3.default(closure_1_2.default, "PushNotificationManager is not available.");
        const applicationIconBadgeNumber = closure_1_2.default.getApplicationIconBadgeNumber(arg0);
      }
    },
    {
      key: "cancelLocalNotifications",
      value: function cancelLocalNotifications(arg0) {
        closure_1_3.default(closure_1_2.default, "PushNotificationManager is not available.");
        const result = closure_1_2.default.cancelLocalNotifications(arg0);
      }
    },
    {
      key: "getScheduledLocalNotifications",
      value: function getScheduledLocalNotifications(arg0) {
        closure_1_3.default(closure_1_2.default, "PushNotificationManager is not available.");
        const scheduledLocalNotifications = closure_1_2.default.getScheduledLocalNotifications(arg0);
      }
    },
    {
      key: "addEventListener",
      value: function addEventListener(arg0, arg1) {
        closure_0 = arg1;
        let tmp2 = tmp;
        if (arg0 !== "notification") {
          tmp2 = arg0 === "register";
        }
        if (!tmp2) {
          tmp2 = arg0 === "registrationError";
        }
        if (!tmp2) {
          tmp2 = arg0 === "localNotification";
        }
        closure_1_3.default(tmp2, "PushNotificationIOS only supports `notification`, `register`, `registrationError`, and `localNotification` events");
        if (arg0 === "notification") {
          let addListenerResult = closure_1_4.addListener(closure_1_6, (arg0) => {
            callback(new callback(arg0));
          });
        } else if (arg0 === "localNotification") {
          addListenerResult = closure_1_4.addListener(closure_1_9, (arg0) => {
            callback(new callback(arg0));
          });
        } else if (arg0 === "register") {
          addListenerResult = closure_1_4.addListener(closure_1_7, (deviceToken) => {
            callback(deviceToken.deviceToken);
          });
        } else if (arg0 === "registrationError") {
          addListenerResult = closure_1_4.addListener(closure_1_8, (arg0) => {
            callback(arg0);
          });
        }
        const result = closure_1_5.set(arg0, addListenerResult);
      }
    },
    {
      key: "removeEventListener",
      value: function removeEventListener(arg0) {
        let tmp = arg0 === "notification";
        if (!tmp) {
          tmp = arg0 === "register";
        }
        if (!tmp) {
          tmp = arg0 === "registrationError";
        }
        if (!tmp) {
          tmp = arg0 === "localNotification";
        }
        closure_1_3.default(tmp, "PushNotificationIOS only supports `notification`, `register`, `registrationError`, and `localNotification` events");
        const value = closure_1_5.get(arg0);
        if (value) {
          value.remove();
          closure_1_5.delete(arg0);
        }
      }
    },
    {
      key: "requestPermissions",
      value: function requestPermissions(alert) {
        if (alert) {
          const obj = { alert: alert.alert, badge: alert.badge, sound: alert.sound };
        }
        closure_1_3.default(closure_1_2.default, "PushNotificationManager is not available.");
        return closure_1_2.default.requestPermissions({ alert: true, badge: true, sound: true });
      }
    },
    {
      key: "abandonPermissions",
      value: function abandonPermissions() {
        closure_1_3.default(closure_1_2.default, "PushNotificationManager is not available.");
        closure_1_2.default.abandonPermissions();
      }
    },
    {
      key: "checkPermissions",
      value: function checkPermissions(fn) {
        closure_1_3.default(typeof fn === "function", "Must provide a valid callback");
        closure_1_3.default(closure_1_2.default, "PushNotificationManager is not available.");
        closure_1_2.default.checkPermissions(fn);
      }
    },
    {
      key: "getInitialNotification",
      value: function getInitialNotification() {
        closure_1_3.default(closure_1_2.default, "PushNotificationManager is not available.");
        const initialNotification = closure_1_2.default.getInitialNotification();
        return initialNotification.then((arg0) => {
          let tmp = arg0;
          if (arg0) {
            const prototype = closure_1_0.prototype;
            tmp = new closure_1_0(arg0);
          }
          return tmp;
        });
      }
    },
    {
      key: "getAuthorizationStatus",
      value: function getAuthorizationStatus(arg0) {
        closure_1_3.default(closure_1_2.default, "PushNotificationManager is not available.");
        const authorizationStatus = closure_1_2.default.getAuthorizationStatus(arg0);
      }
    }
  ];
  return closure_1.default(PushNotificationIOS, items, items1);
})();
tmp9.FetchResult = { NewData: "UIBackgroundFetchResultNewData", NoData: "UIBackgroundFetchResultNoData", ResultFailed: "UIBackgroundFetchResultFailed" };

export default tmp9;
