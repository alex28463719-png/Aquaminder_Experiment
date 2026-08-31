// Module ID: 373
// Function ID: 4596
// Name: _callSuper
// Dependencies: [1, 203, 12, 13, 23, 25, 28, 374, 376, 119, 251]

// Module 373 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _inherits from "_inherits" /* 28 */;
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import Commands2 from "Commands" /* 374 */;
import Commands3 from "Commands" /* 376 */;
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
let closure_6 = _interopRequireWildcard(Commands2);
let Commands = _interopRequireWildcard(Commands3);
const getIteratorFn = module_1(getIteratorFn2);
let closure_8 = ["tintColor", "titleColor", "title"];

export default ((Component) => {
  class RefreshControl {
    constructor() {
      defaultResult = closure_1_1.default(this, closure_0);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_1_10(this, closure_0, items.concat(array));
      closure_0 = tmp3;
      tmp3._lastNativeRefreshing = false;
      tmp3._onRefresh = () => {
        closure_0._lastNativeRefreshing = true;
        if (closure_0.props.onRefresh) {
          const props = closure_0.props;
          props.onRefresh();
        }
        closure_0.forceUpdate();
      };
      tmp3._setNativeRef = (_nativeRef) => {
        closure_0._nativeRef = _nativeRef;
      };
      return tmp3;
    }
  }
  closure_5.default(RefreshControl, Component);
  let obj = {
    key: "componentDidMount",
    value: function componentDidMount() {
      this._lastNativeRefreshing = this.props.refreshing;
    }
  };
  let items = [obj, , ];
  obj = {
    key: "componentDidUpdate",
    value: function componentDidUpdate(refreshing) {
      const self = this;
      if (this.props.refreshing !== refreshing.refreshing) {
        self._lastNativeRefreshing = self.props.refreshing;
      } else if (self.props.refreshing !== self._lastNativeRefreshing) {
        if (self._nativeRef) {
          const Commands = closure_1_6.Commands;
          Commands.setNativeRefreshing(self._nativeRef, self.props.refreshing);
          self._lastNativeRefreshing = self.props.refreshing;
        }
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "render",
    value: function render() {
      const props = this.props;
      ({ tintColor, titleColor, title } = props);
      return <closure_1_6.default {...Object.assign({}, RefreshControl.default(props, closure_1_8), { ref: this._setNativeRef, onRefresh: this._onRefresh })} />;
    }
  };
  items[2] = obj;
  return closure_2.default(RefreshControl, items);
})(getIteratorFn.default.Component);
