// Module ID: 1035
// Function ID: 10922
// Name: initialize
// Dependencies: [1, 966, 1006, 971]
// Exports: initialize, maybeInitializeFabric

// Module 1035 (initialize)
import _mod966 from "module_966" /* 966 */;
import hasProperty from "hasProperty" /* 971 */;
import isStateChangeEvent from "isStateChangeEvent" /* 1006 */;
import module_1 from "module_1" /* 1 */;

let closure_2 = module_1(_mod966);
let c3 = false;

export function initialize() {
  isStateChangeEvent.startListening();
}
export function maybeInitializeFabric() {
  if (hasProperty.isFabric()) {
    if (!c3) {
      mod.default.install();
      c3 = true;
      const _default = mod.default;
    }
  }
}
