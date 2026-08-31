// Module ID: 68
// Function ID: 988
// Name: createDOMRectList
// Dependencies: [1, 12, 13, 31, 32, 69]
// Exports: createDOMRectList

// Module 68 (createDOMRectList)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _classPrivateFieldBase from "_classPrivateFieldBase" /* 31 */;
import _classPrivateFieldKey from "_classPrivateFieldKey" /* 32 */;
import module_1 from "module_1" /* 1 */;

let closure_2 = module_1(_classCallCheck);
let closure_3 = module_1(_defineProperties);
let closure_4 = module_1(_classPrivateFieldBase);
let closure_5 = module_1(_classPrivateFieldKey).default("length");
const tmp3 = (() => {
  class DOMRectList {
    constructor(arg0) {
      self = this;
      defaultResult = closure_1_2.default(this, DOMRectList);
      definePropertyResult = Object.defineProperty(this, closure_1_5, { writable: true, value: undefined });
      num = 0;
      if (0 < arg0.length) {
        do {
          _Object = Object;
          obj = { value: null, enumerable: true, configurable: false, writable: false };
          obj.value = arg0[num];
          definePropertyResult1 = Object.defineProperty(self, num, obj);
          num = num + 1;
          length = arg0.length;
        } while (num < length);
      }
      closure_1_4.default(self, closure_1_5)[closure_1_5] = arg0.length;
      return;
    }
  }
  let obj = {
    key: "length",
    get() {
      return closure_1_4.default(this, closure_1_5)[closure_1_5];
    }
  };
  const items = [obj, , ];
  obj = {
    key: "item",
    value: function item(arg0) {
      const self = this;
      if (arg0 >= 0) {
        if (arg0 < closure_1_4.default(self, closure_1_5)[closure_1_5]) {
          return self[arg0];
        }
      }
      return null;
    }
  };
  items[1] = obj;
  obj = {
    key: Symbol.iterator,
    value() {
      return DOMRectList(closure_1_1[5]).createValueIterator(this);
    }
  };
  items[2] = obj;
  return closure_3.default(DOMRectList, items);
})();
let closure_6 = tmp3;

export function createDOMRectList(arg0) {
  return new closure_6(arg0);
}
export default tmp3;
