// Module ID: 603
// Function ID: 6543
// Name: useFocusEvents
// Dependencies: [119, 565]
// Exports: useFocusEvents

// Module 603 (useFocusEvents)
import getIteratorFn from "getIteratorFn" /* 119 */;

let closure_2 = _interopRequireWildcard(getIteratorFn);

export function useFocusEvents(arg0) {
  ({ state, emitter } = arg0);
  context = React.useContext(emitter(context[1]).NavigationContext);
  React = React.useRef(undefined);
  const key = state.routes[state.index].key;
  const items = [key, emitter, context];
  const effect = React.useEffect(() => {
    let addListenerResult;
    if (context != null) {
      addListenerResult = context.addListener("focus", () => {
        closure_1_2.current = closure_1_3;
        closure_1_0.emit({ type: "focus", target: closure_1_3 });
      });
    }
    return addListenerResult;
  }, items);
  const items1 = [key, emitter, context];
  const effect1 = React.useEffect(() => {
    let addListenerResult;
    if (context != null) {
      addListenerResult = context.addListener("blur", () => {
        closure_1_2.current = undefined;
        closure_1_0.emit({ type: "blur", target: closure_1_3 });
      });
    }
    return addListenerResult;
  }, items1);
  const items2 = [key, emitter, context];
  const effect2 = React.useEffect(() => {
    const current = ref.current;
    ref.current = key;
    if (current === undefined) {
      if (!context) {
        let obj = { type: "focus", target: key };
        emitter.emit(obj);
      }
    }
    if (current !== key) {
      let flag = true;
      if (context) {
        flag = context.isFocused();
      }
      if (flag) {
        if (!tmp) {
          obj = { type: "blur", target: current };
          emitter.emit(obj);
          obj = { type: "focus", target: key };
          emitter.emit(obj);
        }
      }
    }
  }, items2);
}
