// Module ID: 392
// Function ID: 4764
// Name: HScrollContentViewNativeComponent
// Dependencies: [1, 393, 394, 395, 33, 396]

// Module 392 (HScrollContentViewNativeComponent)
import get_Version from "get Version" /* 33 */;
import __INTERNAL_VIEW_CONFIG2 from "__INTERNAL_VIEW_CONFIG" /* 393 */;
import __INTERNAL_VIEW_CONFIG3 from "__INTERNAL_VIEW_CONFIG" /* 394 */;
import __INTERNAL_VIEW_CONFIG4 from "__INTERNAL_VIEW_CONFIG" /* 395 */;
import __INTERNAL_VIEW_CONFIG5 from "__INTERNAL_VIEW_CONFIG" /* 396 */;
import module_1 from "module_1" /* 1 */;

let __INTERNAL_VIEW_CONFIG = module_1(__INTERNAL_VIEW_CONFIG2);
__INTERNAL_VIEW_CONFIG = module_1(__INTERNAL_VIEW_CONFIG3);
__INTERNAL_VIEW_CONFIG = module_1(__INTERNAL_VIEW_CONFIG4);
get_Version = module_1(get_Version);

export const HScrollViewNativeComponent = get_Version.default.OS === "android" ? __INTERNAL_VIEW_CONFIG.default : __INTERNAL_VIEW_CONFIG.default;
export const HScrollContentViewNativeComponent = get_Version.default.OS === "android" ? module_1(__INTERNAL_VIEW_CONFIG5).default : __INTERNAL_VIEW_CONFIG.default;
