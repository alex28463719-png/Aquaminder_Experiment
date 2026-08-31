// Module ID: 234
// Function ID: 2574
// Name: defaultExtras
// Dependencies: [1, 38, 12, 13, 22, 235, 237, 239]

// Module 234 (defaultExtras)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _callSuper from "_callSuper" /* 22 */;
import _slicedToArray from "_slicedToArray" /* 38 */;
import RedBox from "RedBox" /* 235 */;
import BugReporting2 from "BugReporting" /* 237 */;
import module_1 from "module_1" /* 1 */;

function defaultExtras() {
  closure_8.addFileSource("react_hierarchy.txt", () => closure_1_0(closure_1_1[7]).default());
}
let closure_2 = module_1(_slicedToArray);
let closure_3 = module_1(_classCallCheck);
let closure_4 = module_1(_defineProperties);
let closure_5 = module_1(_callSuper);
let closure_6 = module_1(RedBox);
let closure_7 = module_1(BugReporting2);
let tmp3 = (() => {
  class BugReporting {
    constructor() {
      defaultResult = closure_1_3.default(this, BugReporting);
      return;
    }
  }
  let obj = {
    key: "_maybeInit",
    value: function _maybeInit() {
      if (!BugReporting._subscription) {
        BugReporting._subscription = closure_1_5.default.addListener("collectBugExtraData", BugReporting.collectExtraData, null);
        closure_1_9();
        const _default = closure_1_5.default;
      }
      if (!BugReporting._redboxSubscription) {
        BugReporting._redboxSubscription = closure_1_5.default.addListener("collectRedBoxExtraData", BugReporting.collectExtraData, null);
        const _default2 = closure_1_5.default;
      }
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "addSource",
    value: function addSource(arg0, arg1) {
      return this._addSource(arg0, arg1, BugReporting._extraSources);
    }
  };
  items[1] = obj;
  obj = {
    key: "addFileSource",
    value: function addFileSource(arg0, arg1) {
      return this._addSource(arg0, arg1, BugReporting._fileSources);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "_addSource",
    value: function _addSource(arg0, arg1, _extraSources) {
      BugReporting = arg0;
      closure_1 = _extraSources;
      BugReporting._maybeInit();
      if (_extraSources.has(arg0)) {
        const _console = console;
        const _HermesInternal = HermesInternal;
        console.warn("BugReporting.add* called multiple times for same key '" + arg0 + "'");
      }
      const result = _extraSources.set(arg0, arg1);
      return {
        remove() {
          set.delete(closure_0);
        }
      };
    }
  };
  items[4] = {
    key: "collectExtraData",
    value: function collectExtraData() {
      const extras = {};
      while (tmp !== undefined) {
        let tmp3 = closure_1_2;
        let defaultResult = closure_1_2.default(tmp2, 2);
        let tmp5 = extras;
        extras[defaultResult[0]] = defaultResult[1]();
        continue;
      }
      const files = {};
      for (const item10025 of tmp6) {
        let tmp7 = closure_1_2;
        let defaultResult1 = closure_1_2.default(item10025, 2);
        let tmp9 = files;
        files[defaultResult1[0]] = defaultResult1[1]();
        continue;
      }
      if (closure_1_7.default != null) {
        if (closure_1_7.default.setExtraData != null) {
          closure_1_7.default.setExtraData(extras, files);
          const _default = closure_1_7.default;
        }
      }
      if (closure_1_6.default != null) {
        if (closure_1_6.default.setExtraData != null) {
          closure_1_6.default.setExtraData(extras, "From BugReporting.js");
          const _default2 = closure_1_6.default;
        }
      }
      return { extras, files };
    }
  };
  return closure_4.default(BugReporting, null, items);
})();
let closure_8 = tmp3;
tmp3._extraSources = new Map();
const map = new Map();
tmp3._fileSources = new Map();
tmp3._subscription = null;
tmp3._redboxSubscription = null;

export default tmp3;
