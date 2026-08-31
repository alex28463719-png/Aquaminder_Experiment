// Module ID: 444
// Function ID: 5128
// Name: oneArgumentPooler
// Dependencies: [1, 20]

// Module 444 (oneArgumentPooler)
import invariant from "invariant" /* 20 */;
import module_1 from "module_1" /* 1 */;

let closure_0 = module_1(invariant);
function oneArgumentPooler(key10018) {
  const self = this;
  if (this.instancePool.length) {
    const instancePool = self.instancePool;
    const arr = instancePool.pop();
    self.call(arr, key10018);
    return arr;
  } else {
    const prototype = self.prototype;
    const _self = new self(key10018);
    return _self;
  }
}
function standardReleaser(destructor) {
  closure_0.default(destructor instanceof this, "Trying to release an instance into a pool of a different type.");
  destructor.destructor();
  if (this.instancePool.length < this.poolSize) {
    const instancePool = this.instancePool;
    instancePool.push(destructor);
  }
}

export default {
  addPoolingTo(BoundingDimensions, twoArgumentPooler) {
    let tmp = twoArgumentPooler;
    BoundingDimensions.instancePool = [];
    if (!twoArgumentPooler) {
      tmp = oneArgumentPooler;
    }
    BoundingDimensions.getPooled = tmp;
    if (!BoundingDimensions.poolSize) {
      BoundingDimensions.poolSize = 10;
    }
    BoundingDimensions.release = standardReleaser;
    return BoundingDimensions;
  },
  oneArgumentPooler,
  twoArgumentPooler(key10018, channels) {
    const self = this;
    if (this.instancePool.length) {
      const instancePool = self.instancePool;
      const arr = instancePool.pop();
      self.call(arr, key10018, channels);
      return arr;
    } else {
      const prototype = self.prototype;
      const _self = new self(key10018, channels);
      return _self;
    }
  },
  threeArgumentPooler(key10018, channels, arr2) {
    const self = this;
    if (this.instancePool.length) {
      const instancePool = self.instancePool;
      const arr = instancePool.pop();
      self.call(arr, key10018, channels, arr2);
      return arr;
    } else {
      const prototype = self.prototype;
      const _self = new self(key10018, channels, arr2);
      return _self;
    }
  },
  fourArgumentPooler(key10018, channels, arr2, closure_1_8) {
    const self = this;
    if (this.instancePool.length) {
      const instancePool = self.instancePool;
      const arr = instancePool.pop();
      self.call(arr, key10018, channels, arr2, closure_1_8);
      return arr;
    } else {
      const prototype = self.prototype;
      const _self = new self(key10018, channels, arr2, closure_1_8);
      return _self;
    }
  }
};
