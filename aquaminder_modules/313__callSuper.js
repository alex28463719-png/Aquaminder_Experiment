// Module ID: 313
// Function ID: 3673
// Name: _callSuper
// Dependencies: [1, 12, 13, 23, 25, 26, 28, 304, 311]

// Module 313 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _get from "_get" /* 26 */;
import _inherits from "_inherits" /* 28 */;
import ensureGlobalEventEmitterListeners2 from "ensureGlobalEventEmitterListeners" /* 304 */;
import _assertNativeAnimatedModule from "_assertNativeAnimatedModule" /* 311 */;
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
function _superPropGet(arg0, arg1, arg2, arg3) {
  closure_0 = arg2;
  let prototype = arg0;
  if (1) {
    prototype = arg0.prototype;
  }
  const defaultResult = closure_4.default(closure_3.default(prototype), arg1, arg2);
  let fn = defaultResult;
  if (2) {
    fn = defaultResult;
    if ("function" === typeof defaultResult) {
      fn = (arg0) => defaultResult.apply(closure_0, arg0);
    }
  }
  return fn;
}
let closure_0 = module_1(_classCallCheck);
let closure_1 = module_1(_defineProperties);
let closure_2 = module_1(_possibleConstructorReturn);
let closure_3 = module_1(_getPrototypeOf);
let closure_4 = module_1(_get);
let closure_5 = module_1(_inherits);
const ensureGlobalEventEmitterListeners = module_1(ensureGlobalEventEmitterListeners2);
({ connectAnimatedNodes: closure_6, disconnectAnimatedNodes: closure_7 } = ensureGlobalEventEmitterListeners.default.API);

export default ((arg0) => {
  class AnimatedWithChildren {
    constructor() {
      defaultResult = AnimatedWithChildren.default(this, AnimatedWithChildren);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_1_8(this, AnimatedWithChildren, items.concat(array));
      tmp3._children = [];
      return tmp3;
    }
  }
  closure_5.default(AnimatedWithChildren, arg0);
  let obj = {
    key: "__makeNative",
    value: function __makeNative(arg0) {
      const self = this;
      if (!this.__isNative) {
        self.__isNative = true;
        const _children = self._children;
        if (_children.length > 0) {
          for (let num2 = 0; num2 < length; num2 = num2 + 1) {
            let obj = _children[num2];
            let __makeNativeResult = obj.__makeNative(arg0);
            let tmp2 = closure_1_6;
            let __getNativeTagResult = self.__getNativeTag();
            let tmp4 = closure_1_6(__getNativeTagResult, obj.__getNativeTag());
          }
        }
      }
      const items = [arg0];
      closure_1_10(AnimatedWithChildren, "__makeNative", self, 3)(items);
    }
  };
  let items = [obj, , , , ];
  obj = {
    key: "__addChild",
    value: function __addChild(__makeNative) {
      const self = this;
      if (this._children.length === 0) {
        self.__attach();
      }
      const _children = self._children;
      _children.push(__makeNative);
      if (self.__isNative) {
        __makeNative.__makeNative(self.__getPlatformConfig());
        closure_1_6(self.__getNativeTag(), __makeNative.__getNativeTag());
        const __getNativeTagResult = self.__getNativeTag();
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "__removeChild",
    value: function __removeChild(__isNative) {
      const self = this;
      const _children = this._children;
      const index = _children.indexOf(__isNative);
      if (index === -1) {
        const _console = console;
        console.warn("Trying to remove a child that doesn't exist");
      } else {
        if (self.__isNative) {
          if (__isNative.__isNative) {
            closure_1_7(self.__getNativeTag(), __isNative.__getNativeTag());
            const __getNativeTagResult = self.__getNativeTag();
          }
        }
        const _children1 = self._children;
        _children1.splice(index, 1);
        if (self._children.length === 0) {
          self.__detach();
        }
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "__getChildren",
    value: function __getChildren() {
      return this._children;
    }
  };
  items[4] = {
    key: "__callListeners",
    value: function __callListeners(arg0) {
      const items = [arg0];
      closure_1_10(AnimatedWithChildren, "__callListeners", this, 3)(items);
      if (!this.__isNative) {
        const _children = this._children;
        for (let num = 0; num < length; num = num + 1) {
          let obj = _children[num];
          let tmp2 = num;
          if (obj.__getValue) {
            let __callListenersResult = obj.__callListeners(obj.__getValue());
          }
        }
        length = _children.length;
      }
    }
  };
  return closure_1.default(AnimatedWithChildren, items);
})(module_1(_assertNativeAnimatedModule).default);
