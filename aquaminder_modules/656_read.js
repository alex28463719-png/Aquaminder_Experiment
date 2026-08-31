// Module ID: 656
// Function ID: 7120
// Name: read
// Dependencies: []

// Module 656 (read)
arg5.read = (arg0, arg1, arg2, arg3, arg4) => {
  let num = 1;
  const diff = arg4 * 8 - arg3 - 1;
  const diff1 = (1 << diff) - 1;
  let num2 = 0;
  if (arg2) {
    num2 = arg4 - num;
  }
  let num3 = num;
  if (arg2) {
    num3 = -1;
  }
  const sum = num2 + num3;
  let sum2 = tmp4 & 127;
  let sum1 = -7 + diff;
  let sum3 = sum;
  let tmp10 = sum2;
  let sum6 = sum;
  let tmp12 = sum1;
  if (sum1 > 0) {
    do {
      sum2 = sum2 * 256 + arg0[arg1 + sum3];
      sum3 = sum3 + num3;
      sum1 = sum1 - 8;
      tmp10 = sum2;
      sum6 = sum3;
      tmp12 = sum1;
    } while (sum1 > 0);
  }
  let sum4 = tmp12 + arg3;
  let sum5 = tmp14;
  let tmp18 = tmp14;
  if (sum4 > 0) {
    do {
      sum5 = sum5 * 256 + arg0[arg1 + sum6];
      sum6 = sum6 + num3;
      sum4 = sum4 - 8;
      tmp18 = sum5;
    } while (sum4 > 0);
  }
  if (tmp10 >> -tmp12 === 0) {
    let diff2 = num - tmp3;
    let sum7 = tmp18;
  } else if (tmp15 === diff1) {
    if (tmp18) {
      let _NaN = NaN;
    } else {
      let num5 = num;
      if (tmp7) {
        num5 = -1;
      }
      const _Infinity = Infinity;
      _NaN = num5 * Infinity;
    }
    return _NaN;
  } else {
    const _Math = Math;
    sum7 = tmp18 + Math.pow(2, arg3);
    diff2 = tmp15 - tmp3;
  }
  if (arg0[arg1 + num2] >> 7) {
    num = -1;
  }
  return num * sum7 * Math.pow(2, diff2 - arg3);
};
arg5.write = (arg0, _days) => {
  const diff = arg5 * 8 - arg4 - 1;
  const diff1 = (1 << diff) - 1;
  let num = 0;
  if (arg4 === 23) {
    const _Math = Math;
    const _Math2 = Math;
    num = Math.pow(2, -24) - Math.pow(2, -77);
    const powResult = Math.pow(2, -24);
  }
  let num5 = 0;
  if (!arg3) {
    num5 = arg5 - 1;
  }
  let num6 = -1;
  if (arg3) {
    num6 = 1;
  }
  if (_days < 0) {
    let num7 = 1;
  } else {
    num7 = 0;
    if (_days === 0) {
      num7 = 0;
    }
  }
  const absolute = Math.abs(_days);
  if (!isNaN(absolute)) {
    const _Infinity = Infinity;
    if (absolute !== Infinity) {
      const _Math7 = Math;
      const _Math8 = Math;
      const _Math9 = Math;
      const rounded = Math.floor(Math.log(absolute) / Math.LN2);
      const _Math10 = Math;
      const powResult1 = Math.pow(2, -rounded);
      let diff2 = rounded;
      let result = powResult1;
      if (absolute * powResult1 < 1) {
        diff2 = rounded - 1;
        result = powResult1 * 2;
      }
      if (diff2 + tmp3 >= 1) {
        let sum = absolute + num / result;
      } else {
        const _Math3 = Math;
        sum = absolute + num * Math.pow(2, 1 - tmp3);
      }
      let sum1 = diff2;
      let result1 = result;
      if (sum * result >= 2) {
        sum1 = diff2 + 1;
        result1 = result / 2;
      }
      let num8 = 0;
      let num9 = diff1;
      if (sum1 + tmp3 < diff1) {
        if (sum1 + tmp3 >= 1) {
          const _Math6 = Math;
          const diff3 = sum * result1 - 1;
          num8 = diff3 * Math.pow(2, arg4);
          num9 = sum1 + tmp3;
        } else {
          const _Math4 = Math;
          const _Math5 = Math;
          const result2 = sum * Math.pow(2, tmp3 - 1);
          num8 = result2 * Math.pow(2, arg4);
          num9 = 0;
        }
      }
    }
    let result3 = num8;
    let diff4 = arg4;
    let sum2 = num5;
    let tmp17 = num8;
    let tmp18 = num5;
    let tmp19 = arg4;
    if (arg4 >= 8) {
      do {
        arg0[arg2 + sum2] = result3 & 255;
        sum2 = sum2 + num6;
        result3 = result3 / 256;
        diff4 = diff4 - 8;
        tmp17 = result3;
        tmp18 = sum2;
        tmp19 = diff4;
      } while (diff4 >= 8);
    }
    let result4 = num9 << tmp19 | tmp17;
    let sum3 = diff + tmp19;
    let sum4 = tmp18;
    let tmp23 = tmp18;
    if (sum3 > 0) {
      do {
        arg0[arg2 + sum4] = result4 & 255;
        sum4 = sum4 + num6;
        result4 = result4 / 256;
        sum3 = sum3 - 8;
        tmp23 = sum4;
      } while (sum3 > 0);
    }
    const diff5 = arg2 + tmp23 - num6;
    arg0[diff5] = arg0[diff5] | num7 * 128;
  }
  let num10 = 0;
  if (isNaN(absolute)) {
    num10 = 1;
  }
  num8 = num10;
  num9 = diff1;
};
