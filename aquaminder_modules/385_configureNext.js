// Module ID: 385
// Function ID: 4724
// Name: configureNext
// Dependencies: [1, 73, 33, 47, 44]

// Module 385 (configureNext)
import get_Version from "get Version" /* 33 */;
import animatedShouldDebounceQueueFlush2 from "animatedShouldDebounceQueueFlush" /* 73 */;
import module_1 from "module_1" /* 1 */;

function configureNext(duration) {
  let fn = arg2;
  const _global = arg1;
  if (!mod.default.isDisableAnimations) {
    if (closure_4) {
      const _require = false;
      function onAnimationComplete() {
        if (!c1) {
          c1 = true;
          const _clearTimeout = clearTimeout;
          clearTimeout(closure_2);
          if (callback != null) {
            callback();
          }
        }
      }
      duration = duration.duration;
      let num = 0;
      if (duration != null) {
        num = duration;
      }
      dependencyMap = setTimeout(onAnimationComplete, num + 17);
      const fabricUIManager = _require(47).getFabricUIManager();
      if (fabricUIManager != null) {
        if (fabricUIManager.configureNextLayoutAnimation) {
          let tmp14 = _global == null;
          let obj = _global;
          if (!tmp14) {
            const nativeFabricUIManager = _global.nativeFabricUIManager;
            tmp14 = nativeFabricUIManager == null;
            obj = nativeFabricUIManager;
          }
          if (!tmp14) {
            if (fn == null) {
              fn = () => {

              };
            }
            const result = obj.configureNextLayoutAnimation(duration, onAnimationComplete, fn);
          }
        }
      }
      if (_require(44).default != null) {
        if (_require(44).default.configureNextLayoutAnimation) {
          let fn2 = onAnimationComplete;
          if (onAnimationComplete == null) {
            fn2 = () => {

            };
          }
          let fn3 = fn;
          if (fn == null) {
            fn3 = () => {

            };
          }
          const result1 = _require(44).default.configureNextLayoutAnimation(duration, fn2, fn3);
          const _default = _require(44).default;
        }
      }
    }
  }
}
function create(duration, easeInEaseOut, opacity) {
  obj = { duration, create: obj, update: obj, delete: obj1 };
  obj = { type: easeInEaseOut, property: opacity };
  obj = { type: easeInEaseOut };
  return obj;
}
let animatedShouldDebounceQueueFlush = _interopRequireWildcard(animatedShouldDebounceQueueFlush2);
let closure_3 = module_1(get_Version);
let closure_4 = animatedShouldDebounceQueueFlush.isLayoutAnimationEnabled();
animatedShouldDebounceQueueFlush = { easeInEaseOut: require("module_300"), linear: require("module_500"), spring: { duration: 700, create: { type: "linear", property: "opacity" }, update: { type: "spring", springDamping: 0.4 }, delete: { type: "linear", property: "opacity" } } };
animatedShouldDebounceQueueFlush = {
  configureNext,
  create,
  Types: Object.freeze({ spring: "spring", linear: "linear", easeInEaseOut: "easeInEaseOut", easeIn: "easeIn", easeOut: "easeOut", keyboard: "keyboard" }),
  Properties: Object.freeze({ opacity: "opacity", scaleX: "scaleX", scaleY: "scaleY", scaleXY: "scaleXY" }),
  checkConfig() {
    console.error("LayoutAnimation.checkConfig(...) has been disabled.");
  },
  Presets: animatedShouldDebounceQueueFlush,
  easeInEaseOut: configureNext.bind(null, animatedShouldDebounceQueueFlush.easeInEaseOut),
  linear: configureNext.bind(null, animatedShouldDebounceQueueFlush.linear),
  spring: configureNext.bind(null, animatedShouldDebounceQueueFlush.spring),
  setEnabled(arg0) {

  }
};

export default animatedShouldDebounceQueueFlush;
