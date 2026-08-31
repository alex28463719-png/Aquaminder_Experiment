// Module ID: 934
// Function ID: 9830
// Name: AnimatedHeaderHeightContext
// Dependencies: [119]
// Exports: useAnimatedHeaderHeight

// Module 934 (AnimatedHeaderHeightContext)
import getIteratorFn2 from "getIteratorFn" /* 119 */;

const getIteratorFn = _interopRequireWildcard(getIteratorFn2);
let context = getIteratorFn.createContext(undefined);

export function useAnimatedHeaderHeight() {
  context = getIteratorFn.useContext(context);
  if (context === undefined) {
    const _Error = Error;
    const error = new Error("Couldn't find the header height. Are you inside a screen in a native stack navigator?");
    throw error;
  } else {
    return context;
  }
}
export const AnimatedHeaderHeightContext = context;
