// Module ID: 285
// Function ID: 3283
// Name: useTextPressability
// Dependencies: [1, 38, 203, 286, 287, 128, 89, 33, 249, 119, 251, 296]

// Module 285 (useTextPressability)
import get_Version from "get Version" /* 33 */;
import _slicedToArray from "_slicedToArray" /* 38 */;
import processColor from "processColor" /* 89 */;
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import flattenStyle from "flattenStyle" /* 128 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import getIteratorFn3 from "getIteratorFn" /* 249 */;
import PressabilityDebugView2 from "PressabilityDebugView" /* 286 */;
import usePressability from "usePressability" /* 287 */;
import NativeText from "NativeText" /* 296 */;
import module_1 from "module_1" /* 1 */;
import closure_10 from "jsxProd" /* 251 */;

function useTextPressability(textPressabilityProps) {
  const onLongPress = textPressabilityProps.onLongPress;
  const onPress = textPressabilityProps.onPress;
  const onPressIn = textPressabilityProps.onPressIn;
  const onPressOut = textPressabilityProps.onPressOut;
  const onResponderGrant = textPressabilityProps.onResponderGrant;
  const onResponderMove = textPressabilityProps.onResponderMove;
  const onResponderRelease = textPressabilityProps.onResponderRelease;
  const onResponderTerminate = textPressabilityProps.onResponderTerminate;
  let onResponderTerminationRequest = textPressabilityProps.onResponderTerminationRequest;
  let onStartShouldSetResponder = textPressabilityProps.onStartShouldSetResponder;
  const pressRetentionOffset = textPressabilityProps.pressRetentionOffset;
  const suppressHighlighting = textPressabilityProps.suppressHighlighting;
  const defaultResult = onPressIn.default(onStartShouldSetResponder.useState(false), 2);
  const first = defaultResult[0];
  closure_13 = defaultResult[1];
  let items = [pressRetentionOffset, onLongPress, onPress, onPressIn, onPressOut, suppressHighlighting];
  const defaultResult1 = onResponderGrant.default(onStartShouldSetResponder.useMemo(() => {
    let _onPressIn = onPressIn;
    let _onPressOut = onPressOut;
    if (onResponderTerminate.default.OS === "ios") {
      _onPressIn = function _onPressIn(arg0) {
        let tmp2 = closure_1_11 == null;
        if (!tmp2) {
          tmp2 = !closure_1_11;
        }
        closure_1_13(tmp2);
        if (closure_1_2 != null) {
          closure_1_2(arg0);
        }
      };
      _onPressOut = function _onPressOut(arg0) {
        closure_1_13(false);
        if (closure_1_3 != null) {
          closure_1_3(arg0);
        }
      };
    }
    const obj = { disabled: false, pressRectOffset: pressRetentionOffset, onLongPress, onPress, onPressIn: _onPressIn, onPressOut: _onPressOut };
    return obj;
  }, items));
  const items1 = [defaultResult1, onResponderGrant, onResponderMove, onResponderRelease, onResponderTerminate, onResponderTerminationRequest, onStartShouldSetResponder];
  const memo = onStartShouldSetResponder.useMemo(() => {
    if (defaultResult1 == null) {
      return null;
    } else {
      const obj = {
        onResponderGrant(arg0) {
            closure_1_14.onResponderGrant(arg0);
            if (closure_1_4 != null) {
              closure_1_4(arg0);
            }
          },
        onResponderMove(arg0) {
            closure_1_14.onResponderMove(arg0);
            if (closure_1_5 != null) {
              closure_1_5(arg0);
            }
          },
        onResponderRelease(arg0) {
            closure_1_14.onResponderRelease(arg0);
            if (closure_1_6 != null) {
              closure_1_6(arg0);
            }
          },
        onResponderTerminate(arg0) {
            closure_1_14.onResponderTerminate(arg0);
            if (closure_1_7 != null) {
              closure_1_7(arg0);
            }
          },
        onClick: defaultResult1.onClick
      };
      if (onResponderTerminationRequest == null) {
        onResponderTerminationRequest = defaultResult1.onResponderTerminationRequest;
      }
      obj.onResponderTerminationRequest = onResponderTerminationRequest;
      if (onStartShouldSetResponder == null) {
        onStartShouldSetResponder = defaultResult1.onStartShouldSetResponder;
      }
      obj.onStartShouldSetResponder = onStartShouldSetResponder;
    }
  }, items1);
  const items2 = [first, memo];
  return onStartShouldSetResponder.useMemo(() => {
    const items = [first, memo];
    return items;
  }, items2);
}
let closure_2 = module_1(_slicedToArray);
let closure_3 = module_1(_objectWithoutProperties);
const PressabilityDebugView = _interopRequireWildcard(PressabilityDebugView2);
let closure_4 = module_1(usePressability);
let closure_5 = module_1(flattenStyle);
let closure_6 = module_1(processColor);
let closure_7 = module_1(get_Version);
let closure_8 = module_1(getIteratorFn3);
const getIteratorFn = _interopRequireWildcard(getIteratorFn2);
let closure_11 = ["accessible", "accessibilityLabel", "accessibilityState", "allowFontScaling", "aria-busy", "aria-checked", "aria-disabled", "aria-expanded", "aria-label", "aria-selected", "children", "ellipsizeMode", "disabled", "id", "nativeID", "numberOfLines", "onLongPress", "onPress", "onPressIn", "onPressOut", "onResponderGrant", "onResponderMove", "onResponderRelease", "onResponderTerminate", "onResponderTerminationRequest", "onStartShouldSetResponder", "pressRetentionOffset", "selectable", "selectionColor", "suppressHighlighting", "style"];
const forwardRefResult = getIteratorFn.forwardRef((arg0, ref) => {
  ({ accessible, accessibilityLabel, accessibilityState, allowFontScaling, aria-busy: busy, aria-checked: checked, aria-disabled: disabled, aria-expanded: expanded, aria-label: tmp, aria-selected: selected, children, ellipsizeMode, disabled: disabled2, id, nativeID, numberOfLines, onLongPress, onPress, onPressIn, onPressOut, onResponderGrant, onResponderMove, onResponderRelease, onResponderTerminate, onResponderTerminationRequest, onStartShouldSetResponder, pressRetentionOffset, selectable, selectionColor, suppressHighlighting, style } = arg0);
  const defaultResult = closure_3.default(arg0, closure_11);
  if (tmp != null) {
    accessibilityLabel = tmp;
  }
  if (busy == null) {
    if (checked == null) {
      if (disabled == null) {
        if (expanded == null) {
          let tmp3 = accessibilityState;
        }
        disabled = undefined;
        if (tmp3 != null) {
          disabled = tmp3.disabled;
        }
        let tmp5 = disabled;
        if (disabled2 != null) {
          tmp5 = disabled2;
        }
        let tmp6 = onPress != null || onLongPress != null || onStartShouldSetResponder != null;
        if (tmp6) {
          tmp6 = tmp5 !== true;
        }
        if (selectionColor != null) {
          const defaultResult1 = closure_6.default(selectionColor);
        }
        let num = numberOfLines;
        if (numberOfLines != null) {
          num = numberOfLines;
          if (numberOfLines < 0) {
            num = 0;
          }
        }
        const defaultResult2 = closure_5.default(style);
        let tmp11 = style;
        let tmp12 = selectable;
        if (defaultResult2 != null) {
          let tmp13 = null;
          if (typeof defaultResult2.fontWeight === "number") {
            let obj = { fontWeight: defaultResult2.fontWeight.toString() };
            tmp13 = obj;
            const str = defaultResult2.fontWeight;
          }
          let tmp14 = tmp13;
          if (defaultResult2.userSelect != null) {
            obj = tmp13;
            if (!tmp13) {
              obj = {};
            }
            obj.userSelect = undefined;
            tmp14 = obj;
            selectable = table[defaultResult2.userSelect];
          }
          let tmp16 = tmp14;
          if (defaultResult2.verticalAlign != null) {
            let obj1 = tmp14;
            if (!tmp14) {
              obj1 = {};
            }
            obj1.textAlignVertical = table2[defaultResult2.verticalAlign];
            obj1.verticalAlign = undefined;
            tmp16 = obj1;
          }
          tmp11 = style;
          tmp12 = selectable;
          if (tmp16 != null) {
            const items = [style, tmp16];
            tmp11 = items;
            tmp12 = selectable;
          }
        }
        if (id != null) {
          nativeID = id;
        }
        if (getIteratorFn.useContext(mod2.default)) {
          const jsx2 = React.jsx;
          if (tmp6) {
            const obj2 = { ref };
            const _Object3 = Object;
            const obj3 = { accessibilityLabel, accessibilityState: tmp3, nativeID, numberOfLines: num, selectable: tmp12, selectionColor: defaultResult1, style: tmp11, disabled: disabled2, children };
            obj2.textProps = Object.assign({}, defaultResult, obj3);
            const obj4 = { onLongPress, onPress, onPressIn, onPressOut, onResponderGrant, onResponderMove, onResponderRelease, onResponderTerminate, onResponderTerminationRequest, onStartShouldSetResponder, pressRetentionOffset, suppressHighlighting };
            obj2.textPressabilityProps = obj4;
            return jsx2(closure_12, obj2);
          } else {
            const _Object2 = Object;
            const obj5 = { accessibilityLabel, accessibilityState: tmp3, nativeID, numberOfLines: num, ref, selectable: tmp12, selectionColor: defaultResult1, style: tmp11, disabled: disabled2, children };
            return jsx2(NativeText.NativeVirtualText, Object.assign({}, defaultResult, obj5));
          }
        } else {
          let merged = tmp3;
          if (tmp5 !== disabled) {
            if (tmp5 == null) {
              merged = tmp3;
              if (disabled != null) {
                merged = tmp3;
              }
            }
            const _Object = Object;
            const obj6 = { disabled: tmp5 };
            merged = Object.assign({}, tmp3, obj6);
          }
          const obj7 = { ios: accessible !== false };
          let tmp23 = accessible;
          if (accessible == null) {
            tmp23 = onPress != null || onLongPress != null;
            const tmp24 = onPress != null || onLongPress != null;
          }
          obj7.android = tmp23;
          obj7.default = accessible;
          const selectResult = mod.default.select(obj7);
          const jsx = React.jsx;
          if (tmp6) {
            const obj8 = { ref };
            const obj9 = { accessibilityLabel, accessibilityState: merged, accessible: selectResult, allowFontScaling: allowFontScaling !== false, disabled: tmp5 };
            let str3 = "tail";
            if (ellipsizeMode != null) {
              str3 = ellipsizeMode;
            }
            obj9.ellipsizeMode = str3;
            obj9.nativeID = nativeID;
            obj9.numberOfLines = num;
            obj9.selectable = tmp12;
            obj9.selectionColor = defaultResult1;
            obj9.style = tmp11;
            obj9.children = children;
            obj8.textProps = Object.assign({}, defaultResult, obj9);
            const obj10 = { onLongPress, onPress, onPressIn, onPressOut, onResponderGrant, onResponderMove, onResponderRelease, onResponderTerminate, onResponderTerminationRequest, onStartShouldSetResponder, pressRetentionOffset, suppressHighlighting };
            obj8.textPressabilityProps = obj10;
            let jsxResult = <closure_13 ref={arg1} />;
            const tmp31 = closure_13;
          } else {
            const obj11 = { accessibilityLabel, accessibilityState: merged, accessible: selectResult, allowFontScaling: allowFontScaling !== false, disabled: tmp5 };
            let str2 = "tail";
            if (ellipsizeMode != null) {
              str2 = ellipsizeMode;
            }
            obj11.ellipsizeMode = str2;
            obj11.nativeID = nativeID;
            obj11.numberOfLines = num;
            obj11.ref = ref;
            obj11.selectable = tmp12;
            obj11.selectionColor = defaultResult1;
            obj11.style = tmp11;
            obj11.children = children;
            jsxResult = jsx(NativeText.NativeText, Object.assign({}, defaultResult, obj11));
          }
          if (children == null) {
            return jsxResult;
          } else {
            const _Array = Array;
            if (Array.isArray(children)) {
              if (children.length <= 3) {
                let flag5 = false;
                const iter = children[Symbol.iterator]();
                const nextResult = iter.next();
                while (iter !== undefined) {
                  if (nextResult != null) {
                    let tmp37 = nextResult;
                    if (typeof tmp36 === "object") {
                      flag5 = true;
                      iter.return();
                      break;
                    }
                    if (!flag5) {
                      return jsxResult;
                    }
                  }
                  continue;
                }
              }
              const obj12 = { value: true, children: jsxResult };
              return React.jsx(mod2.default.Provider, { value: true, children: jsxResult });
            }
            if (typeof children !== "object") {
              return jsxResult;
            }
          }
          const _default = mod.default;
        }
      }
    }
  }
  if (accessibilityState != null) {
    const obj13 = {};
    if (busy == null) {
      busy = accessibilityState.busy;
    }
    obj13.busy = busy;
    if (checked == null) {
      checked = accessibilityState.checked;
    }
    obj13.checked = checked;
    if (disabled == null) {
      disabled = accessibilityState.disabled;
    }
    obj13.disabled = disabled;
    if (expanded == null) {
      expanded = accessibilityState.expanded;
    }
    obj13.expanded = expanded;
    if (selected == null) {
      selected = accessibilityState.selected;
    }
    obj13.selected = selected;
    tmp3 = obj13;
  } else {
    obj = { busy, checked, disabled, expanded, selected };
    tmp3 = obj;
  }
});
forwardRefResult.displayName = "Text";
let closure_12 = getIteratorFn.forwardRef((textPressabilityProps, ref) => {
  [tmp2, tmp3] = closure_2.default(useTextPressability(textPressabilityProps.textPressabilityProps), 2);
  return React.jsx(NativeText.NativeVirtualText, Object.assign({}, textPressabilityProps.textProps, tmp3, { isHighlighted: tmp2, isPressable: true, ref }));
});
let closure_13 = getIteratorFn.forwardRef((textPressabilityProps, ref) => {
  [tmp2, tmp3] = closure_2.default(useTextPressability(textPressabilityProps.textPressabilityProps), 2);
  return React.jsx(NativeText.NativeText, Object.assign({}, textPressabilityProps.textProps, tmp3, { isHighlighted: tmp2, isPressable: true, ref }));
});
let closure_14 = { auto: true, text: true, none: false, contain: true, all: true };
let closure_15 = { auto: "auto", top: "top", bottom: "bottom", middle: "center" };

export default forwardRefResult;
