// Module ID: 888
// Function ID: 9640
// Name: SafeAreaProviderCompat
// Dependencies: [119, 2, 251, 673, 867]

// Module 888 (SafeAreaProviderCompat)
import getIteratorFn from "getIteratorFn" /* 119 */;
import _mod673 from "module_673" /* 673 */;
import FrameSizeProviderInner from "FrameSizeProviderInner" /* 867 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_4 from "jsxProd" /* 251 */;

class SafeAreaProviderCompat {
  constructor(arg0) {
    style = global.style;
    context = closure_2.useContext(require("module_673").SafeAreaInsetsContext);
    obj = { initialFrame: initialWindowMetrics.frame, children: global.children };
    jsxResult = closure_4.jsx(require("FrameSizeProviderInner").FrameSizeProvider, obj);
    jsx = closure_4.jsx;
    if (context) {
      tmp6 = closure_3;
      obj = {};
      tmp7 = closure_6;
      items = [, ];
      items[0] = closure_6.container;
      items[1] = style;
      obj.style = items;
      obj.children = jsxResult;
      return jsx(closure_3.View, obj);
    } else {
      tmp3 = closure_0;
      tmp4 = closure_1;
      obj1 = {};
      tmp5 = initialWindowMetrics;
      obj1.initialMetrics = initialWindowMetrics;
      obj1.style = style;
      obj1.children = jsxResult;
      return jsx(require("module_673").SafeAreaProvider, obj1);
    }
  }
}
let closure_2 = _interopRequireWildcard(getIteratorFn);
const Dimensions = get_registerCallableModule.Dimensions;
const size = Dimensions.get("window");
const width = size.width;
let num = 0;
if (width !== undefined) {
  num = width;
}
const height = size.height;
let num2 = 0;
if (height !== undefined) {
  num2 = height;
}
if (get_registerCallableModule.Platform.OS !== "web") {
  if (_mod673.initialWindowMetrics != null) {
    let initialWindowMetrics = _mod673.initialWindowMetrics;
  }
  SafeAreaProviderCompat.initialMetrics = initialWindowMetrics;
  const StyleSheet = get_registerCallableModule.StyleSheet;
  class SafeAreaProviderCompat {
    constructor(arg0) {
      style = global.style;
      context = closure_2.useContext(require("module_673").SafeAreaInsetsContext);
      obj = { initialFrame: initialWindowMetrics.frame, children: global.children };
      jsxResult = closure_4.jsx(require("FrameSizeProviderInner").FrameSizeProvider, obj);
      jsx = closure_4.jsx;
      if (context) {
        tmp6 = closure_3;
        obj = {};
        tmp7 = closure_6;
        items = [, ];
        items[0] = closure_6.container;
        items[1] = style;
        obj.style = items;
        obj.children = jsxResult;
        return jsx(closure_3.View, obj);
      } else {
        tmp3 = closure_0;
        tmp4 = closure_1;
        obj1 = {};
        tmp5 = initialWindowMetrics;
        obj1.initialMetrics = initialWindowMetrics;
        obj1.style = style;
        obj1.children = jsxResult;
        return jsx(require("module_673").SafeAreaProvider, obj1);
      }
    }
  }
  let obj = { flex: 1 };
  tmp4.container = obj;
  const styles = StyleSheet.create(tmp4);
}
obj = { x: 0, y: 0, width: num, height: num2 };
initialWindowMetrics = { frame: obj, insets: { top: 0, left: 0, right: 0, bottom: 0 } };

export { SafeAreaProviderCompat };
