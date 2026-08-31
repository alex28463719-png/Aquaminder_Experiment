// Module ID: 284
// Function ID: 3279
// Name: Button
// Dependencies: [1, 253, 285, 33, 297, 298, 248, 20, 119, 251]

// Module 284 (Button)
import invariant from "invariant" /* 20 */;
import get_Version from "get Version" /* 33 */;
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import View from "View" /* 248 */;
import setStyleAttributePreprocessor2 from "setStyleAttributePreprocessor" /* 253 */;
import useTextPressability from "useTextPressability" /* 285 */;
import _callSuper2 from "_callSuper" /* 297 */;
import _callSuper3 from "_callSuper" /* 298 */;
import module_1 from "module_1" /* 1 */;
import closure_4 from "jsxProd" /* 251 */;

const setStyleAttributePreprocessor = module_1(setStyleAttributePreprocessor2);
let closure_0 = module_1(useTextPressability);
get_Version = module_1(get_Version);
let _callSuper = module_1(_callSuper2);
_callSuper = module_1(_callSuper3);
let closure_2 = module_1(View);
let closure_3 = module_1(invariant);
let getIteratorFn = _interopRequireWildcard(getIteratorFn2);
let closure_5 = get_Version.default.OS === "android" ? _callSuper.default : _callSuper.default;
const forwardRefResult = getIteratorFn.forwardRef((disabled, ref) => {
  ({ accessibilityState, aria-busy: tmp, aria-checked: tmp2, aria-disabled: tmp3, aria-expanded: tmp4, aria-label: tmp5, aria-selected: tmp6, importantForAccessibility, color, title } = disabled);
  const items = [closure_6.button];
  const items1 = [closure_6.text];
  ({ accessibilityLabel, onPress, touchSoundDisabled, hasTVPreferredFocus, nextFocusDown, nextFocusForward, nextFocusLeft, nextFocusRight, nextFocusUp, testID, accessible, accessibilityActions, accessibilityHint, accessibilityLanguage, onAccessibilityAction } = disabled);
  if (color) {
    if (get_Version.default.OS === "ios") {
      let obj = { color };
      items1.push(obj);
    } else {
      obj = { backgroundColor: color };
      items.push(obj);
    }
  }
  obj = {};
  if (tmp == null) {
    let busy;
    if (accessibilityState != null) {
      busy = accessibilityState.busy;
    }
  }
  obj.busy = tmp;
  if (tmp2 == null) {
    let checked;
    if (accessibilityState != null) {
      checked = accessibilityState.checked;
    }
  }
  obj.checked = tmp2;
  if (tmp3 == null) {
    disabled = undefined;
    if (accessibilityState != null) {
      disabled = accessibilityState.disabled;
    }
  }
  obj.disabled = tmp3;
  if (tmp4 == null) {
    let expanded;
    if (accessibilityState != null) {
      expanded = accessibilityState.expanded;
    }
  }
  obj.expanded = tmp4;
  if (tmp6 == null) {
    let selected;
    if (accessibilityState != null) {
      selected = accessibilityState.selected;
    }
  }
  obj.selected = tmp6;
  if (disabled.disabled != null) {
    disabled = disabled.disabled;
  } else if (obj != null) {
    disabled = obj.disabled;
  }
  let disabled1;
  if (obj != null) {
    disabled1 = obj.disabled;
  }
  let merged = obj;
  if (disabled !== disabled1) {
    const _Object = Object;
    const obj1 = { disabled };
    merged = Object.assign({}, obj, obj1);
  }
  if (disabled) {
    items.push(closure_6.buttonDisabled);
    items1.push(closure_6.textDisabled);
  }
  closure_3.default(typeof title === "string", "The title prop of a Button must be a string");
  let formatted = title;
  if (get_Version.default.OS === "android") {
    formatted = title.toUpperCase();
  }
  let str2 = "no-hide-descendants";
  if (importantForAccessibility !== "no") {
    str2 = importantForAccessibility;
  }
  const obj2 = { accessible, accessibilityActions, onAccessibilityAction, accessibilityLabel: tmp5, accessibilityHint, accessibilityLanguage, accessibilityRole: "button", accessibilityState: merged, importantForAccessibility: str2, hasTVPreferredFocus, nextFocusDown, nextFocusForward, nextFocusLeft, nextFocusRight, nextFocusUp, testID, disabled, onPress, touchSoundDisabled, ref };
  const obj4 = { style: items1, disabled, children: formatted };
  obj2.children = <mod2.default style={items}><mod.default style={items1} disabled={disabled}>{formatted}</mod.default></mod2.default>;
  return <closure_5 accessible={accessible} accessibilityActions={accessibilityActions} onAccessibilityAction={onAccessibilityAction} accessibilityLabel={tmp5} accessibilityHint={accessibilityHint} accessibilityLanguage={accessibilityLanguage} accessibilityRole="button" accessibilityState={merged} importantForAccessibility={str2} hasTVPreferredFocus={hasTVPreferredFocus} nextFocusDown={nextFocusDown} nextFocusForward={nextFocusForward} nextFocusLeft={nextFocusLeft} nextFocusRight={nextFocusRight} nextFocusUp={nextFocusUp} testID={testID} disabled={disabled} onPress={onPress} touchSoundDisabled={touchSoundDisabled} ref={arg1} />;
});
forwardRefResult.displayName = "Button";
getIteratorFn = { button: _default2.select({ ios: {}, android: { elevation: 4, backgroundColor: "#2196F3", borderRadius: 2 } }), text: Object.assign({ textAlign: "center", margin: 8 }, _default3.select({ ios: { color: "#007AFF", fontSize: 18 }, android: { color: "white", fontWeight: "500" } })), buttonDisabled: _default4.select({ ios: {}, android: { elevation: 0, backgroundColor: "#dfdfdf" } }), textDisabled: _default5.select({ ios: { color: "#cdcdcd" }, android: { color: "#a1a1a1" } }) };
({ default: _default4, default: _default5 } = get_Version);
let closure_6 = setStyleAttributePreprocessor.default.create(getIteratorFn);

export default forwardRefResult;
