// Module ID: 1015
// Function ID: 10781
// Name: useViewRefHandler
// Dependencies: [1, 119, 968]
// Exports: useViewRefHandler

// Module 1015 (useViewRefHandler)
import get_registerCallableModule from "get registerCallableModule" /* 968 */;
import module_1 from "module_1" /* 1 */;
import closure_0 from "getIteratorFn" /* 119 */;

let closure_1 = module_1(get_registerCallableModule);

export function useViewRefHandler(current, detectorUpdater) {
  const React = current;
  closure_1 = detectorUpdater;
  const items = [current, detectorUpdater];
  return React.useCallback((viewRef) => {
    if (viewRef !== null) {
      current.viewRef = viewRef;
      if (current.previousViewTag === -1) {
        current.previousViewTag = detectorUpdater.default(current.viewRef);
      }
      if (!current.firstRender) {
        detectorUpdater(true);
      }
    }
  }, items);
}
