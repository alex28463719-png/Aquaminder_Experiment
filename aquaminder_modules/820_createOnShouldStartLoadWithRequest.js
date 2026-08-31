// Module ID: 820
// Function ID: 8973
// Name: createOnShouldStartLoadWithRequest
// Dependencies: [1, 38, 6, 591, 119, 2, 819, 251]
// Exports: defaultRenderError, defaultRenderLoading, useWebViewLogic

// Module 820 (createOnShouldStartLoadWithRequest)
import _toConsumableArray from "_toConsumableArray" /* 6 */;
import _slicedToArray from "_slicedToArray" /* 38 */;
import getIteratorFn from "getIteratorFn" /* 119 */;
import _mod591 from "module_591" /* 591 */;
import get_registerCallableModule from "get registerCallableModule" /* 819 */;
import module_1 from "module_1" /* 1 */;
import closure_4 from "get registerCallableModule" /* 2 */;
import closure_6 from "jsxProd" /* 251 */;

let closure_0 = module_1(_slicedToArray);
let closure_1 = module_1(_toConsumableArray);
let closure_2 = module_1(_mod591);
let closure_3 = _interopRequireWildcard(getIteratorFn);
let closure_5 = module_1(get_registerCallableModule);
function extractOrigin(arg0) {
  const match = /^[A-Za-z][A-Za-z0-9+\-.]+:(\/\/)?[^/]*/.exec(arg0);
  let str = "";
  if (match !== null) {
    str = match[0];
  }
  return str;
}
function originWhitelistToRegex(arg0) {
  return "^" + closure_2.default(arg0).replace(/\\\*/g, ".*");
}
function passesWhitelist(arr) {
  closure_0 = extractOrigin(arg1);
  return arr.some((arg0) => {
    const regExp = new RegExp(arg0);
    return regExp.test(closure_0);
  });
}
function compileWhitelist(arg0) {
  let items1 = arg0;
  const items = ["about:blank"];
  if (!arg0) {
    items1 = [];
  }
  const combined = items.concat(closure_1.default(items1));
  return combined.map(originWhitelistToRegex);
}
function createOnShouldStartLoadWithRequest(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  return (nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    const url = nativeEvent.url;
    if (closure_1_9(closure_1_10(closure_1), url)) {
      let flag = true;
      if (callback) {
        flag = callback(nativeEvent);
      }
    } else {
      let Linking = closure_1_4.Linking;
      const canOpenURLResult = Linking.canOpenURL(url);
      Linking.canOpenURL(url).then((arg0) => {
        if (arg0) {
          const Linking = closure_2_4.Linking;
          return Linking.openURL(url);
        } else {
          const _console = console;
          const _HermesInternal = HermesInternal;
          console.warn("Can't open url: " + url);
        }
      }).catch((arg0) => {
        console.warn("Error opening URL: ", arg0);
      });
      flag = false;
      const nextPromise = Linking.canOpenURL(url).then((arg0) => {
        if (arg0) {
          const Linking = closure_2_4.Linking;
          return Linking.openURL(url);
        } else {
          const _console = console;
          const _HermesInternal = HermesInternal;
          console.warn("Can't open url: " + url);
        }
      });
    }
    url(flag, url, nativeEvent.lockIdentifier);
  };
}

export const defaultOriginWhitelist = ["http://*", "https://*"];
export { createOnShouldStartLoadWithRequest };
export function defaultRenderLoading() {
  return <RN.View style={mod.default.loadingOrErrorView}><RN.ActivityIndicator /></RN.View>;
}
export function defaultRenderError(arg0, arg1, arg2) {
  let obj = { style: mod.default.loadingOrErrorView };
  obj = { style: mod.default.errorTextTitle, children: "Error loading page" };
  const items = [<RN.Text style={mod.default.errorTextTitle}>{"Error loading page"}</RN.Text>, , , ];
  obj = { style: mod.default.errorText, children: "Domain: " + arg0 };
  items[1] = <RN.Text style={mod.default.errorText}>{"Domain: " + arg0}</RN.Text>;
  items[2] = <RN.Text style={mod.default.errorText}>{"Error Code: " + arg1}</RN.Text>;
  const obj1 = { style: mod.default.errorText, children: "Error Code: " + arg1 };
  items[3] = <RN.Text style={mod.default.errorText}>{"Description: " + arg2}</RN.Text>;
  obj.children = items;
  return <RN.View style={mod.default.errorText}>{"Domain: " + arg0}</RN.View>;
}
export function useWebViewLogic(onNavigationStateChange) {
  onNavigationStateChange = onNavigationStateChange.onNavigationStateChange;
  const onLoadStart = onNavigationStateChange.onLoadStart;
  const onLoad = onNavigationStateChange.onLoad;
  const onLoadProgress = onNavigationStateChange.onLoadProgress;
  const onLoadEnd = onNavigationStateChange.onLoadEnd;
  const onError = onNavigationStateChange.onError;
  const onHttpErrorProp = onNavigationStateChange.onHttpErrorProp;
  const onMessageProp = onNavigationStateChange.onMessageProp;
  const onOpenWindowProp = onNavigationStateChange.onOpenWindowProp;
  const onRenderProcessGoneProp = onNavigationStateChange.onRenderProcessGoneProp;
  const onContentProcessDidTerminateProp = onNavigationStateChange.onContentProcessDidTerminateProp;
  const originWhitelist = onNavigationStateChange.originWhitelist;
  const onShouldStartLoadWithRequestProp = onNavigationStateChange.onShouldStartLoadWithRequestProp;
  const onShouldStartLoadWithRequestCallback = onNavigationStateChange.onShouldStartLoadWithRequestCallback;
  let str = "IDLE";
  if (onNavigationStateChange.startInLoadingState) {
    str = "LOADING";
  }
  const defaultResult = onNavigationStateChange.default(onLoadProgress.useState(str), 2);
  closure_14 = tmp2;
  [tmp4, closure_15] = onNavigationStateChange.default(onLoadProgress.useState(null), 2);
  closure_16 = onLoadProgress.useRef(null);
  const items = [onNavigationStateChange];
  const callback = onLoadProgress.useCallback((nativeEvent) => {
    if (onNavigationStateChange != null) {
      onNavigationStateChange(nativeEvent.nativeEvent);
    }
  }, items);
  const items1 = [onLoadStart, callback];
  const items2 = [onError, onLoadEnd];
  const callback1 = onLoadProgress.useCallback((nativeEvent) => {
    closure_16.current = nativeEvent.nativeEvent.url;
    if (onLoadStart != null) {
      onLoadStart(nativeEvent);
    }
    callback(nativeEvent);
  }, items1);
  const items3 = [onHttpErrorProp];
  const callback2 = onLoadProgress.useCallback((persist) => {
    persist.persist();
    if (onError) {
      onError(persist);
    } else {
      const _console = console;
      console.warn("Encountered an error loading page", persist.nativeEvent);
    }
    if (onLoadEnd != null) {
      onLoadEnd(persist);
    }
    if (!persist.isDefaultPrevented()) {
      callback("ERROR");
      callback2(persist.nativeEvent);
    }
  }, items2);
  const items4 = [onRenderProcessGoneProp];
  const callback3 = onLoadProgress.useCallback((arg0) => {
    if (onHttpErrorProp != null) {
      onHttpErrorProp(arg0);
    }
  }, items3);
  const items5 = [onContentProcessDidTerminateProp];
  const callback4 = onLoadProgress.useCallback((arg0) => {
    if (onRenderProcessGoneProp != null) {
      onRenderProcessGoneProp(arg0);
    }
  }, items4);
  const items6 = [onLoad, onLoadEnd, callback];
  const callback5 = onLoadProgress.useCallback((arg0) => {
    if (onContentProcessDidTerminateProp != null) {
      onContentProcessDidTerminateProp(arg0);
    }
  }, items5);
  const items7 = [onMessageProp];
  const callback6 = onLoadProgress.useCallback((arg0) => {
    if (onLoad != null) {
      onLoad(arg0);
    }
    if (onLoadEnd != null) {
      onLoadEnd(arg0);
    }
    if (onLoadEnd.Platform.OS !== "android") {
      callback("IDLE");
    }
    callback(arg0);
  }, items6);
  const items8 = [onLoadProgress];
  const callback7 = onLoadProgress.useCallback((arg0) => {
    if (onMessageProp != null) {
      onMessageProp(arg0);
    }
  }, items7);
  const items9 = [originWhitelist, onShouldStartLoadWithRequestProp, onShouldStartLoadWithRequestCallback];
  const callback8 = onLoadProgress.useCallback((arg0) => {
    if (onLoadEnd.Platform.OS === "android") {
      if (tmp === 1) {
        callback((arg0) => {
          let str = "IDLE";
          if (arg0 !== "LOADING") {
            str = arg0;
          }
          return str;
        });
      }
    }
    if (onLoadProgress != null) {
      onLoadProgress(arg0);
    }
  }, items8);
  const items10 = [onOpenWindowProp];
  const memo = onLoadProgress.useMemo(() => originWhitelist(onShouldStartLoadWithRequestCallback, originWhitelist, onShouldStartLoadWithRequestProp), items9);
  const defaultResult1 = onNavigationStateChange.default(onLoadProgress.useState(null), 2);
  return {
    onShouldStartLoadWithRequest: memo,
    onLoadingStart: callback1,
    onLoadingProgress: callback8,
    onLoadingError: callback2,
    onLoadingFinish: callback6,
    onHttpError: callback3,
    onRenderProcessGone: callback4,
    onContentProcessDidTerminate: callback5,
    onMessage: callback7,
    onOpenWindow: onLoadProgress.useCallback((arg0) => {
      if (onOpenWindowProp != null) {
        onOpenWindowProp(arg0);
      }
    }, items10),
    viewState: defaultResult[0],
    setViewState: defaultResult[1],
    lastErrorEvent: tmp4
  };
}
