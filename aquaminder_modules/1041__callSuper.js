// Module ID: 1041
// Function ID: 10995
// Name: _callSuper
// Dependencies: [1, 12, 13, 23, 25, 28, 119, 20, 2, 251, 972, 1002, 1003]

// Module 1041 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import invariant from "invariant" /* 20 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _inherits from "_inherits" /* 28 */;
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_10 from "jsxProd" /* 251 */;

function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const defaultResult = closure_5.default(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(defaultResult, items, closure_5.default(arg0).constructor);
  } else {
    constructResult = defaultResult.apply(arg0, items);
  }
  return closure_4.default(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
let closure_2 = module_1(_classCallCheck);
let closure_3 = module_1(_defineProperties);
let closure_4 = module_1(_possibleConstructorReturn);
let closure_5 = module_1(_getPrototypeOf);
let closure_6 = module_1(_inherits);
const getIteratorFn = _interopRequireWildcard(getIteratorFn2);
let closure_8 = module_1(invariant);
let tmp5 = ((Component) => {
  class DrawerLayout {
    constructor(arg0) {
      defaultResult = closure_1_2.default(this, closure_0);
      items = [];
      items[0] = Component;
      obj = closure_1_13(this, closure_0, items);
      closure_0 = obj;
      obj.accessibilityIsModalView = closure_1_7.createRef();
      obj.pointerEventsView = closure_1_7.createRef();
      obj.panGestureHandler = closure_1_7.createRef();
      obj.drawerShown = false;
      obj.updateAnimatedEvent = (drawerWidth, drawerTranslation) => {
        drawerWidth = drawerWidth.drawerWidth;
        ({ dragX, touchX, containerWidth } = drawerTranslation);
        if (drawerWidth.drawerPosition !== "left") {
          const Animated = closure_2_9.Animated;
          const Value = closure_2_9.Animated.Value;
          const prototype = Value.prototype;
          const value = new Value(-1);
          let multiplyResult = Animated.multiply(value, dragX);
          const Animated2 = closure_2_9.Animated;
          const Value2 = closure_2_9.Animated.Value;
          const prototype2 = Value2.prototype;
          const value2 = new Value2(containerWidth);
          const Animated3 = closure_2_9.Animated;
          const Value3 = closure_2_9.Animated.Value;
          const prototype3 = Value3.prototype;
          const value3 = new Value3(-1);
          let addResult = Animated2.add(value2, Animated3.multiply(value3, touchX));
          touchX.setValue(containerWidth);
        } else {
          touchX.setValue(0);
          multiplyResult = dragX;
          addResult = touchX;
        }
        let addResult2 = multiplyResult;
        if (drawerWidth.drawerType === "front") {
          ({ Animated: Animated6, Animated: Animated7 } = closure_2_9);
          const Value4 = closure_2_9.Animated.Value;
          const prototype4 = Value4.prototype;
          const value4 = new Value4(-1);
          obj = {};
          const items = [drawerWidth - 1, drawerWidth, drawerWidth + 1];
          obj.inputRange = items;
          obj.outputRange = [0, 0, 1];
          const Animated8 = closure_2_9.Animated;
          addResult2 = Animated8.add(multiplyResult, Animated6.add(addResult, Animated7.multiply(value4, multiplyResult)).interpolate(obj));
          const addResult1 = Animated6.add(addResult, Animated7.multiply(value4, multiplyResult));
        }
        const Animated4 = closure_2_9.Animated;
        const items1 = [0, drawerWidth];
        obj.openValue = Animated4.add(addResult2, drawerTranslation.drawerTranslation).interpolate({ inputRange: items1, outputRange: [0, 1], extrapolate: "clamp" });
        obj = { useNativeDriver: drawerWidth.useNativeAnimations };
        if (obj.props.onDrawerSlide) {
          obj.listener = function listener() { ... };
        }
        const Animated5 = closure_2_9.Animated;
        const items2 = [{ nativeEvent: { translationX: dragX, x: touchX } }];
        obj.onGestureEvent = Animated5.event(items2, obj);
      };
      obj.handleContainerLayout = (containerWidth) => {
        obj = { containerWidth: containerWidth.nativeEvent.layout.width };
        obj.setState(obj);
      };
      obj.emitStateChanged = (arg0, arg1) => {
        if (obj.props.onDrawerStateChanged != null) {
          const props = obj.props;
          props.onDrawerStateChanged(arg0, arg1);
        }
      };
      obj.openingHandlerStateChange = (nativeEvent) => {
        nativeEvent = nativeEvent.nativeEvent;
        if (nativeEvent.oldState === DrawerLayout(closure_2_1[10]).State.ACTIVE) {
          obj = { nativeEvent };
          obj.handleRelease(obj);
        } else if (nativeEvent.state === DrawerLayout(closure_2_1[10]).State.ACTIVE) {
          obj.emitStateChanged("Dragging", false);
          obj = { drawerState: "Dragging" };
          obj.setState(obj);
          if (obj.props.keyboardDismissMode === "on-drag") {
            const Keyboard = closure_2_9.Keyboard;
            Keyboard.dismiss();
          }
          if (obj.props.hideStatusBar) {
            const StatusBar = closure_2_9.StatusBar;
            let str = obj.props.statusBarAnimation;
            if (!str) {
              str = "slide";
            }
            StatusBar.setHidden(true, str);
          }
        }
      };
      obj.onTapHandlerStateChange = (nativeEvent) => {
        if (obj.drawerShown) {
          if (nativeEvent.nativeEvent.oldState === DrawerLayout(closure_2_1[10]).State.ACTIVE) {
            if (obj.props.drawerLockMode !== "locked-open") {
              obj.closeDrawer();
            }
          }
        }
      };
      obj.handleRelease = (nativeEvent) => {
        const props = obj.props;
        const drawerWidth = props.drawerWidth;
        ({ translationX, velocityX, x } = nativeEvent.nativeEvent);
        let tmp2 = translationX;
        let tmp3 = velocityX;
        let diff = x;
        if (props.drawerPosition !== "left") {
          tmp2 = -translationX;
          diff = tmp - x;
          tmp3 = -velocityX;
        }
        const diff1 = diff - tmp2;
        let num = 0;
        if (props.drawerType === "front") {
          let num2 = 0;
          if (diff1 > drawerWidth) {
            num2 = diff1 - drawerWidth;
          }
          num = num2;
        }
        let num3 = 0;
        const sum = tmp2 + num;
        if (obj.drawerShown) {
          num3 = drawerWidth;
        }
        const sum1 = sum + num3;
        if (sum1 + 0.05 * tmp3 > drawerWidth / 2) {
          obj.animateDrawer(sum1, drawerWidth, tmp3);
        } else {
          obj.animateDrawer(sum1, 0, tmp3);
        }
      };
      obj.updateShowing = (drawerShown) => {
        obj.drawerShown = drawerShown;
        const current = obj.accessibilityIsModalView.current;
        if (current != null) {
          obj = { accessibilityViewIsModal: drawerShown };
          current.setNativeProps(obj);
        }
        const current2 = obj.pointerEventsView.current;
        if (current2 != null) {
          obj = {};
          let str = "none";
          if (drawerShown) {
            str = "auto";
          }
          obj.pointerEvents = str;
          current2.setNativeProps(obj);
        }
        const props = obj.props;
        const edgeWidth = props.edgeWidth;
        let num = -1;
        if (props.drawerPosition === "left") {
          num = 1;
        }
        let num2 = 1;
        if (obj.drawerShown) {
          num2 = -1;
        }
        obj = {};
        if (props.drawerPosition === "left") {
          obj.left = 0;
          let tmp6;
          if (!drawerShown) {
            tmp6 = edgeWidth;
          }
          obj.width = tmp6;
          let tmp5 = obj;
        } else {
          obj.right = 0;
          let tmp4;
          if (!drawerShown) {
            tmp4 = edgeWidth;
          }
          obj.width = tmp4;
          tmp5 = obj;
        }
        const current3 = obj.panGestureHandler.current;
        if (current3 != null) {
          const obj1 = { hitSlop: tmp5, activeOffsetX: num * num2 * props.minSwipeDistance };
          current3.setNativeProps(obj1);
        }
      };
      obj.animateDrawer = (arg0, toValue, velocity) => {
        const dragX = obj.state.dragX;
        dragX.setValue(0);
        const touchX = obj.state.touchX;
        let num = 0;
        if (obj.props.drawerPosition !== "left") {
          num = obj.state.containerWidth;
        }
        touchX.setValue(num);
        if (arg0 == null) {
          obj = tmp9;
          obj.updateShowing(toValue !== 0);
          obj.emitStateChanged("Settling", toValue !== 0);
          obj = { drawerState: "Settling" };
          obj.setState(obj);
          if (obj.props.hideStatusBar) {
            const StatusBar = closure_2_9.StatusBar;
            let str2 = obj.props.statusBarAnimation;
            if (!str2) {
              str2 = "slide";
            }
            StatusBar.setHidden(tmp9, str2);
          }
          const Animated = closure_2_9.Animated;
          obj = { velocity, bounciness: 0, toValue };
          obj.useNativeDriver = obj.props.useNativeAnimations;
          let tmp19;
          if (arg3 != null) {
            tmp19 = arg3;
          }
          obj.speed = tmp19;
          Animated.spring(obj.state.drawerTranslation, obj).start(/* F11013 */ function() { ... });
        } else {
          let bound = arg0;
          if (obj.props.useNativeAnimations) {
            if (arg0 >= toValue) {
              bound = arg0;
              if (arg0 > toValue) {
                bound = arg0;
                if (velocity < 0) {
                  const _Math = Math;
                  bound = Math.max(arg0 + velocity / 60, toValue);
                }
              }
            }
            const _Math2 = Math;
            bound = Math.min(arg0 + velocity / 60, toValue);
          }
          const drawerTranslation = obj.state.drawerTranslation;
          drawerTranslation.setValue(bound);
        }
      };
      obj.openDrawer = () => {
        if (arguments.length > 0) {
          if (arguments[0] !== undefined) {
            let first = arguments[0];
          }
          const drawerWidth = obj.props.drawerWidth;
          let num = 0;
          if (first.velocity) {
            num = first.velocity;
          }
          obj.animateDrawer(undefined, drawerWidth, num, first.speed);
          obj.forceUpdate();
        }
        first = {};
      };
      obj.closeDrawer = () => {
        if (arguments.length > 0) {
          if (arguments[0] !== undefined) {
            let first = arguments[0];
          }
          let num = 0;
          if (first.velocity) {
            num = first.velocity;
          }
          obj.animateDrawer(undefined, 0, num, first.speed);
          obj.forceUpdate();
        }
        first = {};
      };
      obj.renderOverlay = () => {
        closure_2_8.default(obj.openValue, "should be set");
        if (obj.state.drawerState !== "Idle") {
          let num = obj.openValue;
        } else {
          num = 0;
          if (obj.state.drawerOpened) {
            num = 1;
          }
        }
        obj = { opacity: num };
        obj.backgroundColor = obj.props.overlayColor;
        obj = { onHandlerStateChange: obj.onTapHandlerStateChange };
        obj = {};
        let str = "none";
        if (obj.drawerShown) {
          str = "auto";
        }
        obj.pointerEvents = str;
        obj.ref = obj.pointerEventsView;
        const items = [closure_2_11.overlay, obj];
        obj.style = items;
        obj.children = closure_2_10.jsx(closure_2_9.Animated.View, {});
        return closure_2_10.jsx(DrawerLayout(closure_2_1[11]).TapGestureHandler, {});
      };
      obj.renderDrawer = () => {
        const props = obj.props;
        ({ drawerWidth, drawerType } = props);
        let tmp2 = tmp;
        ({ drawerBackgroundColor, drawerContainerStyle, contentContainerStyle } = props);
        if (!closure_2_9.I18nManager.isRTL) {
          tmp2 = !tmp;
        }
        const openValue = obj.openValue;
        closure_2_8.default(openValue, "should be set");
        if (drawerType === "front") {
          let num2 = 0;
          if (drawerType !== "back") {
            let tmp7 = drawerWidth;
            if (tmp) {
              tmp7 = -drawerWidth;
            }
            if (obj.state.drawerState !== "Idle") {
              obj = { inputRange: [0, 1] };
              const items = [tmp7, 0];
              obj.outputRange = items;
              obj.extrapolate = "clamp";
              num2 = openValue.interpolate(obj);
            } else {
              let num3 = 0;
              if (!obj.state.drawerOpened) {
                num3 = tmp7;
              }
              num2 = num3;
            }
          }
          obj = {};
          const obj1 = { translateX: num2 };
          const items1 = [obj1];
          obj.transform = items1;
          let str5 = "row";
          if (tmp2) {
            str5 = "row-reverse";
          }
          obj.flexDirection = str5;
          const obj2 = { style: closure_2_11.main, onLayout: obj.handleContainerLayout };
          const obj3 = {};
          if (drawerType === "front") {
            let containerInFront = closure_2_11.containerOnBack;
          } else {
            containerInFront = closure_2_11.containerInFront;
          }
          const items2 = [containerInFront, undefined, contentContainerStyle];
          obj3.style = items2;
          let str6 = "yes";
          if (obj.drawerShown) {
            str6 = "no-hide-descendants";
          }
          obj3.importantForAccessibility = str6;
          if (typeof obj.props.children === "function") {
            const props2 = obj.props;
            let children = props2.children(obj.openValue);
          } else {
            children = obj.props.children;
          }
          const items3 = [children, obj.renderOverlay()];
          obj3.children = items3;
          const items4 = [closure_2_10.jsxs(closure_2_9.Animated.View, {}), ];
          const obj4 = { pointerEvents: "box-none" };
          ({ accessibilityIsModalView: obj8.ref, drawerShown: obj8.accessibilityViewIsModal } = obj);
          const items5 = [closure_2_11.drawerContainer, obj, drawerContainerStyle];
          obj4.style = items5;
          const obj5 = { style: { backgroundColor: drawerBackgroundColor, width: drawerWidth } };
          const props3 = obj.props;
          obj5.children = props3.renderNavigationView(obj.openValue);
          obj4.children = <closure_2_9.View style={{ backgroundColor: drawerBackgroundColor, width: drawerWidth }} />;
          items4[1] = closure_2_10.jsx(closure_2_9.Animated.View, { pointerEvents: "box-none" });
          obj2.children = items4;
          return closure_2_10.jsxs(closure_2_9.Animated.View, { style: closure_2_11.main, onLayout: obj.handleContainerLayout });
        } else {
          let interpolate = openValue.interpolate;
          obj = { inputRange: [0, 1] };
          const items6 = [0];
          if (tmp) {
            items6[1] = drawerWidth;
            let tmp4 = items6;
          } else {
            items6[1] = -drawerWidth;
            tmp4 = items6;
          }
          obj.outputRange = tmp4;
          obj.extrapolate = "clamp";
          obj = {};
          const obj6 = { translateX: interpolate(obj) };
          interpolate = [obj6];
          obj.transform = interpolate;
          const interpolateResult = interpolate(obj);
        }
      };
      obj.setPanGestureRef = (current) => {
        obj.panGestureHandler.current = current;
        if (obj.props.onGestureRef != null) {
          const props = obj.props;
          props.onGestureRef(current);
        }
      };
      value = new closure_1_9.Animated.Value(0);
      value1 = new closure_1_9.Animated.Value(0);
      value2 = new closure_1_9.Animated.Value(0);
      obj = { dragX: null, touchX: null, drawerTranslation: null, containerWidth: 0, drawerState: "Idle", drawerOpened: false };
      obj.dragX = value;
      obj.touchX = value1;
      obj.drawerTranslation = value2;
      obj.state = obj;
      updateAnimatedEventResult = obj.updateAnimatedEvent(Component, obj.state);
      return obj;
    }
  }
  closure_6.default(DrawerLayout, Component);
  let obj = {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(drawerPosition, containerWidth) {
      const self = this;
      if (this.props.drawerPosition === drawerPosition.drawerPosition) {
        if (self.props.drawerWidth === drawerPosition.drawerWidth) {
          return true;
        }
      }
      self.updateAnimatedEvent(drawerPosition, containerWidth);
    }
  };
  let items = [obj, ];
  obj = {
    key: "render",
    value: function render() {
      const self = this;
      const props = this.props;
      ({ drawerLockMode, edgeWidth } = props);
      let num = -1;
      if (props.drawerPosition === "left") {
        num = 1;
      }
      let num2 = 1;
      if (self.drawerShown) {
        num2 = -1;
      }
      let obj = {};
      if (props.drawerPosition === "left") {
        obj.left = 0;
        let tmp4;
        if (!self.drawerShown) {
          tmp4 = edgeWidth;
        }
        obj.width = tmp4;
        let tmp3 = obj;
      } else {
        obj.right = 0;
        let tmp2;
        if (!self.drawerShown) {
          tmp2 = edgeWidth;
        }
        obj.width = tmp2;
        tmp3 = obj;
      }
      obj = { userSelect: self.props.userSelect, activeCursor: self.props.activeCursor, mouseButton: self.props.mouseButton, enableContextMenu: self.props.enableContextMenu, ref: self.setPanGestureRef, hitSlop: tmp3, activeOffsetX: num * num2 * props.minSwipeDistance };
      const items = [-15, 15];
      obj.failOffsetY = items;
      ({ onGestureEvent: obj2.onGestureEvent, openingHandlerStateChange: obj2.onHandlerStateChange } = self);
      obj.enableTrackpadTwoFingerGesture = self.props.enableTrackpadTwoFingerGesture;
      let tmp5 = drawerLockMode !== "locked-closed";
      if (tmp5) {
        tmp5 = drawerLockMode !== "locked-open";
      }
      obj.enabled = tmp5;
      obj.children = self.renderDrawer();
      return closure_1_10.jsx(DrawerLayout(closure_1_1[12]).PanGestureHandler, { userSelect: self.props.userSelect, activeCursor: self.props.activeCursor, mouseButton: self.props.mouseButton, enableContextMenu: self.props.enableContextMenu, ref: self.setPanGestureRef, hitSlop: tmp3, activeOffsetX: num * num2 * props.minSwipeDistance });
    }
  };
  items[1] = obj;
  return closure_3.default(DrawerLayout, items);
})(getIteratorFn.Component);
tmp5.defaultProps = { drawerWidth: 200, drawerPosition: "left", useNativeAnimations: true, drawerType: "front", edgeWidth: 20, minSwipeDistance: 3, overlayColor: "rgba(0, 0, 0, 0.7)", drawerLockMode: "unlocked", enableTrackpadTwoFingerGesture: false };
tmp5.positions = { Left: "left", Right: "right" };
const StyleSheet = get_registerCallableModule.StyleSheet;
const styles = StyleSheet.create({ drawerContainer: Object.assign({}, get_registerCallableModule.StyleSheet.absoluteFillObject, { zIndex: 1001, flexDirection: "row" }), containerInFront: Object.assign({}, get_registerCallableModule.StyleSheet.absoluteFillObject, { zIndex: 1002 }), containerOnBack: Object.assign({}, get_registerCallableModule.StyleSheet.absoluteFillObject), main: { flex: 1, zIndex: 0, overflow: "hidden" }, overlay: Object.assign({}, get_registerCallableModule.StyleSheet.absoluteFillObject, { zIndex: 1000 }) });

export default tmp5;
