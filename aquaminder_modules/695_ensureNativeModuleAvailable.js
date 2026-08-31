// Module ID: 695
// Function ID: 7913
// Name: ensureNativeModuleAvailable
// Dependencies: [1, 696]
// Exports: default

// Module 695 (ensureNativeModuleAvailable)
import RNVectorIcons from "RNVectorIcons" /* 696 */;
import module_1 from "module_1" /* 1 */;

let closure_0 = module_1(RNVectorIcons);

export default function ensureNativeModuleAvailable() {
  if (!mod.default) {
    const _Error = Error;
    const error = new Error("The native RNVectorIcons API is not available, did you properly integrate the module? Please verify your autolinking setup and recompile.");
    throw error;
  }
};
