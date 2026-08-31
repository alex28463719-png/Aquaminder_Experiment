// Module ID: 145
// Function ID: 1596
// Name: polyfillObjectProperty
// Dependencies: [65, 146]

// Module 145 (polyfillObjectProperty)
import polyfillObjectProperty from "polyfillObjectProperty" /* 65 */;

if (global != null) {
  const _HermesInternal = global.HermesInternal;
}
polyfillObjectProperty.polyfillGlobal("Promise", () => require(146).default);
