// Module ID: 404
// Function ID: 4832
// Name: _callSuper
// Dependencies: [1, 12, 13, 23, 25, 28, 89, 33, 405, 407, 20, 119]

// Module 404 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import invariant from "invariant" /* 20 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _inherits from "_inherits" /* 28 */;
import get_Version from "get Version" /* 33 */;
import processColor from "processColor" /* 89 */;
import getIteratorFn from "getIteratorFn" /* 119 */;
import getConstants2 from "getConstants" /* 405 */;
import getConstants3 from "getConstants" /* 407 */;
import module_1 from "module_1" /* 1 */;

function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const defaultResult = closure_3.default(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(defaultResult, items, closure_3.default(arg0).constructor);
  } else {
    constructResult = defaultResult.apply(arg0, items);
  }
  return closure_2.default(arg0, constructResult);
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
function mergePropsStack(arr) {
  return arr.reduce((arg0, obj) => {
    for (const key10005 in arg1) {
      let tmp = key10005;
      if (arg1[key10005] == null) {
        continue;
      } else {
        arg0[key10005] = arg1[key10005];
        continue;
      }
      continue;
    }
    return arg0;
  }, Object.assign({}, arg1));
}
function createStackEntry(animated) {
  animated = animated.animated;
  let flag = false;
  if (animated != null) {
    flag = animated;
  }
  const showHideTransition = animated.showHideTransition;
  let str = "fade";
  if (showHideTransition != null) {
    str = showHideTransition;
  }
  let obj = {};
  let tmp = null;
  if (animated.backgroundColor != null) {
    obj = { value: animated.backgroundColor, animated: flag };
    tmp = obj;
  }
  obj.backgroundColor = tmp;
  let tmp2 = null;
  if (animated.barStyle != null) {
    obj = { value: animated.barStyle, animated: flag };
    tmp2 = obj;
  }
  obj.barStyle = tmp2;
  obj.translucent = animated.translucent;
  let tmp3 = null;
  if (animated.hidden != null) {
    const obj1 = { value: animated.hidden, animated: flag, transition: str };
    tmp3 = obj1;
  }
  obj.hidden = tmp3;
  obj.networkActivityIndicatorVisible = animated.networkActivityIndicatorVisible;
  return obj;
}
let closure_0 = module_1(_classCallCheck);
let closure_1 = module_1(_defineProperties);
let closure_2 = module_1(_possibleConstructorReturn);
let closure_3 = module_1(_getPrototypeOf);
let closure_4 = module_1(_inherits);
let closure_5 = module_1(processColor);
get_Version = module_1(get_Version);
const getConstants = module_1(getConstants2);
let closure_8 = module_1(getConstants3);
let closure_9 = module_1(invariant);
const tmp5 = ((Component) => {
  class StatusBar {
    constructor() {
      defaultResult = StatusBar.default(this, StatusBar);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_1_12(this, StatusBar, items.concat(array));
      tmp3._stackEntry = null;
      return tmp3;
    }
  }
  closure_4.default(StatusBar, Component);
  let obj = {
    key: "componentDidMount",
    value: function componentDidMount() {
      this._stackEntry = StatusBar.pushStackEntry(this.props);
    }
  };
  let items = [obj, , , ];
  obj = {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._stackEntry != null) {
        StatusBar.popStackEntry(tmp._stackEntry);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      const self = this;
      if (this._stackEntry != null) {
        self._stackEntry = StatusBar.replaceStackEntry(self._stackEntry, self.props);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "render",
    value: function render() {
      return null;
    }
  };
  const items1 = [
    {
      key: "setHidden",
      value: function setHidden(value) {
        let str = arg1;
        if (!arg1) {
          str = "none";
        }
        StatusBar._defaultProps.hidden.value = value;
        if (closure_1_6.default.OS === "ios") {
          closure_1_8.default.setHidden(value, str);
          const _default2 = closure_1_8.default;
        } else if (closure_1_6.default.OS === "android") {
          closure_1_7.default.setHidden(value);
          const _default = closure_1_7.default;
        }
      }
    },
    {
      key: "setBarStyle",
      value: function setBarStyle(value) {
        let flag = arg1;
        if (!arg1) {
          flag = false;
        }
        StatusBar._defaultProps.barStyle.value = value;
        if (closure_1_6.default.OS === "ios") {
          closure_1_8.default.setStyle(value, flag);
          const _default2 = closure_1_8.default;
        } else if (closure_1_6.default.OS === "android") {
          closure_1_7.default.setStyle(value);
          const _default = closure_1_7.default;
        }
      }
    },
    {
      key: "setNetworkActivityIndicatorVisible",
      value: function setNetworkActivityIndicatorVisible(networkActivityIndicatorVisible) {
        if (closure_1_6.default.OS !== "ios") {
          const _console = console;
          console.warn("`setNetworkActivityIndicatorVisible` is only available on iOS");
        } else {
          StatusBar._defaultProps.networkActivityIndicatorVisible = networkActivityIndicatorVisible;
          const result = closure_1_8.default.setNetworkActivityIndicatorVisible(networkActivityIndicatorVisible);
        }
      }
    },
    {
      key: "setBackgroundColor",
      value: function setBackgroundColor(value, animated) {
        let flag = animated;
        if (closure_1_6.default.OS !== "android") {
          const _console2 = console;
          console.warn("`setBackgroundColor` is only available on Android");
        } else {
          if (!flag) {
            flag = false;
          }
          StatusBar._defaultProps.backgroundColor.value = value;
          const defaultResult = closure_1_5.default(value);
          if (defaultResult == null) {
            const _console = console;
            const _String = String;
            const _HermesInternal = HermesInternal;
            console.warn("`StatusBar.setBackgroundColor`: Color " + String(value) + " parsed to null or undefined");
          } else {
            closure_1_9.default(typeof defaultResult === "number", "Unexpected color given for StatusBar.setBackgroundColor");
            closure_1_7.default.setColor(defaultResult, flag);
          }
        }
      }
    },
    {
      key: "setTranslucent",
      value: function setTranslucent(translucent) {
        if (closure_1_6.default.OS !== "android") {
          const _console = console;
          console.warn("`setTranslucent` is only available on Android");
        } else {
          StatusBar._defaultProps.translucent = translucent;
          closure_1_7.default.setTranslucent(translucent);
        }
      }
    },
    {
      key: "pushStackEntry",
      value: function pushStackEntry(props) {
        const tmp = closure_1_15(props);
        const _propsStack = StatusBar._propsStack;
        _propsStack.push(tmp);
        StatusBar._updatePropsStack();
        return tmp;
      }
    },
    {
      key: "popStackEntry",
      value: function popStackEntry(_stackEntry) {
        const _propsStack = StatusBar._propsStack;
        const index = _propsStack.indexOf(_stackEntry);
        if (index !== -1) {
          const _propsStack1 = StatusBar._propsStack;
          _propsStack1.splice(index, 1);
        }
        StatusBar._updatePropsStack();
      }
    },
    {
      key: "replaceStackEntry",
      value: function replaceStackEntry(_stackEntry, props) {
        const tmp = closure_1_15(props);
        const _propsStack = StatusBar._propsStack;
        const index = _propsStack.indexOf(_stackEntry);
        if (index !== -1) {
          StatusBar._propsStack[index] = tmp;
        }
        StatusBar._updatePropsStack();
        return tmp;
      }
    }
  ];
  return closure_1.default(StatusBar, items, items1);
})(_interopRequireWildcard(getIteratorFn).Component);
let closure_10 = tmp5;
tmp5._propsStack = [];
let obj = { backgroundColor: null, barStyle: "default", translucent: false, hidden: false, networkActivityIndicatorVisible: false };
let str = "black";
let str2 = "black";
if (get_Version.default.OS === "android") {
  const DEFAULT_BACKGROUND_COLOR = getConstants.default.getConstants().DEFAULT_BACKGROUND_COLOR;
  if (DEFAULT_BACKGROUND_COLOR != null) {
    str = DEFAULT_BACKGROUND_COLOR;
  }
  str2 = str;
  let _default = getConstants.default;
}
obj.backgroundColor = str2;
tmp5._defaultProps = createStackEntry(obj);
let HEIGHT = null;
tmp5._updateImmediate = null;
tmp5._currentValues = null;
if (get_Version.default.OS === "android") {
  HEIGHT = getConstants.default.getConstants().HEIGHT;
  let _default2 = getConstants.default;
}
tmp5.currentHeight = HEIGHT;
tmp5._updatePropsStack = () => {
  clearImmediate(_updateImmediate._updateImmediate);
  _updateImmediate._updateImmediate = setImmediate(() => {
    const _currentValues = closure_1_10._currentValues;
    const tmp = closure_1_14(closure_1_10._propsStack, closure_1_10._defaultProps);
    if (closure_1_6.default.OS === "ios") {
      if (!_currentValues) {
        let flag = tmp.barStyle.animated;
        if (!flag) {
          flag = false;
        }
        closure_1_8.default.setStyle(tmp.barStyle.value, flag);
        const _default4 = closure_1_8.default;
      } else {
        let value;
        if (_currentValues.barStyle != null) {
          value = iter2.value;
        }
      }
      if (!_currentValues) {
        let str5 = "none";
        if (tmp.hidden.animated) {
          str5 = tmp.hidden.transition;
        }
        closure_1_8.default.setHidden(tmp.hidden.value, str5);
        const _default5 = closure_1_8.default;
      } else {
        value = undefined;
        if (_currentValues.hidden != null) {
          value = iter3.value;
        }
      }
      if (!_currentValues) {
        const result = closure_1_8.default.setNetworkActivityIndicatorVisible(tmp.networkActivityIndicatorVisible);
        const _default6 = closure_1_8.default;
      }
    } else if (closure_1_6.default.OS === "android") {
      closure_1_7.default.setStyle(tmp.barStyle.value);
      const defaultResult = closure_1_5.default(tmp.backgroundColor.value);
      if (defaultResult == null) {
        const _console = console;
        const _HermesInternal = HermesInternal;
        console.warn("`StatusBar._updatePropsStack`: Color " + tmp.backgroundColor.value + " parsed to null or undefined");
      } else {
        closure_1_9.default(typeof defaultResult === "number", "Unexpected color given in StatusBar._updatePropsStack");
        closure_1_7.default.setColor(defaultResult, tmp.backgroundColor.animated);
        const _default = closure_1_7.default;
      }
      if (!_currentValues) {
        closure_1_7.default.setHidden(tmp.hidden.value);
        const _default2 = closure_1_7.default;
      } else {
        let value1;
        if (_currentValues.hidden != null) {
          value1 = iter.value;
        }
      }
      closure_1_7.default.setTranslucent(tmp.translucent);
      const _default3 = closure_1_7.default;
      const _default7 = closure_1_7.default;
    }
    closure_1_10._currentValues = tmp;
  });
};

export default tmp5;
