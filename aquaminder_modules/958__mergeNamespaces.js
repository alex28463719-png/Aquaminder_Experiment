// Module ID: 958
// Function ID: 10202
// Name: _mergeNamespaces
// Dependencies: [959]

// Module 958 (_mergeNamespaces)
import _typeof from "_typeof" /* 959 */;

function _mergeNamespaces(arg0, items) {
  closure_0 = arg0;
  let item = items.forEach((str) => {
    closure_0 = str;
    let tmp = str;
    if (str) {
      tmp = typeof str !== "string";
    }
    if (tmp) {
      const _Array = Array;
      tmp = !Array.isArray(str);
    }
    if (tmp) {
      let _Object = Object;
      const keys = Object.keys(str);
      const item = keys.forEach((arg0) => {
        closure_0 = arg0;
        if (arg0 !== "default") {
          if (!(arg0 in closure_0)) {
            const _Object = Object;
            let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(closure_0, arg0);
            if (!ownPropertyDescriptor.get) {
              const obj = {
                enumerable: true,
                get() {
                        return table[table];
                      }
              };
              ownPropertyDescriptor = obj;
            }
            Object.defineProperty(closure_0, arg0, ownPropertyDescriptor);
            const tmp5 = closure_0;
          }
        }
      });
    }
  });
  return Object.freeze(arg0);
}
function getDefaultExportFromCjs(exports) {
  let _default = exports;
  if (exports) {
    _default = exports;
    if (exports.__esModule) {
      const _Object = Object;
      _default = exports;
      if (hasOwnProperty.call(exports, "default")) {
        _default = exports.default;
      }
    }
  }
  return _default;
}
if (_typeof) {
  if (typeof _typeof === "object") {
    let obj = _typeof;
  }
  const _globalThis = globalThis;
  if (typeof globalThis !== "undefined") {
    const _globalThis2 = globalThis;
  } else {
    const _window = window;
    if (typeof window !== "undefined") {
      const _window2 = window;
    } else if (typeof global === "undefined") {
      const _self = self;
      if (typeof self !== "undefined") {
        const _self2 = self;
      }
    }
  }
  obj = { exports: {} };
  ((arg0) => {
    const fn = function a(arg0, arg1) {
      if (arg1) {
        return "other";
      } else {
        let str = "other";
        if (arg0 == 1) {
          str = "one";
        }
        return str;
      }
    };
    const fn2 = function b(arg0, arg1) {
      if (arg1) {
        return "other";
      } else {
        if (arg0 == 0) {
          let str = "one";
        } else {
          str = "other";
        }
        return str;
      }
    };
    const fn3 = function c(arg0, arg1) {
      if (arg1) {
        return "other";
      } else {
        let str = "other";
        if (arg0 >= 0) {
          str = "other";
          if (arg0 <= 1) {
            str = "one";
          }
        }
        return str;
      }
    };
    const fn4 = function d(arg0, arg1) {
      String(arg0);
      if (arg1) {
        return "other";
      } else {
        let str = "other";
        if (arg0 == 1) {
          str = "other";
          if (tmp2) {
            str = "one";
          }
        }
        return str;
      }
    };
    const fn5 = function e(arg0, arg1) {
      return "other";
    };
    const fn6 = function f(arg0, arg1) {
      if (arg1) {
        return "other";
      } else {
        let str = "one";
        if (arg0 != 1) {
          let str2 = "other";
          if (arg0 == 2) {
            str2 = "two";
          }
          str = str2;
        }
        return str;
      }
    };
    const obj = {
      af: fn,
      ak: fn2,
      am: fn3,
      an: fn,
      ar(arg0, arg1) {
        const parts = String(arg0).split(".");
        let substr = Number(parts[0]) == arg0;
        if (substr) {
          const first = parts[0];
          substr = first.slice(-2);
        }
        if (arg1) {
          return "other";
        } else {
          let str2 = "zero";
          if (arg0 != 0) {
            let str3 = "one";
            if (arg0 != 1) {
              let str4 = "two";
              if (arg0 != 2) {
                if (substr < 3) {
                  let str7 = "other";
                  if (substr >= 11) {
                    str7 = "other";
                    if (substr <= 99) {
                      str7 = "many";
                    }
                  }
                  let str5 = str7;
                } else {
                  str5 = "few";
                }
                str4 = str5;
              }
              str3 = str4;
            }
            str2 = str3;
          }
          return str2;
        }
        const str = String(arg0);
      },
      ars(arg0, arg1) {
        const parts = String(arg0).split(".");
        let substr = Number(parts[0]) == arg0;
        if (substr) {
          const first = parts[0];
          substr = first.slice(-2);
        }
        if (arg1) {
          return "other";
        } else {
          let str2 = "zero";
          if (arg0 != 0) {
            let str3 = "one";
            if (arg0 != 1) {
              let str4 = "two";
              if (arg0 != 2) {
                if (substr < 3) {
                  let str7 = "other";
                  if (substr >= 11) {
                    str7 = "other";
                    if (substr <= 99) {
                      str7 = "many";
                    }
                  }
                  let str5 = str7;
                } else {
                  str5 = "few";
                }
                str4 = str5;
              }
              str3 = str4;
            }
            str2 = str3;
          }
          return str2;
        }
        const str = String(arg0);
      },
      as(arg0, arg1) {
        if (arg1) {
          let str4 = "one";
          if (arg0 != 1) {
            str4 = "one";
            if (arg0 != 5) {
              str4 = "one";
              if (arg0 != 7) {
                str4 = "one";
                if (arg0 != 8) {
                  str4 = "one";
                  if (arg0 != 9) {
                    str4 = "one";
                    if (arg0 != 10) {
                      let str6 = "two";
                      if (arg0 != 2) {
                        str6 = "two";
                        if (arg0 != 3) {
                          let str7 = "few";
                          if (arg0 != 4) {
                            let str8 = "other";
                            if (arg0 == 6) {
                              str8 = "many";
                            }
                            str7 = str8;
                          }
                          str6 = str7;
                        }
                      }
                      str4 = str6;
                    }
                  }
                }
              }
            }
          }
          return str4;
        } else {
          let str2 = "other";
          if (arg0 >= 0) {
            str2 = "other";
            if (arg0 <= 1) {
              str2 = "one";
            }
          }
          return str2;
        }
      },
      asa: fn,
      ast: fn4,
      az(arg0, arg1) {
        const first = String(arg0).split(".")[0];
        const substr = first.slice(-1);
        const substr1 = first.slice(-2);
        const substr2 = first.slice(-3);
        if (arg1) {
          let str4 = "one";
          if (substr != 1) {
            str4 = "one";
            if (substr != 2) {
              str4 = "one";
              if (substr != 5) {
                str4 = "one";
                if (substr != 7) {
                  str4 = "one";
                  if (substr != 8) {
                    str4 = "one";
                    if (substr1 != 20) {
                      str4 = "one";
                      if (substr1 != 50) {
                        str4 = "one";
                        if (substr1 != 70) {
                          str4 = "one";
                          if (substr1 != 80) {
                            let str6 = "few";
                            if (substr != 3) {
                              str6 = "few";
                              if (substr != 4) {
                                str6 = "few";
                                if (substr2 != 100) {
                                  str6 = "few";
                                  if (substr2 != 200) {
                                    str6 = "few";
                                    if (substr2 != 300) {
                                      str6 = "few";
                                      if (substr2 != 400) {
                                        str6 = "few";
                                        if (substr2 != 500) {
                                          str6 = "few";
                                          if (substr2 != 600) {
                                            str6 = "few";
                                            if (substr2 != 700) {
                                              str6 = "few";
                                              if (substr2 != 800) {
                                                str6 = "few";
                                                if (substr2 != 900) {
                                                  if (first != 0) {
                                                    if (substr != 6) {
                                                      if (substr1 != 40) {
                                                        if (substr1 != 60) {
                                                          let str7 = "other";
                                                        }
                                                        str6 = str7;
                                                      }
                                                    }
                                                  }
                                                  str7 = "many";
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
                            str4 = str6;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          return str4;
        } else {
          let str2 = "other";
          if (arg0 == 1) {
            str2 = "one";
          }
          return str2;
        }
        const str = String(arg0);
      },
      bal(arg0, arg1) {
        let str = "other";
        if (arg0 == 1) {
          str = "one";
        }
        return str;
      },
      be(arg0, arg1) {
        const parts = String(arg0).split(".");
        const tmp2 = Number(parts[0]) == arg0;
        let substr = tmp2;
        if (tmp2) {
          const first = parts[0];
          substr = first.slice(-1);
        }
        let substr1 = tmp2;
        if (tmp2) {
          const first1 = parts[0];
          substr1 = first1.slice(-2);
        }
        if (arg1) {
          if (substr == 2) {
            let str7 = "other";
            if (substr1 != 12) {
              str7 = "other";
              if (substr1 != 13) {
                str7 = "few";
              }
            }
          } else {
            str7 = "other";
          }
          return str7;
        } else {
          if (substr != 1) {
            if (substr >= 2) {
              if (substr <= 4) {
                let str4 = "few";
                if (substr1 >= 12) {
                  str4 = "few";
                }
              }
              let str2 = str4;
            }
            if (!tmp2) {
              if (substr < 5) {
                let str6 = "other";
                if (substr1 >= 11) {
                  str6 = "other";
                }
                str4 = str6;
              }
            }
            str6 = "many";
          } else {
            str2 = "one";
          }
          return str2;
        }
        const str = String(arg0);
      },
      bem: fn,
      bez: fn,
      bg: fn,
      bho: fn2,
      bm: fn5,
      bn(arg0, arg1) {
        if (arg1) {
          let str4 = "one";
          if (arg0 != 1) {
            str4 = "one";
            if (arg0 != 5) {
              str4 = "one";
              if (arg0 != 7) {
                str4 = "one";
                if (arg0 != 8) {
                  str4 = "one";
                  if (arg0 != 9) {
                    str4 = "one";
                    if (arg0 != 10) {
                      let str6 = "two";
                      if (arg0 != 2) {
                        str6 = "two";
                        if (arg0 != 3) {
                          let str7 = "few";
                          if (arg0 != 4) {
                            let str8 = "other";
                            if (arg0 == 6) {
                              str8 = "many";
                            }
                            str7 = str8;
                          }
                          str6 = str7;
                        }
                      }
                      str4 = str6;
                    }
                  }
                }
              }
            }
          }
          return str4;
        } else {
          let str2 = "other";
          if (arg0 >= 0) {
            str2 = "other";
            if (arg0 <= 1) {
              str2 = "one";
            }
          }
          return str2;
        }
      },
      bo: fn5,
      br(arg0, arg1) {
        const parts = String(arg0).split(".");
        const tmp2 = Number(parts[0]) == arg0;
        let substr = tmp2;
        if (tmp2) {
          const first = parts[0];
          substr = first.slice(-1);
        }
        let substr1 = tmp2;
        if (tmp2) {
          const first1 = parts[0];
          substr1 = first1.slice(-2);
        }
        let substr2 = tmp2;
        if (tmp2) {
          const first2 = parts[0];
          substr2 = first2.slice(-6);
        }
        if (arg1) {
          return "other";
        } else {
          if (substr == 1) {
            if (substr1 != 11) {
              if (substr1 != 71) {
                let str2 = "one";
              }
              return str2;
            }
          }
          if (substr == 2) {
            if (substr1 != 12) {
              if (substr1 != 72) {
                let str3 = "two";
              }
              str2 = str3;
            }
          }
          if (substr != 3) {
            let str7 = "other";
            if (arg0 != 0) {
              str7 = "other";
              if (tmp2) {
                str7 = "other";
                if (substr2 == 0) {
                  str7 = "many";
                }
              }
            }
            let str5 = str7;
            str3 = str5;
          }
          if (substr1 < 10) {
            if (substr1 < 70) {
              str5 = "few";
              if (substr1 >= 90) {
                str5 = "few";
              }
            }
          }
        }
      },
      brx: fn,
      bs(arg0, arg1) {
        const parts = String(arg0).split(".");
        const first = parts[0];
        const substr = first.slice(-1);
        const substr1 = first.slice(-2);
        const substr2 = arr2.slice(-1);
        const substr3 = arr2.slice(-2);
        if (arg1) {
          return "other";
        } else {
          if (tmp2) {
            if (substr == 1) {
              let str2 = "one";
            }
            return str2;
          }
          if (substr2 != 1) {
            if (tmp2) {
              if (substr >= 2) {
                if (substr <= 4) {
                  if (substr1 >= 12) {
                    str2 = str4;
                  }
                }
                str4 = "few";
              }
            }
            str4 = "other";
            if (substr2 >= 2) {
              str4 = "other";
              if (substr2 <= 4) {
                if (substr3 >= 12) {
                  str4 = "other";
                }
              }
            }
          } else {
            str2 = "one";
          }
        }
      },
      ca(arg0, arg1) {
        const parts = String(arg0).split(".");
        if (arg1) {
          let str6 = "one";
          if (arg0 != 1) {
            str6 = "one";
            if (arg0 != 3) {
              let str7 = "two";
              if (arg0 != 2) {
                let str8 = "other";
                if (arg0 == 4) {
                  str8 = "few";
                }
                str7 = str8;
              }
              str6 = str7;
            }
          }
          return str6;
        } else {
          if (arg0 != 1) {
            let str4 = "other";
            if (parts[0] != 0) {
              str4 = "other";
              if (tmp3 == 0) {
                str4 = "other";
                if (tmp2) {
                  str4 = "many";
                }
              }
            }
            let str2 = str4;
          } else {
            str2 = "one";
          }
          return str2;
        }
        const str = String(arg0);
      },
      ce: fn,
      ceb(arg0, arg1) {
        const parts = String(arg0).split(".");
        const first = parts[0];
        const substr = first.slice(-1);
        const substr1 = parts[1] || "".slice(-1);
        if (arg1) {
          return "other";
        } else {
          if (!tmp2) {
            if (tmp2) {
              if (substr != 4) {
                if (substr != 6) {
                  return str3;
                }
              }
            }
            str3 = "other";
            if (!tmp2) {
              str3 = "other";
              if (substr1 != 4) {
                str3 = "other";
                if (substr1 != 6) {
                  str3 = "other";
                }
              }
            }
          }
          str3 = "one";
        }
      },
      cgg: fn,
      chr: fn,
      ckb: fn,
      cs(arg0, arg1) {
        const parts = String(arg0).split(".");
        const first = parts[0];
        if (arg1) {
          return "other";
        } else {
          if (arg0 != 1) {
            if (first >= 2) {
              if (first <= 4) {
                let str3 = "few";
              }
              let str2 = str3;
            }
            let str4 = "other";
            if (!tmp3) {
              str4 = "many";
            }
            str3 = str4;
          } else {
            str2 = "one";
          }
          return str2;
        }
        const str = String(arg0);
      },
      cy(arg0, arg1) {
        if (arg1) {
          let str6 = "zero";
          if (!tmp) {
            str6 = "zero";
            if (arg0 != 7) {
              str6 = "zero";
              if (arg0 != 8) {
                str6 = "zero";
                if (arg0 != 9) {
                  let str7 = "one";
                  if (arg0 != 1) {
                    let str8 = "two";
                    if (arg0 != 2) {
                      let str10 = "few";
                      if (arg0 != 3) {
                        str10 = "few";
                        if (arg0 != 4) {
                          if (arg0 == 5) {
                            let str11 = "many";
                          } else {
                            str11 = "other";
                          }
                          str10 = str11;
                        }
                      }
                      str8 = str10;
                    }
                    str7 = str8;
                  }
                  str6 = str7;
                }
              }
            }
          }
          return str6;
        } else {
          let str = "zero";
          if (!tmp) {
            let str2 = "one";
            if (arg0 != 1) {
              let str3 = "two";
              if (arg0 != 2) {
                let str4 = "few";
                if (arg0 != 3) {
                  let str5 = "other";
                  if (arg0 == 6) {
                    str5 = "many";
                  }
                  str4 = str5;
                }
                str3 = str4;
              }
              str2 = str3;
            }
            str = str2;
          }
          return str;
        }
      },
      da(arg0, arg1) {
        const parts = String(arg0).split(".");
        const first = parts[0];
        if (arg1) {
          return "other";
        } else {
          if (arg0 == 1) {
            let str3 = "one";
          } else {
            str3 = "other";
            if (!tmp3) {
              if (first != 0) {
                str3 = "other";
              }
            }
          }
          return str3;
        }
        const str = String(arg0);
      },
      de: fn4,
      doi: fn3,
      dsb(arg0, arg1) {
        const parts = String(arg0).split(".");
        const first = parts[0];
        const substr = first.slice(-2);
        const substr1 = parts[1] || "".slice(-2);
        if (arg1) {
          return "other";
        } else {
          if (!tmp2) {
            let str2 = "one";
            if (substr1 != 1) {
              if (!tmp2) {
                let str3 = "two";
                if (substr1 != 2) {
                  if (!tmp2) {
                    if (substr1 != 3) {
                      let str4 = "other";
                    }
                    str3 = str4;
                  }
                  str4 = "few";
                }
              } else {
                str3 = "two";
              }
              str2 = str3;
            }
          } else {
            str2 = "one";
          }
          return str2;
        }
        const arr2 = parts[1] || "";
        const str = String(arg0);
      },
      dv: fn,
      dz: fn5,
      ee: fn,
      el: fn,
      en(arg0, arg1) {
        const parts = String(arg0).split(".");
        let substr1 = Number(parts[0]) == arg0;
        let substr = substr1;
        if (substr1) {
          const first = parts[0];
          substr = first.slice(-1);
        }
        if (substr1) {
          const first1 = parts[0];
          substr1 = first1.slice(-2);
        }
        if (arg1) {
          if (substr != 1) {
            if (substr != 2) {
              let str7 = "other";
              if (substr == 3) {
                str7 = "other";
                if (substr1 != 13) {
                  str7 = "few";
                }
              }
              let str5 = str7;
            } else {
              str5 = "two";
            }
            let str4 = str5;
          } else {
            str4 = "one";
          }
          return str4;
        } else {
          let str3 = "other";
          if (arg0 == 1) {
            str3 = "other";
            if (tmp2) {
              str3 = "one";
            }
          }
          return str3;
        }
        const str = String(arg0);
        tmp2 = !parts[1];
      },
      eo: fn,
      es(arg0, arg1) {
        const parts = String(arg0).split(".");
        if (arg1) {
          return "other";
        } else {
          let str2 = "one";
          if (arg0 != 1) {
            let str4 = "other";
            if (parts[0] != 0) {
              str4 = "other";
              if (tmp3 == 0) {
                str4 = "other";
                if (tmp2) {
                  str4 = "many";
                }
              }
            }
            str2 = str4;
          }
          return str2;
        }
        const str = String(arg0);
        tmp2 = !parts[1];
      },
      et: fn4,
      eu: fn,
      fa: fn3,
      ff(arg0, arg1) {
        if (arg1) {
          return "other";
        } else {
          let str = "other";
          if (arg0 >= 0) {
            str = "other";
            if (arg0 < 2) {
              str = "one";
            }
          }
          return str;
        }
      },
      fi: fn4,
      fil(arg0, arg1) {
        const parts = String(arg0).split(".");
        const first = parts[0];
        const substr = first.slice(-1);
        const substr1 = parts[1] || "".slice(-1);
        if (arg1) {
          let str4 = "other";
          if (arg0 == 1) {
            str4 = "one";
          }
          return str4;
        } else {
          if (!tmp2) {
            if (tmp2) {
              if (substr != 4) {
                if (substr != 6) {
                  return str3;
                }
              }
            }
            str3 = "other";
            if (!tmp2) {
              str3 = "other";
              if (substr1 != 4) {
                str3 = "other";
                if (substr1 != 6) {
                  str3 = "other";
                }
              }
            }
          }
          str3 = "one";
        }
      },
      fo: fn,
      fr(arg0, arg1) {
        const parts = String(arg0).split(".");
        if (arg1) {
          let str5 = "other";
          if (arg0 == 1) {
            str5 = "one";
          }
          return str5;
        } else {
          if (arg0 < 0) {
            let str4 = "other";
            if (parts[0] != 0) {
              str4 = "other";
              if (tmp3 == 0) {
                str4 = "other";
                if (tmp2) {
                  str4 = "many";
                }
              }
            }
            let str2 = str4;
          } else {
            str2 = "one";
          }
          return str2;
        }
        const str = String(arg0);
        tmp2 = !parts[1];
      },
      fur: fn,
      fy: fn4,
      ga(arg0, arg1) {
        const tmp = Number(String(arg0).split(".")[0]) == arg0;
        if (arg1) {
          let str7 = "other";
          if (tmp2) {
            str7 = "one";
          }
          return str7;
        } else {
          let str2 = "one";
          if (!tmp2) {
            let str3 = "two";
            if (arg0 != 2) {
              if (tmp) {
                if (arg0 >= 3) {
                  let str4 = "few";
                }
                str3 = str4;
              }
              let str6 = "other";
              if (tmp) {
                str6 = "other";
                if (arg0 >= 7) {
                  str6 = "other";
                  if (arg0 <= 10) {
                    str6 = "many";
                  }
                }
              }
              str4 = str6;
            }
            str2 = str3;
          }
          return str2;
        }
        const str = String(arg0);
      },
      gd(arg0, arg1) {
        const tmp = Number(String(arg0).split(".")[0]) == arg0;
        if (arg1) {
          let str7 = "one";
          if (!tmp2) {
            str7 = "one";
            if (arg0 != 11) {
              let str9 = "two";
              if (arg0 != 2) {
                str9 = "two";
                if (arg0 != 12) {
                  if (arg0 == 3) {
                    let str10 = "few";
                  } else {
                    str10 = "other";
                  }
                  str9 = str10;
                }
              }
              str7 = str9;
            }
          }
          return str7;
        } else {
          let str2 = "one";
          if (!tmp2) {
            str2 = "one";
            if (arg0 != 11) {
              let str4 = "two";
              if (arg0 != 2) {
                str4 = "two";
                if (arg0 != 12) {
                  if (tmp) {
                    if (arg0 >= 3) {
                      str4 = str6;
                    }
                    str6 = "few";
                  }
                  str6 = "other";
                  if (tmp) {
                    str6 = "other";
                    if (arg0 >= 13) {
                      str6 = "other";
                    }
                  }
                }
              }
              str2 = str4;
            }
          }
          return str2;
        }
        const str = String(arg0);
      },
      gl: fn4,
      gsw: fn,
      gu(arg0, arg1) {
        if (arg1) {
          let str3 = "one";
          if (arg0 != 1) {
            let str5 = "two";
            if (arg0 != 2) {
              str5 = "two";
              if (arg0 != 3) {
                let str6 = "few";
                if (arg0 != 4) {
                  let str7 = "other";
                  if (arg0 == 6) {
                    str7 = "many";
                  }
                  str6 = str7;
                }
                str5 = str6;
              }
            }
            str3 = str5;
          }
          return str3;
        } else {
          let str2 = "other";
          if (arg0 >= 0) {
            str2 = "other";
            if (arg0 <= 1) {
              str2 = "one";
            }
          }
          return str2;
        }
      },
      guw: fn2,
      gv(arg0, arg1) {
        const parts = String(arg0).split(".");
        const first = parts[0];
        const substr = first.slice(-1);
        const substr1 = first.slice(-2);
        if (arg1) {
          return "other";
        } else {
          if (!tmp2) {
            if (!tmp2) {
              if (!tmp2) {
                let str6 = "other";
                if (!tmp2) {
                  str6 = "many";
                }
                let str5 = str6;
              } else {
                str5 = "few";
                if (substr1 != 0) {
                  str5 = "few";
                  if (substr1 != 20) {
                    str5 = "few";
                    if (substr1 != 40) {
                      str5 = "few";
                      if (substr1 != 60) {
                        str5 = "few";
                      }
                    }
                  }
                }
              }
              let str3 = str5;
            } else {
              str3 = "two";
            }
            let str2 = str3;
          } else {
            str2 = "one";
          }
          return str2;
        }
        const str = String(arg0);
      },
      ha: fn,
      haw: fn,
      he(arg0, arg1) {
        const parts = String(arg0).split(".");
        const first = parts[0];
        if (arg1) {
          return "other";
        } else {
          if (first != 1) {
            if (first != 0) {
              let str4 = "other";
              if (first == 2) {
                str4 = "other";
                if (tmp3) {
                  str4 = "two";
                }
              }
              let str2 = str4;
            } else {
              str2 = "one";
            }
          } else {
            str2 = "one";
          }
          return str2;
        }
        const str = String(arg0);
      },
      hi(arg0, arg1) {
        if (arg1) {
          let str3 = "one";
          if (arg0 != 1) {
            let str5 = "two";
            if (arg0 != 2) {
              str5 = "two";
              if (arg0 != 3) {
                let str6 = "few";
                if (arg0 != 4) {
                  let str7 = "other";
                  if (arg0 == 6) {
                    str7 = "many";
                  }
                  str6 = str7;
                }
                str5 = str6;
              }
            }
            str3 = str5;
          }
          return str3;
        } else {
          let str2 = "other";
          if (arg0 >= 0) {
            str2 = "other";
            if (arg0 <= 1) {
              str2 = "one";
            }
          }
          return str2;
        }
      },
      hnj: fn5,
      hr(arg0, arg1) {
        const parts = String(arg0).split(".");
        const first = parts[0];
        const substr = first.slice(-1);
        const substr1 = first.slice(-2);
        const substr2 = arr2.slice(-1);
        const substr3 = arr2.slice(-2);
        if (arg1) {
          return "other";
        } else {
          if (tmp2) {
            if (substr == 1) {
              let str2 = "one";
            }
            return str2;
          }
          if (substr2 != 1) {
            if (tmp2) {
              if (substr >= 2) {
                if (substr <= 4) {
                  if (substr1 >= 12) {
                    str2 = str4;
                  }
                }
                str4 = "few";
              }
            }
            str4 = "other";
            if (substr2 >= 2) {
              str4 = "other";
              if (substr2 <= 4) {
                if (substr3 >= 12) {
                  str4 = "other";
                }
              }
            }
          } else {
            str2 = "one";
          }
        }
      },
      hsb(arg0, arg1) {
        const parts = String(arg0).split(".");
        const first = parts[0];
        const substr = first.slice(-2);
        const substr1 = parts[1] || "".slice(-2);
        if (arg1) {
          return "other";
        } else {
          if (!tmp2) {
            let str2 = "one";
            if (substr1 != 1) {
              if (!tmp2) {
                let str3 = "two";
                if (substr1 != 2) {
                  if (!tmp2) {
                    if (substr1 != 3) {
                      let str4 = "other";
                    }
                    str3 = str4;
                  }
                  str4 = "few";
                }
              } else {
                str3 = "two";
              }
              str2 = str3;
            }
          } else {
            str2 = "one";
          }
          return str2;
        }
        const arr2 = parts[1] || "";
        const str = String(arg0);
      },
      hu(arg0, arg1) {
        if (arg1) {
          if (arg0 == 1) {
            let str2 = "one";
          } else {
            str2 = "other";
          }
          return str2;
        } else {
          let str = "other";
          if (arg0 == 1) {
            str = "one";
          }
          return str;
        }
      },
      hy(arg0, arg1) {
        if (arg1) {
          let str3 = "other";
          if (arg0 == 1) {
            str3 = "one";
          }
          return str3;
        } else {
          let str2 = "other";
          if (arg0 >= 0) {
            str2 = "other";
            if (arg0 < 2) {
              str2 = "one";
            }
          }
          return str2;
        }
      },
      ia: fn4,
      id: fn5,
      ig: fn5,
      ii: fn5,
      io: fn4,
      is(arg0, arg1) {
        const parts = String(arg0).split(".");
        const first = parts[0];
        const replaced = parts[1] || "".replace(/0+$/, "");
        const str = String(arg0);
        const str2 = parts[1] || "";
        const substr = first.slice(-1);
        if (arg1) {
          return "other";
        } else {
          if (tmp3) {
            if (substr == 1) {
              return str4;
            }
            str4 = "one";
          }
          str4 = "other";
          if (replaced % 10 === 1) {
            str4 = "other";
          }
        }
      },
      it(arg0, arg1) {
        const parts = String(arg0).split(".");
        if (arg1) {
          if (arg0 != 11) {
            if (arg0 != 8) {
              if (arg0 != 80) {
                let str5 = "other";
              }
              return str5;
            }
          }
          str5 = "many";
        } else {
          if (arg0 != 1) {
            let str4 = "other";
            if (parts[0] != 0) {
              str4 = "other";
              if (tmp3 == 0) {
                str4 = "other";
                if (tmp2) {
                  str4 = "many";
                }
              }
            }
            let str2 = str4;
          } else {
            str2 = "one";
          }
          return str2;
        }
      },
      iu: fn6,
      ja: fn5,
      jbo: fn5,
      jgo: fn,
      jmc: fn,
      jv: fn5,
      jw: fn5,
      ka(arg0, arg1) {
        const first = String(arg0).split(".")[0];
        const substr = first.slice(-2);
        if (arg1) {
          let str3 = "one";
          if (first != 1) {
            if (first != 0) {
              if (substr < 2) {
                if (substr != 40) {
                  if (substr != 60) {
                    let str4 = "other";
                  }
                  str3 = str4;
                }
              }
            }
            str4 = "many";
          }
          return str3;
        } else {
          let str2 = "other";
          if (arg0 == 1) {
            str2 = "one";
          }
          return str2;
        }
        const str = String(arg0);
      },
      kab(arg0, arg1) {
        if (arg1) {
          return "other";
        } else {
          let str = "other";
          if (arg0 >= 0) {
            str = "other";
            if (arg0 < 2) {
              str = "one";
            }
          }
          return str;
        }
      },
      kaj: fn,
      kcg: fn,
      kde: fn5,
      kea: fn5,
      kk(arg0, arg1) {
        const parts = String(arg0).split(".");
        const tmp2 = Number(parts[0]) == arg0;
        let substr = tmp2;
        if (tmp2) {
          const first = parts[0];
          substr = first.slice(-1);
        }
        if (arg1) {
          if (substr != 6) {
            if (substr != 9) {
              let str4 = "other";
              if (tmp2) {
                str4 = "other";
                if (substr == 0) {
                  str4 = "other";
                }
              }
            }
            return str4;
          }
          str4 = "many";
        } else {
          let str2 = "other";
          if (arg0 == 1) {
            str2 = "one";
          }
          return str2;
        }
      },
      kkj: fn,
      kl: fn,
      km: fn5,
      kn: fn3,
      ko: fn5,
      ks: fn,
      ksb: fn,
      ksh(arg0, arg1) {
        if (arg1) {
          return "other";
        } else {
          let str = "zero";
          if (arg0 != 0) {
            let str2 = "other";
            if (arg0 == 1) {
              str2 = "one";
            }
            str = str2;
          }
          return str;
        }
      },
      ku: fn,
      kw(arg0, arg1) {
        const parts = String(arg0).split(".");
        const tmp2 = Number(parts[0]) == arg0;
        let substr = tmp2;
        if (tmp2) {
          const first = parts[0];
          substr = first.slice(-2);
        }
        let substr1 = tmp2;
        if (tmp2) {
          const first1 = parts[0];
          substr1 = first1.slice(-3);
        }
        let substr2 = tmp2;
        if (tmp2) {
          const first2 = parts[0];
          substr2 = first2.slice(-5);
        }
        let substr3 = tmp2;
        if (tmp2) {
          const first3 = parts[0];
          substr3 = first3.slice(-6);
        }
        if (arg1) {
          if (tmp2) {
            if (arg0 >= 1) {
              let str10 = "one";
            }
            return str10;
          }
          if (substr < 1) {
            if (substr < 21) {
              if (substr < 41) {
                if (substr < 61) {
                  if (substr < 81) {
                    if (arg0 == 5) {
                      let str11 = "many";
                    } else {
                      str11 = "other";
                    }
                    str10 = str11;
                  } else {
                    str10 = "one";
                  }
                } else {
                  str10 = "one";
                }
              } else {
                str10 = "one";
              }
            } else {
              str10 = "one";
            }
          } else {
            str10 = "one";
          }
        } else {
          let str2 = "zero";
          if (arg0 != 0) {
            let str3 = "one";
            if (arg0 != 1) {
              let str5 = "two";
              if (substr != 2) {
                str5 = "two";
                if (substr != 22) {
                  str5 = "two";
                  if (substr != 42) {
                    str5 = "two";
                    if (substr != 62) {
                      str5 = "two";
                      if (substr != 82) {
                        if (tmp2) {
                          if (substr1 == 0) {
                            if (substr2 < 1000) {
                              str5 = "two";
                              if (substr2 != 40000) {
                                str5 = "two";
                                if (substr2 != 60000) {
                                  str5 = "two";
                                }
                              }
                            } else {
                              str5 = "two";
                            }
                          }
                        }
                        if (arg0 == 0) {
                          let str7 = "few";
                          if (substr != 3) {
                            str7 = "few";
                            if (substr != 23) {
                              str7 = "few";
                              if (substr != 43) {
                                str7 = "few";
                                if (substr != 63) {
                                  str7 = "few";
                                  if (substr != 83) {
                                    let str9 = "other";
                                    if (arg0 != 1) {
                                      if (substr != 1) {
                                        if (substr != 21) {
                                          if (substr != 41) {
                                            if (substr != 61) {
                                              str9 = "other";
                                            }
                                          }
                                        }
                                      }
                                      str9 = "many";
                                    }
                                    str7 = str9;
                                  }
                                }
                              }
                            }
                          }
                          str5 = str7;
                        } else {
                          str5 = "two";
                        }
                      }
                    }
                  }
                }
              }
              str3 = str5;
            }
            str2 = str3;
          }
          return str2;
        }
      },
      ky: fn,
      lag(arg0, arg1) {
        const first = String(arg0).split(".")[0];
        if (arg1) {
          return "other";
        } else {
          let str2 = "zero";
          if (arg0 != 0) {
            if (first == 0) {
              let str3 = "other";
              if (arg0 != 0) {
                str3 = "one";
              }
            } else {
              str3 = "other";
            }
            str2 = str3;
          }
          return str2;
        }
        const str = String(arg0);
      },
      lb: fn,
      lg: fn,
      lij(arg0, arg1) {
        const parts = String(arg0).split(".");
        const tmp3 = Number(parts[0]) == arg0;
        if (arg1) {
          if (arg0 != 11) {
            if (arg0 != 8) {
              let str5 = "other";
              if (tmp3) {
                str5 = "other";
                if (arg0 >= 800) {
                  str5 = "other";
                }
              }
            }
            return str5;
          }
          str5 = "many";
        } else {
          let str3 = "other";
          if (arg0 == 1) {
            str3 = "other";
            if (tmp2) {
              str3 = "one";
            }
          }
          return str3;
        }
      },
      lkt: fn5,
      ln: fn2,
      lo(arg0, arg1) {
        let str = "other";
        if (arg1) {
          if (arg0 == 1) {
            str = "one";
          }
          return str;
        } else {
          return str;
        }
      },
      lt(arg0, arg1) {
        const parts = String(arg0).split(".");
        let substr1 = Number(parts[0]) == arg0;
        let substr = substr1;
        if (substr1) {
          const first = parts[0];
          substr = first.slice(-1);
        }
        if (substr1) {
          const first1 = parts[0];
          substr1 = first1.slice(-2);
        }
        if (arg1) {
          return "other";
        } else {
          if (substr != 1) {
            if (substr >= 2) {
              if (substr <= 9) {
                let str5 = "few";
                if (substr1 >= 11) {
                  str5 = "few";
                }
              }
              let str3 = str5;
            }
            let str6 = "other";
            if (tmp2 != 0) {
              str6 = "many";
            }
            str5 = str6;
          } else {
            str3 = "one";
            if (substr1 >= 11) {
              str3 = "one";
            }
          }
          return str3;
        }
        const str = String(arg0);
        tmp2 = parts[1] || "";
      },
      lv(arg0, arg1) {
        const parts = String(arg0).split(".");
        const tmp2 = Number(parts[0]) == arg0;
        let substr = tmp2;
        if (tmp2) {
          const first = parts[0];
          substr = first.slice(-1);
        }
        let substr1 = tmp2;
        if (tmp2) {
          const first1 = parts[0];
          substr1 = first1.slice(-2);
        }
        const substr2 = arr.slice(-2);
        const substr3 = arr.slice(-1);
        if (arg1) {
          return "other";
        } else {
          if (!tmp2) {
            if (substr1 < 11) {
              if (length == 2) {
                if (substr2 >= 11) {
                  let str2 = "zero";
                }
              }
              if (substr != 1) {
                if (length == 2) {
                  if (substr3 == 1) {
                    str2 = str4;
                  }
                }
                str4 = "other";
                if (length != 2) {
                  str4 = "other";
                }
              }
              str4 = "one";
            } else {
              str2 = "zero";
            }
          } else {
            str2 = "zero";
          }
          return str2;
        }
        const str = String(arg0);
      },
      mas: fn,
      mg: fn2,
      mgo: fn,
      mk(arg0, arg1) {
        const parts = String(arg0).split(".");
        const first = parts[0];
        const substr = first.slice(-1);
        const substr1 = first.slice(-2);
        const substr2 = parts[1] || "".slice(-1);
        if (arg1) {
          if (substr != 1) {
            if (substr != 2) {
              if (substr == 7) {
                let str6 = "other";
                if (substr1 != 17) {
                  str6 = "other";
                  if (substr1 != 18) {
                    str6 = "many";
                  }
                }
              } else {
                str6 = "other";
              }
              let str5 = str6;
            } else {
              str5 = "two";
            }
            let str4 = str5;
          } else {
            str4 = "one";
          }
          return str4;
        } else {
          if (tmp2) {
            if (substr == 1) {
              return str3;
            }
            str3 = "one";
          }
          str3 = "other";
          if (substr2 == 1) {
            str3 = "other";
          }
        }
      },
      ml: fn,
      mn: fn,
      mo(arg0, arg1) {
        const parts = String(arg0).split(".");
        let substr = Number(parts[0]) == arg0;
        if (substr) {
          const first = parts[0];
          substr = first.slice(-2);
        }
        if (arg1) {
          let str5 = "other";
          if (arg0 == 1) {
            str5 = "one";
          }
          return str5;
        } else {
          if (arg0 != 1) {
            if (tmp2) {
              if (arg0 != 0) {
                let str4 = "other";
                if (arg0 != 1) {
                  str4 = "other";
                  if (substr >= 1) {
                    str4 = "other";
                  }
                }
              }
              let str2 = str4;
            }
            str4 = "few";
          } else {
            str2 = "one";
          }
          return str2;
        }
        const str = String(arg0);
      },
      mr(arg0, arg1) {
        if (arg1) {
          let str2 = "one";
          if (!tmp) {
            let str4 = "two";
            if (arg0 != 2) {
              str4 = "two";
              if (arg0 != 3) {
                let str5 = "other";
                if (arg0 == 4) {
                  str5 = "few";
                }
                str4 = str5;
              }
            }
            str2 = str4;
          }
          return str2;
        } else {
          let str = "other";
          if (tmp) {
            str = "one";
          }
          return str;
        }
      },
      ms(arg0, arg1) {
        let str = "other";
        if (arg1) {
          if (arg0 == 1) {
            str = "one";
          }
          return str;
        } else {
          return str;
        }
      },
      mt(arg0, arg1) {
        const parts = String(arg0).split(".");
        let substr = Number(parts[0]) == arg0;
        if (substr) {
          const first = parts[0];
          substr = first.slice(-2);
        }
        if (arg1) {
          return "other";
        } else {
          let str2 = "one";
          if (arg0 != 1) {
            let str3 = "two";
            if (arg0 != 2) {
              let str5 = "few";
              if (arg0 != 0) {
                if (substr < 3) {
                  let str7 = "other";
                  if (substr >= 11) {
                    str7 = "other";
                    if (substr <= 19) {
                      str7 = "many";
                    }
                  }
                  str5 = str7;
                } else {
                  str5 = "few";
                }
              }
              str3 = str5;
            }
            str2 = str3;
          }
          return str2;
        }
        const str = String(arg0);
      },
      my: fn5,
      nah: fn,
      naq: fn6,
      nb: fn,
      nd: fn,
      ne(arg0, arg1) {
        String(arg0);
        if (arg1) {
          let str2 = "other";
          if (tmp2) {
            str2 = "other";
            if (arg0 >= 1) {
              str2 = "other";
              if (arg0 <= 4) {
                str2 = "one";
              }
            }
          }
          return str2;
        } else {
          let str = "other";
          if (arg0 == 1) {
            str = "one";
          }
          return str;
        }
      },
      nl: fn4,
      nn: fn,
      nnh: fn,
      no: fn,
      nqo: fn5,
      nr: fn,
      nso: fn2,
      ny: fn,
      nyn: fn,
      om: fn,
      or(arg0, arg1) {
        String(arg0);
        if (arg1) {
          let str3 = "one";
          if (!tmp3) {
            str3 = "one";
            if (arg0 != 5) {
              if (tmp2) {
                if (arg0 >= 7) {
                  str3 = "one";
                }
              }
              let str5 = "two";
              if (arg0 != 2) {
                str5 = "two";
                if (arg0 != 3) {
                  let str6 = "few";
                  if (arg0 != 4) {
                    let str7 = "other";
                    if (arg0 == 6) {
                      str7 = "many";
                    }
                    str6 = str7;
                  }
                  str5 = str6;
                }
              }
              str3 = str5;
            }
          }
          return str3;
        } else {
          let str = "other";
          if (tmp3) {
            str = "one";
          }
          return str;
        }
      },
      os: fn,
      osa: fn5,
      pa: fn2,
      pap: fn,
      pcm: fn3,
      pl(arg0, arg1) {
        const parts = String(arg0).split(".");
        const first = parts[0];
        const substr = first.slice(-1);
        const substr1 = first.slice(-2);
        if (arg1) {
          return "other";
        } else {
          if (arg0 != 1) {
            if (tmp2) {
              if (substr >= 2) {
                if (substr <= 4) {
                  let str4 = "few";
                  if (substr1 >= 12) {
                    str4 = "few";
                  }
                }
                let str2 = str4;
              }
            }
            if (tmp2) {
              if (first != 1) {
                if (substr != 0) {
                  str4 = str6;
                }
              }
              str6 = "many";
            }
            str6 = "other";
            if (tmp2) {
              str6 = "other";
              if (substr1 >= 12) {
                str6 = "other";
              }
            }
          } else {
            str2 = "one";
          }
          return str2;
        }
        const str = String(arg0);
      },
      prg(arg0, arg1) {
        const parts = String(arg0).split(".");
        const tmp2 = Number(parts[0]) == arg0;
        let substr = tmp2;
        if (tmp2) {
          const first = parts[0];
          substr = first.slice(-1);
        }
        let substr1 = tmp2;
        if (tmp2) {
          const first1 = parts[0];
          substr1 = first1.slice(-2);
        }
        const substr2 = arr.slice(-2);
        const substr3 = arr.slice(-1);
        if (arg1) {
          return "other";
        } else {
          if (!tmp2) {
            if (substr1 < 11) {
              if (length == 2) {
                if (substr2 >= 11) {
                  let str2 = "zero";
                }
              }
              if (substr != 1) {
                if (length == 2) {
                  if (substr3 == 1) {
                    str2 = str4;
                  }
                }
                str4 = "other";
                if (length != 2) {
                  str4 = "other";
                }
              }
              str4 = "one";
            } else {
              str2 = "zero";
            }
          } else {
            str2 = "zero";
          }
          return str2;
        }
        const str = String(arg0);
      },
      ps: fn,
      pt(arg0, arg1) {
        const parts = String(arg0).split(".");
        const first = parts[0];
        if (arg1) {
          return "other";
        } else {
          let str3 = "one";
          if (first != 0) {
            str3 = "one";
            if (first != 1) {
              let str5 = "other";
              if (first != 0) {
                str5 = "other";
                if (tmp4 == 0) {
                  str5 = "other";
                  if (tmp3) {
                    str5 = "many";
                  }
                }
              }
              str3 = str5;
            }
          }
          return str3;
        }
        const str = String(arg0);
        tmp3 = !parts[1];
      },
      pt_PT(arg0, arg1) {
        const parts = String(arg0).split(".");
        if (arg1) {
          return "other";
        } else {
          if (arg0 != 1) {
            let str4 = "other";
            if (parts[0] != 0) {
              str4 = "other";
              if (tmp3 == 0) {
                str4 = "other";
                if (tmp2) {
                  str4 = "many";
                }
              }
            }
            let str2 = str4;
          } else {
            str2 = "one";
          }
          return str2;
        }
        const str = String(arg0);
      },
      rm: fn,
      ro(arg0, arg1) {
        const parts = String(arg0).split(".");
        let substr = Number(parts[0]) == arg0;
        if (substr) {
          const first = parts[0];
          substr = first.slice(-2);
        }
        if (arg1) {
          let str5 = "other";
          if (arg0 == 1) {
            str5 = "one";
          }
          return str5;
        } else {
          if (arg0 != 1) {
            if (tmp2) {
              if (arg0 != 0) {
                let str4 = "other";
                if (arg0 != 1) {
                  str4 = "other";
                  if (substr >= 1) {
                    str4 = "other";
                  }
                }
              }
              let str2 = str4;
            }
            str4 = "few";
          } else {
            str2 = "one";
          }
          return str2;
        }
        const str = String(arg0);
      },
      rof: fn,
      ru(arg0, arg1) {
        const parts = String(arg0).split(".");
        const first = parts[0];
        const substr = first.slice(-1);
        const substr1 = first.slice(-2);
        if (arg1) {
          return "other";
        } else {
          if (tmp2) {
            if (substr == 1) {
              let str2 = "one";
            }
            return str2;
          }
          if (tmp2) {
            if (substr >= 2) {
              if (substr <= 4) {
                let str4 = "few";
                if (substr1 >= 12) {
                  str4 = "few";
                }
              }
              str2 = str4;
            }
          }
          if (!tmp2) {
            if (tmp2) {
              if (substr >= 5) {
                str4 = str6;
              }
            }
            str6 = "other";
            if (tmp2) {
              str6 = "other";
              if (substr1 >= 11) {
                str6 = "other";
              }
            }
          }
          str6 = "many";
        }
      },
      rwk: fn,
      sah: fn5,
      saq: fn,
      sat: fn6,
      sc(arg0, arg1) {
        String(arg0);
        if (arg1) {
          if (arg0 != 11) {
            if (arg0 != 8) {
              if (arg0 != 80) {
                let str3 = "other";
              }
              return str3;
            }
          }
          str3 = "many";
        } else {
          let str2 = "other";
          if (arg0 == 1) {
            str2 = "other";
            if (tmp2) {
              str2 = "one";
            }
          }
          return str2;
        }
      },
      scn(arg0, arg1) {
        String(arg0);
        if (arg1) {
          if (arg0 != 11) {
            if (arg0 != 8) {
              if (arg0 != 80) {
                let str3 = "other";
              }
              return str3;
            }
          }
          str3 = "many";
        } else {
          let str2 = "other";
          if (arg0 == 1) {
            str2 = "other";
            if (tmp2) {
              str2 = "one";
            }
          }
          return str2;
        }
      },
      sd: fn,
      sdh: fn,
      se: fn6,
      seh: fn,
      ses: fn5,
      sg: fn5,
      sh(arg0, arg1) {
        const parts = String(arg0).split(".");
        const first = parts[0];
        const substr = first.slice(-1);
        const substr1 = first.slice(-2);
        const substr2 = arr2.slice(-1);
        const substr3 = arr2.slice(-2);
        if (arg1) {
          return "other";
        } else {
          if (tmp2) {
            if (substr == 1) {
              let str2 = "one";
            }
            return str2;
          }
          if (substr2 != 1) {
            if (tmp2) {
              if (substr >= 2) {
                if (substr <= 4) {
                  if (substr1 >= 12) {
                    str2 = str4;
                  }
                }
                str4 = "few";
              }
            }
            str4 = "other";
            if (substr2 >= 2) {
              str4 = "other";
              if (substr2 <= 4) {
                if (substr3 >= 12) {
                  str4 = "other";
                }
              }
            }
          } else {
            str2 = "one";
          }
        }
      },
      shi(arg0, arg1) {
        String(arg0);
        if (arg1) {
          return "other";
        } else {
          if (arg0 < 0) {
            let str3 = "other";
            if (tmp2) {
              str3 = "other";
              if (arg0 >= 2) {
                str3 = "other";
                if (arg0 <= 10) {
                  str3 = "few";
                }
              }
            }
            let str = str3;
          } else {
            str = "one";
          }
          return str;
        }
      },
      si(arg0, arg1) {
        const parts = String(arg0).split(".");
        [tmp2, str2] = parts;
        if (arg1) {
          return "other";
        } else {
          if (arg0 != 0) {
            if (arg0 != 1) {
              let str4 = "other";
              if (tmp2 == 0) {
                str4 = "other";
              }
            }
            return str4;
          }
          str4 = "one";
        }
      },
      sk(arg0, arg1) {
        const parts = String(arg0).split(".");
        const first = parts[0];
        if (arg1) {
          return "other";
        } else {
          if (arg0 != 1) {
            if (first >= 2) {
              if (first <= 4) {
                let str3 = "few";
              }
              let str2 = str3;
            }
            let str4 = "other";
            if (!tmp3) {
              str4 = "many";
            }
            str3 = str4;
          } else {
            str2 = "one";
          }
          return str2;
        }
        const str = String(arg0);
      },
      sl(arg0, arg1) {
        const parts = String(arg0).split(".");
        const first = parts[0];
        const substr = first.slice(-2);
        if (arg1) {
          return "other";
        } else {
          if (!tmp2) {
            if (!tmp2) {
              if (!tmp2) {
                let str4 = "other";
                let str3 = str4;
              }
              str4 = "few";
            } else {
              str3 = "two";
            }
            let str2 = str3;
          } else {
            str2 = "one";
          }
          return str2;
        }
        const str = String(arg0);
      },
      sma: fn6,
      smi: fn6,
      smj: fn6,
      smn: fn6,
      sms: fn6,
      sn: fn,
      so: fn,
      sq(arg0, arg1) {
        const parts = String(arg0).split(".");
        let substr1 = Number(parts[0]) == arg0;
        let substr = substr1;
        if (substr1) {
          const first = parts[0];
          substr = first.slice(-1);
        }
        if (substr1) {
          const first1 = parts[0];
          substr1 = first1.slice(-2);
        }
        if (arg1) {
          let str3 = "one";
          if (!tmp4) {
            let str5 = "other";
            if (substr == 4) {
              str5 = "other";
              if (substr1 != 14) {
                str5 = "many";
              }
            }
            str3 = str5;
          }
          return str3;
        } else {
          let str2 = "other";
          if (tmp4) {
            str2 = "one";
          }
          return str2;
        }
        const str = String(arg0);
      },
      sr(arg0, arg1) {
        const parts = String(arg0).split(".");
        const first = parts[0];
        const substr = first.slice(-1);
        const substr1 = first.slice(-2);
        const substr2 = arr2.slice(-1);
        const substr3 = arr2.slice(-2);
        if (arg1) {
          return "other";
        } else {
          if (tmp2) {
            if (substr == 1) {
              let str2 = "one";
            }
            return str2;
          }
          if (substr2 != 1) {
            if (tmp2) {
              if (substr >= 2) {
                if (substr <= 4) {
                  if (substr1 >= 12) {
                    str2 = str4;
                  }
                }
                str4 = "few";
              }
            }
            str4 = "other";
            if (substr2 >= 2) {
              str4 = "other";
              if (substr2 <= 4) {
                if (substr3 >= 12) {
                  str4 = "other";
                }
              }
            }
          } else {
            str2 = "one";
          }
        }
      },
      ss: fn,
      ssy: fn,
      st: fn,
      su: fn5,
      sv(arg0, arg1) {
        const parts = String(arg0).split(".");
        let substr1 = Number(parts[0]) == arg0;
        let substr = substr1;
        if (substr1) {
          const first = parts[0];
          substr = first.slice(-1);
        }
        if (substr1) {
          const first1 = parts[0];
          substr1 = first1.slice(-2);
        }
        if (arg1) {
          if (substr == 1) {
            let str4 = "other";
            if (substr1 != 11) {
              str4 = "other";
              if (substr1 != 12) {
                str4 = "one";
              }
            }
          } else {
            str4 = "other";
          }
          return str4;
        } else {
          let str3 = "other";
          if (arg0 == 1) {
            str3 = "other";
            if (tmp2) {
              str3 = "one";
            }
          }
          return str3;
        }
        const str = String(arg0);
        tmp2 = !parts[1];
      },
      sw: fn4,
      syr: fn,
      ta: fn,
      te: fn,
      teo: fn,
      th: fn5,
      ti: fn2,
      tig: fn,
      tk(arg0, arg1) {
        const parts = String(arg0).split(".");
        let substr = Number(parts[0]) == arg0;
        if (substr) {
          const first = parts[0];
          substr = first.slice(-1);
        }
        if (arg1) {
          if (substr != 6) {
            if (substr != 9) {
              let str3 = "other";
            }
            return str3;
          }
          str3 = "few";
        } else {
          let str2 = "other";
          if (arg0 == 1) {
            str2 = "one";
          }
          return str2;
        }
      },
      tl(arg0, arg1) {
        const parts = String(arg0).split(".");
        const first = parts[0];
        const substr = first.slice(-1);
        const substr1 = parts[1] || "".slice(-1);
        if (arg1) {
          let str4 = "other";
          if (arg0 == 1) {
            str4 = "one";
          }
          return str4;
        } else {
          if (!tmp2) {
            if (tmp2) {
              if (substr != 4) {
                if (substr != 6) {
                  return str3;
                }
              }
            }
            str3 = "other";
            if (!tmp2) {
              str3 = "other";
              if (substr1 != 4) {
                str3 = "other";
                if (substr1 != 6) {
                  str3 = "other";
                }
              }
            }
          }
          str3 = "one";
        }
      },
      tn: fn,
      to: fn5,
      tpi: fn5,
      tr: fn,
      ts: fn,
      tzm(arg0, arg1) {
        String(arg0);
        if (arg1) {
          return "other";
        } else {
          if (arg0 != 0) {
            if (arg0 != 1) {
              let str2 = "other";
              if (tmp2) {
                str2 = "other";
                if (arg0 >= 11) {
                  str2 = "other";
                }
              }
            }
            return str2;
          }
          str2 = "one";
        }
      },
      ug: fn,
      uk(arg0, arg1) {
        const parts = String(arg0).split(".");
        const first = parts[0];
        let substr1 = Number(parts[0]) == arg0;
        let substr = substr1;
        if (substr1) {
          const first1 = parts[0];
          substr = first1.slice(-1);
        }
        if (substr1) {
          const first2 = parts[0];
          substr1 = first2.slice(-2);
        }
        const substr2 = first.slice(-1);
        const substr3 = first.slice(-2);
        if (arg1) {
          let str8 = "other";
          if (substr == 3) {
            str8 = "other";
            if (substr1 != 13) {
              str8 = "few";
            }
          }
          return str8;
        } else {
          if (tmp2) {
            if (substr2 == 1) {
              let str2 = "one";
            }
            return str2;
          }
          if (tmp2) {
            if (substr2 >= 2) {
              if (substr2 <= 4) {
                let str4 = "few";
                if (substr3 >= 12) {
                  str4 = "few";
                }
              }
              str2 = str4;
            }
          }
          if (!tmp2) {
            if (tmp2) {
              if (substr2 >= 5) {
                str4 = str6;
              }
            }
            str6 = "other";
            if (tmp2) {
              str6 = "other";
              if (substr3 >= 11) {
                str6 = "other";
              }
            }
          }
          str6 = "many";
        }
      },
      und: fn5,
      ur: fn4,
      uz: fn,
      ve: fn,
      vec(arg0, arg1) {
        const parts = String(arg0).split(".");
        if (arg1) {
          if (arg0 != 11) {
            if (arg0 != 8) {
              if (arg0 != 80) {
                let str5 = "other";
              }
              return str5;
            }
          }
          str5 = "many";
        } else {
          if (arg0 != 1) {
            let str4 = "other";
            if (parts[0] != 0) {
              str4 = "other";
              if (tmp3 == 0) {
                str4 = "other";
                if (tmp2) {
                  str4 = "many";
                }
              }
            }
            let str2 = str4;
          } else {
            str2 = "one";
          }
          return str2;
        }
      },
      vi(arg0, arg1) {
        let str = "other";
        if (arg1) {
          if (arg0 == 1) {
            str = "one";
          }
          return str;
        } else {
          return str;
        }
      },
      vo: fn,
      vun: fn,
      wa: fn2,
      wae: fn,
      wo: fn5,
      xh: fn,
      xog: fn,
      yi: fn4,
      yo: fn5,
      yue: fn5,
      zh: fn5,
      zu: fn3
    };
    arg0.exports = obj;
  })(obj);
  let defaultExportFromCjs = getDefaultExportFromCjs(obj.exports);
  obj = Object.create(null);
  obj.default = defaultExportFromCjs;
  let items = [obj.exports];
  let obj1 = { exports: {} };
  ((arg0) => {
    let obj = { cardinal: items, ordinal: items1 };
    items = ["one", "other"];
    items1 = ["other"];
    obj = { cardinal: items2, ordinal: items3 };
    items2 = ["one", "other"];
    items3 = ["one", "other"];
    obj = { cardinal: items4, ordinal: items5 };
    items4 = ["other"];
    items5 = ["other"];
    const obj1 = { cardinal: items6, ordinal: items7 };
    items6 = ["one", "two", "other"];
    items7 = ["other"];
    const obj2 = { af: obj, ak: obj, am: obj, an: obj, ar: { cardinal: items8, ordinal: items9 }, ars: { cardinal: items10, ordinal: items11 }, as: { cardinal: items12, ordinal: items13 }, asa: obj, ast: obj, az: { cardinal: items14, ordinal: items15 }, bal: obj, be: { cardinal: items16, ordinal: items17 }, bem: obj, bez: obj, bg: obj, bho: obj, bm: obj, bn: { cardinal: items18, ordinal: items19 }, bo: obj, br: { cardinal: items20, ordinal: items21 }, brx: obj, bs: { cardinal: items22, ordinal: items23 }, ca: { cardinal: items24, ordinal: items25 }, ce: obj, ceb: obj, cgg: obj, chr: obj, ckb: obj, cs: { cardinal: items26, ordinal: items27 }, cy: { cardinal: items28, ordinal: items29 }, da: obj, de: obj, doi: obj, dsb: { cardinal: items30, ordinal: items31 }, dv: obj, dz: obj, ee: obj, el: obj, en: { cardinal: items32, ordinal: items33 }, eo: obj, es: { cardinal: items34, ordinal: items35 }, et: obj, eu: obj, fa: obj, ff: obj, fi: obj, fil: obj, fo: obj, fr: { cardinal: items36, ordinal: items37 }, fur: obj, fy: obj, ga: { cardinal: items38, ordinal: items39 }, gd: { cardinal: items40, ordinal: items41 }, gl: obj, gsw: obj, gu: { cardinal: items42, ordinal: items43 }, guw: obj, gv: { cardinal: items44, ordinal: items45 }, ha: obj, haw: obj, he: obj1, hi: { cardinal: items46, ordinal: items47 }, hnj: obj, hr: { cardinal: items48, ordinal: items49 }, hsb: { cardinal: items50, ordinal: items51 }, hu: obj, hy: obj, ia: obj, id: obj, ig: obj, ii: obj, io: obj, is: obj, it: { cardinal: items52, ordinal: items53 }, iu: obj1, ja: obj, jbo: obj, jgo: obj, jmc: obj, jv: obj, jw: obj, ka: { cardinal: items54, ordinal: items55 }, kab: obj, kaj: obj, kcg: obj, kde: obj, kea: obj, kk: { cardinal: items56, ordinal: items57 }, kkj: obj, kl: obj, km: obj, kn: obj, ko: obj, ks: obj, ksb: obj, ksh: { cardinal: items58, ordinal: items59 }, ku: obj, kw: { cardinal: items60, ordinal: items61 }, ky: obj, lag: { cardinal: items62, ordinal: items63 }, lb: obj, lg: obj, lij: { cardinal: items64, ordinal: items65 }, lkt: obj, ln: obj, lo: { cardinal: items66, ordinal: items67 }, lt: { cardinal: items68, ordinal: items69 }, lv: { cardinal: items70, ordinal: items71 }, mas: obj, mg: obj, mgo: obj, mk: { cardinal: items72, ordinal: items73 }, ml: obj, mn: obj, mo: { cardinal: items74, ordinal: items75 }, mr: { cardinal: items76, ordinal: items77 }, ms: { cardinal: items78, ordinal: items79 }, mt: { cardinal: items80, ordinal: items81 }, my: obj, nah: obj, naq: obj1, nb: obj, nd: obj, ne: obj, nl: obj, nn: obj, nnh: obj, no: obj, nqo: obj, nr: obj, nso: obj, ny: obj, nyn: obj, om: obj, or: { cardinal: items82, ordinal: items83 }, os: obj, osa: obj, pa: obj, pap: obj, pcm: obj, pl: { cardinal: items84, ordinal: items85 }, prg: { cardinal: items86, ordinal: items87 }, ps: obj, pt: { cardinal: items88, ordinal: items89 }, pt_PT: { cardinal: items90, ordinal: items91 }, rm: obj, ro: { cardinal: items92, ordinal: items93 }, rof: obj, ru: { cardinal: items94, ordinal: items95 }, rwk: obj, sah: obj, saq: obj, sat: obj1, sc: { cardinal: items96, ordinal: items97 }, scn: { cardinal: items98, ordinal: items }, sd: obj, sdh: obj, se: obj1, seh: obj, ses: obj, sg: obj, sh: { cardinal: items, ordinal: items }, shi: { cardinal: items, ordinal: items }, si: obj, sk: { cardinal: items, ordinal: items }, sl: { cardinal: items, ordinal: items }, sma: obj1, smi: obj1, smj: obj1, smn: obj1, sms: obj1, sn: obj, so: obj, sq: { cardinal: items, ordinal: items }, sr: { cardinal: items, ordinal: items }, ss: obj, ssy: obj, st: obj, su: obj, sv: obj, sw: obj, syr: obj, ta: obj, te: obj, teo: obj, th: obj, ti: obj, tig: obj, tk: { cardinal: items, ordinal: items }, tl: obj, tn: obj, to: obj, tpi: obj, tr: obj, ts: obj, tzm: obj, ug: obj, uk: { cardinal: items, ordinal: items }, und: obj, ur: obj, uz: obj, ve: obj, vec: { cardinal: items, ordinal: items }, vi: { cardinal: items, ordinal: items }, vo: obj, vun: obj, wa: obj, wae: obj, wo: obj, xh: obj, xog: obj, yi: obj, yo: obj, yue: obj, zh: obj, zu: obj };
    items8 = ["zero", "one", "two", "few", "many", "other"];
    items9 = ["other"];
    items10 = ["zero", "one", "two", "few", "many", "other"];
    items11 = ["other"];
    items12 = ["one", "other"];
    items13 = ["one", "two", "few", "many", "other"];
    items14 = ["one", "other"];
    items15 = ["one", "few", "many", "other"];
    items16 = ["one", "few", "many", "other"];
    items17 = ["few", "other"];
    items18 = ["one", "other"];
    items19 = ["one", "two", "few", "many", "other"];
    items20 = ["one", "two", "few", "many", "other"];
    items21 = ["other"];
    items22 = ["one", "few", "other"];
    items23 = ["other"];
    items24 = ["one", "many", "other"];
    items25 = ["one", "two", "few", "other"];
    items26 = ["one", "few", "many", "other"];
    items27 = ["other"];
    items28 = ["zero", "one", "two", "few", "many", "other"];
    items29 = ["zero", "one", "two", "few", "many", "other"];
    items30 = ["one", "two", "few", "other"];
    items31 = ["other"];
    items32 = ["one", "other"];
    items33 = ["one", "two", "few", "other"];
    items34 = ["one", "many", "other"];
    items35 = ["other"];
    items36 = ["one", "many", "other"];
    items37 = ["one", "other"];
    items38 = ["one", "two", "few", "many", "other"];
    items39 = ["one", "other"];
    items40 = ["one", "two", "few", "other"];
    items41 = ["one", "two", "few", "other"];
    items42 = ["one", "other"];
    items43 = ["one", "two", "few", "many", "other"];
    items44 = ["one", "two", "few", "many", "other"];
    items45 = ["other"];
    items46 = ["one", "other"];
    items47 = ["one", "two", "few", "many", "other"];
    items48 = ["one", "few", "other"];
    items49 = ["other"];
    items50 = ["one", "two", "few", "other"];
    items51 = ["other"];
    items52 = ["one", "many", "other"];
    items53 = ["many", "other"];
    items54 = ["one", "other"];
    items55 = ["one", "many", "other"];
    items56 = ["one", "other"];
    items57 = ["many", "other"];
    items58 = ["zero", "one", "other"];
    items59 = ["other"];
    items60 = ["zero", "one", "two", "few", "many", "other"];
    items61 = ["one", "many", "other"];
    items62 = ["zero", "one", "other"];
    items63 = ["other"];
    items64 = ["one", "other"];
    items65 = ["many", "other"];
    items66 = ["other"];
    items67 = ["one", "other"];
    items68 = ["one", "few", "many", "other"];
    items69 = ["other"];
    items70 = ["zero", "one", "other"];
    items71 = ["other"];
    items72 = ["one", "other"];
    items73 = ["one", "two", "many", "other"];
    items74 = ["one", "few", "other"];
    items75 = ["one", "other"];
    items76 = ["one", "other"];
    items77 = ["one", "two", "few", "other"];
    items78 = ["other"];
    items79 = ["one", "other"];
    items80 = ["one", "two", "few", "many", "other"];
    items81 = ["other"];
    items82 = ["one", "other"];
    items83 = ["one", "two", "few", "many", "other"];
    items84 = ["one", "few", "many", "other"];
    items85 = ["other"];
    items86 = ["zero", "one", "other"];
    items87 = ["other"];
    items88 = ["one", "many", "other"];
    items89 = ["other"];
    items90 = ["one", "many", "other"];
    items91 = ["other"];
    items92 = ["one", "few", "other"];
    items93 = ["one", "other"];
    items94 = ["one", "few", "many", "other"];
    items95 = ["other"];
    items96 = ["one", "other"];
    items97 = ["many", "other"];
    items98 = ["one", "other"];
    items = ["many", "other"];
    items = ["one", "few", "other"];
    items = ["other"];
    items = ["one", "few", "other"];
    items = ["other"];
    items = ["one", "few", "many", "other"];
    items = ["other"];
    items = ["one", "two", "few", "other"];
    items = ["other"];
    items = ["one", "other"];
    items = ["one", "many", "other"];
    items = ["one", "few", "other"];
    items = ["other"];
    items = ["one", "other"];
    items = ["few", "other"];
    items = ["one", "few", "many", "other"];
    items = ["few", "other"];
    items = ["one", "many", "other"];
    items = ["many", "other"];
    items = ["other"];
    items = ["one", "other"];
    arg0.exports = obj2;
  })(obj1);
  let defaultExportFromCjs1 = getDefaultExportFromCjs(obj1.exports);
  let obj2 = Object.create(null);
  obj2.default = defaultExportFromCjs1;
  let items1 = [obj1.exports];
  const obj3 = { exports: {} };
  const _mergeNamespacesResult = _mergeNamespaces(obj, items);
  ((arg0) => {
    const fn = function a(arg0, arg1) {
      return "other";
    };
    const fn2 = function b(arg0, arg1) {
      let str = "other";
      if (arg0 === "other") {
        str = "other";
        if (arg1 === "one") {
          str = "one";
        }
      }
      return str;
    };
    const fn3 = function c(arg0, arg1) {
      let str = arg1;
      if (!arg1) {
        str = "other";
      }
      return str;
    };
    const obj = {
      af: fn,
      ak: fn2,
      am: fn3,
      an: fn,
      ar(arg0, arg1) {
        let str = "few";
        if (arg1 !== "few") {
          let str2 = "many";
          if (arg1 !== "many") {
            if (arg0 !== "zero") {
              let str7 = "other";
              if (tmp2) {
                str7 = "other";
                if (arg1 === "two") {
                  str7 = "zero";
                }
              }
              let str5 = str7;
            } else {
              str5 = "zero";
            }
            str2 = str5;
          }
          str = str2;
        }
        return str;
      },
      as: fn3,
      az: fn3,
      be: fn3,
      bg: fn,
      bn: fn3,
      bs: fn3,
      ca: fn,
      cs: fn3,
      cy: fn3,
      da: fn3,
      de: fn3,
      el: fn3,
      en: fn,
      es: fn,
      et: fn,
      eu: fn,
      fa: fn2,
      fi: fn,
      fil: fn3,
      fr: fn3,
      ga: fn3,
      gl: fn3,
      gsw: fn3,
      gu: fn3,
      he: fn,
      hi: fn3,
      hr: fn3,
      hu: fn3,
      hy: fn3,
      ia: fn,
      id: fn,
      io: fn,
      is: fn3,
      it: fn3,
      ja: fn,
      ka(arg0, arg1) {
        let str = arg0;
        if (!arg0) {
          str = "other";
        }
        return str;
      },
      kk: fn3,
      km: fn,
      kn: fn3,
      ko: fn,
      ky: fn3,
      lij: fn3,
      lo: fn,
      lt: fn3,
      lv(arg0, arg1) {
        let str = "other";
        if (arg1 === "one") {
          str = "one";
        }
        return str;
      },
      mk: fn,
      ml: fn3,
      mn: fn3,
      mr: fn3,
      ms: fn,
      my: fn,
      nb: fn,
      ne: fn3,
      nl: fn3,
      no: fn,
      or: fn2,
      pa: fn3,
      pcm: fn,
      pl: fn3,
      ps: fn3,
      pt: fn3,
      ro(arg0, arg1) {
        let str = "few";
        if (arg1 !== "few") {
          let str2 = "other";
          if (arg1 === "one") {
            str2 = "few";
          }
          str = str2;
        }
        return str;
      },
      ru: fn3,
      sc: fn3,
      scn: fn3,
      sd: fn2,
      si(arg0, arg1) {
        let str = "other";
        if (arg0 === "one") {
          str = "other";
          if (arg1 === "one") {
            str = "one";
          }
        }
        return str;
      },
      sk: fn3,
      sl(arg0, arg1) {
        let str = "few";
        let str2 = "few";
        if (arg1 !== "few") {
          if (arg1 !== "one") {
            let str4 = "other";
            if (arg1 === "two") {
              str4 = "two";
            }
            str = str4;
          }
          str2 = str;
        }
        return str2;
      },
      sq: fn3,
      sr: fn3,
      sv: fn,
      sw: fn3,
      ta: fn3,
      te: fn3,
      th: fn,
      tk: fn3,
      tr: fn3,
      ug: fn3,
      uk: fn3,
      ur: fn,
      uz: fn3,
      vi: fn,
      yue: fn,
      zh: fn,
      zu: fn3
    };
    arg0.exports = obj;
  })(obj3);
  let defaultExportFromCjs2 = getDefaultExportFromCjs(obj3.exports);
  const obj4 = Object.create(null);
  obj4.default = defaultExportFromCjs2;
  let items2 = [obj3.exports];
  const _mergeNamespacesResult1 = _mergeNamespaces(obj2, items1);
  if (!defaultExportFromCjs) {
    defaultExportFromCjs = _mergeNamespacesResult;
  }
  if (!defaultExportFromCjs1) {
    defaultExportFromCjs1 = _mergeNamespacesResult1;
  }
  if (!defaultExportFromCjs2) {
    defaultExportFromCjs2 = _mergeNamespacesResult2;
  }
  function id(arg0) {
    let str = "pt_PT";
    if (arg0 !== "pt-PT") {
      str = arg0;
    }
    return str;
  }
  const _Intl = Intl;
  module.exports = obj.default(Intl.NumberFormat, function getSelector(arg0) {
    return defaultExportFromCjs[id(undefined, arg0)];
  }, function getCategories(arg0, arg1) {
    let str = "cardinal";
    if (arg1) {
      str = "ordinal";
    }
    return defaultExportFromCjs1[id(undefined, arg0)][str];
  }, function getRangeSelector(arg0) {
    return defaultExportFromCjs2[id(undefined, arg0)];
  });
}
obj = { default: _typeof };
