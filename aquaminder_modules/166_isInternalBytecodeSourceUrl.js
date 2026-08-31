// Module ID: 166
// Function ID: 1759
// Name: isInternalBytecodeSourceUrl
// Dependencies: []

// Module 166 (isInternalBytecodeSourceUrl)
function isInternalBytecodeSourceUrl(arg0) {
  return arg0 === "InternalBytecode.js";
}
function parseLine(str) {
  const match = str.match(closure_0);
  if (match) {
    let obj = { type: "FRAME", functionName: match[1] };
    if (match[2] === "native") {
      obj = { type: "NATIVE" };
      let obj2 = obj;
    } else if (match[3] === "address at ") {
      let num9 = 4;
      const obj1 = {};
      if (isInternalBytecodeSourceUrl(match[4])) {
        obj1.type = "INTERNAL_BYTECODE";
        obj1.sourceUrl = match[num9];
        const _Number6 = Number;
        obj1.line1Based = Number.parseInt(match[5], 10);
        const _Number7 = Number;
        num9 = Number.parseInt(match[6], 10);
        obj1.virtualOffset0Based = num9;
        let tmp8 = obj1;
      } else {
        obj1.type = "BYTECODE";
        obj1.sourceUrl = match[num9];
        const _Number4 = Number;
        obj1.line1Based = Number.parseInt(match[5], 10);
        const _Number5 = Number;
        obj1.virtualOffset0Based = Number.parseInt(match[6], 10);
        tmp8 = obj1;
      }
    } else {
      obj2 = { type: "SOURCE", sourceUrl: match[4] };
      const _Number2 = Number;
      obj2.line1Based = Number.parseInt(match[5], 10);
      const _Number3 = Number;
      obj2.column1Based = Number.parseInt(match[6], 10);
    }
    obj.location = obj2;
    return obj;
  } else {
    const match1 = str.match(closure_1);
    if (match1) {
      obj = { type: "SKIPPED" };
      const _Number = Number;
      obj.count = Number.parseInt(match1[1], 10);
      return obj;
    }
  }
}
arg5.default = function parseHermesStack(str) {
  const parts = str.split(/\n/);
  let items = [];
  let num = -1;
  let num2 = 0;
  let tmp2 = items;
  let num3 = -1;
  if (0 < parts.length) {
    do {
      let tmp3 = parts[num2];
      let tmp4 = items;
      let tmp5 = num;
      let tmp6 = num2;
      let tmp7 = tmp;
      let items1 = items;
      let tmp8 = num;
      if (tmp3) {
        let tmp9 = parseLine;
        let tmp10 = parseLine(tmp3);
        if (tmp10) {
          let arr = items.push(tmp10);
          items1 = items;
          tmp8 = num;
          tmp7 = tmp10;
        } else {
          let tmp11 = regex;
          items1 = items;
          tmp8 = num;
          tmp7 = tmp10;
          if (!regex.test(tmp3)) {
            items1 = [];
            tmp8 = num2;
            tmp7 = tmp10;
          }
        }
      }
      num2 = num2 + 1;
      items = items1;
      num = tmp8;
      tmp = tmp7;
      tmp2 = items1;
      num3 = tmp8;
    } while (num2 < parts.length);
  }
  const substr = parts.slice(0, num3 + 1);
  const obj = { message: substr.join("\n"), entries: tmp2 };
  return obj;
};
const re0 = /^ {4}at (.+?)(?: \((native)\)?| \((address at )?(.*?):(\d+):(\d+)\))$/;
const re1 = /^ {4}... skipping (\d+) frames$/;
const re2 = /^ {4}at .*$/;
