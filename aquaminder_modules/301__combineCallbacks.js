// Module ID: 301
// Function ID: 3445
// Name: _combineCallbacks
// Dependencies: [1, 302, 325, 328, 329, 335, 326, 336, 337, 321, 338, 339, 311, 340, 341, 317, 324, 316]

// Module 301 (_combineCallbacks)
import _callSuper2 from "_callSuper" /* 302 */;
import _assertNativeAnimatedModule2 from "_assertNativeAnimatedModule" /* 311 */;
import attachNativeEvent from "attachNativeEvent" /* 316 */;
import _callSuper3 from "_callSuper" /* 317 */;
import _callSuper4 from "_callSuper" /* 321 */;
import _callSuper5 from "_callSuper" /* 324 */;
import _callSuper6 from "_callSuper" /* 325 */;
import _callSuper7 from "_callSuper" /* 326 */;
import _callSuper8 from "_callSuper" /* 328 */;
import unstable_createAnimatedComponentWithAllowlist2 from "unstable_createAnimatedComponentWithAllowlist" /* 329 */;
import _callSuper9 from "_callSuper" /* 335 */;
import _callSuper10 from "_callSuper" /* 336 */;
import _callSuper11 from "_callSuper" /* 337 */;
import _callSuper12 from "_callSuper" /* 338 */;
import _callSuper13 from "_callSuper" /* 339 */;
import _callSuper14 from "_callSuper" /* 340 */;
import _callSuper15 from "_callSuper" /* 341 */;
import module_1 from "module_1" /* 1 */;

let closure_2 = module_1(_callSuper2);
let closure_3 = module_1(_callSuper6);
let closure_4 = module_1(_callSuper8);
const unstable_createAnimatedComponentWithAllowlist = module_1(unstable_createAnimatedComponentWithAllowlist2);
let closure_5 = module_1(_callSuper9);
let _callSuper = module_1(_callSuper7);
let closure_7 = module_1(_callSuper10);
let closure_8 = module_1(_callSuper11);
_callSuper = module_1(_callSuper4);
let closure_9 = module_1(_callSuper12);
let closure_10 = module_1(_callSuper13);
const _assertNativeAnimatedModule = module_1(_assertNativeAnimatedModule2);
let closure_12 = module_1(_callSuper14);
let closure_13 = module_1(_callSuper15);
_callSuper = module_1(_callSuper3);
_callSuper = module_1(_callSuper5);
function _combineCallbacks(arg0, onComplete) {
  onComplete = arg0;
  closure_0 = arg0;
  closure_1 = onComplete;
  if (arg0) {
    if (onComplete.onComplete) {
      return () => {
        if (onComplete.onComplete) {
          onComplete = onComplete.onComplete;
          onComplete(...arguments);
        }
        if (callback) {
          callback(...arguments);
        }
      };
    }
  }
  if (!onComplete) {
    onComplete = onComplete.onComplete;
  }
  return onComplete;
}
function maybeVectorAnim(arg0, obj, decay) {
  if (arg0 instanceof _callSuper.default) {
    const _Object5 = Object;
    const merged = Object.assign({}, obj);
    const _Object6 = Object;
    const merged1 = Object.assign({}, obj);
    for (const key10056 in arg1) {
      let tmp20 = key10056;
      ({ x, y } = arg1[key10056]);
      if (x === undefined) {
        continue;
      } else {
        if (y === undefined) {
          continue;
        } else {
          merged[key10056] = x;
          merged1[key10056] = y;
          continue;
        }
        continue;
      }
      continue;
    }
    const items = [decay(arg0.x, merged), decay(arg0.y, merged1)];
    obj = { stopTogether: false };
    return parallel(items, obj);
  } else if (arg0 instanceof _callSuper.default) {
    const _Object = Object;
    const merged2 = Object.assign({}, obj);
    const _Object2 = Object;
    const merged3 = Object.assign({}, obj);
    const _Object3 = Object;
    const merged4 = Object.assign({}, obj);
    const _Object4 = Object;
    const merged5 = Object.assign({}, obj);
    for (const key10030 in arg1) {
      let tmp19 = key10030;
      ({ r, g, b, a } = arg1[key10030]);
      if (r === undefined) {
        continue;
      } else {
        if (g === undefined) {
          continue;
        } else {
          if (b === undefined) {
            continue;
          } else {
            if (a === undefined) {
              continue;
            } else {
              merged2[key10030] = r;
              merged3[key10030] = g;
              merged4[key10030] = b;
              merged5[key10030] = a;
              continue;
            }
            continue;
          }
          continue;
        }
        continue;
      }
      continue;
    }
    const tmp9 = decay(arg0.r, merged2);
    const tmp10 = decay(arg0.g, merged3);
    const items1 = [tmp9, tmp10, decay(arg0.b, merged4), decay(arg0.a, merged5)];
    obj = { stopTogether: false };
    return parallel(items1, obj);
  } else {
    return null;
  }
}
function spring(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  function start(stopTracking, toValue) {
    const tmp = closure_1_16(arg2, toValue);
    stopTracking.stopTracking();
    if (toValue.toValue instanceof closure_1_11.default) {
      let _default2 = closure_1_13.default;
      const prototype2 = _default2.prototype;
      _default2 = new _default2(stopTracking, toValue.toValue, closure_1_3.default, toValue, tmp);
      stopTracking.track(_default2);
    } else {
      let _default = closure_1_3.default;
      const prototype = _default.prototype;
      _default = new _default(toValue);
      stopTracking.animate(_default, tmp);
    }
  }
  let tmp = maybeVectorAnim(arg0, arg1, spring);
  if (!tmp) {
    const obj = {
      start(arg0) {
          start(closure_0, closure_1, arg0);
        },
      stop() {
          closure_0.stopAnimation();
        },
      reset() {
          closure_0.resetAnimation();
        },
      _startNativeLoop(iterations) {
          start(closure_0, Object.assign({}, closure_1, { iterations }));
        },
      _isUsingNativeDriver() {
          return useNativeDriver.useNativeDriver || false;
        }
    };
    tmp = obj;
  }
  return tmp;
}
function timing(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  function start(stopTracking, toValue) {
    const tmp = closure_1_16(arg2, toValue);
    stopTracking.stopTracking();
    if (toValue.toValue instanceof closure_1_11.default) {
      let _default2 = closure_1_13.default;
      const prototype2 = _default2.prototype;
      _default2 = new _default2(stopTracking, toValue.toValue, closure_1_4.default, toValue, tmp);
      stopTracking.track(_default2);
    } else {
      let _default = closure_1_4.default;
      const prototype = _default.prototype;
      _default = new _default(toValue);
      stopTracking.animate(_default, tmp);
    }
  }
  let tmp = maybeVectorAnim(arg0, arg1, timing);
  if (!tmp) {
    const obj = {
      start(arg0, isLooping) {
          start(closure_0, Object.assign({}, closure_1, { isLooping }), arg0);
        },
      stop() {
          closure_0.stopAnimation();
        },
      reset() {
          closure_0.resetAnimation();
        },
      _startNativeLoop(iterations) {
          start(closure_0, Object.assign({}, closure_1, { iterations }));
        },
      _isUsingNativeDriver() {
          return useNativeDriver.useNativeDriver || false;
        }
    };
    tmp = obj;
  }
  return tmp;
}
function decay(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  function start(stopTracking) {
    stopTracking.stopTracking();
    const tmp = closure_1_16(arg2, arg1);
    stopTracking.animate(new start.default(arg1), tmp);
  }
  let tmp = maybeVectorAnim(arg0, arg1, decay);
  if (!tmp) {
    const obj = {
      start(arg0) {
          start(closure_0, closure_1, arg0);
        },
      stop() {
          closure_0.stopAnimation();
        },
      reset() {
          closure_0.resetAnimation();
        },
      _startNativeLoop(iterations) {
          start(closure_0, Object.assign({}, closure_1, { iterations }));
        },
      _isUsingNativeDriver() {
          return useNativeDriver.useNativeDriver || false;
        }
    };
    tmp = obj;
  }
  return tmp;
}
function sequence(arg0) {
  closure_0 = arg0;
  c1 = 0;
  return {
    start(arg0, arg1) {
      closure_0 = arg0;
      c1 = arg1;
      function onComplete(finished) {
        if (finished.finished) {
          const sum = c1 + 1;
          c1 = sum;
          if (sum === lib.length) {
            c1 = 0;
            if (lib) {
              lib(finished);
            }
          } else {
            lib[c1].start(onComplete, c1);
          }
        } else if (lib) {
          lib(finished);
        }
      }
      if (closure_0.length === 0) {
        if (arg0) {
          let obj = { finished: true };
          arg0(obj);
        }
      } else {
        obj = closure_0[c1];
        obj.start(onComplete, arg1);
      }
    },
    stop() {
      if (c1 < closure_0.length) {
        closure_0[c1].stop();
        const obj = closure_0[c1];
      }
    },
    reset() {
      const item = closure_0.forEach((reset) => {
        if (arg1 <= c1) {
          reset.reset();
        }
      });
      c1 = 0;
    },
    _startNativeLoop() {
      const error = new Error("Loops run using the native driver cannot contain Animated.sequence animations");
      throw error;
    },
    _isUsingNativeDriver() {
      return false;
    }
  };
}
function parallel(arg0, stopTogether) {
  closure_0 = arg0;
  c1 = 0;
  closure_2 = {};
  let tmp = stopTogether;
  if (stopTogether) {
    tmp = stopTogether.stopTogether === false;
  }
  closure_3 = !tmp;
  let obj = {
    start(arg0, arg1) {
      closure_0 = arg0;
      c1 = arg1;
      if (c1 === closure_0.length) {
        if (arg0) {
          obj = { finished: true };
          arg0(obj);
        }
      } else {
        const item = closure_0.forEach((start) => {
          closure_0 = arg1;
          function cb(finished) {
            closure_2_2[lib] = true;
            const sum = c1 + 1;
            c1 = sum;
            if (sum === lib.length) {
              c1 = 0;
              if (lib) {
                lib(finished);
              }
            } else if (!finished.finished) {
              if (closure_2_3) {
                closure_2_4.stop();
              }
            }
          }
          if (start) {
            start.start(cb, c1);
          } else {
            obj = { finished: true };
            cb(obj);
          }
        });
      }
    },
    stop() {
      const item = closure_0.forEach((stop) => {
        if (!closure_1_2[arg1]) {
          stop.stop();
        }
        closure_1_2[arg1] = true;
      });
    },
    reset() {
      const item = closure_0.forEach((reset) => {
        reset.reset();
        closure_1_2[arg1] = false;
        c1 = 0;
      });
    },
    _startNativeLoop() {
      const error = new Error("Loops run using the native driver cannot contain Animated.parallel animations");
      throw error;
    },
    _isUsingNativeDriver() {
      return false;
    }
  };
  return obj;
}
function delay(delay) {
  const obj = { toValue: 0, delay, duration: 0, useNativeDriver: false };
  return timing(new _callSuper.default(0), obj);
}

export default {
  Value: _callSuper.default,
  ValueXY: _callSuper.default,
  Color: _callSuper.default,
  Interpolation: _callSuper.default,
  Node: _assertNativeAnimatedModule.default,
  decay,
  timing,
  spring,
  add(arg0, arg1) {
    return new mod.default(arg0, arg1);
  },
  subtract(dateOffset, m) {
    return new mod6.default(dateOffset, m);
  },
  divide(arg0, arg1) {
    return new mod3.default(arg0, arg1);
  },
  multiply(value, dragX) {
    return new mod5.default(value, dragX);
  },
  modulo(arg0, arg1) {
    return new mod4.default(arg0, arg1);
  },
  diffClamp(interpolateResult, arg1, arg2) {
    return new mod2.default(interpolateResult, arg1, arg2);
  },
  delay,
  sequence,
  parallel,
  stagger(arg0, arr) {
    closure_0 = arg0;
    return parallel(arr.map((arg0, arg1) => {
      const items = [closure_1_23(closure_0 * arg1), arg0];
      return closure_1_21(items);
    }));
  },
  loop(arg0) {
    closure_0 = arg0;
    if (arguments.length > 1) {
      if (arguments[1] !== undefined) {
        let obj = arguments[1];
      }
      const iterations = obj.iterations;
      let num = -1;
      if (iterations !== undefined) {
        num = iterations;
      }
      const resetBeforeIteration = obj.resetBeforeIteration;
      let flag = true;
      if (resetBeforeIteration !== undefined) {
        flag = resetBeforeIteration;
      }
      c3 = false;
      c4 = 0;
      obj = {
        start(arg0) {
            const navigation = arg0;
            function restart() {
              if (arguments.length > 0) {
                if (arguments[0] !== undefined) {
                  let first = arguments[0];
                }
                if (!closure_1_3) {
                  if (closure_4 !== restart) {
                    if (first.finished !== false) {
                      closure_4 = closure_4 + 1;
                      if (closure_1_2) {
                        navigation.reset();
                      }
                      navigation.start(restart, restart === -1);
                    }
                  }
                }
                if (navigation) {
                  navigation(first);
                }
              }
              first = { finished: true };
            }
            if (navigation) {
              if (restart !== 0) {
                if (navigation._isUsingNativeDriver()) {
                  navigation._startNativeLoop(restart);
                } else {
                  restart();
                }
              }
            }
            if (arg0) {
              const obj = { finished: true };
              arg0(obj);
            }
          },
        stop() {
            c3 = true;
            navigation.stop();
          },
        reset() {
            c4 = 0;
            c3 = false;
            navigation.reset();
          },
        _startNativeLoop() {
            const error = new Error("Loops run using the native driver cannot contain Animated.loop animations");
            throw error;
          },
        _isUsingNativeDriver() {
            return navigation._isUsingNativeDriver();
          }
      };
      return obj;
    }
    obj = {};
  },
  event(items1, useNativeDriver) {
    const animatedEvent = new attachNativeEvent.AnimatedEvent(items1, useNativeDriver);
    return animatedEvent.__isNative ? animatedEvent : animatedEvent.__getHandler();
  },
  createAnimatedComponent: unstable_createAnimatedComponentWithAllowlist.default,
  attachNativeEvent: attachNativeEvent.attachNativeEvent,
  forkEvent(__addListener, listener) {
    const _require = __addListener;
    dependencyMap = listener;
    if (__addListener) {
      if (__addListener instanceof _require(316).AnimatedEvent) {
        __addListener.__addListener(listener);
        return __addListener;
      } else {
        return () => {
          if (typeof __addListener === "function") {
            __addListener(...arguments);
          }
          listener(...arguments);
        };
      }
    } else {
      return listener;
    }
  },
  unforkEvent(__removeListener) {
    if (__removeListener) {
      if (__removeListener instanceof attachNativeEvent.AnimatedEvent) {
        __removeListener.__removeListener(arg1);
      }
    }
  },
  Event: attachNativeEvent.AnimatedEvent
};
