// Module ID: 549
// Function ID: 6081
// Name: DrawerActions
// Dependencies: [1, 6, 203, 550, 548]
// Exports: DrawerRouter

// Module 549 (DrawerActions)
import _toConsumableArray from "_toConsumableArray" /* 6 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import TabActions from "TabActions" /* 550 */;
import module_1 from "module_1" /* 1 */;

let closure_2 = module_1(_toConsumableArray);
let closure_3 = module_1(_objectWithoutProperties);
let closure_4 = ["defaultStatus"];
const merged = Object.assign({}, TabActions.TabActions, {
  openDrawer() {
    return { type: "OPEN_DRAWER" };
  },
  closeDrawer() {
    return { type: "CLOSE_DRAWER" };
  },
  toggleDrawer() {
    return { type: "TOGGLE_DRAWER" };
  }
});

export function DrawerRouter(defaultStatus) {
  defaultStatus = defaultStatus.defaultStatus;
  let str = "closed";
  if (defaultStatus !== undefined) {
    str = defaultStatus;
  }
  const TabRouterResult = str(550).TabRouter(addDrawerToHistory.default(defaultStatus, removeDrawerFromHistory));
  dependencyMap = TabRouterResult;
  function isDrawerInHistory(history) {
    history = history.history;
    let someResult;
    if (history != null) {
      someResult = history.some((type) => type.type === "drawer");
    }
    return Boolean(someResult);
  }
  addDrawerToHistory = function addDrawerToHistory(history) {
    if (isDrawerInHistory(history)) {
      return history;
    } else {
      let obj = {};
      const items = [];
      obj = { type: "drawer" };
      let str2 = "open";
      if ("drawer" === "open") {
        str2 = "closed";
      }
      obj.status = str2;
      const items1 = [obj];
      obj.history = items.concat(isDrawerInHistory.default(history.history), items1);
      return Object.assign({}, history, obj);
    }
  };
  removeDrawerFromHistory = function removeDrawerFromHistory(rehydratedState) {
    if (isDrawerInHistory(rehydratedState)) {
      const _Object = Object;
      const obj = {};
      const history = rehydratedState.history;
      obj.history = history.filter((type) => type.type !== "drawer");
      return Object.assign({}, rehydratedState, obj);
    } else {
      return rehydratedState;
    }
  };
  function openDrawer(history) {
    if (str === "open") {
      return removeDrawerFromHistory(history);
    } else {
      return addDrawerToHistory(history);
    }
  }
  function closeDrawer(history) {
    if (str === "open") {
      return addDrawerToHistory(history);
    } else {
      return removeDrawerFromHistory(history);
    }
  }
  return Object.assign({}, TabRouterResult, {
    type: "drawer",
    getInitialState(routeNames) {
      let obj = { routeNames: routeNames.routeNames, routeParamList: routeNames.routeParamList, routeGetIdList: routeNames.routeGetIdList };
      obj = { default: str, stale: false, type: "drawer" };
      const initialState = TabRouterResult.getInitialState(obj);
      obj.key = "drawer-" + str(TabRouterResult[4]).nanoid();
      return Object.assign({}, initialState, obj);
    },
    getRehydratedState(stale) {
      if (stale.stale === false) {
        return stale;
      } else {
        let obj = { routeNames: tmp, routeParamList: tmp2, routeGetIdList: tmp3 };
        const rehydratedState = TabRouterResult.getRehydratedState(stale, obj);
        let tmp6 = rehydratedState;
        if (isDrawerInHistory(stale)) {
          tmp6 = addDrawerToHistory(removeDrawerFromHistory(rehydratedState));
        }
        const _Object = Object;
        obj = { default: str, type: "drawer" };
        const _HermesInternal = HermesInternal;
        obj.key = "drawer-" + "drawer"(TabRouterResult[4]).nanoid();
        return Object.assign({}, tmp6, obj);
      }
    },
    getStateForRouteFocus(arg0, arg1) {
      return closeDrawer(TabRouterResult.getStateForRouteFocus(arg0, arg1));
    },
    getStateForAction(index, type) {
      type = type.type;
      if ("OPEN_DRAWER" === type) {
        return openDrawer(index);
      } else if ("CLOSE_DRAWER" === type) {
        return closeDrawer(index);
      } else if ("TOGGLE_DRAWER" === type) {
        if (isDrawerInHistory(index)) {
          return removeDrawerFromHistory(index);
        } else {
          return addDrawerToHistory(index);
        }
      } else {
        if ("JUMP_TO" !== type) {
          if ("NAVIGATE" !== type) {
            if ("NAVIGATE_DEPRECATED" !== type) {
              if ("GO_BACK" === type) {
                if (isDrawerInHistory(index)) {
                  return removeDrawerFromHistory(index);
                } else {
                  return TabRouterResult.getStateForAction(index, type, arg2);
                }
              } else {
                return TabRouterResult.getStateForAction(index, type, arg2);
              }
            }
          }
        }
        const stateForAction = TabRouterResult.getStateForAction(index, type, arg2);
        if (stateForAction != null) {
          if (stateForAction.index !== index.index) {
            return closeDrawer(stateForAction);
          }
        }
        return stateForAction;
      }
    },
    actionCreators: openDrawer
  });
}
export const DrawerActions = merged;
