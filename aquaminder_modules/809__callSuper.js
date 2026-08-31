// Module ID: 809
// Function ID: 8463
// Name: _callSuper
// Dependencies: [1, 203, 12, 13, 23, 25, 28, 119, 2, 692, 810, 251]

// Module 809 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _inherits from "_inherits" /* 28 */;
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import emptyFunction2 from "emptyFunction" /* 692 */;
import _callSuper2 from "_callSuper" /* 810 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_8 from "jsxProd" /* 251 */;

function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const defaultResult = closure_4.default(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(defaultResult, items, closure_4.default(arg0).constructor);
  } else {
    constructResult = defaultResult.apply(arg0, items);
  }
  return closure_3.default(arg0, constructResult);
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
let closure_0 = module_1(_objectWithoutProperties);
let closure_1 = module_1(_classCallCheck);
let closure_2 = module_1(_defineProperties);
let closure_3 = module_1(_possibleConstructorReturn);
let closure_4 = module_1(_getPrototypeOf);
let closure_5 = module_1(_inherits);
const getIteratorFn = _interopRequireWildcard(getIteratorFn2);
const emptyFunction = module_1(emptyFunction2);
_callSuper = module_1(_callSuper2);
let closure_9 = ["pickerData", "style"];
const Item = _callSuper.default.Item;
const StyleSheet = get_registerCallableModule.StyleSheet;
const styles = StyleSheet.create({ picker: { backgroundColor: "#d3d3d3", height: 220 } });
const tmp7 = ((Component) => {
  class Picker {
    constructor() {
      defaultResult = closure_1_1.default(this, closure_0);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_1_13(this, closure_0, items.concat(array));
      closure_0 = tmp3;
      tmp3.state = { selectedValue: tmp3.props.selectedValue };
      tmp3.handleChange = (selectedValue) => {
        state.setState({ selectedValue });
        const props = state.props;
        props.onValueChange(selectedValue);
      };
      tmp3.validateDeprecateProps = () => {
        let str = "curtain";
        if (arguments.length > 0) {
          str = "curtain";
          if (arguments[0] !== undefined) {
            str = arguments[0];
          }
        }
        let str2 = "";
        if (arguments.length > 1) {
          str2 = "";
          if (arguments[1] !== undefined) {
            str2 = arguments[1];
          }
        }
        if (state.props) {
          if (typeof state.props[str] !== "undefined") {
            state.props[str] = undefined;
            if (str2 === "") {
              const _console2 = console;
              const _HermesInternal2 = HermesInternal;
              console.warn("react-native-wheel-pick : \"" + str + "\" Prop was deprecated. Please remove it for improve native performance.");
            } else {
              const _console = console;
              const _HermesInternal = HermesInternal;
              console.warn("react-native-wheel-pick : \"" + str + "\" Prop was deprecated. Please use \"" + str2 + "\" instead.");
            }
          }
        }
      };
      return tmp3;
    }
  }
  closure_5.default(Picker, Component);
  let obj = {
    key: "componentDidUpdate",
    value: function componentDidUpdate(selectedValue) {
      const self = this;
      if (selectedValue.selectedValue !== this.props.selectedValue) {
        const obj = { selectedValue: self.props.selectedValue };
        self.setState(obj);
      }
    }
  };
  let items = [obj, , ];
  obj = {
    key: "render",
    value: function render() {
      const self = this;
      const props = this.props;
      const pickerData = props.pickerData;
      let defaultResult = Picker.default(props, closure_1_9);
      Picker = defaultResult;
      if (closure_1_6.Platform.OS === "android") {
        const result = self.validateDeprecateProps("atmospheric");
        const result1 = self.validateDeprecateProps("curved");
        const result2 = self.validateDeprecateProps("visibleItemCount");
        const result3 = self.validateDeprecateProps("itemSpace");
        const result4 = self.validateDeprecateProps("curtain", "isShowSelectBackground");
        const result5 = self.validateDeprecateProps("curtainColor", "selectBackgroundColor");
        const result6 = self.validateDeprecateProps("indicator", "isShowSelectLine");
        const result7 = self.validateDeprecateProps("indicatorColor", "selectLineColor");
        const result8 = self.validateDeprecateProps("indicatorSize", "selectLineSize");
      }
      const merged = Object.assign({}, defaultResult);
      if (closure_1_6.Platform.OS === "web") {
        ({ textColor: tmp3.textcolor, textSize: tmp3.textsize, selectTextColor: tmp3.selecttextcolor, isShowSelectBackground } = merged);
        merged.isshowselectbackground = isShowSelectBackground.toString();
        ({ selectBackgroundColor: tmp3.selectbackgroundcolor, isShowSelectLine } = merged);
        merged.isshowselectline = isShowSelectLine.toString();
        ({ selectLineColor: tmp3.selectlinecolor, selectLineSize: tmp3.selectlinesize } = merged);
        delete tmp.textColor;
        delete tmp.textSize;
        delete tmp.selectTextColor;
        delete tmp.isShowSelectBackground;
        delete tmp.selectBackgroundColor;
        delete tmp.isShowSelectLine;
        delete tmp.selectLineColor;
        delete tmp.selectLineSize;
      }
      if (closure_1_6.Platform.OS === "web") {
        defaultResult = merged;
      }
      const items = [closure_1_11.picker, props.style];
      return <closure_1_7.default {...Object.assign({}, defaultResult, {
        style: items,
        selectedValue: self.state.selectedValue,
        onValueChange: self.handleChange,
        children: pickerData.map((value) => {
          const obj = {};
          if (typeof value.value !== "undefined") {
            let str = value.value;
          } else {
            str = value.toString();
          }
          obj.value = str;
          if (typeof value.label !== "undefined") {
            let label = value.label;
          } else {
            label = value.toString();
          }
          obj.label = label;
          if (closure_2_6.Platform.OS === "web") {
            let textColor = merged.textcolor;
          } else {
            textColor = defaultResult.textColor;
          }
          obj.color = textColor;
          return <closure_2_10 key={arg1} />;
        })
      })} />;
    }
  };
  items[1] = obj;
  obj = {
    key: "getValue",
    value: function getValue() {
      return this.state.selectedValue;
    }
  };
  items[2] = obj;
  return closure_2.default(Picker, items);
})(getIteratorFn.Component);
tmp7.propTypes = { textSize: emptyFunction.default.number, onValueChange: emptyFunction.default.func.isRequired, pickerData: emptyFunction.default.array.isRequired, selectedValue: emptyFunction.default.any };
let obj = { textColor: "#333", textSize: 26, itemStyle: null, style: {}, selectedValue: "" };
tmp7.defaultProps = obj;

export default tmp7;
