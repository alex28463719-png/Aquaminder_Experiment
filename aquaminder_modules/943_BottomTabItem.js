// Module ID: 943
// Function ID: 9898
// Name: BottomTabItem
// Dependencies: [1, 855, 119, 2, 251, 852, 529, 944]
// Exports: BottomTabItem

// Module 943 (BottomTabItem)
import getIteratorFn from "getIteratorFn" /* 119 */;
import _mod529 from "module_529" /* 529 */;
import Assets from "Assets" /* 852 */;
import Color from "Color" /* 855 */;
import TabBarIcon from "TabBarIcon" /* 944 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_5 from "jsxProd" /* 251 */;

let closure_2 = module_1(Color);
let closure_3 = module_1(getIteratorFn);
function renderButtonDefault(arg0) {
  return React.jsx(Assets.PlatformPressable, Object.assign({}, arg0));
}
let tmp4 = get_registerCallableModule.Platform.OS === "ios";
if (tmp4) {
  const _parseInt = parseInt;
  tmp4 = parseInt(get_registerCallableModule.Platform.Version, 10) >= 13;
}
let closure_7 = tmp4;
let StyleSheet = get_registerCallableModule.StyleSheet;
const styles = StyleSheet.create({ tab: { alignItems: "center", borderRadius: 10 }, tabVerticalUiKit: { justifyContent: "flex-start", flexDirection: "column", padding: 5 }, tabVerticalMaterial: { padding: 10 }, tabHorizontalUiKit: { justifyContent: "center", alignItems: "center", flexDirection: "row", padding: 5 }, tabBarSidebarUiKit: { justifyContent: "flex-start", alignItems: "center", flexDirection: "row", paddingVertical: 7, paddingHorizontal: 5 }, tabBarSidebarMaterial: { justifyContent: "flex-start", alignItems: "center", flexDirection: "row", paddingVertical: 15, paddingStart: 16, paddingEnd: 24 }, labelSidebarMaterial: { marginStart: 12 }, labelSidebarUiKit: { fontSize: 17, marginStart: 10 }, labelBeneath: { fontSize: 10 }, labelBeside: { marginEnd: 12, lineHeight: 24 }, labelBesideUikit: { fontSize: 13, marginStart: 5 }, labelBesideUikitCompact: { fontSize: 12, marginStart: 5 } });

export function BottomTabItem(showLabel) {
  ({ route, focused, label, icon, button } = showLabel);
  ({ href, descriptor, badge, badgeStyle } = showLabel);
  if (button === undefined) {
    button = renderButtonDefault;
  }
  ({ horizontal, compact, sidebar, variant, activeTintColor, inactiveTintColor, activeBackgroundColor, inactiveBackgroundColor } = showLabel);
  let str = "transparent";
  ({ accessibilityLabel, testID, onPress, onLongPress } = showLabel);
  if (inactiveBackgroundColor !== undefined) {
    str = inactiveBackgroundColor;
  }
  showLabel = showLabel.showLabel;
  let flag = true;
  if (showLabel !== undefined) {
    flag = showLabel;
  }
  let allowFontScaling = showLabel.allowFontScaling;
  if (allowFontScaling === undefined) {
    let flag2;
    if (closure_7) {
      flag2 = false;
    }
    allowFontScaling = flag2;
  }
  const style = showLabel.style;
  ({ labelStyle, iconStyle } = showLabel);
  const theme = _mod529.useTheme();
  ({ colors, fonts } = theme);
  if (activeTintColor != null) {
    if (inactiveTintColor !== undefined) {
      if (activeBackgroundColor != null) {
        const options = descriptor.options;
        let obj = {};
        let tabBarLabel;
        if (typeof options.tabBarLabel === "string") {
          tabBarLabel = options.tabBarLabel;
        }
        obj.label = tabBarLabel;
        obj.title = options.title;
        label = Assets.getLabel(obj, route.name);
        text = inactiveTintColor;
        primary2 = inactiveTintColor;
        if (variant === "uikit") {
          text = inactiveTintColor;
          primary2 = inactiveTintColor;
          if (sidebar) {
            text = inactiveTintColor;
            primary2 = inactiveTintColor;
            if (horizontal) {
              text = inactiveTintColor;
              primary2 = inactiveTintColor;
              if (tmp6) {
                ({ primary: primary2, text } = colors);
              }
            }
          }
        }
        obj = { route, focused };
        if (focused) {
          str = activeBackgroundColor;
        }
        const StyleSheet = get_registerCallableModule.StyleSheet;
        let obj1 = style;
        if (!style) {
          obj1 = {};
        }
        if (variant === "material") {
          let num7 = 16;
          if (horizontal) {
            num7 = 56;
          }
          let num6 = num7;
        } else {
          num6 = 0;
          if (sidebar) {
            num6 = 0;
            if (horizontal) {
              num6 = 10;
            }
          }
        }
        const obj2 = {};
        const obj3 = { borderRadius: num6 };
        let str10 = "visible";
        if (variant === "material") {
          str10 = "hidden";
        }
        obj3.overflow = str10;
        const items = [obj3, style];
        obj2.style = items;
        const obj4 = { href, onPress, onLongPress, testID, "aria-label": accessibilityLabel, accessibilityLargeContentTitle: label, accessibilityShowsLargeContentViewer: true };
        const Platform = get_registerCallableModule.Platform;
        obj4.role = Platform.select({ ios: "button", default: "tab" });
        obj4["aria-selected"] = focused;
        const obj5 = { borderless: true };
        obj4.android_ripple = obj5;
        if (variant === "material") {
          const obj6 = { color: colors.text };
          const tmp23 = obj6;
        }
        obj4.hoverEffect = tmp23;
        let num8 = 1;
        obj4.pressOpacity = 1;
        const items1 = [closure_8.tab, , ];
        const obj7 = { flex: StyleSheet.flatten(obj1).flex, backgroundColor: str, borderRadius: num6 };
        items1[1] = obj7;
        if (!sidebar) {
          if (tmp19) {
            let tabVerticalMaterial = tmp25.tabVerticalMaterial;
          } else {
            tabVerticalMaterial = horizontal ? tmp25.tabHorizontalUiKit : tmp25.tabVerticalUiKit;
          }
          items1[2] = tabVerticalMaterial;
          obj4.style = items1;
          const obj8 = {};
          const focused2 = obj.focused;
          let jsxResult = null;
          if (icon !== undefined) {
            let num9 = 0;
            if (focused2) {
              num9 = num8;
            }
            if (focused2) {
              num8 = 0;
            }
            const obj9 = { route, variant };
            let str11 = "regular";
            if (compact) {
              str11 = "compact";
            }
            obj9.size = str11;
            obj9.badge = badge;
            obj9.badgeStyle = badgeStyle;
            obj9.activeOpacity = num9;
            obj9.allowFontScaling = allowFontScaling;
            obj9.inactiveOpacity = num8;
            obj9.activeTintColor = activeTintColor;
            obj9.inactiveTintColor = primary2;
            obj9.renderIcon = icon;
            obj9.style = iconStyle;
            jsxResult = React.jsx(TabBarIcon.TabBarIcon, { route, variant });
          }
          const items2 = [jsxResult, ];
          const focused3 = obj.focused;
          let labelResult = null;
          if (flag !== false) {
            if (focused3) {
              text = activeTintColor;
            }
            if (typeof label !== "string") {
              const obj10 = { focused: focused3, color: text };
              let str12 = "below-icon";
              if (horizontal) {
                str12 = "beside-icon";
              }
              obj10.position = str12;
              obj10.children = label;
              labelResult = label(obj10);
            } else {
              const obj11 = {};
              if (horizontal) {
                const items3 = [tmp41.labelBeside, , ];
                if (variant === "material") {
                  let labelSidebarUiKit = closure_8.labelSidebarMaterial;
                } else if (sidebar) {
                  labelSidebarUiKit = tmp35.labelSidebarUiKit;
                } else {
                  labelSidebarUiKit = compact ? tmp35.labelBesideUikitCompact : tmp35.labelBesideUikit;
                }
                items3[1] = labelSidebarUiKit;
                let tmp37 = icon == null;
                if (tmp37) {
                  const obj12 = { marginStart: 0 };
                  tmp37 = obj12;
                }
                items3[2] = tmp37;
                let labelBeneath = items3;
              } else {
                labelBeneath = tmp41.labelBeneath;
              }
              const items4 = [labelBeneath, , ];
              if (compact) {
                let medium = fonts.regular;
              } else {
                medium = fonts.medium;
              }
              items4[1] = medium;
              items4[2] = labelStyle;
              obj11.style = items4;
              obj11.allowFontScaling = allowFontScaling;
              obj11.tintColor = text;
              obj11.children = label;
              labelResult = React.jsx(Assets.Label, {});
            }
          }
          items2[1] = labelResult;
          obj8.children = items2;
          obj4.children = React.jsxs(mod.default.Fragment, {});
          obj2.children = button(obj4);
          return <get registerCallableModule.View {...obj2} />;
        }
      } else if (variant === "material") {
        const defaultResult = closure_2.default(activeTintColor);
        const alphaResult = closure_2.default(activeTintColor).alpha(0.12);
        let str6 = closure_2.default(activeTintColor).alpha(0.12).rgb().string();
        const rgbResult = closure_2.default(activeTintColor).alpha(0.12).rgb();
      } else {
        str6 = "transparent";
        if (sidebar) {
          str6 = "transparent";
          if (horizontal) {
            str6 = colors.primary;
          }
        }
      }
    } else if (variant === "material") {
      const defaultResult1 = closure_2.default(colors.text);
      const alphaResult1 = closure_2.default(colors.text).alpha(0.68);
      let stringResult = closure_2.default(colors.text).alpha(0.68).rgb().string();
      const rgbResult1 = closure_2.default(colors.text).alpha(0.68).rgb();
    } else {
      const defaultResult2 = closure_2.default(colors.text);
      stringResult = closure_2.default(colors.text).mix(closure_2.default(colors.card), 0.5).hex();
      const mixResult = closure_2.default(colors.text).mix(closure_2.default(colors.card), 0.5);
    }
  } else {
    if (variant === "uikit") {
      let str3 = "white";
      if (!defaultResult3.isDark()) {
        const defaultResult4 = closure_2.default(colors.primary);
        str3 = closure_2.default(colors.primary).darken(0.71).string();
        const darkenResult = closure_2.default(colors.primary).darken(0.71);
      }
      let primary = str3;
      defaultResult3 = closure_2.default(colors.primary);
    }
    primary = colors.primary;
  }
}
