// Module ID: 450
// Function ID: 5170
// Name: showActionSheetWithOptions
// Dependencies: [1, 203, 451, 20, 89]

// Module 450 (showActionSheetWithOptions)
import invariant from "invariant" /* 20 */;
import processColor from "processColor" /* 89 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import ActionSheetManager from "ActionSheetManager" /* 451 */;
import module_1 from "module_1" /* 1 */;

let closure_2 = module_1(_objectWithoutProperties);
let closure_3 = module_1(ActionSheetManager);
let closure_4 = ["tintColor", "cancelButtonTintColor", "disabledButtonTintColor", "destructiveButtonIndex"];

export default {
  showActionSheetWithOptions(obj, fn) {
    let tmp2 = typeof obj === "object";
    if (tmp2) {
      tmp2 = obj !== null;
    }
    invariant(tmp2, "Options must be a valid object");
    invariant(typeof fn === "function", "Must provide a valid callback");
    invariant(mod.default, "ActionSheetManager doesn't exist");
    const destructiveButtonIndex = obj.destructiveButtonIndex;
    ({ tintColor, cancelButtonTintColor, disabledButtonTintColor } = obj);
    const tmp = invariant;
    let tmp8 = destructiveButtonIndex;
    if (!Array.isArray(destructiveButtonIndex)) {
      tmp8 = null;
      if (typeof destructiveButtonIndex === "number") {
        const items = [destructiveButtonIndex];
        tmp8 = items;
      }
    }
    obj = processColor;
    const defaultResult1 = obj.default(tintColor);
    const defaultResult = closure_2.default(obj, closure_4);
    const defaultResult2 = processColor.default(cancelButtonTintColor);
    const obj2 = processColor;
    const defaultResult3 = processColor.default(disabledButtonTintColor);
    let tmp13 = defaultResult1 == null;
    const obj3 = processColor;
    if (!tmp13) {
      tmp13 = typeof defaultResult1 === "number";
    }
    invariant(tmp13, "Unexpected color given for ActionSheetIOS.showActionSheetWithOptions tintColor");
    let tmp16 = defaultResult2 == null;
    const tmp12 = invariant;
    if (!tmp16) {
      tmp16 = typeof defaultResult2 === "number";
    }
    invariant(tmp16, "Unexpected color given for ActionSheetIOS.showActionSheetWithOptions cancelButtonTintColor");
    let tmp19 = defaultResult3 == null;
    const tmp15 = invariant;
    if (!tmp19) {
      tmp19 = typeof defaultResult3 === "number";
    }
    invariant(tmp19, "Unexpected color given for ActionSheetIOS.showActionSheetWithOptions disabledButtonTintColor");
    obj = { tintColor: defaultResult1, cancelButtonTintColor: defaultResult2, disabledButtonTintColor: defaultResult3, destructiveButtonIndices: tmp8 };
    const result = mod.default.showActionSheetWithOptions(Object.assign({}, defaultResult, obj), fn);
  },
  showShareActionSheetWithOptions(obj, fn, fn2) {
    let tmp2 = typeof obj === "object";
    if (tmp2) {
      tmp2 = obj !== null;
    }
    invariant(tmp2, "Options must be a valid object");
    invariant(typeof fn === "function", "Must provide a valid failureCallback");
    invariant(typeof fn2 === "function", "Must provide a valid successCallback");
    invariant(mod.default, "ActionSheetManager doesn't exist");
    obj = {};
    const _default = mod.default;
    const tmp = invariant;
    obj.tintColor = processColor.default(obj.tintColor);
    const result = _default.showShareActionSheetWithOptions(Object.assign({}, obj, obj), fn, fn2);
  },
  dismissActionSheet() {
    invariant(mod.default, "ActionSheetManager doesn't exist");
    if (typeof mod.default.dismissActionSheet === "function") {
      mod.default.dismissActionSheet();
      const _default = mod.default;
    }
  }
};
