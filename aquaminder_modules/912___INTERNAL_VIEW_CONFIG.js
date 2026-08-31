// Module ID: 912
// Function ID: 9745
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [1, 279, 89, 124, 86]

// Module 912 (__INTERNAL_VIEW_CONFIG)
import processColor from "processColor" /* 89 */;
import ConditionallyIgnoredEventHandlers from "ConditionallyIgnoredEventHandlers" /* 124 */;
import codegenNativeComponent2 from "codegenNativeComponent" /* 279 */;
import module_1 from "module_1" /* 1 */;
import get from "get" /* 86 */;

const codegenNativeComponent = module_1(codegenNativeComponent2);
let obj = { uiViewClassName: "RNSScreen", directEventTypes: { topAppear: { registrationName: "onAppear" }, topDisappear: { registrationName: "onDisappear" }, topDismissed: { registrationName: "onDismissed" }, topNativeDismissCancelled: { registrationName: "onNativeDismissCancelled" }, topWillAppear: { registrationName: "onWillAppear" }, topWillDisappear: { registrationName: "onWillDisappear" }, topHeaderHeightChange: { registrationName: "onHeaderHeightChange" }, topTransitionProgress: { registrationName: "onTransitionProgress" }, topGestureCancel: { registrationName: "onGestureCancel" }, topHeaderBackButtonClicked: { registrationName: "onHeaderBackButtonClicked" }, topSheetDetentChanged: { registrationName: "onSheetDetentChanged" } } };
obj = { sheetAllowedDetents: true, sheetLargestUndimmedDetent: true, sheetGrabberVisible: true, sheetCornerRadius: true, sheetExpandsWhenScrolledToEdge: true, sheetInitialDetent: true, sheetElevation: true, customAnimationOnSwipe: true, fullScreenSwipeEnabled: true, fullScreenSwipeShadowEnabled: true, homeIndicatorHidden: true, preventNativeDismiss: true, gestureEnabled: true, statusBarColor: null, statusBarHidden: true, screenOrientation: true, statusBarAnimation: true, statusBarStyle: true, statusBarTranslucent: true, gestureResponseDistance: true, stackPresentation: true, stackAnimation: true, transitionDuration: true, replaceAnimation: true, swipeDirection: true, hideKeyboardOnSwipe: true, activityState: true, navigationBarColor: null, navigationBarTranslucent: true, navigationBarHidden: true, nativeBackButtonDismissalEnabled: true };
obj = { process: processColor.default };
obj.statusBarColor = obj;
obj.navigationBarColor = { process: processColor.default };
const obj1 = { process: processColor.default };
obj.validAttributes = Object.assign(obj, ConditionallyIgnoredEventHandlers.ConditionallyIgnoredEventHandlers({ onAppear: true, onDisappear: true, onDismissed: true, onNativeDismissCancelled: true, onWillAppear: true, onWillDisappear: true, onHeaderHeightChange: true, onTransitionProgress: true, onGestureCancel: true, onHeaderBackButtonClicked: true, onSheetDetentChanged: true }));

export const __INTERNAL_VIEW_CONFIG = obj;
export default get.get("RNSScreen", () => obj);
