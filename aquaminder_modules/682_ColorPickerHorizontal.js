// Module ID: 682
// Function ID: 7829
// Name: ColorPickerHorizontal
// Dependencies: [1, 38, 119, 2, 683, 251]
// Exports: default

// Module 682 (ColorPickerHorizontal)
import _slicedToArray from "_slicedToArray" /* 38 */;
import getIteratorFn from "getIteratorFn" /* 119 */;
import LinearGradient from "LinearGradient" /* 683 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_4 from "jsxProd" /* 251 */;

let closure_0 = module_1(_slicedToArray);
let closure_1 = module_1(getIteratorFn);
let closure_3 = module_1(LinearGradient);
let c5 = 300;
function getRGB(result1) {
  const bound = Math.max(0, Math.min(1530, result1));
  let num = 255;
  let num2 = bound;
  let num3 = 0;
  if (bound >= 255) {
    if (bound < 510) {
      num = 510 - bound;
      num2 = 255;
      num3 = 0;
    } else if (bound < 765) {
      num3 = bound - 510;
      num = 0;
      num2 = 255;
    } else if (bound < 1020) {
      num2 = 1020 - bound;
      num = 0;
      num3 = 255;
    } else if (bound < 1275) {
      num = bound - 1020;
      num2 = 0;
      num3 = 255;
    } else {
      num3 = 1530 - bound;
      num = 255;
      num2 = 0;
    }
  }
  const obj = { r: Math.round(num), g: Math.round(num2), b: Math.round(num3) };
  return obj;
}
const StyleSheet = get_registerCallableModule.StyleSheet;
const styles = StyleSheet.create({ wrapper: { height: 60, justifyContent: "center", alignItems: "center" }, container: { width: 300, height: 40, borderRadius: 10, overflow: "hidden", position: "relative" }, gradient: Object.assign({}, get_registerCallableModule.StyleSheet.absoluteFillObject, { borderRadius: 10 }), thumb: { position: "absolute", top: 2, width: 24, height: 36, borderRadius: 4, borderWidth: 2, borderColor: "#000" } });

export default function ColorPickerHorizontal(arg0) {
  ({ value, onValueChange: closure_0 } = arg0);
  const defaultResult = closure_0.default(first.default.useState(c5), 2);
  first = defaultResult[0];
  const RN = defaultResult[1];
  const PanResponder = RN.PanResponder;
  let obj = {
    onStartShouldSetPanResponder(arg0, arg1) {
      return true;
    },
    onPanResponderMove(touchHistory, x0) {
      callback(Math.max(0, Math.min(1530, (x0.x0 + (x0.moveX - x0.x0)) / first * 1530)));
    },
    onPanResponderGrant(nativeEvent, arg1) {
      callback(Math.max(0, Math.min(1530, nativeEvent.nativeEvent.locationX / first * 1530)));
    }
  };
  obj = PanResponder.create(obj);
  const result = value / 1530 * first;
  const tmp5 = getRGB(value);
  obj = { style: closure_7.wrapper };
  const obj2 = {};
  const combined = "rgb(" + tmp5.r + ", " + tmp5.g + ", " + tmp5.b + ")";
  const items = [<mod.default colors={["#FF0000", "#FFFF00", "#00FF00", "#00FFFF", "#0000FF", "#FF00FF", "#FF0000"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={closure_7.gradient} />, ];
  const items1 = [closure_7.thumb, { left: result - 12, backgroundColor: combined }];
  items[1] = <RN.View style={items1} />;
  obj2.children = items;
  obj.children = <RN.View {...Object.assign({
    style: closure_7.container,
    onLayout: function handleLayout(nativeEvent) {
      callback2(nativeEvent.nativeEvent.layout.width);
    }
  }, obj.panHandlers, obj2)} />;
  return <RN.View style={closure_7.wrapper} />;
};
