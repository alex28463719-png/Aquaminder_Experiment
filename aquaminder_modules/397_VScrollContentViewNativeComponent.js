// Module ID: 397
// Function ID: 4779
// Name: VScrollContentViewNativeComponent
// Dependencies: [1, 394, 395, 248, 33]

// Module 397 (VScrollContentViewNativeComponent)
import get_Version from "get Version" /* 33 */;
import View2 from "View" /* 248 */;
import __INTERNAL_VIEW_CONFIG2 from "__INTERNAL_VIEW_CONFIG" /* 394 */;
import __INTERNAL_VIEW_CONFIG3 from "__INTERNAL_VIEW_CONFIG" /* 395 */;
import module_1 from "module_1" /* 1 */;

let __INTERNAL_VIEW_CONFIG = module_1(__INTERNAL_VIEW_CONFIG2);
__INTERNAL_VIEW_CONFIG = module_1(__INTERNAL_VIEW_CONFIG3);
const View = module_1(View2);

export const VScrollViewNativeComponent = __INTERNAL_VIEW_CONFIG.default;
export const VScrollContentViewNativeComponent = module_1(get_Version).default.OS === "android" ? View.default : __INTERNAL_VIEW_CONFIG.default;
