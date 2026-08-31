// Module ID: 47
// Function ID: 405
// Name: createProxyWithCachedProperties
// Dependencies: [1, 42]
// Exports: getFabricUIManager

// Module 47 (createProxyWithCachedProperties)
import defineLazyObjectProperty from "defineLazyObjectProperty" /* 42 */;
import module_1 from "module_1" /* 1 */;

function createProxyWithCachedProperties(nativeFabricUIManager, closure_3) {
  closure_0 = nativeFabricUIManager;
  let obj = Object.create(nativeFabricUIManager);
  function _loop(item10010) {
    closure_0 = item10010;
    obj = {
      get() {
        return item10010[item10010];
      }
    };
    obj.default(obj, item10010, obj);
  }
  for (const item10010 of arg1) {
    let tmp2 = _loop;
    let _loopResult = _loop(item10010);
    continue;
  }
  return obj;
}
let closure_1 = module_1(defineLazyObjectProperty);
let closure_3 = ["createNode", "cloneNode", "cloneNodeWithNewChildren", "cloneNodeWithNewProps", "cloneNodeWithNewChildrenAndProps", "createChildSet", "appendChild", "appendChildToSet", "completeRoot", "measure", "measureInWindow", "measureLayout", "configureNextLayoutAnimation", "sendAccessibilityEvent", "findShadowNodeByTag_DEPRECATED", "setNativeProps", "dispatchCommand", "compareDocumentPosition", "getBoundingClientRect"];

export function getFabricUIManager() {
  if (closure_2 == null) {
    if (global.nativeFabricUIManager != null) {
      closure_2 = createProxyWithCachedProperties(global.nativeFabricUIManager, closure_3);
    }
  }
  return closure_2;
}
