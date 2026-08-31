// Module ID: 23
// Function ID: 281
// Name: _possibleConstructorReturn
// Dependencies: [16, 24]

// Module 23 (_possibleConstructorReturn)
import _assertThisInitialized from "_assertThisInitialized" /* 24 */;


export default function _possibleConstructorReturn(arg0, arg1) {
  if (arg1) {
    return arg1;
  }
  if (undefined !== arg1) {
    const _TypeError = TypeError;
    const typeError = new TypeError("Derived constructors may only return object or undefined");
    throw typeError;
  } else {
    return _assertThisInitialized(arg0);
  }
};
