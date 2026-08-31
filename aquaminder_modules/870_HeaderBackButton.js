// Module ID: 870
// Function ID: 9577
// Name: HeaderBackButton
// Dependencies: [1, 38, 119, 2, 871, 872, 251, 529, 873, 874, 876]
// Exports: HeaderBackButton

// Module 870 (HeaderBackButton)
import _slicedToArray from "_slicedToArray" /* 38 */;
import getIteratorFn from "getIteratorFn" /* 119 */;
import _mod871 from "module_871" /* 871 */;
import _mod872 from "module_872" /* 872 */;
import HeaderIcon from "HeaderIcon" /* 873 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_7 from "jsxProd" /* 251 */;

let closure_2 = module_1(_slicedToArray);
let closure_3 = _interopRequireWildcard(getIteratorFn);
let num = 3;
let closure_5 = module_1(_mod871);
let closure_6 = module_1(_mod872);
let num2 = 24;
if (get_registerCallableModule.Platform.OS === "ios") {
  num2 = 13;
}
if (get_registerCallableModule.Platform.OS === "ios") {
  num = 22;
}
const StyleSheet = get_registerCallableModule.StyleSheet;
obj = { container: Object.assign(obj, Platform.select({ ios: null, default: { marginVertical: 3, marginHorizontal: 11 } })), label: { fontSize: 17, letterSpacing: 0.35 } };
obj = { paddingHorizontal: 0, minWidth: get_registerCallableModule.StyleSheet.hairlineWidth };
Platform = get_registerCallableModule.Platform;
obj = { flexDirection: "row", alignItems: "flex-start", marginEnd: HeaderIcon.ICON_MARGIN };
obj.labelWrapper = obj;
let obj1 = { width: num2, marginEnd: num };
obj.icon = obj1;
if (get_registerCallableModule.Platform.OS === "ios") {
  let obj2 = { marginEnd: 6 };
  let obj3 = obj2;
} else {
  obj3 = {};
}
obj.iconWithLabel = obj3;
obj.iconMaskContainer = { flex: 1, flexDirection: "row", justifyContent: "center" };
obj.iconMaskFillerRect = { flex: 1, backgroundColor: "#000" };
obj.iconMask = { height: 21, width: 13, marginStart: -14.5, marginVertical: 12, alignSelf: "center" };
obj.flip = { transform: "scaleX(-1)" };
const styles = StyleSheet.create(obj);

export function HeaderBackButton(disabled) {
  ({ allowFontScaling: require, backImage } = disabled);
  const label = disabled.label;
  ({ labelStyle: closure_3, displayMode } = disabled);
  if (displayMode === undefined) {
    let str = "minimal";
    if (displayMode.Platform.OS === "ios") {
      str = "default";
    }
    displayMode = str;
  }
  ({ onLabelLayout: closure_5, onPress: closure_6, screenLayout: closure_7, tintColor } = disabled);
  ({ titleLayout: closure_9, truncatedLabel } = disabled);
  let str3 = "Back";
  ({ pressColor, pressOpacity } = disabled);
  if (truncatedLabel !== undefined) {
    str3 = truncatedLabel;
  }
  let accessibilityLabel = disabled.accessibilityLabel;
  if (accessibilityLabel === undefined) {
    let str5 = "Go back";
    if (label) {
      str5 = "Go back";
      if (label !== "Back") {
        const _HermesInternal = HermesInternal;
        str5 = "" + label + ", back";
      }
    }
    accessibilityLabel = str5;
  }
  ({ testID, style, href } = disabled);
  const theme = require(backImage[7]).useTheme();
  ({ fonts: closure_11, colors } = theme);
  const direction = require(backImage[7]).useLocale().direction;
  const defaultResult = label.default(React.useState(null), 2);
  closure_13 = defaultResult[0];
  closure_14 = defaultResult[1];
  [closure_15, closure_16] = label.default(React.useState(null), 2);
  let obj = {
    disabled: disabled.disabled,
    href,
    accessibilityLabel,
    testID,
    onPress: function handlePress() {
      if (closure_6) {
        const _requestAnimationFrame = requestAnimationFrame;
        const animationFrame = requestAnimationFrame(() => closure_1_6());
      }
    },
    pressColor,
    pressOpacity
  };
  let items = [closure_9.container, style];
  obj.style = items;
  obj = {};
  if (backImage) {
    obj = { tintColor: tintColor != null ? tintColor : colors.text };
    backImage(obj);
  } else {
    let obj1 = { source: mod.default, tintColor };
    let items1 = [closure_9.icon, ];
    let iconWithLabel = displayMode !== "minimal";
    if (iconWithLabel) {
      iconWithLabel = closure_9.iconWithLabel;
    }
    items1[1] = iconWithLabel;
    obj1.style = items1;
    let items2 = [
      React2.jsx(require(backImage[8]).HeaderIcon, { source: mod.default, tintColor }),
      (function renderLabel() {
          if (displayMode === "minimal") {
            return null;
          } else {
            let diff = null;
            if (styles2) {
              diff = null;
              if (styles) {
                const result = (styles.width - styles2.width) / 2;
                diff = result - (tintColor + closure_1_0(backImage[8]).ICON_MARGIN);
              }
            }
            let tmp10 = displayMode === "default" ? label : str3;
            let tmp11 = tmp10;
            if (diff) {
              tmp11 = tmp10;
              if (closure_13) {
                tmp11 = tmp10;
                if (closure_15) {
                  if (diff <= closure_13) {
                    let tmp16 = null;
                    if (diff > closure_15) {
                      tmp16 = str3;
                    }
                    tmp10 = tmp16;
                  }
                  tmp11 = tmp10;
                }
              }
            }
            const items = [regular.regular, closure_1_9.label, closure_3];
            const items1 = [items, { position: "absolute", top: 0, left: 0, opacity: 0 }];
            let obj = { style: closure_1_9.labelWrapper };
            let jsxResult = null;
            if (label) {
              jsxResult = null;
              if (displayMode === "default") {
                obj = {
                  style: items1,
                  numberOfLines: 1,
                  onLayout(nativeEvent) {
                          return closure_1_14(nativeEvent.nativeEvent.layout.width);
                        },
                  children: label
                };
                jsxResult = closure_1_7.jsx(displayMode.Animated.Text, {
                  style: items1,
                  numberOfLines: 1,
                  onLayout(nativeEvent) {
                          return closure_1_14(nativeEvent.nativeEvent.layout.width);
                        },
                  children: label
                });
              }
            }
            const items2 = [jsxResult, , ];
            let jsxResult1 = null;
            if (str3) {
              obj = {
                style: items1,
                numberOfLines: 1,
                onLayout(nativeEvent) {
                      return closure_1_16(nativeEvent.nativeEvent.layout.width);
                    },
                children: str3
              };
              jsxResult1 = closure_1_7.jsx(displayMode.Animated.Text, {
                style: items1,
                numberOfLines: 1,
                onLayout(nativeEvent) {
                      return closure_1_16(nativeEvent.nativeEvent.layout.width);
                    },
                children: str3
              });
            }
            items2[1] = jsxResult1;
            let jsxResult2 = null;
            if (tmp11) {
              const obj1 = { accessible: false, onLayout: closure_5 };
              let tmp39 = null;
              if (tintColor) {
                const obj2 = { color: tintColor };
                tmp39 = obj2;
              }
              const items3 = [tmp39, items];
              obj1.style = items3;
              obj1.numberOfLines = 1;
              obj1.allowFontScaling = closure_0;
              obj1.children = tmp11;
              jsxResult2 = closure_1_7.jsx(displayMode.Animated.Text, { accessible: false, onLayout: closure_5 });
            }
            items2[2] = jsxResult2;
            obj.children = items2;
            const jsxsResult = <displayMode.View style={closure_1_9.labelWrapper} />;
            if (!backImage) {
              if (displayMode.Platform.OS === "ios") {
                const obj3 = {};
                const obj4 = {};
                const items4 = [closure_1_9.iconMaskContainer, ];
                let tmp46 = null;
                if (styles) {
                  const obj5 = { minWidth: styles.width / 2 - 27 };
                  tmp46 = obj5;
                }
                items4[1] = tmp46;
                obj4.style = items4;
                const obj6 = { source: closure_1_6.default, resizeMode: "contain" };
                const items5 = [closure_1_9.iconMask, ];
                let flip = direction === "rtl";
                if (flip) {
                  flip = closure_1_9.flip;
                }
                items5[1] = flip;
                obj6.style = items5;
                const items6 = [<displayMode.Image source={closure_1_6.default} resizeMode="contain" />, ];
                const obj7 = { style: closure_1_9.iconMaskFillerRect };
                items6[1] = <displayMode.View style={closure_1_9.iconMaskFillerRect} />;
                obj4.children = items6;
                obj3.maskElement = <displayMode.View />;
                obj3.children = jsxsResult;
                return closure_1_7.jsx(closure_1_0(backImage[9]).MaskedView, {});
              }
            }
            return jsxsResult;
          }
        })()
    ];
    obj.children = items2;
    obj.children = tmp7(tmp8, obj);
    return <tmp6 {...obj} />;
  }
}
