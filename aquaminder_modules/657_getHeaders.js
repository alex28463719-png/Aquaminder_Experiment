// Module ID: 657
// Function ID: 7123
// Name: getHeaders
// Dependencies: [1, 363, 658, 664]
// Exports: apiDelete, apiGet, apiPost, apiPut, clearDeviceData, clearUserData, getDeviceData, getItem, removeItem, setDefaultSelectedLanguage, setDeviceData, setItem, setUserData, validateEmail

// Module 657 (getHeaders)
import asyncGeneratorStep from "asyncGeneratorStep" /* 363 */;
import _mod658 from "module_658" /* 658 */;
import _callSuper from "_callSuper" /* 664 */;
import module_1 from "module_1" /* 1 */;

function getHeaders() {
  return _getHeaders(...arguments);
}
async function _getHeaders() {
  const tmp = yield closure_2_9();
  if (tmp) {
    const obj = {};
    let token;
    if (tmp != null) {
      token = tmp.token;
    }
    const _HermesInternal = HermesInternal;
    obj.Authorization = "Bearer " + token;
    return obj;
  } else {
    return {};
  }
}
async function _setUserData(arg0, arg1) {
  yield closure_2_1.default.setItem("userData", JSON.stringify(arg0));
}
async function _setDeviceData(arg0, arg1) {
  yield closure_2_1.default.setItem("deviceData", JSON.stringify(arg0));
}
async function _setItem(arg0, arg1, arg2) {
  yield closure_2_1.default.setItem(arg0, JSON.stringify(arg1));
}
function clearAsyncStorate() {
  return mod.default.clear();
}
function getUserData() {
  return _getUserData(...arguments);
}
async function _getUserData() {
  const tmp = yield closure_2_1.default.getItem("userData");
  let parsed = null;
  if (tmp) {
    const _JSON = JSON;
    parsed = JSON.parse(tmp);
  }
  return parsed;
}
async function _getDeviceData() {
  const tmp = yield closure_2_1.default.getItem("deviceData");
  let parsed = null;
  if (tmp) {
    const _JSON = JSON;
    parsed = JSON.parse(tmp);
  }
  return parsed;
}
async function _clearUserData() {
  if (obj) {
    return obj.resume();
  } else {
    return closure_2_1.default.removeItem("userData");
  }
}
async function _clearDeviceData() {
  if (obj) {
    return obj.resume();
  } else {
    return closure_2_1.default.removeItem("deviceData");
  }
}
function apiReq(EDIT_PROFILE, closure_0, get, arg3, arg4) {
  return _apiReq(...arguments);
}
async function _apiReq(arg0, arg1) {
  if (arguments.length > 1) {
    if (arguments[1] !== undefined) {
      let obj = arguments[1];
    }
    let tmp4;
    if (arguments.length > 2) {
      tmp4 = arguments[2];
    }
    if (arguments.length > 3) {
      if (arguments[3] !== undefined) {
        let obj3 = arguments[3];
      }
      if (arguments.length > 4) {
        if (arguments[4] !== undefined) {
          let obj2 = arguments[4];
        }
        const _Object = Object;
        const merged = Object.assign({}, yield closure_2_3(), tmp5);
        const formatted = str.toLowerCase();
        try {
          if (formatted !== "get") {
            if (formatted !== "delete") {
              const _Object2 = Object;
              obj = { headers: merged };
              let tmp21 = yield closure_2_2.default[formatted](arg0, tmp3, Object.assign({}, tmp6, obj));
              const _default = closure_2_2.default;
            }
            const data = tmp21.data;
            if (data != null) {
              if (tmp24.success) {
                return data;
              }
            }
            return Promise.reject(data);
          }
          const _Object3 = Object;
          obj = {};
          obj.params = obj;
          obj.headers = merged;
          tmp21 = yield closure_2_2.default[formatted](arg0, Object.assign({}, tmp6, obj));
          const _default2 = closure_2_2.default;
        } catch (tmp28) {
          let status;
          if (tmp28 != null) {
            const response = tmp29.response;
            if (response != null) {
              status = response.status;
            }
          }
          if (status === 401) {
            yield closure_2_8();
          }
          if (tmp28 != null) {
            const response2 = tmp29.response;
            if (response2 != null) {
              if (response2.data) {
                ({ Promise: _Promise3, Object: _Object4 } = tmp2);
                const obj1 = {};
                const error = tmp29.response.data.error;
                let str4 = error;
                if (!error) {
                  str4 = "Network Error";
                }
                obj1.error = str4;
                return _Promise3.reject(_Object4.assign({}, tmp29.response.data, obj1));
              }
            }
          }
          return tmp2.Promise.reject({ error: "Network Error", message: "Network Error" });
        }
      }
      obj2 = {};
    }
    obj3 = {};
    str = tmp4;
    tmp3 = obj;
  }
  obj = {};
}
let closure_0 = module_1(asyncGeneratorStep);
let closure_1 = module_1(_mod658);
let closure_2 = module_1(_callSuper);

export function apiDelete(DELETE_ACCOUNT, closure_1, closure_12) {
  if (arguments.length > 2) {
    if (arguments[2] !== undefined) {
      let obj = arguments[2];
    }
    return apiReq(DELETE_ACCOUNT, closure_1, "delete", obj);
  }
  obj = {};
}
export function apiGet(DEVICE_IMAGE, closure_1, closure_12) {
  if (arguments.length > 2) {
    if (arguments[2] !== undefined) {
      let obj = arguments[2];
    }
    if (arguments.length > 3) {
      if (arguments[3] !== undefined) {
        obj = arguments[3];
      }
      return apiReq(DEVICE_IMAGE, closure_1, "get", obj, obj);
    }
    obj = {};
  }
  obj = {};
}
export function apiPost(CHANGE_PASSWORD, closure_0, closure_1) {
  if (arguments.length > 2) {
    if (arguments[2] !== undefined) {
      let obj = arguments[2];
    }
    return apiReq(CHANGE_PASSWORD, closure_0, "post", obj);
  }
  obj = {};
}
export function apiPut(EDIT_PROFILE, closure_0, closure_1) {
  if (arguments.length > 2) {
    if (arguments[2] !== undefined) {
      let obj = arguments[2];
    }
    return apiReq(EDIT_PROFILE, closure_0, "put", obj);
  }
  obj = {};
}
export { apiReq };
export { clearAsyncStorate };
export function clearDeviceData() {
  return _clearDeviceData(...arguments);
}
export function clearUserData() {
  return _clearUserData(...arguments);
}
export function getDeviceData() {
  return _getDeviceData(...arguments);
}
export { getHeaders };
export function getItem(arg0) {
  closure_0 = arg0;
  return new Promise((arg0, arg1) => {
    closure_0 = arg0;
    const value = closure_1_1.default.getItem(closure_0);
    value.then((arg0) => {
      if (arg0) {
        const _JSON = JSON;
        tmp(JSON.parse(arg0));
      } else {
        tmp(null);
      }
    }).catch(arg1);
  });
}
export { getUserData };
export function removeItem(arg0) {
  return mod.default.removeItem(arg0);
}
export function setDefaultSelectedLanguage(navigationKey) {
  return mod.default.setItem("Language", JSON.stringify(navigationKey));
}
export function setDeviceData(merged) {
  return _setDeviceData(...arguments);
}
export function setItem(arg0, arg1) {
  return _setItem(...arguments);
}
export function setUserData(data) {
  return _setUserData(...arguments);
}
export function validateEmail(first) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(first);
}
