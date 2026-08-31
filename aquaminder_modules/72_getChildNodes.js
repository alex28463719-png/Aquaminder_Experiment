// Module ID: 72
// Function ID: 1021
// Name: getChildNodes
// Dependencies: [1, 38, 12, 13, 73, 76, 77, 71, 80]

// Module 72 (getChildNodes)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _slicedToArray from "_slicedToArray" /* 38 */;
import animatedShouldDebounceQueueFlush from "animatedShouldDebounceQueueFlush" /* 73 */;
import compareDocumentPosition from "compareDocumentPosition" /* 76 */;
import getRendererProxy from "getRendererProxy" /* 77 */;
import _callSuper from "_callSuper" /* 80 */;
import module_1 from "module_1" /* 1 */;

function getChildNodes(arg0) {
  const nativeNodeReference = getRendererProxy.getNativeNodeReference(arg0);
  if (nativeNodeReference == null) {
    return [];
  } else {
    const childNodes = mod.default.getChildNodes(nativeNodeReference);
    const mapped = childNodes.map((parentNode) => closure_1_0(closure_1_1[6]).getPublicInstanceFromInstanceHandle(parentNode));
    const _Boolean = Boolean;
    return mapped.filter(Boolean);
  }
}
function getNodeSiblingsAndPosition(parentNode) {
  parentNode = parentNode.parentNode;
  if (parentNode == null) {
    const items = [parentNode];
    const items1 = [items, 0];
    return items1;
  } else {
    const arr = getChildNodes(parentNode);
    const index = arr.indexOf(parentNode);
    if (index === -1) {
      const _TypeError = TypeError;
      const typeError = new TypeError("Missing node in parent's child node list");
      throw typeError;
    } else {
      const items2 = [arr, index];
      return items2;
    }
  }
}
function getReadOnlyElementClass() {
  if (closure_7 == null) {
    closure_7 = _callSuper.default;
  }
  return closure_7;
}
let closure_2 = module_1(_slicedToArray);
let closure_3 = module_1(_classCallCheck);
let closure_4 = module_1(_defineProperties);
let closure_5 = _interopRequireWildcard(animatedShouldDebounceQueueFlush);
let closure_6 = module_1(compareDocumentPosition);
let tmp3 = (() => {
  class ReadOnlyNode {
    constructor(arg0, arg1) {
      defaultResult = closure_1_3.default(this, ReadOnlyNode);
      setOwnerDocumentResult = ReadOnlyNode(closure_1_1[6]).setOwnerDocument(this, arg1);
      setInstanceHandleResult = ReadOnlyNode(closure_1_1[6]).setInstanceHandle(this, arg0);
      return;
    }
  }
  let obj = {
    key: "childNodes",
    get() {
      return ReadOnlyNode(closure_1_1[7]).createNodeList(closure_1_9(this));
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , ];
  obj = {
    key: "firstChild",
    get() {
      const arr = closure_1_9(this);
      if (arr.length === 0) {
        return null;
      } else {
        return arr[0];
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "isConnected",
    get() {
      const nativeNodeReference = ReadOnlyNode(closure_1_1[6]).getNativeNodeReference(this);
      if (nativeNodeReference == null) {
        return false;
      } else {
        return closure_1_6.default.isConnected(nativeNodeReference);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "lastChild",
    get() {
      const arr = closure_1_9(this);
      if (arr.length === 0) {
        return null;
      } else {
        return arr[arr.length - 1];
      }
    }
  };
  items[4] = {
    key: "nextSibling",
    get() {
      const defaultResult = closure_1_2.default(closure_1_10(this), 2);
      const first = defaultResult[0];
      if (defaultResult[1] === first.length - 1) {
        return null;
      } else {
        return first[tmp2 + 1];
      }
    }
  };
  items[5] = {
    key: "nodeName",
    get() {
      const typeError = new TypeError("`nodeName` is abstract and must be implemented in a subclass of `ReadOnlyNode`");
      throw typeError;
    }
  };
  items[6] = {
    key: "nodeType",
    get() {
      const typeError = new TypeError("`nodeType` is abstract and must be implemented in a subclass of `ReadOnlyNode`");
      throw typeError;
    }
  };
  items[7] = {
    key: "nodeValue",
    get() {
      const typeError = new TypeError("`nodeValue` is abstract and must be implemented in a subclass of `ReadOnlyNode`");
      throw typeError;
    }
  };
  items[8] = {
    key: "ownerDocument",
    get() {
      return ReadOnlyNode(closure_1_1[6]).getOwnerDocument(this);
    }
  };
  items[9] = {
    key: "parentElement",
    get() {
      const parentNode = this.parentNode;
      if (parentNode instanceof closure_1_11()) {
        return parentNode;
      } else {
        return null;
      }
    }
  };
  items[10] = {
    key: "parentNode",
    get() {
      const nativeNodeReference = ReadOnlyNode(closure_1_1[6]).getNativeNodeReference(this);
      if (nativeNodeReference == null) {
        return null;
      } else {
        const parentNode = closure_1_6.default.getParentNode(nativeNodeReference);
        if (parentNode == null) {
          return null;
        } else {
          const publicInstanceFromInstanceHandle = ReadOnlyNode(closure_1_1[6]).getPublicInstanceFromInstanceHandle(parentNode);
          let tmp7 = null;
          if (publicInstanceFromInstanceHandle != null) {
            tmp7 = publicInstanceFromInstanceHandle;
          }
          return tmp7;
        }
        const _default = closure_1_6.default;
      }
    }
  };
  items[11] = {
    key: "previousSibling",
    get() {
      const tmp3 = closure_1_2.default(closure_1_10(this), 2)[1];
      if (tmp3 === 0) {
        return null;
      } else {
        return tmp2[tmp3 - 1];
      }
      const defaultResult = closure_1_2.default(closure_1_10(this), 2);
    }
  };
  items[12] = {
    key: "textContent",
    get() {
      const typeError = new TypeError("`textContent` is abstract and must be implemented in a subclass of `ReadOnlyNode`");
      throw typeError;
    }
  };
  items[13] = {
    key: "compareDocumentPosition",
    value: function compareDocumentPosition(arg0) {
      if (arg0 === this) {
        return 0;
      } else {
        const nativeNodeReference = ReadOnlyNode(closure_1_1[6]).getNativeNodeReference(tmp);
        const nativeNodeReference1 = ReadOnlyNode(closure_1_1[6]).getNativeNodeReference(arg0);
        if (nativeNodeReference != null) {
          if (nativeNodeReference1 != null) {
            return closure_1_6.default.compareDocumentPosition(nativeNodeReference, nativeNodeReference1);
          }
        }
        return ReadOnlyNode.DOCUMENT_POSITION_DISCONNECTED;
      }
    }
  };
  items[14] = {
    key: "contains",
    value: function contains(arg0) {
      const self = this;
      if (arg0 === this) {
        return true;
      } else {
        return (self.compareDocumentPosition(arg0) & ReadOnlyNode.DOCUMENT_POSITION_CONTAINED_BY) !== 0;
      }
    }
  };
  items[15] = {
    key: "getRootNode",
    value: function getRootNode() {
      let self = this;
      if (closure_1_5.enableDOMDocumentAPI()) {
        if (self.isConnected) {
          const ownerDocument = self.ownerDocument;
          if (ownerDocument != null) {
            self = ownerDocument;
          }
          return self;
        } else {
          return self;
        }
      } else {
        let parentNode = self.parentNode;
        let tmp2 = self;
        if (parentNode != null) {
          do {
            tmp2 = parentNode;
            parentNode = parentNode.parentNode;
          } while (tmp3 != null);
        }
        return tmp2;
      }
    }
  };
  items[16] = {
    key: "hasChildNodes",
    value: function hasChildNodes() {
      return closure_1_9(this).length > 0;
    }
  };
  return closure_4.default(ReadOnlyNode, items);
})();
tmp3.ELEMENT_NODE = 1;
tmp3.ATTRIBUTE_NODE = 2;
tmp3.TEXT_NODE = 3;
tmp3.CDATA_SECTION_NODE = 4;
tmp3.ENTITY_REFERENCE_NODE = 5;
tmp3.ENTITY_NODE = 6;
tmp3.PROCESSING_INSTRUCTION_NODE = 7;
tmp3.COMMENT_NODE = 8;
tmp3.DOCUMENT_NODE = 9;
tmp3.DOCUMENT_TYPE_NODE = 10;
tmp3.DOCUMENT_FRAGMENT_NODE = 11;
tmp3.NOTATION_NODE = 12;
tmp3.DOCUMENT_POSITION_DISCONNECTED = 1;
tmp3.DOCUMENT_POSITION_PRECEDING = 2;
tmp3.DOCUMENT_POSITION_FOLLOWING = 4;
tmp3.DOCUMENT_POSITION_CONTAINS = 8;
tmp3.DOCUMENT_POSITION_CONTAINED_BY = 16;
tmp3.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = 32;

export { getChildNodes };
export default tmp3;
