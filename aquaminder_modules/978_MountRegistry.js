// Module ID: 978
// Function ID: 10479
// Name: MountRegistry
// Dependencies: [1, 12, 13]

// Module 978 (MountRegistry)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import module_1 from "module_1" /* 1 */;

let closure_0 = module_1(_classCallCheck);
let closure_1 = module_1(_defineProperties);
const tmp3 = (() => {
  class MountRegistry {
    constructor() {
      defaultResult = MountRegistry.default(this, MountRegistry);
      return;
    }
  }
  let obj = {
    key: "addMountListener",
    value: function addMountListener(arg0) {
      closure_0 = arg0;
      const self = this;
      let mountListeners = this.mountListeners;
      mountListeners.add(arg0);
      return () => {
        const mountListeners = self.mountListeners;
        mountListeners.delete(closure_0);
      };
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "addUnmountListener",
    value: function addUnmountListener(arg0) {
      closure_0 = arg0;
      const self = this;
      let unmountListeners = this.unmountListeners;
      unmountListeners.add(arg0);
      return () => {
        const unmountListeners = self.unmountListeners;
        unmountListeners.delete(closure_0);
      };
    }
  };
  items[1] = obj;
  obj = {
    key: "gestureHandlerWillMount",
    value: function gestureHandlerWillMount(closure_1_0) {
      closure_0 = closure_1_0;
      const mountListeners = this.mountListeners;
      const item = mountListeners.forEach((arg0) => arg0(closure_0));
    }
  };
  items[2] = obj;
  items[3] = {
    key: "gestureHandlerWillUnmount",
    value: function gestureHandlerWillUnmount(self) {
      closure_0 = self;
      const unmountListeners = this.unmountListeners;
      const item = unmountListeners.forEach((arg0) => arg0(closure_0));
    }
  };
  items[4] = {
    key: "gestureWillMount",
    value: function gestureWillMount(arg0) {
      closure_0 = arg0;
      const mountListeners = this.mountListeners;
      const item = mountListeners.forEach((arg0) => arg0(closure_0));
    }
  };
  items[5] = {
    key: "gestureWillUnmount",
    value: function gestureWillUnmount(nextResult) {
      closure_0 = nextResult;
      const unmountListeners = this.unmountListeners;
      const item = unmountListeners.forEach((arg0) => arg0(closure_0));
    }
  };
  return closure_1.default(MountRegistry, null, items);
})();
tmp3.mountListeners = new Set();
const set = new Set();
tmp3.unmountListeners = new Set();

export const MountRegistry = tmp3;
