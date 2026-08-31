// Module ID: 510
// Function ID: 5740
// Name: Descriptor
// Dependencies: [1, 363, 12, 13]

// Module 510 (Descriptor)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 363 */;
import module_1 from "module_1" /* 1 */;

let closure_0 = module_1(asyncGeneratorStep);
let closure_1 = module_1(_classCallCheck);
let closure_2 = module_1(_defineProperties);

export const Descriptor = (() => {
  class Descriptor {
    constructor(arg0, arg1) {
      defaultResult = closure_1_1.default(this, Descriptor);
      merged = Object.assign(this, arg0);
      obj = { value: arg1, enumerable: false };
      definePropertyResult = Object.defineProperty(this, "_manager", obj);
      return;
    }
  }
  let obj = {
    key: "read",
    value: (() => {
      closure_0 = Descriptor.default(async function(arg0) {
        const self = this;
        if (obj) {
          return obj.resume();
        } else {
          const _manager = self._manager;
          return _manager._readDescriptor(self.id, arg0);
        }
      });
      return function read(arg0) {
        return callback(...arguments);
      };
    })()
  };
  const items = [obj, ];
  obj = {
    key: "write",
    value: (() => {
      closure_0 = Descriptor.default(async function(arg0, arg1) {
        const self = this;
        if (obj) {
          return obj.resume();
        } else {
          const _manager = self._manager;
          return _manager._writeDescriptor(self.id, arg0, arg1);
        }
      });
      return function write(arg0, arg1) {
        return callback(...arguments);
      };
    })()
  };
  items[1] = obj;
  return closure_2.default(Descriptor, items);
})();
