// Module ID: 877
// Function ID: 9600
// Name: getDefaultHeaderHeight
// Dependencies: [2]
// Exports: getDefaultHeaderHeight

// Module 877 (getDefaultHeaderHeight)
import closure_0 from "get registerCallableModule" /* 2 */;


export function getDefaultHeaderHeight(layout, flag, headerStatusBarHeight) {
  let tmp = Platform.Platform.OS === "ios";
  if (tmp) {
    tmp = headerStatusBarHeight > 50;
  }
  let diff = headerStatusBarHeight;
  if (tmp) {
    const PixelRatio = Platform.PixelRatio;
    diff = headerStatusBarHeight - (5 + 1 / PixelRatio.get());
  }
  let num4 = 64;
  if (Platform.Platform.OS === "ios") {
    if (!Platform.Platform.isPad) {
      if (!Platform.Platform.isTV) {
        num4 = 32;
        if (!tmp4) {
          num4 = 56;
          if (!flag) {
            num4 = 44;
          }
        }
      }
    }
    num4 = 56;
    if (!flag) {
      num4 = 50;
    }
  }
  return num4 + diff;
}
