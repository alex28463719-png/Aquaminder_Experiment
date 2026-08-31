// Module ID: 639
// Function ID: 6813
// Name: useLinkBuilder
// Dependencies: [119, 534, 626]
// Exports: useLinkBuilder

// Module 639 (useLinkBuilder)
import getIteratorFn from "getIteratorFn" /* 119 */;

let closure_2 = _interopRequireWildcard(getIteratorFn);

export function useLinkBuilder() {
  context = options.useContext(context(context1[1]).NavigationHelpersContext);
  context1 = options.useContext(context(context1[1]).NavigationRouteContext);
  options = options.useContext(context(context1[2]).LinkingContext).options;
  const stateForPath = context(context1[1]).useStateForPath();
  let getPathFromState;
  if (options != null) {
    getPathFromState = options.getPathFromState;
  }
  if (getPathFromState == null) {
    getPathFromState = context(context1[1]).getPathFromState;
  }
  let getStateFromPath;
  if (options != null) {
    getStateFromPath = options.getStateFromPath;
  }
  if (getStateFromPath == null) {
    getStateFromPath = context(context1[1]).getStateFromPath;
  }
  let getActionFromState;
  if (options != null) {
    getActionFromState = options.getActionFromState;
  }
  if (getActionFromState == null) {
    getActionFromState = context(context1[1]).getActionFromState;
  }
  let enabled;
  if (options != null) {
    enabled = options.enabled;
  }
  let items = [enabled, , , , , ];
  let config;
  if (options != null) {
    config = options.config;
  }
  items[1] = config;
  let key;
  if (context1 != null) {
    key = context1.key;
  }
  items[2] = key;
  items[3] = context;
  items[4] = stateForPath;
  items[5] = getPathFromState;
  let config1;
  const callback = options.useCallback((name, params) => {
    let enabled;
    if (constructState != null) {
      enabled = constructState.enabled;
    }
    if (enabled !== false) {
      let flag = false;
      if (flag) {
        flag = false;
        if (obj != null) {
          flag = false;
          if (obj.key) {
            flag = false;
            if (stateForPath) {
              const findFocusedRouteResult = context(context1[1]).findFocusedRoute(stateForPath);
              let key;
              if (findFocusedRouteResult != null) {
                key = findFocusedRouteResult.key;
              }
              let someResult = obj.key === key;
              if (someResult) {
                const routes = flag.getState().routes;
                someResult = routes.some((key) => key.key === obj.key);
              }
              flag = someResult;
            }
          }
        }
      }
      obj = {};
      obj = { name, params };
      let items = [obj];
      obj.routes = items;
      constructState = function constructState(state) {
        if (state) {
          const first = state.routes[0];
          if (flag) {
            if (!first.state) {
              return obj;
            }
          }
          obj = {};
          const _Object = Object;
          obj = { state: constructState(first.state) };
          const items = [Object.assign({}, first, obj)];
          obj.routes = items;
          return obj;
        } else {
          return obj;
        }
      };
      let config;
      if (constructState != null) {
        config = constructState.config;
      }
      return getPathFromState(constructState(stateForPath), config);
    }
  }, items);
  if (options != null) {
    config1 = options.config;
  }
  const items1 = [config1, getStateFromPath, getActionFromState];
  return {
    buildHref: callback,
    buildAction: options.useCallback((str) => {
      if (str.startsWith("/")) {
        let config;
        if (options != null) {
          config = options.config;
        }
        const tmp6Result = getStateFromPath(str, config);
        if (tmp6Result) {
          let config1;
          if (options != null) {
            config1 = options.config;
          }
          let resetResult = getActionFromState(tmp6Result, config1);
          if (resetResult == null) {
            const CommonActions = context(context1[1]).CommonActions;
            resetResult = CommonActions.reset(tmp6Result);
          }
          return resetResult;
        } else {
          const _Error2 = Error;
          const error = new Error("Failed to parse the href to a navigation state.");
          throw error;
        }
        const tmp6 = getStateFromPath;
      } else {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const error1 = new Error("The href must start with '/' (" + str + ").");
        throw error1;
      }
    }, items1)
  };
}
