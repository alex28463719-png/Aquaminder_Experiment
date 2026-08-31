// Module ID: 253
// Function ID: 2653
// Name: setStyleAttributePreprocessor
// Dependencies: [1, 254, 128, 112, 93]

// Module 253 (setStyleAttributePreprocessor)
import flag from "flag" /* 93 */;
import PixelRatio from "PixelRatio" /* 112 */;
import flattenStyle2 from "flattenStyle" /* 128 */;
import composeStyles2 from "composeStyles" /* 254 */;
import module_1 from "module_1" /* 1 */;

const composeStyles = module_1(composeStyles2);
const flattenStyle = module_1(flattenStyle2);
let roundToNearestPixelResult = PixelRatio.default.roundToNearestPixel(0.4);
if (roundToNearestPixelResult === 0) {
  roundToNearestPixelResult = 1 / PixelRatio.default.get();
  const _default2 = PixelRatio.default;
}
let obj = { position: "absolute", left: 0, right: 0, top: 0, bottom: 0 };
obj = { hairlineWidth: roundToNearestPixelResult };
obj.absoluteFill = obj;
obj.absoluteFillObject = obj;
obj.compose = composeStyles.default;
obj.flatten = flattenStyle.default;
obj.setStyleAttributePreprocessor = function setStyleAttributePreprocessor(arg0, process) {
  if (flag.default[arg0] === true) {
    let obj = { process };
    let merged = obj;
  } else if (typeof flag.default[arg0] === "object") {
    const _Object = Object;
    obj = { process };
    merged = Object.assign({}, flag.default[arg0], obj);
  } else {
    const _console = console;
    const _HermesInternal = HermesInternal;
    console.error("" + arg0 + " is not a valid style attribute");
  }
  flag.default[arg0] = merged;
};
obj.create = function create(arg0) {
  return arg0;
};

export default obj;
