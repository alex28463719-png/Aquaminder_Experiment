// Module ID: 1036
// Function ID: 10925
// Name: _callSuper
// Dependencies: [1, 12, 13, 23, 25, 28, 119, 2, 251, 972, 1003, 1002]

// Module 1036 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _inherits from "_inherits" /* 28 */;
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_8 from "jsxProd" /* 251 */;

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
const tmp5 = ((Component) => {
  class Swipeable {
    constructor(arg0) {
      defaultResult = closure_1_2.default(this, closure_0);
      items = [];
      items[0] = Component;
      obj = closure_1_11(this, closure_0, items);
      closure_0 = obj;
      obj.updateAnimatedEvent = (overshootFriction, rowWidth) => {
        overshootFriction = overshootFriction.overshootFriction;
        ({ dragX, leftWidth } = rowWidth);
        let num = 0;
        if (leftWidth !== undefined) {
          num = leftWidth;
        }
        rowWidth = rowWidth.rowWidth;
        let num2 = 0;
        if (rowWidth !== undefined) {
          num2 = rowWidth;
        }
        let rightOffset = rowWidth.rightOffset;
        if (rightOffset === undefined) {
          rightOffset = num2;
        }
        const bound = Math.max(0, num2 - rightOffset);
        let overshootLeft = overshootFriction.overshootLeft;
        if (overshootLeft === undefined) {
          overshootLeft = num > 0;
        }
        let overshootRight = overshootFriction.overshootRight;
        if (overshootRight === undefined) {
          overshootRight = bound > 0;
        }
        const Animated = closure_2_7.Animated;
        const items = [0, overshootFriction.friction];
        obj = { inputRange: items1 };
        items1 = [-bound - 1, -bound, num, num + 1];
        let num3 = 0;
        if (overshootRight) {
          num3 = 1 / overshootFriction;
        }
        const items2 = [-bound - num3, -bound, num, ];
        let num4 = 0;
        if (overshootLeft) {
          num4 = 1 / overshootFriction;
        }
        items2[3] = num + num4;
        obj.outputRange = items2;
        const interpolateResult = Animated.add(rowWidth.rowTranslation, dragX.interpolate({ inputRange: items, outputRange: [0, 1] })).interpolate(obj);
        obj.transX = interpolateResult;
        if (num > 0) {
          obj = {};
          const items3 = [-1, 0, num];
          obj.inputRange = items3;
          obj.outputRange = [0, 0, 1];
          let interpolateResult1 = interpolateResult.interpolate(obj);
        } else {
          const Value = closure_2_7.Animated.Value;
          const prototype = Value.prototype;
          interpolateResult1 = new Value(0);
        }
        obj.showLeftAction = interpolateResult1;
        const showLeftAction = obj.showLeftAction;
        const items4 = [0, Number.MIN_VALUE];
        const items5 = [-10000, 0];
        obj.leftActionTranslate = showLeftAction.interpolate({ inputRange: items4, outputRange: items5, extrapolate: "clamp" });
        if (bound > 0) {
          const obj1 = {};
          const items6 = [-bound, 0, 1];
          obj1.inputRange = items6;
          obj1.outputRange = [1, 0, 0];
          let interpolateResult2 = interpolateResult.interpolate(obj1);
        } else {
          const Value2 = closure_2_7.Animated.Value;
          const prototype2 = Value2.prototype;
          interpolateResult2 = new Value2(0);
        }
        obj.showRightAction = interpolateResult2;
        const showRightAction = obj.showRightAction;
        const items7 = [0, Number.MIN_VALUE];
        const items8 = [-10000, 0];
        obj.rightActionTranslate = showRightAction.interpolate({ inputRange: items7, outputRange: items8, extrapolate: "clamp" });
      };
      obj.onTapHandlerStateChange = (nativeEvent) => {
        if (nativeEvent.nativeEvent.oldState === Swipeable(closure_2_1[9]).State.ACTIVE) {
          obj.close();
        }
      };
      obj.onHandlerStateChange = (nativeEvent) => {
        if (nativeEvent.nativeEvent.oldState === Swipeable(closure_2_1[9]).State.ACTIVE) {
          obj.handleRelease(nativeEvent);
        }
        if (nativeEvent.nativeEvent.state === Swipeable(closure_2_1[9]).State.ACTIVE) {
          nativeEvent = nativeEvent.nativeEvent;
          const rowState = obj.state.rowState;
          let str3 = "right";
          let str4 = "right";
          if (rowState !== -1) {
            let str2 = "left";
            if (rowState !== 1) {
              if (tmp12 > 0) {
                str3 = "left";
              }
              str2 = str3;
            }
            str4 = str2;
          }
          if (rowState === 0) {
            if (obj.props.onSwipeableOpenStartDrag != null) {
              const props2 = obj.props;
              const result = props2.onSwipeableOpenStartDrag(str4);
            }
          } else if (obj.props.onSwipeableCloseStartDrag != null) {
            const props = obj.props;
            const result1 = props.onSwipeableCloseStartDrag(str4);
          }
        }
      };
      obj.handleRelease = (nativeEvent) => {
        ({ velocityX, translationX } = nativeEvent.nativeEvent);
        const state = obj.state;
        const leftWidth = state.leftWidth;
        let num = 0;
        if (leftWidth !== undefined) {
          num = leftWidth;
        }
        const rowWidth = state.rowWidth;
        let num2 = 0;
        if (rowWidth !== undefined) {
          num2 = rowWidth;
        }
        const rowState = state.rowState;
        let rightOffset = obj.state.rightOffset;
        if (rightOffset === undefined) {
          rightOffset = num2;
        }
        const diff = num2 - rightOffset;
        const props = obj.props;
        ({ friction, leftThreshold } = props);
        if (leftThreshold === undefined) {
          leftThreshold = num / 2;
        }
        let rightThreshold = props.rightThreshold;
        if (rightThreshold === undefined) {
          rightThreshold = diff / 2;
        }
        const result = (translationX + 0.05 * velocityX) / friction;
        const sum = obj.currentOffset() + translationX / friction;
        if (rowState === 0) {
          let num6 = num;
          if (result <= leftThreshold) {
            num6 = 0;
            if (result < -rightThreshold) {
              num6 = -diff;
            }
          }
        } else if (rowState === 1) {
          num6 = 0;
          if (result > -leftThreshold) {
            num6 = num;
          }
        } else {
          num6 = 0;
          if (result < rightThreshold) {
            num6 = -diff;
          }
        }
        obj.animateRow(sum, num6, velocityX / friction);
      };
      obj.animateRow = (arg0, toValue, velocity) => {
        obj = arg0;
        closure_1 = toValue;
        ({ dragX, rowTranslation } = obj.state);
        dragX.setValue(0);
        rowTranslation.setValue(arg0);
        obj = { rowState: Math.sign(toValue) };
        obj.setState(obj);
        const Animated = closure_2_7.Animated;
        obj = { restSpeedThreshold: 1.7, restDisplacementThreshold: 0.4, velocity, bounciness: 0, toValue };
        obj.useNativeDriver = obj.props.useNativeAnimations;
        Animated.spring(rowTranslation, Object.assign(obj, obj.props.animationOptions)).start((finished) => {
          if (finished.finished) {
            if (closure_1 > 0) {
              if (closure_0.props.onSwipeableLeftOpen != null) {
                const props3 = closure_0.props;
                props3.onSwipeableLeftOpen();
              }
              if (closure_0.props.onSwipeableOpen != null) {
                const props4 = closure_0.props;
                props4.onSwipeableOpen("left", closure_0);
              }
            } else if (closure_1 < 0) {
              if (closure_0.props.onSwipeableRightOpen != null) {
                const props = closure_0.props;
                props.onSwipeableRightOpen();
              }
              if (closure_0.props.onSwipeableOpen != null) {
                const props2 = closure_0.props;
                props2.onSwipeableOpen("right", closure_0);
              }
            } else {
              let str = "right";
              if (closure_0 > 0) {
                str = "left";
              }
              if (closure_0.props.onSwipeableClose != null) {
                const props5 = closure_0.props;
                props5.onSwipeableClose(str, closure_0);
              }
            }
          }
        });
        if (toValue > 0) {
          if (obj.props.onSwipeableLeftWillOpen != null) {
            let props3 = obj.props;
            const result = props3.onSwipeableLeftWillOpen();
          }
          if (obj.props.onSwipeableWillOpen != null) {
            let props4 = obj.props;
            props4.onSwipeableWillOpen("left");
          }
        } else if (toValue < 0) {
          if (obj.props.onSwipeableRightWillOpen != null) {
            let props = obj.props;
            const result1 = props.onSwipeableRightWillOpen();
          }
          if (obj.props.onSwipeableWillOpen != null) {
            let props2 = obj.props;
            props2.onSwipeableWillOpen("right");
          }
        } else {
          let str = "right";
          if (arg0 > 0) {
            str = "left";
          }
          if (obj.props.onSwipeableWillClose != null) {
            let props5 = obj.props;
            props5.onSwipeableWillClose(str);
          }
        }
      };
      obj.onRowLayout = (nativeEvent) => {
        obj = { rowWidth: nativeEvent.nativeEvent.layout.width };
        obj.setState(obj);
      };
      obj.currentOffset = () => {
        const state = obj.state;
        const leftWidth = state.leftWidth;
        let num = 0;
        if (leftWidth !== undefined) {
          num = leftWidth;
        }
        const rowWidth = state.rowWidth;
        let num2 = 0;
        if (rowWidth !== undefined) {
          num2 = rowWidth;
        }
        const rowState = state.rowState;
        let rightOffset = obj.state.rightOffset;
        if (rightOffset === undefined) {
          rightOffset = num2;
        }
        if (rowState === 1) {
          return num;
        } else {
          return rowState === -1 ? -tmp : 0;
        }
      };
      obj.close = () => {
        obj.animateRow(obj.currentOffset(), 0);
      };
      obj.openLeft = () => {
        const leftWidth = obj.state.leftWidth;
        let num = 0;
        if (leftWidth !== undefined) {
          num = leftWidth;
        }
        obj.animateRow(obj.currentOffset(), num);
      };
      obj.openRight = () => {
        const rowWidth = obj.state.rowWidth;
        let num = 0;
        if (rowWidth !== undefined) {
          num = rowWidth;
        }
        let rightOffset = obj.state.rightOffset;
        if (rightOffset === undefined) {
          rightOffset = num;
        }
        const diff = num - rightOffset;
        obj.animateRow(obj.currentOffset(), -diff);
      };
      obj.reset = () => {
        ({ dragX, rowTranslation } = obj.state);
        dragX.setValue(0);
        rowTranslation.setValue(0);
        obj.setState({ rowState: 0 });
      };
      value = new closure_1_7.Animated.Value(0);
      obj = { dragX: value };
      value1 = new closure_1_7.Animated.Value(0);
      obj.rowTranslation = value1;
      obj.rowState = 0;
      obj.leftWidth = undefined;
      obj.rightOffset = undefined;
      obj.rowWidth = undefined;
      obj.state = obj;
      updateAnimatedEventResult = obj.updateAnimatedEvent(Component, obj.state);
      Animated = closure_1_7.Animated;
      items1 = [];
      items1[0] = { nativeEvent: { translationX: value } };
      obj1 = { useNativeDriver: Component.useNativeAnimations };
      obj.onGestureEvent = Animated.event(items1, obj1);
      return obj;
    }
  }
  closure_6.default(Swipeable, Component);
  let obj = {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(friction, leftWidth) {
      const self = this;
      if (this.props.friction === friction.friction) {
        if (self.props.overshootLeft === friction.overshootLeft) {
          if (self.props.overshootRight === friction.overshootRight) {
            if (self.props.overshootFriction === friction.overshootFriction) {
              if (self.state.leftWidth === leftWidth.leftWidth) {
                return true;
              }
            }
          }
        }
      }
      self.updateAnimatedEvent(friction, leftWidth);
    }
  };
  let items = [obj, ];
  obj = {
    key: "render",
    value: function render() {
      let self = this;
      self = this;
      const rowState = this.state.rowState;
      const props = this.props;
      ({ renderLeftActions, renderRightActions, dragOffsetFromLeftEdge } = props);
      let num = 10;
      if (dragOffsetFromLeftEdge !== undefined) {
        num = dragOffsetFromLeftEdge;
      }
      const dragOffsetFromRightEdge = props.dragOffsetFromRightEdge;
      let num2 = 10;
      if (dragOffsetFromRightEdge !== undefined) {
        num2 = dragOffsetFromRightEdge;
      }
      let jsxsResult = renderLeftActions;
      if (renderLeftActions) {
        let obj = {};
        const items = [closure_1_9.leftActions, ];
        obj = {};
        obj = { translateX: self.leftActionTranslate };
        const items1 = [obj];
        obj.transform = items1;
        items[1] = obj;
        obj.style = items;
        const items2 = [renderLeftActions(self.showLeftAction, self.transX, self), ];
        const obj1 = {
          onLayout(leftWidth) {
              return self.setState({ leftWidth: leftWidth.nativeEvent.layout.x });
            }
        };
        items2[1] = <closure_1_7.View onLayout={function onLayout(leftWidth) {
          return self.setState({ leftWidth: leftWidth.nativeEvent.layout.x });
        }} />;
        obj.children = items2;
        jsxsResult = closure_1_8.jsxs(closure_1_7.Animated.View, { translateX: self.leftActionTranslate });
      }
      let jsxsResult1 = renderRightActions;
      if (renderRightActions) {
        const obj2 = {};
        const items3 = [closure_1_9.rightActions, ];
        const obj3 = {};
        const obj4 = { translateX: self.rightActionTranslate };
        const items4 = [obj4];
        obj3.transform = items4;
        items3[1] = obj3;
        obj2.style = items3;
        const items5 = [renderRightActions(self.showRightAction, self.transX, self), ];
        const obj5 = {
          onLayout(nativeEvent) {
              return self.setState({ rightOffset: nativeEvent.nativeEvent.layout.x });
            }
        };
        items5[1] = <closure_1_7.View onLayout={function onLayout(nativeEvent) {
          return self.setState({ rightOffset: nativeEvent.nativeEvent.layout.x });
        }} />;
        obj2.children = items5;
        jsxsResult1 = closure_1_8.jsxs(closure_1_7.Animated.View, {});
      }
      const activeOffsetX = [-num2, num];
      const obj6 = { onGestureEvent: self.onGestureEvent, onHandlerStateChange: self.onHandlerStateChange };
      const obj7 = { onLayout: self.onRowLayout, style: items7 };
      items7 = [closure_1_9.container, self.props.containerStyle];
      const items8 = [jsxsResult, jsxsResult1, ];
      const obj8 = { enabled: rowState !== 0, touchAction: "pan-y", onHandlerStateChange: self.onTapHandlerStateChange };
      const obj9 = {};
      let str = "box-only";
      if (rowState === 0) {
        str = "auto";
      }
      obj9.pointerEvents = str;
      const items9 = [{ translateX: self.transX }];
      const items10 = [{ transform: items9 }, self.props.childrenContainerStyle];
      obj9.style = items10;
      obj9.children = props.children;
      obj8.children = closure_1_8.jsx(closure_1_7.Animated.View, {});
      items8[2] = closure_1_8.jsx(Swipeable(closure_1_1[11]).TapGestureHandler, { enabled: rowState !== 0, touchAction: "pan-y", onHandlerStateChange: self.onTapHandlerStateChange });
      obj7.children = items8;
      obj6.children = closure_1_8.jsxs(closure_1_7.Animated.View, { onLayout: self.onRowLayout, style: items7 });
      return closure_1_8.jsx(Swipeable(closure_1_1[10]).PanGestureHandler, Object.assign({ activeOffsetX, touchAction: "pan-y" }, self.props, obj6));
    }
  };
  items[1] = obj;
  return closure_3.default(Swipeable, items);
})(getIteratorFn.Component);
tmp5.defaultProps = { friction: 1, overshootFriction: 1, useNativeAnimations: true };
const StyleSheet = get_registerCallableModule.StyleSheet;
let obj = { container: { overflow: "hidden" } };
obj = {};
let str = "row";
if (get_registerCallableModule.I18nManager.isRTL) {
  str = "row-reverse";
}
obj.flexDirection = str;
obj.leftActions = Object.assign({}, get_registerCallableModule.StyleSheet.absoluteFillObject, obj);
obj = {};
let str2 = "row-reverse";
if (get_registerCallableModule.I18nManager.isRTL) {
  str2 = "row";
}
obj.flexDirection = str2;
obj.rightActions = Object.assign({}, get_registerCallableModule.StyleSheet.absoluteFillObject, obj);
const styles = StyleSheet.create(obj);

export default tmp5;
