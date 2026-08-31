// Module ID: 201
// Function ID: 2281
// Name: _callSuper
// Dependencies: [202, 209]

// Module 201 (_callSuper)
import _callSuper from "_callSuper" /* 202 */;
import _callSuper2 from "_callSuper" /* 209 */;

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
