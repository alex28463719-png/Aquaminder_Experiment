// Module ID: 65
// Function ID: 947
// Name: polyfillObjectProperty
// Dependencies: [42]

// Module 65 (polyfillObjectProperty)
import defineLazyObjectProperty from "defineLazyObjectProperty" /* 42 */;

const global = arg0;
require = arg1;
const dependencyMap = arg6;
function polyfillObjectProperty(_navigator, product, get) {
  const ownPropertyDescriptor = Object.getOwnPropertyDescriptor(_navigator, product);
  let obj = ownPropertyDescriptor;
  if (!ownPropertyDescriptor) {
    obj = {};
  }
  const configurable = obj.configurable;
  let flag = false;
  ({ enumerable, writable } = obj);
  if (configurable !== undefined) {
    flag = configurable;
  }
  if (ownPropertyDescriptor) {
    if (!flag) {
      const _console = console;
      console.error(`Failed to set polyfill. ${product} is not configurable.`);
    }
  }
  obj = { get, enumerable: enumerable !== false, writable: writable !== false };
  defineLazyObjectProperty.default(_navigator, product, obj);
}
arg5.polyfillGlobal = function polyfillGlobal(clearImmediate, get) {
  polyfillObjectProperty(global, clearImmediate, get);
};
arg5.polyfillObjectProperty = polyfillObjectProperty;
