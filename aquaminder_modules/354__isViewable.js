// Module ID: 354
// Function ID: 4424
// Name: _isViewable
// Dependencies: [1, 38, 12, 13, 352, 20]

// Module 354 (_isViewable)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _slicedToArray from "_slicedToArray" /* 38 */;
import ListMetricsAggregator2 from "ListMetricsAggregator" /* 352 */;
import module_1 from "module_1" /* 1 */;

function _isViewable(arg0, arg1, result, diff, result1) {
  if (_isEntirelyVisible(result, diff, result1)) {
    return true;
  } else {
    const tmp2 = _getPixelsVisible(result, diff, result1);
    if (arg0) {
      result = tmp2 / result1;
    } else {
      result = tmp2 / arg5;
    }
    return 100 * result >= arg1;
  }
}
function _getPixelsVisible(result, diff, result1) {
  const bound = Math.min(diff, result1);
  return Math.max(0, bound - Math.max(result, 0));
}
function _isEntirelyVisible(result, diff, result1) {
  let tmp = result >= 0;
  if (tmp) {
    tmp = diff <= result1;
  }
  if (tmp) {
    tmp = diff > result;
  }
  return tmp;
}
let closure_2 = module_1(_slicedToArray);
let closure_3 = module_1(_classCallCheck);
let closure_4 = module_1(_defineProperties);
const ListMetricsAggregator = module_1(ListMetricsAggregator2);

export default (() => {
  class ViewabilityHelper {
    constructor() {
      self = this;
      if (arguments.length > 0) {
        if (arguments[0] !== undefined) {
          first = arguments[0];
        }
        tmp2 = closure_1_3;
        tmp3 = ViewabilityHelper;
        defaultResult = closure_1_3.default(self, ViewabilityHelper);
        flag = false;
        self._hasInteracted = false;
        tmp5 = globalThis;
        _Set = Set;
        prototype = Set.prototype;
        tmp6 = new.target;
        tmp7 = new.target;
        set = new Set();
        tmp9 = set;
        self._timers = set;
        self._viewableIndices = [];
        _Map = Map;
        prototype2 = Map.prototype;
        tmp10 = new.target;
        tmp11 = new.target;
        map = new Map();
        tmp13 = map;
        self._viewableItems = map;
        self._config = { viewAreaCoveragePercentThreshold: 0 };
        return;
      }
      return;
    }
  }
  let obj = {
    key: "dispose",
    value: function dispose() {
      const _timers = this._timers;
      const item = _timers.forEach(clearTimeout);
    }
  };
  let items = [obj, , , , , ];
  obj = {
    key: "computeViewableItems",
    value: function computeViewableItems(getItemCount, arg1, arg2, getCellMetrics, renderRange) {
      const itemCount = getItemCount.getItemCount(getItemCount.data);
      ({ itemVisiblePercentThreshold, viewAreaCoveragePercentThreshold } = this._config);
      let tmp3 = itemVisiblePercentThreshold;
      if (viewAreaCoveragePercentThreshold != null) {
        tmp3 = viewAreaCoveragePercentThreshold;
      }
      let tmp5 = tmp3 != null;
      if (tmp5) {
        tmp5 = itemVisiblePercentThreshold != null !== (viewAreaCoveragePercentThreshold != null);
      }
      ViewabilityHelper(closure_1_1[5])(tmp5, "Must set exactly one of itemVisiblePercentThreshold or viewAreaCoveragePercentThreshold");
      const items = [];
      if (itemCount === 0) {
        return items;
      } else {
        let tmp7 = renderRange;
        if (!renderRange) {
          let obj = { first: 0, last: itemCount - 1 };
          tmp7 = obj;
        }
        ({ first, last } = tmp7);
        if (last >= itemCount) {
          const _console = console;
          const _JSON = JSON;
          obj = { renderRange, itemCount };
          console.warn(`Invalid render range computing viewability ${JSON.stringify(obj2)}`);
          return [];
        } else {
          let num2 = -1;
          if (first <= last) {
            while (true) {
              let cellMetrics = getCellMetrics.getCellMetrics(first, getItemCount);
              let tmp8 = num2;
              let tmp9 = first;
              let tmp10 = tmp22;
              let tmp11 = tmp23;
              let tmp12 = num2;
              if (!cellMetrics) {
                first = first + 1;
                num2 = tmp12;
                tmp22 = tmp10;
                tmp23 = tmp11;
                if (first > last) {
                  break;
                }
              } else {
                let _Math = Math;
                let rounded = Math.floor(cellMetrics.offset - arg1);
                let _Math2 = Math;
                let rounded1 = Math.floor(rounded + cellMetrics.length);
                if (rounded < arg2) {
                  if (rounded1 > 0) {
                    let tmp15 = closure_1_5;
                    let tmp16 = tmp2;
                    let tmp17 = tmp3;
                    let tmp18 = rounded;
                    let tmp19 = rounded1;
                    let tmp20 = arg2;
                    tmp12 = first;
                    tmp10 = rounded;
                    tmp11 = rounded1;
                    if (closure_1_5(tmp2, tmp3, rounded, rounded1, arg2, cellMetrics.length)) {
                      let arr = items.push(first);
                      tmp12 = first;
                      tmp10 = rounded;
                      tmp11 = rounded1;
                    }
                  }
                }
                tmp12 = num2;
                tmp10 = rounded;
                tmp11 = rounded1;
                if (num2 >= 0) {
                  break;
                }
              }
              break;
            }
          }
          return items;
        }
      }
      const tmp4 = ViewabilityHelper(closure_1_1[5]);
    }
  };
  items[1] = obj;
  obj = {
    key: "onUpdate",
    value: function onUpdate(getItemCount, arg1, arg2, getCellMetrics, closure_1, closure_2, renderRange) {
      let self = this;
      closure_0 = getItemCount;
      self = this;
      const itemCount = getItemCount.getItemCount(getItemCount.data);
      if (!this._config.waitForInteraction) {
        if (itemCount !== 0) {
          if (getCellMetrics.getCellMetrics(0, getItemCount)) {
            let items = [];
            let viewableItems = items;
            if (itemCount) {
              viewableItems = self.computeViewableItems(getItemCount, arg1, arg2, getCellMetrics, renderRange);
              items = viewableItems;
            }
            if (self._viewableIndices.length === items.length) {
              const _viewableIndices = self._viewableIndices;
            }
            self._viewableIndices = items;
            if (self._config.minimumViewTime) {
              const _setTimeout = setTimeout;
              const timerId = setTimeout(() => {
                const _timers = self._timers;
                _timers.delete(timerId);
                self._onUpdateSync(closure_0, viewableItems, closure_2, closure_1);
              }, self._config.minimumViewTime);
              let _timers = self._timers;
              _timers.add(timerId);
            } else {
              self._onUpdateSync(getItemCount, items, closure_2, closure_1);
            }
          }
        }
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "resetViewableIndices",
    value: function resetViewableIndices() {
      this._viewableIndices = [];
    }
  };
  items[4] = {
    key: "recordInteraction",
    value: function recordInteraction() {
      this._hasInteracted = true;
    }
  };
  items[5] = {
    key: "_onUpdateSync",
    value: function _onUpdateSync(closure_0, items, closure_2, closure_1) {
      let self = this;
      self = this;
      const found = items.filter((name) => {
        const _viewableIndices = self._viewableIndices;
        return _viewableIndices.includes(name);
      });
      const _viewableItems = this._viewableItems;
      const map = new Map(found.map((arg0) => {
        const tmp = callback(arg0, true, closure_0);
        const items = [tmp.key, tmp];
        return items;
      }));
      let obj = map;
      items = [];
      while (tmp3 !== undefined) {
        let tmp5 = closure_1_2;
        let defaultResult = closure_1_2.default(tmp4, 2);
        let tmp7 = defaultResult[1];
        let tmp8 = _viewableItems;
        if (!_viewableItems.has(defaultResult[0])) {
          let tmp9 = items;
          let tmp10 = tmp7;
          let arr = items.push(tmp7);
        }
        continue;
      }
      tmp3 = map[Symbol.iterator]();
      while (tmp12 !== undefined) {
        let tmp14 = closure_1_2;
        let defaultResult1 = closure_1_2.default(tmp13, 2);
        let tmp16 = defaultResult1[1];
        let tmp17 = tmp2;
        if (!obj.has(defaultResult1[0])) {
          let tmp18 = items;
          let _Object = Object;
          let tmp19 = tmp16;
          obj = { isViewable: false };
          arr = items.push(Object.assign({}, tmp16, obj));
        }
        continue;
      }
      if (items.length > 0) {
        self._viewableItems = obj;
        obj = {};
        const _Array = Array;
        obj.viewableItems = Array.from(obj.values());
        obj.changed = items;
        obj.viewabilityConfig = self._config;
        closure_2(obj);
      }
    }
  };
  return closure_4.default(ViewabilityHelper, items);
})();
