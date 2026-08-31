// Module ID: 589
// Function ID: 6410
// Name: getPatternParts
// Dependencies: [1, 38]
// Exports: getPatternParts

// Module 589 (getPatternParts)
import _slicedToArray from "_slicedToArray" /* 38 */;
import module_1 from "module_1" /* 1 */;

let closure_0 = module_1(_slicedToArray);

export function getPatternParts(path) {
  const items = [];
  let obj = { segment: "" };
  let flag = false;
  let flag2 = false;
  let num = 0;
  let num2 = 0;
  let flag3 = false;
  if (0 <= path.length) {
    while (true) {
      let tmp = path;
      let tmp2 = path[num2];
      let tmp3 = obj;
      let tmp4 = flag;
      let tmp5 = flag2;
      let tmp6 = num;
      let tmp7 = num2;
      if (tmp2 != null) {
        obj.segment = obj.segment + tmp2;
      }
      if (tmp2 === ":") {
        let tmp8 = obj;
        let flag4 = flag;
        let flag5 = true;
        let sum = num;
        if (obj.segment !== ":") {
          tmp8 = obj;
          flag4 = flag;
          flag5 = flag2;
          sum = num;
          if (!flag) {
            let tmp32 = globalThis;
            let _Error4 = Error;
            let tmp33 = path;
            let _HermesInternal4 = HermesInternal;
            let str8 = "Encountered ':' in the middle of a segment in path: ";
            let tmp34 = new.target;
            let tmp35 = new.target;
            let error = new Error("Encountered ':' in the middle of a segment in path: " + path);
            let tmp37 = error;
            throw error;
          }
        }
      } else if (tmp2 === "(") {
        if (flag2) {
          tmp8 = obj;
          flag4 = true;
          flag5 = flag2;
          sum = num;
          if (flag) {
            sum = num + 1;
            tmp8 = obj;
            flag4 = flag;
            flag5 = flag2;
          }
        } else {
          let tmp26 = globalThis;
          let _Error3 = Error;
          let tmp27 = path;
          let _HermesInternal3 = HermesInternal;
          let str7 = "Encountered '(' without preceding ':' in path: ";
          let tmp28 = new.target;
          let tmp29 = new.target;
          let error1 = new Error("Encountered '(' without preceding ':' in path: " + path);
          let tmp31 = error1;
          throw error1;
        }
      } else if (tmp2 === ")") {
        if (flag2) {
          if (flag) {
            tmp8 = obj;
            flag4 = false;
            flag5 = false;
            sum = num;
            if (num) {
              sum = num - 1;
              obj.regex = obj.regex + tmp2;
              tmp8 = obj;
              flag4 = flag;
              flag5 = flag2;
            }
          }
        }
        let tmp20 = globalThis;
        let _Error2 = Error;
        let tmp21 = path;
        let _HermesInternal2 = HermesInternal;
        let str6 = "Encountered ')' without preceding '(' in path: ";
        let tmp22 = new.target;
        let tmp23 = new.target;
        let error2 = new Error("Encountered ')' without preceding '(' in path: " + path);
        let tmp25 = error2;
        throw error2;
      } else {
        if (tmp2 === "?") {
          if (obj.param) {
            obj.optional = true;
            tmp8 = obj;
            flag4 = flag;
            flag5 = false;
            sum = num;
          } else {
            let tmp14 = globalThis;
            let _Error = Error;
            let tmp15 = path;
            let _HermesInternal = HermesInternal;
            let str5 = "Encountered '?' without preceding ':' in path: ";
            let tmp16 = new.target;
            let tmp17 = new.target;
            let error3 = new Error("Encountered '?' without preceding ':' in path: " + path);
            let tmp19 = error3;
            throw error3;
          }
        } else if (tmp2 == null) {
          let str = obj.segment;
          obj.segment = str.replace(/\/$/, "");
          let tmp10 = obj;
          let tmp11 = flag;
          let flag6 = false;
          let tmp12 = num;
          if (obj.segment !== "") {
            if (obj.param) {
              let str2 = obj.param;
              obj.param = str2.replace(/^:/, "");
            }
            if (obj.regex) {
              let str3 = obj.regex;
              let str4 = str3.replace(/^\(/, "");
              obj.regex = str4.replace(/\)$/, "");
            }
            let arr = items.push(obj);
            flag3 = flag;
            if (tmp2 == null) {
              break;
            } else {
              obj = { segment: "" };
              tmp8 = obj;
              flag4 = flag;
              flag5 = false;
              sum = num;
            }
          }
          break;
        } else {
          tmp8 = obj;
          flag4 = flag;
          flag5 = flag2;
          sum = num;
          if (tmp2 === "/") {
            tmp8 = obj;
            flag4 = flag;
            flag5 = flag2;
            sum = num;
          }
        }
        num2 = num2 + 1;
        let tmp38 = path;
        obj = tmp10;
        flag = tmp11;
        flag2 = flag6;
        num = tmp12;
        flag3 = tmp11;
        if (num2 > path.length) {
          break;
        }
      }
      if (flag4) {
        tmp8.regex = tmp8.regex || "";
        tmp8.regex = tmp8.regex + tmp2;
      }
      tmp10 = tmp8;
      tmp11 = flag4;
      tmp12 = sum;
      flag6 = flag5;
      if (flag5) {
        tmp10 = tmp8;
        tmp11 = flag4;
        flag6 = flag5;
        tmp12 = sum;
        if (!flag4) {
          tmp8.param = tmp8.param || "";
          tmp8.param = tmp8.param + tmp2;
          tmp10 = tmp8;
          tmp11 = flag4;
          flag6 = flag5;
          tmp12 = sum;
        }
      }
    }
  }
  if (flag3) {
    const _Error6 = Error;
    const _HermesInternal6 = HermesInternal;
    const error4 = new Error("Could not find closing ')' in path: " + path);
    throw error4;
  } else {
    const mapped = items.map((param) => param.param);
    const _Boolean = Boolean;
    const found = mapped.filter(Boolean);
    const entries = found.entries();
    const tmp41 = entries[Symbol.iterator]();
    while (tmp41 !== undefined) {
      let tmp44 = closure_0;
      let defaultResult = closure_0.default(tmp42, 2);
      let tmp46 = defaultResult[1];
      let tmp48 = found;
      let tmp47 = tmp46;
      if (found.indexOf(tmp46) !== defaultResult[0]) {
        let _Error5 = Error;
        let tmp49 = tmp46;
        let tmp50 = path;
        let _HermesInternal5 = HermesInternal;
        let str9 = "Duplicate param name '";
        let str10 = "' found in path: ";
        let tmp51 = new.target;
        let tmp52 = new.target;
        let error5 = new Error("Duplicate param name '" + tmp47 + "' found in path: " + path);
        let tmp54 = error5;
        throw error5;
      }
    }
    return items;
  }
}
