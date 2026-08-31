// Module ID: 638
// Function ID: 6806
// Name: createStaticNavigation
// Dependencies: [1, 203, 119, 251, 534, 628]
// Exports: createStaticNavigation

// Module 638 (createStaticNavigation)
import getIteratorFn from "getIteratorFn" /* 119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import module_1 from "module_1" /* 1 */;
import closure_4 from "jsxProd" /* 251 */;

let closure_2 = module_1(_objectWithoutProperties);
let closure_3 = _interopRequireWildcard(getIteratorFn);
let closure_5 = ["linking"];

export function createStaticNavigation(config) {
  const _require = config;
  dependencyMap = _require(534).createComponentForStaticNavigation(config, "RootNavigator");
  return React.forwardRef(function Navigation(linking, ref) {
    linking = linking.linking;
    let enabled;
    if (linking != null) {
      enabled = linking.enabled;
    }
    const items = [enabled, , ];
    let path;
    if (linking != null) {
      config = linking.config;
      if (config != null) {
        path = config.path;
      }
    }
    items[1] = path;
    let initialRouteName;
    if (linking != null) {
      let config2 = linking.config;
      if (config2 != null) {
        initialRouteName = config2.initialRouteName;
      }
    }
    items[2] = initialRouteName;
    const memo = closure_1_3.useMemo(() => {
      let obj = {};
      let initialRouteName;
      if (linking != null) {
        config = linking.config;
        if (config != null) {
          initialRouteName = config.initialRouteName;
        }
      }
      obj.initialRouteName = initialRouteName;
      let enabled;
      if (linking != null) {
        enabled = linking.enabled;
      }
      const pathConfigForStaticNavigation = linking(memo[4]).createPathConfigForStaticNavigation(linking, obj, enabled === "auto");
      if (pathConfigForStaticNavigation) {
        obj = {};
        let path;
        if (linking != null) {
          const config2 = linking.config;
          if (config2 != null) {
            path = config2.path;
          }
        }
        obj.path = path;
        let initialRouteName1;
        if (linking != null) {
          const config3 = linking.config;
          if (config3 != null) {
            initialRouteName1 = config3.initialRouteName;
          }
        }
        obj.initialRouteName = initialRouteName1;
        obj.screens = pathConfigForStaticNavigation;
        return obj;
      }
      const tmp = linking;
    }, items);
    const items1 = [linking, memo];
    let enabled1;
    const memo1 = closure_1_3.useMemo(() => {
      if (linking) {
        if (typeof linking.enabled === "boolean") {
          let enabled = linking.enabled;
        } else {
          let screens;
          if (memo != null) {
            screens = memo.screens;
          }
          enabled = screens != null;
        }
        const _Object = Object;
        const obj = { enabled, config: memo };
        return Object.assign({}, linking, obj);
      }
    }, items1);
    if (linking != null) {
      enabled1 = linking.enabled;
    }
    if (enabled1 === true) {
      let screens;
      if (memo != null) {
        screens = memo.screens;
      }
      if (screens == null) {
        const _Error = Error;
        const error = new Error("Linking is enabled but no linking configuration was found for the screens.\n\nTo solve this:\n- Specify a 'linking' property for the screens you want to link to.\n- Or set 'linking.enabled' to 'auto' to generate paths automatically.\n\nSee usage guide: https://reactnavigation.org/docs/static-configuration#linking");
        throw error;
      }
    }
    let obj = { ref, linking: memo1, children: <memo /> };
    return closure_1_4.jsx(config(table[5]).NavigationContainer, Object.assign({}, closure_1_2.default(linking, closure_1_5), obj));
  });
}
