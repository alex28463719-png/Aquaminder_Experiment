// Module ID: 279
// Function ID: 3265
// Name: codegenNativeComponent
// Dependencies: [1, 280, 44]
// Exports: default

// Module 279 (codegenNativeComponent)
import isFabricReactTag from "isFabricReactTag" /* 44 */;
import requireNativeComponent from "requireNativeComponent" /* 280 */;
import module_1 from "module_1" /* 1 */;

let closure_1 = module_1(requireNativeComponent);
let closure_2 = module_1(isFabricReactTag);

export default function codegenNativeComponent(arg0, paperComponentName) {
  paperComponentName = arg0;
  if (paperComponentName) {
    paperComponentName = arg0;
    if (paperComponentName.paperComponentName != null) {
      paperComponentName = paperComponentName.paperComponentName;
    }
  }
  let paperComponentNameDeprecated = paperComponentName;
  if (paperComponentName != null) {
    paperComponentNameDeprecated = paperComponentName;
    if (paperComponentName.paperComponentNameDeprecated != null) {
      paperComponentNameDeprecated = arg0;
      if (!_default2.hasViewManagerConfig(arg0)) {
        if (paperComponentName.paperComponentNameDeprecated != null) {
          if (_default.hasViewManagerConfig(paperComponentName.paperComponentNameDeprecated)) {
            paperComponentNameDeprecated = paperComponentName.paperComponentNameDeprecated;
          }
          _default = mod.default;
        }
        let _Error = Error;
        const paperComponentNameDeprecated2 = paperComponentName.paperComponentNameDeprecated;
        let str = "(unknown)";
        if (paperComponentNameDeprecated2 != null) {
          str = paperComponentNameDeprecated2;
        }
        const _HermesInternal = HermesInternal;
        const prototype = _Error.prototype;
        _Error = new _Error("Failed to find native component for either " + arg0 + " or " + str);
        throw _Error;
      }
      _default2 = mod.default;
    }
  }
  return closure_1.default(paperComponentNameDeprecated);
};
