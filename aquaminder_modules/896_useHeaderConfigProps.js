// Module ID: 896
// Function ID: 9665
// Name: useHeaderConfigProps
// Dependencies: [1, 38, 2, 251, 529, 897, 852, 898]
// Exports: useHeaderConfigProps

// Module 896 (useHeaderConfigProps)
import _slicedToArray from "_slicedToArray" /* 38 */;
import _mod529 from "module_529" /* 529 */;
import Assets from "Assets" /* 852 */;
import processFonts from "processFonts" /* 897 */;
import _mod898 from "module_898" /* 898 */;
import module_1 from "module_1" /* 1 */;
import closure_3 from "get registerCallableModule" /* 2 */;
import closure_4 from "jsxProd" /* 251 */;

let closure_2 = module_1(_slicedToArray);

export function useHeaderConfigProps(arg0) {
  ({ headerBackImageSource, headerBackButtonDisplayMode, headerBackButtonMenuEnabled, headerBackTitle, headerBackVisible, headerShadowVisible, headerLargeTitle, headerBackground, headerLeft, headerRight, headerTintColor, headerTitle, headerTitleAlign, headerTransparent, headerSearchBarOptions, headerBack } = arg0);
  ({ headerBackTitleStyle, headerLargeStyle, headerLargeTitleShadowVisible, headerLargeTitleStyle, headerShown, headerStyle, headerBlurEffect, headerTitleStyle, headerTopInsetEnabled, route, title } = arg0);
  let theme = _mod529.useTheme();
  ({ colors, fonts } = theme);
  if (headerTintColor != null) {
    const StyleSheet = RN.StyleSheet;
    const items = [fonts.regular, headerBackTitleStyle];
    const tmp6 = StyleSheet.flatten(items) || {};
    const StyleSheet2 = RN.StyleSheet;
    const Platform = RN.Platform;
    let obj = {};
    ({ heavy: obj.ios, medium: obj.default } = fonts);
    const items1 = [Platform.select(obj), headerLargeTitleStyle];
    const tmp9 = StyleSheet2.flatten(items1) || {};
    const StyleSheet3 = RN.StyleSheet;
    const Platform2 = RN.Platform;
    obj = {};
    ({ bold: obj2.ios, medium: obj2.default } = fonts);
    const items2 = [Platform2.select(obj), headerTitleStyle];
    const tmp12 = StyleSheet3.flatten(items2) || {};
    const StyleSheet4 = RN.StyleSheet;
    const StyleSheet5 = RN.StyleSheet;
    const tmp14 = StyleSheet4.flatten(headerStyle) || {};
    const items3 = [tmp6.fontFamily, tmp9.fontFamily, tmp12.fontFamily];
    const defaultResult = closure_2.default(processFonts.processFonts(items3), 3);
    const first = defaultResult[0];
    let fontSize;
    if ("fontSize" in tmp6) {
      fontSize = tmp6.fontSize;
    }
    obj = { title, headerTitle };
    headerTitle = Assets.getHeaderTitle(obj, route.name);
    if ("color" in tmp12) {
      headerTintColor = tmp12.color;
    } else if (headerTintColor == null) {
      headerTintColor = colors.text;
    }
    let fontSize1;
    if ("fontSize" in tmp12) {
      fontSize1 = tmp12.fontSize;
    }
    const fontWeight = tmp12.fontWeight;
    let color;
    if ("color" in tmp9) {
      color = tmp9.color;
    }
    let fontSize2;
    if ("fontSize" in tmp9) {
      fontSize2 = tmp9.fontSize;
    }
    const obj1 = { color: headerTintColor };
    if (tmp12.fontFamily != null) {
      obj1.fontFamily = tmp12.fontFamily;
    }
    if (fontSize1 != null) {
      obj1.fontSize = fontSize1;
    }
    if (fontWeight != null) {
      obj1.fontWeight = fontWeight;
    }
    let backgroundColor = tmp14.backgroundColor;
    if (backgroundColor == null) {
      let str5 = "transparent";
      if (headerBackground == null) {
        str5 = "transparent";
        if (!headerTransparent) {
          str5 = colors.card;
        }
      }
      backgroundColor = str5;
    }
    if (headerLeft != null) {
      const obj2 = { tintColor: tmp2, canGoBack: tmp29 };
      let tmp31 = headerBackTitle;
      if (headerBackTitle == null) {
        title = undefined;
        if (headerBack != null) {
          title = headerBack.title;
        }
        tmp31 = title;
      }
      obj2.label = tmp31;
      obj2.href = undefined;
      const headerLeftResult = headerLeft(obj2);
    }
    let headerRightResult;
    if (headerRight != null) {
      const obj3 = { tintColor: tmp2, canGoBack: tmp29 };
      headerRightResult = headerRight(obj3);
    }
    let headerTitleResult = null;
    if (typeof headerTitle === "function") {
      const obj4 = { tintColor: tmp2, children: headerTitle };
      headerTitleResult = headerTitle(obj4);
    }
    if (typeof _mod898.isSearchBarAvailableForCurrentPlatform === "boolean") {
      let isSearchBarAvailableForCurrentPlatform = _mod898.isSearchBarAvailableForCurrentPlatform;
    } else {
      isSearchBarAvailableForCurrentPlatform = RN.Platform.OS === "ios";
      if (isSearchBarAvailableForCurrentPlatform) {
        isSearchBarAvailableForCurrentPlatform = _mod898.SearchBar != null;
      }
    }
    if (isSearchBarAvailableForCurrentPlatform) {
      isSearchBarAvailableForCurrentPlatform = headerSearchBarOptions != null;
    }
    let tmp43 = headerBackVisible;
    if (!headerBackVisible) {
      tmp43 = RN.Platform.OS === "android" && headerTitleResult != null && headerLeftResult == null;
      const tmp45 = RN.Platform.OS === "android" && headerTitleResult != null && headerLeftResult == null;
    }
    let tmp46 = headerBackground != null || headerTransparent;
    if (!tmp46) {
      let tmp47 = isSearchBarAvailableForCurrentPlatform;
      if (!isSearchBarAvailableForCurrentPlatform) {
        tmp47 = headerLargeTitle;
      }
      if (tmp47) {
        tmp47 = RN.Platform.OS === "ios";
      }
      if (tmp47) {
        tmp47 = headerTransparent !== false;
      }
      tmp46 = tmp47;
    }
    let tmp50 = RN.Platform.OS === "ios";
    if (tmp50) {
      const _parseInt = parseInt;
      tmp50 = parseInt(RN.Platform.Version, 10) >= 14;
    }
    if (tmp50) {
      let tmp53 = first == null;
      if (!tmp53) {
        tmp53 = first === "System";
      }
      tmp50 = tmp53;
    }
    if (tmp50) {
      tmp50 = fontSize == null;
    }
    if (tmp50) {
      tmp50 = headerBackButtonMenuEnabled !== false;
    }
    const obj5 = {};
    ({ jsxs, Fragment } = React);
    if (RN.Platform.OS === "ios") {
      const obj6 = {};
      let jsxResult = null;
      ({ jsxs: jsxs2, Fragment: Fragment2 } = React);
      if (headerLeftResult != null) {
        const obj7 = { children: headerLeftResult };
        jsxResult = React.jsx(_mod898.ScreenStackHeaderLeftView, { children: headerLeftResult });
      }
      const items4 = [jsxResult, ];
      let jsxResult1 = null;
      if (headerTitleResult != null) {
        const obj8 = { children: headerTitleResult };
        jsxResult1 = React.jsx(_mod898.ScreenStackHeaderCenterView, { children: headerTitleResult });
      }
      items4[1] = jsxResult1;
      obj6.children = items4;
      let jsxs2Result = jsxs2(Fragment2, obj6);
    } else {
      theme = React;
      theme = React;
      const obj9 = {};
      ({ jsxs: jsxs3, Fragment: Fragment3 } = React);
      if (headerLeftResult != null) {
        const obj10 = {};
        let tmp62 = null;
        if (!tmp54) {
          const obj11 = { flex: 1 };
          tmp62 = obj11;
        }
        obj10.style = tmp62;
        const items5 = [headerLeftResult, ];
        if (headerTitleAlign === "center") {
          items5[1] = null;
          obj10.children = items5;
          let jsxsResult = React.jsxs(_mod898.ScreenStackHeaderLeftView, obj10);
        } else {
          const jsx = React.jsx;
          const View = RN.View;
          const obj12 = {};
          const obj13 = { flex: 1 };
          obj12.style = obj13;
          if (tmp34) {
            obj12.children = headerTitleResult;
            let jsxResult2 = <View {...obj12} />;
          } else {
            const obj14 = { tintColor: tmp2, style: obj1, children: headerTitle };
            obj12.children = React.jsx(Assets.HeaderTitle, { tintColor: tmp2, style: obj1, children: headerTitle });
            jsxResult2 = <View {...obj12} />;
          }
        }
      } else {
        jsxsResult = null;
      }
      const items6 = [jsxsResult, ];
      let jsxResult4 = null;
      if (tmp54) {
        const obj15 = {};
        let jsxResult3 = headerTitleResult;
        if (!tmp34) {
          const obj16 = { tintColor: tmp2, style: obj1, children: headerTitle };
          jsxResult3 = React.jsx(Assets.HeaderTitle, { tintColor: tmp2, style: obj1, children: headerTitle });
        }
        obj15.children = jsxResult3;
        jsxResult4 = React.jsx(_mod898.ScreenStackHeaderCenterView, {});
      }
      items6[1] = jsxResult4;
      obj9.children = items6;
      jsxs2Result = jsxs3(Fragment3, obj9);
    }
    const items7 = [jsxs2Result, , , ];
    let jsxResult5 = null;
    if (headerBackImageSource !== undefined) {
      const obj17 = { source: headerBackImageSource };
      jsxResult5 = React.jsx(_mod898.ScreenStackHeaderBackButtonImage, { source: headerBackImageSource });
    }
    items7[1] = jsxResult5;
    let jsxResult6 = null;
    if (headerRightResult != null) {
      const obj18 = { children: headerRightResult };
      jsxResult6 = React.jsx(_mod898.ScreenStackHeaderRightView, { children: headerRightResult });
    }
    items7[2] = jsxResult6;
    let jsxResult7 = null;
    if (isSearchBarAvailableForCurrentPlatform) {
      theme = require;
      theme = dependencyMap;
      const obj19 = {};
      theme = React;
      theme = globalThis;
      const _Object = Object;
      obj19.children = React.jsx(_mod898.SearchBar, Object.assign({}, headerSearchBarOptions));
      jsxResult7 = React.jsx(_mod898.ScreenStackHeaderSearchBarView, {});
    }
    items7[3] = jsxResult7;
    obj5.children = items7;
    const obj20 = { backButtonInCustomView: tmp43, backgroundColor, backTitle: headerBackTitle };
    theme = undefined;
    theme = <></>;
    if (!tmp50) {
      theme = headerBackButtonDisplayMode !== "minimal";
    }
    obj20.backTitleVisible = theme;
    theme = undefined;
    if (tmp50) {
      theme = headerBackButtonDisplayMode;
    }
    obj20.backButtonDisplayMode = theme;
    obj20.backTitleFontFamily = first;
    obj20.backTitleFontSize = fontSize;
    obj20.blurEffect = headerBlurEffect;
    obj20.color = tmp2;
    obj20.direction = _mod529.useLocale().direction;
    obj20.disableBackButtonMenu = headerBackButtonMenuEnabled === false;
    obj20.hidden = headerShown === false;
    obj20.hideBackButton = headerBackVisible === false;
    theme = headerShadowVisible === false || headerBackground != null;
    if (!theme) {
      if (headerTransparent) {
        headerTransparent = headerShadowVisible !== true;
      }
      theme = headerTransparent;
    }
    obj20.hideShadow = theme;
    obj20.largeTitle = headerLargeTitle;
    obj20.largeTitleBackgroundColor = StyleSheet5.flatten(headerLargeStyle) || {}.backgroundColor;
    obj20.largeTitleColor = color;
    obj20.largeTitleFontFamily = defaultResult[1];
    obj20.largeTitleFontSize = fontSize2;
    obj20.largeTitleFontWeight = tmp9.fontWeight;
    obj20.largeTitleHideShadow = headerLargeTitleShadowVisible === false;
    obj20.title = headerTitle;
    obj20.titleColor = headerTintColor;
    obj20.titleFontFamily = defaultResult[2];
    obj20.titleFontSize = fontSize1;
    theme = globalThis;
    const _String = String;
    obj20.titleFontWeight = String(fontWeight);
    obj20.topInsetEnabled = headerTopInsetEnabled;
    obj20.translucent = tmp46 === true;
    obj20.children = theme;
    return obj20;
  }
}
