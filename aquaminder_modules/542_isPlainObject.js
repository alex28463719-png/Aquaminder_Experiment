// Module ID: 542
// Function ID: 6030
// Name: isPlainObject
// Dependencies: []

// Module 542 (isPlainObject)
arg5.deepFreeze = undefined;
arg5.isPlainObject = function isPlainObject(obj) {
  if (typeof obj === "object") {
    if (obj !== null) {
      const _Object = Object;
      const _Object2 = Object;
      return Object.getPrototypeOf(obj) === Object.prototype;
    }
  }
  return false;
};
arg5.deepFreeze = function deepFreeze(arg0) {
  return arg0;
};
