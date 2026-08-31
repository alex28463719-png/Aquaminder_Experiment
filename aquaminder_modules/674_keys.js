// Module ID: 674
// Function ID: 7798
// Name: keys
// Dependencies: [1, 38, 203, 119, 2, 251, 675]
// Exports: SafeAreaListener, SafeAreaProvider, useSafeArea, useSafeAreaFrame, withSafeAreaInsets

// Module 674 (keys)
import _slicedToArray from "_slicedToArray" /* 38 */;
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_6 from "jsxProd" /* 251 */;

function useParentSafeAreaInsets() {
  return getIteratorFn.useContext(context);
}
function useParentSafeAreaFrame() {
  return getIteratorFn.useContext(context1);
}
function useSafeAreaInsets() {
  context = getIteratorFn.useContext(context);
  if (context == null) {
    const _Error = Error;
    const error = new Error(c12);
    throw error;
  } else {
    return context;
  }
}
let closure_2 = module_1(_slicedToArray);
let closure_3 = module_1(_objectWithoutProperties);
const getIteratorFn = _interopRequireWildcard(getIteratorFn2);
let closure_7 = ["children", "initialMetrics", "initialSafeAreaInsets", "style"];
let closure_8 = ["onChange", "style", "children"];
let context = getIteratorFn.createContext(null);
const context1 = getIteratorFn.createContext(null);
const StyleSheet = get_registerCallableModule.StyleSheet;
const styles = StyleSheet.create({ fill: { flex: 1 } });
let c12 = "No safe area value available. Make sure you are rendering `<SafeAreaProvider>` at the top of your app.";

export function SafeAreaListener(onChange) {
  onChange = onChange.onChange;
  ({ style, children } = onChange);
  const items = [closure_11.fill, style];
  return React.jsx(onChange(675).NativeSafeAreaProvider, Object.assign({}, closure_3.default(onChange, closure_8), {
    style: items,
    onInsetsChange(insets) {
      onChange({ insets: insets.nativeEvent.insets, frame: insets.nativeEvent.frame });
    },
    children
  }));
}
export function SafeAreaProvider(arg0) {
  ({ initialMetrics, initialSafeAreaInsets } = arg0);
  ({ children, style } = arg0);
  let tmp2 = useParentSafeAreaInsets();
  let tmp3 = useParentSafeAreaFrame();
  let insets;
  if (initialMetrics != null) {
    insets = initialMetrics.insets;
  }
  if (insets != null) {
    initialSafeAreaInsets = insets;
  }
  if (initialSafeAreaInsets != null) {
    tmp2 = initialSafeAreaInsets;
  }
  let tmp6 = null;
  if (tmp2 != null) {
    tmp6 = tmp2;
  }
  const defaultResult1 = closure_2.default(getIteratorFn.useState(tmp6), 2);
  const first = defaultResult1[0];
  const _require = defaultResult1[1];
  let frame;
  if (initialMetrics != null) {
    frame = initialMetrics.frame;
  }
  if (frame != null) {
    tmp3 = frame;
  }
  if (tmp3 == null) {
    let obj = { x: 0, y: 0 };
    const Dimensions = get_registerCallableModule.Dimensions;
    obj.width = Dimensions.get("window").width;
    const Dimensions2 = get_registerCallableModule.Dimensions;
    obj.height = Dimensions2.get("window").height;
    tmp3 = obj;
  }
  const defaultResult2 = closure_2.default(getIteratorFn.useState(tmp3), 2);
  dependencyMap = defaultResult2[1];
  const onInsetsChange = getIteratorFn.useCallback((nativeEvent) => {
    ({ frame: closure_0, insets: closure_1 } = nativeEvent.nativeEvent);
    callback2((height) => {
      if (styles) {
        return styles;
      }
      return height;
    });
    callback((bottom) => {
      if (bottom) {
        if (closure_1.bottom === bottom.bottom) {
          if (closure_1.left === bottom.left) {
            if (closure_1.right === bottom.right) {
              if (closure_1.top === bottom.top) {
                return bottom;
              }
            }
          }
        }
      }
      return closure_1;
    });
  }, []);
  style = [closure_11.fill, ];
  style[1] = style;
  obj = {};
  let jsxResult = null;
  if (first != null) {
    obj = { value: defaultResult2[0] };
    const obj1 = { value: first, children };
    obj.children = <context.Provider value={first}>{children}</context.Provider>;
    jsxResult = <context1.Provider value={defaultResult2[0]} />;
  }
  obj.children = jsxResult;
  return React.jsx(_require(675).NativeSafeAreaProvider, Object.assign({ style, onInsetsChange }, closure_3.default(arg0, closure_7), obj));
}
export function useSafeArea() {
  return useSafeAreaInsets();
}
export function useSafeAreaFrame() {
  context = getIteratorFn.useContext(context1);
  if (context == null) {
    const _Error = Error;
    const error = new Error(c12);
    throw error;
  } else {
    return context;
  }
}
export { useSafeAreaInsets };
export function withSafeAreaInsets(arg0) {
  closure_0 = arg0;
  return getIteratorFn.forwardRef((arg0, ref) => <closure_0 {...Object.assign({}, arg0, { insets: closure_1_16(), ref: arg1 })} />);
}
export const SafeAreaInsetsContext = context;
export const SafeAreaFrameContext = context1;
export const SafeAreaConsumer = context.Consumer;
export const SafeAreaContext = context;
