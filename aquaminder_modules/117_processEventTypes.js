// Module ID: 117
// Function ID: 1357
// Name: processEventTypes
// Dependencies: [1, 20]
// Exports: get, register

// Module 117 (processEventTypes)
import invariant from "invariant" /* 20 */;
import module_1 from "module_1" /* 1 */;

function processEventTypes(value1Result) {
  ({ bubblingEventTypes, directEventTypes } = value1Result);
  if (bubblingEventTypes != null) {
    for (const key10006 in bubblingEventTypes) {
      let tmp5 = key10006;
      let tmp6 = obj;
      if (obj[key10006] != null) {
        continue;
      } else {
        let tmp2 = obj;
        obj[key10006] = bubblingEventTypes[key10006];
        continue;
      }
      continue;
    }
  }
  if (directEventTypes != null) {
    for (const key10011 in directEventTypes) {
      let tmp7 = key10011;
      let tmp8 = obj;
      if (obj[key10011] != null) {
        continue;
      } else {
        let tmp4 = obj;
        obj[key10011] = directEventTypes[key10011];
        continue;
      }
      continue;
    }
  }
}
let closure_0 = module_1(invariant);
let obj = {};
obj = {};
const map = new Map();
const map1 = new Map();

export function get(arg0) {
  let value = map1.get(arg0);
  if (value == null) {
    value = map.get(arg0);
    if (typeof value !== "function") {
      let str = "null";
      if (value !== null) {
        str = tmp18;
      }
      let str4 = "";
      if (typeof arg0[0] === "string") {
        str4 = "";
        if (obj.test(arg0[0])) {
          str4 = " Make sure to start component names with a capital letter.";
        }
        obj = /[a-z]/;
      }
      closure_0.default(false, "View config getter callback for component `%s` must be a function (received `%s`).%s", arg0, str, str4);
    }
    const value1Result = value();
    closure_0.default(value1Result, "View config not found for component `%s`", arg0);
    processEventTypes(value1Result);
    const result = map1.set(arg0, value1Result);
    const result1 = map.set(arg0, null);
    value = value1Result;
  }
  return value;
}
export function register(arg0, arg1) {
  closure_0.default(!map.has(arg0), "Tried to register two views with the same name %s", arg0);
  let str = "null";
  if (arg1 !== null) {
    str = tmp2;
  }
  closure_0.default(typeof arg1 === "function", "View config getter callback for component `%s` must be a function (received `%s`)", arg0, str);
  const result = map.set(arg0, arg1);
  return arg0;
}
export const customBubblingEventTypes = obj;
export const customDirectEventTypes = obj;
