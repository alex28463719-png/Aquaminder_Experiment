// Module ID: 607
// Function ID: 6573
// Name: useNavigationHelpers
// Dependencies: [119, 598, 559, 565, 546]
// Exports: useNavigationHelpers

// Module 607 (useNavigationHelpers)
import getIteratorFn from "getIteratorFn" /* 119 */;
import keys2 from "keys" /* 598 */;

let closure_2 = _interopRequireWildcard(getIteratorFn);
const PrivateValueStore = keys2.PrivateValueStore;

export function useNavigationHelpers(id) {
  id = id.id;
  const onAction = id.onAction;
  const getState = id.getState;
  const emitter = id.emitter;
  const router = id.router;
  const stateRef = id.stateRef;
  const context = getState.useContext(id(onAction[2]).UnhandledActionContext);
  const context1 = getState.useContext(id(onAction[3]).NavigationContext);
  const items = [router, context1, emitter.emit, getState, onAction, context, id, stateRef];
  return getState.useMemo(() => {
    function dispatch(fn) {
      let tmp = fn;
      if (typeof fn === "function") {
        tmp = fn(merged1());
      }
      if (!merged(tmp)) {
        if (closure_1_6 != null) {
          closure_1_6(tmp);
        }
      }
    }
    const merged = Object.assign({}, router.actionCreators, id(onAction[4]).CommonActions);
    const keys = Object.keys(merged);
    const reduced = keys.reduce((arg0, arg1) => {
      closure_0 = arg1;
      arg0[arg1] = () => {
        callback(closure_1_1[callback](...arguments));
      };
      return arg0;
    }, {});
    const obj = { dispatch, emit: emitter.emit };
    if (context1) {
      let fn = context1.isFocused;
    } else {
      fn = () => true;
    }
    obj.isFocused = fn;
    obj.canGoBack = function canGoBack() {
      const tmp = merged1();
      const CommonActions = id(onAction[4]).CommonActions;
      let flag = closure_1_4.getStateForAction(tmp, CommonActions.goBack(), { routeNames: tmp.routeNames, routeParamList: {}, routeGetIdList: {} }) !== null;
      if (!flag) {
        let canGoBackResult;
        if (closure_1_7 != null) {
          canGoBackResult = closure_1_7.canGoBack();
        }
        flag = canGoBackResult;
      }
      if (!flag) {
        flag = false;
      }
      return flag;
    };
    obj.getId = function getId() {
      return dispatch;
    };
    obj.getParent = function getParent(arg0) {
      if (arg0 !== undefined) {
        let tmp2 = merged1;
        if (merged1) {
          let obj2 = obj;
          tmp2 = obj;
          if (arg0 !== obj.getId()) {
            const parent = obj2.getParent();
            tmp2 = parent;
            while (parent) {
              obj2 = parent;
              tmp2 = parent;
              if (arg0 === parent.getId()) {
                break;
              }
            }
          }
        }
        return tmp2;
      } else {
        return closure_1_7;
      }
    };
    obj.getState = function getState() {
      if (closure_1_5.current != null) {
        return closure_1_5.current;
      } else {
        return merged1();
      }
    };
    const merged1 = Object.assign({}, context1, reduced, obj);
    return merged1;
  }, items);
}
