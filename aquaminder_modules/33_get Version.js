// Module ID: 33
// Function ID: 311
// Name: get Version
// Dependencies: [1, 34]

// Module 33 (get Version)
import PlatformConstants from "PlatformConstants" /* 34 */;
import module_1 from "module_1" /* 1 */;

let closure_0 = module_1(PlatformConstants);
const obj = { __constants: null, OS: "android" };
Object.defineProperty(obj, "Version", {
  get: function() {
    return this.constants.Version;
  },
  set: undefined
});
Object.defineProperty(obj, "constants", {
  get: function() {
    const self = this;
    if (this.__constants == null) {
      self.__constants = mod.default.getConstants();
      const _default = mod.default;
    }
    return self.__constants;
  },
  set: undefined
});
Object.defineProperty(obj, "isTesting", { get: () => false, set: undefined });
Object.defineProperty(obj, "isDisableAnimations", {
  get: function() {
    let isTesting = this.constants.isDisableAnimations;
    if (isTesting == null) {
      isTesting = this.isTesting;
    }
    return isTesting;
  },
  set: undefined
});
Object.defineProperty(obj, "isTV", {
  get: function() {
    return this.constants.uiMode === "tv";
  },
  set: undefined
});
Object.defineProperty(obj, "isVision", { get: () => false, set: undefined });
obj.select = function select(android) {
  if ("android" in android) {
    android = android.android;
  } else {
    android = "native" in android ? android.native : android.default;
  }
  return android;
};

export default obj;
