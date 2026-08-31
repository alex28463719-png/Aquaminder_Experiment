// Module ID: 403
// Function ID: 4809
// Name: _callSuper
// Dependencies: [1, 203, 12, 13, 23, 25, 28, 253, 383, 404, 248, 409, 45, 119, 251]

// Module 403 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _inherits from "_inherits" /* 28 */;
import nullthrows from "nullthrows" /* 45 */;
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import View from "View" /* 248 */;
import setStyleAttributePreprocessor2 from "setStyleAttributePreprocessor" /* 253 */;
import dismissKeyboard from "dismissKeyboard" /* 383 */;
import _callSuper2 from "_callSuper" /* 404 */;
import Commands2 from "Commands" /* 409 */;
import module_1 from "module_1" /* 1 */;
import closure_12 from "jsxProd" /* 251 */;

function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const defaultResult = closure_4.default(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(defaultResult, items, closure_4.default(arg0).constructor);
  } else {
    constructResult = defaultResult.apply(arg0, items);
  }
  return closure_3.default(arg0, constructResult);
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
let closure_1 = module_1(_classCallCheck);
let closure_2 = module_1(_defineProperties);
let closure_3 = module_1(_possibleConstructorReturn);
let closure_4 = module_1(_getPrototypeOf);
let closure_5 = module_1(_inherits);
const setStyleAttributePreprocessor = module_1(setStyleAttributePreprocessor2);
let closure_6 = module_1(dismissKeyboard);
_callSuper = module_1(_callSuper2);
let closure_8 = module_1(View);
let closure_9 = _interopRequireWildcard(Commands2);
let closure_10 = module_1(nullthrows);
const getIteratorFn = _interopRequireWildcard(getIteratorFn2);
let closure_13 = ["drawerBackgroundColor", "onDrawerStateChanged", "renderNavigationView", "onDrawerOpen", "onDrawerClose"];
let closure_14 = ["Idle", "Dragging", "Settling"];
let obj = { height: _callSuper.default.currentHeight };
obj = { position: "absolute", top: 0, left: 0, right: 0, height: _callSuper.default.currentHeight, backgroundColor: "rgba(0, 0, 0, 0.251)" };
let closure_15 = setStyleAttributePreprocessor.default.create({ base: { flex: 1, elevation: 16 }, mainSubview: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }, drawerSubview: { position: "absolute", top: 0, bottom: 0 }, statusBar: obj, drawerStatusBar: obj });

export default ((Component) => {
  class DrawerLayoutAndroid {
    constructor() {
      defaultResult = closure_1_1.default(this, closure_0);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_1_17(this, closure_0, items.concat(array));
      closure_0 = tmp3;
      tmp3._nativeRef = closure_1_11.createRef();
      tmp3.state = { drawerOpened: false };
      tmp3._onDrawerSlide = (arg0) => {
        if (store.props.onDrawerSlide) {
          const props = store.props;
          props.onDrawerSlide(arg0);
        }
        if (store.props.keyboardDismissMode === "on-drag") {
          closure_2_6.default();
        }
      };
      tmp3._onDrawerOpen = () => {
        store.setState({ drawerOpened: true });
        if (store.props.onDrawerOpen) {
          const props = store.props;
          props.onDrawerOpen();
        }
      };
      tmp3._onDrawerClose = () => {
        store.setState({ drawerOpened: false });
        if (store.props.onDrawerClose) {
          const props = store.props;
          props.onDrawerClose();
        }
      };
      tmp3._onDrawerStateChanged = (arg0) => {
        if (store.props.onDrawerStateChanged) {
          const props = store.props;
          props.onDrawerStateChanged(closure_2_14[arg0.nativeEvent.drawerState]);
        }
      };
      return tmp3;
    }
  }
  closure_5.default(DrawerLayoutAndroid, Component);
  let obj = {
    key: "render",
    value: function render() {
      const self = this;
      const props = this.props;
      const drawerBackgroundColor = props.drawerBackgroundColor;
      let str = "white";
      if (drawerBackgroundColor !== undefined) {
        str = drawerBackgroundColor;
      }
      ({ onDrawerStateChanged, onDrawerOpen, onDrawerClose } = props);
      let jsxResult2 = self.props.statusBarBackgroundColor != null;
      let obj = { style: items };
      items = [closure_1_15.drawerSubview, ];
      obj = { width: self.props.drawerWidth, backgroundColor: str };
      items[1] = obj;
      let str2 = "none";
      if (self.state.drawerOpened) {
        str2 = "auto";
      }
      obj.pointerEvents = str2;
      obj.collapsable = false;
      const items1 = [props.renderNavigationView(), ];
      let jsxResult = jsxResult2;
      if (jsxResult2) {
        obj = { style: closure_1_15.drawerStatusBar };
        jsxResult = <closure_1_8.default style={closure_1_15.drawerStatusBar} />;
      }
      items1[1] = jsxResult;
      obj.children = items1;
      const obj1 = { style: closure_1_15.mainSubview, collapsable: false };
      let jsxResult1 = jsxResult2;
      const defaultResult = DrawerLayoutAndroid.default(props, closure_1_13);
      if (jsxResult2) {
        const obj2 = { translucent: true, backgroundColor: self.props.statusBarBackgroundColor };
        jsxResult1 = <closure_1_7.default translucent backgroundColor={self.props.statusBarBackgroundColor} />;
      }
      const items2 = [jsxResult1, , ];
      if (jsxResult2) {
        const obj3 = {};
        const items3 = [closure_1_15.statusBar, ];
        const obj4 = { backgroundColor: self.props.statusBarBackgroundColor };
        items3[1] = obj4;
        obj3.style = items3;
        jsxResult2 = <closure_1_8.default />;
      }
      items2[1] = jsxResult2;
      items2[2] = self.props.children;
      obj1.children = items2;
      const obj5 = { ref: self._nativeRef, drawerBackgroundColor: str, drawerWidth: self.props.drawerWidth, drawerPosition: self.props.drawerPosition, drawerLockMode: self.props.drawerLockMode };
      const items4 = [closure_1_15.base, self.props.style];
      obj5.style = items4;
      ({ _onDrawerSlide: obj8.onDrawerSlide, _onDrawerOpen: obj8.onDrawerOpen, _onDrawerClose: obj8.onDrawerClose, _onDrawerStateChanged: obj8.onDrawerStateChanged } = self);
      const items5 = [<closure_1_8.default style={closure_1_15.mainSubview} collapsable={false} />, <closure_1_8.default width={self.props.drawerWidth} backgroundColor={str} />];
      obj5.children = items5;
      return <closure_1_9.default {...Object.assign({}, defaultResult, obj5)} />;
    }
  };
  let items = [obj, , , , , , , , ];
  obj = {
    key: "openDrawer",
    value: function openDrawer() {
      const Commands = closure_1_9.Commands;
      Commands.openDrawer(closure_1_10.default(this._nativeRef.current));
    }
  };
  items[1] = obj;
  obj = {
    key: "closeDrawer",
    value: function closeDrawer() {
      const Commands = closure_1_9.Commands;
      Commands.closeDrawer(closure_1_10.default(this._nativeRef.current));
    }
  };
  items[2] = obj;
  items[3] = {
    key: "blur",
    value: function blur() {
      closure_1_10.default(this._nativeRef.current).blur();
    }
  };
  items[4] = {
    key: "focus",
    value: function focus() {
      closure_1_10.default(this._nativeRef.current).focus();
    }
  };
  items[5] = {
    key: "measure",
    value: function measure(arg0) {
      closure_1_10.default(this._nativeRef.current).measure(arg0);
    }
  };
  items[6] = {
    key: "measureInWindow",
    value: function measureInWindow(arg0) {
      closure_1_10.default(this._nativeRef.current).measureInWindow(arg0);
    }
  };
  items[7] = {
    key: "measureLayout",
    value: function measureLayout(arg0, arg1, arg2) {
      closure_1_10.default(this._nativeRef.current).measureLayout(arg0, arg1, arg2);
    }
  };
  items[8] = {
    key: "setNativeProps",
    value: function setNativeProps(arg0) {
      closure_1_10.default(this._nativeRef.current).setNativeProps(arg0);
    }
  };
  let items1 = [
    {
      key: "positions",
      get() {
        console.warn("Setting DrawerLayoutAndroid drawerPosition using `DrawerLayoutAndroid.positions` is deprecated. Instead pass the string value \"left\" or \"right\"");
        return { Left: "left", Right: "right" };
      }
    }
  ];
  return closure_2.default(DrawerLayoutAndroid, items, items1);
})(getIteratorFn.Component);
