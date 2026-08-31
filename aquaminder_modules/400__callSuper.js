// Module ID: 400
// Function ID: 4784
// Name: _callSuper
// Dependencies: [1, 203, 12, 13, 23, 25, 28, 33, 345, 119, 251]

// Module 400 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _inherits from "_inherits" /* 28 */;
import get_Version from "get Version" /* 33 */;
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import get_VirtualizedList from "get VirtualizedList" /* 345 */;
import module_1 from "module_1" /* 1 */;
import closure_7 from "jsxProd" /* 251 */;

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
let closure_6 = module_1(get_Version);
get_VirtualizedList = module_1(get_VirtualizedList);
const getIteratorFn = _interopRequireWildcard(getIteratorFn2);
let closure_8 = ["stickySectionHeadersEnabled"];
const VirtualizedSectionList = get_VirtualizedList.default.VirtualizedSectionList;

export default ((PureComponent) => {
  class SectionList {
    constructor() {
      defaultResult = closure_1_1.default(this, closure_0);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_1_11(this, closure_0, items.concat(array));
      closure_0 = tmp3;
      tmp3._captureRef = (_wrapperListRef) => {
        closure_0._wrapperListRef = _wrapperListRef;
      };
      return tmp3;
    }
  }
  closure_5.default(SectionList, PureComponent);
  let obj = {
    key: "scrollToLocation",
    value: function scrollToLocation(arg0) {
      if (this._wrapperListRef != null) {
        const _wrapperListRef = this._wrapperListRef;
        _wrapperListRef.scrollToLocation(arg0);
      }
    }
  };
  let items = [obj, , , , , , ];
  obj = {
    key: "recordInteraction",
    value: function recordInteraction() {
      let _wrapperListRef = this._wrapperListRef;
      if (_wrapperListRef) {
        const _wrapperListRef2 = this._wrapperListRef;
        _wrapperListRef = _wrapperListRef2.getListRef();
      }
      if (_wrapperListRef) {
        _wrapperListRef.recordInteraction();
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "flashScrollIndicators",
    value: function flashScrollIndicators() {
      let _wrapperListRef = this._wrapperListRef;
      if (_wrapperListRef) {
        const _wrapperListRef2 = this._wrapperListRef;
        _wrapperListRef = _wrapperListRef2.getListRef();
      }
      if (_wrapperListRef) {
        const result = _wrapperListRef.flashScrollIndicators();
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getScrollResponder",
    value: function getScrollResponder() {
      let _wrapperListRef = this._wrapperListRef;
      if (_wrapperListRef) {
        const _wrapperListRef2 = this._wrapperListRef;
        _wrapperListRef = _wrapperListRef2.getListRef();
      }
      return _wrapperListRef ? _wrapperListRef.getScrollResponder() : undefined;
    }
  };
  items[4] = {
    key: "getScrollableNode",
    value: function getScrollableNode() {
      let _wrapperListRef = this._wrapperListRef;
      if (_wrapperListRef) {
        const _wrapperListRef2 = this._wrapperListRef;
        _wrapperListRef = _wrapperListRef2.getListRef();
      }
      return _wrapperListRef ? _wrapperListRef.getScrollableNode() : undefined;
    }
  };
  items[5] = {
    key: "setNativeProps",
    value: function setNativeProps(arg0) {
      let _wrapperListRef = this._wrapperListRef;
      if (_wrapperListRef) {
        const _wrapperListRef2 = this._wrapperListRef;
        _wrapperListRef = _wrapperListRef2.getListRef();
      }
      if (_wrapperListRef) {
        _wrapperListRef.setNativeProps(arg0);
      }
    }
  };
  items[6] = {
    key: "render",
    value: function render() {
      const props = this.props;
      let stickySectionHeadersEnabled = props.stickySectionHeadersEnabled;
      if (stickySectionHeadersEnabled == null) {
        stickySectionHeadersEnabled = closure_1_6.default.OS === "ios";
      }
      const obj = {
        stickySectionHeadersEnabled,
        ref: this._captureRef,
        getItemCount(arg0) {
          return arg0.length;
        },
        getItem(arg0, arg1) {
          return arg0[arg1];
        }
      };
      return <closure_1_9 {...Object.assign({}, SectionList.default(props, closure_1_8), obj)} />;
    }
  };
  return closure_2.default(SectionList, items);
})(getIteratorFn.PureComponent);
