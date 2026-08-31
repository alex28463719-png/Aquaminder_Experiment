// Module ID: 544
// Function ID: 6039
// Name: useKeyedChildListeners
// Dependencies: [119]
// Exports: useKeyedChildListeners

// Module 544 (useKeyedChildListeners)
import getIteratorFn from "getIteratorFn" /* 119 */;

let closure_0 = _interopRequireWildcard(getIteratorFn);

export function useKeyedChildListeners() {
  current = current.useRef(Object.assign(Object.create(null), { getState: {}, beforeRemove: {} })).current;
  const items = [current];
  return {
    keyedListeners: current,
    addKeyedListener: current.useCallback((arg0, arg1, arg2) => {
      const table = arg0;
      closure_1 = arg1;
      table[arg0][arg1] = arg2;
      return () => {
        table[table][closure_1] = undefined;
      };
    }, items)
  };
}
