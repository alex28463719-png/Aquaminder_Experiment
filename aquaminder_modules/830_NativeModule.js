// Module ID: 830
// Function ID: 9097
// Name: NativeModule
// Dependencies: [2]

// Module 830 (NativeModule)
import get_registerCallableModule from "get registerCallableModule" /* 2 */;

const TurboModuleRegistry = get_registerCallableModule.TurboModuleRegistry;

export const NativeModule = TurboModuleRegistry.getEnforcing("RNGoogleSignin");
