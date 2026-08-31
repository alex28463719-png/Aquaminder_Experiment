// Module ID: 28
// Function ID: 293
// Name: _inherits
// Dependencies: [29]

// Module 28 (_inherits)
import _setPrototypeOf from "_setPrototypeOf" /* 29 */;


export default function _inherits(value) {
  if ("function" !== typeof arg1) {
    if (null !== arg1) {
      const _TypeError = TypeError;
      const typeError = new TypeError("Super expression must either be null or a function");
      throw typeError;
    }
  }
  let prototype = arg1;
  if (arg1) {
    prototype = arg1.prototype;
  }
  const obj = { value, writable: true, configurable: true };
  value.prototype = Object.create(prototype, { constructor: obj });
  Object.defineProperty(value, "prototype", { writable: false });
  if (arg1) {
    _setPrototypeOf(value, arg1);
  }
};
