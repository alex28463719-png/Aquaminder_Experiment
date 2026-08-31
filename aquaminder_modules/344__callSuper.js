// Module ID: 344
// Function ID: 4195
// Name: _callSuper
// Dependencies: [1, 203, 12, 13, 23, 25, 28, 73, 248, 345, 360, 119, 251, 20, 253, 129]

// Module 344 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _inherits from "_inherits" /* 28 */;
import animatedShouldDebounceQueueFlush from "animatedShouldDebounceQueueFlush" /* 73 */;
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import View from "View" /* 248 */;
import setStyleAttributePreprocessor from "setStyleAttributePreprocessor" /* 253 */;
import get_VirtualizedList from "get VirtualizedList" /* 345 */;
import isEqual from "isEqual" /* 360 */;
import module_1 from "module_1" /* 1 */;
import closure_12 from "jsxProd" /* 251 */;

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
function removeClippedSubviewsOrDefault(arg0) {
  if (closure_8.shouldUseRemoveClippedSubviewsAsDefaultOnIOS()) {
    let flag2 = true;
    if (tmp) {
      flag2 = arg0;
    }
    return flag2;
  } else {
    let flag = true;
    if (tmp) {
      flag = arg0;
    }
    return flag;
  }
}
function numColumnsOrDefault(arg0) {
  let num = 1;
  if (arg0 != null) {
    num = arg0;
  }
  return num;
}
function isArrayLike(arg0) {
  return typeof Object(arg0).length === "number";
}
let closure_2 = module_1(_objectWithoutProperties);
let closure_3 = module_1(_classCallCheck);
let closure_4 = module_1(_defineProperties);
let closure_5 = module_1(_possibleConstructorReturn);
let closure_6 = module_1(_getPrototypeOf);
let closure_7 = module_1(_inherits);
let closure_8 = _interopRequireWildcard(animatedShouldDebounceQueueFlush);
let closure_9 = module_1(View);
get_VirtualizedList = module_1(get_VirtualizedList);
let closure_10 = module_1(isEqual);
const getIteratorFn = module_1(getIteratorFn2);
let closure_13 = ["numColumns", "columnWrapperStyle", "removeClippedSubviews", "strictMode"];
const VirtualizedList = get_VirtualizedList.default.VirtualizedList;
let keyExtractor = get_VirtualizedList.default.keyExtractor;
const tmp5 = ((PureComponent) => {
  class FlatList {
    constructor(arg0) {
      defaultResult = closure_1_3.default(this, closure_0);
      items = [];
      items[0] = PureComponent;
      obj = closure_1_18(this, closure_0, items);
      closure_0 = obj;
      obj._virtualizedListPairs = [];
      obj._captureRef = (_listRef) => {
        obj._listRef = _listRef;
      };
      obj._getItem = (arg0, arg1) => {
        const tmp = closure_2_21(obj.props.numColumns);
        if (tmp > 1) {
          const items = [];
          for (let num = 0; num < tmp; num = num + 1) {
            let sum = arg1 * tmp + num;
            let tmp3 = num;
            if (sum < arg0.length) {
              let arr = items.push(arg0[sum]);
            }
          }
          return items;
        } else {
          return arg0[arg1];
        }
      };
      obj._getItemCount = (arg0) => {
        if (arg0 != null) {
          if (closure_2_22(arg0)) {
            const tmp4 = closure_2_21(obj.props.numColumns);
            if (tmp4 > 1) {
              const _Math = Math;
              let length = Math.ceil(arg0.length / tmp4);
            } else {
              length = arg0.length;
            }
            return length;
          }
        }
        return 0;
      };
      obj._keyExtractor = (arr) => {
        const tmp = closure_2_21(arg1.props.numColumns);
        closure_1 = tmp;
        keyExtractor = obj.props.keyExtractor;
        if (keyExtractor == null) {
          keyExtractor = closure_2_15;
        }
        if (tmp > 1) {
          const _Array = Array;
          FlatList(closure_2_1[13])(Array.isArray(arr), "FlatList: Encountered internal consistency error, expected each item to consist of an array with 1-%s columns; instead, received a single item.", tmp);
          const mapped = arr.map((arg0, arg1) => keyExtractor(arg0, closure_0 * closure_1 + arg1));
          return mapped.join(":");
        } else {
          return keyExtractor(arr, arg1);
        }
      };
      obj._renderer = (arg0, arg1, arg2, arg3, arg4) => {
        closure_0 = arg0;
        closure_1 = arg1;
        closure_2 = arg2;
        closure_3 = closure_2_21(arg3);
        function render(arg0) {
          if (closure_0) {
            const _Object = Object;
            return <closure_0 {...Object.assign({}, arg0)} />;
          } else if (callback) {
            return callback(arg0);
          } else {
            return null;
          }
        }
        function renderProp(arg0) {
          closure_0 = arg0;
          if (closure_3 > 1) {
            ({ item, index: closure_1 } = arg0);
            const _Array = Array;
            FlatList(closure_3_1[13])(Array.isArray(item), "Expected array of items with numColumns > 1");
            obj = {};
            const tmp4 = FlatList(closure_3_1[13]);
            obj.style = FlatList(closure_3_1[14]).default.compose(closure_3_16.row, closure_2);
            obj.children = item.map((item) => {
              obj = { item, index: closure_1 * closure_1_3 + arg1, separators: separators.separators };
              const tmp = closure_1_4(obj);
              let jsxResult = null;
              if (tmp != null) {
                obj = { children: tmp };
                jsxResult = closure_4_12.jsx(closure_4_11.default.Fragment, { children: tmp }, arg1);
              }
              return jsxResult;
            });
            return <closure_3_9.default />;
          } else {
            return render(arg0);
          }
        }
        obj = {};
        if (arg0) {
          obj.ListItemComponent = renderProp;
          let tmp = obj;
        } else {
          obj.renderItem = renderProp;
          tmp = obj;
        }
        return tmp;
      };
      obj._memoizedRenderer = closure_1_10.default(obj._renderer);
      _checkPropsResult = obj._checkProps(obj.props);
      props = obj.props;
      if (obj.props.viewabilityConfigCallbackPairs) {
        prop = props.viewabilityConfigCallbackPairs;
        obj._virtualizedListPairs = prop.map((viewabilityConfig) => {
          obj = { viewabilityConfig: viewabilityConfig.viewabilityConfig, onViewableItemsChanged: obj._createOnViewableItemsChanged(viewabilityConfig.onViewableItemsChanged) };
          return obj;
        });
      } else if (props.onViewableItemsChanged) {
        prop1 = obj._virtualizedListPairs;
        obj = {};
        obj.viewabilityConfig = obj.props.viewabilityConfig;
        obj.onViewableItemsChanged = obj._createOnViewableItemsChanged(() => {
          FlatList(closure_2_1[13])(obj.props.onViewableItemsChanged, "Changing the nullability of onViewableItemsChanged is not supported. Once a function or null is supplied that cannot be changed.");
          const props = obj.props;
          const onViewableItemsChanged = props.onViewableItemsChanged;
          return onViewableItemsChanged(...arguments);
        });
        arr = prop1.push(obj);
      }
      return obj;
    }
  }
  closure_7.default(FlatList, PureComponent);
  let obj = {
    key: "scrollToEnd",
    value: function scrollToEnd(arg0) {
      if (this._listRef) {
        const _listRef = this._listRef;
        _listRef.scrollToEnd(arg0);
      }
    }
  };
  let items = [obj, , , , , , , , , , , , , , ];
  obj = {
    key: "scrollToIndex",
    value: function scrollToIndex(arg0) {
      if (this._listRef) {
        const _listRef = this._listRef;
        _listRef.scrollToIndex(arg0);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "scrollToItem",
    value: function scrollToItem(arg0) {
      if (this._listRef) {
        const _listRef = this._listRef;
        _listRef.scrollToItem(arg0);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "scrollToOffset",
    value: function scrollToOffset(arg0) {
      if (this._listRef) {
        const _listRef = this._listRef;
        _listRef.scrollToOffset(arg0);
      }
    }
  };
  items[4] = {
    key: "recordInteraction",
    value: function recordInteraction() {
      if (this._listRef) {
        const _listRef = this._listRef;
        _listRef.recordInteraction();
      }
    }
  };
  items[5] = {
    key: "flashScrollIndicators",
    value: function flashScrollIndicators() {
      if (this._listRef) {
        const _listRef = this._listRef;
        const result = _listRef.flashScrollIndicators();
      }
    }
  };
  items[6] = {
    key: "getScrollResponder",
    value: function getScrollResponder() {
      if (this._listRef) {
        const _listRef = this._listRef;
        return _listRef.getScrollResponder();
      }
    }
  };
  items[7] = {
    key: "getNativeScrollRef",
    value: function getNativeScrollRef() {
      if (this._listRef) {
        const _listRef = this._listRef;
        return _listRef.getScrollRef();
      }
    }
  };
  items[8] = {
    key: "getScrollableNode",
    value: function getScrollableNode() {
      if (this._listRef) {
        const _listRef = this._listRef;
        return _listRef.getScrollableNode();
      }
    }
  };
  items[9] = {
    key: "setNativeProps",
    value: function setNativeProps(arg0) {
      if (this._listRef) {
        const _listRef = this._listRef;
        _listRef.setNativeProps(arg0);
      }
    }
  };
  items[10] = {
    key: "componentDidUpdate",
    value: function componentDidUpdate(numColumns) {
      FlatList(closure_1_1[13])(numColumns.numColumns === this.props.numColumns, "Changing numColumns on the fly is not supported. Change the key prop on FlatList when changing the number of columns to force a fresh render of the component.");
      FlatList(closure_1_1[13])(numColumns.onViewableItemsChanged == null === (this.props.onViewableItemsChanged == null), "Changing onViewableItemsChanged nullability on the fly is not supported");
      const tmp3 = FlatList(closure_1_1[13]);
      tmp3(!FlatList(closure_1_1[15]).default(numColumns.viewabilityConfig, this.props.viewabilityConfig), "Changing viewabilityConfig on the fly is not supported");
      FlatList(closure_1_1[13])(numColumns.viewabilityConfigCallbackPairs === this.props.viewabilityConfigCallbackPairs, "Changing viewabilityConfigCallbackPairs on the fly is not supported");
      this._checkProps(this.props);
    }
  };
  items[11] = {
    key: "_checkProps",
    value: function _checkProps(onViewableItemsChanged) {
      onViewableItemsChanged = onViewableItemsChanged.onViewableItemsChanged;
      ({ getItem, getItemCount, horizontal, columnWrapperStyle, viewabilityConfigCallbackPairs } = onViewableItemsChanged);
      let tmp3 = !getItem;
      const tmp = closure_1_21(this.props.numColumns);
      if (tmp3) {
        tmp3 = !getItemCount;
      }
      FlatList(closure_1_1[13])(tmp3, "FlatList does not support custom data formats.");
      if (tmp > 1) {
        FlatList(closure_1_1[13])(!horizontal, "numColumns does not support horizontal.");
      } else {
        FlatList(closure_1_1[13])(!columnWrapperStyle, "columnWrapperStyle not supported for single column lists");
      }
      const tmp2 = FlatList(closure_1_1[13]);
      if (onViewableItemsChanged) {
        onViewableItemsChanged = viewabilityConfigCallbackPairs;
      }
      FlatList(closure_1_1[13])(!onViewableItemsChanged, "FlatList does not support setting both onViewableItemsChanged and viewabilityConfigCallbackPairs.");
    }
  };
  items[12] = {
    key: "_pushMultiColumnViewable",
    value: function _pushMultiColumnViewable(items, item) {
      closure_0 = items;
      closure_1 = item;
      closure_2 = closure_1_21(this.props.numColumns);
      keyExtractor = this.props.keyExtractor;
      if (keyExtractor == null) {
        keyExtractor = closure_1_15;
      }
      item = item.item;
      const item1 = item.forEach((item) => {
        FlatList(closure_2_1[13])(item.index != null, "Missing index!");
        const sum = item.index * closure_2 + arg1;
        items.push(Object.assign({}, item, { item, key: keyExtractor(item, sum), index: sum }));
      });
    }
  };
  items[13] = {
    key: "_createOnViewableItemsChanged",
    value: function _createOnViewableItemsChanged(onViewableItemsChanged) {
      closure_0 = onViewableItemsChanged;
      const self = this;
      return (viewableItems) => {
        if (items) {
          if (tmp > 1) {
            items = [];
            const items1 = [];
            viewableItems = viewableItems.viewableItems;
            const item = viewableItems.forEach((item) => items1._pushMultiColumnViewable(items1, item));
            const changed = viewableItems.changed;
            const item1 = changed.forEach((item) => items1._pushMultiColumnViewable(items, item));
            const obj = { viewableItems: items1, changed: items };
            items(obj);
          } else {
            items(viewableItems);
          }
        }
      };
    }
  };
  items[14] = {
    key: "render",
    value: function render() {
      const self = this;
      const props = this.props;
      ({ numColumns, columnWrapperStyle, strictMode } = props);
      let flag = false;
      if (strictMode !== undefined) {
        flag = strictMode;
      }
      const defaultResult = closure_1_2.default(props, closure_1_13);
      return <closure_1_14 {...Object.assign({}, defaultResult, { getItem: self._getItem, getItemCount: self._getItemCount, keyExtractor: self._keyExtractor, ref: self._captureRef, viewabilityConfigCallbackPairs: self._virtualizedListPairs, removeClippedSubviews: closure_1_20(props.removeClippedSubviews) }, flag ? self._memoizedRenderer : self._renderer(self.props.ListItemComponent, self.props.renderItem, columnWrapperStyle, numColumns, self.props.extraData))} />;
    }
  };
  return closure_4.default(FlatList, items);
})(getIteratorFn.default.PureComponent);
let closure_16 = setStyleAttributePreprocessor.default.create({ row: { flexDirection: "row" } });

export default tmp5;
