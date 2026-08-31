// Module ID: 491
// Function ID: 5408
// Name: useColorScheme
// Dependencies: [119, 453]
// Exports: default

// Module 491 (useColorScheme)
import getState from "getState" /* 453 */;
import closure_2 from "getIteratorFn" /* 119 */;

function subscribe(arg0) {
  _require = _require(453).addChangeListener(arg0);
  return () => closure_0.remove();
}

export default function useColorScheme() {
  return closure_2.useSyncExternalStore(subscribe, getState.getColorScheme);
};
