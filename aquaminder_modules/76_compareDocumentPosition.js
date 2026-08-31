// Module ID: 76
// Function ID: 1061
// Name: compareDocumentPosition
// Dependencies: [1, 36, 45]

// Module 76 (compareDocumentPosition)
import requireModule2 from "requireModule" /* 36 */;
import nullthrows from "nullthrows" /* 45 */;
import module_1 from "module_1" /* 1 */;

const requireModule = _interopRequireWildcard(requireModule2);
let closure_0 = module_1(nullthrows);
let closure_1 = requireModule.get("NativeDOMCxx");

export default {
  compareDocumentPosition(arg0, arg1) {
    return closure_0.default(closure_1).compareDocumentPosition(arg0, arg1);
  },
  getChildNodes(arg0) {
    return closure_0.default(closure_1).getChildNodes(arg0);
  },
  getParentNode(nativeNodeReference) {
    return closure_0.default(closure_1).getParentNode(nativeNodeReference);
  },
  isConnected(arg0) {
    return closure_0.default(closure_1).isConnected(arg0);
  },
  getBorderWidth(nativeElementReference) {
    return closure_0.default(closure_1).getBorderWidth(nativeElementReference);
  },
  getBoundingClientRect(arg0, arg1) {
    return closure_0.default(closure_1).getBoundingClientRect(arg0, arg1);
  },
  getInnerSize(nativeElementReference) {
    return closure_0.default(closure_1).getInnerSize(nativeElementReference);
  },
  getScrollPosition(nativeElementReference) {
    return closure_0.default(closure_1).getScrollPosition(nativeElementReference);
  },
  getScrollSize(nativeElementReference) {
    return closure_0.default(closure_1).getScrollSize(nativeElementReference);
  },
  getTagName(nativeElementReference) {
    return closure_0.default(closure_1).getTagName(nativeElementReference);
  },
  getTextContent(nativeElementReference) {
    return closure_0.default(closure_1).getTextContent(nativeElementReference);
  },
  hasPointerCapture(arg0, arg1) {
    return closure_0.default(closure_1).hasPointerCapture(arg0, arg1);
  },
  releasePointerCapture(arg0, arg1) {
    return closure_0.default(closure_1).releasePointerCapture(arg0, arg1);
  },
  setPointerCapture(arg0, arg1) {
    return closure_0.default(closure_1).setPointerCapture(arg0, arg1);
  },
  getOffset(nativeElementReference) {
    return closure_0.default(closure_1).getOffset(nativeElementReference);
  },
  linkRootNode(arg0, reactNativeDocumentElementInstanceHandle) {
    let linkRootNode;
    if (linkRootNode != null) {
      linkRootNode = linkRootNode.linkRootNode;
    }
    return closure_0.default(linkRootNode)(arg0, reactNativeDocumentElementInstanceHandle);
  },
  measure(arg0, arg1) {
    return closure_0.default(closure_1).measure(arg0, arg1);
  },
  measureInWindow(arg0, arg1) {
    return closure_0.default(closure_1).measureInWindow(arg0, arg1);
  },
  measureLayout(arg0, arg1, arg2, arg3) {
    return closure_0.default(closure_1).measureLayout(arg0, arg1, arg2, arg3);
  }
};
