// Module ID: 631
// Function ID: 6757
// Name: useLinking
// Dependencies: [119, 2, 534, 632]
// Exports: useLinking

// Module 631 (useLinking)
import getIteratorFn from "getIteratorFn" /* 119 */;
import closure_3 from "get registerCallableModule" /* 2 */;

let closure_2 = _interopRequireWildcard(getIteratorFn);

export function useLinking(ref, enabled, arg2) {
  const _require = ref;
  dependencyMap = arg2;
  enabled = enabled.enabled;
  let flag = true;
  if (enabled !== undefined) {
    flag = enabled;
  }
  let prefixes = enabled.prefixes;
  const filter = enabled.filter;
  const config = enabled.config;
  let fn = enabled.getInitialURL;
  if (fn === undefined) {
    fn = () => {
      const Linking = prefixes.Linking;
      const items = [
        Linking.getInitialURL(),
        new Promise((start) => {
          const timerId = setTimeout(start, 150);
        })
      ];
      return Promise.race(items);
    };
  }
  let fn2 = enabled.subscribe;
  if (fn2 === undefined) {
    fn2 = (arg0) => {
      closure_0 = arg0;
      callback = function callback(url) {
        return callback(url.url);
      };
      const Linking = prefixes.Linking;
      closure_2 = Linking.addEventListener("url", callback);
      const removeEventListener = prefixes.Linking.removeEventListener;
      let bindResult;
      if (removeEventListener != null) {
        bindResult = removeEventListener.bind(prefixes.Linking);
      }
      prefixes = bindResult;
      return () => {
        if (closure_2 != null) {
          if (closure_2.remove) {
            closure_2.remove();
          }
        }
        if (bindResult != null) {
          bindResult("url", callback);
        }
      };
    };
  }
  let getStateFromPath = enabled.getStateFromPath;
  if (getStateFromPath === undefined) {
    getStateFromPath = _require(534).getStateFromPath;
  }
  let getActionFromState = enabled.getActionFromState;
  if (getActionFromState === undefined) {
    getActionFromState = _require(534).getActionFromState;
  }
  let items = [flag, _require(534).useNavigationIndependentTree()];
  const effect = flag.useEffect(() => {

  }, items);
  closure_10 = flag.useRef(flag);
  closure_11 = flag.useRef(prefixes);
  closure_12 = flag.useRef(filter);
  closure_13 = flag.useRef(config);
  closure_14 = flag.useRef(fn);
  closure_15 = flag.useRef(getStateFromPath);
  closure_16 = flag.useRef(getActionFromState);
  const effect1 = flag.useEffect(() => {
    closure_10.current = flag;
    closure_11.current = prefixes;
    closure_12.current = filter;
    closure_13.current = config;
    closure_14.current = fn;
    closure_15.current = getStateFromPath;
    closure_16.current = getActionFromState;
  });
  let callback = flag.useCallback((currentResult) => {
    if (currentResult) {
      currentResult = undefined;
      const extractPathFromURLResult = callback(632).extractPathFromURL(ref2.current, currentResult);
      if (extractPathFromURLResult !== undefined) {
        currentResult = ref6.current(extractPathFromURLResult, ref4.current);
      }
      return currentResult;
    }
  }, []);
  const items1 = [callback, arg2, prefixes];
  const items2 = [flag, callback, arg2, prefixes, ref, fn2];
  const getInitialState = flag.useCallback(() => {
    if (ref.current) {
      const currentResult = ref5.current();
      if (currentResult != null) {
        if (typeof currentResult !== "string") {
          return currentResult.then((currentResult) => {
            if (typeof currentResult === "string") {
              obj(callback(obj[3]).extractPathFromURL(closure_1_3, currentResult));
            }
            return closure_1_17(currentResult);
          });
        } else {
          obj(callback(632).extractPathFromURL(prefixes, currentResult));
        }
      }
      callback = callback(currentResult);
    }
    obj = {
      then(arg0) {
        if (arg0) {
          let tmp2 = arg0(tmp);
        } else {
          tmp2 = tmp;
        }
        return Promise.resolve(tmp2);
      },
      catch: function _catch() {
        return obj;
      }
    };
    return obj;
  }, items1);
  const effect2 = flag.useEffect(() => fn2(function listener(currentResult) {
    if (closure_1_2) {
      const current = closure_1_0.current;
      if (current) {
        const tmp3 = closure_1_17(currentResult);
      }
      if (current) {
        if (tmp3) {
          closure_1_1(callback(table[3]).extractPathFromURL(closure_1_3, currentResult));
          callback = obj.getRootState();
          const routes = tmp3.routes;
          if (!routes.some((name) => {
            let hasItem = routeNames != null;
            if (hasItem) {
              routeNames = routeNames.routeNames;
              hasItem = routeNames.includes(name.name);
            }
            return !hasItem;
          })) {
            currentResult = closure_1_16.current(tmp3, closure_1_13.current);
            if (currentResult !== undefined) {
              try {
                obj.dispatch(currentResult);
              } catch (tmp22) {
                let str = tmp22;
                let tmp25Result = globalThis;
                if (typeof tmp22 === "object") {
                  if (str != null) {
                    str = "An error occurred when trying to handle the link '";
                    tmp25Result = tmp25("An error occurred when trying to handle the link '" + tmp + "': " + str.message);
                  }
                }
              }
            } else {
              obj.resetRoot(tmp3);
            }
          }
        }
      }
    }
  }), items2);
  return { getInitialState };
}
