// Module ID: 698
// Function ID: 7922
// Name: _callSuper
// Dependencies: [1, 203, 12, 13, 23, 25, 28, 119, 692, 2, 251, 699]
// Exports: default

// Module 698 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _inherits from "_inherits" /* 28 */;
import getIteratorFn from "getIteratorFn" /* 119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import emptyFunction from "emptyFunction" /* 692 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_11 from "jsxProd" /* 251 */;

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
let closure_2 = module_1(_objectWithoutProperties);
let closure_3 = module_1(_classCallCheck);
let closure_4 = module_1(_defineProperties);
let closure_5 = module_1(_possibleConstructorReturn);
let closure_6 = module_1(_getPrototypeOf);
let closure_7 = module_1(_inherits);
let closure_8 = _interopRequireWildcard(getIteratorFn);
let closure_9 = module_1(emptyFunction);
let closure_12 = ["style", "iconStyle", "children"];
const StyleSheet = get_registerCallableModule.StyleSheet;
const styles = StyleSheet.create({ container: { flexDirection: "row", justifyContent: "flex-start", alignItems: "center", padding: 8 }, touchable: { overflow: "hidden" }, icon: { marginRight: 10 }, text: { fontWeight: "600", backgroundColor: "transparent" } });
let c14 = "#007AFF";
let closure_15 = ["ellipsizeMode", "numberOfLines", "textBreakStrategy", "selectable", "suppressHighlighting", "allowFontScaling", "adjustsFontSizeToFit", "minimumFontScale"];
let closure_16 = ["accessible", "accessibilityLabel", "accessibilityHint", "accessibilityComponentType", "accessibilityRole", "accessibilityStates", "accessibilityTraits", "onFocus", "onBlur", "disabled", "onPress", "onPressIn", "onPressOut", "onLayout", "onLongPress", "nativeID", "testID", "delayPressIn", "delayPressOut", "delayLongPress", "activeOpacity", "underlayColor", "selectionColor", "onShowUnderlay", "onHideUnderlay", "hasTVPreferredFocus", "tvParallaxProperties"];

export default function createIconButtonComponent(arg0) {
  closure_0 = arg0;
  const tmp = ((PureComponent) => {
    class IconButton {
      constructor() {
        defaultResult = closure_2_3.default(this, IconButton);
        return closure_2_18(this, IconButton, arguments);
      }
    }
    closure_1_7.default(IconButton, PureComponent);
    let items = [
      {
        key: "render",
        value: function render() {
          const self = this;
          const props = this.props;
          ({ iconStyle, children } = props);
          const defaultResult = closure_2_2.default(props, closure_2_12);
          const pickResult = IconButton(closure_2_1[11]).pick(defaultResult, closure_2_15, "style", "name", "size", "color");
          const pickResult1 = IconButton(closure_2_1[11]).pick(defaultResult, closure_2_16);
          const keys = Object.keys(pickResult);
          const icon = closure_2_13.icon;
          if (iconStyle) {
            const items = [icon, iconStyle];
            let tmp6 = items;
          } else {
            tmp6 = icon;
          }
          pickResult.style = tmp6;
          const omitResult = IconButton(closure_2_1[11]).omit(defaultResult, keys, Object.keys(pickResult1), "iconStyle", "borderRadius", "backgroundColor");
          const pickResult3 = IconButton(closure_2_1[11]).pick(self.props, "backgroundColor", "borderRadius");
          const style = [closure_2_13.touchable, pickResult3];
          let obj = {};
          const items2 = [closure_2_13.container, pickResult3, props.style];
          obj = {};
          const items3 = [<IconButton {...Object.assign({}, pickResult)} />, ];
          let jsxResult = children;
          if (typeof children === "string") {
            obj = {};
            const items4 = [closure_2_13.text, pickResult2];
            obj.style = items4;
            obj.selectable = false;
            obj.children = children;
            jsxResult = <closure_2_10.Text />;
          }
          items3[1] = jsxResult;
          obj.children = items3;
          obj.children = <closure_2_10.View {...Object.assign({ style: items2 }, omitResult, obj)} />;
          return <closure_2_10.TouchableHighlight {...Object.assign({ style }, pickResult1, obj)} />;
        }
      }
    ];
    return closure_1_4.default(IconButton, items);
  })(PureComponent.PureComponent);
  let obj = { backgroundColor: _default.oneOfType(items), borderRadius: mod.default.number, color: mod.default.any, size: mod.default.number, iconStyle: mod.default.any, style: mod.default.any, children: mod.default.node };
  items = [mod.default.string, mod.default.number];
  tmp.propTypes = obj;
  obj = { backgroundColor: c14, borderRadius: 5, color: "white", size: 20 };
  tmp.defaultProps = obj;
  return tmp;
};
