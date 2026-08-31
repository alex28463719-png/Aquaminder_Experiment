// Module ID: 659
// Function ID: 7173
// Name: useAsyncStorage
// Dependencies: [1, 660]
// Exports: useAsyncStorage

// Module 659 (useAsyncStorage)
import _mod660 from "module_660" /* 660 */;
import module_1 from "module_1" /* 1 */;

let closure_0 = module_1(_mod660);

export function useAsyncStorage(arg0) {
  closure_0 = arg0;
  return {
    getItem() {
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      const getItem = mod.default.getItem;
      const items = [mod];
      return getItem.apply(mod.default, items.concat(array));
    },
    setItem() {
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      const setItem = mod.default.setItem;
      const items = [mod];
      return setItem.apply(mod.default, items.concat(array));
    },
    mergeItem() {
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      const mergeItem = mod.default.mergeItem;
      const items = [mod];
      return mergeItem.apply(mod.default, items.concat(array));
    },
    removeItem() {
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      const removeItem = mod.default.removeItem;
      const items = [mod];
      return removeItem.apply(mod.default, items.concat(array));
    }
  };
}
