// Module ID: 212
// Function ID: 2373
// Name: _callSuper
// Dependencies: [213, 216]

// Module 212 (_callSuper)
import _callSuper from "_callSuper" /* 213 */;
import _callSuper2 from "_callSuper" /* 216 */;

let result;
if (global.RN$useBuiltInEventTarget != null) {
  result = global.RN$useBuiltInEventTarget();
}
if (result) {
  let _default = _callSuper.default;
} else {
  _default = _callSuper2.default;
}

export default _default;
