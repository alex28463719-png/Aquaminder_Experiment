// Module ID: 880
// Function ID: 9608
// Name: HeaderSearchBar
// Dependencies: [1, 38, 203, 855, 119, 2, 881, 882, 866, 251, 529, 873, 863, 876, 864]

// Module 880 (HeaderSearchBar)
import _slicedToArray from "_slicedToArray" /* 38 */;
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import Color from "Color" /* 855 */;
import _mod866 from "module_866" /* 866 */;
import _mod881 from "module_881" /* 881 */;
import _mod882 from "module_882" /* 882 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_10 from "jsxProd" /* 251 */;

let closure_2 = module_1(_slicedToArray);
let closure_3 = module_1(_objectWithoutProperties);
let closure_4 = module_1(Color);
let getIteratorFn = _interopRequireWildcard(getIteratorFn2);
let closure_7 = module_1(_mod881);
let closure_8 = module_1(_mod882);
let closure_9 = module_1(_mod866);
let closure_11 = ["visible", "inputType", "autoFocus", "placeholder", "cancelButtonText", "enterKeyHint", "onChangeText", "onClose", "tintColor", "style"];
let closure_12 = { text: "text", number: "numeric", phone: "tel", email: "email" };
let closure_13 = get_registerCallableModule.Platform.OS !== "web";
const StyleSheet = get_registerCallableModule.StyleSheet;
getIteratorFn = { container: { flex: 1, flexDirection: "row", alignItems: "stretch" } };
getIteratorFn = { position: "absolute", opacity: 0.5 };
let Platform = get_registerCallableModule.Platform;
getIteratorFn.left = Platform.select({ ios: 16, default: 4 });
const Platform2 = get_registerCallableModule.Platform;
getIteratorFn.top = Platform2.select({ ios: -1, default: 17 });
const Platform3 = get_registerCallableModule.Platform;
getIteratorFn.inputSearchIcon = Object.assign(getIteratorFn, Platform3.select({ ios: { height: 18, width: 18 }, default: {} }));
let obj1 = { position: "absolute", opacity: 0.5 };
const Platform4 = get_registerCallableModule.Platform;
obj1.right = Platform4.select({ ios: 0, default: 8 });
const Platform5 = get_registerCallableModule.Platform;
obj1.top = Platform5.select({ ios: -2, default: 17 });
getIteratorFn.closeButton = obj1;
getIteratorFn.clearButton = { position: "absolute", right: 0, top: -7, bottom: 0, justifyContent: "center", padding: 8 };
getIteratorFn.clearIcon = { height: 16, width: 16, opacity: 0.5 };
getIteratorFn.cancelButton = { alignSelf: "center", top: -4 };
getIteratorFn.cancelText = { fontSize: 17, marginHorizontal: 12 };
getIteratorFn.searchbarContainer = { flex: 1 };
const Platform6 = get_registerCallableModule.Platform;
getIteratorFn.searchbar = Platform6.select({ ios: { flex: 1, fontSize: 17, paddingHorizontal: 32, marginLeft: 16, marginTop: -1, marginBottom: 4, borderRadius: 8 }, default: { flex: 1, fontSize: 18, paddingHorizontal: 36, marginRight: 8, marginTop: 8, marginBottom: 8, borderBottomWidth: 1 } });
const styles = StyleSheet.create(getIteratorFn);

export const HeaderSearchBar = getIteratorFn.forwardRef(function HeaderSearchBarInternal(visible) {
  visible = visible.visible;
  ({ inputType, autoFocus } = visible);
  let flag = true;
  if (autoFocus !== undefined) {
    flag = autoFocus;
  }
  const placeholder = visible.placeholder;
  let str = "Search";
  if (placeholder !== undefined) {
    str = placeholder;
  }
  const cancelButtonText = visible.cancelButtonText;
  let str2 = "Cancel";
  if (cancelButtonText !== undefined) {
    str2 = cancelButtonText;
  }
  const enterKeyHint = visible.enterKeyHint;
  let str3 = "search";
  if (enterKeyHint !== undefined) {
    str3 = enterKeyHint;
  }
  const onChangeText = visible.onChangeText;
  const onClose = visible.onClose;
  let primary = visible.tintColor;
  const navigation = visible(onChangeText[10]).useNavigation();
  const theme = visible(onChangeText[10]).useTheme();
  ({ colors, fonts } = theme);
  const defaultResult1 = onClose.default(getIteratorFn.useState(""), 2);
  const first = defaultResult1[0];
  getIteratorFn = tmp6;
  const defaultResult2 = onClose.default(getIteratorFn.useState(visible), 2);
  let Animated = defaultResult2[1];
  const first1 = onClose.default(getIteratorFn.useState(() => {
    let num = 0;
    if (visible) {
      num = 1;
    }
    const value = new Animated.Animated.Value(num);
    return value;
  }), 1)[0];
  const first2 = onClose.default(getIteratorFn.useState(() => {
    const value = new Animated.Animated.Value(0);
    return value;
  }), 1)[0];
  const mod = getIteratorFn.useRef(visible);
  const React = getIteratorFn.useRef(false);
  const ref = getIteratorFn.useRef(null);
  const items = [visible, first1];
  const effect = getIteratorFn.useEffect(() => {
    if (visible !== ref.current) {
      Animated = Animated.Animated;
      const obj = {};
      let num = 0;
      if (visible) {
        num = 1;
      }
      obj.toValue = num;
      obj.duration = 100;
      obj.useNativeDriver = callback;
      Animated.timing(first1, obj).start((finished) => {
        if (finished.finished) {
          closure_1_6(closure_1_0);
          closure_1_9.current = closure_1_0;
        }
      });
      return () => {
        closure_1_7.stopAnimation();
      };
    }
  }, items);
  closure_12 = tmp12;
  const items1 = [first2, first !== ""];
  const effect1 = getIteratorFn.useEffect(() => {
    if (ref2.current !== closure_12) {
      Animated = Animated.Animated;
      const obj = {};
      let num = 0;
      if (closure_12) {
        num = 1;
      }
      obj.toValue = num;
      obj.duration = 100;
      obj.useNativeDriver = callback;
      Animated.timing(first2, obj).start((finished) => {
        if (finished.finished) {
          closure_1_10.current = closure_1_12;
        }
      });
    }
  }, items1);
  const callback = getIteratorFn.useCallback(() => {
    const current = ref.current;
    if (current != null) {
      current.clear();
    }
    const current2 = ref.current;
    if (current2 != null) {
      current2.focus();
    }
    callback("");
  }, []);
  const items2 = [callback, onChangeText];
  const callback1 = getIteratorFn.useCallback(() => {
    callback();
    if (onChangeText != null) {
      let obj = {};
      obj = { text: "" };
      obj.nativeEvent = obj;
      onChangeText(obj);
    }
  }, items2);
  const items3 = [callback1, onClose];
  const callback2 = getIteratorFn.useCallback(() => {
    callback1();
    onClose();
  }, items3);
  const items4 = [callback2, navigation];
  const effect2 = getIteratorFn.useEffect(() => {
    let addListenerResult;
    if (navigation != null) {
      addListenerResult = navigation.addListener("blur", callback2);
    }
    return addListenerResult;
  }, items4);
  const items5 = [callback2, callback];
  const imperativeHandle = getIteratorFn.useImperativeHandle(arg1, () => ({
    focus() {
      const current = closure_1_11.current;
      if (current != null) {
        current.focus();
      }
    },
    blur() {
      const current = closure_1_11.current;
      if (current != null) {
        current.blur();
      }
    },
    setText(text) {
      const current = closure_1_11.current;
      if (current != null) {
        const obj = { text };
        current.setNativeProps(obj);
      }
      closure_1_5(text);
    },
    clearText: callback,
    cancelSearch: callback2
  }), items5);
  if (!visible) {
    if (!defaultResult2[0]) {
      return null;
    }
  }
  let text = primary;
  if (primary == null) {
    text = colors.text;
  }
  let obj = {};
  let str4 = "none";
  if (visible) {
    str4 = "auto";
  }
  obj.pointerEvents = str4;
  obj["aria-live"] = "polite";
  obj["aria-hidden"] = !visible;
  const items6 = [callback1.container, { opacity: first1 }, visible.style];
  obj.style = items6;
  obj = { style: callback1.searchbarContainer };
  obj = { source: mod.default, tintColor: text, style: callback1.inputSearchIcon };
  const items7 = [React.jsx(visible(onChangeText[11]).HeaderIcon, { source: mod.default, tintColor: text, style: callback1.inputSearchIcon }), , ];
  const obj1 = { ref, onChange: onChangeText, onChangeText: defaultResult1[1], autoFocus: flag };
  let str5 = "text";
  if (inputType != null) {
    str5 = inputType;
  }
  obj1.inputMode = closure_12[str5];
  obj1.enterKeyHint = str3;
  obj1.placeholder = str;
  const defaultResult = navigation.default(visible, ref);
  const tmp19 = closure_12;
  const defaultResult3 = first.default(text);
  obj1.placeholderTextColor = first.default(text).alpha(0.5).string();
  ({ primary: obj4.cursorColor, primary: obj4.selectionHandleColor } = colors);
  const alphaResult = first.default(text).alpha(0.5);
  const defaultResult4 = first.default(colors.primary);
  obj1.selectionColor = first.default(colors.primary).alpha(0.3).string();
  const items8 = [fonts.regular, callback1.searchbar, ];
  const obj2 = {};
  const Platform = Animated.Platform;
  const obj3 = {};
  let str6 = "rgba(0, 0, 0, 0.1)";
  if (theme.dark) {
    str6 = "rgba(255, 255, 255, 0.1)";
  }
  obj3.ios = str6;
  obj3.default = "transparent";
  obj2.backgroundColor = Platform.select(obj3);
  obj2.color = text;
  const alphaResult1 = first.default(colors.primary).alpha(0.3);
  const defaultResult5 = first.default(text);
  obj2.borderBottomColor = first.default(text).alpha(0.2).string();
  items8[2] = obj2;
  obj1.style = items8;
  items7[1] = <Animated.TextInput {...Object.assign({}, defaultResult, obj1)} />;
  let jsxResult = null;
  if (Animated.Platform.OS === "ios") {
    const obj4 = { onPress: callback1 };
    const obj5 = { opacity: first2 };
    const obj6 = { scale: first2 };
    const items9 = [obj6];
    obj5.transform = items9;
    const items10 = [obj5, callback1.clearButton];
    obj4.style = items10;
    const obj7 = { source: first1.default, resizeMode: "contain", tintColor: text, style: callback1.clearIcon };
    obj4.children = <Animated.Image source={first1.default} resizeMode="contain" tintColor={text} style={callback1.clearIcon} />;
    jsxResult = React.jsx(visible(onChangeText[12]).PlatformPressable, { onPress: callback1 });
  }
  items7[2] = jsxResult;
  obj.children = items7;
  const items11 = [<Animated.View source={mod.default} tintColor={text} style={callback1.inputSearchIcon} />, , ];
  let jsxResult1 = null;
  if (Animated.Platform.OS !== "ios") {
    const obj8 = {
      onPress() {
          if (first) {
            callback1();
          } else {
            onClose();
          }
        },
      style: callback1.closeButton
    };
    const obj9 = { source: first2.default, tintColor: text };
    obj8.children = React.jsx(visible(onChangeText[11]).HeaderIcon, { source: first2.default, tintColor: text });
    jsxResult1 = React.jsx(visible(onChangeText[13]).HeaderButton, {
      onPress() {
          if (first) {
            callback1();
          } else {
            onClose();
          }
        },
      style: callback1.closeButton
    });
  }
  items11[1] = jsxResult1;
  let jsxResult2 = null;
  if (Animated.Platform.OS === "ios") {
    const obj10 = { onPress: callback2, style: callback1.cancelButton };
    const obj11 = {};
    const items12 = [fonts.regular, , ];
    const obj12 = {};
    if (primary == null) {
      primary = colors.primary;
    }
    obj12.color = primary;
    items12[1] = obj12;
    items12[2] = callback1.cancelText;
    obj11.style = items12;
    obj11.children = str2;
    obj10.children = React.jsx(visible(onChangeText[14]).Text, {});
    jsxResult2 = React.jsx(visible(onChangeText[12]).PlatformPressable, { onPress: callback2, style: callback1.cancelButton });
  }
  items11[2] = jsxResult2;
  obj.children = items11;
  return React.jsxs(Animated.Animated.View, { source: mod.default, tintColor: text, style: callback1.inputSearchIcon });
});
