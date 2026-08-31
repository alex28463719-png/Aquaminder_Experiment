// Module ID: 268
// Function ID: 2730
// Name: getReactNativeDocumentModule
// Dependencies: [73, 82, 83, 269, 131, 57]
// Exports: createPublicInstance, createPublicRootInstance, createPublicTextInstance, getInternalInstanceHandleFromPublicInstance, getNativeTagFromPublicInstance, getNodeFromPublicInstance

// Module 268 (getReactNativeDocumentModule)
import keys from "keys" /* 57 */;
import animatedShouldDebounceQueueFlush from "animatedShouldDebounceQueueFlush" /* 73 */;
import _callSuper from "_callSuper" /* 82 */;
import _callSuper2 from "_callSuper" /* 83 */;
import _callSuper3 from "_callSuper" /* 131 */;
import noop from "noop" /* 269 */;

function getReactNativeDocumentModule() {
  if (closure_3 == null) {
    closure_3 = _callSuper;
  }
  return closure_3;
}
function getReactNativeElementClass() {
  if (closure_5 == null) {
    closure_5 = _callSuper2.default;
  }
  return closure_5;
}
function getReactFabricHostComponentClass() {
  if (closure_4 == null) {
    closure_4 = noop.default;
  }
  return closure_4;
}
function getReadOnlyTextClass() {
  if (closure_6 == null) {
    closure_6 = _callSuper3.default;
  }
  return closure_6;
}
let closure_2 = _interopRequireWildcard(animatedShouldDebounceQueueFlush);

export function createPublicInstance(arg0, arg1, arg2, arg3) {
  if (closure_2.enableAccessToHostTreeInFabric()) {
    let tmp11 = getReactNativeElementClass();
    const prototype2 = tmp11.prototype;
    tmp11 = new tmp11(arg0, arg1, arg2, arg3);
    return tmp11;
  } else {
    let tmp2 = getReactFabricHostComponentClass();
    const prototype = tmp2.prototype;
    tmp2 = new tmp2(arg0, arg1, arg2);
    return tmp2;
  }
}
export function createPublicRootInstance(arg0) {
  if (closure_2.enableAccessToHostTreeInFabric()) {
    if (closure_2.enableDOMDocumentAPI()) {
      return getReactNativeDocumentModule().createReactNativeDocument(arg0);
    }
  }
  return null;
}
export function createPublicTextInstance(stateNode) {
  let tmp = getReadOnlyTextClass();
  tmp = new tmp(stateNode, arg1);
  return tmp;
}
export function getInternalInstanceHandleFromPublicInstance(_internalInstanceHandle) {
  return _internalInstanceHandle._internalInstanceHandle != null ? _internalInstanceHandle._internalInstanceHandle : _internalInstanceHandle.__internalInstanceHandle;
}
export function getNativeTagFromPublicInstance(__nativeTag) {
  return __nativeTag.__nativeTag;
}
export function getNodeFromPublicInstance(__internalInstanceHandle) {
  if (__internalInstanceHandle.__internalInstanceHandle == null) {
    return null;
  } else {
    if (nodeFromInternalInstanceHandle == null) {
      nodeFromInternalInstanceHandle = keys;
    }
    return nodeFromInternalInstanceHandle.getNodeFromInternalInstanceHandle(__internalInstanceHandle.__internalInstanceHandle);
  }
}
