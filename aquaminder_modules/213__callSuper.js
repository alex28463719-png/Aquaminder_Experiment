// Module ID: 213
// Function ID: 2374
// Name: _callSuper
// Dependencies: [1, 12, 13, 23, 25, 28, 175, 177, 214, 189, 185]

// Module 213 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _inherits from "_inherits" /* 28 */;
import Event from "Event" /* 175 */;
import validateCallback from "validateCallback" /* 177 */;
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
let closure_7 = module_1(Event);
let closure_8 = module_1(FileReaderModule);
const tmp4 = ((arg0) => {
  class FileReader {
    constructor() {
      defaultResult = closure_1_2.default(this, FileReader);
      obj = closure_1_9(this, FileReader);
      obj.EMPTY = 0;
      obj.LOADING = 1;
      obj.DONE = 2;
      obj._aborted = false;
      _resetResult = obj._reset();
      return obj;
    }
  }
  closure_6.default(FileReader, arg0);
  let obj = {
    key: "_reset",
    value: function _reset() {
      this._readyState = 0;
      this._error = null;
      this._result = null;
    }
  };
  const items = [obj, , , , , , , , , , , , , , ];
  obj = {
    key: "_setReadyState",
    value: function _setReadyState(_readyState) {
      const self = this;
      this._readyState = _readyState;
      let _default = new closure_1_7.default("readystatechange");
      this.dispatchEvent(_default);
      if (_readyState === 2) {
        if (self._aborted) {
          _default = closure_1_7.default;
          const prototype2 = _default.prototype;
          const _default1 = new _default("abort");
          self.dispatchEvent(_default1);
          let _default2 = closure_1_7.default;
          const prototype3 = _default2.prototype;
          _default2 = new _default2("loadend");
          self.dispatchEvent(_default2);
          const tmp3 = new.target;
        } else {
          _default = closure_1_7.default;
          const prototype = _default.prototype;
          _default2 = new.target;
          if (!self._error) {
            const _default3 = new _default("load");
            self.dispatchEvent(_default3);
          }
        }
        const _default4 = new _default("error");
        tmp3(_default4);
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
        const asDataURL = closure_1_8.default.readAsDataURL(data.data);
        asDataURL.then((arg0) => {
          if (!self._aborted) {
            self._result = FileReader(closure_2_1[9]).toByteArray(arg0.split(",")[1]).buffer;
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
        const asDataURL = closure_1_8.default.readAsDataURL(data.data);
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
        const asText = closure_1_8.default.readAsText(data.data, str);
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
  items[9] = {
    key: "onabort",
    get() {
      return FileReader(closure_1_1[10]).getEventHandlerAttribute(this, "abort");
    },
    set(fn) {
      const result = FileReader(closure_1_1[10]).setEventHandlerAttribute(this, "abort", fn);
    }
  };
  items[10] = {
    key: "onerror",
    get() {
      return FileReader(closure_1_1[10]).getEventHandlerAttribute(this, "error");
    },
    set(fn) {
      const result = FileReader(closure_1_1[10]).setEventHandlerAttribute(this, "error", fn);
    }
  };
  items[11] = {
    key: "onload",
    get() {
      return FileReader(closure_1_1[10]).getEventHandlerAttribute(this, "load");
    },
    set(fn) {
      const result = FileReader(closure_1_1[10]).setEventHandlerAttribute(this, "load", fn);
    }
  };
  items[12] = {
    key: "onloadstart",
    get() {
      return FileReader(closure_1_1[10]).getEventHandlerAttribute(this, "loadstart");
    },
    set(fn) {
      const result = FileReader(closure_1_1[10]).setEventHandlerAttribute(this, "loadstart", fn);
    }
  };
  items[13] = {
    key: "onloadend",
    get() {
      return FileReader(closure_1_1[10]).getEventHandlerAttribute(this, "loadend");
    },
    set(fn) {
      const result = FileReader(closure_1_1[10]).setEventHandlerAttribute(this, "loadend", fn);
    }
  };
  items[14] = {
    key: "onprogress",
    get() {
      return FileReader(closure_1_1[10]).getEventHandlerAttribute(this, "progress");
    },
    set(fn) {
      const result = FileReader(closure_1_1[10]).setEventHandlerAttribute(this, "progress", fn);
    }
  };
  return closure_3.default(FileReader, items);
})(module_1(validateCallback).default);
tmp4.EMPTY = 0;
tmp4.LOADING = 1;
tmp4.DONE = 2;

export default tmp4;
