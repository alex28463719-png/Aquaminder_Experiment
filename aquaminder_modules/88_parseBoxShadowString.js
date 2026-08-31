// Module ID: 88
// Function ID: 1220
// Name: parseBoxShadowString
// Dependencies: [1, 89]
// Exports: default

// Module 88 (parseBoxShadowString)
import processColor from "processColor" /* 89 */;
import module_1 from "module_1" /* 1 */;

function parseBoxShadowString(str) {
  const items = [];
  const parts = str.split(/,(?![^()]*\))/);
  const mapped = parts.map((str) => str.trim());
  const found = mapped.filter((arg0) => arg0 !== "");
  const iter = found[Symbol.iterator]();
  while (iter !== undefined) {
    let obj = { offsetX: 0, offsetY: 0 };
    let tmp2;
    let flag = false;
    let num = 0;
    let parts1 = str.split(/\s+(?![^(]*\))/);
    let tmp5 = parts1;
    for (const item10039 of parts1) {
      let tmp6 = item10039;
      let tmp7 = closure_0;
      if (closure_0.default(item10039) != null) {
        let tmp22 = obj;
        if (obj.color != null) {
          obj2.return();
          iter.return();
          return [];
        } else {
          let tmp23 = tmp2;
          if (tmp2 != null) {
            flag = true;
          }
          let tmp24 = obj;
          let tmp25 = item10039;
          obj.color = tmp6;
          continue;
        }
      } else {
        let tmp33 = item10039;
        if (tmp6 === "inset") {
          let tmp19 = obj;
          if (obj.inset != null) {
            obj2.return();
            iter.return();
            return [];
          } else {
            let tmp20 = tmp2;
            if (tmp2 != null) {
              flag = true;
            }
            let tmp21 = obj;
            obj.inset = true;
            continue;
          }
        } else {
          let tmp34 = num;
          if (0 === num) {
            tmp2 = item10039;
            let tmp18 = num;
            num = num + 1;
          } else if (1 === num) {
            let tmp16 = flag;
            if (flag) {
              obj2.return();
              iter.return();
              return [];
            } else {
              tmp3 = item10039;
              let tmp17 = num;
              num = num + 1;
            }
          } else if (2 === num) {
            let tmp12 = flag;
            if (flag) {
              obj2.return();
              iter.return();
              return [];
            } else {
              let tmp13 = obj;
              let tmp14 = item10039;
              obj.blurRadius = tmp6;
              let tmp15 = num;
              num = num + 1;
            }
          } else if (3 === num) {
            let tmp8 = flag;
            if (flag) {
              obj2.return();
              iter.return();
              return [];
            } else {
              let tmp9 = obj;
              let tmp10 = item10039;
              obj.spreadDistance = tmp6;
              let tmp11 = num;
              num = num + 1;
            }
          } else {
            obj2.return();
            iter.return();
            return [];
          }
          continue;
        }
        continue;
      }
      continue;
    }
    let tmp26 = tmp2;
    if (tmp2 != null) {
      let tmp27 = tmp3;
      if (tmp3 != null) {
        let tmp28 = obj;
        let tmp29 = tmp2;
        obj.offsetX = tmp2;
        let tmp30 = tmp3;
        obj.offsetY = tmp3;
        let tmp31 = items;
        let arr = items.push(obj);
        continue;
      }
    }
    iter.return();
    return [];
  }
  return items;
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
let closure_0 = module_1(processColor);

export default function processBoxShadow(str) {
  const items = [];
  if (str == null) {
    return items;
  } else {
    let tmp2 = str;
    if (typeof str === "string") {
      tmp2 = parseBoxShadowString(str.replace(/\n/g, " "));
    }
    const iter = tmp2[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp6 = nextResult;
      let obj = { offsetX: 0, offsetY: 0 };
      let tmp7 = nextResult;
      for (const key10030 in nextResult) {
        let tmp49 = key10030;
        if ("offsetX" === key10030) {
          let tmp38 = nextResult;
          if (typeof tmp6.offsetX === "string") {
            let tmp40 = parseLength;
            let tmp41 = nextResult;
            let offsetX = parseLength(tmp6.offsetX);
          } else {
            let tmp39 = nextResult;
            offsetX = tmp6.offsetX;
          }
          if (offsetX == null) {
            iter.return();
            return [];
          } else {
            let tmp43 = obj;
            let tmp44 = offsetX;
            obj.offsetX = tmp42;
            continue;
          }
        } else {
          if ("offsetY" === key10030) {
            let tmp31 = nextResult;
            if (typeof tmp6.offsetY === "string") {
              let tmp33 = parseLength;
              let tmp34 = nextResult;
              let offsetY = parseLength(tmp6.offsetY);
            } else {
              let tmp32 = nextResult;
              offsetY = tmp6.offsetY;
            }
            if (offsetY == null) {
              iter.return();
              return [];
            } else {
              let tmp36 = obj;
              let tmp37 = offsetY;
              obj.offsetY = tmp35;
              continue;
            }
          } else {
            if ("spreadDistance" === key10030) {
              let tmp24 = nextResult;
              if (typeof tmp6.spreadDistance === "string") {
                let tmp26 = parseLength;
                let tmp27 = nextResult;
                let spreadDistance = parseLength(tmp6.spreadDistance);
              } else {
                let tmp25 = nextResult;
                spreadDistance = tmp6.spreadDistance;
              }
              if (spreadDistance == null) {
                iter.return();
                return [];
              } else {
                let tmp29 = obj;
                let tmp30 = spreadDistance;
                obj.spreadDistance = tmp28;
                continue;
              }
            } else {
              if ("blurRadius" === key10030) {
                let tmp16 = nextResult;
                if (typeof tmp6.blurRadius === "string") {
                  let tmp18 = parseLength;
                  let tmp19 = nextResult;
                  let blurRadius = parseLength(tmp6.blurRadius);
                } else {
                  let tmp17 = nextResult;
                  blurRadius = tmp6.blurRadius;
                }
                let tmp20 = blurRadius;
                if (blurRadius != null) {
                  let tmp21 = blurRadius;
                  if (tmp20 >= 0) {
                    let tmp22 = obj;
                    let tmp23 = blurRadius;
                    obj.blurRadius = tmp20;
                    continue;
                  }
                }
                iter.return();
                return [];
              } else {
                if ("color" === key10030) {
                  let tmp10 = closure_0;
                  let tmp11 = nextResult;
                  let defaultResult = closure_0.default(tmp6.color);
                  if (defaultResult == null) {
                    iter.return();
                    return [];
                  } else {
                    let tmp14 = obj;
                    let tmp15 = defaultResult;
                    obj.color = tmp13;
                    continue;
                  }
                } else {
                  if ("inset" !== key10030) {
                    continue;
                  } else {
                    let tmp8 = obj;
                    let tmp9 = nextResult;
                    obj.inset = tmp6.inset;
                    continue;
                  }
                  continue;
                }
                continue;
              }
              continue;
            }
            continue;
          }
          continue;
        }
        continue;
      }
      let tmp45 = items;
      let tmp46 = obj;
      let arr = items.push(obj);
      continue;
    }
    return items;
  }
};
