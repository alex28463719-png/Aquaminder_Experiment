// Module ID: 963
// Function ID: 10398
// Name: createNativeWrapper
// Dependencies: [1, 6, 119, 251, 964]
// Exports: default

// Module 963 (createNativeWrapper)
import _toConsumableArray2 from "_toConsumableArray" /* 6 */;
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import NativeViewGestureHandler from "NativeViewGestureHandler" /* 964 */;
import module_1 from "module_1" /* 1 */;
import closure_4 from "jsxProd" /* 251 */;

const _toConsumableArray = module_1(_toConsumableArray2);
const getIteratorFn = _interopRequireWildcard(getIteratorFn2);
let items = [];
let closure_5 = items.concat(_toConsumableArray.default(NativeViewGestureHandler.nativeViewProps), ["onGestureHandlerEvent", "onGestureHandlerStateChange"]);

export default function createNativeWrapper(displayName) {
  closure_0 = displayName;
  if (arguments.length > 1) {
    closure_1 = {};
    const forwardRefResult = getIteratorFn.forwardRef((enabled) => {
      displayName = enabled;
      const keys = Object.keys(enabled);
      obj = { gestureHandlerProps: Object.assign({}, ref), childProps: obj };
      obj = { enabled: enabled.enabled, hitSlop: enabled.hitSlop, testID: enabled.testID };
      const reduced = keys.reduce((gestureHandlerProps, name) => {
        if (closure_2_5.includes(name)) {
          gestureHandlerProps.gestureHandlerProps[name] = enabled[name];
        } else {
          gestureHandlerProps.childProps[name] = enabled[name];
        }
        return gestureHandlerProps;
      }, obj);
      ({ gestureHandlerProps, childProps } = reduced);
      ref = closure_1_2.useRef(null);
      const ref1 = closure_1_2.useRef(null);
      const items = [ref, ref1];
      const imperativeHandle = closure_1_2.useImperativeHandle(arg1, () => {
        const current = ref1.current;
        if (ref.current) {
          if (current) {
            ref.current.handlerTag = current.handlerTag;
            return ref.current;
          }
        }
        return null;
      }, items);
      obj = { ref: ref1, children: <displayName {...Object.assign({}, childProps, { ref })} /> };
      return closure_1_4.jsx(displayName(table[4]).NativeViewGestureHandler, Object.assign({}, gestureHandlerProps, obj));
    });
    let str;
    if (displayName != null) {
      str = displayName.displayName;
    }
    if (!str) {
      let name;
      if (displayName != null) {
        const render = displayName.render;
        if (render != null) {
          name = render.name;
        }
      }
      str = name;
    }
    if (!str) {
      str = typeof displayName === "string" && displayName;
      const tmp6 = typeof displayName === "string" && displayName;
    }
    if (!str) {
      str = "ComponentWrapper";
    }
    forwardRefResult.displayName = str;
    return forwardRefResult;
  }
};
