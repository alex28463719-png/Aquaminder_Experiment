// Module ID: 816
// Function ID: 8934
// Name: registerCallableModule
// Dependencies: [1, 99, 38, 203, 119, 2, 4, 30, 20, 817, 818, 819, 251, 2, 820]

// Module 816 (registerCallableModule)
import MessageQueue2 from "MessageQueue" /* 4 */;
import invariant from "invariant" /* 20 */;
import allocate2 from "allocate" /* 30 */;
import _slicedToArray from "_slicedToArray" /* 38 */;
import _defineProperty from "_defineProperty" /* 99 */;
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import Commands2 from "Commands" /* 817 */;
import RNCWebViewModule2 from "RNCWebViewModule" /* 818 */;
import get_registerCallableModule from "get registerCallableModule" /* 819 */;
import module_1 from "module_1" /* 1 */;
import closure_11 from "jsxProd" /* 251 */;

let closure_2 = module_1(_defineProperty);
let closure_3 = module_1(_slicedToArray);
let closure_4 = module_1(_objectWithoutProperties);
let getIteratorFn = _interopRequireWildcard(getIteratorFn2);
const MessageQueue = module_1(MessageQueue2);
const allocate = module_1(allocate2);
let closure_7 = module_1(invariant);
let closure_8 = _interopRequireWildcard(Commands2);
const RNCWebViewModule = module_1(RNCWebViewModule2);
let closure_10 = module_1(get_registerCallableModule);
let closure_12 = ["overScrollMode", "javaScriptEnabled", "thirdPartyCookiesEnabled", "scalesPageToFit", "allowsFullscreenVideo", "allowFileAccess", "saveFormDataDisabled", "cacheEnabled", "androidLayerType", "originWhitelist", "setSupportMultipleWindows", "setBuiltInZoomControls", "setDisplayZoomControls", "nestedScrollEnabled", "startInLoadingState", "onNavigationStateChange", "onLoadStart", "onError", "onLoad", "onLoadEnd", "onLoadProgress", "onHttpError", "onRenderProcessGone", "onMessage", "onOpenWindow", "renderLoading", "renderError", "style", "containerStyle", "source", "nativeConfig", "onShouldStartLoadWithRequest", "injectedJavaScriptObject"];
let closure_13 = ["messagingModuleName"];
let closure_14 = ["messagingModuleName"];
const resolveAssetSource = get_registerCallableModule.Image.resolveAssetSource;
let _default = new allocate.default();
let registerCallableModule = get_registerCallableModule.registerCallableModule;
if (registerCallableModule == null) {
  const registerCallableModule2 = MessageQueue.default.registerCallableModule;
  registerCallableModule = registerCallableModule2.bind(MessageQueue.default);
}
getIteratorFn = {
  onShouldStartLoadWithRequest(arg0) {
    _default.emit("onShouldStartLoadWithRequest", arg0);
  },
  onMessage(arg0) {
    _default.emit("onMessage", arg0);
  }
};
let result = registerCallableModule("RNCWebViewMessagingModule", getIteratorFn);
let c17 = 0;
getIteratorFn = { isFileUploadSupported: RNCWebViewModule.default.isFileUploadSupported };

export default Object.assign(getIteratorFn.forwardRef((overScrollMode) => {
  overScrollMode = overScrollMode.overScrollMode;
  let str = "always";
  if (overScrollMode !== undefined) {
    str = overScrollMode;
  }
  const javaScriptEnabled = overScrollMode.javaScriptEnabled;
  let flag = true;
  if (javaScriptEnabled !== undefined) {
    flag = javaScriptEnabled;
  }
  const thirdPartyCookiesEnabled = overScrollMode.thirdPartyCookiesEnabled;
  let flag2 = true;
  if (thirdPartyCookiesEnabled !== undefined) {
    flag2 = thirdPartyCookiesEnabled;
  }
  const scalesPageToFit = overScrollMode.scalesPageToFit;
  let flag3 = true;
  if (scalesPageToFit !== undefined) {
    flag3 = scalesPageToFit;
  }
  const allowsFullscreenVideo = overScrollMode.allowsFullscreenVideo;
  let flag4 = false;
  if (allowsFullscreenVideo !== undefined) {
    flag4 = allowsFullscreenVideo;
  }
  const allowFileAccess = overScrollMode.allowFileAccess;
  let flag5 = false;
  if (allowFileAccess !== undefined) {
    flag5 = allowFileAccess;
  }
  const saveFormDataDisabled = overScrollMode.saveFormDataDisabled;
  let flag6 = false;
  if (saveFormDataDisabled !== undefined) {
    flag6 = saveFormDataDisabled;
  }
  const cacheEnabled = overScrollMode.cacheEnabled;
  let flag7 = true;
  if (cacheEnabled !== undefined) {
    flag7 = cacheEnabled;
  }
  const androidLayerType = overScrollMode.androidLayerType;
  let str2 = "none";
  if (androidLayerType !== undefined) {
    str2 = androidLayerType;
  }
  let defaultOriginWhitelist = overScrollMode.originWhitelist;
  if (defaultOriginWhitelist === undefined) {
    defaultOriginWhitelist = current(ref[14]).defaultOriginWhitelist;
  }
  const setSupportMultipleWindows = overScrollMode.setSupportMultipleWindows;
  let flag8 = true;
  if (setSupportMultipleWindows !== undefined) {
    flag8 = setSupportMultipleWindows;
  }
  const setBuiltInZoomControls = overScrollMode.setBuiltInZoomControls;
  let flag9 = true;
  if (setBuiltInZoomControls !== undefined) {
    flag9 = setBuiltInZoomControls;
  }
  const setDisplayZoomControls = overScrollMode.setDisplayZoomControls;
  let flag10 = false;
  if (setDisplayZoomControls !== undefined) {
    flag10 = setDisplayZoomControls;
  }
  const nestedScrollEnabled = overScrollMode.nestedScrollEnabled;
  let flag11 = false;
  if (nestedScrollEnabled !== undefined) {
    flag11 = nestedScrollEnabled;
  }
  ({ onMessage, onOpenWindow, renderLoading, renderError, source, nativeConfig } = overScrollMode);
  ({ startInLoadingState, onNavigationStateChange, onLoadStart, onError, onLoad, onLoadEnd, onLoadProgress, onHttpError, onRenderProcessGone, style, containerStyle, onShouldStartLoadWithRequest, injectedJavaScriptObject } = overScrollMode);
  let defaultResult = setViewState.default(overScrollMode, closure_12);
  const sum = c17 + 1;
  c17 = sum;
  current = getIteratorFn.useRef("WebViewMessageHandler" + sum).current;
  ref = getIteratorFn.useRef(null);
  const callback = getIteratorFn.useCallback((arg0, arg1, arg2) => {
    if (arg2) {
      const result = closure_1_9.default.shouldStartLoadWithLockIdentifier(arg0, arg2);
      _default = closure_1_9.default;
    } else if (arg0) {
      if (ref.current) {
        const Commands = closure_1_8.Commands;
        const url = Commands.loadUrl(ref.current, arg1);
      }
    }
  }, []);
  let obj = { onNavigationStateChange, onLoad, onError, onHttpErrorProp: onHttpError, onLoadEnd, onLoadProgress, onLoadStart, onRenderProcessGoneProp: onRenderProcessGone, onMessageProp: onMessage, onOpenWindowProp: onOpenWindow, startInLoadingState, originWhitelist: defaultOriginWhitelist, onShouldStartLoadWithRequestProp: onShouldStartLoadWithRequest, onShouldStartLoadWithRequestCallback: callback };
  const webViewLogic = current(ref[14]).useWebViewLogic(obj);
  const onShouldStartLoadWithRequest2 = webViewLogic.onShouldStartLoadWithRequest;
  const onMessage2 = webViewLogic.onMessage;
  ({ viewState, setViewState } = webViewLogic);
  const lastErrorEvent = webViewLogic.lastErrorEvent;
  const items = [setViewState, ref];
  ({ onLoadingStart, onHttpError: onHttpError2, onLoadingError, onLoadingFinish, onLoadingProgress, onOpenWindow: onOpenWindow2, onRenderProcessGone: onRenderProcessGone2 } = webViewLogic);
  const imperativeHandle = getIteratorFn.useImperativeHandle(arg1, () => ({
    goForward() {
      current = closure_1_1.current;
      if (current) {
        const Commands = closure_2_8.Commands;
        current = Commands.goForward(closure_1_1.current);
      }
      return current;
    },
    goBack() {
      current = closure_1_1.current;
      if (current) {
        const Commands = closure_2_8.Commands;
        current = Commands.goBack(closure_1_1.current);
      }
      return current;
    },
    reload() {
      closure_1_4("LOADING");
      if (closure_1_1.current) {
        const Commands = closure_2_8.Commands;
        Commands.reload(closure_1_1.current);
      }
    },
    stopLoading() {
      current = closure_1_1.current;
      if (current) {
        const Commands = closure_2_8.Commands;
        current = Commands.stopLoading(closure_1_1.current);
      }
      return current;
    },
    postMessage(arg0) {
      current = closure_1_1.current;
      if (current) {
        const Commands = closure_2_8.Commands;
        current = Commands.postMessage(closure_1_1.current, arg0);
      }
      return current;
    },
    injectJavaScript(arg0) {
      current = closure_1_1.current;
      if (current) {
        const Commands = closure_2_8.Commands;
        current = Commands.injectJavaScript(closure_1_1.current, arg0);
      }
      return current;
    },
    requestFocus() {
      current = closure_1_1.current;
      if (current) {
        const Commands = closure_2_8.Commands;
        current = Commands.requestFocus(closure_1_1.current);
      }
      return current;
    },
    clearFormData() {
      current = closure_1_1.current;
      if (current) {
        const Commands = closure_2_8.Commands;
        current = Commands.clearFormData(closure_1_1.current);
      }
      return current;
    },
    clearCache(arg0) {
      current = closure_1_1.current;
      if (current) {
        const Commands = closure_2_8.Commands;
        current = Commands.clearCache(closure_1_1.current, arg0);
      }
      return current;
    },
    clearHistory() {
      current = closure_1_1.current;
      if (current) {
        const Commands = closure_2_8.Commands;
        current = Commands.clearHistory(closure_1_1.current);
      }
      return current;
    }
  }), items);
  const items1 = [current, onMessage2, onShouldStartLoadWithRequest2];
  const effect = getIteratorFn.useEffect(() => {
    closure_0 = closure_1_16.addListener("onShouldStartLoadWithRequest", (messagingModuleName) => {
      if (messagingModuleName.messagingModuleName === closure_0) {
        messagingModuleName = messagingModuleName.messagingModuleName;
        closure_1_2(setViewState.default(messagingModuleName, closure_2_13));
      }
    });
    closure_1 = closure_1_16.addListener("onMessage", (messagingModuleName) => {
      if (messagingModuleName.messagingModuleName === closure_0) {
        messagingModuleName = messagingModuleName.messagingModuleName;
        closure_1_3(setViewState.default(messagingModuleName, closure_2_14));
      }
    });
    return () => {
      closure_0.remove();
      closure_1.remove();
    };
  }, items1);
  if (viewState === "LOADING") {
    if (!renderLoading) {
      renderLoading = current(ref[14]).defaultRenderLoading;
    }
    let renderLoadingResult = renderLoading();
  } else if (viewState === "ERROR") {
    closure_7.default(lastErrorEvent != null, "lastErrorEvent expected to be non-null");
    if (lastErrorEvent) {
      if (!renderError) {
        renderError = current(ref[14]).defaultRenderError;
      }
      renderLoadingResult = renderError(lastErrorEvent.domain, lastErrorEvent.code, lastErrorEvent.description);
    }
  } else if (viewState !== "IDLE") {
    const _console3 = console;
    const _HermesInternal = HermesInternal;
    console.error("RNCWebView invalid state encountered: " + viewState);
  }
  const items2 = [mod2.default.container, mod2.default.webView, style];
  const items3 = [mod2.default.container, containerStyle];
  if (typeof source !== "number") {
    if (source) {
      if ("method" in source) {
        if (source.method === "POST") {
          if (source.headers) {
            const _console2 = console;
            console.warn("WebView: `source.headers` is not supported when using POST.");
          }
        }
        if (source.method === "GET") {
          if (source.body) {
            const _console = console;
            console.warn("WebView: `source.body` is not supported when using GET.");
          }
        }
      }
    }
  }
  let component;
  if (nativeConfig != null) {
    component = nativeConfig.component;
  }
  if (!component) {
    component = mod.default;
  }
  const tmp21 = resolveAssetSource(source);
  let reduced = tmp21;
  if (typeof tmp21 === "object") {
    let _Object = Object;
    let entries = Object.entries(tmp21);
    reduced = entries.reduce((arg0, arg1) => {
      let defaultResult = onMessage2.default(arg1, 2);
      const first = defaultResult[0];
      let mapped = tmp3;
      if (first === "headers") {
        mapped = tmp3;
        if (tmp3) {
          mapped = tmp3;
          if (typeof tmp3 === "object") {
            const _Object = Object;
            const entries = Object.entries(tmp3);
            mapped = entries.map((arg0) => {
              const defaultResult = onMessage2.default(arg0, 2);
              return { name: defaultResult[0], value: defaultResult[1] };
            });
          }
        }
      }
      return Object.assign({}, arg0, onShouldStartLoadWithRequest2.default({}, first, mapped));
    }, {});
  }
  obj = { messagingEnabled: typeof onMessage === "function", messagingModuleName: current, hasOnScroll: defaultResult.onScroll, onLoadingError, onLoadingFinish, onLoadingProgress, onLoadingStart, onHttpError: onHttpError2, onRenderProcessGone: onRenderProcessGone2, onMessage: onMessage2, onOpenWindow: onOpenWindow2, hasOnOpenWindowEvent: onOpenWindow !== undefined, onShouldStartLoadWithRequest: onShouldStartLoadWithRequest2, ref, source: tmp21, newSource: reduced, style: items2, overScrollMode: str, javaScriptEnabled: flag, thirdPartyCookiesEnabled: flag2, scalesPageToFit: flag3, allowsFullscreenVideo: flag4, allowFileAccess: flag5, saveFormDataDisabled: flag6, cacheEnabled: flag7, androidLayerType: str2, setSupportMultipleWindows: flag8, setBuiltInZoomControls: flag9, setDisplayZoomControls: flag10, nestedScrollEnabled: flag11, injectedJavaScriptObject: JSON.stringify(injectedJavaScriptObject) };
  let props;
  if (nativeConfig != null) {
    props = nativeConfig.props;
  }
  obj = { style: items3 };
  const items4 = [<component key="webViewKey" {...Object.assign({}, defaultResult, obj, props)} />, renderLoadingResult];
  obj.children = items4;
  return <get registerCallableModule.View style={items3} />;
}), getIteratorFn);
