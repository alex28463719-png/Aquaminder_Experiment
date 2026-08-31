// Module ID: 857
// Function ID: 9450
// Name: keys
// Dependencies: [38, 858]

// Module 857 (keys)
import keys2 from "keys" /* 858 */;
import closure_2 from "_slicedToArray" /* 38 */;

function comparativeDistance(arg0, arg1) {
  return (arg0[0] - arg1[0]) ** 2 + (arg0[1] - arg1[1]) ** 2 + (arg0[2] - arg1[2]) ** 2;
}
let obj = {};
let keys = Object.keys(keys2);
for (const item10023 of keys) {
  let tmp3 = obj;
  let tmp4 = arg1;
  let tmp5 = arg6;
  obj[require("keys")[item10023]] = item10023;
  continue;
}
obj = { rgb: { channels: 3, labels: "rgb" }, hsl: { channels: 3, labels: "hsl" }, hsv: { channels: 3, labels: "hsv" }, hwb: { channels: 3, labels: "hwb" }, cmyk: { channels: 4, labels: "cmyk" }, xyz: { channels: 3, labels: "xyz" }, lab: { channels: 3, labels: "lab" }, lch: { channels: 3, labels: "lch" }, hex: { channels: 1, labels: ["hex"] }, keyword: { channels: 1, labels: ["keyword"] }, ansi16: { channels: 1, labels: ["ansi16"] }, ansi256: { channels: 1, labels: ["ansi256"] }, hcg: { channels: 3, labels: ["h", "c", "g"] }, apple: { channels: 3, labels: ["r16", "g16", "b16"] }, gray: { channels: 1, labels: ["gray"] } };
const keys1 = Object.keys(obj);
const iter = keys1[Symbol.iterator]();
const nextResult = iter.next();
while (iter !== undefined) {
  let tmp9 = nextResult;
  let tmp10 = obj;
  if ("channels" in tmp6[nextResult]) {
    let tmp16 = obj;
    let tmp17 = nextResult;
    if ("labels" in tmp6[tmp9]) {
      let tmp23 = obj;
      let tmp24 = nextResult;
      if (tmp6[tmp9].labels.length !== tmp6[tmp9].channels) {
        let _Error3 = Error;
        let tmp31 = nextResult;
        let str3 = "channel and label counts mismatch: ";
        let tmp32 = new.target;
        let tmp33 = new.target;
        let error = new Error("channel and label counts mismatch: " + tmp9);
        let tmp35 = error;
        throw error;
      } else {
        let tmp25 = obj;
        let tmp26 = nextResult;
        let tmp27 = tmp6[tmp9];
        ({ channels, labels } = tmp6[tmp9]);
        delete tmp.channels;
        let tmp28 = tmp6[tmp9];
        delete tmp.labels;
        let _Object = Object;
        obj = { value: channels };
        let definePropertyResult = Object.defineProperty(tmp6[tmp9], "channels", obj);
        let _Object2 = Object;
        let obj1 = { value: labels };
        let definePropertyResult1 = Object.defineProperty(tmp6[tmp9], "labels", obj1);
        continue;
      }
    } else {
      let _Error2 = Error;
      let tmp18 = nextResult;
      let str2 = "missing channel labels property: ";
      let tmp19 = new.target;
      let tmp20 = new.target;
      let error1 = new Error("missing channel labels property: " + tmp9);
      let tmp22 = error1;
      throw error1;
    }
  } else {
    let _Error = Error;
    let tmp11 = nextResult;
    let str = "missing channels property: ";
    let tmp12 = new.target;
    let tmp13 = new.target;
    let error2 = new Error("missing channels property: " + tmp9);
    let tmp15 = error2;
    throw error2;
  }
}
obj.rgb.hsl = (arg0) => {
  const result = arg0[0] / 255;
  const result1 = arg0[1] / 255;
  const result2 = arg0[2] / 255;
  const bound = Math.min(result, result1, result2);
  const bound1 = Math.max(result, result1, result2);
  const diff = bound1 - bound;
  let num = 0;
  if (bound1 !== bound) {
    if (result === bound1) {
      num = (result1 - result2) / diff;
    } else if (result1 === bound1) {
      num = 2 + (result2 - result) / diff;
    } else if (result2 === bound1) {
      num = 4 + (result - result1) / diff;
    }
  }
  const bound2 = Math.min(num * 60, 360);
  let sum = bound2;
  if (bound2 < 0) {
    sum = bound2 + 360;
  }
  const result3 = (bound + bound1) / 2;
  let num3 = 0;
  if (bound1 !== bound) {
    if (result3 <= 0.5) {
      num3 = diff / (bound1 + bound);
    } else {
      num3 = diff / (2 - bound1 - bound);
    }
  }
  const items = [sum, num3 * 100, result3 * 100];
  return items;
};
obj.rgb.hsv = (arg0) => {
  const result = arg0[0] / 255;
  const result1 = arg0[1] / 255;
  const result2 = arg0[2] / 255;
  const bound = Math.max(result, result1, result2);
  const diff = bound - Math.min(result, result1, result2);
  dependencyMap = diff;
  function diffc(result) {
    return (bound - result) / 6 / closure_1 + 0.5;
  }
  let num = 0;
  let num2 = 0;
  if (diff !== 0) {
    const result3 = diff / bound;
    const diffcResult = diffc(result);
    const diffcResult1 = diffc(result1);
    const diffcResult2 = diffc(result2);
    if (result === bound) {
      let diff1 = diffcResult2 - diffcResult1;
    } else if (result1 === bound) {
      diff1 = 0.3333333333333333 + diffcResult - diffcResult2;
    } else if (result2 === bound) {
      diff1 = 0.6666666666666666 + diffcResult1 - diffcResult;
    }
    if (diff1 < 0) {
      num = diff1 + 1;
      num2 = result3;
    } else {
      num2 = result3;
      num = diff1;
      if (diff1 > 1) {
        num = diff1 - 1;
        num2 = result3;
      }
    }
  }
  const items = [num * 360, num2 * 100, bound * 100];
  return items;
};
obj.rgb.hwb = (diff) => {
  const first = diff[0];
  const rgb = obj.rgb;
  const result = 0.00392156862745098 * Math.min(first, Math.min(tmp2, tmp3));
  const items = [rgb.hsl(diff)[0], result * 100, (1 - 0.00392156862745098 * Math.max(first, Math.max(diff[1], diff[2]))) * 100];
  return items;
};
obj.rgb.cmyk = (arg0) => {
  const diff = 1 - arg0[0] / 255;
  const diff1 = 1 - arg0[1] / 255;
  const diff2 = 1 - arg0[2] / 255;
  const bound = Math.min(diff, diff1, diff2);
  const items = [((diff - bound) / (1 - bound) || 0) * 100, ((diff1 - bound) / (1 - bound) || 0) * 100, ((diff2 - bound) / (1 - bound) || 0) * 100, bound * 100];
  return items;
};
obj.rgb.keyword = (arg0) => {
  let tmp;
  if (obj[arg0]) {
    return tmp2;
  } else {
    let _Infinity = Infinity;
    const _Object = Object;
    const keys = Object.keys(keys2);
    for (const item10021 of keys) {
      let tmp8 = item10021;
      let tmp9 = require;
      let tmp10 = dependencyMap;
      let tmp11 = comparativeDistance;
      let tmp12 = arg0;
      let tmp13 = comparativeDistance(arg0, keys2[item10021]);
      let tmp14 = tmp13;
      let tmp15 = _Infinity;
      if (tmp13 < _Infinity) {
        _Infinity = tmp13;
        tmp = item10021;
      }
      continue;
    }
    return tmp;
  }
};
obj.keyword.rgb = (arg0) => keys2[arg0];
obj.rgb.xyz = (arg0) => {
  const result = arg0[0] / 255;
  const result1 = arg0[1] / 255;
  const result2 = arg0[2] / 255;
  if (result > 0.04045) {
    let result3 = ((result + 0.055) / 1.055) ** 2.4;
  } else {
    result3 = result / 12.92;
  }
  if (result1 > 0.04045) {
    let result4 = ((result1 + 0.055) / 1.055) ** 2.4;
  } else {
    result4 = result1 / 12.92;
  }
  if (result2 > 0.04045) {
    let result5 = ((result2 + 0.055) / 1.055) ** 2.4;
  } else {
    result5 = result2 / 12.92;
  }
  const items = [(result3 * 0.4124 + result4 * 0.3576 + result5 * 0.1805) * 100, (result3 * 0.2126 + result4 * 0.7152 + result5 * 0.0722) * 100, (result3 * 0.0193 + result4 * 0.1192 + result5 * 0.9505) * 100];
  return items;
};
obj.rgb.lab = (arg0) => {
  const rgb = obj.rgb;
  const xyzResult = rgb.xyz(arg0);
  const result = xyzResult[0] / 95.047;
  const result1 = xyzResult[1] / 100;
  const result2 = xyzResult[2] / 108.883;
  if (result > 0.008856) {
    let sum = result ** 0.3333333333333333;
  } else {
    sum = 7.787 * result + 0.13793103448275862;
  }
  if (result1 > 0.008856) {
    let sum1 = result1 ** 0.3333333333333333;
  } else {
    sum1 = 7.787 * result1 + 0.13793103448275862;
  }
  if (result2 > 0.008856) {
    let sum2 = result2 ** 0.3333333333333333;
  } else {
    sum2 = 7.787 * result2 + 0.13793103448275862;
  }
  const items = [116 * sum1 - 16, 500 * (sum - sum1), 200 * (sum1 - sum2)];
  return items;
};
obj.hsl.rgb = (arg0) => {
  let result = arg0[1] / 100;
  const result1 = arg0[2] / 100;
  if (result === 0) {
    const result2 = result1 * 255;
    const items = [result2, result2, result2];
    return items;
  } else {
    if (result1 < 0.5) {
      let result3 = result1 * (1 + result);
    } else {
      result3 = result1 + result - result1 * result;
    }
    result = [0, 0, 0];
    const result4 = (result3 - (2 * result1 - result3)) * 6;
  }
};
obj.hsl.hsv = (arg0) => {
  const result = arg0[1] / 100;
  const result1 = arg0[2] / 100;
  const bound = Math.max(result1, 0.01);
  const result2 = result1 * 2;
  let diff = result2;
  if (result2 > 1) {
    diff = 2 - result2;
  }
  const result3 = result * diff;
  let diff1 = bound;
  if (bound > 1) {
    diff1 = 2 - bound;
  }
  const result4 = result * diff1;
  const sum = result2 + result3;
  if (result2 === 0) {
    let result5 = 2 * result4 / (bound + result4);
  } else {
    result5 = 2 * result3 / sum;
  }
  const items = [arg0[0], result5 * 100, sum / 2 * 100];
  return items;
};
obj.hsv.rgb = (arg0) => {
  const result = arg0[0] / 60;
  const result1 = arg0[1] / 100;
  const result2 = arg0[2] / 100;
  const result3 = Math.floor(result) % 6;
  const diff = result - Math.floor(result);
  const result4 = 255 * result2;
  const result5 = result4 * (1 - result1);
  const result6 = result4 * (1 - result1 * diff);
  const result7 = result4 * (1 - result1 * (1 - diff));
  const result8 = result2 * 255;
  if (0 === result3) {
    const items = [result8, result7, result5];
    return items;
  } else if (1 === result3) {
    const items1 = [result6, result8, result5];
    return items1;
  } else if (2 === result3) {
    const items2 = [result5, result8, result7];
    return items2;
  } else if (3 === result3) {
    const items3 = [result5, result6, result8];
    return items3;
  } else if (4 === result3) {
    const items4 = [result7, result5, result8];
    return items4;
  } else if (5 === result3) {
    const items5 = [result8, result5, result6];
    return items5;
  }
};
obj.hsv.hsl = (arg0) => {
  const result = arg0[1] / 100;
  const result1 = arg0[2] / 100;
  const bound = Math.max(result1, 0.01);
  const diff = 2 - result;
  const result2 = diff * bound;
  let diff1 = result2;
  const result3 = result * bound;
  if (result2 > 1) {
    diff1 = 2 - result2;
  }
  const items = [arg0[0], (result3 / diff1 || 0) * 100, diff * result1 / 2 * 100];
  return items;
};
obj.hwb.rgb = (arg0) => {
  const result = arg0[1] / 100;
  const result1 = arg0[2] / 100;
  const sum = result + result1;
  let result3 = result;
  let result4 = result1;
  const result2 = arg0[0] / 360;
  if (sum > 1) {
    result3 = result / sum;
    result4 = result1 / sum;
  }
  const result5 = 6 * result2;
  const rounded = Math.floor(result5);
  const diff = 1 - result4;
  const diff1 = result5 - rounded;
  let diff2 = diff1;
  if ((rounded & 1) !== 0) {
    diff2 = 1 - diff1;
  }
  const sum1 = result3 + diff2 * (diff - result3);
  let tmp13 = diff;
  let tmp14 = sum1;
  let tmp15 = result3;
  if (6 !== rounded) {
    tmp13 = diff;
    tmp14 = sum1;
    tmp15 = result3;
    if (0 !== rounded) {
      if (1 === rounded) {
        tmp13 = sum1;
        tmp14 = diff;
        tmp15 = result3;
      } else if (2 === rounded) {
        tmp13 = result3;
        tmp14 = diff;
        tmp15 = sum1;
      } else if (3 === rounded) {
        tmp13 = result3;
        tmp14 = sum1;
        tmp15 = diff;
      } else if (4 === rounded) {
        tmp13 = sum1;
        tmp14 = result3;
        tmp15 = diff;
      } else {
        tmp13 = diff;
        tmp14 = sum1;
        tmp15 = result3;
        if (5 === rounded) {
          tmp13 = diff;
          tmp14 = result3;
          tmp15 = sum1;
        }
      }
    }
  }
  const items = [tmp13 * 255, tmp14 * 255, tmp15 * 255];
  return items;
};
obj.cmyk.rgb = (arg0) => {
  const result = arg0[3] / 100;
  const diff = 1 - result;
  const result1 = arg0[1] / 100;
  const result2 = arg0[2] / 100;
  const diff1 = 1 - Math.min(1, arg0[0] / 100 * diff + result);
  const diff2 = 1 - Math.min(1, result1 * diff + result);
  const items = [diff1 * 255, diff2 * 255, (1 - Math.min(1, result2 * diff + result)) * 255];
  return items;
};
obj.xyz.rgb = (arg0) => {
  const result = arg0[0] / 100;
  const result1 = arg0[1] / 100;
  const result2 = arg0[2] / 100;
  const sum = result * 3.2406 + result1 * -1.5372 + result2 * -0.4986;
  const sum1 = result * -0.9689 + result1 * 1.8758 + result2 * 0.0415;
  const sum2 = result * 0.0557 + result1 * -0.204 + result2 * 1.057;
  if (sum > 0.0031308) {
    let diff = 1.055 * sum ** 0.4166666666666667 - 0.055;
  } else {
    diff = sum * 12.92;
  }
  if (sum1 > 0.0031308) {
    let diff1 = 1.055 * sum1 ** 0.4166666666666667 - 0.055;
  } else {
    diff1 = sum1 * 12.92;
  }
  if (sum2 > 0.0031308) {
    let diff2 = 1.055 * sum2 ** 0.4166666666666667 - 0.055;
  } else {
    diff2 = sum2 * 12.92;
  }
  const bound = Math.min(Math.max(0, diff), 1);
  const bound1 = Math.min(Math.max(0, diff1), 1);
  const items = [bound * 255, bound1 * 255, Math.min(Math.max(0, diff2), 1) * 255];
  return items;
};
obj.xyz.lab = (arg0) => {
  const result = arg0[0] / 95.047;
  const result1 = arg0[1] / 100;
  const result2 = arg0[2] / 108.883;
  if (result > 0.008856) {
    let sum = result ** 0.3333333333333333;
  } else {
    sum = 7.787 * result + 0.13793103448275862;
  }
  if (result1 > 0.008856) {
    let sum1 = result1 ** 0.3333333333333333;
  } else {
    sum1 = 7.787 * result1 + 0.13793103448275862;
  }
  if (result2 > 0.008856) {
    let sum2 = result2 ** 0.3333333333333333;
  } else {
    sum2 = 7.787 * result2 + 0.13793103448275862;
  }
  const items = [116 * sum1 - 16, 500 * (sum - sum1), 200 * (sum1 - sum2)];
  return items;
};
obj.lab.xyz = (arg0) => {
  const result = (arg0[0] + 16) / 116;
  const sum = arg0[1] / 500 + result;
  const diff = result - arg0[2] / 200;
  let result1 = result ** 3;
  let result2 = sum ** 3;
  let result3 = diff ** 3;
  if (result1 <= 0.008856) {
    result1 = (result - 0.13793103448275862) / 7.787;
  }
  if (result2 <= 0.008856) {
    result2 = (sum - 0.13793103448275862) / 7.787;
  }
  if (result3 <= 0.008856) {
    result3 = (diff - 0.13793103448275862) / 7.787;
  }
  const items = [result2 * 95.047, result1 * 100, result3 * 108.883];
  return items;
};
obj.lab.lch = (arg0) => {
  const result = Math.atan2(tmp2, tmp) * 360 / 2 / Math.PI;
  let sum = result;
  if (result < 0) {
    sum = result + 360;
  }
  const items = [arg0[0], Math.sqrt(arg0[1] * arg0[1] + arg0[2] * arg0[2]), sum];
  return items;
};
obj.lch.lab = (arg0) => {
  const result = arg0[2] / 360 * 2 * Math.PI;
  const result1 = tmp * Math.cos(result);
  const items = [arg0[0], result1, arg0[1] * Math.sin(result)];
  return items;
};
obj.rgb.ansi16 = (arg0) => {
  let tmp = null;
  if (arguments.length > 1) {
    tmp = null;
    if (arguments[1] !== undefined) {
      tmp = arguments[1];
    }
  }
  [tmp3, tmp4, tmp5] = callback(arg0, 3);
  if (tmp === null) {
    const rgb = obj.rgb;
    tmp = rgb.hsv(arg0)[2];
  }
  const rounded = Math.round(tmp / 50);
  if (rounded === 0) {
    return 30;
  } else {
    const _Math = Math;
    const _Math2 = Math;
    const _Math3 = Math;
    const tmp8 = Math.round(tmp5 / 255) << 2;
    const sum = 30 + (tmp8 | Math.round(tmp4 / 255) << 1 | Math.round(tmp3 / 255));
    let sum1 = sum;
    if (rounded === 2) {
      sum1 = sum + 60;
    }
    return sum1;
  }
  const tmp2 = callback(arg0, 3);
};
obj.hsv.ansi16 = (arg0) => {
  const rgb = obj.rgb;
  const hsv = obj.hsv;
  return rgb.ansi16(hsv.rgb(arg0), arg0[2]);
};
obj.rgb.ansi256 = (arg0) => {
  const first = arg0[0];
  if (first === arg0[1]) {
    if (tmp2 === tmp3) {
      if (first < 8) {
        return 16;
      } else if (first > 248) {
        return 231;
      } else {
        const _Math = Math;
        return Math.round((first - 8) / 247 * 24) + 232;
      }
    }
  }
  const result = 36 * Math.round(first / 255 * 5);
  const result1 = 6 * Math.round(tmp2 / 255 * 5);
  return 16 + result + result1 + Math.round(arg0[2] / 255 * 5);
};
obj.ansi16.rgb = (arg0) => {
  const result = arg0 % 10;
  if (result !== 0) {
    if (result !== 7) {
      const result1 = (~~arg0 > 50 + 1) * 0.5;
      const items = [(result & 1) * result1 * 255, (result >> 1 & 1) * result1 * 255, (result >> 2 & 1) * result1 * 255];
      return items;
    }
  }
  let sum = result;
  if (arg0 > 50) {
    sum = result + 3.5;
  }
  const result2 = sum / 10.5 * 255;
  const items1 = [result2, result2, result2];
  return items1;
};
obj.ansi256.rgb = (arg0) => {
  if (arg0 >= 232) {
    const sum = (arg0 - 232) * 10 + 8;
    const items = [sum, sum, sum];
    return items;
  } else {
    const diff = arg0 - 16;
    const _Math = Math;
    const _Math2 = Math;
    const result = diff % 36;
    const result1 = Math.floor(diff / 36) / 5;
    const items1 = [result1 * 255, Math.floor(result / 6) / 5 * 255, result % 6 / 5 * 255];
    return items1;
  }
};
obj.rgb.hex = (arg0) => {
  const tmp = Math.round(arg0[0]) & 255;
  const tmp2 = Math.round(arg0[1]) & 255;
  const str = (tmp << 16) + ((Math.round(arg0[1]) & 255) << 8) + (Math.round(arg0[2]) & 255);
  const formatted = (tmp << 16) + ((Math.round(arg0[1]) & 255) << 8) + (Math.round(arg0[2]) & 255).toString(16).toUpperCase();
  return "000000".substring(formatted.length) + formatted;
};
obj.hex.rgb = (arg0) => {
  const match = arg0.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
  if (match) {
    let joined = str2;
    if (match[0].length === 3) {
      const parts = str2.split("");
      const mapped = parts.map((arg0) => arg0 + arg0);
      joined = mapped.join("");
    }
    const _parseInt = parseInt;
    const parsed = parseInt(joined, 16);
    const items = [parsed >> 16 & 255, parsed >> 8 & 255, parsed & 255];
    return items;
  } else {
    return [0, 0, 0];
  }
  const str = arg0.toString(16);
};
obj.rgb.hcg = (arg0) => {
  const result = arg0[0] / 255;
  const result1 = arg0[1] / 255;
  const result2 = arg0[2] / 255;
  const bound = Math.max(Math.max(result, result1), result2);
  const bound1 = Math.min(Math.min(result, result1), result2);
  const diff = bound - bound1;
  let num = 0;
  if (diff < 1) {
    num = bound1 / (1 - diff);
  }
  let num2 = 0;
  if (diff > 0) {
    if (bound === result) {
      num2 = (result1 - result2) / diff % 6;
    } else if (bound === result1) {
      num2 = 2 + (result2 - result) / diff;
    } else {
      num2 = 4 + (result - result1) / diff;
    }
  }
  const items = [num2 / 6 % 1 * 360, diff * 100, num * 100];
  return items;
};
obj.hsl.hcg = (arg0) => {
  const result = arg0[1] / 100;
  const result1 = arg0[2] / 100;
  if (result1 < 0.5) {
    let result2 = 2 * result * result1;
  } else {
    result2 = 2 * result * (1 - result1);
  }
  let num = 0;
  if (result2 < 1) {
    num = (result1 - 0.5 * result2) / (1 - result2);
  }
  const items = [arg0[0], result2 * 100, num * 100];
  return items;
};
obj.hsv.hcg = (arg0) => {
  const result = arg0[2] / 100;
  const result1 = arg0[1] / 100 * result;
  let num = 0;
  if (result1 < 1) {
    num = (result - result1) / (1 - result1);
  }
  const items = [arg0[0], result1 * 100, num * 100];
  return items;
};
obj.hcg.rgb = (arg0) => {
  const result = arg0[1] / 100;
  const result1 = arg0[2] / 100;
  if (result === 0) {
    const result2 = result1 * 255;
    const items = [result2, result2, result2];
    return items;
  } else {
    const items1 = [0, 0, 0];
    const result3 = tmp % 1 * 6;
    const result4 = result3 % 1;
    const diff = 1 - result4;
    const _Math = Math;
    const rounded = Math.floor(result3);
    if (0 === rounded) {
      items1[0] = 1;
      items1[1] = result4;
      items1[2] = 0;
    } else if (1 === rounded) {
      items1[0] = diff;
      items1[1] = 1;
      items1[2] = 0;
    } else if (2 === rounded) {
      items1[0] = 0;
      items1[1] = 1;
      items1[2] = result4;
    } else if (3 === rounded) {
      items1[0] = 0;
      items1[1] = diff;
      items1[2] = 1;
    } else if (4 === rounded) {
      items1[0] = result4;
      items1[1] = 0;
      items1[2] = 1;
    } else {
      items1[0] = 1;
      items1[1] = 0;
      items1[2] = diff;
    }
    const result5 = (1 - result) * result1;
    const items2 = [(result * items1[0] + result5) * 255, (result * items1[1] + result5) * 255, (result * items1[2] + result5) * 255];
    return items2;
  }
};
obj.hcg.hsv = (arg0) => {
  const result = arg0[1] / 100;
  const sum = result + arg0[2] / 100 * (1 - result);
  let num = 0;
  if (sum > 0) {
    num = result / sum;
  }
  const items = [arg0[0], num * 100, sum * 100];
  return items;
};
obj.hcg.hsl = (arg0) => {
  const result = arg0[1] / 100;
  const sum = arg0[2] / 100 * (1 - result) + 0.5 * result;
  if (sum > 0) {
    if (sum < 0.5) {
      let num = result / (2 * sum);
    }
    const items = [arg0[0], num * 100, sum * 100];
    return items;
  }
  num = 0;
  if (sum >= 0.5) {
    num = 0;
    if (sum < 1) {
      num = result / (2 * (1 - sum));
    }
  }
};
obj.hcg.hwb = (arg0) => {
  const result = arg0[1] / 100;
  const sum = result + arg0[2] / 100 * (1 - result);
  const items = [arg0[0], (sum - result) * 100, (1 - sum) * 100];
  return items;
};
obj.hwb.hcg = (arg0) => {
  const diff = 1 - arg0[2] / 100;
  const diff1 = diff - arg0[1] / 100;
  let num = 0;
  if (diff1 < 1) {
    num = (diff - diff1) / (1 - diff1);
  }
  const items = [arg0[0], diff1 * 100, num * 100];
  return items;
};
obj.apple.rgb = (arg0) => {
  const items = [arg0[0] / 65535 * 255, arg0[1] / 65535 * 255, arg0[2] / 65535 * 255];
  return items;
};
obj.rgb.apple = (arg0) => {
  const items = [arg0[0] / 255 * 65535, arg0[1] / 255 * 65535, arg0[2] / 255 * 65535];
  return items;
};
obj.gray.rgb = (arg0) => {
  const items = [arg0[0] / 100 * 255, arg0[0] / 100 * 255, arg0[0] / 100 * 255];
  return items;
};
obj.gray.hsl = (arg0) => {
  const items = [0, 0, arg0[0]];
  return items;
};
obj.gray.hsv = obj.gray.hsl;
obj.gray.hwb = (arg0) => {
  const items = [0, 100, arg0[0]];
  return items;
};
obj.gray.cmyk = (arg0) => {
  const items = [0, 0, 0, arg0[0]];
  return items;
};
obj.gray.lab = (arg0) => {
  const items = [arg0[0], 0, 0];
  return items;
};
obj.gray.hex = (arg0) => {
  const tmp = Math.round(arg0[0] / 100 * 255) & 255;
  const formatted = (tmp << 16) + (tmp << 8) + tmp.toString(16).toUpperCase();
  return "000000".substring(formatted.length) + formatted;
};
obj.rgb.gray = (arg0) => {
  const items = [(arg0[0] + arg0[1] + arg0[2]) / 3 / 255 * 100];
  return items;
};

export default obj;
