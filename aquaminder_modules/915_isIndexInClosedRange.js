// Module ID: 915
// Function ID: 9752
// Name: isIndexInClosedRange
// Dependencies: [2]
// Exports: assertDetentsArrayIsSorted, resolveSheetAllowedDetents, resolveSheetInitialDetentIndex, resolveSheetLargestUndimmedDetent

// Module 915 (isIndexInClosedRange)
import closure_0 from "get registerCallableModule" /* 2 */;

function isIndexInClosedRange(SHEET_DIMMED_ALWAYS, c5, arg2) {
  let isIntegerResult = Number.isInteger(SHEET_DIMMED_ALWAYS);
  if (isIntegerResult) {
    isIntegerResult = SHEET_DIMMED_ALWAYS >= c5;
  }
  if (isIntegerResult) {
    isIntegerResult = SHEET_DIMMED_ALWAYS <= arg2;
  }
  return isIntegerResult;
}
const items = [-1];
const items1 = [1];
const items2 = [0.5];
const items3 = [0.5, 1];
let c5 = -1;

export function assertDetentsArrayIsSorted(arg0) {
  let num = 1;
  if (1 < arg0.length) {
    while (arg0[num - 1] <= arg0[num]) {
      num = num + 1;
    }
    const _Error = Error;
    const error = new Error("[RNScreens] The detent array is not sorted in ascending order!");
    throw error;
  }
}
export function resolveSheetAllowedDetents(sheetAllowedDetents) {
  if (Array.isArray(sheetAllowedDetents)) {
    let substr = sheetAllowedDetents;
    if (Platform.Platform.OS === "android") {
      substr = sheetAllowedDetents;
      if (sheetAllowedDetents.length > 3) {
        substr = sheetAllowedDetents.slice(0, 3);
      }
    }
    return substr;
  } else if (sheetAllowedDetents === "fitToContents") {
    return items;
  } else if (sheetAllowedDetents === "large") {
    return items1;
  } else if (sheetAllowedDetents === "medium") {
    return items2;
  } else if (sheetAllowedDetents === "all") {
    return items3;
  } else {
    return items1;
  }
}
export function resolveSheetInitialDetentIndex(SHEET_DIMMED_ALWAYS, arg1) {
  let num = arg1;
  if (SHEET_DIMMED_ALWAYS !== "last") {
    num = SHEET_DIMMED_ALWAYS;
    if (SHEET_DIMMED_ALWAYS == null) {
      num = 0;
    }
  }
  if (isIndexInClosedRange(num, 0, arg1)) {
    return num;
  } else {
    return 0;
  }
}
export function resolveSheetLargestUndimmedDetent(SHEET_DIMMED_ALWAYS, arg1) {
  if (typeof SHEET_DIMMED_ALWAYS === "number") {
    if (isIndexInClosedRange(SHEET_DIMMED_ALWAYS, c5, arg1)) {
      return SHEET_DIMMED_ALWAYS;
    } else {
      return c5;
    }
  } else if (SHEET_DIMMED_ALWAYS === "last") {
    return arg1;
  } else {
    if (SHEET_DIMMED_ALWAYS !== "none") {
      if (SHEET_DIMMED_ALWAYS !== "all") {
        if (SHEET_DIMMED_ALWAYS === "large") {
          return 1;
        } else if (SHEET_DIMMED_ALWAYS === "medium") {
          return 0;
        } else {
          return c5;
        }
      }
    }
    return c5;
  }
}
export const SHEET_FIT_TO_CONTENTS = items;
export const SHEET_COMPAT_LARGE = items1;
export const SHEET_COMPAT_MEDIUM = items2;
export const SHEET_COMPAT_ALL = items3;
export const SHEET_DIMMED_ALWAYS = -1;
