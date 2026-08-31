// Module ID: 190
// Function ID: 2073
// Name: convertHeadersMapToArray
// Dependencies: [1, 191, 33, 192, 195]

// Module 190 (convertHeadersMapToArray)
import get_Version from "get Version" /* 33 */;
import NativeEventEmitter2 from "NativeEventEmitter" /* 191 */;
import convertRequestBody from "convertRequestBody" /* 192 */;
import Networking2 from "Networking" /* 195 */;
import module_1 from "module_1" /* 1 */;

function convertHeadersMapToArray(_headers) {
  const items = [];
  for (const key10004 in arg0) {
    let tmp = key10004;
    let items1 = [key10004, arg0[key10004]];
    let arr = items.push(items1);
    continue;
  }
  return items;
}
function generateRequestId() {
  closure_2 = tmp + 1;
  return +closure_2;
}
const NativeEventEmitter = module_1(NativeEventEmitter2);
get_Version = module_1(get_Version);
let closure_0 = module_1(convertRequestBody);
const Networking = module_1(Networking2);
let c2 = 1;
let _default = null;
if (get_Version.default.OS === "ios") {
  _default = Networking.default;
}
const _default1 = new NativeEventEmitter.default(_default);

export default {
  addListener(arg0, arg1, arg2) {
    return _default1.addListener(arg0, arg1, arg2);
  },
  sendRequest(_method, _trackingName, _url2, _headers, arg4, arg5, arg6, timeout, __didCreateRequest, withCredentials) {
    const defaultResult = closure_0.default(arg4);
    if (defaultResult) {
      if (defaultResult.formData) {
        const formData = defaultResult.formData;
        defaultResult.formData = formData.map((headers) => Object.assign({}, headers, { headers: closure_1_4(headers.headers) }));
      }
    }
    const tmp2 = generateRequestId();
    Networking.default.sendRequest(_method, _url2, tmp2, convertHeadersMapToArray(_headers), Object.assign({}, defaultResult, { trackingName: _trackingName }), arg5, arg6, timeout, withCredentials);
    __didCreateRequest(tmp2);
  },
  abortRequest(_requestId) {
    Networking.default.abortRequest(_requestId);
  },
  clearCookies(arg0) {
    Networking.default.clearCookies(arg0);
  }
};
