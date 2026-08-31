// Module ID: 204
// Function ID: 2312
// Name: _objectWithoutPropertiesLoose
// Dependencies: []

// Module 204 (_objectWithoutPropertiesLoose)

export default function _objectWithoutPropertiesLoose(closure_1, arr) {
  if (null == closure_1) {
    return {};
  } else {
    const obj = {};
    for (const key10007 in arg0) {
      let tmp2 = key10007;
      let hasOwnProperty = {}.hasOwnProperty;
      if (!hasOwnProperty.call(arg0, key10007)) {
        continue;
      } else {
        if (-1 !== arg1.indexOf(key10007)) {
          continue;
        } else {
          obj[key10007] = arg0[key10007];
          continue;
        }
        continue;
      }
      continue;
    }
    return obj;
  }
};
