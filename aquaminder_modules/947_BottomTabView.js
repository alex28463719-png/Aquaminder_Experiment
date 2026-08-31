// Module ID: 947
// Function ID: 9914
// Name: BottomTabView
// Dependencies: [1, 6, 38, 119, 2, 251, 948, 940, 951, 529, 852, 673, 942, 952, 946]
// Exports: BottomTabView

// Module 947 (BottomTabView)
import _toConsumableArray from "_toConsumableArray" /* 6 */;
import _slicedToArray from "_slicedToArray" /* 38 */;
import getIteratorFn from "getIteratorFn" /* 119 */;
import BottomTabBar from "BottomTabBar" /* 940 */;
import FadeSpec from "FadeSpec" /* 948 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_6 from "jsxProd" /* 251 */;

let closure_2 = module_1(_toConsumableArray);
let closure_3 = module_1(_slicedToArray);
let closure_4 = _interopRequireWildcard(getIteratorFn);
let c7 = 0;
let c8 = 1;
let c9 = 2;
let obj = { fade: FadeSpec.FadeTransition, shift: FadeSpec.ShiftTransition, none: { sceneStyleInterpolator: undefined, transitionSpec: { animation: "timing", config: { duration: 0 } } } };
let closure_11 = get_registerCallableModule.Platform.OS !== "web";
function hasAnimation(animation) {
  animation = animation.animation;
  if (animation) {
    return animation !== "none";
  } else {
    const _Boolean = Boolean;
    return Boolean(tmp);
  }
}
function renderTabBarDefault(arg0) {
  return React.jsx(BottomTabBar.BottomTabBar, Object.assign({}, arg0));
}
const StyleSheet = get_registerCallableModule.StyleSheet;
const styles = StyleSheet.create({ screens: { flex: 1, overflow: "hidden" } });

export function BottomTabView(tabBar) {
  const _require = tabBar;
  tabBar = tabBar.tabBar;
  if (tabBar === undefined) {
    tabBar = str4;
  }
  let state = tabBar.state;
  const navigation = tabBar.navigation;
  const descriptors = tabBar.descriptors;
  ({ safeAreaInsets: get_registerCallableModule, detachInactiveScreens } = tabBar);
  if (detachInactiveScreens === undefined) {
    let tmp2 = get_registerCallableModule.Platform.OS === "web";
    if (!tmp2) {
      tmp2 = get_registerCallableModule.Platform.OS === "android";
    }
    if (!tmp2) {
      tmp2 = get_registerCallableModule.Platform.OS === "ios";
    }
    detachInactiveScreens = tmp2;
  }
  const key = state.routes[state.index].key;
  let items = [key];
  const defaultResult = navigation.default(descriptors.useState(items), 2);
  const first = defaultResult[0];
  if (!first.includes(key)) {
    let items1 = [];
    let items2 = [key];
    defaultResult[1](items1.concat(state.default(first), items2));
  }
  closure_9 = descriptors.useRef(key);
  const animatedHashMap = _require(tabBar[8]).useAnimatedHashMap(state);
  const items3 = [descriptors, key, navigation, , , ];
  ({ index: arr4[3], routes: arr4[4] } = state);
  items3[5] = animatedHashMap;
  const effect = descriptors.useEffect(() => {
    const current = ref.current;
    if (current !== key) {
      if (descriptors[current] != null) {
        if (tmp9.options.popToTopOnBlur) {
          let routes = state.routes;
          const found = routes.find((key) => key.key === current);
          let type;
          if (found != null) {
            state = found.state;
            if (state != null) {
              type = state.type;
            }
          }
          if (type === "stack") {
            if (found.state.key) {
              const _Object = Object;
              const StackActions = tabBar(tabBar[9]).StackActions;
              obj = { target: found.state.key };
              closure_1 = Object.assign({}, StackActions.popToTop(), obj);
            }
          }
        }
      }
    }
    (function animateToIndex() {
      if (current !== closure_1_7) {
        obj = { type: "transitionStart", target: closure_1_7 };
        closure_1_3.emit(obj);
      }
      let Animated = closure_2_5.Animated;
      const routes = closure_1_2.routes;
      const mapped = routes.map((key) => {
        const options = closure_2_4[key.key].options;
        const animation = options.animation;
        let str = "none";
        if (animation !== undefined) {
          str = animation;
        }
        let transitionSpec = options.transitionSpec;
        if (transitionSpec === undefined) {
          transitionSpec = animatedHashMap[str].transitionSpec;
        }
        let transitionSpec2 = transitionSpec;
        if (key.key !== closure_1_0) {
          transitionSpec2 = transitionSpec;
          if (key.key !== closure_2_7) {
            transitionSpec2 = animatedHashMap.none.transitionSpec;
          }
        }
        if (transitionSpec2 == null) {
          transitionSpec2 = animatedHashMap.none.transitionSpec;
        }
        let num = 0;
        if (arg1 !== closure_2_2.index) {
          let num2 = -1;
          if (arg1 >= closure_2_2.index) {
            num2 = 1;
          }
          num = num2;
        }
        const Animated = closure_3_5.Animated;
        obj = { toValue: num, useNativeDriver: frame };
        return Animated[transitionSpec2.animation](closure_2_10[key.key], Object.assign({}, transitionSpec2.config, obj));
      });
      Animated.parallel(mapped.filter(Boolean)).start((finished) => {
        if (finished.finished) {
          if (closure_1_1) {
            closure_2_3.dispatch(closure_1_1);
          }
        }
        if (closure_1_0 !== closure_2_7) {
          obj = { type: "transitionEnd", target: closure_2_7 };
          closure_2_3.emit(obj);
        }
      });
    })();
    ref.current = key;
  }, items3);
  const frame = _require(tabBar[10]).SafeAreaProviderCompat.initialMetrics.frame;
  const defaultResult1 = navigation.default(descriptors.useState(() => {
    obj = { state, descriptors, dimensions: frame, insets: Object.assign({}, tabBar(tabBar[10]).SafeAreaProviderCompat.initialMetrics.insets, tabBar.safeAreaInsets), style: descriptors[state.routes[state.index].key].options.tabBarStyle };
    return tabBar(tabBar[7]).getTabBarHeight(obj);
  }), 2);
  closure_12 = defaultResult1[0];
  let routes = state.routes;
  const tabBarPosition = descriptors[key].options.tabBarPosition;
  str4 = "bottom";
  if (tabBarPosition !== undefined) {
    str4 = tabBarPosition;
  }
  obj = {
    value: defaultResult1[1],
    children: (function renderTabBar() {
      return detachInactiveScreens.jsx(tabBar(tabBar[11]).SafeAreaInsetsContext.Consumer, {
        children(top) {
          obj = { state: closure_1_2, descriptors: closure_1_4, navigation: closure_1_3 };
          obj = {};
          top = undefined;
          if (closure_1_5 != null) {
            top = closure_1_5.top;
          }
          if (top == null) {
            let top1;
            if (top != null) {
              top1 = top.top;
            }
            top = top1;
          }
          let num = 0;
          if (top != null) {
            num = top;
          }
          obj.top = num;
          let right;
          if (closure_1_5 != null) {
            right = closure_1_5.right;
          }
          if (right == null) {
            let right1;
            if (top != null) {
              right1 = top.right;
            }
            right = right1;
          }
          let num2 = 0;
          if (right != null) {
            num2 = right;
          }
          obj.right = num2;
          let bottom;
          if (closure_1_5 != null) {
            bottom = closure_1_5.bottom;
          }
          if (bottom == null) {
            let bottom1;
            if (top != null) {
              bottom1 = top.bottom;
            }
            bottom = bottom1;
          }
          let num3 = 0;
          if (bottom != null) {
            num3 = bottom;
          }
          obj.bottom = num3;
          let left;
          if (closure_1_5 != null) {
            left = closure_1_5.left;
          }
          if (left == null) {
            let left1;
            if (top != null) {
              left1 = top.left;
            }
            left = left1;
          }
          let num4 = 0;
          if (left != null) {
            num4 = left;
          }
          obj.left = num4;
          obj.insets = obj;
          return closure_1_1(obj);
        }
      });
    })()
  };
  const jsxResult = detachInactiveScreens.jsx(_require(tabBar[12]).BottomTabBarHeightCallbackContext.Provider, {
    value: defaultResult1[1],
    children: (function renderTabBar() {
      return detachInactiveScreens.jsx(tabBar(tabBar[11]).SafeAreaInsetsContext.Consumer, {
        children(top) {
          obj = { state: closure_1_2, descriptors: closure_1_4, navigation: closure_1_3 };
          obj = {};
          top = undefined;
          if (closure_1_5 != null) {
            top = closure_1_5.top;
          }
          if (top == null) {
            let top1;
            if (top != null) {
              top1 = top.top;
            }
            top = top1;
          }
          let num = 0;
          if (top != null) {
            num = top;
          }
          obj.top = num;
          let right;
          if (closure_1_5 != null) {
            right = closure_1_5.right;
          }
          if (right == null) {
            let right1;
            if (top != null) {
              right1 = top.right;
            }
            right = right1;
          }
          let num2 = 0;
          if (right != null) {
            num2 = right;
          }
          obj.right = num2;
          let bottom;
          if (closure_1_5 != null) {
            bottom = closure_1_5.bottom;
          }
          if (bottom == null) {
            let bottom1;
            if (top != null) {
              bottom1 = top.bottom;
            }
            bottom = bottom1;
          }
          let num3 = 0;
          if (bottom != null) {
            num3 = bottom;
          }
          obj.bottom = num3;
          let left;
          if (closure_1_5 != null) {
            left = closure_1_5.left;
          }
          if (left == null) {
            let left1;
            if (top != null) {
              left1 = top.left;
            }
            left = left1;
          }
          let num4 = 0;
          if (left != null) {
            num4 = left;
          }
          obj.left = num4;
          obj.insets = obj;
          return closure_1_1(obj);
        }
      });
    })()
  }, "tabbar");
  obj = {};
  let obj1 = {};
  if (str4 === "left") {
    let str5 = "row";
  } else {
    str5 = "column";
  }
  obj1.flexDirection = str5;
  obj.style = obj1;
  if (str4 === "top") {
    let tmp14 = jsxResult;
  } else {
    tmp14 = null;
  }
  const items4 = [tmp14, , ];
  let obj2 = {
    enabled: detachInactiveScreens,
    hasTwoStates: !routes.some((arg0) => callback(descriptors[arg0.key].options)),
    style: screens.screens,
    children: routes.map((key) => {
      tabBar = key;
      obj = descriptors[key.key];
      let options = obj.options;
      const lazy = options.lazy;
      let flag = true;
      if (lazy !== undefined) {
        flag = lazy;
      }
      const animation = options.animation;
      let str = "none";
      if (animation !== undefined) {
        str = animation;
      }
      let sceneStyleInterpolator = options.sceneStyleInterpolator;
      if (sceneStyleInterpolator === undefined) {
        sceneStyleInterpolator = animatedHashMap[str].sceneStyleInterpolator;
      }
      const preloadedRouteKeys = state.preloadedRouteKeys;
      const hasItem = preloadedRouteKeys.includes(key.key);
      if (flag) {
        if (!first.includes(key.key)) {
          if (!tmp2) {
            if (!hasItem) {
              return null;
            }
          }
        }
      }
      const options2 = obj.options;
      ({ header, freezeOnBlur } = options2);
      if (header === undefined) {
        header = (layout) => {
          const options = layout.options;
          obj = { layout: layout.layout, title: key(tabBar[10]).getHeaderTitle(options, key.name) };
          return detachInactiveScreens.jsx(key(tabBar[10]).Header, Object.assign({}, options, obj));
        };
      }
      let result;
      ({ headerShown, headerStatusBarHeight, headerTransparent, sceneStyle } = options2);
      if (sceneStyleInterpolator != null) {
        obj = {};
        obj = { progress: animatedHashMap[key.key] };
        obj.current = obj;
        result = sceneStyleInterpolator(obj);
      }
      if (result == null) {
        result = {};
      }
      let sceneStyle2 = callback(obj.options);
      if (state.index === arg1) {
        let interpolateResult = closure_9;
      } else if (sceneStyle2) {
        let obj4 = animatedHashMap[key.key];
        const obj1 = { inputRange: [0, 0.99999, 1] };
        const items = [first, first, key];
        obj1.outputRange = items;
        obj1.extrapolate = "extend";
        interpolateResult = obj4.interpolate(obj1);
      } else {
        interpolateResult = key;
      }
      const obj2 = {};
      const items1 = [closure_1_5.StyleSheet.absoluteFill, ];
      const obj3 = {};
      let num = -1;
      if (state.index === arg1) {
        num = 0;
      }
      obj3.zIndex = num;
      items1[1] = obj3;
      obj2.style = items1;
      obj2.active = interpolateResult;
      obj2.enabled = detachInactiveScreens;
      obj2.freezeOnBlur = freezeOnBlur;
      obj2.shouldFreeze = interpolateResult === key && !hasItem;
      obj4 = {};
      let num2 = 0;
      if (str4 === "bottom") {
        num2 = callback;
      }
      obj4.value = num2;
      const obj5 = { focused: state.index === arg1, route: obj.route, navigation: obj.navigation, headerShown, headerStatusBarHeight, headerTransparent, header: header({ layout: frame, route: obj.route, navigation: obj.navigation, options: obj.options }) };
      const items2 = [sceneStyle, ];
      if (sceneStyle2) {
        sceneStyle2 = result.sceneStyle;
      }
      items2[1] = sceneStyle2;
      obj5.style = items2;
      obj5.children = obj.render();
      obj4.children = detachInactiveScreens.jsx(tabBar(tabBar[10]).Screen, { focused: state.index === arg1, route: obj.route, navigation: obj.navigation, headerShown, headerStatusBarHeight, headerTransparent, header: header({ layout: frame, route: obj.route, navigation: obj.navigation, options: obj.options }) });
      obj2.children = detachInactiveScreens.jsx(tabBar(tabBar[14]).BottomTabBarHeightContext.Provider, {});
      return detachInactiveScreens.jsx(tabBar(tabBar[13]).MaybeScreen, {}, key.key);
    })
  };
  items4[1] = detachInactiveScreens.jsx(_require(tabBar[13]).MaybeScreenContainer, {
    enabled: detachInactiveScreens,
    hasTwoStates: !routes.some((arg0) => callback(descriptors[arg0.key].options)),
    style: screens.screens,
    children: routes.map((key) => {
      tabBar = key;
      obj = descriptors[key.key];
      let options = obj.options;
      const lazy = options.lazy;
      let flag = true;
      if (lazy !== undefined) {
        flag = lazy;
      }
      const animation = options.animation;
      let str = "none";
      if (animation !== undefined) {
        str = animation;
      }
      let sceneStyleInterpolator = options.sceneStyleInterpolator;
      if (sceneStyleInterpolator === undefined) {
        sceneStyleInterpolator = animatedHashMap[str].sceneStyleInterpolator;
      }
      const preloadedRouteKeys = state.preloadedRouteKeys;
      const hasItem = preloadedRouteKeys.includes(key.key);
      if (flag) {
        if (!first.includes(key.key)) {
          if (!tmp2) {
            if (!hasItem) {
              return null;
            }
          }
        }
      }
      const options2 = obj.options;
      ({ header, freezeOnBlur } = options2);
      if (header === undefined) {
        header = (layout) => {
          const options = layout.options;
          obj = { layout: layout.layout, title: key(tabBar[10]).getHeaderTitle(options, key.name) };
          return detachInactiveScreens.jsx(key(tabBar[10]).Header, Object.assign({}, options, obj));
        };
      }
      let result;
      ({ headerShown, headerStatusBarHeight, headerTransparent, sceneStyle } = options2);
      if (sceneStyleInterpolator != null) {
        obj = {};
        obj = { progress: animatedHashMap[key.key] };
        obj.current = obj;
        result = sceneStyleInterpolator(obj);
      }
      if (result == null) {
        result = {};
      }
      let sceneStyle2 = callback(obj.options);
      if (state.index === arg1) {
        let interpolateResult = closure_9;
      } else if (sceneStyle2) {
        let obj4 = animatedHashMap[key.key];
        const obj1 = { inputRange: [0, 0.99999, 1] };
        const items = [first, first, key];
        obj1.outputRange = items;
        obj1.extrapolate = "extend";
        interpolateResult = obj4.interpolate(obj1);
      } else {
        interpolateResult = key;
      }
      const obj2 = {};
      const items1 = [closure_1_5.StyleSheet.absoluteFill, ];
      const obj3 = {};
      let num = -1;
      if (state.index === arg1) {
        num = 0;
      }
      obj3.zIndex = num;
      items1[1] = obj3;
      obj2.style = items1;
      obj2.active = interpolateResult;
      obj2.enabled = detachInactiveScreens;
      obj2.freezeOnBlur = freezeOnBlur;
      obj2.shouldFreeze = interpolateResult === key && !hasItem;
      obj4 = {};
      let num2 = 0;
      if (str4 === "bottom") {
        num2 = callback;
      }
      obj4.value = num2;
      const obj5 = { focused: state.index === arg1, route: obj.route, navigation: obj.navigation, headerShown, headerStatusBarHeight, headerTransparent, header: header({ layout: frame, route: obj.route, navigation: obj.navigation, options: obj.options }) };
      const items2 = [sceneStyle, ];
      if (sceneStyle2) {
        sceneStyle2 = result.sceneStyle;
      }
      items2[1] = sceneStyle2;
      obj5.style = items2;
      obj5.children = obj.render();
      obj4.children = detachInactiveScreens.jsx(tabBar(tabBar[10]).Screen, { focused: state.index === arg1, route: obj.route, navigation: obj.navigation, headerShown, headerStatusBarHeight, headerTransparent, header: header({ layout: frame, route: obj.route, navigation: obj.navigation, options: obj.options }) });
      obj2.children = detachInactiveScreens.jsx(tabBar(tabBar[14]).BottomTabBarHeightContext.Provider, {});
      return detachInactiveScreens.jsx(tabBar(tabBar[13]).MaybeScreen, {}, key.key);
    })
  }, "screens");
  if (str4 === "bottom") {
    let tmp15 = jsxResult;
  } else {
    tmp15 = null;
  }
  items4[2] = tmp15;
  obj.children = items4;
  return detachInactiveScreens.jsxs(_require(tabBar[10]).SafeAreaProviderCompat, {});
}
