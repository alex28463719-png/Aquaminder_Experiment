// Module ID: 990
// Function ID: 10583
// Name: _callSuper
// Dependencies: [1, 12, 13, 23, 25, 26, 28, 989]

// Module 990 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _get from "_get" /* 26 */;
import _inherits from "_inherits" /* 28 */;
import _callSuper2 from "_callSuper" /* 989 */;
import module_1 from "module_1" /* 1 */;

function _callSuper(arg0, arg1, arg2) {
  const defaultResult = closure_3.default(arg1);
  if (_isNativeReflectConstruct()) {
    const _Reflect = Reflect;
    const items = [];
    let constructResult = Reflect.construct(defaultResult, items, closure_3.default(arg0).constructor);
  } else {
    constructResult = defaultResult.apply(arg0, undefined);
  }
  return closure_2.default(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
function _superPropGet(arg0, arg1, arg2, arg3) {
  closure_0 = arg2;
  let prototype = arg0;
  if (1) {
    prototype = arg0.prototype;
  }
  const defaultResult = closure_4.default(closure_3.default(prototype), "onChange", arg2);
  let fn = defaultResult;
  if (2) {
    fn = defaultResult;
    if ("function" === typeof defaultResult) {
      fn = (arg0) => defaultResult.apply(closure_0, arg0);
    }
  }
  return fn;
}
function changeEventCalculator(translationX, translationX2) {
  if (translationX2 === undefined) {
    let obj = {};
    ({ translationX: obj2.changeX, translationY: obj2.changeY } = translationX);
  } else {
    obj = { changeX: translationX.translationX - translationX2.translationX, changeY: translationX.translationY - translationX2.translationY };
  }
  return Object.assign({}, translationX, obj);
}
let closure_0 = module_1(_classCallCheck);
let closure_1 = module_1(_defineProperties);
let closure_2 = module_1(_possibleConstructorReturn);
let closure_3 = module_1(_getPrototypeOf);
let closure_4 = module_1(_get);
let closure_5 = module_1(_inherits);

export const PanGesture = ((ContinousBaseGesture) => {
  class PanGesture {
    constructor() {
      defaultResult = PanGesture.default(this, PanGesture);
      tmp2 = closure_1_6(this, PanGesture);
      tmp2.config = {};
      tmp2.handlerName = "PanGestureHandler";
      return tmp2;
    }
  }
  closure_5.default(PanGesture, ContinousBaseGesture);
  let obj = {
    key: "activeOffsetY",
    value: function activeOffsetY(activeOffsetYStart) {
      const self = this;
      if (Array.isArray(activeOffsetYStart)) {
        self.config.activeOffsetYStart = activeOffsetYStart[0];
        self.config.activeOffsetYEnd = activeOffsetYStart[1];
      } else if (activeOffsetYStart < 0) {
        self.config.activeOffsetYStart = activeOffsetYStart;
      } else {
        self.config.activeOffsetYEnd = activeOffsetYStart;
      }
      return self;
    }
  };
  let items = [obj, , , , , , , , , , , , , ];
  obj = {
    key: "activeOffsetX",
    value: function activeOffsetX(activeOffsetXStart) {
      const self = this;
      if (Array.isArray(activeOffsetXStart)) {
        self.config.activeOffsetXStart = activeOffsetXStart[0];
        self.config.activeOffsetXEnd = activeOffsetXStart[1];
      } else if (activeOffsetXStart < 0) {
        self.config.activeOffsetXStart = activeOffsetXStart;
      } else {
        self.config.activeOffsetXEnd = activeOffsetXStart;
      }
      return self;
    }
  };
  items[1] = obj;
  obj = {
    key: "failOffsetY",
    value: function failOffsetY(failOffsetYStart) {
      const self = this;
      if (Array.isArray(failOffsetYStart)) {
        self.config.failOffsetYStart = failOffsetYStart[0];
        self.config.failOffsetYEnd = failOffsetYStart[1];
      } else if (failOffsetYStart < 0) {
        self.config.failOffsetYStart = failOffsetYStart;
      } else {
        self.config.failOffsetYEnd = failOffsetYStart;
      }
      return self;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "failOffsetX",
    value: function failOffsetX(failOffsetXStart) {
      const self = this;
      if (Array.isArray(failOffsetXStart)) {
        self.config.failOffsetXStart = failOffsetXStart[0];
        self.config.failOffsetXEnd = failOffsetXStart[1];
      } else if (failOffsetXStart < 0) {
        self.config.failOffsetXStart = failOffsetXStart;
      } else {
        self.config.failOffsetXEnd = failOffsetXStart;
      }
      return self;
    }
  };
  items[4] = {
    key: "minPointers",
    value: function minPointers(minPointers) {
      this.config.minPointers = minPointers;
      return this;
    }
  };
  items[5] = {
    key: "maxPointers",
    value: function maxPointers(maxPointers) {
      this.config.maxPointers = maxPointers;
      return this;
    }
  };
  items[6] = {
    key: "minDistance",
    value: function minDistance(minDist) {
      this.config.minDist = minDist;
      return this;
    }
  };
  items[7] = {
    key: "minVelocity",
    value: function minVelocity(minVelocity) {
      this.config.minVelocity = minVelocity;
      return this;
    }
  };
  items[8] = {
    key: "minVelocityX",
    value: function minVelocityX(minVelocityX) {
      this.config.minVelocityX = minVelocityX;
      return this;
    }
  };
  items[9] = {
    key: "minVelocityY",
    value: function minVelocityY(minVelocityY) {
      this.config.minVelocityY = minVelocityY;
      return this;
    }
  };
  items[10] = {
    key: "averageTouches",
    value: function averageTouches(avgTouches) {
      this.config.avgTouches = avgTouches;
      return this;
    }
  };
  items[11] = {
    key: "enableTrackpadTwoFingerGesture",
    value: function enableTrackpadTwoFingerGesture(enableTrackpadTwoFingerGesture) {
      this.config.enableTrackpadTwoFingerGesture = enableTrackpadTwoFingerGesture;
      return this;
    }
  };
  items[12] = {
    key: "activateAfterLongPress",
    value: function activateAfterLongPress(activateAfterLongPress) {
      this.config.activateAfterLongPress = activateAfterLongPress;
      return this;
    }
  };
  items[13] = {
    key: "onChange",
    value: function onChange(arg0) {
      this.handlers.changeEventCalculator = closure_1_9;
      const items = [arg0];
      return closure_1_8(PanGesture, "onChange", this, 3)(items);
    }
  };
  return closure_1.default(PanGesture, items);
})(_callSuper2.ContinousBaseGesture);
