// Module ID: 7
// Function ID: 200
// Name: _arrayWithoutHoles
// Dependencies: [8]

// Module 7 (_arrayWithoutHoles)
import _arrayLikeToArray from "_arrayLikeToArray" /* 8 */;


export default function _arrayWithoutHoles(arg0) {
  if (Array.isArray(arg0)) {
    return _arrayLikeToArray(arg0);
  }
};
