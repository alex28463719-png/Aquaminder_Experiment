// Module ID: 897
// Function ID: 9667
// Name: processFonts
// Dependencies: [1, 93]
// Exports: processFonts

// Module 897 (processFonts)
import flag from "flag" /* 93 */;
import module_1 from "module_1" /* 1 */;

let closure_0 = module_1(flag);

export function processFonts(items3) {
  const fontFamily = mod.default.fontFamily;
  let _process;
  if (fontFamily != null) {
    _process = fontFamily.process;
  }
  if (typeof _process === "function") {
    return items3.map(_process);
  } else {
    return items3;
  }
}
