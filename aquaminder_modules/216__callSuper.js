// Module ID: 216
// Function ID: 2416
// Name: _callSuper
// Dependencies: [1, 12, 13, 23, 25, 28, 214, 198, 189]

// Module 216 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _inherits from "_inherits" /* 28 */;
import pd from "pd" /* 198 */;
import FileReaderModule from "FileReaderModule" /* 214 */;
import module_1 from "module_1" /* 1 */;

function _callSuper(arg0, arg1, arg2) {
  const defaultResult = closure_5.default(arg1);
  if (_isNativeReflectConstruct()) {
    const _Reflect = Reflect;
    const items = [];
    let constructResult = Reflect.construct(defaultResult, items, closure_5.default(arg0).constructor);
  } else {
    constructResult = defaultResult.apply(arg0, undefined);
  }
  return closure_4.default(arg0, constructResult);
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
let closure_2 = module_1(_classCallCheck);
let closure_3 = module_1(_defineProperties);
let closure_4 = module_1(_possibleConstructorReturn);
let closure_5 = module_1(_getPrototypeOf);
let closure_6 = module_1(_inherits);
let closure_7 = module_1(FileReaderModule);
const tmp3 = ((_default) => {
  class FileReader {
    constructor() {
      defaultResult = closure_1_2.default(this, FileReader);
      obj = closure_1_8(this, FileReader);
      obj.EMPTY = 0;
      obj.LOADING = 1;
      obj.DONE = 2;
      obj._aborted = false;
      _resetResult = obj._reset();
      return obj;
    }
  }
  closure_6.default(FileReader, _default);
  let obj = {
    key: "_reset",
    value: function _reset() {
      this._readyState = 0;
      this._error = null;
      this._result = null;
    }
  };
  const items = [obj, , , , , , , , ];
  obj = {
    key: "_setReadyState",
    value: function _setReadyState(_readyState) {
      const self = this;
      this._readyState = _readyState;
      this.dispatchEvent({ type: "readystatechange" });
      if (_readyState === 2) {
        if (self._aborted) {
          let obj = { type: "abort" };
          self.dispatchEvent(obj);
          obj = { type: "loadend" };
          let dispatchEventResult2 = self.dispatchEvent(obj);
        } else {
          dispatchEventResult2 = {};
          if (!self._error) {
            dispatchEventResult2.type = "load";
            self.dispatchEvent(dispatchEventResult2);
          }
        }
        dispatchEventResult2.type = "error";
        tmp2(dispatchEventResult2);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "readAsArrayBuffer",
    value: function readAsArrayBuffer(data) {
      const self = this;
      this._aborted = false;
      if (data == null) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Failed to execute 'readAsArrayBuffer' on 'FileReader': parameter 1 is not of type 'Blob'");
        throw typeError;
      } else {
        const asDataURL = closure_1_7.default.readAsDataURL(data.data);
        asDataURL.then((arg0) => {
          if (!self._aborted) {
            self._result = FileReader(closure_2_1[8]).toByteArray(arg0.split(",")[1]).buffer;
            self._setReadyState(2);
          }
        }, (_error) => {
          if (!self._aborted) {
            self._error = _error;
            self._setReadyState(2);
          }
        });
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "readAsDataURL",
    value: function readAsDataURL(data) {
      const self = this;
      this._aborted = false;
      if (data == null) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Failed to execute 'readAsDataURL' on 'FileReader': parameter 1 is not of type 'Blob'");
        throw typeError;
      } else {
        const asDataURL = closure_1_7.default.readAsDataURL(data.data);
        asDataURL.then((_result) => {
          if (!self._aborted) {
            self._result = _result;
            self._setReadyState(2);
          }
        }, (_error) => {
          if (!self._aborted) {
            self._error = _error;
            self._setReadyState(2);
          }
        });
      }
    }
  };
  items[4] = {
    key: "readAsText",
    value: function readAsText(data) {
      const self = this;
      let str = "UTF-8";
      if (arguments.length > 1) {
        str = "UTF-8";
        if (arguments[1] !== undefined) {
          str = arguments[1];
        }
      }
      this._aborted = false;
      if (data == null) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Failed to execute 'readAsText' on 'FileReader': parameter 1 is not of type 'Blob'");
        throw typeError;
      } else {
        const asText = closure_1_7.default.readAsText(data.data, str);
        asText.then((_result) => {
          if (!self._aborted) {
            self._result = _result;
            self._setReadyState(2);
          }
        }, (_error) => {
          if (!self._aborted) {
            self._error = _error;
            self._setReadyState(2);
          }
        });
      }
    }
  };
  items[5] = {
    key: "abort",
    value: function abort() {
      const self = this;
      this._aborted = true;
      if (this._readyState !== 0) {
        if (self._readyState !== 2) {
          self._reset();
          self._setReadyState(2);
        }
      }
      self._reset();
    }
  };
  items[6] = {
    key: "readyState",
    get() {
      return this._readyState;
    }
  };
  items[7] = {
    key: "error",
    get() {
      return this._error;
    }
  };
  items[8] = {
    key: "result",
    get() {
      return this._result;
    }
  };
  return closure_3.default(FileReader, items);
})(module_1(pd).default.apply(undefined, ["abort", "error", "load", "loadstart", "loadend", "progress"]));
tmp3.EMPTY = 0;
tmp3.LOADING = 1;
tmp3.DONE = 2;

export default tmp3;
