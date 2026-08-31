// Module ID: 683
// Function ID: 7836
// Name: LinearGradient
// Dependencies: [1, 2, 684, 686, 687]

// Module 683 (LinearGradient)
import _callSuper2 from "_callSuper" /* 684 */;
import _callSuper3 from "_callSuper" /* 686 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;

let _callSuper = module_1(_callSuper2);
_callSuper = module_1(_callSuper3);
if (get_registerCallableModule.Platform.OS === "ios") {
  let _default = _callSuper.default;
} else {
  _default = get_registerCallableModule.Platform.OS === "android" ? _callSuper.default : tmp6.default;
}

export const LinearGradient = _default;
export default _default;
