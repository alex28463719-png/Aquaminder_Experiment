// Module ID: 931
// Function ID: 9822
// Name: FullWindowOverlay
// Dependencies: [1, 119, 2, 932, 251]
// Exports: default

// Module 931 (FullWindowOverlay)
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import __INTERNAL_VIEW_CONFIG2 from "__INTERNAL_VIEW_CONFIG" /* 932 */;
import module_1 from "module_1" /* 1 */;
import closure_0 from "get registerCallableModule" /* 2 */;
import closure_1 from "jsxProd" /* 251 */;

const getIteratorFn = module_1(getIteratorFn2);
let __INTERNAL_VIEW_CONFIG = module_1(__INTERNAL_VIEW_CONFIG2);
__INTERNAL_VIEW_CONFIG = __INTERNAL_VIEW_CONFIG.default;

export default function FullWindowOverlay(arg0) {
  const windowDimensions = RN.useWindowDimensions();
  if (RN.Platform.OS !== "ios") {
    const _console = console;
    console.warn("Using FullWindowOverlay is only valid on iOS devices.");
    const _Object = Object;
    return <RN.View {...Object.assign({}, arg0)} />;
  } else {
    let obj = {};
    const items = [RN.StyleSheet.absoluteFill, ];
    obj = { width: tmp2, height: tmp3 };
    items[1] = obj;
    obj.style = items;
    ({ unstable_accessibilityContainerViewIsModal: obj.accessibilityContainerViewIsModal, children: obj.children } = arg0);
    return <__INTERNAL_VIEW_CONFIG width={tmp2} height={tmp3} />;
  }
};
