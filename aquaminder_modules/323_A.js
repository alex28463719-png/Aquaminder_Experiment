// Module ID: 323
// Function ID: 3888
// Name: A
// Dependencies: []

// Module 323 (A)
function A(arg0, arg1) {
  return 1 - 3 * arg1 + 3 * arg0;
}
function B(arg0, arg1) {
  return 3 * arg1 - 6 * arg0;
}
function C(arg0) {
  return 3 * arg0;
}
function calcBezier(diff, arg1, arg2) {
  const result = A(arg1, arg2) * diff;
  const result1 = (result + B(arg1, arg2)) * diff;
  return (result1 + C(arg1)) * diff;
}
function getSlope(diff, arg1, arg2) {
  const result = 3 * A(arg1, arg2) * diff * diff;
  const result1 = 2 * B(arg1, arg2) * diff;
  return result + result1 + C(arg1);
}
function binarySubdivide(arg0, arg1, arg2, arg3, arg4) {
  let sum;
  let tmp = arg1;
  let tmp2 = arg2;
  let num = 0;
  while (true) {
    sum = tmp + (tmp2 - tmp) / 2;
    let tmp4 = calcBezier;
    let diff = calcBezier(sum, arg3, arg4) - arg0;
    let tmp6 = num;
    let tmp7 = tmp;
    let tmp8 = tmp2;
    let tmp9 = sum;
    if (diff <= 0) {
      tmp7 = sum;
      tmp9 = tmp2;
    }
    let _Math = Math;
    let tmp10 = c2;
    if (Math.abs(diff) <= c2) {
      break;
    } else {
      num = num + 1;
      let tmp11 = c3;
      tmp = tmp7;
      tmp2 = tmp9;
      if (num >= c3) {
        break;
      }
    }
  }
  return sum;
}
function newtonRaphsonIterate(arg0, diff) {
  let num = 0;
  let tmp2 = diff;
  if (0 < c0) {
    const tmp4 = getSlope(diff, arg2, arg3);
    while (tmp4 !== 0) {
      let tmp7 = calcBezier;
      diff = diff - (calcBezier(diff, arg2, arg3) - arg0) / tmp4;
      num = num + 1;
      let tmp8 = c0;
      tmp2 = diff;
    }
    return diff;
  }
  return tmp2;
}
arg5.default = function bezier(arg0, arg1, arg2, arg3) {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  closure_3 = arg3;
  function getTForX(arg0) {
    let num = 0;
    let num2 = 1;
    let num3 = 0;
    let num4 = 1;
    if (float32Array[1] <= arg0) {
      const sum = num + getTForX;
      const sum1 = num2 + 1;
      num3 = sum;
      num4 = sum1;
      while (sum1 !== 10) {
        let tmp4 = float32Array;
        num = sum;
        num2 = sum1;
        num3 = sum;
        num4 = sum1;
        if (float32Array[sum1] > arg0) {
          break;
        }
      }
    }
    const diff = num4 - 1;
    const sum2 = num3 + (arg0 - float32Array[diff]) / (float32Array[diff + 1] - float32Array[diff]) * getTForX;
    const tmp7 = closure_1_11(sum2, closure_0, closure_2);
    if (tmp7 >= closure_1) {
      return closure_1_13(arg0, sum2, closure_0, closure_2);
    } else if (tmp7 === 0) {
      return sum2;
    } else {
      return closure_1_12(arg0, num3, num3 + getTForX, closure_0, closure_2);
    }
  }
  if (arg0 >= 0) {
    if (arg0 <= 1) {
      if (arg2 >= 0) {
        if (arg2 <= 1) {
          if (closure_6) {
            const _Float32Array = Float32Array;
            float32Array = new Float32Array(float32Array);
          } else {
            const _Array = Array;
            float32Array = new Array(float32Array);
          }
          if (arg0 !== arg1) {
            let num2 = 0;
            if (0 < float32Array) {
              do {
                let tmp12 = calcBezier;
                let tmp13 = getTForX;
                float32Array[num2] = calcBezier(num2 * getTForX, arg0, arg2);
                num2 = num2 + 1;
                let tmp14 = float32Array;
              } while (num2 < float32Array);
            }
          }
          return function BezierEasing(arg0) {
            if (closure_0 === closure_1) {
              if (closure_2 === closure_3) {
                return arg0;
              }
            }
            if (arg0 === 0) {
              return 0;
            } else if (arg0 === 1) {
              return 1;
            } else {
              return closure_1_10(getTForX(arg0), closure_1, closure_3);
            }
          };
        }
      }
    }
  }
  const error = new Error("bezier x values must be in [0, 1] range");
  throw error;
};
let c0 = 4;
let c1 = 0.001;
let c2 = 0.0000001;
let c3 = 10;
let c4 = 11;
let c5 = 0.1;
let closure_6 = typeof Float32Array === "function";
