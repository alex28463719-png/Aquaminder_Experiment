// Module ID: 83
// Function ID: 1165
// Name: _callSuper
// Dependencies: [1, 12, 13, 23, 25, 28, 84, 126, 80, 76, 45, 77, 47, 127]

// Module 83 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _inherits from "_inherits" /* 28 */;
import nullthrows from "nullthrows" /* 45 */;
import compareDocumentPosition from "compareDocumentPosition" /* 76 */;
import _callSuper2 from "_callSuper" /* 80 */;
import focusInput from "focusInput" /* 84 */;
import warnForStyleProps2 from "warnForStyleProps" /* 126 */;
import module_1 from "module_1" /* 1 */;

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
let closure_7 = module_1(focusInput);
const warnForStyleProps = module_1(warnForStyleProps2);
_callSuper = _interopRequireWildcard(_callSuper2);
let closure_9 = module_1(compareDocumentPosition);
let closure_10 = module_1(nullthrows);
function noop() {

}

export default (function replaceConstructorWithoutSuper(arg0) {
  class ReactNativeElement {
    constructor(arg0, arg1, arg2, arg3) {
      setOwnerDocumentResult = closure_1_0(closure_1_1[11]).setOwnerDocument(this, arg3);
      setInstanceHandleResult = closure_1_0(closure_1_1[11]).setInstanceHandle(this, arg2);
      this.__nativeTag = arg0;
      this.__internalInstanceHandle = arg2;
      this.__viewConfig = arg1;
      return;
    }
  }
  ReactNativeElement.prototype = arg0.prototype;
  return ReactNativeElement;
})(((arg0) => {
  class ReactNativeElement {
    constructor(arg0, arg1, arg2, arg3) {
      defaultResult = closure_1_2.default(this, ReactNativeElement);
      items = [, ];
      items[0] = arg2;
      items[1] = arg3;
      tmp2 = closure_1_13(this, ReactNativeElement, items);
      tmp2.__nativeTag = arg0;
      tmp2.__internalInstanceHandle = arg2;
      tmp2.__viewConfig = arg1;
      return tmp2;
    }
  }
  closure_6.default(ReactNativeElement, arg0);
  let obj = {
    key: "offsetHeight",
    get() {
      return Math.round(closure_1_8.getBoundingClientRect(this, { includeTransform: false }).height);
    }
  };
  let items = [obj, , , , , , , , , , ];
  obj = {
    key: "offsetLeft",
    get() {
      const nativeElementReference = ReactNativeElement(closure_1_1[11]).getNativeElementReference(this);
      if (nativeElementReference != null) {
        const _Math = Math;
        return Math.round(closure_1_9.default.getOffset(nativeElementReference)[2]);
      } else {
        return 0;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "offsetParent",
    get() {
      const nativeElementReference = ReactNativeElement(closure_1_1[11]).getNativeElementReference(this);
      if (nativeElementReference != null) {
        const offset = closure_1_9.default.getOffset(nativeElementReference);
        if (offset[0] != null) {
          return ReactNativeElement(closure_1_1[11]).getPublicInstanceFromInstanceHandle(offset[0]);
        }
        const _default = closure_1_9.default;
      }
      return null;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "offsetTop",
    get() {
      const nativeElementReference = ReactNativeElement(closure_1_1[11]).getNativeElementReference(this);
      if (nativeElementReference != null) {
        const _Math = Math;
        return Math.round(closure_1_9.default.getOffset(nativeElementReference)[1]);
      } else {
        return 0;
      }
    }
  };
  items[4] = {
    key: "offsetWidth",
    get() {
      return Math.round(closure_1_8.getBoundingClientRect(this, { includeTransform: false }).width);
    }
  };
  items[5] = {
    key: "blur",
    value: function blur() {
      closure_1_7.default.blurTextInput(this);
    }
  };
  items[6] = {
    key: "focus",
    value: function focus() {
      closure_1_7.default.focusTextInput(this);
    }
  };
  items[7] = {
    key: "measure",
    value: function measure(arg0) {
      const nativeElementReference = ReactNativeElement(closure_1_1[11]).getNativeElementReference(this);
      if (nativeElementReference != null) {
        closure_1_10.default(ReactNativeElement(closure_1_1[12]).getFabricUIManager()).measure(nativeElementReference, arg0);
        const defaultResult = closure_1_10.default(ReactNativeElement(closure_1_1[12]).getFabricUIManager());
      }
    }
  };
  items[8] = {
    key: "measureInWindow",
    value: function measureInWindow(arg0) {
      const nativeElementReference = ReactNativeElement(closure_1_1[11]).getNativeElementReference(this);
      if (nativeElementReference != null) {
        closure_1_10.default(ReactNativeElement(closure_1_1[12]).getFabricUIManager()).measureInWindow(nativeElementReference, arg0);
        const defaultResult = closure_1_10.default(ReactNativeElement(closure_1_1[12]).getFabricUIManager());
      }
    }
  };
  items[9] = {
    key: "measureLayout",
    value: function measureLayout(arg0, arg1, arg2) {
      let tmp = arg1;
      let tmp2 = arg2;
      if (arg0 instanceof ReactNativeElement) {
        const self = this;
        const nativeElementReference = ReactNativeElement(closure_1_1[11]).getNativeElementReference(this);
        const nativeElementReference1 = ReactNativeElement(closure_1_1[11]).getNativeElementReference(arg0);
        if (nativeElementReference != null) {
          if (nativeElementReference1 != null) {
            const defaultResult = closure_1_10.default(ReactNativeElement(closure_1_1[12]).getFabricUIManager());
            if (tmp2 == null) {
              tmp2 = closure_1_11;
            }
            if (tmp == null) {
              tmp = closure_1_11;
            }
            defaultResult.measureLayout(nativeElementReference, nativeElementReference1, tmp2, tmp);
          }
        }
      }
    }
  };
  items[10] = {
    key: "setNativeProps",
    value: function setNativeProps(arg0) {
      const obj = ReactNativeElement(closure_1_1[13]).create(arg0, this.__viewConfig.validAttributes);
      const nativeElementReference = ReactNativeElement(closure_1_1[11]).getNativeElementReference(this);
      if (nativeElementReference != null) {
        if (obj != null) {
          closure_1_10.default(ReactNativeElement(closure_1_1[12]).getFabricUIManager()).setNativeProps(nativeElementReference, obj);
          const defaultResult = closure_1_10.default(ReactNativeElement(closure_1_1[12]).getFabricUIManager());
        }
      }
    }
  };
  return closure_3.default(ReactNativeElement, items);
})(_callSuper.default));
