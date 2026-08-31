// Module ID: 433
// Function ID: 5031
// Name: returnsFalse
// Dependencies: [1, 38, 203, 253, 33, 334, 434, 436, 119, 251]

// Module 433 (returnsFalse)
import get_Version from "get Version" /* 33 */;
import _slicedToArray from "_slicedToArray" /* 38 */;
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import setStyleAttributePreprocessor from "setStyleAttributePreprocessor" /* 253 */;
import useMergeRefs from "useMergeRefs" /* 334 */;
import Commands3 from "Commands" /* 434 */;
import Commands4 from "Commands" /* 436 */;
import module_1 from "module_1" /* 1 */;
import closure_8 from "jsxProd" /* 251 */;

let closure_0 = module_1(_slicedToArray);
let closure_1 = module_1(_objectWithoutProperties);
let closure_2 = module_1(setStyleAttributePreprocessor);
let closure_3 = module_1(get_Version);
let closure_4 = module_1(useMergeRefs);
let closure_5 = _interopRequireWildcard(Commands3);
let closure_6 = _interopRequireWildcard(Commands4);
const getIteratorFn = _interopRequireWildcard(getIteratorFn2);
let closure_9 = ["disabled", "ios_backgroundColor", "onChange", "onValueChange", "style", "thumbColor", "trackColor", "value"];
let closure_10 = ["onTintColor", "tintColor"];
function returnsFalse() {
  return false;
}
function returnsTrue() {
  return true;
}

export default getIteratorFn.forwardRef(function Switch(accessibilityRole) {
  ({ disabled, ios_backgroundColor, onChange: closure_0, onValueChange: closure_1, style, thumbColor, trackColor, value } = accessibilityRole);
  const defaultResult = closure_1.default(accessibilityRole, closure_9);
  if (trackColor != null) {
    let _false = trackColor.false;
  }
  if (trackColor != null) {
    const _true = trackColor.true;
  }
  const ref = getIteratorFn.useRef(null);
  const defaultResult1 = first.default(ref, arg1);
  const defaultResult2 = closure_0.default(getIteratorFn.useState({ value: null }), 2);
  first = defaultResult2[0];
  const mod = defaultResult2[1];
  function handleChange(nativeEvent) {
    if (callback != null) {
      callback(nativeEvent);
    }
    if (callback2 != null) {
      callback2(nativeEvent.nativeEvent.value);
    }
    lib({ value: nativeEvent.nativeEvent.value });
  }
  const items = [value, first];
  const layoutEffect = getIteratorFn.useLayoutEffect(() => {
    let tmp2 = first.value != null;
    if (tmp2) {
      tmp2 = first.value !== tmp;
    }
    if (tmp2) {
      const current = ref.current;
      let setNativeProps;
      if (current != null) {
        setNativeProps = current.setNativeProps;
      }
      if (setNativeProps != null) {
        if (ref.default.OS === "android") {
          const Commands2 = lib.Commands;
          Commands2.setNativeValue(ref.current, tmp);
        } else {
          const Commands = closure_1_6.Commands;
          Commands.setValue(ref.current, tmp);
        }
      }
    }
  }, items);
  if (ref.default.OS === "android") {
    ({ onTintColor, tintColor } = defaultResult);
    const defaultResult3 = closure_1.default(defaultResult, closure_10);
    const accessibilityState = defaultResult3.accessibilityState;
    if (disabled == null) {
      disabled = undefined;
      if (accessibilityState != null) {
        disabled = accessibilityState.disabled;
      }
    }
    let disabled1;
    if (accessibilityState != null) {
      disabled1 = accessibilityState.disabled;
    }
    let merged = accessibilityState;
    if (disabled !== disabled1) {
      const _Object2 = Object;
      let obj = { disabled };
      merged = Object.assign({}, accessibilityState, obj);
    }
    obj = { accessibilityState: merged, enabled: disabled !== true, on: value === true, style, thumbTintColor: thumbColor, trackColorForFalse: _false, trackColorForTrue: _true };
    if (value === true) {
      _false = _true;
    }
    obj.trackTintColor = _false;
    const _Object3 = Object;
    const obj1 = {};
    const accessibilityRole2 = accessibilityRole.accessibilityRole;
    let str2 = "switch";
    if (accessibilityRole2 != null) {
      str2 = accessibilityRole2;
    }
    obj1.accessibilityRole = str2;
    obj1.onChange = handleChange;
    obj1.onResponderTerminationRequest = returnsFalse;
    obj1.onStartShouldSetResponder = returnsTrue;
    obj1.ref = defaultResult1;
    return <mod.default {...Object.assign({}, defaultResult3, obj, obj1)} />;
  } else {
    const obj2 = { disabled, onTintColor: _true };
    ({ default: _default, default: _default2 } = value);
    let tmp7 = null;
    if (ios_backgroundColor != null) {
      obj = { backgroundColor: ios_backgroundColor, borderRadius: 16 };
      tmp7 = obj;
    }
    obj2.style = _default.compose({ height: 31, width: 51 }, _default2.compose(style, tmp7));
    obj2.thumbTintColor = thumbColor;
    obj2.tintColor = _false;
    obj2.value = value === true;
    const _Object = Object;
    const obj3 = {};
    accessibilityRole = accessibilityRole.accessibilityRole;
    let str = "switch";
    if (accessibilityRole != null) {
      str = accessibilityRole;
    }
    obj3.accessibilityRole = str;
    obj3.onChange = handleChange;
    obj3.onResponderTerminationRequest = returnsFalse;
    obj3.onStartShouldSetResponder = returnsTrue;
    obj3.ref = defaultResult1;
    return <mod2.default {...Object.assign({}, defaultResult, obj2, obj3)} />;
  }
});
