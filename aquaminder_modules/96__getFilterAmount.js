// Module ID: 96
// Function ID: 1262
// Name: _getFilterAmount
// Dependencies: [1, 38, 89]
// Exports: default

// Module 96 (_getFilterAmount)
import _slicedToArray from "_slicedToArray" /* 38 */;
import processColor from "processColor" /* 89 */;
import module_1 from "module_1" /* 1 */;

function _getFilterAmount(arg0, arg1) {
  if (typeof arg1 === "string") {
    const _RegExp = RegExp;
    const regExp = new RegExp(/([+-]?\d*(\.\d+)?)([a-zA-Z%]+)?/g);
    const match = regExp.exec(arg1);
    if (match) {
      const _isNaN = isNaN;
      const _Number = Number;
      if (!isNaN(Number(match[1]))) {
        const _Number2 = Number;
        let NumberResult = Number(match[1]);
      }
    }
  } else {
    NumberResult = arg1;
  }
  if ("hueRotate" === arg0) {
    if (NumberResult === 0) {
      return 0;
    } else {
      let result = NumberResult;
      if (tmp3 === "rad") {
        const _Math = Math;
        result = 180 * NumberResult / Math.PI;
      }
      return result;
    }
  } else if ("blur" === arg0) {
    if (!tmp3) {
      if (NumberResult >= 0) {
        return NumberResult;
      }
    }
  } else if (NumberResult >= 0) {
    let result1 = NumberResult;
    if (tmp3 === "%") {
      result1 = NumberResult / 100;
    }
    return result1;
  }
}
function parseDropShadow(str) {
  let tmp4;
  let tmp2 = str;
  if (typeof str === "string") {
    tmp2 = parseDropShadowString(str);
  }
  const obj = { offsetX: 0, offsetY: 0 };
  let tmp6;
  const keys = Object.keys();
  if (keys !== undefined) {
    tmp6 = tmp4;
    while (keys[tmp] !== undefined) {
      let tmp18 = tmp11;
      if ("offsetX" === tmp11) {
        if (typeof tmp2.offsetX === "string") {
          let tmp17 = parseLength;
          let offsetX = parseLength(tmp2.offsetX);
        } else {
          offsetX = tmp2.offsetX;
        }
        tmp4 = offsetX;
        if (offsetX != null) {
          continue;
        } else {
          return null;
        }
      } else {
        if ("offsetY" === tmp11) {
          if (typeof tmp2.offsetY === "string") {
            let tmp16 = parseLength;
            let offsetY = parseLength(tmp2.offsetY);
          } else {
            offsetY = tmp2.offsetY;
          }
          let tmp5 = offsetY;
          if (offsetY != null) {
            continue;
          } else {
            return null;
          }
        } else {
          if ("standardDeviation" === tmp11) {
            if (typeof tmp2.standardDeviation === "string") {
              let tmp15 = parseLength;
              let standardDeviation = parseLength(tmp2.standardDeviation);
            } else {
              standardDeviation = tmp2.standardDeviation;
            }
            if (standardDeviation != null) {
              if (standardDeviation >= 0) {
                obj.standardDeviation = standardDeviation;
                continue;
              }
            }
            return null;
          } else if ("color" === tmp11) {
            let tmp12 = closure_1;
            let defaultResult = closure_1.default(tmp2.color);
            if (defaultResult == null) {
              return null;
            } else {
              obj.color = defaultResult;
              let tmp14 = defaultResult;
              continue;
            }
          } else {
            return null;
          }
          continue;
        }
        continue;
      }
      continue;
    }
  }
  if (tmp6 != null) {
    if (tmp7 != null) {
      obj.offsetX = tmp6;
      obj.offsetY = tmp7;
      return obj;
    }
  }
  return null;
}
function parseDropShadowString(str) {
  let tmp2;
  let tmp;
  const obj = { offsetX: 0, offsetY: 0 };
  let num = 0;
  let flag = false;
  const parts = str.split(/\s+(?![^(]*\))/);
  const iter = parts[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp5 = nextResult;
    let tmp6 = closure_1;
    if (closure_1.default(nextResult) != null) {
      let tmp15 = obj;
      if (obj.color != null) {
        iter.return();
        return null;
      } else {
        let tmp16 = tmp;
        if (tmp != null) {
          flag = true;
        }
        let tmp17 = obj;
        let tmp18 = nextResult;
        obj.color = tmp5;
        continue;
      }
    } else {
      let tmp7 = num;
      if (0 === num) {
        tmp = nextResult;
        let tmp14 = num;
        num = num + 1;
      } else if (1 === num) {
        let tmp12 = flag;
        if (flag) {
          iter.return();
          return null;
        } else {
          tmp2 = nextResult;
          let tmp13 = num;
          num = num + 1;
        }
      } else if (2 === num) {
        let tmp8 = flag;
        if (flag) {
          iter.return();
          return null;
        } else {
          let tmp9 = obj;
          let tmp10 = nextResult;
          obj.standardDeviation = tmp5;
          let tmp11 = num;
          num = num + 1;
        }
      } else {
        iter.return();
        return null;
      }
      continue;
    }
    continue;
  }
  if (tmp != null) {
    if (tmp2 != null) {
      obj.offsetX = tmp;
      obj.offsetY = tmp2;
      return obj;
    }
  }
  return null;
}
function parseLength(arg0) {
  const match = /([+-]?\d*(\.\d+)?)([\w\W]+)?/g.exec(arg0);
  if (match) {
    const _Number = Number;
    if (!Number.isNaN(match[1])) {
      if (match[3] != null) {
        if (match[3] !== "px") {
          return null;
        }
      }
      if (match[3] == null) {
        if (match[1] !== "0") {
          return null;
        }
      }
      const _Number2 = Number;
      return Number(match[1]);
    }
  }
  return null;
}
let closure_0 = module_1(_slicedToArray);
let closure_1 = module_1(processColor);

export default function processFilter(str) {
  const items = [];
  if (str == null) {
    return items;
  } else {
    if (typeof str === "string") {
      const replaced = str.replace(/\n/g, " ");
      const obj4 = /([\w-]+)\(([^()]*|\([^()]*\)|[^()]*\([^()]*\)[^()]*)\)/g;
      let match = obj4.exec(replaced);
      if (match) {
        while (true) {
          let str9 = match[1];
          let formatted = str9.toLowerCase();
          let tmp35 = formatted === "drop-shadow";
          let tmp36 = match;
          let tmp37 = tmp31;
          let tmp38 = tmp32;
          let tmp39 = tmp33;
          if (tmp35) {
            let tmp44 = parseDropShadow;
            let tmp45 = parseDropShadow(match[2]);
            if (tmp45 != null) {
              let tmp46 = items;
              let obj = { dropShadow: tmp45 };
              let arr = items.push(obj);
              tmp37 = tmp45;
              let str10 = tmp32;
              let tmp41 = tmp33;
            } else {
              return [];
            }
          } else {
            str10 = "dropShadow";
            if (!tmp35) {
              let str11 = "hueRotate";
              if (formatted !== "hue-rotate") {
                str11 = formatted;
              }
              str10 = str11;
            }
            let tmp40 = _getFilterAmount;
            tmp41 = _getFilterAmount(str10, match[2]);
            if (tmp41 == null) {
              break;
            } else {
              obj = {};
              obj[str10] = tmp41;
              let tmp42 = items;
              arr = items.push(obj);
            }
          }
          match = obj4.exec(replaced);
          tmp31 = tmp37;
          tmp32 = str10;
          tmp33 = tmp41;
        }
        return [];
      }
    } else {
      const _Array = Array;
      if (Array.isArray(str)) {
        obj = str[Symbol.iterator]();
        while (obj !== undefined) {
          let tmp8 = closure_0;
          let _Object = Object;
          let defaultResult = closure_0.default(Object.entries(tmp6)[0], 2);
          let first = defaultResult[0];
          let tmp11 = first;
          let tmp12 = defaultResult[1];
          if (first === "dropShadow") {
            let tmp22 = parseDropShadow;
            let tmp23 = tmp12;
            let tmp24 = parseDropShadow(tmp12);
            if (tmp24 == null) {
              obj.return();
              return [];
            } else {
              let tmp26 = items;
              let obj1 = {};
              let tmp27 = tmp24;
              obj1.dropShadow = tmp25;
              let arr1 = items.push(obj1);
            }
          } else {
            let tmp13 = _getFilterAmount;
            let tmp14 = first;
            let tmp15 = tmp12;
            let tmp16 = _getFilterAmount(tmp11, tmp12);
            if (tmp16 != null) {
              let obj2 = {};
              let tmp18 = first;
              let tmp19 = tmp16;
              obj2[tmp11] = tmp17;
              let tmp20 = items;
              let arr2 = items.push(obj2);
            } else {
              obj.return();
              return [];
            }
          }
          continue;
        }
      } else {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const typeError = new TypeError("" + tmp49 + " filter is not a string or array");
        throw typeError;
      }
    }
    return items;
  }
};
