// Module ID: 356
// Function ID: 4460
// Name: VirtualizedListCellContextProvider
// Dependencies: [119, 251]
// Exports: VirtualizedListCellContextProvider, VirtualizedListContextProvider, VirtualizedListContextResetter

// Module 356 (VirtualizedListCellContextProvider)
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import closure_1 from "jsxProd" /* 251 */;

let getIteratorFn = _interopRequireWildcard(getIteratorFn2);
let context = getIteratorFn.createContext(null);

export function VirtualizedListCellContextProvider(cellKey) {
  cellKey = cellKey.cellKey;
  context = cellKey.useContext(context);
  const items = [context, cellKey];
  return <context.Provider value={cellKey.useMemo(() => {
    let merged = null;
    if (context != null) {
      const _Object = Object;
      const obj = { cellKey };
      merged = Object.assign({}, context, obj);
    }
    return merged;
  }, items)}>{arg0.children}</context.Provider>;
}
export function VirtualizedListContextProvider(children) {
  const value = children.value;
  getIteratorFn = value;
  const items = [, , , , ];
  ({ getScrollMetrics: arr[0], horizontal: arr[1], getOutermostParentListRef: arr[2], registerAsNestedChild: arr[3], unregisterAsNestedChild: arr[4] } = value);
  return <context.Provider value={getIteratorFn.useMemo(() => ({ cellKey: null, getScrollMetrics: value.getScrollMetrics, horizontal: value.horizontal, getOutermostParentListRef: value.getOutermostParentListRef, registerAsNestedChild: value.registerAsNestedChild, unregisterAsNestedChild: value.unregisterAsNestedChild }), items)}>{arg0.children}</context.Provider>;
}
export function VirtualizedListContextResetter(children) {
  return <context.Provider value={null}>{arg0.children}</context.Provider>;
}
export const VirtualizedListContext = context;
