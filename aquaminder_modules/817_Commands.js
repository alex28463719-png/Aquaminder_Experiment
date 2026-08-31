// Module ID: 817
// Function ID: 8958
// Name: Commands
// Dependencies: [1, 279, 125, 124, 86, 57]

// Module 817 (Commands)
import keys from "keys" /* 57 */;
import ConditionallyIgnoredEventHandlers from "ConditionallyIgnoredEventHandlers" /* 124 */;
import codegenNativeCommands2 from "codegenNativeCommands" /* 125 */;
import codegenNativeComponent2 from "codegenNativeComponent" /* 279 */;
import module_1 from "module_1" /* 1 */;
import get from "get" /* 86 */;

const codegenNativeComponent = module_1(codegenNativeComponent2);
const codegenNativeCommands = module_1(codegenNativeCommands2);
const obj = { uiViewClassName: "RNCWebView", directEventTypes: { topContentSizeChange: { registrationName: "onContentSizeChange" }, topRenderProcessGone: { registrationName: "onRenderProcessGone" }, topContentProcessDidTerminate: { registrationName: "onContentProcessDidTerminate" }, topCustomMenuSelection: { registrationName: "onCustomMenuSelection" }, topFileDownload: { registrationName: "onFileDownload" }, topLoadingError: { registrationName: "onLoadingError" }, topLoadingFinish: { registrationName: "onLoadingFinish" }, topLoadingProgress: { registrationName: "onLoadingProgress" }, topLoadingStart: { registrationName: "onLoadingStart" }, topHttpError: { registrationName: "onHttpError" }, topMessage: { registrationName: "onMessage" }, topOpenWindow: { registrationName: "onOpenWindow" }, topScroll: { registrationName: "onScroll" }, topShouldStartLoadWithRequest: { registrationName: "onShouldStartLoadWithRequest" } }, validAttributes: Object.assign({ allowFileAccess: true, allowsProtectedMedia: true, allowsFullscreenVideo: true, androidLayerType: true, cacheMode: true, domStorageEnabled: true, downloadingMessage: true, forceDarkOn: true, geolocationEnabled: true, lackPermissionToDownloadMessage: true, messagingModuleName: true, minimumFontSize: true, mixedContentMode: true, nestedScrollEnabled: true, overScrollMode: true, saveFormDataDisabled: true, scalesPageToFit: true, setBuiltInZoomControls: true, setDisplayZoomControls: true, setSupportMultipleWindows: true, textZoom: true, thirdPartyCookiesEnabled: true, hasOnScroll: true, allowingReadAccessToURL: true, allowsBackForwardNavigationGestures: true, allowsInlineMediaPlayback: true, allowsPictureInPictureMediaPlayback: true, allowsAirPlayForMediaPlayback: true, allowsLinkPreview: true, automaticallyAdjustContentInsets: true, autoManageStatusBarEnabled: true, bounces: true, contentInset: true, contentInsetAdjustmentBehavior: true, contentMode: true, dataDetectorTypes: true, decelerationRate: true, directionalLockEnabled: true, enableApplePay: true, hideKeyboardAccessoryView: true, keyboardDisplayRequiresUserAction: true, limitsNavigationsToAppBoundDomains: true, mediaCapturePermissionGrantType: true, pagingEnabled: true, pullToRefreshEnabled: true, refreshControlLightMode: true, scrollEnabled: true, sharedCookiesEnabled: true, textInteractionEnabled: true, useSharedProcessPool: true, menuItems: true, suppressMenuItems: true, hasOnFileDownload: true, fraudulentWebsiteWarningEnabled: true, allowFileAccessFromFileURLs: true, allowUniversalAccessFromFileURLs: true, applicationNameForUserAgent: true, basicAuthCredential: true, cacheEnabled: true, incognito: true, injectedJavaScript: true, injectedJavaScriptBeforeContentLoaded: true, injectedJavaScriptForMainFrameOnly: true, injectedJavaScriptBeforeContentLoadedForMainFrameOnly: true, javaScriptCanOpenWindowsAutomatically: true, javaScriptEnabled: true, webviewDebuggingEnabled: true, mediaPlaybackRequiresUserAction: true, messagingEnabled: true, hasOnOpenWindowEvent: true, showsHorizontalScrollIndicator: true, showsVerticalScrollIndicator: true, indicatorStyle: true, newSource: true, userAgent: true, injectedJavaScriptObject: true, paymentRequestEnabled: true }, ConditionallyIgnoredEventHandlers.ConditionallyIgnoredEventHandlers({ onContentSizeChange: true, onRenderProcessGone: true, onContentProcessDidTerminate: true, onCustomMenuSelection: true, onFileDownload: true, onLoadingError: true, onLoadingFinish: true, onLoadingProgress: true, onLoadingStart: true, onHttpError: true, onMessage: true, onOpenWindow: true, onScroll: true, onShouldStartLoadWithRequest: true })) };

export const __INTERNAL_VIEW_CONFIG = obj;
export default get.get("RNCWebView", () => obj);
export const Commands = {
  goBack(result) {
    keys.dispatchCommand(result, "goBack", []);
  },
  goForward(result) {
    keys.dispatchCommand(result, "goForward", []);
  },
  reload(result) {
    keys.dispatchCommand(result, "reload", []);
  },
  stopLoading(result) {
    keys.dispatchCommand(result, "stopLoading", []);
  },
  injectJavaScript(result) {
    const items = [arg1];
    keys.dispatchCommand(result, "injectJavaScript", items);
  },
  requestFocus(result) {
    keys.dispatchCommand(result, "requestFocus", []);
  },
  postMessage(result) {
    const items = [arg1];
    keys.dispatchCommand(result, "postMessage", items);
  },
  loadUrl(current, arg1) {
    const items = [arg1];
    keys.dispatchCommand(current, "loadUrl", items);
  },
  clearFormData(result) {
    keys.dispatchCommand(result, "clearFormData", []);
  },
  clearCache(result) {
    const items = [arg1];
    keys.dispatchCommand(result, "clearCache", items);
  },
  clearHistory(result) {
    keys.dispatchCommand(result, "clearHistory", []);
  }
};
