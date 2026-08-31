// Module ID: 636
// Function ID: 6797
// Name: ServerContainer
// Dependencies: [119, 251, 637, 534]

// Module 636 (ServerContainer)
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import closure_3 from "jsxProd" /* 251 */;

const getIteratorFn = _interopRequireWildcard(getIteratorFn2);

export const ServerContainer = getIteratorFn.forwardRef(function ServerContainer(arg0, fn) {
  ({ children, location: _location } = arg0);
  const effect = getIteratorFn.useEffect(() => {
    console.error("'ServerContainer' should only be used on the server with 'react-dom/server' for SSR.");
  }, []);
  let obj = {};
  if (fn) {
    obj = {
      getCurrentOptions() {
          return obj.options;
        }
    };
    if (typeof fn === "function") {
      fn(obj);
    } else {
      fn.current = obj;
    }
  }
  obj = { value: { location: _location } };
  obj.children = React.jsx(obj(534).CurrentRenderContext.Provider, { value: obj, children });
  return React.jsx(obj(637).ServerContext.Provider, { value: { location: _location } });
});
