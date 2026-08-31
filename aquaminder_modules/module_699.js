// Module ID: 699
// Function ID: 7933
// Dependencies: []

// Module 699

export default {
  pick(defaultResult, backgroundColor, borderRadius, name, size, color) {
    closure_0 = defaultResult;
    const length = arguments.length;
    let num = 0;
    if (length > 1) {
      num = length - 1;
    }
    const array = new Array(num);
    for (let num2 = 1; num2 < length; num2 = num2 + 1) {
      array[num2 - 1] = arguments[num2];
    }
    const found = array.flat().filter((key10018) => {
      return hasOwnProperty.call(closure_0, key10018);
    });
    return found.reduce((arg0, arg1) => {
      arg0[arg1] = defaultResult[arg1];
      return arg0;
    }, {});
  },
  omit(defaultResult, keys, arg2, iconStyle, borderRadius, backgroundColor) {
    closure_0 = defaultResult;
    const length = arguments.length;
    let num = 0;
    if (length > 1) {
      num = length - 1;
    }
    const array = new Array(num);
    for (let num2 = 1; num2 < length; num2 = num2 + 1) {
      array[num2 - 1] = arguments[num2];
    }
    const set = new Set(array.flat());
    const ownPropertyNames = Object.getOwnPropertyNames(defaultResult);
    const found = ownPropertyNames.filter((arg0) => !set.has(arg0));
    return found.reduce((arg0, arg1) => {
      arg0[arg1] = defaultResult[arg1];
      return arg0;
    }, {});
  }
};
