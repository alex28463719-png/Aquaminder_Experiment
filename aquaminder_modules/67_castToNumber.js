// Module ID: 67
// Function ID: 966
// Name: castToNumber
// Dependencies: [1, 12, 13, 31, 32]

// Module 67 (castToNumber)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _classPrivateFieldBase from "_classPrivateFieldBase" /* 31 */;
import _classPrivateFieldKey2 from "_classPrivateFieldKey" /* 32 */;
import module_1 from "module_1" /* 1 */;

function castToNumber(arg0) {
  let num = 0;
  if (arg0) {
    const _Number = Number;
    num = Number(arg0);
  }
  return num;
}
let closure_0 = module_1(_classCallCheck);
let closure_1 = module_1(_defineProperties);
let closure_2 = module_1(_classPrivateFieldBase);
const _classPrivateFieldKey = module_1(_classPrivateFieldKey2);
const field = _classPrivateFieldKey.default("x");
const field2 = _classPrivateFieldKey.default("y");
const field3 = _classPrivateFieldKey.default("width");
const field4 = _classPrivateFieldKey.default("height");

export default (() => {
  class DOMRectReadOnly {
    constructor(arg0, arg1, arg2, arg3) {
      defaultResult = DOMRectReadOnly.default(this, DOMRectReadOnly);
      definePropertyResult = Object.defineProperty(this, closure_1_3, { writable: true, value: undefined });
      definePropertyResult1 = Object.defineProperty(this, closure_1_4, { writable: true, value: undefined });
      definePropertyResult2 = Object.defineProperty(this, closure_1_5, { writable: true, value: undefined });
      definePropertyResult3 = Object.defineProperty(this, closure_1_6, { writable: true, value: undefined });
      __setInternalXResult = this.__setInternalX(arg0);
      __setInternalYResult = this.__setInternalY(arg1);
      __setInternalWidthResult = this.__setInternalWidth(arg2);
      __setInternalHeightResult = this.__setInternalHeight(arg3);
      return;
    }
  }
  let obj = {
    key: "x",
    get() {
      return closure_1_2.default(this, closure_1_3)[closure_1_3];
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , ];
  obj = {
    key: "y",
    get() {
      return closure_1_2.default(this, closure_1_4)[closure_1_4];
    }
  };
  items[1] = obj;
  obj = {
    key: "width",
    get() {
      return closure_1_2.default(this, closure_1_5)[closure_1_5];
    }
  };
  items[2] = obj;
  items[3] = {
    key: "height",
    get() {
      return closure_1_2.default(this, closure_1_6)[closure_1_6];
    }
  };
  items[4] = {
    key: "top",
    get() {
      const tmp = closure_1_2.default(this, closure_1_6)[closure_1_6];
      const tmp2 = closure_1_2.default(this, closure_1_4)[closure_1_4];
      return tmp < 0 ? tmp2 + tmp : tmp2;
    }
  };
  items[5] = {
    key: "right",
    get() {
      const tmp = closure_1_2.default(this, closure_1_5)[closure_1_5];
      const tmp2 = closure_1_2.default(this, closure_1_3)[closure_1_3];
      return tmp < 0 ? tmp2 : tmp2 + tmp;
    }
  };
  items[6] = {
    key: "bottom",
    get() {
      const tmp = closure_1_2.default(this, closure_1_6)[closure_1_6];
      const tmp2 = closure_1_2.default(this, closure_1_4)[closure_1_4];
      return tmp < 0 ? tmp2 : tmp2 + tmp;
    }
  };
  items[7] = {
    key: "left",
    get() {
      const tmp = closure_1_2.default(this, closure_1_5)[closure_1_5];
      const tmp2 = closure_1_2.default(this, closure_1_3)[closure_1_3];
      return tmp < 0 ? tmp2 + tmp : tmp2;
    }
  };
  items[8] = {
    key: "toJSON",
    value: function toJSON() {
      return { x: this.x, y: this.y, width: this.width, height: this.height, top: this.top, left: this.left, bottom: this.bottom, right: this.right };
    }
  };
  items[9] = {
    key: "__getInternalX",
    value: function __getInternalX() {
      return closure_1_2.default(this, closure_1_3)[closure_1_3];
    }
  };
  items[10] = {
    key: "__getInternalY",
    value: function __getInternalY() {
      return closure_1_2.default(this, closure_1_4)[closure_1_4];
    }
  };
  items[11] = {
    key: "__getInternalWidth",
    value: function __getInternalWidth() {
      return closure_1_2.default(this, closure_1_5)[closure_1_5];
    }
  };
  items[12] = {
    key: "__getInternalHeight",
    value: function __getInternalHeight() {
      return closure_1_2.default(this, closure_1_6)[closure_1_6];
    }
  };
  items[13] = {
    key: "__setInternalX",
    value: function __setInternalX(arg0) {
      closure_1_2.default(this, closure_1_3)[closure_1_3] = closure_1_7(arg0);
    }
  };
  items[14] = {
    key: "__setInternalY",
    value: function __setInternalY(arg0) {
      closure_1_2.default(this, closure_1_4)[closure_1_4] = closure_1_7(arg0);
    }
  };
  items[15] = {
    key: "__setInternalWidth",
    value: function __setInternalWidth(arg0) {
      closure_1_2.default(this, closure_1_5)[closure_1_5] = closure_1_7(arg0);
    }
  };
  items[16] = {
    key: "__setInternalHeight",
    value: function __setInternalHeight(arg0) {
      closure_1_2.default(this, closure_1_6)[closure_1_6] = closure_1_7(arg0);
    }
  };
  const items1 = [
    {
      key: "fromRect",
      value: function fromRect(arg0) {
        let tmp = DOMRectReadOnly;
        if (arg0) {
          const prototype2 = tmp.prototype;
          tmp = new tmp(arg0.x, arg0.y, arg0.width, arg0.height);
          return tmp;
        } else {
          const prototype = tmp.prototype;
          tmp = new tmp();
          return tmp;
        }
      }
    }
  ];
  return closure_1.default(DOMRectReadOnly, items, items1);
})();
