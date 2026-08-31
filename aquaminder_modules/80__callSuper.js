// Module ID: 80
// Function ID: 1108
// Name: _callSuper
// Dependencies: [1, 12, 13, 23, 25, 28, 66, 72, 76, 70, 77, 81]

// Module 80 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _inherits from "_inherits" /* 28 */;
import _callSuper2 from "_callSuper" /* 66 */;
import getChildNodes2 from "getChildNodes" /* 72 */;
import compareDocumentPosition from "compareDocumentPosition" /* 76 */;
import getRendererProxy from "getRendererProxy" /* 77 */;
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
function getChildElements(arg0) {
  const childNodes = getChildNodes.getChildNodes(arg0);
  return childNodes.filter((arg0) => arg0 instanceof closure_1_10);
}
function _getBoundingClientRect(arg0, includeTransform) {
  const nativeElementReference = getRendererProxy.getNativeElementReference(arg0);
  if (nativeElementReference != null) {
    const boundingClientRect = mod2.default.getBoundingClientRect(nativeElementReference, includeTransform.includeTransform);
    let _default3 = mod.default;
    const prototype2 = _default3.prototype;
    _default3 = new _default3(boundingClientRect[0], boundingClientRect[1], boundingClientRect[2], boundingClientRect[3]);
    return _default3;
  } else {
    let _default = mod.default;
    const prototype = _default.prototype;
    _default = new _default(0, 0, 0, 0);
    return _default;
  }
}
let closure_2 = module_1(_classCallCheck);
let closure_3 = module_1(_defineProperties);
let closure_4 = module_1(_possibleConstructorReturn);
let closure_5 = module_1(_getPrototypeOf);
let closure_6 = module_1(_inherits);
let closure_7 = module_1(_callSuper2);
const getChildNodes = _interopRequireWildcard(getChildNodes2);
let closure_9 = module_1(compareDocumentPosition);
const tmp4 = ((arg0) => {
  class ReadOnlyElement {
    constructor() {
      defaultResult = closure_1_2.default(this, ReadOnlyElement);
      return closure_1_12(this, ReadOnlyElement, arguments);
    }
  }
  closure_6.default(ReadOnlyElement, arg0);
  let obj = {
    key: "childElementCount",
    get() {
      return closure_1_14(this).length;
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "children",
    get() {
      return ReadOnlyElement(closure_1_1[9]).createHTMLCollection(closure_1_14(this));
    }
  };
  items[1] = obj;
  obj = {
    key: "clientHeight",
    get() {
      const nativeElementReference = ReadOnlyElement(closure_1_1[10]).getNativeElementReference(this);
      if (nativeElementReference != null) {
        return closure_1_9.default.getInnerSize(nativeElementReference)[1];
      } else {
        return 0;
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "clientLeft",
    get() {
      const nativeElementReference = ReadOnlyElement(closure_1_1[10]).getNativeElementReference(this);
      if (nativeElementReference != null) {
        return closure_1_9.default.getBorderWidth(nativeElementReference)[3];
      } else {
        return 0;
      }
    }
  };
  items[4] = {
    key: "clientTop",
    get() {
      const nativeElementReference = ReadOnlyElement(closure_1_1[10]).getNativeElementReference(this);
      if (nativeElementReference != null) {
        return closure_1_9.default.getBorderWidth(nativeElementReference)[0];
      } else {
        return 0;
      }
    }
  };
  items[5] = {
    key: "clientWidth",
    get() {
      const nativeElementReference = ReadOnlyElement(closure_1_1[10]).getNativeElementReference(this);
      if (nativeElementReference != null) {
        return closure_1_9.default.getInnerSize(nativeElementReference)[0];
      } else {
        return 0;
      }
    }
  };
  items[6] = {
    key: "firstElementChild",
    get() {
      const arr = closure_1_14(this);
      if (arr.length === 0) {
        return null;
      } else {
        return arr[0];
      }
    }
  };
  items[7] = {
    key: "id",
    get() {
      const instanceHandle = ReadOnlyElement(closure_1_1[10]).getInstanceHandle(this);
      let currentProps;
      if (instanceHandle != null) {
        const stateNode = instanceHandle.stateNode;
        if (stateNode != null) {
          const canonical = stateNode.canonical;
          if (canonical != null) {
            currentProps = canonical.currentProps;
          }
        }
      }
      let id;
      if (currentProps != null) {
        id = currentProps.id;
      }
      if (id == null) {
        let nativeID;
        if (currentProps != null) {
          nativeID = currentProps.nativeID;
        }
        id = nativeID;
      }
      let str = "";
      if (id != null) {
        str = id;
      }
      return str;
    }
  };
  items[8] = {
    key: "lastElementChild",
    get() {
      const arr = closure_1_14(this);
      if (arr.length === 0) {
        return null;
      } else {
        return arr[arr.length - 1];
      }
    }
  };
  items[9] = {
    key: "nextElementSibling",
    get() {
      return ReadOnlyElement(closure_1_1[11]).getElementSibling(this, "next");
    }
  };
  items[10] = {
    key: "nodeName",
    get() {
      return this.tagName;
    }
  };
  items[11] = {
    key: "nodeType",
    get() {
      return closure_1_8.default.ELEMENT_NODE;
    }
  };
  items[12] = {
    key: "nodeValue",
    get() {
      return null;
    },
    set(arg0) {

    }
  };
  items[13] = {
    key: "previousElementSibling",
    get() {
      return ReadOnlyElement(closure_1_1[11]).getElementSibling(this, "previous");
    }
  };
  items[14] = {
    key: "scrollHeight",
    get() {
      const nativeElementReference = ReadOnlyElement(closure_1_1[10]).getNativeElementReference(this);
      if (nativeElementReference != null) {
        return closure_1_9.default.getScrollSize(nativeElementReference)[1];
      } else {
        return 0;
      }
    }
  };
  items[15] = {
    key: "scrollLeft",
    get() {
      const nativeElementReference = ReadOnlyElement(closure_1_1[10]).getNativeElementReference(this);
      if (nativeElementReference != null) {
        return closure_1_9.default.getScrollPosition(nativeElementReference)[0];
      } else {
        return 0;
      }
    }
  };
  items[16] = {
    key: "scrollTop",
    get() {
      const nativeElementReference = ReadOnlyElement(closure_1_1[10]).getNativeElementReference(this);
      if (nativeElementReference != null) {
        return closure_1_9.default.getScrollPosition(nativeElementReference)[1];
      } else {
        return 0;
      }
    }
  };
  items[17] = {
    key: "scrollWidth",
    get() {
      const nativeElementReference = ReadOnlyElement(closure_1_1[10]).getNativeElementReference(this);
      if (nativeElementReference != null) {
        return closure_1_9.default.getScrollSize(nativeElementReference)[0];
      } else {
        return 0;
      }
    }
  };
  items[18] = {
    key: "tagName",
    get() {
      const nativeElementReference = ReadOnlyElement(closure_1_1[10]).getNativeElementReference(this);
      if (nativeElementReference != null) {
        return closure_1_9.default.getTagName(nativeElementReference);
      } else {
        return "";
      }
    }
  };
  items[19] = {
    key: "textContent",
    get() {
      const nativeElementReference = ReadOnlyElement(closure_1_1[10]).getNativeElementReference(this);
      if (nativeElementReference != null) {
        return closure_1_9.default.getTextContent(nativeElementReference);
      } else {
        return "";
      }
    }
  };
  items[20] = {
    key: "getBoundingClientRect",
    value: function getBoundingClientRect() {
      return closure_1_15(this, { includeTransform: true });
    }
  };
  items[21] = {
    key: "hasPointerCapture",
    value: function hasPointerCapture(arg0) {
      const nativeElementReference = ReadOnlyElement(closure_1_1[10]).getNativeElementReference(this);
      if (nativeElementReference != null) {
        return closure_1_9.default.hasPointerCapture(nativeElementReference, arg0);
      } else {
        return false;
      }
    }
  };
  items[22] = {
    key: "setPointerCapture",
    value: function setPointerCapture(arg0) {
      const nativeElementReference = ReadOnlyElement(closure_1_1[10]).getNativeElementReference(this);
      if (nativeElementReference != null) {
        closure_1_9.default.setPointerCapture(nativeElementReference, arg0);
        const _default = closure_1_9.default;
      }
    }
  };
  items[23] = {
    key: "releasePointerCapture",
    value: function releasePointerCapture(arg0) {
      const nativeElementReference = ReadOnlyElement(closure_1_1[10]).getNativeElementReference(this);
      if (nativeElementReference != null) {
        const result = closure_1_9.default.releasePointerCapture(nativeElementReference, arg0);
        const _default = closure_1_9.default;
      }
    }
  };
  return closure_3.default(ReadOnlyElement, items);
})(getChildNodes.default);
let closure_10 = tmp4;

export const getBoundingClientRect = _getBoundingClientRect;
export default tmp4;
