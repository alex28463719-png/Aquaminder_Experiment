// Module ID: 38
// Function ID: 346
// Name: _slicedToArray
// Dependencies: [39, 40, 10, 41]

// Module 38 (_slicedToArray)
import _unsupportedIterableToArray from "_unsupportedIterableToArray" /* 10 */;
import _arrayWithHoles from "_arrayWithHoles" /* 39 */;
import _iterableToArrayLimit from "_iterableToArrayLimit" /* 40 */;
import _nonIterableRest from "_nonIterableRest" /* 41 */;


export default function _slicedToArray(arg0, arg1) {
  let tmp = _arrayWithHoles(arg0);
  if (!tmp) {
    tmp = _iterableToArrayLimit(arg0, arg1);
  }
  if (!tmp) {
    tmp = _unsupportedIterableToArray(arg0, arg1);
  }
  if (!tmp) {
    tmp = _nonIterableRest();
  }
  return tmp;
};
