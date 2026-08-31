// Module ID: 851
// Function ID: 9338
// Name: isFabric
// Dependencies: [1, 38, 119, 2, 251, 529, 673, 852, 895, 896, 898, 934, 935, 936, 937]
// Exports: NativeStackView

// Module 851 (isFabric)
import _slicedToArray from "_slicedToArray" /* 38 */;
import getIteratorFn from "getIteratorFn" /* 119 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_6 from "jsxProd" /* 251 */;

function isFabric() {
  return "nativeFabricUIManager" in global;
}
let closure_3 = module_1(_slicedToArray);
let closure_4 = _interopRequireWildcard(getIteratorFn);
let closure_7 = get_registerCallableModule.Platform.OS !== "web";
function SceneView(arg0) {
  ({ descriptor, previousDescriptor, nextDescriptor } = arg0);
  ({ route, navigation, options } = descriptor);
  ({ animation, animationMatchesGesture, presentation } = options);
  ({ index, focused, shouldFreeze, isPreloaded, onWillDisappear, onWillAppear, onAppear, onDisappear, onDismissed, onHeaderBackButtonClicked, onNativeDismissCancelled, onGestureCancel, onSheetDetentChanged } = arg0);
  if (presentation === undefined) {
    let str = "card";
    if (tmp) {
      str = "modal";
    }
    presentation = str;
  }
  ({ fullScreenGestureEnabled, animationTypeForReplace } = options);
  let str2 = "push";
  let str3 = "push";
  if (animationTypeForReplace !== undefined) {
    str3 = animationTypeForReplace;
  }
  const fullScreenGestureShadowEnabled = options.fullScreenGestureShadowEnabled;
  let flag = true;
  if (fullScreenGestureShadowEnabled !== undefined) {
    flag = fullScreenGestureShadowEnabled;
  }
  ({ gestureDirection, gestureEnabled } = options);
  if (gestureDirection === undefined) {
    let str4 = "vertical";
    if (presentation === "card") {
      str4 = "horizontal";
    }
    gestureDirection = str4;
  }
  ({ header, headerBackButtonMenuEnabled, headerShown, headerBackground, headerTransparent, sheetAllowedDetents, gestureResponseDistance, autoHideHomeIndicator, keyboardHandlingEnabled, navigationBarColor, navigationBarTranslucent, navigationBarHidden, orientation } = options);
  if (sheetAllowedDetents === undefined) {
    sheetAllowedDetents = [1];
  }
  const sheetLargestUndimmedDetentIndex = options.sheetLargestUndimmedDetentIndex;
  let num = -1;
  let num2 = -1;
  if (sheetLargestUndimmedDetentIndex !== undefined) {
    num2 = sheetLargestUndimmedDetentIndex;
  }
  const sheetGrabberVisible = options.sheetGrabberVisible;
  let flag2 = false;
  if (sheetGrabberVisible !== undefined) {
    flag2 = sheetGrabberVisible;
  }
  const sheetCornerRadius = options.sheetCornerRadius;
  if (sheetCornerRadius !== undefined) {
    num = sheetCornerRadius;
  }
  const sheetElevation = options.sheetElevation;
  let num3 = 24;
  if (sheetElevation !== undefined) {
    num3 = sheetElevation;
  }
  const sheetExpandsWhenScrolledToEdge = options.sheetExpandsWhenScrolledToEdge;
  let flag3 = true;
  if (sheetExpandsWhenScrolledToEdge !== undefined) {
    flag3 = sheetExpandsWhenScrolledToEdge;
  }
  const sheetInitialDetentIndex = options.sheetInitialDetentIndex;
  let num4 = 0;
  if (sheetInitialDetentIndex !== undefined) {
    num4 = sheetInitialDetentIndex;
  }
  const statusBarTranslucent = options.statusBarTranslucent;
  let str6 = animation;
  let tmp2 = animationMatchesGesture;
  let tmp3 = fullScreenGestureEnabled;
  ({ statusBarAnimation, statusBarHidden, statusBarStyle, statusBarBackgroundColor, unstable_sheetFooter, freezeOnBlur, contentStyle } = options);
  if (gestureDirection === "vertical") {
    str6 = animation;
    tmp2 = animationMatchesGesture;
    tmp3 = fullScreenGestureEnabled;
    if (Animated.Platform.OS === "ios") {
      let flag4 = fullScreenGestureEnabled;
      if (fullScreenGestureEnabled === undefined) {
        flag4 = true;
      }
      let flag5 = animationMatchesGesture;
      if (animationMatchesGesture === undefined) {
        flag5 = true;
      }
      tmp2 = flag5;
      tmp3 = flag4;
      str6 = animation;
      if (animation === undefined) {
        str6 = "slide_from_bottom";
        tmp2 = flag5;
        tmp3 = flag4;
      }
    }
  }
  gestureDirection = undefined;
  if (nextDescriptor != null) {
    gestureDirection = nextDescriptor.options.gestureDirection;
  }
  if (index === 0) {
    presentation = "card";
  }
  let tmp7 = presentation === "modal";
  const safeAreaInsets = _require(num5[6]).useSafeAreaInsets();
  if (!tmp7) {
    tmp7 = presentation === "formSheet";
  }
  _require = tmp7;
  let tmp8 = Animated.Platform.OS === "ios";
  if (tmp8) {
    let isTV = Animated.Platform.isPad;
    if (!isTV) {
      isTV = Animated.Platform.isTV;
    }
    tmp8 = !isTV;
  }
  let context = React.useContext(_require(num5[7]).HeaderShownContext);
  const context1 = React.useContext(_require(num5[7]).HeaderHeightContext);
  const context2 = React.useContext(_require(num5[7]).HeaderBackContext);
  num5 = 0;
  if (!context) {
    if (Animated.Platform.OS !== "ios") {
      if (!tmp8) {
        num5 = safeAreaInsets.top;
      } else {
        num5 = 0;
      }
    } else {
      num5 = 0;
    }
  }
  const frameSize = _require(num5[7]).useFrameSize((layout) => {
    const Platform = Animated.Platform;
    return Platform.select({ android: 56 + num5, default: callback(num5[7]).getDefaultHeaderHeight(layout, callback, num5) });
  });
  let num6 = 2;
  const defaultResult = closure_3.default(React.useState(frameSize), 2);
  const first = defaultResult[0];
  closure_3 = tmp19;
  React = React.useCallback(_require(num5[8]).debounce(tmp19, 100), []);
  Animated = tmp20;
  let React2 = 0;
  let num7 = 0;
  if (Animated.Platform.OS === "android") {
    num7 = 0;
    if (!tmp20) {
      const currentHeight = Animated.StatusBar.currentHeight;
      let num8 = 0;
      if (currentHeight != null) {
        num8 = currentHeight;
      }
      let sum = -num8 + num5;
      React2 = sum;
      num7 = sum;
    }
  }
  const animatedValue = Animated.useAnimatedValue(frameSize);
  const items = [num7, animatedValue];
  let tmp25 = statusBarTranslucent;
  const memo = React.useMemo(() => {
    Animated = Animated.Animated;
    return Animated.add(animatedValue, c6);
  }, items);
  if (typeof statusBarTranslucent !== "boolean") {
    tmp25 = num5 !== 0;
  }
  closure_8 = tmp26;
  if (previousDescriptor) {
    let title = _require(num5[7]).getHeaderTitle(previousDescriptor.options, previousDescriptor.route.name);
  } else if (context2 != null) {
    title = context2.title;
  }
  const items1 = [previousDescriptor != null || context2 != null, title];
  const memo1 = React.useMemo(() => {
    if (closure_8) {
      const obj = { href: undefined, title };
      return obj;
    }
  }, items1);
  const tmp30 = _require(num5[5]).usePreventRemoveContext().preventedRoutes[route.key];
  let preventRemove;
  if (tmp30 != null) {
    preventRemove = tmp30.preventRemove;
  }
  let obj = { route };
  if (preventRemove !== undefined) {
    headerBackButtonMenuEnabled = !preventRemove;
  }
  obj.headerBackButtonMenuEnabled = headerBackButtonMenuEnabled;
  let headerBackTitle;
  if (options.headerBackTitle !== undefined) {
    headerBackTitle = options.headerBackTitle;
  }
  obj.headerBackTitle = headerBackTitle;
  obj.headerHeight = first;
  let flag6 = false;
  if (header === undefined) {
    flag6 = headerShown;
  }
  obj.headerShown = flag6;
  obj.headerTopInsetEnabled = tmp25;
  obj.headerBack = memo1;
  const headerConfigProps = _require(num5[9]).useHeaderConfigProps(Object.assign({}, options, obj));
  obj = { value: navigation };
  obj = { value: route };
  const obj1 = { screenId: route.key };
  if (isPreloaded) {
    num6 = 0;
  }
  obj1.activityState = num6;
  obj1.style = Animated.StyleSheet.absoluteFill;
  obj1["aria-hidden"] = !focused;
  obj1.customAnimationOnSwipe = tmp2;
  obj1.fullScreenSwipeEnabled = tmp3;
  obj1.fullScreenSwipeShadowEnabled = flag;
  obj1.freezeOnBlur = freezeOnBlur;
  let flag7 = false;
  if (Animated.Platform.OS !== "android") {
    flag7 = gestureEnabled;
  }
  obj1.gestureEnabled = flag7;
  obj1.homeIndicatorHidden = autoHideHomeIndicator;
  obj1.hideKeyboardOnSwipe = keyboardHandlingEnabled;
  obj1.navigationBarColor = navigationBarColor;
  obj1.navigationBarTranslucent = navigationBarTranslucent;
  obj1.navigationBarHidden = navigationBarHidden;
  obj1.replaceAnimation = str3;
  if (presentation !== "card") {
    str2 = presentation;
  }
  obj1.stackPresentation = str2;
  obj1.stackAnimation = str6;
  obj1.screenOrientation = orientation;
  obj1.sheetAllowedDetents = sheetAllowedDetents;
  obj1.sheetLargestUndimmedDetentIndex = num2;
  obj1.sheetGrabberVisible = flag2;
  obj1.sheetInitialDetentIndex = num4;
  obj1.sheetCornerRadius = num;
  obj1.sheetElevation = num3;
  obj1.sheetExpandsWhenScrolledToEdge = flag3;
  obj1.statusBarAnimation = statusBarAnimation;
  obj1.statusBarHidden = statusBarHidden;
  obj1.statusBarStyle = statusBarStyle;
  obj1.statusBarColor = statusBarBackgroundColor;
  obj1.statusBarTranslucent = statusBarTranslucent;
  obj1.swipeDirection = gestureDirection;
  obj1.transitionDuration = options.animationDuration;
  obj1.onWillAppear = onWillAppear;
  obj1.onWillDisappear = onWillDisappear;
  obj1.onAppear = onAppear;
  obj1.onDisappear = onDisappear;
  obj1.onDismissed = onDismissed;
  obj1.onGestureCancel = onGestureCancel;
  obj1.onSheetDetentChanged = onSheetDetentChanged;
  obj1.gestureResponseDistance = gestureResponseDistance;
  obj1.nativeBackButtonDismissalEnabled = false;
  obj1.onHeaderBackButtonClicked = onHeaderBackButtonClicked;
  obj1.preventNativeDismiss = preventRemove;
  obj1.onNativeDismissCancelled = onNativeDismissCancelled;
  Animated = Animated.Animated;
  const items2 = [{ nativeEvent: { headerHeight: animatedValue } }];
  obj1.onHeaderHeightChange = Animated.event(items2, {
    useNativeDriver: animatedValue,
    listener(nativeEvent) {
      if (!Animated) {
        if (Animated.Platform.OS === "android") {
          callback2(56 + num5);
        }
        if (nativeEvent.nativeEvent) {
          if (typeof nativeEvent.nativeEvent === "object") {
            if ("headerHeight" in nativeEvent.nativeEvent) {
              if (typeof nativeEvent.nativeEvent.headerHeight === "number") {
                const sum = nativeEvent.nativeEvent.headerHeight + c6;
                let tmp7 = Animated.Platform.OS === "ios";
                if (tmp7) {
                  let headerSearchBarOptions = options.headerLargeTitle;
                  if (!headerSearchBarOptions) {
                    headerSearchBarOptions = options.headerSearchBarOptions;
                  }
                  tmp7 = headerSearchBarOptions;
                }
                if (tmp7) {
                  callback3(sum);
                } else {
                  callback2(sum);
                }
              }
            }
          }
        }
      }
    }
  });
  let tmp34 = presentation !== "transparentModal";
  if (tmp34) {
    tmp34 = presentation !== "containedTransparentModal";
  }
  if (tmp34) {
    const obj3 = { backgroundColor: _require(num5[5]).useTheme().colors.background };
    tmp34 = obj3;
  }
  const items3 = [tmp34, contentStyle];
  obj1.contentStyle = items3;
  obj1.headerConfig = headerConfigProps;
  obj1.unstable_sheetFooter = unstable_sheetFooter;
  obj1.shouldFreeze = shouldFreeze;
  const obj4 = { value: memo };
  const obj5 = {};
  let tmp36 = first;
  if (headerShown === false) {
    let num9 = 0;
    if (context1 != null) {
      num9 = context1;
    }
    tmp36 = num9;
  }
  obj5.value = tmp36;
  let jsxResult = null;
  if (headerBackground != null) {
    const obj6 = {};
    const items4 = [title.background, , ];
    let translucent = null;
    if (headerTransparent) {
      translucent = title.translucent;
    }
    items4[1] = translucent;
    const obj7 = { height: first };
    items4[2] = obj7;
    obj6.style = items4;
    obj6.children = headerBackground();
    jsxResult = <Animated.View />;
  }
  const items5 = [jsxResult, , ];
  let jsxResult1 = null;
  if (header != null) {
    jsxResult1 = null;
    if (tmp35) {
      const obj8 = {
        onLayout(nativeEvent) {
              const height = nativeEvent.nativeEvent.layout.height;
              callback2(height);
              animatedValue.setValue(height);
            }
      };
      const items6 = [title.header, ];
      let absolute = null;
      if (headerTransparent) {
        absolute = title.absolute;
      }
      items6[1] = absolute;
      obj8.style = items6;
      const obj9 = { back: memo1, options, route, navigation };
      obj8.children = header(obj9);
      jsxResult1 = <Animated.View onLayout={function onLayout(nativeEvent) {
        const height = nativeEvent.nativeEvent.layout.height;
        callback2(height);
        animatedValue.setValue(height);
      }} />;
    }
  }
  items5[1] = jsxResult1;
  const obj10 = {};
  if (!context) {
    context = tmp35;
  }
  obj10.value = context;
  const obj11 = { value: memo1, children: descriptor.render() };
  obj10.children = React2.jsx(_require(num5[7]).HeaderBackContext.Provider, { value: memo1, children: descriptor.render() });
  items5[2] = React2.jsx(_require(num5[7]).HeaderShownContext.Provider, {});
  obj5.children = items5;
  obj4.children = React2.jsxs(_require(num5[7]).HeaderHeightContext.Provider, {});
  obj1.children = React2.jsx(_require(num5[11]).AnimatedHeaderHeightContext.Provider, { value: memo });
  obj.children = React2.jsx(_require(num5[10]).ScreenStackItem, { screenId: route.key }, route.key);
  obj.children = React2.jsx(_require(num5[5]).NavigationRouteContext.Provider, { value: route });
  return React2.jsx(_require(num5[5]).NavigationContext.Provider, { value: route });
}
const StyleSheet = get_registerCallableModule.StyleSheet;
const styles = StyleSheet.create({ container: { flex: 1 }, header: { zIndex: 1 }, absolute: { position: "absolute", top: 0, start: 0, end: 0 }, translucent: { position: "absolute", top: 0, start: 0, end: 0, zIndex: 1, elevation: 1 }, background: { overflow: "hidden" } });

export function NativeStackView(state) {
  state = state.state;
  ({ navigation: require, descriptors } = state);
  const describe = state.describe;
  const setNextDismissedKey = require(descriptors[12]).useDismissedRouteError(state).setNextDismissedKey;
  const invalidPreventRemoveError = require(descriptors[13]).useInvalidPreventRemoveError(descriptors);
  const modalRouteKeys = require(descriptors[14]).getModalRouteKeys(state.routes, descriptors);
  const preloadedRoutes = state.preloadedRoutes;
  const React2 = preloadedRoutes.reduce((arg0, key) => {
    let tmp = arg0[key.key];
    if (!tmp) {
      tmp = describe(key, true);
    }
    arg0[key.key] = tmp;
    return arg0;
  }, {});
  let obj = {};
  obj = { style: container.container };
  const routes = state.routes;
  const combined = routes.concat(state.preloadedRoutes);
  obj.children = combined.map((key, index) => {
    state = key;
    let tmp = descriptors[key.key];
    if (tmp == null) {
      tmp = React[key.key];
    }
    key = undefined;
    const diff = state.index - 1;
    if (state.routes[index - 1] != null) {
      key = tmp5.key;
    }
    let key1;
    if (state.routes[index + 1] != null) {
      key1 = tmp7.key;
    }
    let tmp9;
    if (key) {
      tmp9 = descriptors[key];
    }
    let tmp11;
    if (key1) {
      tmp11 = descriptors[key1];
    }
    let tmp14 = React[key.key] !== undefined;
    const hasItem = closure_5.includes(key.key);
    if (tmp14) {
      tmp14 = descriptors[key.key] === undefined;
    }
    let tmp16 = !tmp14;
    if (closure_1_11()) {
      if (!tmp14) {
        tmp16 = !tmp3;
      }
      if (tmp16) {
        tmp16 = diff !== index;
      }
      let tmp17 = tmp16;
    } else {
      tmp17 = tmp16;
      if (!tmp14) {
        tmp17 = !tmp3;
      }
    }
    let obj = {
      index,
      focused: state.index === index,
      shouldFreeze: tmp17,
      descriptor: tmp,
      previousDescriptor: tmp9,
      nextDescriptor: tmp11,
      isPresentationModal: hasItem,
      isPreloaded: tmp14,
      onWillDisappear() {
        closure_1_1.emit({ type: "transitionStart", data: { closing: true }, target: key.key });
      },
      onWillAppear() {
        closure_1_1.emit({ type: "transitionStart", data: { closing: false }, target: key.key });
      },
      onAppear() {
        closure_1_1.emit({ type: "transitionEnd", data: { closing: false }, target: key.key });
      },
      onDisappear() {
        closure_1_1.emit({ type: "transitionEnd", data: { closing: true }, target: key.key });
      },
      onDismissed(nativeEvent) {
        const StackActions = closure_2_1(descriptors[5]).StackActions;
        closure_1_1.dispatch(Object.assign({}, StackActions.pop(nativeEvent.nativeEvent.dismissCount), { source: key.key, target: key.key }));
        closure_1_4(key.key);
      },
      onHeaderBackButtonClicked() {
        const StackActions = closure_2_1(descriptors[5]).StackActions;
        closure_1_1.dispatch(Object.assign({}, StackActions.pop(), { source: key.key, target: key.key }));
      },
      onNativeDismissCancelled(nativeEvent) {
        const StackActions = closure_2_1(descriptors[5]).StackActions;
        closure_1_1.dispatch(Object.assign({}, StackActions.pop(nativeEvent.nativeEvent.dismissCount), { source: key.key, target: key.key }));
      },
      onGestureCancel() {
        closure_1_1.emit({ type: "gestureCancel", target: key.key });
      },
      onSheetDetentChanged(index) {
        obj = { type: "sheetDetentChange", target: key.key, data: obj };
        obj = { index: index.nativeEvent.index, stable: index.nativeEvent.isStable };
        closure_1_1.emit(obj);
      }
    };
    return <closure_1_8 key={arg0.key} index={arg1} focused={state.index === arg1} shouldFreeze={tmp17} descriptor={tmp} previousDescriptor={tmp9} nextDescriptor={tmp11} isPresentationModal={hasItem} isPreloaded={tmp14} onWillDisappear={function onWillDisappear() {
      closure_1_1.emit({ type: "transitionStart", data: { closing: true }, target: key.key });
    }} onWillAppear={function onWillAppear() {
      closure_1_1.emit({ type: "transitionStart", data: { closing: false }, target: key.key });
    }} onAppear={function onAppear() {
      closure_1_1.emit({ type: "transitionEnd", data: { closing: false }, target: key.key });
    }} onDisappear={function onDisappear() {
      closure_1_1.emit({ type: "transitionEnd", data: { closing: true }, target: key.key });
    }} onDismissed={function onDismissed(nativeEvent) {
      const StackActions = closure_2_1(descriptors[5]).StackActions;
      closure_1_1.dispatch(Object.assign({}, StackActions.pop(nativeEvent.nativeEvent.dismissCount), { source: key.key, target: key.key }));
      closure_1_4(key.key);
    }} onHeaderBackButtonClicked={function onHeaderBackButtonClicked() {
      const StackActions = closure_2_1(descriptors[5]).StackActions;
      closure_1_1.dispatch(Object.assign({}, StackActions.pop(), { source: key.key, target: key.key }));
    }} onNativeDismissCancelled={function onNativeDismissCancelled(nativeEvent) {
      const StackActions = closure_2_1(descriptors[5]).StackActions;
      closure_1_1.dispatch(Object.assign({}, StackActions.pop(nativeEvent.nativeEvent.dismissCount), { source: key.key, target: key.key }));
    }} onGestureCancel={function onGestureCancel() {
      closure_1_1.emit({ type: "gestureCancel", target: key.key });
    }} onSheetDetentChanged={function onSheetDetentChanged(index) {
      obj = { type: "sheetDetentChange", target: key.key, data: obj };
      obj = { index: index.nativeEvent.index, stable: index.nativeEvent.isStable };
      closure_1_1.emit(obj);
    }} />;
  });
  obj.children = React2.jsx(require(descriptors[10]).ScreenStack, { style: container.container });
  return React2.jsx(require(descriptors[7]).SafeAreaProviderCompat, { style: container.container });
}
