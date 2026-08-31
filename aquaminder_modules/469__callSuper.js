// Module ID: 469
// Function ID: 5240
// Name: _callSuper
// Dependencies: [1, 12, 13, 23, 25, 28, 191, 33, 470, 472, 20, 45]

// Module 469 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import invariant from "invariant" /* 20 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _inherits from "_inherits" /* 28 */;
import get_Version from "get Version" /* 33 */;
import nullthrows from "nullthrows" /* 45 */;
import NativeEventEmitter2 from "NativeEventEmitter" /* 191 */;
import IntentAndroid from "IntentAndroid" /* 470 */;
import LinkingManager from "LinkingManager" /* 472 */;
import module_1 from "module_1" /* 1 */;

function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const defaultResult = closure_3.default(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(defaultResult, items, closure_3.default(arg0).constructor);
  } else {
    constructResult = defaultResult.apply(arg0, items);
  }
  return closure_2.default(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
let closure_0 = module_1(_classCallCheck);
let closure_1 = module_1(_defineProperties);
let closure_2 = module_1(_possibleConstructorReturn);
let closure_3 = module_1(_getPrototypeOf);
let closure_4 = module_1(_inherits);
const NativeEventEmitter = module_1(NativeEventEmitter2);
let closure_5 = module_1(get_Version);
let closure_6 = module_1(IntentAndroid);
let closure_7 = module_1(LinkingManager);
let closure_8 = module_1(invariant);
let closure_9 = module_1(nullthrows);
let tmp4 = ((arg0) => {
  class LinkingImpl {
    constructor() {
      tmp = LinkingImpl;
      defaultResult = LinkingImpl.default(this, LinkingImpl);
      defaultResult1 = undefined;
      tmp3 = closure_1_10;
      if (closure_1_5.default.OS === "ios") {
        tmp5 = closure_1_9;
        tmp6 = closure_1_7;
        defaultResult1 = closure_1_9.default(closure_1_7.default);
      }
      items = [];
      items[0] = defaultResult1;
      return tmp3(this, tmp, items);
    }
  }
  closure_4.default(LinkingImpl, arg0);
  let obj = {
    key: "addEventListener",
    value: function addEventListener(arg0, arg1) {
      return this.addListener(arg0, arg1);
    }
  };
  let items = [obj, , , , , , ];
  obj = {
    key: "openURL",
    value: function openURL(url) {
      this._validateURL(url);
      if (closure_1_5.default.OS === "android") {
        return closure_1_9.default(closure_1_6.default).openURL(url);
      } else {
        return closure_1_9.default(closure_1_7.default).openURL(url);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "canOpenURL",
    value: function canOpenURL(url) {
      this._validateURL(url);
      if (closure_1_5.default.OS === "android") {
        return closure_1_9.default(closure_1_6.default).canOpenURL(url);
      } else {
        return closure_1_9.default(closure_1_7.default).canOpenURL(url);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "openSettings",
    value: function openSettings() {
      if (closure_1_5.default.OS === "android") {
        return closure_1_9.default(closure_1_6.default).openSettings();
      } else {
        return closure_1_9.default(closure_1_7.default).openSettings();
      }
    }
  };
  items[4] = {
    key: "getInitialURL",
    value: function getInitialURL() {
      if (closure_1_5.default.OS === "android") {
        let initialURL = closure_1_9.default(closure_1_6.default).getInitialURL();
        const defaultResult = closure_1_9.default(closure_1_6.default);
      } else {
        initialURL = closure_1_9.default(closure_1_7.default).getInitialURL();
        const defaultResult1 = closure_1_9.default(closure_1_7.default);
      }
      return initialURL;
    }
  };
  items[5] = {
    key: "sendIntent",
    value: function sendIntent(arg0, arg1) {
      if (closure_1_5.default.OS === "android") {
        return closure_1_9.default(closure_1_6.default).sendIntent(arg0, arg1);
      } else {
        const promise = new Promise((arg0, arg1) => {
          const error = new Error("Unsupported");
          return arg1(error);
        });
        return promise;
      }
    }
  };
  items[6] = {
    key: "_validateURL",
    value: function _validateURL(url) {
      closure_1_8.default(typeof url === "string", `Invalid URL: should be a string. Was: ${url}`);
      closure_1_8.default(url, "Invalid URL: cannot be empty");
    }
  };
  return closure_1.default(LinkingImpl, items);
})(NativeEventEmitter.default);
tmp4 = new tmp4();

export default tmp4;
