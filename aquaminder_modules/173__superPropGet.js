// Module ID: 173
// Function ID: 1848
// Name: _superPropGet
// Dependencies: [174, 197]

// Module 173 (_superPropGet)
import _superPropGet from "_superPropGet" /* 174 */;
import _superPropGet2 from "_superPropGet" /* 197 */;

let result;
if (global.RN$useBuiltInEventTarget != null) {
  result = global.RN$useBuiltInEventTarget();
}
if (result) {
  let _default = _superPropGet.default;
} else {
  _default = _superPropGet2.default;
}

export default _default;
