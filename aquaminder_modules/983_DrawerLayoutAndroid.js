// Module ID: 983
// Function ID: 10499
// Name: DrawerLayoutAndroid
// Dependencies: [1, 38, 6, 203, 119, 2, 963, 251, 971, 964]

// Module 983 (DrawerLayoutAndroid)
import _toConsumableArray from "_toConsumableArray" /* 6 */;
import _slicedToArray from "_slicedToArray" /* 38 */;
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import createNativeWrapper2 from "createNativeWrapper" /* 963 */;
import hasProperty from "hasProperty" /* 971 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_7 from "jsxProd" /* 251 */;

let closure_2 = module_1(_slicedToArray);
let closure_3 = module_1(_toConsumableArray);
let closure_4 = module_1(_objectWithoutProperties);
const getIteratorFn = _interopRequireWildcard(getIteratorFn2);
const createNativeWrapper = module_1(createNativeWrapper2);
let closure_8 = ["refreshControl", "waitFor"];
let closure_9 = ["waitFor", "refreshControl"];
let closure_10 = createNativeWrapper.default(get_registerCallableModule.ScrollView, { disallowInterruption: true, shouldCancelWhenOutside: false });
const forwardRefResult = getIteratorFn.forwardRef((arg0, ref) => {
  ref = getIteratorFn.useRef(null);
  ({ refreshControl, waitFor } = arg0);
  let obj = { ref };
  const items = [];
  if (waitFor == null) {
    waitFor = [];
  }
  const items1 = [ref];
  obj.waitFor = items.concat(closure_3.default(hasProperty.toArray(waitFor)), items1);
  let cloneElementResult;
  if (refreshControl) {
    obj = { ref };
    cloneElementResult = getIteratorFn.cloneElement(refreshControl, obj);
  }
  obj.refreshControl = cloneElementResult;
  return <closure_10 {...Object.assign({}, closure_4.default(arg0, closure_8), obj)} />;
});

export const RefreshControl = createNativeWrapper.default(get_registerCallableModule.RefreshControl, { disallowInterruption: true, shouldCancelWhenOutside: false });
export const ScrollView = forwardRefResult;
export const Switch = createNativeWrapper.default(get_registerCallableModule.Switch, { shouldCancelWhenOutside: false, shouldActivateOnStart: true, disallowInterruption: true });
export const TextInput = createNativeWrapper.default(get_registerCallableModule.TextInput);
export const DrawerLayoutAndroid = createNativeWrapper.default(get_registerCallableModule.DrawerLayoutAndroid, { disallowInterruption: true });
export const FlatList = getIteratorFn.forwardRef((arg0, ref) => {
  ref = getIteratorFn.useRef(null);
  ({ waitFor: dependencyMap, refreshControl } = arg0);
  let obj = {};
  obj = {};
  const entries = Object.entries(closure_4.default(arg0, closure_9));
  while (tmp3 !== undefined) {
    let tmp5 = obj;
    let defaultResult = obj.default(tmp4, 2);
    let first = defaultResult[0];
    let tmp8 = first;
    let tmp9 = defaultResult[1];
    let tmp10 = ref;
    let tmp11 = dependencyMap;
    let nativeViewProps = ref(964).nativeViewProps;
    if (nativeViewProps.includes(first)) {
      let tmp15 = obj;
      let tmp16 = first;
      let tmp17 = tmp9;
      obj[tmp8] = tmp9;
    } else {
      let tmp12 = obj;
      let tmp13 = first;
      let tmp14 = tmp9;
      obj[tmp8] = tmp9;
    }
    continue;
  }
  obj = { ref };
  const obj1 = {
    renderScrollComponent(arg0) {
      obj = { waitFor: items.concat(closure_1_3.default(ref(closure_1_1[8]).toArray(closure_1 != null ? closure_1 : [])), items1) };
      items = [];
      items1 = [ref];
      return <closure_1_11 {...Object.assign({}, Object.assign({}, arg0, obj, obj))} />;
    }
  };
  let cloneElementResult;
  if (refreshControl) {
    const obj2 = { ref };
    cloneElementResult = getIteratorFn.cloneElement(refreshControl, obj2);
  }
  obj1.refreshControl = cloneElementResult;
  return <get registerCallableModule.FlatList {...Object.assign(obj, obj, obj1)} />;
});
