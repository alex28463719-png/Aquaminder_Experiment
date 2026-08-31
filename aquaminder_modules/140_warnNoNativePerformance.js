// Module ID: 140
// Function ID: 1564
// Name: warnNoNativePerformance
// Dependencies: [1, 141]
// Exports: warnNoNativePerformance

// Module 140 (warnNoNativePerformance)
import warnOnce from "warnOnce" /* 141 */;
import module_1 from "module_1" /* 1 */;

let closure_0 = module_1(warnOnce);

export function warnNoNativePerformance() {
  closure_0.default("missing-native-performance", "Missing native implementation of Performance");
}
