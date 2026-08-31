// Module ID: 98
// Function ID: 1270
// Name: _getKeyAndValueFromCSSTransform
// Dependencies: [1, 99]
// Exports: default

// Module 98 (_getKeyAndValueFromCSSTransform)
import _defineProperty from "_defineProperty" /* 99 */;
import module_1 from "module_1" /* 1 */;

let closure_0 = module_1(_defineProperty);
function _getKeyAndValueFromCSSTransform(key, str) {
  const regExp = new RegExp(/([+-]?\d+(\.\d+)?)([a-zA-Z]+|%)?/g);
  if ("matrix" === key) {
    let obj = { key };
    const match = str.match(/[+-]?\d+(\.\d+)?/g);
    let mapped;
    if (match != null) {
      const _Number4 = Number;
      mapped = match.map(Number);
    }
    obj.value = mapped;
    return obj;
  } else {
    if ("translate" !== key) {
      if ("translate3d" !== key) {
        if ("translateX" !== key) {
          if ("translateY" !== key) {
            if ("perspective" !== key) {
              obj = { key };
              const _isNaN = isNaN;
              let NumberResult = str;
              if (!isNaN(str)) {
                const _Number = Number;
                NumberResult = Number(str);
              }
              obj.value = NumberResult;
              return obj;
            }
          }
        }
        const match1 = regExp.exec(str);
        if (match1 != null) {
          if (match1.length) {
            const _Number2 = Number;
            const obj1 = { key, value: Number(match1[1]) };
            return obj1;
          }
        }
        const obj2 = { key, value: undefined };
        return obj2;
      }
    }
    const items = [];
    let match2 = regExp.exec(str);
    while (match2) {
      let _Number3 = Number;
      let NumberResult1 = Number(match2[1]);
      if (match2[3] === "%") {
        let _HermesInternal = HermesInternal;
        let arr = items.push("" + NumberResult1 + "%");
      } else {
        arr = items.push(NumberResult1);
      }
      match2 = regExp.exec(str);
    }
    let length;
    if (items != null) {
      length = items.length;
    }
    if (length === 1) {
      items.push(0);
    }
    const obj3 = { key: "translate", value: items };
    return obj3;
  }
}

export default function processTransform(str) {
  let tmp = str;
  if (typeof str === "string") {
    const _RegExp = RegExp;
    const regExp = new RegExp(/(\w+)\(([^)]+)\)/g);
    const items = [];
    let match = regExp.exec(str);
    tmp = items;
    while (match) {
      let tmp2 = _getKeyAndValueFromCSSTransform;
      let iter = _getKeyAndValueFromCSSTransform(match[1], match[2]);
      let value = iter.value;
      if (value !== undefined) {
        let tmp4 = closure_0;
        let arr = items.push(closure_0.default({}, tmp3, value));
      }
      match = regExp.exec(str);
      tmp = items;
    }
  }
  return tmp;
};
