// Module ID: 661
// Function ID: 7218
// Name: get registerCallableModule
// Dependencies: [2, 662]

// Module 661 (get registerCallableModule)
import shouldFallbackToLegacyNativeModule from "shouldFallbackToLegacyNativeModule" /* 662 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;

if (get_registerCallableModule.TurboModuleRegistry) {
  const TurboModuleRegistry = get_registerCallableModule.TurboModuleRegistry;
  let value = TurboModuleRegistry.get("PlatformLocalStorage");
  if (!value) {
    const TurboModuleRegistry2 = get_registerCallableModule.TurboModuleRegistry;
    value = TurboModuleRegistry2.get("RNC_AsyncSQLiteDBStorage");
  }
  if (!value) {
    const TurboModuleRegistry3 = get_registerCallableModule.TurboModuleRegistry;
    value = TurboModuleRegistry3.get("RNCAsyncStorage");
  }
  let tmp3 = value;
} else {
  tmp3 = get_registerCallableModule.NativeModules.PlatformLocalStorage || get_registerCallableModule.NativeModules.RNC_AsyncSQLiteDBStorage || get_registerCallableModule.NativeModules.RNCAsyncStorage;
}
let tmp5 = tmp3;
if (!tmp3) {
  tmp5 = tmp3;
  if (shouldFallbackToLegacyNativeModule.shouldFallbackToLegacyNativeModule()) {
    if (get_registerCallableModule.TurboModuleRegistry) {
      const TurboModuleRegistry4 = get_registerCallableModule.TurboModuleRegistry;
      value = TurboModuleRegistry4.get("AsyncSQLiteDBStorage");
      if (!value) {
        const TurboModuleRegistry5 = get_registerCallableModule.TurboModuleRegistry;
        value = TurboModuleRegistry5.get("AsyncLocalStorage");
      }
      tmp5 = value;
    } else {
      tmp5 = get_registerCallableModule.NativeModules.AsyncSQLiteDBStorage || get_registerCallableModule.NativeModules.AsyncLocalStorage;
      const tmp6 = get_registerCallableModule.NativeModules.AsyncSQLiteDBStorage || get_registerCallableModule.NativeModules.AsyncLocalStorage;
    }
  }
}

export default tmp5;
