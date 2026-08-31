// Module ID: 440
// Function ID: 5089
// Dependencies: [101, 89, 124]

// Module 440
import processColor from "processColor" /* 89 */;
import sizesDiffer from "sizesDiffer" /* 101 */;
import ConditionallyIgnoredEventHandlers from "ConditionallyIgnoredEventHandlers" /* 124 */;

let obj = { bubblingEventTypes: { topBlur: { phasedRegistrationNames: { bubbled: "onBlur", captured: "onBlurCapture" } }, topChange: { phasedRegistrationNames: { bubbled: "onChange", captured: "onChangeCapture" } }, topEndEditing: { phasedRegistrationNames: { bubbled: "onEndEditing", captured: "onEndEditingCapture" } }, topFocus: { phasedRegistrationNames: { bubbled: "onFocus", captured: "onFocusCapture" } }, topKeyPress: { phasedRegistrationNames: { bubbled: "onKeyPress", captured: "onKeyPressCapture" } }, topSubmitEditing: { phasedRegistrationNames: { bubbled: "onSubmitEditing", captured: "onSubmitEditingCapture" } }, topTouchCancel: { phasedRegistrationNames: { bubbled: "onTouchCancel", captured: "onTouchCancelCapture" } }, topTouchEnd: { phasedRegistrationNames: { bubbled: "onTouchEnd", captured: "onTouchEndCapture" } }, topTouchMove: { phasedRegistrationNames: { bubbled: "onTouchMove", captured: "onTouchMoveCapture" } } }, directEventTypes: { topScroll: { registrationName: "onScroll" }, topSelectionChange: { registrationName: "onSelectionChange" }, topContentSizeChange: { registrationName: "onContentSizeChange" }, topChangeSync: { registrationName: "onChangeSync" }, topKeyPressSync: { registrationName: "onKeyPressSync" } } };
obj = { dynamicTypeRamp: true, fontSize: true, fontWeight: true, fontVariant: true, textShadowOffset: null, allowFontScaling: true, fontStyle: true, textTransform: true, textAlign: true, fontFamily: true, lineHeight: true, isHighlighted: true, writingDirection: true, textDecorationLine: true, textShadowRadius: true, letterSpacing: true, textDecorationStyle: true, textDecorationColor: null, color: null, maxFontSizeMultiplier: true };
obj = { diff: sizesDiffer.default };
obj.textShadowOffset = obj;
obj.textDecorationColor = { process: processColor.default };
const obj1 = { process: processColor.default };
obj.color = { process: processColor.default };
const obj2 = { process: processColor.default };
obj.textShadowColor = { process: processColor.default };
obj.editable = true;
obj.inputAccessoryViewID = true;
obj.inputAccessoryViewButtonLabel = true;
obj.caretHidden = true;
obj.enablesReturnKeyAutomatically = true;
const obj3 = { process: processColor.default };
obj.placeholderTextColor = { process: processColor.default };
obj.clearButtonMode = true;
obj.keyboardType = true;
obj.selection = true;
obj.returnKeyType = true;
obj.submitBehavior = true;
obj.mostRecentEventCount = true;
obj.scrollEnabled = true;
const obj4 = { process: processColor.default };
obj.selectionColor = { process: processColor.default };
obj.contextMenuHidden = true;
obj.secureTextEntry = true;
obj.placeholder = true;
obj.autoCorrect = true;
obj.multiline = true;
obj.numberOfLines = true;
obj.textContentType = true;
obj.maxLength = true;
obj.autoCapitalize = true;
obj.keyboardAppearance = true;
obj.passwordRules = true;
obj.spellCheck = true;
obj.selectTextOnFocus = true;
obj.text = true;
obj.clearTextOnFocus = true;
obj.showSoftInputOnFocus = true;
obj.autoFocus = true;
obj.lineBreakStrategyIOS = true;
obj.lineBreakModeIOS = true;
obj.smartInsertDelete = true;
obj.validAttributes = Object.assign(obj, ConditionallyIgnoredEventHandlers.ConditionallyIgnoredEventHandlers({ onChange: true, onSelectionChange: true, onContentSizeChange: true, onScroll: true, onChangeSync: true, onKeyPressSync: true }), { disableKeyboardShortcuts: true });

export default obj;
