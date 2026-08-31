// Module ID: 662
// Function ID: 7219
// Name: shouldFallbackToLegacyNativeModule
// Dependencies: [2]
// Exports: shouldFallbackToLegacyNativeModule

// Module 662 (shouldFallbackToLegacyNativeModule)
import closure_0 from "get registerCallableModule" /* 2 */;


export function shouldFallbackToLegacyNativeModule() {
  const NativeUnimoduleProxy = NativeModules.NativeModules.NativeUnimoduleProxy;
  let ExponentConstants;
  if (NativeUnimoduleProxy != null) {
    const modulesConstants = NativeUnimoduleProxy.modulesConstants;
    if (modulesConstants != null) {
      ExponentConstants = modulesConstants.ExponentConstants;
    }
  }
  if (ExponentConstants) {
    if (!tmp2) {
      const items = ["storeClient", "standalone"];
    }
    return true;
  }
  return false;
}
