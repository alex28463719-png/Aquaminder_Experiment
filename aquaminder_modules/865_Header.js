// Module ID: 865
// Function ID: 9536
// Name: Header
// Dependencies: [1, 203, 38, 855, 119, 2, 866, 251, 673, 867, 529, 868, 870, 877, 878, 879, 876, 873, 880]
// Exports: Header

// Module 865 (Header)
import _slicedToArray from "_slicedToArray" /* 38 */;
import getIteratorFn from "getIteratorFn" /* 119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import Color from "Color" /* 855 */;
import _mod866 from "module_866" /* 866 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_8 from "jsxProd" /* 251 */;

let closure_2 = module_1(_objectWithoutProperties);
let closure_3 = module_1(_slicedToArray);
let closure_4 = module_1(Color);
let closure_5 = _interopRequireWildcard(getIteratorFn);
let closure_7 = module_1(_mod866);
let closure_9 = ["height", "minHeight", "maxHeight", "backgroundColor", "borderBottomColor", "borderBottomEndRadius", "borderBottomLeftRadius", "borderBottomRightRadius", "borderBottomStartRadius", "borderBottomWidth", "borderColor", "borderEndColor", "borderEndWidth", "borderLeftColor", "borderLeftWidth", "borderRadius", "borderRightColor", "borderRightWidth", "borderStartColor", "borderStartWidth", "borderStyle", "borderTopColor", "borderTopEndRadius", "borderTopLeftRadius", "borderTopRightRadius", "borderTopStartRadius", "borderTopWidth", "borderWidth", "boxShadow", "elevation", "shadowColor", "shadowOffset", "shadowOpacity", "shadowRadius", "opacity", "transform"];
let c10 = 414;
let StyleSheet = get_registerCallableModule.StyleSheet;
const styles = StyleSheet.create({ content: { flex: 1, flexDirection: "row", alignItems: "stretch" }, large: { marginHorizontal: 5 }, title: { justifyContent: "center" }, start: { flexDirection: "row", alignItems: "center", justifyContent: "flex-start" }, end: { flexDirection: "row", alignItems: "center", justifyContent: "flex-end" }, expand: { flexGrow: 1, flexBasis: 0 } });

export function Header(layout) {
  const rect = _require(673).useSafeAreaInsets();
  const frameSize = _require(867).useFrameSize((arg0) => arg0, true);
  const colors = _require(529).useTheme().colors;
  const navigation = _require(529).useNavigation();
  const context = React.useContext(_require(868).HeaderShownContext);
  const defaultResult = closure_3.default(React.useState(false), 2);
  const first = defaultResult[0];
  _require = defaultResult[1];
  const defaultResult1 = closure_3.default(React.useState(undefined), 2);
  dependencyMap = defaultResult1[1];
  layout = layout.layout;
  if (layout === undefined) {
    layout = frameSize;
  }
  const modal = layout.modal;
  let flag = false;
  if (modal !== undefined) {
    flag = modal;
  }
  ({ back, headerTitle, headerTitleAlign, title } = layout);
  if (headerTitleAlign === undefined) {
    let str = "left";
    if (get_registerCallableModule.Platform.OS === "ios") {
      str = "center";
    }
    headerTitleAlign = str;
  }
  let headerLeft = layout.headerLeft;
  if (headerLeft === undefined) {
    let fn;
    if (back) {
      fn = (arg0) => closure_1_8.jsx(callback(870).HeaderBackButton, Object.assign({}, arg0));
    }
    headerLeft = fn;
  }
  const headerSearchBarOptions = layout.headerSearchBarOptions;
  ({ headerTransparent, headerTintColor, headerBackground, headerRight, headerBackButtonDisplayMode, headerTitleAllowFontScaling, headerTitleStyle, headerLeftContainerStyle, headerRightContainerStyle, headerTitleContainerStyle } = layout);
  if (headerBackButtonDisplayMode === undefined) {
    let str3 = "minimal";
    if (get_registerCallableModule.Platform.OS === "ios") {
      str3 = "default";
    }
    headerBackButtonDisplayMode = str3;
  }
  ({ headerStyle, headerPressColor, headerPressOpacity, headerStatusBarHeight, headerBackTitleStyle, headerBackgroundContainerStyle, headerShadowVisible } = layout);
  if (headerStatusBarHeight === undefined) {
    let num = 0;
    if (!context) {
      num = rect.top;
    }
    headerStatusBarHeight = num;
  }
  const StyleSheet = get_registerCallableModule.StyleSheet;
  const defaultHeaderHeight = _require(877).getDefaultHeaderHeight(layout, flag, headerStatusBarHeight);
  if (!headerStyle) {
    headerStyle = {};
  }
  const flatStyles = StyleSheet.flatten(headerStyle);
  let height = flatStyles.height;
  if (height === undefined) {
    height = defaultHeaderHeight;
  }
  ({ backgroundColor, opacity, transform } = flatStyles);
  ({ minHeight, maxHeight, borderBottomColor, borderBottomEndRadius, borderBottomLeftRadius, borderBottomRightRadius, borderBottomStartRadius, borderBottomWidth, borderColor, borderEndColor, borderEndWidth, borderLeftColor, borderLeftWidth, borderRadius, borderRightColor, borderRightWidth, borderStartColor, borderStartWidth, borderStyle, borderTopColor, borderTopEndRadius, borderTopLeftRadius, borderTopRightRadius, borderTopStartRadius, borderTopWidth, borderWidth, boxShadow, elevation, shadowColor, shadowOffset, shadowOpacity, shadowRadius } = flatStyles);
  headerSearchBarOptions.default(flatStyles, closure_9);
  let obj = { backgroundColor, borderBottomColor, borderBottomEndRadius, borderBottomLeftRadius, borderBottomRightRadius, borderBottomStartRadius, borderBottomWidth, borderColor, borderEndColor, borderEndWidth, borderLeftColor, borderLeftWidth, borderRadius, borderRightColor, borderRightWidth, borderStartColor, borderStartWidth, borderStyle, borderTopColor, borderTopEndRadius, borderTopLeftRadius, borderTopRightRadius, borderTopStartRadius, borderTopWidth, borderWidth, boxShadow, elevation, shadowColor, shadowOffset, shadowOpacity, shadowRadius, opacity, transform };
  for (const key10146 in obj) {
    let tmp55 = key10146;
    if (obj[key10146] !== undefined) {
      continue;
    } else {
      delete tmp[tmp2];
      continue;
    }
    continue;
  }
  let tmp14 = headerTransparent;
  if (headerTransparent) {
    obj = { backgroundColor: "transparent" };
    tmp14 = obj;
  }
  let merged = headerTransparent;
  if (!headerTransparent) {
    merged = headerShadowVisible === false;
  }
  if (merged) {
    const _Object = Object;
    obj = { borderBottomWidth: 0 };
    const Platform = get_registerCallableModule.Platform;
    const obj1 = {};
    const obj2 = { elevation: 0 };
    obj1.android = obj2;
    const obj3 = { boxShadow: "none" };
    obj1.web = obj3;
    const obj4 = { shadowOpacity: 0 };
    obj1.default = obj4;
    merged = Object.assign(obj, Platform.select(obj1));
  }
  const merged1 = Object.assign({}, tmp14, merged, obj);
  let selectResult = headerTintColor;
  if (headerTintColor == null) {
    const Platform2 = get_registerCallableModule.Platform;
    ({ primary: obj8.ios, text: obj8.default } = colors);
    selectResult = Platform2.select({});
    const obj5 = {};
  }
  let headerLeftResult = null;
  if (headerLeft) {
    const obj6 = { tintColor: selectResult, pressColor: headerPressColor, pressOpacity: headerPressOpacity, displayMode: headerBackButtonDisplayMode, titleLayout: defaultResult1[0], screenLayout: layout };
    const _Boolean = Boolean;
    obj6.canGoBack = Boolean(back);
    let goBack;
    if (back) {
      goBack = navigation.goBack;
    }
    obj6.onPress = goBack;
    title = undefined;
    if (back != null) {
      title = back.title;
    }
    obj6.label = title;
    obj6.labelStyle = headerBackTitleStyle;
    let href;
    if (back != null) {
      href = back.href;
    }
    obj6.href = href;
    headerLeftResult = headerLeft(obj6);
  }
  let headerRightResult = null;
  if (headerRight) {
    const obj7 = { tintColor: selectResult, pressColor: headerPressColor, pressOpacity: headerPressOpacity };
    const _Boolean2 = Boolean;
    obj7.canGoBack = Boolean(back);
    headerRightResult = headerRight(obj7);
  }
  if (typeof headerTitle !== "function") {
    headerTitle = (arg0) => closure_1_8.jsx(callback(878).HeaderTitle, Object.assign({}, arg0));
  }
  const obj8 = { pointerEvents: "box-none", style: items };
  const obj9 = { height, minHeight, maxHeight, opacity, transform };
  items = [obj9];
  const obj10 = { pointerEvents: "box-none", style: items1 };
  items1 = [get_registerCallableModule.StyleSheet.absoluteFill, headerBackgroundContainerStyle];
  if (headerBackground) {
    const obj11 = { style: merged1 };
    let headerBackgroundResult = headerBackground(obj11);
  } else {
    const obj12 = {};
    let str8 = "auto";
    if (headerTransparent) {
      if (merged1.backgroundColor === "transparent") {
        str8 = "none";
      } else {
        str8 = "auto";
        const defaultResult3 = closure_4.default(merged1.backgroundColor);
      }
    }
    obj12.pointerEvents = str8;
    obj12.style = merged1;
    headerBackgroundResult = React2.jsx(_require(879).HeaderBackground, {});
  }
  obj10.children = headerBackgroundResult;
  const items2 = [React2.jsx(get_registerCallableModule.Animated.View, { pointerEvents: "box-none", style: items1 }), , ];
  const obj13 = { height: headerStatusBarHeight };
  items2[1] = <get registerCallableModule.View pointerEvents="none" style={obj13} />;
  const obj14 = { pointerEvents: "box-none" };
  const items3 = [closure_11.content, ];
  let large = null;
  if (get_registerCallableModule.Platform.OS === "ios") {
    large = null;
    if (frameSize.width >= c10) {
      large = closure_11.large;
    }
  }
  items3[1] = large;
  obj14.style = items3;
  const obj15 = { pointerEvents: "box-none" };
  const items4 = [closure_11.start, , , ];
  let expand = !first;
  if (expand) {
    expand = headerTitleAlign === "center";
  }
  if (expand) {
    expand = closure_11.expand;
  }
  items4[1] = expand;
  items4[2] = { marginStart: rect.left };
  items4[3] = headerLeftContainerStyle;
  obj15.style = items4;
  obj15.children = headerLeftResult;
  const items5 = [React2.jsx(get_registerCallableModule.Animated.View, { pointerEvents: "box-none" }), , ];
  if (get_registerCallableModule.Platform.OS === "ios") {
    const obj16 = {};
    const obj17 = { pointerEvents: "box-none" };
    const items6 = [closure_11.title, , , ];
    const obj18 = {};
    ({ jsxs, Fragment, jsx } = React2);
    if (headerTitleAlign === "center") {
      let num6 = 16;
      if (headerLeftResult) {
        let num7 = 32;
        if (headerBackButtonDisplayMode !== "minimal") {
          num7 = 80;
        }
        num6 = num7;
      }
      if (headerRightResult) {
        let num8 = 16;
      } else {
        num8 = 0;
      }
      const _Math = Math;
      let diff = layout.width - (num6 + num8 + Math.max(rect.left, rect.right)) * 2;
    } else {
      let num3 = 16;
      let num4 = 16;
      if (headerLeftResult) {
        num4 = 52;
      }
      if (headerRightResult) {
        num3 = 52;
      }
      diff = layout.width - (num4 + num3 + rect.left - rect.right);
    }
    obj18.maxWidth = diff;
    items6[1] = obj18;
    if (headerTitleAlign === "left") {
      if (headerLeftResult) {
        const obj19 = { marginStart: 4 };
        let obj25 = obj19;
      }
      items6[2] = obj25;
      items6[3] = headerTitleContainerStyle;
      obj17.style = items6;
      const obj20 = {
        children: title,
        allowFontScaling: headerTitleAllowFontScaling,
        tintColor: headerTintColor,
        onLayout: function onTitleLayout(nativeEvent) {
              ({ height: closure_0, width: closure_1 } = nativeEvent.nativeEvent.layout);
              dependencyMap((height) => {
                if (height) {
                  if (closure_0 === height.height) {
                    if (closure_1 === height.width) {
                      return height;
                    }
                  }
                }
                return { height: closure_0, width: closure_1 };
              });
            },
        style: headerTitleStyle
      };
      obj17.children = headerTitle(obj20);
      const items7 = [jsx(get_registerCallableModule.Animated.View, obj17), ];
      const obj21 = { pointerEvents: "box-none" };
      const items8 = [closure_11.end, closure_11.expand, , ];
      const obj22 = { marginEnd: rect.right };
      items8[2] = obj22;
      items8[3] = headerRightContainerStyle;
      obj21.style = items8;
      const items9 = [headerRightResult, ];
      let jsxResult = null;
      if (headerSearchBarOptions) {
        const obj23 = {
          tintColor: selectResult,
          pressColor: headerPressColor,
          pressOpacity: headerPressOpacity,
          onPress() {
                  callback(true);
                  let tmp2 = headerSearchBarOptions == null;
                  if (!tmp2) {
                    tmp2 = headerSearchBarOptions.onOpen == null;
                  }
                  if (!tmp2) {
                    headerSearchBarOptions.onOpen();
                  }
                }
        };
        const obj24 = { source: mod.default, tintColor: selectResult };
        obj23.children = React2.jsx(_require(873).HeaderIcon, { source: mod.default, tintColor: selectResult });
        jsxResult = React2.jsx(_require(876).HeaderButton, {
          tintColor: selectResult,
          pressColor: headerPressColor,
          pressOpacity: headerPressOpacity,
          onPress() {
                  callback(true);
                  let tmp2 = headerSearchBarOptions == null;
                  if (!tmp2) {
                    tmp2 = headerSearchBarOptions.onOpen == null;
                  }
                  if (!tmp2) {
                    headerSearchBarOptions.onOpen();
                  }
                }
        });
      }
      items9[1] = jsxResult;
      obj21.children = items9;
      items7[1] = React2.jsxs(get_registerCallableModule.Animated.View, { pointerEvents: "box-none" });
      obj16.children = items7;
      let jsxsResult = <></>;
    }
    obj25 = { marginHorizontal: 16 };
  } else {
    jsxsResult = null;
  }
  items5[1] = jsxsResult;
  if (get_registerCallableModule.Platform.OS !== "ios") {
    if (!first) {
      items5[2] = null;
      obj14.children = items5;
      items2[2] = <get registerCallableModule.View {...obj14} />;
      obj8.children = items2;
      return React2.jsxs(get_registerCallableModule.Animated.View, obj8);
    }
  }
  const obj26 = {
    visible: first,
    onClose() {
      callback(false);
      let tmp2 = headerSearchBarOptions == null;
      if (!tmp2) {
        tmp2 = headerSearchBarOptions.onClose == null;
      }
      if (!tmp2) {
        headerSearchBarOptions.onClose();
      }
    },
    tintColor: headerTintColor
  };
  if (get_registerCallableModule.Platform.OS === "ios") {
    const items10 = [get_registerCallableModule.StyleSheet.absoluteFill, , ];
    const obj27 = {};
    let num13 = 4;
    if (headerStatusBarHeight) {
      num13 = 0;
    }
    obj27.paddingTop = num13;
    items10[1] = obj27;
    const obj28 = {};
    if (backgroundColor == null) {
      backgroundColor = colors.card;
    }
    obj28.backgroundColor = backgroundColor;
    items10[2] = obj28;
    let tmp52 = items10;
  } else {
    tmp52 = !headerLeftResult;
    if (tmp52) {
      const obj29 = { marginStart: 8 };
      tmp52 = obj29;
    }
  }
  const items11 = [tmp52];
  obj26.style = items11;
  React2.jsx(_require(880).HeaderSearchBar, Object.assign({}, headerSearchBarOptions, obj26));
}
