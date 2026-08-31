// Module ID: 384
// Function ID: 4713
// Name: Keyboard
// Dependencies: [1, 12, 13, 191, 385, 383, 33, 386]

// Module 384 (Keyboard)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import get_Version from "get Version" /* 33 */;
import NativeEventEmitter from "NativeEventEmitter" /* 191 */;
import dismissKeyboard from "dismissKeyboard" /* 383 */;
import configureNext from "configureNext" /* 385 */;
import KeyboardObserver from "KeyboardObserver" /* 386 */;
import module_1 from "module_1" /* 1 */;

let closure_0 = module_1(_classCallCheck);
let closure_1 = module_1(_defineProperties);
let closure_2 = module_1(NativeEventEmitter);
let closure_3 = module_1(configureNext);
let closure_4 = module_1(dismissKeyboard);
let closure_5 = module_1(get_Version);
let closure_6 = module_1(KeyboardObserver);
let tmp3 = (() => {
  class Keyboard {
    constructor() {
      self = this;
      self = this;
      defaultResult = Keyboard.default(this, self);
      _default = null;
      if (closure_1_5.default.OS === "ios") {
        tmp3 = closure_1_6;
        _default = closure_1_6.default;
      }
      _default1 = new closure_1_2.default(_default);
      self._emitter = _default1;
      addListenerResult = self.addListener("keyboardDidShow", (_currentlyShowing) => {
        self._currentlyShowing = _currentlyShowing;
      });
      addListenerResult1 = self.addListener("keyboardDidHide", (arg0) => {
        self._currentlyShowing = null;
      });
      return;
    }
  }
  let obj = {
    key: "addListener",
    value: function addListener(arg0, arg1, arg2) {
      const _emitter = this._emitter;
      return _emitter.addListener(arg0, arg1);
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "removeAllListeners",
    value: function removeAllListeners(arg0) {
      const _emitter = this._emitter;
      _emitter.removeAllListeners(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "dismiss",
    value: function dismiss() {
      closure_1_4.default();
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isVisible",
    value: function isVisible() {
      return this._currentlyShowing;
    }
  };
  items[4] = {
    key: "metrics",
    value: function metrics() {
      const _currentlyShowing = this._currentlyShowing;
      let endCoordinates;
      if (_currentlyShowing != null) {
        endCoordinates = _currentlyShowing.endCoordinates;
      }
      return endCoordinates;
    }
  };
  items[5] = {
    key: "scheduleLayoutAnimation",
    value: function scheduleLayoutAnimation(arg0) {
      ({ duration, easing } = arg0);
      if (duration != null) {
        if (duration !== 0) {
          let obj = { duration };
          obj = { duration };
          let str = easing != null;
          if (str) {
            str = closure_1_3.default.Types[easing];
          }
          if (!str) {
            str = "keyboard";
          }
          obj.type = str;
          obj.update = obj;
          closure_1_3.default.configureNext(obj);
          const _default = closure_1_3.default;
        }
      }
    }
  };
  return closure_1.default(Keyboard, items);
})();
tmp3 = new tmp3();

export default tmp3;
