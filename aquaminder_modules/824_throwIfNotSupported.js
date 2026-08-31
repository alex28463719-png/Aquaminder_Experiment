// Module ID: 824
// Function ID: 9037
// Name: throwIfNotSupported
// Dependencies: [1, 203, 12, 13, 2]

// Module 824 (throwIfNotSupported)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import module_1 from "module_1" /* 1 */;
import closure_3 from "get registerCallableModule" /* 2 */;

function throwIfNotSupported() {
  let flag = false;
  if (arguments.length > 0) {
    flag = false;
    if (arguments[0] !== undefined) {
      flag = arguments[0];
    }
  }
  if (!flag) {
    const _Error = Error;
    const error = new Error("AppleAuth is not supported on the device. Currently Apple Authentication works on iOS devices running iOS 13 or later. Use 'AppleAuth.isSupported' to check device is supported before calling any of the module methods.");
    throw error;
  }
}
let closure_0 = module_1(_objectWithoutProperties);
let closure_1 = module_1(_classCallCheck);
let closure_2 = module_1(_defineProperties);
let closure_4 = ["requestedScopes", "requestedOperation", "user", "nonce", "nonceEnabled", "state"];

export default (() => {
  class AppleAuthModule {
    constructor(arg0) {
      self = this;
      defaultResult = closure_1_1.default(this, AppleAuthModule);
      this.Error = { UNKNOWN: "1000", CANCELED: "1001", INVALID_RESPONSE: "1002", NOT_HANDLED: "1003", FAILED: "1004" };
      this.Operation = { IMPLICIT: 0, LOGIN: 1, REFRESH: 2, LOGOUT: 3 };
      this.Scope = { EMAIL: 0, FULL_NAME: 1 };
      this.UserStatus = { UNSUPPORTED: 0, UNKNOWN: 1, LIKELY_REAL: 2 };
      this.State = { REVOKED: 0, AUTHORIZED: 1, NOT_FOUND: 2, TRANSFERRED: 3 };
      this.native = arg0;
      if (this.native) {
        tmp2 = closure_1_3;
        NativeEventEmitter = closure_1_3.NativeEventEmitter;
        prototype = NativeEventEmitter.prototype;
        tmp3 = new.target;
        tmp4 = new.target;
        nativeEventEmitter = new NativeEventEmitter(self.native);
        tmp6 = nativeEventEmitter;
        self.emitter = nativeEventEmitter;
      }
      return;
    }
  }
  let obj = {
    key: "isSupported",
    get() {
      let flag = false;
      if (this.native) {
        flag = this.native.isSupported;
      }
      return flag;
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "isSignUpButtonSupported",
    get() {
      let flag = false;
      if (this.native) {
        flag = this.native.isSignUpButtonSupported;
      }
      return flag;
    }
  };
  items[1] = obj;
  obj = {
    key: "getCredentialStateForUser",
    value: function getCredentialStateForUser(str) {
      closure_1_5(this.isSupported);
      if (str) {
        if (typeof str === "string") {
          const native = this.native;
          return native.getCredentialStateForUser(str);
        }
      }
      const error = new Error("AppleAuth.getCredentialStateForUser(*) 'users' is required and must be a string value.");
      throw error;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "performRequest",
    value: function performRequest(first) {
      const self = this;
      if (arguments.length > 0) {
        if (arguments[0] !== undefined) {
          first = arguments[0];
        }
        closure_1_5(self.isSupported);
        const _Object = Object;
        if (hasOwnProperty.call(first, ["nonceEnabled"])) {
          if (typeof first.nonceEnabled !== "boolean") {
            const _Error4 = Error;
            const error = new Error("RNAppleAuth.AppleAuthRequestOptions 'nonceEnabled' must be a boolean value if provided.");
            throw error;
          }
        } else {
          first.nonceEnabled = true;
        }
        const _Object2 = Object;
        if (hasOwnProperty2.call(first, ["requestedOperation"])) {
          const _Number = Number;
          if (!Number.isInteger(first.requestedOperation)) {
            const _Error = Error;
            const error1 = new Error("RNAppleAuth.AppleAuthRequestOptions 'requestedOperation' must be a value of AppleAuthRequestOperation.");
            throw error1;
          }
        } else {
          first.requestedOperation = 0;
        }
        const _Object3 = Object;
        if (hasOwnProperty3.call(first, ["requestedScopes"])) {
          const _Array = Array;
          if (!Array.isArray(first.requestedScopes)) {
            const _Error2 = Error;
            const error2 = new Error("RNAppleAuth.AppleAuthRequestOptions 'requestedScopes' must be an array value if provided.");
            throw error2;
          }
        } else {
          first.requestedScopes = [];
        }
        ({ requestedScopes, requestedOperation, user, nonce, nonceEnabled, state } = first);
        const defaultResult = AppleAuthModule.default(first, closure_1_4);
        const _Object4 = Object;
        if (Object.keys(defaultResult).length) {
          const _Error3 = Error;
          const _Object5 = Object;
          const keys = Object.keys(defaultResult);
          const _HermesInternal = HermesInternal;
          const error3 = new Error("RNAppleAuth.AppleAuthRequestOptions 'Invalid params found..." + keys.join(", "));
          throw error3;
        } else {
          const native = self.native;
          return native.performRequest(first);
        }
      }
      first = { nonceEnabled: true, requestedOperation: 0, requestedScopes: [] };
    }
  };
  items[4] = {
    key: "onCredentialRevoked",
    value: function onCredentialRevoked(fn) {
      closure_1_5(this.isSupported);
      if (typeof fn !== "function") {
        const _Error = Error;
        const error = new Error("RNAppleAuth.onCredentialRevoked(*) 'listener' is required and must be a function.");
        throw error;
      } else {
        const emitter = this.emitter;
        closure_0 = emitter.addListener("RNAppleAuth.onCredentialRevoked", fn);
        return () => closure_0.remove();
      }
    }
  };
  return closure_2.default(AppleAuthModule, items);
})();
