// Module ID: 187
// Function ID: 2040
// Name: createPerformanceLogger
// Dependencies: [1, 12, 13, 188]
// Exports: default

// Module 187 (createPerformanceLogger)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import infoLog2 from "infoLog" /* 188 */;
import module_1 from "module_1" /* 1 */;

let closure_1 = module_1(_classCallCheck);
let closure_2 = module_1(_defineProperties);
const infoLog = module_1(infoLog2);
let fn = global.nativeQPLTimestamp;
if (fn == null) {
  fn = () => {
    const _performance = global.performance;
    return _performance.now();
  };
}
let closure_4 = (() => {
  class PerformanceLogger {
    constructor() {
      defaultResult = closure_1_1.default(this, PerformanceLogger);
      this._timespans = {};
      this._extras = {};
      this._points = {};
      this._pointExtras = {};
      this._closed = false;
      return;
    }
  }
  let obj = {
    key: "addTimespan",
    value: function addTimespan(arg0, arg1, endTime, startExtras, endExtras) {
      let num = arg1;
      const self = this;
      if (!this._closed) {
        if (!self._timespans[arg0]) {
          const obj = { startTime: num, endTime };
          if (!num) {
            num = 0;
          }
          obj.totalTime = endTime - num;
          obj.startExtras = startExtras;
          obj.endExtras = endExtras;
          self._timespans[arg0] = obj;
        }
      }
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , ];
  obj = {
    key: "append",
    value: function append(getTimespans) {
      this._timespans = Object.assign({}, getTimespans.getTimespans(), this._timespans);
      this._extras = Object.assign({}, getTimespans.getExtras(), this._extras);
      this._points = Object.assign({}, getTimespans.getPoints(), this._points);
      this._pointExtras = Object.assign({}, getTimespans.getPointExtras(), this._pointExtras);
    }
  };
  items[1] = obj;
  obj = {
    key: "clear",
    value: function clear() {
      this._timespans = {};
      this._extras = {};
      this._points = {};
    }
  };
  items[2] = obj;
  items[3] = {
    key: "clearCompleted",
    value: function clearCompleted() {
      const self = this;
      for (const key10005 in this._timespans) {
        let tmp4 = key10005;
        let tmp5 = self._timespans[key10005];
        let totalTime;
        if (tmp5 != null) {
          totalTime = tmp5.totalTime;
        }
        if (totalTime == null) {
          continue;
        } else {
          let _timespans = self._timespans;
          delete tmp[tmp2];
          continue;
        }
        continue;
      }
      self._extras = {};
      self._points = {};
    }
  };
  items[4] = {
    key: "close",
    value: function close() {
      this._closed = true;
    }
  };
  items[5] = {
    key: "currentTimestamp",
    value: function currentTimestamp() {
      return closure_1_3();
    }
  };
  items[6] = {
    key: "getExtras",
    value: function getExtras() {
      return this._extras;
    }
  };
  items[7] = {
    key: "getPoints",
    value: function getPoints() {
      return this._points;
    }
  };
  items[8] = {
    key: "getPointExtras",
    value: function getPointExtras() {
      return this._pointExtras;
    }
  };
  items[9] = {
    key: "getTimespans",
    value: function getTimespans() {
      return this._timespans;
    }
  };
  items[10] = {
    key: "hasTimespan",
    value: function hasTimespan(arg0) {
      return this._timespans[arg0];
    }
  };
  items[11] = {
    key: "isClosed",
    value: function isClosed() {
      return this._closed;
    }
  };
  items[12] = {
    key: "logEverything",
    value: function logEverything() {

    }
  };
  items[13] = {
    key: "markPoint",
    value: function markPoint(initializeCore_end, arg1) {
      const self = this;
      if (arguments.length > 1) {
        if (arguments[1] !== undefined) {
          let tmp = arguments[1];
        }
        if (arguments.length > 2) {
          const tmp2 = arguments[2];
        }
        if (!self._closed) {
          if (self._points[initializeCore_end] == null) {
            self._points[initializeCore_end] = tmp;
            if (tmp2) {
              self._pointExtras[initializeCore_end] = tmp2;
            }
          }
        }
      }
      tmp = closure_1_3();
    }
  };
  items[14] = {
    key: "removeExtra",
    value: function removeExtra(arg0) {
      delete tmp[tmp2];
      return this._extras[arg0];
    }
  };
  items[15] = {
    key: "setExtra",
    value: function setExtra(usedReactConcurrentRoot, closure_4) {
      const self = this;
      if (!this._closed) {
        const _extras = self._extras;
        if (!_extras.hasOwnProperty(usedReactConcurrentRoot)) {
          self._extras[usedReactConcurrentRoot] = closure_4;
        }
      }
    }
  };
  items[16] = {
    key: "startTimespan",
    value: function startTimespan(_perfKey) {
      const self = this;
      if (arguments.length > 1) {
        if (arguments[1] !== undefined) {
          let tmp = arguments[1];
        }
        if (arguments.length > 2) {
          const tmp2 = arguments[2];
        }
        if (!self._closed) {
          if (!self._timespans[_perfKey]) {
            const obj = { startTime: tmp, startExtras: tmp2 };
            self._timespans[_perfKey] = obj;
          }
        }
      }
      tmp = closure_1_3();
    }
  };
  items[17] = {
    key: "stopTimespan",
    value: function stopTimespan(_perfKey) {
      const self = this;
      if (arguments.length > 1) {
        if (arguments[1] !== undefined) {
          let tmp = arguments[1];
        }
        if (arguments.length > 2) {
          const tmp2 = arguments[2];
        }
        if (!self._closed) {
          if (self._timespans[_perfKey]) {
            if (tmp4.startTime != null) {
              if (tmp4.endTime == null) {
                tmp4.endExtras = tmp2;
                tmp4.endTime = tmp;
                ({ startTime, endTime } = tmp4);
                if (!startTime) {
                  startTime = 0;
                }
                tmp4.totalTime = endTime - startTime;
              }
            }
          }
        }
      }
      tmp = closure_1_3();
    }
  };
  return closure_2.default(PerformanceLogger, items);
})();

export default function createPerformanceLogger() {
  return new closure_4();
};
export const getCurrentTimestamp = fn;
