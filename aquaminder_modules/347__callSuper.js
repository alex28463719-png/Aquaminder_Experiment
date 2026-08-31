// Module ID: 347
// Function ID: 4250
// Name: _callSuper
// Dependencies: [1, 6, 99, 203, 12, 13, 23, 25, 28, 348, 349, 350, 351, 352, 353, 354, 355, 20, 45, 119, 2, 251, 357, 346, 356, 358]

// Module 347 (_callSuper)
import _toConsumableArray from "_toConsumableArray" /* 6 */;
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import invariant from "invariant" /* 20 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _inherits from "_inherits" /* 28 */;
import nullthrows from "nullthrows" /* 45 */;
import _defineProperty from "_defineProperty" /* 99 */;
import getIteratorFn from "getIteratorFn" /* 119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import clamp from "clamp" /* 348 */;
import infoLog from "infoLog" /* 349 */;
import ChildListCollection from "ChildListCollection" /* 350 */;
import Info from "Info" /* 351 */;
import ListMetricsAggregator from "ListMetricsAggregator" /* 352 */;
import _callSuper2 from "_callSuper" /* 353 */;
import _isViewable from "_isViewable" /* 354 */;
import _callSuper3 from "_callSuper" /* 355 */;
import VirtualizedListCellContextProvider from "VirtualizedListCellContextProvider" /* 356 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_21 from "jsxProd" /* 251 */;

function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const defaultResult = closure_8.default(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(defaultResult, items, closure_8.default(arg0).constructor);
  } else {
    constructResult = defaultResult.apply(arg0, items);
  }
  return closure_7.default(arg0, constructResult);
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
function getScrollingThreshold(arg0, arg1) {
  return arg0 * arg1 / 2;
}
let closure_2 = module_1(_toConsumableArray);
let closure_3 = module_1(_defineProperty);
let closure_4 = module_1(_objectWithoutProperties);
let closure_5 = module_1(_classCallCheck);
let closure_6 = module_1(_defineProperties);
let closure_7 = module_1(_possibleConstructorReturn);
let closure_8 = module_1(_getPrototypeOf);
let closure_9 = module_1(_inherits);
let closure_10 = module_1(clamp);
let closure_11 = module_1(infoLog);
let closure_12 = module_1(ChildListCollection);
let closure_13 = module_1(Info);
let closure_14 = module_1(ListMetricsAggregator);
_callSuper = module_1(_callSuper2);
let closure_15 = module_1(_isViewable);
let closure_16 = module_1(_callSuper3);
let closure_17 = module_1(invariant);
let closure_18 = module_1(nullthrows);
let closure_19 = _interopRequireWildcard(getIteratorFn);
let closure_22 = ["onContentSizeChange"];
let c23 = false;
let c24 = "";
let tmp5 = ((arg0) => {
  class VirtualizedList {
    constructor(arg0) {
      defaultResult = closure_1_5.default(this, closure_0);
      items = [];
      items[0] = arg0;
      obj = closure_1_27(this, closure_0, items);
      closure_0 = obj;
      obj._getScrollMetrics = () => obj._scrollMetrics;
      obj._getOutermostParentListRef = () => {
        if (obj._isNestedWithSameOrientation()) {
          const context = tmp.context;
          return context.getOutermostParentListRef();
        } else {
          return tmp;
        }
      };
      obj._registerAsNestedChild = (ref) => {
        const _nestedChildLists = obj._nestedChildLists;
        _nestedChildLists.add(ref.ref, ref.cellKey);
        if (obj._hasInteracted) {
          ref.ref.recordInteraction();
          ref = ref.ref;
        }
      };
      obj._unregisterAsNestedChild = (ref) => {
        const _nestedChildLists = obj._nestedChildLists;
        _nestedChildLists.remove(ref.ref);
      };
      obj._onUpdateSeparators = (arr) => {
        closure_0 = arg1;
        const item = arr.forEach((arg0) => {
          obj = arg0 != null;
          if (obj) {
            obj = _cellRefs._cellRefs[arg0];
          }
          if (obj) {
            obj.updateSeparatorProps(_cellRefs);
          }
        });
      };
      obj._getSpacerKey = (arg0) => {
        let str = "width";
        if (arg0) {
          str = "height";
        }
        return str;
      };
      obj._cellRefs = {};
      _default = new closure_1_14.default();
      obj._listMetrics = _default;
      obj._footerLength = 0;
      obj._hasTriggeredInitialScrollToIndex = false;
      obj._hasInteracted = false;
      obj._hasMore = false;
      obj._hasWarned = {};
      obj._headerLength = 0;
      obj._hiPriInProgress = false;
      map = new Map();
      obj._indicesToKeys = map;
      obj._lastFocusedCellKey = null;
      _default1 = new closure_1_12.default();
      obj._nestedChildLists = _default1;
      obj._offsetFromParentVirtualizedList = 0;
      obj._pendingViewabilityUpdate = false;
      obj._prevParentOffset = 0;
      obj._scrollMetrics = { dOffset: 0, dt: 10, offset: 0, timestamp: 0, velocity: 0, visibleLength: 0, zoomScale: 1 };
      obj._scrollRef = null;
      obj._sentStartForContentLength = 0;
      obj._sentEndForContentLength = 0;
      obj._updateCellsToRenderTimeoutID = null;
      obj._viewabilityTuples = [];
      obj._captureScrollRef = (_scrollRef) => {
        obj._scrollRef = _scrollRef;
      };
      obj._defaultRenderScrollComponent = (onRefresh) => {
        onRefresh = onRefresh.onRefresh;
        if (obj._isNestedWithSameOrientation()) {
          const onContentSizeChange = onRefresh.onContentSizeChange;
          const _Object2 = Object;
          return <closure_2_20.View {...Object.assign({}, closure_2_4.default(arg0, closure_2_22))} />;
        } else if (onRefresh) {
          const refreshing = onRefresh.refreshing;
          let str = "undefined";
          if (refreshing != null) {
            str = refreshing;
          }
          closure_2_17.default(typeof onRefresh.refreshing === "boolean", `\`refreshing\` prop must be set as a boolean in order to use \`onRefresh\`, but got \`${tmp7(str)}\``);
          obj = {};
          if (onRefresh.refreshControl == null) {
            obj = { refreshing: onRefresh.refreshing, onRefresh, progressViewOffset: onRefresh.progressViewOffset };
            let refreshControl = <closure_2_20.RefreshControl refreshing={arg0.refreshing} onRefresh={onRefresh} progressViewOffset={arg0.progressViewOffset} />;
          } else {
            refreshControl = onRefresh.refreshControl;
          }
          obj.refreshControl = refreshControl;
          return <closure_2_20.ScrollView {...Object.assign({}, arg0, obj)} />;
        } else {
          const _Object = Object;
          return <closure_2_20.ScrollView {...Object.assign({}, arg0)} />;
        }
      };
      obj._onCellLayout = (layout, cellKey, cellIndex) => {
        const _listMetrics = obj._listMetrics;
        obj = { cellIndex, cellKey, layout: layout.nativeEvent.layout, orientation: obj._orientation() };
        if (_listMetrics.notifyCellLayout(obj)) {
          const result = obj._scheduleCellsToRenderUpdate();
        }
        const result1 = obj._triggerRemeasureForChildListsInCell(cellKey);
        obj._computeBlankness();
        obj._updateViewableItems(obj.props, obj.state.cellsAroundViewport);
      };
      obj._onCellFocusCapture = (_lastFocusedCellKey) => {
        obj._lastFocusedCellKey = _lastFocusedCellKey;
        obj._updateCellsToRender();
      };
      obj._onCellUnmount = (arg0) => {
        delete tmp[tmp2];
        const _listMetrics = obj._listMetrics;
        _listMetrics.notifyCellUnmounted(arg0);
      };
      obj._onLayout = (nativeEvent) => {
        if (obj._isNestedWithSameOrientation()) {
          const result = obj.measureLayoutRelativeToContainingList();
        } else {
          obj._scrollMetrics.visibleLength = obj._selectLength(nativeEvent.nativeEvent.layout);
        }
        if (obj.props.onLayout) {
          const props = obj.props;
          props.onLayout(nativeEvent);
        }
        const result1 = obj._scheduleCellsToRenderUpdate();
        const result2 = obj._maybeCallOnEdgeReached();
      };
      obj._onLayoutEmpty = (arg0) => {
        if (obj.props.onLayout) {
          const props = obj.props;
          props.onLayout(arg0);
        }
      };
      obj._onLayoutFooter = (nativeEvent) => {
        const result = obj._triggerRemeasureForChildListsInCell(obj._getFooterCellKey());
        obj._footerLength = obj._selectLength(nativeEvent.nativeEvent.layout);
      };
      obj._onLayoutHeader = (nativeEvent) => {
        obj._headerLength = obj._selectLength(nativeEvent.nativeEvent.layout);
      };
      obj._onContentSizeChange = (width, height) => {
        const _listMetrics = obj._listMetrics;
        obj = { layout: obj, orientation: obj._orientation() };
        obj = { width, height };
        const result = _listMetrics.notifyListContentLayout(obj);
        const result1 = obj._maybeScrollToInitialScrollIndex(width, height);
        if (obj.props.onContentSizeChange) {
          const props = obj.props;
          props.onContentSizeChange(width, height);
        }
        const result2 = obj._scheduleCellsToRenderUpdate();
        const result3 = obj._maybeCallOnEdgeReached();
      };
      obj._convertParentScrollMetrics = (offset) => {
        const diff = offset.offset - obj._offsetFromParentVirtualizedList;
        const _listMetrics = obj._listMetrics;
        const diff1 = diff - obj._scrollMetrics.offset;
        obj = { visibleLength: offset.visibleLength, contentLength: _listMetrics.getContentLength(), offset: diff, dOffset: diff1 };
        return obj;
      };
      obj._onScroll = (timeStamp) => {
        obj = timeStamp;
        const _nestedChildLists = obj._nestedChildLists;
        const item = _nestedChildLists.forEach((_onScroll) => {
          _onScroll._onScroll(closure_0);
        });
        if (obj.props.onScroll) {
          const props = obj.props;
          props.onScroll(timeStamp);
        }
        timeStamp = timeStamp.timeStamp;
        const _selectLengthResult = obj._selectLength(timeStamp.nativeEvent.layoutMeasurement);
        const result = obj._offsetFromScrollEvent(timeStamp);
        dOffset = result - obj._scrollMetrics.offset;
        visibleLength = _selectLengthResult;
        contentLength = obj._selectLength(timeStamp.nativeEvent.contentSize);
        offset = result;
        if (obj._isNestedWithSameOrientation()) {
          const _listMetrics = obj._listMetrics;
          if (_listMetrics.getContentLength() !== 0) {
            obj = { visibleLength: _selectLengthResult, offset: result };
            const result1 = obj._convertParentScrollMetrics(obj);
            ({ visibleLength, contentLength, offset, dOffset } = result1);
          }
        }
        let num2 = 1;
        let num3 = 1;
        if (obj._scrollMetrics.timestamp) {
          const _Math = Math;
          num3 = Math.max(num2, timeStamp - obj._scrollMetrics.timestamp);
        }
        const result2 = dOffset / num3;
        if (num3 > 500) {
          if (obj._scrollMetrics.dt > 500) {
            if (contentLength > 5 * visibleLength) {
              if (!obj._hasWarned.perf) {
                obj = { dt: num3 };
                obj.prevDt = obj._scrollMetrics.dt;
                obj.contentLength = contentLength;
                closure_2_11.default("VirtualizedList: You have a large list that is slow to update - make sure your renderItem function renders components that follow React performance best practices like PureComponent, shouldComponentUpdate, etc.", obj);
                obj._hasWarned.perf = true;
              }
            }
          }
        }
        if (timeStamp.nativeEvent.zoomScale >= 0) {
          num2 = timeStamp.nativeEvent.zoomScale;
        }
        obj = { dt: num3, dOffset, offset, timestamp: timeStamp, velocity: result2, visibleLength, zoomScale: num2 };
        obj._scrollMetrics = obj;
        if (obj.state.pendingScrollUpdateCount > 0) {
          obj.setState((pendingScrollUpdateCount) => ({ pendingScrollUpdateCount: pendingScrollUpdateCount.pendingScrollUpdateCount - 1 }));
        }
        obj._updateViewableItems(obj.props, obj.state.cellsAroundViewport);
        if (obj.props) {
          const result3 = obj._maybeCallOnEdgeReached();
          if (result2 !== 0) {
            const _fillRateHelper = obj._fillRateHelper;
            _fillRateHelper.activate();
          }
          obj._computeBlankness();
          const result4 = obj._scheduleCellsToRenderUpdate();
        }
        const _selectLengthResult1 = obj._selectLength(timeStamp.nativeEvent.contentSize);
      };
      obj._onScrollBeginDrag = (arg0) => {
        const _nestedChildLists = obj._nestedChildLists;
        const item = _nestedChildLists.forEach((_onScrollBeginDrag) => {
          _onScrollBeginDrag._onScrollBeginDrag(closure_0);
        });
        const _viewabilityTuples = obj._viewabilityTuples;
        const item1 = _viewabilityTuples.forEach((viewabilityHelper) => {
          viewabilityHelper = viewabilityHelper.viewabilityHelper;
          viewabilityHelper.recordInteraction();
        });
        arg0._hasInteracted = true;
        if (arg0.props.onScrollBeginDrag) {
          const props = obj.props;
          props.onScrollBeginDrag(arg0);
        }
      };
      obj._onScrollEndDrag = (nativeEvent) => {
        const _nestedChildLists = obj._nestedChildLists;
        const item = _nestedChildLists.forEach((_onScrollEndDrag) => {
          _onScrollEndDrag._onScrollEndDrag(closure_0);
        });
        const velocity = nativeEvent.nativeEvent.velocity;
        if (velocity) {
          obj._scrollMetrics.velocity = obj._selectOffset(velocity);
        }
        nativeEvent._computeBlankness();
        if (nativeEvent.props.onScrollEndDrag) {
          const props = obj.props;
          props.onScrollEndDrag(nativeEvent);
        }
      };
      obj._onMomentumScrollBegin = (arg0) => {
        const _nestedChildLists = obj._nestedChildLists;
        const item = _nestedChildLists.forEach((_onMomentumScrollBegin) => {
          const result = _onMomentumScrollBegin._onMomentumScrollBegin(closure_0);
        });
        if (arg0.props.onMomentumScrollBegin) {
          const props = obj.props;
          let result = props.onMomentumScrollBegin(arg0);
        }
      };
      obj._onMomentumScrollEnd = (arg0) => {
        const _nestedChildLists = obj._nestedChildLists;
        const item = _nestedChildLists.forEach((_onMomentumScrollEnd) => {
          _onMomentumScrollEnd._onMomentumScrollEnd(closure_0);
        });
        arg0._scrollMetrics.velocity = 0;
        arg0._computeBlankness();
        if (arg0.props.onMomentumScrollEnd) {
          const props = obj.props;
          props.onMomentumScrollEnd(arg0);
        }
      };
      obj._updateCellsToRender = () => {
        obj._updateViewableItems(obj.props, obj.state.cellsAroundViewport);
        obj.setState((cellsAroundViewport, getItemCount) => {
          cellsAroundViewport = closure_1_0._adjustCellsAroundViewport(getItemCount, cellsAroundViewport.cellsAroundViewport, cellsAroundViewport.pendingScrollUpdateCount);
          const renderMask = obj._createRenderMask(getItemCount, cellsAroundViewport, closure_1_0._getNonViewportRenderRegions(getItemCount));
          if (cellsAroundViewport.first === cellsAroundViewport.cellsAroundViewport.first) {
            if (cellsAroundViewport.last === cellsAroundViewport.cellsAroundViewport.last) {
              if (renderMask.equals(cellsAroundViewport.renderMask)) {
                return null;
              }
            }
          }
          return { cellsAroundViewport, renderMask };
        });
      };
      obj._createViewToken = (index, isViewable, getItem) => {
        const value = getItem.getItem(getItem.data, index);
        obj = { index, item: value, key: obj._keyExtractor(value, index, getItem), isViewable };
        return obj;
      };
      obj._getNonViewportRenderRegions = (getItemCount) => {
        if (obj._lastFocusedCellKey) {
          if (obj._cellRefs[obj._lastFocusedCellKey]) {
            const index = obj._cellRefs[obj._lastFocusedCellKey].props.index;
            const itemCount = getItemCount.getItemCount(getItemCount.data);
            if (index < itemCount) {
              if (obj._getItemKey(getItemCount, index) === obj._lastFocusedCellKey) {
                let diff = index - 1;
                let tmp6 = index;
                if (diff >= 0) {
                  let tmp5 = index;
                  let num = 0;
                  tmp6 = index;
                  if (0 < obj._scrollMetrics.visibleLength) {
                    const diff1 = tmp5 - 1;
                    const _listMetrics = obj._listMetrics;
                    const sum = num + _listMetrics.getCellMetricsApprox(diff, getItemCount).length;
                    const diff2 = diff - 1;
                    tmp6 = diff1;
                    while (diff2 >= 0) {
                      let tmp11 = obj;
                      tmp5 = diff1;
                      diff = diff2;
                      tmp6 = diff1;
                      num = sum;
                      if (sum >= obj._scrollMetrics.visibleLength) {
                        break;
                      }
                    }
                  }
                }
                let sum1 = index + 1;
                let tmp14 = index;
                if (sum1 < itemCount) {
                  let tmp16 = index;
                  let num2 = 0;
                  tmp14 = index;
                  if (0 < obj._scrollMetrics.visibleLength) {
                    const sum2 = tmp16 + 1;
                    const _listMetrics2 = obj._listMetrics;
                    const sum3 = num2 + _listMetrics2.getCellMetricsApprox(sum1, getItemCount).length;
                    const sum4 = sum1 + 1;
                    tmp14 = sum2;
                    while (sum4 < itemCount) {
                      let tmp21 = obj;
                      tmp16 = sum2;
                      sum1 = sum4;
                      tmp14 = sum2;
                      num2 = sum3;
                      if (sum3 >= obj._scrollMetrics.visibleLength) {
                        break;
                      }
                    }
                  }
                }
                obj = { first: tmp6, last: tmp14 };
                const items = [obj];
                return items;
              }
            }
            return [];
          }
        }
        return [];
      };
      _checkPropsResult = obj._checkProps(arg0);
      _default2 = new closure_1_13.default(obj._listMetrics);
      obj._fillRateHelper = _default2;
      props = obj.props;
      if (obj.props.viewabilityConfigCallbackPairs) {
        prop = props.viewabilityConfigCallbackPairs;
        obj._viewabilityTuples = prop.map((viewabilityConfig) => {
          obj = { viewabilityHelper: new closure_2_15.default(viewabilityConfig.viewabilityConfig), onViewableItemsChanged: viewabilityConfig.onViewableItemsChanged };
          return obj;
        });
      } else {
        ({ onViewableItemsChanged, viewabilityConfig } = props);
        if (onViewableItemsChanged) {
          _viewabilityTuples = obj._viewabilityTuples;
          obj = {};
          tmp7 = closure_1_15;
          _default = closure_1_15.default;
          prototype = _default.prototype;
          tmp8 = new.target;
          tmp9 = new.target;
          tmp10 = viewabilityConfig;
          _default3 = new _default(viewabilityConfig);
          tmp12 = _default3;
          obj.viewabilityHelper = _default3;
          obj.onViewableItemsChanged = onViewableItemsChanged;
          arr = _viewabilityTuples.push(obj);
        }
      }
      _initialRenderRegionResult = closure_0._initialRenderRegion(arg0);
      maintainVisibleContentPosition = obj.props.maintainVisibleContentPosition;
      minIndexForVisible = undefined;
      if (maintainVisibleContentPosition != null) {
        minIndexForVisible = maintainVisibleContentPosition.minIndexForVisible;
      }
      num = 0;
      if (minIndexForVisible != null) {
        num = minIndexForVisible;
      }
      obj1 = { cellsAroundViewport: _initialRenderRegionResult, renderMask: closure_0._createRenderMask(arg0, _initialRenderRegionResult) };
      props2 = obj.props;
      _getItemKeyResult = null;
      if (props2.getItemCount(obj.props.data) > num) {
        tmp17 = closure_0;
        _getItemKeyResult = closure_0._getItemKey(obj.props, num);
      }
      obj1.firstVisibleItemKey = _getItemKeyResult;
      num2 = 0;
      if (obj.props.initialScrollIndex != null) {
        num2 = 0;
        if (obj.props.initialScrollIndex > 0) {
          num2 = 1;
        }
      }
      obj1.pendingScrollUpdateCount = num2;
      obj.state = obj1;
      return obj;
    }
  }
  closure_9.default(VirtualizedList, arg0);
  let obj = {
    key: "scrollToEnd",
    value: function scrollToEnd(animated) {
      const self = this;
      let flag = true;
      if (animated) {
        flag = animated.animated;
      }
      const props = self.props;
      const diff = props.getItemCount(self.props.data) - 1;
      if (diff >= 0) {
        const _listMetrics = self._listMetrics;
        const cellMetricsApprox = _listMetrics.getCellMetricsApprox(diff, self.props);
        const _Math = Math;
        const obj = { animated: flag, offset: Math.max(0, cellMetricsApprox.offset + cellMetricsApprox.length + self._footerLength - self._scrollMetrics.visibleLength) };
        self.scrollToOffset(obj);
      }
    }
  };
  let items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "scrollToIndex",
    value: function scrollToIndex(animated) {
      const self = this;
      const props = this.props;
      ({ data, getItemCount, onScrollToIndexFailed } = props);
      ({ index, viewOffset, viewPosition } = animated);
      closure_1_17.default(index >= 0, "scrollToIndex out of range: requested index " + index + " but minimum is 0");
      closure_1_17.default(getItemCount(data) >= 1, "scrollToIndex out of range: item length " + getItemCount(data) + " but minimum is 1");
      const tmp = index >= 0;
      const tmp3 = getItemCount(data) >= 1;
      closure_1_17.default(index < getItemCount(data), "scrollToIndex out of range: requested index " + index + " is out of 0 to " + getItemCount(data) - 1);
      if (!props.getItemLayout) {
        const _listMetrics = self._listMetrics;
        if (index > _listMetrics.getHighestMeasuredCellIndex()) {
          closure_1_17.default(onScrollToIndexFailed, "scrollToIndex should be used in conjunction with getItemLayout or onScrollToIndexFailed, otherwise there is no way to know the location of offscreen indices or handle failures.");
          let obj = {};
          const _listMetrics2 = self._listMetrics;
          obj.averageItemLength = _listMetrics2.getAverageCellLength();
          const _listMetrics3 = self._listMetrics;
          obj.highestMeasuredFrameIndex = _listMetrics3.getHighestMeasuredCellIndex();
          obj.index = index;
          const result = onScrollToIndexFailed(obj);
        }
      }
      const _listMetrics4 = self._listMetrics;
      const _listMetrics5 = self._listMetrics;
      const cellMetricsApprox = _listMetrics4.getCellMetricsApprox(Math.floor(index), self.props);
      const cellOffsetApprox = _listMetrics5.getCellOffsetApprox(index, self.props);
      if (!viewPosition) {
        viewPosition = 0;
      }
      const bound = Math.max(0, cellOffsetApprox - viewPosition * (self._scrollMetrics.visibleLength - cellMetricsApprox.length));
      if (!viewOffset) {
        viewOffset = 0;
      }
      obj = { offset: bound - viewOffset, animated: animated.animated };
      self.scrollToOffset(obj);
    }
  };
  items[1] = obj;
  obj = {
    key: "scrollToItem",
    value: function scrollToItem(arg0) {
      const self = this;
      const props = this.props;
      const data = props.data;
      const itemCount = props.getItemCount(data);
      let num = 0;
      if (0 < itemCount) {
        while (tmp2(data, num) !== tmp) {
          num = num + 1;
        }
        const _Object = Object;
        const obj = { index: num };
        self.scrollToIndex(Object.assign({}, arg0, obj));
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "scrollToOffset",
    value: function scrollToOffset(arg0) {
      const self = this;
      const _scrollRef = this._scrollRef;
      if (_scrollRef != null) {
        if (_scrollRef.scrollTo == null) {
          const _console2 = console;
          console.warn("No scrollTo method provided. This may be because you have two nested VirtualizedLists with the same orientation, or because you are using a custom component that does not implement scrollTo.");
        } else {
          const _orientationResult = self._orientation();
          if (_orientationResult.horizontal) {
            if (_orientationResult.rtl) {
              const _listMetrics = self._listMetrics;
              if (!_listMetrics.hasContentLength()) {
                const _console = console;
                console.warn("scrollToOffset may not be called in RTL before content is laid out");
              }
            }
          }
          const _Object = Object;
          const obj = { animated: tmp };
          _scrollRef.scrollTo(Object.assign(obj, self._scrollToParamsFromOffset(tmp2)));
        }
      }
    }
  };
  items[4] = {
    key: "_scrollToParamsFromOffset",
    value: function _scrollToParamsFromOffset(arg0) {
      const self = this;
      const _orientationResult = this._orientation();
      const horizontal = _orientationResult.horizontal;
      if (horizontal) {
        if (_orientationResult.rtl) {
          const _listMetrics = self._listMetrics;
          const cartesianOffsetResult = _listMetrics.cartesianOffset(arg0 + self._scrollMetrics.visibleLength);
          let obj = {};
          if (horizontal) {
            obj.x = cartesianOffsetResult;
            let tmp4 = obj;
          } else {
            obj.y = cartesianOffsetResult;
            tmp4 = obj;
          }
          return tmp4;
        }
      }
      obj = {};
      if (horizontal) {
        obj.x = arg0;
        let tmp2 = obj;
      } else {
        obj.y = arg0;
        tmp2 = obj;
      }
      return tmp2;
    }
  };
  items[5] = {
    key: "recordInteraction",
    value: function recordInteraction() {
      const _nestedChildLists = this._nestedChildLists;
      const item = _nestedChildLists.forEach((recordInteraction) => {
        recordInteraction.recordInteraction();
      });
      const _viewabilityTuples = this._viewabilityTuples;
      const item1 = _viewabilityTuples.forEach((viewabilityHelper) => {
        viewabilityHelper = viewabilityHelper.viewabilityHelper;
        viewabilityHelper.recordInteraction();
      });
      this._updateViewableItems(this.props, this.state.cellsAroundViewport);
    }
  };
  items[6] = {
    key: "flashScrollIndicators",
    value: function flashScrollIndicators() {
      if (this._scrollRef != null) {
        const _scrollRef = tmp._scrollRef;
        const result = _scrollRef.flashScrollIndicators();
      }
    }
  };
  items[7] = {
    key: "getScrollResponder",
    value: function getScrollResponder() {
      const self = this;
      if (this._scrollRef) {
        if (self._scrollRef.getScrollResponder) {
          const _scrollRef = self._scrollRef;
          return _scrollRef.getScrollResponder();
        }
      }
    }
  };
  items[8] = {
    key: "getScrollableNode",
    value: function getScrollableNode() {
      const self = this;
      if (this._scrollRef) {
        if (self._scrollRef.getScrollableNode) {
          const _scrollRef = self._scrollRef;
          return _scrollRef.getScrollableNode();
        }
      }
      return closure_1_20.findNodeHandle(self._scrollRef);
    }
  };
  items[9] = {
    key: "getScrollRef",
    value: function getScrollRef() {
      const self = this;
      if (this._scrollRef) {
        if (self._scrollRef.getScrollRef) {
          const _scrollRef = self._scrollRef;
          return _scrollRef.getScrollRef();
        }
      }
      return self._scrollRef;
    }
  };
  items[10] = {
    key: "setNativeProps",
    value: function setNativeProps(arg0) {
      if (this._scrollRef) {
        const _scrollRef = this._scrollRef;
        _scrollRef.setNativeProps(arg0);
      }
    }
  };
  items[11] = {
    key: "_getCellKey",
    value: function _getCellKey() {
      const context = this.context;
      let str;
      if (context != null) {
        str = context.cellKey;
      }
      if (!str) {
        str = "rootList";
      }
      return str;
    }
  };
  items[12] = {
    key: "hasMore",
    value: function hasMore() {
      return this._hasMore;
    }
  };
  items[13] = {
    key: "_checkProps",
    value: function _checkProps(arg0) {
      const self = this;
      ({ onScroll, getItemCount, initialScrollIndex } = arg0);
      let tmp = !onScroll;
      ({ windowSize, data } = arg0);
      if (!tmp) {
        tmp = !onScroll.__isNative;
      }
      closure_1_17.default(tmp, "Components based on VirtualizedList must be wrapped with Animated.createAnimatedComponent to support native onScroll events with useNativeDriver");
      closure_1_17.default(VirtualizedList(closure_1_1[22]).windowSizeOrDefault(windowSize) > 0, "VirtualizedList: The windowSize prop must be present and set to a value greater than 0.");
      closure_1_17.default(getItemCount, "VirtualizedList: The \"getItemCount\" prop must be provided");
      const itemCount = getItemCount(data);
      if (initialScrollIndex != null) {
        if (!self._hasTriggeredInitialScrollToIndex) {
          if (initialScrollIndex < 0) {
            if (!self._hasWarned.initialScrollIndex) {
              const _console = console;
              const _HermesInternal = HermesInternal;
              console.warn("initialScrollIndex \"" + initialScrollIndex + "\" is not valid (list has " + itemCount + " items)");
              self._hasWarned.initialScrollIndex = true;
            }
          }
        }
      }
    }
  };
  items[14] = {
    key: "_adjustCellsAroundViewport",
    value: function _adjustCellsAroundViewport(onEndReachedThreshold, cellsAroundViewport, pendingScrollUpdateCount) {
      const self = this;
      ({ data, getItemCount } = onEndReachedThreshold);
      const visibleLength = this._scrollMetrics.visibleLength;
      const _listMetrics = this._listMetrics;
      const result = VirtualizedList(closure_1_1[22]).onEndReachedThresholdOrDefault(onEndReachedThreshold.onEndReachedThreshold);
      const contentLength = _listMetrics.getContentLength();
      if (visibleLength > 0) {
        if (contentLength > 0) {
          if (onEndReachedThreshold.disableVirtualization) {
            let num = 0;
            if (tmp3 < result * visibleLength) {
              num = VirtualizedList(closure_1_1[22]).maxToRenderPerBatchOrDefault(onEndReachedThreshold.maxToRenderPerBatch);
            }
            const obj = { first: 0 };
            const _Math = Math;
            const sum = cellsAroundViewport.last + num;
            obj.last = Math.min(sum, getItemCount(data) - 1);
            let windowedRenderLimits = obj;
          } else if (pendingScrollUpdateCount > 0) {
            let result1 = cellsAroundViewport;
            if (cellsAroundViewport.last >= getItemCount(data)) {
              result1 = VirtualizedList._constrainToItemCount(cellsAroundViewport, onEndReachedThreshold);
            }
            return result1;
          } else {
            const result2 = VirtualizedList(closure_1_1[22]).maxToRenderPerBatchOrDefault(onEndReachedThreshold.maxToRenderPerBatch);
            windowedRenderLimits = VirtualizedList(closure_1_1[23]).computeWindowedRenderLimits(onEndReachedThreshold, result2, VirtualizedList(closure_1_1[22]).windowSizeOrDefault(onEndReachedThreshold.windowSize), cellsAroundViewport, self._listMetrics, self._scrollMetrics);
            closure_1_17.default(windowedRenderLimits.last < getItemCount(data), "computeWindowedRenderLimits() should return range in-bounds");
          }
          const _nestedChildLists = self._nestedChildLists;
          if (_nestedChildLists.size() > 0) {
            let last = self._findFirstChildWithMore(windowedRenderLimits.first, windowedRenderLimits.last);
            if (last == null) {
              last = windowedRenderLimits.last;
            }
            windowedRenderLimits.last = last;
          }
          return windowedRenderLimits;
        }
      }
      let result3 = cellsAroundViewport;
      if (cellsAroundViewport.last >= getItemCount(data)) {
        result3 = VirtualizedList._constrainToItemCount(cellsAroundViewport, onEndReachedThreshold);
      }
      return result3;
    }
  };
  items[15] = {
    key: "_findFirstChildWithMore",
    value: function _findFirstChildWithMore(first, last) {
      let sum = first;
      const self = this;
      if (first <= last) {
        while (true) {
          let _indicesToKeys = self._indicesToKeys;
          let value = _indicesToKeys.get(sum);
          let tmp3 = sum;
          if (value != null) {
            let _nestedChildLists = self._nestedChildLists;
            if (_nestedChildLists.anyInCell(value, (hasMore) => hasMore.hasMore())) {
              break;
            }
          }
          sum = sum + 1;
        }
        return sum;
      }
      return null;
    }
  };
  items[16] = {
    key: "componentDidMount",
    value: function componentDidMount() {
      const self = this;
      if (this._isNestedWithSameOrientation()) {
        const context = self.context;
        const obj = { ref: self, cellKey: self.context.cellKey };
        const result = context.registerAsNestedChild(obj);
      }
    }
  };
  items[17] = {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      const self = this;
      if (this._isNestedWithSameOrientation()) {
        const context = self.context;
        const obj = { ref: self };
        const result = context.unregisterAsNestedChild(obj);
      }
      clearTimeout(self._updateCellsToRenderTimeoutID);
      const _viewabilityTuples = self._viewabilityTuples;
      const item = _viewabilityTuples.forEach((viewabilityHelper) => {
        viewabilityHelper = viewabilityHelper.viewabilityHelper;
        viewabilityHelper.dispose();
      });
      const _fillRateHelper = self._fillRateHelper;
      _fillRateHelper.deactivateAndFlush();
    }
  };
  items[18] = {
    key: "_pushCells",
    value: function _pushCells(items, items1, arg2, first, last, arg5) {
      let sum;
      let tmp = first;
      closure_0 = items;
      closure_1 = items1;
      closure_2 = arg2;
      closure_3 = arg5;
      const self = this;
      const props = this.props;
      ({ CellRendererComponent: closure_5, ItemSeparatorComponent: closure_6, ListItemComponent: closure_7, data } = props);
      ({ debug: closure_9, getItem: closure_10, getItemLayout: closure_11, horizontal: closure_12, renderItem: closure_13 } = props);
      let num = 0;
      if (props.ListHeaderComponent) {
        num = 1;
      }
      const diff = props.getItemCount(data) - 1;
      const bound = Math.min(diff, last);
      closure_17 = tmp;
      if (tmp <= bound) {
        do {
          let tmp4 = (function _loop() {
            const tmp = callback(data, closure_17);
            const _keyExtractorResult = items._keyExtractor(tmp, closure_17, self.props);
            items = _keyExtractorResult;
            const _indicesToKeys = self._indicesToKeys;
            const result = _indicesToKeys.set(closure_17, _keyExtractorResult);
            if (set.has(closure_17 + num)) {
              items1.push(items.length);
            }
            let enabledResult = closure_11 == null || closure_9;
            if (!enabledResult) {
              const _fillRateHelper = self._fillRateHelper;
              enabledResult = _fillRateHelper.enabled();
            }
            let obj = { CellRendererComponent: closure_5 };
            let tmp10;
            if (closure_17 < closure_15) {
              tmp10 = closure_6;
            }
            obj.ItemSeparatorComponent = tmp10;
            obj.ListItemComponent = closure_7;
            obj.cellKey = _keyExtractorResult;
            obj.horizontal = closure_12;
            obj.index = closure_17;
            obj.inversionStyle = closure_3;
            obj.item = tmp;
            obj.prevCellKey = _keyExtractorResult;
            ({ _onUpdateSeparators: obj.onUpdateSeparators, _onCellFocusCapture: obj.onCellFocusCapture, _onCellUnmount: obj.onUnmount } = self);
            obj.ref = function ref(arg0) {
              closure_1_4._cellRefs[closure_0] = arg0;
            };
            obj.renderItem = closure_13;
            if (enabledResult) {
              obj = { onCellLayout: self._onCellLayout };
              enabledResult = obj;
            }
            items.push(<closure_2_16.default key={_keyExtractorResult} {...Object.assign(obj, enabledResult)} />);
          })();
          sum = tmp + 1;
          closure_17 = sum;
          tmp = sum;
        } while (sum <= bound);
      }
    }
  };
  items[19] = {
    key: "_isNestedWithSameOrientation",
    value: function _isNestedWithSameOrientation() {
      const context = this.context;
      let tmp2 = context;
      if (context) {
        tmp2 = !!context.horizontal === VirtualizedList(closure_1_1[22]).horizontalOrDefault(tmp.props.horizontal);
        const tmp3 = !context.horizontal;
      }
      return tmp2;
    }
  };
  items[20] = {
    key: "render",
    value: function render() {
      let self = this;
      self = this;
      this._checkProps(this.props);
      ({ ListEmptyComponent, ListFooterComponent, ListHeaderComponent } = this.props);
      if (!this.props.inverted) {
        const items = [];
        const _Set = Set;
        const set = new Set(self.props.stickyHeaderIndices);
        let obj = set;
        const items1 = [];
        if (ListHeaderComponent) {
          if (obj.has(0)) {
            items1.push(0);
          }
          let jsxResult = ListHeaderComponent;
          if (!closure_1_19.isValidElement(ListHeaderComponent)) {
            jsxResult = <ListHeaderComponent />;
          }
          obj = { cellKey: `${self._getCellKey()}-header` };
          obj = { collapsable: false, onLayout: self._onLayoutHeader };
          const StyleSheet = closure_1_20.StyleSheet;
          obj.style = StyleSheet.compose(null, self.props.ListHeaderComponentStyle);
          obj.children = jsxResult;
          obj.children = <closure_1_20.View collapsable={false} onLayout={self._onLayoutHeader} />;
          items.push(closure_1_21.jsx(VirtualizedList(closure_1_1[24]).VirtualizedListCellContextProvider, { collapsable: false, onLayout: self._onLayoutHeader }, "$header"));
        }
        let props = self.props;
        const itemCount = props.getItemCount(tmp2);
        if (itemCount === 0) {
          if (ListEmptyComponent) {
            let jsxResult1 = ListEmptyComponent;
            if (!closure_1_19.isValidElement(ListEmptyComponent)) {
              jsxResult1 = <ListEmptyComponent />;
            }
            const obj1 = { cellKey: `${self._getCellKey()}-empty` };
            const obj2 = {
              onLayout(arg0) {
                      self._onLayoutEmpty(arg0);
                      if (jsxResult1.props.onLayout) {
                        const props = jsxResult1.props;
                        props.onLayout(arg0);
                      }
                    }
            };
            const StyleSheet2 = closure_1_20.StyleSheet;
            obj2.style = StyleSheet2.compose(null, jsxResult1.props.style);
            obj1.children = closure_1_19.cloneElement(jsxResult1, obj2);
            items.push(closure_1_21.jsx(VirtualizedList(closure_1_1[24]).VirtualizedListCellContextProvider, { cellKey: `${self._getCellKey()}-empty` }, "$empty"));
          }
        }
        if (itemCount > 0) {
          c23 = false;
          displayName = "";
          const _getSpacerKeyResult = self._getSpacerKey(!tmp3);
          const renderMask = self.state.renderMask;
          const enumerateRegionsResult = renderMask.enumerateRegions();
          let tmp38 = null;
          if (enumerateRegionsResult[enumerateRegionsResult.length - 1] != null) {
            tmp38 = null;
            if (tmp93.isSpacer) {
              tmp38 = tmp93;
            }
          }
          const iter = enumerateRegionsResult[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let tmp43 = nextResult;
            if (nextResult.isSpacer) {
              if (self.props.disableVirtualization) {
                continue;
              } else {
                let tmp51 = nextResult;
                let tmp52 = tmp38;
                let tmp53 = tmp43 === tmp39;
                let tmp54 = tmp53;
                if (tmp53) {
                  tmp54 = !self.props.getItemLayout;
                }
                if (tmp54) {
                  let tmp56 = closure_1_10;
                  let tmp57 = nextResult;
                  let _listMetrics = self._listMetrics;
                  let diff = tmp43.first - 1;
                  let last = closure_1_10.default(diff, tmp43.last, _listMetrics.getHighestMeasuredCellIndex());
                } else {
                  let tmp55 = nextResult;
                  last = tmp43.last;
                }
                let _listMetrics2 = self._listMetrics;
                let tmp59 = nextResult;
                let _listMetrics3 = self._listMetrics;
                let cellMetricsApprox = _listMetrics2.getCellMetricsApprox(tmp43.first, self.props);
                let cellMetricsApprox1 = _listMetrics3.getCellMetricsApprox(last, self.props);
                let tmp61 = items;
                let tmp62 = closure_1_21;
                let tmp63 = closure_1_20;
                let obj3 = {};
                let tmp64 = closure_1_3;
                let tmp65 = _getSpacerKeyResult;
                obj3.style = closure_1_3.default({}, _getSpacerKeyResult, cellMetricsApprox1.offset + cellMetricsApprox1.length - cellMetricsApprox.offset);
                let _HermesInternal = HermesInternal;
                let arr2 = items.push(<closure_1_20.View key={"$spacer-" + tmp43.first} />);
              }
            } else {
              let tmp44 = items;
              let tmp45 = items1;
              let tmp46 = set;
              let tmp47 = nextResult;
              let tmp48 = null;
              let tmp49 = self;
              let _pushCellsResult = self._pushCells(items, items1, obj, tmp43.first, tmp43.last, null);
              continue;
            }
            continue;
          }
          if (!self._hasWarned.keys) {
            if (c23) {
              const _console = console;
              console.warn("VirtualizedList: missing keys for items, make sure to specify a key or id property on each item or provide a custom keyExtractor.", displayName);
              self._hasWarned.keys = true;
            }
          }
          tmp39 = tmp38;
        }
        if (ListFooterComponent) {
          let jsxResult2 = ListFooterComponent;
          if (!closure_1_19.isValidElement(ListFooterComponent)) {
            jsxResult2 = <ListFooterComponent />;
          }
          const obj4 = { cellKey: self._getFooterCellKey() };
          const obj5 = { onLayout: self._onLayoutFooter };
          const StyleSheet3 = closure_1_20.StyleSheet;
          obj5.style = StyleSheet3.compose(null, self.props.ListFooterComponentStyle);
          obj5.children = jsxResult2;
          obj4.children = <closure_1_20.View onLayout={self._onLayoutFooter} />;
          items.push(closure_1_21.jsx(VirtualizedList(closure_1_1[24]).VirtualizedListCellContextProvider, { cellKey: self._getFooterCellKey() }, "$footer"));
        }
        const obj6 = {};
        ({ _onContentSizeChange: obj9.onContentSizeChange, _onLayout: obj9.onLayout, _onScroll: obj9.onScroll, _onScrollBeginDrag: obj9.onScrollBeginDrag, _onScrollEndDrag: obj9.onScrollEndDrag, _onMomentumScrollBegin: obj9.onMomentumScrollBegin, _onMomentumScrollEnd: obj9.onMomentumScrollEnd } = self);
        const scrollEventThrottle = self.props.scrollEventThrottle;
        let num7 = 0.0001;
        if (scrollEventThrottle != null) {
          num7 = scrollEventThrottle;
        }
        obj6.scrollEventThrottle = num7;
        if (self.props.invertStickyHeaders !== undefined) {
          let inverted = self.props.invertStickyHeaders;
        } else {
          inverted = self.props.inverted;
        }
        obj6.invertStickyHeaders = inverted;
        obj6.stickyHeaderIndices = items1;
        if (null) {
          const items2 = [null, self.props.style];
          let style = items2;
        } else {
          style = self.props.style;
        }
        obj6.style = style;
        obj6.isInvertedVirtualizedList = self.props.inverted;
        let merged;
        if (self.props.maintainVisibleContentPosition != null) {
          const obj7 = {};
          let num8 = 0;
          if (self.props.ListHeaderComponent) {
            num8 = 1;
          }
          obj7.minIndexForVisible = self.props.maintainVisibleContentPosition.minIndexForVisible + num8;
          merged = Object.assign({}, self.props.maintainVisibleContentPosition, obj7);
        }
        obj6.maintainVisibleContentPosition = merged;
        self._hasMore = self.state.cellsAroundViewport.last < itemCount - 1;
        const merged1 = Object.assign({}, self.props, obj6);
        const obj8 = {};
        const obj9 = { cellKey: null, getScrollMetrics: self._getScrollMetrics, horizontal: VirtualizedList(closure_1_1[22]).horizontalOrDefault(self.props.horizontal) };
        ({ _getOutermostParentListRef: obj12.getOutermostParentListRef, _registerAsNestedChild: obj12.registerAsNestedChild, _unregisterAsNestedChild: obj12.unregisterAsNestedChild } = self);
        obj8.value = obj9;
        let _defaultRenderScrollComponent = self.props.renderScrollComponent;
        if (!_defaultRenderScrollComponent) {
          _defaultRenderScrollComponent = self._defaultRenderScrollComponent;
        }
        const obj10 = { ref: self._captureScrollRef };
        obj8.children = closure_1_19.cloneElement(_defaultRenderScrollComponent(merged1), obj10, items);
        const jsxResult3 = closure_1_21.jsx(VirtualizedList(closure_1_1[24]).VirtualizedListContextProvider, {});
        if (self.props.debug) {
          const obj11 = { style: closure_1_25.debug };
          const items3 = [jsxResult3, self._renderDebugOverlay()];
          obj11.children = items3;
          return <closure_1_20.View style={closure_1_25.debug} />;
        } else {
          return jsxResult3;
        }
      } else {
        VirtualizedList(closure_1_1[22]).horizontalOrDefault(self.props.horizontal) ? closure_1_25.horizontallyInverted : closure_1_25.verticallyInverted;
      }
    }
  };
  items[21] = {
    key: "componentDidUpdate",
    value: function componentDidUpdate(data) {
      const self = this;
      const props = this.props;
      if (props.data !== data.data) {
        const _viewabilityTuples = self._viewabilityTuples;
        const item = _viewabilityTuples.forEach((viewabilityHelper) => {
          viewabilityHelper = viewabilityHelper.viewabilityHelper;
          viewabilityHelper.resetViewableIndices();
        });
      }
      const result = self._scheduleCellsToRenderUpdate();
      if (self._hiPriInProgress) {
        self._hiPriInProgress = false;
      }
      if (props.getItemLayout != null) {
        const result1 = self._maybeCallOnEdgeReached();
      }
    }
  };
  items[22] = {
    key: "_computeBlankness",
    value: function _computeBlankness() {
      const _fillRateHelper = this._fillRateHelper;
      const blankness = _fillRateHelper.computeBlankness(this.props, this.state.cellsAroundViewport, this._scrollMetrics);
    }
  };
  items[23] = {
    key: "_triggerRemeasureForChildListsInCell",
    value: function _triggerRemeasureForChildListsInCell(cellKey) {
      const _nestedChildLists = this._nestedChildLists;
      _nestedChildLists.forEachInCell(cellKey, (measureLayoutRelativeToContainingList) => {
        const result = measureLayoutRelativeToContainingList.measureLayoutRelativeToContainingList();
      });
    }
  };
  items[24] = {
    key: "measureLayoutRelativeToContainingList",
    value: function measureLayoutRelativeToContainingList() {
      let self = this;
      self = this;
      try {
        if (self._scrollRef) {
          ({ _scrollRef, context } = self);
          const outermostParentListRef = context.getOutermostParentListRef();
          _scrollRef.measureLayout(outermostParentListRef.getScrollRef(), (arg0, arg1, width, height) => {
            let obj = { x: arg0, y: arg1 };
            self._offsetFromParentVirtualizedList = self._selectOffset(obj);
            const _listMetrics = self._listMetrics;
            obj = { layout: obj, orientation: self._orientation() };
            obj = { width, height };
            let result = _listMetrics.notifyListContentLayout(obj);
            ({ context, _convertParentScrollMetrics } = self);
            const result1 = _convertParentScrollMetrics(context.getScrollMetrics());
            let tmp3 = self._scrollMetrics.visibleLength !== result1.visibleLength;
            if (!tmp3) {
              tmp3 = self._scrollMetrics.offset !== result1.offset;
            }
            if (tmp3) {
              ({ visibleLength: self._scrollMetrics.visibleLength, offset: self._scrollMetrics.offset } = result1);
              const _nestedChildLists = self._nestedChildLists;
              const item = _nestedChildLists.forEach((measureLayoutRelativeToContainingList) => {
                const result = measureLayoutRelativeToContainingList.measureLayoutRelativeToContainingList();
              });
            }
          }, (arg0) => {
            console.warn("VirtualizedList: Encountered an error while measuring a list's offset from its containing VirtualizedList.");
          });
        }
      } catch (tmp2) {
        const _console = console;
        console.warn("measureLayoutRelativeToContainingList threw an error", tmp2.stack);
      }
    }
  };
  items[25] = {
    key: "_getFooterCellKey",
    value: function _getFooterCellKey() {
      return this._getCellKey() + "-footer";
    }
  };
  items[26] = {
    key: "_renderDebugOverlay",
    value: function _renderDebugOverlay() {
      const self = this;
      const _listMetrics = this._listMetrics;
      const result = this._scrollMetrics.visibleLength / (_listMetrics.getContentLength() || 1);
      VirtualizedList = result;
      const items = [];
      const props = self.props;
      const itemCount = props.getItemCount(self.props.data);
      for (let num = 0; num < itemCount; num = num + 1) {
        let _listMetrics2 = self._listMetrics;
        let cellMetricsApprox = _listMetrics2.getCellMetricsApprox(num, self.props);
        let tmp5 = num;
        if (cellMetricsApprox.isMounted) {
          let arr = items.push(cellMetricsApprox);
        }
      }
      const _listMetrics3 = self._listMetrics;
      const offset = _listMetrics3.getCellMetricsApprox(self.state.cellsAroundViewport.first, self.props).offset;
      const _listMetrics4 = self._listMetrics;
      const cellMetricsApprox1 = _listMetrics4.getCellMetricsApprox(self.state.cellsAroundViewport.last, self.props);
      const obj = { style: items1 };
      items1 = [closure_1_25.debugOverlayBase, closure_1_25.debugOverlay];
      const diff = cellMetricsApprox1.offset + cellMetricsApprox1.length - offset;
      const items2 = [
        items.map((offset) => {
          const style = [closure_2_25.debugOverlayBase, closure_2_25.debugOverlayFrame, { top: offset.offset * closure_0, height: offset.length * closure_0 }];
          return <closure_2_20.View key={"f" + arg1} style={style} />;
        }),
      ,

      ];
      const items3 = [closure_1_25.debugOverlayBase, closure_1_25.debugOverlayFrameLast, { top: offset * result, height: diff * result }];
      items2[1] = <closure_1_20.View style={items3} />;
      const items4 = [closure_1_25.debugOverlayBase, closure_1_25.debugOverlayFrameVis, { top: self._scrollMetrics.offset * result, height: self._scrollMetrics.visibleLength * result }];
      items2[2] = <closure_1_20.View style={items4} />;
      obj.children = items2;
      return <closure_1_20.View style={items1} />;
    }
  };
  items[27] = {
    key: "_selectLength",
    value: function _selectLength(width) {
      return VirtualizedList(closure_1_1[22]).horizontalOrDefault(this.props.horizontal) ? width.width : width.height;
    }
  };
  items[28] = {
    key: "_selectOffset",
    value: function _selectOffset(arg0) {
      ({ y, x } = arg0);
      if (this._orientation().horizontal) {
        y = x;
      }
      return y;
    }
  };
  items[29] = {
    key: "_orientation",
    value: function _orientation() {
      return { horizontal: VirtualizedList(closure_1_1[22]).horizontalOrDefault(this.props.horizontal), rtl: closure_1_20.I18nManager.isRTL };
    }
  };
  items[30] = {
    key: "_maybeCallOnEdgeReached",
    value: function _maybeCallOnEdgeReached() {
      const self = this;
      const props = this.props;
      ({ onStartReached, onStartReachedThreshold, onEndReached, onEndReachedThreshold } = props);
      const _listMetrics = this._listMetrics;
      ({ data, getItemCount } = props);
      if (_listMetrics.hasContentLength()) {
        if (self._scrollMetrics.visibleLength !== 0) {
          if (self.state.pendingScrollUpdateCount <= 0) {
            ({ visibleLength, offset } = self._scrollMetrics);
            const _listMetrics6 = self._listMetrics;
            let num2 = _listMetrics6.getContentLength() - visibleLength - offset;
            if (offset < 0.001) {
              offset = 0;
            }
            if (num2 < 0.001) {
              num2 = 0;
            }
            let num3 = 2;
            let num4 = 2;
            if (onStartReachedThreshold != null) {
              num4 = onStartReachedThreshold * visibleLength;
            }
            if (onEndReachedThreshold != null) {
              num3 = onEndReachedThreshold * visibleLength;
            }
            if (onEndReached) {
              if (self.state.cellsAroundViewport.last === getItemCount(data) - 1) {
                if (tmp3) {
                  const _listMetrics2 = self._listMetrics;
                  if (_listMetrics2.getContentLength() !== self._sentEndForContentLength) {
                    const _listMetrics3 = self._listMetrics;
                    self._sentEndForContentLength = _listMetrics3.getContentLength();
                    let obj = { distanceFromEnd: num2 };
                    onEndReached(obj);
                  }
                }
              }
            }
            if (onStartReached != null) {
              if (self.state.cellsAroundViewport.first === 0) {
                if (tmp2) {
                  const _listMetrics4 = self._listMetrics;
                  if (_listMetrics4.getContentLength() !== self._sentStartForContentLength) {
                    const _listMetrics5 = self._listMetrics;
                    self._sentStartForContentLength = _listMetrics5.getContentLength();
                    obj = { distanceFromStart: offset };
                    onStartReached(obj);
                  }
                }
              }
            }
            if (offset > num4) {
              self._sentStartForContentLength = 0;
            }
            if (num2 > num3) {
              self._sentEndForContentLength = 0;
            }
          }
        }
      }
    }
  };
  items[31] = {
    key: "_maybeScrollToInitialScrollIndex",
    value: function _maybeScrollToInitialScrollIndex(width, height) {
      const self = this;
      if (width > 0) {
        if (height > 0) {
          if (self.props.initialScrollIndex != null) {
            if (self.props.initialScrollIndex > 0) {
              if (!self._hasTriggeredInitialScrollToIndex) {
                if (self.props.contentOffset != null) {
                  self._hasTriggeredInitialScrollToIndex = true;
                } else {
                  const props = self.props;
                  if (self.props.initialScrollIndex >= props.getItemCount(self.props.data)) {
                    let obj = { animated: false };
                    self.scrollToEnd(obj);
                  }
                }
                obj = { animated: false, index: closure_1_18.default(self.props.initialScrollIndex) };
                self.scrollToIndex(obj);
              }
            }
          }
        }
      }
    }
  };
  items[32] = {
    key: "unstable_onScroll",
    value: function unstable_onScroll(closure_0) {
      this._onScroll(closure_0);
    }
  };
  items[33] = {
    key: "_offsetFromScrollEvent",
    value: function _offsetFromScrollEvent(nativeEvent) {
      const self = this;
      ({ contentOffset, contentSize, layoutMeasurement } = nativeEvent.nativeEvent);
      const _orientationResult = this._orientation();
      if (_orientationResult.horizontal) {
        if (_orientationResult.rtl) {
          const _selectLengthResult = self._selectLength(contentSize);
          return _selectLengthResult - (self._selectOffset(contentOffset) + self._selectLength(layoutMeasurement));
        }
      }
      return self._selectOffset(contentOffset);
    }
  };
  items[34] = {
    key: "_scheduleCellsToRenderUpdate",
    value: function _scheduleCellsToRenderUpdate() {
      let self = this;
      self = this;
      const _listMetrics = this._listMetrics;
      if (_listMetrics.getAverageCellLength() > 0) {
        if (self._shouldRenderWithPriority()) {
          if (!self._hiPriInProgress) {
            self._hiPriInProgress = true;
            if (self._updateCellsToRenderTimeoutID != null) {
              const _clearTimeout = clearTimeout;
              clearTimeout(self._updateCellsToRenderTimeoutID);
              self._updateCellsToRenderTimeoutID = null;
            }
            self._updateCellsToRender();
          }
        }
      }
      if (self._updateCellsToRenderTimeoutID == null) {
        const updateCellsBatchingPeriod = self.props.updateCellsBatchingPeriod;
        let num = 50;
        if (updateCellsBatchingPeriod != null) {
          num = updateCellsBatchingPeriod;
        }
        self._updateCellsToRenderTimeoutID = setTimeout(() => {
          self._updateCellsToRenderTimeoutID = null;
          self._updateCellsToRender();
        }, num);
      }
    }
  };
  items[35] = {
    key: "_shouldRenderWithPriority",
    value: function _shouldRenderWithPriority() {
      const self = this;
      ({ first, last } = this.state.cellsAroundViewport);
      ({ offset, visibleLength, velocity } = this._scrollMetrics);
      const props = this.props;
      const itemCount = props.getItemCount(this.props.data);
      const result = VirtualizedList(closure_1_1[22]).onStartReachedThresholdOrDefault(this.props.onStartReachedThreshold);
      let flag = false;
      const result1 = VirtualizedList(closure_1_1[22]).onEndReachedThresholdOrDefault(this.props.onEndReachedThreshold);
      if (first > 0) {
        const _listMetrics = self._listMetrics;
        const diff = offset - _listMetrics.getCellMetricsApprox(first, self.props).offset;
        let tmp5 = diff < 0;
        if (!tmp5) {
          let tmp6 = velocity < -2;
          if (tmp6) {
            tmp6 = diff < closure_1_29(result, visibleLength);
          }
          tmp5 = tmp6;
        }
        flag = tmp5;
      }
      let tmp8 = flag;
      if (!flag) {
        tmp8 = flag;
        if (last >= 0) {
          tmp8 = flag;
          if (last < itemCount - 1) {
            const _listMetrics2 = self._listMetrics;
            const diff1 = _listMetrics2.getCellMetricsApprox(last, self.props).offset - (offset + visibleLength);
            let tmp10 = diff1 < 0;
            if (!tmp10) {
              let tmp11 = velocity > 2;
              if (tmp11) {
                tmp11 = diff1 < closure_1_29(result1, visibleLength);
              }
              tmp10 = tmp11;
            }
            tmp8 = tmp10;
          }
        }
      }
      return tmp8;
    }
  };
  items[36] = {
    key: "unstable_onScrollBeginDrag",
    value: function unstable_onScrollBeginDrag(arg0) {
      this._onScrollBeginDrag(arg0);
    }
  };
  items[37] = {
    key: "unstable_onScrollEndDrag",
    value: function unstable_onScrollEndDrag(arg0) {
      this._onScrollEndDrag(arg0);
    }
  };
  items[38] = {
    key: "unstable_onMomentumScrollBegin",
    value: function unstable_onMomentumScrollBegin(arg0) {
      const result = this._onMomentumScrollBegin(arg0);
    }
  };
  items[39] = {
    key: "unstable_onMomentumScrollEnd",
    value: function unstable_onMomentumScrollEnd(arg0) {
      this._onMomentumScrollEnd(arg0);
    }
  };
  items[40] = {
    key: "__getListMetrics",
    value: function __getListMetrics() {
      return this._listMetrics;
    }
  };
  items[41] = {
    key: "_updateViewableItems",
    value: function _updateViewableItems(props, cellsAroundViewport) {
      closure_0 = props;
      closure_1 = cellsAroundViewport;
      const self = this;
      if (this.state.pendingScrollUpdateCount <= 0) {
        const _viewabilityTuples = tmp._viewabilityTuples;
        const item = _viewabilityTuples.forEach((viewabilityHelper) => {
          viewabilityHelper = viewabilityHelper.viewabilityHelper;
          viewabilityHelper.onUpdate(closure_0, self._scrollMetrics.offset, self._scrollMetrics.visibleLength, self._listMetrics, self._createViewToken, viewabilityHelper.onViewableItemsChanged, closure_1);
        });
      }
    }
  };
  let items1 = [
    {
      key: "_findItemIndexWithKey",
      value: function _findItemIndexWithKey(getItemCount, firstVisibleItemKey, index) {
        const itemCount = getItemCount.getItemCount(getItemCount.data);
        if (index != null) {
          if (index >= 0) {
            if (index < itemCount) {
              if (VirtualizedList._getItemKey(getItemCount, index) === firstVisibleItemKey) {
                return index;
              }
            }
          }
        }
        let num2 = 0;
        if (0 < itemCount) {
          while (VirtualizedList._getItemKey(getItemCount, num2) !== firstVisibleItemKey) {
            num2 = num2 + 1;
          }
          return num2;
        }
        return null;
      }
    },
    {
      key: "_getItemKey",
      value: function _getItemKey(props, index) {
        return VirtualizedList._keyExtractor(props.getItem(props.data, index), index, props);
      }
    },
    {
      key: "_createRenderMask",
      value: function _createRenderMask(getItemCount, _initialRenderRegionResult, closure_1_0) {
        let items1 = closure_1_0;
        const itemCount = getItemCount.getItemCount(getItemCount.data);
        let tmp2 = _initialRenderRegionResult.first >= 0;
        if (tmp2) {
          tmp2 = _initialRenderRegionResult.last >= _initialRenderRegionResult.first - 1;
        }
        if (tmp2) {
          tmp2 = _initialRenderRegionResult.last < itemCount;
        }
        closure_1_17.default(tmp2, "Invalid cells around viewport \"[" + _initialRenderRegionResult.first + ", " + _initialRenderRegionResult.last + "]\" was passed to VirtualizedList._createRenderMask");
        const cellRenderMask = new VirtualizedList(closure_1_1[25]).CellRenderMask(itemCount);
        if (itemCount > 0) {
          const items = [_initialRenderRegionResult];
          if (items1 == null) {
            items1 = [];
          }
          const combined = items.concat(closure_1_2.default(items1));
          for (const item10044 of combined) {
            let tmp7 = cellRenderMask;
            let addCellsResult = obj.addCells(item10044);
            continue;
          }
          if (getItemCount.initialScrollIndex == null) {
            obj.addCells(VirtualizedList._initialRenderRegion(getItemCount));
          }
          const _Set = Set;
          const set = new Set(getItemCount.stickyHeaderIndices);
          const result = VirtualizedList._ensureClosestStickyHeader(getItemCount, set, obj, _initialRenderRegionResult.first);
        }
        return cellRenderMask;
      }
    },
    {
      key: "_initialRenderRegion",
      value: function _initialRenderRegion(getItemCount) {
        const itemCount = getItemCount.getItemCount(getItemCount.data);
        const initialScrollIndex = getItemCount.initialScrollIndex;
        let num = 0;
        const diff = itemCount - 1;
        if (initialScrollIndex != null) {
          num = initialScrollIndex;
        }
        const bound = Math.max(0, Math.min(diff, Math.floor(num)));
        return { first: bound, last: Math.min(itemCount, bound + VirtualizedList(closure_1_1[22]).initialNumToRenderOrDefault(getItemCount.initialNumToRender)) - 1 };
      }
    },
    {
      key: "_ensureClosestStickyHeader",
      value: function _ensureClosestStickyHeader(ListHeaderComponent, set, addCells, first) {
        let num = 0;
        if (ListHeaderComponent.ListHeaderComponent) {
          num = 1;
        }
        let diff = first - 1;
        if (diff >= 0) {
          while (!set.has(diff + num)) {
            diff = diff - 1;
          }
          const obj = { first: diff, last: diff };
          addCells.addCells(obj);
        }
      }
    },
    {
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(getItemCount, renderMask) {
        const itemCount = getItemCount.getItemCount(getItemCount.data);
        renderMask = renderMask.renderMask;
        if (itemCount === renderMask.numCells()) {
          return renderMask;
        } else {
          const firstVisibleItemKey = renderMask.firstVisibleItemKey;
          const maintainVisibleContentPosition = getItemCount.maintainVisibleContentPosition;
          let minIndexForVisible;
          if (maintainVisibleContentPosition != null) {
            minIndexForVisible = maintainVisibleContentPosition.minIndexForVisible;
          }
          let num = 0;
          if (minIndexForVisible != null) {
            num = minIndexForVisible;
          }
          let _getItemKeyResult = null;
          if (getItemCount.getItemCount(getItemCount.data) > num) {
            _getItemKeyResult = VirtualizedList._getItemKey(getItemCount, num);
          }
          let tmp5 = null;
          if (getItemCount.maintainVisibleContentPosition != null) {
            tmp5 = null;
            if (firstVisibleItemKey != null) {
              tmp5 = null;
              if (_getItemKeyResult != null) {
                tmp5 = null;
                if (_getItemKeyResult !== firstVisibleItemKey) {
                  const renderMask2 = renderMask.renderMask;
                  const result = VirtualizedList._findItemIndexWithKey(getItemCount, firstVisibleItemKey, itemCount - renderMask2.numCells() + num);
                  let diff = null;
                  if (result != null) {
                    diff = result - num;
                  }
                  tmp5 = diff;
                }
              }
            }
          }
          const cellsAroundViewport = renderMask.cellsAroundViewport;
          if (tmp5 != null) {
            let obj = { first: cellsAroundViewport.first + tmp5, last: renderMask.cellsAroundViewport.last + tmp5 };
            let tmp11 = obj;
          } else {
            tmp11 = cellsAroundViewport;
          }
          const result1 = VirtualizedList._constrainToItemCount(tmp11, getItemCount);
          obj = { cellsAroundViewport: result1, renderMask: VirtualizedList._createRenderMask(getItemCount, result1), firstVisibleItemKey: _getItemKeyResult };
          const pendingScrollUpdateCount = renderMask.pendingScrollUpdateCount;
          if (tmp5 != null) {
            let sum = pendingScrollUpdateCount + 1;
          } else {
            sum = pendingScrollUpdateCount;
          }
          obj.pendingScrollUpdateCount = sum;
          return obj;
        }
      }
    },
    {
      key: "_constrainToItemCount",
      value: function _constrainToItemCount(first, getItemCount) {
        const diff = getItemCount.getItemCount(getItemCount.data) - 1;
        return { first: closure_1_10.default(0, first.first, Math.max(0, diff - VirtualizedList(closure_1_1[22]).maxToRenderPerBatchOrDefault(getItemCount.maxToRenderPerBatch))), last: Math.min(diff, first.last) };
      }
    },
    {
      key: "_keyExtractor",
      value: function _keyExtractor(item, closure_17, props) {
        if (props.keyExtractor != null) {
          return props.keyExtractor(item, closure_17);
        } else {
          const keyExtractorResult = VirtualizedList(closure_1_1[23]).keyExtractor(item, closure_17);
          const _String = String;
          if (keyExtractorResult === String(closure_17)) {
            c23 = true;
            if (item.type) {
              if (item.type.displayName) {
                displayName = item.type.displayName;
              }
            }
          }
          return keyExtractorResult;
        }
      }
    }
  ];
  return closure_6.default(VirtualizedList, items, items1);
})(_callSuper.default);
tmp5.contextType = VirtualizedListCellContextProvider.VirtualizedListContext;
let StyleSheet = get_registerCallableModule.StyleSheet;
let obj = {};
if (get_registerCallableModule.Platform.OS === "android") {
  obj = {};
  obj = { scale: -1 };
  let items = [obj];
  obj.transform = items;
  let obj1 = obj;
} else {
  obj1 = {};
  let obj2 = { scaleY: -1 };
  let items1 = [obj2];
  obj1.transform = items1;
}
obj.verticallyInverted = obj1;
let items2 = [{ scaleX: -1 }];
obj.horizontallyInverted = { transform: items2 };
obj.debug = { flex: 1 };
obj.debugOverlayBase = { position: "absolute", top: 0, right: 0 };
obj.debugOverlay = { bottom: 0, width: 20, borderColor: "blue", borderWidth: 1 };
obj.debugOverlayFrame = { left: 0, backgroundColor: "orange" };
obj.debugOverlayFrameLast = { left: 0, borderColor: "green", borderWidth: 2 };
obj.debugOverlayFrameVis = { left: 0, borderColor: "red", borderWidth: 2 };
const styles = StyleSheet.create(obj);

export default tmp5;
