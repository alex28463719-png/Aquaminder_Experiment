// Module ID: 672
// Function ID: 7787
// Name: Container
// Dependencies: [1, 119, 2, 251, 644, 673]
// Exports: default

// Module 672 (Container)
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import useTheme from "useTheme" /* 644 */;
import _mod673 from "module_673" /* 673 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_3 from "jsxProd" /* 251 */;

const getIteratorFn = module_1(getIteratorFn2);
const StyleSheet = get_registerCallableModule.StyleSheet;
const styles = StyleSheet.create({ safeView: { flex: 1 }, keyboardAvoidingView: { flex: 1 }, container: { flex: 1 } });

export default function Container(arg0) {
  ({ bgColor, edges } = arg0);
  ({ children, areaStyle, containerStyle, noSafeArea } = arg0);
  const theme = useTheme.useTheme();
  let obj = {};
  const items = [closure_4.safeView, , ];
  obj = {};
  if (bgColor == null) {
    bgColor = theme.white;
  }
  obj.backgroundColor = bgColor;
  items[1] = obj;
  items[2] = areaStyle;
  obj.style = items;
  if (edges != null) {
    obj.edges = edges;
    obj = { style: closure_4.keyboardAvoidingView };
    let str = "height";
    if (get_registerCallableModule.Platform.OS === "ios") {
      str = "padding";
    }
    obj.behavior = str;
    obj.keyboardVerticalOffset = 0;
    obj.enabled = true;
    const obj1 = {};
    const items1 = [closure_4.container, containerStyle];
    obj1.style = items1;
    obj1.children = children;
    obj.children = <get registerCallableModule.View />;
    obj.children = <get registerCallableModule.KeyboardAvoidingView style={closure_4.keyboardAvoidingView} />;
    return React.jsx(_mod673.SafeAreaView, { style: closure_4.keyboardAvoidingView });
  }
};
