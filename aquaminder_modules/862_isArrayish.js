// Module ID: 862
// Function ID: 9522
// Name: isArrayish
// Dependencies: []

// Module 862 (isArrayish)

export default function isArrayish(str) {
  if (str) {
    if (typeof str !== "string") {
      const _Array2 = Array;
      let isArray = str instanceof Array;
      if (!isArray) {
        const _Array = Array;
        isArray = Array.isArray(str);
      }
      if (!isArray) {
        let tmp2 = str.length >= 0;
        if (tmp2) {
          const _Function = Function;
          let tmp3 = str.splice instanceof Function;
          if (!tmp3) {
            const _Object = Object;
            let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(str, str.length - 1);
            if (ownPropertyDescriptor) {
              ownPropertyDescriptor = str.constructor.name !== "String";
            }
            tmp3 = ownPropertyDescriptor;
          }
          tmp2 = tmp3;
        }
        isArray = tmp2;
      }
      return isArray;
    }
  }
  return false;
};
