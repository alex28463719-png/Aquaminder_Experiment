// Module ID: 905
// Function ID: 9717
// Name: enableFreeze
// Dependencies: [2]
// Exports: enableFreeze, enableScreens, freezeEnabled, screensEnabled

// Module 905 (enableFreeze)
import get_registerCallableModule from "get registerCallableModule" /* 2 */;

let tmp3 = get_registerCallableModule.Platform.OS === "ios";
if (!tmp3) {
  tmp3 = get_registerCallableModule.Platform.OS === "android";
}
if (!tmp3) {
  tmp3 = get_registerCallableModule.Platform.OS === "windows";
}
let closure_1 = tmp3;
let closure_2 = tmp3;
let c3 = false;

export function enableFreeze() {
  let flag = true;
  if (arguments.length > 0) {
    flag = true;
    if (arguments[0] !== undefined) {
      flag = arguments[0];
    }
  }
}
export function enableScreens() {
  let flag = true;
  if (arguments.length > 0) {
    flag = true;
    if (arguments[0] !== undefined) {
      flag = arguments[0];
    }
  }
  if (closure_1) {
    if (flag) {
      const UIManager = get_registerCallableModule.UIManager;
      if (!UIManager.getViewManagerConfig("RNSScreen")) {
        const _console = console;
        console.error("Screen native module hasn't been linked. Please check the react-native-screens README for more details");
      }
    }
  }
}
export function freezeEnabled() {
  return c3;
}
export function screensEnabled() {
  return closure_2;
}
export const isNativePlatformSupported = tmp3;
