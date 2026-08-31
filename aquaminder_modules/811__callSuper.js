// Module ID: 811
// Function ID: 8495
// Name: _callSuper
// Dependencies: [1, 12, 13, 23, 25, 28, 119, 2, 692, 812, 809, 251]

// Module 811 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _inherits from "_inherits" /* 28 */;
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import emptyFunction2 from "emptyFunction" /* 692 */;
import _callSuper2 from "_callSuper" /* 809 */;
import hooks2 from "hooks" /* 812 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_8 from "jsxProd" /* 251 */;
import addResult from "module_10" /* 10 */;
import addResult1 from "module_4294967286" /* 4294967286 */;

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
const getIteratorFn = _interopRequireWildcard(getIteratorFn2);
const emptyFunction = module_1(emptyFunction2);
const hooks = module_1(hooks2);
let closure_7 = module_1(_callSuper2);
let closure_9 = { year: true, month: true, date: true, hour: true, minute: true };
const StyleSheet = get_registerCallableModule.StyleSheet;
const styles = StyleSheet.create({ picker: { flex: 1 }, row: { flexDirection: "row" } });
function stylesFromProps(textColor) {
  return { textColor: textColor.textColor, textSize: textColor.textSize, style: textColor.style };
}
const tmp6 = ((PureComponent) => {
  class DatePicker {
    constructor(arg0) {
      defaultResult = DatePicker.default(this, closure_0);
      items = [];
      items[0] = PureComponent;
      obj = closure_1_13(this, closure_0, items);
      closure_0 = obj;
      obj.parseDate = (arg0) => {
        closure_0 = closure_2_6.default(arg0);
        const items = ["year", "month", "date", "hour", "minute"];
        const item = items.forEach((arg0) => {
          closure_0.newValue[arg0] = closure_0.get(arg0);
        });
      };
      obj.onYearChange = (year) => {
        obj.newValue.year = year;
        obj.checkDate(obj.newValue.year, obj.newValue.month);
        if (closure_2_9.year) {
          closure_2_9.year = false;
        }
        const props = obj.props;
        props.onDateChange(obj.getValue());
      };
      obj.onMonthChange = (arg0) => {
        obj.newValue.month = arg0 - 1;
        obj.checkDate(obj.newValue.year, obj.newValue.month);
        if (closure_2_9.month) {
          closure_2_9.month = false;
        }
        const props = obj.props;
        props.onDateChange(obj.getValue());
      };
      obj.onDateChange = (date) => {
        obj.newValue.date = date;
        obj.checkDate(obj.newValue.year, obj.newValue.month);
        if (closure_2_9.date) {
          closure_2_9.date = false;
        }
        const props = obj.props;
        props.onDateChange(obj.getValue());
      };
      obj.onHourChange = (hour) => {
        obj.newValue.hour = hour;
        if (closure_2_9.hour) {
          closure_2_9.hour = false;
        }
        const props = obj.props;
        props.onDateChange(obj.getValue());
      };
      obj.onMinuteChange = (minute) => {
        obj.newValue.minute = minute;
        if (closure_2_9.minute) {
          closure_2_9.minute = false;
        }
        const props = obj.props;
        props.onDateChange(obj.getValue());
      };
      ({ date, minimumDate, maximumDate, labelUnit } = PureComponent);
      obj.state = { date, monthRange: [], yearRange: [] };
      obj.newValue = {};
      parseDateResult = obj.parseDate(date);
      defaultResult1 = closure_1_6.default(date);
      obj.state.dayRange = obj.genDateRange(defaultResult1.daysInMonth());
      fullYear = minimumDate.getFullYear();
      fullYear1 = maximumDate.getFullYear();
      num = 1;
      do {
        monthRange = obj.state.monthRange;
        obj = {};
        obj.value = num;
        _HermesInternal = HermesInternal;
        obj.label = "" + labelUnit.month[num - 1];
        arr = monthRange.push(obj);
        num = num + 1;
      } while (num <= 12);
      yearRange = obj.state.yearRange;
      obj1 = { value: fullYear, label: "" + fullYear + labelUnit.year };
      arr1 = yearRange.push(obj1);
      sum = fullYear + 1;
      if (sum <= fullYear1) {
        do {
          yearRange1 = obj.state.yearRange;
          obj2 = {};
          obj2.value = sum;
          _HermesInternal2 = HermesInternal;
          obj2.label = "" + sum + labelUnit.year;
          arr2 = yearRange1.push(obj2);
          sum = sum + 1;
        } while (sum <= fullYear1);
      }
      return obj;
    }
  }
  closure_4.default(DatePicker, PureComponent);
  let obj = {
    key: "genDateRange",
    value: function genDateRange(defaultResult1) {
      const items = [];
      for (let num = 1; num <= defaultResult1; num = num + 1) {
        let obj = { value: num };
        let _HermesInternal = HermesInternal;
        obj.label = "" + num + tmp.props.labelUnit.date;
        let arr = items.push(obj);
      }
      return items;
    }
  };
  let items = [obj, , , , , ];
  obj = {
    key: "render",
    value: function render() {
      const self = this;
      const obj = { style: Object.assign({}, closure_1_10.row, { width: this.props.style.width || "100%" }) };
      const items = ["date", "datetime"];
      const items1 = [items.includes(self.props.mode) && self.datePicker, ];
      const items2 = ["time", "datetime"];
      const tmp = this.props.style.width || "100%";
      const tmp2 = items.includes(self.props.mode) && self.datePicker;
      items1[1] = items2.includes(self.props.mode) && self.timePicker;
      obj.children = items1;
      return <closure_1_5.View style={Object.assign({}, closure_1_10.row, { width: this.props.style.width || "100%" })} />;
    }
  };
  items[1] = obj;
  obj = {
    key: "datePicker",
    get() {
      const self = this;
      closure_1 = closure_1_11(this.props);
      const order = this.props.order;
      if (!order.includes("D")) {
        if (!order.includes("M")) {
          if (!order.includes("Y")) {
            const _Error = Error;
            const error = new Error("WheelDatePicker: you are using order prop wrong, default value is 'D-M-Y'");
            throw error;
          }
        }
      }
      const parts = this.props.order.split("-");
      return parts.map((arg0) => {
        if ("D" === arg0) {
          let obj = { style: closure_2_10.picker };
          const _Object7 = Object;
          const props3 = self.props;
          obj = {};
          const _Object8 = Object;
          const obj1 = { width: "100%" };
          obj.style = Object.assign({}, self.props.style, obj1);
          obj.ref = function ref(dateComponent) {
            closure_1_0.dateComponent = dateComponent;
          };
          obj.selectedValue = self.state.date.getDate();
          obj.pickerData = self.state.dayRange;
          obj.onValueChange = self.onDateChange;
          const _Object9 = Object;
          obj.children = <closure_2_7.default {...Object.assign({}, closure_1, props3, obj)} />;
          return <closure_2_5.View key="date" />;
        } else if ("M" === arg0) {
          const obj2 = { style: closure_2_10.picker };
          const _Object4 = Object;
          const props2 = self.props;
          const obj3 = {};
          const _Object5 = Object;
          const obj4 = { width: "100%" };
          obj3.style = Object.assign({}, self.props.style, obj4);
          obj3.ref = function ref(monthComponent) {
            closure_1_0.monthComponent = monthComponent;
          };
          obj3.selectedValue = self.state.date.getMonth() + 1;
          obj3.pickerData = self.state.monthRange;
          obj3.onValueChange = self.onMonthChange;
          const _Object6 = Object;
          obj2.children = <closure_2_7.default {...Object.assign({}, closure_1, props2, obj3)} />;
          return <closure_2_5.View key="month" style={closure_2_10.picker} />;
        } else if ("Y" === arg0) {
          obj = { style: closure_2_10.picker };
          const _Object = Object;
          const props = self.props;
          const obj5 = {};
          const _Object2 = Object;
          const obj6 = { width: "100%" };
          obj5.style = Object.assign({}, self.props.style, obj6);
          obj5.ref = function ref(yearComponent) {
            closure_1_0.yearComponent = yearComponent;
          };
          obj5.selectedValue = self.state.date.getFullYear();
          obj5.pickerData = self.state.yearRange;
          obj5.onValueChange = self.onYearChange;
          const _Object3 = Object;
          obj.children = <closure_2_7.default {...Object.assign({}, closure_1, props, obj5)} />;
          return <closure_2_5.View key="year" style={closure_2_10.picker} />;
        } else {
          return null;
        }
      });
    }
  };
  items[2] = obj;
  items[3] = {
    key: "timePicker",
    get() {
      let num2;
      let self = this;
      self = this;
      const tmp = closure_1_11(this.props);
      const items = [];
      const items1 = [];
      let num = 0;
      do {
        let obj = { value: num };
        let _HermesInternal = HermesInternal;
        obj.label = "" + num;
        let arr = items.push(obj);
        num = num + 1;
        num2 = 0;
      } while (num <= 23);
      do {
        obj = { value: num2 };
        let _HermesInternal2 = HermesInternal;
        obj.label = "" + num2;
        arr = items1.push(obj);
        num2 = num2 + 1;
      } while (num2 <= 59);
      obj = {
        style: closure_1_10.picker,
        children: <closure_1_7.default {...Object.assign({
          ref(hourComponent) {
            self.hourComponent = hourComponent;
          }
        }, tmp, { selectedValue: date.getHours(), pickerData: items, onValueChange: self.onHourChange })} />
      };
      const items2 = [
        <closure_1_5.View key="hour" style={closure_1_10.picker}><closure_1_7.default {...Object.assign({
          ref(hourComponent) {
            self.hourComponent = hourComponent;
          }
        }, tmp, { selectedValue: date.getHours(), pickerData: items, onValueChange: self.onHourChange })} /></closure_1_5.View>,

      ];
      const obj3 = { style: closure_1_10.picker };
      const obj1 = {
        ref(hourComponent) {
          self.hourComponent = hourComponent;
        }
      };
      const obj2 = { selectedValue: date.getHours(), pickerData: items, onValueChange: self.onHourChange };
      const obj4 = {
        ref(minuteComponent) {
          self.minuteComponent = minuteComponent;
        }
      };
      obj3.children = <closure_1_7.default {...Object.assign(obj4, tmp, { selectedValue: date2.getMinutes(), pickerData: items1, onValueChange: self.onMinuteChange })} />;
      items2[1] = <closure_1_5.View key="minute" style={closure_1_10.picker} />;
      return items2;
    }
  };
  items[4] = {
    key: "checkDate",
    value: function checkDate(year, month) {
      let self = this;
      self = this;
      month = this.newValue.month;
      year = this.newValue.year;
      const dayRange = this.state.dayRange;
      let length = dayRange.length;
      if (month !== month) {
        const _HermesInternal = HermesInternal;
        length = closure_1_6.default("" + year + "-" + month + 1, "YYYY-MM").daysInMonth();
        const defaultResult = closure_1_6.default("" + year + "-" + month + 1, "YYYY-MM");
      }
      if (length !== dayRange.length) {
        if (this.newValue.date > length) {
          self.newValue.date = length;
          const dateComponent = self.dateComponent;
          let obj = { selectedValue: length };
          dateComponent.setState(obj);
        }
        obj = { dayRange: self.genDateRange(length) };
        self.setState(obj);
        const genDateRangeResult = self.genDateRange(length);
      }
      let str4;
      if (self.props.mode === "date") {
        str4 = "day";
      }
      let defaultResult1 = closure_1_6.default(Object.assign({}, self.newValue, { date: self.newValue.date }));
      let defaultResult3 = defaultResult1;
      const defaultResult2 = closure_1_6.default(self.props.minimumDate);
      defaultResult3 = closure_1_6.default(self.props.maximumDate);
      if (defaultResult1.isBefore(defaultResult2, str4)) {
        defaultResult3 = defaultResult2;
        let flag = true;
        defaultResult1 = defaultResult2;
      } else {
        flag = false;
        if (defaultResult1.isAfter(defaultResult3, str4)) {
          flag = true;
          defaultResult1 = defaultResult3;
        }
      }
      if (flag) {
        if (self.monthComponent) {
          const monthComponent = self.monthComponent;
          const obj2 = { selectedValue: defaultResult1.get("month") + 1 };
          monthComponent.setState(obj2);
        }
        const items = ["year", "date", "hour", "minute"];
        const item = items.forEach((arg0) => {
          let obj = self["" + arg0 + "Component"];
          let setStateResult = obj;
          if (obj) {
            obj = { selectedValue: defaultResult3.get(arg0) };
            setStateResult = obj.setState(obj);
          }
          return setStateResult;
        });
      }
    }
  };
  items[5] = {
    key: "getValue",
    value: function getValue() {
      const self = this;
      const newValue = this.newValue;
      const date = new Date(Date.UTC(newValue.year, newValue.month, newValue.date, newValue.hour, newValue.minute));
      let maximumDate = date;
      if (date < this.props.minimumDate) {
        return self.props.minimumDate;
      } else {
        if (maximumDate > self.props.maximumDate) {
          maximumDate = self.props.maximumDate;
        }
        return maximumDate;
      }
    }
  };
  let items1 = [
    {
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(date, date2) {
        const self = this;
        if (date2.date !== date.date) {
          if (typeof self === "object") {
            if (typeof self.parseDate === "function") {
              self.parseDate(date.date);
            }
          }
          const obj = { date: date.date };
          return obj;
        } else {
          return null;
        }
      }
    }
  ];
  return closure_1.default(DatePicker, items, items1);
})(getIteratorFn.PureComponent);
obj = { labelUnit: _default.shape(obj), order: emptyFunction.default.string, date: _default2.instanceOf(Date), maximumDate: _default3.instanceOf(Date), minimumDate: _default4.instanceOf(Date), mode: _default5.oneOf(["date", "time", "datetime"]), onDateChange: emptyFunction.default.func.isRequired, textSize: emptyFunction.default.number };
obj = { year: emptyFunction.default.string, month: emptyFunction.default.array, date: emptyFunction.default.string };
tmp6.propTypes = obj;
let obj1 = { labelUnit: null, order: "M-D-Y", mode: "date" };
let obj2 = { year: "", month: hooks.default.months(), date: "" };
obj1.labelUnit = obj2;
_default = emptyFunction.default;
_default2 = emptyFunction.default;
_default3 = emptyFunction.default;
_default4 = emptyFunction.default;
_default5 = emptyFunction.default;
const _default6 = hooks.default;
let defaultResult = hooks.default();
obj1.maximumDate = require("module_10").toDate();
let defaultResult1 = hooks.default();
obj1.minimumDate = require("module_4294967286").toDate();
obj1.date = new Date();
obj1.style = null;
obj1.textColor = "#333";
obj1.textSize = 26;
tmp6.defaultProps = obj1;

export default tmp6;
