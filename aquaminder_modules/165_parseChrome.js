// Module ID: 165
// Function ID: 1751
// Name: parseChrome
// Dependencies: []

// Module 165 (parseChrome)
function parseChrome(arg0) {
  const match = regex.exec(arg0);
  if (match) {
    let tmp3 = match[2];
    if (tmp3) {
      tmp3 = match[2].indexOf("native") === 0;
      const arr = match[2];
    }
    let tmp4 = match[2];
    if (tmp4) {
      tmp4 = match[2].indexOf("eval") === 0;
      const arr2 = match[2];
    }
    const match1 = regex2.exec(match[2]);
    if (tmp4) {
      if (match1 != null) {
        match[2] = match1[1];
        match[3] = match1[2];
        match[4] = match1[3];
      }
    }
    const obj = {};
    let tmp8 = null;
    if (!tmp3) {
      tmp8 = match[2];
    }
    obj.file = tmp8;
    obj.methodName = match[1] || c0;
    if (tmp3) {
      const items = [match[2]];
      let items1 = items;
    } else {
      items1 = [];
    }
    obj.arguments = items1;
    let tmp9 = null;
    if (match[3]) {
      tmp9 = +match[3];
    }
    obj.lineNumber = tmp9;
    let tmp10 = null;
    if (match[4]) {
      tmp10 = +match[4];
    }
    obj.column = tmp10;
    return obj;
  } else {
    return null;
  }
}
function parseWinjs(arg0) {
  const match = regex3.exec(arg0);
  if (match) {
    const obj = { file: match[2], methodName: match[1] || c0, arguments: [], lineNumber: +match[3] };
    let tmp3 = null;
    if (match[4]) {
      tmp3 = +match[4];
    }
    obj.column = tmp3;
    return obj;
  } else {
    return null;
  }
}
function parseGecko(arg0) {
  const match = regex4.exec(arg0);
  if (match) {
    let tmp3 = match[3];
    if (tmp3) {
      tmp3 = match[3].indexOf(" > eval") > -1;
      const arr = match[3];
    }
    const match1 = regex5.exec(match[3]);
    if (tmp3) {
      if (match1 != null) {
        match[3] = match1[1];
        match[4] = match1[2];
        match[5] = null;
      }
    }
    const obj = { file: match[3], methodName: match[1] || c0 };
    if (match[2]) {
      let parts = match[2].split(",");
      const str2 = match[2];
    } else {
      parts = [];
    }
    obj.arguments = parts;
    let tmp7 = null;
    if (match[4]) {
      tmp7 = +match[4];
    }
    obj.lineNumber = tmp7;
    let tmp8 = null;
    if (match[5]) {
      tmp8 = +match[5];
    }
    obj.column = tmp8;
    return obj;
  } else {
    return null;
  }
}
function parseJSC(arg0) {
  const match = regex6.exec(arg0);
  if (match) {
    const obj = { file: match[3], methodName: match[1] || c0, arguments: [], lineNumber: +match[4] };
    let tmp3 = null;
    if (match[5]) {
      tmp3 = +match[5];
    }
    obj.column = tmp3;
    return obj;
  } else {
    return null;
  }
}
function parseNode(arg0) {
  const match = regex7.exec(arg0);
  if (match) {
    const obj = { file: match[2], methodName: match[1] || c0, arguments: [], lineNumber: +match[3] };
    let tmp3 = null;
    if (match[4]) {
      tmp3 = +match[4];
    }
    obj.column = tmp3;
    return obj;
  } else {
    return null;
  }
}
let c0 = "<unknown>";
const re1 = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|rsc|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
const re2 = /\((\S*)(?::(\d+))(?::(\d+))\)/;
const re3 = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|rsc|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
const re4 = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|rsc|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i;
const re5 = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
const re6 = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
const re7 = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
arg5.parse = function parse(str) {
  const parts = str.split("\n");
  return parts.reduce((arr) => {
    let tmp = closure_1_8(arg1);
    if (!tmp) {
      tmp = closure_1_9(arg1);
    }
    if (!tmp) {
      tmp = closure_1_10(arg1);
    }
    if (!tmp) {
      tmp = closure_1_12(arg1);
    }
    if (!tmp) {
      tmp = closure_1_11(arg1);
    }
    if (tmp) {
      arr.push(tmp);
    }
    return arr;
  }, []);
};
