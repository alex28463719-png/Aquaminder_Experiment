// Module ID: 271
// Function ID: 2755
// Name: push
// Dependencies: []

// Module 271 (push)
function push(arr) {
  let length = arr.length;
  arr.push(arg1);
  if (0 < length) {
    while (0 < compare(arr[length - 1 >>> 1], arg1)) {
      arr[tmp2] = arg1;
      arr[length] = tmp3;
      length = tmp2;
      if (0 >= tmp2) {
        break;
      }
    }
  }
}
function peek(closure_4) {
  let first = null;
  if (0 !== closure_4.length) {
    first = closure_4[0];
  }
  return first;
}
function pop(arr) {
  if (0 === arr.length) {
    return null;
  } else {
    const first = arr[0];
    arr = arr.pop();
    if (arr !== first) {
      arr[0] = arr;
      let num = 0;
      if (0 < arr.length >>> 1) {
        while (true) {
          let diff = 2 * (num + 1) - 1;
          let tmp2 = arr[diff];
          let sum = diff + 1;
          let tmp4 = arr[sum];
          let tmp5 = compare;
          let tmp6 = num;
          if (0 > compare(tmp2, arr)) {
            if (sum < length) {
              let tmp9 = compare;
              if (0 > compare(tmp4, tmp2)) {
                arr[num] = tmp4;
                arr[sum] = arr;
                let tmp8 = sum;
                num = tmp8;
                if (tmp8 >= tmp13) {
                  break;
                }
              }
            }
            arr[num] = tmp2;
            arr[diff] = arr;
            tmp8 = diff;
          } else if (sum >= length) {
            break;
          } else {
            let tmp7 = compare;
            if (0 <= compare(tmp4, arr)) {
              break;
            } else {
              arr[num] = tmp4;
              arr[sum] = arr;
              tmp8 = sum;
            }
          }
          break;
        }
      }
    }
    return first;
  }
}
function compare(sortIndex, sortIndex2) {
  let diff = sortIndex.sortIndex - sortIndex2.sortIndex;
  if (0 === diff) {
    diff = sortIndex.id - sortIndex2.id;
  }
  return diff;
}
function advanceTimers(arg0) {
  let tmp = peek(closure_5);
  if (null !== tmp) {
    while (true) {
      let tmp2 = tmp;
      if (null === tmp.callback) {
        let tmp9 = pop;
        let tmp10 = closure_5;
        let tmp11 = pop(closure_5);
        let tmp12 = peek;
        let tmp13 = closure_5;
        tmp = peek(closure_5);
        if (null === tmp) {
          break;
        }
      } else if (tmp.startTime > arg0) {
        break;
      } else {
        let tmp3 = pop;
        let tmp4 = closure_5;
        let tmp5 = pop(closure_5);
        tmp.sortIndex = tmp.expirationTime;
        let tmp6 = push;
        let tmp7 = closure_4;
        let tmp8 = push(closure_4, tmp);
      }
      break;
    }
  }
}
function handleTimeout(arg0) {
  c11 = false;
  advanceTimers(arg0);
  if (!c10) {
    if (null !== peek(closure_4)) {
      c10 = true;
      if (!c15) {
        c15 = true;
        schedulePerformWorkUntilDeadline();
      }
    } else {
      const tmp7 = peek(closure_5);
      if (null !== tmp7) {
        requestHostTimeout(handleTimeout, tmp7.startTime - arg0);
      }
    }
  }
}
function unstable_scheduleCallback$1(priorityLevel, callback, delay) {
  const tmp = getCurrentTime();
  let tmp2 = tmp;
  if ("object" === typeof delay) {
    tmp2 = tmp;
    if (null !== delay) {
      delay = delay.delay;
      let sum = tmp;
      if ("number" === typeof delay) {
        sum = tmp;
        if (0 < delay) {
          sum = tmp + delay;
        }
      }
      tmp2 = sum;
    }
  }
  let num2 = -1;
  let num3 = -1;
  if (1 !== priorityLevel) {
    if (2 === priorityLevel) {
      num3 = 250;
    } else if (5 === priorityLevel) {
      num3 = 1073741823;
    } else {
      num3 = 4 === priorityLevel ? 10000 : 5000;
    }
  }
  const sum1 = tmp2 + num3;
  const obj = { id: tmp6, callback, priorityLevel };
  closure_6 = tmp6 + 1;
  obj.startTime = tmp2;
  obj.expirationTime = sum1;
  obj.sortIndex = num2;
  if (tmp2 > tmp) {
    obj.sortIndex = tmp2;
    push(closure_5, obj);
    let tmp20 = null === peek(closure_4);
    if (tmp20) {
      tmp20 = obj === peek(closure_5);
    }
    if (tmp20) {
      if (c11) {
        _clearTimeout(num2);
      } else {
        c11 = true;
      }
      num2 = requestHostTimeout;
      tmp2 = requestHostTimeout(handleTimeout, tmp2 - tmp);
    }
  } else {
    obj.sortIndex = sum1;
    push(closure_4, obj);
    let tmp10 = c10;
    if (!c10) {
      tmp10 = c9;
    }
    if (!tmp10) {
      c10 = true;
      if (!c15) {
        c15 = true;
        schedulePerformWorkUntilDeadline();
      }
    }
  }
  return obj;
}
function unstable_cancelCallback$1(arg0) {
  arg0.callback = null;
}
function unstable_getCurrentPriorityLevel$1() {
  return c8;
}
function shouldYieldToHost() {
  let flag = true;
  if (5 > getCurrentTime() - c17) {
    flag = false;
  }
  return flag;
}
function requestPaint() {

}
function performWorkUntilDeadline() {
  let tmp22Result;
  if (c15) {
    const tmp6 = getCurrentTime();
    let tmp7 = tmp6;
    closure_17 = tmp6;
    try {
      c10 = false;
      if (c11) {
        c11 = false;
        _clearTimeout(c16);
        c16 = -1;
      }
      c9 = true;
      try {
        advanceTimers(tmp7);
        const tmp18 = peek(closure_4);
        let _null = tmp18;
        let tmp19 = null;
        if (null !== tmp18) {
          if (_null.expirationTime <= tmp7) {
            while (true) {
              let tmp21 = _null;
              let callback = _null.callback;
              if ("function" === typeof callback) {
                let tmp26 = _null;
                _null.callback = tmp19;
                let tmp27 = _null;
                let priorityLevel = _null.priorityLevel;
                let tmp28 = callback;
                let tmp29 = _null;
                let tmp30 = tmp7;
                tmp22Result = tmp22(_null.expirationTime <= tmp7);
                let tmp32 = tmp22Result;
                let tmp33 = getCurrentTime;
                tmp7 = getCurrentTime();
                if ("function" === typeof tmp22Result) {
                  break;
                } else {
                  let tmp34 = _null;
                  let tmp35 = peek;
                  let tmp36 = closure_4;
                  if (_null === peek(closure_4)) {
                    let tmp37 = pop;
                    let tmp38 = closure_4;
                    let tmp39 = pop(closure_4);
                  }
                  let tmp40 = advanceTimers;
                  let tmp41 = tmp7;
                  let tmp42 = advanceTimers(tmp7);
                }
              } else {
                let tmp23 = pop;
                let tmp24 = closure_4;
                let tmp25 = pop(closure_4);
              }
              let tmp43 = peek;
              let tmp44 = closure_4;
              let tmp45 = peek(closure_4);
              _null = tmp45;
              if (tmp19 !== tmp45) {
                let tmp46 = _null;
                let tmp47 = tmp7;
                if (_null.expirationTime <= tmp7) {
                  continue;
                } else {
                  let tmp66 = shouldYieldToHost;
                  _null = tmp19;
                  tmp19 = tmp12;
                  priorityLevel = tmp12;
                  c9 = false;
                }
              }
            }
            _null.callback = tmp22Result;
            advanceTimers(tmp7);
          }
        }
        if (tmp19 === _null) {
          const tmp55 = peek(closure_5);
          if (tmp19 !== tmp55) {
            tmp7 = requestHostTimeout(handleTimeout, tmp55.startTime - tmp7);
          }
        }
      } catch (tmp59) {
        _null = null;
        priorityLevel = tmp4;
        c9 = tmp3;
        throw tmp59;
      }
    } catch (tmp61) {
      if (tmp2) {
        schedulePerformWorkUntilDeadline();
      } else {
        c15 = false;
      }
      throw tmp61;
    }
  }
}
function requestHostTimeout(handleTimeout, arg1) {
  closure_0 = handleTimeout;
  closure_16 = _setTimeout(() => {
    handleTimeout(handleTimeout());
  }, arg1);
}
function throwNotImplemented() {
  throw Error("Not implemented.");
}
if ("object" === typeof performance) {
  const _performance = performance;
  if ("function" === typeof performance.now) {
    const _performance2 = performance;
    const getCurrentTime2 = function getCurrentTime() {
      return performance.now();
    };
    let getCurrentTime = getCurrentTime2;
    getCurrentTime = getCurrentTime2;
  }
  let closure_4 = [];
  let closure_5 = [];
  let num = 1;
  let c6 = 1;
  let c7 = null;
  let num2 = 3;
  let c8 = 3;
  let c9 = false;
  let c10 = false;
  let c11 = false;
  let _setTimeout = setTimeout;
  _setTimeout = null;
  if ("function" === typeof setTimeout) {
    _setTimeout = setTimeout;
  }
  let _clearTimeout = clearTimeout;
  _clearTimeout = null;
  if ("function" === typeof clearTimeout) {
    _clearTimeout = clearTimeout;
  }
  let _setImmediate = setImmediate;
  _setImmediate = null;
  if ("undefined" !== typeof setImmediate) {
    _setImmediate = setImmediate;
  }
  let c15 = false;
  let c16 = -1;
  let c17 = -1;
  if ("function" === typeof _setImmediate) {
    function schedulePerformWorkUntilDeadline() {
      _setImmediate(performWorkUntilDeadline);
    }
  } else {
    if ("undefined" !== typeof globalThis.MessageChannel) {
      const prototype = globalThis.MessageChannel.prototype;
      const messageChannel = new globalThis.MessageChannel();
      const port2 = messageChannel.port2;
      messageChannel.port1.onmessage = performWorkUntilDeadline;
      schedulePerformWorkUntilDeadline = function schedulePerformWorkUntilDeadline() {
        port2.postMessage(null);
      };
    } else {
      schedulePerformWorkUntilDeadline = function schedulePerformWorkUntilDeadline() {
        _setTimeout(performWorkUntilDeadline, 0);
      };
    }
  }
  let num4 = 2;
  if ("undefined" !== typeof globalThis.nativeRuntimeScheduler) {
    num4 = globalThis.nativeRuntimeScheduler.unstable_UserBlockingPriority;
  }
  if ("undefined" !== typeof globalThis.nativeRuntimeScheduler) {
    num2 = globalThis.nativeRuntimeScheduler.unstable_NormalPriority;
  }
  let num5 = 4;
  if ("undefined" !== typeof globalThis.nativeRuntimeScheduler) {
    num5 = globalThis.nativeRuntimeScheduler.unstable_LowPriority;
  }
  if ("undefined" !== typeof globalThis.nativeRuntimeScheduler) {
    num = globalThis.nativeRuntimeScheduler.unstable_ImmediatePriority;
  }
  if ("undefined" !== typeof globalThis.nativeRuntimeScheduler) {
    unstable_scheduleCallback$1 = globalThis.nativeRuntimeScheduler.unstable_scheduleCallback;
  }
  if ("undefined" !== typeof globalThis.nativeRuntimeScheduler) {
    unstable_cancelCallback$1 = globalThis.nativeRuntimeScheduler.unstable_cancelCallback;
  }
  if ("undefined" !== typeof globalThis.nativeRuntimeScheduler) {
    unstable_getCurrentPriorityLevel$1 = globalThis.nativeRuntimeScheduler.unstable_getCurrentPriorityLevel;
  }
  if ("undefined" !== typeof globalThis.nativeRuntimeScheduler) {
    shouldYieldToHost = globalThis.nativeRuntimeScheduler.unstable_shouldYield;
  }
  if ("undefined" !== typeof globalThis.nativeRuntimeScheduler) {
    requestPaint = globalThis.nativeRuntimeScheduler.unstable_requestPaint;
  }
  if ("undefined" !== typeof globalThis.nativeRuntimeScheduler) {
    getCurrentTime = globalThis.nativeRuntimeScheduler.unstable_now;
  }
  let num6 = 5;
  if ("undefined" !== typeof globalThis.nativeRuntimeScheduler) {
    num6 = globalThis.nativeRuntimeScheduler.unstable_IdlePriority;
  }
  arg5.unstable_IdlePriority = num6;
  arg5.unstable_ImmediatePriority = num;
  arg5.unstable_LowPriority = num5;
  arg5.unstable_NormalPriority = num2;
  arg5.unstable_Profiling = null;
  arg5.unstable_UserBlockingPriority = num4;
  arg5.unstable_cancelCallback = unstable_cancelCallback$1;
  arg5.unstable_continueExecution = throwNotImplemented;
  arg5.unstable_forceFrameRate = throwNotImplemented;
  arg5.unstable_getCurrentPriorityLevel = unstable_getCurrentPriorityLevel$1;
  arg5.unstable_getFirstCallbackNode = throwNotImplemented;
  arg5.unstable_next = throwNotImplemented;
  arg5.unstable_now = getCurrentTime;
  arg5.unstable_pauseExecution = throwNotImplemented;
  arg5.unstable_requestPaint = requestPaint;
  arg5.unstable_runWithPriority = throwNotImplemented;
  arg5.unstable_scheduleCallback = unstable_scheduleCallback$1;
  arg5.unstable_shouldYield = shouldYieldToHost;
  arg5.unstable_wrapCallback = throwNotImplemented;
}
let closure_3 = Date.now();
getCurrentTime = function getCurrentTime() {
  return Date.now() - closure_3;
};
