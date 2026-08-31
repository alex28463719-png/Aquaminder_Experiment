// Module ID: 161
// Function ID: 1739
// Name: _isNativeFunction
// Dependencies: []

// Module 161 (_isNativeFunction)

export default function _isNativeFunction(closure_1) {
  try {
    const _Function = Function;
    return -1 !== toString.call(closure_1).indexOf("[native code]");
  } catch (err) {
    return "function" === typeof tmp;
  }
};
