// Module ID: 443
// Function ID: 5124
// Name: BoundingDimensions
// Dependencies: [1, 444]

// Module 443 (BoundingDimensions)
import oneArgumentPooler2 from "oneArgumentPooler" /* 444 */;
import module_1 from "module_1" /* 1 */;

class BoundingDimensions {
  constructor(arg0, arg1) {
    this.width = global;
    this.height = require;
    return;
  }
  destructor() {
    this.width = null;
    this.height = null;
    return;
  }
  static getPooledFromElement(arg0) {
    return BoundingDimensions.getPooled(global.offsetWidth, global.offsetHeight);
  }
}
const oneArgumentPooler = module_1(oneArgumentPooler2);
oneArgumentPooler.default.addPoolingTo(BoundingDimensions, oneArgumentPooler.default.twoArgumentPooler);

export default BoundingDimensions;
