// Module ID: 621
// Function ID: 6701
// Name: usePreventRemove
// Dependencies: [1, 38, 119, 536, 548, 595, 572, 622]
// Exports: usePreventRemove

// Module 621 (usePreventRemove)
import _slicedToArray from "_slicedToArray" /* 38 */;
import getIteratorFn from "getIteratorFn" /* 119 */;
import _mod536 from "module_536" /* 536 */;
import module_1 from "module_1" /* 1 */;

let closure_2 = module_1(_slicedToArray);
let closure_3 = _interopRequireWildcard(getIteratorFn);
let closure_4 = module_1(_mod536);

export function usePreventRemove(arg0, arg1) {
  const _require = arg0;
  dependencyMap = arg1;
  first = first.default(navigation.useState(() => callback(548).nanoid()), 1)[0];
  navigation = _require(595).useNavigation();
  const key = _require(572).useRoute().key;
  const setPreventRemove = _require(622).usePreventRemoveContext().setPreventRemove;
  const items = [setPreventRemove, first, key, arg0];
  const effect = navigation.useEffect(() => {
    setPreventRemove(first, key, closure_0);
    return () => {
      closure_1_5(closure_1_2, closure_1_4, false);
    };
  }, items);
  const defaultResult = key.default((preventDefault) => {
    if (closure_0) {
      preventDefault.preventDefault();
      const obj = { data: preventDefault.data };
      dependencyMap(obj);
    }
  });
  const items1 = [navigation, defaultResult];
  const effect1 = navigation.useEffect(() => {
    let addListenerResult;
    if (navigation != null) {
      addListenerResult = navigation.addListener("beforeRemove", closure_6);
    }
    return addListenerResult;
  }, items1);
}
