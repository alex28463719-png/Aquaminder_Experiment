// Module ID: 342
// Function ID: 4170
// Name: mockAnimationStart
// Dependencies: [1, 301, 329, 326, 321, 311, 317, 324, 316]

// Module 342 (mockAnimationStart)
import _combineCallbacks2 from "_combineCallbacks" /* 301 */;
import _assertNativeAnimatedModule2 from "_assertNativeAnimatedModule" /* 311 */;
import attachNativeEvent from "attachNativeEvent" /* 316 */;
import _callSuper2 from "_callSuper" /* 317 */;
import _callSuper3 from "_callSuper" /* 321 */;
import _callSuper4 from "_callSuper" /* 324 */;
import _callSuper5 from "_callSuper" /* 326 */;
import unstable_createAnimatedComponentWithAllowlist2 from "unstable_createAnimatedComponentWithAllowlist" /* 329 */;
import module_1 from "module_1" /* 1 */;

function mockAnimationStart(arg0) {
  c0 = arg0;
  return (arg0) => {
    let fn = arg0;
    const callback = arg0;
    if (arg0 != null) {
      fn = () => {
        if (c0) {
          const _console = console;
          console.warn("Ignoring recursive animation callback when running mock animations");
        } else {
          c0 = true;
          try {
            callback(...arguments);
            c0 = false;
          } catch (tmp4) {
            c0 = false;
            throw tmp4;
          }
        }
      };
    }
    callback(fn);
  };
}
const _combineCallbacks = module_1(_combineCallbacks2);
const unstable_createAnimatedComponentWithAllowlist = module_1(unstable_createAnimatedComponentWithAllowlist2);
let _callSuper = module_1(_callSuper5);
_callSuper = module_1(_callSuper3);
const _assertNativeAnimatedModule = module_1(_assertNativeAnimatedModule2);
_callSuper = module_1(_callSuper2);
let c0 = false;
let closure_1 = {
  start() {

  },
  stop() {

  },
  reset() {

  },
  _startNativeLoop() {

  },
  _isUsingNativeDriver() {
    return false;
  }
};
function mockCompositeAnimation(arg0) {
  closure_0 = arg0;
  return Object.assign({}, closure_1, {
    start: mockAnimationStart((arg0) => {
      const item = closure_0.forEach((start) => start.start());
      if (arg0 != null) {
        const obj = { finished: true };
        arg0(obj);
      }
    })
  });
}

export default {
  Value: _callSuper.default,
  ValueXY: module_1(_callSuper4).default,
  Color: _callSuper.default,
  Interpolation: _callSuper.default,
  Node: _assertNativeAnimatedModule.default,
  decay(arg0, arg1) {
    return closure_1;
  },
  timing(arg0, arg1) {
    closure_0 = arg1;
    closure_1 = arg0;
    return Object.assign({}, closure_1, {
      start: mockAnimationStart((arg0) => {
        value.setValue(toValue.toValue);
        if (arg0 != null) {
          const obj = { finished: true };
          arg0(obj);
        }
      })
    });
  },
  spring(arg0, arg1) {
    closure_0 = arg1;
    closure_1 = arg0;
    return Object.assign({}, closure_1, {
      start: mockAnimationStart((arg0) => {
        value.setValue(toValue.toValue);
        if (arg0 != null) {
          const obj = { finished: true };
          arg0(obj);
        }
      })
    });
  },
  add: _combineCallbacks.default.add,
  subtract: _combineCallbacks.default.subtract,
  divide: _combineCallbacks.default.divide,
  multiply: _combineCallbacks.default.multiply,
  modulo: _combineCallbacks.default.modulo,
  diffClamp: _combineCallbacks.default.diffClamp,
  delay(arg0) {
    return closure_1;
  },
  sequence(arg0) {
    return mockCompositeAnimation(arg0);
  },
  parallel(arg0, arg1) {
    return mockCompositeAnimation(arg0);
  },
  stagger(arg0, arg1) {
    return mockCompositeAnimation(arg1);
  },
  loop(arg0) {
    if (arguments.length > 1) {
      const iterations = {}.iterations;
      return closure_1;
    }
  },
  event: _combineCallbacks.default.event,
  createAnimatedComponent: unstable_createAnimatedComponentWithAllowlist.default,
  attachNativeEvent: attachNativeEvent.attachNativeEvent,
  forkEvent: _combineCallbacks.default.forkEvent,
  unforkEvent: _combineCallbacks.default.unforkEvent,
  Event: attachNativeEvent.AnimatedEvent
};
