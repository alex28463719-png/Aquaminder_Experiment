// Module ID: 590
// Function ID: 6413
// Name: getConfigResources
// Dependencies: [1, 38, 99, 6, 591, 583, 588, 592, 593, 589, 554]
// Exports: getStateFromPath

// Module 590 (getConfigResources)
import _toConsumableArray from "_toConsumableArray" /* 6 */;
import _slicedToArray from "_slicedToArray" /* 38 */;
import _defineProperty from "_defineProperty" /* 99 */;
import findFocusedRoute from "findFocusedRoute" /* 554 */;
import encoderForArrayFormat from "encoderForArrayFormat" /* 583 */;
import validatePathConfig from "validatePathConfig" /* 588 */;
import _mod591 from "module_591" /* 591 */;
import module_1 from "module_1" /* 1 */;

function getConfigResources(screens) {
  if (screens) {
    const value = weakMap.get(screens);
    if (value) {
      return value;
    } else {
      const tmp5 = prepareConfigResources(screens);
      const result = weakMap.set(screens, tmp5);
      return tmp5;
    }
  } else {
    return prepareConfigResources();
  }
}
function prepareConfigResources(screens) {
  if (screens) {
    validatePathConfig.validatePathConfig(screens);
  }
  const tmp4 = getInitialRoutes(screens);
  screens = undefined;
  if (screens != null) {
    screens = screens.screens;
  }
  const tmp5Result = getSortedNormalizedConfigs(tmp4, screens);
  checkForDuplicatedConfigs(tmp5Result);
  return { initialRoutes: tmp4, configs: tmp5Result, configWithRegexes: getConfigsWithRegexes(tmp5Result) };
}
function getInitialRoutes(initialRouteName) {
  const items = [];
  if (initialRouteName != null) {
    if (initialRouteName.initialRouteName) {
      const obj = { initialRouteName: initialRouteName.initialRouteName, parentScreens: [] };
      items.push(obj);
    }
  }
  return items;
}
function getSortedNormalizedConfigs(arg0) {
  closure_0 = arg0;
  if (arguments.length > 1) {
    if (arguments[1] !== undefined) {
      let obj = arguments[1];
    }
    const items = [];
    const concat = items.concat;
    const _Object = Object;
    const keys = Object.keys(obj);
    return concat.apply(items, closure_4.default(keys.map((arg0) => closure_1_9(arg0, obj, closure_0, [], [], [])))).sort((segments, segments2) => {
      if (callback(obj[7]).isArrayEqual(segments.segments, segments2.segments)) {
        const routeNames = segments2.routeNames;
        const joined = routeNames.join(">");
        const routeNames2 = segments.routeNames;
        return joined.localeCompare(routeNames2.join(">"));
      } else if (callback(obj[8]).arrayStartsWith(segments.segments, segments2.segments)) {
        return -1;
      } else if (callback(obj[8]).arrayStartsWith(segments2.segments, segments.segments)) {
        return 1;
      } else {
        const _Math = Math;
        let num2 = 0;
        if (0 < Math.max(segments.segments.length, segments2.segments.length)) {
          while (segments.segments[num2] != null) {
            if (segments2.segments[num2] == null) {
              let num9 = -1;
              return -1;
            } else {
              let tmp10 = segments.segments[num2] === "*";
              let tmp11 = segments2.segments[num2] === "*";
              let obj4 = segments.segments[num2];
              let startsWithResult = obj4.startsWith(":");
              let obj5 = segments2.segments[num2];
              let startsWithResult1 = obj5.startsWith(":");
              let hasItem = startsWithResult;
              if (startsWithResult) {
                obj = segments.segments[num2];
                hasItem = obj.includes("(");
              }
              let hasItem1 = startsWithResult1;
              if (startsWithResult1) {
                let obj2 = segments2.segments[num2];
                hasItem1 = obj2.includes("(");
              }
              if (!tmp10) {
                if (!hasItem) {
                  if (tmp10) {
                    if (!tmp11) {
                      let num3 = 1;
                      return 1;
                    }
                  }
                  if (tmp11) {
                    if (!tmp10) {
                      let num4 = -1;
                      return -1;
                    }
                  }
                  if (startsWithResult) {
                    if (!startsWithResult1) {
                      let num5 = 1;
                      return 1;
                    }
                  }
                  if (startsWithResult1) {
                    if (!startsWithResult) {
                      let num6 = -1;
                      return -1;
                    }
                  }
                  if (hasItem) {
                    if (!hasItem1) {
                      let num7 = -1;
                      return -1;
                    }
                  }
                  if (hasItem1) {
                    if (!hasItem) {
                      let num8 = 1;
                      return 1;
                    }
                  }
                }
              }
              num2 = num2 + 1;
              let _Math2 = Math;
            }
          }
          return 1;
        }
        return segments.segments.length - segments2.segments.length;
      }
    });
  }
  obj = {};
}
function checkForDuplicatedConfigs(tmp5Result) {
  const reduced = tmp5Result.reduce((arg0, segments) => {
    segments = segments.segments;
    const joined = segments.join("/");
    if (arg0[joined]) {
      const routeNames = arg0[joined].routeNames;
      const routeNames1 = segments.routeNames;
      if (routeNames.length > routeNames1.length) {
        let everyResult = routeNames1.every((arg0, arg1) => routeNames[arg1] === arg0);
      } else {
        everyResult = routeNames.every((arg0, arg1) => routeNames1[arg1] === arg0);
      }
      if (!everyResult) {
        const _Error = Error;
        const joined1 = routeNames.join(" > ");
        const _HermesInternal = HermesInternal;
        const error = new Error("Found conflicting screens with the same pattern. The pattern '" + joined + "' resolves to both '" + joined1 + "' and '" + routeNames1.join(" > ") + "'. Patterns must be unique and cannot resolve to more than one screen.");
        throw error;
      }
    }
    return Object.assign(arg0, closure_1_3.default({}, joined, segments));
  }, {});
}
function getConfigsWithRegexes(tmp5Result) {
  return tmp5Result.map((regex) => {
    const obj = {};
    let regExp;
    if (regex.regex) {
      const _RegExp = RegExp;
      regExp = new RegExp(regex.regex.source + "$");
    }
    obj.regex = regExp;
    return Object.assign({}, regex, obj);
  });
}
let closure_2 = module_1(_slicedToArray);
let closure_3 = module_1(_defineProperty);
let closure_4 = module_1(_toConsumableArray);
let closure_5 = module_1(_mod591);
let closure_6 = _interopRequireWildcard(encoderForArrayFormat);
let weakMap = new WeakMap();
function matchAgainstConfigs(arg0, configs) {
  closure_0 = configs;
  closure_2 = arg0;
  function _loop(regex) {
    closure_0 = regex;
    if (regex.regex) {
      const match = closure_2.match(regex.regex);
      closure_1 = match;
      if (match) {
        const routeNames = regex.routeNames;
        closure_1 = routeNames.map((name) => {
          closure_0 = name;
          let found = closure_0.find((screen) => {
            let arrayStartsWithResult = screen.screen === name;
            if (arrayStartsWithResult) {
              arrayStartsWithResult = name(closure_3_1[8]).arrayStartsWith(name.segments, screen.segments);
            }
            return arrayStartsWithResult;
          });
          let fromEntriesResult;
          if (found) {
            if (found.groups) {
              const _Object = Object;
              const _Object2 = Object;
              const entries = Object.entries(found.groups);
              const mapped = entries.map((arg0) => {
                let screen;
                const defaultResult = closure_2.default(arg0, 2);
                closure_0 = Number(defaultResult[0].replace("param_", ""));
                const params = found.params;
                found = params.find((index) => index.index === closure_0);
                if (found != null) {
                  screen = found.screen;
                }
                if (screen === closure_0) {
                  if (found != null) {
                    if (found.name) {
                      const items = [found.name, defaultResult[1]];
                      return items;
                    }
                  }
                }
                return null;
              });
              const found1 = mapped.filter((arg0) => arg0 != null);
              fromEntriesResult = Object.fromEntries(found1.map((arg0) => {
                const defaultResult = closure_2.default(arg0, 2);
                const first = defaultResult[0];
                if (defaultResult[1] == null) {
                  const items = [first, undefined];
                  return items;
                } else {
                  const _decodeURIComponent = decodeURIComponent;
                  const decodeURIComponentResult = decodeURIComponent(tmp3);
                  const parse = found.parse;
                  let tmp7 = decodeURIComponentResult;
                  if (parse != null) {
                    tmp7 = decodeURIComponentResult;
                    if (parse[first]) {
                      const parse2 = found.parse;
                      tmp7 = parse2[first](decodeURIComponentResult);
                    }
                  }
                  const items1 = [first, tmp7];
                  return items1;
                }
              }));
            }
          }
          if (fromEntriesResult) {
            const _Object3 = Object;
            if (Object.keys(fromEntriesResult).length) {
              let obj = { name, params: fromEntriesResult };
              return obj;
            }
          }
          obj = { name };
          return obj;
        });
        closure_2 = closure_2.replace(match[0], "");
        return 1;
      }
    } else {
      return 0;
    }
  }
  let obj = configs[Symbol.iterator]();
  while (obj !== undefined) {
    let tmp2 = _loop;
    let _loopResult = _loop(tmp);
    if (_loopResult === 0) {
      continue;
    } else {
      let tmp5 = _loopResult;
      if (tmp4 === 1) {
        obj.return();
        break;
      }
      break;
    }
    obj = {};
    let tmp6 = dependencyMap;
    obj.routes = dependencyMap;
    let tmp7 = closure_2;
    obj.remainingPath = closure_2;
    return obj;
  }
}
function createNormalizedConfigs(screen, arg1, arr, arr2, arr3, arr4) {
  closure_0 = arr;
  closure_1 = arr2;
  closure_2 = arr3;
  closure_3 = arr4;
  const items = [];
  arr4.push(screen);
  arr3.push(screen);
  closure_5 = tmp3;
  if (typeof arg1[screen] === "string") {
    let obj = { screen, path: tmp3 };
    arr2.push(obj);
    items.push(createConfigItem(screen, items.default(arr4), items.default(arr2)));
    const defaultResult = items.default(arr4);
  } else if (typeof tmp4 === "object") {
    if (typeof tmp4.path === "string") {
      if (tmp4.exact) {
        if (tmp4.path == null) {
          const _Error2 = Error;
          const _HermesInternal2 = HermesInternal;
          const error = new Error("Screen '" + screen + "' doesn't specify a 'path'. A 'path' needs to be specified when specifying 'exact: true'. If you don't want this screen in the URL, specify it as empty string, e.g. `path: ''`.");
          throw error;
        }
      }
      const items1 = [];
      if (tmp4.alias) {
        let alias = tmp4.alias;
        for (const item10032 of alias) {
          let tmp10 = item10032;
          if (typeof item10032 === "string") {
            let tmp23 = items1;
            let tmp24 = createConfigItem;
            let tmp25 = arg0;
            let tmp26 = items;
            let tmp27 = arg5;
            let defaultResult1 = items.default(arg5);
            let items2 = [];
            let tmp29 = items;
            let tmp30 = arg3;
            obj = { screen: arg0 };
            let tmp31 = item10032;
            obj.path = tmp10;
            let items3 = [obj];
            let tmp32 = tmp3;
            let tmp33 = arg0;
            let tmp34 = defaultResult1;
            arr3 = items1.push(createConfigItem(arg0, defaultResult1, items2.concat(items.default(arg3), items3), tmp4.parse));
          } else {
            let tmp86 = item10032;
            if (typeof tmp10 === "object") {
              let tmp87 = items1;
              let tmp89 = arg0;
              let tmp90 = items;
              let tmp91 = arg5;
              let tmp88 = createConfigItem;
              let defaultResult2 = items.default(arg5);
              let tmp93 = item10032;
              if (tmp10.exact) {
                let obj1 = {};
                let tmp16 = arg0;
                obj1.screen = arg0;
                let tmp17 = item10032;
                obj1.path = tmp10.path;
                let items4 = [obj1];
                let combined = items4;
              } else {
                let items5 = [];
                let tmp11 = items;
                let tmp12 = arg3;
                obj = {};
                let tmp13 = arg0;
                obj.screen = arg0;
                let tmp14 = item10032;
                obj.path = tmp10.path;
                let items6 = [obj];
                combined = items5.concat(items.default(arg3), items6);
              }
              let tmp18 = item10032;
              let tmp19 = arg0;
              let tmp20 = defaultResult2;
              let tmp21 = combined;
              arr4 = items1.push(tmp88(arg0, defaultResult2, combined, tmp10.parse));
            }
          }
          continue;
        }
      }
      if (tmp4.exact) {
        arr2.length = 0;
      }
      const obj2 = { screen, path: tmp4.path };
      arr2.push(obj2);
      items.push(createConfigItem(screen, items.default(arr4), items.default(arr2), tmp4.parse));
      let push = items.push;
      push.apply(items, items1);
      const defaultResult3 = items.default(arr4);
    }
    if (typeof tmp4 !== "string") {
      if (typeof tmp4.path !== "string") {
        alias = tmp4.alias;
        if (alias != null) {
          if (alias.length) {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const error1 = new Error("Screen '" + screen + "' doesn't specify a 'path'. A 'path' needs to be specified in order to use 'alias'.");
            throw error1;
          }
        }
      }
    }
    if (tmp4.screens) {
      if (tmp4.initialRouteName) {
        const obj3 = { initialRouteName: tmp4.initialRouteName, parentScreens: arr3 };
        arr.push(obj3);
      }
      const _Object = Object;
      const keys = Object.keys(tmp4.screens);
      const item = keys.forEach((arg0) => {
        const push = items.push;
        push.apply(items, items.default(closure_1_9(arg0, screens.screens, closure_0, items.default(closure_1), items.default(closure_2), closure_3)));
      });
    }
  }
  arr4.pop();
  return items;
}
function createConfigItem(screen, routeNames, items, parse) {
  items = [];
  function _loop2(screen) {
    items = screen;
    const push = items.push;
    const patternParts = items(path[9]).getPatternParts(path);
    push.apply(items, closure_1_4.default(patternParts.map((arg0) => Object.assign({}, arg0, { screen: closure_0 }))));
  }
  for (const item10005 of arg2) {
    let path = item10005.path;
    let tmp = _loop2;
    let _loop2Result = _loop2(item10005.screen);
    continue;
  }
  let regExp;
  if (items.length) {
    const _RegExp = RegExp;
    const mapped = items.map((param) => {
      if (param.param) {
        let str5 = "";
        if (param.optional) {
          str5 = "?";
        }
        const _HermesInternal2 = HermesInternal;
        return "(((?<param_" + arg1 + ">" + param.regex || "[^/]+" + ")\\/)" + str5 + ")";
      } else {
        let str = ".*";
        if (param.segment !== "*") {
          str = closure_1_5.default(param.segment);
        }
        const _HermesInternal = HermesInternal;
        return "" + str + "\\/";
      }
    });
    let _HermesInternal = HermesInternal;
    regExp = new RegExp("^(" + mapped.join("") + ")$");
  }
  const mapped1 = items.map((segment) => segment.segment);
  const mapped2 = items.map((param, index) => {
    let tmp = null;
    if (param.param) {
      const obj = { index };
      ({ screen: obj.screen, param: obj.name } = param);
      tmp = obj;
    }
    return tmp;
  });
  let obj = { screen, regex: regExp, segments: mapped1, params: mapped2.filter((arg0) => arg0 != null), routeNames, parse };
  return obj;
}
function findParseConfigForRoute(name, configs) {
  const iter = configs[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let tmp3 = name;
    if (name === nextResult.routeNames[nextResult.routeNames.length - 1]) {
      iter.return();
      return nextResult.parse;
    }
  }
}
function findInitialRoute(name, items, initialRoutes) {
  const iter = initialRoutes[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let tmp3 = items;
    if (items.length === nextResult.parentScreens.length) {
      let flag = true;
      let num = 0;
      let tmp4 = items;
      if (0 < items.length) {
        let tmp5 = items;
        let tmp6 = num;
        let obj = items[num];
        let tmp7 = nextResult;
        while (obj.localeCompare(tmp2.parentScreens[num]) === 0) {
          let tmp8 = num;
          let sum = num + 1;
          num = sum;
          let tmp10 = items;
        }
        flag = false;
      }
      let tmp11 = flag;
      if (flag) {
        let tmp12 = name;
        let tmp13 = nextResult;
        let initialRouteName;
        if (name !== tmp2.initialRouteName) {
          initialRouteName = nextResult.initialRouteName;
        }
        iter.return();
        return initialRouteName;
      }
    }
    continue;
  }
}
function createStateObject(name, arr, arg2) {
  let obj = {};
  if (arg2) {
    if (name) {
      obj = { index: 1, name };
      const items = [obj, arr];
      obj.routes = items;
      return obj;
    } else {
      const items1 = [arr];
      obj.routes = items1;
      return obj;
    }
  } else if (name) {
    obj = { index: 1, name };
    const items2 = [obj, ];
    const _Object2 = Object;
    const obj1 = {};
    const obj2 = { routes: [] };
    obj1.state = obj2;
    items2[1] = Object.assign({}, arr, obj1);
    obj.routes = items2;
    return obj;
  } else {
    const _Object = Object;
    const obj3 = {};
    const obj4 = { routes: [] };
    obj3.state = obj4;
    const items3 = [Object.assign({}, arr, obj3)];
    obj.routes = items3;
    return obj;
  }
}
function createNestedStateObject(str, mapped, initialRoutes, configs) {
  let arr = mapped.shift();
  const items = [];
  arr = items.push(arr.name);
  const tmp4 = createStateObject(findInitialRoute(arr.name, items, initialRoutes), arr, mapped.length === 0);
  if (mapped.length > 0) {
    let arr1 = mapped.shift();
    let tmp12 = tmp4;
    while (arr1) {
      let tmp5 = findInitialRoute;
      let index = tmp12.index;
      let tmp7 = arr1;
      let tmp8 = tmp12;
      let tmp6 = findInitialRoute(arr1.name, items, initialRoutes);
      if (!index) {
        index = tmp12.routes.length - 1;
      }
      let tmp9 = createStateObject;
      tmp12.routes[index].state = createStateObject(tmp6, arr1, mapped.length === 0);
      let state = tmp12;
      if (mapped.length > 0) {
        state = tmp12.routes[index].state;
      }
      let arr2 = items.push(arr1.name);
      arr1 = mapped.shift();
      tmp12 = state;
    }
  }
  const findFocusedRouteResult = findFocusedRoute.findFocusedRoute(tmp4);
  findFocusedRouteResult.path = str.replace(/\/$/, "");
  let tmp15;
  if (configs) {
    tmp15 = findParseConfigForRoute(findFocusedRouteResult.name, configs);
  }
  const tmp14Result = parseQueryParams(str, tmp15);
  if (tmp14Result) {
    const _Object = Object;
    findFocusedRouteResult.params = Object.assign({}, findFocusedRouteResult.params, tmp14Result);
  }
  return tmp4;
}
function parseQueryParams(arg0, arg1) {
  closure_0 = arg1;
  const parsed = closure_6.parse(arg0.split("?")[1]);
  if (arg1) {
    const _Object = Object;
    const keys = Object.keys(parsed);
    const item = keys.forEach((key10018) => {
      if (hasOwnProperty.call(dependencyMap, key10018)) {
        if (typeof parsed[key10018] === "string") {
          parsed[key10018] = dependencyMap[key10018](parsed[key10018]);
        }
      }
    });
  }
  let tmp4;
  if (Object.keys(parsed).length) {
    tmp4 = parsed;
  }
  return tmp4;
}

export function getStateFromPath(str, screens) {
  ({ initialRoutes, configs } = getConfigResources(screens));
  screens = undefined;
  if (screens != null) {
    screens = screens.screens;
  }
  const tmp = getConfigResources(screens);
  str = str.replace(/\/+/g, "/");
  const replaced = str.replace(/\/+/g, "/").replace(/^\//, "").replace(/\?.*$/, "");
  let str3 = replaced;
  if (!replaced.endsWith("/")) {
    const _HermesInternal = HermesInternal;
    str3 = "" + replaced + "/";
  }
  let replaced1;
  if (screens != null) {
    if (screens.path != null) {
      replaced1 = str4.replace(/^\//, "");
    }
  }
  let str5 = str3;
  if (replaced1) {
    let combined = replaced1;
    if (!replaced1.endsWith("/")) {
      const _HermesInternal2 = HermesInternal;
      combined = "" + replaced1 + "/";
    }
    if (str3.startsWith(combined)) {
      str5 = str3.replace(combined, "");
    }
  }
  if (screens === undefined) {
    const parts = str5.split("/");
    const _Boolean = Boolean;
    const found = parts.filter(Boolean);
    const mapped = found.map((arg0) => ({ name: decodeURIComponent(arg0) }));
    if (mapped.length) {
      return createNestedStateObject(str, mapped, initialRoutes);
    }
  } else if (str5 === "/") {
    const found1 = configs.find((segments) => {
      segments = segments.segments;
      return segments.join("/") === "";
    });
    if (found1) {
      const routeNames = found1.routeNames;
      return createNestedStateObject(str, routeNames.map((name) => ({ name })), initialRoutes, configs);
    }
  } else {
    ({ routes, remainingPath } = matchAgainstConfigs(str5, configs));
    let tmp10;
    if (routes !== undefined) {
      const tmp9 = createNestedStateObject(str, routes, initialRoutes, configs);
      tmp10 = tmp9;
    }
    if (tmp10 != null) {
      if (tmp9 != null) {
        return tmp9;
      }
    }
  }
  const str2 = str.replace(/\/+/g, "/").replace(/^\//, "");
}
