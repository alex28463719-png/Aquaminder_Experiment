// Module ID: 200
// Function ID: 2212
// Name: isDataView
// Dependencies: []

// Module 200 (isDataView)
const global = arg0;
const fn = (DOMException) => {
  closure_0 = DOMException;
  function isDataView(arg0) {
    let isPrototypeOfResult = arg0;
    if (arg0) {
      const _DataView = DataView;
      isPrototypeOfResult = prototype.isPrototypeOf(arg0);
    }
    return isPrototypeOfResult;
  }
  function normalizeName(replaced) {
    let str = replaced;
    if (typeof replaced !== "string") {
      const _String = String;
      str = String(replaced);
    }
    if (!obj.test(str)) {
      if (str !== "") {
        return str.toLowerCase();
      }
    }
    const typeError = new TypeError("Invalid character in header field name: \"" + str + "\"");
    throw typeError;
  }
  function normalizeValue(str) {
    let StringResult = str;
    if (typeof str !== "string") {
      const _String = String;
      StringResult = String(str);
    }
    return StringResult;
  }
  function iteratorFor(items) {
    closure_0 = items;
    obj = {
      next() {
        const arr = items.shift();
        return { done: arr === undefined, value: arr };
      }
    };
    if (obj.iterable) {
      const _Symbol = Symbol;
      obj[Symbol.iterator] = () => obj;
    }
    return obj;
  }
  class Headers {
    constructor(arg0) {
      self = this;
      closure_0 = DOMException;
      this.map = {};
      if (DOMException instanceof Headers) {
        item = DOMException.forEach(function(arg0, arg1) {
          this.append(arg1, arg0);
        }, self);
      } else {
        tmp = globalThis;
        _Array = Array;
        if (Array.isArray(DOMException)) {
          item1 = DOMException.forEach(function(arg0) {
            const self = this;
            if (arg0.length != 2) {
              const _TypeError = TypeError;
              const typeError = new TypeError("Headers constructor: expected name/value pair to be length 2, found" + arg0.length);
              throw typeError;
            } else {
              self.append(arg0[0], arg0[1]);
            }
          }, self);
        } else if (DOMException) {
          _Object = Object;
          ownPropertyNames = Object.getOwnPropertyNames(DOMException);
          item2 = ownPropertyNames.forEach(function(arg0) {
            this.append(arg0, headers[arg0]);
          }, self);
        }
      }
      return;
    }
  }
  function consumed(_noBody) {
    if (!_noBody._noBody) {
      if (_noBody.bodyUsed) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Already read");
        return Promise.reject(typeError);
      } else {
        _noBody.bodyUsed = true;
      }
    }
  }
  function fileReaderReady(fileReader) {
    closure_0 = fileReader;
    return new Promise((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      closure_0.onload = () => {
        lib(lib.result);
      };
      closure_0.onerror = () => {
        callback(lib.error);
      };
    });
  }
  function readBlobAsArrayBuffer(arg0) {
    const fileReader = new FileReader();
    const asArrayBuffer = fileReader.readAsArrayBuffer(arg0);
    return fileReaderReady(fileReader);
  }
  function readBlobAsText(type) {
    const fileReader = new FileReader();
    const match = /charset=([A-Za-z0-9_-]+)/.exec(type.type);
    let str = "utf-8";
    if (match) {
      str = match[1];
    }
    const asText = fileReader.readAsText(type, str);
    return fileReaderReady(fileReader);
  }
  function readArrayBufferAsText(arg0) {
    let length;
    const uint8Array = new Uint8Array(arg0);
    const array = new Array(uint8Array.length);
    let num = 0;
    if (0 < uint8Array.length) {
      do {
        let _String = String;
        array[num] = String.fromCharCode(uint8Array[num]);
        num = num + 1;
        length = uint8Array.length;
      } while (num < length);
    }
    return array.join("");
  }
  function bufferClone(arr) {
    if (arr.slice) {
      return arr.slice(0);
    } else {
      const _Uint8Array = Uint8Array;
      const uint8Array = new Uint8Array(arr.byteLength);
      const _Uint8Array2 = Uint8Array;
      const uint8Array1 = new Uint8Array(arr);
      const result = uint8Array.set(uint8Array1);
      return uint8Array.buffer;
    }
  }
  class Body {
    constructor() {
      self = this;
      this.bodyUsed = false;
      this._initBody = function(_bodyInit) {
        const self = this;
        this.bodyUsed = this.bodyUsed;
        this._bodyInit = _bodyInit;
        if (_bodyInit) {
          if (typeof _bodyInit === "string") {
            self._bodyText = _bodyInit;
            let tmp = _bodyInit;
          } else {
            if (closure_1_2.blob) {
              const _Blob = Blob;
              if (prototype.isPrototypeOf(_bodyInit)) {
                self._bodyBlob = _bodyInit;
                tmp = _bodyInit;
              }
            }
            if (closure_1_2.formData) {
              const _FormData = FormData;
              if (prototype2.isPrototypeOf(_bodyInit)) {
                self._bodyFormData = _bodyInit;
                tmp = _bodyInit;
              }
            }
            if (closure_1_2.searchParams) {
              const _URLSearchParams = URLSearchParams;
              if (prototype3.isPrototypeOf(_bodyInit)) {
                self._bodyText = _bodyInit.toString();
                tmp = _bodyInit;
              }
            }
            if (closure_1_2.arrayBuffer) {
              if (closure_1_2.blob) {
                if (closure_1_7(_bodyInit)) {
                  self._bodyArrayBuffer = closure_1_17(_bodyInit.buffer);
                  const _Blob2 = Blob;
                  const items = [self._bodyArrayBuffer];
                  const blob = new Blob(items);
                  self._bodyInit = blob;
                  tmp = _bodyInit;
                }
              }
            }
            if (!closure_1_2.arrayBuffer) {
              const _Object = Object;
              const callResult = toString.call(_bodyInit);
              self._bodyText = callResult;
              tmp = callResult;
            } else {
              const _ArrayBuffer = ArrayBuffer;
              self._bodyArrayBuffer = closure_1_17(_bodyInit);
              tmp = _bodyInit;
            }
          }
        } else {
          self._noBody = true;
          self._bodyText = "";
          tmp = _bodyInit;
        }
        const headers = self.headers;
        if (!headers.get("content-type")) {
          if (typeof tmp === "string") {
            const headers4 = self.headers;
            const result = headers4.set("content-type", "text/plain;charset=UTF-8");
          } else {
            if (self._bodyBlob) {
              if (self._bodyBlob.type) {
                const headers3 = self.headers;
                const result1 = headers3.set("content-type", self._bodyBlob.type);
              }
            }
            if (closure_1_2.searchParams) {
              const _URLSearchParams2 = URLSearchParams;
              if (prototype6.isPrototypeOf(tmp)) {
                const headers2 = self.headers;
                const result2 = headers2.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
              }
            }
          }
        }
      };
      if (closure_2.blob) {
        self.blob = function() {
          const self = this;
          const tmp = closure_1_12(this);
          if (tmp) {
            return tmp;
          } else if (self._bodyBlob) {
            return Promise.resolve(self._bodyBlob);
          } else if (self._bodyArrayBuffer) {
            const _Blob2 = Blob;
            const items = [self._bodyArrayBuffer];
            const blob = new Blob(items);
            return Promise.resolve(blob);
          } else if (self._bodyFormData) {
            const _Error = Error;
            const error = new Error("could not read FormData body as blob");
            throw error;
          } else {
            const _Blob = Blob;
            const items1 = [self._bodyText];
            const blob1 = new Blob(items1);
            return Promise.resolve(blob1);
          }
        };
      }
      self.arrayBuffer = function() {
        const self = this;
        if (this._bodyArrayBuffer) {
          const tmp9 = closure_1_12(self);
          if (tmp9) {
            return tmp9;
          } else {
            const _ArrayBuffer = ArrayBuffer;
            const _bodyArrayBuffer = self._bodyArrayBuffer;
            if (ArrayBuffer.isView(self._bodyArrayBuffer)) {
              const buffer = _bodyArrayBuffer.buffer;
              return resolve(buffer.slice(self._bodyArrayBuffer.byteOffset, self._bodyArrayBuffer.byteOffset + self._bodyArrayBuffer.byteLength));
            } else {
              return resolve(_bodyArrayBuffer);
            }
          }
        } else if (closure_1_2.blob) {
          return self.blob().then(closure_1_14);
        } else {
          const _Error = Error;
          const error = new Error("could not read as ArrayBuffer");
          throw error;
        }
      };
      self.text = function() {
        const self = this;
        const tmp = closure_1_12(this);
        if (tmp) {
          return tmp;
        } else if (self._bodyBlob) {
          return closure_1_15(self._bodyBlob);
        } else if (self._bodyArrayBuffer) {
          return Promise.resolve(closure_1_16(self._bodyArrayBuffer));
        } else if (self._bodyFormData) {
          const _Error = Error;
          const error = new Error("could not read FormData body as text");
          throw error;
        } else {
          return Promise.resolve(self._bodyText);
        }
      };
      if (closure_2.formData) {
        self.formData = function() {
          return this.text().then(closure_1_20);
        };
      }
      self.json = function() {
        return this.text().then(JSON.parse);
      };
      return self;
    }
  }
  function normalizeMethod(str) {
    let tmp = str;
    const formatted = str.toUpperCase();
    if (closure_5.indexOf(formatted) > -1) {
      tmp = formatted;
    }
    return tmp;
  }
  class Request {
    constructor(arg0, arg1) {
      request = arg1;
      self = this;
      if (this instanceof Request) {
        if (!request) {
          request = {};
        }
        body = request.body;
        tmp6 = Request;
        if (DOMException instanceof Request) {
          if (DOMException.bodyUsed) {
            tmp43 = globalThis;
            _TypeError3 = TypeError;
            prototype8 = TypeError.prototype;
            tmp44 = new.target;
            str14 = "Already read";
            tmp45 = new.target;
            typeError = new TypeError("Already read");
            tmp47 = typeError;
            throw typeError;
          } else {
            ({ url: self.url, credentials: self.credentials } = DOMException);
            if (!request.headers) {
              tmp8 = Headers;
              prototype2 = Headers.prototype;
              tmp9 = new.target;
              tmp10 = new.target;
              tmp11 = new Headers(DOMException.headers);
              tmp12 = tmp11;
              self.headers = tmp11;
            }
            ({ method: self.method, mode: self.mode, signal: self.signal } = DOMException);
            _bodyInit = body;
            if (!body) {
              tmp13 = null;
              _bodyInit = body;
              if (DOMException._bodyInit != null) {
                _bodyInit = DOMException._bodyInit;
                flag = true;
                DOMException.bodyUsed = true;
              }
            }
          }
        } else {
          tmp7 = globalThis;
          _String = String;
          self.url = String(DOMException);
          _bodyInit = body;
        }
        self.credentials = request.credentials || self.credentials || "same-origin";
        if (request.headers) {
          tmp14 = Headers;
          prototype3 = Headers.prototype;
          tmp15 = new.target;
          tmp16 = new.target;
          tmp17 = new Headers(request.headers);
          tmp18 = tmp17;
          self.headers = tmp17;
        }
        str2 = request.method;
        tmp19 = normalizeMethod;
        if (!str2) {
          str2 = self.method;
        }
        if (!str2) {
          str2 = "GET";
        }
        self.method = tmp19(str2);
        self.mode = request.mode || self.mode || null;
        tmp20 = request.signal || self.signal;
        if (!tmp20) {
          tmp21 = closure_1;
          str3 = "AbortController";
          signal = undefined;
          if ("AbortController" in closure_1) {
            tmp23 = globalThis;
            _AbortController = AbortController;
            prototype4 = AbortController.prototype;
            tmp24 = new.target;
            tmp25 = new.target;
            abortController = new AbortController();
            tmp27 = abortController;
            signal = abortController.signal;
          }
          tmp20 = signal;
        }
        self.signal = tmp20;
        tmp28 = null;
        self.referrer = null;
        str4 = "GET";
        if (self.method === "GET") {
          if (_bodyInit) {
            tmp38 = globalThis;
            _TypeError2 = TypeError;
            prototype7 = TypeError.prototype;
            tmp39 = new.target;
            str13 = "Body not allowed for GET or HEAD requests";
            tmp40 = new.target;
            typeError1 = new TypeError("Body not allowed for GET or HEAD requests");
            tmp42 = typeError1;
            throw typeError1;
          }
        } else {
          str5 = "HEAD";
        }
        _initBodyResult = self._initBody(_bodyInit);
        if (self.method === "GET") {
          str7 = "no-store";
          if (request.cache === "no-store") {
            obj = /([?&])_=[^&]*/;
            str9 = self.url;
            if (obj.test(self.url)) {
              tmp34 = globalThis;
              _Date2 = Date;
              prototype6 = Date.prototype;
              tmp35 = new.target;
              tmp36 = new.target;
              date = new Date();
              tmp37 = date;
              str12 = "$1_=";
              self.url = str9.replace(obj, `$1_=${obj4.getTime()}`);
            } else {
              obj2 = /\?/;
              str10 = "?";
              if (obj2.test(self.url)) {
                str10 = "&";
              }
              tmp30 = globalThis;
              _Date = Date;
              prototype5 = Date.prototype;
              tmp31 = new.target;
              tmp32 = new.target;
              date1 = new Date();
              tmp33 = date1;
              str11 = "_=";
              self.url = `${str9}${str10}_=${obj3.getTime()}`;
            }
          } else {
            str8 = "no-cache";
          }
        } else {
          str6 = "HEAD";
        }
        return;
      } else {
        tmp = globalThis;
        _TypeError = TypeError;
        prototype = TypeError.prototype;
        tmp2 = new.target;
        str = "Please use the \"new\" operator, this DOM object constructor cannot be called as a function.";
        tmp3 = new.target;
        typeError2 = new TypeError("Please use the \"new\" operator, this DOM object constructor cannot be called as a function.");
        tmp5 = typeError2;
        throw typeError2;
      }
    }
  }
  function decode(str) {
    const formData = new FormData();
    let parts = str.trim().split("&");
    const item = parts.forEach((str) => {
      if (str) {
        const parts = str.split("=");
        const replaced = parts.shift().replace(/\+/g, " ");
        const str2 = parts.shift();
        const _decodeURIComponent = decodeURIComponent;
        const replaced1 = parts.join("=").replace(/\+/g, " ");
        const _decodeURIComponent2 = decodeURIComponent;
        const str4 = parts.join("=");
        formData.append(decodeURIComponent(replaced), decodeURIComponent(replaced1));
        const decodeURIComponentResult = decodeURIComponent(replaced);
      }
    });
    return formData;
  }
  function parseHeaders(str) {
    const tmp = new Headers();
    closure_0 = tmp;
    let parts = str.replace(/\r?\n[\t ]+/g, " ").split("\r");
    const mapped = parts.map((arr) => {
      let substr = arr;
      if (arr.indexOf("\n") === 0) {
        substr = arr.substr(1, arr.length);
      }
      return substr;
    });
    const item = mapped.forEach((str) => {
      const parts = str.split(":");
      const trimmed = parts.shift().trim();
      if (trimmed) {
        const joined = parts.join(":");
        try {
          closure_0.append(trimmed, tmp4);
        } catch (tmp7) {
          const _console = console;
          console.warn("Response " + tmp7.message);
        }
      }
    });
    return tmp;
  }
  class Response {
    constructor(arg0, arg1) {
      response = arg1;
      self = this;
      if (this instanceof Response) {
        if (!response) {
          response = {};
        }
        str2 = "default";
        self.type = "default";
        num = 200;
        num2 = 200;
        if (response.status !== undefined) {
          num2 = response.status;
        }
        self.status = num2;
        if (self.status >= 200) {
          num4 = 599;
          if (self.status <= 599) {
            tmp6 = self.status >= 200;
            if (tmp6) {
              num3 = 300;
              tmp6 = self.status < 300;
            }
            self.ok = tmp6;
            str3 = "";
            str4 = "";
            if (response.statusText !== undefined) {
              str4 = `${response.statusText}`;
            }
            self.statusText = str4;
            tmp7 = Headers;
            prototype2 = Headers.prototype;
            tmp8 = new.target;
            tmp9 = new.target;
            tmp10 = new Headers(response.headers);
            tmp11 = tmp10;
            self.headers = tmp10;
            self.url = response.url || "";
            tmp12 = DOMException;
            _initBodyResult = self._initBody(DOMException);
            return;
          }
        }
        tmp14 = globalThis;
        _RangeError = RangeError;
        prototype3 = RangeError.prototype;
        tmp15 = new.target;
        str5 = "Failed to construct 'Response': The status provided (0) is outside the range [200, 599].";
        tmp16 = new.target;
        rangeError = new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
        tmp18 = rangeError;
        throw rangeError;
      } else {
        tmp = globalThis;
        _TypeError = TypeError;
        prototype = TypeError.prototype;
        tmp2 = new.target;
        str = "Please use the \"new\" operator, this DOM object constructor cannot be called as a function.";
        tmp3 = new.target;
        typeError = new TypeError("Please use the \"new\" operator, this DOM object constructor cannot be called as a function.");
        tmp5 = typeError;
        throw typeError;
      }
    }
  }
  function fetch(deleteResult1, deleteResult12) {
    closure_0 = deleteResult1;
    closure_1 = deleteResult12;
    return new Promise((arg0, arg1) => {
      function abortXhr() {
        xMLHttpRequest.abort();
      }
      const tmp2 = new closure_1_19(arg0, arg1);
      closure_2 = tmp2;
      if (tmp2.signal) {
        if (tmp2.signal.aborted) {
          DOMException = deleteResult1.DOMException;
          const prototype = DOMException.prototype;
          let dOMException = new DOMException("Aborted", "AbortError");
          return arg1(dOMException);
        }
      }
      const xMLHttpRequest = new XMLHttpRequest();
      xMLHttpRequest.onload = () => {
        obj = { statusText: xMLHttpRequest.statusText, headers: closure_2_21(xMLHttpRequest.getAllResponseHeaders() || "") };
        const url = closure_2.url;
        if (url.indexOf("file://") !== 0) {
          obj.status = xMLHttpRequest.status;
        } else {
          obj.status = 200;
        }
        if ("responseURL" in xMLHttpRequest) {
          let responseURL = xMLHttpRequest.responseURL;
        } else {
          const headers = obj.headers;
          responseURL = headers.get("X-Request-URL");
        }
        obj.url = responseURL;
        closure_1 = "response" in xMLHttpRequest ? tmp7.response : tmp7.responseText;
        const timerId = setTimeout(() => {
          obj(new closure_3_22(closure_1, obj));
        }, 0);
      };
      xMLHttpRequest.onerror = () => {
        const timerId = setTimeout(() => {
          const typeError = new TypeError("Network request failed");
          closure_1_1(typeError);
        }, 0);
      };
      xMLHttpRequest.ontimeout = () => {
        const timerId = setTimeout(() => {
          const typeError = new TypeError("Network request timed out");
          closure_1_1(typeError);
        }, 0);
      };
      xMLHttpRequest.onabort = () => {
        const timerId = setTimeout(() => {
          const dOMException = new DOMException.DOMException("Aborted", "AbortError");
          closure_1_1(dOMException);
        }, 0);
      };
      let url = tmp2.url;
      try {
        if (tmp5 === "") {
          if (deleteResult12.location.href) {
            let href = deleteResult12.location.href;
          }
          tmp3(tmp4, href, true);
          if (tmp2.credentials === "include") {
            xMLHttpRequest.withCredentials = true;
          } else if (tmp2.credentials === "omit") {
            xMLHttpRequest.withCredentials = false;
          }
          if ("responseType" in xMLHttpRequest) {
            if (closure_1_2.blob) {
              xMLHttpRequest.responseType = "blob";
            } else if (closure_1_2.arrayBuffer) {
              xMLHttpRequest.responseType = "arraybuffer";
            }
          }
          if (deleteResult12) {
            if (typeof deleteResult12.headers === "object") {
              if (!(deleteResult12.headers instanceof closure_1_11)) {
                closure_4 = [];
                const _Object = Object;
                const ownPropertyNames = Object.getOwnPropertyNames(deleteResult12.headers);
                const item = ownPropertyNames.forEach((arg0) => {
                  xMLHttpRequest.setRequestHeader(arg0, closure_2_9(headers.headers[arg0]));
                });
                let headers = tmp2.headers;
                const item1 = headers.forEach((arg0, arg1) => {
                  if (arr.indexOf(arg1) === -1) {
                    xMLHttpRequest.setRequestHeader(arg1, arg0);
                  }
                });
              }
              if (tmp2.signal) {
                let signal = tmp2.signal;
                const listener = signal.addEventListener("abort", abortXhr);
                xMLHttpRequest.onreadystatechange = () => {
                  if (xMLHttpRequest.readyState === 4) {
                    const signal = closure_2.signal;
                    const removed = signal.removeEventListener("abort", abortXhr);
                  }
                };
              }
              let _bodyInit = null;
              if (typeof tmp2._bodyInit !== "undefined") {
                _bodyInit = tmp2._bodyInit;
              }
              xMLHttpRequest.send(_bodyInit);
            }
          }
          const headers1 = tmp2.headers;
          const item2 = headers1.forEach((arg0, arg1) => {
            xMLHttpRequest.setRequestHeader(arg1, arg0);
          });
        }
        href = url;
      } catch (err) {
        href = tmp;
      }
    });
  }
  let obj = typeof globalThis !== "undefined" && globalThis;
  if (!obj) {
    const _self = self;
    obj = typeof self !== "undefined" && self;
    let tmp3 = typeof self !== "undefined" && self;
  }
  if (!obj) {
    obj = typeof closure_0 !== "undefined" && closure_0;
    const tmp5 = typeof closure_0 !== "undefined" && closure_0;
  }
  if (!obj) {
    obj = {};
  }
  obj = {};
  obj.searchParams = "URLSearchParams" in obj;
  let tmp7 = "Symbol" in obj;
  if (tmp7) {
    let _Symbol = Symbol;
    tmp7 = "iterator" in Symbol;
  }
  obj.iterable = tmp7;
  let tmp8 = "FileReader" in tmp6;
  if (tmp8) {
    tmp8 = "Blob" in tmp6;
  }
  if (!tmp8) {
    obj.blob = tmp8;
    obj.formData = "FormData" in tmp6;
    obj.arrayBuffer = "ArrayBuffer" in tmp6;
    if (obj.arrayBuffer) {
      closure_3 = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"];
      let _ArrayBuffer = ArrayBuffer;
      closure_4 = ArrayBuffer.isView || ((closure_1) => {
        let tmp = closure_1;
        if (closure_1) {
          const _Object = Object;
          tmp = closure_3.indexOf(toString.call(closure_1)) > -1;
        }
        return tmp;
      });
    }
    class r10009 {
      append(arg0, arg1) {
        tmp = normalizeName(DOMException);
        tmp2 = normalizeValue(arg1);
        tmp3 = this.map[tmp];
        text = tmp2;
        if (tmp3) {
          str = ", ";
          text = `${tmp3}, ${tmp2}`;
        }
        this.map[tmp] = text;
        return;
      }
      delete(arg0) {
        tmp3 = normalizeName(DOMException);
        delete tmp2[tmp];
        return;
      }
      get(arg0) {
        tmp = normalizeName(DOMException);
        tmp2 = null;
        if (this.has(tmp)) {
          tmp2 = this.map[tmp];
        }
        return tmp2;
      }
      has(arg0) {
        map = this.map;
        return map.hasOwnProperty(normalizeName(DOMException));
      }
      set(arg0, arg1) {
        tmp = normalizeName(DOMException);
        this.map[tmp] = normalizeValue(arg1);
        return;
      }
      forEach(arg0, arg1) {
        self = this;
        for (const key10005 in this.map) {
          map = self.map;
          tmp6 = key10005;
          if (!map.hasOwnProperty(key10005)) {
            continue;
          } else {
            tmp = arg0;
            tmp2 = arg1;
            tmp3 = key10005;
            tmp4 = self;
            callResult = arg0.call(arg1, self.map[key10005], tmp6, self);
            continue;
          }
          continue;
        }
        return;
      }
      keys() {
        items = [];
        closure_0 = items;
        item = this.forEach((arg0, arg1) => {
          items.push(arg1);
        });
        return iteratorFor(items);
      }
      values() {
        items = [];
        closure_0 = items;
        item = this.forEach((arg0) => {
          items.push(arg0);
        });
        return iteratorFor(items);
      }
      entries() {
        items = [];
        closure_0 = items;
        item = this.forEach((arg0, arg1) => {
          items = [arg1, arg0];
          items.push(items);
        });
        return iteratorFor(items);
      }
    }
    class Body {
      constructor() {
        self = this;
        this.bodyUsed = false;
        this._initBody = function(_bodyInit) {
          const self = this;
          this.bodyUsed = this.bodyUsed;
          this._bodyInit = _bodyInit;
          if (_bodyInit) {
            if (typeof _bodyInit === "string") {
              self._bodyText = _bodyInit;
              let tmp = _bodyInit;
            } else {
              if (closure_1_2.blob) {
                const _Blob = Blob;
                if (prototype.isPrototypeOf(_bodyInit)) {
                  self._bodyBlob = _bodyInit;
                  tmp = _bodyInit;
                }
              }
              if (closure_1_2.formData) {
                const _FormData = FormData;
                if (prototype2.isPrototypeOf(_bodyInit)) {
                  self._bodyFormData = _bodyInit;
                  tmp = _bodyInit;
                }
              }
              if (closure_1_2.searchParams) {
                const _URLSearchParams = URLSearchParams;
                if (prototype3.isPrototypeOf(_bodyInit)) {
                  self._bodyText = _bodyInit.toString();
                  tmp = _bodyInit;
                }
              }
              if (closure_1_2.arrayBuffer) {
                if (closure_1_2.blob) {
                  if (closure_1_7(_bodyInit)) {
                    self._bodyArrayBuffer = closure_1_17(_bodyInit.buffer);
                    const _Blob2 = Blob;
                    const items = [self._bodyArrayBuffer];
                    const blob = new Blob(items);
                    self._bodyInit = blob;
                    tmp = _bodyInit;
                  }
                }
              }
              if (!closure_1_2.arrayBuffer) {
                const _Object = Object;
                const callResult = toString.call(_bodyInit);
                self._bodyText = callResult;
                tmp = callResult;
              } else {
                const _ArrayBuffer = ArrayBuffer;
                self._bodyArrayBuffer = closure_1_17(_bodyInit);
                tmp = _bodyInit;
              }
            }
          } else {
            self._noBody = true;
            self._bodyText = "";
            tmp = _bodyInit;
          }
          const headers = self.headers;
          if (!headers.get("content-type")) {
            if (typeof tmp === "string") {
              const headers4 = self.headers;
              const result = headers4.set("content-type", "text/plain;charset=UTF-8");
            } else {
              if (self._bodyBlob) {
                if (self._bodyBlob.type) {
                  const headers3 = self.headers;
                  const result1 = headers3.set("content-type", self._bodyBlob.type);
                }
              }
              if (closure_1_2.searchParams) {
                const _URLSearchParams2 = URLSearchParams;
                if (prototype6.isPrototypeOf(tmp)) {
                  const headers2 = self.headers;
                  const result2 = headers2.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
                }
              }
            }
          }
        };
        if (closure_2.blob) {
          self.blob = function() {
            const self = this;
            const tmp = closure_1_12(this);
            if (tmp) {
              return tmp;
            } else if (self._bodyBlob) {
              return Promise.resolve(self._bodyBlob);
            } else if (self._bodyArrayBuffer) {
              const _Blob2 = Blob;
              const items = [self._bodyArrayBuffer];
              const blob = new Blob(items);
              return Promise.resolve(blob);
            } else if (self._bodyFormData) {
              const _Error = Error;
              const error = new Error("could not read FormData body as blob");
              throw error;
            } else {
              const _Blob = Blob;
              const items1 = [self._bodyText];
              const blob1 = new Blob(items1);
              return Promise.resolve(blob1);
            }
          };
        }
        self.arrayBuffer = function() {
          const self = this;
          if (this._bodyArrayBuffer) {
            const tmp9 = closure_1_12(self);
            if (tmp9) {
              return tmp9;
            } else {
              const _ArrayBuffer = ArrayBuffer;
              const _bodyArrayBuffer = self._bodyArrayBuffer;
              if (ArrayBuffer.isView(self._bodyArrayBuffer)) {
                const buffer = _bodyArrayBuffer.buffer;
                return resolve(buffer.slice(self._bodyArrayBuffer.byteOffset, self._bodyArrayBuffer.byteOffset + self._bodyArrayBuffer.byteLength));
              } else {
                return resolve(_bodyArrayBuffer);
              }
            }
          } else if (closure_1_2.blob) {
            return self.blob().then(closure_1_14);
          } else {
            const _Error = Error;
            const error = new Error("could not read as ArrayBuffer");
            throw error;
          }
        };
        self.text = function() {
          const self = this;
          const tmp = closure_1_12(this);
          if (tmp) {
            return tmp;
          } else if (self._bodyBlob) {
            return closure_1_15(self._bodyBlob);
          } else if (self._bodyArrayBuffer) {
            return Promise.resolve(closure_1_16(self._bodyArrayBuffer));
          } else if (self._bodyFormData) {
            const _Error = Error;
            const error = new Error("could not read FormData body as text");
            throw error;
          } else {
            return Promise.resolve(self._bodyText);
          }
        };
        if (closure_2.formData) {
          self.formData = function() {
            return this.text().then(closure_1_20);
          };
        }
        self.json = function() {
          return this.text().then(JSON.parse);
        };
        return self;
      }
    }
    closure_5 = ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"];
    class Request {
      constructor(arg0, arg1) {
        request = arg1;
        self = this;
        if (this instanceof Request) {
          if (!request) {
            request = {};
          }
          body = request.body;
          tmp6 = Request;
          if (DOMException instanceof Request) {
            if (DOMException.bodyUsed) {
              tmp43 = globalThis;
              _TypeError3 = TypeError;
              prototype8 = TypeError.prototype;
              tmp44 = new.target;
              str14 = "Already read";
              tmp45 = new.target;
              typeError = new TypeError("Already read");
              tmp47 = typeError;
              throw typeError;
            } else {
              ({ url: self.url, credentials: self.credentials } = DOMException);
              if (!request.headers) {
                tmp8 = Headers;
                prototype2 = Headers.prototype;
                tmp9 = new.target;
                tmp10 = new.target;
                tmp11 = new Headers(DOMException.headers);
                tmp12 = tmp11;
                self.headers = tmp11;
              }
              ({ method: self.method, mode: self.mode, signal: self.signal } = DOMException);
              _bodyInit = body;
              if (!body) {
                tmp13 = null;
                _bodyInit = body;
                if (DOMException._bodyInit != null) {
                  _bodyInit = DOMException._bodyInit;
                  flag = true;
                  DOMException.bodyUsed = true;
                }
              }
            }
          } else {
            tmp7 = globalThis;
            _String = String;
            self.url = String(DOMException);
            _bodyInit = body;
          }
          self.credentials = request.credentials || self.credentials || "same-origin";
          if (request.headers) {
            tmp14 = Headers;
            prototype3 = Headers.prototype;
            tmp15 = new.target;
            tmp16 = new.target;
            tmp17 = new Headers(request.headers);
            tmp18 = tmp17;
            self.headers = tmp17;
          }
          str2 = request.method;
          tmp19 = normalizeMethod;
          if (!str2) {
            str2 = self.method;
          }
          if (!str2) {
            str2 = "GET";
          }
          self.method = tmp19(str2);
          self.mode = request.mode || self.mode || null;
          tmp20 = request.signal || self.signal;
          if (!tmp20) {
            tmp21 = closure_1;
            str3 = "AbortController";
            signal = undefined;
            if ("AbortController" in closure_1) {
              tmp23 = globalThis;
              _AbortController = AbortController;
              prototype4 = AbortController.prototype;
              tmp24 = new.target;
              tmp25 = new.target;
              abortController = new AbortController();
              tmp27 = abortController;
              signal = abortController.signal;
            }
            tmp20 = signal;
          }
          self.signal = tmp20;
          tmp28 = null;
          self.referrer = null;
          str4 = "GET";
          if (self.method === "GET") {
            if (_bodyInit) {
              tmp38 = globalThis;
              _TypeError2 = TypeError;
              prototype7 = TypeError.prototype;
              tmp39 = new.target;
              str13 = "Body not allowed for GET or HEAD requests";
              tmp40 = new.target;
              typeError1 = new TypeError("Body not allowed for GET or HEAD requests");
              tmp42 = typeError1;
              throw typeError1;
            }
          } else {
            str5 = "HEAD";
          }
          _initBodyResult = self._initBody(_bodyInit);
          if (self.method === "GET") {
            str7 = "no-store";
            if (request.cache === "no-store") {
              obj = /([?&])_=[^&]*/;
              str9 = self.url;
              if (obj.test(self.url)) {
                tmp34 = globalThis;
                _Date2 = Date;
                prototype6 = Date.prototype;
                tmp35 = new.target;
                tmp36 = new.target;
                date = new Date();
                tmp37 = date;
                str12 = "$1_=";
                self.url = str9.replace(obj, `$1_=${obj4.getTime()}`);
              } else {
                obj2 = /\?/;
                str10 = "?";
                if (obj2.test(self.url)) {
                  str10 = "&";
                }
                tmp30 = globalThis;
                _Date = Date;
                prototype5 = Date.prototype;
                tmp31 = new.target;
                tmp32 = new.target;
                date1 = new Date();
                tmp33 = date1;
                str11 = "_=";
                self.url = `${str9}${str10}_=${obj3.getTime()}`;
              }
            } else {
              str8 = "no-cache";
            }
          } else {
            str6 = "HEAD";
          }
          return;
        } else {
          tmp = globalThis;
          _TypeError = TypeError;
          prototype = TypeError.prototype;
          tmp2 = new.target;
          str = "Please use the \"new\" operator, this DOM object constructor cannot be called as a function.";
          tmp3 = new.target;
          typeError2 = new TypeError("Please use the \"new\" operator, this DOM object constructor cannot be called as a function.");
          tmp5 = typeError2;
          throw typeError2;
        }
      }
    }
    class r10019 {
      clone() {
        obj = { body: this._bodyInit };
        tmp = new Request(this, obj);
        return tmp;
      }
    }
    Body.call(Request.prototype);
    class Response {
      constructor(arg0, arg1) {
        response = arg1;
        self = this;
        if (this instanceof Response) {
          if (!response) {
            response = {};
          }
          str2 = "default";
          self.type = "default";
          num = 200;
          num2 = 200;
          if (response.status !== undefined) {
            num2 = response.status;
          }
          self.status = num2;
          if (self.status >= 200) {
            num4 = 599;
            if (self.status <= 599) {
              tmp6 = self.status >= 200;
              if (tmp6) {
                num3 = 300;
                tmp6 = self.status < 300;
              }
              self.ok = tmp6;
              str3 = "";
              str4 = "";
              if (response.statusText !== undefined) {
                str4 = `${response.statusText}`;
              }
              self.statusText = str4;
              tmp7 = Headers;
              prototype2 = Headers.prototype;
              tmp8 = new.target;
              tmp9 = new.target;
              tmp10 = new Headers(response.headers);
              tmp11 = tmp10;
              self.headers = tmp10;
              self.url = response.url || "";
              tmp12 = DOMException;
              _initBodyResult = self._initBody(DOMException);
              return;
            }
          }
          tmp14 = globalThis;
          _RangeError = RangeError;
          prototype3 = RangeError.prototype;
          tmp15 = new.target;
          str5 = "Failed to construct 'Response': The status provided (0) is outside the range [200, 599].";
          tmp16 = new.target;
          rangeError = new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
          tmp18 = rangeError;
          throw rangeError;
        } else {
          tmp = globalThis;
          _TypeError = TypeError;
          prototype = TypeError.prototype;
          tmp2 = new.target;
          str = "Please use the \"new\" operator, this DOM object constructor cannot be called as a function.";
          tmp3 = new.target;
          typeError = new TypeError("Please use the \"new\" operator, this DOM object constructor cannot be called as a function.");
          tmp5 = typeError;
          throw typeError;
        }
      }
    }
    class r10023 {
      clone() {
        obj = { status: this.status, statusText: this.statusText };
        tmp = new Headers(this.headers);
        obj.headers = tmp;
        obj.url = this.url;
        tmp2 = new Response(this._bodyInit, obj);
        return tmp2;
      }
      static error() {
        tmp = new Response(null, { status: 200, statusText: "" });
        tmp.ok = false;
        tmp.status = 0;
        tmp.type = "error";
        return tmp;
      }
      static redirect(arg0, arg1) {
        if (closure_6.indexOf(arg1) === -1) {
          tmp9 = globalThis;
          _RangeError = RangeError;
          prototype2 = RangeError.prototype;
          tmp10 = new.target;
          str = "Invalid status code";
          tmp11 = new.target;
          rangeError = new RangeError("Invalid status code");
          tmp13 = rangeError;
          throw rangeError;
        } else {
          tmp = Response;
          obj = {};
          obj.status = arg1;
          obj = {};
          tmp2 = DOMException;
          obj.location = DOMException;
          obj.headers = obj;
          prototype = Response.prototype;
          tmp3 = new.target;
          tmp4 = null;
          tmp5 = new.target;
          tmp6 = obj;
          tmp7 = new Response(null, obj);
          tmp8 = tmp7;
          return tmp7;
        }
      }
    }
    closure_6 = [301, 302, 303, 307, 308];
    DOMException.DOMException = tmp6.DOMException;
    try {
      DOMException = DOMException.DOMException;
      let prototype2 = DOMException.prototype;
      let dOMException = new DOMException();
      fetch.polyfill = true;
      class r10009 {
        append(arg0, arg1) {
          tmp = normalizeName(DOMException);
          tmp2 = normalizeValue(arg1);
          tmp3 = this.map[tmp];
          text = tmp2;
          if (tmp3) {
            str = ", ";
            text = `${tmp3}, ${tmp2}`;
          }
          this.map[tmp] = text;
          return;
        }
        delete(arg0) {
          tmp3 = normalizeName(DOMException);
          delete tmp2[tmp];
          return;
        }
        get(arg0) {
          tmp = normalizeName(DOMException);
          tmp2 = null;
          if (this.has(tmp)) {
            tmp2 = this.map[tmp];
          }
          return tmp2;
        }
        has(arg0) {
          map = this.map;
          return map.hasOwnProperty(normalizeName(DOMException));
        }
        set(arg0, arg1) {
          tmp = normalizeName(DOMException);
          this.map[tmp] = normalizeValue(arg1);
          return;
        }
        forEach(arg0, arg1) {
          self = this;
          for (const key10005 in this.map) {
            map = self.map;
            tmp6 = key10005;
            if (!map.hasOwnProperty(key10005)) {
              continue;
            } else {
              tmp = arg0;
              tmp2 = arg1;
              tmp3 = key10005;
              tmp4 = self;
              callResult = arg0.call(arg1, self.map[key10005], tmp6, self);
              continue;
            }
            continue;
          }
          return;
        }
        keys() {
          items = [];
          closure_0 = items;
          item = this.forEach((arg0, arg1) => {
            items.push(arg1);
          });
          return iteratorFor(items);
        }
        values() {
          items = [];
          closure_0 = items;
          item = this.forEach((arg0) => {
            items.push(arg0);
          });
          return iteratorFor(items);
        }
        entries() {
          items = [];
          closure_0 = items;
          item = this.forEach((arg0, arg1) => {
            items = [arg1, arg0];
            items.push(items);
          });
          return iteratorFor(items);
        }
      }
      class Body {
        constructor() {
          self = this;
          this.bodyUsed = false;
          this._initBody = function(_bodyInit) {
            const self = this;
            this.bodyUsed = this.bodyUsed;
            this._bodyInit = _bodyInit;
            if (_bodyInit) {
              if (typeof _bodyInit === "string") {
                self._bodyText = _bodyInit;
                let tmp = _bodyInit;
              } else {
                if (closure_1_2.blob) {
                  const _Blob = Blob;
                  if (prototype.isPrototypeOf(_bodyInit)) {
                    self._bodyBlob = _bodyInit;
                    tmp = _bodyInit;
                  }
                }
                if (closure_1_2.formData) {
                  const _FormData = FormData;
                  if (prototype2.isPrototypeOf(_bodyInit)) {
                    self._bodyFormData = _bodyInit;
                    tmp = _bodyInit;
                  }
                }
                if (closure_1_2.searchParams) {
                  const _URLSearchParams = URLSearchParams;
                  if (prototype3.isPrototypeOf(_bodyInit)) {
                    self._bodyText = _bodyInit.toString();
                    tmp = _bodyInit;
                  }
                }
                if (closure_1_2.arrayBuffer) {
                  if (closure_1_2.blob) {
                    if (closure_1_7(_bodyInit)) {
                      self._bodyArrayBuffer = closure_1_17(_bodyInit.buffer);
                      const _Blob2 = Blob;
                      const items = [self._bodyArrayBuffer];
                      const blob = new Blob(items);
                      self._bodyInit = blob;
                      tmp = _bodyInit;
                    }
                  }
                }
                if (!closure_1_2.arrayBuffer) {
                  const _Object = Object;
                  const callResult = toString.call(_bodyInit);
                  self._bodyText = callResult;
                  tmp = callResult;
                } else {
                  const _ArrayBuffer = ArrayBuffer;
                  self._bodyArrayBuffer = closure_1_17(_bodyInit);
                  tmp = _bodyInit;
                }
              }
            } else {
              self._noBody = true;
              self._bodyText = "";
              tmp = _bodyInit;
            }
            const headers = self.headers;
            if (!headers.get("content-type")) {
              if (typeof tmp === "string") {
                const headers4 = self.headers;
                const result = headers4.set("content-type", "text/plain;charset=UTF-8");
              } else {
                if (self._bodyBlob) {
                  if (self._bodyBlob.type) {
                    const headers3 = self.headers;
                    const result1 = headers3.set("content-type", self._bodyBlob.type);
                  }
                }
                if (closure_1_2.searchParams) {
                  const _URLSearchParams2 = URLSearchParams;
                  if (prototype6.isPrototypeOf(tmp)) {
                    const headers2 = self.headers;
                    const result2 = headers2.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
                  }
                }
              }
            }
          };
          if (closure_2.blob) {
            self.blob = function() {
              const self = this;
              const tmp = closure_1_12(this);
              if (tmp) {
                return tmp;
              } else if (self._bodyBlob) {
                return Promise.resolve(self._bodyBlob);
              } else if (self._bodyArrayBuffer) {
                const _Blob2 = Blob;
                const items = [self._bodyArrayBuffer];
                const blob = new Blob(items);
                return Promise.resolve(blob);
              } else if (self._bodyFormData) {
                const _Error = Error;
                const error = new Error("could not read FormData body as blob");
                throw error;
              } else {
                const _Blob = Blob;
                const items1 = [self._bodyText];
                const blob1 = new Blob(items1);
                return Promise.resolve(blob1);
              }
            };
          }
          self.arrayBuffer = function() {
            const self = this;
            if (this._bodyArrayBuffer) {
              const tmp9 = closure_1_12(self);
              if (tmp9) {
                return tmp9;
              } else {
                const _ArrayBuffer = ArrayBuffer;
                const _bodyArrayBuffer = self._bodyArrayBuffer;
                if (ArrayBuffer.isView(self._bodyArrayBuffer)) {
                  const buffer = _bodyArrayBuffer.buffer;
                  return resolve(buffer.slice(self._bodyArrayBuffer.byteOffset, self._bodyArrayBuffer.byteOffset + self._bodyArrayBuffer.byteLength));
                } else {
                  return resolve(_bodyArrayBuffer);
                }
              }
            } else if (closure_1_2.blob) {
              return self.blob().then(closure_1_14);
            } else {
              const _Error = Error;
              const error = new Error("could not read as ArrayBuffer");
              throw error;
            }
          };
          self.text = function() {
            const self = this;
            const tmp = closure_1_12(this);
            if (tmp) {
              return tmp;
            } else if (self._bodyBlob) {
              return closure_1_15(self._bodyBlob);
            } else if (self._bodyArrayBuffer) {
              return Promise.resolve(closure_1_16(self._bodyArrayBuffer));
            } else if (self._bodyFormData) {
              const _Error = Error;
              const error = new Error("could not read FormData body as text");
              throw error;
            } else {
              return Promise.resolve(self._bodyText);
            }
          };
          if (closure_2.formData) {
            self.formData = function() {
              return this.text().then(closure_1_20);
            };
          }
          self.json = function() {
            return this.text().then(JSON.parse);
          };
          return self;
        }
      }
    } catch (err) {
      tmp2.DOMException = function(message, name) {
        this.message = message;
        this.name = name;
        this.stack = Error(message).stack;
      };
      let _Object = tmp.Object;
      tmp2.DOMException.prototype = _Object.create(tmp.Error.prototype);
      tmp2.DOMException.prototype.constructor = tmp2.DOMException;
    }
  } else {
    try {
      let _Blob = Blob;
      let blob = new Blob();
      let flag = true;
    } catch (err) {
      flag = false;
    }
  }
};
if (typeof DOMException === "object") {
  if (typeof arg4 !== "undefined") {
    fn(DOMException);
  }
}
if (typeof globalThis.define === "function") {
  if (globalThis.define.amd) {
    globalThis.define(["exports"], fn);
  }
}
let obj = {};
this.WHATWGFetch = obj;
fn(obj);
