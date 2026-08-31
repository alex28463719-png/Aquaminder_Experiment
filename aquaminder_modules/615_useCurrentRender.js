// Module ID: 615
// Function ID: 6665
// Name: useCurrentRender
// Dependencies: [119, 564]
// Exports: useCurrentRender

// Module 615 (useCurrentRender)
import getIteratorFn from "getIteratorFn" /* 119 */;
import CurrentRenderContext from "CurrentRenderContext" /* 564 */;

let closure_2 = _interopRequireWildcard(getIteratorFn);

export function useCurrentRender(arg0) {
  ({ state, navigation } = arg0);
  const context = React.useContext(CurrentRenderContext.CurrentRenderContext);
  if (context) {
    if (navigation.isFocused()) {
      context.options = arg0.descriptors[state.routes[state.index].key].options;
    }
  }
}
