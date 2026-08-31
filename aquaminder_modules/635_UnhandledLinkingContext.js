// Module ID: 635
// Function ID: 6792
// Name: UnhandledLinkingContext
// Dependencies: [119]

// Module 635 (UnhandledLinkingContext)
import getIteratorFn2 from "getIteratorFn" /* 119 */;

let getIteratorFn = _interopRequireWildcard(getIteratorFn2);
getIteratorFn = {};
Object.defineProperty(getIteratorFn, "lastUnhandledLink", {
  get: () => {
    const error = new Error("Couldn't find an UnhandledLinkingContext context.");
    throw error;
  },
  set: undefined
});
Object.defineProperty(getIteratorFn, "setLastUnhandledLink", {
  get: () => {
    const error = new Error("Couldn't find an UnhandledLinkingContext context.");
    throw error;
  },
  set: undefined
});
getIteratorFn = getIteratorFn.createContext(getIteratorFn);
getIteratorFn.displayName = "UnhandledLinkingContext";

export const UnhandledLinkingContext = getIteratorFn;
