// Module ID: 578
// Function ID: 6315
// Name: getActionFromState
// Dependencies: [1, 38]
// Exports: getActionFromState

// Module 578 (getActionFromState)
import _slicedToArray from "_slicedToArray" /* 38 */;
import module_1 from "module_1" /* 1 */;

let closure_0 = module_1(_slicedToArray);
function createNormalizedConfigItem(obj) {
  if (typeof obj === "object") {
    if (obj != null) {
      obj = { initialRouteName: obj.initialRouteName };
      let tmp3;
      if (obj.screens != null) {
        tmp3 = createNormalizedConfigs(obj.screens);
      }
      obj.screens = tmp3;
    }
    return {};
  }
}
function createNormalizedConfigs(arg0) {
  const entries = Object.entries(arg0);
  return entries.reduce((arg0, arg1) => {
    const defaultResult = closure_1_0.default(arg1, 2);
    arg0[defaultResult[0]] = closure_1_1(defaultResult[1]);
    return arg0;
  }, {});
}

export function getActionFromState(index) {
  if (arg1) {
    let obj = createNormalizedConfigItem(arg1);
  } else {
    obj = {};
  }
  if (index.index != null) {
    routes = index.routes;
    let substr = routes.slice(0, index.index + 1);
  } else {
    substr = index.routes;
  }
  if (substr.length !== 0) {
    if (substr.length !== 1) {
      if (substr.length === 2) {
        if (substr[0].key === undefined) {
          let initialRouteName;
          if (obj != null) {
            initialRouteName = obj.initialRouteName;
          }
        }
      }
      obj = { type: "RESET", payload: index };
      return obj;
    }
    ({ index, routes } = index);
    if (index == null) {
      index = index.routes.length - 1;
    }
    let state;
    if (routes[index] != null) {
      state = tmp3.state;
    }
    if (obj != null) {
      const screens = obj.screens;
      if (screens != null) {
        let name;
        if (tmp3 != null) {
          name = tmp3.name;
        }
        let tmp5 = screens[name];
      }
    }
    const _Object = Object;
    const merged = Object.assign({}, tmp3.params);
    let tmp9;
    if (routes[index]) {
      obj = {};
      ({ name: obj3.name, path: obj3.path } = tmp3);
      obj.params = merged;
      tmp9 = obj;
    }
    if (tmp9) {
      if (tmp5 != null) {
        if (tmp5.screens) {
          const _Object2 = Object;
          if (Object.keys(tmp5.screens).length) {
            tmp9.pop = true;
          }
        }
      }
    }
    let tmp10 = merged;
    if (state) {
      while (state.routes.length !== 0) {
        if (state.index != null) {
          let routes1 = state.routes;
          let substr1 = routes1.slice(0, state.index + 1);
        } else {
          substr1 = state.routes;
        }
        let tmp16 = substr1[substr1.length - 1];
        let _Object3 = Object;
        let obj1 = { initial: undefined, screen: undefined, params: undefined, state: undefined };
        let merged1 = Object.assign(tmp10, obj1);
        if (substr1.length === 1) {
          if (substr1[0].key === undefined) {
            tmp10.initial = true;
            tmp10.screen = tmp16.name;
            let tmp19 = tmp11;
            if (tmp16.state) {
              let _Object4 = Object;
              tmp10.params = Object.assign({}, tmp16.params);
              tmp10.pop = true;
              let params = tmp10.params;
            } else {
              ({ path: tmp10.path, params: tmp10.params } = tmp16);
              params = tmp10;
            }
            state = tmp16.state;
            let tmp20;
            if (tmp5 != null) {
              let screens2 = tmp5.screens;
              if (screens2 != null) {
                tmp20 = screens2[tmp16.name];
              }
            }
            if (tmp20 != null) {
              if (tmp20.screens) {
                let _Object5 = Object;
                if (Object.keys(tmp20.screens).length) {
                  params.pop = true;
                }
              }
            }
            tmp5 = tmp20;
            tmp10 = params;
            tmp11 = tmp19;
          }
        }
        if (substr1.length === 2) {
          if (substr1[0].key === undefined) {
            let initialRouteName1;
            if (tmp5 != null) {
              initialRouteName1 = tmp5.initialRouteName;
            }
            if (substr1[0].name === initialRouteName1) {
              if (substr1[1].key === undefined) {
                tmp10.initial = false;
                tmp10.screen = tmp16.name;
                tmp19 = tmp5;
              }
            }
          }
        }
        tmp10.state = state;
      }
    }
    if (tmp9 == null) {
      if (tmp9) {
        const obj2 = { type: "NAVIGATE", payload: tmp9 };
        return obj2;
      }
    }
    tmp9.pop = true;
  }
}
