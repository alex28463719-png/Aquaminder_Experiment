// Module ID: 358
// Function ID: 4477
// Name: CellRenderMask
// Dependencies: [1, 6, 38, 12, 13, 20]

// Module 358 (CellRenderMask)
import _toConsumableArray from "_toConsumableArray" /* 6 */;
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import invariant from "invariant" /* 20 */;
import _slicedToArray from "_slicedToArray" /* 38 */;
import module_1 from "module_1" /* 1 */;

let closure_0 = module_1(_toConsumableArray);
let closure_1 = module_1(_slicedToArray);
let closure_2 = module_1(_classCallCheck);
let closure_3 = module_1(_defineProperties);
let closure_4 = module_1(invariant);

export const CellRenderMask = (() => {
  class CellRenderMask {
    constructor(arg0) {
      self = this;
      defaultResult = closure_1_2.default(this, CellRenderMask);
      defaultResult1 = closure_1_4.default(arg0 >= 0, "CellRenderMask must contain a non-negative number os cells");
      this._numCells = arg0;
      if (arg0 === 0) {
        self._regions = [];
      } else {
        obj = { first: 0, last: null, isSpacer: true };
        num = 1;
        obj.last = arg0 - 1;
        items = [];
        items[0] = obj;
        self._regions = items;
      }
      return;
    }
  }
  let obj = {
    key: "enumerateRegions",
    value: function enumerateRegions() {
      return this._regions;
    }
  };
  let items = [obj, , , , ];
  obj = {
    key: "addCells",
    value: function addCells(VirtualizedList) {
      const self = this;
      let tmp = VirtualizedList.first >= 0;
      if (tmp) {
        tmp = VirtualizedList.first < self._numCells;
      }
      if (tmp) {
        tmp = VirtualizedList.last >= -1;
      }
      if (tmp) {
        tmp = VirtualizedList.last < self._numCells;
      }
      if (tmp) {
        tmp = VirtualizedList.last >= VirtualizedList.first - 1;
      }
      closure_1_4.default(tmp, "CellRenderMask.addCells called with invalid cell range");
      if (VirtualizedList.last >= VirtualizedList.first) {
        const defaultResult1 = closure_1_1.default(self._findRegion(VirtualizedList.first), 2);
        const first = defaultResult1[0];
        [tmp14, tmp15] = closure_1_1.default(self._findRegion(VirtualizedList.last), 2);
        const items = [];
        const items1 = [];
        const _Object = Object;
        let obj = { isSpacer: false };
        const merged = Object.assign({}, VirtualizedList, obj);
        if (first.first < merged.first) {
          if (first.isSpacer) {
            obj = { first: first.first, last: merged.first - 1, isSpacer: true };
            items.push(obj);
          } else {
            merged.first = first.first;
          }
        }
        if (tmp14.last > merged.last) {
          if (tmp14.isSpacer) {
            obj = { first: merged.last + 1, last: tmp14.last, isSpacer: true };
            items1.push(obj);
          } else {
            merged.last = tmp14.last;
          }
        }
        const items2 = [];
        const items3 = [merged];
        const _regions = self._regions;
        const splice = _regions.splice;
        const items4 = [defaultResult1[1], tmp15 - defaultResult1[1] + 1];
        splice.apply(_regions, items4.concat(CellRenderMask.default(items2.concat(items, items3, items1))));
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "numCells",
    value: function numCells() {
      return this._numCells;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "equals",
    value: function equals(_numCells) {
      const self = this;
      closure_0 = _numCells;
      let everyResult = this._numCells === _numCells._numCells && self._regions.length === _numCells._regions.length;
      if (everyResult) {
        const _regions = self._regions;
        everyResult = _regions.every((first) => {
          let tmp = first.first === _numCells._regions[arg1].first;
          if (tmp) {
            tmp = first.last === _numCells._regions[arg1].last;
          }
          if (tmp) {
            tmp = first.isSpacer === _numCells._regions[arg1].isSpacer;
          }
          return tmp;
        });
      }
      return everyResult;
    }
  };
  items[4] = {
    key: "_findRegion",
    value: function _findRegion(first) {
      let rounded;
      let tmp4;
      let diff = this._regions.length - 1;
      let num = 0;
      if (0 <= diff) {
        while (true) {
          let _Math = Math;
          rounded = Math.floor((num + diff) / 2);
          tmp4 = tmp._regions[rounded];
          let tmp5 = num;
          let tmp6 = diff;
          if (first >= tmp4.first) {
            if (first <= tmp4.last) {
              break;
            }
          }
          if (first < tmp4.first) {
            let diff1 = rounded - 1;
            let sum = num;
          } else {
            sum = num;
            diff1 = diff;
            if (first > tmp4.last) {
              sum = rounded + 1;
              diff1 = diff;
            }
          }
          num = sum;
          diff = diff1;
        }
        const items = [tmp4, rounded];
        return items;
      }
      closure_1_4.default(false, "A region was not found containing cellIdx " + first);
    }
  };
  return closure_3.default(CellRenderMask, items);
})();
