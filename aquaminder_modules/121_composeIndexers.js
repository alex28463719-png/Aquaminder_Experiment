// Module ID: 121
// Function ID: 1437
// Name: composeIndexers
// Dependencies: [1, 122]
// Exports: createViewConfig

// Module 121 (composeIndexers)
import _mod122 from "module_122" /* 122 */;
import module_1 from "module_1" /* 1 */;

function composeIndexers(bubblingEventTypes, bubblingEventTypes2) {
  let obj = bubblingEventTypes2;
  if (bubblingEventTypes != null) {
    if (obj != null) {
      const _Object = Object;
      let merged = Object.assign({}, bubblingEventTypes, obj);
    }
    return merged;
  }
  if (bubblingEventTypes != null) {
    obj = bubblingEventTypes;
  }
  if (obj == null) {
    obj = {};
  }
  merged = obj;
}
let closure_0 = module_1(_mod122);

export function createViewConfig(closure_2) {
  return { uiViewClassName: closure_2.uiViewClassName, Commands: {}, bubblingEventTypes: composeIndexers(mod.default.bubblingEventTypes, closure_2.bubblingEventTypes), directEventTypes: composeIndexers(mod.default.directEventTypes, closure_2.directEventTypes), validAttributes: composeIndexers(mod.default.validAttributes, closure_2.validAttributes) };
}
