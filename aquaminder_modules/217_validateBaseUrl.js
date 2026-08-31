// Module ID: 217
// Function ID: 2438
// Name: validateBaseUrl
// Dependencies: [1, 218, 12, 13, 181]

// Module 217 (validateBaseUrl)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import BlobModule2 from "BlobModule" /* 181 */;
import module_1 from "module_1" /* 1 */;

function validateBaseUrl(replaced) {
  return /^(?:(?:(?:https?|ftp):)?\/\/)(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)*(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/.test(replaced);
}
let closure_2 = module_1(_classCallCheck);
let closure_3 = module_1(_defineProperties);
const BlobModule = module_1(BlobModule2);
let closure_4 = null;
if (BlobModule.default) {
  if (typeof _default.getConstants().BLOB_URI_SCHEME === "string") {
    const constants = BlobModule.default.getConstants();
    closure_4 = `${tmp5.BLOB_URI_SCHEME}:`;
    if (typeof constants.BLOB_URI_HOST === "string") {
      let _HermesInternal = HermesInternal;
      closure_4 = `${tmp5.BLOB_URI_SCHEME}:` + "//" + constants.BLOB_URI_HOST + "/";
    }
    const _default2 = BlobModule.default;
  }
  _default = BlobModule.default;
}

export const URLSearchParams = require(218) /* URLSearchParams */.URLSearchParams;
export const URL = (() => {
  class URL {
    constructor(arg0, arg1) {
      self = this;
      defaultResult = closure_1_2.default(this, URL);
      this._searchParamsInstance = null;
      if (arg1) {
        tmp2 = closure_1_5;
        if (!closure_1_5(arg0)) {
          str = "string";
          if (typeof arg1 === "string") {
            tmp3 = closure_1_5;
            str = arg1;
            if (!closure_1_5(arg1)) {
              tmp4 = globalThis;
              _TypeError = TypeError;
              _HermesInternal = HermesInternal;
              str2 = "Invalid base URL: ";
              prototype = TypeError.prototype;
              tmp5 = new.target;
              tmp6 = new.target;
              typeError = new TypeError("Invalid base URL: " + arg1);
              tmp8 = typeError;
              throw typeError;
            }
          } else {
            str = arg1.toString();
          }
          str3 = "/";
          tmp9 = str;
          substr = str;
          if (str.endsWith("/")) {
            num = 1;
            num2 = 0;
            substr = str.slice(0, str.length - 1);
          }
          combined = arg0;
          if (!arg0.startsWith("/")) {
            tmp11 = globalThis;
            _HermesInternal2 = HermesInternal;
            combined = "/" + arg0;
          }
          str4 = combined;
          if (substr.endsWith(combined)) {
            str4 = "";
          }
          tmp12 = globalThis;
          _HermesInternal3 = HermesInternal;
          str5 = "";
          self._url = "" + substr + str4;
        }
        return;
      }
      self._url = arg0;
      _url = self._url;
      if (_url.includes("#")) {
        str6 = self._url;
        parts = str6.split("#");
        num3 = 0;
        str7 = parts[0];
        str8 = "://";
        num4 = 1;
        obj3 = str7.split("://")[1];
        str9 = "/";
        if (!obj3.includes("/")) {
          str10 = "/#";
          self._url = parts.join("/#");
        }
      }
      _url2 = self._url;
      if (!_url2.endsWith("/")) {
        _url3 = self._url;
        str11 = "?";
        if (!_url3.includes("?")) {
          _url4 = self._url;
          if (!_url4.includes("#")) {
            self._url = `${self._url}/`;
          }
        }
      }
      return;
    }
  }
  let obj = {
    key: "hash",
    get() {
      const error = new Error("URL.hash is not implemented");
      throw error;
    }
  };
  const items = [obj, , , , , , , , , , , , , ];
  obj = {
    key: "host",
    get() {
      const error = new Error("URL.host is not implemented");
      throw error;
    }
  };
  items[1] = obj;
  obj = {
    key: "hostname",
    get() {
      const error = new Error("URL.hostname is not implemented");
      throw error;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "href",
    get() {
      return this.toString();
    }
  };
  items[4] = {
    key: "origin",
    get() {
      const error = new Error("URL.origin is not implemented");
      throw error;
    }
  };
  items[5] = {
    key: "password",
    get() {
      const error = new Error("URL.password is not implemented");
      throw error;
    }
  };
  items[6] = {
    key: "pathname",
    get() {
      const error = new Error("URL.pathname not implemented");
      throw error;
    }
  };
  items[7] = {
    key: "port",
    get() {
      const error = new Error("URL.port is not implemented");
      throw error;
    }
  };
  items[8] = {
    key: "protocol",
    get() {
      const error = new Error("URL.protocol is not implemented");
      throw error;
    }
  };
  items[9] = {
    key: "search",
    get() {
      const error = new Error("URL.search is not implemented");
      throw error;
    }
  };
  items[10] = {
    key: "searchParams",
    get() {
      const self = this;
      if (this._searchParamsInstance == null) {
        const _URLSearchParams = URLSearchParams;
        const uRLSearchParams = new URLSearchParams();
        self._searchParamsInstance = uRLSearchParams;
      }
      return self._searchParamsInstance;
    }
  };
  items[11] = {
    key: "toJSON",
    value: function toJSON() {
      return this.toString();
    }
  };
  items[12] = {
    key: "toString",
    value: function toString() {
      const self = this;
      if (this._searchParamsInstance === null) {
        return self._url;
      } else {
        ({ _searchParamsInstance, _url } = self);
        let str = "?";
        str = _searchParamsInstance.toString();
        if (_url.indexOf("?") > -1) {
          str = "&";
        }
        return self._url + str + str;
      }
    }
  };
  items[13] = {
    key: "username",
    get() {
      const error = new Error("URL.username is not implemented");
      throw error;
    }
  };
  const items1 = [
    {
      key: "createObjectURL",
      value: function createObjectURL(data) {
        if (closure_1_4 === null) {
          const _Error = Error;
          const error = new Error("Cannot create URL for blob!");
          throw error;
        } else {
          const _HermesInternal = HermesInternal;
          return "" + closure_1_4 + data.data.blobId + "?offset=" + data.data.offset + "&size=" + data.size;
        }
      }
    },
    {
      key: "revokeObjectURL",
      value: function revokeObjectURL(arg0) {

      }
    }
  ];
  return closure_3.default(URL, items, items1);
})();
