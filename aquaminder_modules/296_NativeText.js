// Module ID: 296
// Function ID: 3386
// Name: NativeText
// Dependencies: [1, 44, 281, 121]

// Module 296 (NativeText)
import isFabricReactTag2 from "isFabricReactTag" /* 44 */;
import composeIndexers from "composeIndexers" /* 121 */;
import createReactNativeComponentClass2 from "createReactNativeComponentClass" /* 281 */;
import module_1 from "module_1" /* 1 */;

const isFabricReactTag = module_1(isFabricReactTag2);
const createReactNativeComponentClass = module_1(createReactNativeComponentClass2);
let closure_2 = { validAttributes: { isHighlighted: true, isPressable: true, numberOfLines: true, ellipsizeMode: true, allowFontScaling: true, dynamicTypeRamp: true, maxFontSizeMultiplier: true, disabled: true, selectable: true, selectionColor: true, adjustsFontSizeToFit: true, minimumFontScale: true, textBreakStrategy: true, onTextLayout: true, onInlineViewLayout: true, dataDetectorType: true, android_hyphenationFrequency: true, lineBreakStrategyIOS: true }, directEventTypes: { topTextLayout: { registrationName: "onTextLayout" }, topInlineViewLayout: { registrationName: "onInlineViewLayout" } }, uiViewClassName: "RCTText" };
let closure_3 = { validAttributes: { isHighlighted: true, isPressable: true, maxFontSizeMultiplier: true }, uiViewClassName: "RCTVirtualText" };
let defaultResult = createReactNativeComponentClass.default("RCTText", () => composeIndexers.createViewConfig(closure_2));
if (global.RN$Bridgeless) {
  defaultResult = createReactNativeComponentClass.default("RCTVirtualText", () => composeIndexers.createViewConfig(closure_3));
} else {
  const _default = isFabricReactTag.default;
}

export const NativeText = defaultResult;
export const NativeVirtualText = defaultResult;
