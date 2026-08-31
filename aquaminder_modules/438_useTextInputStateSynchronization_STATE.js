// Module ID: 438
// Function ID: 5059
// Name: useTextInputStateSynchronization_STATE
// Dependencies: [1, 203, 38, 73, 287, 128, 253, 285, 249, 33, 334, 84, 20, 45, 119, 251, 85, 439, 441]

// Module 438 (useTextInputStateSynchronization_STATE)
import invariant from "invariant" /* 20 */;
import get_Version from "get Version" /* 33 */;
import _slicedToArray from "_slicedToArray" /* 38 */;
import nullthrows from "nullthrows" /* 45 */;
import animatedShouldDebounceQueueFlush from "animatedShouldDebounceQueueFlush" /* 73 */;
import focusInput2 from "focusInput" /* 84 */;
import Commands2 from "Commands" /* 85 */;
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import flattenStyle from "flattenStyle" /* 128 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import getIteratorFn3 from "getIteratorFn" /* 249 */;
import setStyleAttributePreprocessor2 from "setStyleAttributePreprocessor" /* 253 */;
import useTextPressability from "useTextPressability" /* 285 */;
import usePressability from "usePressability" /* 287 */;
import useMergeRefs from "useMergeRefs" /* 334 */;
import Commands3 from "Commands" /* 439 */;
import Commands4 from "Commands" /* 441 */;
import module_1 from "module_1" /* 1 */;
import closure_15 from "jsxProd" /* 251 */;

function useTextInputStateSynchronization_STATE(props) {
  const iter = props.props;
  const mostRecentEventCount = props.mostRecentEventCount;
  const selection = props.selection;
  const inputRef = props.inputRef;
  const text = props.text;
  const viewCommands = props.viewCommands;
  const defaultResult = mostRecentEventCount.default(getIteratorFn.useState(iter.value), 2);
  const first = defaultResult[0];
  const setLastNativeText = defaultResult[1];
  const defaultResult1 = mostRecentEventCount.default(getIteratorFn.useState({ selection: { start: -1, end: -1 }, mostRecentEventCount }), 2);
  const setLastNativeSelection = defaultResult1[1];
  const selection2 = defaultResult1[0].selection;
  const items = [mostRecentEventCount, inputRef, , , , , , , ];
  ({ value: arr[2], defaultValue: arr[3] } = iter);
  items[4] = first;
  items[5] = selection;
  items[6] = selection2;
  items[7] = text;
  items[8] = viewCommands;
  const layoutEffect = getIteratorFn.useLayoutEffect(() => {
    let obj = {};
    if (first !== iter.value) {
      if (typeof iter.value === "string") {
        obj.text = iter.value;
        setLastNativeText(iter.value);
      }
    }
    if (selection) {
      if (selection2) {
        if (selection2.start !== selection.start) {
          obj.selection = selection;
          obj = { selection, mostRecentEventCount };
          setLastNativeSelection(obj);
        }
      }
    }
    if (Object.keys(obj).length !== 0) {
      if (inputRef.current != null) {
        const current = inputRef.current;
        let start;
        if (selection != null) {
          start = selection.start;
        }
        let num = -1;
        let num2 = -1;
        if (start != null) {
          num2 = start;
        }
        let end;
        if (selection != null) {
          end = selection.end;
        }
        if (end != null) {
          num = end;
        }
        viewCommands.setTextAndSelection(current, mostRecentEventCount, closure_4, num2, num);
        const tmp28 = viewCommands;
      }
    }
  }, items);
  return { setLastNativeText, setLastNativeSelection };
}
function useTextInputStateSynchronization_REFS(props) {
  const iter = props.props;
  const mostRecentEventCount = props.mostRecentEventCount;
  let selection = props.selection;
  const inputRef = props.inputRef;
  const text = props.text;
  const viewCommands = props.viewCommands;
  closure_6 = getIteratorFn.useRef(iter.value);
  closure_7 = getIteratorFn.useRef({ selection: { start: -1, end: -1 }, mostRecentEventCount });
  const items = [mostRecentEventCount, inputRef, , , , , ];
  ({ value: arr[2], defaultValue: arr[3] } = iter);
  items[4] = selection;
  items[5] = text;
  items[6] = viewCommands;
  const layoutEffect = getIteratorFn.useLayoutEffect(() => {
    let obj = {};
    selection = ref2.current.selection;
    if (ref.current !== iter.value) {
      if (typeof iter.value === "string") {
        obj.text = iter.value;
        ref.current = iter.value;
      }
    }
    if (selection) {
      if (selection) {
        if (selection.start !== selection.start) {
          obj.selection = selection;
          obj = { selection, mostRecentEventCount };
          ref2.current = obj;
        }
      }
    }
    if (Object.keys(obj).length !== 0) {
      if (inputRef.current != null) {
        const current = inputRef.current;
        let start;
        if (selection != null) {
          start = selection.start;
        }
        let num = -1;
        let num2 = -1;
        if (start != null) {
          num2 = start;
        }
        let end;
        if (selection != null) {
          end = selection.end;
        }
        if (end != null) {
          num = end;
        }
        viewCommands.setTextAndSelection(current, mostRecentEventCount, closure_4, num2, num);
        const tmp23 = viewCommands;
      }
    }
  }, items);
  return {
    setLastNativeText(value) {
      closure_6.current = value;
    },
    setLastNativeSelection(current) {
      closure_7.current = current;
    }
  };
}
function InternalTextInput(value) {
  closure_0 = value;
  ({ aria-busy: tmp, aria-checked: tmp2, aria-disabled: tmp3, aria-expanded: tmp4, aria-selected: tmp5, accessibilityState, id, tabIndex, selection, selectionColor, selectionHandleColor, cursorColor } = value);
  let defaultResult = closure_0.default(value, closure_16);
  const ref = getIteratorFn.useRef(null);
  let tmp8 = null;
  if (selection != null) {
    let obj = {};
    ({ start: obj.start, end } = selection);
    if (end == null) {
      end = selection.start;
    }
    obj.end = end;
    tmp8 = obj;
  }
  if (typeof value.value === "string") {
    let defaultValue = value.value;
  } else if (typeof value.defaultValue === "string") {
    defaultValue = value.defaultValue;
  }
  if (Commands) {
    closure_2 = tmp9;
    const defaultResult1 = ref.default(getIteratorFn.useState(0), 2);
    const first = defaultResult1[0];
    closure_4 = defaultResult1[1];
    obj = { props: value, inputRef: ref, mostRecentEventCount: first, selection: tmp8, text: defaultValue, viewCommands: tmp9 };
    ({ setLastNativeText: setStyleAttributePreprocessor, setLastNativeSelection: closure_6 } = closure_2.useRefsForTextInputState() ? useTextInputStateSynchronization_REFS : useTextInputStateSynchronization_STATE(obj));
    const layoutEffect = getIteratorFn.useLayoutEffect(() => {
      const current = ref.current;
      if (current != null) {
        onPressIn.default.registerInput(current);
        return () => {
          onPressIn.default.unregisterInput(current);
          if (_default2.currentlyFocusedInput() === current) {
            rejectResponderTermination.default(current).blur();
            const defaultResult = rejectResponderTermination.default(current);
          }
        };
      }
    }, []);
    const items = [first, tmp9];
    const defaultResult2 = onPress.default(getIteratorFn.useCallback((current) => {
      ref.current = current;
      if (current != null) {
        const _Object = Object;
        const obj = {
          clear() {
              if (closure_1_1.current != null) {
                closure_1_2.setTextAndSelection(closure_1_1.current, closure_1_3, "", 0, 0);
              }
            },
          isFocused() {
              return onPressIn.default.currentlyFocusedInput() === closure_1_1.current;
            },
          getNativeRef() {
              return closure_1_1.current;
            },
          setSelection(arg0, arg1) {
              if (closure_1_1.current != null) {
                closure_1_2.setTextAndSelection(closure_1_1.current, closure_1_3, null, arg0, arg1);
              }
            }
        };
        const merged = Object.assign(current, obj);
      }
    }, items), value.forwardedRef);
    function _onChange(nativeEvent) {
      const text = nativeEvent.nativeEvent.text;
      if (value.onChange) {
        value.onChange(nativeEvent);
      }
      if (value.onChangeText) {
        value.onChangeText(text);
      }
      if (ref.current != null) {
        callback2(text);
        callback(nativeEvent.nativeEvent.eventCount);
      }
    }
    function _onSelectionChange(nativeEvent) {
      if (value.onSelectionChange) {
        value.onSelectionChange(nativeEvent);
      }
      if (ref.current != null) {
        const obj = { selection: nativeEvent.nativeEvent.selection, mostRecentEventCount: first };
        callback3(obj);
      }
    }
    function _onFocus(arg0) {
      onPressIn.default.focusInput(ref.current);
      if (value.onFocus) {
        value.onFocus(arg0);
      }
    }
    function _onBlur(arg0) {
      onPressIn.default.blurInput(ref.current);
      if (value.onBlur) {
        value.onBlur(arg0);
      }
    }
    function _onScroll(closure_0) {
      if (value.onScroll) {
        value.onScroll(closure_0);
      }
    }
    const multiline = value.multiline;
    let flag3 = false;
    if (multiline != null) {
      flag3 = multiline;
    }
    if (value.submitBehavior != null) {
      if (flag3) {
        let str = value.submitBehavior;
      } else {
        str = "blurAndSubmit";
      }
    } else {
      const blurOnSubmit = value.blurOnSubmit;
      if (flag3) {
        str = "blurAndSubmit";
        if (blurOnSubmit !== true) {
          str = "newline";
        }
      } else {
        str = "blurAndSubmit";
        if (blurOnSubmit === false) {
          str = "submit";
        }
      }
    }
    let tmp23 = value.focusable !== false;
    const editable = value.editable;
    const hitSlop = value.hitSlop;
    onPress = value.onPress;
    const onPressIn = value.onPressIn;
    const onPressOut = value.onPressOut;
    const rejectResponderTermination = value.rejectResponderTermination;
    const items1 = [editable, hitSlop, onPress, onPressIn, onPressOut, rejectResponderTermination];
    let flag5 = value.caretHidden;
    const memo = getIteratorFn.useMemo(() => {
      const obj = {
        hitSlop,
        onPress(arg0) {
          if (closure_1_9 != null) {
            closure_1_9(arg0);
          }
          if (closure_1_7 !== false) {
            if (closure_1_1.current != null) {
              const current = closure_1_1.current;
              current.focus();
            }
          }
        },
        onPressIn,
        onPressOut
      };
      let tmp = null;
      if (hitSlop.default.OS === "ios") {
        tmp = !rejectResponderTermination;
      }
      obj.cancelable = tmp;
      return obj;
    }, items1);
    if (hitSlop.default.isTesting) {
      flag5 = true;
    }
    const defaultResult3 = first.default(memo);
    ({ onBlur, onFocus } = defaultResult3);
    const defaultResult4 = closure_0.default(defaultResult3, closure_17);
    if (accessibilityState == null) {
      if (tmp == null) {
        if (tmp2 == null) {
          if (tmp3 == null) {
            const style = value.style;
            const defaultResult5 = closure_4.default(value.style);
            let tmp40 = style;
            if (defaultResult5 != null) {
              let fontWeight;
              if (defaultResult5 != null) {
                fontWeight = defaultResult5.fontWeight;
              }
              let tmp42 = null;
              if (typeof fontWeight === "number") {
                obj = { fontWeight: defaultResult5.fontWeight.toString() };
                tmp42 = obj;
                const str4 = defaultResult5.fontWeight;
              }
              let tmp43 = tmp42;
              if (defaultResult5.verticalAlign != null) {
                let obj1 = tmp42;
                if (!tmp42) {
                  obj1 = {};
                }
                obj1.textAlignVertical = table4[defaultResult5.verticalAlign];
                obj1.verticalAlign = undefined;
                tmp43 = obj1;
              }
              tmp40 = style;
              if (tmp43 != null) {
                const items2 = [style, tmp43];
                tmp40 = items2;
              }
            }
            if (hitSlop.default.OS === "ios") {
              let tmp69 = value.multiline === true;
              if (tmp69) {
                let tmp70 = defaultResult5 == null;
                if (!tmp70) {
                  tmp70 = defaultResult5.padding == null && defaultResult5.paddingVertical == null && defaultResult5.paddingTop == null;
                  const tmp71 = defaultResult5.padding == null && defaultResult5.paddingVertical == null && defaultResult5.paddingTop == null;
                }
                tmp69 = tmp70;
              }
              const _Object2 = Object;
              const obj2 = { ref: defaultResult2 };
              const obj3 = { accessibilityState: tmp32, accessible: tmp22, submitBehavior: str, caretHidden: flag5, dataDetectorTypes: value.dataDetectorTypes };
              if (tabIndex !== undefined) {
                tmp23 = !tabIndex;
              }
              obj3.focusable = tmp23;
              obj3.mostRecentEventCount = first;
              if (id == null) {
                id = value.nativeID;
              }
              obj3.nativeID = id;
              let numberOfLines2 = value.rows;
              if (numberOfLines2 == null) {
                numberOfLines2 = value.numberOfLines;
              }
              obj3.numberOfLines = numberOfLines2;
              obj3.onBlur = _onBlur;
              obj3.onChange = _onChange;
              obj3.onContentSizeChange = value.onContentSizeChange;
              obj3.onFocus = _onFocus;
              obj3.onScroll = _onScroll;
              obj3.onSelectionChange = _onSelectionChange;
              obj3.onSelectionChangeShouldSetResponder = emptyFunctionThatReturnsTrue;
              obj3.selection = tmp8;
              obj3.selectionColor = selectionColor;
              let multilineDefault = null;
              if (tmp69) {
                multilineDefault = multilineDefault.multilineDefault;
              }
              obj3.style = setStyleAttributePreprocessor.default.compose(multilineDefault, tmp40);
              obj3.text = defaultValue;
              let jsxResult = React.jsx(value.multiline === true ? closure_23 : closure_21, Object.assign(obj2, defaultResult, defaultResult4, obj3));
              const _default = setStyleAttributePreprocessor.default;
              const tmp68 = value.multiline === true ? closure_23 : closure_21;
            } else {
              jsxResult = null;
              if (hitSlop.default.OS === "android") {
                let prop;
                if (value != null) {
                  prop = value["aria-labelledby"];
                }
                if (prop == null) {
                  let prop1;
                  if (value != null) {
                    prop1 = value.accessibilityLabelledBy;
                  }
                  prop = prop1;
                }
                const placeholder = value.placeholder;
                let str6 = "";
                if (placeholder != null) {
                  str6 = placeholder;
                }
                const children = value.children;
                const Children = getIteratorFn.Children;
                const countResult = Children.count(children);
                let tmp52 = value.value != null;
                if (tmp52) {
                  tmp52 = countResult;
                }
                onPressOut.default(!tmp52, "Cannot specify both value and children.");
                let jsxResult1 = children;
                if (countResult > 1) {
                  const obj4 = { children };
                  jsxResult1 = <mod.default>{children}</mod.default>;
                }
                const obj5 = { selectionColor };
                if (selectionHandleColor === undefined) {
                  selectionHandleColor = selectionColor;
                }
                obj5.selectionHandleColor = selectionHandleColor;
                if (cursorColor === undefined) {
                  cursorColor = selectionColor;
                }
                obj5.cursorColor = cursorColor;
                let _Object = Object;
                const obj6 = { ref: defaultResult2 };
                const obj7 = { accessibilityState: tmp32, accessibilityLabelledBy: prop, accessible: tmp22, autoCapitalize: value.autoCapitalize || "sentences", submitBehavior: str, caretHidden: flag5, children: jsxResult1, disableFullscreenUI: value.disableFullscreenUI };
                let tmp60 = tmp23;
                if (tabIndex !== undefined) {
                  tmp60 = !tabIndex;
                }
                obj7.focusable = tmp60;
                obj7.mostRecentEventCount = first;
                let nativeID = id;
                if (id == null) {
                  nativeID = value.nativeID;
                }
                obj7.nativeID = nativeID;
                let numberOfLines = value.rows;
                if (numberOfLines == null) {
                  numberOfLines = value.numberOfLines;
                }
                obj7.numberOfLines = numberOfLines;
                obj7.onBlur = _onBlur;
                obj7.onChange = _onChange;
                obj7.onFocus = _onFocus;
                obj7.onScroll = _onScroll;
                obj7.onSelectionChange = _onSelectionChange;
                obj7.placeholder = str6;
                obj7.style = tmp40;
                obj7.text = defaultValue;
                obj7.textBreakStrategy = value.textBreakStrategy;
                jsxResult = <closure_19 {...Object.assign(obj6, defaultResult, obj5, defaultResult4, obj7)} />;
                const tmp46 = value.autoCapitalize || "sentences";
                const tmp58 = closure_19;
              }
            }
            const obj8 = { value: true, children: jsxResult };
            return React.jsx(editable.default.Provider, { value: true, children: jsxResult });
          }
        }
      }
    }
    const obj9 = {};
    if (tmp == null) {
      let busy;
      if (accessibilityState != null) {
        busy = accessibilityState.busy;
      }
    }
    obj9.busy = tmp;
    if (tmp2 == null) {
      let checked;
      if (accessibilityState != null) {
        checked = accessibilityState.checked;
      }
    }
    obj9.checked = tmp2;
    if (tmp3 == null) {
      let disabled;
      if (accessibilityState != null) {
        disabled = accessibilityState.disabled;
      }
    }
    obj9.disabled = tmp3;
    if (tmp4 == null) {
      let expanded;
      if (accessibilityState != null) {
        expanded = accessibilityState.expanded;
      }
    }
    obj9.expanded = tmp4;
    if (tmp5 == null) {
      let selected;
      if (accessibilityState != null) {
        selected = accessibilityState.selected;
      }
    }
    obj9.selected = tmp5;
    const tmp16 = closure_2.useRefsForTextInputState() ? useTextInputStateSynchronization_REFS : useTextInputStateSynchronization_STATE(obj);
  }
}
let closure_0 = module_1(_objectWithoutProperties);
let closure_1 = module_1(_slicedToArray);
let closure_2 = _interopRequireWildcard(animatedShouldDebounceQueueFlush);
let closure_3 = module_1(usePressability);
let closure_4 = module_1(flattenStyle);
const setStyleAttributePreprocessor = module_1(setStyleAttributePreprocessor2);
let closure_6 = module_1(useTextPressability);
let closure_7 = module_1(getIteratorFn3);
get_Version = module_1(get_Version);
let closure_9 = module_1(useMergeRefs);
const focusInput = module_1(focusInput2);
let closure_11 = module_1(invariant);
let closure_12 = module_1(nullthrows);
let getIteratorFn = _interopRequireWildcard(getIteratorFn2);
let closure_16 = ["aria-busy", "aria-checked", "aria-disabled", "aria-expanded", "aria-selected", "accessibilityState", "id", "tabIndex", "selection", "selectionColor", "selectionHandleColor", "cursorColor"];
let closure_17 = ["onBlur", "onFocus"];
let closure_18 = ["allowFontScaling", "rejectResponderTermination", "underlineColorAndroid", "autoComplete", "textContentType", "readOnly", "editable", "enterKeyHint", "returnKeyType", "inputMode", "showSoftInputOnFocus", "keyboardType"];
if (get_Version.default.OS === "android") {
  let closure_19 = Commands2.default;
  let Commands = Commands2.Commands;
} else if (get_Version.default.OS === "ios") {
  let closure_21 = Commands3.default;
  Commands = Commands3.Commands;
  let closure_23 = Commands4.default;
  Commands = Commands4.Commands;
}
function emptyFunctionThatReturnsTrue() {
  return true;
}
let str2 = "default";
let closure_26 = { enter: "default", done: "done", go: "go", next: "next", previous: "previous", search: "search", send: "send" };
getIteratorFn = { none: "default", text: "default", decimal: "decimal-pad", numeric: "number-pad", tel: "phone-pad", search: null, email: "email-address", url: "url" };
if (get_Version.default.OS === "ios") {
  str2 = "web-search";
}
getIteratorFn.search = str2;
let closure_28 = { "address-line1": "postal-address-region", "address-line2": "postal-address-locality", bday: "birthdate-full", "bday-day": "birthdate-day", "bday-month": "birthdate-month", "bday-year": "birthdate-year", "cc-csc": "cc-csc", "cc-exp": "cc-exp", "cc-exp-month": "cc-exp-month", "cc-exp-year": "cc-exp-year", "cc-number": "cc-number", country: "postal-address-country", "current-password": "password", email: "email", "honorific-prefix": "name-prefix", "honorific-suffix": "name-suffix", name: "name", "additional-name": "name-middle", "family-name": "name-family", "given-name": "name-given", "new-password": "password-new", off: "off", "one-time-code": "sms-otp", "postal-code": "postal-code", sex: "gender", "street-address": "street-address", tel: "tel", "tel-country-code": "tel-country-code", "tel-national": "tel-national", username: "username" };
let closure_29 = { "address-line1": "streetAddressLine1", "address-line2": "streetAddressLine2", bday: "birthdate", "bday-day": "birthdateDay", "bday-month": "birthdateMonth", "bday-year": "birthdateYear", "cc-csc": "creditCardSecurityCode", "cc-exp-month": "creditCardExpirationMonth", "cc-exp-year": "creditCardExpirationYear", "cc-exp": "creditCardExpiration", "cc-given-name": "creditCardGivenName", "cc-additional-name": "creditCardMiddleName", "cc-family-name": "creditCardFamilyName", "cc-name": "creditCardName", "cc-number": "creditCardNumber", "cc-type": "creditCardType", "current-password": "password", country: "countryName", email: "emailAddress", name: "name", "additional-name": "middleName", "family-name": "familyName", "given-name": "givenName", nickname: "nickname", "honorific-prefix": "namePrefix", "honorific-suffix": "nameSuffix", "new-password": "newPassword", off: "none", "one-time-code": "oneTimeCode", organization: "organizationName", "organization-title": "jobTitle", "postal-code": "postalCode", "street-address": "fullStreetAddress", tel: "telephoneNumber", url: "URL", username: "username" };
const forwardRefResult = getIteratorFn.forwardRef(function TextInput(allowFontScaling, forwardedRef) {
  allowFontScaling = allowFontScaling.allowFontScaling;
  let flag = true;
  if (allowFontScaling !== undefined) {
    flag = allowFontScaling;
  }
  const rejectResponderTermination = allowFontScaling.rejectResponderTermination;
  let flag2 = true;
  if (rejectResponderTermination !== undefined) {
    flag2 = rejectResponderTermination;
  }
  const underlineColorAndroid = allowFontScaling.underlineColorAndroid;
  let str = "transparent";
  if (underlineColorAndroid !== undefined) {
    str = underlineColorAndroid;
  }
  ({ autoComplete, textContentType, readOnly, editable, enterKeyHint, returnKeyType, inputMode, showSoftInputOnFocus, keyboardType } = allowFontScaling);
  let obj = { allowFontScaling: flag, rejectResponderTermination: flag2, underlineColorAndroid: str };
  if (readOnly !== undefined) {
    editable = !readOnly;
  }
  obj.editable = editable;
  if (enterKeyHint) {
    returnKeyType = table[enterKeyHint];
  }
  obj.returnKeyType = returnKeyType;
  if (inputMode) {
    keyboardType = getIteratorFn[inputMode];
  }
  obj.keyboardType = keyboardType;
  if (inputMode != null) {
    showSoftInputOnFocus = inputMode !== "none";
  }
  obj.showSoftInputOnFocus = showSoftInputOnFocus;
  let tmp5;
  if (get_Version.default.OS === "android") {
    let tmp8 = autoComplete;
    if (table2[autoComplete] != null) {
      tmp8 = tmp7;
    }
    tmp5 = tmp8;
  }
  obj.autoComplete = tmp5;
  let tmp9 = textContentType;
  if (textContentType == null) {
    let tmp11 = textContentType;
    if (get_Version.default.OS === "ios") {
      tmp11 = textContentType;
      if (autoComplete) {
        tmp11 = textContentType;
        if (autoComplete in table3) {
          tmp11 = table3[autoComplete];
        }
      }
    }
    tmp9 = tmp11;
  }
  obj.textContentType = tmp9;
  obj = { forwardedRef };
  return <InternalTextInput {...Object.assign(obj, closure_0.default(arg0, closure_18), obj)} />;
});
forwardRefResult.displayName = "TextInput";
forwardRefResult.State = { currentlyFocusedInput: focusInput.default.currentlyFocusedInput, currentlyFocusedField: focusInput.default.currentlyFocusedField, focusTextInput: focusInput.default.focusTextInput, blurTextInput: focusInput.default.blurTextInput };
let closure_30 = setStyleAttributePreprocessor.default.create({ multilineDefault: { paddingTop: 5 } });
let closure_31 = { auto: "auto", top: "top", bottom: "bottom", middle: "center" };

export default forwardRefResult;
