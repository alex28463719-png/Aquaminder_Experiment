// Module ID: 359
// Function ID: 4486
// Name: _callSuper
// Dependencies: [1, 38, 203, 12, 13, 23, 25, 28, 347, 20, 119, 251, 346]

// Module 359 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import invariant from "invariant" /* 20 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _inherits from "_inherits" /* 28 */;
import _slicedToArray from "_slicedToArray" /* 38 */;
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import _callSuper2 from "_callSuper" /* 347 */;
import module_1 from "module_1" /* 1 */;
import closure_12 from "jsxProd" /* 251 */;

function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const defaultResult = closure_7.default(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(defaultResult, items, closure_7.default(arg0).constructor);
  } else {
    constructResult = defaultResult.apply(arg0, items);
  }
  return closure_6.default(arg0, constructResult);
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
function ItemWithSeparator(leadingItem) {
  const LeadingSeparatorComponent = leadingItem.LeadingSeparatorComponent;
  const SeparatorComponent = leadingItem.SeparatorComponent;
  const cellKey = leadingItem.cellKey;
  ({ prevCellKey: closure_3, setSelfHighlightCallback } = leadingItem);
  ({ updateHighlightFor: closure_5, setSelfUpdatePropsCallback } = leadingItem);
  const updatePropsFor = leadingItem.updatePropsFor;
  ({ item, index, section, inverted } = leadingItem);
  const defaultResult = cellKey.default(getIteratorFn.useState(false), 2);
  closure_8 = defaultResult[1];
  const defaultResult1 = cellKey.default(getIteratorFn.useState(false), 2);
  closure_9 = defaultResult1[1];
  let obj = { leadingItem: leadingItem.leadingItem, leadingSection: leadingItem.leadingSection, section: leadingItem.section, trailingItem: leadingItem.item, trailingSection: leadingItem.trailingSection };
  const defaultResult2 = cellKey.default(getIteratorFn.useState(obj), 2);
  const first = defaultResult2[0];
  getIteratorFn = defaultResult2[1];
  obj = { leadingItem: leadingItem.item, leadingSection: leadingItem.leadingSection, section: leadingItem.section, trailingItem: leadingItem.trailingItem, trailingSection: leadingItem.trailingSection };
  const defaultResult3 = cellKey.default(getIteratorFn.useState(obj), 2);
  const first1 = defaultResult3[0];
  closure_13 = tmp7;
  const items = [cellKey, setSelfHighlightCallback, defaultResult3[1], setSelfUpdatePropsCallback];
  const effect = getIteratorFn.useEffect(() => {
    setSelfHighlightCallback(cellKey, closure_9);
    setSelfUpdatePropsCallback(cellKey, closure_13);
    return () => {
      closure_1_6(closure_1_2, null);
      closure_1_4(closure_1_2, null);
    };
  }, items);
  obj = {
    highlight() {
      callback2(true);
      callback3(true);
      if (closure_3 != null) {
        callback(closure_3, true);
      }
    },
    unhighlight() {
      callback2(false);
      callback3(false);
      if (closure_3 != null) {
        callback(closure_3, false);
      }
    },
    updateProps(arg0, arg1) {
      if (arg0 === "leading") {
        if (LeadingSeparatorComponent != null) {
          const _Object2 = Object;
          callback4(Object.assign({}, first, arg1));
        } else if (closure_3 != null) {
          const _Object = Object;
          updatePropsFor(closure_3, Object.assign({}, first, arg1));
        }
      } else if (arg0 === "trailing") {
        if (SeparatorComponent != null) {
          const _Object3 = Object;
          callback5(Object.assign({}, first1, arg1));
        }
      }
    }
  };
  let jsxResult = LeadingSeparatorComponent != null;
  if (jsxResult) {
    let _Object = Object;
    const obj1 = { highlighted: defaultResult[0] };
    jsxResult = <LeadingSeparatorComponent {...Object.assign(obj1, first)} />;
  }
  let jsxResult1 = SeparatorComponent != null;
  if (jsxResult1) {
    let _Object2 = Object;
    const obj2 = { highlighted: defaultResult1[0] };
    jsxResult1 = <SeparatorComponent {...Object.assign(obj2, first1)} />;
  }
  let tmp16 = jsxResult;
  if (!jsxResult) {
    tmp16 = jsxResult1;
  }
  let tmp18 = jsxResult1;
  if (inverted === false) {
    tmp18 = jsxResult;
  }
  if (inverted === false) {
    jsxResult = jsxResult1;
  }
  const obj3 = {};
  let tmp19 = null;
  ({ jsxs, Fragment } = first1);
  if (tmp16) {
    tmp19 = tmp18;
  }
  const items1 = [tmp19, leadingItem.renderItem({ item, index, section, separators: obj }), ];
  let tmp20 = null;
  if (tmp16) {
    tmp20 = jsxResult;
  }
  items1[2] = tmp20;
  obj3.children = items1;
  return <></>;
}
let closure_2 = module_1(_slicedToArray);
let closure_3 = module_1(_objectWithoutProperties);
let closure_4 = module_1(_classCallCheck);
let closure_5 = module_1(_defineProperties);
let closure_6 = module_1(_possibleConstructorReturn);
let closure_7 = module_1(_getPrototypeOf);
let closure_8 = module_1(_inherits);
let closure_9 = module_1(_callSuper2);
let closure_10 = module_1(invariant);
let getIteratorFn = _interopRequireWildcard(getIteratorFn2);
let closure_13 = ["ItemSeparatorComponent", "SectionSeparatorComponent", "renderItem", "renderSectionFooter", "renderSectionHeader", "sections", "stickySectionHeadersEnabled"];

export default ((PureComponent) => {
  class VirtualizedSectionList {
    constructor() {
      defaultResult = closure_1_4.default(this, closure_0);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_1_15(this, closure_0, items.concat(array));
      closure_0 = tmp3;
      tmp3._keyExtractor = (arg0, index) => {
        const _subExtractorResult = closure_0._subExtractor(index);
        let key = _subExtractorResult;
        if (_subExtractorResult) {
          key = _subExtractorResult.key;
        }
        if (!key) {
          const _String = String;
          key = String(index);
        }
        return key;
      };
      tmp3._convertViewable = (index) => {
        closure_2_10.default(index.index != null, "Received a broken ViewToken");
        const _subExtractorResult = closure_0._subExtractor(index.index);
        if (_subExtractorResult) {
          const keyExtractor = _subExtractorResult.section.keyExtractor;
          let keyExtractor2 = closure_0.props.keyExtractor;
          if (!keyExtractor2) {
            keyExtractor2 = VirtualizedSectionList(closure_2_1[12]).keyExtractor;
          }
          if (keyExtractor != null) {
            let keyExtractorResult = keyExtractor(index.item, _subExtractorResult.index);
          } else {
            index = _subExtractorResult.index;
            let num2 = 0;
            if (index != null) {
              num2 = index;
            }
            keyExtractorResult = keyExtractor2(index.item, num2);
          }
          const _Object = Object;
          const obj = { index: _subExtractorResult.index, key: keyExtractorResult, section: _subExtractorResult.section };
          return Object.assign({}, index, obj);
        } else {
          return null;
        }
      };
      tmp3._onViewableItemsChanged = (arg0) => {
        ({ viewableItems, changed } = arg0);
        const onViewableItemsChanged = closure_0.props.onViewableItemsChanged;
        if (onViewableItemsChanged != null) {
          const obj = {};
          const mapped = viewableItems.map(closure_0._convertViewable, closure_0);
          const _Boolean = Boolean;
          obj.viewableItems = mapped.filter(Boolean);
          const mapped1 = changed.map(closure_0._convertViewable, closure_0);
          const _Boolean2 = Boolean;
          obj.changed = mapped1.filter(Boolean);
          const result = onViewableItemsChanged(obj);
        }
      };
      tmp3._renderItem = (arg0) => {
        closure_0 = arg0;
        return (index) => {
          index = index.index;
          const _subExtractorResult = closure_0._subExtractor(index);
          if (_subExtractorResult) {
            const index2 = _subExtractorResult.index;
            if (index2 == null) {
              const section = _subExtractorResult.section;
              if (_subExtractorResult.header === true) {
                const renderSectionHeader = closure_0.props.renderSectionHeader;
                let renderSectionHeaderResult = null;
                if (renderSectionHeader) {
                  let obj = { section };
                  renderSectionHeaderResult = renderSectionHeader(obj);
                }
                return renderSectionHeaderResult;
              } else {
                const renderSectionFooter = closure_0.props.renderSectionFooter;
                let renderSectionFooterResult = null;
                if (renderSectionFooter) {
                  obj = { section };
                  renderSectionFooterResult = renderSectionFooter(obj);
                }
                return renderSectionFooterResult;
              }
            } else {
              let renderItem = _subExtractorResult.section.renderItem;
              if (!renderItem) {
                renderItem = closure_0.props.renderItem;
              }
              const result = closure_0._getSeparatorComponent(index, _subExtractorResult, closure_0);
              closure_3_10.default(renderItem, "no renderItem!");
              obj = { SeparatorComponent: result };
              let prop;
              if (index2 === 0) {
                prop = closure_0.props.SectionSeparatorComponent;
              }
              obj.LeadingSeparatorComponent = prop;
              obj.cellKey = _subExtractorResult.key;
              obj.index = index2;
              obj.item = index.item;
              ({ leadingItem: obj.leadingItem, leadingSection: obj.leadingSection } = _subExtractorResult);
              obj.prevCellKey = closure_0._subExtractor(index - 1) || {}.key;
              obj.setSelfHighlightCallback = closure_0._setUpdateHighlightFor;
              obj.setSelfUpdatePropsCallback = closure_0._setUpdatePropsFor;
              obj.updateHighlightFor = closure_0._updateHighlightFor;
              obj.updatePropsFor = closure_0._updatePropsFor;
              obj.renderItem = renderItem;
              ({ section: obj.section, trailingItem: obj.trailingItem, trailingSection: obj.trailingSection } = _subExtractorResult);
              obj.inverted = closure_0.props.inverted;
              return <closure_3_17 SeparatorComponent={result} />;
            }
          } else {
            return null;
          }
        };
      };
      tmp3._updatePropsFor = (arg0, arg1) => {
        if (closure_0._updatePropsMap[arg0] != null) {
          tmp(arg1);
        }
      };
      tmp3._updateHighlightFor = (arg0, arg1) => {
        if (closure_0._updateHighlightMap[arg0] != null) {
          tmp(arg1);
        }
      };
      tmp3._setUpdateHighlightFor = (arg0, arg1) => {
        if (arg1 != null) {
          closure_0._updateHighlightMap[arg0] = arg1;
        } else {
          const _updateHighlightFor = closure_0._updateHighlightFor;
          delete tmp[tmp2];
        }
      };
      tmp3._setUpdatePropsFor = (arg0, arg1) => {
        if (arg1 != null) {
          closure_0._updatePropsMap[arg0] = arg1;
        } else {
          const _updatePropsMap = closure_0._updatePropsMap;
          delete tmp[tmp2];
        }
      };
      tmp3._updateHighlightMap = {};
      tmp3._updatePropsMap = {};
      tmp3._captureRef = (_listRef) => {
        closure_0._listRef = _listRef;
      };
      return tmp3;
    }
  }
  closure_8.default(VirtualizedSectionList, PureComponent);
  let obj = {
    key: "scrollToLocation",
    value: function scrollToLocation(itemIndex) {
      let sectionIndex;
      const self = this;
      itemIndex = itemIndex.itemIndex;
      let num = 0;
      let tmp = itemIndex;
      if (0 < itemIndex.sectionIndex) {
        do {
          let props = self.props;
          itemIndex = itemIndex + (props.getItemCount(self.props.sections[num].data) + 2);
          num = num + 1;
          tmp = itemIndex;
          sectionIndex = itemIndex.sectionIndex;
        } while (num < sectionIndex);
      }
      if (self._listRef != null) {
        const _listRef2 = self._listRef;
        let sum = tmp2;
        if (itemIndex.itemIndex > 0) {
          sum = tmp2;
          if (self.props.stickySectionHeadersEnabled) {
            sum = tmp2 + _listRef2.__getListMetrics().getCellMetricsApprox(tmp - itemIndex.itemIndex, _listRef2.props).length;
            const __getListMetricsResult = _listRef2.__getListMetrics();
          }
        }
        const _Object = Object;
        const obj = { viewOffset: sum, index: tmp };
        const _listRef = self._listRef;
        _listRef.scrollToIndex(Object.assign({}, itemIndex, obj));
      }
    }
  };
  let items = [obj, , , , , ];
  obj = {
    key: "getListRef",
    value: function getListRef() {
      return this._listRef;
    }
  };
  items[1] = obj;
  obj = {
    key: "render",
    value: function render() {
      let self = this;
      self = this;
      const props = this.props;
      ({ ItemSeparatorComponent, SectionSeparatorComponent, renderItem, renderSectionFooter, renderSectionHeader, sections, stickySectionHeadersEnabled } = props);
      let num = 0;
      if (this.props.ListHeaderComponent) {
        num = 1;
      }
      let items;
      if (self.props.stickySectionHeadersEnabled) {
        items = [];
      }
      let num2 = 0;
      let sum1 = 0;
      const iter = self.props.sections[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp5 = items;
        let tmp4 = nextResult;
        if (arr2 != null) {
          let tmp6 = items;
          let tmp7 = num2;
          let tmp8 = num;
          let arr = arr2.push(num2 + num);
        }
        let tmp10 = num2;
        let sum = num2 + 2;
        let tmp12 = sum;
        sum1 = sum;
        let props2 = self.props;
        let tmp13 = nextResult;
        sum1 = sum + props2.getItemCount(tmp4.data);
        num2 = sum1;
        continue;
      }
      const obj = {
        keyExtractor: self._keyExtractor,
        stickyHeaderIndices: items,
        renderItem: self._renderItem(num2),
        data: self.props.sections,
        getItem(arg0, arg1) {
          return self._getItem(self.props, arg0, arg1);
        },
        getItemCount() {
          return sum1;
        }
      };
      let prop;
      if (self.props.onViewableItemsChanged) {
        prop = self._onViewableItemsChanged;
      }
      obj.onViewableItemsChanged = prop;
      obj.ref = self._captureRef;
      return <closure_1_9.default {...Object.assign({}, closure_1_3.default(props, closure_1_13), obj)} />;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "_getItem",
    value: function _getItem(props, arg1, arg2) {
      if (arg1) {
        let diff = arg2 - 1;
        let num2 = 0;
        if (0 < arg1.length) {
          const data = tmp4.data;
          const itemCount = props.getItemCount(data);
          while (diff !== -1) {
            if (diff === itemCount) {
              break;
            } else if (diff < itemCount) {
              return props.getItem(data, diff);
            } else {
              diff = diff - (itemCount + 2);
              num2 = num2 + 1;
            }
          }
          return arg1[num2];
        }
        return null;
      } else {
        return null;
      }
    }
  };
  items[4] = {
    key: "_subExtractor",
    value: function _subExtractor(index) {
      let diff;
      let diff1 = index;
      ({ getItem, getItemCount, sections } = this.props);
      let num = 0;
      if (0 < sections.length) {
        while (true) {
          ({ data, key } = sections[num]);
          let tmp4 = diff1;
          let tmp5 = num;
          if (!key) {
            let _String = String;
            key = String(num);
          }
          diff = diff1 - 1;
          if (diff < getItemCount(data) + 1) {
            break;
          } else {
            diff1 = diff - (getItemCount(data) + 1);
            num = num + 1;
          }
        }
        if (diff === -1) {
          let obj = { section: tmp3, key: `${key}:header`, index: null, header: true, trailingSection: sections[num + 1] };
          return obj;
        } else if (diff === getItemCount(data)) {
          obj = { section: tmp3, key: `${key}:footer`, index: null, header: false, trailingSection: sections[num + 1] };
          return obj;
        } else {
          let keyExtractor = tmp3.keyExtractor || tmp2;
          if (!keyExtractor) {
            keyExtractor = VirtualizedSectionList(closure_1_1[12]).keyExtractor;
          }
          obj = { section: tmp3 };
          const text = `${key}:`;
          obj.key = `${key}:` + keyExtractor(getItem(data, diff), diff);
          obj.index = diff;
          obj.leadingItem = getItem(data, diff - 1);
          obj.leadingSection = sections[num - 1];
          obj.trailingItem = getItem(data, diff + 1);
          obj.trailingSection = sections[num + 1];
          return obj;
        }
      }
    }
  };
  items[5] = {
    key: "_getSeparatorComponent",
    value: function _getSeparatorComponent(index, _subExtractorResult, closure_0) {
      const self = this;
      if (!_subExtractorResult) {
        _subExtractorResult = self._subExtractor(index);
      }
      if (_subExtractorResult) {
        const SectionSeparatorComponent = self.props.SectionSeparatorComponent;
        const props = self.props;
        const diff = closure_0 - 1;
        const tmp6 = _subExtractorResult.index === props.getItemCount(_subExtractorResult.section.data) - 1;
        if (SectionSeparatorComponent) {
          if (tmp6) {
            return SectionSeparatorComponent;
          }
        }
        if (_subExtractorResult.section.ItemSeparatorComponent || self.props.ItemSeparatorComponent) {
          if (!tmp6) {
            if (index !== diff) {
              return tmp3;
            }
          }
        }
        return null;
      } else {
        return null;
      }
    }
  };
  return closure_5.default(VirtualizedSectionList, items);
})(getIteratorFn.PureComponent);
