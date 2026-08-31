// Module ID: 431
// Function ID: 5015
// Name: usePressState
// Dependencies: [1, 38, 203, 287, 334, 248, 432, 119, 251]

// Module 431 (usePressState)
import _slicedToArray from "_slicedToArray" /* 38 */;
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import View from "View" /* 248 */;
import usePressability from "usePressability" /* 287 */;
import useMergeRefs from "useMergeRefs" /* 334 */;
import useAndroidRippleForView from "useAndroidRippleForView" /* 432 */;
import module_1 from "module_1" /* 1 */;
import closure_7 from "jsxProd" /* 251 */;

function usePressState(arg0) {
  const defaultResult = closure_0.default(getIteratorFn.useState(false), 2);
  let first = defaultResult[0];
  if (!first) {
    first = arg0;
  }
  const items = [first, defaultResult[1]];
  return items;
}
let closure_0 = module_1(_slicedToArray);
let closure_1 = module_1(_objectWithoutProperties);
let closure_2 = module_1(usePressability);
let closure_3 = module_1(useMergeRefs);
let closure_4 = module_1(View);
let closure_5 = module_1(useAndroidRippleForView);
const getIteratorFn = _interopRequireWildcard(getIteratorFn2);
let closure_8 = ["accessible", "accessibilityState", "aria-live", "android_disableSound", "android_ripple", "aria-busy", "aria-checked", "aria-disabled", "aria-expanded", "aria-label", "aria-selected", "cancelable", "children", "delayHoverIn", "delayHoverOut", "delayLongPress", "disabled", "focusable", "hitSlop", "onHoverIn", "onHoverOut", "onLongPress", "onPress", "onPressIn", "onPressOut", "pressRetentionOffset", "style", "testOnly_pressed", "unstable_pressDelay"];
const memoResult = getIteratorFn.memo(getIteratorFn.forwardRef(function Pressable(delayHoverOut) {
  ({ accessibilityState, aria-live: accessibilityLiveRegion, android_disableSound } = delayHoverOut);
  ({ aria-busy: tmp, aria-checked: tmp2, aria-disabled: tmp3, aria-expanded: tmp4, aria-label: accessibilityLabel, aria-selected: tmp5, cancelable } = delayHoverOut);
  ({ children, delayHoverIn } = delayHoverOut);
  delayHoverOut = delayHoverOut.delayHoverOut;
  const delayLongPress = delayHoverOut.delayLongPress;
  let disabled = delayHoverOut.disabled;
  const hitSlop = delayHoverOut.hitSlop;
  const onHoverIn = delayHoverOut.onHoverIn;
  const onHoverOut = delayHoverOut.onHoverOut;
  const onLongPress = delayHoverOut.onLongPress;
  const onPress = delayHoverOut.onPress;
  const onPressIn = delayHoverOut.onPressIn;
  const onPressOut = delayHoverOut.onPressOut;
  const pressRetentionOffset = delayHoverOut.pressRetentionOffset;
  ({ style, unstable_pressDelay } = delayHoverOut);
  ({ accessible, android_ripple, focusable, testOnly_pressed } = delayHoverOut);
  const defaultResult = cancelable.default(delayHoverOut, onHoverOut);
  const ref = hitSlop.useRef(null);
  const defaultResult2 = disabled.default(android_ripple, ref);
  const defaultResult3 = android_disableSound.default(onPress(testOnly_pressed === true), 2);
  const first = defaultResult3[0];
  closure_16 = tmp12;
  let tmp14 = tmp13;
  if (typeof children !== "function") {
    tmp14 = typeof style === "function";
  }
  closure_17 = tmp14;
  let obj = {};
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
  if (tmp5 == null) {
    let selected;
    if (accessibilityState != null) {
      selected = accessibilityState.selected;
    }
  }
  obj.selected = tmp5;
  let merged = obj;
  if (disabled != null) {
    const _Object = Object;
    obj = { disabled };
    merged = Object.assign({}, obj, obj);
  }
  obj = {};
  aria_valuemax = delayHoverOut["aria-valuemax"];
  if (aria_valuemax == null) {
    const accessibilityValue = delayHoverOut.accessibilityValue;
    let max;
    if (accessibilityValue != null) {
      max = accessibilityValue.max;
    }
    aria_valuemax = max;
  }
  obj.max = aria_valuemax;
  aria_valuemin = delayHoverOut["aria-valuemin"];
  if (aria_valuemin == null) {
    const accessibilityValue2 = delayHoverOut.accessibilityValue;
    let min;
    if (accessibilityValue2 != null) {
      min = accessibilityValue2.min;
    }
    aria_valuemin = min;
  }
  obj.min = aria_valuemin;
  aria_valuenow = delayHoverOut["aria-valuenow"];
  if (aria_valuenow == null) {
    const accessibilityValue3 = delayHoverOut.accessibilityValue;
    let now;
    if (accessibilityValue3 != null) {
      now = accessibilityValue3.now;
    }
    aria_valuenow = now;
  }
  obj.now = aria_valuenow;
  aria_valuetext = delayHoverOut["aria-valuetext"];
  if (aria_valuetext == null) {
    const accessibilityValue4 = delayHoverOut.accessibilityValue;
    let text;
    if (accessibilityValue4 != null) {
      text = accessibilityValue4.text;
    }
    aria_valuetext = text;
  }
  obj.text = aria_valuetext;
  let str = "none";
  if (accessibilityLiveRegion !== "off") {
    if (accessibilityLiveRegion == null) {
      accessibilityLiveRegion = delayHoverOut.accessibilityLiveRegion;
    }
    str = accessibilityLiveRegion;
  }
  if (accessibilityLabel == null) {
    accessibilityLabel = delayHoverOut.accessibilityLabel;
  }
  let viewProps;
  if (defaultResult2 != null) {
    viewProps = defaultResult2.viewProps;
  }
  const obj1 = { accessible: accessible !== false };
  let accessibilityViewIsModal = defaultResult["aria-modal"];
  if (accessibilityViewIsModal == null) {
    accessibilityViewIsModal = defaultResult.accessibilityViewIsModal;
  }
  obj1.accessibilityViewIsModal = accessibilityViewIsModal;
  obj1.accessibilityLiveRegion = str;
  obj1.accessibilityLabel = accessibilityLabel;
  obj1.accessibilityState = merged;
  obj1.focusable = focusable !== false;
  obj1.accessibilityValue = obj;
  obj1.hitSlop = hitSlop;
  const merged1 = Object.assign({}, defaultResult, viewProps, obj1);
  const items = [android_disableSound, defaultResult2, cancelable, delayHoverIn, delayHoverOut, delayLongPress, disabled, hitSlop, onHoverIn, onHoverOut, onLongPress, onPress, onPressIn, onPressOut, pressRetentionOffset, defaultResult3[1], tmp14, unstable_pressDelay];
  const defaultResult1 = delayHoverOut.default(arg1, ref);
  const obj2 = { ref: defaultResult1 };
  if (typeof style === "function") {
    const obj3 = { pressed: first };
    style = style(obj3);
  }
  obj2.style = style;
  obj2.collapsable = false;
  let childrenResult = children;
  if (typeof children === "function") {
    const obj4 = { pressed: first };
    childrenResult = children(obj4);
  }
  const items1 = [childrenResult, null];
  obj2.children = items1;
  return <delayLongPress.default {...Object.assign({}, merged1, delayHoverIn.default(hitSlop.useMemo(() => {
    const obj = {
      cancelable,
      disabled,
      hitSlop,
      pressRectOffset: pressRetentionOffset,
      android_disableSound,
      delayHoverIn,
      delayHoverOut,
      delayLongPress,
      delayPressIn: unstable_pressDelay,
      onHoverIn,
      onHoverOut,
      onLongPress,
      onPress,
      onPressIn(arg0) {
        if (closure_1_15 != null) {
          closure_1_15.onPressIn(arg0);
        }
        if (closure_1_17) {
          closure_1_16(true);
        }
        if (closure_1_11 != null) {
          closure_1_11(arg0);
        }
      }
    };
    let onPressMove;
    if (defaultResult2 != null) {
      onPressMove = defaultResult2.onPressMove;
    }
    obj.onPressMove = onPressMove;
    obj.onPressOut = function onPressOut(arg0) {
      if (closure_1_15 != null) {
        closure_1_15.onPressOut(arg0);
      }
      if (closure_1_17) {
        closure_1_16(false);
      }
      if (closure_1_12 != null) {
        closure_1_12(arg0);
      }
    };
    return obj;
  }, items)), obj2)} />;
}));
memoResult.displayName = "Pressable";

export default memoResult;
