// Module ID: 949
// Function ID: 9932
// Name: FadeSpec
// Dependencies: [2]

// Module 949 (FadeSpec)
import get_registerCallableModule from "get registerCallableModule" /* 2 */;

let obj = { animation: "timing" };
obj = { duration: 150, easing: Easing.in(get_registerCallableModule.Easing.linear) };
Easing = get_registerCallableModule.Easing;
obj.config = obj;
obj = { animation: "timing" };
const Easing2 = get_registerCallableModule.Easing;
obj.config = { duration: 150, easing: Easing2.inOut(get_registerCallableModule.Easing.ease) };

export const FadeSpec = obj;
export const ShiftSpec = obj;
