// Module ID: 570
// Function ID: 6252
// Name: PreventRemoveProvider
// Dependencies: [1, 38, 6, 119, 536, 251, 548, 566, 568, 569]
// Exports: PreventRemoveProvider

// Module 570 (PreventRemoveProvider)
import _toConsumableArray from "_toConsumableArray" /* 6 */;
import _slicedToArray from "_slicedToArray" /* 38 */;
import getIteratorFn from "getIteratorFn" /* 119 */;
import _mod536 from "module_536" /* 536 */;
import module_1 from "module_1" /* 1 */;
import closure_6 from "jsxProd" /* 251 */;

let closure_2 = module_1(_slicedToArray);
let closure_3 = module_1(_toConsumableArray);
let closure_4 = _interopRequireWildcard(getIteratorFn);
let closure_5 = module_1(_mod536);
function transformPreventedRoutes(arr) {
  return closure_3.default(arr.values()).reduce((arg0, routeKey) => {
    routeKey = routeKey.routeKey;
    const obj = {};
    let preventRemove;
    if (arg0[routeKey] != null) {
      preventRemove = tmp.preventRemove;
    }
    if (!preventRemove) {
      preventRemove = routeKey.preventRemove;
    }
    obj.preventRemove = preventRemove;
    arg0[routeKey] = obj;
    return arg0;
  }, {});
}

export function PreventRemoveProvider(children) {
  const first = closure_2.default(context.useState(() => first(first1[6]).nanoid()), 1)[0];
  const defaultResult = closure_2.default(context.useState(() => new Map()), 2);
  const first1 = defaultResult[0];
  closure_2 = defaultResult[1];
  closure_3 = context.useContext(first(first1[7]).NavigationHelpersContext);
  context = context.useContext(first(first1[8]).NavigationRouteContext);
  const context1 = context.useContext(first(first1[9]).PreventRemoveContext);
  let setPreventRemove;
  if (context1 != null) {
    setPreventRemove = context1.setPreventRemove;
  }
  const defaultResult1 = setPreventRemove.default((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    const callback = arg2;
    if (arg2) {
      if (state != null) {
        if (state != null) {
          const routes = state.getState().routes;
        }
      }
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("Couldn't find a route with the key " + arg1 + ". Is your component inside NavigationContent?");
      throw error;
    }
    callback((get) => {
      let value = get.get(closure_0);
      let routeKey;
      if (value != null) {
        routeKey = value.routeKey;
      }
      if (closure_1 === routeKey) {
        value = get.get(closure_0);
        let preventRemove;
        if (value != null) {
          preventRemove = value.preventRemove;
        }
        if (tmp4 === preventRemove) {
          return get;
        }
        tmp4 = closure_2;
      }
      const map = new Map(get);
      if (closure_2) {
        const obj = { routeKey: closure_1, preventRemove: closure_2 };
        const result = map.set(closure_0, obj);
      } else {
        map.delete(closure_0);
      }
      return map;
    });
  });
  const someResult = closure_3.default(first1.values()).some((preventRemove) => preventRemove.preventRemove);
  transformPreventedRoutes = someResult;
  const items = [first, someResult, , ];
  let key;
  if (context != null) {
    key = context.key;
  }
  items[2] = key;
  items[3] = setPreventRemove;
  const effect = context.useEffect(() => {
    let key;
    if (context != null) {
      key = context.key;
    }
    if (key !== undefined) {
      if (setPreventRemove !== undefined) {
        setPreventRemove(first, context.key, closure_7);
        return () => {
          closure_1_5(closure_1_0, closure_1_4.key, false);
        };
      }
    }
  }, items);
  const items1 = [defaultResult1, first1];
  let value = context.useMemo(() => ({ setPreventRemove: defaultResult1, preventedRoutes: someResult(first1) }), items1);
  return defaultResult1.jsx(first(first1[9]).PreventRemoveContext.Provider, { value, children: children.children });
}
