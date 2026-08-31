// Module ID: 954
// Function ID: 9950
// Name: useBottomTabBarHeight
// Dependencies: [119, 946]
// Exports: useBottomTabBarHeight

// Module 954 (useBottomTabBarHeight)
import getIteratorFn from "getIteratorFn" /* 119 */;
import BottomTabBarHeightContext from "BottomTabBarHeightContext" /* 946 */;

let closure_2 = _interopRequireWildcard(getIteratorFn);

export function useBottomTabBarHeight() {
  const context = React.useContext(BottomTabBarHeightContext.BottomTabBarHeightContext);
  if (context === undefined) {
    const _Error = Error;
    const error = new Error("Couldn't find the bottom tab bar height. Are you inside a screen in Bottom Tab Navigator?");
    throw error;
  } else {
    return context;
  }
}
