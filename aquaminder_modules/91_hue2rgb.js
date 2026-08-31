// Module ID: 91
// Function ID: 1230
// Name: hue2rgb
// Dependencies: []

// Module 91 (hue2rgb)
function hue2rgb(diff, result, arg2) {
  let sum = arg2;
  if (arg2 < 0) {
    sum = arg2 + 1;
  }
  diff = sum;
  if (sum > 1) {
    diff = sum - 1;
  }
  if (diff < 0.16666666666666666) {
    return diff + (result - diff) * 6 * diff;
  } else if (diff < 0.5) {
    return result;
  } else if (diff < 0.6666666666666666) {
    return diff + (result - diff) * (0.6666666666666666 - diff) * 6;
  } else {
    return diff;
  }
}
function hslToRgb(arg0, arg1, arg2) {
  if (arg2 < 0.5) {
    let result = arg2 * (1 + arg1);
  } else {
    result = arg2 + arg1 - arg2 * arg1;
  }
  const diff = 2 * arg2 - result;
  const tmp3 = hue2rgb(diff, result, arg0 + 0.3333333333333333);
  const tmp4 = hue2rgb(diff, result, arg0);
  const tmp5 = hue2rgb(diff, result, arg0 - 0.3333333333333333);
  const tmp6 = Math.round(tmp3 * 255) << 24;
  return tmp6 | Math.round(tmp4 * 255) << 16 | Math.round(tmp5 * 255) << 8;
}
function hwbToRgb(arg0, arg1, arg2) {
  if (arg1 + arg2 >= 1) {
    const _Math = Math;
    const rounded = Math.round(arg1 * 255 / (arg1 + arg2));
    return rounded << 24 | rounded << 16 | rounded << 8;
  } else {
    const sum = hue2rgb(0, 1, arg0 + 0.3333333333333333) * (1 - arg1 - arg2) + arg1;
    const sum1 = hue2rgb(0, 1, arg0) * (1 - arg1 - arg2) + arg1;
    const _Math2 = Math;
    const sum2 = hue2rgb(0, 1, arg0 - 0.3333333333333333) * (1 - arg1 - arg2) + arg1;
    const _Math3 = Math;
    const _Math4 = Math;
    const tmp8 = Math.round(sum * 255) << 24;
    return tmp8 | Math.round(sum1 * 255) << 16 | Math.round(sum2 * 255) << 8;
  }
}
function call(closure_1, key10018, channels, arr2, closure_1_8, doy, closure_1_6) {
  const length = arguments.length;
  const array = new Array(length);
  for (let num = 0; num < length; num = num + 1) {
    array[num] = arguments[num];
  }
  return "\\(\\s*(" + array.join(")\\s*,?\\s*(") + ")\\s*\\)";
}
function callModern(arg0, arg1, arg2) {
  const length = arguments.length;
  const array = new Array(length);
  for (let num = 0; num < length; num = num + 1) {
    array[num] = arguments[num];
  }
  return "\\(\\s*(" + array.join(")\\s*(") + ")\\s*\\)";
}
function callWithSlashSeparator(arg0, arg1, arg2, arg3) {
  const length = arguments.length;
  const arr = new Array(length);
  for (let num = 0; num < length; num = num + 1) {
    arr[num] = arguments[num];
  }
  const substr = arr.slice(0, arr.length - 1);
  return "\\(\\s*(" + substr.join(")\\s*,?\\s*(") + ")\\s*/\\s*(" + arr[arr.length - 1] + ")\\s*\\)";
}
function commaSeparatedCall(arg0, arg1, arg2, arg3) {
  const length = arguments.length;
  const array = new Array(length);
  for (let num = 0; num < length; num = num + 1) {
    array[num] = arguments[num];
  }
  return "\\(\\s*(" + array.join(")\\s*,\\s*(") + ")\\s*\\)";
}
function getMatchers() {
  if (obj === undefined) {
    obj = {};
    const _RegExp = RegExp;
    const regExp = new RegExp("rgb" + call("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+"));
    obj.rgb = regExp;
    const _RegExp2 = RegExp;
    const regExp1 = new RegExp("rgba(" + commaSeparatedCall("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+") + "|" + callWithSlashSeparator("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+") + ")");
    obj.rgba = regExp1;
    const _RegExp3 = RegExp;
    const regExp2 = new RegExp("hsl" + call("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+%"));
    obj.hsl = regExp2;
    const _RegExp4 = RegExp;
    const tmp8 = commaSeparatedCall("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+");
    const regExp3 = new RegExp("hsla(" + commaSeparatedCall("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+") + "|" + callWithSlashSeparator("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+") + ")");
    obj.hsla = regExp3;
    const _RegExp5 = RegExp;
    const regExp4 = new RegExp("hwb" + callModern("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+%"));
    obj.hwb = regExp4;
    obj.hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
    obj.hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
    obj.hex6 = /^#([0-9a-fA-F]{6})$/;
    obj.hex8 = /^#([0-9a-fA-F]{8})$/;
    const tmp18 = commaSeparatedCall("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+");
  }
  return obj;
}
function parse255(arg0) {
  const parsed = parseInt(arg0, 10);
  if (parsed < 0) {
    return 0;
  } else {
    return parsed > 255 ? 255 : parsed;
  }
}
function parse360(arg0) {
  return (parseFloat(arg0) % 360 + 360) % 360 / 360;
}
function parse1(arg0) {
  const parsed = parseFloat(arg0);
  if (parsed < 0) {
    return 0;
  } else if (parsed > 1) {
    return 255;
  } else {
    const _Math = Math;
    return Math.round(parsed * 255);
  }
}
function parsePercentage(arg0) {
  const parsed = parseFloat(arg0);
  if (parsed < 0) {
    return 0;
  } else if (parsed > 100) {
    return 1;
  } else {
    return parsed / 100;
  }
}
function normalizeKeyword(arg0) {
  if ("transparent" === arg0) {
    return 0;
  } else if ("aliceblue" === arg0) {
    return 4042850303;
  } else if ("antiquewhite" === arg0) {
    return 4209760255;
  } else if ("aqua" === arg0) {
    return 16777215;
  } else if ("aquamarine" === arg0) {
    return 2147472639;
  } else if ("azure" === arg0) {
    return 4043309055;
  } else if ("beige" === arg0) {
    return 4126530815;
  } else if ("bisque" === arg0) {
    return 4293182719;
  } else if ("black" === arg0) {
    return 255;
  } else if ("blanchedalmond" === arg0) {
    return 4293643775;
  } else if ("blue" === arg0) {
    return 65535;
  } else if ("blueviolet" === arg0) {
    return 2318131967;
  } else if ("brown" === arg0) {
    return 2771004159;
  } else if ("burlywood" === arg0) {
    return 3736635391;
  } else if ("burntsienna" === arg0) {
    return 3934150143;
  } else if ("cadetblue" === arg0) {
    return 1604231423;
  } else if ("chartreuse" === arg0) {
    return 2147418367;
  } else if ("chocolate" === arg0) {
    return 3530104575;
  } else if ("coral" === arg0) {
    return 4286533887;
  } else if ("cornflowerblue" === arg0) {
    return 1687547391;
  } else if ("cornsilk" === arg0) {
    return 4294499583;
  } else if ("crimson" === arg0) {
    return 3692313855;
  } else if ("cyan" === arg0) {
    return 16777215;
  } else if ("darkblue" === arg0) {
    return 35839;
  } else if ("darkcyan" === arg0) {
    return 9145343;
  } else if ("darkgoldenrod" === arg0) {
    return 3095792639;
  } else if ("darkgray" === arg0) {
    return 2846468607;
  } else if ("darkgreen" === arg0) {
    return 6553855;
  } else if ("darkgrey" === arg0) {
    return 2846468607;
  } else if ("darkkhaki" === arg0) {
    return 3182914559;
  } else if ("darkmagenta" === arg0) {
    return 2332068863;
  } else if ("darkolivegreen" === arg0) {
    return 1433087999;
  } else if ("darkorange" === arg0) {
    return 4287365375;
  } else if ("darkorchid" === arg0) {
    return 2570243327;
  } else if ("darkred" === arg0) {
    return 2332033279;
  } else if ("darksalmon" === arg0) {
    return 3918953215;
  } else if ("darkseagreen" === arg0) {
    return 2411499519;
  } else if ("darkslateblue" === arg0) {
    return 1211993087;
  } else if ("darkslategray" === arg0) {
    return 793726975;
  } else if ("darkslategrey" === arg0) {
    return 793726975;
  } else if ("darkturquoise" === arg0) {
    return 13554175;
  } else if ("darkviolet" === arg0) {
    return 2483082239;
  } else if ("deeppink" === arg0) {
    return 4279538687;
  } else if ("deepskyblue" === arg0) {
    return 12582911;
  } else if ("dimgray" === arg0) {
    return 1768516095;
  } else if ("dimgrey" === arg0) {
    return 1768516095;
  } else if ("dodgerblue" === arg0) {
    return 512819199;
  } else if ("firebrick" === arg0) {
    return 2988581631;
  } else if ("floralwhite" === arg0) {
    return 4294635775;
  } else if ("forestgreen" === arg0) {
    return 579543807;
  } else if ("fuchsia" === arg0) {
    return 4278255615;
  } else if ("gainsboro" === arg0) {
    return 3705462015;
  } else if ("ghostwhite" === arg0) {
    return 4177068031;
  } else if ("gold" === arg0) {
    return 4292280575;
  } else if ("goldenrod" === arg0) {
    return 3668254975;
  } else if ("gray" === arg0) {
    return 2155905279;
  } else if ("green" === arg0) {
    return 8388863;
  } else if ("greenyellow" === arg0) {
    return 2919182335;
  } else if ("grey" === arg0) {
    return 2155905279;
  } else if ("honeydew" === arg0) {
    return 4043305215;
  } else if ("hotpink" === arg0) {
    return 4285117695;
  } else if ("indianred" === arg0) {
    return 3445382399;
  } else if ("indigo" === arg0) {
    return 1258324735;
  } else if ("ivory" === arg0) {
    return 4294963455;
  } else if ("khaki" === arg0) {
    return 4041641215;
  } else if ("lavender" === arg0) {
    return 3873897215;
  } else if ("lavenderblush" === arg0) {
    return 4293981695;
  } else if ("lawngreen" === arg0) {
    return 2096890111;
  } else if ("lemonchiffon" === arg0) {
    return 4294626815;
  } else if ("lightblue" === arg0) {
    return 2916673279;
  } else if ("lightcoral" === arg0) {
    return 4034953471;
  } else if ("lightcyan" === arg0) {
    return 3774873599;
  } else if ("lightgoldenrodyellow" === arg0) {
    return 4210742015;
  } else if ("lightgray" === arg0) {
    return 3553874943;
  } else if ("lightgreen" === arg0) {
    return 2431553791;
  } else if ("lightgrey" === arg0) {
    return 3553874943;
  } else if ("lightpink" === arg0) {
    return 4290167295;
  } else if ("lightsalmon" === arg0) {
    return 4288707327;
  } else if ("lightseagreen" === arg0) {
    return 548580095;
  } else if ("lightskyblue" === arg0) {
    return 2278488831;
  } else if ("lightslategray" === arg0) {
    return 2005441023;
  } else if ("lightslategrey" === arg0) {
    return 2005441023;
  } else if ("lightsteelblue" === arg0) {
    return 2965692159;
  } else if ("lightyellow" === arg0) {
    return 4294959359;
  } else if ("lime" === arg0) {
    return 16711935;
  } else if ("limegreen" === arg0) {
    return 852308735;
  } else if ("linen" === arg0) {
    return 4210091775;
  } else if ("magenta" === arg0) {
    return 4278255615;
  } else if ("maroon" === arg0) {
    return 2147483903;
  } else if ("mediumaquamarine" === arg0) {
    return 1724754687;
  } else if ("mediumblue" === arg0) {
    return 52735;
  } else if ("mediumorchid" === arg0) {
    return 3126187007;
  } else if ("mediumpurple" === arg0) {
    return 2473647103;
  } else if ("mediumseagreen" === arg0) {
    return 1018393087;
  } else if ("mediumslateblue" === arg0) {
    return 2070474495;
  } else if ("mediumspringgreen" === arg0) {
    return 16423679;
  } else if ("mediumturquoise" === arg0) {
    return 1221709055;
  } else if ("mediumvioletred" === arg0) {
    return 3340076543;
  } else if ("midnightblue" === arg0) {
    return 421097727;
  } else if ("mintcream" === arg0) {
    return 4127193855;
  } else if ("mistyrose" === arg0) {
    return 4293190143;
  } else if ("moccasin" === arg0) {
    return 4293178879;
  } else if ("navajowhite" === arg0) {
    return 4292783615;
  } else if ("navy" === arg0) {
    return 33023;
  } else if ("oldlace" === arg0) {
    return 4260751103;
  } else if ("olive" === arg0) {
    return 2155872511;
  } else if ("olivedrab" === arg0) {
    return 1804477439;
  } else if ("orange" === arg0) {
    return 4289003775;
  } else if ("orangered" === arg0) {
    return 4282712319;
  } else if ("orchid" === arg0) {
    return 3664828159;
  } else if ("palegoldenrod" === arg0) {
    return 4008225535;
  } else if ("palegreen" === arg0) {
    return 2566625535;
  } else if ("paleturquoise" === arg0) {
    return 2951671551;
  } else if ("palevioletred" === arg0) {
    return 3681588223;
  } else if ("papayawhip" === arg0) {
    return 4293907967;
  } else if ("peachpuff" === arg0) {
    return 4292524543;
  } else if ("peru" === arg0) {
    return 3448061951;
  } else if ("pink" === arg0) {
    return 4290825215;
  } else if ("plum" === arg0) {
    return 3718307327;
  } else if ("powderblue" === arg0) {
    return 2967529215;
  } else if ("purple" === arg0) {
    return 2147516671;
  } else if ("rebeccapurple" === arg0) {
    return 1714657791;
  } else if ("red" === arg0) {
    return 4278190335;
  } else if ("rosybrown" === arg0) {
    return 3163525119;
  } else if ("royalblue" === arg0) {
    return 1097458175;
  } else if ("saddlebrown" === arg0) {
    return 2336560127;
  } else if ("salmon" === arg0) {
    return 4202722047;
  } else if ("sandybrown" === arg0) {
    return 4104413439;
  } else if ("seagreen" === arg0) {
    return 780883967;
  } else if ("seashell" === arg0) {
    return 4294307583;
  } else if ("sienna" === arg0) {
    return 2689740287;
  } else if ("silver" === arg0) {
    return 3233857791;
  } else if ("skyblue" === arg0) {
    return 2278484991;
  } else if ("slateblue" === arg0) {
    return 1784335871;
  } else if ("slategray" === arg0) {
    return 1887473919;
  } else if ("slategrey" === arg0) {
    return 1887473919;
  } else if ("snow" === arg0) {
    return 4294638335;
  } else if ("springgreen" === arg0) {
    return 16744447;
  } else if ("steelblue" === arg0) {
    return 1182971135;
  } else if ("tan" === arg0) {
    return 3535047935;
  } else if ("teal" === arg0) {
    return 8421631;
  } else if ("thistle" === arg0) {
    return 3636451583;
  } else if ("tomato" === arg0) {
    return 4284696575;
  } else if ("turquoise" === arg0) {
    return 1088475391;
  } else if ("violet" === arg0) {
    return 4001558271;
  } else if ("wheat" === arg0) {
    return 4125012991;
  } else if ("white" === arg0) {
    return 4294967295;
  } else if ("whitesmoke" === arg0) {
    return 4126537215;
  } else if ("yellow" === arg0) {
    return 4294902015;
  } else if ("yellowgreen" === arg0) {
    return 2597139199;
  } else {
    return null;
  }
}

export default function normalizeColor(arg0) {
  if (typeof arg0 === "number") {
    if (arg0 >>> 0 === arg0) {
      if (arg0 >= 0) {
        if (arg0 <= 4294967295) {
          return arg0;
        }
      }
    }
    return null;
  } else if (tmp !== "string") {
    return null;
  } else {
    const tmp56 = getMatchers();
    const hex6 = tmp56.hex6;
    const match = hex6.exec(arg0);
    if (match) {
      const _parseInt4 = parseInt;
      return parseInt(match[1] + "ff", 16) >>> 0;
    } else {
      const tmp3 = normalizeKeyword(arg0);
      if (tmp3 != null) {
        return tmp3;
      } else {
        const rgb = tmp56.rgb;
        const match1 = rgb.exec(arg0);
        if (match1) {
          const tmp50 = parse255(match1[1]) << 24;
          return (tmp50 | parse255(match1[2]) << 16 | parse255(match1[3]) << 8 | 255) >>> 0;
        } else {
          const rgba = tmp56.rgba;
          const match2 = rgba.exec(arg0);
          if (match2) {
            if (match2[6] !== undefined) {
              const tmp45 = parse255(match2[6]) << 24;
              const tmp46 = parse255(match2[7]) << 16;
              return (tmp45 | tmp46 | parse255(match2[8]) << 8 | parse1(match2[9])) >>> 0;
            } else {
              const tmp40 = parse255(match2[2]) << 24;
              const tmp41 = parse255(match2[3]) << 16;
              return (tmp40 | tmp41 | parse255(match2[4]) << 8 | parse1(match2[5])) >>> 0;
            }
          } else {
            const hex3 = tmp56.hex3;
            const match3 = hex3.exec(arg0);
            if (match3) {
              const _parseInt3 = parseInt;
              return parseInt(match3[1] + match3[1] + match3[2] + match3[2] + match3[3] + match3[3] + "ff", 16) >>> 0;
            } else {
              const hex8 = tmp56.hex8;
              const match4 = hex8.exec(arg0);
              if (match4) {
                const _parseInt2 = parseInt;
                return parseInt(match4[1], 16) >>> 0;
              } else {
                const hex4 = tmp56.hex4;
                const match5 = hex4.exec(arg0);
                if (match5) {
                  const _parseInt = parseInt;
                  return parseInt(match5[1] + match5[1] + match5[2] + match5[2] + match5[3] + match5[3] + match5[4] + match5[4], 16) >>> 0;
                } else {
                  const hsl = tmp56.hsl;
                  const match6 = hsl.exec(arg0);
                  if (match6) {
                    const tmp33 = parse360(match6[1]);
                    return (hslToRgb(tmp33, parsePercentage(match6[2]), parsePercentage(match6[3])) | 255) >>> 0;
                  } else {
                    const hsla = tmp56.hsla;
                    const match7 = hsla.exec(arg0);
                    if (match7) {
                      if (match7[6] !== undefined) {
                        const tmp26 = parse360(match7[6]);
                        const tmp28 = parsePercentage(match7[7]);
                        return (hslToRgb(tmp26, parsePercentage(match7[7]), parsePercentage(match7[8])) | parse1(match7[9])) >>> 0;
                      } else {
                        const tmp19 = parse360(match7[2]);
                        const tmp21 = parsePercentage(match7[3]);
                        return (hslToRgb(tmp19, parsePercentage(match7[3]), parsePercentage(match7[4])) | parse1(match7[5])) >>> 0;
                      }
                    } else {
                      const hwb = tmp56.hwb;
                      const match8 = hwb.exec(arg0);
                      if (match8) {
                        const tmp14 = parse360(match8[1]);
                        return (hwbToRgb(tmp14, parsePercentage(match8[2]), parsePercentage(match8[3])) | 255) >>> 0;
                      } else {
                        return null;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};
