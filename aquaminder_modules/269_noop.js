// Module ID: 269
// Function ID: 2743
// Name: noop
// Dependencies: [1, 12, 13, 84, 126, 45, 47, 57, 127]

// Module 269 (noop)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import nullthrows from "nullthrows" /* 45 */;
import createProxyWithCachedProperties from "createProxyWithCachedProperties" /* 47 */;
import focusInput from "focusInput" /* 84 */;
import warnForStyleProps2 from "warnForStyleProps" /* 126 */;
import module_1 from "module_1" /* 1 */;

let closure_2 = module_1(_classCallCheck);
let closure_3 = module_1(_defineProperties);
let closure_4 = module_1(focusInput);
const warnForStyleProps = module_1(warnForStyleProps2);
({ measure: closure_5, measureInWindow: closure_6, measureLayout: closure_7, getBoundingClientRect: closure_8, setNativeProps: closure_9 } = module_1(nullthrows).default(createProxyWithCachedProperties.getFabricUIManager()));
function noop() {

}

export default (() => {
  class ReactFabricHostComponent {
    constructor(arg0, arg1, arg2) {
      defaultResult = closure_1_2.default(this, ReactFabricHostComponent);
      this.__nativeTag = arg0;
      this._viewConfig = arg1;
      this.__internalInstanceHandle = arg2;
      return;
    }
  }
  let obj = {
    key: "blur",
    value: function blur() {
      closure_1_4.default.blurTextInput(this);
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "focus",
    value: function focus() {
      closure_1_4.default.focusTextInput(this);
    }
  };
  items[1] = obj;
  obj = {
    key: "measure",
    value: function measure(arg0) {
      const nodeFromInternalInstanceHandle = ReactFabricHostComponent(closure_1_1[7]).getNodeFromInternalInstanceHandle(this.__internalInstanceHandle);
      if (nodeFromInternalInstanceHandle != null) {
        closure_1_5(nodeFromInternalInstanceHandle, arg0);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "measureInWindow",
    value: function measureInWindow(arg0) {
      const nodeFromInternalInstanceHandle = ReactFabricHostComponent(closure_1_1[7]).getNodeFromInternalInstanceHandle(this.__internalInstanceHandle);
      if (nodeFromInternalInstanceHandle != null) {
        closure_1_6(nodeFromInternalInstanceHandle, arg0);
      }
    }
  };
  items[4] = {
    key: "measureLayout",
    value: function measureLayout(num) {
      let tmp = arg1;
      let tmp2 = arg2;
      if (typeof num !== "number") {
        if (num instanceof ReactFabricHostComponent) {
          const self = this;
          const nodeFromInternalInstanceHandle = ReactFabricHostComponent(closure_1_1[7]).getNodeFromInternalInstanceHandle(this.__internalInstanceHandle);
          const nodeFromInternalInstanceHandle1 = ReactFabricHostComponent(closure_1_1[7]).getNodeFromInternalInstanceHandle(num.__internalInstanceHandle);
          if (nodeFromInternalInstanceHandle != null) {
            if (nodeFromInternalInstanceHandle1 != null) {
              if (tmp2 == null) {
                tmp2 = closure_1_10;
              }
              if (tmp == null) {
                tmp = closure_1_10;
              }
              closure_1_7(nodeFromInternalInstanceHandle, nodeFromInternalInstanceHandle1, tmp2, tmp);
              const tmp8 = closure_1_7;
            }
          }
        }
      }
    }
  };
  items[5] = {
    key: "unstable_getBoundingClientRect",
    value: function unstable_getBoundingClientRect() {
      const nodeFromInternalInstanceHandle = ReactFabricHostComponent(closure_1_1[7]).getNodeFromInternalInstanceHandle(this.__internalInstanceHandle);
      if (nodeFromInternalInstanceHandle != null) {
        const tmp3 = closure_1_8(nodeFromInternalInstanceHandle, true);
        if (tmp3) {
          const _DOMRect = DOMRect;
          const dOMRect = new DOMRect(tmp3[0], tmp3[1], tmp3[2], tmp3[3]);
          return dOMRect;
        }
      }
      const dOMRect1 = new DOMRect(0, 0, 0, 0);
      return dOMRect1;
    }
  };
  items[6] = {
    key: "setNativeProps",
    value: function setNativeProps(arg0) {
      const obj = ReactFabricHostComponent(closure_1_1[8]).create(arg0, this._viewConfig.validAttributes);
      const nodeFromInternalInstanceHandle = ReactFabricHostComponent(closure_1_1[7]).getNodeFromInternalInstanceHandle(this.__internalInstanceHandle);
      if (nodeFromInternalInstanceHandle != null) {
        if (obj != null) {
          closure_1_9(nodeFromInternalInstanceHandle, obj);
        }
      }
    }
  };
  return closure_3.default(ReactFabricHostComponent, items);
})();
