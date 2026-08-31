// Module ID: 422
// Function ID: 4972
// Name: _callSuper
// Dependencies: [1, 99, 12, 13, 23, 25, 28, 191, 423, 424, 426, 345, 119, 251, 378, 248, 255, 428, 253]

// Module 422 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _inherits from "_inherits" /* 28 */;
import _defineProperty2 from "_defineProperty" /* 99 */;
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import NativeEventEmitter2 from "NativeEventEmitter" /* 191 */;
import setStyleAttributePreprocessor from "setStyleAttributePreprocessor" /* 253 */;
import RootTagContext from "RootTagContext" /* 255 */;
import get_VirtualizedList from "get VirtualizedList" /* 345 */;
import _mod423 from "module_423" /* 423 */;
import ModalManager2 from "ModalManager" /* 424 */;
import __INTERNAL_VIEW_CONFIG from "__INTERNAL_VIEW_CONFIG" /* 426 */;
import _mod428 from "module_428" /* 428 */;
import module_1 from "module_1" /* 1 */;
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
const _defineProperty = module_1(_defineProperty2);
let closure_2 = module_1(_classCallCheck);
let closure_3 = module_1(_defineProperties);
let closure_4 = module_1(_possibleConstructorReturn);
let closure_5 = module_1(_getPrototypeOf);
let closure_6 = module_1(_inherits);
const NativeEventEmitter = module_1(NativeEventEmitter2);
const module_423 = module_1(_mod423);
const ModalManager = module_1(ModalManager2);
let closure_7 = module_1(__INTERNAL_VIEW_CONFIG);
get_VirtualizedList = module_1(get_VirtualizedList);
const getIteratorFn = module_1(getIteratorFn2);
let closure_9 = get_VirtualizedList.default.VirtualizedListContextResetter;
let c10 = 0;
let tmp8 = ((Component) => {
  class Modal {
    constructor(arg0) {
      defaultResult = closure_1_2.default(this, Modal);
      items = [];
      items[0] = Component;
      tmp2 = closure_1_12(this, Modal, items);
      tmp3 = +closure_10;
      closure_10 = tmp3 + 1;
      tmp2._identifier = tmp3;
      obj = { isRendered: Component.visible === true };
      tmp2.state = obj;
      return tmp2;
    }
  }
  closure_6.default(Modal, Component);
  let obj = {
    key: "componentDidMount",
    value: function componentDidMount() {

    }
  };
  let items = [obj, , , , , ];
  obj = {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._eventSubscription) {
        const _eventSubscription = this._eventSubscription;
        _eventSubscription.remove();
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "componentDidUpdate",
    value: function componentDidUpdate(visible) {
      const self = this;
      if (visible.visible === false) {
        if (self.props.visible === true) {
          const obj = { isRendered: true };
          self.setState(obj);
        }
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "_shouldShowModal",
    value: function _shouldShowModal() {
      return this.props.visible === true;
    }
  };
  items[4] = {
    key: "render",
    value: function render() {
      const self = this;
      if (this._shouldShowModal()) {
        let obj = {};
        let str = "transparent";
        if (self.props.transparent !== true) {
          const backdropColor = self.props.backdropColor;
          let str2 = "white";
          if (backdropColor != null) {
            str2 = backdropColor;
          }
          str = str2;
        }
        obj.backgroundColor = str;
        let str3 = self.props.presentationStyle;
        if (!str3) {
          str3 = "fullScreen";
          if (self.props.transparent === true) {
            str3 = "overFullScreen";
          }
        }
        obj = {
          animationType: self.props.animationType || "none",
          presentationStyle: str3,
          transparent: self.props.transparent,
          hardwareAccelerated: self.props.hardwareAccelerated,
          onRequestClose: self.props.onRequestClose,
          onShow: self.props.onShow,
          onDismiss() {

            },
          visible: self.props.visible,
          statusBarTranslucent: self.props.statusBarTranslucent,
          navigationBarTranslucent: self.props.navigationBarTranslucent,
          identifier: self._identifier,
          style: closure_1_11.modal,
          onStartShouldSetResponder: self._shouldSetResponder,
          supportedOrientations: self.props.supportedOrientations,
          onOrientationChange: self.props.onOrientationChange,
          testID: self.props.testID
        };
        obj = {};
        ({ jsx, jsx: jsx2 } = closure_1_8);
        const obj1 = { value: null };
        const obj2 = {};
        const items = [closure_1_11.container, obj];
        obj2.style = items;
        obj2.collapsable = false;
        obj2.children = self.props.children;
        obj1.children = closure_1_8.jsx(Modal(closure_1_1[15]).default, {});
        obj.children = jsx2(Modal(closure_1_1[14]).default.Context.Provider, obj1);
        obj.children = <closure_1_9 />;
        return <closure_1_7.default />;
      } else {
        return null;
      }
    }
  };
  items[5] = {
    key: "_shouldSetResponder",
    value: function _shouldSetResponder() {
      return true;
    }
  };
  return closure_3.default(Modal, items);
})(getIteratorFn.default.Component);
tmp8.defaultProps = { visible: true, hardwareAccelerated: false };
tmp8.contextType = RootTagContext.RootTagContext;
let str = "left";
if (_default.getConstants().isRTL) {
  str = "right";
}
_default = _mod428.default;
let obj = { modal: { position: "absolute" } };
({ default: _default3, default: _default4 } = _defineProperty);
obj.container = _default3(_default4(_defineProperty.default({}, str, 0), "top", 0), "flex", 1);
let closure_11 = setStyleAttributePreprocessor.default.create(obj);
const unstable_Modal = module_423.default.unstable_Modal;
if (unstable_Modal != null) {
  tmp8 = unstable_Modal;
}

export default tmp8;
