// Module ID: 999
// Function ID: 10694
// Name: _callSuper
// Dependencies: [1, 12, 13, 23, 25, 28, 6, 989]

// Module 999 (_callSuper)
import _toConsumableArray from "_toConsumableArray" /* 6 */;
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _inherits from "_inherits" /* 28 */;
import _callSuper2 from "_callSuper" /* 989 */;
import module_1 from "module_1" /* 1 */;

function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const defaultResult = closure_5.default(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(defaultResult, items, closure_5.default(arg0).constructor);
  } else {
    constructResult = defaultResult.apply(arg0, items);
  }
  return closure_4.default(arg0, constructResult);
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
function extendRelation(arg0, arg1) {
  if (arg0 === undefined) {
    return closure_7.default(arg1);
  } else {
    const items = [];
    return items.concat(closure_7.default(arg0), closure_7.default(arg1));
  }
}
let closure_2 = module_1(_classCallCheck);
let closure_3 = module_1(_defineProperties);
let closure_4 = module_1(_possibleConstructorReturn);
let closure_5 = module_1(_getPrototypeOf);
let closure_6 = module_1(_inherits);
let closure_7 = module_1(_toConsumableArray);
const tmp3 = ((Gesture) => {
  class ComposedGesture {
    constructor() {
      defaultResult = closure_1_2.default(this, ComposedGesture);
      tmp2 = closure_1_8(this, ComposedGesture);
      tmp2.gestures = [];
      tmp2.simultaneousGestures = [];
      tmp2.requireGesturesToFail = [];
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      tmp2.gestures = array;
      return tmp2;
    }
  }
  closure_6.default(ComposedGesture, Gesture);
  let obj = {
    key: "prepareSingleGesture",
    value: function prepareSingleGesture(item10005, simultaneousGestures, requireGesturesToFail) {
      if (item10005 instanceof ComposedGesture(closure_1_1[7]).BaseGesture) {
        const _Object = Object;
        const merged = Object.assign({}, item10005.config);
        merged.simultaneousWith = closure_1_10(merged.simultaneousWith, simultaneousGestures);
        merged.requireToFail = closure_1_10(merged.requireToFail, requireGesturesToFail);
        item10005.config = merged;
      } else if (item10005 instanceof ComposedGesture) {
        item10005.simultaneousGestures = simultaneousGestures;
        item10005.requireGesturesToFail = requireGesturesToFail;
        item10005.prepare();
      }
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "prepare",
    value: function prepare() {
      const self = this;
      for (const item10005 of tmp) {
        let prepareSingleGestureResult = self.prepareSingleGesture(item10005, self.simultaneousGestures, self.requireGesturesToFail);
        continue;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "initialize",
    value: function initialize() {
      for (const item10005 of tmp) {
        let initializeResult = item10005.initialize();
        continue;
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "toGestureArray",
    value: function toGestureArray() {
      const gestures = this.gestures;
      return gestures.flatMap((toGestureArray) => toGestureArray.toGestureArray());
    }
  };
  return closure_3.default(ComposedGesture, items);
})(_callSuper2.Gesture);

export const ComposedGesture = tmp3;
export const SimultaneousGesture = ((arg0) => {
  class SimultaneousGesture {
    constructor() {
      defaultResult = closure_1_2.default(this, SimultaneousGesture);
      return closure_1_8(this, SimultaneousGesture, arguments);
    }
  }
  closure_6.default(SimultaneousGesture, arg0);
  const items = [
    {
      key: "prepare",
      value: function prepare() {
        let length;
        let self = this;
        self = this;
        let num = 0;
        if (0 < this.gestures.length) {
          do {
            let prepareSingleGestureResult = self.prepareSingleGesture(self.gestures[num], tmp[num], self.requireGesturesToFail);
            num = num + 1;
            length = self.gestures.length;
          } while (num < length);
        }
      }
    }
  ];
  return closure_3.default(SimultaneousGesture, items);
})(tmp3);
export const ExclusiveGesture = ((arg0) => {
  class ExclusiveGesture {
    constructor() {
      defaultResult = closure_1_2.default(this, ExclusiveGesture);
      return closure_1_8(this, ExclusiveGesture, arguments);
    }
  }
  closure_6.default(ExclusiveGesture, arg0);
  let items = [
    {
      key: "prepare",
      value: function prepare() {
        let length;
        const self = this;
        let items = [];
        let num = 0;
        if (0 < this.gestures.length) {
          do {
            let requireGesturesToFail = self.requireGesturesToFail;
            let prepareSingleGestureResult = self.prepareSingleGesture(self.gestures[num], self.simultaneousGestures, requireGesturesToFail.concat(items));
            items = items.concat(tmp[num]);
            num = num + 1;
            length = self.gestures.length;
          } while (num < length);
        }
      }
    }
  ];
  return closure_3.default(ExclusiveGesture, items);
})(tmp3);
