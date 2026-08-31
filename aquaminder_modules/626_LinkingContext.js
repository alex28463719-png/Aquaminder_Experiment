// Module ID: 626
// Function ID: 6728
// Name: LinkingContext
// Dependencies: [119]

// Module 626 (LinkingContext)
import getIteratorFn2 from "getIteratorFn" /* 119 */;

let getIteratorFn = _interopRequireWildcard(getIteratorFn2);
getIteratorFn = {};
Object.defineProperty(getIteratorFn, "options", {
  get: () => {
    const error = new Error("Couldn't find a LinkingContext context.");
    throw error;
  },
  set: undefined
});
getIteratorFn = getIteratorFn.createContext(getIteratorFn);
getIteratorFn.displayName = "LinkingContext";

export const LinkingContext = getIteratorFn;
