// Module ID: 46
// Function ID: 370
// Name: raiseSoftError
// Dependencies: [1, 42, 33, 45, 47, 48]

// Module 46 (raiseSoftError)
import get_Version from "get Version" /* 33 */;
import defineLazyObjectProperty from "defineLazyObjectProperty" /* 42 */;
import nullthrows from "nullthrows" /* 45 */;
import createProxyWithCachedProperties from "createProxyWithCachedProperties" /* 47 */;
import unstable_hasComponent2 from "unstable_hasComponent" /* 48 */;
import module_1 from "module_1" /* 1 */;

function raiseSoftError(clearJSResponder, arg1) {
  let str = "";
  const combined = "[ReactNative Architecture][JS] '" + clearJSResponder + "' is not available in the new React Native architecture.";
  if (arg1) {
    const _HermesInternal = HermesInternal;
    str = " " + arg1;
  }
  console.error(combined + str);
}
let closure_2 = module_1(defineLazyObjectProperty);
get_Version = module_1(get_Version);
let closure_3 = module_1(nullthrows);
const RN$LegacyInterop_UIManager_getConstants = global.RN$LegacyInterop_UIManager_getConstants;
const tmp4 = (() => {
  c0 = false;
  closure_1 = {};
  return () => {
    if (!c0) {
      closure_1 = closure_1_3.default(closure_1_4)();
      c0 = true;
    }
    return closure_1;
  };
})();
let closure_5 = tmp4;
({ RN$LegacyInterop_UIManager_getConstantsForViewManager: closure_6, RN$LegacyInterop_UIManager_getDefaultEventTypes: closure_7 } = global);
let closure_8 = (() => {
  c0 = false;
  c1 = null;
  return () => {
    if (!c0) {
      closure_1 = closure_1_3.default(closure_1_7)();
      c0 = true;
    }
    return closure_1;
  };
})();
let obj = {
  measure(arg0, arg1) {
    raiseSoftError("measure");
  },
  measureInWindow(arg0, arg1) {
    raiseSoftError("measureInWindow");
  },
  measureLayout(arg0, arg1, arg2, arg3) {
    raiseSoftError("measureLayout");
  },
  measureLayoutRelativeToParent(arg0, arg1, arg2) {
    raiseSoftError("measureLayoutRelativeToParent");
  },
  dispatchViewManagerCommand(arg0, arg1, arg2) {
    raiseSoftError("dispatchViewManagerCommand");
  }
};
obj = {
  createView(arg0, arg1, arg2, arg3) {
    raiseSoftError("createView");
  },
  updateView(_nativeTag, uiViewClassName, arg2) {
    raiseSoftError("updateView");
  },
  setChildren(_nativeTag, items) {
    raiseSoftError("setChildren");
  },
  manageChildren(_nativeTag, items, items1, items2, items3, arg5) {
    raiseSoftError("manageChildren");
  },
  setJSResponder(_nativeTag, arg1) {
    raiseSoftError("setJSResponder");
  },
  clearJSResponder() {
    raiseSoftError("clearJSResponder");
  }
};
({ default: _default, default: _default2 } = get_Version);
obj = {
  getConstantsForViewManager(arg0) {
    if (callback2) {
      return callback2(arg0);
    } else {
      raiseSoftError("getConstantsForViewManager");
      return {};
    }
  },
  getDefaultEventTypes() {
    if (closure_7) {
      return callback3();
    } else {
      raiseSoftError("getDefaultEventTypes");
      return [];
    }
  },
  setLayoutAnimationEnabledExperimental(arg0) {

  },
  sendAccessibilityEvent(arg0, arg1) {
    const obj = { TYPE_VIEW_FOCUSED: 8, TYPE_WINDOW_STATE_CHANGED: 32, TYPE_VIEW_CLICKED: 1, TYPE_VIEW_HOVER_ENTER: 128 };
    let str = "focus";
    if (arg1 !== obj.TYPE_VIEW_FOCUSED) {
      str = "windowStateChange";
      if (arg1 !== obj.TYPE_WINDOW_STATE_CHANGED) {
        str = "click";
        if (arg1 !== obj.TYPE_VIEW_CLICKED) {
          str = "viewHoverEnter";
          if (arg1 !== obj.TYPE_VIEW_HOVER_ENTER) {
            const _console = console;
            const _HermesInternal = HermesInternal;
            console.error("sendAccessibilityEvent() dropping event: Called with unsupported eventType: " + arg1);
          }
        }
      }
    }
    const defaultResult = closure_3.default(createProxyWithCachedProperties.getFabricUIManager());
    const result = defaultResult.findShadowNodeByTag_DEPRECATED(arg0);
    if (result) {
      const result1 = defaultResult.sendAccessibilityEvent(result, str);
    } else {
      const _console2 = console;
      const _HermesInternal2 = HermesInternal;
      console.error("sendAccessibilityEvent() dropping event: Cannot find view with tag #" + arg0);
    }
  }
};
const merged = Object.assign({}, obj, _default.select({ android: {} }), _default2.select({
  android: obj,
  ios: {
    lazilyLoadView(arg0) {
      raiseSoftError("lazilyLoadView");
      return {};
    },
    focus(arg0) {
      const defaultResult = closure_3.default(createProxyWithCachedProperties.getFabricUIManager());
      const result = defaultResult.findShadowNodeByTag_DEPRECATED(arg0);
      if (result) {
        defaultResult.dispatchCommand(result, "focus", []);
      } else {
        const _console = console;
        const _HermesInternal = HermesInternal;
        console.error("focus() noop: Cannot find view with tag #" + arg0);
      }
    },
    blur(arg0) {
      const defaultResult = closure_3.default(createProxyWithCachedProperties.getFabricUIManager());
      const result = defaultResult.findShadowNodeByTag_DEPRECATED(arg0);
      if (result) {
        defaultResult.dispatchCommand(result, "blur", []);
      } else {
        const _console = console;
        const _HermesInternal = HermesInternal;
        console.error("blur() noop: Cannot find view with tag #" + arg0);
      }
    }
  }
}), obj, {
  getViewManagerConfig(arg0) {
    if (RN$LegacyInterop_UIManager_getConstants) {
      const tmp9 = callback();
      if (!tmp9[arg0]) {
        if (merged.getConstantsForViewManager) {
          tmp9[arg0] = merged.getConstantsForViewManager(arg0);
        }
      }
      return tmp9[arg0];
    } else {
      const _HermesInternal = HermesInternal;
      const _HermesInternal2 = HermesInternal;
      const combined = "getViewManagerConfig('" + arg0 + "')";
      raiseSoftError(combined, "If '" + arg0 + "' has a ViewManager and you want to retrieve its native ViewConfig, please turn on the native ViewConfig interop layer. If you want to see if this component is registered with React Native, please call hasViewManagerConfig('" + arg0 + "') instead.");
      return null;
    }
  },
  hasViewManagerConfig(unstable_hasComponent) {
    return unstable_hasComponent2.unstable_hasComponent(unstable_hasComponent);
  },
  getConstants() {
    if (RN$LegacyInterop_UIManager_getConstants) {
      return callback();
    } else {
      raiseSoftError("getConstants");
      return null;
    }
  },
  findSubviewIn(arg0, arg1, arg2) {
    const _require = arg2;
    const defaultResult = closure_3.default(_require(47).getFabricUIManager());
    dependencyMap = defaultResult;
    const result = defaultResult.findShadowNodeByTag_DEPRECATED(arg0);
    if (result) {
      defaultResult.findNodeAtPoint(result, arg1[0], arg1[1], (stateNode) => {
        if (stateNode == null) {
          const _console2 = console;
          console.error("findSubviewIn(): Cannot find node at point");
        } else {
          const node = stateNode.stateNode.node;
          if (node) {
            const nativeTag = stateNode.stateNode.canonical.nativeTag;
            defaultResult.measure(node, (arg0, arg1, arg2, arg3, arg4, arg5) => {
              nativeTag(nativeTag, arg4, arg5, arg2, arg3);
            });
          } else {
            const _console = console;
            console.error("findSubviewIn(): Cannot find node at point");
          }
        }
      });
    } else {
      let _console = console;
      const _HermesInternal = HermesInternal;
      console.error("findSubviewIn() noop: Cannot find view with reactTag " + arg0);
    }
  },
  viewIsDescendantOf(arg0, arg1, arg2) {
    const defaultResult = closure_3.default(createProxyWithCachedProperties.getFabricUIManager());
    const result = defaultResult.findShadowNodeByTag_DEPRECATED(arg0);
    if (result) {
      const result1 = defaultResult.findShadowNodeByTag_DEPRECATED(arg1);
      if (result1) {
        const items = [(defaultResult.compareDocumentPosition(result1, result) & 16) !== 0];
        arg2(items);
      } else {
        const _console2 = console;
        const _HermesInternal2 = HermesInternal;
        console.error("viewIsDescendantOf() noop: Cannot find view with ancestorReactTag " + arg1);
      }
    } else {
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.error("viewIsDescendantOf() noop: Cannot find view with reactTag " + arg0);
    }
  },
  configureNextLayoutAnimation(duration, fn2, fn) {
    const result = closure_3.default(createProxyWithCachedProperties.getFabricUIManager()).configureNextLayoutAnimation(duration, fn2, fn);
  }
});
if (RN$LegacyInterop_UIManager_getConstants) {
  const _Object = Object;
  const keys = Object.keys(tmp4());
  const item = keys.forEach((arg0) => {
    merged[arg0] = callback()[arg0];
  });
  if (merged.getConstants().ViewManagerNames) {
    const ViewManagerNames = merged.getConstants().ViewManagerNames;
    const item1 = ViewManagerNames.forEach((arg0) => {
      closure_0 = arg0;
      closure_2.default(merged, arg0, {
        get() {
          return closure_1_3.default(closure_1_9.getConstantsForViewManager)(closure_0);
        }
      });
    });
  }
}

export default merged;
