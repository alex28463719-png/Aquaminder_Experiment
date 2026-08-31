// Module ID: 867
// Function ID: 9548
// Name: FrameSizeProviderInner
// Dependencies: [1, 119, 2, 536, 251, 618, 673, 673]
// Exports: FrameSizeProvider, useFrameSize

// Module 867 (FrameSizeProviderInner)
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import _mod536 from "module_536" /* 536 */;
import is from "is" /* 618 */;
import module_1 from "module_1" /* 1 */;
import closure_3 from "get registerCallableModule" /* 2 */;
import closure_5 from "jsxProd" /* 251 */;

function FrameSizeProviderInner(children) {
  const initialFrame = children.initialFrame;
  let obj = { width: initialFrame.width, height: initialFrame.height };
  const _require = getIteratorFn.useRef(obj);
  dependencyMap = getIteratorFn.useRef(new Set());
  const defaultResult = defaultResult2.default(() => ref.current);
  getIteratorFn = defaultResult;
  const defaultResult1 = defaultResult2.default((arg0) => {
    closure_0 = arg0;
    let current = ref2.current;
    current.add(arg0);
    return () => {
      const current = closure_1_1.current;
      current.delete(closure_0);
    };
  });
  defaultResult2 = defaultResult2.default((arg0) => {
    closure_0 = arg0;
    c2 = false;
    closure_4 = defaultResult1(function throttledListener() {
      clearTimeout(timeout);
      c2 = true;
      if (c3) {
        const _setTimeout2 = setTimeout;
        timeout = setTimeout(() => {
          if (c2) {
            c2 = false;
            closure_1_0();
          }
        }, 100);
      } else {
        c3 = true;
        const _setTimeout = setTimeout;
        const timerId = setTimeout(() => {
          c3 = false;
        }, 100);
        c2 = false;
        callback();
      }
    });
    return () => {
      callback2();
      clearTimeout(closure_1);
    };
  });
  const items = [defaultResult1, defaultResult2, defaultResult];
  const memo = getIteratorFn.useMemo(() => ({ getCurrent: closure_2, subscribe: defaultResult1, subscribeThrottled: defaultResult2 }), items);
  const defaultResult3 = defaultResult2.default((height) => {
    ref.current = { width: height.width, height: height.height };
    const current = ref2.current;
    const item = current.forEach((arg0) => arg0());
  });
  obj = {};
  ({ jsxs, Fragment } = defaultResult3);
  if (defaultResult1.Platform.OS === "web") {
    obj = { onChange: defaultResult3 };
    let jsxResult = <FrameSizeListenerWeb onChange={defaultResult3} />;
  } else if (typeof _require(673).SafeAreaListener === "undefined") {
    const obj1 = { onChange: defaultResult3 };
    jsxResult = <FrameSizeListenerNativeFallback onChange={defaultResult3} />;
  } else {
    const obj2 = {
      onChange(frame) {
          return defaultResult3(frame.frame);
        },
      style: defaultResult1.StyleSheet.absoluteFill
    };
    jsxResult = defaultResult3.jsx(_require(673).SafeAreaListener, {
      onChange(frame) {
          return defaultResult3(frame.frame);
        },
      style: defaultResult1.StyleSheet.absoluteFill
    });
  }
  const items1 = [jsxResult, <redux.Provider value={memo}>{arg0.children}</redux.Provider>];
  obj.children = items1;
  return <></>;
}
function FrameSizeListenerNativeFallback(onChange) {
  onChange = onChange.onChange;
  safeAreaFrame = onChange(safeAreaFrame[7]).useSafeAreaFrame();
  const items = [safeAreaFrame, onChange];
  const layoutEffect = getIteratorFn.useLayoutEffect(() => {
    onChange(safeAreaFrame);
  }, items);
  return null;
}
function FrameSizeListenerWeb(onChange) {
  onChange = onChange.onChange;
  const ref = getIteratorFn.useRef(null);
  const items = [onChange];
  const effect = getIteratorFn.useEffect(() => {
    if (ref.current != null) {
      const current = ref.current;
      const boundingClientRect = current.getBoundingClientRect();
      let obj = {};
      ({ width: obj.width, height: obj.height } = boundingClientRect);
      resizeObserver(obj);
      const prototype = globalThis.ResizeObserver.prototype;
      resizeObserver = new globalThis.ResizeObserver((arg0) => {
        const first = arg0[0];
        if (first) {
          const obj = {};
          ({ width: obj.width, height: obj.height } = first.contentRect);
          resizeObserver(obj);
        }
      });
      resizeObserver.observe(ref.current);
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, items);
  return <div ref={ref} style={Object.assign({}, StyleSheet.StyleSheet.absoluteFillObject, { pointerEvents: "none", visibility: "hidden" })} />;
}
let getIteratorFn = _interopRequireWildcard(getIteratorFn2);
let closure_4 = module_1(_mod536);
let context = getIteratorFn.createContext(undefined);

export function FrameSizeProvider(children) {
  children = children.children;
  if (getIteratorFn.useContext(closure_6) != null) {
    return children;
  } else {
    const obj = { initialFrame: children.initialFrame, children };
    return <FrameSizeProviderInner initialFrame={arg0.initialFrame}>{children}</FrameSizeProviderInner>;
  }
}
export function useFrameSize(arg0, arg1) {
  const context = getIteratorFn.useContext(closure_6);
  if (context == null) {
    const _Error = Error;
    const error = new Error("useFrameSize must be used within a FrameSizeProvider");
    throw error;
  } else {
    const tmp5 = arg1 ? context.subscribeThrottled : context.subscribe;
    return is.useSyncExternalStoreWithSelector(tmp5, context.getCurrent, context.getCurrent, arg0);
  }
}
