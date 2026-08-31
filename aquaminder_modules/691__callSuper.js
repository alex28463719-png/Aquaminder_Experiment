// Module ID: 691
// Function ID: 7881
// Name: _callSuper
// Dependencies: [1, 6, 363, 203, 12, 13, 23, 25, 28, 119, 692, 2, 695, 697, 698, 696, 251]
// Exports: default

// Module 691 (_callSuper)
import _toConsumableArray from "_toConsumableArray" /* 6 */;
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _inherits from "_inherits" /* 28 */;
import getIteratorFn from "getIteratorFn" /* 119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 363 */;
import emptyFunction from "emptyFunction" /* 692 */;
import ensureNativeModuleAvailable from "ensureNativeModuleAvailable" /* 695 */;
import RNVectorIcons from "RNVectorIcons" /* 696 */;
import createIconSourceCache from "createIconSourceCache" /* 697 */;
import _callSuper2 from "_callSuper" /* 698 */;
import module_1 from "module_1" /* 1 */;
import closure_10 from "get registerCallableModule" /* 2 */;
import closure_15 from "jsxProd" /* 251 */;

function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const defaultResult = closure_6.default(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(defaultResult, items, closure_6.default(arg0).constructor);
  } else {
    constructResult = defaultResult.apply(arg0, items);
  }
  return closure_5.default(arg0, constructResult);
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
let closure_0 = module_1(_toConsumableArray);
let closure_1 = module_1(asyncGeneratorStep);
let closure_2 = module_1(_objectWithoutProperties);
let closure_3 = module_1(_classCallCheck);
let closure_4 = module_1(_defineProperties);
let closure_5 = module_1(_possibleConstructorReturn);
let closure_6 = module_1(_getPrototypeOf);
let closure_7 = module_1(_inherits);
let closure_8 = _interopRequireWildcard(getIteratorFn);
let closure_9 = module_1(emptyFunction);
let closure_11 = module_1(ensureNativeModuleAvailable);
let closure_12 = module_1(createIconSourceCache);
let closure_13 = module_1(_callSuper2);
let closure_14 = module_1(RNVectorIcons);
let closure_16 = ["name", "size", "color", "style", "children"];
let c17 = 12;
const black = "black";

export default function createIconSet(arg0, arg1, str) {
  closure_0 = arg0;
  closure_1 = str;
  closure_2 = arg3;
  function resolveGlyph(arg0) {
    if (typeof table[arg0] || "?" === "number") {
      const _String = String;
      return String.fromCodePoint(tmp);
    } else {
      return tmp;
    }
  }
  async function _getImageSource(arg0, arg1) {
    if (arguments.length > 1) {
      if (arguments[1] !== undefined) {
        let tmp2 = arguments[1];
      }
      if (arguments.length > 2) {
        if (arguments[2] !== undefined) {
          let tmp4 = arguments[2];
        }
        closure_3_11.default();
        const tmp9 = closure_2_5(arg0);
        const processColorResult = closure_3_10.processColor(tmp4);
        const _HermesInternal = HermesInternal;
        const combined = "" + tmp9 + ":" + tmp3 + ":" + processColorResult;
        if (closure_2_4.has(combined)) {
          return closure_2_4.get(combined);
        } else {
          try {
            const obj = { uri: yield closure_3_14.default.getImageForFont(closure_2_3, tmp10, tmp3, tmp13) };
            const PixelRatio = closure_3_10.PixelRatio;
            obj.scale = PixelRatio.get();
            closure_2_4.setValue(tmp19, obj);
            return obj;
          } catch (tmp31) {
            closure_2_4.setError(tmp, tmp31);
            throw tmp31;
          }
        }
        tmp10 = tmp9;
        tmp13 = processColorResult;
        tmp19 = combined;
      }
      tmp4 = closure_3_18;
    }
    tmp2 = closure_3_17;
  }
  async function _loadFont() {
    if (arguments.length > 0) {
      if (arguments[0] !== undefined) {
        str = arguments[0];
      }
      if (closure_3_10.Platform.OS === "ios") {
        closure_3_11.default();
        if (str) {
          const loadFontWithFileName = closure_3_14.default.loadFontWithFileName;
          yield loadFontWithFileName.apply(closure_3_14.default, closure_0.default(str.split(".")));
        } else {
          const _Error = Error;
          const error = new Error("Unable to load font, because no file was specified. ");
          throw error;
        }
      }
    }
    str = closure_2_1;
  }
  let replaced = arg1;
  if (str) {
    replaced = str.replace(/\.(otf|ttf)$/, "");
  }
  Platform = Platform.Platform;
  let obj = { windows: "/Assets/" + str + "#" + arg1, android: replaced, web: replaced, default: arg1 };
  closure_3 = Platform.select(obj);
  let tmp3 = ((PureComponent) => {
    class Icon {
      constructor() {
        defaultResult = closure_3.default(this, Icon);
        return closure_2_20(this, Icon, arguments);
      }
    }
    _loadFont.default(Icon, PureComponent);
    let items = [
      {
        key: "render",
        value: function render() {
          const props = this.props;
          const name = props.name;
          ({ size, color, style, children } = props);
          const defaultResult = closure_2.default(props, closure_2_16);
          str = "";
          if (name) {
            str = Icon[name] || "?";
            const tmp3 = Icon[name] || "?";
          }
          let fromCodePointResult = str;
          if (typeof str === "number") {
            const _String = String;
            fromCodePointResult = String.fromCodePoint(str);
          }
          let obj = { fontFamily: closure_1_3, fontWeight: "normal", fontStyle: "normal" };
          const items = [{ fontSize: size, color }, style, obj, ];
          obj = closure_1_2;
          if (!closure_1_2) {
            obj = {};
          }
          items[3] = obj;
          defaultResult.style = items;
          children = [fromCodePointResult, ];
          children[1] = children;
          return <closure_2_10.Text {...Object.assign({ selectable: false }, defaultResult, { children })} />;
        }
      }
    ];
    return store.default(Icon, items);
  })(PureComponent.PureComponent);
  obj = { allowFontScaling: mod.default.bool, name: mod.default.oneOf(Object.keys(arg0)), size: mod.default.number, color: mod.default.any, children: mod.default.node, style: mod.default.any };
  tmp3.propTypes = obj;
  obj = { size: c17, allowFontScaling: false };
  tmp3.defaultProps = obj;
  closure_4 = closure_12.default();
  tmp3.Button = closure_13.default(tmp3);
  tmp3.getImageSource = function getImageSource(arg0) {
    return _getImageSource(...arguments);
  };
  tmp3.getImageSourceSync = function getImageSourceSync(arg0) {
    if (arguments.length > 1) {
      if (arguments[1] !== undefined) {
        let tmp2 = arguments[1];
      }
      if (arguments.length > 2) {
        if (arguments[2] !== undefined) {
          let tmp4 = arguments[2];
        }
        closure_1_11.default();
        const tmp9 = resolveGlyph(arg0);
        const processColorResult = closure_1_10.processColor(tmp4);
        const _HermesInternal = HermesInternal;
        const combined = "" + tmp9 + ":" + tmp3 + ":" + processColorResult;
        if (store.has(combined)) {
          return store.get(combined);
        } else {
          try {
            const obj = { uri: closure_1_14.default.getImageForFontSync(closure_3, tmp10, tmp3, tmp13) };
            const PixelRatio = closure_1_10.PixelRatio;
            obj.scale = PixelRatio.get();
            store.setValue(tmp19, obj);
            return obj;
          } catch (tmp31) {
            store.setError(tmp, tmp31);
            throw tmp31;
          }
        }
        tmp10 = tmp9;
        tmp13 = processColorResult;
        tmp19 = combined;
      }
      tmp4 = closure_1_18;
    }
    tmp2 = closure_1_17;
  };
  tmp3.loadFont = function loadFont() {
    return _loadFont(...arguments);
  };
  tmp3.hasIcon = function hasIcon(key10018) {
    return hasOwnProperty.call(closure_0, key10018);
  };
  tmp3.getRawGlyphMap = function getRawGlyphMap() {
    return closure_0;
  };
  tmp3.getFontFamily = function getFontFamily() {
    return closure_3;
  };
  return tmp3;
};
export const DEFAULT_ICON_SIZE = 12;
export const DEFAULT_ICON_COLOR = "black";
