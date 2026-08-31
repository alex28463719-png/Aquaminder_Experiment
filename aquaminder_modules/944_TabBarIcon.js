// Module ID: 944
// Function ID: 9901
// Name: TabBarIcon
// Dependencies: [1, 119, 2, 251, 945]
// Exports: TabBarIcon

// Module 944 (TabBarIcon)
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import Badge from "Badge" /* 945 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_3 from "jsxProd" /* 251 */;

const getIteratorFn = module_1(getIteratorFn2);
let c4 = 25;
let c5 = 18;
let c6 = 24;
const StyleSheet = get_registerCallableModule.StyleSheet;
const styles = StyleSheet.create({ icon: { position: "absolute", alignSelf: "center", alignItems: "center", justifyContent: "center", height: "100%", width: "100%" }, wrapperUikit: { width: 31, height: 28 }, wrapperUikitCompact: { width: 23, height: 20 }, wrapperMaterial: { width: 24, height: 24 }, badge: { position: "absolute", end: -3, top: -3 } });

export function TabBarIcon(variant) {
  ({ route, size, badge, renderIcon } = variant);
  ({ badgeStyle, activeOpacity, inactiveOpacity, activeTintColor, inactiveTintColor, allowFontScaling, style } = variant);
  if (variant.variant === "material") {
    let tmp2 = c6;
  } else {
    tmp2 = size === "compact" ? c5 : c4;
  }
  let obj = {};
  if (variant.variant === "material") {
    let wrapperUikit = closure_7.wrapperMaterial;
  } else if (size === "compact") {
    wrapperUikit = closure_7.wrapperUikitCompact;
  } else {
    wrapperUikit = closure_7.wrapperUikit;
  }
  const items = [wrapperUikit, style];
  obj.style = items;
  obj = { style: items1, children: renderIcon(obj1) };
  items1 = [closure_7.icon, ];
  obj = { opacity: activeOpacity, minWidth: tmp2 };
  items1[1] = obj;
  obj1 = { focused: true, size: tmp2, color: activeTintColor };
  const items2 = [<get registerCallableModule.View opacity={activeOpacity} minWidth={tmp2} />, , ];
  const items3 = [closure_7.icon, { opacity: inactiveOpacity }];
  const obj3 = { focused: false, size: tmp2, color: inactiveTintColor };
  items2[1] = <get registerCallableModule.View style={items3}>{renderIcon(obj3)}</get registerCallableModule.View>;
  const obj4 = { visible: badge != null, size: tmp2 * 0.75, allowFontScaling };
  const items4 = [closure_7.badge, badgeStyle];
  obj4.style = items4;
  obj4.children = badge;
  items2[2] = React.jsx(Badge.Badge, { visible: badge != null, size: tmp2 * 0.75, allowFontScaling });
  obj.children = items2;
  return <get registerCallableModule.View opacity={activeOpacity} minWidth={tmp2} />;
}
