// Module ID: 154
// Function ID: 1672
// Name: _getFreeIndex
// Dependencies: [1, 155, 20, 4]

// Module 154 (_getFreeIndex)
import MessageQueue from "MessageQueue" /* 4 */;
import invariant from "invariant" /* 20 */;
import Timing2 from "Timing" /* 155 */;
import module_1 from "module_1" /* 1 */;

function _getFreeIndex() {
  arr = arr.pop();
  if (arr === undefined) {
    return closure_7.length;
  } else {
    return arr;
  }
}
function _allocateCallback(onUpdate, queueReactNativeMicrotask) {
  closure_12 = tmp + 1;
  const tmp2 = _getFreeIndex();
  closure_7[tmp2] = +closure_12;
  closure_5[tmp2] = onUpdate;
  closure_6[tmp2] = queueReactNativeMicrotask;
  return +closure_12;
}
function _callTimer(arg0, arg1) {
  const _global = arg1;
  if (arg0 > c12) {
    const _console = console;
    console.warn("Tried to call timer with ID %s but no such timer exists.", arg0);
  }
  const index = closure_7.indexOf(arg0);
  if (index !== -1) {
    if (table[index]) {
      if (tmp26) {
        if (tmp26 !== "setInterval") {
          _clearIndex(index);
        }
        try {
          if (tmp26 !== "setTimeout") {
            if (tmp26 !== "setInterval") {
              if (tmp26 !== "queueReactNativeMicrotask") {
                if (tmp26 === "requestAnimationFrame") {
                  let _performance = _global.performance;
                  tmp29(_performance.now());
                } else if (tmp26 === "requestIdleCallback") {
                  obj = {
                    timeRemaining() {
                                      _performance = _performance.performance;
                                      return Math.max(0, closure_1_4 - (_performance.now() - _performance));
                                    },
                    didTimeout: arg2
                  };
                  tmp29(obj);
                } else {
                  const _console3 = console;
                  console.error("Tried to call a callback with invalid type: " + tmp26);
                }
              }
            }
          }
          tmp28();
        } catch (tmp22) {
          arr4.push(tmp22);
        }
      }
    }
    const _console2 = console;
    console.error(`No callback found for timerID ${arg0}`);
  }
}
function _callReactNativeMicrotasksPass() {
  let length;
  if (arr2.length === 0) {
    return false;
  } else {
    arr2 = [];
    let num = 0;
    if (0 < arr2.length) {
      do {
        let tmp = _callTimer;
        let tmp2 = _callTimer(arr[num], 0);
        num = num + 1;
        length = arr.length;
      } while (num < length);
    }
    return arr2.length > 0;
  }
}
function _clearIndex(index) {
  closure_7[index] = null;
  closure_5[index] = null;
  closure_6[index] = null;
}
function _freeCallback(_animationFrame) {
  if (_animationFrame != null) {
    const index = closure_7.indexOf(_animationFrame);
    if (index !== -1) {
      _clearIndex(index);
      if (dependencyMap[index] !== "queueReactNativeMicrotask") {
        if (tmp4 !== "requestIdleCallback") {
          deleteTimer(_animationFrame);
        }
      }
    }
  }
}
function createTimer(arg0, arg1, arg2, arg3) {
  invariant(Timing.default, "NativeTiming is available");
  const timer = Timing.default.createTimer(arg0, arg1, arg2, arg3);
}
function deleteTimer(_animationFrame) {
  invariant(Timing.default, "NativeTiming is available");
  Timing.default.deleteTimer(_animationFrame);
}
function setSendIdleEvents(arg0) {
  invariant(Timing.default, "NativeTiming is available");
  Timing.default.setSendIdleEvents(arg0);
}
const Timing = module_1(Timing2);
let c4 = 16.666666666666668;
let closure_5 = [];
let closure_6 = [];
let closure_7 = [];
let closure_8 = [];
let closure_9 = [];
let closure_10 = [];
let closure_11 = {};
let c12 = 1;
let closure_13 = [];
let c14 = false;
let obj = {
  setTimeout(start, _delay) {
    let num = _delay;
    closure_0 = start;
    const length = arguments.length;
    let num2 = 0;
    if (length > 2) {
      num2 = length - 2;
    }
    const array = new Array(num2);
    for (let num3 = 2; num3 < length; num3 = num3 + 1) {
      array[num3 - 2] = arguments[num3];
    }
    const tmp2 = _allocateCallback(() => start.apply(undefined, array), "setTimeout");
    if (!num) {
      num = 0;
    }
    createTimer(tmp2, num, Date.now(), false);
    return tmp2;
  },
  setInterval(updateSchedules, arg1) {
    let num = arg1;
    closure_0 = updateSchedules;
    const length = arguments.length;
    let num2 = 0;
    if (length > 2) {
      num2 = length - 2;
    }
    const array = new Array(num2);
    for (let num3 = 2; num3 < length; num3 = num3 + 1) {
      array[num3 - 2] = arguments[num3];
    }
    const tmp2 = _allocateCallback(() => updateSchedules.apply(undefined, array), "setInterval");
    if (!num) {
      num = 0;
    }
    createTimer(tmp2, num, Date.now(), true);
    return tmp2;
  },
  queueReactNativeMicrotask(arg0) {
    closure_0 = arg0;
    const length = arguments.length;
    let num = 0;
    if (length > 1) {
      num = length - 1;
    }
    const array = new Array(num);
    for (let num2 = 1; num2 < length; num2 = num2 + 1) {
      array[num2 - 1] = arguments[num2];
    }
    const tmp2 = _allocateCallback(() => callback.apply(undefined, array), "queueReactNativeMicrotask");
    arr2.push(tmp2);
    return tmp2;
  },
  requestAnimationFrame(onUpdate) {
    const tmp = _allocateCallback(onUpdate, "requestAnimationFrame");
    createTimer(tmp, 1, Date.now(), false);
    return tmp;
  },
  requestIdleCallback(arg0, timeout) {
    let fn = arg0;
    closure_0 = arg0;
    if (arr3.length === 0) {
      setSendIdleEvents(true);
    }
    if (timeout) {
      timeout = timeout.timeout;
    }
    if (timeout != null) {
      fn = (arg0) => {
        if (closure_1_11[closure_1]) {
          closure_1_15.clearTimeout(tmp3);
          delete tmp2[tmp];
        }
        return lib(arg0);
      };
    }
    const tmp3Result = _allocateCallback(fn, "requestIdleCallback");
    closure_1 = tmp3Result;
    arr3.push(tmp3Result);
    if (timeout != null) {
      closure_11[tmp3Result] = obj.setTimeout(() => {
        const index = closure_1_10.indexOf(closure_1);
        if (index > -1) {
          closure_1_10.splice(index, 1);
          const _performance = lib.performance;
          closure_1_18(closure_1, _performance.now(), true);
        }
        delete tmp2[tmp];
        if (closure_1_10.length === 0) {
          closure_1_24(false);
        }
      }, timeout);
    }
    return tmp3Result;
  },
  cancelIdleCallback(_animationFrame) {
    _freeCallback(_animationFrame);
    const index = arr3.indexOf(_animationFrame);
    if (index !== -1) {
      arr3.splice(index, 1);
    }
    if (table2[_animationFrame]) {
      obj.clearTimeout(tmp7);
      delete tmp[tmp2];
    }
    if (arr3.length === 0) {
      setSendIdleEvents(false);
    }
  },
  clearTimeout(current) {
    _freeCallback(current);
  },
  clearInterval(closure_0) {
    _freeCallback(closure_0);
  },
  clearReactNativeMicrotask(_animationFrame) {
    _freeCallback(_animationFrame);
    const index = arr2.indexOf(_animationFrame);
    if (index !== -1) {
      arr2.splice(index, 1);
    }
  },
  cancelAnimationFrame(_animationFrame) {
    _freeCallback(_animationFrame);
  },
  callTimers(arg0) {
    let length;
    invariant(arg0.length !== 0, "Cannot call `callTimers` with an empty list of IDs.");
    arr4.length = 0;
    let num = 0;
    if (0 < arg0.length) {
      do {
        let tmp2 = _callTimer;
        let tmp3 = _callTimer(arg0[num], 0);
        num = num + 1;
        length = arg0.length;
      } while (num < length);
    }
    if (arr4.length > 0) {
      let num2 = 1;
      if (length2 > 1) {
        while (num2 < length2) {
          let tmp5 = obj;
          let fn = (arg0) => {
            throw arg0;
          };
          let tmp6 = arr4;
          let timerId = obj.setTimeout(fn.bind(null, arr4[num2]), 0);
          num2 = num2 + 1;
        }
      }
      throw arr4[0];
    }
  },
  callIdleCallbacks(arg0) {
    let length;
    if (c4 - (Date.now() - arg0) >= 1) {
      arr4.length = 0;
      if (arr3.length > 0) {
        arr3 = [];
        let num = 0;
        if (0 < arr3.length) {
          do {
            let tmp = _callTimer;
            let tmp2 = _callTimer(arr[num], arg0);
            num = num + 1;
            length = arr.length;
          } while (num < length);
        }
      }
      if (arr3.length === 0) {
        setSendIdleEvents(false);
      }
      const item = arr4.forEach((arg0) => {
        closure_0 = arg0;
        return closure_1_15.setTimeout(() => {
          throw closure_0;
        }, 0);
      });
    }
  },
  callReactNativeMicrotasks() {
    let tmp2;
    arr4.length = 0;
    if (_callReactNativeMicrotasksPass()) {
      do {
        let tmp = _callReactNativeMicrotasksPass;
        tmp2 = _callReactNativeMicrotasksPass();
      } while (tmp2);
    }
    const item = arr4.forEach((arg0) => {
      closure_0 = arg0;
      return closure_1_15.setTimeout(() => {
        throw closure_0;
      }, 0);
    });
  },
  emitTimeDriftWarning(arg0) {
    if (!c14) {
      c14 = true;
      const _console = console;
      console.warn(arg0);
    }
  }
};
let tmp4 = obj;
if (!Timing.default) {
  let _console = console;
  console.warn("Timing native module is not available, can't set timers.");
  obj = {};
  ({ callReactNativeMicrotasks: obj2.callReactNativeMicrotasks, queueReactNativeMicrotask: obj2.queueReactNativeMicrotask } = obj);
  tmp4 = obj;
}
const result = MessageQueue.default.setReactNativeMicrotasksCallback(obj.callReactNativeMicrotasks);

export default tmp4;
