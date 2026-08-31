// Module ID: 368
// Function ID: 4570
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [86, 89]

// Module 368 (__INTERNAL_VIEW_CONFIG)
import get2 from "get" /* 86 */;
import processColor from "processColor" /* 89 */;

let get = _interopRequireWildcard(get2);
get = { uiViewClassName: "RCTTextInlineImage", bubblingEventTypes: {}, directEventTypes: {} };
get = { resizeMode: true, src: true, tintColor: { process: processColor.default }, headers: true };
get.validAttributes = get;

export const __INTERNAL_VIEW_CONFIG = get;
export default get.get("RCTTextInlineImage", () => get);
