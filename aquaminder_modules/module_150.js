// Module ID: 150
// Function ID: 1651
// Dependencies: [65, 151, 152, 153, 154, 157]

// Module 150
import polyfillObjectProperty from "polyfillObjectProperty" /* 65 */;
import NativeMicrotasksCxx from "NativeMicrotasksCxx" /* 151 */;
import clearImmediate from "clearImmediate" /* 152 */;
import NativeIdleCallbacksCxx from "NativeIdleCallbacksCxx" /* 153 */;
import _getFreeIndex from "_getFreeIndex" /* 154 */;

if (global.RN$Bridgeless === true) {
  global.RN$enableMicrotasksInReact = true;
  const _module = polyfillObjectProperty;
  _module.polyfillGlobal("queueMicrotask", () => NativeMicrotasksCxx.default.queueMicrotask);
  const _module1 = polyfillObjectProperty;
  _module1.polyfillGlobal("setImmediate", () => clearImmediate.setImmediate);
  const _module2 = polyfillObjectProperty;
  _module2.polyfillGlobal("clearImmediate", () => clearImmediate.clearImmediate);
  const _module3 = polyfillObjectProperty;
  _module3.polyfillGlobal("requestIdleCallback", () => NativeIdleCallbacksCxx.default.requestIdleCallback);
  const _module4 = polyfillObjectProperty;
  _module4.polyfillGlobal("cancelIdleCallback", () => NativeIdleCallbacksCxx.default.cancelIdleCallback);
} else {
  function defineLazyTimer(cancelAnimationFrame) {
    const _require = cancelAnimationFrame;
    _require(65).polyfillGlobal(cancelAnimationFrame, () => _cancelAnimationFrame(closure_1_1[4]).default[_cancelAnimationFrame]);
  }
  defineLazyTimer("setTimeout");
  defineLazyTimer("clearTimeout");
  defineLazyTimer("setInterval");
  defineLazyTimer("clearInterval");
  defineLazyTimer("requestAnimationFrame");
  defineLazyTimer("cancelAnimationFrame");
  defineLazyTimer("requestIdleCallback");
  defineLazyTimer("cancelIdleCallback");
  const _module5 = polyfillObjectProperty;
  _module5.polyfillGlobal("queueMicrotask", () => require(157) /* queueMicrotask */.default);
  const _module6 = polyfillObjectProperty;
  _module6.polyfillGlobal("setImmediate", () => _getFreeIndex.default.queueReactNativeMicrotask);
  const _module7 = polyfillObjectProperty;
  _module7.polyfillGlobal("clearImmediate", () => _getFreeIndex.default.clearReactNativeMicrotask);
}
