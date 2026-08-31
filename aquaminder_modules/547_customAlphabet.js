// Module ID: 547
// Function ID: 6069
// Name: customAlphabet
// Dependencies: [548]

// Module 547 (customAlphabet)
const require = arg1;
const dependencyMap = arg6;
arg5.BaseRouter = {
  getStateForAction(routeNames, type) {
    closure_0 = routeNames;
    closure_1 = type;
    type = type.type;
    if ("SET_PARAMS" !== type) {
      if ("REPLACE_PARAMS" !== type) {
        if ("RESET" === type) {
          const payload = type.payload;
          if (payload.routes.length !== 0) {
            const routes2 = payload.routes;
            if (!routes2.some((name) => {
              routeNames = lib.routeNames;
              return !routeNames.includes(name.name);
            })) {
              if (payload.stale === false) {
                if (routeNames.routeNames.length === payload.routeNames.length) {
                  routeNames = payload.routeNames;
                  if (!routeNames.some((name) => {
                    routeNames = lib.routeNames;
                    return !routeNames.includes(name);
                  })) {
                    let _Object = Object;
                    let obj = {};
                    let routes = payload.routes;
                    obj.routes = routes.map((key) => {
                      let merged = key;
                      if (!key.key) {
                        const _Object = Object;
                        const obj = {};
                        const _HermesInternal = HermesInternal;
                        obj.key = "" + key.name + "-" + lib(type[0]).nanoid();
                        merged = Object.assign({}, key, obj);
                      }
                      return merged;
                    });
                    return Object.assign({}, payload, obj);
                  }
                }
                return null;
              } else {
                return payload;
              }
            }
          }
          return null;
        } else {
          return null;
        }
      }
    }
    if (type.source) {
      routes = routeNames.routes;
      let index = routes.findIndex((key) => key.key === type.source);
    } else {
      index = routeNames.index;
    }
    if (index === -1) {
      return null;
    } else {
      const _Object2 = Object;
      obj = {};
      const routes1 = routeNames.routes;
      obj.routes = routes1.map((params) => {
        if (arg1 !== index) {
          return params;
        } else {
          const obj = {};
          if (type.type === "REPLACE_PARAMS") {
            params = type.payload.params;
          } else {
            const _Object = Object;
            params = Object.assign({}, params.params, type.payload.params);
          }
          obj.params = params;
          const merged = Object.assign({}, params, obj);
        }
      });
      return Object.assign({}, routeNames, obj);
    }
  },
  shouldActionChangeFocus(type) {
    let tmp = type.type === "NAVIGATE";
    if (!tmp) {
      tmp = type.type === "NAVIGATE_DEPRECATED";
    }
    return tmp;
  }
};
