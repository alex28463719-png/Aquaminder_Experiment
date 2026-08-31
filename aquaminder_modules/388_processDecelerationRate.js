// Module ID: 388
// Function ID: 4743
// Name: processDecelerationRate
// Dependencies: [1, 33]
// Exports: default

// Module 388 (processDecelerationRate)
import get_Version from "get Version" /* 33 */;
import module_1 from "module_1" /* 1 */;

let closure_0 = module_1(get_Version);

export default function processDecelerationRate(arg0) {
  if (arg0 === "normal") {
    return mod.default.select({ ios: 0.998, android: 0.985 });
  } else if (arg0 === "fast") {
    return mod.default.select({ ios: 0.99, android: 0.9 });
  } else {
    return arg0;
  }
};
