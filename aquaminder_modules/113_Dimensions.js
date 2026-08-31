// Module ID: 113
// Function ID: 1336
// Name: Dimensions
// Dependencies: [1, 12, 13, 22, 30, 114, 20]

// Module 113 (Dimensions)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import invariant from "invariant" /* 20 */;
import _callSuper2 from "_callSuper" /* 22 */;
import allocate2 from "allocate" /* 30 */;
import getConstants2 from "getConstants" /* 114 */;
import module_1 from "module_1" /* 1 */;

let closure_0 = module_1(_classCallCheck);
let closure_1 = module_1(_defineProperties);
const _callSuper = module_1(_callSuper2);
const allocate = module_1(allocate2);
const getConstants = module_1(getConstants2);
let closure_2 = module_1(invariant);
let _default = new allocate.default();
let c4 = false;
let obj = (() => {
  class Dimensions {
    constructor() {
      defaultResult = Dimensions.default(this, Dimensions);
      return;
    }
  }
  obj = {
    key: "get",
    value: function get(arg0) {
      closure_1_2.default(obj[arg0], `No dimension set for key ${arg0}`);
      return obj[arg0];
    }
  };
  const items = [obj, , ];
  obj = {
    key: "set",
    value: function set(screenPhysicalPixels) {
      ({ screen, window: _window, windowPhysicalPixels } = screenPhysicalPixels);
      if (windowPhysicalPixels) {
        obj = { width: windowPhysicalPixels.width / windowPhysicalPixels.scale, height: windowPhysicalPixels.height / windowPhysicalPixels.scale };
        ({ scale: obj.scale, fontScale: obj.fontScale } = windowPhysicalPixels);
        _window = obj;
      }
      screenPhysicalPixels = screenPhysicalPixels.screenPhysicalPixels;
      if (screenPhysicalPixels) {
        obj = { width: screenPhysicalPixels.width / screenPhysicalPixels.scale, height: screenPhysicalPixels.height / screenPhysicalPixels.scale };
        ({ scale: obj2.scale, fontScale: obj2.fontScale } = screenPhysicalPixels);
        screen = obj;
      } else if (screen == null) {
        screen = _window;
      }
      obj = { window: _window, screen };
      if (c4) {
        closure_1_3.emit("change", obj);
      } else {
        c4 = true;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "addEventListener",
    value: function addEventListener(arg0, arg1) {
      closure_1_2.default(arg0 === "change", "Trying to subscribe to unknown event: \"%s\"", arg0);
      return closure_1_3.addListener(arg0, arg1);
    }
  };
  items[2] = obj;
  return closure_1.default(Dimensions, null, items);
})();
_default = _callSuper.default;
_default.addListener("didUpdateDimensions", (arg0) => {
  const result = obj.set(arg0);
});
let result = obj.set(getConstants.default.getConstants().Dimensions);

export default obj;
