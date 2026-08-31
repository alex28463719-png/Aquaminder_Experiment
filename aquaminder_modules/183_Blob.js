// Module ID: 183
// Function ID: 2021
// Name: Blob
// Dependencies: [1, 12, 13, 180]

// Module 183 (Blob)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import module_1 from "module_1" /* 1 */;

let closure_2 = module_1(_classCallCheck);
let closure_3 = module_1(_defineProperties);

export default (() => {
  class Blob {
    constructor() {
      self = this;
      if (arguments.length > 0) {
        if (arguments[0] !== undefined) {
          first = arguments[0];
        }
        num = 1;
        tmp2 = undefined;
        if (arguments.length > 1) {
          tmp2 = arguments[1];
        }
        tmp3 = closure_1_2;
        tmp4 = Blob;
        defaultResult = closure_1_2.default(self, Blob);
        tmp6 = Blob;
        tmp7 = closure_1_1;
        num2 = 3;
        _default = Blob(closure_1_1[3]).default;
        self.data = _default.createFromParts([], tmp2).data;
        return;
      }
      return;
    }
  }
  let obj = {
    key: "data",
    get() {
      if (this._data) {
        return this._data;
      } else {
        const _Error = Error;
        const error = new Error("Blob has been closed and is no longer available");
        throw error;
      }
    },
    set(_data) {
      this._data = _data;
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "slice",
    value: function slice(arg0, num) {
      let tmp = arg0;
      const self = this;
      let str = "";
      if (arguments.length > 2) {
        str = "";
        if (arguments[2] !== undefined) {
          str = arguments[2];
        }
      }
      ({ offset, size } = self.data);
      let tmp2 = offset;
      let diff = size;
      if (typeof tmp === "number") {
        if (tmp > size) {
          tmp = size;
        }
        const sum = offset + tmp;
        diff = size - tmp;
        tmp2 = sum;
        if (typeof num === "number") {
          let size2 = num;
          if (num < 0) {
            size2 = self.size + num;
          }
          if (size2 > self.size) {
            size2 = self.size;
          }
          diff = size2 - tmp;
          tmp2 = sum;
        }
      }
      const obj = { blobId: self.data.blobId, offset: tmp2, size: diff, type: str, __collector: self.data.__collector };
      return Blob(closure_1_1[3]).default.createFromOptions(obj);
    }
  };
  items[1] = obj;
  obj = {
    key: "close",
    value: function close() {
      Blob(closure_1_1[3]).default.release(this.data.blobId);
      this.data = null;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "size",
    get() {
      return this.data.size;
    }
  };
  items[4] = {
    key: "type",
    get() {
      return this.data.type || "";
    }
  };
  return closure_3.default(Blob, items);
})();
