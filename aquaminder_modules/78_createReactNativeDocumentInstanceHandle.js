// Module ID: 78
// Function ID: 1093
// Name: createReactNativeDocumentInstanceHandle
// Dependencies: [57]
// Exports: createReactNativeDocumentInstanceHandle, getNativeNodeReferenceFromReactNativeDocumentInstanceHandle, getPublicInstanceFromReactNativeDocumentInstanceHandle, isReactNativeDocumentInstanceHandle

// Module 78 (createReactNativeDocumentInstanceHandle)
import keys from "keys" /* 57 */;

let closure_0 = _interopRequireWildcard(keys);

export function createReactNativeDocumentInstanceHandle(arg0) {
  return arg0;
}
export function getNativeNodeReferenceFromReactNativeDocumentInstanceHandle(arg0) {
  return arg0;
}
export function getPublicInstanceFromReactNativeDocumentInstanceHandle(parentNode) {
  return publicInstanceFromRootTag.getPublicInstanceFromRootTag(Number(parentNode));
}
export function isReactNativeDocumentInstanceHandle(parentNode) {
  let tmp = typeof parentNode === "number";
  if (tmp) {
    tmp = parentNode % 10 === 1;
  }
  return tmp;
}
