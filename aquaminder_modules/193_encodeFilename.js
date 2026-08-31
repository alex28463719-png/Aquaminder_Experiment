// Module ID: 193
// Function ID: 2091
// Name: encodeFilename
// Dependencies: [1, 38, 12, 13]

// Module 193 (encodeFilename)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _slicedToArray from "_slicedToArray" /* 38 */;
import module_1 from "module_1" /* 1 */;

function encodeFilename(str) {
  return encodeURIComponent(str.replace(/\//g, "_"));
}
let closure_0 = module_1(_slicedToArray);
let closure_1 = module_1(_classCallCheck);
let closure_2 = module_1(_defineProperties);

export default (() => {
  class FormData {
    constructor() {
      defaultResult = closure_1_1.default(this, FormData);
      this._parts = [];
      return;
    }
  }
  let obj = {
    key: "append",
    value: function append(arg0, arg1) {
      const _parts = this._parts;
      const items = [arg0, arg1];
      _parts.push(items);
    }
  };
  let items = [obj, , ];
  obj = {
    key: "getAll",
    value: function getAll(arg0) {
      closure_0 = arg0;
      const _parts = this._parts;
      const found = _parts.filter((arg0) => FormData.default(arg0, 1)[0] === closure_0);
      return found.map((arg0) => FormData.default(arg0, 2)[1]);
    }
  };
  items[1] = obj;
  obj = {
    key: "getParts",
    value: function getParts() {
      const _parts = this._parts;
      return _parts.map((arg0) => {
        const defaultResult = FormData.default(arg0, 2);
        const first = defaultResult[0];
        let obj = { "content-disposition": `form-data; name="${tmp2}"` };
        if (typeof defaultResult[1] === "object") {
          const _Array = Array;
          if (!Array.isArray(tmp3)) {
            if (tmp3) {
              if (typeof tmp3.name === "string") {
                const _HermesInternal = HermesInternal;
                obj["content-disposition"] = obj["content-disposition"] + "; filename=\"" + closure_2_3(tmp3.name) + "\"";
              }
              if (typeof tmp3.type === "string") {
                obj["content-type"] = tmp3.type;
              }
              const _Object = Object;
              obj = {};
              obj.headers = obj;
              obj.fieldName = first;
              return Object.assign({}, tmp3, obj);
            }
          }
        }
        obj = { string: String(tmp3), headers: obj, fieldName: first };
        return obj;
      });
    }
  };
  items[2] = obj;
  return closure_2.default(FormData, items);
})();
