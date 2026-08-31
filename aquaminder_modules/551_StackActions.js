// Module ID: 551
// Function ID: 6130
// Name: StackActions
// Dependencies: [1, 6, 547, 548]
// Exports: StackRouter

// Module 551 (StackActions)
import _toConsumableArray from "_toConsumableArray" /* 6 */;
import module_1 from "module_1" /* 1 */;

let closure_2 = module_1(_toConsumableArray);
let obj = {
  replace(closure_14, displayName) {
    const payload = { name: closure_14, params: displayName };
    return { type: "REPLACE", payload };
  },
  push(name, params) {
    const payload = { name, params };
    return { type: "PUSH", payload };
  },
  pop() {
    let num = 1;
    if (arguments.length > 0) {
      num = 1;
      if (arguments[0] !== undefined) {
        num = arguments[0];
      }
    }
    const payload = { count: num };
    return { type: "POP", payload };
  },
  popToTop() {
    return { type: "POP_TO_TOP" };
  },
  popTo(name, params, flag) {
    if (typeof flag === "boolean") {
      const _console = console;
      console.warn("Passing a boolean as the third argument to 'popTo' is deprecated. Pass '{ merge: true }' instead.");
    }
    obj = { type: "POP_TO" };
    obj = { name, params };
    let tmp4 = flag;
    if (typeof flag !== "boolean") {
      let merge;
      if (flag != null) {
        merge = flag.merge;
      }
      tmp4 = merge;
    }
    obj.merge = tmp4;
    obj.payload = obj;
    return obj;
  }
};

export function StackRouter(arg0) {
  const _require = arg0;
  obj = {
    type: "stack",
    getInitialState(routeNames) {
      routeNames = routeNames.routeNames;
      if (lib.initialRouteName !== undefined) {
        if (routeNames.includes(lib.initialRouteName)) {
          let initialRouteName = lib.initialRouteName;
        }
        obj = { stale: false, type: "stack", key: null, index: 0 };
        const _HermesInternal = HermesInternal;
        obj.key = "stack-" + lib(merged[3]).nanoid();
        obj.routeNames = routeNames;
        obj.preloadedRoutes = [];
        obj = {};
        const _HermesInternal2 = HermesInternal;
        obj.key = "" + initialRouteName + "-" + lib(merged[3]).nanoid();
        obj.name = initialRouteName;
        obj.params = tmp[initialRouteName];
        const items = [obj];
        obj.routes = items;
        return obj;
      }
      initialRouteName = routeNames[0];
    },
    getRehydratedState(stale, routeNames) {
      routeNames = routeNames.routeNames;
      const routeParamList = routeNames.routeParamList;
      if (stale.stale === false) {
        return stale;
      } else {
        const routes = stale.routes;
        const found = routes.filter((name) => routeNames.includes(name.name));
        const mapped = found.map((key) => {
          obj = {};
          key = key.key;
          if (!key) {
            const _HermesInternal = HermesInternal;
            key = "" + key.name + "-" + callback(merged[3]).nanoid();
          }
          obj.key = key;
          if (routeParamList[key.name] !== undefined) {
            const _Object = Object;
            let params = Object.assign({}, routeParamList[key.name], key.params);
          } else {
            params = key.params;
          }
          obj.params = params;
          return Object.assign({}, key, obj);
        });
        const preloadedRoutes = stale.preloadedRoutes;
        let mapped1;
        if (preloadedRoutes != null) {
          const found1 = preloadedRoutes.filter((name) => routeNames.includes(name.name));
          mapped1 = found1.map((key) => {
            obj = {};
            key = key.key;
            if (!key) {
              const _HermesInternal = HermesInternal;
              key = "" + key.name + "-" + callback(merged[3]).nanoid();
            }
            obj.key = key;
            if (routeParamList[key.name] !== undefined) {
              const _Object = Object;
              let params = Object.assign({}, routeParamList[key.name], key.params);
            } else {
              params = key.params;
            }
            obj.params = params;
            return Object.assign({}, key, obj);
          });
        }
        if (mapped1 == null) {
          mapped1 = [];
        }
        if (mapped.length !== 0) {
          obj = { stale: false, type: "stack" };
          const _HermesInternal2 = HermesInternal;
          obj.key = "stack-" + lib(merged[3]).nanoid();
          obj.index = mapped.length - 1;
          obj.routeNames = routeNames;
          obj.routes = mapped;
          obj.preloadedRoutes = mapped1;
          return obj;
        } else {
          if (routeNames.initialRouteName !== undefined) {
            let initialRouteName = routeNames.initialRouteName;
          } else {
            initialRouteName = routeNames[0];
          }
          obj = {};
          let _HermesInternal = HermesInternal;
          obj.key = "" + initialRouteName + "-" + lib(merged[3]).nanoid();
          obj.name = initialRouteName;
          obj.params = routeParamList[initialRouteName];
          mapped.push(obj);
        }
      }
    },
    getStateForRouteNamesChange(routes, routeNames) {
      routeNames = routeNames.routeNames;
      const routeKeyChanges = routeNames.routeKeyChanges;
      routes = routes.routes;
      const found = routes.filter((name) => {
        let hasItem = routeNames.includes(name.name);
        if (hasItem) {
          hasItem = !routeKeyChanges.includes(name.name);
        }
        return hasItem;
      });
      if (found.length !== 0) {
        const _Object = Object;
        obj = { routeNames, routes: found };
        const _Math = Math;
        obj.index = Math.min(routes.index, found.length - 1);
        return Object.assign({}, routes, obj);
      } else {
        if (routeNames.initialRouteName === undefined) {
          let initialRouteName = routeNames[0];
          obj = {};
          const _HermesInternal = HermesInternal;
          obj.key = "" + initialRouteName + "-" + lib(merged[3]).nanoid();
          obj.name = initialRouteName;
          obj.params = routeNames.routeParamList[initialRouteName];
          found.push(obj);
          const nanoidResult = lib(merged[3]).nanoid();
        }
        initialRouteName = routeNames.initialRouteName;
      }
    },
    getStateForRouteFocus(routes) {
      closure_0 = arg1;
      routes = routes.routes;
      const findIndexResult = routes.findIndex((key) => key.key === closure_0);
      if (findIndexResult !== -1) {
        if (findIndexResult !== routes.index) {
          const _Object = Object;
          obj = { index: findIndexResult };
          routes = routes.routes;
          obj.routes = routes.slice(0, findIndexResult + 1);
          return Object.assign({}, routes, obj);
        }
      }
      return routes;
    },
    getStateForAction(key, type, routeParamList) {
      const lib = type;
      routeParamList = routeParamList.routeParamList;
      type = type.type;
      if ("REPLACE" === type) {
        let findLastResult = type;
        if (type.target === key.key) {
          findLastResult = type;
          if (type.source) {
            let routes7 = key.routes;
            let index2 = routes7.findIndex((key) => key.key === type.source);
          }
          if (index2 === -1) {
            findLastResult = null;
            return null;
          } else {
            const payload = type.payload;
            const name = payload.name;
            let params = payload.params;
            const routeNames4 = key.routeNames;
            if (routeNames4.includes(name)) {
              findLastResult = globalThis;
              const _Object20 = Object;
              obj = {};
              let routes = key.routes;
              obj.routes = routes.map((arg0, arg1) => {
                if (arg1 !== index2) {
                  return arg0;
                } else {
                  obj = {};
                  let tmp4 = globalThis;
                  const _HermesInternal = HermesInternal;
                  obj.key = "" + name + "-" + type(merged[3]).nanoid();
                  obj.name = name;
                  if (routeParamList[name] !== undefined) {
                    const _Object = tmp4.Object;
                    tmp4 = params;
                    obj = _Object.assign({}, routeParamList[name], params);
                  } else {
                    obj = params;
                  }
                  obj.params = obj;
                }
              });
              return Object.assign({}, key, obj);
            } else {
              findLastResult = null;
              return null;
            }
          }
        }
        index2 = key.index;
      } else {
        if ("PUSH" !== type) {
          if ("NAVIGATE" !== type) {
            if ("NAVIGATE_DEPRECATED" === type) {
              const preloadedRoutes = key.preloadedRoutes;
              if (preloadedRoutes.find((name) => {
                let tmp = name.name === type.payload.name;
                if (tmp) {
                  let tmp5;
                  if (callback2 != null) {
                    obj = { params: name.params };
                    tmp5 = callback2(obj);
                  }
                  tmp = closure_10 === tmp5;
                  const tmp2 = closure_10;
                }
                return tmp;
              })) {
                return null;
              } else {
                const routeNames2 = key.routeNames;
                if (routeNames2.includes(type.payload.name)) {
                  closure_9 = tmp60;
                  let tmp60Result;
                  if (routeParamList.routeGetIdList[type.payload.name] != null) {
                    obj = { params: type.payload.params };
                    tmp60Result = tmp60(obj);
                  }
                  closure_10 = tmp60Result;
                  let routes3 = key.routes;
                  if (tmp60Result) {
                    let num20 = routes3.findIndex((name) => {
                      let tmp = name.name === type.payload.name;
                      if (tmp) {
                        let tmp5;
                        if (callback2 != null) {
                          obj = { params: name.params };
                          tmp5 = callback2(obj);
                        }
                        tmp = closure_10 === tmp5;
                        const tmp2 = closure_10;
                      }
                      return tmp;
                    });
                  } else if (routes3[key.index].name === type.payload.name) {
                    num20 = key.index;
                  } else {
                    let diff = key.routes.length - 1;
                    num20 = -1;
                    if (diff >= 0) {
                      num20 = diff;
                      while (key.routes[diff].name !== type.payload.name) {
                        diff = diff - 1;
                        num20 = -1;
                        if (diff >= 0) {
                          continue;
                        } else {
                          break;
                        }
                        break;
                      }
                    }
                  }
                  if (num20 === -1) {
                    const items = [];
                    const obj1 = {};
                    const _HermesInternal3 = HermesInternal;
                    obj1.key = "" + type.payload.name + "-" + lib(merged[3]).nanoid();
                    obj1.name = type.payload.name;
                    if (routeParamList[type.payload.name] !== undefined) {
                      const _Object14 = Object;
                      let params7 = Object.assign({}, routeParamList[type.payload.name], type.payload.params);
                    } else {
                      params7 = type.payload.params;
                    }
                    obj1.params = params7;
                    const items1 = [obj1];
                    const combined = items.concat(closure_1_2.default(key.routes), items1);
                    const _Object15 = Object;
                    const obj2 = { routes: combined, index: combined.length - 1 };
                    return Object.assign({}, key, obj2);
                  } else {
                    findLastResult = key.routes[num20];
                    findLastResult = type;
                    if (type.payload.merge) {
                      if (type.payload.params === undefined) {
                        if (routeParamList[findLastResult.name] === undefined) {
                          let params6 = findLastResult.params;
                        }
                      }
                      const _Object11 = Object;
                      const _Object12 = Object;
                      params6 = Object.assign({}, routeParamList[findLastResult.name], findLastResult.params, type.payload.params);
                    } else {
                      if (routeParamList[findLastResult.name] !== undefined) {
                        const _Object10 = Object;
                        let params5 = Object.assign({}, routeParamList[findLastResult.name], type.payload.params);
                      } else {
                        params5 = type.payload.params;
                      }
                      const obj3 = { index: num20 };
                      const items2 = [];
                      const routes1 = key.routes;
                      if (params5 !== findLastResult.params) {
                        const _Object13 = Object;
                        const obj4 = { params: params5 };
                        merged = Object.assign({}, findLastResult, obj4);
                      } else {
                        merged = key.routes[num20];
                      }
                      const items3 = [merged];
                      obj3.routes = items2.concat(closure_1_2.default(routes1.slice(0, num20)), items3);
                      return Object.assign({}, key, obj3);
                    }
                  }
                } else {
                  return null;
                }
              }
            } else if ("POP" === type) {
              if (type.target === key.key) {
                if (type.source) {
                  let routes2 = key.routes;
                  let index = routes2.findIndex((key) => key.key === type.source);
                }
                if (index > 0) {
                  const _Math = Math;
                  routes2 = key.routes;
                  const substr = routes2.slice(0, Math.max(index - type.payload.count + 1, 1));
                  routes3 = key.routes;
                  const combined1 = substr.concat(routes3.slice(index + 1));
                  const _Object9 = Object;
                  const obj5 = { index: combined1.length - 1, routes: combined1 };
                  return Object.assign({}, key, obj5);
                } else {
                  return null;
                }
              }
              index = key.index;
            } else if ("POP_TO_TOP" === type) {
              const obj6 = { type: "POP" };
              const obj7 = { count: key.routes.length - 1 };
              obj6.payload = obj7;
              return routeParamList.getStateForAction(key, obj6, routeParamList);
            } else if ("POP_TO" === type) {
              const routeNames = key.routeNames;
              if (routeNames.includes(type.payload.name)) {
                closure_11 = tmp24;
                let tmp24Result;
                if (routeParamList.routeGetIdList[type.payload.name] != null) {
                  const obj8 = { params: type.payload.params };
                  tmp24Result = tmp24(obj8);
                }
                closure_12 = tmp24Result;
                routes = key.routes;
                if (tmp24Result) {
                  let num8 = routes.findIndex((name) => {
                    let tmp = name.name === type.payload.name;
                    if (tmp) {
                      let tmp5;
                      if (callback3 != null) {
                        obj = { params: name.params };
                        tmp5 = callback3(obj);
                      }
                      tmp = closure_12 === tmp5;
                      const tmp2 = closure_12;
                    }
                    return tmp;
                  });
                } else if (routes[key.index].name === type.payload.name) {
                  num8 = key.index;
                } else {
                  let diff1 = key.routes.length - 1;
                  num8 = -1;
                  if (diff1 >= 0) {
                    num8 = diff1;
                    while (key.routes[diff1].name !== type.payload.name) {
                      diff1 = diff1 - 1;
                      num8 = -1;
                      if (diff1 >= 0) {
                        continue;
                      } else {
                        break;
                      }
                      break;
                    }
                  }
                }
                if (num8 === -1) {
                  const items4 = [];
                  let routes4 = key.routes;
                  const obj9 = {};
                  const _HermesInternal2 = HermesInternal;
                  obj9.key = "" + type.payload.name + "-" + lib(merged[3]).nanoid();
                  obj9.name = type.payload.name;
                  if (routeParamList[type.payload.name] !== undefined) {
                    const _Object7 = Object;
                    let params4 = Object.assign({}, routeParamList[type.payload.name], type.payload.params);
                  } else {
                    params4 = type.payload.params;
                  }
                  obj9.params = params4;
                  const items5 = [obj9];
                  const combined2 = items4.concat(closure_1_2.default(routes4.slice(0, -1)), items5);
                  const _Object8 = Object;
                  const obj10 = { routes: combined2, index: combined2.length - 1 };
                  return Object.assign({}, key, obj10);
                } else {
                  findLastResult = key.routes[num8];
                  findLastResult = type;
                  if (type.payload.merge) {
                    if (type.payload.params === undefined) {
                      if (routeParamList[findLastResult.name] === undefined) {
                        let params3 = findLastResult.params;
                      }
                    }
                    const _Object4 = Object;
                    const _Object5 = Object;
                    params3 = Object.assign({}, routeParamList[findLastResult.name], findLastResult.params, type.payload.params);
                  } else {
                    if (routeParamList[findLastResult.name] !== undefined) {
                      const _Object3 = Object;
                      let params2 = Object.assign({}, routeParamList[findLastResult.name], type.payload.params);
                    } else {
                      params2 = type.payload.params;
                    }
                    const obj11 = { index: num8 };
                    const items6 = [];
                    let routes5 = key.routes;
                    if (params2 !== findLastResult.params) {
                      const _Object6 = Object;
                      const obj12 = { params: params2 };
                      let merged1 = Object.assign({}, findLastResult, obj12);
                    } else {
                      merged1 = key.routes[num8];
                    }
                    const items7 = [merged1];
                    obj11.routes = items6.concat(closure_1_2.default(routes5.slice(0, num8)), items7);
                    return Object.assign({}, key, obj11);
                  }
                }
              } else {
                return null;
              }
            } else if ("GO_BACK" === type) {
              if (key.index > 0) {
                const obj13 = { type: "POP" };
                const obj14 = { count: 1 };
                obj13.payload = obj14;
                ({ target: obj6.target, source: obj6.source } = type);
                return routeParamList.getStateForAction(key, obj13, routeParamList);
              } else {
                return null;
              }
            } else if ("PRELOAD" === type) {
              closure_13 = tmp6;
              let tmp6Result;
              if (routeParamList.routeGetIdList[type.payload.name] != null) {
                obj = { params: type.payload.params };
                tmp6Result = tmp6(obj);
              }
              closure_14 = tmp6Result;
              let tmp10;
              if (tmp6Result !== undefined) {
                let routes6 = key.routes;
                const found = routes6.find((name) => {
                  let tmp = name.name === type.payload.name;
                  if (tmp) {
                    let tmp5;
                    if (callback4 != null) {
                      obj = { params: name.params };
                      tmp5 = callback4(obj);
                    }
                    tmp = closure_14 === tmp5;
                    const tmp2 = closure_14;
                  }
                  return tmp;
                });
                tmp10 = found;
              }
              let _Object = Object;
              const obj15 = {};
              const obj16 = {};
              if (tmp10) {
                routes7 = key.routes;
                obj16.routes = routes7.map((key) => {
                  key = undefined;
                  if (found != null) {
                    key = found.key;
                  }
                  if (key.key !== key) {
                    return key;
                  } else {
                    obj = {};
                    if (routeParamList[type.payload.name] !== undefined) {
                      const _Object = Object;
                      params = Object.assign({}, routeParamList[type.payload.name], type.payload.params);
                    } else {
                      params = type.payload.params;
                    }
                    obj.params = params;
                    return Object.assign({}, key, obj);
                  }
                });
                return assign(obj15, key, obj16);
              } else {
                const preloadedRoutes1 = key.preloadedRoutes;
                const found1 = preloadedRoutes1.filter((name) => {
                  let tmp = name.name !== type.payload.name;
                  if (!tmp) {
                    let tmp5;
                    if (callback4 != null) {
                      obj = { params: name.params };
                      tmp5 = callback4(obj);
                    }
                    tmp = closure_14 !== tmp5;
                    const tmp2 = closure_14;
                  }
                  return tmp;
                });
                const obj17 = {};
                let _HermesInternal = HermesInternal;
                obj17.key = "" + type.payload.name + "-" + lib(merged[3]).nanoid();
                obj17.name = type.payload.name;
                if (routeParamList[type.payload.name] !== undefined) {
                  const _Object2 = Object;
                  params = Object.assign({}, routeParamList[type.payload.name], type.payload.params);
                } else {
                  params = type.payload.params;
                }
                obj17.params = params;
                obj16.preloadedRoutes = found1.concat(obj17);
                return assign(obj15, key, obj16);
              }
            } else {
              const BaseRouter = lib(merged[2]).BaseRouter;
              return BaseRouter.getStateForAction(key, type);
            }
          }
        }
        const routeNames3 = key.routeNames;
        if (routeNames3.includes(type.payload.name)) {
          closure_5 = tmp91;
          let tmp91Result;
          if (routeParamList.routeGetIdList[type.payload.name] != null) {
            const obj18 = { params: type.payload.params };
            tmp91Result = tmp91(obj18);
          }
          closure_6 = tmp91Result;
          if (tmp91Result !== undefined) {
            routes5 = key.routes;
            findLastResult = routes5.findLast((name) => {
              let tmp = name.name === type.payload.name;
              if (tmp) {
                let tmp5;
                if (callback != null) {
                  obj = { params: name.params };
                  tmp5 = callback(obj);
                }
                tmp = closure_6 === tmp5;
                const tmp2 = closure_6;
              }
              return tmp;
            });
            let findLastResult1 = findLastResult;
          } else if (type.type === "NAVIGATE") {
            if (type.payload.name === key.routes[key.index].name) {
              findLastResult = tmp96;
              findLastResult1 = tmp96;
            } else if (type.payload.pop) {
              routes4 = key.routes;
              findLastResult1 = routes4.findLast((name) => name.name === type.payload.name);
              findLastResult = findLastResult1;
            }
          }
          if (!findLastResult) {
            const preloadedRoutes2 = key.preloadedRoutes;
            findLastResult = preloadedRoutes2.find((name) => {
              let tmp = name.name === type.payload.name;
              if (tmp) {
                let tmp5;
                if (callback != null) {
                  obj = { params: name.params };
                  tmp5 = callback(obj);
                }
                tmp = closure_6 === tmp5;
                const tmp2 = closure_6;
              }
              return tmp;
            });
            findLastResult1 = findLastResult;
          }
          findLastResult = type;
          if (type.type === "NAVIGATE") {
            findLastResult = type;
            if (type.payload.merge) {
              if (findLastResult) {
                findLastResult = type;
                if (type.payload.params === undefined) {
                  findLastResult = type;
                  if (routeParamList[type.payload.name] === undefined) {
                    let params9 = findLastResult.params;
                  }
                  findLastResult = params9;
                }
                findLastResult = globalThis;
                const _Object17 = Object;
                findLastResult = type;
                const _Object18 = Object;
                params9 = Object.assign({}, routeParamList[type.payload.name], findLastResult.params, type.payload.params);
              }
            }
          }
          findLastResult = type;
          if (routeParamList[type.payload.name] !== undefined) {
            findLastResult = globalThis;
            const _Object16 = Object;
            findLastResult = type;
            let params8 = Object.assign({}, routeParamList[type.payload.name], type.payload.params);
          } else {
            findLastResult = type;
            params8 = type.payload.params;
          }
          findLastResult = params8;
          if (findLastResult) {
            findLastResult = type;
            if (type.type === "NAVIGATE") {
              findLastResult = type;
              if (type.payload.pop) {
                let items8 = [];
                let arr24 = items8;
                routes6 = key.routes;
                findLastResult = routes6;
                for (const item10611 of routes6) {
                  if (item10611.key === findLastResult.key) {
                    findLastResult = arr24;
                    findLastResult = globalThis;
                    let obj19 = {};
                    findLastResult = arg1;
                    if (arg1.payload.path !== undefined) {
                      findLastResult = arg1;
                      let path2 = arg1.payload.path;
                    } else {
                      path2 = findLastResult.path;
                    }
                    obj19.path = path2;
                    obj19.params = findLastResult;
                    findLastResult = arr24.push(Object.assign({}, findLastResult, obj19));
                  } else {
                    findLastResult = arr24;
                    findLastResult = item10611;
                    findLastResult = arr24.push(findLastResult);
                    continue;
                  }
                }
              }
            }
            const routes8 = key.routes;
            findLastResult = routes8.filter((key) => key.key !== findLastResult1.key);
            arr24 = findLastResult;
            items8 = findLastResult;
            findLastResult = globalThis;
            const obj20 = {};
            findLastResult = type;
            if (type.type === "NAVIGATE") {
              findLastResult = type;
              if (type.payload.path !== undefined) {
                findLastResult = type;
                let path = type.payload.path;
              }
              obj20.path = path;
              obj20.params = findLastResult;
              findLastResult = findLastResult(findLastResult({}, findLastResult, obj20));
            }
            path = findLastResult.path;
          } else {
            const items9 = [];
            findLastResult = closure_1_2;
            const obj21 = {};
            findLastResult = type;
            findLastResult = lib;
            findLastResult = merged;
            findLastResult = closure_1_2.default(key.routes);
            findLastResult = globalThis;
            const _HermesInternal4 = HermesInternal;
            obj21.key = "" + type.payload.name + "-" + lib(merged[3]).nanoid();
            obj21.name = type.payload.name;
            findLastResult = undefined;
            if (type.type === "NAVIGATE") {
              findLastResult = type;
              findLastResult = type.payload.path;
            }
            obj21.path = findLastResult;
            obj21.params = findLastResult;
            const items10 = [obj21];
            findLastResult = items9.concat(findLastResult, items10);
            arr24 = findLastResult;
            items8 = findLastResult;
          }
          findLastResult = globalThis;
          const _Object19 = Object;
          const obj22 = { index: arr24.length - 1 };
          const preloadedRoutes3 = key.preloadedRoutes;
          obj22.preloadedRoutes = preloadedRoutes3.filter((key) => items8[items8.length - 1].key !== key.key);
          obj22.routes = arr24;
          findLastResult = Object.assign({}, key, obj22);
        } else {
          return null;
        }
      }
    },
    actionCreators: obj
  };
  merged = Object.assign({}, _require(merged[2]).BaseRouter, obj);
  return merged;
}
export const StackActions = obj;
