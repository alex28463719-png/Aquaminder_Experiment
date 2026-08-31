// Module ID: 520
// Function ID: 5811
// Name: Trans
// Dependencies: [1, 99, 6, 203, 119, 521, 523, 516, 514]
// Exports: Trans

// Module 520 (Trans)
import _toConsumableArray from "_toConsumableArray" /* 6 */;
import _defineProperty from "_defineProperty" /* 99 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import getDefaults from "getDefaults" /* 514 */;
import setI18n from "setI18n" /* 516 */;
import r from "r" /* 521 */;
import warn from "warn" /* 523 */;
import module_1 from "module_1" /* 1 */;
import closure_5 from "getIteratorFn" /* 119 */;

let closure_2 = module_1(_defineProperty);
let closure_3 = module_1(_toConsumableArray);
let closure_4 = module_1(_objectWithoutProperties);
let closure_6 = module_1(r);
let closure_7 = ["format"];
let closure_8 = ["children", "count", "parent", "i18nKey", "context", "tOptions", "values", "defaults", "components", "ns", "i18n", "t", "shouldUnescape"];
function hasChildren(props) {
  if (props) {
    props = props.props;
    let children;
    if (props != null) {
      children = props.children;
    }
    if (children == null) {
      children = props.children;
    }
    if (arg1) {
      return children.length > 0;
    } else {
      return children;
    }
  } else {
    return false;
  }
}
function getChildren(props) {
  if (props) {
    props = props.props;
    let children;
    if (props != null) {
      children = props.children;
    }
    if (children == null) {
      children = props.children;
    }
    const props2 = props.props;
    let tmp3 = children;
    if (props2 != null) {
      tmp3 = children;
      if (props2.i18nIsDynamicList) {
        tmp3 = getAsArray(children);
      }
    }
    return tmp3;
  } else {
    return [];
  }
}
function hasValidReactChildren(arr) {
  let isArray = Array.isArray(arr);
  if (isArray) {
    isArray = arr.every(React.isValidElement);
  }
  return isArray;
}
function getAsArray(children) {
  let tmp = children;
  if (!Array.isArray(children)) {
    const items = [children];
    tmp = items;
  }
  return tmp;
}
function mergeProps(props, props2) {
  const merged = Object.assign({}, props2);
  merged.props = Object.assign(props.props, props2.props);
  return merged;
}
function nodesToString(children, merged, i18n, i18nKey) {
  closure_0 = merged;
  closure_1 = i18n;
  closure_2 = i18nKey;
  if (children) {
    c3 = "";
    if (merged != null) {
      if (merged.transSupportBasicHtmlNodes) {
        let prop = merged.transKeepBasicHtmlNodesFor;
        if (prop == null) {
          prop = [];
        }
        let items = prop;
      }
      const item = arr.forEach((format) => {
        if (merged(i18n[6]).isString(format)) {
          const _HermesInternal7 = HermesInternal;
          closure_3 = closure_3 + "" + format;
        } else if (closure_1_5.isValidElement(format)) {
          ({ props, type } = format);
          const _Object2 = Object;
          const length = Object.keys(props).length;
          const tmp29 = items.indexOf(type) > -1;
          const children = props.children;
          if (!children) {
            if (tmp29) {
              if (!length) {
                const _HermesInternal3 = HermesInternal;
                closure_3 = closure_3 + "<" + type + "/>";
              }
            }
          }
          if (children) {
            if (!props.i18nIsDynamicList) {
              if (tmp29) {
                if (length === 1) {
                  if (merged(i18n[6]).isString(children)) {
                    const _HermesInternal5 = HermesInternal;
                    closure_3 = closure_3 + "<" + type + ">" + children + "</" + type + ">";
                  }
                }
              }
              const _HermesInternal4 = HermesInternal;
              closure_3 = closure_3 + "<" + arg1 + ">" + closure_1_14(children, merged, i18n, closure_2) + "</" + arg1 + ">";
            }
          }
          const _HermesInternal6 = HermesInternal;
          closure_3 = closure_3 + "<" + arg1 + "></" + arg1 + ">";
        } else if (format === null) {
          let obj = { i18nKey: closure_2 };
          merged(i18n[6]).warn(i18n, "TRANS_NULL_VALUE", "Passed in a null value as child", obj);
        } else if (merged(i18n[6]).isObject(format)) {
          format = format.format;
          const _Object = Object;
          const keys = Object.keys(items.default(format, closure_1_7));
          if (keys.length === 1) {
            const first = keys[0];
            if (format) {
              const _HermesInternal = HermesInternal;
              let combined = "" + first + ", " + format;
            } else {
              combined = first;
            }
            const _HermesInternal2 = HermesInternal;
            closure_3 = closure_3 + "{{" + combined + "}}";
          } else {
            obj = { i18nKey: closure_2, child: format };
            merged(i18n[6]).warn(i18n, "TRANS_INVALID_OBJ", "Invalid child - Object should only have keys {{ value, format }} (format is optional).", obj);
          }
        } else {
          obj = { i18nKey: closure_2, child: format };
          merged(i18n[6]).warn(i18n, "TRANS_INVALID_VAR", "Passed in a variable like {number} - pass variables for interpolation as full objects like {{number}}.", obj);
        }
      });
      return c3;
    }
    items = [];
    arr = getAsArray(children);
  } else {
    return "";
  }
}
function renderNodes(items3, replaced, arg2, transKeepBasicHtmlNodesFor) {
  closure_0 = items3;
  closure_1 = arg2;
  closure_2 = transKeepBasicHtmlNodesFor;
  closure_3 = arg5;
  if (replaced === "") {
    return [];
  } else {
    const arr2 = transKeepBasicHtmlNodesFor.transKeepBasicHtmlNodesFor || [];
    let isMatch = replaced;
    if (replaced) {
      const _RegExp = RegExp;
      const mapped = arr2.map((arg0) => "<" + arg0);
      const regExp = new RegExp(mapped.join("|"));
      isMatch = regExp.test(replaced);
    }
    if (!items3) {
      if (!isMatch) {
        if (!arg5) {
          let items = [replaced];
          return items;
        }
      }
    }
    let obj = {};
    function getData(items3) {
      const item = closure_1_12(items3).forEach((ItemSeparatorComponent) => {
        if (!callback(523).isString(ItemSeparatorComponent)) {
          if (renderInner(ItemSeparatorComponent)) {
            closure_1_7(pushTranslatedJSX(ItemSeparatorComponent));
          } else if (callback(523).isObject(ItemSeparatorComponent)) {
            if (!isMatch.isValidElement(ItemSeparatorComponent)) {
              const _Object = Object;
              const merged = Object.assign(closure_1_6, ItemSeparatorComponent);
            }
          }
        }
      });
    }
    const data = getData(items3);
    let _HermesInternal = HermesInternal;
    let _Object = Object;
    const parsed = obj.default.parse("<0>" + replaced + "</0>");
    closure_8 = Object.assign({}, obj, arg4);
    function renderInner(props, children) {
      const tmp = pushTranslatedJSX(props);
      const arr = mapAST(tmp, children.children, arg2);
      if (!mapAST(tmp)) {
        props = props.props;
        let tmp3 = arr;
        if (props != null) {
          tmp3 = arr;
        }
        return tmp3;
      }
      tmp3 = tmp;
    }
    function pushTranslatedJSX(dummy, arg1, arr) {
      closure_0 = arg1;
      closure_1 = arg3;
      closure_2 = arg4;
      if (dummy.dummy) {
        dummy.children = arg1;
        obj = { key: arg3 };
        let tmp5;
        if (!arg4) {
          tmp5 = arg1;
        }
        arr.push(isMatch.cloneElement(dummy, obj, tmp5));
      } else {
        const push = arr.push;
        const Children = isMatch.Children;
        const items = [dummy];
        push.apply(arr, closure_3.default(Children.map(items, (props) => {
          const merged = Object.assign({}, props.props);
          delete tmp.i18nIsDynamicList;
          obj = { key: closure_1 };
          let ref = props.props.ref;
          if (ref == null) {
            ref = props.ref;
          }
          obj.ref = ref;
          let tmp4 = null;
          const merged1 = Object.assign({}, merged, obj);
          if (!closure_2) {
            tmp4 = closure_0;
          }
          return isMatch.createElement(props.type, merged1, tmp4);
        })));
      }
    }
    function mapAST(items2, children, arg2) {
      closure_0 = arg2;
      closure_1 = closure_1_12(items2);
      return closure_1_12(children).reduce((arr, children) => {
        children = children.children;
        let content;
        if (children != null) {
          const first = children[0];
          if (first != null) {
            content = first.content;
          }
        }
        if (content) {
          const interpolator = closure_1.services.interpolator;
          content = interpolator.interpolate(children.children[0].content, closure_1_8, closure_1.language);
        }
        if (children.type === "tag") {
          const _parseInt = parseInt;
          const tmp17 = closure_1[parseInt(undefined, children.name, 10)];
          obj = tmp17;
          if (lib.length === 1) {
            obj = tmp17;
            if (!tmp17) {
              obj = lib[0][children.name];
            }
          }
          if (!obj) {
            obj = {};
          }
          const _Object = Object;
          let tmp20 = obj;
          if (Object.keys(children.attrs).length !== 0) {
            obj = { props: children.attrs };
            tmp20 = closure_2_13(obj, obj);
          }
          const isValidElementResult = isMatch.isValidElement(tmp20);
          let tmp25 = isValidElementResult;
          if (isValidElementResult) {
            tmp25 = renderInner(children, true);
          }
          if (tmp25) {
            tmp25 = !children.voidElement;
          }
          let dummy = closure_1_5;
          if (closure_1_5) {
            dummy = lib(closure_1[6]).isObject(tmp20);
          }
          if (dummy) {
            dummy = tmp20.dummy;
          }
          if (dummy) {
            dummy = !isValidElementResult;
          }
          let isObjectResult = lib(closure_1[6]).isObject(lib);
          if (isObjectResult) {
            const _Object2 = Object;
            isObjectResult = hasOwnProperty.call(lib, children.name);
          }
          if (lib(closure_1[6]).isString(tmp20)) {
            const interpolator4 = closure_1.services.interpolator;
            arr.push(interpolator4.interpolate(tmp20, closure_1_8, closure_1.language));
          } else {
            if (!renderInner(tmp20)) {
              if (!tmp25) {
                if (dummy) {
                  closure_1_10(tmp24, closure_1_11(closure_1, children.children, lib), arr, arg2);
                } else {
                  const _Number = Number;
                  const _parseFloat = parseFloat;
                  if (Number.isNaN(parseFloat(children.name))) {
                    if (isObjectResult) {
                      closure_1_10(tmp24, closure_1_9(tmp20, children, lib), arr, arg2, children.voidElement);
                    } else {
                      if (closure_1_2.transSupportBasicHtmlNodes) {
                        if (closure_1_4.indexOf(children.name) > -1) {
                          if (children.voidElement) {
                            const obj1 = {};
                            const _HermesInternal5 = HermesInternal;
                            obj1.key = "" + children.name + "-" + arg2;
                            arr.push(isMatch.createElement(children.name, {}));
                          } else {
                            const obj2 = {};
                            const _HermesInternal4 = HermesInternal;
                            obj2.key = "" + children.name + "-" + arg2;
                            arr.push(isMatch.createElement(children.name, {}, closure_1_11(closure_1, children.children, lib)));
                            const tmp59 = closure_1_11(closure_1, children.children, lib);
                          }
                        }
                      }
                      if (children.voidElement) {
                        const _HermesInternal3 = HermesInternal;
                        arr.push("<" + children.name + " />");
                      } else {
                        const _HermesInternal2 = HermesInternal;
                        arr.push("<" + children.name + ">" + closure_1_11(closure_1, children.children, lib) + "</" + children.name + ">");
                      }
                    }
                  } else {
                    if (lib(closure_1[6]).isObject(tmp20)) {
                      if (!isValidElementResult) {
                        let tmp39 = null;
                        if (children.children[0]) {
                          tmp39 = content;
                        }
                        if (tmp39) {
                          arr.push(tmp39);
                        }
                      }
                    }
                    let tmp42 = children.children.length !== 1;
                    if (!tmp42) {
                      tmp42 = !content;
                    }
                    closure_1_10(tmp24, content, arr, arg2, tmp42);
                    const tmp41 = closure_1_10;
                  }
                }
              }
            }
            closure_1_10(tmp24, closure_1_9(tmp20, children, lib), arr, arg2);
          }
        } else if (children.type === "text") {
          const transWrapTextNodes = closure_1_2.transWrapTextNodes;
          if (closure_1_3) {
            const interpolator3 = closure_1.services.interpolator;
            let unescapeResult = closure_1_2.unescape(interpolator3.interpolate(children.content, closure_1_8, closure_1.language));
          } else {
            const interpolator2 = closure_1.services.interpolator;
            unescapeResult = interpolator2.interpolate(children.content, closure_1_8, closure_1.language);
          }
          const push = arr.push;
          if (transWrapTextNodes) {
            obj = {};
            const _HermesInternal = HermesInternal;
            obj.key = "" + children.name + "-" + arg2;
            push(<transWrapTextNodes>{unescapeResult}</transWrapTextNodes>);
          } else {
            push(unescapeResult);
          }
        }
        return arr;
      }, []);
    }
    obj = { dummy: true };
    let items1 = items3;
    if (!items3) {
      items1 = [];
    }
    obj.children = items1;
    const items2 = [obj];
    if (!items3) {
      items3 = [];
    }
    return pushTranslatedJSX(mapAST(items2, parsed, getAsArray(items3))[0]);
  }
}
function fixComponentProps(key, arg1, arr) {
  const cloneElementResult = React.cloneElement(key, { key: key.key || arg1 });
  require = cloneElementResult;
  if (cloneElementResult.props) {
    if (cloneElementResult.props.children) {
      const _HermesInternal = HermesInternal;
      if (arr.indexOf("" + arg1 + "/>") < 0) {
        const _HermesInternal2 = HermesInternal;
      }
      const obj = { key: tmp };
      return React.createElement(function Componentized() {
        return <>{closure_0}</>;
      }, { key: tmp });
    }
  }
  return cloneElementResult;
}
function generateArrayComponents(arr, defaults) {
  closure_0 = defaults;
  return arr.map((arg0, arg1) => closure_1_16(arg0, arg1, closure_0));
}
function generateObjectComponents(components, defaults) {
  closure_0 = components;
  closure_1 = defaults;
  const obj = {};
  const keys = Object.keys(components);
  const item = keys.forEach((arg0) => {
    const merged = Object.assign(obj, obj.default({}, arg0, closure_1_16(table[arg0], arg0, closure_1)));
  });
  return obj;
}
function generateComponents(components, defaults, i18n, i18nKey) {
  if (components) {
    const _Array = Array;
    if (Array.isArray(components)) {
      return generateArrayComponents(components, defaults);
    } else if (warn.isObject(components)) {
      return generateObjectComponents(components, defaults);
    } else {
      const obj = { i18nKey };
      warn.warnOnce(i18n, "TRANS_INVALID_COMPONENTS", "<Trans /> \"components\" prop expects an object or array", obj);
      return null;
    }
  } else {
    return null;
  }
}

export function Trans(arg0) {
  ({ children, count, parent, i18nKey, context, tOptions } = arg0);
  if (tOptions === undefined) {
    tOptions = {};
  }
  ({ values, defaults, components, ns, i18n, t, shouldUnescape } = arg0);
  if (!i18n) {
    i18n = setI18n.getI18n();
  }
  if (i18n) {
    if (!t) {
      const t2 = i18n.t;
      t = t2.bind(i18n);
    }
    if (!t) {
      t = (i18nKey, merged2) => i18nKey;
    }
    const options = i18n.options;
    let react;
    defaults = getDefaults.getDefaults();
    if (options != null) {
      react = options.react;
    }
    const merged = Object.assign({}, defaults, react);
    if (!ns) {
      ns = t.ns;
    }
    if (!ns) {
      const options2 = i18n.options;
      let defaultNS;
      if (options2 != null) {
        defaultNS = options2.defaultNS;
      }
      ns = defaultNS;
    }
    if (warn.isString(ns)) {
      const items = [ns];
      let items1 = items;
    } else {
      items1 = ns;
      if (!ns) {
        items1 = ["translation"];
      }
    }
    let tmp25 = nodesToString(children, merged, i18n, i18nKey);
    if (!defaults) {
      defaults = tmp25;
    }
    if (!defaults) {
      defaults = merged.transEmptyNodeValue;
    }
    if (!defaults) {
      defaults = i18nKey;
    }
    const hashTransKey = merged.hashTransKey;
    if (i18nKey) {
      const options3 = i18n.options;
      let tmp29 = values;
      if (options3 != null) {
        const interpolation2 = options3.interpolation;
        tmp29 = values;
        if (interpolation2 != null) {
          tmp29 = values;
          if (interpolation2.defaultVariables) {
            if (!values) {
              const _Object2 = Object;
              let merged1 = Object.assign({}, i18n.options.interpolation.defaultVariables);
            } else {
              const _Object = Object;
            }
            const _Object3 = Object;
            merged1 = Object.assign({}, values, i18n.options.interpolation.defaultVariables);
          }
        }
      }
      if (!tmp29) {
        if (count === undefined) {
          if (children) {
            let interpolation = {};
            const _Object4 = Object;
            interpolation.interpolation = Object.assign({}, tOptions.interpolation, { prefix: "#$?", suffix: "?$#" });
          }
          const _Object5 = Object;
          const obj = {};
          if (!context) {
            context = tOptions.context;
          }
          obj.context = context;
          obj.count = count;
          const obj1 = { defaultValue: defaults, ns: items1 };
          const merged2 = Object.assign({}, tOptions, obj, tmp29, interpolation, obj1);
          if (i18nKey) {
            defaults = t(i18nKey, merged2);
          }
          let tmp44 = generateComponents(components, defaults, i18n, i18nKey);
          if (!tmp44) {
            tmp44 = children;
          }
          const tmp45Result = renderNodes(tmp44, defaults, i18n, merged, merged2, shouldUnescape);
          if (parent == null) {
            parent = merged.defaultTransParent;
          }
          let element = tmp45Result;
          if (parent) {
            element = <parent {......defaultResult}>{tmp45Result}</parent>;
          }
          return element;
        } else {
          const options4 = i18n.options;
          if (options4 != null) {
            interpolation = options4.interpolation;
          }
        }
      }
      interpolation = tOptions.interpolation;
    } else if (hashTransKey) {
      if (!tmp25) {
        tmp25 = defaults;
      }
      let hashTransKeyResult = hashTransKey(tmp25);
    } else {
      hashTransKeyResult = tmp25;
      if (!tmp25) {
        hashTransKeyResult = defaults;
      }
    }
  } else {
    interpolation = { i18nKey };
    warn.warnOnce(i18n, "NO_I18NEXT_INSTANCE", "Trans: You need to pass in an i18next instance using i18nextReactModule", interpolation);
    return children;
  }
}
export { nodesToString };
