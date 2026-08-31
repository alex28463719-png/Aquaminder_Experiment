// Module ID: 71
// Function ID: 1010
// Name: createNodeList
// Dependencies: [1, 12, 13, 31, 32, 69]
// Exports: createNodeList

// Module 71 (createNodeList)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _classPrivateFieldBase from "_classPrivateFieldBase" /* 31 */;
import _classPrivateFieldKey from "_classPrivateFieldKey" /* 32 */;
import module_1 from "module_1" /* 1 */;

let closure_2 = module_1(_classCallCheck);
let closure_3 = module_1(_defineProperties);
let closure_4 = module_1(_classPrivateFieldBase);
let closure_5 = module_1(_classPrivateFieldKey).default("length");
let tmp3 = (() => {
  class NodeList {
    constructor(arg0) {
      self = this;
      defaultResult = closure_1_2.default(this, NodeList);
      definePropertyResult = Object.defineProperty(this, closure_1_5, { writable: true, value: undefined });
      num = 0;
      if (0 < arg0.length) {
        do {
          _Object = Object;
          obj = {};
          obj.value = arg0[num];
          obj.writable = false;
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
  const items = [obj, , , , , , ];
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
    key: "entries",
    value: function entries() {
      return NodeList(closure_1_1[5]).createEntriesIterator(this);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "forEach",
    value: function forEach(call, closure_1) {
      const self = this;
      let num = 0;
      if (0 < closure_1_4.default(this, closure_1_5)[closure_1_5]) {
        do {
          if (closure_1 == null) {
            let tmp7 = call(self[num], num, self);
          } else {
            let tmp2 = call;
            let tmp3 = closure_1;
            let tmp4 = num;
            let tmp5 = self;
            let callResult = call.call(closure_1, self[num], tmp, self);
          }
          num = num + 1;
          let tmp8 = closure_1_4;
          let tmp9 = closure_1_5;
        } while (num < closure_1_4.default(self, closure_1_5)[closure_1_5]);
      }
    }
  };
  items[4] = {
    key: "keys",
    value: function keys() {
      return NodeList(closure_1_1[5]).createKeyIterator(this);
    }
  };
  items[5] = {
    key: "values",
    value: function values() {
      return NodeList(closure_1_1[5]).createValueIterator(this);
    }
  };
  items[6] = {
    key: Symbol.iterator,
    value() {
      return NodeList(closure_1_1[5]).createValueIterator(this);
    }
  };
  return closure_3.default(NodeList, items);
})();
let closure_6 = tmp3;

export function createNodeList(arg0) {
  return new closure_6(arg0);
}
export default tmp3;
