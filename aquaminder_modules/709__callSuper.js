// Module ID: 709
// Function ID: 7954
// Name: _callSuper
// Dependencies: [1, 12, 13, 23, 25, 28, 99, 119, 692, 691, 251]
// Exports: default

// Module 709 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _inherits from "_inherits" /* 28 */;
import _defineProperty from "_defineProperty" /* 99 */;
import getIteratorFn from "getIteratorFn" /* 119 */;
import _callSuper2 from "_callSuper" /* 691 */;
import emptyFunction from "emptyFunction" /* 692 */;
import module_1 from "module_1" /* 1 */;
import closure_9 from "jsxProd" /* 251 */;

function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const defaultResult = closure_3.default(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(defaultResult, items, closure_3.default(arg0).constructor);
  } else {
    constructResult = defaultResult.apply(arg0, items);
  }
  return closure_2.default(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
let closure_0 = module_1(_classCallCheck);
let closure_1 = module_1(_defineProperties);
let closure_2 = module_1(_possibleConstructorReturn);
let closure_3 = module_1(_getPrototypeOf);
let closure_4 = module_1(_inherits);
let closure_5 = module_1(_defineProperty);
let closure_6 = _interopRequireWildcard(getIteratorFn);
let closure_7 = module_1(emptyFunction);
let closure_8 = _interopRequireWildcard(_callSuper2);

export default function createMultiStyleIconSet(arg0) {
  closure_0 = arg0;
  function styleFromProps(getIconSetForProps) {
    closure_0 = getIconSetForProps;
    keys = Object.keys(getIconSetForProps);
    return keys.reduce((arg0, arg1) => {
      let tmp = arg0;
      if (closure_1_1.indexOf(arg1) !== -1) {
        tmp = arg0;
        if (getIconSetForProps[arg1] === true) {
          tmp = arg1;
        }
      }
      return tmp;
    }, closure_2.defaultStyle);
  }
  function getIconSetForProps(getIconSetForProps) {
    const name = getIconSetForProps.name;
    const tmp = styleFromProps(getIconSetForProps);
    if (closure_2.glyphValidator(name, tmp)) {
      return dependencyMap[tmp];
    } else {
      const fallbackFamilyResult = closure_2.fallbackFamily(name);
      if (keys.indexOf(fallbackFamilyResult) === -1) {
        return closure_2.defaultStyle;
      } else {
        return dependencyMap[fallbackFamilyResult];
      }
    }
  }
  function selectIconClass(arg0, arg1) {
    let tmp = arg0;
    if (arg1.length > 0) {
      tmp = arg0[arg1];
    }
    return tmp;
  }
  function reduceProps(arg0) {
    closure_0 = arg0;
    keys = Object.keys(arg0);
    return keys.reduce((arg0, arg1) => {
      if (closure_1_1.indexOf(arg1) === -1) {
        arg0[arg1] = table[arg1];
      }
      return arg0;
    }, {});
  }
  function getStyledIconSet(defaultStyle, arg1) {
    let str = "";
    if (arguments.length > 1) {
      str = "";
      if (arguments[1] !== undefined) {
        str = arguments[1];
      }
    }
    if (keys.indexOf(defaultStyle) === -1) {
      return dependencyMap[closure_2.defaultStyle];
    } else {
      if (str) {
        const obj = { name: str };
        let tmp4 = getIconSetForProps(getIconSetForProps.default(obj, defaultStyle, true));
      } else {
        tmp4 = dependencyMap[styleFromProps(undefined, getIconSetForProps.default(undefined, {}, defaultStyle, true))];
      }
      return tmp4;
    }
  }
  function createStyledIconClass(Button) {
    let str = "";
    if (arguments.length > 0) {
      str = "";
      if (arguments[0] !== undefined) {
        str = arguments[0];
      }
    }
    const tmp = ((PureComponent) => {
      class IconClass {
        constructor() {
          defaultResult = closure_0.default(this, IconClass);
          return closure_3_11(this, IconClass, arguments);
        }
      }
      styleFromProps.default(IconClass, PureComponent);
      const items = [
        {
          key: "render",
          value: function render() {
            return closure_3_9.jsx(closure_2_6(closure_2_5(this.props), IconClass), Object.assign({}, closure_2_7(this.props)));
          }
        }
      ];
      return keys.default(IconClass, items);
    })(selectIconClass.PureComponent);
    tmp.propTypes = keys.reduce((arg0, arg1) => {
      arg0[arg1] = reduceProps.default.bool;
      return arg0;
    }, {});
    tmp.defaultProps = keys.reduce((arg0, arg1) => {
      arg0[arg1] = false;
      return arg0;
    }, {});
    return tmp;
  }
  if (arguments.length > 1) {
    const _Object = Object;
    let keys = Object.keys(arg0);
    if (keys.length === 0) {
      const _Error = Error;
      const error = new Error("You need to add at least one style");
      throw error;
    } else {
      const _Object2 = Object;
      let obj = {
        defaultStyle: keys[0],
        fallbackFamily() {
              return keys[0];
            },
        glyphValidator() {
              return true;
            }
      };
      closure_2 = Object.assign(obj, {});
      closure_3 = keys.reduce((arg0, arg1) => {
        let glyphMap = tmp.glyphMap;
        if (!glyphMap) {
          glyphMap = {};
        }
        arg0[arg1] = getStyledIconSet.default(glyphMap, table[arg1].fontFamily || "", table[arg1].fontFile || "", table[arg1].fontStyle || {});
        return arg0;
      }, {});
      const styledIconClass = createStyledIconClass();
      styledIconClass.Button = createStyledIconClass("Button");
      styledIconClass.getStyledIconSet = getStyledIconSet;
      styledIconClass.getImageSource = function getImageSource(arg0) {
        if (arguments.length > 1) {
          if (arguments[1] !== undefined) {
            let DEFAULT_ICON_SIZE = arguments[1];
          }
          if (arguments.length > 2) {
            if (arguments[2] !== undefined) {
              let DEFAULT_ICON_COLOR = arguments[2];
            }
            if (arguments.length > 3) {
              if (arguments[3] !== undefined) {
                let defaultStyle = arguments[3];
              }
              return getStyledIconSet(defaultStyle, arg0).getImageSource(arg0, DEFAULT_ICON_SIZE, DEFAULT_ICON_COLOR);
            }
            defaultStyle = closure_2.defaultStyle;
          }
          DEFAULT_ICON_COLOR = getStyledIconSet.DEFAULT_ICON_COLOR;
        }
        DEFAULT_ICON_SIZE = getStyledIconSet.DEFAULT_ICON_SIZE;
      };
      styledIconClass.getImageSourceSync = function getImageSourceSync(arg0) {
        if (arguments.length > 1) {
          if (arguments[1] !== undefined) {
            let DEFAULT_ICON_SIZE = arguments[1];
          }
          if (arguments.length > 2) {
            if (arguments[2] !== undefined) {
              let DEFAULT_ICON_COLOR = arguments[2];
            }
            if (arguments.length > 3) {
              if (arguments[3] !== undefined) {
                let defaultStyle = arguments[3];
              }
              return getStyledIconSet(defaultStyle, arg0).getImageSourceSync(arg0, DEFAULT_ICON_SIZE, DEFAULT_ICON_COLOR);
            }
            defaultStyle = closure_2.defaultStyle;
          }
          DEFAULT_ICON_COLOR = getStyledIconSet.DEFAULT_ICON_COLOR;
        }
        DEFAULT_ICON_SIZE = getStyledIconSet.DEFAULT_ICON_SIZE;
      };
      styledIconClass.getFontFamily = function getFontFamily() {
        if (arguments.length > 0) {
          if (arguments[0] !== undefined) {
            let defaultStyle = arguments[0];
          }
          return getStyledIconSet(defaultStyle).getFontFamily();
        }
        defaultStyle = closure_2.defaultStyle;
      };
      styledIconClass.getRawGlyphMap = function getRawGlyphMap() {
        if (arguments.length > 0) {
          if (arguments[0] !== undefined) {
            let defaultStyle = arguments[0];
          }
          return getStyledIconSet(defaultStyle).getRawGlyphMap();
        }
        defaultStyle = closure_2.defaultStyle;
      };
      styledIconClass.hasIcon = function hasIcon(arg0) {
        if (arguments.length > 1) {
          if (arguments[1] !== undefined) {
            let defaultStyle = arguments[1];
          }
          return closure_2.glyphValidator(arg0, defaultStyle);
        }
        defaultStyle = closure_2.defaultStyle;
      };
      return styledIconClass;
    }
  }
};
