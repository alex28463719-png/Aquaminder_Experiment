// Module ID: 352
// Function ID: 4388
// Name: ListMetricsAggregator
// Dependencies: [1, 12, 13, 20, 346]

// Module 352 (ListMetricsAggregator)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import invariant from "invariant" /* 20 */;
import module_1 from "module_1" /* 1 */;

let closure_2 = module_1(_classCallCheck);
let closure_3 = module_1(_defineProperties);
let closure_4 = module_1(invariant);

export default (() => {
  class ListMetricsAggregator {
    constructor() {
      defaultResult = closure_1_2.default(this, ListMetricsAggregator);
      this._averageCellLength = 0;
      map = new Map();
      this._cellMetrics = map;
      this._highestMeasuredCellIndex = 0;
      this._measuredCellsLength = 0;
      this._measuredCellsCount = 0;
      this._orientation = { horizontal: false, rtl: false };
      return;
    }
  }
  let obj = {
    key: "notifyCellLayout",
    value: function notifyCellLayout(orientation) {
      const self = this;
      ({ cellIndex, cellKey, layout } = orientation);
      const result = this._invalidateIfOrientationChanged(orientation.orientation);
      const obj = { index: cellIndex, length: this._selectLength(layout), isMounted: true, offset: this.flowRelativeOffset(layout) };
      const _cellMetrics = this._cellMetrics;
      const value = _cellMetrics.get(cellKey);
      if (value) {
        if (obj.offset === value.offset) {
          if (obj.length === value.length) {
            value.isMounted = true;
            return false;
          }
        }
      }
      if (value) {
        self._measuredCellsLength = self._measuredCellsLength + (obj.length - value.length);
      } else {
        self._measuredCellsLength = self._measuredCellsLength + obj.length;
        self._measuredCellsCount = self._measuredCellsCount + 1;
      }
      self._averageCellLength = self._measuredCellsLength / self._measuredCellsCount;
      const _cellMetrics2 = self._cellMetrics;
      const result1 = _cellMetrics2.set(cellKey, obj);
      self._highestMeasuredCellIndex = Math.max(self._highestMeasuredCellIndex, cellIndex);
      return true;
    }
  };
  const items = [obj, , , , , , , , , , , , , , ];
  obj = {
    key: "notifyCellUnmounted",
    value: function notifyCellUnmounted(arg0) {
      const _cellMetrics = this._cellMetrics;
      const value = _cellMetrics.get(arg0);
      if (value) {
        value.isMounted = false;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "notifyListContentLayout",
    value: function notifyListContentLayout(orientation) {
      const result = this._invalidateIfOrientationChanged(orientation.orientation);
      this._contentLength = this._selectLength(orientation.layout);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getAverageCellLength",
    value: function getAverageCellLength() {
      return this._averageCellLength;
    }
  };
  items[4] = {
    key: "getHighestMeasuredCellIndex",
    value: function getHighestMeasuredCellIndex() {
      return this._highestMeasuredCellIndex;
    }
  };
  items[5] = {
    key: "getCellMetricsApprox",
    value: function getCellMetricsApprox(first, props) {
      const self = this;
      const cellMetrics = this.getCellMetrics(first, props);
      if (cellMetrics) {
        if (cellMetrics.index === first) {
          return cellMetrics;
        }
      }
      const highestMeasuredCellIndex = self.getHighestMeasuredCellIndex();
      let sum;
      if (highestMeasuredCellIndex < first) {
        const cellMetrics1 = self.getCellMetrics(highestMeasuredCellIndex, props);
        if (cellMetrics1) {
          sum = cellMetrics1.offset + cellMetrics1.length + self._averageCellLength * (first - highestMeasuredCellIndex - 1);
        }
      }
      if (sum == null) {
        sum = self._averageCellLength * first;
      }
      let tmp4 = first >= 0;
      if (tmp4) {
        tmp4 = first < props.getItemCount(props.data);
      }
      closure_1_4.default(tmp4, `Tried to get frame for out of range index ${first}`);
      const obj = { length: self._averageCellLength, offset: sum, index: first, isMounted: false };
      return obj;
    }
  };
  items[6] = {
    key: "getCellMetrics",
    value: function getCellMetrics(first, keyExtractor) {
      ({ data, getItemLayout } = keyExtractor);
      let tmp2 = first >= 0;
      if (tmp2) {
        tmp2 = first < tmp(data);
      }
      closure_1_4.default(tmp2, `Tried to get metrics for out of range cell index ${first}`);
      keyExtractor = keyExtractor.keyExtractor;
      if (keyExtractor == null) {
        keyExtractor = ListMetricsAggregator(closure_1_1[4]).keyExtractor;
      }
      const _cellMetrics = this._cellMetrics;
      const value = _cellMetrics.get(keyExtractor(keyExtractor.getItem(data, first), first));
      if (value) {
        if (value.index === first) {
          return value;
        }
      }
      if (getItemLayout) {
        const itemLayout = getItemLayout(data, first);
        const obj = { index: first };
        ({ length: obj.length, offset: obj.offset } = itemLayout);
        obj.isMounted = true;
        return obj;
      } else {
        return null;
      }
    }
  };
  items[7] = {
    key: "getCellOffsetApprox",
    value: function getCellOffsetApprox(index, props) {
      const self = this;
      const getCellMetricsApprox = this.getCellMetricsApprox;
      if (Number.isInteger(index)) {
        return getCellMetricsApprox(index, props).offset;
      } else {
        const _Math = Math;
        const cellMetricsApprox = getCellMetricsApprox(Math.floor(index), props);
        const _Math2 = Math;
        return cellMetricsApprox.offset + (index - Math.floor(index)) * cellMetricsApprox.length;
      }
    }
  };
  items[8] = {
    key: "getContentLength",
    value: function getContentLength() {
      const _contentLength = this._contentLength;
      let num = 0;
      if (_contentLength != null) {
        num = _contentLength;
      }
      return num;
    }
  };
  items[9] = {
    key: "hasContentLength",
    value: function hasContentLength() {
      return this._contentLength != null;
    }
  };
  items[10] = {
    key: "flowRelativeOffset",
    value: function flowRelativeOffset(layout) {
      let _contentLength = arg1;
      const self = this;
      const _orientation = this._orientation;
      if (_orientation.horizontal) {
        if (_orientation.rtl) {
          if (_contentLength == null) {
            _contentLength = self._contentLength;
          }
          closure_1_4.default(_contentLength != null, "ListMetricsAggregator must be notified of list content layout before resolving offsets");
          return _contentLength - (self._selectOffset(layout) + self._selectLength(layout));
        }
      }
      return self._selectOffset(layout);
    }
  };
  items[11] = {
    key: "cartesianOffset",
    value: function cartesianOffset(arg0) {
      const self = this;
      const _orientation = this._orientation;
      if (_orientation.horizontal) {
        if (_orientation.rtl) {
          closure_1_4.default(self._contentLength != null, "ListMetricsAggregator must be notified of list content layout before resolving offsets");
          return self._contentLength - arg0;
        }
      }
      return arg0;
    }
  };
  items[12] = {
    key: "_invalidateIfOrientationChanged",
    value: function _invalidateIfOrientationChanged(orientation) {
      const self = this;
      if (orientation.rtl !== this._orientation.rtl) {
        const _cellMetrics = self._cellMetrics;
        _cellMetrics.clear();
      }
      if (orientation.horizontal !== self._orientation.horizontal) {
        self._averageCellLength = 0;
        self._highestMeasuredCellIndex = 0;
        self._measuredCellsLength = 0;
        self._measuredCellsCount = 0;
      }
      self._orientation = orientation;
    }
  };
  items[13] = {
    key: "_selectLength",
    value: function _selectLength(height) {
      let width = height.height;
      if (this._orientation.horizontal) {
        width = height.width;
      }
      return width;
    }
  };
  items[14] = {
    key: "_selectOffset",
    value: function _selectOffset(arg0) {
      let x = arg0.y;
      if (this._orientation.horizontal) {
        x = arg0.x;
      }
      return x;
    }
  };
  return closure_3.default(ListMetricsAggregator, items);
})();
