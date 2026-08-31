// Module ID: 846
// Function ID: 9239
// Name: ContactUsScreen
// Dependencies: [1, 363, 38, 2, 119, 500, 827, 501, 251, 644, 529, 512, 657, 669, 671, 780, 689]
// Exports: default

// Module 846 (ContactUsScreen)
import _slicedToArray from "_slicedToArray" /* 38 */;
import getIteratorFn from "getIteratorFn" /* 119 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 363 */;
import _mod500 from "module_500" /* 500 */;
import _mod501 from "module_501" /* 501 */;
import PREDEF_RES from "PREDEF_RES" /* 780 */;
import ErrorComponent from "ErrorComponent" /* 827 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_9 from "jsxProd" /* 251 */;

let closure_2 = module_1(asyncGeneratorStep);
let closure_3 = module_1(_slicedToArray);
let closure_5 = _interopRequireWildcard(getIteratorFn);
let closure_6 = module_1(_mod500);
let closure_7 = module_1(ErrorComponent);
let closure_8 = module_1(_mod501);
const StyleSheet = get_registerCallableModule.StyleSheet;
let obj = {};
obj = { flex: 1, paddingHorizontal: require("module_15") };
obj.mainContainer = obj;
obj = { marginTop: require("module_16") };
obj.containerInput = obj;
obj.msgContainerInput = { marginTop: require("module_16"), height: require("module_150"), borderRadius: require("module_20"), alignItems: "flex-start", paddingVertical: require("module_8") };
let obj1 = { marginTop: require("module_16"), height: require("module_150"), borderRadius: require("module_20"), alignItems: "flex-start", paddingVertical: require("module_8") };
obj.msgInput = { height: require("module_150"), textAlignVertical: "top" };
let obj2 = { height: require("module_150"), textAlignVertical: "top" };
obj.icon = { height: require("module_20"), width: require("module_20"), marginTop: require("module_5") };
let obj3 = { height: require("module_20"), width: require("module_20"), marginTop: require("module_5") };
obj.sendBtn = { marginBottom: require("module_20"), marginTop: require("module_40") };
const styles = StyleSheet.create(obj);

export default function ContactUsScreen() {
  const theme = _require(644).useTheme();
  _require = _require(529).useNavigation();
  dependencyMap = _require(512).useTranslation().t;
  const defaultResult = closure_3.default(React.useState(""), 2);
  const first = defaultResult[0];
  closure_3 = defaultResult[1];
  [tmp5, get_registerCallableModule] = closure_3.default(React.useState(null), 2);
  const defaultResult1 = closure_3.default(React.useState(null), 2);
  [tmp7, closure_5] = closure_3.default(React.useState(false), 2);
  const defaultResult3 = closure_3.default(React.useState(""), 2);
  const first1 = defaultResult3[0];
  const mod = defaultResult3[1];
  const defaultResult2 = closure_3.default(React.useState(false), 2);
  [tmp11, closure_8] = closure_3.default(React.useState(null), 2);
  const defaultResult4 = closure_3.default(React.useState(null), 2);
  [tmp13, closure_9] = closure_3.default(React.useState(false), 2);
  const defaultResult6 = closure_3.default(React.useState(""), 2);
  const first2 = defaultResult6[0];
  closure_11 = defaultResult6[1];
  const defaultResult5 = closure_3.default(React.useState(false), 2);
  [tmp17, closure_12] = closure_3.default(React.useState(null), 2);
  const defaultResult7 = closure_3.default(React.useState(null), 2);
  [tmp19, closure_13] = closure_3.default(React.useState(false), 2);
  const defaultResult9 = closure_3.default(React.useState(false), 2);
  closure_14 = defaultResult9[1];
  function isValidation() {
    if (first.trim() === "") {
      callback2(dependencyMap("Name cannot be empty."));
      let flag = false;
    } else {
      callback2(null);
      flag = true;
    }
    if (first1.trim() === "") {
      callback5(dependencyMap("Email cannot be empty."));
      let flag2 = false;
    } else if (navigation(657).validateEmail(first1)) {
      tmp10(null);
      flag2 = flag;
    } else {
      tmp10(dependencyMap("Invalid email address format."));
      flag2 = false;
    }
    if (first2.trim() === "") {
      callback8(dependencyMap("Message cannot be empty."));
      flag2 = false;
    } else {
      callback8(null);
    }
    return flag2;
  }
  closure_16 = (() => {
    closure_0 = first.default(async () => {
      if (obj) {
        return obj.resume();
      } else if (closure_2_15()) {
        closure_2_14(true);
        obj = { name: closure_2_2, email: closure_2_6, message: closure_2_10 };
        const contactUsApiResult = callback(table[13]).contactUsApi(obj, {});
        callback(table[13]).contactUsApi(obj, {}).then((() => {
          closure_0 = first.default(async (arg0) => {
            if (obj) {
              return obj.resume();
            } else {
              closure_5_14(false);
              closure_5_3("");
              closure_5_7("");
              closure_5_11("");
              const Alert = closure_6_4.Alert;
              let message;
              if (arg0 != null) {
                message = arg0.message;
              }
              Alert.alert(message);
            }
          });
          return function(arg0) {
            return callback(...arguments);
          };
        })()).catch((message) => {
          closure_3_14(false);
          const Alert = closure_4_4.Alert;
          message = undefined;
          if (message != null) {
            message = message.message;
          }
          Alert.alert(message);
        });
        const nextPromise = callback(table[13]).contactUsApi(obj, {}).then((() => {
          closure_0 = first.default(async (arg0) => {
            if (obj) {
              return obj.resume();
            } else {
              closure_5_14(false);
              closure_5_3("");
              closure_5_7("");
              closure_5_11("");
              const Alert = closure_6_4.Alert;
              let message;
              if (arg0 != null) {
                message = arg0.message;
              }
              Alert.alert(message);
            }
          });
          return function(arg0) {
            return callback(...arguments);
          };
        })());
      }
    });
    return function handleSend() {
      return callback(...arguments);
    };
  })();
  let obj = {};
  obj = {
    isBack: true,
    title: first1.default.ContactUs,
    backPress() {
      navigation.goBack();
    }
  };
  const items = [
    React2.jsx(_require(671).Header, {
      isBack: true,
      title: first1.default.ContactUs,
      backPress() {
        navigation.goBack();
      }
    }),

  ];
  obj = { style: first2.mainContainer };
  const obj1 = {
    placeholder: "Enter your name",
    value: first,
    onChangeText(arg0) {
      callback(arg0);
    }
  };
  const obj2 = { marginTop: _require(780).perfectSize(30) };
  obj1.containerStyle = obj2;
  obj1.onFocus = function onFocus() {
    callback3(true);
  };
  let str = "gray";
  let str2 = "gray";
  if (tmp7) {
    str2 = theme.primary;
  }
  obj1.borderColor = str2;
  let num = 0.5;
  let num2 = 0.5;
  if (tmp7) {
    num2 = 1;
  }
  obj1.borderWidth = num2;
  obj1.onBlur = function onBlur() {
    callback3(false);
  };
  const obj3 = { source: _require(689).Icons.userIC };
  const defaultResult8 = closure_3.default(React.useState(false), 2);
  obj3.style = { height: _require(780).perfectSize(20), width: _require(780).perfectSize(20) };
  obj1.leftIcon = <get registerCallableModule.Image source={_require(689).Icons.userIC} />;
  const items1 = [
    React2.jsx(_require(671).Input, {
      placeholder: "Enter your name",
      value: first,
      onChangeText(arg0) {
        callback(arg0);
      }
    }),
  ,
  ,
  ,
  ,
  ,

  ];
  let jsxResult = tmp5;
  if (tmp5) {
    const obj5 = { error: tmp5 };
    jsxResult = <mod.default error={tmp5} />;
  }
  items1[1] = jsxResult;
  const obj6 = {
    placeholder: "Enter your email",
    containerStyle: first2.containerInput,
    value: first1,
    onChangeText(arg0) {
      callback4(arg0);
    },
    onFocus() {
      callback6(true);
    }
  };
  let primary = str;
  if (tmp13) {
    primary = theme.primary;
  }
  obj6.borderColor = primary;
  let num3 = num;
  if (tmp13) {
    num3 = 1;
  }
  obj6.borderWidth = num3;
  obj6.onBlur = function onBlur() {
    callback6(false);
  };
  const obj7 = { source: _require(689).Icons.mail };
  const obj4 = { height: _require(780).perfectSize(20), width: _require(780).perfectSize(20) };
  obj7.style = { height: _require(780).perfectSize(20), width: _require(780).perfectSize(20) };
  obj6.leftIcon = <get registerCallableModule.Image source={_require(689).Icons.mail} />;
  items1[2] = React2.jsx(_require(671).Input, {
    placeholder: "Enter your email",
    containerStyle: first2.containerInput,
    value: first1,
    onChangeText(arg0) {
      callback4(arg0);
    },
    onFocus() {
      callback6(true);
    }
  });
  let jsxResult1 = tmp11;
  if (tmp11) {
    const obj9 = { error: tmp11 };
    jsxResult1 = <mod.default error={tmp11} />;
  }
  items1[3] = jsxResult1;
  const obj10 = {
    placeholder: "Enter your message",
    value: first2,
    onChangeText(arg0) {
      callback7(arg0);
    },
    onFocus() {
      callback9(true);
    },
    containerStyle: first2.msgContainerInput,
    inputStyle: first2.msgInput
  };
  if (tmp19) {
    str = theme.primary;
  }
  obj10.borderColor = str;
  if (tmp19) {
    num = 1;
  }
  obj10.borderWidth = num;
  obj10.onBlur = function onBlur() {
    callback9(false);
  };
  const obj8 = { height: _require(780).perfectSize(20), width: _require(780).perfectSize(20) };
  obj10.leftIcon = <get registerCallableModule.Image source={_require(689).Icons.mail} style={first2.icon} />;
  obj10.multiline = true;
  items1[4] = React2.jsx(_require(671).Input, {
    placeholder: "Enter your message",
    value: first2,
    onChangeText(arg0) {
      callback7(arg0);
    },
    onFocus() {
      callback9(true);
    },
    containerStyle: first2.msgContainerInput,
    inputStyle: first2.msgInput
  });
  let jsxResult2 = tmp17;
  if (tmp17) {
    const obj12 = { error: tmp17 };
    jsxResult2 = <mod.default error={tmp17} />;
  }
  items1[5] = jsxResult2;
  const jsx = React2.jsx;
  const CustomButton = _require(671).CustomButton;
  if (defaultResult9[0]) {
    const obj13 = { isLoading: true, containerStyle: first2.sendBtn, backgroundColor: theme.primary };
    let jsxResult3 = <CustomButton isLoading containerStyle={first2.sendBtn} backgroundColor={theme.primary} />;
  } else {
    const obj14 = {
      btnText: mod2.default.SEND,
      onPress() {
          callback10();
        },
      containerStyle: first2.sendBtn
    };
    ({ primary: obj16.backgroundColor, white: obj16.textColor } = theme);
    jsxResult3 = <CustomButton btnText={mod2.default.SEND} onPress={function onPress() {
      callback10();
    }} containerStyle={first2.sendBtn} />;
  }
  items1[6] = jsxResult3;
  obj.children = items1;
  items[1] = <get registerCallableModule.View style={first2.mainContainer} />;
  obj.children = items;
  return React2.jsxs(_require(671).Container, { style: first2.mainContainer });
};
