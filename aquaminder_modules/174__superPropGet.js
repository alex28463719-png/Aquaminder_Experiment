// Module ID: 174
// Function ID: 1849
// Name: _superPropGet
// Dependencies: [1, 6, 26, 12, 13, 23, 25, 28, 175, 177, 179, 180, 185, 186, 20, 189, 178, 190]

// Module 174 (_superPropGet)
import _toConsumableArray from "_toConsumableArray" /* 6 */;
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _get from "_get" /* 26 */;
import _inherits from "_inherits" /* 28 */;
import Event from "Event" /* 175 */;
import validateCallback2 from "validateCallback" /* 177 */;
import _callSuper2 from "_callSuper" /* 179 */;
import uuidv4 from "uuidv4" /* 180 */;
import module_1 from "module_1" /* 1 */;

function _superPropGet(arg0, arg1, arg2, arg3) {
  closure_0 = arg2;
  let prototype = arg0;
  if (1) {
    prototype = arg0.prototype;
  }
  const defaultResult = closure_3.default(closure_7.default(prototype), "addEventListener", arg2);
  dependencyMap = defaultResult;
  let fn = defaultResult;
  if (2) {
    fn = defaultResult;
    if ("function" === typeof defaultResult) {
      fn = (arg0) => defaultResult.apply(closure_0, arg0);
    }
  }
  return fn;
}
function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const defaultResult = closure_7.default(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(defaultResult, items, closure_7.default(arg0).constructor);
  } else {
    constructResult = defaultResult.apply(arg0, items);
  }
  return closure_6.default(arg0, constructResult);
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
let closure_2 = module_1(_toConsumableArray);
let closure_3 = module_1(_get);
let closure_4 = module_1(_classCallCheck);
let closure_5 = module_1(_defineProperties);
let closure_6 = module_1(_possibleConstructorReturn);
let closure_7 = module_1(_getPrototypeOf);
let closure_8 = module_1(_inherits);
let closure_9 = module_1(Event);
const validateCallback = module_1(validateCallback2);
let closure_10 = module_1(_callSuper2);
if (uuidv4.default.isAvailable) {
  uuidv4.default.addNetworkingHandler();
  let _default = uuidv4.default;
}
let c11 = 0;
let c12 = 1;
let c13 = 2;
let c14 = 3;
let c15 = 4;
let obj = { arraybuffer: typeof global.ArrayBuffer === "function", blob: typeof global.Blob === "function", document: false, json: true, text: true, "": true };
let closure_17 = ((arg0) => {
  class XMLHttpRequestEventTarget {
    constructor() {
      defaultResult = closure_1_4.default(this, XMLHttpRequestEventTarget);
      return closure_1_19(this, XMLHttpRequestEventTarget, arguments);
    }
  }
  closure_8.default(XMLHttpRequestEventTarget, arg0);
  obj = {
    key: "onload",
    get() {
      return XMLHttpRequestEventTarget(closure_1_1[12]).getEventHandlerAttribute(this, "load");
    },
    set(fn) {
      const result = XMLHttpRequestEventTarget(closure_1_1[12]).setEventHandlerAttribute(this, "load", fn);
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "onloadstart",
    get() {
      return XMLHttpRequestEventTarget(closure_1_1[12]).getEventHandlerAttribute(this, "loadstart");
    },
    set(fn) {
      const result = XMLHttpRequestEventTarget(closure_1_1[12]).setEventHandlerAttribute(this, "loadstart", fn);
    }
  };
  items[1] = obj;
  obj = {
    key: "onprogress",
    get() {
      return XMLHttpRequestEventTarget(closure_1_1[12]).getEventHandlerAttribute(this, "progress");
    },
    set(fn) {
      const result = XMLHttpRequestEventTarget(closure_1_1[12]).setEventHandlerAttribute(this, "progress", fn);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "ontimeout",
    get() {
      return XMLHttpRequestEventTarget(closure_1_1[12]).getEventHandlerAttribute(this, "timeout");
    },
    set(fn) {
      const result = XMLHttpRequestEventTarget(closure_1_1[12]).setEventHandlerAttribute(this, "timeout", fn);
    }
  };
  items[4] = {
    key: "onerror",
    get() {
      return XMLHttpRequestEventTarget(closure_1_1[12]).getEventHandlerAttribute(this, "error");
    },
    set(fn) {
      const result = XMLHttpRequestEventTarget(closure_1_1[12]).setEventHandlerAttribute(this, "error", fn);
    }
  };
  items[5] = {
    key: "onabort",
    get() {
      return XMLHttpRequestEventTarget(closure_1_1[12]).getEventHandlerAttribute(this, "abort");
    },
    set(fn) {
      const result = XMLHttpRequestEventTarget(closure_1_1[12]).setEventHandlerAttribute(this, "abort", fn);
    }
  };
  items[6] = {
    key: "onloadend",
    get() {
      return XMLHttpRequestEventTarget(closure_1_1[12]).getEventHandlerAttribute(this, "loadend");
    },
    set(fn) {
      const result = XMLHttpRequestEventTarget(closure_1_1[12]).setEventHandlerAttribute(this, "loadend", fn);
    }
  };
  return closure_5.default(XMLHttpRequestEventTarget, items);
})(validateCallback.default);
const tmp5 = ((arg0) => {
  class XMLHttpRequest {
    constructor() {
      defaultResult = closure_1_4.default(this, XMLHttpRequest);
      obj = closure_1_19(this, XMLHttpRequest);
      obj.UNSENT = closure_1_11;
      obj.OPENED = closure_1_12;
      obj.HEADERS_RECEIVED = closure_1_13;
      obj.LOADING = closure_1_14;
      obj.DONE = closure_1_15;
      obj.readyState = closure_1_11;
      obj.status = 0;
      obj.timeout = 0;
      obj.withCredentials = true;
      tmp2 = new closure_1_17();
      obj.upload = tmp2;
      obj._aborted = false;
      obj._hasError = false;
      obj._method = null;
      obj._perfKey = null;
      obj._response = "";
      obj._url = null;
      obj._timedOut = false;
      obj._trackingName = null;
      obj._incrementalEvents = false;
      obj._startTime = null;
      obj._performanceLogger = XMLHttpRequest(closure_1_1[13]).default;
      _resetResult = obj._reset();
      return obj;
    }
  }
  closure_8.default(XMLHttpRequest, arg0);
  obj = {
    key: "_reset",
    value: function _reset() {
      this.readyState = this.UNSENT;
      this.responseHeaders = undefined;
      this.status = 0;
      delete tmp.responseURL;
      this._requestId = null;
      this._cachedResponse = undefined;
      this._hasError = false;
      this._headers = {};
      this._response = "";
      this._responseType = "";
      this._sent = false;
      this._lowerCaseResponseHeaders = {};
      this._clearSubscriptions();
      this._timedOut = false;
    }
  };
  let items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "responseType",
    get() {
      return this._responseType;
    },
    set(_responseType) {
      if (this._sent) {
        const _Error = Error;
        const error = new Error("Failed to set the 'responseType' property on 'XMLHttpRequest': The response type cannot be set after the request has been sent.");
        throw error;
      } else if (closure_1_16.hasOwnProperty(_responseType)) {
        let tmp9 = closure_1_16[_responseType];
        if (!tmp9) {
          tmp9 = _responseType === "document";
        }
        const _HermesInternal2 = HermesInternal;
        XMLHttpRequest(closure_1_1[14])(tmp9, "The provided value '" + _responseType + "' is unsupported in this environment.");
        if (_responseType === "blob") {
          XMLHttpRequest(closure_1_1[14])(XMLHttpRequest(closure_1_1[11]).default.isAvailable, "Native module BlobModule is required for blob support");
          const tmp14 = XMLHttpRequest(closure_1_1[14]);
        }
        tmp._responseType = _responseType;
      } else {
        const _console = console;
        const _HermesInternal = HermesInternal;
        console.warn("The provided value '" + _responseType + "' is not a valid 'responseType'.");
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "responseText",
    get() {
      const self = this;
      if (this._responseType !== "") {
        if (self._responseType !== "text") {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error = new Error("The 'responseText' property is only available if 'responseType' " + "is set to '' or 'text', but it is '" + self._responseType + "'.");
          throw error;
        }
      }
      return self.readyState < closure_1_14 ? "" : self._response;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "response",
    get() {
      const self = this;
      const responseType = this.responseType;
      if (responseType !== "") {
        if (responseType !== "text") {
          if (self.readyState !== closure_1_15) {
            return null;
          } else if (self._cachedResponse !== undefined) {
            return self._cachedResponse;
          } else {
            if ("document" === responseType) {
              self._cachedResponse = null;
            } else if ("arraybuffer" === responseType) {
              self._cachedResponse = XMLHttpRequest(closure_1_1[15]).toByteArray(self._response).buffer;
              obj = XMLHttpRequest(closure_1_1[15]);
            } else if ("blob" === responseType) {
              if (typeof self._response === "object") {
                if (self._response) {
                  self._cachedResponse = XMLHttpRequest(closure_1_1[11]).default.createFromOptions(self._response);
                  const _default2 = XMLHttpRequest(closure_1_1[11]).default;
                }
              }
              if (self._response === "") {
                self._cachedResponse = XMLHttpRequest(closure_1_1[11]).default.createFromParts([]);
                const _default = XMLHttpRequest(closure_1_1[11]).default;
              } else {
                const _Error = Error;
                ({ _response: _response2, _response } = self);
                const _HermesInternal = HermesInternal;
                const error = new Error("Invalid response for blob - expecting object, was " + "" + typeof _response + ": " + _response2.trim());
                throw error;
              }
            } else if ("json" === responseType) {
              try {
                const _JSON = JSON;
                self._cachedResponse = JSON.parse(self._response);
              } catch (err) {
                tmp._cachedResponse = null;
              }
            } else {
              self._cachedResponse = null;
            }
            return self._cachedResponse;
          }
        }
      }
      let str5 = "";
      if (self.readyState >= closure_1_14) {
        str5 = "";
        if (!self._hasError) {
          str5 = self._response;
        }
      }
      return str5;
    }
  };
  items[4] = {
    key: "__didCreateRequest",
    value: function __didCreateRequest(_requestId) {
      const self = this;
      this._requestId = _requestId;
      if (XMLHttpRequest._interceptor) {
        const _interceptor = XMLHttpRequest._interceptor;
        let str = self._url;
        if (!str) {
          str = "";
        }
        const sent = _interceptor.requestSent(_requestId, str, tmp2, self._headers);
      }
    }
  };
  items[5] = {
    key: "__didUploadProgress",
    value: function __didUploadProgress(arg0, loaded, total) {
      if (arg0 === this._requestId) {
        let _default = closure_1_10.default;
        obj = { lengthComputable: true, loaded, total };
        const prototype = _default.prototype;
        _default = new _default("progress", obj);
        XMLHttpRequest(closure_1_1[16]).dispatchTrustedEvent(tmp.upload, _default);
      }
    }
  };
  items[6] = {
    key: "__didReceiveResponse",
    value: function __didReceiveResponse(arg0, status) {
      obj = arg2;
      let str = arg3;
      const self = this;
      if (arg0 === this._requestId) {
        if (self._perfKey != null) {
          const _performanceLogger = self._performanceLogger;
          _performanceLogger.stopTimespan(self._perfKey);
        }
        self.status = status;
        self.setResponseHeaders(obj);
        self.setReadyState(self.HEADERS_RECEIVED);
        if (!str) {
          if (str !== "") {
            delete tmp.responseURL;
          }
          if (XMLHttpRequest._interceptor) {
            const _interceptor = XMLHttpRequest._interceptor;
            if (!str) {
              str = self._url;
            }
            if (!str) {
              str = "";
            }
            if (!obj) {
              obj = {};
            }
            _interceptor.responseReceived(arg0, str, status, obj);
          }
        }
        self.responseURL = str;
      }
    }
  };
  items[7] = {
    key: "__didReceiveData",
    value: function __didReceiveData(arg0, _response) {
      const self = this;
      if (arg0 === this._requestId) {
        self._response = _response;
        self._cachedResponse = undefined;
        self.setReadyState(self.LOADING);
        if (XMLHttpRequest._interceptor) {
          const _interceptor = XMLHttpRequest._interceptor;
          _interceptor.dataReceived(arg0, _response);
        }
      }
    }
  };
  items[8] = {
    key: "__didReceiveIncrementalData",
    value: function __didReceiveIncrementalData(arg0, _response) {
      const self = this;
      if (arg0 === this._requestId) {
        if (self._response) {
          self._response = self._response + _response;
        } else {
          self._response = _response;
        }
        if (XMLHttpRequest._profiling) {
          const _performance = performance;
          performance.mark(`Track:XMLHttpRequest:Incremental Data: ${self._getMeasureURL()}`);
        }
        if (XMLHttpRequest._interceptor) {
          const _interceptor = XMLHttpRequest._interceptor;
          _interceptor.dataReceived(arg0, _response);
        }
        self.setReadyState(self.LOADING);
        const result = self.__didReceiveDataProgress(arg0, arg2, arg3);
      }
    }
  };
  items[9] = {
    key: "__didReceiveDataProgress",
    value: function __didReceiveDataProgress(arg0, loaded, total) {
      if (arg0 === this._requestId) {
        let _default = closure_1_10.default;
        obj = { lengthComputable: total >= 0, loaded, total };
        const prototype = _default.prototype;
        _default = new _default("progress", obj);
        XMLHttpRequest(closure_1_1[16]).dispatchTrustedEvent(tmp, _default);
      }
    }
  };
  items[10] = {
    key: "__didCompleteResponse",
    value: function __didCompleteResponse(arg0, _response) {
      const self = this;
      if (arg0 === this._requestId) {
        if (_response) {
          if (self._responseType === "") {
            self._response = _response;
          }
          self._hasError = true;
          if (arg2) {
            self._timedOut = true;
          }
        }
        self._clearSubscriptions();
        self._requestId = null;
        self.setReadyState(self.DONE);
        if (XMLHttpRequest._profiling) {
          if (self._startTime != null) {
            const _performance = performance;
            obj = { start: self._startTime };
            const _performance2 = performance;
            const text = `Track:XMLHttpRequest:${self._getMeasureURL()}`;
            obj.end = performance.now();
            performance.measure(`Track:XMLHttpRequest:${self._getMeasureURL()}`, obj);
          }
        }
        const _interceptor = XMLHttpRequest._interceptor;
        if (_response) {
          if (_interceptor) {
            const _interceptor3 = XMLHttpRequest._interceptor;
            _interceptor3.loadingFailed(arg0, _response);
          }
        } else if (_interceptor) {
          const _interceptor2 = XMLHttpRequest._interceptor;
          _interceptor2.loadingFinished(arg0, self._response.length);
        }
      }
    }
  };
  items[11] = {
    key: "_clearSubscriptions",
    value: function _clearSubscriptions() {
      let _subscriptions = this._subscriptions;
      if (!_subscriptions) {
        _subscriptions = [];
      }
      const item = _subscriptions.forEach((remove) => {
        if (remove) {
          remove.remove();
        }
      });
      this._subscriptions = [];
    }
  };
  items[12] = {
    key: "getAllResponseHeaders",
    value: function getAllResponseHeaders() {
      if (this.responseHeaders) {
        const responseHeaders = this.responseHeaders;
        const _Map = Map;
        const map = new Map();
        obj = map;
        const _Object = Object;
        const keys = Object.keys(responseHeaders);
        const iter = keys[Symbol.iterator]();
        const str2 = iter.next();
        while (iter !== undefined) {
          let str3 = str2;
          let tmp10 = responseHeaders;
          let tmp11 = responseHeaders[str2];
          let formatted = str2.toLowerCase();
          let tmp13 = formatted;
          let tmp14 = map;
          let value = obj.get(formatted);
          let tmp16 = value;
          if (value) {
            let tmp22 = value;
            let tmp23 = tmp11;
            tmp16.headerValue = `${tmp16.headerValue}, ${tmp11}`;
            let tmp24 = map;
            let tmp25 = formatted;
            let result = obj.set(tmp13, tmp16);
          } else {
            let tmp17 = map;
            let tmp18 = formatted;
            obj = { lowerHeaderName: tmp13 };
            let tmp19 = str2;
            obj.upperHeaderName = str3.toUpperCase();
            let tmp20 = tmp11;
            obj.headerValue = tmp11;
            let result1 = obj.set(tmp13, obj);
          }
          continue;
        }
        const sorted = closure_1_2.default(obj.values()).sort((upperHeaderName, upperHeaderName2) => {
          if (upperHeaderName.upperHeaderName < upperHeaderName2.upperHeaderName) {
            return -1;
          } else if (upperHeaderName.upperHeaderName > upperHeaderName2.upperHeaderName) {
            return 1;
          } else {
            return 0;
          }
        });
        const mapped = sorted.map((lowerHeaderName) => lowerHeaderName.lowerHeaderName + ": " + lowerHeaderName.headerValue);
        return mapped.join("\r\n") + "\r\n";
      } else {
        return null;
      }
    }
  };
  items[13] = {
    key: "getResponseHeader",
    value: function getResponseHeader(arg0) {
      const tmp = this._lowerCaseResponseHeaders[arg0.toLowerCase(arg0)];
      let tmp2 = null;
      if (tmp !== undefined) {
        tmp2 = tmp;
      }
      return tmp2;
    }
  };
  items[14] = {
    key: "setRequestHeader",
    value: function setRequestHeader(str) {
      if (this.readyState !== this.OPENED) {
        const _Error = Error;
        const error = new Error("Request has not been opened");
        throw error;
      } else {
        const _String = String;
        const formatted = str.toLowerCase();
        tmp._headers[formatted] = String(arg1);
      }
    }
  };
  items[15] = {
    key: "setTrackingName",
    value: function setTrackingName(_trackingName) {
      this._trackingName = _trackingName;
      return this;
    }
  };
  items[16] = {
    key: "setPerformanceLogger",
    value: function setPerformanceLogger(_performanceLogger) {
      this._performanceLogger = _performanceLogger;
      return this;
    }
  };
  items[17] = {
    key: "open",
    value: function open(str, _url) {
      const self = this;
      if (this.readyState !== this.UNSENT) {
        const _Error3 = Error;
        const error = new Error("Cannot open, already sending");
        throw error;
      } else {
        if (arg2 !== undefined) {
          if (!arg2) {
            const _Error = Error;
            const error1 = new Error("Synchronous http requests are not supported");
            throw error1;
          }
        }
        if (_url) {
          self._method = str.toUpperCase();
          self._url = _url;
          self._aborted = false;
          self.setReadyState(self.OPENED);
        } else {
          const _Error2 = Error;
          const error2 = new Error("Cannot load an empty url");
          throw error2;
        }
      }
    }
  };
  items[18] = {
    key: "send",
    value: function send(arg0) {
      let self = this;
      self = this;
      if (this.readyState !== this.OPENED) {
        const _Error2 = Error;
        const error = new Error("Request has not been opened");
        throw error;
      } else if (self._sent) {
        const _Error = Error;
        const error1 = new Error("Request has already been sent");
        throw error1;
      } else {
        self._sent = true;
        const _subscriptions = self._subscriptions;
        _subscriptions.push(XMLHttpRequest(closure_1_1[17]).default.addListener("didSendNetworkData", (arg0) => {
          const __didUploadProgress = self.__didUploadProgress;
          return __didUploadProgress.apply(self, closure_2_2.default(arg0));
        }));
        const _subscriptions1 = self._subscriptions;
        const _default = XMLHttpRequest(closure_1_1[17]).default;
        _subscriptions1.push(XMLHttpRequest(closure_1_1[17]).default.addListener("didReceiveNetworkResponse", (arg0) => {
          const __didReceiveResponse = self.__didReceiveResponse;
          return __didReceiveResponse.apply(self, closure_2_2.default(arg0));
        }));
        const _subscriptions2 = self._subscriptions;
        const _default2 = XMLHttpRequest(closure_1_1[17]).default;
        _subscriptions2.push(XMLHttpRequest(closure_1_1[17]).default.addListener("didReceiveNetworkData", (arg0) => {
          const __didReceiveData = self.__didReceiveData;
          return __didReceiveData.apply(self, closure_2_2.default(arg0));
        }));
        const _subscriptions3 = self._subscriptions;
        const _default3 = XMLHttpRequest(closure_1_1[17]).default;
        _subscriptions3.push(XMLHttpRequest(closure_1_1[17]).default.addListener("didReceiveNetworkIncrementalData", (arg0) => {
          const __didReceiveIncrementalData = self.__didReceiveIncrementalData;
          return __didReceiveIncrementalData.apply(self, closure_2_2.default(arg0));
        }));
        const _subscriptions4 = self._subscriptions;
        const _default4 = XMLHttpRequest(closure_1_1[17]).default;
        _subscriptions4.push(XMLHttpRequest(closure_1_1[17]).default.addListener("didReceiveNetworkDataProgress", (arg0) => {
          const __didReceiveDataProgress = self.__didReceiveDataProgress;
          return __didReceiveDataProgress.apply(self, closure_2_2.default(arg0));
        }));
        const _subscriptions5 = self._subscriptions;
        const _default5 = XMLHttpRequest(closure_1_1[17]).default;
        _subscriptions5.push(XMLHttpRequest(closure_1_1[17]).default.addListener("didCompleteNetworkResponse", (arg0) => {
          const __didCompleteResponse = self.__didCompleteResponse;
          return __didCompleteResponse.apply(self, closure_2_2.default(arg0));
        }));
        let str7 = "text";
        if (self._responseType === "arraybuffer") {
          str7 = "base64";
        }
        if (self._responseType === "blob") {
          str7 = "blob";
        }
        let _url = self._trackingName;
        if (_url == null) {
          _url = self._url;
        }
        const _String = String;
        self._perfKey = `network_XMLHttpRequest_${String(_url)}`;
        const _performanceLogger = self._performanceLogger;
        _performanceLogger.startTimespan(self._perfKey);
        const _performance = performance;
        self._startTime = performance.now();
        XMLHttpRequest(closure_1_1[14])(self._method, "XMLHttpRequest method needs to be defined (%s).", _url);
        XMLHttpRequest(closure_1_1[14])(self._url, "XMLHttpRequest URL needs to be defined (%s).", _url);
        const _default7 = XMLHttpRequest(closure_1_1[17]).default;
        ({ _method, __didCreateRequest } = self);
        ({ _trackingName, _url: _url2, _headers, timeout } = self);
        _default7.sendRequest(_method, _trackingName, _url2, _headers, arg0, str7, self._incrementalEvents || self.onreadystatechange || self.onprogress, timeout, __didCreateRequest.bind(self), self.withCredentials);
      }
    }
  };
  items[19] = {
    key: "abort",
    value: function abort() {
      const self = this;
      this._aborted = true;
      if (this._requestId) {
        XMLHttpRequest(closure_1_1[17]).default.abortRequest(self._requestId);
        const _default = XMLHttpRequest(closure_1_1[17]).default;
      }
      if (self.readyState !== self.UNSENT) {
        if (self.readyState !== self.OPENED) {
          if (self.readyState !== self.DONE) {
            self._reset();
            self.setReadyState(self.DONE);
          }
        }
      }
      self._reset();
    }
  };
  items[20] = {
    key: "setResponseHeaders",
    value: function setResponseHeaders(arg0) {
      obj = arg0;
      const self = this;
      let tmp = arg0;
      if (!arg0) {
        tmp = null;
      }
      self.responseHeaders = tmp;
      if (!obj) {
        obj = {};
      }
      const keys = Object.keys(obj);
      self._lowerCaseResponseHeaders = keys.reduce((arg0, str) => {
        arg0[str.toLowerCase()] = obj[str];
        return arg0;
      }, {});
    }
  };
  items[21] = {
    key: "setReadyState",
    value: function setReadyState(readyState) {
      const self = this;
      this.readyState = readyState;
      let num = 16;
      let _default = new closure_1_9.default("readystatechange");
      XMLHttpRequest(closure_1_1[16]).dispatchTrustedEvent(this, _default);
      if (readyState === this.DONE) {
        if (self._aborted) {
          let _default3 = closure_1_9.default;
          const prototype3 = _default3.prototype;
          _default3 = new _default3("abort");
          XMLHttpRequest(closure_1_1[num]).dispatchTrustedEvent(self, _default3);
          num = closure_1_9.default;
          const prototype4 = num.prototype;
          num = new num("loadend");
          XMLHttpRequest(closure_1_1[num]).dispatchTrustedEvent(self, num);
        } else if (!self._hasError) {
          _default = closure_1_9.default;
          const prototype = _default.prototype;
          const _default1 = new _default("load");
          XMLHttpRequest(closure_1_1[num]).dispatchTrustedEvent(self, _default1);
        }
        const dispatchTrustedEvent = XMLHttpRequest(closure_1_1[num]).dispatchTrustedEvent;
        let _default2 = closure_1_9.default;
        const prototype2 = _default2.prototype;
        if (self._timedOut) {
          _default2 = new _default2("timeout");
          dispatchTrustedEvent(self, _default2);
        } else {
          const _default21 = new _default2("error");
          dispatchTrustedEvent(self, _default21);
        }
      }
    }
  };
  items[22] = {
    key: "addEventListener",
    value: function addEventListener(arg0, arg1) {
      const self = this;
      if (arg0 === "readystatechange") {
        self._incrementalEvents = true;
      }
      const items = [arg0, arg1];
      closure_1_18(XMLHttpRequest, "addEventListener", self, 3)(items);
    }
  };
  items[23] = {
    key: "_getMeasureURL",
    value: function _getMeasureURL() {
      let _url = this._trackingName;
      if (_url == null) {
        _url = this._url;
      }
      let str = "Unknown URL";
      if (_url != null) {
        str = _url;
      }
      return str;
    }
  };
  items[24] = {
    key: "onabort",
    get() {
      return XMLHttpRequest(closure_1_1[12]).getEventHandlerAttribute(this, "abort");
    },
    set(fn) {
      const result = XMLHttpRequest(closure_1_1[12]).setEventHandlerAttribute(this, "abort", fn);
    }
  };
  items[25] = {
    key: "onerror",
    get() {
      return XMLHttpRequest(closure_1_1[12]).getEventHandlerAttribute(this, "error");
    },
    set(fn) {
      const result = XMLHttpRequest(closure_1_1[12]).setEventHandlerAttribute(this, "error", fn);
    }
  };
  items[26] = {
    key: "onload",
    get() {
      return XMLHttpRequest(closure_1_1[12]).getEventHandlerAttribute(this, "load");
    },
    set(fn) {
      const result = XMLHttpRequest(closure_1_1[12]).setEventHandlerAttribute(this, "load", fn);
    }
  };
  items[27] = {
    key: "onloadstart",
    get() {
      return XMLHttpRequest(closure_1_1[12]).getEventHandlerAttribute(this, "loadstart");
    },
    set(fn) {
      const result = XMLHttpRequest(closure_1_1[12]).setEventHandlerAttribute(this, "loadstart", fn);
    }
  };
  items[28] = {
    key: "onprogress",
    get() {
      return XMLHttpRequest(closure_1_1[12]).getEventHandlerAttribute(this, "progress");
    },
    set(fn) {
      const result = XMLHttpRequest(closure_1_1[12]).setEventHandlerAttribute(this, "progress", fn);
    }
  };
  items[29] = {
    key: "ontimeout",
    get() {
      return XMLHttpRequest(closure_1_1[12]).getEventHandlerAttribute(this, "timeout");
    },
    set(fn) {
      const result = XMLHttpRequest(closure_1_1[12]).setEventHandlerAttribute(this, "timeout", fn);
    }
  };
  items[30] = {
    key: "onloadend",
    get() {
      return XMLHttpRequest(closure_1_1[12]).getEventHandlerAttribute(this, "loadend");
    },
    set(fn) {
      const result = XMLHttpRequest(closure_1_1[12]).setEventHandlerAttribute(this, "loadend", fn);
    }
  };
  items[31] = {
    key: "onreadystatechange",
    get() {
      return XMLHttpRequest(closure_1_1[12]).getEventHandlerAttribute(this, "readystatechange");
    },
    set(fn) {
      const result = XMLHttpRequest(closure_1_1[12]).setEventHandlerAttribute(this, "readystatechange", fn);
    }
  };
  const items1 = [
    {
      key: "__setInterceptor_DO_NOT_USE",
      value: function __setInterceptor_DO_NOT_USE(_interceptor) {
        XMLHttpRequest._interceptor = _interceptor;
      }
    },
    {
      key: "enableProfiling",
      value: function enableProfiling(_profiling) {
        XMLHttpRequest._profiling = _profiling;
      }
    }
  ];
  return closure_5.default(XMLHttpRequest, items, items1);
})(validateCallback.default);
tmp5.UNSENT = 0;
tmp5.OPENED = 1;
tmp5.HEADERS_RECEIVED = 2;
tmp5.LOADING = 3;
tmp5.DONE = 4;
tmp5._interceptor = null;
tmp5._profiling = false;

export default tmp5;
