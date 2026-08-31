// Module ID: 129
// Function ID: 1468
// Name: deepDiffer
// Dependencies: []

// Module 129 (deepDiffer)
function deepDiffer(name, fn, closure_50, arg3) {
  let num = -1;
  let num2 = -1;
  if (arguments.length > 2) {
    num2 = num;
    if (arguments[2] !== undefined) {
      num2 = arguments[2];
    }
  }
  if (arguments.length > 3) {
    const tmp = arguments[3];
  }
  let tmp3 = num2;
  if (typeof num2 === "number") {
    tmp3 = tmp;
  }
  if (typeof num2 === "number") {
    num = num2;
  }
  if (num === 0) {
    return true;
  } else if (name === fn) {
    return false;
  } else {
    if (typeof name === "function") {
      if (typeof fn === "function") {
        let flag8;
        if (tmp3 != null) {
          flag8 = tmp3.unsafelyIgnoreFunctions;
        }
        if (flag8 == null) {
          flag8 = true;
          if (closure_0) {
            flag8 = true;
            if (closure_0.onDifferentFunctionsIgnored) {
              if (!tmp3) {
                const result = closure_0.onDifferentFunctionsIgnored(name.name, fn.name);
                flag8 = true;
              } else {
                flag8 = true;
              }
            }
          }
        }
        return !flag8;
      }
    }
    if (typeof name === "object") {
      if (name !== null) {
        if (typeof fn === "object") {
          if (fn !== null) {
            if (name.constructor !== fn.constructor) {
              return true;
            } else {
              const _Array = Array;
              if (Array.isArray(name)) {
                if (fn.length !== name.length) {
                  return true;
                } else {
                  let num5 = 0;
                  if (0 < length) {
                    while (!deepDiffer(name[num5], fn[num5], num - 1, tmp3)) {
                      num5 = num5 + 1;
                    }
                    return true;
                  }
                }
              } else {
                for (const key10024 in arg0) {
                  let tmp17 = key10024;
                  let tmp18 = deepDiffer;
                  let tmp19 = tmp3;
                  if (!deepDiffer(arg0[key10024], arg1[key10024], num - 1, tmp3)) {
                    continue;
                  } else {
                    let flag = true;
                    return true;
                  }
                }
                for (const key10028 in arg1) {
                  let tmp20 = key10028;
                  if (arg0[key10028] !== undefined) {
                    continue;
                  } else if (arg1[key10028] === undefined) {
                    continue;
                  } else {
                    let flag2 = true;
                    return true;
                  }
                  continue;
                }
              }
              return false;
            }
          }
        }
        return true;
      }
    }
    return name !== fn;
  }
}
arg5.default = undefined;
deepDiffer.unstable_setLogListeners = function unstable_setLogListeners(arg0) {
  closure_0 = arg0;
};
arg5.default = deepDiffer;
