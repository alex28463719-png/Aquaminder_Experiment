// Module ID: 31
// Function ID: 307
// Name: _classPrivateFieldBase
// Dependencies: []

// Module 31 (_classPrivateFieldBase)

export default function _classPrivateFieldBase(closure_1, key10018) {
  const hasOwnProperty = {}.hasOwnProperty;
  if (hasOwnProperty.call(closure_1, key10018)) {
    return closure_1;
  } else {
    const _TypeError = TypeError;
    const typeError = new TypeError("attempted to use private field on non-instance");
    throw typeError;
  }
};
