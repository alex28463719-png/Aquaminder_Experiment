// Module ID: 545
// Function ID: 6045
// Name: NOT_INITIALIZED_ERROR
// Dependencies: [1, 38, 6, 546]
// Exports: createNavigationContainerRef

// Module 545 (NOT_INITIALIZED_ERROR)
import _toConsumableArray from "_toConsumableArray" /* 6 */;
import _slicedToArray from "_slicedToArray" /* 38 */;
import module_1 from "module_1" /* 1 */;

let closure_2 = module_1(_slicedToArray);
let closure_3 = module_1(_toConsumableArray);
let c4 = "The 'navigation' object hasn't been initialized yet. This might happen if you don't have a navigator mounted, or if the navigator hasn't finished mounting. See https://reactnavigation.org/docs/navigating-without-navigation-prop#handling-initialization for more details.";

export function createNavigationContainerRef() {
  let items = [];
  const combined = items.concat(closure_3.default(Object.keys(_require(removeListener[3]).CommonActions)), ["addListener", "removeListener", "resetRoot", "dispatch", "isFocused", "canGoBack", "getRootState", "getState", "getParent", "getCurrentRoute", "getCurrentOptions"]);
  _require = {};
  removeListener = function removeListener(arg0, arg1) {
    dependencyMap = arg1;
    if (dependencyMap[arg0]) {
      dependencyMap[arg0] = dependencyMap[arg0].filter((arg0) => arg0 !== closure_0);
      const arr = dependencyMap[arg0];
    }
  };
  c2 = null;
  const obj = {};
  Object.defineProperty(obj, "current", {
    get: () => c2,
    set: (arg0) => {
      closure_0 = arg0;
      closure_2 = arg0;
      if (arg0 != null) {
        const _Object = Object;
        const entries = Object.entries(closure_0);
        let item = entries.forEach((arg0) => {
          const defaultResult = c2.default(arg0, 2);
          closure_0 = defaultResult[0];
          const item = defaultResult[1].forEach((arg0) => {
            closure_0.addListener(closure_0, arg0);
          });
        });
      }
    }
  });
  obj.isReady = function isReady() {
    if (_null == null) {
      return false;
    } else {
      return _null.isReady();
    }
  };
  return Object.assign(obj, combined.reduce((arg0, arg1) => {
    closure_0 = arg1;
    arg0[arg1] = () => {
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      if (closure_1_2 == null) {
        if ("addListener" === first) {
          first = array[0];
          closure_1 = tmp10;
          let items = dependencyMap[first];
          if (!items) {
            items = [];
          }
          dependencyMap[first] = items;
          dependencyMap[first].push(array[1]);
          return () => {
            closure_2_1(first, closure_1);
          };
        } else if ("removeListener" === tmp4) {
          closure_1_1(array[0], array[1]);
        } else {
          const _console = console;
          console.error(closure_2_4);
        }
      } else {
        return closure_1_2[first].apply(closure_1_2, array);
      }
    };
    return arg0;
  }, {}));
}
export const NOT_INITIALIZED_ERROR = "The 'navigation' object hasn't been initialized yet. This might happen if you don't have a navigator mounted, or if the navigator hasn't finished mounting. See https://reactnavigation.org/docs/navigating-without-navigation-prop#handling-initialization for more details.";
