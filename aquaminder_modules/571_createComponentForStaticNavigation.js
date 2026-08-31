// Module ID: 571
// Function ID: 6267
// Name: createComponentForStaticNavigation
// Dependencies: [1, 6, 203, 38, 119, 251, 572, 573]
// Exports: createPathConfigForStaticNavigation

// Module 571 (createComponentForStaticNavigation)
import _toConsumableArray from "_toConsumableArray" /* 6 */;
import _slicedToArray from "_slicedToArray" /* 38 */;
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import useRoute from "useRoute" /* 572 */;
import module_1 from "module_1" /* 1 */;
import closure_6 from "jsxProd" /* 251 */;

function createComponentForStaticNavigation(config, RootNavigator) {
  ({ Navigator: require, Group: dependencyMap, Screen } = config);
  config = config.config;
  ({ screens, groups } = config);
  closure_3 = closure_3.default(config, closure_8);
  if (screens == null) {
    if (groups == null) {
      const _Error = Error;
      const error = new Error("Couldn't find a 'screens' or 'groups' property. Make sure to define your screens under a 'screens' property in the configuration.");
      throw error;
    }
  }
  const items = [];
  for (const key10019 in config) {
    let tmp11 = key10019;
    if (key10019 === "screens") {
      if (screens) {
        let push = items.push;
        let tmp = Screen;
        let tmp2 = getItemsFromScreens;
        let applyResult = push.apply(items, Screen.default(getItemsFromScreens(Screen, screens)));
      }
    }
    if (key10019 !== "groups") {
      continue;
    } else {
      if (!groups) {
        continue;
      } else {
        let push2 = items.push;
        let tmp4 = Screen;
        let _Object = Object;
        let entries = Object.entries(groups);
        let applyResult1 = push2.apply(items, Screen.default(entries.map((arg0) => {
          const defaultResult = items.default(arg0, 2);
          closure_0 = defaultResult[0];
          const _if = tmp2.if;
          const defaultResult1 = closure_3.default(tmp2, closure_1_9);
          closure_3 = closure_1_11(defaultResult1, defaultResult1.screens);
          return () => {
            let tmp2 = _if == null;
            const mapped = closure_3.map((arg0) => arg0());
            if (!tmp2) {
              tmp2 = _if();
            }
            if (tmp2) {
              const _Object = Object;
              let obj = { navigationKey: closure_0 };
              obj = { children: mapped };
              return <_if key={closure_0} {...Object.assign(obj, defaultResult1, obj)} />;
            } else {
              return null;
            }
          };
        })));
        continue;
      }
      continue;
    }
    continue;
  }
  class NavigatorComponent {
    constructor() {
      obj = { children: closure_4.map((arg0) => arg0()) };
      return closure_1_6.jsx(Navigator, Object.assign({}, closure_3, obj));
    }
  }
  NavigatorComponent.displayName = RootNavigator;
  return NavigatorComponent;
}
let closure_2 = module_1(_toConsumableArray);
let closure_3 = module_1(_objectWithoutProperties);
let closure_4 = module_1(_slicedToArray);
const getIteratorFn = _interopRequireWildcard(getIteratorFn2);
let closure_7 = ["screen", "if"];
let closure_8 = ["screens", "groups"];
let closure_9 = ["if"];
const memoResult = getIteratorFn.memo((component) => getIteratorFn.createElement(component.component, { route: useRoute.useRoute() }));
memoResult.displayName = "Memo(Screen)";
function getItemsFromScreens(Screen, screens) {
  closure_0 = Screen;
  const entries = Object.entries(screens);
  return entries.map((arg0) => {
    const defaultResult = closure_1_4.default(arg0, 2);
    const first = defaultResult[0];
    closure_1 = {};
    if ("screen" in defaultResult[1]) {
      const screen = tmp3.screen;
      const _if = tmp3.if;
      closure_1 = closure_1_3.default(tmp3, closure_1_7);
      let tmp6 = screen;
      let flag = false;
      if (!Screen(closure_1_1[7]).isValidElementType(screen)) {
        flag = false;
        if ("config" in screen) {
          const _HermesInternal2 = HermesInternal;
          tmp6 = closure_1_13(screen, "" + first + "Navigator");
          flag = true;
        }
      }
    } else {
      tmp6 = tmp3;
      flag = false;
      if (!Screen(closure_1_1[7]).isValidElementType(tmp3)) {
        flag = false;
        if ("config" in tmp3) {
          const _HermesInternal = HermesInternal;
          tmp6 = closure_1_13(tmp3, "" + first + "Navigator");
          flag = true;
        }
      }
    }
    if (tmp6 == null) {
      const _Error = Error;
      const _HermesInternal3 = HermesInternal;
      const error = new Error("Couldn't find a 'screen' property for the screen '" + first + "'. This can happen if you passed 'undefined'. You likely forgot to export your component from the file it's defined in, or mixed up default import and named import when importing.");
      throw error;
    } else {
      if (flag) {
        let element = <tmp6 />;
      } else {
        let obj = { component: tmp6 };
        element = <closure_1_10 component={tmp6} />;
      }
      return () => {
        let tmp = _if == null;
        if (!tmp) {
          tmp = _if();
        }
        if (tmp) {
          const _Object = Object;
          let obj = { name: first };
          obj = {
            children() {
                return closure_1_3;
              }
          };
          return <first key={first} {...Object.assign(obj, closure_1, obj)} />;
        } else {
          return null;
        }
      };
    }
  });
}

export { createComponentForStaticNavigation };
export function createPathConfigForStaticNavigation(config, initialRouteName, arg2) {
  closure_0 = arg2;
  function createPathConfigForTree(config, initialRouteName, arg2) {
    closure_0 = config;
    let obj = initialRouteName;
    closure_2 = arg2;
    function createPathConfigForScreens(screens, initialRouteName) {
      closure_0 = initialRouteName;
      const entries = Object.entries(screens);
      const sorted = entries.sort((arg0, arg1) => {
        if (closure_3_4.default(arg0, 1)[0] === closure_0) {
          return -1;
        } else {
          return tmp === closure_0 ? 1 : 0;
        }
      });
      const mapped = sorted.map((arg0) => {
        const defaultResult = closure_3_4.default(arg0, 2);
        obj = {};
        if ("linking" in defaultResult[1]) {
          if (typeof tmp2.linking === "string") {
            obj.path = tmp2.linking;
          } else {
            const _Object = Object;
            const merged = Object.assign(obj, tmp2.linking);
          }
          if (typeof obj.path === "string") {
            obj.path = obj.path.replace(/^\//, "").replace(/\/$/, "");
            const str3 = obj.path;
            const str5 = obj.path.replace(/^\//, "");
          }
        }
        let tmp5 = closure_1_2;
        if (!closure_1_2) {
          let tmp7 = obj.path != null;
          if (tmp7) {
            tmp7 = obj.path !== "";
          }
          tmp5 = tmp7;
        }
        if ("config" in defaultResult[1]) {
          let tmp8 = callback(tmp2, undefined, tmp5);
        } else if ("screen" in tmp2) {
          if ("config" in tmp2.screen) {
            if (tmp2.screen.config.screens) {
              tmp8 = callback(tmp2.screen, undefined, tmp5);
            }
          }
        }
        if (tmp8) {
          obj.screens = tmp8;
        }
        if (closure_0) {
          if (!obj.screens) {
            if (!("linking" in tmp2)) {
              if (obj.path != null) {
                if (!closure_1_2) {
                  if (obj.path === "") {
                    obj = undefined;
                  }
                }
              } else {
                const str9 = str.replace(/([A-Z]+)/g, "-$1");
                obj.path = str.replace(/([A-Z]+)/g, "-$1").replace(/^-/, "").toLowerCase();
                const str11 = str.replace(/([A-Z]+)/g, "-$1").replace(/^-/, "");
              }
            }
          }
        }
        const items = [defaultResult[0], obj];
        return items;
      });
      return Object.fromEntries(mapped.filter((arg0) => Object.keys(closure_3_4.default(arg0, 2)[1]).length > 0));
    }
    obj = {};
    const keys = Object.keys();
    if (keys !== undefined) {
      while (keys[tmp] !== undefined) {
        let tmp10 = tmp5;
        let tmp6 = tmp2;
        if (tmp5 === "screens") {
          tmp6 = tmp2;
          if (config.config.screens) {
            initialRouteName = undefined;
            if (initialRouteName != null) {
              initialRouteName = initialRouteName.initialRouteName;
            }
            if (initialRouteName == null) {
              initialRouteName = config.config.initialRouteName;
            }
            let merged = Object.assign(obj, createPathConfigForScreens(config.config.screens, initialRouteName));
            tmp6 = initialRouteName;
          }
        }
        tmp2 = tmp6;
        if (tmp5 !== "groups") {
          continue;
        } else {
          tmp2 = tmp6;
          if (!config.config.groups) {
            continue;
          } else {
            let _Object = Object;
            let entries = Object.entries(config.config.groups);
            let item = entries.forEach((arg0) => {
              let initialRouteName;
              if (obj != null) {
                initialRouteName = obj.initialRouteName;
              }
              if (initialRouteName == null) {
                initialRouteName = config.config.initialRouteName;
              }
              const merged = Object.assign(obj, createPathConfigForScreens(closure_2_4.default(arg0, 2)[1].screens, initialRouteName));
            });
            tmp2 = tmp6;
            continue;
          }
          continue;
        }
        continue;
      }
    }
    if (Object.keys(obj).length !== 0) {
      return obj;
    }
  }
  const pathConfigForTree = createPathConfigForTree(config, initialRouteName, false);
  if (arg2) {
    if (dependencyMap) {
      dependencyMap.path = "";
    }
  }
  return pathConfigForTree;
}
