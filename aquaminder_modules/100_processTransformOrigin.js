// Module ID: 100
// Function ID: 1275
// Name: processTransformOrigin
// Dependencies: [1, 38, 20]
// Exports: default

// Module 100 (processTransformOrigin)
import invariant from "invariant" /* 20 */;
import _slicedToArray2 from "_slicedToArray" /* 38 */;
import module_1 from "module_1" /* 1 */;

const _slicedToArray = module_1(_slicedToArray2);
let closure_0 = module_1(invariant);
let c1 = 0;
let c2 = 1;
let c3 = 2;

export default function processTransformOrigin(str) {
  let tmp = str;
  if (typeof str === "string") {
    const obj = /(top|bottom|left|right|center|\d+(?:%|px)|0)/gi;
    const items = ["50%", "50%", 0];
    let tmp26 = c1;
    let match = obj.exec(str);
    tmp = items;
    if (match) {
      while (true) {
        let sum = tmp26 + 1;
        str = match[0];
        let formatted = str.toLowerCase();
        let tmp4 = tmp26;
        let tmp5 = tmp27;
        if ("left" !== formatted) {
          if ("right" !== formatted) {
            if ("top" !== formatted) {
              if ("bottom" !== formatted) {
                if ("center" === formatted) {
                  let tmp8 = closure_0;
                  let tmp9 = c3;
                  let defaultResult = closure_0.default(tmp26 !== c3, "Transform-origin value %s cannot be used for z-position", str);
                  items[tmp26] = "50%";
                  let tmp6 = sum;
                  let tmp7 = tmp27;
                } else if (str.endsWith("%")) {
                  items[tmp26] = str;
                  tmp6 = sum;
                  tmp7 = tmp27;
                } else {
                  let _parseFloat = parseFloat;
                  items[tmp26] = parseFloat(str);
                  tmp6 = sum;
                  tmp7 = tmp27;
                }
              }
            }
            let tmp11 = closure_0;
            let tmp12 = c3;
            let defaultResult1 = closure_0.default(tmp26 !== c3, "Transform-origin %s can only be used for y-position", str);
            let num = "100%";
            let tmp14 = c2;
            if (formatted === "top") {
              num = 0;
            }
            items[tmp14] = num;
            let tmp15 = c1;
            tmp6 = sum;
            tmp7 = tmp27;
            if (tmp26 === c1) {
              let match1 = obj.exec(str);
              tmp = items;
              if (match1 == null) {
                break;
              } else {
                let str14 = match1[0];
                let formatted1 = str14.toLowerCase();
                if ("left" === formatted1) {
                  let tmp20 = c1;
                  items[c1] = 0;
                } else if ("right" === formatted1) {
                  let tmp19 = c1;
                  items[c1] = "100%";
                } else if ("center" === formatted1) {
                  let tmp18 = c1;
                  items[c1] = "50%";
                } else {
                  let tmp16 = closure_0;
                  let defaultResult2 = closure_0.default(false, "Could not parse transform-origin: %s", str);
                }
                tmp6 = c3;
                tmp7 = match1;
              }
            }
            break;
          }
          match = obj.exec(str);
          tmp26 = tmp6;
          tmp27 = tmp7;
          tmp = items;
          if (!match) {
            break;
          }
        }
        let tmp21 = closure_0;
        let tmp22 = c1;
        let defaultResult3 = closure_0.default(tmp26 === c1, "Transform-origin %s can only be used for x-position", str);
        let num2 = "100%";
        let tmp24 = c1;
        if (formatted === "left") {
          num2 = 0;
        }
        items[tmp24] = num2;
        tmp6 = sum;
        tmp7 = tmp27;
      }
    }
  }
  return tmp;
};
