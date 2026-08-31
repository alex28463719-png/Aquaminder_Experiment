// Module ID: 43
// Function ID: 358
// Name: legacySendAccessibilityEvent
// Dependencies: [1, 44, 45]
// Exports: default

// Module 43 (legacySendAccessibilityEvent)
import isFabricReactTag from "isFabricReactTag" /* 44 */;
import nullthrows from "nullthrows" /* 45 */;
import module_1 from "module_1" /* 1 */;

let closure_0 = module_1(isFabricReactTag);
let closure_1 = module_1(nullthrows);

export default function legacySendAccessibilityEvent(_nativeTag, arg1) {
  if (arg1 === "focus") {
    closure_1.default(mod.default.sendAccessibilityEvent)(_nativeTag, mod.default.getConstants().AccessibilityEventTypes.typeViewFocused);
    const _default = mod.default;
    const defaultResult = closure_1.default(mod.default.sendAccessibilityEvent);
  }
  if (arg1 === "click") {
    closure_1.default(mod.default.sendAccessibilityEvent)(_nativeTag, mod.default.getConstants().AccessibilityEventTypes.typeViewClicked);
    const _default2 = mod.default;
    const defaultResult1 = closure_1.default(mod.default.sendAccessibilityEvent);
  }
};
