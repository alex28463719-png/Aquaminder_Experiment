// Module ID: 663
// Function ID: 7221
// Name: convertError
// Dependencies: []

// Module 663 (convertError)
function convertError(message) {
  if (message) {
    const _Error = Error;
    const error = new Error(message.message);
    error.key = message.key;
    return error;
  } else {
    return null;
  }
}
function ensureArray(arg0) {
  if (Array.isArray(arg0)) {
    let tmp2 = null;
    if (arg0.length !== 0) {
      tmp2 = arg0;
    }
    return tmp2;
  } else if (arg0) {
    const items = [arg0];
    return items;
  } else {
    return null;
  }
}
arg5.checkValidArgs = function checkValidArgs(closure_0, fn) {
  if (Array.isArray(closure_0)) {
    if (closure_0.length !== 0) {
      const _Array = Array;
      if (Array.isArray(closure_0[0])) {
        if (fn) {
          if (typeof fn !== "function") {
            const _Array2 = Array;
            let _Error = Error;
            if (Array.isArray(fn)) {
              _Error = new _Error("[AsyncStorage] Expected function as second argument to multiSet. Did you forget to wrap key-value pairs in an array for the first argument?");
              throw _Error;
            } else {
              const _Error1 = new _Error("[AsyncStorage] Expected function as second argument to multiSet");
              throw _Error1;
            }
          }
        }
      }
    }
  }
  const error = new Error("[AsyncStorage] Expected array of key-value pairs as first argument to multiSet");
  throw error;
};
arg5.checkValidInput = function checkValidInput(closure_0, closure_1) {
  const length = arguments.length;
  const arr = new Array(length);
  for (let num = 0; num < length; num = num + 1) {
    arr[num] = arguments[num];
  }
  const first = arr[0];
  if (typeof first !== "string") {
    const _console = console;
    const _HermesInternal = HermesInternal;
    console.warn("[AsyncStorage] Using " + tmp3 + " type for key is not supported. This can lead to unexpected behavior/errors. Use string instead.\nKey passed: " + first + "\n");
  }
  if (arr.length > 1) {
    if (typeof tmp2 !== "string") {
      if (tmp2 == null) {
        const _Error = Error;
        const _HermesInternal3 = HermesInternal;
        const error = new Error("[AsyncStorage] Passing null/undefined as value is not supported. If you want to remove value, Use .removeItem method instead.\nPassed value: " + tmp2 + "\nPassed key: " + first + "\n");
        throw error;
      } else {
        const _console2 = console;
        const _HermesInternal2 = HermesInternal;
        console.warn("[AsyncStorage] The value for key \"" + first + "\" is not a string. This can lead to unexpected behavior/errors. Consider stringifying it.\nPassed value: " + tmp2 + "\nPassed key: " + first + "\n");
      }
    }
  }
};
arg5.convertError = convertError;
arg5.convertErrors = function convertErrors(arg0) {
  const arr = ensureArray(arg0);
  let mapped = null;
  if (arr) {
    mapped = arr.map((arg0) => closure_1_0(arg0));
  }
  return mapped;
};
