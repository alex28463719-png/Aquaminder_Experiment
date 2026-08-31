// Module ID: 863
// Function ID: 9524
// Name: PlatformPressable
// Dependencies: [1, 38, 203, 119, 2, 251, 529]

// Module 863 (PlatformPressable)
import _slicedToArray from "_slicedToArray" /* 38 */;
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import _mod529 from "module_529" /* 529 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_6 from "jsxProd" /* 251 */;

let closure_2 = module_1(_slicedToArray);
let closure_3 = module_1(_objectWithoutProperties);
let getIteratorFn = _interopRequireWildcard(getIteratorFn2);
let closure_7 = ["disabled", "onPress", "onPressIn", "onPressOut", "android_ripple", "pressColor", "pressOpacity", "hoverEffect", "style", "children"];
let Animated = get_registerCallableModule.Animated;
let closure_8 = Animated.createAnimatedComponent(get_registerCallableModule.Pressable);
let tmp4 = get_registerCallableModule.Platform.OS === "android";
if (tmp4) {
  tmp4 = get_registerCallableModule.Platform.Version >= 21;
}
let closure_9 = tmp4;
let closure_10 = get_registerCallableModule.Platform.OS !== "web";
const forwardRefResult = getIteratorFn.forwardRef(function PlatformPressableInternal(arg0, ref) {
  ({ onPress: require, onPressIn: dependencyMap, onPressOut: closure_2, pressColor, pressOpacity } = arg0);
  let num = 0.3;
  ({ disabled, android_ripple } = arg0);
  if (pressOpacity !== undefined) {
    num = pressOpacity;
  }
  ({ hoverEffect, style, children } = arg0);
  const defaultResult = num.default(arg0, closure_7);
  getIteratorFn = defaultResult;
  let num2 = 1;
  const first = closure_2.default(getIteratorFn.useState(() => {
    const value = new first.Animated.Value(1);
    return value;
  }), 1)[0];
  function animateTo(toValue, duration) {
    if (!closure_1_9) {
      const Animated = first.Animated;
      const obj = { toValue, duration };
      const Easing = first.Easing;
      obj.easing = Easing.inOut(first.Easing.quad);
      obj.useNativeDriver = closure_1_10;
      Animated.timing(first, obj).start();
    }
  }
  let obj = { ref, accessible: true };
  let str = "button";
  function handlePress(metaKey) {
    if (first.Platform.OS === "web") {
      if (defaultResult.href !== null) {
        let tmp3 = "metaKey" in metaKey && metaKey.metaKey;
        if (!tmp3) {
          tmp3 = "altKey" in metaKey && metaKey.altKey;
          const tmp4 = "altKey" in metaKey && metaKey.altKey;
        }
        if (!tmp3) {
          tmp3 = "ctrlKey" in metaKey && metaKey.ctrlKey;
          const tmp5 = "ctrlKey" in metaKey && metaKey.ctrlKey;
        }
        if (!tmp3) {
          tmp3 = "shiftKey" in metaKey && metaKey.shiftKey;
          const tmp6 = "shiftKey" in metaKey && metaKey.shiftKey;
        }
        let flag = true;
        if ("button" in metaKey) {
          let tmp7 = metaKey.button == null;
          if (!tmp7) {
            tmp7 = metaKey.button === 0;
          }
          flag = tmp7;
        }
        let flag2 = true;
        if (metaKey.currentTarget) {
          flag2 = true;
          if ("target" in metaKey.currentTarget) {
            const items = [undefined, null, "", "self"];
            flag2 = items.includes(metaKey.currentTarget.target);
          }
        }
        if (!tmp3) {
          if (flag) {
            if (flag2) {
              metaKey.preventDefault();
              if (callback != null) {
                callback(metaKey);
              }
            }
          }
        }
      }
    }
    if (callback != null) {
      callback(metaKey);
    }
  }
  if (first.Platform.OS === "web") {
    str = "button";
    if (defaultResult.href != null) {
      str = "link";
    }
  }
  obj.role = str;
  let tmp5;
  if (!disabled) {
    tmp5 = handlePress;
  }
  obj.onPress = tmp5;
  obj.onPressIn = function handlePressIn(arg0) {
    animateTo(num, 0);
    if (callback2 != null) {
      callback2(arg0);
    }
  };
  obj.onPressOut = function handlePressOut(arg0) {
    animateTo(1, 200);
    if (callback3 != null) {
      callback3(arg0);
    }
  };
  let merged;
  if (closure_9) {
    obj = {};
    if (pressColor === undefined) {
      let str2 = "rgba(0, 0, 0, .32)";
      if (_mod529.useTheme().dark) {
        str2 = "rgba(255, 255, 255, .32)";
      }
      pressColor = str2;
    }
    obj.color = pressColor;
    merged = Object.assign(obj, android_ripple);
  }
  obj.android_ripple = merged;
  obj = {};
  if (first.Platform.OS === "web") {
    let str3 = "pointer";
  } else {
    str3 = "auto";
  }
  obj.cursor = str3;
  if (!closure_9) {
    num2 = first;
  }
  obj.opacity = num2;
  let items = [obj, style];
  obj.style = items;
  const obj1 = {};
  const items1 = [<HoverEffect {...Object.assign({}, hoverEffect)} />, children];
  obj1.children = items1;
  return <closure_8 {...Object.assign(obj, defaultResult, obj1)} />;
});
forwardRefResult.displayName = "PlatformPressable";
let c11 = "__react-navigation_elements_Pressable_hover";
let closure_12 = String.raw(HermesBuiltin.getTemplateObject(true, "\n  .", " {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-radius: inherit;\n    background-color: var(--overlay-color);\n    opacity: 0;\n    transition: opacity 0.15s;\n  }\n\n  a:hover > .", ", button:hover > .", " {\n    opacity: var(--overlay-hover-opacity);\n  }\n\n  a:active > .", ", button:active > .", " {\n    opacity: var(--overlay-active-opacity);\n  }\n"), "__react-navigation_elements_Pressable_hover", "__react-navigation_elements_Pressable_hover", "__react-navigation_elements_Pressable_hover", "__react-navigation_elements_Pressable_hover", "__react-navigation_elements_Pressable_hover");
function HoverEffect(activeOpacity) {
  ({ color, hoverOpacity } = activeOpacity);
  let num = 0.08;
  if (hoverOpacity !== undefined) {
    num = hoverOpacity;
  }
  activeOpacity = activeOpacity.activeOpacity;
  let num2 = 0.16;
  if (activeOpacity !== undefined) {
    num2 = activeOpacity;
  }
  if (get_registerCallableModule.Platform.OS === "web") {
    if (color != null) {
      let obj = {};
      obj = { href: c11, precedence: "elements", children: closure_12 };
      ({ jsxs, Fragment } = React);
      const items = [<style href={c11} precedence="elements">{closure_12}</style>, ];
      obj = { className: c11 };
      const obj1 = { "--overlay-color": color, "--overlay-hover-opacity": num, "--overlay-active-opacity": num2 };
      obj.style = obj1;
      items[1] = <div className={c11} />;
      obj.children = items;
      return <></>;
    }
  }
  return null;
}

export const PlatformPressable = forwardRefResult;
