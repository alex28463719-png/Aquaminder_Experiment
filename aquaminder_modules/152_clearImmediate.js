// Module ID: 152
// Function ID: 1665
// Name: clearImmediate
// Dependencies: []

// Module 152 (clearImmediate)
const global = arg0;
arg5.clearImmediate = function clearImmediate(_updateImmediate) {
  set.add(_updateImmediate);
};
arg5.setImmediate = function setImmediate(_processUpdate) {
  const _global = _processUpdate;
  const length = arguments.length;
  let num = 0;
  if (length > 1) {
    num = length - 1;
  }
  const array = new Array(num);
  closure_1 = array;
  for (let num2 = 1; num2 < length; num2 = num2 + 1) {
    array[num2 - 1] = arguments[num2];
  }
  if (arguments.length < 1) {
    const _TypeError2 = TypeError;
    const typeError = new TypeError("setImmediate must be called with at least one argument (a function to call)");
    throw typeError;
  } else if (typeof _processUpdate !== "function") {
    const _TypeError = TypeError;
    const typeError1 = new TypeError("The first argument to setImmediate must be a function.");
    throw typeError1;
  } else {
    closure_1 = tmp3 + 1;
    if (+closure_1.has(+closure_1)) {
      set.delete(tmp3);
    }
    _global.queueMicrotask(() => {
      if (set.has(set)) {
        set.delete(set);
      } else {
        _processUpdate.apply(undefined, closure_1);
      }
    });
    return +closure_1;
  }
};
let c1 = 1;
const set = new Set();
