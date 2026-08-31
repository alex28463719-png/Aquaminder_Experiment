// Module ID: 940
// Function ID: 9865
// Name: BottomTabBar
// Dependencies: [1, 38, 119, 2, 251, 529, 941, 942, 852, 943]
// Exports: BottomTabBar

// Module 940 (BottomTabBar)
import _slicedToArray from "_slicedToArray" /* 38 */;
import getIteratorFn from "getIteratorFn" /* 119 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_5 from "jsxProd" /* 251 */;

let closure_2 = module_1(_slicedToArray);
let closure_3 = module_1(getIteratorFn);
let c6 = 15;
let c7 = 12;
let closure_8 = get_registerCallableModule.Platform.OS !== "web";
function shouldUseHorizontalLabels(dimensions) {
  ({ state, descriptors } = dimensions);
  dimensions = dimensions.dimensions;
  const tabBarLabelPosition = descriptors[state.routes[state.index].key].options.tabBarLabelPosition;
  if (tabBarLabelPosition) {
    if ("beside-icon" === tabBarLabelPosition) {
      return true;
    } else if ("below-icon" === tabBarLabelPosition) {
      return false;
    }
  }
  if (dimensions.width >= 768) {
    const routes = state.routes;
    return routes.reduce((arg0, arg1) => {
      const StyleSheet = closure_1_4.StyleSheet;
      const flatStyles = StyleSheet.flatten(descriptors[arg1.key].options.tabBarItemStyle);
      if (flatStyles) {
        if (typeof flatStyles.width === "number") {
          return arg0 + flatStyles.width;
        } else if (typeof flatStyles.maxWidth === "number") {
          return arg0 + flatStyles.maxWidth;
        }
      }
      return arg0 + 125;
    }, 0) <= dimensions.width;
  } else {
    return dimensions.width > dimensions.height;
  }
}
function isCompact(arg0) {
  ({ state, descriptors, dimensions } = arg0);
  const tabBarPosition = descriptors[state.routes[state.index].key].options.tabBarPosition;
  if (tabBarPosition !== "left") {
    if (tabBarPosition !== "right") {
      if (tmp !== "material") {
        const obj = { state, descriptors, dimensions };
        if (get_registerCallableModule.Platform.OS === "ios") {
          if (!get_registerCallableModule.Platform.isPad) {
            if (tmp2) {
              if (tmp4) {
                return true;
              }
            }
          }
        }
        return false;
      }
    }
  }
  return false;
}
function getTabBarHeight(style) {
  ({ state, descriptors } = style);
  const StyleSheet = get_registerCallableModule.StyleSheet;
  ({ dimensions, insets } = style);
  const flatStyles = StyleSheet.flatten(style.style);
  let height;
  if (flatStyles) {
    if ("height" in flatStyles) {
      height = flatStyles.height;
    }
  }
  if (typeof height === "number") {
    return height;
  } else {
    let str2 = "bottom";
    if (descriptors[state.routes[state.index].key].options.tabBarPosition === "top") {
      str2 = "top";
    }
    const obj = { state, descriptors, dimensions };
    if (isCompact(obj)) {
      return 32 + tmp3;
    } else {
      return 49 + tmp3;
    }
  }
}
let StyleSheet = get_registerCallableModule.StyleSheet;
const styles = StyleSheet.create({ start: { top: 0, bottom: 0, start: 0 }, end: { top: 0, bottom: 0, end: 0 }, bottom: { start: 0, end: 0, bottom: 0, elevation: 8 }, bottomContent: { flex: 1, flexDirection: "row" }, sideContent: { flex: 1, flexDirection: "column" }, bottomItem: { flex: 1 } });

export function BottomTabBar(state) {
  state = state.state;
  ({ navigation: dependencyMap, descriptors } = state);
  const insets = state.insets;
  const style = state.style;
  const colors = state(529).useTheme().colors;
  const direction = state(529).useLocale().direction;
  const buildHref = state(529).useLinkBuilder().buildHref;
  let options = descriptors[state.routes[state.index].key].options;
  const tabBarPosition = options.tabBarPosition;
  let str = "bottom";
  if (tabBarPosition !== undefined) {
    str = tabBarPosition;
  }
  ({ tabBarShowLabel: c6, tabBarHideOnKeyboard } = options);
  let flag = false;
  if (tabBarHideOnKeyboard !== undefined) {
    flag = tabBarHideOnKeyboard;
  }
  const tabBarVisibilityAnimationConfig = options.tabBarVisibilityAnimationConfig;
  const tabBarVariant = options.tabBarVariant;
  let str2 = "uikit";
  if (tabBarVariant !== undefined) {
    str2 = tabBarVariant;
  }
  const tabBarStyle = options.tabBarStyle;
  ({ tabBarBackground, tabBarActiveTintColor: isCompact, tabBarInactiveTintColor: getTabBarHeight, tabBarActiveBackgroundColor: closure_12, tabBarInactiveBackgroundColor: closure_13 } = options);
  if (str2 === "material") {
    if (str !== "left") {
      if (str !== "right") {
        const _Error2 = Error;
        const error = new Error("The 'material' variant for tab bar is only supported when 'tabBarPosition' is set to 'left' or 'right'.");
        throw error;
      }
    }
  }
  if (options.tabBarLabelPosition === "below-icon") {
    if (str2 === "uikit") {
      const _Error = Error;
      const error1 = new Error("The 'below-icon' label position for tab bar is only supported when 'tabBarPosition' is set to 'top' or 'bottom' when using the 'uikit' variant.");
      throw error1;
    }
  }
  const isKeyboardShown = state(941).useIsKeyboardShown();
  closure_14 = insets.default.useContext(state(942).BottomTabBarHeightCallbackContext);
  if (flag) {
    flag = isKeyboardShown;
  }
  closure_15 = tmp3;
  closure_16 = insets.default.useRef(tabBarVisibilityAnimationConfig);
  const effect = insets.default.useEffect(() => {
    closure_16.current = tabBarVisibilityAnimationConfig;
  });
  const defaultResult = descriptors.default(insets.default.useState(!!flag), 2);
  const first = defaultResult[0];
  closure_17 = defaultResult[1];
  const first1 = descriptors.default(insets.default.useState(() => {
    let num = 0;
    if (closure_15) {
      num = 1;
    }
    const value = new style.Animated.Value(num);
    return value;
  }), 1)[0];
  let items = [first1, !flag];
  const effect1 = insets.default.useEffect(() => {
    const current = ref.current;
    if (closure_15) {
      let animation;
      if (current != null) {
        const show = current.show;
        if (show != null) {
          animation = show.animation;
        }
      }
      if (animation === "spring") {
        let timing2 = style.Animated.spring;
      } else {
        timing2 = style.Animated.timing;
      }
      let obj = { toValue: 1, useNativeDriver: "spring", duration: 250 };
      let config;
      if (current != null) {
        const show2 = current.show;
        if (show2 != null) {
          config = show2.config;
        }
      }
      timing2(first1, Object.assign(obj, config)).start((finished) => {
        if (finished.finished) {
          closure_1_17(false);
        }
      });
      const timing2Result = timing2(first1, Object.assign(obj, config));
      const tmp16 = first1;
    } else {
      callback2(true);
      let animation1;
      if (current != null) {
        const hide = current.hide;
        if (hide != null) {
          animation1 = hide.animation;
        }
      }
      if (animation1 === "spring") {
        let timing = style.Animated.spring;
      } else {
        timing = style.Animated.timing;
      }
      obj = { toValue: 0, useNativeDriver: str2, duration: 200 };
      let config1;
      if (current != null) {
        const hide2 = current.hide;
        if (hide2 != null) {
          config1 = hide2.config;
        }
      }
      timing(first1, Object.assign(obj, config1)).start();
      const timingResult = timing(first1, Object.assign(obj, config1));
      const tmp7 = first1;
    }
    return () => closure_1_18.stopAnimation();
  }, items);
  const defaultResult1 = descriptors.default(insets.default.useState({ height: 0 }), 2);
  closure_19 = defaultResult1[1];
  const routes = state.routes;
  function handleLayout(nativeEvent) {
    const height = nativeEvent.nativeEvent.layout.height;
    if (callback != null) {
      callback(height);
    }
    callback3((height) => {
      if (height === height.height) {
        return height;
      } else {
        const obj = { height };
        return obj;
      }
    });
  }
  const frameSize = state(852).useFrameSize((dimensions) => {
    const items = [tabBarStyle, style];
    return closure_1_11({ state, descriptors, insets, dimensions, style: items });
  });
  const frameSize1 = state(852).useFrameSize((dimensions) => tabBarStyle({ state, descriptors, dimensions }));
  closure_22 = state(852).useFrameSize((dimensions) => closure_1_10({ state, descriptors, dimensions }));
  let tmp12 = tmp11;
  if (str !== "left") {
    tmp12 = str === "right";
  }
  closure_23 = tmp12;
  const tmp13 = str2 === "material" ? tabBarVisibilityAnimationConfig : c6;
  closure_24 = tmp13;
  let tabBarBackgroundResult;
  const frameSize2 = state(852).useFrameSize((width) => {
    let num = 0;
    if (closure_23) {
      num = 0;
      if (frameSize1) {
        num = state(closure_1_1[8]).getDefaultSidebarWidth(width);
      }
    }
    return num;
  });
  if (tabBarBackground != null) {
    tabBarBackgroundResult = tabBarBackground();
  }
  let obj = {};
  if (str === "left") {
    let bottom = closure_12.start;
  } else if (str === "right") {
    bottom = closure_12.end;
  } else {
    bottom = closure_12.bottom;
  }
  const items1 = [bottom, , , , ];
  if (style.Platform.OS === "web") {
    let tmp19 = str === "right";
  } else {
    tmp19 = direction === "rtl" && tmp11;
    if (!tmp19) {
      let tmp20 = direction !== "rtl";
      if (tmp20) {
        tmp20 = str === "right";
      }
      tmp19 = tmp20;
    }
  }
  if (tmp19) {
    obj = { borderLeftWidth: tmp21.StyleSheet.hairlineWidth };
    let obj3 = obj;
  } else {
    let tmp22 = tmp11;
    if (tmp21.Platform.OS !== "web") {
      let tmp23 = direction === "rtl";
      if (tmp23) {
        tmp23 = str === "right";
      }
      if (!tmp23) {
        tmp23 = direction !== "rtl" && tmp11;
        const tmp24 = direction !== "rtl" && tmp11;
      }
      tmp22 = tmp23;
    }
    if (tmp22) {
      let obj1 = { borderRightWidth: style.StyleSheet.hairlineWidth };
      obj3 = obj1;
    } else if (str === "top") {
      let obj2 = { borderBottomWidth: style.StyleSheet.hairlineWidth };
      obj3 = obj2;
    } else {
      obj3 = { borderTopWidth: style.StyleSheet.hairlineWidth };
    }
  }
  items1[1] = obj3;
  const obj4 = {};
  let str14 = "transparent";
  if (tabBarBackgroundResult == null) {
    str14 = colors.card;
  }
  obj4.backgroundColor = str14;
  obj4.borderColor = colors.border;
  items1[2] = obj4;
  if (tmp12) {
    const obj5 = {};
    let result = tmp13;
    if (!frameSize1) {
      result = tmp13 / 2;
    }
    obj5.paddingTop = result + insets.top;
    let result1 = tmp13;
    if (!frameSize1) {
      result1 = tmp13 / 2;
    }
    obj5.paddingBottom = result1 + insets.bottom;
    let num3 = 0;
    if (tmp11) {
      num3 = insets.left;
    }
    obj5.paddingStart = tmp13 + num3;
    let num4 = 0;
    if (str === "right") {
      num4 = insets.right;
    }
    obj5.paddingEnd = tmp13 + num4;
    obj5.minWidth = frameSize2;
    let items4 = obj5;
  } else {
    const obj6 = {};
    const obj7 = {};
    const obj8 = { inputRange: [0, 1] };
    let str16 = "bottom";
    if (str === "top") {
      str16 = "top";
    }
    const items2 = [defaultResult1[0].height + insets[str16] + style.StyleSheet.hairlineWidth, 0];
    obj8.outputRange = items2;
    obj7.translateY = first1.interpolate(obj8);
    const items3 = [obj7];
    obj6.transform = items3;
    let str17;
    if (first) {
      str17 = "absolute";
    }
    obj6.position = str17;
    items4 = [obj6, ];
    const obj9 = { height: frameSize };
    let num = 0;
    if (str === "bottom") {
      num = insets.bottom;
    }
    obj9.paddingBottom = num;
    let num2 = 0;
    if (str === "top") {
      num2 = insets.top;
    }
    obj9.paddingTop = num2;
    const _Math = Math;
    obj9.paddingHorizontal = Math.max(insets.left, insets.right);
    items4[1] = obj9;
  }
  items1[3] = items4;
  items1[4] = tabBarStyle;
  obj.style = items1;
  let str19 = "auto";
  if (first) {
    str19 = "none";
  }
  obj.pointerEvents = str19;
  let tmp33;
  if (!tmp12) {
    tmp33 = handleLayout;
  }
  obj.onLayout = tmp33;
  const obj10 = { pointerEvents: "none", style: style.StyleSheet.absoluteFill, children: tabBarBackgroundResult };
  const items5 = [
    <style.View pointerEvents="none" style={style.StyleSheet.absoluteFill}>{tabBarBackgroundResult}</style.View>,
    <style.View role="tablist" style={tmp12 ? closure_12.sideContent : closure_12.bottomContent}>{routes.map((name) => {
      state = name;
      closure_1 = tmp;
      const options = descriptors[name.key].options;
      if (typeof options.tabBarLabel === "function") {
        let tabBarLabel = options.tabBarLabel;
      } else {
        let obj = {};
        ({ tabBarLabel: obj.label, title: obj.title } = options);
        tabBarLabel = state(closure_1_1[8]).getLabel(obj, name.name);
      }
      if (options.tabBarAccessibilityLabel !== undefined) {
        let tabBarAccessibilityLabel = options.tabBarAccessibilityLabel;
      } else if (typeof tabBarLabel === "string") {
        if (style.Platform.OS === "ios") {
          const _HermesInternal = HermesInternal;
          tabBarAccessibilityLabel = "" + tabBarLabel + ", tab, " + arg1 + 1 + " of " + routes.length;
        }
      }
      obj = { value: descriptors[name.key].navigation };
      obj = { value: name };
      const obj1 = {
        href: buildHref(name.name, name.params),
        route: name,
        descriptor: descriptors[name.key],
        focused: arg1 === state.index,
        horizontal: frameSize1,
        compact: closure_22,
        sidebar: closure_23,
        variant: str2,
        onPress() {
          let obj = { type: "tabPress", target: name.key, canPreventDefault: true };
          if (!closure_1) {
            if (!closure_1.emit(obj).defaultPrevented) {
              const _Object = Object;
              const CommonActions = state(closure_2_1[5]).CommonActions;
              obj = { target: name.key };
              closure_1.dispatch(Object.assign({}, CommonActions.navigate(name), obj));
            }
          }
        },
        onLongPress() {
          closure_1.emit({ type: "tabLongPress", target: name.key });
        },
        accessibilityLabel: tabBarAccessibilityLabel
      };
      ({ tabBarButtonTestID: obj4.testID, tabBarAllowFontScaling: obj4.allowFontScaling } = options);
      obj1.activeTintColor = closure_10;
      obj1.inactiveTintColor = closure_11;
      obj1.activeBackgroundColor = closure_12;
      obj1.inactiveBackgroundColor = closure_13;
      ({ tabBarButton: obj4.button, tabBarIcon } = options);
      if (tabBarIcon == null) {
        tabBarIcon = (arg0) => {
          ({ color, size } = arg0);
          return buildHref.jsx(state(closure_2_1[8]).MissingIcon, { color, size });
        };
      }
      obj1.icon = tabBarIcon;
      ({ tabBarBadge: obj4.badge, tabBarBadgeStyle: obj4.badgeStyle } = options);
      obj1.label = tabBarLabel;
      obj1.showLabel = closure_6;
      ({ tabBarLabelStyle: obj4.labelStyle, tabBarIconStyle: obj4.iconStyle } = options);
      if (closure_23) {
        const obj2 = {};
        if (frameSize1) {
          let num4 = 1;
          if (str2 === "material") {
            num4 = 0;
          }
          let result = num4;
        } else {
          result = closure_24 / 2;
        }
        obj2.marginVertical = result;
      } else {
        const items = [closure_1_12.bottomItem, options.tabBarItemStyle];
        obj1.style = items;
        obj.children = buildHref.jsx(state(closure_1_1[9]).BottomTabItem, obj1);
        obj.children = buildHref.jsx(state(closure_1_1[5]).NavigationRouteContext.Provider, obj);
        return buildHref.jsx(state(closure_1_1[5]).NavigationContext.Provider, obj, name.key);
      }
    })}</style.View>
  ];
  obj.children = items5;
  return buildHref.jsxs(style.Animated.View, {});
}
export { getTabBarHeight };
