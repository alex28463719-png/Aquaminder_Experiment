// Module ID: 556
// Function ID: 6192
// Name: useOptionsGetters
// Dependencies: [119, 557, 538]
// Exports: useOptionsGetters

// Module 556 (useOptionsGetters)
import getIteratorFn from "getIteratorFn" /* 119 */;

let closure_2 = _interopRequireWildcard(getIteratorFn);

export function useOptionsGetters(key) {
  key = key.key;
  const options = key.options;
  const navigation = key.navigation;
  closure_3 = navigation.useRef(options);
  closure_4 = navigation.useRef({});
  const onOptionsChange = navigation.useContext(key(options[1]).NavigationBuilderContext).onOptionsChange;
  const addOptionsGetter = navigation.useContext(key(options[2]).NavigationStateContext).addOptionsGetter;
  const items = [navigation, onOptionsChange];
  const callback = navigation.useCallback(() => {
    let isFocusedResult;
    if (navigation != null) {
      isFocusedResult = navigation.isFocused();
    }
    let flag = true;
    if (isFocusedResult != null) {
      flag = isFocusedResult;
    }
    if (flag) {
      if (!Object.keys(closure_4.current).length) {
        let current = ref.current;
        if (current == null) {
          current = {};
        }
        onOptionsChange(current);
        const tmp3 = onOptionsChange;
      }
    }
  }, items);
  const items1 = [navigation, options, callback];
  const effect = navigation.useEffect(() => {
    closure_3.current = options;
    let addListenerResult;
    callback();
    if (navigation != null) {
      addListenerResult = navigation.addListener("focus", callback);
    }
    return addListenerResult;
  }, items1);
  const callback1 = navigation.useCallback(() => {
    for (const key10007 in closure_4.current) {
      let tmp6 = key10007;
      let tmp7 = closure_4;
      if (!(key10007 in closure_4.current)) {
        continue;
      } else {
        let tmp = closure_4;
        let current = closure_4.current;
        let obj = current[key10007];
        let callResult;
        if (obj != null) {
          callResult = obj.call(current);
        }
        let tmp3 = obj;
        let tmp4 = current;
        let tmp5 = callResult;
        if (callResult === null) {
          continue;
        } else {
          return callResult;
        }
      }
      continue;
    }
    return null;
  }, []);
  const items2 = [navigation, callback1];
  const callback2 = navigation.useCallback(() => {
    let isFocusedResult;
    if (navigation != null) {
      isFocusedResult = navigation.isFocused();
    }
    let flag = true;
    if (isFocusedResult != null) {
      flag = isFocusedResult;
    }
    if (flag) {
      const tmp4 = callback1();
      if (tmp4 !== null) {
        return tmp4;
      } else {
        return ref.current;
      }
    } else {
      return null;
    }
  }, items2);
  const items3 = [callback2, addOptionsGetter, key];
  const effect1 = navigation.useEffect(() => {
    let tmp;
    if (addOptionsGetter != null) {
      tmp = addOptionsGetter(key, callback2);
    }
    return tmp;
  }, items3);
  const items4 = [callback];
  return {
    addOptionsGetter: navigation.useCallback((arg0, arg1) => {
      closure_0 = arg0;
      closure_4.current[arg0] = arg1;
      callback();
      return () => {
        delete tmp2[tmp];
        closure_1_7();
      };
    }, items4),
    getCurrentOptions: callback2
  };
}
