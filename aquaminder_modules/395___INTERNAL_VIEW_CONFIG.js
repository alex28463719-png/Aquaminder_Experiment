// Module ID: 395
// Function ID: 4773
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [1, 86, 33, 103, 89, 104, 124]

// Module 395 (__INTERNAL_VIEW_CONFIG)
import get_Version from "get Version" /* 33 */;
import get2 from "get" /* 86 */;
import processColor from "processColor" /* 89 */;
import pointsDiffer from "pointsDiffer" /* 103 */;
import insetsDiffer from "insetsDiffer" /* 104 */;
import ConditionallyIgnoredEventHandlers from "ConditionallyIgnoredEventHandlers" /* 124 */;
import module_1 from "module_1" /* 1 */;

let get = _interopRequireWildcard(get2);
if (module_1(get_Version).default.OS === "android") {
  get = { uiViewClassName: "RCTScrollView", bubblingEventTypes: {} };
  get = {};
  const obj1 = { registrationName: "onMomentumScrollBegin" };
  get.topMomentumScrollBegin = obj1;
  const obj2 = { registrationName: "onMomentumScrollEnd" };
  get.topMomentumScrollEnd = obj2;
  const obj3 = { registrationName: "onScroll" };
  get.topScroll = obj3;
  const obj4 = { registrationName: "onScrollBeginDrag" };
  get.topScrollBeginDrag = obj4;
  const obj5 = { registrationName: "onScrollEndDrag" };
  get.topScrollEndDrag = obj5;
  get.directEventTypes = get;
  const obj6 = { contentOffset: null, decelerationRate: true, disableIntervalMomentum: true, maintainVisibleContentPosition: true, pagingEnabled: true, scrollEnabled: true, showsVerticalScrollIndicator: true, snapToAlignment: true, snapToEnd: true, snapToInterval: true, snapToOffsets: true, snapToStart: true, borderBottomLeftRadius: true, borderBottomRightRadius: true, sendMomentumEvents: true, borderRadius: true, nestedScrollEnabled: true, scrollEventThrottle: true, borderStyle: true };
  const obj7 = { diff: pointsDiffer.default };
  obj6.contentOffset = obj7;
  const obj8 = { process: processColor.default };
  obj6.borderRightColor = obj8;
  const obj9 = { process: processColor.default };
  obj6.borderColor = obj9;
  const obj10 = { process: processColor.default };
  obj6.borderBottomColor = obj10;
  obj6.persistentScrollbar = true;
  obj6.horizontal = true;
  const obj11 = { process: processColor.default };
  obj6.endFillColor = obj11;
  obj6.fadingEdgeLength = true;
  obj6.overScrollMode = true;
  obj6.borderTopLeftRadius = true;
  obj6.scrollPerfTag = true;
  const obj12 = { process: processColor.default };
  obj6.borderTopColor = obj12;
  obj6.removeClippedSubviews = true;
  obj6.borderTopRightRadius = true;
  const obj13 = { process: processColor.default };
  obj6.borderLeftColor = obj13;
  obj6.pointerEvents = true;
  obj6.isInvertedVirtualizedList = true;
  get.validAttributes = obj6;
  let obj14 = get;
} else {
  obj14 = { uiViewClassName: "RCTScrollView", bubblingEventTypes: {} };
  const obj15 = {};
  const obj16 = { registrationName: "onMomentumScrollBegin" };
  obj15.topMomentumScrollBegin = obj16;
  const obj17 = { registrationName: "onMomentumScrollEnd" };
  obj15.topMomentumScrollEnd = obj17;
  const obj18 = { registrationName: "onScroll" };
  obj15.topScroll = obj18;
  const obj19 = { registrationName: "onScrollBeginDrag" };
  obj15.topScrollBeginDrag = obj19;
  const obj20 = { registrationName: "onScrollEndDrag" };
  obj15.topScrollEndDrag = obj20;
  const obj21 = { registrationName: "onScrollToTop" };
  obj15.topScrollToTop = obj21;
  obj14.directEventTypes = obj15;
  let _Object = Object;
  const obj22 = { alwaysBounceHorizontal: true, alwaysBounceVertical: true, automaticallyAdjustContentInsets: true, automaticallyAdjustKeyboardInsets: true, automaticallyAdjustsScrollIndicatorInsets: true, bounces: true, bouncesZoom: true, canCancelContentTouches: true, centerContent: true, contentInset: null, contentOffset: null, contentInsetAdjustmentBehavior: true, decelerationRate: true, endDraggingSensitivityMultiplier: true, directionalLockEnabled: true, disableIntervalMomentum: true, indicatorStyle: true, inverted: true, keyboardDismissMode: true, maintainVisibleContentPosition: true, maximumZoomScale: true, minimumZoomScale: true, pagingEnabled: true, pinchGestureEnabled: true, scrollEnabled: true, scrollEventThrottle: true, scrollIndicatorInsets: null, scrollToOverflowEnabled: true, scrollsToTop: true, showsHorizontalScrollIndicator: true, showsVerticalScrollIndicator: true, snapToAlignment: true, snapToEnd: true, snapToInterval: true, snapToOffsets: true, snapToStart: true };
  const obj23 = { diff: insetsDiffer.default };
  obj22.contentInset = obj23;
  const obj24 = { diff: pointsDiffer.default };
  obj22.contentOffset = obj24;
  const obj25 = { diff: insetsDiffer.default };
  obj22.scrollIndicatorInsets = obj25;
  const obj26 = { diff: insetsDiffer.default };
  obj22.verticalScrollIndicatorInsets = obj26;
  obj22.zoomScale = true;
  obj14.validAttributes = Object.assign(obj22, ConditionallyIgnoredEventHandlers.ConditionallyIgnoredEventHandlers({ onScrollBeginDrag: true, onMomentumScrollEnd: true, onScrollEndDrag: true, onMomentumScrollBegin: true, onScrollToTop: true, onScroll: true }));
}

export const __INTERNAL_VIEW_CONFIG = obj14;
export default get.get("RCTScrollView", () => obj14);
