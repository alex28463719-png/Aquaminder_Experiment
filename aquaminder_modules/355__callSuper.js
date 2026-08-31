// Module ID: 355
// Function ID: 4440
// Name: _callSuper
// Dependencies: [1, 12, 13, 23, 25, 28, 20, 119, 2, 251, 356]

// Module 355 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import invariant from "invariant" /* 20 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _inherits from "_inherits" /* 28 */;
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_10 from "jsxProd" /* 251 */;

function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const defaultResult = closure_5.default(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(defaultResult, items, closure_5.default(arg0).constructor);
  } else {
    constructResult = defaultResult.apply(arg0, items);
  }
  return closure_4.default(arg0, constructResult);
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
let closure_2 = module_1(_classCallCheck);
let closure_3 = module_1(_defineProperties);
let closure_4 = module_1(_possibleConstructorReturn);
let closure_5 = module_1(_getPrototypeOf);
let closure_6 = module_1(_inherits);
let closure_7 = module_1(invariant);
const getIteratorFn = _interopRequireWildcard(getIteratorFn2);
const StyleSheet = get_registerCallableModule.StyleSheet;
const styles = StyleSheet.create({ row: { flexDirection: "row" }, rowReverse: { flexDirection: "row-reverse" }, columnReverse: { flexDirection: "column-reverse" } });

export default ((PureComponent) => {
  class CellRenderer {
    constructor() {
      defaultResult = closure_1_2.default(this, closure_0);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_1_13(this, closure_0, items.concat(array));
      closure_0 = tmp3;
      obj = { highlighted: false, leadingItem: tmp3.props.item };
      tmp3.state = { separatorProps: obj };
      tmp3._separators = {
        highlight() {
              const props = closure_0.props;
              const items = [, ];
              ({ cellKey: arr[0], prevCellKey: arr[1] } = closure_0.props);
              props.onUpdateSeparators(items, { highlighted: true });
            },
        unhighlight() {
              const props = closure_0.props;
              const items = [, ];
              ({ cellKey: arr[0], prevCellKey: arr[1] } = closure_0.props);
              props.onUpdateSeparators(items, { highlighted: false });
            },
        updateProps(arg0, arg1) {
              const props = closure_0.props;
              let prevCellKey = props.cellKey;
              const props2 = closure_0.props;
              if (arg0 === "leading") {
                prevCellKey = props.prevCellKey;
              }
              const items = [prevCellKey];
              props2.onUpdateSeparators(items, arg1);
            }
      };
      tmp3._onLayout = (arg0) => {
        if (closure_0.props.onCellLayout != null) {
          const props = closure_0.props;
          props.onCellLayout(arg0, closure_0.props.cellKey, closure_0.props.index);
        }
      };
      tmp3._onCellFocusCapture = (arg0) => {
        if (closure_0.props.onCellFocusCapture != null) {
          const props = closure_0.props;
          props.onCellFocusCapture(closure_0.props.cellKey);
        }
      };
      return tmp3;
    }
  }
  closure_6.default(CellRenderer, PureComponent);
  let obj = {
    key: "updateSeparatorProps",
    value: function updateSeparatorProps(closure_0) {
      this.setState((separatorProps) => ({ separatorProps: Object.assign({}, separatorProps.separatorProps, closure_0) }));
    }
  };
  let items = [obj, , , ];
  obj = {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      const props = this.props;
      props.onUnmount(this.props.cellKey);
    }
  };
  items[1] = obj;
  obj = {
    key: "_renderElement",
    value: function _renderElement(renderItem, ListItemComponent, item, index) {
      const self = this;
      if (renderItem) {
        if (ListItemComponent) {
          const _console = console;
          console.warn("VirtualizedList: Both ListItemComponent and renderItem props are present. ListItemComponent will take precedence over renderItem.");
        }
      }
      if (ListItemComponent) {
        let obj = { item, index, separators: self._separators };
        return closure_1_10.jsx(ListItemComponent, { item, index, separators: self._separators });
      } else if (renderItem) {
        obj = { item, index, separators: self._separators };
        return renderItem(obj);
      } else {
        closure_1_7.default(false, "VirtualizedList: Either ListItemComponent or renderItem props are required but none were found.");
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "render",
    value: function render() {
      const self = this;
      const props = this.props;
      ({ CellRendererComponent, ItemSeparatorComponent, horizontal, item, index, inversionStyle, onCellLayout } = props);
      const _renderElementResult = this._renderElement(props.renderItem, props.ListItemComponent, item, index);
      let tmp2 = ItemSeparatorComponent;
      if (!closure_1_8.isValidElement(ItemSeparatorComponent)) {
        let jsxResult = ItemSeparatorComponent;
        if (ItemSeparatorComponent) {
          const _Object = Object;
          jsxResult = <ItemSeparatorComponent {...Object.assign({}, self.state.separatorProps)} />;
        }
        tmp2 = jsxResult;
      }
      if (inversionStyle) {
        let items = closure_1_11;
        if (horizontal) {
          items = [, ];
          items[0] = items.rowReverse;
          items[1] = inversionStyle;
          let items1 = items;
        } else {
          items1 = [items.columnReverse, inversionStyle];
        }
      } else {
        let tmp6 = inversionStyle;
        if (horizontal) {
          const items2 = [closure_1_11.row, inversionStyle];
          tmp6 = items2;
        }
        const jsxs = closure_1_10.jsxs;
        if (CellRendererComponent) {
          let obj = { cellKey: props.cellKey, index, item, style: tmp6, onFocusCapture: self._onCellFocusCapture };
          if (onCellLayout) {
            obj = { onLayout: self._onLayout };
            onCellLayout = obj;
          }
          const obj1 = {};
          const items3 = [_renderElementResult, tmp2];
          obj1.children = items3;
          let jsxsResult = <CellRendererComponent {...Object.assign(obj, onCellLayout, obj1)} />;
        } else {
          obj = { style: tmp6, onFocusCapture: self._onCellFocusCapture };
          let tmp12 = onCellLayout;
          if (onCellLayout) {
            const obj2 = { onLayout: self._onLayout };
            tmp12 = obj2;
          }
          const obj3 = {};
          const items4 = [_renderElementResult, tmp2];
          obj3.children = items4;
          jsxsResult = <closure_1_9.View {...Object.assign(obj, tmp12, obj3)} />;
        }
        const obj4 = { cellKey: self.props.cellKey, children: jsxsResult };
        return closure_1_10.jsx(CellRenderer(closure_1_1[10]).VirtualizedListCellContextProvider, { cellKey: self.props.cellKey, children: jsxsResult });
      }
    }
  };
  let items1 = [
    {
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(item, separatorProps) {
        if (item.item !== separatorProps.separatorProps.leadingItem) {
          let obj = {};
          const _Object = Object;
          obj = { leadingItem: item.item };
          obj.separatorProps = Object.assign({}, separatorProps.separatorProps, obj);
          return obj;
        } else {
          return null;
        }
      }
    }
  ];
  return closure_3.default(CellRenderer, items, items1);
})(getIteratorFn.PureComponent);
