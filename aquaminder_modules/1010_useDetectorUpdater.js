// Module ID: 1010
// Function ID: 10763
// Name: useDetectorUpdater
// Dependencies: [1, 119, 968, 1001, 1011, 1012, 1013, 1014]
// Exports: useDetectorUpdater

// Module 1010 (useDetectorUpdater)
import get_registerCallableModule from "get registerCallableModule" /* 968 */;
import module_1 from "module_1" /* 1 */;
import closure_2 from "getIteratorFn" /* 119 */;

let closure_3 = module_1(get_registerCallableModule);

export function useDetectorUpdater(current, current2, memo, gesture, webEventHandlers) {
  const _require = current;
  dependencyMap = current2;
  const React = memo;
  closure_3 = gesture;
  closure_4 = webEventHandlers;
  const forceRender = _require(1001).useForceRender();
  const items = [forceRender, gesture, memo, current2, current, webEventHandlers];
  return React.useCallback((arg0) => {
    const defaultResult = gesture.default(current.viewRef);
    if (defaultResult === current.previousViewTag) {
      if (!current(1011).needsToReattach(dependencyMap, closure_2)) {
        if (!arg0) {
          current(1014).updateHandlers(dependencyMap, gesture, closure_2);
        }
      }
    }
    const result = current(1001).validateDetectorChildren(current.viewRef);
    current(1012).dropHandlers(dependencyMap);
    current(1013).attachHandlers({ preparedGesture: dependencyMap, gestureConfig: gesture, gesturesToAttach: closure_2, webEventHandlersRef: closure_4, viewTag: defaultResult });
    if (defaultResult !== current.previousViewTag) {
      current.previousViewTag = defaultResult;
      current.forceRebuildReanimatedEvent = true;
      forceRender();
    }
  }, items);
}
