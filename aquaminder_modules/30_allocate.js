// Module ID: 30
// Function ID: 298
// Name: allocate
// Dependencies: [1, 12, 13, 31, 32]

// Module 30 (allocate)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _classPrivateFieldBase from "_classPrivateFieldBase" /* 31 */;
import _classPrivateFieldKey from "_classPrivateFieldKey" /* 32 */;
import module_1 from "module_1" /* 1 */;

function allocate(arg0, arg1) {
  let tmp = arg0[arg1];
  if (tmp == null) {
    const _Set = Set;
    const set = new Set();
    arg0[arg1] = set;
    tmp = set;
  }
  return tmp;
}
let closure_0 = module_1(_classCallCheck);
let closure_1 = module_1(_defineProperties);
let closure_2 = module_1(_classPrivateFieldBase);
let closure_3 = module_1(_classPrivateFieldKey).default("registry");

export default (() => {
  class EventEmitter {
    constructor() {
      defaultResult = EventEmitter.default(this, EventEmitter);
      definePropertyResult = Object.defineProperty(this, closure_1_3, { writable: true, value: {} });
      return;
    }
  }
  let obj = {
    key: "addListener",
    value: function addListener(arg0, fn, context) {
      if (typeof fn !== "function") {
        const _TypeError = TypeError;
        const typeError = new TypeError("EventEmitter.addListener(...): 2nd argument must be a function.");
        throw typeError;
      } else {
        const self = this;
        let obj = closure_1_4(closure_1_2.default(this, closure_1_3)[closure_1_3], arg0);
        obj = {
          context,
          listener: fn,
          remove() {
              obj.delete(obj);
            }
        };
        obj.add(obj);
        return obj;
      }
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "emit",
    value: function emit(arg0) {
      const tmp = closure_1_2.default(this, closure_1_3)[closure_1_3][arg0];
      if (tmp != null) {
        const length = arguments.length;
        let _Array2 = Array;
        let num = 0;
        if (length > 1) {
          num = length - 1;
        }
        const prototype = _Array2.prototype;
        _Array2 = new _Array2(num);
        for (let num2 = 1; num2 < length; num2 = num2 + 1) {
          let tmp7 = _Array2;
          tmp6[num2 - 1] = arguments[num2];
        }
        const _Array = Array;
        const arr = Array.from(tmp);
        for (const item10029 of arr) {
          let listener = item10029.listener;
          let tmp10 = _Array2;
          let applyResult = listener.apply(item10029.context, tmp6);
          continue;
        }
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "removeAllListeners",
    value: function removeAllListeners(arg0) {
      const self = this;
      if (arg0 == null) {
        closure_1_2.default(self, closure_1_3)[closure_1_3] = {};
      } else {
        closure_1_2.default(self, closure_1_3)[closure_1_3];
        delete tmp[tmp2];
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "listenerCount",
    value: function listenerCount(arg0) {
      const tmp = closure_1_2.default(this, closure_1_3)[closure_1_3][arg0];
      let num = 0;
      if (tmp != null) {
        num = tmp.size;
      }
      return num;
    }
  };
  return closure_1.default(EventEmitter, items);
})();
