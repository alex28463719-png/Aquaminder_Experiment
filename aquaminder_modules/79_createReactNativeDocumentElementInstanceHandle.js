// Module ID: 79
// Function ID: 1100
// Name: createReactNativeDocumentElementInstanceHandle
// Dependencies: [1, 13, 12]
// Exports: createReactNativeDocumentElementInstanceHandle, getNativeElementReferenceFromReactNativeDocumentElementInstanceHandle, getPublicInstanceFromReactNativeDocumentElementInstanceHandle, isReactNativeDocumentElementInstanceHandle, setNativeElementReferenceForReactNativeDocumentElementInstanceHandle, setPublicInstanceForReactNativeDocumentElementInstanceHandle

// Module 79 (createReactNativeDocumentElementInstanceHandle)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties2 from "_defineProperties" /* 13 */;
import module_1 from "module_1" /* 1 */;

const _defineProperties = module_1(_defineProperties2);
let closure_0 = module_1(_classCallCheck);
class ReactNativeDocumentElementInstanceHandleImpl {
  constructor() {
    defaultResult = closure_0.default(this, ReactNativeDocumentElementInstanceHandleImpl);
    return;
  }
}
let closure_1 = _defineProperties.default(ReactNativeDocumentElementInstanceHandleImpl);

export function createReactNativeDocumentElementInstanceHandle() {
  return new closure_1();
}
export function getNativeElementReferenceFromReactNativeDocumentElementInstanceHandle(nativeElementReference) {
  return nativeElementReference.nativeElementReference;
}
export function getPublicInstanceFromReactNativeDocumentElementInstanceHandle(publicInstance) {
  return publicInstance.publicInstance;
}
export function isReactNativeDocumentElementInstanceHandle(parentNode) {
  return parentNode instanceof closure_1;
}
export function setNativeElementReferenceForReactNativeDocumentElementInstanceHandle(reactNativeDocumentElementInstanceHandle, linkRootNodeResult) {
  reactNativeDocumentElementInstanceHandle.nativeElementReference = linkRootNodeResult;
}
export function setPublicInstanceForReactNativeDocumentElementInstanceHandle(reactNativeDocumentElementInstanceHandle, _default) {
  reactNativeDocumentElementInstanceHandle.publicInstance = _default;
}
