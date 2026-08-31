// Module ID: 77
// Function ID: 1083
// Name: getRendererProxy
// Dependencies: [57, 78, 79]

// Module 77 (getRendererProxy)
import keys from "keys" /* 57 */;
import createReactNativeDocumentInstanceHandle from "createReactNativeDocumentInstanceHandle" /* 78 */;
import createReactNativeDocumentElementInstanceHandle from "createReactNativeDocumentElementInstanceHandle" /* 79 */;

require = arg1;
const dependencyMap = arg6;
function getRendererProxy() {
  if (closure_2 == null) {
    closure_2 = keys;
  }
  return closure_2;
}
function getInstanceHandle(arg0) {
  return arg0[closure_3];
}
arg5.getInstanceHandle = getInstanceHandle;
arg5.getNativeElementReference = function getNativeElementReference(arg0) {
  const tmp = getInstanceHandle(arg0);
  return getRendererProxy().getNodeFromInternalInstanceHandle(tmp);
};
arg5.getNativeNodeReference = function getNativeNodeReference(arg0) {
  const tmp = getInstanceHandle(arg0);
  if (createReactNativeDocumentInstanceHandle.isReactNativeDocumentInstanceHandle(tmp)) {
    return tmp2(78).getNativeNodeReferenceFromReactNativeDocumentInstanceHandle(tmp);
  } else if (tmp2(79).isReactNativeDocumentElementInstanceHandle(tmp)) {
    return createReactNativeDocumentElementInstanceHandle.getNativeElementReferenceFromReactNativeDocumentElementInstanceHandle(tmp);
  } else {
    return getRendererProxy().getNodeFromInternalInstanceHandle(tmp);
  }
};
arg5.getNativeTextReference = function getNativeTextReference(arg0) {
  const tmp = getInstanceHandle(arg0);
  return getRendererProxy().getNodeFromInternalInstanceHandle(tmp);
};
arg5.getOwnerDocument = function getOwnerDocument(arg0) {
  let tmp2 = null;
  if (arg0[closure_4] != null) {
    tmp2 = tmp;
  }
  return tmp2;
};
arg5.getPublicInstanceFromInstanceHandle = function getPublicInstanceFromInstanceHandle(parentNode) {
  if (createReactNativeDocumentInstanceHandle.isReactNativeDocumentInstanceHandle(parentNode)) {
    return tmp(78).getPublicInstanceFromReactNativeDocumentInstanceHandle(parentNode);
  } else if (tmp(79).isReactNativeDocumentElementInstanceHandle(parentNode)) {
    return createReactNativeDocumentElementInstanceHandle.getPublicInstanceFromReactNativeDocumentElementInstanceHandle(parentNode);
  } else {
    return getRendererProxy().getPublicInstanceFromInternalInstanceHandle(parentNode);
  }
};
arg5.setInstanceHandle = function setInstanceHandle(arg0, __internalInstanceHandle) {
  arg0[closure_3] = __internalInstanceHandle;
};
arg5.setOwnerDocument = function setOwnerDocument(arg0, arg1) {
  arg0[closure_4] = arg1;
};
let closure_3 = Symbol("internalInstanceHandle");
let closure_4 = Symbol("ownerDocument");
