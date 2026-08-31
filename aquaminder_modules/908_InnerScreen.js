// Module ID: 908
// Function ID: 9724
// Name: InnerScreen
// Dependencies: [1, 203, 119, 2, 909, 910, 912, 913, 251, 914, 905, 915, 902]

// Module 908 (InnerScreen)
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import EDGE_TO_EDGE from "EDGE_TO_EDGE" /* 902 */;
import getIteratorFn3 from "getIteratorFn" /* 909 */;
import DelayedFreeze from "DelayedFreeze" /* 910 */;
import __INTERNAL_VIEW_CONFIG2 from "__INTERNAL_VIEW_CONFIG" /* 912 */;
import __INTERNAL_VIEW_CONFIG3 from "__INTERNAL_VIEW_CONFIG" /* 913 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_7 from "jsxProd" /* 251 */;

let closure_2 = module_1(_objectWithoutProperties);
const getIteratorFn = module_1(getIteratorFn2);
let closure_5 = module_1(getIteratorFn3);
let closure_6 = module_1(DelayedFreeze);
let __INTERNAL_VIEW_CONFIG = module_1(__INTERNAL_VIEW_CONFIG2);
__INTERNAL_VIEW_CONFIG = module_1(__INTERNAL_VIEW_CONFIG3);
let closure_8 = ["enabled", "freezeOnBlur", "shouldFreeze"];
let closure_9 = ["active", "activityState", "children", "isNativeStack", "gestureResponseDistance", "onGestureCancel", "style"];
let closure_10 = ["active", "activityState", "style", "onComponentRef"];
let Animated = get_registerCallableModule.Animated;
let closure_11 = Animated.createAnimatedComponent(__INTERNAL_VIEW_CONFIG.default);
const Animated2 = get_registerCallableModule.Animated;
let closure_12 = Animated2.createAnimatedComponent(__INTERNAL_VIEW_CONFIG.default);
const forwardRefResult = getIteratorFn.default.forwardRef(function InnerScreen(activityState) {
  const _require = activityState;
  dependencyMap = getIteratorFn.default.useRef(null);
  const imperativeHandle = getIteratorFn.default.useImperativeHandle(arg1, () => ref.current, []);
  const previous = _require(914).usePrevious(activityState.activityState);
  function setRef(current) {
    closure_1.current = current;
    if (activityState.onComponentRef != null) {
      activityState.onComponentRef(current);
    }
  }
  let value = new get_registerCallableModule.Animated.Value(0);
  const current = getIteratorFn.default.useRef(value).current;
  value = new get_registerCallableModule.Animated.Value(0);
  const current2 = getIteratorFn.default.useRef(value).current;
  const value1 = new get_registerCallableModule.Animated.Value(0);
  const current3 = getIteratorFn.default.useRef(value1).current;
  let enabled = activityState.enabled;
  if (enabled === undefined) {
    enabled = _require(905).screensEnabled();
  }
  let freezeOnBlur = activityState.freezeOnBlur;
  if (freezeOnBlur === undefined) {
    freezeOnBlur = _require(905).freezeEnabled();
  }
  let shouldFreeze = activityState.shouldFreeze;
  const defaultResult = setRef.default(activityState, closure_8);
  let sheetAllowedDetents = defaultResult.sheetAllowedDetents;
  if (sheetAllowedDetents === undefined) {
    sheetAllowedDetents = [1];
  }
  let SHEET_DIMMED_ALWAYS = defaultResult.sheetLargestUndimmedDetentIndex;
  if (SHEET_DIMMED_ALWAYS === undefined) {
    SHEET_DIMMED_ALWAYS = _require(915).SHEET_DIMMED_ALWAYS;
  }
  const sheetGrabberVisible = defaultResult.sheetGrabberVisible;
  let flag = false;
  if (sheetGrabberVisible !== undefined) {
    flag = sheetGrabberVisible;
  }
  const sheetCornerRadius = defaultResult.sheetCornerRadius;
  let num4 = -1;
  let num5 = -1;
  if (sheetCornerRadius !== undefined) {
    num5 = sheetCornerRadius;
  }
  const sheetExpandsWhenScrolledToEdge = defaultResult.sheetExpandsWhenScrolledToEdge;
  let flag2 = true;
  if (sheetExpandsWhenScrolledToEdge !== undefined) {
    flag2 = sheetExpandsWhenScrolledToEdge;
  }
  const sheetElevation = defaultResult.sheetElevation;
  let num6 = 24;
  if (sheetElevation !== undefined) {
    num6 = sheetElevation;
  }
  let sheetInitialDetentIndex = defaultResult.sheetInitialDetentIndex;
  let num7 = 0;
  if (sheetInitialDetentIndex !== undefined) {
    num7 = sheetInitialDetentIndex;
  }
  const stackPresentation = defaultResult.stackPresentation;
  if (enabled) {
    if (_require(905).isNativePlatformSupported) {
      const sheetAllowedDetents1 = _require(915).resolveSheetAllowedDetents(sheetAllowedDetents);
      const sheetLargestUndimmedDetent = _require(915).resolveSheetLargestUndimmedDetent(SHEET_DIMMED_ALWAYS, sheetAllowedDetents1.length - 1);
      const Platform = get_registerCallableModule.Platform;
      let obj = { ios: null, android: false, default: false };
      let tmp26 = stackPresentation === undefined;
      sheetInitialDetentIndex = _require(915).resolveSheetInitialDetentIndex(num7, sheetAllowedDetents1.length - 1);
      if (!tmp26) {
        tmp26 = stackPresentation === "push";
      }
      if (!tmp26) {
        tmp26 = stackPresentation === "containedModal";
      }
      if (!tmp26) {
        tmp26 = stackPresentation === "containedTransparentModal";
      }
      obj.ios = !tmp26;
      ({ active: active2, activityState: activityState2, children, isNativeStack, gestureResponseDistance, onGestureCancel } = defaultResult);
      let tmp31 = activityState2;
      const tmp27 = Platform.select(obj) ? closure_12 : closure_11;
      if (active2 !== undefined) {
        tmp31 = activityState2;
        if (activityState2 === undefined) {
          const _console = console;
          console.warn("It appears that you are using old version of react-navigation library. Please update @react-navigation/bottom-tabs, @react-navigation/stack and @react-navigation/drawer to version 5.10.0 or above to take full advantage of new functionality added to react-native-screens");
          let num12 = 0;
          if (active2 !== 0) {
            num12 = 2;
          }
          tmp31 = num12;
        }
      }
      if (isNativeStack) {
        if (previous !== undefined) {
          if (tmp31 !== undefined) {
            if (previous > tmp31) {
              const _Error = Error;
              const error = new Error("[RNScreens] activityState cannot be decreased in NativeStack");
              throw error;
            }
          }
        }
      }
      if (freezeOnBlur) {
        if (shouldFreeze === undefined) {
          shouldFreeze = tmp31 === 0;
        }
        freezeOnBlur = shouldFreeze;
      }
      obj = { freeze: freezeOnBlur };
      const obj1 = { onAppear: tmp13, onDisappear: tmp14, onWillAppear: tmp15, onWillDisappear: tmp16 };
      if (onGestureCancel == null) {
        onGestureCancel = () => {

        };
      }
      obj1.onGestureCancel = onGestureCancel;
      const items = [defaultResult.style, ];
      const obj2 = { zIndex: undefined };
      items[1] = obj2;
      obj1.style = items;
      obj1.activityState = tmp31;
      obj1.sheetAllowedDetents = sheetAllowedDetents1;
      obj1.sheetLargestUndimmedDetent = sheetLargestUndimmedDetent;
      obj1.sheetElevation = num6;
      obj1.sheetGrabberVisible = flag;
      obj1.sheetCornerRadius = num5;
      obj1.sheetExpandsWhenScrolledToEdge = flag2;
      obj1.sheetInitialDetent = sheetInitialDetentIndex;
      const obj3 = {};
      let start;
      if (gestureResponseDistance != null) {
        start = gestureResponseDistance.start;
      }
      let tmp38 = num4;
      if (start != null) {
        tmp38 = start;
      }
      obj3.start = tmp38;
      let end;
      if (gestureResponseDistance != null) {
        end = gestureResponseDistance.end;
      }
      let tmp40 = num4;
      if (end != null) {
        tmp40 = end;
      }
      obj3.end = tmp40;
      let top;
      if (gestureResponseDistance != null) {
        top = gestureResponseDistance.top;
      }
      let tmp42 = num4;
      if (top != null) {
        tmp42 = top;
      }
      obj3.top = tmp42;
      let bottom;
      if (gestureResponseDistance != null) {
        bottom = gestureResponseDistance.bottom;
      }
      if (bottom != null) {
        num4 = bottom;
      }
      obj3.bottom = num4;
      obj1.gestureResponseDistance = obj3;
      obj1.ref = function handleRef(viewConfig) {
        if (viewConfig != null) {
          viewConfig = viewConfig.viewConfig;
          if (viewConfig != null) {
            let validAttributes = viewConfig.validAttributes;
            if (validAttributes != null) {
              if (validAttributes.style) {
                const _Object2 = Object;
                let obj = { display: null };
                viewConfig.viewConfig.validAttributes.style = Object.assign({}, viewConfig.viewConfig.validAttributes.style, obj);
                setRef(viewConfig);
              }
            }
          }
        }
        if (viewConfig != null) {
          const _viewConfig = viewConfig._viewConfig;
          if (_viewConfig != null) {
            validAttributes = _viewConfig.validAttributes;
            if (validAttributes != null) {
              if (validAttributes.style) {
                const _Object = Object;
                obj = { display: null };
                viewConfig._viewConfig.validAttributes.style = Object.assign({}, viewConfig._viewConfig.validAttributes.style, obj);
                setRef(viewConfig);
              }
            }
          }
        }
      };
      let eventResult;
      if (isNativeStack) {
        const Animated = get_registerCallableModule.Animated;
        const obj4 = {};
        const obj5 = { progress: current2, closing: current, goingForward: current3 };
        obj4.nativeEvent = obj5;
        const items1 = [obj4];
        const obj6 = { useNativeDriver: true };
        eventResult = Animated.event(items1, obj6);
      }
      obj1.onTransitionProgress = eventResult;
      let jsxResult = children;
      if (isNativeStack) {
        const obj7 = {};
        const obj8 = { progress: current2, closing: current, goingForward: current3 };
        obj7.value = obj8;
        obj7.children = children;
        jsxResult = React.jsx(mod.default.Provider, {});
      }
      obj1.children = jsxResult;
      obj.children = <tmp27 {...Object.assign({}, setRef.default(defaultResult, closure_9), obj1)} />;
      return <mod2.default freeze={freezeOnBlur} />;
    }
  }
  ({ active, activityState, onComponentRef } = defaultResult);
  let tmp20 = activityState;
  if (active !== undefined) {
    tmp20 = activityState;
    if (activityState === undefined) {
      let num9 = 0;
      if (active !== 0) {
        num9 = 2;
      }
      tmp20 = num9;
    }
  }
  obj = {};
  const items2 = [defaultResult.style, ];
  const obj9 = {};
  let str = "none";
  if (tmp20 !== 0) {
    str = "flex";
  }
  obj9.display = str;
  items2[1] = obj9;
  obj.style = items2;
  obj.ref = setRef;
  return React.jsx(get_registerCallableModule.Animated.View, Object.assign(obj, setRef.default(defaultResult, closure_10)));
});
const context = getIteratorFn.default.createContext(forwardRefResult);
const forwardRefResult1 = getIteratorFn.default.forwardRef((arg0, ref) => {
  let result = arg0;
  if (EDGE_TO_EDGE.EDGE_TO_EDGE) {
    result = EDGE_TO_EDGE.transformEdgeToEdgeProps(arg0);
  }
  return React.jsx(getIteratorFn.default.useContext(context) || closure_13, Object.assign({}, result, { ref }));
});
forwardRefResult1.displayName = "Screen";

export const InnerScreen = forwardRefResult;
export const ScreenContext = context;
export default forwardRefResult1;
