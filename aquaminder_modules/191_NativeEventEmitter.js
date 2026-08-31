// Module ID: 191
// Function ID: 2081
// Name: NativeEventEmitter
// Dependencies: [1, 12, 13, 33, 22, 20]

// Module 191 (NativeEventEmitter)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import invariant from "invariant" /* 20 */;
import _callSuper from "_callSuper" /* 22 */;
import get_Version from "get Version" /* 33 */;
import module_1 from "module_1" /* 1 */;

let closure_0 = module_1(_classCallCheck);
let closure_1 = module_1(_defineProperties);
let closure_2 = module_1(get_Version);
let closure_3 = module_1(_callSuper);
let closure_4 = module_1(invariant);

export default (() => {
  class NativeEventEmitter {
    constructor(arg0) {
      defaultResult = NativeEventEmitter.default(this, NativeEventEmitter);
      if (closure_1_2.default.OS === "ios") {
        tmp2 = closure_1_4;
        tmp3 = null;
        str = "`new NativeEventEmitter()` requires a non-null argument.";
        defaultResult1 = closure_1_4.default(arg0 != null, "`new NativeEventEmitter()` requires a non-null argument.");
      }
      tmp5 = !arg0;
      tmp6 = !tmp5;
      if (!tmp5) {
        str2 = "function";
        tmp6 = typeof arg0.addListener === "function";
      }
      tmp7 = !arg0;
      tmp8 = !tmp7;
      if (!tmp7) {
        str3 = "function";
        tmp8 = typeof arg0.removeListeners === "function";
      }
      if (arg0) {
        if (tmp6) {
          if (tmp8) {
            this._nativeModule = arg0;
          }
          return;
        }
      }
      if (arg0 != null) {
        if (!tmp6) {
          tmp9 = globalThis;
          _console = console;
          str4 = "`new NativeEventEmitter()` was called with a non-null argument without the required `addListener` method.";
          warnResult = console.warn("`new NativeEventEmitter()` was called with a non-null argument without the required `addListener` method.");
        }
        if (!tmp8) {
          tmp11 = globalThis;
          _console2 = console;
          str5 = "`new NativeEventEmitter()` was called with a non-null argument without the required `removeListeners` method.";
          warnResult1 = console.warn("`new NativeEventEmitter()` was called with a non-null argument without the required `removeListeners` method.");
        }
      }
      return;
    }
  }
  let obj = {
    key: "addListener",
    value: function addListener(arg0, arg1, arg2) {
      const self = this;
      let _nativeModule = this._nativeModule;
      if (_nativeModule != null) {
        _nativeModule.addListener(arg0);
      }
      closure_1 = closure_1_3.default.addListener(arg0, arg1, arg2);
      return {
        remove() {
          if (c1 != null) {
            const _nativeModule = self._nativeModule;
            if (_nativeModule != null) {
              _nativeModule.removeListeners(1);
            }
            c1.remove();
            c1 = null;
          }
        }
      };
    }
  };
  let items = [obj, , , ];
  obj = {
    key: "emit",
    value: function emit(arg0) {
      const length = arguments.length;
      let num = 0;
      if (length > 1) {
        num = length - 1;
      }
      const array = new Array(num);
      for (let num2 = 1; num2 < length; num2 = num2 + 1) {
        array[num2 - 1] = arguments[num2];
      }
      const emit = closure_1_3.default.emit;
      const items = [arg0];
      emit.apply(closure_1_3.default, items.concat(array));
    }
  };
  items[1] = obj;
  obj = {
    key: "removeAllListeners",
    value: function removeAllListeners(arg0) {
      const self = this;
      closure_1_4.default(arg0 != null, "`NativeEventEmitter.removeAllListener()` requires a non-null argument.");
      const _nativeModule = this._nativeModule;
      if (_nativeModule != null) {
        _nativeModule.removeListeners(self.listenerCount(arg0));
      }
      closure_1_3.default.removeAllListeners(arg0);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "listenerCount",
    value: function listenerCount(arg0) {
      return closure_1_3.default.listenerCount(arg0);
    }
  };
  return closure_1.default(NativeEventEmitter, items);
})();
