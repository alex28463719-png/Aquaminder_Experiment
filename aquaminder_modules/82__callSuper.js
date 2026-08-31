// Module ID: 82
// Function ID: 1147
// Name: _callSuper
// Dependencies: [1, 12, 13, 23, 25, 28, 83, 72, 76, 70, 79, 78]
// Exports: createReactNativeDocument

// Module 82 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _inherits from "_inherits" /* 28 */;
import getChildNodes2 from "getChildNodes" /* 72 */;
import compareDocumentPosition from "compareDocumentPosition" /* 76 */;
import createReactNativeDocumentInstanceHandle from "createReactNativeDocumentInstanceHandle" /* 78 */;
import createReactNativeDocumentElementInstanceHandle from "createReactNativeDocumentElementInstanceHandle" /* 79 */;
import _callSuper2 from "_callSuper" /* 83 */;
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
function createDocumentElement(arg0, arg1) {
  const reactNativeDocumentElementInstanceHandle = createReactNativeDocumentElementInstanceHandle.createReactNativeDocumentElementInstanceHandle();
  let _default = new mod.default(arg0, null, reactNativeDocumentElementInstanceHandle, arg1);
  _default = mod2.default;
  const result = createReactNativeDocumentElementInstanceHandle.setNativeElementReferenceForReactNativeDocumentElementInstanceHandle(reactNativeDocumentElementInstanceHandle, _default.linkRootNode(arg0, reactNativeDocumentElementInstanceHandle));
  const result1 = createReactNativeDocumentElementInstanceHandle.setPublicInstanceForReactNativeDocumentElementInstanceHandle(reactNativeDocumentElementInstanceHandle, _default);
  return _default;
}
let closure_2 = module_1(_classCallCheck);
let closure_3 = module_1(_defineProperties);
let closure_4 = module_1(_possibleConstructorReturn);
let closure_5 = module_1(_getPrototypeOf);
let closure_6 = module_1(_inherits);
let closure_7 = module_1(_callSuper2);
const getChildNodes = module_1(getChildNodes2);
let closure_9 = module_1(compareDocumentPosition);
const tmp4 = ((arg0) => {
  class ReactNativeDocument {
    constructor(arg0, arg1) {
      defaultResult = closure_1_2.default(this, ReactNativeDocument);
      items = [, ];
      items[0] = arg1;
      items[1] = null;
      tmp2 = closure_1_11(this, ReactNativeDocument, items);
      tmp2._documentElement = closure_1_13(arg0, tmp2);
      return tmp2;
    }
  }
  closure_6.default(ReactNativeDocument, arg0);
  let obj = {
    key: "childElementCount",
    get() {
      return 1;
    }
  };
  let items = [obj, , , , , , , , ];
  obj = {
    key: "children",
    get() {
      const items = [this.documentElement];
      return ReactNativeDocument(closure_1_1[9]).createHTMLCollection(items);
    }
  };
  items[1] = obj;
  obj = {
    key: "documentElement",
    get() {
      return this._documentElement;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "firstElementChild",
    get() {
      return this.documentElement;
    }
  };
  items[4] = {
    key: "lastElementChild",
    get() {
      return this.documentElement;
    }
  };
  items[5] = {
    key: "nodeName",
    get() {
      return "#document";
    }
  };
  items[6] = {
    key: "nodeType",
    get() {
      return closure_1_8.default.DOCUMENT_NODE;
    }
  };
  items[7] = {
    key: "nodeValue",
    get() {
      return null;
    }
  };
  items[8] = {
    key: "textContent",
    get() {
      return null;
    }
  };
  return closure_3.default(ReactNativeDocument, items);
})(getChildNodes.default);
let closure_10 = tmp4;

export function createReactNativeDocument(arg0) {
  return new closure_10(arg0, createReactNativeDocumentInstanceHandle.createReactNativeDocumentInstanceHandle(arg0));
}
export default tmp4;
