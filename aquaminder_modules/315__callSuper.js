// Module ID: 315
// Function ID: 3708
// Name: _callSuper
// Dependencies: [1, 12, 13, 23, 25, 26, 28, 31, 32, 304, 311, 313]

// Module 315 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _get from "_get" /* 26 */;
import _inherits from "_inherits" /* 28 */;
import _classPrivateFieldBase from "_classPrivateFieldBase" /* 31 */;
import _classPrivateFieldKey2 from "_classPrivateFieldKey" /* 32 */;
import ensureGlobalEventEmitterListeners from "ensureGlobalEventEmitterListeners" /* 304 */;
import _assertNativeAnimatedModule from "_assertNativeAnimatedModule" /* 311 */;
import _callSuper2 from "_callSuper" /* 313 */;
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
function flatAnimatedNodes(arg0) {
  const items = [];
  let num = 0;
  if (0 < arg0.length) {
    do {
      let tmp3 = arg0[num];
      let tmp4 = tmp3;
      let tmp5 = num;
      let tmp6 = tmp2;
      let tmp7 = tmp2;
      let keys = Object.keys();
      if (keys !== undefined) {
        tmp7 = tmp6;
        let tmp9 = keys[tmp];
        while (tmp9 !== undefined) {
          let tmp11 = tmp9;
          let tmp12 = tmp3[tmp9];
          let tmp13 = mod;
          tmp6 = tmp12;
          if (!(tmp12 instanceof mod.default)) {
            continue;
          } else {
            let arr = items.push(tmp12);
            tmp6 = tmp12;
            continue;
          }
          continue;
        }
      }
      num = num + 1;
      tmp2 = tmp7;
    } while (num < length);
  }
  return items;
}
function mapTransforms(arr) {
  closure_0 = arg1;
  return arr.map((arg0) => {
    let obj = {};
    const keys = Object.keys();
    if (keys !== undefined) {
      while (keys[tmp] !== undefined) {
        let tmp16 = tmp6;
        let arr = arg0[tmp6];
        let tmp17 = closure_1_8;
        if (arr instanceof closure_1_8.default) {
          let tmp15 = callback;
          obj[tmp6] = callback(arr);
          continue;
        } else {
          let _Array = Array;
          if (Array.isArray(arr)) {
            obj[tmp6] = arr.map((arg0) => {
              let tmp = arg0;
              if (arg0 instanceof closure_2_8.default) {
                tmp = closure_1_0(arg0);
              }
              return tmp;
            });
            continue;
          } else {
            if (typeof arr === "object") {
              obj = {};
              let tmp7 = arr;
              let tmp8 = tmp3;
              let tmp9 = tmp3;
              let keys1 = Object.keys();
              if (keys1 !== undefined) {
                tmp9 = tmp8;
                let tmp11 = keys1[tmp2];
                while (tmp11 !== undefined) {
                  let tmp18 = tmp11;
                  let tmp19 = arr[tmp11];
                  let tmp20 = closure_1_8;
                  let tmp13 = tmp19;
                  if (tmp19 instanceof closure_1_8.default) {
                    let tmp12 = callback;
                    tmp13 = callback(tmp19);
                  }
                  obj[tmp11] = tmp13;
                  tmp8 = tmp19;
                  continue;
                }
              }
              obj[tmp6] = obj;
              tmp3 = tmp9;
              let tmp14 = obj;
              continue;
            } else {
              obj[tmp6] = arr;
              continue;
            }
            continue;
          }
          continue;
        }
        continue;
      }
    }
    return obj;
  });
}
let closure_0 = module_1(_classCallCheck);
let closure_1 = module_1(_defineProperties);
let closure_2 = module_1(_possibleConstructorReturn);
let closure_3 = module_1(_getPrototypeOf);
let closure_4 = module_1(_get);
let closure_5 = module_1(_inherits);
let closure_6 = module_1(_classPrivateFieldBase);
const _classPrivateFieldKey = module_1(_classPrivateFieldKey2);
let closure_7 = module_1(ensureGlobalEventEmitterListeners);
let closure_8 = module_1(_assertNativeAnimatedModule);
_callSuper = module_1(_callSuper2);
const field = _classPrivateFieldKey.default("nodes");

export default ((arg0) => {
  class AnimatedTransform {
    constructor(arg0, arg1, arg2) {
      defaultResult = AnimatedTransform.default(this, AnimatedTransform);
      items = [];
      items[0] = arg2;
      tmp2 = closure_1_10(this, AnimatedTransform, items);
      definePropertyResult = Object.defineProperty(tmp2, closure_1_9, { writable: true, value: undefined });
      closure_1_6.default(tmp2, closure_1_9)[closure_1_9] = arg0;
      tmp2._transforms = arg1;
      return tmp2;
    }
  }
  closure_5.default(AnimatedTransform, arg0);
  let obj = {
    key: "__makeNative",
    value: function __makeNative(arg0) {
      const self = this;
      const arr = closure_1_6.default(this, closure_1_9)[closure_1_9];
      for (let num = 0; num < length; num = num + 1) {
        let obj = arr[num];
        let __makeNativeResult = obj.__makeNative(arg0);
      }
      const items = [arg0];
      closure_1_12(AnimatedTransform, "__makeNative", self, 3)(items);
    }
  };
  let items = [obj, , , , , , ];
  obj = {
    key: "__getValue",
    value: function __getValue() {
      return closure_1_14(this._transforms, (__getValue) => __getValue.__getValue());
    }
  };
  items[1] = obj;
  obj = {
    key: "__getValueWithStaticTransforms",
    value: function __getValueWithStaticTransforms(arg0) {
      closure_0 = [];
      closure_1_14(this._transforms, (__getValue) => {

      });
      return closure_1_14(arg0, () => arr.shift());
    }
  };
  items[2] = obj;
  items[3] = {
    key: "__getAnimatedValue",
    value: function __getAnimatedValue() {
      return closure_1_14(this._transforms, (__getAnimatedValue) => __getAnimatedValue.__getAnimatedValue());
    }
  };
  items[4] = {
    key: "__attach",
    value: function __attach() {
      const self = this;
      const arr = closure_1_6.default(this, closure_1_9)[closure_1_9];
      for (let num = 0; num < length; num = num + 1) {
        let obj = arr[num];
        let __addChildResult = obj.__addChild(self);
      }
      closure_1_12(AnimatedTransform, "__attach", self, 3)([]);
    }
  };
  items[5] = {
    key: "__detach",
    value: function __detach() {
      const self = this;
      const arr = closure_1_6.default(this, closure_1_9)[closure_1_9];
      for (let num = 0; num < length; num = num + 1) {
        let obj = arr[num];
        let __removeChildResult = obj.__removeChild(self);
      }
      closure_1_12(AnimatedTransform, "__detach", self, 3)([]);
    }
  };
  items[6] = {
    key: "__getNativeConfig",
    value: function __getNativeConfig() {
      const self = this;
      const items = [];
      const _transforms = this._transforms;
      let num = 0;
      if (0 < _transforms.length) {
        do {
          let tmp4 = _transforms[num];
          let tmp5 = tmp4;
          let tmp6 = num;
          let tmp7 = tmp2;
          let tmp8 = tmp3;
          let tmp9 = tmp2;
          let tmp10 = tmp3;
          let keys = Object.keys();
          if (keys !== undefined) {
            tmp9 = tmp7;
            tmp10 = tmp8;
            let tmp12 = keys[tmp];
            while (tmp12 !== undefined) {
              let tmp16 = tmp12;
              let obj2 = tmp4[tmp12];
              let tmp17 = closure_1_8;
              let push = items.push;
              let obj = {};
              if (obj2 instanceof closure_1_8.default) {
                obj.type = "animated";
                obj.property = tmp12;
                obj.nodeTag = obj2.__getNativeTag();
                let arr = push(obj);
                tmp7 = tmp12;
                tmp8 = obj2;
                continue;
              } else {
                obj.type = "static";
                obj.property = tmp12;
                let tmp13 = closure_1_7;
                let _default = closure_1_7.default;
                obj.value = _default.transformDataType(obj2);
                arr = push(obj);
                tmp7 = tmp12;
                tmp8 = obj2;
                continue;
              }
              continue;
            }
          }
          num = num + 1;
          tmp2 = tmp9;
          tmp3 = tmp10;
        } while (num < length);
      }
      obj = { type: "transform", transforms: items, debugID: self.__getDebugID() };
      return obj;
    }
  };
  const items1 = [
    {
      key: "from",
      value: function from(_transforms) {
        let items = _transforms;
        if (!Array.isArray(_transforms)) {
          items = [];
        }
        const tmpResult = closure_1_13(items);
        if (tmpResult.length === 0) {
          return null;
        } else {
          const prototype = AnimatedTransform.prototype;
          const tmp7 = new AnimatedTransform(tmpResult, _transforms);
          return tmp7;
        }
        const tmp = closure_1_13;
      }
    }
  ];
  return closure_1.default(AnimatedTransform, items, items1);
})(_callSuper.default);
