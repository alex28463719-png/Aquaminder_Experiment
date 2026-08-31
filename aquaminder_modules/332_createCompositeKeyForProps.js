// Module ID: 332
// Function ID: 4036
// Name: createCompositeKeyForProps
// Dependencies: [1, 38, 311, 128, 73, 45, 119, 316, 312]
// Exports: createAnimatedPropsMemoHook

// Module 332 (createCompositeKeyForProps)
import _slicedToArray from "_slicedToArray" /* 38 */;
import nullthrows from "nullthrows" /* 45 */;
import animatedShouldDebounceQueueFlush from "animatedShouldDebounceQueueFlush" /* 73 */;
import flattenStyle from "flattenStyle" /* 128 */;
import _assertNativeAnimatedModule from "_assertNativeAnimatedModule" /* 311 */;
import _callSuper from "_callSuper" /* 312 */;
import attachNativeEvent from "attachNativeEvent" /* 316 */;
import module_1 from "module_1" /* 1 */;
import closure_7 from "getIteratorFn" /* 119 */;

function createCompositeKeyForProps(arg0, style) {
  const keys = Object.keys(arg0);
  let num = 0;
  let tmp = null;
  let tmp4 = null;
  if (0 < keys.length) {
    do {
      let tmp5 = keys[num];
      let tmp6 = arg0[tmp5];
      let tmp7 = tmp;
      let tmp8 = num;
      let tmp9 = tmp2;
      let tmp10 = tmp3;
      if (style == null) {
        if (tmp5 === "style") {
          let tmp24 = closure_4;
          let defaultResult = closure_4.default(tmp6);
          let tmp17 = defaultResult;
          if (defaultResult != null) {
            style = undefined;
            let tmp26 = createCompositeKeyForObject;
            if (style != null) {
              style = style.style;
            }
            let tmp26Result = tmp26(defaultResult, style);
            tmp17 = defaultResult;
          }
        } else {
          let tmp28 = mod;
          tmp26Result = tmp6;
          tmp17 = tmp3;
          if (!(tmp6 instanceof mod.default)) {
            let tmp14 = require;
            let tmp15 = dependencyMap;
            tmp26Result = tmp6;
            tmp17 = tmp3;
            if (!(tmp6 instanceof attachNativeEvent.AnimatedEvent)) {
              let _Array = Array;
              if (Array.isArray(tmp6)) {
                let tmp22 = tmp6;
                if (style != null) {
                  let tmp23 = createCompositeKeyForArray;
                  tmp22 = createCompositeKeyForArray(tmp6);
                }
                tmp26Result = tmp22;
                tmp17 = tmp3;
              } else {
                let tmp18 = require;
                let tmp19 = dependencyMap;
                tmp17 = tmp3;
                if (_callSuper.isPlainObject(tmp6)) {
                  let tmp20 = tmp6;
                  if (style != null) {
                    let tmp21 = createCompositeKeyForObject;
                    tmp20 = createCompositeKeyForObject(tmp6);
                  }
                  tmp26Result = tmp20;
                  tmp17 = tmp3;
                }
              }
            }
          }
        }
        let tmp12 = tmp;
        tmp9 = tmp26Result;
        let tmp13 = tmp17;
        if (tmp26Result != null) {
          let obj = tmp;
          if (tmp == null) {
            obj = {};
          }
          obj[tmp5] = tmp26Result;
          tmp12 = obj;
          tmp9 = tmp26Result;
          tmp13 = tmp17;
        }
      } else {
        let tmp11 = fn;
        tmp12 = tmp;
        tmp13 = tmp3;
      }
      num = num + 1;
      tmp = tmp12;
      tmp2 = tmp9;
      tmp3 = tmp13;
      tmp4 = tmp12;
    } while (num < length);
  }
  return tmp4;
}
function createCompositeKeyForArray(arg0) {
  let num = 0;
  let tmp = null;
  let tmp2 = null;
  if (0 < arg0.length) {
    do {
      let tmp3 = arg0[num];
      let tmp4 = mod;
      let tmp5 = tmp;
      let tmp6 = num;
      let tmp7 = tmp3;
      if (!(tmp3 instanceof mod.default)) {
        let _Array = Array;
        if (Array.isArray(tmp3)) {
          let tmp11 = createCompositeKeyForArray;
          tmp7 = createCompositeKeyForArray(tmp3);
        } else {
          let tmp8 = require;
          let tmp9 = dependencyMap;
          if (_callSuper.isPlainObject(tmp3)) {
            let tmp10 = createCompositeKeyForObject;
            tmp7 = createCompositeKeyForObject(tmp3);
          }
        }
      }
      let tmp12 = tmp;
      if (tmp7 != null) {
        let fillResult = tmp;
        if (tmp == null) {
          let _Array2 = Array;
          let tmp14 = new.target;
          let tmp15 = new.target;
          let array = new Array(arg0.length);
          let tmp16 = array;
          fillResult = array.fill(null);
        }
        fillResult[num] = tmp7;
        tmp12 = fillResult;
      }
      num = num + 1;
      tmp = tmp12;
      tmp2 = tmp12;
    } while (num < length);
  }
  return tmp2;
}
function createCompositeKeyForObject(arg0) {
  const keys = Object.keys(arg0);
  let num = 0;
  let tmp = null;
  let tmp4 = null;
  if (0 < keys.length) {
    do {
      let tmp5 = keys[num];
      let tmp6 = tmp;
      let tmp7 = num;
      let tmp8 = tmp2;
      let tmp9 = tmp3;
      if (arg1 == null) {
        let tmp12 = arg0[tmp5];
        let tmp13 = mod;
        let tmp14 = tmp12;
        if (!(tmp12 instanceof mod.default)) {
          let _Array = Array;
          if (Array.isArray(tmp12)) {
            let tmp18 = createCompositeKeyForArray;
            tmp14 = createCompositeKeyForArray(tmp12);
          } else {
            let tmp15 = require;
            let tmp16 = dependencyMap;
            if (_callSuper.isPlainObject(tmp12)) {
              let tmp17 = createCompositeKeyForObject;
              tmp14 = createCompositeKeyForObject(tmp12);
            }
          }
        }
        let tmp11 = tmp;
        tmp8 = tmp12;
        tmp9 = tmp14;
        if (tmp14 != null) {
          let obj = tmp;
          if (tmp == null) {
            obj = {};
          }
          obj[tmp5] = tmp14;
          tmp11 = obj;
          tmp8 = tmp12;
          tmp9 = tmp14;
        }
      } else {
        let tmp10 = fn;
        tmp11 = tmp;
      }
      num = num + 1;
      tmp = tmp11;
      tmp2 = tmp8;
      tmp3 = tmp9;
      tmp4 = tmp11;
    } while (num < length);
  }
  return tmp4;
}
function areCompositeKeysEqual(arg0, arg1, arg2) {
  if (arg0 === arg1) {
    return true;
  } else {
    if (arg0 !== null) {
      if (arg1 !== null) {
        const _Object = Object;
        const keys = Object.keys(arg0);
        const _Object2 = Object;
        if (keys.length !== Object.keys(arg1).length) {
          return false;
        } else {
          let num = 0;
          if (0 < length) {
            while (fn(arg1, keys[num])) {
              let tmp4 = arg0[tmp];
              let tmp5 = arg1[tmp];
              if (tmp === "style") {
                let tmp10 = areCompositeKeyComponentsEqual;
                if (!areCompositeKeyComponentsEqual(tmp4, tmp5)) {
                  let flag5 = false;
                  return false;
                }
              } else {
                let tmp6 = mod;
                if (!(tmp4 instanceof mod.default)) {
                  let tmp7 = require;
                  let tmp8 = dependencyMap;
                  if (!(tmp4 instanceof attachNativeEvent.AnimatedEvent)) {
                    if (arg2 == null) {
                      if (tmp4 !== tmp5) {
                        let flag3 = false;
                        return false;
                      }
                    } else {
                      let tmp9 = areCompositeKeyComponentsEqual;
                      if (!areCompositeKeyComponentsEqual(tmp4, tmp5)) {
                        let flag2 = false;
                        return false;
                      }
                    }
                  }
                }
                if (tmp4 !== tmp5) {
                  let flag4 = false;
                  return false;
                }
              }
              num = num + 1;
            }
            return false;
          }
          return true;
        }
      }
    }
    return false;
  }
}
function areCompositeKeyComponentsEqual(arg0, arg1) {
  if (arg0 === arg1) {
    return true;
  } else if (arg0 instanceof mod.default) {
    return tmp;
  } else {
    const _Array = Array;
    if (Array.isArray(arg0)) {
      const _Array2 = Array;
      if (Array.isArray(arg1)) {
        if (arg0.length !== arg1.length) {
          return false;
        } else {
          let num3 = 0;
          if (0 < length2) {
            while (areCompositeKeyComponentsEqual(arg0[num3], arg1[num3])) {
              num3 = num3 + 1;
            }
            return false;
          }
          return true;
        }
      } else {
        return false;
      }
    } else if (_callSuper.isPlainObject(arg0)) {
      if (_callSuper.isPlainObject(arg1)) {
        const _Object = Object;
        const keys = Object.keys(arg0);
        const _Object2 = Object;
        if (keys.length !== Object.keys(arg1).length) {
          return false;
        } else {
          let num2 = 0;
          if (0 < length) {
            while (fn(closure_6.default(arg1), keys[num2])) {
              let tmp12 = areCompositeKeyComponentsEqual;
              if (!areCompositeKeyComponentsEqual(arg0[tmp8], arg1[tmp8])) {
                break;
              } else {
                num2 = num2 + 1;
              }
            }
            return false;
          }
          return true;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}
let closure_2 = module_1(_slicedToArray);
let closure_3 = module_1(_assertNativeAnimatedModule);
let closure_4 = module_1(flattenStyle);
let closure_5 = _interopRequireWildcard(animatedShouldDebounceQueueFlush);
let closure_6 = module_1(nullthrows);
let fn = Object.hasOwn;
if (fn == null) {
  fn = (closure_1, key10018) => hasOwnProperty.call(closure_1, key10018);
}

export { areCompositeKeysEqual };
export function createAnimatedPropsMemoHook(arg0) {
  closure_0 = arg0;
  function useAnimatedPropsMemo_ref(arg0, arg1) {
    closure_0 = arg1;
    const items = [arg1];
    const memo = closure_1_7.useMemo(() => closure_2_11(closure_0, closure_0), items);
    const ref = closure_1_7.useRef();
    let current = ref.current;
    if (current == null) {
      const obj = { compositeKey: memo, node: arg0() };
      current = obj;
    }
    const items1 = [current];
    const insertionEffect = closure_1_7.useInsertionEffect(() => {
      ref.current = current;
    }, items1);
    return current.node;
  }
  function useAnimatedPropsMemo_state(arg0, arg1) {
    closure_0 = arg0;
    closure_1 = arg1;
    const items = [arg1];
    const memo = closure_1_7.useMemo(() => closure_2_11(closure_1, closure_0), items);
    const iter = useAnimatedPropsMemo_state.default(closure_1_7.useState(() => ({ allowlist: callback, compositeKey: memo, value: callback() })), 2)[0];
    if (iter.allowlist !== closure_0) {
      const obj = { allowlist: closure_0, compositeKey: memo, value: arg0() };
      tmp3(obj);
    }
    return iter.value;
  }
  return function useAnimatedPropsMemo(arg0, arg1) {
    return closure_1_5.avoidStateUpdateInAnimatedPropsMemo() ? useAnimatedPropsMemo_ref : useAnimatedPropsMemo_state(arg0, arg1);
  };
}
export { createCompositeKeyForProps };
