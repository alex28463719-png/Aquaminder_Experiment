// Module ID: 986
// Function ID: 10515
// Name: PlatformConstants
// Dependencies: [2]

// Module 986 (PlatformConstants)
import get_registerCallableModule from "get registerCallableModule" /* 2 */;

let PlatformConstants;
if (get_registerCallableModule.NativeModules != null) {
  PlatformConstants = get_registerCallableModule.NativeModules.PlatformConstants;
}
if (PlatformConstants == null) {
  PlatformConstants = get_registerCallableModule.Platform.constants;
}

export default PlatformConstants;
