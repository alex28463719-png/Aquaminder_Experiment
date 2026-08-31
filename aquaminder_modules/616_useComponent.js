// Module ID: 616
// Function ID: 6669
// Name: useComponent
// Dependencies: [119, 251]
// Exports: useComponent

// Module 616 (useComponent)
import getIteratorFn from "getIteratorFn" /* 119 */;
import closure_1 from "jsxProd" /* 251 */;

let closure_0 = _interopRequireWildcard(getIteratorFn);
function NavigationContent(render) {
  return render.render(render.children);
}

export function useComponent(current) {
  ref = ref.useRef(current);
  ref.current = current;
  const effect = ref.useEffect(() => {
    ref.current = null;
  });
  return ref.useRef((arg0) => {
    const current = ref.current;
    if (current === null) {
      const _Error = Error;
      const error = new Error("The returned component must be rendered in the same render phase as the hook.");
      throw error;
    } else {
      const obj = { render: current, children: tmp };
      return <closure_1_2 render={current}>{tmp}</closure_1_2>;
    }
  }).current;
}
