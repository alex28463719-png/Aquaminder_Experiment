// Module ID: 134
// Function ID: 1512
// Name: _readOnlyError
// Dependencies: []

// Module 134 (_readOnlyError)

export default function _readOnlyError(arg0) {
  const typeError = new TypeError("\"" + arg0 + "\" is read-only");
  throw typeError;
};
