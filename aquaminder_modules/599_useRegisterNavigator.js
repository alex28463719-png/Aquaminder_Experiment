// Module ID: 599
// Function ID: 6525
// Name: useRegisterNavigator
// Dependencies: [1, 38, 119, 548, 561]
// Exports: useRegisterNavigator

// Module 599 (useRegisterNavigator)
import _slicedToArray from "_slicedToArray" /* 38 */;
import getIteratorFn from "getIteratorFn" /* 119 */;
import module_1 from "module_1" /* 1 */;

let closure_2 = module_1(_slicedToArray);
let closure_3 = _interopRequireWildcard(getIteratorFn);

export function useRegisterNavigator() {
  const first = closure_2.default(React.useState(() => first(context[3]).nanoid()), 1)[0];
  context = React.useContext(first(context[4]).SingleNavigatorContext);
  if (context === undefined) {
    const _Error = Error;
    const error = new Error("Couldn't register the navigator. Have you wrapped your app with 'NavigationContainer'?\n\nThis can also happen if there are multiple copies of '@react-navigation' packages installed.");
    throw error;
  } else {
    const items = [context, first];
    const effect = React.useEffect(() => {
      const unregister = context.unregister;
      context.register(unregister);
      return () => unregister(unregister);
    }, items);
    return first;
  }
}
