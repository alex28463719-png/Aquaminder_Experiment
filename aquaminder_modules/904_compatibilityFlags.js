// Module ID: 904
// Function ID: 9715
// Name: compatibilityFlags
// Dependencies: [2]
// Exports: executeNativeBackPress

// Module 904 (compatibilityFlags)
import get_registerCallableModule from "get registerCallableModule" /* 2 */;

const items = ["ios", "android"];

export function executeNativeBackPress() {
  get_registerCallableModule.BackHandler.exitApp();
  return true;
}
export const isSearchBarAvailableForCurrentPlatform = items.includes(get_registerCallableModule.Platform.OS);
export const compatibilityFlags = { isNewBackTitleImplementation: true, usesHeaderFlexboxImplementation: true };
