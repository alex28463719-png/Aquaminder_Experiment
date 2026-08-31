// Module ID: 962
// Function ID: 10371
// Name: _callSuper
// Dependencies: [1, 203, 12, 13, 23, 25, 28, 119, 2, 963, 980, 251, 972, 971]

// Module 962 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _inherits from "_inherits" /* 28 */;
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import createNativeWrapper from "createNativeWrapper" /* 963 */;
import _mod980 from "module_980" /* 980 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_10 from "jsxProd" /* 251 */;

function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  defaultResult = closure_6.default(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(defaultResult, items, closure_6.default(arg0).constructor);
  } else {
    constructResult = defaultResult.apply(arg0, items);
  }
  return closure_5.default(arg0, constructResult);
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
let closure_2 = module_1(_objectWithoutProperties);
let closure_3 = module_1(_classCallCheck);
let closure_4 = module_1(_defineProperties);
let closure_5 = module_1(_possibleConstructorReturn);
let closure_6 = module_1(_getPrototypeOf);
let closure_7 = module_1(_inherits);
const getIteratorFn = _interopRequireWildcard(getIteratorFn2);
const module_980 = module_1(_mod980);
let closure_11 = ["rippleColor", "style"];
let closure_12 = ["children", "style"];
let closure_13 = ["children", "style", "innerRef"];
let defaultResult = module_1(createNativeWrapper).default(module_980.default, { shouldCancelWhenOutside: false, shouldActivateOnStart: false });
let c15 = null;
const tmp7 = ((Component) => {
  class InnerBaseButton {
    constructor(arg0) {
      defaultResult = closure_1_3.default(this, closure_0);
      items = [];
      items[0] = Component;
      tmp2 = closure_1_24(this, closure_0, items);
      closure_0 = tmp2;
      tmp2.handleEvent = (nativeEvent) => {
        nativeEvent = nativeEvent.nativeEvent;
        ({ state, pointerInside } = nativeEvent);
        let tmp = pointerInside;
        if (pointerInside) {
          tmp = state === InnerBaseButton(closure_2_1[12]).State.ACTIVE;
        }
        if (tmp !== closure_0.lastActive) {
          if (closure_0.props.onActiveStateChange) {
            const props = closure_0.props;
            props.onActiveStateChange(tmp);
          }
        }
        if (!closure_0.longPressDetected) {
          if (nativeEvent.oldState === InnerBaseButton(closure_2_1[12]).State.ACTIVE) {
            if (state !== InnerBaseButton(closure_2_1[12]).State.CANCELLED) {
              if (closure_0.lastActive) {
                if (closure_0.props.onPress) {
                  const props2 = closure_0.props;
                  props2.onPress(pointerInside);
                }
              }
            }
          }
        }
        if (!closure_0.lastActive) {
          if (closure_2_8.Platform.OS !== "android") {
            let BEGAN = InnerBaseButton(closure_2_1[12]).State.ACTIVE;
          } else {
            BEGAN = InnerBaseButton(closure_2_1[12]).State.BEGAN;
          }
          if (state === BEGAN) {
            if (pointerInside) {
              closure_0.longPressDetected = false;
              if (closure_0.props.onLongPress) {
                const _setTimeout = setTimeout;
                closure_0.longPressTimeout = setTimeout(closure_0.onLongPress, closure_0.props.delayLongPress);
              }
            }
            closure_0.lastActive = tmp;
          }
        }
        if (state === InnerBaseButton(closure_2_1[12]).State.ACTIVE) {
          if (!pointerInside) {
            if (closure_0.longPressTimeout !== undefined) {
              const _clearTimeout = clearTimeout;
              clearTimeout(closure_0.longPressTimeout);
              closure_0.longPressTimeout = undefined;
            }
          }
        }
        if (closure_0.longPressTimeout !== undefined) {
          const _clearTimeout2 = clearTimeout;
          clearTimeout(closure_0.longPressTimeout);
          closure_0.longPressTimeout = undefined;
        }
      };
      tmp2.onLongPress = () => {
        closure_0.longPressDetected = true;
        if (closure_0.props.onLongPress != null) {
          const props = closure_0.props;
          props.onLongPress();
        }
      };
      tmp2.onHandlerStateChange = (arg0) => {
        if (closure_0.props.onHandlerStateChange != null) {
          const props = closure_0.props;
          props.onHandlerStateChange(arg0);
        }
        closure_0.handleEvent(arg0);
      };
      tmp2.onGestureEvent = (arg0) => {
        if (closure_0.props.onGestureEvent != null) {
          const props = closure_0.props;
          props.onGestureEvent(arg0);
        }
        closure_0.handleEvent(arg0);
      };
      tmp2.lastActive = false;
      tmp2.longPressDetected = false;
      return tmp2;
    }
  }
  closure_7.default(InnerBaseButton, Component);
  let items = [
    {
      key: "render",
      value: function render() {
        const self = this;
        const props = this.props;
        const rippleColor = props.rippleColor;
        if (closure_15 === null) {
          closure_15 = InnerBaseButton(closure_1_1[13]).isFabric();
        }
        let processColorResult = rippleColor;
        if (!closure_15) {
          let tmp6;
          if (rippleColor != null) {
            tmp6 = rippleColor;
          }
          processColorResult = closure_1_8.processColor(tmp6);
        }
        let obj = { ref: self.props.innerRef, rippleColor: processColorResult };
        const items = [props.style, ];
        let tmp8 = closure_1_8.Platform.OS === "ios";
        if (tmp8) {
          obj = { cursor: undefined };
          tmp8 = obj;
        }
        items[1] = tmp8;
        obj.style = items;
        obj = { onGestureEvent: self.onGestureEvent, onHandlerStateChange: self.onHandlerStateChange };
        return <closure_1_14 {...Object.assign(obj, closure_1_2.default(props, closure_1_11), obj)} />;
      }
    }
  ];
  return closure_4.default(InnerBaseButton, items);
})(getIteratorFn.Component);
let closure_16 = tmp7;
tmp7.defaultProps = { delayLongPress: 600 };
const Animated = get_registerCallableModule.Animated;
let closure_17 = Animated.createAnimatedComponent(tmp7);
const forwardRefResult = getIteratorFn.forwardRef((arg0, innerRef) => <closure_16 {...Object.assign({ innerRef: arg1 }, arg0)} />);
let closure_19 = getIteratorFn.forwardRef((arg0, innerRef) => <closure_17 {...Object.assign({ innerRef: arg1 }, arg0)} />);
let StyleSheet = get_registerCallableModule.StyleSheet;
const styles = StyleSheet.create({ underlay: { position: "absolute", left: 0, right: 0, bottom: 0, top: 0 } });
let tmp9 = ((Component) => {
  class InnerRectButton {
    constructor(arg0) {
      defaultResult = closure_1_3.default(this, closure_0);
      items = [];
      items[0] = Component;
      tmp2 = closure_1_24(this, closure_0, items);
      closure_0 = tmp2;
      tmp2.onActiveStateChange = (arg0) => {
        if (closure_2_8.Platform.OS !== "android") {
          const opacity = closure_0.opacity;
          let num = 0;
          if (arg0) {
            num = closure_0.props.activeOpacity;
          }
          opacity.setValue(num);
        }
        if (closure_0.props.onActiveStateChange != null) {
          const props = closure_0.props;
          props.onActiveStateChange(arg0);
        }
      };
      value = new closure_1_8.Animated.Value(0);
      tmp2.opacity = value;
      return tmp2;
    }
  }
  closure_7.default(InnerRectButton, Component);
  let items = [
    {
      key: "render",
      value: function render() {
        const self = this;
        const props = this.props;
        ({ children, style } = props);
        const StyleSheet = closure_1_8.StyleSheet;
        let flatStyles = StyleSheet.flatten(style);
        if (flatStyles == null) {
          flatStyles = {};
        }
        let obj = { ref: self.props.innerRef, style: flatStyles, onActiveStateChange: self.onActiveStateChange };
        const items = [closure_1_20.underlay, ];
        obj = { opacity: self.opacity, backgroundColor: self.props.underlayColor };
        ({ borderRadius: obj3.borderRadius, borderTopLeftRadius: obj3.borderTopLeftRadius, borderTopRightRadius: obj3.borderTopRightRadius, borderBottomLeftRadius: obj3.borderBottomLeftRadius, borderBottomRightRadius: obj3.borderBottomRightRadius } = flatStyles);
        items[1] = obj;
        const items1 = [closure_1_10.jsx(closure_1_8.Animated.View, { style: items }), children];
        obj.children = items1;
        return <closure_1_18 {...Object.assign({}, closure_1_2.default(props, closure_1_12), obj)} />;
      }
    }
  ];
  return closure_4.default(InnerRectButton, items);
})(getIteratorFn.Component);
let closure_21 = tmp9;
tmp9.defaultProps = { activeOpacity: 0.105, underlayColor: "black" };
const tmp10 = ((Component) => {
  class InnerBorderlessButton {
    constructor(arg0) {
      defaultResult = closure_1_3.default(this, closure_0);
      items = [];
      items[0] = Component;
      tmp2 = closure_1_24(this, closure_0, items);
      closure_0 = tmp2;
      tmp2.onActiveStateChange = (arg0) => {
        if (closure_2_8.Platform.OS !== "android") {
          const opacity = closure_0.opacity;
          let num = 1;
          if (arg0) {
            num = closure_0.props.activeOpacity;
          }
          opacity.setValue(num);
        }
        if (closure_0.props.onActiveStateChange != null) {
          const props = closure_0.props;
          props.onActiveStateChange(arg0);
        }
      };
      value = new closure_1_8.Animated.Value(1);
      tmp2.opacity = value;
      return tmp2;
    }
  }
  closure_7.default(InnerBorderlessButton, Component);
  let items = [
    {
      key: "render",
      value: function render() {
        const props = this.props;
        ({ children, style, innerRef } = props);
        let obj = { innerRef, onActiveStateChange: this.onActiveStateChange };
        const items = [style, ];
        let tmp3 = closure_1_8.Platform.OS === "ios";
        if (tmp3) {
          obj = { opacity: this.opacity };
          tmp3 = obj;
        }
        items[1] = tmp3;
        obj.style = items;
        obj.children = children;
        return <closure_1_19 {...Object.assign({}, closure_1_2.default(props, closure_1_13), obj)} />;
      }
    }
  ];
  return closure_4.default(InnerBorderlessButton, items);
})(getIteratorFn.Component);
let closure_22 = tmp10;
tmp10.defaultProps = { activeOpacity: 0.3, borderless: true };

export const PureNativeButton = module_980.default;
export const RawButton = defaultResult;
export const BaseButton = forwardRefResult;
export const RectButton = getIteratorFn.forwardRef((arg0, innerRef) => <closure_21 {...Object.assign({ innerRef: arg1 }, arg0)} />);
export const BorderlessButton = getIteratorFn.forwardRef((arg0, innerRef) => <closure_22 {...Object.assign({ innerRef: arg1 }, arg0)} />);
