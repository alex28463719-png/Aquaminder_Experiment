// Module ID: 989
// Function ID: 10544
// Name: _callSuper
// Dependencies: [1, 23, 25, 28, 13, 12, 973, 971]

// Module 989 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties2 from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _inherits from "_inherits" /* 28 */;
import module_1 from "module_1" /* 1 */;

function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const defaultResult = closure_3.default(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(defaultResult, items, closure_3.default(arg0).constructor);
  } else {
    constructResult = defaultResult.apply(arg0, items);
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
let closure_2 = module_1(_possibleConstructorReturn);
let closure_3 = module_1(_getPrototypeOf);
let closure_4 = module_1(_inherits);
const _defineProperties = module_1(_defineProperties2);
let closure_6 = module_1(_classCallCheck);
let obj = { UNDEFINED: 0, BEGAN: 1, START: 2, UPDATE: 3, CHANGE: 4, END: 5, FINALIZE: 6, TOUCHES_DOWN: 7, TOUCHES_MOVE: 8, TOUCHES_UP: 9, TOUCHES_CANCELLED: 10 };
class Gesture {
  constructor() {
    defaultResult = closure_6.default(this, Gesture);
    return;
  }
}
let defaultResult = _defineProperties.default(Gesture);
let c8 = 0;
const tmp4 = ((defaultResult) => {
  class BaseGesture {
    constructor() {
      defaultResult = closure_1_6.default(this, BaseGesture);
      tmp2 = closure_1_9(this, BaseGesture);
      tmp2.gestureId = -1;
      tmp2.handlerTag = -1;
      tmp2.handlerName = "";
      tmp2.config = {};
      obj = { gestureId: -1, handlerTag: -1 };
      obj.isWorklet = [];
      tmp2.handlers = obj;
      tmp3 = +closure_8;
      closure_8 = tmp3 + 1;
      tmp2.gestureId = tmp3;
      tmp2.handlers.gestureId = tmp2.gestureId;
      return tmp2;
    }
  }
  closure_4.default(BaseGesture, defaultResult);
  obj = {
    key: "addDependency",
    value: function addDependency(blocksHandlers, arg1) {
      if (this.config[blocksHandlers]) {
        const _Array = Array;
        let combined = Array().concat(tmp, arg1);
        const ArrayResult = Array();
      } else {
        combined = [arg1];
      }
      this.config[blocksHandlers] = combined;
    }
  };
  let items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "withRef",
    value: function withRef(ref) {
      this.config.ref = ref;
      return this;
    }
  };
  items[1] = obj;
  obj = {
    key: "isWorklet",
    value: function isWorklet(__workletHash) {
      return __workletHash.__workletHash !== undefined;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "onBegin",
    value: function onBegin(onBegin) {
      this.handlers.onBegin = onBegin;
      this.handlers.isWorklet[closure_1_7.BEGAN] = this.isWorklet(onBegin);
      return this;
    }
  };
  items[4] = {
    key: "onStart",
    value: function onStart(onStart) {
      this.handlers.onStart = onStart;
      this.handlers.isWorklet[closure_1_7.START] = this.isWorklet(onStart);
      return this;
    }
  };
  items[5] = {
    key: "onEnd",
    value: function onEnd(onEnd, arg1) {
      this.handlers.onEnd = onEnd;
      this.handlers.isWorklet[closure_1_7.END] = this.isWorklet(onEnd);
      return this;
    }
  };
  items[6] = {
    key: "onFinalize",
    value: function onFinalize(onFinalize, arg1) {
      this.handlers.onFinalize = onFinalize;
      this.handlers.isWorklet[closure_1_7.FINALIZE] = this.isWorklet(onFinalize);
      return this;
    }
  };
  items[7] = {
    key: "onTouchesDown",
    value: function onTouchesDown(onTouchesDown, value) {
      this.config.needsPointerData = true;
      this.handlers.onTouchesDown = onTouchesDown;
      this.handlers.isWorklet[closure_1_7.TOUCHES_DOWN] = this.isWorklet(onTouchesDown);
      return this;
    }
  };
  items[8] = {
    key: "onTouchesMove",
    value: function onTouchesMove(onTouchesMove, value) {
      this.config.needsPointerData = true;
      this.handlers.onTouchesMove = onTouchesMove;
      this.handlers.isWorklet[closure_1_7.TOUCHES_MOVE] = this.isWorklet(onTouchesMove);
      return this;
    }
  };
  items[9] = {
    key: "onTouchesUp",
    value: function onTouchesUp(onTouchesUp, value) {
      this.config.needsPointerData = true;
      this.handlers.onTouchesUp = onTouchesUp;
      this.handlers.isWorklet[closure_1_7.TOUCHES_UP] = this.isWorklet(onTouchesUp);
      return this;
    }
  };
  items[10] = {
    key: "onTouchesCancelled",
    value: function onTouchesCancelled(onTouchesCancelled, value) {
      this.config.needsPointerData = true;
      this.handlers.onTouchesCancelled = onTouchesCancelled;
      this.handlers.isWorklet[closure_1_7.TOUCHES_CANCELLED] = this.isWorklet(onTouchesCancelled);
      return this;
    }
  };
  items[11] = {
    key: "enabled",
    value: function enabled(enabled) {
      this.config.enabled = enabled;
      return this;
    }
  };
  items[12] = {
    key: "shouldCancelWhenOutside",
    value: function shouldCancelWhenOutside(flag) {
      this.config.shouldCancelWhenOutside = flag;
      return this;
    }
  };
  items[13] = {
    key: "hitSlop",
    value: function hitSlop(closure_34) {
      this.config.hitSlop = closure_34;
      return this;
    }
  };
  items[14] = {
    key: "activeCursor",
    value: function activeCursor(activeCursor) {
      this.config.activeCursor = activeCursor;
      return this;
    }
  };
  items[15] = {
    key: "mouseButton",
    value: function mouseButton(mouseButton) {
      this.config.mouseButton = mouseButton;
      return this;
    }
  };
  items[16] = {
    key: "runOnJS",
    value: function runOnJS(runOnJS) {
      this.config.runOnJS = runOnJS;
      return this;
    }
  };
  items[17] = {
    key: "simultaneousWithExternalGesture",
    value: function simultaneousWithExternalGesture() {
      const self = this;
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      while (tmp2 !== undefined) {
        let addDependencyResult = self.addDependency("simultaneousWith", tmp3);
        continue;
      }
      return self;
    }
  };
  items[18] = {
    key: "requireExternalGestureToFail",
    value: function requireExternalGestureToFail() {
      const self = this;
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      while (tmp2 !== undefined) {
        let addDependencyResult = self.addDependency("requireToFail", tmp3);
        continue;
      }
      return self;
    }
  };
  items[19] = {
    key: "blocksExternalGesture",
    value: function blocksExternalGesture() {
      const self = this;
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      while (tmp2 !== undefined) {
        let addDependencyResult = self.addDependency("blocksHandlers", tmp3);
        continue;
      }
      return self;
    }
  };
  items[20] = {
    key: "withTestId",
    value: function withTestId(testId) {
      this.config.testId = testId;
      return this;
    }
  };
  items[21] = {
    key: "cancelsTouchesInView",
    value: function cancelsTouchesInView(cancelsTouchesInView) {
      this.config.cancelsTouchesInView = cancelsTouchesInView;
      return this;
    }
  };
  items[22] = {
    key: "initialize",
    value: function initialize() {
      const self = this;
      this.handlerTag = BaseGesture(closure_1_1[6]).getNextHandlerTag();
      this.handlers = Object.assign({}, this.handlers, { handlerTag: this.handlerTag });
      if (this.config.ref) {
        self.config.ref.current = self;
      }
    }
  };
  items[23] = {
    key: "toGestureArray",
    value: function toGestureArray() {
      const items = [this];
      return items;
    }
  };
  items[24] = {
    key: "prepare",
    value: function prepare() {

    }
  };
  items[25] = {
    key: "shouldUseReanimated",
    get() {
      let tmp = this.config.runOnJS !== true;
      if (tmp) {
        const isWorklet = this.handlers.isWorklet;
        tmp = !isWorklet.includes(false);
      }
      if (tmp) {
        tmp = !BaseGesture(closure_1_1[7]).isRemoteDebuggingEnabled();
      }
      return tmp;
    }
  };
  return _defineProperties.default(BaseGesture, items);
})(defaultResult);

export const CALLBACK_TYPE = obj;
export const Gesture = defaultResult;
export const BaseGesture = tmp4;
export const ContinousBaseGesture = ((arg0) => {
  class ContinousBaseGesture {
    constructor() {
      defaultResult = closure_1_6.default(this, ContinousBaseGesture);
      return closure_1_9(this, ContinousBaseGesture, arguments);
    }
  }
  closure_4.default(ContinousBaseGesture, arg0);
  obj = {
    key: "onUpdate",
    value: function onUpdate(onUpdate) {
      this.handlers.onUpdate = onUpdate;
      this.handlers.isWorklet[closure_1_7.UPDATE] = this.isWorklet(onUpdate);
      return this;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "onChange",
    value: function onChange(onChange) {
      this.handlers.onChange = onChange;
      this.handlers.isWorklet[closure_1_7.CHANGE] = this.isWorklet(onChange);
      return this;
    }
  };
  items[1] = obj;
  obj = {
    key: "manualActivation",
    value: function manualActivation(manualActivation) {
      this.config.manualActivation = manualActivation;
      return this;
    }
  };
  items[2] = obj;
  return _defineProperties.default(ContinousBaseGesture, items);
})(tmp4);
