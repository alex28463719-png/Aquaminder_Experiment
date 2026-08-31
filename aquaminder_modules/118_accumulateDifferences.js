// Module ID: 118
// Function ID: 1361
// Name: accumulateDifferences
// Dependencies: [1, 6, 73]
// Exports: stringifyValidationResult, validate

// Module 118 (accumulateDifferences)
import _toConsumableArray from "_toConsumableArray" /* 6 */;
import animatedShouldDebounceQueueFlush from "animatedShouldDebounceQueueFlush" /* 73 */;
import module_1 from "module_1" /* 1 */;

function accumulateDifferences(items, arr2, arg2, arg3) {
  let tmp2;
  const keys = Object.keys();
  if (keys !== undefined) {
    let tmp4 = tmp2;
    while (keys[tmp] !== undefined) {
      let tmp29 = tmp5;
      let tmp30 = arg2[tmp5];
      if (arg3.hasOwnProperty(tmp5)) {
        let tmp8 = arg3[tmp5];
        let tmp9 = ifObject;
        let tmp10 = ifObject(tmp30);
        if (tmp10 != null) {
          let tmp11 = ifObject;
          let tmp12 = ifObject(tmp8);
          tmp4 = tmp12;
          if (tmp12 != null) {
            let arr = arr2.push(tmp5);
            let tmp20 = accumulateDifferences;
            let tmp21 = items;
            let tmp22 = arr2;
            let tmp23 = tmp10;
            let tmp24 = tmp12;
            let tmp25 = accumulateDifferences(items, arr2, tmp10, tmp12);
            arr = arr2.pop();
            let tmp27 = tmp8;
            let tmp28 = tmp10;
            tmp2 = tmp12;
            continue;
          }
        }
        let tmp13 = tmp8;
        let tmp14 = tmp10;
        tmp2 = tmp4;
        if (tmp30 === tmp8) {
          continue;
        } else {
          let tmp31 = closure_1;
          let tmp32 = tmp8;
          let tmp33 = tmp10;
          tmp2 = tmp4;
          if (closure_1.enableNativeCSSParsing()) {
            continue;
          } else {
            let obj = {};
            items = [];
            let tmp15 = closure_0;
            let items1 = [tmp5];
            obj.path = items.concat(closure_0.default(arr2), items1);
            obj.type = "unequal";
            obj.nativeValue = tmp30;
            obj.staticValue = tmp8;
            let arr1 = items.push(obj);
            let tmp17 = tmp8;
            let tmp18 = tmp10;
            tmp2 = tmp4;
            continue;
          }
          continue;
        }
        continue;
      } else {
        obj = {};
        let items2 = [];
        let tmp6 = closure_0;
        let items3 = [tmp5];
        obj.path = items2.concat(closure_0.default(arr2), items3);
        obj.type = "missing";
        obj.nativeValue = tmp30;
        arr2 = items.push(obj);
        tmp2 = tmp4;
        continue;
      }
      continue;
    }
  }
}
function ifObject(obj) {
  let tmp = null;
  if (typeof obj === "object") {
    const _Array = Array;
    tmp = null;
    if (!Array.isArray(obj)) {
      tmp = obj;
    }
  }
  return tmp;
}
let closure_0 = module_1(_toConsumableArray);
let closure_1 = _interopRequireWildcard(animatedShouldDebounceQueueFlush);

export function stringifyValidationResult(closure_0, validateResult) {
  const differences = validateResult.differences;
  const items = ["StaticViewConfigValidator: Invalid static view config for '" + closure_0 + "'.", ""];
  const combined = items.concat(closure_0.default(differences.map((arg0) => {
    ({ type, path } = arg0);
    if ("missing" === type) {
      const _HermesInternal2 = HermesInternal;
      return "- '" + path.join(".") + "' is missing.";
    } else if ("unequal" === type) {
      const _HermesInternal = HermesInternal;
      return "- '" + path.join(".") + "' is the wrong value.";
    }
  })), [""]);
  return combined.join("\n");
}
export function validate(closure_0, defaultResult2, viewConfig1) {
  const items = [];
  let obj = { bubblingEventTypes: defaultResult2.bubblingEventTypes, directEventTypes: defaultResult2.directEventTypes, uiViewClassName: defaultResult2.uiViewClassName, validAttributes: defaultResult2.validAttributes };
  obj = { bubblingEventTypes: viewConfig1.bubblingEventTypes, directEventTypes: viewConfig1.directEventTypes, uiViewClassName: viewConfig1.uiViewClassName, validAttributes: viewConfig1.validAttributes };
  accumulateDifferences(items, [], obj, obj);
  if (items.length === 0) {
    obj = { type: "valid" };
    return obj;
  } else {
    const obj1 = { type: "invalid", differences: items };
    return obj1;
  }
}
