// Module ID: 411
// Function ID: 4897
// Name: _callSuper
// Dependencies: [1, 203, 12, 13, 23, 25, 28, 248, 128, 253, 362, 119, 251]

// Module 411 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _inherits from "_inherits" /* 28 */;
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import flattenStyle from "flattenStyle" /* 128 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import View from "View" /* 248 */;
import setStyleAttributePreprocessor from "setStyleAttributePreprocessor" /* 253 */;
import generateRequestId from "generateRequestId" /* 362 */;
import module_1 from "module_1" /* 1 */;
import closure_10 from "jsxProd" /* 251 */;

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
let closure_6 = module_1(View);
let closure_7 = module_1(flattenStyle);
let closure_8 = module_1(setStyleAttributePreprocessor);
let closure_9 = module_1(generateRequestId);
const getIteratorFn = _interopRequireWildcard(getIteratorFn2);
let closure_11 = ["children", "style", "imageStyle", "imageRef", "importantForAccessibility"];

export default ((Component) => {
  class ImageBackground {
    constructor() {
      defaultResult = closure_1_1.default(this, closure_0);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_1_13(this, closure_0, items.concat(array));
      closure_0 = tmp3;
      tmp3._viewRef = null;
      tmp3._captureRef = (_viewRef) => {
        closure_0._viewRef = _viewRef;
      };
      return tmp3;
    }
  }
  closure_5.default(ImageBackground, Component);
  let obj = {
    key: "setNativeProps",
    value: function setNativeProps(arg0) {
      const _viewRef = this._viewRef;
      if (_viewRef) {
        _viewRef.setNativeProps(arg0);
      }
    }
  };
  let items = [obj, ];
  obj = {
    key: "render",
    value: function render() {
      const props = this.props;
      ({ style, importantForAccessibility } = props);
      ({ children, imageStyle, imageRef } = props);
      const size = closure_1_7.default(style);
      let obj = { accessibilityIgnoresInvertColors: true, importantForAccessibility, style, ref: this._captureRef };
      obj = { importantForAccessibility };
      const items = [closure_1_8.default.absoluteFill, , ];
      obj = {};
      let width;
      if (size != null) {
        width = size.width;
      }
      obj.width = width;
      let height;
      if (size != null) {
        height = size.height;
      }
      obj.height = height;
      items[1] = obj;
      items[2] = imageStyle;
      obj.style = items;
      obj.ref = imageRef;
      const items1 = [<closure_1_9.default {...Object.assign({}, ImageBackground.default(props, closure_1_11), obj)} />, children];
      obj.children = items1;
      return <closure_1_6.default />;
    }
  };
  items[1] = obj;
  return closure_2.default(ImageBackground, items);
})(getIteratorFn.Component);
