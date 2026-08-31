// Module ID: 112
// Function ID: 1328
// Name: PixelRatio
// Dependencies: [1, 12, 13, 113]

// Module 112 (PixelRatio)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import module_1 from "module_1" /* 1 */;

let closure_2 = module_1(_classCallCheck);
let closure_3 = module_1(_defineProperties);

export default (() => {
  class PixelRatio {
    constructor() {
      defaultResult = closure_1_2.default(this, PixelRatio);
      return;
    }
  }
  let obj = {
    key: "get",
    value: function get() {
      return PixelRatio(closure_1_1[3]).default.get("window").scale;
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "getFontScale",
    value: function getFontScale() {
      let fontScale = PixelRatio(closure_1_1[3]).default.get("window").fontScale;
      if (!fontScale) {
        fontScale = PixelRatio.get();
      }
      return fontScale;
    }
  };
  items[1] = obj;
  obj = {
    key: "getPixelSizeForLayoutSize",
    value: function getPixelSizeForLayoutSize(arg0) {
      return Math.round(arg0 * PixelRatio.get());
    }
  };
  items[2] = obj;
  items[3] = {
    key: "roundToNearestPixel",
    value: function roundToNearestPixel(arg0) {
      const value = PixelRatio.get();
      return Math.round(arg0 * value) / value;
    }
  };
  items[4] = {
    key: "startDetecting",
    value: function startDetecting() {

    }
  };
  return closure_3.default(PixelRatio, null, items);
})();
