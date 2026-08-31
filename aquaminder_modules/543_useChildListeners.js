// Module ID: 543
// Function ID: 6033
// Name: useChildListeners
// Dependencies: [119]
// Exports: useChildListeners

// Module 543 (useChildListeners)
import getIteratorFn from "getIteratorFn" /* 119 */;

let closure_0 = _interopRequireWildcard(getIteratorFn);

export function useChildListeners() {
  current = current.useRef({ action: [], focus: [] }).current;
  const items = [current];
  return {
    listeners: current,
    addListener: current.useCallback((arg0, arg1) => {
      const table = arg0;
      closure_1 = arg1;
      let arr = table[arg0];
      arr = arr.push(arg1);
      c2 = false;
      return () => {
        const index = dependencyMap[dependencyMap].indexOf(closure_1);
        if (!c2) {
          if (index > -1) {
            c2 = true;
            dependencyMap[dependencyMap].splice(index, 1);
            const arr2 = dependencyMap[dependencyMap];
          }
        }
      };
    }, items)
  };
}
