// Module ID: 619
// Function ID: 6689
// Name: is
// Dependencies: [119]
// Exports: useSyncExternalStoreWithSelector

// Module 619 (is)
import getIteratorFn from "getIteratorFn" /* 119 */;

function is(arg0, arg1) {
  let tmp = arg0 === arg1;
  if (tmp) {
    let tmp2 = 0 !== arg0;
    if (!tmp2) {
      tmp2 = 1 / arg0 === 1 / arg1;
    }
    tmp = tmp2;
  }
  if (!tmp) {
    tmp = arg0 !== arg0 && arg1 !== arg1;
    const tmp3 = arg0 !== arg0 && arg1 !== arg1;
  }
  return tmp;
}
if ("function" === typeof Object.is) {
  const _Object = Object;
  is = Object.is;
}
({ useSyncExternalStore: closure_1, useRef: closure_2, useEffect: closure_3, useMemo: closure_4, useDebugValue: closure_5 } = getIteratorFn);

export (arg0, arg1, arg2, arg3, arg4) => {
  closure_0 = arg1;
  const callback = arg2;
  const callback2 = arg3;
  const callback3 = arg4;
  let tmp = callback2(null);
  if (null === tmp.current) {
    const obj = { hasValue: false, value: null };
    let current = obj;
    tmp.current = obj;
  } else {
    current = tmp.current;
  }
  let items = [arg1, arg2, arg3, arg4];
  let tmp2 = current(() => {
    function memoizedSelector(arg0) {
      if (c0) {
        if (callback(closure_1, arg0)) {
          return tmp7;
        } else {
          const tmp11 = closure_1_2(arg0);
          if (undefined !== callback2) {
            if (callback2(tmp7, tmp11)) {
              closure_1 = arg0;
              return tmp7;
            }
          }
          closure_1 = arg0;
          closure_2 = tmp11;
          return tmp11;
        }
      } else {
        c0 = true;
        closure_1 = arg0;
        const tmp2 = closure_1_2(arg0);
        if (undefined !== callback2) {
          if (memoizedSelector.hasValue) {
            const value = memoizedSelector.value;
            if (callback2(value, tmp2)) {
              closure_2 = value;
              return value;
            }
          }
        }
        closure_2 = tmp2;
        return tmp2;
      }
    }
    c0 = false;
    let tmp = null;
    if (undefined !== closure_1) {
      tmp = closure_1;
    }
    closure_3 = tmp;
    const items = [() => memoizedSelector(callback()), ];
    let fn;
    if (null !== tmp) {
      fn = () => memoizedSelector(callback2());
    }
    items[1] = fn;
    return items;
  }, items);
  const tmp3 = callback(arg0, tmp2[0], tmp2[1]);
  const callback4 = tmp3;
  const items1 = [tmp3];
  callback3(() => {
    current.hasValue = true;
    current.value = closure_5;
  }, items1);
  callback4(tmp3);
  return tmp3;
}
