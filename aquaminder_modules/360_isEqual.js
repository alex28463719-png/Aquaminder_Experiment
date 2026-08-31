// Module ID: 360
// Function ID: 4519
// Name: isEqual
// Dependencies: []

// Module 360 (isEqual)
function isEqual(arg0, arg1) {
  if (arg0 === arg1) {
    return true;
  } else {
    if (callback(arg0)) {
      if (callback(arg1)) {
        return true;
      }
    }
    return false;
  }
}
function areInputsEqual(arg0, arg1) {
  if (arg0.length !== arg1.length) {
    return false;
  } else {
    let num = 0;
    if (0 < arg0.length) {
      while (isEqual(arg0[num], arg1[num])) {
        num = num + 1;
      }
      return false;
    }
    return true;
  }
}
let closure_0 = Number.isNaN || (function ponyfill(num) {
  return typeof num === "number" && num !== num;
});

export default function memoizeOne(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  if (arg1 === undefined) {
    closure_1 = areInputsEqual;
  }
  closure_3 = [];
  c5 = false;
  return function memoized() {
    let length;
    const self = this;
    const items = [];
    let num = 0;
    if (0 < arguments.length) {
      do {
        items[num] = arguments[num];
        num = num + 1;
        length = arguments.length;
      } while (num < length);
    }
    if (c5) {
      if (self === self) {
        if (callback2(items, items)) {
          return applyResult;
        }
      }
    }
    applyResult = callback.apply(self, items);
    c5 = true;
    return applyResult;
  };
};
