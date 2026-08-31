// Module ID: 90
// Function ID: 1228
// Name: normalizeColor
// Dependencies: [1, 91, 92]
// Exports: default

// Module 90 (normalizeColor)
import hue2rgb from "hue2rgb" /* 91 */;
import PlatformColor from "PlatformColor" /* 92 */;
import module_1 from "module_1" /* 1 */;

let closure_2 = module_1(hue2rgb);

export default function normalizeColor(arg0) {
  if (typeof arg0 === "object") {
    if (arg0 != null) {
      const normalizeColorObjectResult = PlatformColor.normalizeColorObject(arg0);
      if (normalizeColorObjectResult != null) {
        return normalizeColorObjectResult;
      }
    }
  }
  return closure_2.default(arg0);
};
