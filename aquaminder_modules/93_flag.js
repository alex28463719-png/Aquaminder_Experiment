// Module ID: 93
// Function ID: 1249
// Name: flag
// Dependencies: [1, 73, 75, 94, 95, 88, 89, 96, 97, 98, 100, 101]

// Module 93 (flag)
import animatedShouldDebounceQueueFlush2 from "animatedShouldDebounceQueueFlush" /* 73 */;
import NativeReactNativeFeatureFlagsCxx2 from "NativeReactNativeFeatureFlagsCxx" /* 75 */;
import parseBoxShadowString2 from "parseBoxShadowString" /* 88 */;
import processColor2 from "processColor" /* 89 */;
import processAspectRatio2 from "processAspectRatio" /* 94 */;
import parseCSSLinearGradient2 from "parseCSSLinearGradient" /* 95 */;
import _getFilterAmount2 from "_getFilterAmount" /* 96 */;
import processFontVariant2 from "processFontVariant" /* 97 */;
import _getKeyAndValueFromCSSTransform2 from "_getKeyAndValueFromCSSTransform" /* 98 */;
import processTransformOrigin2 from "processTransformOrigin" /* 100 */;
import sizesDiffer from "sizesDiffer" /* 101 */;
import module_1 from "module_1" /* 1 */;

let animatedShouldDebounceQueueFlush = _interopRequireWildcard(animatedShouldDebounceQueueFlush2);
const NativeReactNativeFeatureFlagsCxx = module_1(NativeReactNativeFeatureFlagsCxx2);
const processAspectRatio = module_1(processAspectRatio2);
const parseCSSLinearGradient = module_1(parseCSSLinearGradient2);
const parseBoxShadowString = module_1(parseBoxShadowString2);
const processColor = module_1(processColor2);
const _getFilterAmount = module_1(_getFilterAmount2);
const processFontVariant = module_1(processFontVariant2);
const _getKeyAndValueFromCSSTransform = module_1(_getKeyAndValueFromCSSTransform2);
const processTransformOrigin = module_1(processTransformOrigin2);
animatedShouldDebounceQueueFlush = { process: processColor.default };
animatedShouldDebounceQueueFlush = { alignContent: true, alignItems: true, alignSelf: true, aspectRatio: { process: processAspectRatio.default }, borderBottomWidth: true, borderEndWidth: true, borderLeftWidth: true, borderRightWidth: true, borderStartWidth: true, borderTopWidth: true, boxSizing: true, columnGap: true, borderWidth: true, bottom: true, direction: true, display: true, end: true, flex: true, flexBasis: true, flexDirection: true, flexGrow: true, flexShrink: true, flexWrap: true, gap: true, height: true, inset: true, insetBlock: true, insetBlockEnd: true, insetBlockStart: true, insetInline: true, insetInlineEnd: true, insetInlineStart: true, justifyContent: true, left: true, margin: true, marginBlock: true, marginBlockEnd: true, marginBlockStart: true, marginBottom: true, marginEnd: true, marginHorizontal: true, marginInline: true, marginInlineEnd: true, marginInlineStart: true, marginLeft: true, marginRight: true, marginStart: true, marginTop: true, marginVertical: true, maxHeight: true, maxWidth: true, minHeight: true, minWidth: true, overflow: true, padding: true, paddingBlock: true, paddingBlockEnd: true, paddingBlockStart: true, paddingBottom: true, paddingEnd: true, paddingHorizontal: true, paddingInline: true, paddingInlineEnd: true, paddingInlineStart: true, paddingLeft: true, paddingRight: true, paddingStart: true, paddingTop: true, paddingVertical: true, position: true, right: true, rowGap: true, start: true, top: true, width: true, zIndex: true, elevation: true, shadowColor: null, shadowOffset: null, shadowOpacity: true, shadowRadius: true };
animatedShouldDebounceQueueFlush.shadowColor = animatedShouldDebounceQueueFlush;
animatedShouldDebounceQueueFlush.shadowOffset = { diff: module_1(sizesDiffer).default };
animatedShouldDebounceQueueFlush.transform = { process: _getKeyAndValueFromCSSTransform.default };
animatedShouldDebounceQueueFlush.transformOrigin = { process: processTransformOrigin.default };
if (NativeReactNativeFeatureFlagsCxx.default == null) {
  const obj2 = { process: _getFilterAmount.default };
  let flag = obj2;
} else {
  flag = true;
}
animatedShouldDebounceQueueFlush.filter = flag;
animatedShouldDebounceQueueFlush.mixBlendMode = true;
animatedShouldDebounceQueueFlush.isolation = true;
if (NativeReactNativeFeatureFlagsCxx.default == null) {
  const obj3 = { process: parseBoxShadowString.default };
  let flag2 = obj3;
} else {
  flag2 = true;
}
animatedShouldDebounceQueueFlush.boxShadow = flag2;
animatedShouldDebounceQueueFlush.experimental_backgroundImage = { process: parseCSSLinearGradient.default };
animatedShouldDebounceQueueFlush.backfaceVisibility = true;
animatedShouldDebounceQueueFlush.backgroundColor = animatedShouldDebounceQueueFlush;
animatedShouldDebounceQueueFlush.borderBlockColor = animatedShouldDebounceQueueFlush;
animatedShouldDebounceQueueFlush.borderBlockEndColor = animatedShouldDebounceQueueFlush;
animatedShouldDebounceQueueFlush.borderBlockStartColor = animatedShouldDebounceQueueFlush;
animatedShouldDebounceQueueFlush.borderBottomColor = animatedShouldDebounceQueueFlush;
animatedShouldDebounceQueueFlush.borderBottomEndRadius = true;
animatedShouldDebounceQueueFlush.borderBottomLeftRadius = true;
animatedShouldDebounceQueueFlush.borderBottomRightRadius = true;
animatedShouldDebounceQueueFlush.borderBottomStartRadius = true;
animatedShouldDebounceQueueFlush.borderColor = animatedShouldDebounceQueueFlush;
animatedShouldDebounceQueueFlush.borderCurve = true;
animatedShouldDebounceQueueFlush.borderEndColor = animatedShouldDebounceQueueFlush;
animatedShouldDebounceQueueFlush.borderEndEndRadius = true;
animatedShouldDebounceQueueFlush.borderEndStartRadius = true;
animatedShouldDebounceQueueFlush.borderLeftColor = animatedShouldDebounceQueueFlush;
animatedShouldDebounceQueueFlush.borderRadius = true;
animatedShouldDebounceQueueFlush.borderRightColor = animatedShouldDebounceQueueFlush;
animatedShouldDebounceQueueFlush.borderStartColor = animatedShouldDebounceQueueFlush;
animatedShouldDebounceQueueFlush.borderStartEndRadius = true;
animatedShouldDebounceQueueFlush.borderStartStartRadius = true;
animatedShouldDebounceQueueFlush.borderStyle = true;
animatedShouldDebounceQueueFlush.borderTopColor = animatedShouldDebounceQueueFlush;
animatedShouldDebounceQueueFlush.borderTopEndRadius = true;
animatedShouldDebounceQueueFlush.borderTopLeftRadius = true;
animatedShouldDebounceQueueFlush.borderTopRightRadius = true;
animatedShouldDebounceQueueFlush.borderTopStartRadius = true;
animatedShouldDebounceQueueFlush.cursor = true;
animatedShouldDebounceQueueFlush.opacity = true;
animatedShouldDebounceQueueFlush.outlineColor = animatedShouldDebounceQueueFlush;
animatedShouldDebounceQueueFlush.outlineOffset = true;
animatedShouldDebounceQueueFlush.outlineStyle = true;
animatedShouldDebounceQueueFlush.outlineWidth = true;
animatedShouldDebounceQueueFlush.pointerEvents = true;
animatedShouldDebounceQueueFlush.color = animatedShouldDebounceQueueFlush;
animatedShouldDebounceQueueFlush.fontFamily = true;
animatedShouldDebounceQueueFlush.fontSize = true;
animatedShouldDebounceQueueFlush.fontStyle = true;
animatedShouldDebounceQueueFlush.fontVariant = { process: processFontVariant.default };
animatedShouldDebounceQueueFlush.fontWeight = true;
animatedShouldDebounceQueueFlush.includeFontPadding = true;
animatedShouldDebounceQueueFlush.letterSpacing = true;
animatedShouldDebounceQueueFlush.lineHeight = true;
animatedShouldDebounceQueueFlush.textAlign = true;
animatedShouldDebounceQueueFlush.textAlignVertical = true;
animatedShouldDebounceQueueFlush.textDecorationColor = animatedShouldDebounceQueueFlush;
animatedShouldDebounceQueueFlush.textDecorationLine = true;
animatedShouldDebounceQueueFlush.textDecorationStyle = true;
animatedShouldDebounceQueueFlush.textShadowColor = animatedShouldDebounceQueueFlush;
animatedShouldDebounceQueueFlush.textShadowOffset = true;
animatedShouldDebounceQueueFlush.textShadowRadius = true;
animatedShouldDebounceQueueFlush.textTransform = true;
animatedShouldDebounceQueueFlush.userSelect = true;
animatedShouldDebounceQueueFlush.verticalAlign = true;
animatedShouldDebounceQueueFlush.writingDirection = true;
animatedShouldDebounceQueueFlush.overlayColor = animatedShouldDebounceQueueFlush;
animatedShouldDebounceQueueFlush.resizeMode = true;
animatedShouldDebounceQueueFlush.tintColor = animatedShouldDebounceQueueFlush;
animatedShouldDebounceQueueFlush.objectFit = true;

export default animatedShouldDebounceQueueFlush;
