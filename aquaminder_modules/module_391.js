// Module ID: 391
// Function ID: 4751
// Dependencies: [1, 38, 299, 253, 33, 334, 119, 251, 333]

// Module 391
import get_Version from "get Version" /* 33 */;
import _slicedToArray from "_slicedToArray" /* 38 */;
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import setStyleAttributePreprocessor2 from "setStyleAttributePreprocessor" /* 253 */;
import get_FlatList from "get FlatList" /* 299 */;
import useMergeRefs from "useMergeRefs" /* 334 */;
import module_1 from "module_1" /* 1 */;
import closure_8 from "jsxProd" /* 251 */;

let closure_2 = module_1(_slicedToArray);
let closure_3 = module_1(get_FlatList);
const setStyleAttributePreprocessor = module_1(setStyleAttributePreprocessor2);
let closure_4 = module_1(get_Version);
let closure_5 = module_1(useMergeRefs);
let getIteratorFn = _interopRequireWildcard(getIteratorFn2);
let closure_9 = setStyleAttributePreprocessor.default.create({ header: { zIndex: 10 }, fill: { flex: 1 } });

export default getIteratorFn.forwardRef(function ScrollViewStickyHeader(inverted) {
  closure_0 = inverted;
  inverted = inverted.inverted;
  const scrollViewHeight = inverted.scrollViewHeight;
  const hiddenOnScroll = inverted.hiddenOnScroll;
  const scrollAnimatedValue = inverted.scrollAnimatedValue;
  const defaultResult = scrollViewHeight.default(getIteratorFn.useState(false), 2);
  const first = defaultResult[0];
  getIteratorFn = defaultResult[1];
  const defaultResult1 = scrollViewHeight.default(getIteratorFn.useState(0), 2);
  const first1 = defaultResult1[0];
  const React = defaultResult1[1];
  const defaultResult2 = scrollViewHeight.default(getIteratorFn.useState(0), 2);
  const first2 = defaultResult2[0];
  closure_10 = defaultResult2[1];
  const defaultResult3 = scrollViewHeight.default(getIteratorFn.useState(null), 2);
  const first3 = defaultResult3[0];
  closure_12 = defaultResult3[1];
  const defaultResult4 = scrollViewHeight.default(getIteratorFn.useState(inverted.nextHeaderLayoutY), 2);
  const first4 = defaultResult4[0];
  closure_14 = defaultResult4[1];
  const defaultResult5 = scrollViewHeight.default(getIteratorFn.useState(false), 2);
  const first5 = defaultResult5[0];
  closure_16 = defaultResult5[1];
  let items = [scrollAnimatedValue, first2, first1, hiddenOnScroll];
  const memo = getIteratorFn.useMemo(() => {
    let diffClampResult = null;
    if (hiddenOnScroll === true) {
      let obj = { extrapolateLeft: "clamp" };
      const items = [first1, first1 + 1];
      obj.inputRange = items;
      obj.outputRange = [0, 1];
      obj = { inputRange: [0, 1] };
      const items1 = [0, -1];
      obj.outputRange = items1;
      diffClampResult = hiddenOnScroll.default.diffClamp(scrollAnimatedValue.interpolate(obj).interpolate(obj), -first2, 0);
      const _default = hiddenOnScroll.default;
      const interpolateResult = scrollAnimatedValue.interpolate(obj);
    }
    return diffClampResult;
  }, items);
  const defaultResult7 = scrollViewHeight.default(getIteratorFn.useState(() => {
    const items = [-1, 0];
    const interpolateResult = scrollAnimatedValue.interpolate({ inputRange: items, outputRange: [0, 0] });
    if (memo != null) {
      return hiddenOnScroll.default.add(interpolateResult, memo);
    } else {
      return interpolateResult;
    }
  }), 2);
  closure_18 = defaultResult7[1];
  closure_19 = getIteratorFn.useRef(true);
  closure_20 = getIteratorFn.useRef(null);
  let items1 = [first3];
  const effect = getIteratorFn.useEffect(() => {
    if (first3 !== 0) {
      if (first3 != null) {
        closure_19.current = false;
      }
    }
  }, items1);
  const callback = getIteratorFn.useCallback((value) => {
    value = value.value;
    closure_0 = value;
    let num = 64;
    if (scrollAnimatedValue.default.OS === "android") {
      num = 15;
    }
    if (value === 0) {
      if (!ref.current) {
        ref.current = true;
      }
    }
    if (ref2.current != null) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref2.current);
    }
    ref2.current = setTimeout(() => closure_1_12(closure_0), num);
  }, []);
  const items2 = [first4, first, first2, first1, scrollViewHeight, scrollAnimatedValue, inverted, memo, callback, first5];
  const effect1 = getIteratorFn.useEffect(() => {
    const items = [-1, 0];
    const items1 = [0, 0];
    if (first) {
      if (closure_1 === true) {
        if (scrollViewHeight != null) {
          const diff = first1 + first2 - scrollViewHeight;
          if (diff > 0) {
            items.push(diff);
            items1.push(0);
            items.push(diff + 1);
            items1.push(1);
            let num5 = first4;
            if (!first4) {
              num5 = 0;
            }
            const diff1 = num5 - first2 - scrollViewHeight;
            if (diff1 > diff) {
              items.push(diff1, diff1 + 1);
              items1.push(diff1 - diff, diff1 - diff);
            }
          }
        }
      } else {
        items.push(first1);
        items1.push(0);
        let num = first4;
        if (!first4) {
          num = 0;
        }
        const diff2 = num - first2;
        if (diff2 >= first1) {
          items.push(diff2, diff2 + 1);
          items1.push(diff2 - first1, diff2 - first1);
        } else {
          items.push(first1 + 1);
          items1.push(1);
        }
      }
    }
    const interpolateResult = scrollAnimatedValue.interpolate({ inputRange: items, outputRange: items1 });
    closure_0 = interpolateResult;
    let obj = interpolateResult;
    if (memo != null) {
      const addResult = hiddenOnScroll.default.add(interpolateResult, memo);
      closure_0 = addResult;
      obj = addResult;
      const _default = hiddenOnScroll.default;
    }
    if (first5) {
      closure_1 = obj.addListener(callback);
    }
    callback5(obj);
    return () => {
      if (closure_1) {
        addResult.removeListener(closure_1);
      }
      if (closure_1_20.current != null) {
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_1_20.current);
      }
    };
  }, items2);
  let Children = first1.Children;
  let onlyResult = Children.only(inverted.children);
  let tmp20 = null;
  if (first5) {
    tmp20 = null;
    if (first3 != null) {
      let obj = {};
      obj = {};
      obj = { translateY: first3 };
      const items3 = [obj];
      obj.transform = items3;
      obj.style = obj;
      tmp20 = obj;
    }
  }
  const obj1 = {
    collapsable: false,
    nativeID: inverted.nativeID,
    onLayout: function _onLayout(nativeEvent) {
      callback2(nativeEvent.nativeEvent.layout.y);
      callback3(nativeEvent.nativeEvent.layout.height);
      callback(true);
      inverted.onLayout(nativeEvent);
      const Children = first1.Children;
      const onlyResult = Children.only(inverted.children);
      if (onlyResult.props.onLayout) {
        const props = onlyResult.props;
        props.onLayout(nativeEvent);
      }
    },
    ref: first.default(getIteratorFn.useCallback((nativeScrollRef) => {
      if (nativeScrollRef != null) {
        nativeScrollRef.setNextHeaderY = closure_14;
        callback4(inverted(inverted[8]).isPublicInstance(nativeScrollRef));
      }
    }, []), arg1),
    style: items4
  };
  items4 = [onlyResult.props.style, first2.header, ];
  const items5 = [{ translateY: defaultResult7[0] }];
  items4[2] = { transform: items5 };
  obj1.passthroughAnimatedPropExplicitValues = tmp20;
  obj1.children = first1.cloneElement(onlyResult, { style: first2.fill, onLayout: undefined });
  return React.jsx(hiddenOnScroll.default.View, {
    collapsable: false,
    nativeID: inverted.nativeID,
    onLayout: function _onLayout(nativeEvent) {
      callback2(nativeEvent.nativeEvent.layout.y);
      callback3(nativeEvent.nativeEvent.layout.height);
      callback(true);
      inverted.onLayout(nativeEvent);
      const Children = first1.Children;
      const onlyResult = Children.only(inverted.children);
      if (onlyResult.props.onLayout) {
        const props = onlyResult.props;
        props.onLayout(nativeEvent);
      }
    },
    ref: first.default(getIteratorFn.useCallback((nativeScrollRef) => {
      if (nativeScrollRef != null) {
        nativeScrollRef.setNextHeaderY = closure_14;
        callback4(inverted(inverted[8]).isPublicInstance(nativeScrollRef));
      }
    }, []), arg1),
    style: items4
  });
});
