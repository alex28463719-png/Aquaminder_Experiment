// Module ID: 307
// Function ID: 3588
// Name: shouldUseTurboAnimatedModule
// Dependencies: [1, 33]
// Exports: default

// Module 307 (shouldUseTurboAnimatedModule)
import get_Version from "get Version" /* 33 */;
import module_1 from "module_1" /* 1 */;

let closure_1 = module_1(get_Version);

export default function shouldUseTurboAnimatedModule() {
  let tmp = mod.default.OS === "ios";
  if (tmp) {
    tmp = global.RN$Bridgeless === true;
  }
  return tmp;
};
