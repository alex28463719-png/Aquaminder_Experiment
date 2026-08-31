// Module ID: 351
// Function ID: 4373
// Name: Info
// Dependencies: [1, 13, 12, 352]

// Module 351 (Info)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties2 from "_defineProperties" /* 13 */;
import ListMetricsAggregator2 from "ListMetricsAggregator" /* 352 */;
import module_1 from "module_1" /* 1 */;

const _defineProperties = module_1(_defineProperties2);
let closure_2 = module_1(_classCallCheck);
const ListMetricsAggregator = module_1(ListMetricsAggregator2);
class Info {
  constructor() {
    defaultResult = closure_2.default(this, Info);
    this.any_blank_count = 0;
    this.any_blank_ms = 0;
    this.any_blank_speed_sum = 0;
    this.mostly_blank_count = 0;
    this.mostly_blank_ms = 0;
    this.pixels_blank = 0;
    this.pixels_sampled = 0;
    this.pixels_scrolled = 0;
    this.total_time_spent = 0;
    this.sample_count = 0;
    return;
  }
}
let closure_3 = _defineProperties.default(Info);
let closure_4 = [];
let c5 = 10;
let c6 = null;

export default (() => {
  class FillRateHelper {
    constructor(arg0) {
      self = this;
      defaultResult = closure_1_2.default(this, FillRateHelper);
      this._anyBlankStartTime = null;
      this._enabled = false;
      tmp2 = new closure_1_3();
      this._info = tmp2;
      this._mostlyBlankStartTime = null;
      this._samplesStartTime = null;
      this._listMetrics = arg0;
      num = closure_6;
      if (!closure_6) {
        num = 0;
      }
      self._enabled = num > Math.random();
      _resetDataResult = self._resetData();
      return;
    }
  }
  let obj = {
    key: "activate",
    value: function activate() {
      const self = this;
      if (this._enabled) {
        if (self._samplesStartTime == null) {
          const _performance = FillRateHelper.performance;
          self._samplesStartTime = _performance.now();
        }
      }
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "deactivateAndFlush",
    value: function deactivateAndFlush() {
      const self = this;
      if (this._enabled) {
        const _samplesStartTime = self._samplesStartTime;
        if (_samplesStartTime != null) {
          if (self._info.sample_count < closure_5) {
            self._resetData();
          } else {
            const _performance = FillRateHelper.performance;
            const _Object = Object;
            const obj = { total_time_spent: _performance.now() - _samplesStartTime };
            closure_0 = Object.assign({}, self._info, obj);
            const item = arr.forEach((arg0) => arg0(closure_0));
            self._resetData();
          }
        }
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "computeBlankness",
    value: function computeBlankness(props, cellsAroundViewport, _scrollMetrics) {
      const self = this;
      if (this._enabled) {
        if (props.getItemCount(props.data) !== 0) {
          if (cellsAroundViewport.last >= cellsAroundViewport.first) {
            if (self._samplesStartTime != null) {
              ({ dOffset, offset, visibleLength } = _scrollMetrics);
              const _info7 = self._info;
              _info7.sample_count = _info7.sample_count + 1;
              const _info8 = self._info;
              const _Math7 = Math;
              _info8.pixels_sampled = _info8.pixels_sampled + Math.round(visibleLength);
              const _info9 = self._info;
              const _Math8 = Math;
              const _Math9 = Math;
              _info9.pixels_scrolled = _info9.pixels_scrolled + Math.round(Math.abs(dOffset));
              const _Math10 = Math;
              const _Math11 = Math;
              const rounded = Math.round(Math.abs(_scrollMetrics.velocity) * 1000);
              const _performance = FillRateHelper.performance;
              const nowResult = _performance.now();
              if (self._anyBlankStartTime != null) {
                const _info = self._info;
                _info.any_blank_ms = _info.any_blank_ms + (nowResult - self._anyBlankStartTime);
              }
              self._anyBlankStartTime = null;
              if (self._mostlyBlankStartTime != null) {
                const _info2 = self._info;
                _info2.mostly_blank_ms = _info2.mostly_blank_ms + (nowResult - self._mostlyBlankStartTime);
              }
              self._mostlyBlankStartTime = null;
              const first = cellsAroundViewport.first;
              const _listMetrics = self._listMetrics;
              const cellMetrics = _listMetrics.getCellMetrics(first, props);
              let tmp2 = first;
              let tmp3 = cellMetrics;
              if (first <= cellsAroundViewport.last) {
                let tmp4 = first;
                if (!cellMetrics) {
                  const _listMetrics2 = self._listMetrics;
                  const cellMetrics1 = _listMetrics2.getCellMetrics(tmp4, props);
                  const sum = tmp4 + 1;
                  tmp2 = sum;
                  tmp3 = cellMetrics1;
                  while (sum <= cellsAroundViewport.last) {
                    tmp4 = sum;
                    if (!cellMetrics1) {
                      continue;
                    } else {
                      tmp4 = sum;
                      tmp2 = sum;
                      tmp3 = cellMetrics1;
                      if (cellMetrics1.isMounted) {
                        break;
                      }
                    }
                    continue;
                  }
                } else {
                  tmp4 = first;
                  tmp2 = first;
                  tmp3 = cellMetrics;
                }
              }
              let num2 = 0;
              if (tmp3) {
                num2 = 0;
                if (tmp2 > 0) {
                  const _Math = Math;
                  const _Math2 = Math;
                  num2 = Math.min(visibleLength, Math.max(0, tmp3.offset - offset));
                }
              }
              const last = cellsAroundViewport.last;
              const _listMetrics3 = self._listMetrics;
              const cellMetrics2 = _listMetrics3.getCellMetrics(last, props);
              let tmp8 = last;
              let arr = cellMetrics2;
              if (last >= cellsAroundViewport.first) {
                let tmp9 = last;
                if (!cellMetrics2) {
                  const _listMetrics4 = self._listMetrics;
                  const cellMetrics3 = _listMetrics4.getCellMetrics(tmp9, props);
                  const diff = tmp9 - 1;
                  tmp8 = diff;
                  arr = cellMetrics3;
                  while (diff >= cellsAroundViewport.first) {
                    tmp9 = diff;
                    if (!cellMetrics3) {
                      continue;
                    } else {
                      tmp9 = diff;
                      tmp8 = diff;
                      arr = cellMetrics3;
                      if (cellMetrics3.isMounted) {
                        break;
                      }
                    }
                    continue;
                  }
                } else {
                  tmp9 = last;
                  tmp8 = last;
                  arr = cellMetrics2;
                }
              }
              let num3 = 0;
              if (arr) {
                num3 = 0;
                if (tmp8 < props.getItemCount(props.data) - 1) {
                  const _Math3 = Math;
                  const _Math4 = Math;
                  num3 = Math.min(visibleLength, Math.max(0, offset + visibleLength - (arr.offset + arr.length)));
                }
              }
              const _Math5 = Math;
              const rounded1 = Math.round(num2 + num3);
              const result = rounded1 / visibleLength;
              if (result > 0) {
                self._anyBlankStartTime = nowResult;
                const _info3 = self._info;
                _info3.any_blank_speed_sum = _info3.any_blank_speed_sum + rounded;
                const _info4 = self._info;
                _info4.any_blank_count = _info4.any_blank_count + 1;
                const _info5 = self._info;
                _info5.pixels_blank = _info5.pixels_blank + rounded1;
                if (result > 0.5) {
                  self._mostlyBlankStartTime = nowResult;
                  const _info6 = self._info;
                  _info6.mostly_blank_count = _info6.mostly_blank_count + 1;
                }
              } else if (rounded < 0.01) {
                self.deactivateAndFlush();
              } else {
                const _Math6 = Math;
              }
              return result;
            }
          }
        }
      }
      return 0;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "enabled",
    value: function enabled() {
      return this._enabled;
    }
  };
  items[4] = {
    key: "_resetData",
    value: function _resetData() {
      this._anyBlankStartTime = null;
      this._info = new closure_1_3();
      this._mostlyBlankStartTime = null;
      this._samplesStartTime = null;
    }
  };
  const items1 = [
    {
      key: "addListener",
      value: function addListener(arg0) {
        closure_0 = arg0;
        if (closure_6 === null) {
          const _console = console;
          console.warn("Call `FillRateHelper.setSampleRate` before `addListener`.");
        }
        return {
          remove() {
            closure_4 = closure_4.filter((arg0) => closure_1_0 !== arg0);
          }
        };
      }
    },
    {
      key: "setSampleRate",
      value: function setSampleRate(arg0) {
        closure_6 = arg0;
      }
    },
    {
      key: "setMinSampleCount",
      value: function setMinSampleCount(arg0) {
        closure_5 = arg0;
      }
    }
  ];
  return _defineProperties.default(FillRateHelper, items, items1);
})();
