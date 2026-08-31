// Module ID: 509
// Function ID: 5724
// Name: Characteristic
// Dependencies: [1, 363, 6, 12, 13, 504]

// Module 509 (Characteristic)
import _toConsumableArray from "_toConsumableArray" /* 6 */;
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 363 */;
import module_1 from "module_1" /* 1 */;

let closure_2 = module_1(asyncGeneratorStep);
let closure_3 = module_1(_toConsumableArray);
let closure_4 = module_1(_classCallCheck);
let closure_5 = module_1(_defineProperties);

export const Characteristic = (() => {
  class Characteristic {
    constructor(arg0, arg1) {
      defaultResult = closure_1_4.default(this, Characteristic);
      merged = Object.assign(this, arg0);
      obj = { value: arg1, enumerable: false };
      definePropertyResult = Object.defineProperty(this, "_manager", obj);
      return;
    }
  }
  let obj = {
    key: "descriptors",
    value: function descriptors() {
      const _manager = this._manager;
      return _manager._descriptorsForCharacteristic(this.id);
    }
  };
  let items = [obj, , , , , , ];
  obj = {
    key: "read",
    value: function read(arg0) {
      const _manager = this._manager;
      return _manager._readCharacteristic(this.id, arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "writeWithResponse",
    value: function writeWithResponse(arg0) {
      const _manager = this._manager;
      return _manager._writeCharacteristicWithResponse(this.id, arg0, arg1);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "writeWithoutResponse",
    value: function writeWithoutResponse(arg0) {
      const _manager = this._manager;
      return _manager._writeCharacteristicWithoutResponse(this.id, arg0, arg1);
    }
  };
  items[4] = {
    key: "monitor",
    value: function monitor(arg0, arg1, arg2) {
      const items = [this.id, arg0, arg1];
      let combined = items;
      if (!Characteristic(closure_1_1[5]).isIOS) {
        const items1 = [];
        const items2 = [arg2];
        combined = items1.concat(items, items2);
      }
      const _manager = this._manager;
      const _monitorCharacteristic = _manager._monitorCharacteristic;
      return _monitorCharacteristic.apply(_manager, closure_1_3.default(combined));
    }
  };
  items[5] = {
    key: "readDescriptor",
    value: (() => {
      closure_0 = closure_1_2.default(async function(arg0, arg1) {
        const self = this;
        if (obj) {
          return obj.resume();
        } else {
          const _manager = self._manager;
          return _manager._readDescriptorForCharacteristic(self.id, arg0, arg1);
        }
      });
      return function readDescriptor(arg0, _nextUniqueIDResult) {
        return callback(...arguments);
      };
    })()
  };
  const obj1 = {
    key: "writeWithoutResponse",
    value: function writeWithoutResponse(arg0) {
      const _manager = this._manager;
      return _manager._writeCharacteristicWithoutResponse(this.id, arg0, arg1);
    }
  };
  const obj2 = {
    key: "monitor",
    value: function monitor(arg0, arg1, arg2) {
      const items = [this.id, arg0, arg1];
      let combined = items;
      if (!Characteristic(closure_1_1[5]).isIOS) {
        const items1 = [];
        const items2 = [arg2];
        combined = items1.concat(items, items2);
      }
      const _manager = this._manager;
      const _monitorCharacteristic = _manager._monitorCharacteristic;
      return _monitorCharacteristic.apply(_manager, closure_1_3.default(combined));
    }
  };
  const obj3 = {
    key: "readDescriptor",
    value: (() => {
      closure_0 = closure_1_2.default(async function(arg0, arg1) {
        const self = this;
        if (obj) {
          return obj.resume();
        } else {
          const _manager = self._manager;
          return _manager._readDescriptorForCharacteristic(self.id, arg0, arg1);
        }
      });
      return function readDescriptor(arg0, _nextUniqueIDResult) {
        return callback(...arguments);
      };
    })()
  };
  items[6] = {
    key: "writeDescriptor",
    value: (() => {
      closure_0 = closure_1_2.default(async function(arg0, arg1, arg2) {
        const self = this;
        if (obj) {
          return obj.resume();
        } else {
          const _manager = self._manager;
          return _manager._writeDescriptorForCharacteristic(self.id, arg0, arg1, arg2);
        }
      });
      return function writeDescriptor(arg0, arg1, _nextUniqueIDResult) {
        return callback(...arguments);
      };
    })()
  };
  return closure_5.default(Characteristic, items);
})();
