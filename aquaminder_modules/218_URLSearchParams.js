// Module ID: 218
// Function ID: 2459
// Name: URLSearchParams
// Dependencies: [1, 12, 13]

// Module 218 (URLSearchParams)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import module_1 from "module_1" /* 1 */;

let closure_0 = module_1(_classCallCheck);
let closure_1 = module_1(_defineProperties);

export const URLSearchParams = (() => {
  class URLSearchParams {
    constructor(arg0) {
      closure_0 = arg0;
      self = this;
      defaultResult = URLSearchParams.default(this, closure_0);
      this._searchParams = [];
      if (typeof arg0 === "object") {
        tmp2 = globalThis;
        _Object = Object;
        keys = Object.keys(arg0);
        item = keys.forEach((arg0) => self.append(arg0, obj[arg0]));
      }
      return;
    }
  }
  let obj = {
    key: "append",
    value: function append(arg0, arg1) {
      const _searchParams = this._searchParams;
      const items = [arg0, arg1];
      _searchParams.push(items);
    }
  };
  let items = [obj, , , , , , , , ];
  obj = {
    key: "delete",
    value: function _delete(arg0) {
      const error = new Error("URLSearchParams.delete is not implemented");
      throw error;
    }
  };
  items[1] = obj;
  obj = {
    key: "get",
    value: function get(arg0) {
      const error = new Error("URLSearchParams.get is not implemented");
      throw error;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getAll",
    value: function getAll(arg0) {
      const error = new Error("URLSearchParams.getAll is not implemented");
      throw error;
    }
  };
  items[4] = {
    key: "has",
    value: function has(arg0) {
      const error = new Error("URLSearchParams.has is not implemented");
      throw error;
    }
  };
  items[5] = {
    key: "set",
    value: function set(arg0, arg1) {
      const error = new Error("URLSearchParams.set is not implemented");
      throw error;
    }
  };
  items[6] = {
    key: "sort",
    value: function sort(cmpLenRev) {
      const error = new Error("URLSearchParams.sort is not implemented");
      throw error;
    }
  };
  items[7] = {
    key: Symbol.iterator,
    value() {
      const _searchParams = this._searchParams;
      return _searchParams[Symbol.iterator]();
    }
  };
  items[8] = {
    key: "toString",
    value: function toString() {
      const self = this;
      if (this._searchParams.length === 0) {
        return "";
      } else {
        closure_0 = self._searchParams.length - 1;
        const _searchParams = self._searchParams;
        return _searchParams.reduce((arg0, arg1, arg2) => {
          const sum = arg0 + encodeURIComponent(arg1[0]);
          let str = "&";
          const text = `${tmp}=${encodeURIComponent(arg1[1])}`;
          if (arg2 === closure_0) {
            str = "";
          }
          return text + str;
        }, "");
      }
    }
  };
  return closure_1.default(URLSearchParams, items);
})();
