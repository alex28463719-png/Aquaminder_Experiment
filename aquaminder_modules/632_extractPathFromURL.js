// Module ID: 632
// Function ID: 6776
// Name: extractPathFromURL
// Dependencies: [1, 633, 591]
// Exports: extractPathFromURL

// Module 632 (extractPathFromURL)
import _mod591 from "module_591" /* 591 */;
import _toArray from "_toArray" /* 633 */;
import module_1 from "module_1" /* 1 */;

let closure_0 = module_1(_toArray);
let closure_1 = module_1(_mod591);

export function extractPathFromURL(closure_1_3, currentResult) {
  const iter = closure_1_3[Symbol.iterator]();
  let str = iter.next();
  while (iter !== undefined) {
    let str2 = str;
    let match = str.match(/^[^:]+:/);
    let first;
    if (match != null) {
      let tmp4 = match;
      first = tmp2[0];
    }
    let tmp5 = first;
    let str3 = "";
    if (first != null) {
      str3 = first;
    }
    let tmp6 = str;
    let _RegExp = RegExp;
    let tmp7 = closure_1;
    let _HermesInternal = HermesInternal;
    let tmp8 = new.target;
    let tmp9 = new.target;
    let regExp = new RegExp("^" + closure_1.default(str3));
    let tmp11 = regExp;
    let str4 = str2.replace(regExp, "");
    let str5 = str4.replace(/\/+/g, "/");
    let str6 = str5.replace(/^\//, "");
    let _RegExp2 = RegExp;
    let tmp12 = closure_1;
    let defaultResult = closure_1.default(str3);
    let parts = str6.split(".");
    let mapped = parts.map((arg0) => {
      let str = "[^/]+";
      if (arg0 !== "*") {
        str = closure_1_1.default(arg0);
      }
      return str;
    });
    let _HermesInternal2 = HermesInternal;
    let tmp14 = new.target;
    let tmp15 = new.target;
    let regExp1 = new RegExp("^" + defaultResult + "(/)*" + mapped.join("\\."));
    let obj2 = regExp1;
    let tmp17 = currentResult;
    let tmp18 = closure_0;
    let defaultResult1 = closure_0.default(currentResult.split("?"));
    let str7 = defaultResult1[0];
    let substr = defaultResult1.slice(1);
    let obj3 = substr;
    let replaced = str7.replace(/\/+/g, "/");
    let str8 = "";
    if (substr.length) {
      let tmp19 = substr;
      let _HermesInternal3 = HermesInternal;
      str8 = "?" + obj3.join("?");
    }
    let combined = replaced.concat(str8);
    let str9 = combined;
    let tmp21 = regExp1;
    if (obj2.test(combined)) {
      let tmp22 = combined;
      let replaced1 = str9.replace(regExp1, "");
      iter.return();
      return replaced1;
    }
  }
}
