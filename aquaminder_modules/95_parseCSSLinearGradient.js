// Module ID: 95
// Function ID: 1256
// Name: parseCSSLinearGradient
// Dependencies: [1, 38, 89]
// Exports: default

// Module 95 (parseCSSLinearGradient)
import _slicedToArray from "_slicedToArray" /* 38 */;
import processColor from "processColor" /* 89 */;
import module_1 from "module_1" /* 1 */;

function parseCSSLinearGradient(arg0) {
  const items = [];
  let obj = /linear-gradient\s*\(((?:\([^)]*\)|[^())])*)\)/gi;
  let match = obj.exec(arg0);
  if (match) {
    while (true) {
      let str = match[1];
      let parts = str.split(",");
      let tmp12 = closure_5;
      let str2 = parts[0];
      let str3 = str2.trim();
      let formatted = str3.toLowerCase();
      let tmp14 = regex2;
      let tmp15 = tmp2;
      let tmp16 = tmp3;
      let tmp17 = tmp4;
      let tmp18 = tmp5;
      let tmp19 = tmp6;
      let tmp20 = tmp7;
      let tmp21 = tmp8;
      let tmp22 = tmp9;
      let tmp23 = tmp10;
      let tmp24 = tmp11;
      if (regex2.test(formatted)) {
        let tmp31 = getAngleInDegrees;
        let tmp32 = getAngleInDegrees(formatted);
        if (tmp32 != null) {
          obj = { type: "angle", value: tmp32 };
          let arr = parts.shift();
          tmp12 = obj;
          let tmp26 = tmp32;
          let tmp27 = tmp3;
        } else {
          return [];
        }
      } else {
        let tmp25 = regex;
        tmp26 = tmp2;
        tmp27 = tmp3;
        if (regex.test(formatted)) {
          let tmp28 = getDirectionForKeyword;
          let tmp29 = getDirectionForKeyword(formatted);
          if (tmp29 == null) {
            break;
          } else {
            arr = parts.shift();
            tmp12 = tmp29;
            tmp26 = tmp2;
            tmp27 = tmp29;
          }
        }
      }
      let str4 = parts.join(",");
      let items1 = [];
      let parts1 = str4.split(/,(?![^(]*\))/);
      let tmp34 = null;
      let num = 0;
      let tmp35 = tmp5;
      let tmp36 = tmp6;
      let tmp37 = tmp7;
      let tmp38 = tmp8;
      let tmp39 = tmp9;
      let tmp40 = tmp10;
      let tmp41 = tmp11;
      let tmp42 = tmp5;
      let tmp43 = tmp6;
      let tmp44 = tmp7;
      let tmp45 = tmp8;
      let tmp46 = tmp9;
      let tmp47 = tmp10;
      let tmp48 = tmp11;
      if (0 < parts1.length) {
        let str5 = parts1[num];
        let str6 = str5.trim();
        let str7 = str6.toLowerCase();
        let match1 = str7.match(/\S+\([^)]*\)|\S+/g);
        let tmp49 = tmp34;
        let tmp50 = num;
        let tmp51 = tmp35;
        let tmp52 = tmp36;
        let tmp53 = tmp37;
        let tmp54 = tmp38;
        let tmp55 = tmp39;
        let tmp56 = tmp40;
        let tmp57 = tmp41;
        while (match1 != null) {
          if (match1.length === 3) {
            let tmp78 = getPositionFromCSSValue;
            let tmp79 = getPositionFromCSSValue(match1[1]);
            let tmp80 = getPositionFromCSSValue(match1[2]);
            let tmp81 = require;
            let tmp82 = dependencyMap;
            let obj8 = processColor;
            let defaultResult = obj8.default(match1[0]);
            if (defaultResult == null) {
              return [];
            } else {
              if (tmp79 != null) {
                if (tmp80 != null) {
                  obj = { color: defaultResult, position: tmp79 };
                  let arr1 = items1.push(obj);
                  let obj1 = { color: defaultResult, position: tmp80 };
                  let arr2 = items1.push(obj1);
                  let tmp64 = tmp79;
                  let tmp65 = tmp80;
                  let tmp66 = defaultResult;
                  let tmp67 = tmp38;
                  let tmp68 = tmp39;
                  let tmp69 = tmp40;
                  let defaultResult2 = tmp41;
                }
              }
              return [];
            }
          } else if (match1.length === 2) {
            let tmp72 = getPositionFromCSSValue;
            let tmp73 = getPositionFromCSSValue(match1[1]);
            let tmp74 = require;
            let tmp75 = dependencyMap;
            let obj5 = processColor;
            let defaultResult1 = obj5.default(match1[0]);
            if (defaultResult1 == null) {
              return [];
            } else if (tmp73 == null) {
              return [];
            } else {
              let obj2 = { color: defaultResult1, position: tmp73 };
              let arr3 = items1.push(obj2);
              tmp64 = tmp35;
              tmp65 = tmp36;
              tmp66 = tmp37;
              tmp67 = tmp73;
              tmp68 = defaultResult1;
              tmp69 = tmp40;
              defaultResult2 = tmp41;
            }
          } else if (match1.length === 1) {
            let tmp58 = getPositionFromCSSValue;
            let tmp59 = getPositionFromCSSValue(match1[0]);
            if (tmp59 != null) {
              if (tmp34 != null) {
                if (tmp34.length === 1) {
                  let tmp70 = getPositionFromCSSValue;
                }
                return [];
              }
              if (num !== parts1.length - 1) {
                if (num !== 0) {
                  let obj3 = { color: null, position: tmp59 };
                  let arr4 = items1.push(obj3);
                  tmp64 = tmp35;
                  tmp65 = tmp36;
                  tmp66 = tmp37;
                  tmp67 = tmp38;
                  tmp68 = tmp39;
                  tmp69 = tmp59;
                  defaultResult2 = tmp41;
                }
              }
            } else {
              let tmp60 = require;
              let tmp61 = dependencyMap;
              obj2 = processColor;
              defaultResult2 = obj2.default(match1[0]);
              if (defaultResult2 == null) {
                return [];
              } else {
                let obj4 = { color: defaultResult2, position: null };
                let arr5 = items1.push(obj4);
                tmp64 = tmp35;
                tmp65 = tmp36;
                tmp66 = tmp37;
                tmp67 = tmp38;
                tmp68 = tmp39;
                tmp69 = tmp59;
              }
            }
          } else {
            return [];
          }
          num = num + 1;
          tmp35 = tmp64;
          tmp36 = tmp65;
          tmp37 = tmp66;
          tmp38 = tmp67;
          tmp39 = tmp68;
          tmp40 = tmp69;
          tmp41 = defaultResult2;
          tmp34 = match1;
          tmp17 = match1;
          tmp42 = tmp64;
          tmp43 = tmp65;
          tmp44 = tmp66;
          tmp45 = tmp67;
          tmp46 = tmp68;
          tmp47 = tmp69;
          tmp48 = defaultResult2;
          continue;
        }
        return [];
      }
      obj5 = { type: "linearGradient", direction: tmp12, colorStops: items1 };
      let arr6 = items.push(obj5);
      match = obj.exec(arg0);
      tmp4 = tmp17;
      tmp5 = tmp42;
      tmp6 = tmp43;
      tmp7 = tmp44;
      tmp8 = tmp45;
      tmp9 = tmp46;
      tmp10 = tmp47;
      tmp11 = tmp48;
      tmp2 = tmp26;
      tmp3 = tmp27;
    }
    return [];
  }
  return items;
}
function getDirectionForKeyword(formatted) {
  if (formatted == null) {
    return null;
  } else {
    formatted = formatted.replace(/\s+/g, " ").toLowerCase();
    if ("to top" === formatted) {
      return { type: "angle", value: 0 };
    } else if ("to right" === formatted) {
      return { type: "angle", value: 90 };
    } else if ("to bottom" === formatted) {
      return { type: "angle", value: 180 };
    } else if ("to left" === formatted) {
      return { type: "angle", value: 270 };
    } else {
      if ("to top right" !== formatted) {
        if ("to right top" !== formatted) {
          if ("to bottom right" !== formatted) {
            if ("to right bottom" !== formatted) {
              if ("to top left" !== formatted) {
                if ("to left top" !== formatted) {
                  if ("to bottom left" !== formatted) {
                    if ("to left bottom" !== formatted) {
                      return null;
                    }
                  }
                  return { type: "keyword", value: "to bottom left" };
                }
              }
              return { type: "keyword", value: "to top left" };
            }
          }
          return { type: "keyword", value: "to bottom right" };
        }
      }
      return { type: "keyword", value: "to top right" };
    }
    const str10 = formatted.replace(/\s+/g, " ");
  }
}
function getAngleInDegrees(formatted) {
  if (formatted == null) {
    return null;
  } else {
    const match = formatted.match(closure_4);
    if (match) {
      const defaultResult = closure_2.default(match, 3);
      const _parseFloat = parseFloat;
      const parsed = parseFloat(defaultResult[1]);
      if ("deg" === defaultResult[2]) {
        return parsed;
      } else if ("grad" === tmp3) {
        return parsed * 0.9;
      } else if ("rad" === tmp3) {
        const _Math = Math;
        return parsed * 180 / Math.PI;
      } else if ("turn" === tmp3) {
        return parsed * 360;
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
}
function getPositionFromCSSValue(str) {
  if (str.endsWith("px")) {
    const _parseFloat = parseFloat;
    return parseFloat(str);
  } else if (str.endsWith("%")) {
    return str;
  }
}
let closure_2 = module_1(_slicedToArray);
const re3 = /^to\s+(?:top|bottom|left|right)(?:\s+(?:top|bottom|left|right))?/i;
const re4 = /^([+-]?\d*\.?\d+)(deg|grad|rad|turn)$/i;
let closure_5 = { type: "angle", value: 180 };

export default function processBackgroundImage(str) {
  let items = [];
  if (str == null) {
    return items;
  } else {
    if (typeof str === "string") {
      items = parseCSSLinearGradient(str.replace(/\n/g, " "));
    } else {
      const _Array2 = Array;
      if (Array.isArray(str)) {
        const iter = str[Symbol.iterator]();
        while (true) {
          let nextResult = iter.next();
          let tmp3 = iter;
          if (iter === undefined) {
            break;
          } else {
            let tmp4 = nextResult;
            let items1 = [];
            let num4 = 0;
            if (0 < nextResult.colorStops.length) {
              while (true) {
                let tmp5 = nextResult;
                let tmp6 = num4;
                let tmp7 = tmp4.colorStops[num4];
                let positions = tmp7.positions;
                let tmp8 = tmp7;
                if (tmp7.color == null) {
                  let _Array = Array;
                  let tmp9 = positions;
                  if (Array.isArray(positions)) {
                    let tmp10 = positions;
                    if (positions.length === 1) {
                      let tmp28 = positions;
                      let first = positions[0];
                      let obj6 = first;
                      if (typeof first !== "number") {
                        let tmp30 = first;
                        if (typeof obj6 === "string") {
                          let tmp31 = first;
                        }
                        iter.return();
                        return [];
                      }
                      let tmp32 = items1;
                      let obj = { color: null };
                      let tmp33 = first;
                      obj.position = obj6;
                      let arr = items1.push(obj);
                      let tmp35 = num4;
                      let sum = num4 + 1;
                      num4 = sum;
                      let tmp37 = nextResult;
                    }
                  }
                }
                let tmp11 = require;
                let tmp12 = dependencyMap;
                obj = processColor;
                let tmp13 = tmp7;
                let defaultResult = obj.default(tmp8.color);
                let tmp15 = defaultResult;
                if (defaultResult == null) {
                  break;
                } else {
                  let tmp60 = positions;
                  if (positions != null) {
                    let tmp16 = positions;
                    if (positions.length > 0) {
                      let tmp20 = positions;
                      let tmp21 = positions;
                      for (const item10064 of positions) {
                        let obj3 = item10064;
                        if (typeof item10064 !== "number") {
                          let tmp22 = item10064;
                          if (typeof obj3 === "string") {
                            let tmp23 = item10064;
                          }
                          obj2.return();
                          iter.return();
                          return [];
                        }
                        let tmp24 = items1;
                        obj = {};
                        let tmp25 = defaultResult;
                        obj.color = tmp15;
                        let tmp26 = item10064;
                        obj.position = obj3;
                        arr = items1.push(obj);
                        continue;
                      }
                    }
                  }
                  let tmp17 = items1;
                  let obj1 = {};
                  let tmp18 = defaultResult;
                  obj1.color = tmp15;
                  obj1.position = null;
                  let arr1 = items1.push(obj1);
                }
              }
              iter.return();
              return [];
            }
            let tmp38 = closure_5;
            let tmp39 = nextResult;
            let formatted = null;
            if (tmp4.direction != null) {
              let tmp41 = nextResult;
              let str5 = tmp4.direction;
              formatted = str5.toLowerCase();
            }
            let tmp42 = formatted;
            if (formatted == null) {
              let tmp54 = items;
              let obj2 = { type: "linearGradient" };
              let tmp55 = tmp38;
              obj2.direction = tmp38;
              let tmp56 = items1;
              obj2.colorStops = items1;
              items = items.concat(obj2);
            } else {
              let tmp61 = regex2;
              let tmp62 = formatted;
              if (!regex2.test(tmp42)) {
                let tmp43 = regex;
                let tmp44 = formatted;
                if (regex.test(tmp42)) {
                  let tmp45 = getDirectionForKeyword;
                  let tmp46 = formatted;
                  let tmp47 = getDirectionForKeyword(tmp42);
                  let tmp48 = tmp47;
                  if (tmp47 != null) {
                    tmp38 = tmp47;
                  } else {
                    iter.return();
                    return [];
                  }
                } else {
                  iter.return();
                  return [];
                }
              }
            }
            let tmp49 = getAngleInDegrees;
            let tmp50 = formatted;
            let tmp51 = getAngleInDegrees(tmp42);
            if (tmp51 != null) {
              obj3 = { type: "angle" };
              let tmp53 = tmp51;
              obj3.value = tmp52;
              tmp38 = obj3;
            } else {
              iter.return();
              return [];
            }
          }
        }
      }
    }
    return items;
  }
};
