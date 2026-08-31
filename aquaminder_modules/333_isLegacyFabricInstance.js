// Module ID: 333
// Function ID: 4053
// Name: isLegacyFabricInstance
// Dependencies: []

// Module 333 (isLegacyFabricInstance)
function isLegacyFabricInstance(_internalInstanceHandle) {
  return _internalInstanceHandle != null && _internalInstanceHandle._internalInstanceHandle != null && _internalInstanceHandle._internalInstanceHandle.stateNode != null && _internalInstanceHandle._internalInstanceHandle.stateNode.canonical != null;
}
arg5.isPublicInstance = function isPublicInstance(nativeScrollRef) {
  let tmp = nativeScrollRef != null;
  if (tmp) {
    let tmp2 = nativeScrollRef.__nativeTag != null;
    if (!tmp2) {
      tmp2 = isLegacyFabricInstance(nativeScrollRef);
    }
    tmp = tmp2;
  }
  return tmp;
};
