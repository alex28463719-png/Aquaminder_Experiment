// Module ID: 945
// Function ID: 9903
// Name: Badge
// Dependencies: [1, 38, 203, 855, 119, 2, 251, 529]
// Exports: Badge

// Module 945 (Badge)
import _slicedToArray from "_slicedToArray" /* 38 */;
import getIteratorFn from "getIteratorFn" /* 119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import Color from "Color" /* 855 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_7 from "jsxProd" /* 251 */;

let closure_2 = module_1(_slicedToArray);
let closure_3 = module_1(_objectWithoutProperties);
let closure_4 = module_1(Color);
let closure_5 = _interopRequireWildcard(getIteratorFn);
let closure_8 = ["children", "style", "visible", "size"];
let closure_9 = ["backgroundColor"];
let closure_10 = get_registerCallableModule.Platform.OS !== "web";
let StyleSheet = get_registerCallableModule.StyleSheet;
const styles = StyleSheet.create({ container: { alignSelf: "flex-end", textAlign: "center", paddingHorizontal: 4, overflow: "hidden" } });

export function Badge(visible) {
  visible = visible.visible;
  let flag = true;
  ({ children, style } = visible);
  if (visible !== undefined) {
    flag = visible;
  }
  const size = visible.size;
  let num = 18;
  if (size !== undefined) {
    num = size;
  }
  const first = first1.default(React.useState(() => {
    let num = 0;
    if (flag) {
      num = 1;
    }
    const value = new closure_1_6.Animated.Value(num);
    return value;
  }), 1)[0];
  const defaultResult1 = first1.default(React.useState(flag), 2);
  first1 = defaultResult1[0];
  closure_3 = tmp4;
  const theme = flag(first[7]).useTheme();
  const items = [first, first1, flag];
  ({ colors, fonts } = theme);
  const effect = React.useEffect(() => {
    if (first1) {
      const Animated = closure_1_6.Animated;
      const obj = {};
      let num = 0;
      if (flag) {
        num = 1;
      }
      obj.toValue = num;
      obj.duration = 150;
      obj.useNativeDriver = closure_1_10;
      Animated.timing(first, obj).start((finished) => {
        if (finished.finished) {
          if (!closure_1_0) {
            closure_1_3(false);
          }
        }
      });
      return () => closure_1_1.stopAnimation();
    }
  }, items);
  if (!first1) {
    if (flag) {
      tmp4(true);
    } else {
      return null;
    }
  }
  const StyleSheet = get_registerCallableModule.StyleSheet;
  const tmp9 = StyleSheet.flatten(style) || {};
  let notification = tmp9.backgroundColor;
  if (notification === undefined) {
    notification = colors.notification;
  }
  const defaultResult = closure_3.default(visible, closure_8);
  const defaultResult2 = closure_3.default(tmp9, closure_9);
  let str = "white";
  if (defaultResult3.isLight()) {
    str = "black";
  }
  const result = num / 2;
  let obj = { numberOfLines: 1 };
  obj = {};
  const obj1 = {};
  const rounded = Math.floor(num * 3 / 4);
  obj1.scale = first.interpolate({ inputRange: [0, 1], outputRange: [0.5, 1] });
  const items1 = [obj1];
  obj.transform = items1;
  obj.color = str;
  obj.lineHeight = num - 1;
  obj.height = num;
  obj.minWidth = num;
  obj.opacity = first;
  obj.backgroundColor = notification;
  obj.fontSize = rounded;
  obj.borderRadius = result;
  const items2 = [obj, fonts.regular, container.container, defaultResult2];
  obj.style = items2;
  return React2.jsx(get_registerCallableModule.Animated.Text, Object.assign(obj, defaultResult, { children }));
}
