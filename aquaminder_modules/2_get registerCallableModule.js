// Module ID: 2
// Function ID: 85
// Name: get registerCallableModule
// Dependencies: [3, 21, 275, 284, 403, 344, 362, 411, 412, 419, 421, 422, 431, 141, 276, 373, 413, 378, 400, 404, 433, 285, 438, 442, 446, 297, 298, 447, 248, 448, 449, 450, 221, 299, 453, 233, 456, 258, 460, 463, 464, 466, 113, 322, 57, 428, 318, 384, 385, 469, 474, 223, 191, 190, 475, 477, 112, 480, 483, 484, 253, 17, 487, 36, 44, 490, 491, 416, 492, 493, 22, 496, 228, 37, 33, 92, 89, 280, 255]

// Module 2 (get registerCallableModule)
const obj = {};
Object.defineProperty(obj, "registerCallableModule", { get: () => require(3) /* MessageQueue */.default, set: undefined });
Object.defineProperty(obj, "AccessibilityInfo", { get: () => require(21) /* map */.default, set: undefined });
Object.defineProperty(obj, "ActivityIndicator", { get: () => require(275) /* ActivityIndicator */.default, set: undefined });
Object.defineProperty(obj, "Button", { get: () => require(284) /* Button */.default, set: undefined });
Object.defineProperty(obj, "DrawerLayoutAndroid", { get: () => require(403) /* _callSuper */.default, set: undefined });
Object.defineProperty(obj, "FlatList", { get: () => require(344) /* _callSuper */.default, set: undefined });
Object.defineProperty(obj, "Image", { get: () => require(362) /* generateRequestId */.default, set: undefined });
Object.defineProperty(obj, "ImageBackground", { get: () => require(411) /* _callSuper */.default, set: undefined });
Object.defineProperty(obj, "InputAccessoryView", { get: () => require(412) /* InputAccessoryView */.default, set: undefined });
Object.defineProperty(obj, "experimental_LayoutConformance", { get: () => require(419) /* UnimplementedLayoutConformance */.default, set: undefined });
Object.defineProperty(obj, "KeyboardAvoidingView", { get: () => require(421) /* _callSuper */.default, set: undefined });
Object.defineProperty(obj, "Modal", { get: () => require(422) /* _callSuper */.default, set: undefined });
Object.defineProperty(obj, "Pressable", { get: () => require(431) /* usePressState */.default, set: undefined });
Object.defineProperty(obj, "ProgressBarAndroid", {
  get: () => {
    require(141) /* warnOnce */.default("progress-bar-android-moved", "ProgressBarAndroid has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-community/progress-bar-android' instead of 'react-native'. See https://github.com/react-native-progress-view/progress-bar-android");
    return require(276).default;
  },
  set: undefined
});
Object.defineProperty(obj, "RefreshControl", { get: () => require(373) /* _callSuper */.default, set: undefined });
Object.defineProperty(obj, "SafeAreaView", { get: () => require(413).default, set: undefined });
Object.defineProperty(obj, "ScrollView", { get: () => require(378) /* _callSuper */.default, set: undefined });
Object.defineProperty(obj, "SectionList", { get: () => require(400) /* _callSuper */.default, set: undefined });
Object.defineProperty(obj, "StatusBar", { get: () => require(404) /* _callSuper */.default, set: undefined });
Object.defineProperty(obj, "Switch", { get: () => require(433) /* returnsFalse */.default, set: undefined });
Object.defineProperty(obj, "Text", { get: () => require(285) /* useTextPressability */.default, set: undefined });
Object.defineProperty(obj, "TextInput", { get: () => require(438) /* useTextInputStateSynchronization_STATE */.default, set: undefined });
Object.defineProperty(obj, "Touchable", { get: () => require(442) /* extractSingleTouch */.default, set: undefined });
Object.defineProperty(obj, "TouchableHighlight", { get: () => require(446) /* _callSuper */.default, set: undefined });
Object.defineProperty(obj, "TouchableNativeFeedback", { get: () => require(297) /* _callSuper */.default, set: undefined });
Object.defineProperty(obj, "TouchableOpacity", { get: () => require(298) /* _callSuper */.default, set: undefined });
Object.defineProperty(obj, "TouchableWithoutFeedback", { get: () => require(447) /* TouchableWithoutFeedback */.default, set: undefined });
Object.defineProperty(obj, "View", { get: () => require(248) /* View */.default, set: undefined });
Object.defineProperty(obj, "VirtualizedList", { get: () => require(448).default, set: undefined });
Object.defineProperty(obj, "VirtualizedSectionList", { get: () => require(449).default, set: undefined });
Object.defineProperty(obj, "ActionSheetIOS", { get: () => require(450) /* showActionSheetWithOptions */.default, set: undefined });
Object.defineProperty(obj, "Alert", { get: () => require(221) /* Alert */.default, set: undefined });
Object.defineProperty(obj, "Animated", { get: () => require(299) /* get FlatList */.default, set: undefined });
Object.defineProperty(obj, "Appearance", { get: () => require(453) /* getState */, set: undefined });
Object.defineProperty(obj, "AppRegistry", { get: () => require(233) /* map */.default, set: undefined });
Object.defineProperty(obj, "AppState", { get: () => require(456) /* AppStateImpl */.default, set: undefined });
Object.defineProperty(obj, "BackHandler", { get: () => require(258).default, set: undefined });
Object.defineProperty(obj, "Clipboard", {
  get: () => {
    require(141) /* warnOnce */.default("clipboard-moved", "Clipboard has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-clipboard/clipboard' instead of 'react-native'. See https://github.com/react-native-clipboard/clipboard");
    return require(460) /* getString */.default;
  },
  set: undefined
});
Object.defineProperty(obj, "DeviceInfo", { get: () => require(463).default, set: undefined });
Object.defineProperty(obj, "DevMenu", { get: () => require(464) /* show */.default, set: undefined });
Object.defineProperty(obj, "DevSettings", { get: () => require(466) /* addMenuItem */.default, set: undefined });
Object.defineProperty(obj, "Dimensions", { get: () => require(113) /* Dimensions */.default, set: undefined });
Object.defineProperty(obj, "Easing", { get: () => require(322) /* A */.default, set: undefined });
Object.defineProperty(obj, "findNodeHandle", { get: () => require(57) /* keys */.findNodeHandle, set: undefined });
Object.defineProperty(obj, "I18nManager", { get: () => require(428).default, set: undefined });
Object.defineProperty(obj, "InteractionManager", { get: () => require(318) /* _scheduleUpdate */.default, set: undefined });
Object.defineProperty(obj, "Keyboard", { get: () => require(384) /* Keyboard */.default, set: undefined });
Object.defineProperty(obj, "LayoutAnimation", { get: () => require(385) /* configureNext */.default, set: undefined });
Object.defineProperty(obj, "Linking", { get: () => require(469) /* _callSuper */.default, set: undefined });
Object.defineProperty(obj, "LogBox", { get: () => require(474) /* install */.default, set: undefined });
Object.defineProperty(obj, "NativeDialogManagerAndroid", { get: () => require(223) /* DialogManagerAndroid */.default, set: undefined });
Object.defineProperty(obj, "NativeEventEmitter", { get: () => require(191) /* NativeEventEmitter */.default, set: undefined });
Object.defineProperty(obj, "Networking", { get: () => require(190) /* convertHeadersMapToArray */.default, set: undefined });
Object.defineProperty(obj, "PanResponder", { get: () => require(475) /* clearInteractionHandle */.default, set: undefined });
Object.defineProperty(obj, "PermissionsAndroid", { get: () => require(477) /* PermissionsAndroid */.default, set: undefined });
Object.defineProperty(obj, "PixelRatio", { get: () => require(112) /* PixelRatio */.default, set: undefined });
Object.defineProperty(obj, "PushNotificationIOS", {
  get: () => {
    require(141) /* warnOnce */.default("pushNotificationIOS-moved", "PushNotificationIOS has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-community/push-notification-ios' instead of 'react-native'. See https://github.com/react-native-push-notification/ios");
    return require(480) /* _default1 */.default;
  },
  set: undefined
});
Object.defineProperty(obj, "Settings", { get: () => require(483).default, set: undefined });
Object.defineProperty(obj, "Share", { get: () => require(484) /* Share */.default, set: undefined });
Object.defineProperty(obj, "StyleSheet", { get: () => require(253) /* setStyleAttributePreprocessor */.default, set: undefined });
Object.defineProperty(obj, "Systrace", { get: () => require(17) /* isEnabled */, set: undefined });
Object.defineProperty(obj, "ToastAndroid", { get: () => require(487) /* SHORT */.default, set: undefined });
Object.defineProperty(obj, "TurboModuleRegistry", { get: () => require(36) /* requireModule */, set: undefined });
Object.defineProperty(obj, "UIManager", { get: () => require(44) /* isFabricReactTag */.default, set: undefined });
Object.defineProperty(obj, "unstable_batchedUpdates", { get: () => require(57) /* keys */.unstable_batchedUpdates, set: undefined });
Object.defineProperty(obj, "useAnimatedValue", { get: () => require(490) /* useAnimatedValue */.default, set: undefined });
Object.defineProperty(obj, "useColorScheme", { get: () => require(491) /* useColorScheme */.default, set: undefined });
Object.defineProperty(obj, "useWindowDimensions", { get: () => require(416) /* useWindowDimensions */.default, set: undefined });
Object.defineProperty(obj, "UTFSequence", { get: () => require(492) /* deepFreezeAndThrowOnMutationInDev */.default, set: undefined });
Object.defineProperty(obj, "Vibration", { get: () => require(493) /* vibrateScheduler */.default, set: undefined });
Object.defineProperty(obj, "DeviceEventEmitter", { get: () => require(22) /* _callSuper */.default, set: undefined });
Object.defineProperty(obj, "DynamicColorIOS", { get: () => require(496) /* DynamicColorIOS */.DynamicColorIOS, set: undefined });
Object.defineProperty(obj, "NativeAppEventEmitter", { get: () => require(228).default, set: undefined });
Object.defineProperty(obj, "NativeModules", { get: () => require(37) /* genModule */.default, set: undefined });
Object.defineProperty(obj, "Platform", { get: () => require(33) /* get Version */.default, set: undefined });
Object.defineProperty(obj, "PlatformColor", { get: () => require(92) /* PlatformColor */.PlatformColor, set: undefined });
Object.defineProperty(obj, "processColor", { get: () => require(89) /* processColor */.default, set: undefined });
Object.defineProperty(obj, "requireNativeComponent", { get: () => require(280) /* requireNativeComponent */.default, set: undefined });
Object.defineProperty(obj, "RootTagContext", { get: () => require(255) /* RootTagContext */.RootTagContext, set: undefined });

export default obj;
