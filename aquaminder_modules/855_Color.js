// Module ID: 855
// Function ID: 9397
// Name: Color
// Dependencies: [38, 6, 856, 860]

// Module 855 (Color)
import keys2 from "keys" /* 856 */;
import clamp from "clamp" /* 860 */;
import closure_2 from "_slicedToArray" /* 38 */;
import _toConsumableArray from "_toConsumableArray" /* 6 */;

class Color {
  constructor(arg0, arg1) {
    self = this;
    if (this instanceof Color) {
      str = require;
      if (require) {
        tmp8 = closure_4;
        str = require;
        if (require in closure_4) {
          str = null;
        }
      }
      if (str) {
        tmp9 = closure_0;
        tmp10 = closure_1;
        num = 2;
        if (!(str in require("keys"))) {
          tmp11 = globalThis;
          _Error = Error;
          str2 = "Unknown model: ";
          prototype2 = Error.prototype;
          tmp12 = new.target;
          tmp13 = new.target;
          error = new Error("Unknown model: " + str);
          tmp15 = error;
          throw error;
        }
      }
      tmp16 = null;
      if (global == null) {
        str10 = "rgb";
        self.model = "rgb";
        self.color = [0, 0, 0];
        num15 = 1;
        self.valpha = 1;
      } else {
        tmp55 = Color;
        if (global instanceof Color) {
          self.model = global.model;
          tmp46 = closure_3;
          self.color = closure_3(global.color);
          self.valpha = global.valpha;
        } else {
          tmp17 = typeof global;
          str3 = "string";
          if (tmp17 === "string") {
            tmp37 = closure_0;
            tmp38 = closure_1;
            num11 = 3;
            obj2 = require("clamp");
            iter = obj2.get(global);
            if (iter === null) {
              tmp41 = globalThis;
              _Error3 = Error;
              str9 = "Unable to parse color from string: ";
              prototype4 = Error.prototype;
              tmp42 = new.target;
              tmp43 = new.target;
              error1 = new Error("Unable to parse color from string: " + global);
              tmp45 = error1;
              throw error1;
            } else {
              self.model = iter.model;
              tmp39 = closure_0;
              tmp40 = closure_1;
              num12 = 2;
              channels2 = require("keys")[self.model].channels;
              value = iter.value;
              num13 = 0;
              self.color = require("module_0");
              num14 = 1;
              str8 = "number";
              if (typeof iter.value[channels2] === "number") {
                num14 = iter.value[channels2];
              }
              self.valpha = num14;
            }
          } else {
            num20 = 0;
            if (global.length > 0) {
              if (!str) {
                str = "rgb";
              }
              self.model = str;
              tmp31 = closure_0;
              tmp32 = closure_1;
              num9 = 2;
              channels = require("keys")[self.model].channels;
              tmp33 = globalThis;
              _Array = Array;
              slice = Array.prototype.slice;
              callResult = slice.call(global, 0, channels);
              tmp35 = zeroArray;
              tmp36 = zeroArray(callResult, channels);
              self.color = callResult;
              num10 = 1;
              str7 = "number";
              if (typeof global[channels] === "number") {
                num10 = global[channels];
              }
              self.valpha = num10;
            } else {
              str11 = "number";
              if (tmp17 === "number") {
                str6 = "rgb";
                self.model = "rgb";
                num5 = 16;
                items = [, , ];
                num6 = 255;
                items[0] = global >> 16 & 255;
                num7 = 8;
                items[1] = global >> 8 & 255;
                items[2] = global & 255;
                self.color = items;
                num8 = 1;
                self.valpha = 1;
              } else {
                num21 = 1;
                self.valpha = 1;
                tmp56 = globalThis;
                _Object3 = Object;
                keys = Object.keys(global);
                str12 = "alpha";
                if ("alpha" in global) {
                  spliceResult = keys.splice(keys.indexOf("alpha"), 1);
                  num2 = 0;
                  if (typeof global.alpha === "number") {
                    num2 = global.alpha;
                  }
                  self.valpha = num2;
                }
                sorted = keys.sort();
                str4 = "";
                joined = sorted.join("");
                tmp20 = closure_5;
                if (joined in closure_5) {
                  tmp25 = closure_5;
                  self.model = closure_5[joined];
                  tmp26 = closure_0;
                  tmp27 = closure_1;
                  num3 = 2;
                  labels = require("keys")[self.model].labels;
                  items1 = [];
                  num4 = 0;
                  if (0 < labels.length) {
                    do {
                      arr = items1.push(global[labels[num4]]);
                      num4 = num4 + 1;
                      length = labels.length;
                    } while (num4 < length);
                  }
                  tmp29 = zeroArray;
                  tmp30 = zeroArray(items1);
                  self.color = items1;
                } else {
                  _Error2 = Error;
                  _JSON = JSON;
                  str5 = "Unable to parse color from object: ";
                  prototype3 = Error.prototype;
                  tmp21 = new.target;
                  tmp22 = new.target;
                  error2 = new Error("Unable to parse color from object: " + JSON.stringify(global));
                  tmp24 = error2;
                  throw error2;
                }
              }
            }
          }
        }
      }
      tmp47 = closure_6;
      if (closure_6[self.model]) {
        tmp48 = closure_0;
        tmp49 = closure_1;
        num16 = 2;
        channels3 = require("keys")[self.model].channels;
        for (let num17 = 0; num17 < channels3; num17 = num17 + 1) {
          tmp50 = closure_6;
          tmp51 = closure_6[self.model][num17];
          tmp52 = num17;
          if (tmp51) {
            self.color[num17] = tmp51(self.color[num17]);
          }
        }
      }
      tmp53 = globalThis;
      _Math = Math;
      _Math2 = Math;
      num18 = 1;
      num19 = 0;
      self.valpha = require("module_0");
      _Object = Object;
      if (Object.freeze) {
        _Object2 = Object;
        frozen = Object.freeze(self);
      }
      return;
    } else {
      tmp = Color;
      prototype = Color.prototype;
      tmp2 = new.target;
      tmp3 = new.target;
      tmp4 = global;
      tmp5 = require;
      tmp6 = new Color(global, require);
      tmp7 = tmp6;
      return tmp6;
    }
  }
}
function roundTo(toFixed) {
  return Number(toFixed.toFixed(arg1));
}
function roundToPlace(arg0) {
  closure_0 = arg0;
  return (arg0) => closure_1_8(arg0, closure_0);
}
function getset(cmyk, arg1, arg2) {
  closure_0 = cmyk;
  closure_1 = arg1;
  closure_2 = arg2;
  let tmp = cmyk;
  if (!Array.isArray(cmyk)) {
    const items = [cmyk];
    tmp = items;
  }
  closure_0 = tmp;
  for (const item10015 of tmp) {
    let tmp3 = dependencyMap;
    let tmp4 = dependencyMap[item10015];
    let tmp5 = tmp4;
    if (!tmp4) {
      let tmp6 = dependencyMap;
      let tmp7 = item10015;
      let items1 = [];
      dependencyMap[tmp2] = items1;
      tmp5 = items1;
    }
    let tmp8 = tmp5;
    let tmp9 = arg1;
    let tmp10 = arg2;
    tmp5[arg1] = arg2;
    continue;
  }
  closure_0 = tmp[0];
  return function(arg0) {
    const self = this;
    if (arg0 !== undefined) {
      let tmp8 = arg0;
      if (callback) {
        tmp8 = callback(arg0);
      }
      const tmp11 = self[closure_0]();
      tmp11.color[closure_1] = tmp8;
      return tmp11;
    } else {
      const tmp3 = self[closure_0]().color[closure_1];
      let tmp5 = tmp3;
      if (callback) {
        tmp5 = callback(tmp3);
      }
      return tmp5;
    }
  };
}
function maxfn(arg0) {
  closure_0 = arg0;
  return (result1) => Math.max(0, Math.min(closure_0, result1));
}
function assertArray(arg0) {
  let tmp = arg0;
  if (!Array.isArray(arg0)) {
    const items = [arg0];
    tmp = items;
  }
  return tmp;
}
function zeroArray(callResult, channels) {
  for (let num = 0; num < channels; num = num + 1) {
    let tmp = num;
    if (typeof callResult[num] !== "number") {
      callResult[num] = 0;
    }
  }
  return callResult;
}
let closure_4 = ["keyword", "gray", "hex"];
let obj = {};
let keys = Object.keys(keys2);
let iter = keys[Symbol.iterator]();
const nextResult = iter.next();
while (iter !== undefined) {
  let tmp4 = obj;
  let tmp5 = _toConsumableArray;
  let tmp6 = require;
  let tmp7 = dependencyMap;
  let _moduleResult = _toConsumableArray(keys2[nextResult].labels);
  let sorted = _moduleResult.sort();
  obj[sorted.join("")] = nextResult;
  continue;
}
let closure_6 = {};
obj = {
  toString() {
    return this.string();
  },
  toJSON() {
    return this[this.model]();
  },
  string(absResult) {
    const self = this;
    let self2 = this;
    if (!(this.model in clamp.to)) {
      self2 = self.rgb();
    }
    let num = 1;
    if (typeof absResult === "number") {
      num = absResult;
    }
    const roundResult = self2.round(num);
    if (roundResult.valpha === 1) {
      let color = roundResult.color;
    } else {
      const items = [];
      const items1 = [self.valpha];
      color = items.concat(_toConsumableArray(roundResult.color), items1);
    }
    const to = clamp.to;
    return to[roundResult.model](color);
  },
  percentString(absResult) {
    let num = 1;
    if (typeof absResult === "number") {
      num = absResult;
    }
    const roundResult = this.rgb().round(num);
    if (roundResult.valpha === 1) {
      let color = roundResult.color;
    } else {
      const items = [];
      const items1 = [this.valpha];
      color = items.concat(_toConsumableArray(roundResult.color), items1);
    }
    const rgb = clamp.to.rgb;
    return rgb.percent(color);
  },
  array() {
    const self = this;
    if (this.valpha === 1) {
      let combined = _toConsumableArray(self.color);
    } else {
      const items = [];
      const items1 = [self.valpha];
      combined = items.concat(_toConsumableArray(self.color), items1);
    }
    return combined;
  },
  object() {
    const self = this;
    obj = {};
    const channels = keys2[this.model].channels;
    for (let num = 0; num < channels; num = num + 1) {
      obj[keys2[this.model].labels[num]] = self.color[num];
    }
    if (self.valpha !== 1) {
      obj.alpha = self.valpha;
    }
    return obj;
  },
  unitArray() {
    const color = this.rgb().color;
    color[0] = color[0] / 255;
    color[1] = color[1] / 255;
    color[2] = color[2] / 255;
    if (this.valpha !== 1) {
      color.push(this.valpha);
    }
    return color;
  },
  unitObject() {
    const objectResult = this.rgb().object();
    objectResult.r = objectResult.r / 255;
    objectResult.g = objectResult.g / 255;
    objectResult.b = objectResult.b / 255;
    if (this.valpha !== 1) {
      objectResult.alpha = this.valpha;
    }
    return objectResult;
  },
  round(absResult) {
    let num = absResult;
    const self = this;
    if (!absResult) {
      num = 0;
    }
    const items = [];
    const color = self.color;
    const items1 = [self.valpha];
    return new Color(items.concat(_toConsumableArray(color.map(roundToPlace(Math.max(num, 0)))), items1), self.model);
  },
  alpha(result1) {
    const self = this;
    if (result1 !== undefined) {
      const items = [];
      const _Math = Math;
      const _Math2 = Math;
      const items1 = [Math.max(0, Math.min(1, result1))];
      const prototype = Color.prototype;
      const tmp7 = new Color(items.concat(_toConsumableArray(self.color), items1), self.model);
      return tmp7;
    } else {
      return self.valpha;
    }
  },
  red: getset("rgb", 0, require("module_255")),
  green: getset("rgb", 1, require("module_255")),
  blue: getset("rgb", 2, require("module_255")),
  hue: getset(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, (arg0) => (arg0 % 360 + 360) % 360),
  saturationl: getset("hsl", 1, require("module_100")),
  lightness: getset("hsl", 2, require("module_100")),
  saturationv: getset("hsv", 1, require("module_100")),
  value: getset("hsv", 2, require("module_100")),
  chroma: getset("hcg", 1, require("module_100")),
  gray: getset("hcg", 2, require("module_100")),
  white: getset("hwb", 1, require("module_100")),
  wblack: getset("hwb", 2, require("module_100")),
  cyan: getset("cmyk", 0, require("module_100")),
  magenta: getset("cmyk", 1, require("module_100")),
  yellow: getset("cmyk", 2, require("module_100")),
  black: getset("cmyk", 3, require("module_100")),
  x: getset("xyz", 0, maxfn(95.047)),
  y: getset("xyz", 1, require("module_100")),
  z: getset("xyz", 2, maxfn(108.833)),
  l: getset("lab", 0, require("module_100")),
  a: getset("lab", 1),
  b: getset("lab", 2),
  keyword(color) {
    const self = this;
    if (color !== undefined) {
      const prototype = Color.prototype;
      const tmp7 = new Color(color);
      return tmp7;
    } else {
      return keys2[self.model].keyword(self.color);
    }
  },
  hex(color) {
    const self = this;
    if (color !== undefined) {
      const prototype = Color.prototype;
      const tmp7 = new Color(color);
      return tmp7;
    } else {
      const to = clamp.to;
      return to.hex(self.rgb().round().color);
    }
  },
  hexa(items) {
    const self = this;
    if (items !== undefined) {
      const prototype = Color.prototype;
      const tmp8 = new Color(items);
      return tmp8;
    } else {
      const _Math = Math;
      const rgbResult = self.rgb();
      const str2 = Math.round(self.valpha * 255);
      const formatted = Math.round(self.valpha * 255).toString(16).toUpperCase();
      let text = formatted;
      if (formatted.length === 1) {
        text = `0${arr}`;
      }
      const to = clamp.to;
      return to.hex(rgbResult.round().color) + text;
    }
  },
  rgbNumber() {
    const color = this.rgb().color;
    return (color[0] & 255) << 16 | (color[1] & 255) << 8 | color[2] & 255;
  },
  luminosity() {
    const color = this.rgb().color;
    const items = [];
    const entries = color.entries();
    const tmp2 = entries[Symbol.iterator]();
    while (true) {
      let tmp4 = tmp2;
      if (tmp2 === undefined) {
        let num2 = 0.2126;
        let num3 = 0.7152;
        let num4 = 0.0722;
        return 0.2126 * items[0] + 0.7152 * items[1] + 0.0722 * items[2];
      } else {
        let tmp5 = callback;
        let tmp6 = callback(tmp3, 2);
        let result = tmp6[1] / 255;
        let tmp8 = result;
        let tmp9 = items;
        if (result <= 0.04045) {
          let tmp12 = result;
          let result1 = tmp8 / 12.92;
        } else {
          let tmp10 = result;
          let num = 2.4;
          result1 = ((tmp8 + 0.055) / 1.055) ** 2.4;
        }
        items[tmp6[0]] = result1;
      }
    }
  },
  contrast(luminosity) {
    const luminosityResult = this.luminosity();
    const luminosityResult1 = luminosity.luminosity();
    if (luminosityResult > luminosityResult1) {
      return (luminosityResult + 0.05) / (luminosityResult1 + 0.05);
    } else {
      return (luminosityResult1 + 0.05) / (luminosityResult + 0.05);
    }
  },
  level(luminosity) {
    const contrastResult = this.contrast(luminosity);
    if (contrastResult >= 7) {
      return "AAA";
    } else {
      let str = "";
      if (contrastResult >= 4.5) {
        str = "AA";
      }
      return str;
    }
  },
  isDark() {
    const color = this.rgb().color;
    return (color[0] * 2126 + color[1] * 7152 + color[2] * 722) / 10000 < 128;
  },
  isLight() {
    return !this.isDark();
  },
  negate() {
    const rgbResult = this.rgb();
    let num = 0;
    do {
      rgbResult.color[num] = 255 - rgbResult.color[num];
      num = num + 1;
    } while (num < 3);
    return rgbResult;
  },
  lighten(arg0) {
    const hslResult = this.hsl();
    const color = hslResult.color;
    color[2] = color[2] + hslResult.color[2] * arg0;
    return hslResult;
  },
  darken(arg0) {
    const hslResult = this.hsl();
    const color = hslResult.color;
    color[2] = color[2] - hslResult.color[2] * arg0;
    return hslResult;
  },
  saturate(arg0) {
    const hslResult = this.hsl();
    const color = hslResult.color;
    color[1] = color[1] + hslResult.color[1] * arg0;
    return hslResult;
  },
  desaturate(arg0) {
    const hslResult = this.hsl();
    const color = hslResult.color;
    color[1] = color[1] - hslResult.color[1] * arg0;
    return hslResult;
  },
  whiten(arg0) {
    const hwbResult = this.hwb();
    const color = hwbResult.color;
    color[1] = color[1] + hwbResult.color[1] * arg0;
    return hwbResult;
  },
  blacken(arg0) {
    const hwbResult = this.hwb();
    const color = hwbResult.color;
    color[2] = color[2] + hwbResult.color[2] * arg0;
    return hwbResult;
  },
  grayscale() {
    const color = this.rgb().color;
    const sum = color[0] * 0.3 + color[1] * 0.59 + color[2] * 0.11;
    return Color.rgb(sum, sum, sum);
  },
  fade(arg0) {
    return this.alpha(this.valpha - this.valpha * arg0);
  },
  opaquer(arg0) {
    return this.alpha(this.valpha + this.valpha * arg0);
  },
  rotate(arg0) {
    const hslResult = this.hsl();
    const result = (hslResult.color[0] + arg0) % 360;
    let sum = result;
    if (result < 0) {
      sum = 360 + result;
    }
    hslResult.color[0] = sum;
    return hslResult;
  },
  mix(closure_2, arg1) {
    const self = this;
    if (closure_2) {
      if (closure_2.rgb) {
        const rgbResult = closure_2.rgb();
        const rgbResult1 = self.rgb();
        let num = 0.5;
        if (arg1 !== undefined) {
          num = arg1;
        }
        const diff = 2 * num - 1;
        const diff1 = rgbResult.alpha() - rgbResult1.alpha();
        let result = diff;
        if (diff * diff1 !== -1) {
          result = (diff + diff1) / (1 + diff * diff1);
        }
        const result1 = (result + 1) / 2;
        const diff2 = 1 - result1;
        const result2 = result1 * rgbResult.red();
        const result3 = diff2 * rgbResult1.red();
        const result4 = result1 * rgbResult.green();
        const result5 = diff2 * rgbResult1.green();
        const result6 = result1 * rgbResult.blue();
        const result7 = diff2 * rgbResult1.blue();
        const result8 = rgbResult.alpha() * num;
        return Color.rgb(result2 + result3, result4 + result5, result6 + result7, result8 + rgbResult1.alpha() * (1 - num));
      }
    }
    const error = new Error("Argument to \"mix\" was not a Color instance, but rather an instance of " + typeof closure_2);
    throw error;
  }
};
Color.prototype = obj;
function _loop(item10148) {
  const _require = item10148;
  if (closure_4.includes(item10148)) {
    return 1;
  } else {
    channels = _require(channels[2])[item10148].channels;
    Color.prototype[item10148] = function() {
      const self = this;
      if (this.model === item10148) {
        const prototype2 = closure_1_7.prototype;
        const tmp12 = new closure_1_7(self);
        return tmp12;
      } else {
        const length = arguments.length;
        const _Array = Array;
        const arr = new Array(length);
        for (let num = 0; num < length; num = num + 1) {
          arr[num] = arguments[num];
        }
        if (arr.length > 0) {
          const prototype = closure_1_7.prototype;
          const tmp6 = new closure_1_7(tmp18, item10148);
          return tmp6;
        } else {
          const items = [];
          const items1 = [self.valpha];
          const prototype4 = closure_1_7.prototype;
          const tmp28 = new closure_1_7(items.concat(closure_1_3(closure_1_10(item10148(channels[2])[self.model][item10148].raw(self.color))), items1), item10148);
          return tmp28;
        }
        tmp18 = arr;
      }
    };
    Color[item10148] = () => {
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      let first = array[0];
      if (typeof first === "number") {
        closure_1_11(array, channels);
        first = array;
      }
      return new closure_1_7(first, closure_0);
    };
  }
}
keys = Object.keys(keys2);
for (const item10148 of keys1) {
  let tmp9 = _loop;
  continue;
}

export default Color;
