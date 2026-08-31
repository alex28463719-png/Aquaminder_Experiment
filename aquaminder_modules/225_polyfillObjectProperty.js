// Module ID: 225
// Function ID: 2510
// Name: polyfillObjectProperty
// Dependencies: [65]

// Module 225 (polyfillObjectProperty)
import polyfillObjectProperty from "polyfillObjectProperty" /* 65 */;

const _navigator = global.navigator;
if (_navigator === undefined) {
  const obj = { product: "ReactNative" };
  global.navigator = obj;
} else {
  const _module = polyfillObjectProperty;
  const result = _module.polyfillObjectProperty(_navigator, "product", () => "ReactNative");
}
