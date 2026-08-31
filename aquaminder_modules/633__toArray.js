// Module ID: 633
// Function ID: 6779
// Name: _toArray
// Dependencies: [39, 9, 10, 41]

// Module 633 (_toArray)
import _iterableToArray from "_iterableToArray" /* 9 */;
import _unsupportedIterableToArray from "_unsupportedIterableToArray" /* 10 */;
import _arrayWithHoles from "_arrayWithHoles" /* 39 */;
import _nonIterableRest from "_nonIterableRest" /* 41 */;


export default function _toArray(arg0) {
  let tmp = _arrayWithHoles(arg0);
  if (!tmp) {
    tmp = _iterableToArray(arg0);
  }
  if (!tmp) {
    tmp = _unsupportedIterableToArray(arg0);
  }
  if (!tmp) {
    tmp = _nonIterableRest();
  }
  return tmp;
};
