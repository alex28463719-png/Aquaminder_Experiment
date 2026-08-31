// Module ID: 550
// Function ID: 6097
// Name: TabActions
// Dependencies: [1, 6, 547, 548]
// Exports: TabRouter

// Module 550 (TabActions)
import _toConsumableArray from "_toConsumableArray" /* 6 */;
import module_1 from "module_1" /* 1 */;

let closure_2 = module_1(_toConsumableArray);
let obj = {
  jumpTo(name, params) {
    const payload = { name, params };
    return { type: "JUMP_TO", payload };
  }
};
function getRouteHistory(routes, index, arg2, arg3) {
  let diff = index;
  closure_0 = arg3;
  obj = { type: "route", key: routes[index].key };
  const items = [obj];
  if ("order" === arg2) {
    if (diff > 0) {
      do {
        obj = { type: "route", key: routes[diff - 1].key };
        let arr = items.unshift(obj);
        diff = diff - 1;
      } while (diff > 0);
    }
  } else if ("firstRoute" === arg2) {
    if (diff !== 0) {
      obj = { type: "route", key: routes[0].key };
      items.unshift(obj);
    }
  } else if ("initialRoute" === arg2) {
    const findIndexResult = routes.findIndex((name) => name.name === closure_0);
    let num2 = 0;
    if (findIndexResult !== -1) {
      num2 = findIndexResult;
    }
    if (diff !== num2) {
      const obj1 = { type: "route", key: routes[num2].key };
      items.unshift(obj1);
    }
  }
  return items;
}
function changeIndex(history, index) {
  let str = history.history;
  if (arg2 !== "history") {
    if (arg2 !== "fullHistory") {
      const _Object = Object;
      obj = { index, history: getRouteHistory(history.routes, index, arg2, arg3) };
      return Object.assign({}, history, obj);
    }
  }
  let key = history.routes[index].key;
  if (arg2 === "history") {
    let found = str.filter((type) => {
      let flag = false;
      if (type.type === "route") {
        flag = type.key !== key;
      }
      return flag;
    });
  } else {
    found = str;
    if (arg2 === "fullHistory") {
      const findLastIndexResult = str.findLastIndex((type) => type.type === "route");
      key = undefined;
      if (str[findLastIndexResult] != null) {
        key = tmp12.key;
      }
      found = str;
      if (key === key) {
        const items = [];
        found = items.concat(closure_2.default(str.slice(0, findLastIndexResult)), closure_2.default(str.slice(findLastIndexResult + 1)));
        const defaultResult = closure_2.default(str.slice(0, findLastIndexResult));
      }
    }
  }
  str = "route";
  const combined = found.concat({ type: "route", key });
}

export function TabRouter(defaultResult) {
  ({ initialRouteName: require, backBehavior } = defaultResult);
  let str = "firstRoute";
  if (backBehavior !== undefined) {
    str = backBehavior;
  }
  obj = {
    type: "tab",
    getInitialState(arg0) {
      ({ routeNames, routeParamList: closure_0 } = arg0);
      let num = 0;
      if (closure_0 !== undefined) {
        num = 0;
        if (routeNames.includes(closure_0)) {
          num = routeNames.indexOf(closure_0);
        }
      }
      const mapped = routeNames.map((name) => ({ name, key: "" + name + "-" + closure_2_0(str[3]).nanoid(), params: table[name] }));
      obj = { stale: false, type: "tab", key: "tab-" + closure_1_0(str[3]).nanoid(), index: num, routeNames, history: closure_1_4(mapped, num, str, closure_0), routes: mapped, preloadedRouteKeys: [] };
      return obj;
    },
    getRehydratedState(stale) {
      ({ routeNames, routeParamList: closure_0 } = arg1);
      closure_1 = stale;
      if (stale.stale === false) {
        return stale;
      } else {
        const mapped = routeNames.map((name) => {
          dependencyMap = name;
          const routes = stale.routes;
          const found = routes.find((name) => name.name === closure_0);
          obj = { name };
          if (found) {
            if (found.name === name) {
              if (found.key) {
                let key = found.key;
              }
              obj.key = key;
              if (dependencyMap[name] !== undefined) {
                let params;
                if (found) {
                  params = found.params;
                }
                params = Object.assign({}, dependencyMap[name], params);
              } else if (found) {
                params = found.params;
              }
              obj.params = params;
              return tmp3({}, found, obj);
            }
          }
          key = "" + name + "-" + closure_2_0(str[3]).nanoid();
        });
        let index;
        if (stale != null) {
          index = stale.index;
        }
        let num2 = 0;
        if (index != null) {
          num2 = index;
        }
        let name;
        if (stale.routes[num2] != null) {
          name = tmp2.name;
        }
        const bound = Math.min(Math.max(routeNames.indexOf(name), 0), mapped.length - 1);
        closure_2 = mapped.map((key) => key.key);
        const history = stale.history;
        let found;
        if (history != null) {
          found = history.filter((key) => closure_2.includes(key.key));
        }
        if (found == null) {
          found = [];
        }
        obj = { stale: false, type: "tab" };
        const _HermesInternal = HermesInternal;
        obj.key = "tab-" + closure_1_0("tab-"[3]).nanoid();
        obj.index = bound;
        obj.routeNames = routeNames;
        obj.history = found;
        obj.routes = mapped;
        const preloadedRouteKeys = stale.preloadedRouteKeys;
        let found1;
        if (preloadedRouteKeys != null) {
          found1 = preloadedRouteKeys.filter((name) => closure_2.includes(name));
        }
        if (found1 == null) {
          found1 = [];
        }
        obj.preloadedRouteKeys = found1;
        return closure_1_5(obj, bound, closure_1, closure_0);
      }
    },
    getStateForRouteNamesChange(history) {
      closure_0 = history;
      ({ routeNames, routeParamList: str, routeKeyChanges: closure_2 } = arg1);
      const mapped = routeNames.map((name) => {
        history = name;
        const routes = history.routes;
        let found = routes.find((name) => {
          let tmp = name.name === closure_0;
          if (tmp) {
            tmp = !closure_1_2.includes(name.name);
          }
          return tmp;
        });
        if (!found) {
          obj = { name };
          const _HermesInternal = HermesInternal;
          obj.key = "" + name + "-" + closure_2_0(""[3]).nanoid();
          obj.params = table[name];
          found = obj;
        }
        return found;
      });
      const bound = Math.max(0, routeNames.indexOf(history.routes[history.index].name));
      history = history.history;
      let found = history.filter((type) => {
        closure_0 = type;
        let found = type.type !== "route";
        if (!found) {
          found = mapped.find((key) => key.key === type.key);
        }
        return found;
      });
      let tmp3 = found;
      if (!found.length) {
        tmp3 = closure_1_4(mapped, bound, str, closure_0);
      }
      obj = { history: tmp3, routeNames, routes: mapped, index: bound };
      return Object.assign({}, history, obj);
    },
    getStateForRouteFocus(routes) {
      closure_0 = arg1;
      routes = routes.routes;
      const findIndexResult = routes.findIndex((key) => key.key === closure_0);
      if (findIndexResult !== -1) {
        if (findIndexResult !== routes.index) {
          return closure_1_5(routes, findIndexResult, str, closure_0);
        }
      }
      return routes;
    },
    getStateForAction(history, type, routeParamList) {
      closure_0 = history;
      closure_1 = type;
      routeParamList = routeParamList.routeParamList;
      const routeGetIdList = routeParamList.routeGetIdList;
      type = type.type;
      if ("JUMP_TO" !== type) {
        if ("NAVIGATE" !== type) {
          if ("NAVIGATE_DEPRECATED" !== type) {
            if ("GO_BACK" === type) {
              if (history.history.length === 1) {
                return null;
              } else {
                let key;
                if (history.history[history.history.length - 2] != null) {
                  key = tmp24.key;
                }
                const routes2 = history.routes;
                const findLastIndexResult = routes2.findLastIndex((key) => key.key === key);
                if (findLastIndexResult === -1) {
                  return null;
                } else {
                  let _Object3 = Object;
                  obj = {};
                  const preloadedRouteKeys = history.preloadedRouteKeys;
                  obj.preloadedRouteKeys = preloadedRouteKeys.filter((arg0) => arg0 !== history.routes[closure_6].key);
                  history = history.history;
                  obj.history = history.slice(0, -1);
                  obj.index = findLastIndexResult;
                  return Object.assign({}, history, obj);
                }
              }
            } else if ("PRELOAD" === type) {
              let routes = history.routes;
              const findIndexResult = routes.findIndex((name) => name.name === type.payload.name);
              if (findIndexResult === -1) {
                return null;
              } else {
                closure_8 = tmp21;
                let tmp22Result;
                if (routeGetIdList[history.routes[findIndexResult].name] != null) {
                  obj = { params: tmp21.params };
                  tmp22Result = tmp22(obj);
                }
                tmp22Result = undefined;
                if (routeGetIdList[history.routes[findIndexResult].name] != null) {
                  obj = { params: type.payload.params };
                  tmp22Result = tmp22(obj);
                }
                if (tmp22Result === tmp22Result) {
                  key = tmp21.key;
                } else {
                  let _HermesInternal = HermesInternal;
                  key = "" + tmp21.name + "-" + closure_1_0(str[3]).nanoid();
                }
                if (type.payload.params !== undefined) {
                  let _Object = Object;
                  let merged = Object.assign({}, routeParamList[tmp21.name], type.payload.params);
                }
                let merged1 = tmp21;
                if (merged !== history.routes[findIndexResult].params) {
                  let _Object2 = Object;
                  const obj1 = { key, params: merged };
                  merged1 = Object.assign({}, tmp21, obj1);
                }
                const obj2 = {};
                const preloadedRouteKeys1 = history.preloadedRouteKeys;
                const found = preloadedRouteKeys1.filter((arg0) => arg0 !== closure_8.key);
                obj2.preloadedRouteKeys = found.concat(merged1.key);
                routes = history.routes;
                obj2.routes = routes.map((arg0, arg1) => {
                  let tmp = arg0;
                  if (arg1 === closure_7) {
                    tmp = merged1;
                  }
                  return tmp;
                });
                if (key === history.routes[findIndexResult].key) {
                  history = history.history;
                } else {
                  const history1 = history.history;
                  history = history1.filter((key) => key.key !== closure_8.key);
                }
                obj2.history = history;
                return Object.assign({}, history, obj2);
              }
            } else {
              const BaseRouter = closure_1_0(str[2]).BaseRouter;
              return BaseRouter.getStateForAction(history, type);
            }
          }
        }
      }
      const routes3 = history.routes;
      const findIndexResult1 = routes3.findIndex((name) => name.name === type.payload.name);
      if (findIndexResult1 === -1) {
        return null;
      } else {
        let _Object4 = Object;
        const obj3 = {};
        const routes1 = history.routes;
        obj3.routes = routes1.map((name) => {
          if (name.name !== type.payload.name) {
            return name;
          } else {
            let tmp;
            if (routeGetIdList[name.name] != null) {
              obj = { params: name.params };
              tmp = tmp28(obj);
            }
            let tmp2;
            if (routeGetIdList[name.name] != null) {
              obj = { params: type.payload.params };
              tmp2 = tmp28(obj);
            }
            if (tmp === tmp2) {
              key = name.key;
            } else {
              const _HermesInternal = HermesInternal;
              key = "" + name.name + "-" + closure_2_0(str[3]).nanoid();
            }
            if (type.type === "NAVIGATE") {
              if (type.payload.merge) {
                if (tmp4) {
                  if (type.payload.params === undefined) {
                    if (routeParamList[name.name] === undefined) {
                      let params2 = name.params;
                    }
                  }
                  const _Object2 = Object;
                  const _Object3 = Object;
                  params2 = Object.assign({}, routeParamList[name.name], name.params, type.payload.params);
                }
              }
            }
            if (routeParamList[name.name] !== undefined) {
              const _Object = Object;
              let params = Object.assign({}, routeParamList[name.name], type.payload.params);
            } else {
              params = type.payload.params;
            }
            if (type.type === "NAVIGATE") {
              if (type.payload.path != null) {
                let path = type.payload.path;
              }
              if (params !== name.params) {
                const _Object4 = Object;
                obj = { key, path, params };
                let merged = Object.assign({}, name, obj);
              } else {
                merged = name;
              }
              return merged;
            }
            path = name.path;
          }
        });
        const tmp31 = closure_1_5(Object.assign({}, history, obj3), findIndexResult1, closure_1, closure_0);
        closure_4 = tmp31;
        const _Object5 = Object;
        const obj4 = {};
        const preloadedRouteKeys2 = tmp31.preloadedRouteKeys;
        obj4.preloadedRouteKeys = preloadedRouteKeys2.filter((arg0) => arg0 !== history.routes[index.index].key);
        return Object.assign({}, tmp31, obj4);
      }
    },
    actionCreators: obj
  };
  return Object.assign({}, require(str[2]).BaseRouter, obj);
}
export const TabActions = obj;
