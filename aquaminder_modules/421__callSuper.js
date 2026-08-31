// Module ID: 421
// Function ID: 4945
// Name: _callSuper
// Dependencies: [1, 203, 363, 12, 13, 23, 25, 28, 385, 253, 33, 21, 248, 384, 119, 251]

// Module 421 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import map from "map" /* 21 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _inherits from "_inherits" /* 28 */;
import get_Version from "get Version" /* 33 */;
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import View from "View" /* 248 */;
import setStyleAttributePreprocessor from "setStyleAttributePreprocessor" /* 253 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 363 */;
import Keyboard from "Keyboard" /* 384 */;
import configureNext from "configureNext" /* 385 */;
import module_1 from "module_1" /* 1 */;
import closure_14 from "jsxProd" /* 251 */;

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
let closure_0 = module_1(_objectWithoutProperties);
let closure_1 = module_1(asyncGeneratorStep);
let closure_2 = module_1(_classCallCheck);
let closure_3 = module_1(_defineProperties);
let closure_4 = module_1(_possibleConstructorReturn);
let closure_5 = module_1(_getPrototypeOf);
let closure_6 = module_1(_inherits);
let closure_7 = module_1(configureNext);
let closure_8 = module_1(setStyleAttributePreprocessor);
let closure_9 = module_1(get_Version);
let closure_10 = module_1(map);
let closure_11 = module_1(View);
let closure_12 = module_1(Keyboard);
const getIteratorFn = _interopRequireWildcard(getIteratorFn2);
let closure_15 = ["behavior", "children", "contentContainerStyle", "enabled", "keyboardVerticalOffset", "style", "onLayout"];

export default ((Component) => {
  class KeyboardAvoidingView {
    constructor(arg0) {
      defaultResult = closure_1_2.default(this, closure_0);
      items = [];
      items[0] = Component;
      tmp2 = closure_1_17(this, closure_0, items);
      closure_0 = tmp2;
      tmp2._frame = null;
      tmp2._keyboardEvent = null;
      tmp2._subscriptions = [];
      tmp2._initialFrameHeight = 0;
      tmp2._bottom = 0;
      tmp2._onKeyboardChange = (_keyboardEvent) => {
        closure_0._keyboardEvent = _keyboardEvent;
        const result = closure_0._updateBottomIfNecessary();
      };
      tmp2._onKeyboardHide = (arg0) => {
        closure_0._keyboardEvent = null;
        const result = closure_0._updateBottomIfNecessary();
      };
      tmp2._onLayout = (() => {
        closure_0 = closure_2_1.default(async (arg0) => {
          arg0.persist();
          const _frame = closure_0._frame;
          closure_0._frame = arg0.nativeEvent.layout;
          if (!closure_0._initialFrameHeight) {
            closure_0._initialFrameHeight = closure_0._frame.height;
          }
          if (!_frame) {
            yield closure_0._updateBottomIfNecessary();
          }
          if (closure_0.props.onLayout) {
            const props = closure_0.props;
            props.onLayout(arg0);
          }
        });
        return function(arg0) {
          return callback(...arguments);
        };
      })();
      tmp2._setBottom = (_bottom) => {
        const enabled = closure_0.props.enabled;
        let flag = true;
        if (enabled != null) {
          flag = enabled;
        }
        closure_0._bottom = _bottom;
        if (flag) {
          const obj = { bottom: _bottom };
          closure_0.setState(obj);
        }
      };
      tmp2._updateBottomIfNecessary = closure_1_1.default(async () => {
        if (closure_1_0._keyboardEvent == null) {
          closure_1_0._setBottom(0);
        } else {
          const _keyboardEvent = closure_1_0._keyboardEvent;
          ({ duration, easing } = _keyboardEvent);
          const tmp8 = yield closure_1_0._relativeKeyboardHeight(_keyboardEvent.endCoordinates);
          if (closure_1_0._bottom !== tmp8) {
            closure_1_0._setBottom(tmp8);
            const enabled = closure_1_0.props.enabled;
            let flag = true;
            if (enabled != null) {
              flag = enabled;
            }
            if (flag) {
              if (duration) {
                if (easing) {
                  let obj = {};
                  let num = 10;
                  let num2 = 10;
                  if (duration > 10) {
                    num2 = duration;
                  }
                  obj.duration = num2;
                  obj = {};
                  if (duration > num) {
                    num = duration;
                  }
                  obj.duration = num;
                  obj.type = closure_3_7.default.Types[easing] || "keyboard";
                  obj.update = obj;
                  closure_3_7.default.configureNext(obj);
                  const _default = closure_3_7.default;
                }
              }
            }
          }
        }
      });
      tmp2.state = { bottom: 0 };
      tmp2.viewRef = closure_1_13.createRef();
      return tmp2;
    }
  }
  closure_6.default(KeyboardAvoidingView, Component);
  let obj = {
    key: "_relativeKeyboardHeight",
    value: (() => {
      closure_0 = closure_1_1.default(async function(arg0) {
        const self = this;
        const _frame = self._frame;
        if (_frame) {
          if (arg0) {
            if (closure_3_9.default.OS === "ios") {
              if (arg0.screenY === 0) {
                if (yield _default.prefersCrossFadeTransitions()) {
                  return 0;
                }
                _default = closure_3_10.default;
              }
            }
            const keyboardVerticalOffset = self.props.keyboardVerticalOffset;
            let num3 = 0;
            if (keyboardVerticalOffset != null) {
              num3 = keyboardVerticalOffset;
            }
            const diff = arg0.screenY - num3;
            if (self.props.behavior === "height") {
              const _Math2 = Math;
              return Math.max(self.state.bottom + _frame.y + _frame.height - diff, 0);
            } else {
              const _Math = Math;
              return Math.max(_frame.y + _frame.height - diff, 0);
            }
          }
        }
        return 0;
      });
      return function _relativeKeyboardHeight(endCoordinates) {
        return callback(...arguments);
      };
    })()
  };
  let items = [obj, , , , ];
  obj = {
    key: "componentDidUpdate",
    value: function componentDidUpdate(arg0, bottom) {
      const self = this;
      const enabled = this.props.enabled;
      let flag = true;
      if (enabled != null) {
        flag = enabled;
      }
      if (flag) {
        if (self._bottom !== bottom.bottom) {
          const obj = { bottom: self._bottom };
          self.setState(obj);
        }
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "componentDidMount",
    value: function componentDidMount() {
      const self = this;
      if (!_default.isVisible()) {
        self._keyboardEvent = null;
        self._setBottom(0);
      }
      if (closure_1_9.default.OS === "ios") {
        const items = [closure_1_12.default.addListener("keyboardWillHide", self._onKeyboardHide), closure_1_12.default.addListener("keyboardWillShow", self._onKeyboardChange)];
        self._subscriptions = items;
        const _default4 = closure_1_12.default;
        const _default5 = closure_1_12.default;
      } else {
        const items1 = [closure_1_12.default.addListener("keyboardDidHide", self._onKeyboardChange), closure_1_12.default.addListener("keyboardDidShow", self._onKeyboardChange)];
        self._subscriptions = items1;
        const _default2 = closure_1_12.default;
        const _default3 = closure_1_12.default;
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      const _subscriptions = this._subscriptions;
      const item = _subscriptions.forEach((remove) => {
        remove.remove();
      });
    }
  };
  items[4] = {
    key: "render",
    value: function render() {
      const self = this;
      const props = this.props;
      ({ behavior, children, enabled } = props);
      let flag = true;
      if (enabled !== undefined) {
        flag = enabled;
      }
      ({ keyboardVerticalOffset, style, onLayout } = props);
      const defaultResult = KeyboardAvoidingView.default(props, closure_1_15);
      let num = 0;
      if (flag === true) {
        num = self.state.bottom;
      }
      if ("height" === behavior) {
        let tmp14;
        if (self._frame != null) {
          if (self.state.bottom > 0) {
            let obj = { height: self._initialFrameHeight - num, flex: 0 };
            tmp14 = obj;
          }
        }
        const _Object4 = Object;
        obj = { ref: self.viewRef, style: closure_1_8.default.compose(style, tmp14), onLayout: self._onLayout };
        const obj1 = { children };
        return <closure_1_11.default {...Object.assign(obj, defaultResult, obj1)} />;
      } else if ("position" === behavior) {
        const _Object3 = Object;
        const obj2 = { ref: self.viewRef, style, onLayout: self._onLayout };
        const obj3 = {};
        const obj4 = {};
        const obj5 = { bottom: num };
        obj4.style = closure_1_8.default.compose(props.contentContainerStyle, obj5);
        obj4.children = children;
        obj3.children = <closure_1_11.default />;
        return <closure_1_11.default {...Object.assign(obj2, defaultResult, obj3)} />;
      } else if ("padding" === behavior) {
        const _Object2 = Object;
        const obj6 = { ref: self.viewRef };
        const obj7 = { paddingBottom: num };
        obj6.style = closure_1_8.default.compose(style, obj7);
        obj6.onLayout = self._onLayout;
        const obj8 = { children };
        return <closure_1_11.default {...Object.assign(obj6, defaultResult, obj8)} />;
      } else {
        const _Object = Object;
        obj = {};
        ({ viewRef: obj.ref, _onLayout: obj.onLayout } = self);
        obj.style = style;
        const obj9 = { children };
        return <closure_1_11.default {...Object.assign(obj, defaultResult, obj9)} />;
      }
    }
  };
  return closure_3.default(KeyboardAvoidingView, items);
})(getIteratorFn.Component);
