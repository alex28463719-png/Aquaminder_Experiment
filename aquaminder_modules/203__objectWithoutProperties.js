// Module ID: 203
// Function ID: 2310
// Name: _objectWithoutProperties
// Dependencies: [204]

// Module 203 (_objectWithoutProperties)
import _objectWithoutPropertiesLoose from "_objectWithoutPropertiesLoose" /* 204 */;


export default function _objectWithoutProperties(closure_1, arr) {
  if (null == closure_1) {
    return {};
  } else {
    const tmp6 = _objectWithoutPropertiesLoose(closure_1, arr);
    const _Object2 = Object;
    if (Object.getOwnPropertySymbols) {
      const _Object = Object;
      const ownPropertySymbols = Object.getOwnPropertySymbols(closure_1);
      for (let num2 = 0; num2 < ownPropertySymbols.length; num2 = num2 + 1) {
        let tmp = ownPropertySymbols[num2];
        let callResult = -1 === arr.indexOf(tmp);
        let tmp3 = num2;
        if (callResult) {
          let propertyIsEnumerable = {}.propertyIsEnumerable;
          callResult = propertyIsEnumerable.call(closure_1, tmp);
        }
        if (callResult) {
          tmp6[tmp] = closure_1[tmp];
        }
      }
    }
    return tmp6;
  }
};
