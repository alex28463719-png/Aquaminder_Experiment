// Module ID: 58
// Function ID: 456
// Name: keys
// Dependencies: [59, 272, 273]

// Module 58 (keys)
import ReactFabric from "ReactFabric" /* 59 */;
import getIteratorFn from "getIteratorFn" /* 273 */;

const global = arg0;
require = arg1;
const dependencyMap = arg6;
arg5.dispatchCommand = function dispatchCommand(result, blur, items) {
  if (global.RN$Bridgeless === true) {
    return ReactFabric.default.dispatchCommand(result, blur, items);
  } else {
    return getIteratorFn.default.dispatchCommand(result, blur, items);
  }
};
arg5.findHostInstance_DEPRECATED = function findHostInstance_DEPRECATED(arg0) {
  return getIteratorFn.default.findHostInstance_DEPRECATED(arg0);
};
arg5.findNodeHandle = function findNodeHandle(arg0) {
  return getIteratorFn.default.findNodeHandle(arg0);
};
arg5.getNodeFromInternalInstanceHandle = function getNodeFromInternalInstanceHandle(__internalInstanceHandle) {
  return ReactFabric.default.getNodeFromInternalInstanceHandle(__internalInstanceHandle);
};
arg5.getPublicInstanceFromInternalInstanceHandle = function getPublicInstanceFromInternalInstanceHandle(parentNode) {
  return ReactFabric.default.getPublicInstanceFromInternalInstanceHandle(parentNode);
};
arg5.getPublicInstanceFromRootTag = function getPublicInstanceFromRootTag(arg0) {
  return ReactFabric.default.getPublicInstanceFromRootTag(arg0);
};
arg5.isChildPublicInstance = function isChildPublicInstance(arg0, arg1) {
  return getIteratorFn.default.isChildPublicInstance(arg0, arg1);
};
arg5.isProfilingRenderer = function isProfilingRenderer() {
  return Boolean(false);
};
arg5.renderElement = function renderElement(useFabric) {
  ({ element, rootTag, useConcurrentRoot } = useFabric);
  if (useFabric.useFabric) {
    const _default2 = tmp(59).default;
    let obj = { onCaughtError: tmp(272).onCaughtError, onUncaughtError: tmp(272).onUncaughtError, onRecoverableError: tmp(272).onRecoverableError };
    _default2.render(element, rootTag, null, useConcurrentRoot, obj);
  } else {
    const _default = tmp(273).default;
    obj = { onCaughtError: tmp(272).onCaughtError, onUncaughtError: tmp(272).onUncaughtError, onRecoverableError: tmp(272).onRecoverableError };
    _default.render(element, rootTag, undefined, obj);
  }
};
arg5.sendAccessibilityEvent = function sendAccessibilityEvent(arg0, arg1) {
  return getIteratorFn.default.sendAccessibilityEvent(arg0, arg1);
};
arg5.unmountComponentAtNodeAndRemoveContainer = function unmountComponentAtNodeAndRemoveContainer(arg0) {
  const result = getIteratorFn.default.unmountComponentAtNodeAndRemoveContainer(arg0);
};
arg5.unstable_batchedUpdates = function unstable_batchedUpdates(arg0, arg1) {
  return getIteratorFn.default.unstable_batchedUpdates(arg0, arg1);
};
