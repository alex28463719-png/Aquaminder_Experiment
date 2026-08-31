// Module ID: 965
// Function ID: 10406
// Name: _callSuper
// Dependencies: [1, 6, 12, 13, 23, 25, 28, 99, 119, 2, 966, 968, 969, 251, 970, 971, 972, 973, 974, 975, 976, 977, 978]
// Exports: default

// Module 965 (_callSuper)
import _toConsumableArray from "_toConsumableArray" /* 6 */;
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _inherits from "_inherits" /* 28 */;
import _defineProperty2 from "_defineProperty" /* 99 */;
import getIteratorFn from "getIteratorFn" /* 119 */;
import _mod966 from "module_966" /* 966 */;
import get_registerCallableModule from "get registerCallableModule" /* 968 */;
import _mod969 from "module_969" /* 969 */;
import processEventTypes from "processEventTypes" /* 970 */;
import hasProperty from "hasProperty" /* 971 */;
import _mod972 from "module_972" /* 972 */;
import module_1 from "module_1" /* 1 */;
import jsxProd from "jsxProd" /* 251 */;

function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const defaultResult = closure_6.default(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(defaultResult, items, closure_6.default(arg0).constructor);
  } else {
    constructResult = defaultResult.apply(arg0, items);
  }
  return closure_5.default(arg0, constructResult);
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
function hasUnresolvedRefs(simultaneousHandlers) {
  function extract(simultaneousHandlers) {
    if (Array.isArray(simultaneousHandlers)) {
      return simultaneousHandlers.some((current) => {
        let tmp = current;
        if (current) {
          tmp = current.current === null;
        }
        return tmp;
      });
    } else {
      let tmp = simultaneousHandlers;
      if (simultaneousHandlers) {
        tmp = simultaneousHandlers.current === null;
      }
      return tmp;
    }
  }
  return extract(simultaneousHandlers.simultaneousHandlers) || extract(simultaneousHandlers.waitFor);
}
let closure_2 = module_1(_toConsumableArray);
let closure_3 = module_1(_classCallCheck);
let closure_4 = module_1(_defineProperties);
let closure_5 = module_1(_possibleConstructorReturn);
let closure_6 = module_1(_getPrototypeOf);
let closure_7 = module_1(_inherits);
const _defineProperty = module_1(_defineProperty2);
let closure_8 = _interopRequireWildcard(getIteratorFn);
let closure_10 = module_1(_mod966);
let closure_11 = module_1(get_registerCallableModule);
let closure_12 = module_1(_mod969);
const UIManager = get_registerCallableModule.UIManager;
processEventTypes.customDirectEventTypes.topGestureHandlerEvent = { registrationName: "onGestureHandlerEvent" };
let isFabricResult = hasProperty.isFabric();
if (isFabricResult) {
  isFabricResult = get_registerCallableModule.Platform.OS === "android";
}
if (isFabricResult) {
  isFabricResult = { topOnGestureHandlerEvent: { registrationName: "onGestureHandlerEvent" }, topOnGestureHandlerStateChange: { registrationName: "onGestureHandlerStateChange" } };
}
let merged = Object.assign({ onGestureHandlerEvent: { registrationName: "onGestureHandlerEvent" }, onGestureHandlerStateChange: { registrationName: "onGestureHandlerStateChange" } }, isFabricResult);
UIManager.genericDirectEventTypes = Object.assign({}, UIManager.genericDirectEventTypes, merged);
let viewManagerConfig;
if (UIManager.getViewManagerConfig != null) {
  viewManagerConfig = UIManager.getViewManagerConfig("getConstants");
}
if (viewManagerConfig) {
  let _Object = Object;
  viewManagerConfig.genericDirectEventTypes = Object.assign({}, viewManagerConfig.genericDirectEventTypes, merged);
}
let fn = UIManager.setJSResponder;
if (fn === undefined) {
  fn = () => {

  };
}
let fn2 = UIManager.clearJSResponder;
if (fn2 === undefined) {
  fn2 = () => {

  };
}
UIManager.setJSResponder = (arg0, arg1) => {
  mod.default.handleSetJSResponder(arg0, arg1);
  fn(arg0, arg1);
};
UIManager.clearJSResponder = () => {
  const result = mod.default.handleClearJSResponder();
  fn2();
};
let c15 = true;
({ default: _default, default: _default2, default: _default3, default: _default4, default: _default5, default: _default6 } = _defineProperty);
const _default6Result = _default6({}, _mod972.State.UNDETERMINED, undefined);
const _default5Result = _default5(_default6({}, _mod972.State.UNDETERMINED, undefined), _mod972.State.BEGAN, "onBegan");
const _default4Result = _default4(_default5(_default6({}, _mod972.State.UNDETERMINED, undefined), _mod972.State.BEGAN, "onBegan"), _mod972.State.FAILED, "onFailed");
const _default3Result = _default3(_default4(_default5(_default6({}, _mod972.State.UNDETERMINED, undefined), _mod972.State.BEGAN, "onBegan"), _mod972.State.FAILED, "onFailed"), _mod972.State.CANCELLED, "onCancelled");
let closure_16 = _default(_default2(_default3(_default4(_default5(_default6({}, _mod972.State.UNDETERMINED, undefined), _mod972.State.BEGAN, "onBegan"), _mod972.State.FAILED, "onFailed"), _mod972.State.CANCELLED, "onCancelled"), _mod972.State.ACTIVE, "onActivated"), _mod972.State.END, "onEnded");
let c17 = 1;

export default function createHandler(name) {
  name = name.name;
  let allowedProps = name.allowedProps;
  if (allowedProps === undefined) {
    allowedProps = [];
  }
  let config = name.config;
  if (config === undefined) {
    config = {};
  }
  ({ transformProps: closure_3, customNativeProps } = name);
  if (customNativeProps === undefined) {
    customNativeProps = [];
  }
  const tmp = ((Component) => {
    class Handler {
      constructor(arg0) {
        defaultResult = transformProps.default(this, closure_0);
        items = [];
        items[0] = Component;
        tmp2 = closure_2_19(this, closure_0, items);
        closure_0 = tmp2;
        tmp2.handlerTag = -1;
        tmp2.onGestureHandlerEvent = (nativeEvent) => {
          if (nativeEvent.nativeEvent.handlerTag === closure_0.handlerTag) {
            if (typeof closure_0.props.onGestureEvent === "function") {
              if (closure_0.props.onGestureEvent != null) {
                const props2 = closure_0.props;
                props2.onGestureEvent(nativeEvent);
              }
            }
          } else if (closure_0.props.onGestureHandlerEvent != null) {
            const props = closure_0.props;
            const result = props.onGestureHandlerEvent(nativeEvent);
          }
        };
        tmp2.onGestureHandlerStateChange = (nativeEvent) => {
          if (nativeEvent.nativeEvent.handlerTag === closure_0.handlerTag) {
            if (typeof closure_0.props.onHandlerStateChange === "function") {
              if (closure_0.props.onHandlerStateChange != null) {
                const props = closure_0.props;
                props.onHandlerStateChange(nativeEvent);
              }
            }
            let tmp10 = tmp9;
            if (closure_3_16[nativeEvent.nativeEvent.state]) {
              tmp10 = closure_0.props[tmp9];
            }
            if (tmp10) {
              if (typeof tmp10 === "function") {
                tmp10(nativeEvent);
              }
            }
          } else if (closure_0.props.onGestureHandlerStateChange != null) {
            const props2 = closure_0.props;
            const result = props2.onGestureHandlerStateChange(nativeEvent);
          }
        };
        tmp2.refHandler = (viewNode) => {
          closure_0.viewNode = viewNode;
          const Children = closure_3_8.Children;
          const onlyResult = Children.only(closure_0.props.children);
          if (name(allowedProps[15]).isReact19()) {
            const props = onlyResult.props;
            let ref;
            if (props != null) {
              ref = props.ref;
            }
          } else if (onlyResult != null) {
            ref = onlyResult.ref;
          }
          if (ref) {
            if (typeof ref === "function") {
              ref(viewNode);
            } else {
              ref.current = viewNode;
            }
          }
        };
        tmp2.createGestureHandler = (config) => {
          closure_0.handlerTag = name(allowedProps[17]).getNextHandlerTag();
          closure_0.config = config;
          closure_3_10.default.createGestureHandler(Handler, closure_0.handlerTag, config);
        };
        tmp2.attachGestureHandler = (viewTag) => {
          closure_0.viewTag = viewTag;
          if (closure_3_9.Platform.OS === "web") {
            const handlerTag = closure_0.handlerTag;
            closure_3_10.default.attachGestureHandler(handlerTag, viewTag, name(allowedProps[18]).ActionType.JS_FUNCTION_OLD_API, closure_0.propsRef);
          } else {
            const obj = {};
            ({ onGestureHandlerEvent: obj.onGestureEvent, onGestureHandlerStateChange: obj.onGestureStateChange } = closure_0);
            let result = name(allowedProps[19]).registerOldGestureHandler(closure_0.handlerTag, obj);
            const props2 = closure_0.props;
            let onGestureEvent;
            if (props2 != null) {
              onGestureEvent = props2.onGestureEvent;
            }
            let tmp2 = onGestureEvent;
            if (onGestureEvent) {
              let tmp3 = "current" in onGestureEvent;
              if (!tmp3) {
                tmp3 = "workletEventHandler" in onGestureEvent;
              }
              tmp2 = tmp3;
            }
            const props = closure_0.props;
            let onHandlerStateChange;
            if (props != null) {
              onHandlerStateChange = props.onHandlerStateChange;
            }
            let tmp6 = onHandlerStateChange;
            if (onHandlerStateChange) {
              let tmp7 = "current" in onHandlerStateChange;
              if (!tmp7) {
                tmp7 = "workletEventHandler" in onHandlerStateChange;
              }
              tmp6 = tmp7;
            }
            if (!tmp2) {
              tmp2 = tmp6;
            }
            if (tmp2) {
              let JS_FUNCTION_OLD_API = name(allowedProps[18]).ActionType.REANIMATED_WORKLET;
            } else {
              if (onGestureEvent) {
                if ("__isNative" in onGestureEvent) {
                  JS_FUNCTION_OLD_API = name(allowedProps[18]).ActionType.NATIVE_ANIMATED_EVENT;
                }
              }
              JS_FUNCTION_OLD_API = name(allowedProps[18]).ActionType.JS_FUNCTION_OLD_API;
            }
            closure_3_10.default.attachGestureHandler(closure_0.handlerTag, viewTag, JS_FUNCTION_OLD_API);
            const _default = closure_3_10.default;
            const tmp28 = closure_0;
          }
          const result1 = name(allowedProps[20]).scheduleFlushOperations();
          name(allowedProps[21]).ghQueueMicrotask(() => {
            const MountRegistry = name(allowedProps[22]).MountRegistry;
            const result = MountRegistry.gestureHandlerWillMount(closure_1_0);
          });
        };
        tmp2.updateGestureHandler = (config) => {
          closure_0.config = config;
          closure_3_10.default.updateGestureHandler(closure_0.handlerTag, config);
          const result = name(allowedProps[20]).scheduleFlushOperations();
        };
        tmp2.config = {};
        tmp2.propsRef = closure_2_8.createRef();
        tmp2.isMountedRef = closure_2_8.createRef();
        obj = { allowTouches: closure_2_15 };
        tmp2.state = obj;
        if (Component.id) {
          tmp3 = name;
          tmp4 = closure_1;
          num = 19;
          if (name(closure_1[19]).handlerIDToTag[Component.id] !== undefined) {
            tmp7 = globalThis;
            _Error = Error;
            _HermesInternal = HermesInternal;
            str = "Handler with ID \"";
            str2 = "\" already registered";
            prototype = Error.prototype;
            tmp8 = new.target;
            tmp9 = new.target;
            error = new Error("Handler with ID \"" + Component.id + "\" already registered");
            tmp11 = error;
            throw error;
          } else {
            tmp5 = name;
            tmp6 = closure_1;
            name(closure_1[19]).handlerIDToTag[Component.id] = tmp2.handlerTag;
          }
        }
        return tmp2;
      }
    }
    closure_1_7.default(Handler, Component);
    let obj = {
      key: "componentDidMount",
      value: function componentDidMount() {
        let self = this;
        self = this;
        this.isMountedRef.current = true;
        if (closure_2_21(this.props)) {
          name(allowedProps[21]).ghQueueMicrotask(() => {
            self.update(closure_3_17);
          });
        }
        if (closure_1_3) {
          let props = closure_1_3(self.props);
        } else {
          props = self.props;
        }
        const items = [];
        self.createGestureHandler(name(allowedProps[20]).filterConfig(props, items.concat(config.default(closure_1_1), config.default(closure_1_4)), closure_1_2));
        if (self.viewNode) {
          self.attachGestureHandler(closure_2_11.default(self.viewNode));
        } else {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error = new Error("[Gesture Handler] Failed to obtain view for " + self.displayName + ". Note that old API doesn't support functional components.");
          throw error;
        }
        const defaultResult = config.default(closure_1_1);
      }
    };
    let items = [obj, , , , , ];
    obj = {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        const self = this;
        const defaultResult = closure_2_11.default(this.viewNode);
        if (this.viewTag !== defaultResult) {
          self.attachGestureHandler(defaultResult);
        }
        self.update(closure_2_17);
      }
    };
    items[1] = obj;
    obj = {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        const self = this;
        const inspectorToggleListener = this.inspectorToggleListener;
        if (inspectorToggleListener != null) {
          inspectorToggleListener.remove();
        }
        self.isMountedRef.current = false;
        if (closure_2_9.Platform.OS !== "web") {
          const result = name(allowedProps[19]).unregisterOldGestureHandler(self.handlerTag);
        }
        closure_2_10.default.dropGestureHandler(self.handlerTag);
        const result1 = name(allowedProps[20]).scheduleFlushOperations();
        if (self.props.id) {
          const handlerIDToTag = name(allowedProps[19]).handlerIDToTag;
          delete tmp[tmp2];
        }
        const MountRegistry = name(allowedProps[22]).MountRegistry;
        const result2 = MountRegistry.gestureHandlerWillUnmount(self);
      }
    };
    items[2] = obj;
    items[3] = {
      key: "update",
      value: function update(arg0) {
        let self = this;
        closure_0 = arg0;
        self = this;
        if (this.isMountedRef.current) {
          if (closure_2_21(self.props)) {
            if (arg0 > 0) {
              name(allowedProps[21]).ghQueueMicrotask(() => {
                self.update(closure_0 - 1);
              });
            }
          }
          if (closure_1_3) {
            let props = closure_1_3(self.props);
          } else {
            props = self.props;
          }
          const items = [];
          const filterConfigResult = name(allowedProps[20]).filterConfig(props, items.concat(config.default(closure_1_1), config.default(closure_1_4)), closure_1_2);
          if (!name(allowedProps[15]).deepEqual(self.config, filterConfigResult)) {
            self.updateGestureHandler(filterConfigResult);
          }
          const defaultResult = config.default(closure_1_1);
        }
      }
    };
    items[4] = {
      key: "setNativeProps",
      value: function setNativeProps(arg0) {
        const self = this;
        const merged = Object.assign({}, this.props, arg0);
        let tmp2 = merged;
        if (closure_1_3) {
          tmp2 = closure_1_3(merged);
        }
        const items = [];
        self.updateGestureHandler(name(allowedProps[20]).filterConfig(tmp2, items.concat(config.default(closure_1_1), config.default(closure_1_4)), closure_1_2));
      }
    };
    items[5] = {
      key: "render",
      value: function render() {
        const self = this;
        ({ onGestureHandlerEvent, props } = this);
        ({ onGestureEvent, onGestureHandlerEvent: onGestureHandlerEvent2 } = props);
        if (onGestureEvent) {
          if (typeof onGestureEvent !== "function") {
            let tmp2 = onGestureEvent;
            if (onGestureHandlerEvent2) {
              const _Error5 = Error;
              const error = new Error("Nesting touch handlers with native animated driver is not supported yet");
              throw error;
            }
          }
          ({ onGestureHandlerStateChange, props: props2 } = self);
          ({ onHandlerStateChange, onGestureHandlerStateChange: onGestureHandlerStateChange2 } = props2);
          if (onHandlerStateChange) {
            if (typeof onHandlerStateChange !== "function") {
              let tmp8 = onHandlerStateChange;
              if (onGestureHandlerStateChange2) {
                const _Error4 = Error;
                const error1 = new Error("Nesting touch handlers with native animated driver is not supported yet");
                throw error1;
              }
            }
            let obj = {};
            let tmp14;
            if (self.state.allowTouches) {
              tmp14 = tmp2;
            }
            obj.onGestureHandlerEvent = tmp14;
            let tmp15;
            if (self.state.allowTouches) {
              tmp15 = tmp8;
            }
            obj.onGestureHandlerStateChange = tmp15;
            self.propsRef.current = obj;
            try {
              const Children = closure_2_8.Children;
              const onlyResult = Children.only(self.props.children);
              const _Object = Object;
              obj = { ref: self.refHandler, collapsable: false };
              if (name(allowedProps[15]).isTestEnv()) {
                obj = { handlerType: Handler, handlerTag: self.handlerTag, enabled: self.props.enabled };
                let obj1 = obj;
              } else {
                obj1 = {};
              }
              const obj2 = {};
              const testID = self.props.testID;
              if (testID != null) {
                let testID2 = testID;
              } else {
                testID2 = onlyResult.props.testID;
              }
              obj2.testID = testID2;
              return closure_2_8.cloneElement(onlyResult, Object.assign(obj, obj1, obj2, tmp16), onlyResult.props.children);
            } catch (err) {
              const _Error3 = Error;
              const _HermesInternal = HermesInternal;
              const error2 = new Error(name(allowedProps[15]).tagMessage("" + Handler + " got more than one view as a child. If you want the gesture to work on multiple views, wrap them with a common parent and attach the gesture to that view."));
              throw error2;
            }
          }
          tmp8 = onGestureHandlerStateChange;
          if (onGestureHandlerStateChange2) {
            tmp8 = onGestureHandlerStateChange;
            if (typeof onGestureHandlerStateChange2 !== "function") {
              const _Error2 = Error;
              const error3 = new Error("Nesting touch handlers with native animated driver is not supported yet");
              throw error3;
            }
          }
        }
        tmp2 = onGestureHandlerEvent;
        if (onGestureHandlerEvent2) {
          tmp2 = onGestureHandlerEvent;
          if (typeof onGestureHandlerEvent2 !== "function") {
            const _Error = Error;
            const error4 = new Error("Nesting touch handlers with native animated driver is not supported yet");
            throw error4;
          }
        }
      }
    };
    return customNativeProps.default(Handler, items);
  })(Component.Component);
  tmp.displayName = name;
  tmp.contextType = mod2.default;
  return tmp;
};
