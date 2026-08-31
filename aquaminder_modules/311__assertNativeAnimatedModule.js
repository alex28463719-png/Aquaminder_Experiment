// Module ID: 311
// Function ID: 3621
// Name: _assertNativeAnimatedModule
// Dependencies: [1, 12, 13, 31, 32, 304, 20]

// Module 311 (_assertNativeAnimatedModule)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import invariant from "invariant" /* 20 */;
import _classPrivateFieldBase from "_classPrivateFieldBase" /* 31 */;
import _classPrivateFieldKey2 from "_classPrivateFieldKey" /* 32 */;
import ensureGlobalEventEmitterListeners from "ensureGlobalEventEmitterListeners" /* 304 */;
import module_1 from "module_1" /* 1 */;

let closure_0 = module_1(_classCallCheck);
let closure_1 = module_1(_defineProperties);
let closure_2 = module_1(_classPrivateFieldBase);
const _classPrivateFieldKey = module_1(_classPrivateFieldKey2);
let closure_3 = module_1(ensureGlobalEventEmitterListeners);
let closure_4 = module_1(invariant);
let c5 = 1;
function _assertNativeAnimatedModule() {
  const result = mod.default.assertNativeAnimatedModule();
  c6 = null;
}
const field = _classPrivateFieldKey.default("listeners");

export default (() => {
  class AnimatedNode {
    constructor(arg0) {
      defaultResult = AnimatedNode.default(this, AnimatedNode);
      obj = { writable: true };
      map = new Map();
      obj.value = map;
      definePropertyResult = Object.defineProperty(this, closure_1_7, obj);
      this._platformConfig = undefined;
      this.__isNative = false;
      this.__nativeTag = undefined;
      this.__debugID = undefined;
      return;
    }
  }
  let obj = {
    key: "__attach",
    value: function __attach() {

    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "__detach",
    value: function __detach() {
      const self = this;
      this.removeAllListeners();
      if (this.__isNative) {
        if (self.__nativeTag != null) {
          const API = closure_1_3.default.API;
          API.dropAnimatedNode(self.__nativeTag);
          self.__nativeTag = undefined;
        }
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "__getValue",
    value: function __getValue() {

    }
  };
  items[2] = obj;
  items[3] = {
    key: "__getAnimatedValue",
    value: function __getAnimatedValue() {
      return this.__getValue();
    }
  };
  items[4] = {
    key: "__addChild",
    value: function __addChild(arg0) {

    }
  };
  items[5] = {
    key: "__removeChild",
    value: function __removeChild(arg0) {

    }
  };
  items[6] = {
    key: "__getChildren",
    value: function __getChildren() {
      return [];
    }
  };
  items[7] = {
    key: "__makeNative",
    value: function __makeNative(_platformConfig) {
      closure_1_4.default(this.__isNative, "This node cannot be made a \"native\" animated node");
      this._platformConfig = _platformConfig;
    }
  };
  items[8] = {
    key: "addListener",
    value: function addListener(arg0) {
      closure_5 = tmp + 1;
      const StringResult = String(+closure_5);
      const result = closure_1_2.default(this, closure_1_7)[closure_1_7].set(StringResult, arg0);
      return StringResult;
    }
  };
  items[9] = {
    key: "removeListener",
    value: function removeListener(arg0) {
      closure_1_2.default(this, closure_1_7)[closure_1_7].delete(arg0);
    }
  };
  items[10] = {
    key: "removeAllListeners",
    value: function removeAllListeners() {
      closure_1_2.default(this, closure_1_7)[closure_1_7].clear();
    }
  };
  items[11] = {
    key: "hasListeners",
    value: function hasListeners() {
      return closure_1_2.default(this, closure_1_7)[closure_1_7].size > 0;
    }
  };
  items[12] = {
    key: "__onAnimatedValueUpdateReceived",
    value: function __onAnimatedValueUpdateReceived(arg0) {
      this.__callListeners(arg0);
    }
  };
  items[13] = {
    key: "__callListeners",
    value: function __callListeners(value) {
      const obj = { value };
      const item = closure_1_2.default(this, closure_1_7)[closure_1_7].forEach((arg0) => {
        arg0(obj);
      });
    }
  };
  items[14] = {
    key: "__getNativeTag",
    value: function __getNativeTag() {
      const self = this;
      let __nativeTag = this.__nativeTag;
      if (__nativeTag == null) {
        if (closure_1_6 != null) {
          closure_1_6();
        }
        closure_1_4.default(self.__isNative, "Attempt to get native tag from node not marked as \"native\"");
        const newNodeTag = closure_1_3.default.generateNewNodeTag();
        self.__nativeTag = newNodeTag;
        const __getNativeConfigResult = self.__getNativeConfig();
        if (self._platformConfig) {
          __getNativeConfigResult.platformConfig = self._platformConfig;
        }
        const API = closure_1_3.default.API;
        const animatedNode = API.createAnimatedNode(newNodeTag, __getNativeConfigResult);
        __nativeTag = newNodeTag;
        const _default = closure_1_3.default;
      }
      return __nativeTag;
    }
  };
  items[15] = {
    key: "__getNativeConfig",
    value: function __getNativeConfig() {
      const error = new Error("This JS animated node type cannot be used as native animated node");
      throw error;
    }
  };
  items[16] = {
    key: "__getPlatformConfig",
    value: function __getPlatformConfig() {
      return this._platformConfig;
    }
  };
  items[17] = {
    key: "__setPlatformConfig",
    value: function __setPlatformConfig(_platformConfig) {
      this._platformConfig = _platformConfig;
    }
  };
  items[18] = {
    key: "toJSON",
    value: function toJSON() {
      return this.__getValue();
    }
  };
  items[19] = {
    key: "__getDebugID",
    value: function __getDebugID() {

    }
  };
  return closure_1.default(AnimatedNode, items);
})();
