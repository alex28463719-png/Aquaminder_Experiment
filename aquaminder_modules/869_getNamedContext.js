// Module ID: 869
// Function ID: 9573
// Name: getNamedContext
// Dependencies: [119]
// Exports: getNamedContext

// Module 869 (getNamedContext)
import getIteratorFn from "getIteratorFn" /* 119 */;

let closure_0 = _interopRequireWildcard(getIteratorFn);
let __react_navigation__elements_contexts = "__react_navigation__elements_contexts";
__react_navigation__elements_contexts = globalThis.__react_navigation__elements_contexts;
if (__react_navigation__elements_contexts == null) {
  const _Map = Map;
  __react_navigation__elements_contexts = new Map();
}
globalThis.__react_navigation__elements_contexts = __react_navigation__elements_contexts;

export function getNamedContext(HeaderBackContext, arg1) {
  const value = globalThis[__react_navigation__elements_contexts].get(HeaderBackContext);
  if (value) {
    return value;
  } else {
    const context = React.createContext(arg1);
    context.displayName = HeaderBackContext;
    const _globalThis = globalThis;
    const result = globalThis[__react_navigation__elements_contexts].set(HeaderBackContext, context);
    return context;
  }
  const obj = globalThis[__react_navigation__elements_contexts];
}
