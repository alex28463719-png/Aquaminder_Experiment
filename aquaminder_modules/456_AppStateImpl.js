// Module ID: 456
// Function ID: 5193
// Name: AppStateImpl
// Dependencies: [1, 12, 13, 191, 457, 33, 458]

// Module 456 (AppStateImpl)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import get_Version from "get Version" /* 33 */;
import NativeEventEmitter from "NativeEventEmitter" /* 191 */;
import logError from "logError" /* 457 */;
import AppState from "AppState" /* 458 */;
import module_1 from "module_1" /* 1 */;

let closure_0 = module_1(_classCallCheck);
let closure_1 = module_1(_defineProperties);
let closure_2 = module_1(NativeEventEmitter);
let closure_3 = module_1(logError);
let closure_4 = module_1(get_Version);
let closure_5 = module_1(AppState);
let tmp3 = (() => {
  class AppStateImpl {
    constructor() {
      self = this;
      self = this;
      defaultResult = AppStateImpl.default(this, self);
      this.currentState = null;
      if (closure_1_5.default == null) {
        flag2 = false;
        self.isAvailable = false;
      } else {
        flag3 = true;
        self.isAvailable = true;
        tmp12 = closure_1_2;
        _default3 = closure_1_2.default;
        tmp13 = closure_1_4;
        str2 = "ios";
        _default = null;
        if (closure_1_4.default.OS === "ios") {
          tmp2 = closure_1_5;
          _default = closure_1_5.default;
        }
        prototype = _default3.prototype;
        tmp4 = new.target;
        tmp5 = new.target;
        tmp6 = _default;
        _default3 = new _default3(_default);
        tmp7 = _default3;
        closure_1 = _default3;
        self._emitter = _default3;
        tmp8 = closure_1_5;
        _default = closure_1_5.default;
        self.currentState = _default.getConstants().initialAppState;
        flag = false;
        c2 = false;
        str = "appStateDidChange";
        addListenerResult = _default3.addListener("appStateDidChange", (app_state) => {
          c2 = true;
          self.currentState = app_state.app_state;
        });
        _default2 = closure_1_5.default;
        tmp10 = closure_1_3;
        currentAppState = _default2.getCurrentAppState((app_state) => {
          if (!c2) {
            if (self.currentState !== app_state.app_state) {
              self.currentState = app_state.app_state;
              _default3.emit("appStateDidChange", app_state);
            }
          }
        }, closure_1_3.default);
      }
      return;
    }
  }
  const items = [
    {
      key: "addEventListener",
      value: function addEventListener(arg0, arg1) {
        closure_0 = arg0;
        const _emitter = this._emitter;
        if (_emitter == null) {
          const _Error2 = Error;
          const error = new Error("Cannot use AppState when `isAvailable` is false.");
          throw error;
        } else if ("change" === arg0) {
          closure_1 = arg1;
          return _emitter.addListener("appStateDidChange", (app_state) => {
            callback(app_state.app_state);
          });
        } else if ("memoryWarning" === arg0) {
          return _emitter.addListener("memoryWarning", arg1);
        } else {
          if ("blur" !== arg0) {
            if ("focus" !== arg0) {
              const _Error = Error;
              const error1 = new Error("Trying to subscribe to unknown event: " + arg0);
              throw error1;
            }
          }
          closure_2 = arg1;
          return _emitter.addListener("appStateFocusChange", (arg0) => {
            if (closure_0 === "blur") {
              if (!arg0) {
                callback2();
              }
            }
            if (closure_0 === "focus") {
              if (arg0) {
                callback2();
              }
            }
          });
        }
      }
    }
  ];
  return closure_1.default(AppStateImpl, items);
})();
tmp3 = new tmp3();

export default tmp3;
