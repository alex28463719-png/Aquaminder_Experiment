// Module ID: 555
// Function ID: 6173
// Name: useEventEmitter
// Dependencies: [1, 6, 119]
// Exports: useEventEmitter

// Module 555 (useEventEmitter)
import _toConsumableArray from "_toConsumableArray" /* 6 */;
import getIteratorFn from "getIteratorFn" /* 119 */;
import module_1 from "module_1" /* 1 */;

let closure_0 = module_1(_toConsumableArray);
let closure_1 = _interopRequireWildcard(getIteratorFn);

export function useEventEmitter(arg0) {
  closure_0 = arg0;
  React = React.useRef(arg0);
  const effect = React.useEffect(() => {
    closure_1.current = closure_0;
  });
  closure_2 = React.useRef(Object.create(null));
  const callback = React.useCallback((arg0) => {
    closure_0 = arg0;
    function removeListener(arg0, arg1) {
      let tmp;
      if (closure_1_2.current[arg0]) {
        tmp = closure_1_2.current[arg0][closure_0];
      }
      if (tmp) {
        const index = tmp.indexOf(arg1);
        if (index > -1) {
          tmp.splice(index, 1);
        }
      }
    }
    return {
      addListener(arg0, arg1) {
        closure_0 = arg0;
        closure_1 = arg1;
        let obj = closure_1_2.current[arg0];
        if (!obj) {
          obj = {};
        }
        closure_1_2.current[arg0] = obj;
        let items = closure_1_2.current[arg0][closure_0];
        if (!items) {
          items = [];
        }
        closure_1_2.current[arg0][closure_0] = items;
        closure_1_2.current[arg0][closure_0].push(arg1);
        c2 = false;
        return () => {
          if (!c2) {
            c2 = true;
            callback(closure_0, callback);
          }
        };
      },
      removeListener
    };
  }, []);
  const callback1 = React.useCallback((type) => {
    type = type.type;
    const data = type.data;
    const target = type.target;
    let obj = target.current[type];
    if (!obj) {
      obj = {};
    }
    if (target !== undefined) {
      let substr;
      if (obj[target] != null) {
        substr = arr5.slice();
      }
      let found = substr;
    } else {
      const items = [];
      const concat = items.concat;
      const _Object = Object;
      const keys = Object.keys(obj);
      found = concat.apply(items, closure_0.default(keys.map((arg0) => obj[arg0]))).filter((fromResult, arg1, arr) => arr.lastIndexOf(fromResult) === arg1);
      const applyResult = concat.apply(items, closure_0.default(keys.map((arg0) => obj[arg0])));
    }
    obj = {};
    Object.defineProperty(obj, "type", { get: () => type, set: undefined });
    if (target !== undefined) {
      const _Object2 = Object;
      obj = {
        enumerable: true,
        get() {
            return target;
          }
      };
      Object.defineProperty(obj, "target", obj);
    }
    if (data !== undefined) {
      const _Object3 = Object;
      const obj1 = {
        enumerable: true,
        get() {
            return data;
          }
      };
      Object.defineProperty(obj, "data", obj1);
    }
    if (type.canPreventDefault) {
      c5 = false;
      const _Object4 = Object;
      const obj2 = {};
      const obj3 = {
        enumerable: true,
        get() {
            return c5;
          }
      };
      obj2.defaultPrevented = obj3;
      const obj4 = {
        enumerable: true,
        value() {
            c5 = true;
          }
      };
      obj2.preventDefault = obj4;
      Object.defineProperties(obj, obj2);
    }
    if (data.current != null) {
      data.current(obj);
    }
    if (found != null) {
      const item = found.forEach((arg0) => arg0(obj));
    }
    return obj;
  }, []);
  let items = [callback, callback1];
  return React.useMemo(() => ({ create: callback, emit: callback1 }), items);
}
