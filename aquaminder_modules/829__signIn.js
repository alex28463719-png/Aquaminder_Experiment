// Module ID: 829
// Function ID: 9060
// Name: _signIn
// Dependencies: [1, 363, 2, 830, 831, 832, 833, 834]

// Module 829 (_signIn)
import asyncGeneratorStep from "asyncGeneratorStep" /* 363 */;
import NativeModule3 from "NativeModule" /* 830 */;
import module_1 from "module_1" /* 1 */;
import closure_3 from "get registerCallableModule" /* 2 */;

async function _signIn() {
  if (arguments.length > 0) {
    if (arguments[0] !== undefined) {
      let first = arguments[0];
    }
    yield closure_2_4;
    try {
      const NativeModule = closure_2_0(closure_2_1[3]).NativeModule;
      return closure_2_5(yield NativeModule.signIn(first));
    } catch (tmp7) {
      return closure_2_0(closure_2_1[4]).translateCancellationError(tmp7);
    }
  }
  first = {};
}
async function _hasPlayServices(arg0, arg1) {
  if (obj) {
    return obj.resume();
  } else if (closure_2_3.Platform.OS === "ios") {
    return true;
  } else {
    let prop;
    const NativeModule = closure_2_0(closure_2_1[3]).NativeModule;
    if (arg0 != null) {
      prop = arg0.showPlayServicesUpdateDialog;
    }
    return NativeModule.playServicesAvailable(prop !== false);
  }
}
async function _addScopes(arg0, arg1) {
  if (closure_2_3.Platform.OS === "ios") {
    try {
      const NativeModule2 = closure_2_0(closure_2_1[3]).NativeModule;
      const tmp9 = yield NativeModule2.addScopes(arg0);
      if (tmp9) {
        return closure_2_5(tmp9);
      } else {
        return null;
      }
    } catch (tmp13) {
      if (closure_2_0(closure_2_1[5]).isErrorWithCode(tmp13)) {
        if (tmp13.code === closure_2_0(closure_2_1[6]).ios_only_SCOPES_ALREADY_GRANTED) {
          const currentUser = closure_2_6.getCurrentUser();
          if (currentUser) {
            return closure_2_5(currentUser);
          } else {
            return null;
          }
        }
      }
      return closure_2_0(closure_2_1[4]).translateCancellationError(tmp13);
    }
  } else {
    const NativeModule = closure_2_0(closure_2_1[3]).NativeModule;
    if (yield NativeModule.addScopes(arg0)) {
      return closure_2_10();
    } else {
      return null;
    }
  }
}
function signInSilently() {
  return _signInSilently(...arguments);
}
async function _signInSilently() {
  try {
    yield closure_2_4;
    const NativeModule = closure_2_0(closure_2_1[3]).NativeModule;
    return closure_2_5(yield NativeModule.signInSilently());
  } catch (tmp5) {
    if (closure_2_0(closure_2_1[5]).isErrorWithCode(tmp5)) {
      if (tmp5.code === closure_2_0(closure_2_1[6]).SIGN_IN_REQUIRED_CODE) {
        return closure_2_0(closure_2_1[7]).noSavedCredentialFoundResult;
      }
    }
    throw tmp5;
  }
}
async function _signOut() {
  if (obj) {
    return obj.resume();
  } else {
    const NativeModule = closure_2_0(closure_2_1[3]).NativeModule;
    return NativeModule.signOut();
  }
}
async function _revokeAccess() {
  if (obj) {
    return obj.resume();
  } else {
    const NativeModule = closure_2_0(closure_2_1[3]).NativeModule;
    return NativeModule.revokeAccess();
  }
}
async function _clearCachedAccessToken(arg0, arg1) {
  if (obj) {
    return obj.resume();
  } else {
    if (arg0) {
      if (typeof arg0 === "string") {
        let result = null;
        if (closure_2_3.Platform.OS !== "ios") {
          const NativeModule = closure_2_0(closure_2_1[3]).NativeModule;
          result = NativeModule.clearCachedAccessToken(arg0);
        }
        return result;
      }
    }
    return Promise.reject("GoogleSignIn: clearCachedAccessToken() expects a string token.");
  }
}
async function _getTokens() {
  if (closure_2_3.Platform.OS === "ios") {
    const NativeModule2 = closure_2_0(closure_2_1[3]).NativeModule;
    return NativeModule2.getTokens();
  } else {
    const NativeModule = closure_2_0(closure_2_1[3]).NativeModule;
    obj = {};
    ({ idToken: obj.idToken, accessToken: obj.accessToken } = yield NativeModule.getTokens());
    return obj;
  }
}
let closure_2 = module_1(asyncGeneratorStep);
let closure_4 = Promise.resolve();
function createSuccessResponse(data) {
  return { type: "success", data };
}
let obj = {
  hasPlayServices(arg0) {
    return _hasPlayServices(...arguments);
  },
  configure() {
    if (arguments.length > 0) {
      if (arguments[0] !== undefined) {
        let first = arguments[0];
      }
      if (first.offlineAccess) {
        if (!first.webClientId) {
          const _Error = Error;
          const error = new Error("RNGoogleSignin: offline use requires server web ClientID");
          throw error;
        }
      }
      const NativeModule = NativeModule3.NativeModule;
      closure_4 = NativeModule.configure(first);
    }
    first = {};
  },
  signIn(first) {
    return _signIn(...arguments);
  },
  addScopes(arg0) {
    return _addScopes(...arguments);
  },
  signInSilently,
  signOut() {
    return _signOut(...arguments);
  },
  revokeAccess() {
    return _revokeAccess(...arguments);
  },
  hasPreviousSignIn() {
    const NativeModule = NativeModule3.NativeModule;
    return NativeModule.hasPreviousSignIn();
  },
  getCurrentUser() {
    const NativeModule = NativeModule3.NativeModule;
    return NativeModule.getCurrentUser();
  },
  clearCachedAccessToken(arg0) {
    return _clearCachedAccessToken(...arguments);
  },
  getTokens() {
    return _getTokens(...arguments);
  }
};

export const GoogleSignin = obj;
