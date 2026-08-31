// Module ID: 925
// Function ID: 9802
// Dependencies: [1, 203, 119, 2, 922, 926, 908, 921, 251, 924, 899, 929]

// Module 925
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import InnerScreen from "InnerScreen" /* 908 */;
import assertGHProvider from "assertGHProvider" /* 921 */;
import warnOnce from "warnOnce" /* 922 */;
import DebugContainer from "DebugContainer" /* 926 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_9 from "jsxProd" /* 251 */;

let closure_2 = module_1(_objectWithoutProperties);
let getIteratorFn = _interopRequireWildcard(getIteratorFn2);
let closure_5 = module_1(warnOnce);
let closure_6 = module_1(DebugContainer);
let closure_7 = module_1(InnerScreen);
let closure_8 = module_1(assertGHProvider);
let closure_10 = ["children", "headerConfig", "activityState", "shouldFreeze", "stackPresentation", "sheetAllowedDetents", "contentStyle", "style", "screenId", "unstable_sheetFooter"];
let StyleSheet = get_registerCallableModule.StyleSheet;
const styles = StyleSheet.create({ container: { flex: 1 }, absolute: { position: "absolute", top: 0, start: 0, end: 0 } });

export default getIteratorFn.forwardRef(function ScreenStackItem(headerConfig) {
  headerConfig = headerConfig.headerConfig;
  ({ activityState, shouldFreeze, stackPresentation } = headerConfig);
  ({ sheetAllowedDetents, contentStyle, screenId: closure_2, unstable_sheetFooter } = headerConfig);
  ({ children, style } = headerConfig);
  getIteratorFn = getIteratorFn.useRef(null);
  const Platform = getIteratorFn.useContext(headerConfig(stackPresentation[9]).RNSScreensRefContext);
  const imperativeHandle = getIteratorFn.useImperativeHandle(arg1, () => ref.current);
  let flag = false;
  if (Platform.Platform.OS !== "android") {
    let tmp3 = stackPresentation !== "push";
    if (tmp3) {
      let hidden;
      if (headerConfig != null) {
        hidden = headerConfig.hidden;
      }
      tmp3 = hidden === false;
    }
    flag = tmp3;
  }
  let hidden1;
  if (headerConfig != null) {
    hidden1 = headerConfig.hidden;
  }
  closure_5 = getIteratorFn.useRef(hidden1);
  let hidden2;
  if (headerConfig != null) {
    hidden2 = headerConfig.hidden;
  }
  const items = [hidden2, stackPresentation];
  const effect = getIteratorFn.useEffect(() => {
    let tmp = Platform.Platform.OS !== "android";
    if (tmp) {
      tmp = stackPresentation !== "push";
    }
    if (tmp) {
      let hidden;
      if (headerConfig != null) {
        hidden = headerConfig.hidden;
      }
      tmp = ref2.current !== hidden;
    }
    ref2.default(tmp, "Dynamically changing header's visibility in modals will result in remounting the screen and losing all local state.");
    let hidden1;
    if (headerConfig != null) {
      hidden1 = headerConfig.hidden;
    }
    ref2.current = hidden1;
  }, items);
  let obj = {};
  obj = {};
  if (stackPresentation === "formSheet") {
    if (Platform.Platform.OS === "ios") {
      let absolute = closure_11.absolute;
    } else {
      absolute = null;
      if (sheetAllowedDetents !== "fitToContents") {
        absolute = closure_11.container;
      }
    }
  } else {
    const items1 = [closure_11.container, contentStyle];
    obj.style = items1;
    let str4 = "push";
    if (stackPresentation != null) {
      str4 = stackPresentation;
    }
    obj.stackPresentation = str4;
    obj.children = children;
    const items2 = [tmp12(tmp13, obj), , ];
    const _Object = Object;
    items2[1] = React.jsx(headerConfig(stackPresentation[10]).ScreenStackHeaderConfig, Object.assign({}, headerConfig));
    let jsxResult = tmp14;
    if (tmp14) {
      jsxResult = unstable_sheetFooter;
    }
    if (jsxResult) {
      obj = { children: unstable_sheetFooter() };
      jsxResult = React.jsx(headerConfig(stackPresentation[11]).FooterComponent, { children: unstable_sheetFooter() });
    }
    items2[2] = jsxResult;
    obj.children = items2;
    const tmp10Result = tmp10(tmp11, obj);
    let tmp30;
    if (tmp14) {
      if (contentStyle) {
        const StyleSheet = Platform.StyleSheet;
        const flatStyles = StyleSheet.flatten(contentStyle);
        const obj1 = {};
        let backgroundColor;
        if (flatStyles != null) {
          backgroundColor = flatStyles.backgroundColor;
        }
        obj1.backgroundColor = backgroundColor;
        tmp30 = obj1;
      }
    }
    const obj2 = {
      ref(current) {
          closure_3.current = current;
          if (closure_4 === null) {
            const _console = console;
            console.warn("Looks like RNSScreensRefContext is missing. Make sure the ScreenStack component is wrapped in it");
          } else if (current === null) {
            delete tmp2[tmp];
          } else {
            const obj = { current };
            tmp4[closure_2] = obj;
          }
        },
      enabled: true,
      isNativeStack: true,
      activityState,
      shouldFreeze,
      stackPresentation
    };
    let largeTitle;
    if (headerConfig != null) {
      largeTitle = headerConfig.largeTitle;
    }
    let flag2 = false;
    if (largeTitle != null) {
      flag2 = largeTitle;
    }
    obj2.hasLargeHeader = flag2;
    obj2.sheetAllowedDetents = sheetAllowedDetents;
    const items3 = [style, tmp30];
    obj2.style = items3;
    const obj3 = {};
    let jsxResult1 = tmp10Result;
    if (flag) {
      const obj4 = { style: closure_11.container };
      const obj5 = { enabled: true, isNativeStack: true, activityState, shouldFreeze };
      let largeTitle1;
      if (headerConfig != null) {
        largeTitle1 = headerConfig.largeTitle;
      }
      let flag3 = false;
      if (largeTitle1 != null) {
        flag3 = largeTitle1;
      }
      obj5.hasLargeHeader = flag3;
      obj5.style = Platform.StyleSheet.absoluteFill;
      obj5.children = tmp10Result;
      obj4.children = <mod.default enabled isNativeStack activityState={activityState} shouldFreeze={shouldFreeze} />;
      jsxResult1 = <mod2.default style={closure_11.container} />;
    }
    obj3.children = jsxResult1;
    return <mod.default {...Object.assign(obj2, defaultResult, obj3)} />;
  }
});
