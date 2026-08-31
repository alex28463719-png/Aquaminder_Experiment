// Module ID: 601
// Function ID: 6536
// Name: useScheduleUpdate
// Dependencies: [119, 557, 602]
// Exports: useScheduleUpdate

// Module 601 (useScheduleUpdate)
import getIteratorFn from "getIteratorFn" /* 119 */;
import NavigationBuilderContext from "NavigationBuilderContext" /* 557 */;
import useClientLayoutEffect from "useClientLayoutEffect" /* 602 */;

let closure_2 = _interopRequireWildcard(getIteratorFn);

export function useScheduleUpdate(arg0) {
  const context = React.useContext(NavigationBuilderContext.NavigationBuilderContext);
  context.scheduleUpdate(arg0);
  const clientLayoutEffect = useClientLayoutEffect.useClientLayoutEffect(context.flushUpdates);
}
