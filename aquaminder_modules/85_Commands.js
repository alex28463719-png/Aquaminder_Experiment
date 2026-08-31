// Module ID: 85
// Function ID: 1200
// Name: Commands
// Dependencies: [1, 86, 125, 89]

// Module 85 (Commands)
import get2 from "get" /* 86 */;
import processColor from "processColor" /* 89 */;
import codegenNativeCommands from "codegenNativeCommands" /* 125 */;
import module_1 from "module_1" /* 1 */;

let get = _interopRequireWildcard(get2);
get = { uiViewClassName: "AndroidTextInput", bubblingEventTypes: { topBlur: { phasedRegistrationNames: { bubbled: "onBlur", captured: "onBlurCapture" } }, topEndEditing: { phasedRegistrationNames: { bubbled: "onEndEditing", captured: "onEndEditingCapture" } }, topFocus: { phasedRegistrationNames: { bubbled: "onFocus", captured: "onFocusCapture" } }, topKeyPress: { phasedRegistrationNames: { bubbled: "onKeyPress", captured: "onKeyPressCapture" } }, topSubmitEditing: { phasedRegistrationNames: { bubbled: "onSubmitEditing", captured: "onSubmitEditingCapture" } } }, directEventTypes: { topScroll: { registrationName: "onScroll" } } };
get = { maxFontSizeMultiplier: true, adjustsFontSizeToFit: true, minimumFontScale: true, autoFocus: true, placeholder: true, inlineImagePadding: true, contextMenuHidden: true, textShadowColor: { process: processColor.default }, maxLength: true, selectTextOnFocus: true, textShadowRadius: true, underlineColorAndroid: null, textDecorationLine: true, submitBehavior: true, textAlignVertical: true, fontStyle: true, textShadowOffset: true };
const obj1 = { process: processColor.default };
get.underlineColorAndroid = { process: processColor.default };
const obj2 = { process: processColor.default };
get.selectionColor = { process: processColor.default };
const obj3 = { process: processColor.default };
get.selectionHandleColor = { process: processColor.default };
const obj4 = { process: processColor.default };
get.placeholderTextColor = { process: processColor.default };
get.importantForAutofill = true;
get.lineHeight = true;
get.textTransform = true;
get.returnKeyType = true;
get.keyboardType = true;
get.multiline = true;
const obj5 = { process: processColor.default };
get.color = { process: processColor.default };
get.autoComplete = true;
get.numberOfLines = true;
get.letterSpacing = true;
get.returnKeyLabel = true;
get.fontSize = true;
get.onKeyPress = true;
const obj6 = { process: processColor.default };
get.cursorColor = { process: processColor.default };
get.text = true;
get.showSoftInputOnFocus = true;
get.textAlign = true;
get.autoCapitalize = true;
get.autoCorrect = true;
get.caretHidden = true;
get.secureTextEntry = true;
get.textBreakStrategy = true;
get.onScroll = true;
get.onContentSizeChange = true;
get.disableFullscreenUI = true;
get.includeFontPadding = true;
get.fontWeight = true;
get.fontFamily = true;
get.allowFontScaling = true;
get.onSelectionChange = true;
get.mostRecentEventCount = true;
get.inlineImageLeft = true;
get.editable = true;
get.fontVariant = true;
get.borderBottomRightRadius = true;
const obj7 = { process: processColor.default };
get.borderBottomColor = { process: processColor.default };
get.borderRadius = true;
const obj8 = { process: processColor.default };
get.borderRightColor = { process: processColor.default };
const obj9 = { process: processColor.default };
get.borderColor = { process: processColor.default };
get.borderTopRightRadius = true;
get.borderStyle = true;
get.borderBottomLeftRadius = true;
const obj10 = { process: processColor.default };
get.borderLeftColor = { process: processColor.default };
get.borderTopLeftRadius = true;
const obj11 = { process: processColor.default };
get.borderTopColor = { process: processColor.default };
get.validAttributes = get;

export const Commands = module_1(codegenNativeCommands).default({ supportedCommands: ["focus", "blur", "setTextAndSelection"] });
export const __INTERNAL_VIEW_CONFIG = get;
export default get.get("AndroidTextInput", () => get);
