// Module ID: 130
// Function ID: 1471
// Name: _callSuper
// Dependencies: [1, 12, 13, 23, 25, 28, 72, 76, 81, 77]

// Module 130 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _inherits from "_inherits" /* 28 */;
import getChildNodes2 from "getChildNodes" /* 72 */;
import compareDocumentPosition from "compareDocumentPosition" /* 76 */;
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
const getChildNodes = module_1(getChildNodes2);
let closure_7 = module_1(compareDocumentPosition);

export default ((arg0) => {
  class ReadOnlyCharacterData {
    constructor() {
      defaultResult = closure_1_2.default(this, ReadOnlyCharacterData);
      return closure_1_8(this, ReadOnlyCharacterData, arguments);
    }
  }
  closure_6.default(ReadOnlyCharacterData, arg0);
  let obj = {
    key: "nextElementSibling",
    get() {
      return ReadOnlyCharacterData(closure_1_1[8]).getElementSibling(this, "next");
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "previousElementSibling",
    get() {
      return ReadOnlyCharacterData(closure_1_1[8]).getElementSibling(this, "previous");
    }
  };
  items[1] = obj;
  obj = {
    key: "data",
    get() {
      const nativeTextReference = ReadOnlyCharacterData(closure_1_1[9]).getNativeTextReference(this);
      if (nativeTextReference != null) {
        return closure_1_7.default.getTextContent(nativeTextReference);
      } else {
        return "";
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "length",
    get() {
      return this.data.length;
    }
  };
  items[4] = {
    key: "textContent",
    get() {
      return this.data;
    }
  };
  items[5] = {
    key: "nodeValue",
    get() {
      return this.data;
    }
  };
  items[6] = {
    key: "substringData",
    value: function substringData(arg0, arg1) {
      let length = arg1;
      const data = this.data;
      if (arg0 < 0) {
        const _TypeError2 = TypeError;
        const _HermesInternal2 = HermesInternal;
        const typeError = new TypeError("Failed to execute 'substringData' on 'CharacterData': The offset " + arg0 + " is negative.");
        throw typeError;
      } else if (arg0 > data.length) {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const typeError1 = new TypeError("Failed to execute 'substringData' on 'CharacterData': The offset " + arg0 + " is greater than the node's length (" + data.length + ").");
        throw typeError1;
      } else {
        if (length < 0) {
          length = data.length;
        }
        return data.slice(arg0, arg0 + length);
      }
    }
  };
  return closure_3.default(ReadOnlyCharacterData, items);
})(getChildNodes.default);
