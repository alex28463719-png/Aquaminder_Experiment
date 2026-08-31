// Module ID: 538
// Function ID: 6000
// Name: NavigationStateContext
// Dependencies: [119]

// Module 538 (NavigationStateContext)
import getIteratorFn2 from "getIteratorFn" /* 119 */;

let getIteratorFn = _interopRequireWildcard(getIteratorFn2);
getIteratorFn = { isDefault: true };
Object.defineProperty(getIteratorFn, "getKey", {
  get: () => {
    const error = new Error("Couldn't find a navigation context. Have you wrapped your app with 'NavigationContainer'? See https://reactnavigation.org/docs/getting-started for setup instructions.");
    throw error;
  },
  set: undefined
});
Object.defineProperty(getIteratorFn, "setKey", {
  get: () => {
    const error = new Error("Couldn't find a navigation context. Have you wrapped your app with 'NavigationContainer'? See https://reactnavigation.org/docs/getting-started for setup instructions.");
    throw error;
  },
  set: undefined
});
Object.defineProperty(getIteratorFn, "getState", {
  get: () => {
    const error = new Error("Couldn't find a navigation context. Have you wrapped your app with 'NavigationContainer'? See https://reactnavigation.org/docs/getting-started for setup instructions.");
    throw error;
  },
  set: undefined
});
Object.defineProperty(getIteratorFn, "setState", {
  get: () => {
    const error = new Error("Couldn't find a navigation context. Have you wrapped your app with 'NavigationContainer'? See https://reactnavigation.org/docs/getting-started for setup instructions.");
    throw error;
  },
  set: undefined
});
Object.defineProperty(getIteratorFn, "getIsInitial", {
  get: () => {
    const error = new Error("Couldn't find a navigation context. Have you wrapped your app with 'NavigationContainer'? See https://reactnavigation.org/docs/getting-started for setup instructions.");
    throw error;
  },
  set: undefined
});

export const NavigationStateContext = getIteratorFn.createContext(getIteratorFn);
