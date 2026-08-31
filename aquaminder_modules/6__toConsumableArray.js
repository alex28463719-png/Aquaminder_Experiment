// Module ID: 6
// Function ID: 198
// Name: _toConsumableArray
// Dependencies: [7, 9, 10, 11]

// Module 6 (_toConsumableArray)
import _arrayWithoutHoles from "_arrayWithoutHoles" /* 7 */;
import _iterableToArray from "_iterableToArray" /* 9 */;
import _unsupportedIterableToArray from "_unsupportedIterableToArray" /* 10 */;
import _nonIterableSpread from "_nonIterableSpread" /* 11 */;


export default function _toConsumableArray(color) {
  let tmp = _arrayWithoutHoles(color);
  if (!tmp) {
    tmp = _iterableToArray(color);
  }
  if (!tmp) {
    tmp = _unsupportedIterableToArray(color);
  }
  if (!tmp) {
    tmp = _nonIterableSpread();
  }
  return tmp;
};
