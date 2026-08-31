// Module ID: 378
// Function ID: 4630
// Name: _callSuper
// Dependencies: [1, 203, 12, 13, 23, 25, 28, 301, 379, 44, 128, 382, 253, 113, 383, 33, 384, 84, 388, 389, 390, 391, 20, 360, 45, 119, 251, 57, 392, 397]

// Module 378 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import invariant from "invariant" /* 20 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _inherits from "_inherits" /* 28 */;
import get_Version from "get Version" /* 33 */;
import isFabricReactTag from "isFabricReactTag" /* 44 */;
import nullthrows from "nullthrows" /* 45 */;
import focusInput from "focusInput" /* 84 */;
import Dimensions from "Dimensions" /* 113 */;
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import flattenStyle from "flattenStyle" /* 128 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import setStyleAttributePreprocessor2 from "setStyleAttributePreprocessor" /* 253 */;
import _combineCallbacks from "_combineCallbacks" /* 301 */;
import isEqual from "isEqual" /* 360 */;
import setGlobalOptions from "setGlobalOptions" /* 379 */;
import splitLayoutProps from "splitLayoutProps" /* 382 */;
import dismissKeyboard from "dismissKeyboard" /* 383 */;
import Keyboard from "Keyboard" /* 384 */;
import processDecelerationRate from "processDecelerationRate" /* 388 */;
import _mod389 from "module_389" /* 389 */;
import HORIZONTAL2 from "HORIZONTAL" /* 390 */;
import _mod391 from "module_391" /* 391 */;
import module_1 from "module_1" /* 1 */;
import closure_28 from "jsxProd" /* 251 */;

function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const defaultResult = closure_7.default(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(defaultResult, items, closure_7.default(arg0).constructor);
  } else {
    constructResult = defaultResult.apply(arg0, items);
  }
  return closure_6.default(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
function createRefForwarder(arg0) {
  closure_0 = arg0;
  const obj = {
    getForwardingRef: closure_25.default((arg0) => {
      closure_0 = arg0;
      return (nativeInstance) => {
        let tmp = null;
        if (nativeInstance != null) {
          tmp = callback(nativeInstance);
        }
        closure_1_1.nativeInstance = nativeInstance;
        closure_1_1.publicInstance = tmp;
        if (callback != null) {
          if (typeof callback === "function") {
            callback(tmp);
          } else {
            callback.current = tmp;
          }
        }
      };
    }),
    nativeInstance: null,
    publicInstance: null
  };
  return obj;
}
let closure_3 = module_1(_objectWithoutProperties);
let closure_4 = module_1(_classCallCheck);
let closure_5 = module_1(_defineProperties);
let closure_6 = module_1(_possibleConstructorReturn);
let closure_7 = module_1(_getPrototypeOf);
let closure_8 = module_1(_inherits);
let closure_9 = module_1(_combineCallbacks);
let closure_10 = module_1(setGlobalOptions);
let closure_11 = module_1(isFabricReactTag);
let closure_12 = module_1(flattenStyle);
let closure_13 = module_1(splitLayoutProps);
const setStyleAttributePreprocessor = module_1(setStyleAttributePreprocessor2);
let closure_15 = module_1(Dimensions);
let closure_16 = module_1(dismissKeyboard);
let closure_17 = module_1(get_Version);
let closure_18 = module_1(Keyboard);
let closure_19 = module_1(focusInput);
let closure_20 = module_1(processDecelerationRate);
let closure_21 = module_1(_mod389);
const HORIZONTAL = _interopRequireWildcard(HORIZONTAL2);
let closure_23 = module_1(_mod391);
let closure_24 = module_1(invariant);
let closure_25 = module_1(isEqual);
let closure_26 = module_1(nullthrows);
const getIteratorFn = _interopRequireWildcard(getIteratorFn2);
let closure_29 = ["experimental_endDraggingSensitivityMultiplier"];
const tmp5 = ((Component) => {
  class ScrollView {
    constructor(arg0) {
      defaultResult = closure_1_4.default(this, closure_0);
      items = [];
      items[0] = Component;
      tmp2 = closure_1_33(this, closure_0, items);
      closure_0 = tmp2;
      tmp2._scrollAnimatedValueAttachment = null;
      map = new Map();
      tmp2._stickyHeaderRefs = map;
      map1 = new Map();
      tmp2._headerLayoutYs = map1;
      tmp2._keyboardMetrics = null;
      tmp2._additionalScrollOffset = 0;
      tmp2._isTouching = false;
      tmp2._lastMomentumScrollBeginTime = 0;
      tmp2._lastMomentumScrollEndTime = 0;
      tmp2._observedScrollSinceBecomingResponder = false;
      tmp2._becameResponderWhileAnimating = false;
      tmp2._preventNegativeScrollOffset = null;
      tmp2._animated = null;
      tmp2._subscriptionKeyboardWillShow = null;
      tmp2._subscriptionKeyboardWillHide = null;
      tmp2._subscriptionKeyboardDidShow = null;
      tmp2._subscriptionKeyboardDidHide = null;
      tmp2.state = { layoutHeight: null };
      tmp2.getScrollResponder = () => closure_0;
      tmp2.getScrollableNode = () => closure_2_1(closure_2_2[27]).findNodeHandle(store.getNativeScrollRef());
      tmp2.getInnerViewNode = () => closure_2_1(closure_2_2[27]).findNodeHandle(store._innerView.nativeInstance);
      tmp2.getInnerViewRef = () => store._innerView.nativeInstance;
      tmp2.getNativeScrollRef = () => store._scrollView.nativeInstance;
      tmp2.scrollTo = (num) => {
        if (typeof num === "number") {
          const _console = console;
          console.warn("`scrollTo(y, x, animated)` is deprecated. Use `scrollTo({x: 5, y: 5, animated: true})` instead.");
          x = arg1;
          y = num;
          animated = arg2;
        } else if (num) {
          ({ y, x, animated } = num);
        }
        const nativeScrollRef = store.getNativeScrollRef();
        if (nativeScrollRef != null) {
          if (!x) {
            x = 0;
          }
          if (!y) {
            y = 0;
          }
          closure_2_21.default.scrollTo(nativeScrollRef, x, y, animated !== false);
        }
      };
      tmp2.scrollToEnd = (animated) => {
        if (animated) {
          animated = animated.animated;
        }
        const nativeScrollRef = store.getNativeScrollRef();
        if (nativeScrollRef != null) {
          closure_2_21.default.scrollToEnd(nativeScrollRef, animated !== false);
        }
      };
      tmp2.flashScrollIndicators = () => {
        const nativeScrollRef = store.getNativeScrollRef();
        if (nativeScrollRef != null) {
          const result = closure_2_21.default.flashScrollIndicators(nativeScrollRef);
        }
      };
      tmp2.scrollResponderScrollNativeHandleToKeyboard = (num, arg1, _preventNegativeScrollOffset) => {
        num = arg1;
        if (!arg1) {
          num = 0;
        }
        store._additionalScrollOffset = num;
        store._preventNegativeScrollOffset = _preventNegativeScrollOffset;
        if (store._innerView.nativeInstance != null) {
          if (typeof num === "number") {
            closure_2_11.default.measureLayout(num, closure_2_26.default(closure_2_1(closure_2_2[27]).findNodeHandle(store)), store._textInputFocusError, store._inputMeasureAndScrollToKeyboard);
          } else {
            num.measureLayout(store._innerView.nativeInstance, store._inputMeasureAndScrollToKeyboard, store._textInputFocusError);
          }
        }
        const tmp = store;
      };
      tmp2.scrollResponderZoomTo = (animated) => {
        closure_2_24.default(closure_2_17.default.OS === "ios", "zoomToRect is not implemented");
        if ("animated" in animated) {
          store._animated = animated.animated;
          delete tmp.animated;
        } else if (typeof arg1 !== "undefined") {
          const _console = console;
          console.warn("`scrollResponderZoomTo` `animated` argument is deprecated. Use `options.animated` instead");
        }
        const nativeScrollRef = store.getNativeScrollRef();
        if (nativeScrollRef != null) {
          closure_2_21.default.zoomToRect(nativeScrollRef, animated, arg1 !== false);
        }
      };
      tmp2._inputMeasureAndScrollToKeyboard = (arg0, arg1, arg2, arg3) => {
        const store = arg1;
        closure_1 = arg3;
        const height = closure_2_15.default.get("window").height;
        function scrollTextInputIntoVisibleRect() {
          if (closure_0._keyboardMetrics != null) {
            const screenY = closure_0._keyboardMetrics.screenY;
          }
          const sum = closure_0 - screenY + closure_1 + closure_0._additionalScrollOffset;
          let bound = sum;
          if (closure_0._preventNegativeScrollOffset === true) {
            const _Math = Math;
            bound = Math.max(0, sum);
          }
          const obj = { x: 0, y: bound, animated: true };
          closure_0.scrollTo(obj);
          closure_0._additionalScrollOffset = 0;
          closure_0._preventNegativeScrollOffset = false;
        }
        if (store._keyboardMetrics == null) {
          const _setTimeout = setTimeout;
          const timerId = setTimeout(() => {
            scrollTextInputIntoVisibleRect();
          }, 0);
        } else {
          const result = scrollTextInputIntoVisibleRect();
        }
      };
      tmp2._handleScroll = (arg0) => {
        store._observedScrollSinceBecomingResponder = true;
        if (store.props.onScroll) {
          const props = store.props;
          props.onScroll(arg0);
        }
      };
      tmp2._handleLayout = (nativeEvent) => {
        if (store.props.invertStickyHeaders === true) {
          const obj = { layoutHeight: nativeEvent.nativeEvent.layout.height };
          store.setState(obj);
        }
        if (store.props.onLayout) {
          const props = store.props;
          props.onLayout(nativeEvent);
        }
      };
      tmp2._handleContentOnLayout = (arg0) => {
        if (store.props.onContentSizeChange) {
          const props = store.props;
          props.onContentSizeChange(tmp, tmp2);
        }
      };
      tmp2._innerView = closure_1_35((arg0) => arg0);
      tmp2._scrollView = closure_1_35((arg0) => Object.assign(arg0, { getScrollResponder: store.getScrollResponder, getScrollableNode: store.getScrollableNode, getInnerViewNode: store.getInnerViewNode, getInnerViewRef: store.getInnerViewRef, getNativeScrollRef: store.getNativeScrollRef, scrollTo: store.scrollTo, scrollToEnd: store.scrollToEnd, flashScrollIndicators: store.flashScrollIndicators, scrollResponderZoomTo: store.scrollResponderZoomTo, scrollResponderScrollNativeHandleToKeyboard: store.scrollResponderScrollNativeHandleToKeyboard }));
      tmp2.scrollResponderKeyboardWillShow = (endCoordinates) => {
        store._keyboardMetrics = endCoordinates.endCoordinates;
        if (store.props.onKeyboardWillShow) {
          const props = store.props;
          props.onKeyboardWillShow(endCoordinates);
        }
      };
      tmp2.scrollResponderKeyboardWillHide = (arg0) => {
        store._keyboardMetrics = null;
        if (store.props.onKeyboardWillHide) {
          const props = store.props;
          props.onKeyboardWillHide(arg0);
        }
      };
      tmp2.scrollResponderKeyboardDidShow = (endCoordinates) => {
        store._keyboardMetrics = endCoordinates.endCoordinates;
        if (store.props.onKeyboardDidShow) {
          const props = store.props;
          props.onKeyboardDidShow(endCoordinates);
        }
      };
      tmp2.scrollResponderKeyboardDidHide = (arg0) => {
        store._keyboardMetrics = null;
        if (store.props.onKeyboardDidHide) {
          const props = store.props;
          props.onKeyboardDidHide(arg0);
        }
      };
      tmp2._handleMomentumScrollBegin = (arg0) => {
        const _performance = ScrollView.performance;
        store._lastMomentumScrollBeginTime = _performance.now();
        if (store.props.onMomentumScrollBegin) {
          const props = store.props;
          const result = props.onMomentumScrollBegin(arg0);
        }
      };
      tmp2._handleMomentumScrollEnd = (arg0) => {
        closure_2_10.default.endScroll();
        const _performance = ScrollView.performance;
        store._lastMomentumScrollEndTime = _performance.now();
        if (store.props.onMomentumScrollEnd) {
          const props = store.props;
          props.onMomentumScrollEnd(arg0);
        }
      };
      tmp2._handleScrollBeginDrag = (arg0) => {
        closure_2_10.default.beginScroll();
        if (closure_2_17.default.OS === "android") {
          if (store.props.keyboardDismissMode === "on-drag") {
            closure_2_16.default();
          }
        }
        if (store.props.onScrollBeginDrag) {
          const props = store.props;
          props.onScrollBeginDrag(arg0);
        }
      };
      tmp2._handleScrollEndDrag = (nativeEvent) => {
        const velocity = nativeEvent.nativeEvent.velocity;
        if (!store._isAnimating()) {
          if (!velocity) {
            closure_2_10.default.endScroll();
            const _default = closure_2_10.default;
          }
        }
        if (store.props.onScrollEndDrag) {
          const props = store.props;
          props.onScrollEndDrag(nativeEvent);
        }
      };
      tmp2._isAnimating = () => {
        const _performance = ScrollView.performance;
        let tmp = _performance.now() - store._lastMomentumScrollEndTime < 16;
        if (!tmp) {
          tmp = store._lastMomentumScrollEndTime < store._lastMomentumScrollBeginTime;
        }
        return tmp;
      };
      tmp2._handleResponderGrant = (arg0) => {
        store._observedScrollSinceBecomingResponder = false;
        if (store.props.onResponderGrant) {
          const props = store.props;
          props.onResponderGrant(arg0);
        }
        store._becameResponderWhileAnimating = store._isAnimating();
      };
      tmp2._handleResponderReject = () => {

      };
      tmp2._handleResponderRelease = (nativeEvent) => {
        store._isTouching = nativeEvent.nativeEvent.touches.length !== 0;
        if (store.props.onResponderRelease) {
          const props = store.props;
          props.onResponderRelease(nativeEvent);
        }
        if (typeof nativeEvent.target !== "number") {
          const result = closure_2_19.default.currentlyFocusedInput();
          if (result != null) {
            if (store.props.keyboardShouldPersistTaps !== true) {
              if (store.props.keyboardShouldPersistTaps !== "always") {
                if (store._keyboardIsDismissible()) {
                  if (nativeEvent.target !== result) {
                    if (!store._observedScrollSinceBecomingResponder) {
                      if (!store._becameResponderWhileAnimating) {
                        closure_2_19.default.blurTextInput(result);
                        const _default = closure_2_19.default;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      };
      tmp2._handleResponderTerminationRequest = () => !store._observedScrollSinceBecomingResponder;
      tmp2._handleScrollShouldSetResponder = () => {
        if (store.props.disableScrollViewPanResponder === true) {
          return false;
        } else {
          return store._isTouching;
        }
      };
      tmp2._handleStartShouldSetResponder = (target) => {
        if (store.props.disableScrollViewPanResponder === true) {
          return false;
        } else {
          if (store.props.keyboardShouldPersistTaps === "handled") {
            if (store._keyboardIsDismissible()) {
              if (target.target !== tmp2) {
                return true;
              }
            }
          }
          return false;
        }
      };
      tmp2._handleStartShouldSetResponderCapture = (target) => {
        if (store._isAnimating()) {
          return true;
        } else if (store.props.disableScrollViewPanResponder === true) {
          return false;
        } else {
          const keyboardShouldPersistTaps = store.props.keyboardShouldPersistTaps;
          let tmp2 = !keyboardShouldPersistTaps;
          if (!tmp2) {
            tmp2 = keyboardShouldPersistTaps === "never";
          }
          if (typeof target.target === "number") {
            return false;
          } else if (store._softKeyboardIsDetached()) {
            return false;
          } else {
            if (tmp2) {
              if (store._keyboardIsDismissible()) {
                if (target.target != null) {
                  if (!_default.isTextInput(target.target)) {
                    return true;
                  }
                  _default = closure_2_19.default;
                }
              }
            }
            return false;
          }
        }
      };
      tmp2._keyboardIsDismissible = () => {
        const result = closure_2_19.default.currentlyFocusedInput();
        let isTextInputResult = result != null;
        if (isTextInputResult) {
          isTextInputResult = closure_2_19.default.isTextInput(result);
          const _default2 = closure_2_19.default;
        }
        let result1 = store._keyboardMetrics != null;
        if (!result1) {
          result1 = store._keyboardEventsAreUnreliable();
        }
        if (isTextInputResult) {
          isTextInputResult = result1;
        }
        return isTextInputResult;
      };
      tmp2._softKeyboardIsDetached = () => {
        let tmp = store._keyboardMetrics != null;
        if (tmp) {
          tmp = store._keyboardMetrics.height === 0;
        }
        return tmp;
      };
      tmp2._keyboardEventsAreUnreliable = () => {
        let tmp = closure_2_17.default.OS === "android";
        if (tmp) {
          tmp = closure_2_17.default.Version < 30;
        }
        return tmp;
      };
      tmp2._handleTouchEnd = (nativeEvent) => {
        store._isTouching = nativeEvent.nativeEvent.touches.length !== 0;
        const keyboardShouldPersistTaps = store.props.keyboardShouldPersistTaps;
        let tmp = !keyboardShouldPersistTaps;
        if (!tmp) {
          tmp = keyboardShouldPersistTaps === "never";
        }
        const result = closure_2_19.default.currentlyFocusedInput();
        if (result != null) {
          if (nativeEvent.target !== result) {
            if (store._softKeyboardIsDetached()) {
              if (store._keyboardIsDismissible()) {
                if (tmp) {
                  closure_2_19.default.blurTextInput(result);
                  const _default2 = closure_2_19.default;
                }
              }
            }
          }
        }
        if (store.props.onTouchEnd) {
          const props = store.props;
          props.onTouchEnd(nativeEvent);
        }
      };
      tmp2._handleTouchCancel = (arg0) => {
        store._isTouching = false;
        if (store.props.onTouchCancel) {
          const props = store.props;
          props.onTouchCancel(arg0);
        }
      };
      tmp2._handleTouchStart = (arg0) => {
        store._isTouching = true;
        if (store.props.onTouchStart) {
          const props = store.props;
          props.onTouchStart(arg0);
        }
      };
      tmp2._handleTouchMove = (arg0) => {
        if (store.props.onTouchMove) {
          const props = store.props;
          props.onTouchMove(arg0);
        }
      };
      contentOffset = tmp2.props.contentOffset;
      y = undefined;
      if (contentOffset != null) {
        y = contentOffset.y;
      }
      num = 0;
      if (y != null) {
        num = y;
      }
      value = new closure_1_9.default.Value(num);
      tmp2._scrollAnimatedValue = value;
      _scrollAnimatedValue = tmp2._scrollAnimatedValue;
      contentInset = tmp2.props.contentInset;
      top = undefined;
      if (contentInset != null) {
        top = contentInset.top;
      }
      num2 = 0;
      if (top != null) {
        num2 = top;
      }
      setOffsetResult = _scrollAnimatedValue.setOffset(num2);
      return tmp2;
    }
  }
  closure_8.default(ScrollView, Component);
  let obj = {
    key: "componentDidMount",
    value: function componentDidMount() {
      const self = this;
      if (typeof this.props.keyboardShouldPersistTaps === "boolean") {
        let str = "false";
        if (self.props.keyboardShouldPersistTaps === true) {
          str = "true";
        }
        const _HermesInternal = HermesInternal;
        let str4 = "never";
        const combined = "'keyboardShouldPersistTaps={" + str + "}' is deprecated. ";
        if (self.props.keyboardShouldPersistTaps) {
          str4 = "always";
        }
        const _HermesInternal2 = HermesInternal;
        console.warn(combined + "Use 'keyboardShouldPersistTaps=\"" + str4 + "\"' instead");
      }
      self._keyboardMetrics = closure_1_18.default.metrics();
      self._additionalScrollOffset = 0;
      self._subscriptionKeyboardWillShow = closure_1_18.default.addListener("keyboardWillShow", self.scrollResponderKeyboardWillShow);
      self._subscriptionKeyboardWillHide = closure_1_18.default.addListener("keyboardWillHide", self.scrollResponderKeyboardWillHide);
      self._subscriptionKeyboardDidShow = closure_1_18.default.addListener("keyboardDidShow", self.scrollResponderKeyboardDidShow);
      self._subscriptionKeyboardDidHide = closure_1_18.default.addListener("keyboardDidHide", self.scrollResponderKeyboardDidHide);
      const result = self._updateAnimatedNodeAttachment();
    }
  };
  let items = [obj, , , , , , , , ];
  obj = {
    key: "componentDidUpdate",
    value: function componentDidUpdate(contentInset) {
      const self = this;
      let num = 0;
      if (contentInset.contentInset) {
        num = contentInset.contentInset.top;
      }
      let num2 = 0;
      if (self.props.contentInset) {
        num2 = self.props.contentInset.top;
      }
      if (num !== num2) {
        const _scrollAnimatedValue = self._scrollAnimatedValue;
        if (!num2) {
          num2 = 0;
        }
        _scrollAnimatedValue.setOffset(num2);
      }
      const result = self._updateAnimatedNodeAttachment();
    }
  };
  items[1] = obj;
  obj = {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      const self = this;
      if (this._subscriptionKeyboardWillShow != null) {
        const _subscriptionKeyboardWillShow = self._subscriptionKeyboardWillShow;
        _subscriptionKeyboardWillShow.remove();
      }
      if (self._subscriptionKeyboardWillHide != null) {
        const _subscriptionKeyboardWillHide = self._subscriptionKeyboardWillHide;
        _subscriptionKeyboardWillHide.remove();
      }
      if (self._subscriptionKeyboardDidShow != null) {
        const _subscriptionKeyboardDidShow = self._subscriptionKeyboardDidShow;
        _subscriptionKeyboardDidShow.remove();
      }
      if (self._subscriptionKeyboardDidHide != null) {
        const _subscriptionKeyboardDidHide = self._subscriptionKeyboardDidHide;
        _subscriptionKeyboardDidHide.remove();
      }
      if (self._scrollAnimatedValueAttachment) {
        const _scrollAnimatedValueAttachment = self._scrollAnimatedValueAttachment;
        _scrollAnimatedValueAttachment.detach();
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "_textInputFocusError",
    value: function _textInputFocusError() {
      console.warn("Error measuring text field.");
    }
  };
  items[4] = {
    key: "_getKeyForIndex",
    value: function _getKeyForIndex(closure_0, toArrayResult) {
      let key = tmp;
      if (toArrayResult[closure_0]) {
        key = tmp.key;
      }
      return key;
    }
  };
  items[5] = {
    key: "_updateAnimatedNodeAttachment",
    value: function _updateAnimatedNodeAttachment() {
      const self = this;
      if (this._scrollAnimatedValueAttachment) {
        const _scrollAnimatedValueAttachment = self._scrollAnimatedValueAttachment;
        _scrollAnimatedValueAttachment.detach();
      }
      if (self.props.stickyHeaderIndices) {
        if (self.props.stickyHeaderIndices.length > 0) {
          let obj = {};
          obj = {};
          obj = { y: self._scrollAnimatedValue };
          obj.contentOffset = obj;
          obj.nativeEvent = obj;
          const items = [obj];
          self._scrollAnimatedValueAttachment = closure_1_9.default.attachNativeEvent(self.getNativeScrollRef(), "onScroll", items);
          const _default = closure_1_9.default;
        }
      }
    }
  };
  items[6] = {
    key: "_setStickyHeaderRef",
    value: function _setStickyHeaderRef(key, arg1) {
      const _stickyHeaderRefs = this._stickyHeaderRefs;
      if (arg1) {
        const result = _stickyHeaderRefs.set(key, arg1);
      } else {
        _stickyHeaderRefs.delete(key);
      }
    }
  };
  items[7] = {
    key: "_onStickyHeaderLayout",
    value: function _onStickyHeaderLayout(closure_0, nativeEvent, key) {
      const self = this;
      const stickyHeaderIndices = this.props.stickyHeaderIndices;
      if (stickyHeaderIndices) {
        const Children = closure_1_27.Children;
        const toArrayResult = Children.toArray(self.props.children);
        if (key === self._getKeyForIndex(closure_0, toArrayResult)) {
          const y = nativeEvent.nativeEvent.layout.y;
          const _headerLayoutYs = self._headerLayoutYs;
          const result = _headerLayoutYs.set(key, y);
          const tmp6 = stickyHeaderIndices[stickyHeaderIndices.indexOf(stickyHeaderIndices, closure_0) - 1];
          if (tmp6 != null) {
            const _stickyHeaderRefs = self._stickyHeaderRefs;
            const value = _stickyHeaderRefs.get(self._getKeyForIndex(tmp6, toArrayResult));
            let setNextHeaderY = value;
            if (value) {
              setNextHeaderY = value.setNextHeaderY;
            }
            if (setNextHeaderY) {
              value.setNextHeaderY(y);
            }
          }
        }
      }
    }
  };
  items[8] = {
    key: "render",
    value: function render() {
      let self = this;
      self = this;
      if (this.props.horizontal === true) {
        let VScrollViewNativeComponent = tmp2(tmp3[28]).HScrollViewNativeComponent;
      } else {
        VScrollViewNativeComponent = tmp2(tmp3[29]).VScrollViewNativeComponent;
      }
      if (this.props.horizontal === true) {
        let VScrollContentViewNativeComponent = tmp4(tmp5[28]).HScrollContentViewNativeComponent;
      } else {
        VScrollContentViewNativeComponent = tmp4(tmp5[29]).VScrollContentViewNativeComponent;
      }
      let contentContainerHorizontal = tmp;
      if (this.props.horizontal === true) {
        contentContainerHorizontal = closure_1_31.contentContainerHorizontal;
      }
      const items = [contentContainerHorizontal, self.props.contentContainerStyle];
      let tmp7 = null;
      if (self.props.onContentSizeChange != null) {
        let obj = { onLayout: self._handleContentOnLayout };
        tmp7 = obj;
      }
      const stickyHeaderIndices = self.props.stickyHeaderIndices;
      let children = self.props.children;
      let mapped = children;
      const Children = closure_1_27.Children;
      const toArrayResult = Children.toArray(children);
      mapped = toArrayResult;
      let tmp8 = toArrayResult;
      if (stickyHeaderIndices != null) {
        tmp8 = toArrayResult;
        if (stickyHeaderIndices.length > 0) {
          mapped = toArrayResult.map((key) => {
            const _self = arg1;
            let num = -1;
            if (key) {
              num = key.indexOf(arg1);
            }
            if (num > -1) {
              key = key.key;
              let _default = _self.props.StickyHeaderComponent;
              if (!_default) {
                _default = closure_2_23.default;
              }
              const obj = {
                ref(arg0) {
                    return closure_0._setStickyHeaderRef(key, arg0);
                  }
              };
              const _headerLayoutYs = _self._headerLayoutYs;
              obj.nextHeaderLayoutY = _headerLayoutYs.get(_self._getKeyForIndex(key[num + 1], mapped));
              obj.onLayout = function onLayout(nativeEvent) {
                return closure_0._onStickyHeaderLayout(closure_0, nativeEvent, key);
              };
              obj.scrollAnimatedValue = _self._scrollAnimatedValue;
              obj.inverted = _self.props.invertStickyHeaders;
              obj.hiddenOnScroll = _self.props.stickyHeaderHiddenOnScroll;
              obj.scrollViewHeight = _self.state.layoutHeight;
              obj.children = key;
              return <_default key={key} ref={function ref(arg0) {
                return closure_0._setStickyHeaderRef(key, arg0);
              }} />;
            } else {
              return key;
            }
          });
          tmp8 = mapped;
        }
      }
      obj = { value: tmp ? tmp10.HORIZONTAL : tmp10.VERTICAL, children: tmp8 };
      const jsxResult = closure_1_28.jsx(closure_1_22.default.Provider, { value: tmp ? tmp10.HORIZONTAL : tmp10.VERTICAL, children: tmp8 });
      mapped = jsxResult;
      let isArray = Array.isArray(stickyHeaderIndices);
      if (isArray) {
        isArray = stickyHeaderIndices.length > 0;
      }
      let tmp13 = self.props.maintainVisibleContentPosition != null;
      if (!tmp13) {
        tmp13 = closure_1_17.default.OS === "android" && self.props.snapToAlignment != null;
        const tmp15 = closure_1_17.default.OS === "android" && self.props.snapToAlignment != null;
      }
      obj = { ref: _innerView.getForwardingRef(self.props.innerViewRef), style: items };
      _innerView = self._innerView;
      if (closure_1_17.default.OS !== "android") {
        let flag = self.props.removeClippedSubviews;
      } else {
        flag = false;
      }
      obj.removeClippedSubviews = flag;
      obj.collapsable = false;
      obj.collapsableChildren = !tmp13;
      obj.children = jsxResult;
      children = <VScrollContentViewNativeComponent {...Object.assign({}, tmp7, obj)} />;
      if (self.props.alwaysBounceHorizontal !== undefined) {
        let horizontal = self.props.alwaysBounceHorizontal;
      } else {
        horizontal = self.props.horizontal;
      }
      if (self.props.alwaysBounceVertical !== undefined) {
        let alwaysBounceVertical = self.props.alwaysBounceVertical;
      } else {
        alwaysBounceVertical = !self.props.horizontal;
      }
      const tmp18 = this.props.horizontal === true ? closure_1_31.baseHorizontal : closure_1_31.baseVertical;
      const props = self.props;
      const obj1 = { alwaysBounceHorizontal: horizontal, alwaysBounceVertical, style: closure_1_14.default.compose(tmp18, self.props.style), onContentSizeChange: null };
      ({ _handleLayout: obj4.onLayout, _handleMomentumScrollBegin: obj4.onMomentumScrollBegin, _handleMomentumScrollEnd: obj4.onMomentumScrollEnd, _handleResponderGrant: obj4.onResponderGrant, _handleResponderReject: obj4.onResponderReject, _handleResponderRelease: obj4.onResponderRelease, _handleResponderTerminationRequest: obj4.onResponderTerminationRequest, _handleScrollBeginDrag: obj4.onScrollBeginDrag, _handleScrollEndDrag: obj4.onScrollEndDrag, _handleScrollShouldSetResponder: obj4.onScrollShouldSetResponder, _handleStartShouldSetResponder: obj4.onStartShouldSetResponder, _handleStartShouldSetResponderCapture: obj4.onStartShouldSetResponderCapture, _handleTouchEnd: obj4.onTouchEnd, _handleTouchMove: obj4.onTouchMove, _handleTouchStart: obj4.onTouchStart, _handleTouchCancel: obj4.onTouchCancel, _handleScroll: obj4.onScroll } = self);
      obj1.endDraggingSensitivityMultiplier = props.experimental_endDraggingSensitivityMultiplier;
      let num7 = 1;
      if (!isArray) {
        num7 = self.props.scrollEventThrottle;
      }
      obj1.scrollEventThrottle = num7;
      if (self.props.onMomentumScrollBegin) {
        let flag2 = true;
      } else {
        flag2 = false;
      }
      obj1.sendMomentumEvents = flag2;
      obj1.snapToStart = self.props.snapToStart !== false;
      obj1.snapToEnd = self.props.snapToEnd !== false;
      const obj2 = {};
      let tmp20 = self.props.pagingEnabled === true;
      if (tmp20) {
        tmp20 = self.props.snapToInterval == null;
      }
      if (tmp20) {
        tmp20 = self.props.snapToOffsets == null;
      }
      obj2.ios = tmp20;
      obj2.android = self.props.pagingEnabled === true || self.props.snapToInterval != null || self.props.snapToOffsets != null;
      obj1.pagingEnabled = closure_1_17.default.select(obj2);
      const merged = Object.assign({}, closure_1_3.default(props, closure_1_29), obj1);
      const decelerationRate = self.props.decelerationRate;
      if (decelerationRate != null) {
        merged.decelerationRate = closure_1_20.default(decelerationRate);
      }
      const refreshControl = self.props.refreshControl;
      const _scrollView = self._scrollView;
      const ref = _scrollView.getForwardingRef(self.props.scrollViewRef);
      if (refreshControl != null) {
        if (closure_1_17.default.OS === "ios") {
          const _Object2 = Object;
          const obj3 = { ref };
          const items1 = [refreshControl, children];
          obj3.children = items1;
          return <VScrollViewNativeComponent {...Object.assign({}, merged, obj3)} />;
        } else if (closure_1_17.default.OS === "android") {
          const defaultResult1 = closure_1_13.default(closure_1_12.default(merged.style));
          const obj4 = { style: closure_1_14.default.compose(tmp18, defaultResult1.outer) };
          const _Object = Object;
          const obj5 = { style: closure_1_14.default.compose(tmp18, defaultResult1.inner), ref, children };
          return closure_1_27.cloneElement(refreshControl, obj4, <VScrollViewNativeComponent {...Object.assign({}, merged, obj5)} />);
        }
      }
      return <VScrollViewNativeComponent {...Object.assign({}, merged, { ref, children })} />;
    }
  };
  return closure_5.default(ScrollView, items);
})(getIteratorFn.Component);
let closure_30 = tmp5;
tmp5.Context = HORIZONTAL.default;
let closure_31 = setStyleAttributePreprocessor.default.create({ baseVertical: { flexGrow: 1, flexShrink: 1, flexDirection: "column", overflow: "scroll" }, baseHorizontal: { flexGrow: 1, flexShrink: 1, flexDirection: "row", overflow: "scroll" }, contentContainerHorizontal: { flexDirection: "row" } });
const forwardRefResult = getIteratorFn.forwardRef(function Wrapper(arg0, scrollViewRef) {
  if (scrollViewRef == null) {
    const _Object2 = Object;
    let jsxResult = <closure_30 {...Object.assign({}, arg0)} />;
  } else {
    const _Object = Object;
    const obj = { scrollViewRef };
    jsxResult = <closure_30 {...Object.assign({}, arg0, obj)} />;
  }
  return jsxResult;
});
forwardRefResult.displayName = "ScrollView";
forwardRefResult.Context = HORIZONTAL.default;

export default forwardRefResult;
