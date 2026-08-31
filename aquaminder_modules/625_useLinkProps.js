// Module ID: 625
// Function ID: 6722
// Name: useLinkProps
// Dependencies: [119, 2, 534, 626]
// Exports: useLinkProps

// Module 625 (useLinkProps)
import getIteratorFn from "getIteratorFn" /* 119 */;
import closure_3 from "get registerCallableModule" /* 2 */;

let closure_2 = _interopRequireWildcard(getIteratorFn);
function getStateFromParams(params) {
  if (params != null) {
    if (params.state) {
      return params.state;
    }
  }
  if (params != null) {
    if (params.screen) {
      let obj = {};
      obj = {};
      ({ screen: obj2.name, params: obj2.params } = params);
      let tmp;
      if (params.screen) {
        tmp = getStateFromParams(params.params);
      }
      obj.state = tmp;
      const items = [obj];
      obj.routes = items;
      return obj;
    }
  }
}

export function useLinkProps(screen) {
  screen = screen.screen;
  const params = screen.params;
  ({ href, action: closure_2 } = screen);
  const Platform = React.useContext(screen(params[2]).NavigationContainerRefContext);
  getStateFromParams = React.useContext(screen(params[2]).NavigationHelpersContext);
  const options = React.useContext(screen(params[3]).LinkingContext).options;
  let getPathFromState;
  if (options != null) {
    getPathFromState = options.getPathFromState;
  }
  if (getPathFromState == null) {
    getPathFromState = screen(params[2]).getPathFromState;
  }
  let obj = {};
  if (href == null) {
    let pathFromState;
    if (Platform.Platform.OS === "web") {
      if (screen != null) {
        obj = {};
        obj = { name: screen, params, state: getStateFromParams(params) };
        let items = [obj];
        obj.routes = items;
        let config;
        if (options != null) {
          config = options.config;
        }
        pathFromState = getPathFromState(obj, config);
      }
    }
    href = pathFromState;
  }
  obj.href = href;
  obj.role = "link";
  obj.onPress = function onPress(metaKey) {
    if (Platform.Platform.OS === "web") {
      if (metaKey) {
        let tmp = "metaKey" in metaKey && metaKey.metaKey;
        if (!tmp) {
          tmp = "altKey" in metaKey && metaKey.altKey;
          const tmp2 = "altKey" in metaKey && metaKey.altKey;
        }
        if (!tmp) {
          tmp = "ctrlKey" in metaKey && metaKey.ctrlKey;
          const tmp3 = "ctrlKey" in metaKey && metaKey.ctrlKey;
        }
        if (!tmp) {
          tmp = "shiftKey" in metaKey && metaKey.shiftKey;
          const tmp4 = "shiftKey" in metaKey && metaKey.shiftKey;
        }
        let flag = true;
        if ("button" in metaKey) {
          let tmp6 = metaKey.button == null;
          if (!tmp6) {
            tmp6 = metaKey.button === 0;
          }
          flag = tmp6;
        }
        let flag2 = true;
        if (metaKey.currentTarget) {
          flag2 = true;
          if ("target" in metaKey.currentTarget) {
            const items = [undefined, null, "", "self"];
            flag2 = items.includes(metaKey.currentTarget.target);
          }
        }
        let flag3 = false;
        if (!tmp) {
          flag3 = false;
          if (flag) {
            flag3 = false;
            if (flag2) {
              flag3 = true;
              if (metaKey.preventDefault != null) {
                metaKey.preventDefault();
                flag3 = true;
              }
            }
          }
        }
      }
      if (flag3) {
        if (closure_2) {
          if (tmp13) {
            navigation.dispatch(closure_2);
          } else if (Platform) {
            Platform.dispatch(closure_2);
          } else {
            const _Error = Error;
            const error = new Error("Couldn't find a navigation object. Is your component inside NavigationContainer?");
            throw error;
          }
        } else if (tmp13 != null) {
          navigation.navigate(screen, params);
        }
      }
    }
    flag3 = true;
    if (!tmp10) {
      metaKey.preventDefault();
      flag3 = true;
    }
  };
  return obj;
}
