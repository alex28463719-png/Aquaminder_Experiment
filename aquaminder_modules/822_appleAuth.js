// Module ID: 822
// Function ID: 9034
// Name: appleAuth
// Dependencies: [1, 823, 2, 824, 825]

// Module 822 (appleAuth)
import _mod823 from "module_823" /* 823 */;
import throwIfNotSupported2 from "throwIfNotSupported" /* 824 */;
import AppleButton from "AppleButton" /* 825 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;

const module_823 = module_1(_mod823);
const throwIfNotSupported = module_1(throwIfNotSupported2);
let closure_0 = module_1(AppleButton);
const RNAppleAuthModuleAndroid = get_registerCallableModule.NativeModules.RNAppleAuthModuleAndroid;
const _default = new throwIfNotSupported.default(get_registerCallableModule.NativeModules.RNAppleAuthModule, module_823.default);
if (RNAppleAuthModuleAndroid) {
  obj = {};
  ({ isSupported: obj3.isSupported, configure: obj3.configure, signIn: obj3.signIn } = RNAppleAuthModuleAndroid);
  obj = {};
  ({ E_NOT_CONFIGURED_ERROR: obj4.NOT_CONFIGURED, E_SIGNIN_FAILED_ERROR: obj4.SIGNIN_FAILED, E_SIGNIN_CANCELLED_ERROR: obj4.SIGNIN_CANCELLED } = RNAppleAuthModuleAndroid);
  obj.Error = obj;
  ({ Scope: obj3.Scope, ResponseType: obj3.ResponseType } = RNAppleAuthModuleAndroid);
  let obj1 = obj;
} else {
  obj1 = {};
}

export const AppleButton = mod.default;
export const appleAuth = _default;
export default _default;
export const appleAuthAndroid = obj1;
