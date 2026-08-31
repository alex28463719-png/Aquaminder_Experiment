// Module ID: 889
// Function ID: 9644
// Name: Screen
// Dependencies: [1, 38, 119, 2, 251, 673, 868, 884, 867, 877, 853, 529]
// Exports: Screen

// Module 889 (Screen)
import _slicedToArray from "_slicedToArray" /* 38 */;
import getIteratorFn from "getIteratorFn" /* 119 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_5 from "jsxProd" /* 251 */;

let closure_2 = module_1(_slicedToArray);
let closure_3 = _interopRequireWildcard(getIteratorFn);
const StyleSheet = get_registerCallableModule.StyleSheet;
const styles = StyleSheet.create({ container: { flex: 1 }, content: { flex: 1 }, header: { zIndex: 1 }, absolute: { position: "absolute", top: 0, start: 0, end: 0 } });

export function Screen(aria_hidden) {
  const safeAreaInsets = flag(headerStatusBarHeight[5]).useSafeAreaInsets();
  let context = React.useContext(flag(headerStatusBarHeight[6]).HeaderShownContext);
  const context1 = React.useContext(flag(headerStatusBarHeight[7]).HeaderHeightContext);
  const modal = aria_hidden.modal;
  flag = false;
  if (modal !== undefined) {
    flag = modal;
  }
  const headerShown = aria_hidden.headerShown;
  let flag2 = true;
  if (headerShown !== undefined) {
    flag2 = headerShown;
  }
  ({ headerStatusBarHeight, headerTransparent } = aria_hidden);
  if (headerStatusBarHeight === undefined) {
    let num = 0;
    if (!context) {
      num = safeAreaInsets.top;
    }
    headerStatusBarHeight = num;
  }
  ({ navigation, route, children, style } = aria_hidden);
  const defaultResult = closure_2.default(React.useState(flag(headerStatusBarHeight[8]).useFrameSize((layout) => flag(headerStatusBarHeight[9]).getDefaultHeaderHeight(layout, flag, headerStatusBarHeight))), 2);
  let first = defaultResult[0];
  closure_2 = defaultResult[1];
  let obj = { "aria-hidden": !aria_hidden.focused, style: items, collapsable: false };
  items = [closure_6.container, style];
  let jsxResult = null;
  if (flag2) {
    obj = { value: navigation };
    obj = { value: route };
    const obj1 = {
      pointerEvents: "box-none",
      onLayout(nativeEvent) {
          callback(nativeEvent.nativeEvent.layout.height);
        }
    };
    const items1 = [closure_6.header, ];
    let absolute = null;
    if (headerTransparent) {
      absolute = closure_6.absolute;
    }
    items1[1] = absolute;
    obj1.style = items1;
    obj1.children = aria_hidden.header;
    obj.children = <get registerCallableModule.View pointerEvents="box-none" onLayout={function onLayout(nativeEvent) {
      callback(nativeEvent.nativeEvent.layout.height);
    }} />;
    obj.children = React2.jsx(flag(headerStatusBarHeight[11]).NavigationRouteContext.Provider, { value: route });
    jsxResult = React2.jsx(flag(headerStatusBarHeight[11]).NavigationContext.Provider, { value: route });
  }
  const items2 = [jsxResult, ];
  const obj2 = { style: closure_6.content };
  const obj3 = {};
  if (!context) {
    context = flag2 !== false;
  }
  obj3.value = context;
  const obj4 = {};
  if (!flag2) {
    let num3 = 0;
    if (context1 != null) {
      num3 = context1;
    }
    first = num3;
  }
  obj4.value = first;
  obj4.children = children;
  obj3.children = React2.jsx(flag(headerStatusBarHeight[7]).HeaderHeightContext.Provider, {});
  obj2.children = React2.jsx(flag(headerStatusBarHeight[6]).HeaderShownContext.Provider, {});
  items2[1] = <get registerCallableModule.View style={closure_6.content} />;
  obj.children = items2;
  return React2.jsxs(flag(headerStatusBarHeight[10]).Background, { "aria-hidden": !aria_hidden.focused, style: items, collapsable: false });
}
