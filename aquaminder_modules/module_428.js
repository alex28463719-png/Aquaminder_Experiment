// Module ID: 428
// Function ID: 5002
// Dependencies: [1, 429]

// Module 428
import I18nManager2 from "I18nManager" /* 429 */;
import module_1 from "module_1" /* 1 */;

const I18nManager = module_1(I18nManager2);
if (I18nManager.default) {
  const constants = I18nManager.default.getConstants();
  let obj = {};
  ({ isRTL: obj2.isRTL, doLeftAndRightSwapInRTL: obj2.doLeftAndRightSwapInRTL, localeIdentifier: obj2.localeIdentifier } = constants);
  const _default = I18nManager.default;
} else {
  obj = { isRTL: false, doLeftAndRightSwapInRTL: true };
}
obj = {
  getConstants() {
    return obj;
  },
  allowRTL(arg0) {
    if (I18nManager.default) {
      I18nManager.default.allowRTL(arg0);
    }
  },
  forceRTL(arg0) {
    if (I18nManager.default) {
      I18nManager.default.forceRTL(arg0);
    }
  },
  swapLeftAndRightInRTL(arg0) {
    if (I18nManager.default) {
      const result = I18nManager.default.swapLeftAndRightInRTL(arg0);
    }
  }
};
({ isRTL: obj3.isRTL, doLeftAndRightSwapInRTL: obj3.doLeftAndRightSwapInRTL } = obj);

export default obj;
