// Module ID: 521
// Function ID: 5837
// Name: r
// Dependencies: [522]

// Module 521 (r)
import module_522 from "module_522" /* 522 */;

function r(str) {
  let obj = { type: "tag", name: "", voidElement: false };
  str = "";
  obj.attrs = {};
  obj.children = [];
  const match = str.match(/<\/?([^\s]+?)[/\s>]/);
  if (match) {
    obj.name = match[1];
    let tmp3 = module_522[match[1]];
    if (!tmp3) {
      tmp3 = "/" === str.charAt(str.length - 2);
    }
    if (tmp3) {
      obj.voidElement = true;
    }
    const name = obj.name;
    if (name.startsWith("!--")) {
      const index = str.indexOf("-->");
      obj = { type: "comment" };
      if (-1 !== index) {
        str = str.slice(4, index);
      }
      obj.comment = str;
      return obj;
    }
  }
  const regExp = new RegExp(closure_1);
  let match1 = regExp.exec(str);
  if (null !== match1) {
    do {
      let str4 = match1[0];
      let tmp7 = match1;
      let tmp8 = tmp5;
      let tmp9 = tmp6;
      let tmp10 = tmp5;
      let tmp11 = tmp6;
      if (str4.trim()) {
        if (match1[1]) {
          let str7 = match1[1];
          let trimmed = str7.trim();
          let items = [trimmed, str];
          if (trimmed.indexOf("=") > -1) {
            items = trimmed.split("=");
          }
          obj.attrs[items[0]] = items[1];
          regExp.lastIndex = regExp.lastIndex - 1;
          tmp11 = items;
          tmp10 = trimmed;
        } else {
          tmp10 = tmp5;
          tmp11 = tmp6;
          if (match1[2]) {
            let str5 = match1[3];
            let str6 = str5.trim();
            obj.attrs[match1[2]] = str6.substring(1, match1[3].length - 1);
            tmp10 = tmp5;
            tmp11 = tmp6;
          }
        }
      }
      match1 = regExp.exec(str);
      tmp5 = tmp10;
      tmp6 = tmp11;
    } while (null !== match1);
  }
  return obj;
}
function a(arg0, type) {
  let arr;
  type = type.type;
  if ("text" === type) {
    return arg0 + type.content;
  } else if ("tag" === type) {
    let str6 = "";
    const text = `<${type.name}`;
    if (type.attrs) {
      const attrs = type.attrs;
      const items = [];
      for (const key10024 in attrs) {
        let tmp6 = key10024;
        arr = items.push(key10024 + "=\"" + attrs[key10024] + "\"");
        continue;
      }
      let str9 = "";
      if (items.length) {
        str9 = ` ${arr.join(" ")}`;
      }
      str6 = str9;
    }
    let str12 = ">";
    if (type.voidElement) {
      str12 = "/>";
    }
    const sum = arg0 + (text + str6 + str12);
    let text1 = sum;
    if (!type.voidElement) {
      const children = type.children;
      text1 = `${tmp3 + arr2.reduce(a, "") + "</" + type.name}>`;
    }
    return text1;
  } else if ("comment" === type) {
    return arg0 + "<!--" + type.comment + "-->";
  }
}
if (module_522) {
  if ("object" === typeof module_522) {
    if ("default" in module_522) {
      module_522 = module_522.default;
    }
  }
}
const re1 = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
const re2 = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g;
const re3 = /^\s*$/;
let closure_4 = Object.create(null);

export default {
  parse(arr) {
    let tmp = arg1;
    closure_0 = arr;
    let obj = arg1;
    if (!arg1) {
      obj = {};
      tmp = obj;
    }
    if (!tmp.components) {
      tmp.components = closure_4;
    }
    const items = [];
    closure_4 = [];
    c5 = -1;
    c6 = false;
    if (0 !== arr.indexOf("<")) {
      let index = arr.indexOf("<");
      obj = { type: "text" };
      let substr = arr;
      if (-1 !== index) {
        substr = arr.substring(0, index);
      }
      obj.content = substr;
      items.push(obj);
    }
    const replaced = arr.replace(closure_2, (str) => {
      if (c6) {
        if (str === `</${closure_2.name}>`) {
          c6 = false;
        }
      }
      const tmp2 = "/" !== str.charAt(1);
      const sum = arg1 + str.length;
      const charAtResult = arr.charAt(sum);
      if (startsWithResult) {
        const tmp52 = v1(str);
        if (v1 < 0) {
          arr = items.push(tmp52);
          let tmp57 = items;
        } else {
          const children = dependencyMap[v1].children;
          arr = children.push(tmp52);
          tmp57 = items;
        }
        return tmp57;
      } else {
        if (tmp2) {
          v1 = v1 + 1;
          const tmp8 = v1(str);
          let user = tmp8;
          let tmp9 = "tag" === tmp8.type;
          if (tmp9) {
            tmp9 = obj.components[user.name];
          }
          if (tmp9) {
            user.type = "component";
            c6 = true;
          }
          let tmp14 = user.voidElement || c6 || !charAtResult;
          if (!tmp14) {
            tmp14 = "<" === charAtResult;
          }
          if (!tmp14) {
            const children1 = user.children;
            obj = { type: "text", content: arr.slice(sum, arr.indexOf("<", sum)) };
            children1.push(obj);
          }
          if (0 === v1) {
            items.push(user);
          }
          if (dependencyMap[v1 - 1]) {
            const children2 = tmp24.children;
            children2.push(user);
          }
          dependencyMap[v1] = user;
        }
        if (!tmp2) {
          let tmp32 = v1 > -1;
          if (tmp32) {
            let voidElement = user.voidElement;
            if (!voidElement) {
              voidElement = user.name === str.slice(2, -1);
            }
            tmp32 = voidElement;
          }
          if (!tmp32) {
            if (!c6) {
              if ("<" !== charAtResult) {
                if (charAtResult) {
                  if (-1 === v1) {
                    let children3 = items;
                  } else {
                    children3 = dependencyMap[v1].children;
                  }
                  const index = arr.indexOf("<", sum);
                  let tmp46;
                  if (-1 !== index) {
                    tmp46 = index;
                  }
                  let str9 = arr.slice(sum, tmp46);
                  if (items.test(str9)) {
                    str9 = " ";
                  }
                  let tmp48 = index > -1;
                  if (tmp48) {
                    tmp48 = v1 + children3.length >= 0;
                  }
                  if (!tmp48) {
                    tmp48 = " " !== str9;
                  }
                  if (tmp48) {
                    obj = { type: "text", content: str9 };
                    children3.push(obj);
                  }
                }
              }
            }
          } else {
            const diff = v1 - 1;
            v1 = diff;
            if (-1 === diff) {
              let tmp39 = items;
            } else {
              tmp39 = dependencyMap[v1];
            }
            user = tmp39;
          }
        }
      }
      startsWithResult = str.startsWith("<!--");
    });
    return items;
  },
  stringify(navigationKey, merged, arg2) {
    return navigationKey.reduce((arg0, arg1) => arg0 + closure_1_6("", arg1), "");
  }
};
