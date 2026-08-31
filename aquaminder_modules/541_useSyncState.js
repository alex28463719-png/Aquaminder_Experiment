// Module ID: 541
// Function ID: 6015
// Name: useSyncState
// Dependencies: [1, 119, 536, 542]
// Exports: useSyncState

// Module 541 (useSyncState)
import getIteratorFn from "getIteratorFn" /* 119 */;
import _mod536 from "module_536" /* 536 */;
import module_1 from "module_1" /* 1 */;

let closure_2 = _interopRequireWildcard(getIteratorFn);
let closure_3 = module_1(_mod536);
function createStore(arg0) {
  closure_0 = arg0;
  closure_1 = [];
  c2 = false;
  c4 = false;
  c5 = false;
  return {
    getState() {
      if (c2) {
        return deepFreezeResult;
      } else {
        c2 = true;
        deepFreezeResult = callback(arr[3]).deepFreeze(callback());
        return deepFreezeResult;
      }
    },
    setState(arg0) {
      closure_3 = callback(arr[3]).deepFreeze(arg0);
      c5 = true;
      if (!c4) {
        const item = arr.forEach((arg0) => arg0());
      }
    },
    batchUpdates(arg0) {
      c4 = true;
      arg0();
      c4 = false;
      if (c5) {
        c5 = false;
        const item = arr.forEach((arg0) => arg0());
      }
    },
    subscribe(arg0) {
      closure_0 = arg0;
      return () => {
        const index = closure_1_1.indexOf(closure_0);
        if (index > -1) {
          closure_1_1.splice(index, 1);
        }
      };
    }
  };
}

export function useSyncState(arg0) {
  let current = React.useRef(createStore(arg0)).current;
  const syncExternalStore = React.useSyncExternalStore(current.subscribe, current.getState, current.getState);
  const debugValue = React.useDebugValue(syncExternalStore);
  closure_1 = React.useRef([]);
  const defaultResult = closure_3.default((arg0) => {
    current = ref.current;
    current.push(arg0);
  });
  return {
    state: syncExternalStore,
    getState: current.getState,
    setState: current.setState,
    scheduleUpdate: closure_3.default((arg0) => {
      current = ref.current;
      current.push(arg0);
    }),
    flushUpdates: closure_3.default(() => {
      current = ref.current;
      ref.current = [];
      if (current.length !== 0) {
        current.batchUpdates(() => {
          for (const item10004 of current) {
            let item10004Result = item10004();
            continue;
          }
        });
      }
    })
  };
}
