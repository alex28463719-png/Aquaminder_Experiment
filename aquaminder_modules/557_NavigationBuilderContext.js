// Module ID: 557
// Function ID: 6203
// Name: NavigationBuilderContext
// Dependencies: [119]

// Module 557 (NavigationBuilderContext)
import getIteratorFn2 from "getIteratorFn" /* 119 */;

let getIteratorFn = _interopRequireWildcard(getIteratorFn2);
getIteratorFn = {
  onDispatchAction(target, arg1) {

  },
  onOptionsChange() {

  },
  scheduleUpdate(arg0) {
    const error = new Error("Couldn't find a context for scheduling updates.");
    throw error;
  },
  flushUpdates() {
    const error = new Error("Couldn't find a context for flushing updates.");
    throw error;
  }
};

export const NavigationBuilderContext = getIteratorFn.createContext(getIteratorFn);
