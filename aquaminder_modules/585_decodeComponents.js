// Module ID: 585
// Function ID: 6395
// Name: decodeComponents
// Dependencies: []

// Module 585 (decodeComponents)
function decodeComponents(substr, arg1) {
  try {
    const _decodeURIComponent = decodeURIComponent;
    const items = [decodeURIComponent(substr.join(""))];
    return items;
  } catch (err) {
    if (arr.length === 1) {
      return arr;
    } else {
      let num2 = tmp;
      if (!tmp) {
        num2 = 1;
      }
      substr = arr.slice(0, num2);
      const _Array = Array;
      const substr1 = arr.slice(num2);
      return concat.call([], decodeComponents(substr), decodeComponents(substr1));
    }
  }
}
function decode(arg0) {
  let items1;
  let str3;
  let sum;
  try {
    const _decodeURIComponent = decodeURIComponent;
    return decodeURIComponent(arg0);
  } catch (err) {
    const match = str.match(regExp);
    let items = match;
    if (!match) {
      items = [];
    }
    let tmp7 = items;
    let num2 = 1;
    if (1 < items.length) {
      do {
        let tmp8 = decodeComponents;
        let tmp9 = tmp7;
        let tmp10 = num2;
        let obj = decodeComponents(tmp7, num2);
        str3 = obj.join("");
        let tmp11 = str3;
        let tmp12 = regExp;
        let match1 = str3.match(regExp);
        items1 = match1;
        if (!match1) {
          items1 = [];
        }
        tmp7 = items1;
        let tmp14 = num2;
        sum = num2 + 1;
        num2 = sum;
      } while (sum < items1.length);
    }
    return str3;
  }
}
function customDecodeURIComponent(arg0) {
  let length;
  let str = arg0;
  const obj = { "%FE%FF": "\uFFFD\uFFFD", "%FF%FE": "\uFFFD\uFFFD" };
  const match = regExp1.exec(arg0);
  let tmp6 = match;
  if (match) {
    try {
      const _decodeURIComponent = decodeURIComponent;
      obj[tmp6[0]] = decodeURIComponent(tmp6[0]);
      const match1 = regExp1.exec(str);
      tmp6 = match1;
    } catch (err) {
      const tmp11 = decode(tmp4[tmp2]);
      if (tmp11 !== tmp4[tmp2]) {
        tmp3[tmp4[tmp2]] = tmp12;
      }
    }
  }
  obj["%C2"] = "\uFFFD";
  const keys = Object.keys(obj);
  let num = 0;
  if (0 < keys.length) {
    do {
      let tmp19 = keys[num];
      let tmp20 = str;
      let _RegExp = RegExp;
      let tmp21 = new.target;
      let tmp22 = new.target;
      let tmp23 = tmp19;
      let str2 = "g";
      regExp = new RegExp(tmp19, "g");
      let tmp25 = regExp;
      let tmp26 = obj;
      str = str.replace(regExp, obj[tmp19]);
      num = num + 1;
      length = keys.length;
    } while (num < length);
  }
  return str;
}
let regExp = new RegExp("(%[a-f0-9]{2})|([^%]+?)", "gi");
const regExp1 = new RegExp("(%[a-f0-9]{2})+", "gi");

export default (str) => {
  if (typeof str !== "string") {
    const _TypeError = TypeError;
    const typeError = new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof str + "`");
    throw typeError;
  } else {
    try {
      const replaced = str.replace(/\+/g, " ");
      const _decodeURIComponent = decodeURIComponent;
      return decodeURIComponent(replaced);
    } catch (err) {
      return customDecodeURIComponent(tmp);
    }
  }
};
