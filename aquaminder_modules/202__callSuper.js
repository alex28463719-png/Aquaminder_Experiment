// Module ID: 202
// Function ID: 2282
// Name: _callSuper
// Dependencies: [1, 203, 12, 13, 23, 25, 28, 175, 177, 205, 206, 183, 180, 191, 194, 33, 207, 189, 20, 185]

// Module 202 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import invariant from "invariant" /* 20 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _inherits from "_inherits" /* 28 */;
import get_Version from "get Version" /* 33 */;
import Event from "Event" /* 175 */;
import validateCallback from "validateCallback" /* 177 */;
import uuidv4 from "uuidv4" /* 180 */;
import Blob from "Blob" /* 183 */;
import getLens from "getLens" /* 189 */;
import NativeEventEmitter from "NativeEventEmitter" /* 191 */;
import binaryToBase64 from "binaryToBase64" /* 194 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import _callSuper2 from "_callSuper" /* 205 */;
import _callSuper3 from "_callSuper" /* 206 */;
import WebSocketModule from "WebSocketModule" /* 207 */;
import module_1 from "module_1" /* 1 */;

function _callSuper(arg0, arg1, arg2) {
  const defaultResult = closure_6.default(arg1);
  if (_isNativeReflectConstruct()) {
    const _Reflect = Reflect;
    const items = [];
    let constructResult = Reflect.construct(defaultResult, items, closure_6.default(arg0).constructor);
  } else {
    constructResult = defaultResult.apply(arg0, undefined);
  }
  return closure_5.default(arg0, constructResult);
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
let closure_2 = module_1(_objectWithoutProperties);
let closure_3 = module_1(_classCallCheck);
let closure_4 = module_1(_defineProperties);
let closure_5 = module_1(_possibleConstructorReturn);
let closure_6 = module_1(_getPrototypeOf);
let closure_7 = module_1(_inherits);
let closure_8 = module_1(Event);
let closure_9 = module_1(_callSuper2);
let closure_10 = module_1(_callSuper3);
let closure_11 = module_1(Blob);
let closure_12 = module_1(uuidv4);
let closure_13 = module_1(NativeEventEmitter);
let closure_14 = module_1(binaryToBase64);
let closure_15 = module_1(get_Version);
let closure_16 = module_1(WebSocketModule);
let closure_17 = module_1(getLens);
let closure_18 = module_1(invariant);
let closure_19 = ["headers"];
let c20 = 0;
const tmp4 = ((arg0) => {
  class WebSocket {
    constructor(arg0, arg1, arg2) {
      obj = arg2;
      defaultResult = closure_1_3.default(this, WebSocket);
      obj2 = closure_1_21(this, WebSocket);
      obj2.CONNECTING = 0;
      obj2.OPEN = 1;
      obj2.CLOSING = 2;
      obj2.CLOSED = 3;
      obj2.readyState = 0;
      obj2.url = arg0;
      tmp3 = arg1;
      if (typeof arg1 === "string") {
        items = [];
        items[0] = arg1;
        tmp3 = items;
      }
      if (!obj) {
        obj = {};
      }
      headers = obj.headers;
      if (headers === undefined) {
        headers = {};
      }
      defaultResult1 = closure_1_2.default(obj, closure_1_19);
      if (defaultResult1) {
        if (typeof defaultResult1.origin === "string") {
          tmp5 = globalThis;
          _console = console;
          str = "Specifying `origin` as a WebSocket connection option is deprecated. Include it under `headers` instead.";
          warnResult = console.warn("Specifying `origin` as a WebSocket connection option is deprecated. Include it under `headers` instead.");
          headers.origin = defaultResult1.origin;
          delete tmp.origin;
        }
      }
      if (Object.keys(defaultResult1).length > 0) {
        _console2 = console;
        _Object = Object;
        keys = Object.keys(defaultResult1);
        str2 = "`, `";
        str3 = "Unrecognized WebSocket connection option(s) `";
        str4 = "`. ";
        str5 = "Did you mean to put these under `headers`?";
        warnResult1 = console.warn(`Unrecognized WebSocket connection option(s) \`${obj4.join("`, `")}\`. Did you mean to put these under \`headers\`?`);
      }
      tmp8 = tmp3;
      if (!Array.isArray(tmp3)) {
        tmp8 = null;
      }
      _default = null;
      if (closure_1_15.default.OS === "ios") {
        tmp10 = closure_1_16;
        _default = closure_1_16.default;
      }
      _default1 = new closure_1_13.default(_default);
      obj2._eventEmitter = _default1;
      tmp12 = +closure_20;
      closure_20 = tmp12 + 1;
      obj2._socketId = tmp12;
      _registerEventsResult = obj2._registerEvents();
      _default = closure_1_16.default;
      obj = {};
      obj.headers = headers;
      connectResult = _default.connect(arg0, tmp8, obj, obj2._socketId);
      return obj2;
    }
  }
  closure_7.default(WebSocket, arg0);
  let obj = {
    key: "binaryType",
    get() {
      return this._binaryType;
    },
    set(_binaryType) {
      const self = this;
      if (_binaryType !== "blob") {
        if (_binaryType !== "arraybuffer") {
          const _Error = Error;
          const error = new Error("binaryType must be either 'blob' or 'arraybuffer'");
          throw error;
        }
      }
      if (self._binaryType === "blob") {
        closure_1_18.default(closure_1_12.default.isAvailable, "Native module BlobModule is required for blob support");
        if (_binaryType === "blob") {
          closure_1_12.default.addWebSocketHandler(self._socketId);
          const _default2 = closure_1_12.default;
        } else {
          const result = closure_1_12.default.removeWebSocketHandler(self._socketId);
          const _default = closure_1_12.default;
        }
      }
      self._binaryType = _binaryType;
    }
  };
  let items = [obj, , , , , , , , , , ];
  obj = {
    key: "close",
    value: function close(arg0, arg1) {
      const self = this;
      if (this.readyState !== this.CLOSING) {
        if (self.readyState !== self.CLOSED) {
          self.readyState = self.CLOSING;
          self._close(arg0, arg1);
        }
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "send",
    value: function send(str) {
      const self = this;
      if (this.readyState === this.CONNECTING) {
        const _Error2 = Error;
        const error = new Error("INVALID_STATE_ERR");
        throw error;
      } else if (str instanceof closure_1_11.default) {
        closure_1_18.default(closure_1_12.default.isAvailable, "Native module BlobModule is required for blob support");
        closure_1_12.default.sendOverSocket(str, self._socketId);
      } else if (typeof str === "string") {
        closure_1_16.default.send(str, self._socketId);
      } else {
        const _ArrayBuffer = ArrayBuffer;
        if (!(str instanceof ArrayBuffer)) {
          const _ArrayBuffer2 = ArrayBuffer;
          if (!ArrayBuffer.isView(str)) {
            const _Error = Error;
            const error1 = new Error("Unsupported data type");
            throw error1;
          }
        }
        closure_1_16.default.sendBinary(closure_1_14.default(str), self._socketId);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "ping",
    value: function ping() {
      if (this.readyState === this.CONNECTING) {
        const _Error = Error;
        const error = new Error("INVALID_STATE_ERR");
        throw error;
      } else {
        closure_1_16.default.ping(tmp._socketId);
      }
    }
  };
  items[4] = {
    key: "_close",
    value: function _close(num, str) {
      const self = this;
      num = 1000;
      str = "";
      closure_1_16.default.close(num, str, self._socketId);
      if (closure_1_12.default.isAvailable) {
        if (self._binaryType === "blob") {
          const result = closure_1_12.default.removeWebSocketHandler(self._socketId);
          const _default2 = closure_1_12.default;
        }
      }
    }
  };
  items[5] = {
    key: "_unregisterEvents",
    value: function _unregisterEvents() {
      const _subscriptions = this._subscriptions;
      const item = _subscriptions.forEach((remove) => remove.remove());
      this._subscriptions = [];
    }
  };
  items[6] = {
    key: "_registerEvents",
    value: function _registerEvents() {
      const self = this;
      const _eventEmitter = this._eventEmitter;
      const items = [
        _eventEmitter.addListener("websocketMessage", (id) => {
          if (id.id === self._socketId) {
            ({ data, type } = id);
            if ("binary" === type) {
              data = closure_2_17.default.toByteArray(id.data).buffer;
              const _default2 = closure_2_17.default;
            } else if ("blob" === type) {
              data = closure_2_12.default.createFromOptions(id.data);
              const _default = closure_2_12.default;
            }
            let _default3 = closure_2_9.default;
            const obj = { data };
            const prototype = _default3.prototype;
            _default3 = new _default3("message", obj);
            self.dispatchEvent(_default3);
          }
        }),
      ,
      ,

      ];
      const _eventEmitter2 = this._eventEmitter;
      items[1] = _eventEmitter2.addListener("websocketOpen", (id) => {
        if (id.id === self._socketId) {
          self.readyState = self.OPEN;
          self.protocol = id.protocol;
          let _default = closure_2_8.default;
          const prototype = _default.prototype;
          _default = new _default("open");
          self.dispatchEvent(_default);
        }
      });
      const _eventEmitter3 = this._eventEmitter;
      items[2] = _eventEmitter3.addListener("websocketClosed", (id) => {
        if (id.id === self._socketId) {
          self.readyState = self.CLOSED;
          let _default = closure_2_10.default;
          const obj = {};
          ({ code: obj.code, reason: obj.reason } = id);
          const prototype = _default.prototype;
          _default = new _default("close", obj);
          self.dispatchEvent(_default);
          self._unregisterEvents();
          self.close();
        }
      });
      const _eventEmitter4 = this._eventEmitter;
      items[3] = _eventEmitter4.addListener("websocketFailed", (id) => {
        if (id.id === self._socketId) {
          self.readyState = self.CLOSED;
          let _default = closure_2_8.default;
          const prototype = _default.prototype;
          _default = new _default("error");
          self.dispatchEvent(_default);
          let _default2 = closure_2_10.default;
          const obj = { code: 1006, reason: id.message };
          const prototype2 = _default2.prototype;
          _default2 = new _default2("close", obj);
          self.dispatchEvent(_default2);
          self._unregisterEvents();
          self.close();
        }
      });
      this._subscriptions = items;
    }
  };
  items[7] = {
    key: "onclose",
    get() {
      return WebSocket(closure_1_1[19]).getEventHandlerAttribute(this, "close");
    },
    set(fn) {
      const result = WebSocket(closure_1_1[19]).setEventHandlerAttribute(this, "close", fn);
    }
  };
  items[8] = {
    key: "onerror",
    get() {
      return WebSocket(closure_1_1[19]).getEventHandlerAttribute(this, "error");
    },
    set(fn) {
      const result = WebSocket(closure_1_1[19]).setEventHandlerAttribute(this, "error", fn);
    }
  };
  items[9] = {
    key: "onmessage",
    get() {
      return WebSocket(closure_1_1[19]).getEventHandlerAttribute(this, "message");
    },
    set(fn) {
      const result = WebSocket(closure_1_1[19]).setEventHandlerAttribute(this, "message", fn);
    }
  };
  items[10] = {
    key: "onopen",
    get() {
      return WebSocket(closure_1_1[19]).getEventHandlerAttribute(this, "open");
    },
    set(fn) {
      const result = WebSocket(closure_1_1[19]).setEventHandlerAttribute(this, "open", fn);
    }
  };
  return closure_4.default(WebSocket, items);
})(module_1(validateCallback).default);
tmp4.CONNECTING = 0;
tmp4.OPEN = 1;
tmp4.CLOSING = 2;
tmp4.CLOSED = 3;

export default tmp4;
