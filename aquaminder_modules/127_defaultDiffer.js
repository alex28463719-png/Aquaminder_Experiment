// Module ID: 127
// Function ID: 1454
// Name: defaultDiffer
// Dependencies: [1, 128, 129]
// Exports: create, diff

// Module 127 (defaultDiffer)
import flattenStyle from "flattenStyle" /* 128 */;
import deepDiffer from "deepDiffer" /* 129 */;
import module_1 from "module_1" /* 1 */;

function defaultDiffer(arg0, obj) {
  if (typeof obj === "object") {
    if (obj !== null) {
      return closure_1.default(arg0, obj, closure_5);
    }
  }
  return true;
}
function restoreDeletedValuesInNestedArray(arg0, arg1, arg2) {
  if (Array.isArray(arg1)) {
    let diff = tmp11 - 1;
    if (+arg1.length) {
      if (closure_4 > 0) {
        restoreDeletedValuesInNestedArray(arg0, arg1[diff], arg2);
        while (tmp16) {
          let tmp18 = closure_4;
          diff = tmp17;
          if (closure_4 <= 0) {
            break;
          }
        }
        tmp16 = +diff;
      }
    }
  } else if (arg1) {
    if (closure_4 > 0) {
      for (const key10009 in c3) {
        let tmp20 = key10009;
        let tmp21 = _null;
        if (!_null[key10009]) {
          continue;
        } else {
          let tmp2 = arg1[key10009];
          let tmp3 = tmp2;
          if (tmp2 === undefined) {
            continue;
          } else {
            let obj = arg2[key10009];
            let tmp4 = tmp2;
            let tmp5 = obj;
            if (!obj) {
              continue;
            } else {
              if (typeof tmp2 === "function") {
                tmp2 = true;
              }
              if (typeof tmp2 === "undefined") {
                tmp2 = null;
              }
              if (typeof obj !== "object") {
                arg0[key10009] = tmp2;
              } else if (typeof obj.diff === "function") {
                let processResult = tmp2;
                if (typeof obj.process === "function") {
                  processResult = obj.process(tmp2);
                }
                arg0[key10009] = processResult;
              }
              let tmp7 = _null;
              _null[key10009] = false;
              let tmp8 = closure_4;
              closure_4 = closure_4 - 1;
              let tmp9 = tmp2;
              let tmp10 = obj;
              continue;
            }
            continue;
          }
          continue;
        }
        continue;
      }
    }
  }
}
function diffNestedArrayProperty(arg0, arg1, arg2, arg3) {
  let length;
  let length2;
  const tmp = arg1.length < arg2.length ? arg1.length : arg2.length;
  let num = 0;
  let tmp2 = arg0;
  let num2 = 0;
  let tmp3 = arg0;
  if (0 < tmp) {
    do {
      let tmp4 = diffNestedProperty;
      let tmp5 = tmp2;
      let tmp6 = arg3;
      tmp2 = diffNestedProperty(tmp2, arg1[num2], arg2[num2], arg3);
      num2 = num2 + 1;
      tmp3 = tmp2;
      num = num2;
    } while (num2 < tmp);
  }
  let tmp7 = tmp3;
  let sum = num;
  let tmp9 = tmp3;
  let sum1 = num;
  if (num < arg1.length) {
    do {
      let tmp11 = clearNestedProperty;
      tmp7 = clearNestedProperty(tmp7, arg1[sum], arg3);
      sum = sum + 1;
      tmp9 = tmp7;
      sum1 = sum;
      length = arg1.length;
    } while (sum < length);
  }
  let tmp12 = tmp9;
  let tmp13 = tmp9;
  if (sum1 < arg2.length) {
    do {
      let tmp14 = addNestedProperty;
      tmp12 = addNestedProperty(tmp12, arg2[sum1], arg3);
      sum1 = sum1 + 1;
      tmp13 = tmp12;
      length2 = arg2.length;
    } while (sum1 < length2);
  }
  return tmp13;
}
function diffNestedProperty(arg0, arg1, arg2, arg3) {
  if (!arg0) {
    if (arg1 === arg2) {
      return arg0;
    }
  }
  if (arg1) {
    if (arg2) {
      const _Array = Array;
      if (!Array.isArray(arg1)) {
        const _Array2 = Array;
        if (!Array.isArray(arg2)) {
          return diffProperties(arg0, arg1, arg2, arg3);
        }
      }
      const _Array3 = Array;
      if (Array.isArray(arg1)) {
        const _Array4 = Array;
        if (Array.isArray(arg2)) {
          return diffNestedArrayProperty(arg0, arg1, arg2, arg3);
        }
      }
      const _Array5 = Array;
      if (Array.isArray(arg1)) {
        return tmp9(arg0, _default(arg1), arg2, arg3);
      } else {
        return tmp9(arg0, arg1, _default(arg2), arg3);
      }
    }
  }
  if (arg2) {
    return addNestedProperty(arg0, arg2, arg3);
  } else if (arg1) {
    return clearNestedProperty(arg0, arg1, arg3);
  } else {
    return arg0;
  }
}
function addNestedProperty(arg0, arg1, arg2) {
  let length;
  if (arg1) {
    const _Array = Array;
    if (Array.isArray(arg1)) {
      let num = 0;
      let tmp3 = arg0;
      let tmp4 = arg0;
      if (0 < arg1.length) {
        do {
          let tmp5 = addNestedProperty;
          tmp3 = addNestedProperty(tmp3, arg1[num], arg2);
          num = num + 1;
          tmp4 = tmp3;
          length = arg1.length;
        } while (num < length);
      }
      return tmp4;
    } else {
      return addProperties(arg0, arg1, arg2);
    }
  } else {
    return arg0;
  }
}
function clearNestedProperty(arg0, arg1, arg2) {
  let length;
  if (arg1) {
    const _Array = Array;
    if (Array.isArray(arg1)) {
      let num = 0;
      let tmp3 = arg0;
      let tmp4 = arg0;
      if (0 < arg1.length) {
        do {
          let tmp5 = clearNestedProperty;
          tmp3 = clearNestedProperty(tmp3, arg1[num], arg2);
          num = num + 1;
          tmp4 = tmp3;
          length = arg1.length;
        } while (num < length);
      }
      return tmp4;
    } else {
      return clearProperties(arg0, arg1, arg2);
    }
  } else {
    return arg0;
  }
}
function diffProperties(arg0, arg1, arg2, arg3) {
  let tmp3;
  let tmp2 = arg0;
  let tmp5 = arg0;
  const keys = Object.keys();
  if (keys !== undefined) {
    tmp5 = tmp2;
    while (keys[tmp] !== undefined) {
      let tmp69 = tmp11;
      let obj4 = arg3[tmp11];
      tmp3 = obj4;
      if (!obj4) {
        continue;
      } else {
        let tmp12 = arg1[tmp11];
        let tmp13 = arg2[tmp11];
        let flag = tmp12;
        if (typeof tmp13 === "function") {
          tmp13 = true;
          flag = tmp12;
          if (typeof tmp12 === "function") {
            tmp13 = true;
            flag = true;
          }
        }
        let tmp14 = flag;
        if (typeof tmp13 === "undefined") {
          tmp13 = null;
          tmp14 = flag;
          if (typeof flag === "undefined") {
            tmp13 = null;
            tmp14 = null;
          }
        }
        let tmp15 = _null;
        if (_null) {
          let tmp16 = _null;
          _null[tmp11] = false;
        }
        if (tmp7) {
          if (tmp7[tmp11] !== undefined) {
            if (typeof obj4 !== "object") {
              tmp7[tmp11] = tmp13;
              tmp2 = tmp7;
              tmp3 = obj4;
              let tmp45 = tmp13;
              let tmp4 = tmp14;
              continue;
            } else {
              if (typeof obj4.diff === "function") {
                let processResult = tmp13;
                if (typeof obj4.process === "function") {
                  processResult = obj4.process(tmp13);
                }
                tmp7[tmp11] = processResult;
                tmp2 = tmp7;
                tmp3 = obj4;
                let tmp44 = tmp13;
                tmp4 = tmp14;
                continue;
              } else {
                tmp2 = tmp7;
                tmp3 = obj4;
                let tmp42 = tmp13;
                tmp4 = tmp14;
              }
              continue;
            }
            continue;
          }
        }
        tmp2 = tmp7;
        tmp3 = obj4;
        let tmp17 = tmp13;
        tmp4 = tmp14;
        if (tmp14 === tmp13) {
          continue;
        } else {
          if (typeof obj4 !== "object") {
            let tmp38 = defaultDiffer;
            tmp2 = tmp7;
            tmp3 = obj4;
            let tmp39 = tmp13;
            tmp4 = tmp14;
            if (!defaultDiffer(tmp14, tmp13)) {
              continue;
            } else {
              let obj = tmp7;
              let tmp40 = tmp7;
              if (!tmp7) {
                obj = {};
                tmp40 = obj;
              }
              obj[tmp11] = tmp13;
              tmp2 = tmp40;
              tmp3 = obj4;
              let tmp41 = tmp13;
              tmp4 = tmp14;
              continue;
            }
            continue;
          } else {
            if (typeof obj4.diff !== "function") {
              if (typeof obj4.process !== "function") {
                _null = null;
                closure_4 = 0;
                let tmp18 = diffNestedProperty;
                let tmp19 = tmp7;
                let tmp20 = tmp14;
                let tmp21 = tmp13;
                let tmp22 = obj4;
                let tmp23 = diffNestedProperty(tmp7, tmp14, tmp13, obj4);
                let tmp24 = closure_4;
                tmp2 = tmp23;
                tmp3 = obj4;
                let tmp25 = tmp13;
                tmp4 = tmp14;
                if (closure_4 <= 0) {
                  continue;
                } else {
                  tmp3 = obj4;
                  let tmp70 = tmp13;
                  tmp4 = tmp14;
                  tmp2 = tmp23;
                  if (!tmp23) {
                    continue;
                  } else {
                    let tmp26 = restoreDeletedValuesInNestedArray;
                    let tmp27 = restoreDeletedValuesInNestedArray(tmp23, tmp13, obj4);
                    _null = null;
                    tmp2 = tmp23;
                    tmp3 = obj4;
                    let tmp28 = tmp13;
                    tmp4 = tmp14;
                    continue;
                  }
                  continue;
                }
                continue;
              }
              continue;
            }
            let tmp29 = tmp14 === undefined;
            if (tmp29) {
              tmp2 = tmp7;
              tmp3 = obj4;
              let tmp33 = tmp13;
              tmp4 = tmp14;
              if (!tmp29) {
                continue;
              } else {
                let processResult1 = tmp13;
                if (typeof obj4.process === "function") {
                  processResult1 = obj4.process(tmp13);
                }
                obj = tmp7;
                let tmp35 = tmp7;
                if (!tmp7) {
                  obj = {};
                  tmp35 = obj;
                }
                obj[tmp11] = processResult1;
                tmp2 = tmp35;
                tmp3 = obj4;
                let tmp36 = tmp13;
                tmp4 = tmp14;
                let tmp37 = processResult1;
                continue;
              }
              continue;
            } else {
              if (typeof obj4.diff === "function") {
                let diffResult = obj4.diff(tmp14, tmp13);
              } else {
                let tmp30 = defaultDiffer;
                diffResult = defaultDiffer(tmp14, tmp13);
              }
              let tmp32 = diffResult;
            }
          }
          continue;
        }
        continue;
      }
      continue;
    }
  }
  let tmp46 = tmp5;
  let tmp47 = tmp5;
  const keys1 = Object.keys();
  if (keys1 !== undefined) {
    tmp47 = tmp46;
    while (keys1[tmp3] !== undefined) {
      let tmp71 = tmp50;
      if (arg2[tmp50] !== undefined) {
        continue;
      } else {
        let tmp51 = arg3[tmp50];
        tmp46 = tmp49;
        let tmp52 = tmp51;
        if (!tmp51) {
          continue;
        } else {
          if (!tmp49) {
            let tmp54 = arg1[tmp50];
            tmp46 = tmp49;
            let tmp55 = tmp51;
            let tmp56 = tmp54;
            if (tmp54 === undefined) {
              continue;
            } else {
              if (typeof tmp51 === "object") {
                if (typeof tmp51.diff !== "function") {
                  if (typeof tmp51.process !== "function") {
                    let tmp57 = clearNestedProperty;
                    tmp46 = clearNestedProperty(tmp49, tmp54, tmp51);
                    let tmp58 = tmp51;
                    let tmp59 = tmp54;
                    continue;
                  }
                  continue;
                }
              }
              obj = tmp49;
              let tmp60 = tmp49;
              if (!tmp49) {
                obj = {};
                tmp60 = obj;
              }
              obj[tmp50] = null;
              let tmp61 = _null;
              if (!_null) {
                _null = {};
              }
              let tmp62 = _null;
              tmp46 = tmp60;
              let tmp63 = tmp51;
              let tmp64 = tmp54;
              if (_null[tmp50]) {
                continue;
              } else {
                let tmp65 = _null;
                _null[tmp50] = true;
                let tmp66 = closure_4;
                closure_4 = closure_4 + 1;
                tmp46 = tmp60;
                let tmp67 = tmp51;
                let tmp68 = tmp54;
                continue;
              }
              continue;
            }
            continue;
          } else {
            tmp46 = tmp49;
            let tmp53 = tmp51;
          }
          continue;
        }
        continue;
      }
      continue;
    }
  }
  return tmp47;
}
function addProperties(arg0, arg1, arg2) {
  return diffProperties(arg0, closure_2, arg1, arg2);
}
function clearProperties(arg0, arg1, arg2) {
  return diffProperties(arg0, arg1, closure_2, arg2);
}
let closure_0 = module_1(flattenStyle);
let closure_1 = module_1(deepDiffer);
let closure_2 = {};
let c3 = null;
let c4 = 0;
let closure_5 = { unsafelyIgnoreFunctions: true };

export function create(arg0, arg1) {
  return addProperties(null, arg0, arg1);
}
export function diff(arg0, arg1, arg2) {
  return diffProperties(null, arg0, arg1, arg2);
}
