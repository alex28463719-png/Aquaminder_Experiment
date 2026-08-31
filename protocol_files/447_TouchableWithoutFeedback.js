// Module ID: 447
// Function ID: 5163
// Name: TouchableWithoutFeedback
// Dependencies: [1, 203, 248, 287, 119, 251]
// Exports: default

// Module 447 (TouchableWithoutFeedback)
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import View2 from "View" /* 248 */;
import usePressability from "usePressability" /* 287 */;
import module_1 from "module_1" /* 1 */;
import jsxProd from "jsxProd" /* 251 */;

let closure_0 = module_1(_objectWithoutProperties);
const View = module_1(View2);
let closure_1 = module_1(usePressability);
const getIteratorFn = _interopRequireWildcard(getIteratorFn2);
let closure_4 = ["onBlur", "onFocus"];
let closure_5 = ["accessibilityActions", "accessibilityElementsHidden", "accessibilityHint", "accessibilityLanguage", "accessibilityIgnoresInvertColors", "accessibilityLabel", "accessibilityLiveRegion", "accessibilityRole", "accessibilityValue", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "accessibilityViewIsModal", "aria-modal", "hitSlop", "importantForAccessibility", "nativeID", "onAccessibilityAction", "onBlur", "onFocus", "onLayout", "testID"];

export default function TouchableWithoutFeedback(disabled) {
  disabled = disabled.disabled;
  const rejectResponderTermination = disabled.rejectResponderTermination;
  aria_disabled = disabled["aria-disabled"];
  const accessibilityState = disabled.accessibilityState;
  const hitSlop = disabled.hitSlop;
  const delayLongPress = disabled.delayLongPress;
  const delayPressIn = disabled.delayPressIn;
  const delayPressOut = disabled.delayPressOut;
  const pressRetentionOffset = disabled.pressRetentionOffset;
  const touchSoundDisabled = disabled.touchSoundDisabled;
  const onBlur = disabled.onBlur;
  const onFocus = disabled.onFocus;
  const onLongPress = disabled.onLongPress;
  const onPress = disabled.onPress;
  const onPressIn = disabled.onPressIn;
  const onPressOut = disabled.onPressOut;
  const items = [rejectResponderTermination, disabled, aria_disabled, , , , , , , , , , , , , ];
  disabled = undefined;
  if (accessibilityState != null) {
    disabled = accessibilityState.disabled;
  }
  items[3] = disabled;
  items[4] = hitSlop;
  items[5] = delayLongPress;
  items[6] = delayPressIn;
  items[7] = delayPressOut;
  items[8] = pressRetentionOffset;
  items[9] = touchSoundDisabled;
  items[10] = onBlur;
  items[11] = onFocus;
  items[12] = onLongPress;
  items[13] = onPress;
  items[14] = onPressIn;
  items[15] = onPressOut;
  const defaultResult = rejectResponderTermination.default(aria_disabled.useMemo(() => {
    const obj = { cancelable: !rejectResponderTermination };
    if (disabled === null) {
      if (aria_disabled != null) {
        disabled = aria_disabled;
      } else if (accessibilityState != null) {
        disabled = accessibilityState.disabled;
      }
    }
    obj.disabled = disabled;
    obj.hitSlop = hitSlop;
    obj.delayLongPress = delayLongPress;
    obj.delayPressIn = delayPressIn;
    obj.delayPressOut = delayPressOut;
    obj.minPressDuration = 0;
    obj.pressRectOffset = pressRetentionOffset;
    obj.android_disableSound = touchSoundDisabled;
    obj.onBlur = onBlur;
    obj.onFocus = onFocus;
    obj.onLongPress = onLongPress;
    obj.onPress = onPress;
    obj.onPressIn = onPressIn;
    obj.onPressOut = onPressOut;
    return obj;
  }, items));
  const Children = accessibilityState.Children;
  const onlyResult = Children.only(disabled.children);
  const items1 = [onlyResult.props.children];
  let accessibilityLiveRegion = disabled["aria-live"];
  let obj = {};
  aria_busy = disabled["aria-busy"];
  if (aria_busy == null) {
    const accessibilityState2 = disabled.accessibilityState;
    let busy;
    if (accessibilityState2 != null) {
      busy = accessibilityState2.busy;
    }
    aria_busy = busy;
  }
  obj.busy = aria_busy;
  aria_checked = disabled["aria-checked"];
  if (aria_checked == null) {
    const accessibilityState3 = disabled.accessibilityState;
    let checked;
    if (accessibilityState3 != null) {
      checked = accessibilityState3.checked;
    }
    aria_checked = checked;
  }
  obj.checked = aria_checked;
  aria_disabled2 = disabled["aria-disabled"];
  if (aria_disabled2 == null) {
    const accessibilityState4 = disabled.accessibilityState;
    let disabled1;
    if (accessibilityState4 != null) {
      disabled1 = accessibilityState4.disabled;
    }
    aria_disabled2 = disabled1;
  }
  obj.disabled = aria_disabled2;
  aria_expanded = disabled["aria-expanded"];
  if (aria_expanded == null) {
    const accessibilityState5 = disabled.accessibilityState;
    let expanded;
    if (accessibilityState5 != null) {
      expanded = accessibilityState5.expanded;
    }
    aria_expanded = expanded;
  }
  obj.expanded = aria_expanded;
  aria_selected = disabled["aria-selected"];
  if (aria_selected == null) {
    const accessibilityState6 = disabled.accessibilityState;
    let selected;
    if (accessibilityState6 != null) {
      selected = accessibilityState6.selected;
    }
    aria_selected = selected;
  }
  obj.selected = aria_selected;
  ({ onBlur: onBlur2, onFocus: onFocus2 } = defaultResult);
  obj = { accessible: disabled.accessible !== false };
  let merged = obj;
  if (disabled.disabled != null) {
    const _Object = Object;
    obj = { disabled: disabled.disabled };
    merged = Object.assign({}, obj, obj);
  }
  obj.accessibilityState = merged;
  let tmp17 = disabled.focusable !== false;
  if (tmp17) {
    tmp17 = disabled.onPress !== undefined;
  }
  if (tmp17) {
    tmp17 = !disabled.disabled;
  }
  obj.focusable = tmp17;
  let accessibilityElementsHidden = disabled["aria-hidden"];
  if (accessibilityElementsHidden == null) {
    accessibilityElementsHidden = disabled.accessibilityElementsHidden;
  }
  obj.accessibilityElementsHidden = accessibilityElementsHidden;
  let str = "no-hide-descendants";
  if (disabled["aria-hidden"] !== true) {
    str = disabled.importantForAccessibility;
  }
  obj.importantForAccessibility = str;
  let str2 = "none";
  if (accessibilityLiveRegion !== "off") {
    if (accessibilityLiveRegion == null) {
      accessibilityLiveRegion = disabled.accessibilityLiveRegion;
    }
    str2 = accessibilityLiveRegion;
  }
  obj.accessibilityLiveRegion = str2;
  let nativeID = disabled.id;
  if (nativeID == null) {
    nativeID = disabled.nativeID;
  }
  obj.nativeID = nativeID;
  const merged1 = Object.assign({}, disabled.default(defaultResult, hitSlop), obj);
  for (const item10120 of delayLongPress) {
    let tmp25 = item10120;
    let tmp26 = arg0;
    if (arg0[item10120] !== undefined) {
      let tmp27 = merged1;
      let tmp28 = item10120;
      let tmp29 = arg0;
      merged1[tmp25] = arg0[tmp25];
    }
    continue;
  }
  const cloneElement = accessibilityState.cloneElement;
  const items2 = [onlyResult, merged1];
  return cloneElement.apply(accessibilityState, items2.concat(items1));
};
