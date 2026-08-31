// Module ID: 21
// Function ID: 239
// Name: map
// Dependencies: [1, 22, 33, 43, 53, 55, 57]

// Module 21 (map)
import _callSuper from "_callSuper" /* 22 */;
import get_Version from "get Version" /* 33 */;
import legacySendAccessibilityEvent from "legacySendAccessibilityEvent" /* 43 */;
import AccessibilityInfo from "AccessibilityInfo" /* 53 */;
import AccessibilityManager from "AccessibilityManager" /* 55 */;
import keys from "keys" /* 57 */;
import module_1 from "module_1" /* 1 */;

let closure_2 = module_1(_callSuper);
get_Version = module_1(get_Version);
let closure_4 = module_1(legacySendAccessibilityEvent);
let closure_5 = module_1(AccessibilityInfo);
let closure_6 = module_1(AccessibilityManager);
if (get_Version.default.OS === "android") {
  const _Map = Map;
  const items = [["change", "touchExplorationDidChange"], ["reduceMotionChanged", "reduceMotionDidChange"], ["highTextContrastChanged", "highTextContrastDidChange"], ["screenReaderChanged", "touchExplorationDidChange"], ["accessibilityServiceChanged", "accessibilityServiceDidChange"], ["invertColorsChanged", "invertColorDidChange"], ["grayscaleChanged", "grayscaleModeDidChange"]];
  let map = new Map(items);
} else {
  const _Map2 = Map;
  const items1 = [["announcementFinished", "announcementFinished"], ["boldTextChanged", "boldTextChanged"], ["change", "screenReaderChanged"], ["grayscaleChanged", "grayscaleChanged"], ["invertColorsChanged", "invertColorsChanged"], ["reduceMotionChanged", "reduceMotionChanged"], ["reduceTransparencyChanged", "reduceTransparencyChanged"], ["screenReaderChanged", "screenReaderChanged"], ["darkerSystemColorsChanged", "darkerSystemColorsChanged"]];
  map = new Map(items1);
}

export default {
  isBoldTextEnabled() {
    if (get_Version.default.OS === "android") {
      return Promise.resolve(false);
    } else {
      const promise = new Promise((arg0, arg1) => {
        if (closure_1_6.default != null) {
          const currentBoldTextState = closure_1_6.default.getCurrentBoldTextState(arg0, arg1);
          const _default = closure_1_6.default;
        } else {
          arg1(null);
        }
      });
      return promise;
    }
  },
  isGrayscaleEnabled(arg0) {
    if (get_Version.default.OS === "android") {
      let promise = new Promise((arg0, arg1) => {
        let isGrayscaleEnabled;
        if (closure_1_5.default != null) {
          isGrayscaleEnabled = closure_1_5.default.isGrayscaleEnabled;
        }
        if (isGrayscaleEnabled != null) {
          closure_1_5.default.isGrayscaleEnabled(arg0);
          const _default = closure_1_5.default;
        } else {
          arg1(null);
        }
      });
      return promise;
    } else {
      promise = new Promise((arg0, arg1) => {
        if (closure_1_6.default != null) {
          const currentGrayscaleState = closure_1_6.default.getCurrentGrayscaleState(arg0, arg1);
          const _default = closure_1_6.default;
        } else {
          arg1(null);
        }
      });
      return promise;
    }
  },
  isInvertColorsEnabled(arg0) {
    if (get_Version.default.OS === "android") {
      let promise = new Promise((arg0, arg1) => {
        let prop;
        if (closure_1_5.default != null) {
          prop = closure_1_5.default.isInvertColorsEnabled;
        }
        if (prop != null) {
          const result = closure_1_5.default.isInvertColorsEnabled(arg0);
          const _default = closure_1_5.default;
        } else {
          arg1(null);
        }
      });
      return promise;
    } else {
      promise = new Promise((arg0, arg1) => {
        if (closure_1_6.default != null) {
          const currentInvertColorsState = closure_1_6.default.getCurrentInvertColorsState(arg0, arg1);
          const _default = closure_1_6.default;
        } else {
          arg1(null);
        }
      });
      return promise;
    }
  },
  isReduceMotionEnabled(arg0) {
    return new Promise((arg0, arg1) => {
      if (closure_1_3.default.OS === "android") {
        if (closure_1_5.default != null) {
          const result = closure_1_5.default.isReduceMotionEnabled(arg0);
          const _default2 = closure_1_5.default;
        } else {
          arg1(null);
        }
      } else if (closure_1_6.default != null) {
        const currentReduceMotionState = closure_1_6.default.getCurrentReduceMotionState(arg0, arg1);
        const _default = closure_1_6.default;
      } else {
        arg1(null);
      }
    });
  },
  isHighTextContrastEnabled(arg0) {
    return new Promise((arg0, arg1) => {
      if (closure_1_3.default.OS === "android") {
        let prop;
        if (closure_1_5.default != null) {
          prop = closure_1_5.default.isHighTextContrastEnabled;
        }
        if (prop != null) {
          const result = closure_1_5.default.isHighTextContrastEnabled(arg0);
          const _default = closure_1_5.default;
        } else {
          arg1(null);
        }
      } else {
        return Promise.resolve(false);
      }
    });
  },
  isDarkerSystemColorsEnabled() {
    return new Promise((arg0, arg1) => {
      if (closure_1_3.default.OS === "android") {
        return Promise.resolve(false);
      } else {
        let prop;
        if (closure_1_6.default != null) {
          prop = closure_1_6.default.getCurrentDarkerSystemColorsState;
        }
        if (prop != null) {
          const currentDarkerSystemColorsState = closure_1_6.default.getCurrentDarkerSystemColorsState(arg0, arg1);
          const _default = closure_1_6.default;
        } else {
          arg1(null);
        }
      }
    });
  },
  prefersCrossFadeTransitions() {
    return new Promise((arg0, arg1) => {
      if (closure_1_3.default.OS === "android") {
        return Promise.resolve(false);
      } else {
        let prop;
        if (closure_1_6.default != null) {
          prop = closure_1_6.default.getCurrentPrefersCrossFadeTransitionsState;
        }
        if (prop != null) {
          const currentPrefersCrossFadeTransitionsState = closure_1_6.default.getCurrentPrefersCrossFadeTransitionsState(arg0, arg1);
          const _default = closure_1_6.default;
        } else {
          arg1(null);
        }
      }
    });
  },
  isReduceTransparencyEnabled() {
    if (get_Version.default.OS === "android") {
      return Promise.resolve(false);
    } else {
      const promise = new Promise((arg0, arg1) => {
        if (closure_1_6.default != null) {
          const currentReduceTransparencyState = closure_1_6.default.getCurrentReduceTransparencyState(arg0, arg1);
          const _default = closure_1_6.default;
        } else {
          arg1(null);
        }
      });
      return promise;
    }
  },
  isScreenReaderEnabled() {
    return new Promise((arg0, arg1) => {
      if (closure_1_3.default.OS === "android") {
        if (closure_1_5.default != null) {
          const result = closure_1_5.default.isTouchExplorationEnabled(arg0);
          const _default2 = closure_1_5.default;
        } else {
          arg1(null);
        }
      } else if (closure_1_6.default != null) {
        const currentVoiceOverState = closure_1_6.default.getCurrentVoiceOverState(arg0, arg1);
        const _default = closure_1_6.default;
      } else {
        arg1(null);
      }
    });
  },
  isAccessibilityServiceEnabled(arg0) {
    return new Promise((arg0, arg1) => {
      if (closure_1_3.default.OS === "android") {
        if (closure_1_5.default != null) {
          if (closure_1_5.default.isAccessibilityServiceEnabled != null) {
            const result = closure_1_5.default.isAccessibilityServiceEnabled(arg0);
            const _default = closure_1_5.default;
          }
        }
        arg1(null);
      } else {
        arg1(null);
      }
    });
  },
  addEventListener(arg0, arg1) {
    const value = map.get(arg0);
    if (value == null) {
      const obj = {
        remove() {

          }
      };
      let addListenerResult = obj;
    } else {
      addListenerResult = mod.default.addListener(value, arg1);
      const _default = mod.default;
    }
    return addListenerResult;
  },
  setAccessibilityFocus(arg0) {
    closure_4.default(arg0, "focus");
  },
  sendAccessibilityEvent(arg0, arg1) {
    const result = keys.sendAccessibilityEvent(arg0, arg1);
  },
  announceForAccessibility(arg0) {
    if (get_Version.default.OS === "android") {
      if (mod2.default != null) {
        const result = mod2.default.announceForAccessibility(arg0);
        const _default2 = mod2.default;
      }
    } else if (mod3.default != null) {
      const result1 = mod3.default.announceForAccessibility(arg0);
      const _default = mod3.default;
    }
  },
  announceForAccessibilityWithOptions(arg0, arg1) {
    if (get_Version.default.OS === "android") {
      if (mod2.default != null) {
        const result = mod2.default.announceForAccessibility(arg0);
        const _default3 = mod2.default;
      }
    } else {
      if (mod3.default != null) {
        if (mod3.default.announceForAccessibilityWithOptions) {
          if (mod3.default != null) {
            const result1 = mod3.default.announceForAccessibilityWithOptions(arg0, arg1);
            const _default2 = mod3.default;
          }
        }
      }
      if (mod3.default != null) {
        const result2 = mod3.default.announceForAccessibility(arg0);
        const _default = mod3.default;
      }
    }
  },
  getRecommendedTimeoutMillis(closure_0, arg1) {
    if (get_Version.default.OS === "android") {
      const promise = new Promise((arg0, arg1) => {
        if (closure_1_5.default != null) {
          if (closure_1_5.default.getRecommendedTimeoutMillis) {
            const recommendedTimeoutMillis = closure_1_5.default.getRecommendedTimeoutMillis(closure_0, arg0);
            const _default = closure_1_5.default;
          }
        }
        arg0(closure_0);
      });
      return promise;
    } else {
      return Promise.resolve(closure_0);
    }
  }
};
