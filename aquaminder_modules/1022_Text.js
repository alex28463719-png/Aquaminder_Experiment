// Module ID: 1022
// Function ID: 10808
// Name: Text
// Dependencies: [1, 203, 119, 2, 251, 987, 1000]

// Module 1022 (Text)
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import module_1 from "module_1" /* 1 */;
import closure_4 from "get registerCallableModule" /* 2 */;
import closure_5 from "jsxProd" /* 251 */;

let closure_2 = module_1(_objectWithoutProperties);
const getIteratorFn = _interopRequireWildcard(getIteratorFn2);
let closure_6 = ["onPress", "onLongPress"];

export const Text = getIteratorFn.forwardRef((arg0, ref) => {
  const _require = ref;
  ({ onPress, onLongPress } = arg0);
  const defaultResult = closure_2.default(arg0, closure_6);
  dependencyMap = getIteratorFn.useRef(null);
  const GestureObjects = _require(987).GestureObjects;
  function refHandler(current) {
    closure_1.current = current;
    if (ref !== null) {
      if (typeof ref === "function") {
        ref(current);
      } else {
        ref.current = current;
      }
    }
  }
  refHandler.rngh = true;
  const NativeResult = GestureObjects.Native();
  const effect = getIteratorFn.useEffect(() => {
    if (closure_1_4.Platform.OS === "web") {
      if (ref) {
        let current = ref.current;
      } else {
        current = ref2.current;
      }
      if (current != null) {
        const attr = current.setAttribute("rnghtext", "true");
      }
    }
  }, []);
  if (!onPress) {
    if (!onLongPress) {
      const _Object = Object;
      let obj = { ref };
      let jsxResult = <RN.Text {...Object.assign(obj, defaultResult)} />;
    }
    return jsxResult;
  }
  obj = { gesture: GestureObjects.Native().runOnJS(true), children: <RN.Text {...Object.assign({ onPress, onLongPress, ref: refHandler }, defaultResult)} /> };
  jsxResult = React.jsx(_require(1000).GestureDetector, { gesture: GestureObjects.Native().runOnJS(true), children: <RN.Text {...Object.assign({ onPress, onLongPress, ref: refHandler }, defaultResult)} /> });
});
