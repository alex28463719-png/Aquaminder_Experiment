// Module ID: 379
// Function ID: 4696
// Name: setGlobalOptions
// Dependencies: [1, 380, 20]

// Module 379 (setGlobalOptions)
import invariant from "invariant" /* 20 */;
import FrameRateLogger from "FrameRateLogger" /* 380 */;
import module_1 from "module_1" /* 1 */;

let closure_2 = module_1(FrameRateLogger);

export default {
  setGlobalOptions(debug) {
    if (debug.debug !== undefined) {
      invariant(mod.default, "Trying to debug FrameRateLogger without the native module!");
    }
    if (mod.default != null) {
      const obj = { debug: debug.debug };
      mod.default.setGlobalOptions(obj);
      const _default = mod.default;
    }
  },
  setContext(arg0) {
    if (mod.default != null) {
      mod.default.setContext(arg0);
      const _default = mod.default;
    }
  },
  beginScroll() {
    if (mod.default != null) {
      mod.default.beginScroll();
      const _default = mod.default;
    }
  },
  endScroll() {
    if (mod.default != null) {
      mod.default.endScroll();
      const _default = mod.default;
    }
  }
};
