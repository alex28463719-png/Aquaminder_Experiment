// Module ID: 849
// Function ID: 9293
// Name: ProfileEditScreen
// Dependencies: [1, 363, 38, 2, 119, 500, 501, 827, 712, 251, 512, 529, 644, 669, 671, 689, 780]
// Exports: default

// Module 849 (ProfileEditScreen)
import _slicedToArray from "_slicedToArray" /* 38 */;
import getIteratorFn from "getIteratorFn" /* 119 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 363 */;
import _mod500 from "module_500" /* 500 */;
import _mod501 from "module_501" /* 501 */;
import Button from "Button" /* 712 */;
import PREDEF_RES from "PREDEF_RES" /* 780 */;
import ErrorComponent from "ErrorComponent" /* 827 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_10 from "jsxProd" /* 251 */;

let closure_2 = module_1(asyncGeneratorStep);
let closure_3 = module_1(_slicedToArray);
let closure_5 = _interopRequireWildcard(getIteratorFn);
let closure_6 = module_1(_mod500);
let closure_7 = module_1(_mod501);
let closure_8 = module_1(ErrorComponent);
let closure_9 = module_1(Button);
const StyleSheet = get_registerCallableModule.StyleSheet;
let obj = {};
obj = { flex: 1, paddingHorizontal: require("module_15") };
obj.mainContainer = obj;
obj = { marginTop: require("module_20") };
obj.containerInput = obj;
obj.btn = { marginTop: require("module_40") };
const styles = StyleSheet.create(obj);

export default function ProfileEditScreen() {
  _require = _require(512).useTranslation().t;
  dependencyMap = _require(529).useNavigation();
  const params = _require(529).useRoute().params;
  const isName = params.isName;
  const profileName = params.profileName;
  let str = "";
  if (profileName) {
    str = profileName;
  }
  const defaultResult = first.default(React.useState(str), 2);
  first = defaultResult[0];
  const RN = defaultResult[1];
  [tmp4, closure_5] = first.default(React.useState(null), 2);
  const defaultResult1 = first.default(React.useState(null), 2);
  [tmp6, closure_6] = first.default(React.useState(false), 2);
  const theme = _require(644).useTheme();
  const defaultResult2 = first.default(React.useState(false), 2);
  [tmp9, closure_7] = first.default(React.useState(false), 2);
  const defaultResult4 = first.default(React.useState(""), 2);
  const first1 = defaultResult4[0];
  const mod2 = defaultResult4[1];
  const defaultResult3 = first.default(React.useState(false), 2);
  [tmp13, closure_10] = first.default(React.useState(null), 2);
  const defaultResult5 = first.default(React.useState(null), 2);
  [tmp15, closure_11] = first.default(React.useState(false), 2);
  const defaultResult7 = first.default(React.useState(true), 2);
  const first2 = defaultResult7[0];
  closure_13 = defaultResult7[1];
  const defaultResult8 = first.default(React.useState(""), 2);
  const first3 = defaultResult8[0];
  closure_15 = defaultResult8[1];
  const defaultResult6 = first.default(React.useState(false), 2);
  [tmp21, closure_16] = first.default(React.useState(null), 2);
  const defaultResult9 = first.default(React.useState(null), 2);
  [tmp23, closure_17] = first.default(React.useState(false), 2);
  const defaultResult11 = first.default(React.useState(true), 2);
  const first4 = defaultResult11[0];
  closure_19 = defaultResult11[1];
  const defaultResult12 = first.default(React.useState(""), 2);
  const first5 = defaultResult12[0];
  closure_21 = defaultResult12[1];
  const defaultResult10 = first.default(React.useState(false), 2);
  [tmp29, closure_22] = first.default(React.useState(false), 2);
  const defaultResult14 = first.default(React.useState(true), 2);
  const first6 = defaultResult14[0];
  closure_24 = defaultResult14[1];
  const defaultResult13 = first.default(React.useState(false), 2);
  [tmp33, closure_25] = first.default(React.useState(null), 2);
  function isNameValidation() {
    if (first.trim() === "") {
      callback2(t("Name cannot be empty."));
      let flag = false;
    } else {
      callback2(null);
      flag = true;
    }
    return flag;
  }
  function isPasswordValidation() {
    if (first1.trim() === "") {
      callback5(t("Password cannot be empty."));
      let flag = false;
    } else if (first1.length < 6) {
      callback5(t("Password must be at least 6 characters long."));
      flag = false;
    } else {
      callback5(null);
      flag = true;
    }
    if (first3.trim() === "") {
      callback9(t("Password cannot be empty."));
      flag = false;
    } else if (first3.length < 6) {
      callback9(t("Password must be at least 6 characters long."));
      flag = false;
    } else {
      callback9(null);
    }
    if (first5.trim() === "") {
      callback15(t("Confirm password cannot be empty."));
      flag = false;
    } else if (first5.length < 6) {
      callback15(t("Confirm password must be at least 6 characters long."));
      flag = false;
    } else if (first3 !== first5) {
      callback15(t("Confirm passwords do not match."));
      flag = false;
    } else {
      callback15(null);
    }
    return flag;
  }
  closure_28 = (() => {
    closure_0 = isName.default(async () => {
      if (obj) {
        return obj.resume();
      } else if (closure_2_26()) {
        closure_2_7(true);
        obj = { name: closure_2_3 };
        const editProfileApiResult = callback(table[13]).editProfileApi(obj, {});
        callback(table[13]).editProfileApi(obj, {}).then((() => {
          closure_0 = isName.default(async (arg0) => {
            if (obj) {
              return obj.resume();
            } else {
              closure_5_7(false);
              closure_5_4("");
              closure_5_1.navigate(closure_6_6.default.User);
            }
          });
          return function(arg0) {
            return callback(...arguments);
          };
        })()).catch((message) => {
          closure_3_7(false);
          Alert = Alert.Alert;
          message = undefined;
          if (message != null) {
            message = message.message;
          }
          Alert.alert(message);
        });
        const nextPromise = callback(table[13]).editProfileApi(obj, {}).then((() => {
          closure_0 = isName.default(async (arg0) => {
            if (obj) {
              return obj.resume();
            } else {
              closure_5_7(false);
              closure_5_4("");
              closure_5_1.navigate(closure_6_6.default.User);
            }
          });
          return function(arg0) {
            return callback(...arguments);
          };
        })());
      }
    });
    return function handleChangeName() {
      return callback(...arguments);
    };
  })();
  closure_29 = (() => {
    closure_0 = isName.default(async () => {
      if (obj) {
        return obj.resume();
      } else if (closure_2_27()) {
        closure_2_7(true);
        closure_2_7(true);
        obj = { old_password: closure_2_8, new_password: closure_2_14 };
        const changePasswordApiResult = callback(table[13]).changePasswordApi(obj, {});
        callback(table[13]).changePasswordApi(obj, {}).then((() => {
          closure_0 = isName.default(async (arg0) => {
            if (obj) {
              return obj.resume();
            } else {
              closure_5_7(false);
              closure_5_9("");
              closure_5_15("");
              closure_5_21("");
              closure_5_1.navigate(closure_6_6.default.User);
            }
          });
          return function(arg0) {
            return callback(...arguments);
          };
        })()).catch((message) => {
          closure_3_7(false);
          Alert = Alert.Alert;
          message = undefined;
          if (message != null) {
            message = message.message;
          }
          Alert.alert(message);
        });
        const nextPromise = callback(table[13]).changePasswordApi(obj, {}).then((() => {
          closure_0 = isName.default(async (arg0) => {
            if (obj) {
              return obj.resume();
            } else {
              closure_5_7(false);
              closure_5_9("");
              closure_5_15("");
              closure_5_21("");
              closure_5_1.navigate(closure_6_6.default.User);
            }
          });
          return function(arg0) {
            return callback(...arguments);
          };
        })());
      }
    });
    return function handleChangePassword() {
      return callback(...arguments);
    };
  })();
  let obj = {};
  obj = {
    isBack: true,
    title: isName ? _default.CHANGE_NAME : _default.CHANGE_PASSWORD,
    backPress() {
      navigation.goBack();
    }
  };
  const items = [
    React2.jsx(_require(671).Header, {
      isBack: true,
      title: isName ? _default.CHANGE_NAME : _default.CHANGE_PASSWORD,
      backPress() {
        navigation.goBack();
      }
    }),

  ];
  obj = { style: closure_11.mainContainer };
  ({ jsxs, Fragment } = React2);
  const obj1 = {};
  const jsx = React2.jsx;
  const Input = _require(671).Input;
  if (isName) {
    const obj2 = {};
    let str10 = "Enter your name";
    if (profileName) {
      str10 = profileName;
    }
    obj2.placeholder = str10;
    obj2.value = first;
    obj2.onChangeText = function onChangeText(arg0) {
      callback(arg0);
    };
    obj2.containerStyle = closure_11.containerInput;
    obj2.onFocus = function onFocus() {
      callback3(true);
    };
    let str11 = "gray";
    if (tmp6) {
      str11 = theme.primary;
    }
    obj2.borderColor = str11;
    let num7 = 0.5;
    if (tmp6) {
      num7 = 1;
    }
    obj2.borderWidth = num7;
    obj2.onBlur = function onBlur() {
      callback3(false);
    };
    const obj3 = { source: _require(689).Icons.userIC };
    const obj4 = { height: _require(780).perfectSize(20), width: _require(780).perfectSize(20) };
    obj3.style = obj4;
    obj2.leftIcon = <RN.Image source={_require(689).Icons.userIC} />;
    const items1 = [<Input />, ];
    let jsxResult = tmp4;
    if (tmp4) {
      const obj5 = { error: tmp4 };
      jsxResult = <first1.default error={tmp4} />;
    }
    items1[1] = jsxResult;
    obj1.children = items1;
    let jsxsResult = <></>;
  } else {
    const obj6 = {
      placeholder: "Enter your old password",
      containerStyle: closure_11.containerInput,
      value: first1,
      onChangeText(arg0) {
          callback4(arg0);
        }
    };
    let str3 = "gray";
    let str4 = "gray";
    if (tmp15) {
      str4 = theme.primary;
    }
    obj6.borderColor = str4;
    let num = 0.5;
    let num2 = 0.5;
    if (tmp15) {
      num2 = 1;
    }
    obj6.borderWidth = num2;
    obj6.onFocus = function onFocus() {
      callback6(true);
    };
    obj6.onBlur = function onBlur() {
      callback6(false);
    };
    obj6.secureTextEntry = first2;
    const obj7 = { name: null, size: 20, color: "gray" };
    let str5 = "eye-off";
    let str6 = "eye-off";
    if (first2) {
      str6 = "eye";
    }
    obj7.name = str6;
    obj6.rightIcon = <mod2.default name={null} size={20} color="gray" />;
    obj6.iconPress = function iconPress() {
      callback7(!first2);
    };
    const obj8 = { source: _require(689).Icons.key };
    const obj9 = { height: _require(780).perfectSize(20), width: _require(780).perfectSize(20) };
    obj8.style = obj9;
    obj6.leftIcon = <RN.Image source={_require(689).Icons.key} />;
    const items2 = [
      <Input placeholder="Enter your old password" containerStyle={closure_11.containerInput} value={first1} onChangeText={function onChangeText(arg0) {
          callback4(arg0);
        }} />,
  ,
  ,
  ,
  ,

    ];
    let jsxResult1 = tmp13;
    if (tmp13) {
      const obj10 = { error: tmp13 };
      jsxResult1 = <first1.default error={tmp13} />;
    }
    items2[1] = jsxResult1;
    const obj11 = {
      placeholder: "Enter your password",
      containerStyle: closure_11.containerInput,
      value: first3,
      onChangeText(arg0) {
          callback8(arg0);
        }
    };
    let primary = str3;
    if (tmp23) {
      primary = theme.primary;
    }
    obj11.borderColor = primary;
    let num6 = num;
    if (tmp23) {
      num6 = 1;
    }
    obj11.borderWidth = num6;
    obj11.onFocus = function onFocus() {
      callback10(true);
    };
    obj11.onBlur = function onBlur() {
      callback10(false);
    };
    obj11.secureTextEntry = first4;
    const obj12 = { name: null, size: 20, color: "gray" };
    let str8 = str5;
    if (first4) {
      str8 = "eye";
    }
    obj12.name = str8;
    obj11.rightIcon = <mod2.default name={null} size={20} color="gray" />;
    obj11.iconPress = function iconPress() {
      callback11(!first4);
    };
    const obj13 = { source: _require(689).Icons.key };
    const obj14 = { height: _require(780).perfectSize(20), width: _require(780).perfectSize(20) };
    obj13.style = obj14;
    obj11.leftIcon = <RN.Image source={_require(689).Icons.key} />;
    items2[2] = React2.jsx(_require(671).Input, {
      placeholder: "Enter your password",
      containerStyle: closure_11.containerInput,
      value: first3,
      onChangeText(arg0) {
          callback8(arg0);
        }
    });
    let jsxResult2 = tmp21;
    if (tmp21) {
      const obj15 = { error: tmp21 };
      jsxResult2 = <first1.default error={tmp21} />;
    }
    items2[3] = jsxResult2;
    const obj16 = {
      placeholder: "Enter your confirm password",
      containerStyle: closure_11.containerInput,
      value: first5,
      onChangeText(arg0) {
          callback12(arg0);
        }
    };
    if (tmp29) {
      str3 = theme.primary;
    }
    obj16.borderColor = str3;
    if (tmp29) {
      num = 1;
    }
    obj16.borderWidth = num;
    obj16.onFocus = function onFocus() {
      callback13(true);
    };
    obj16.onBlur = function onBlur() {
      callback13(false);
    };
    obj16.secureTextEntry = first6;
    const obj17 = { name: null, size: 20, color: "gray" };
    if (first6) {
      str5 = "eye";
    }
    obj17.name = str5;
    obj16.rightIcon = <mod2.default name={null} size={20} color="gray" />;
    obj16.iconPress = function iconPress() {
      callback14(!first6);
    };
    const obj18 = { source: _require(689).Icons.key };
    const obj19 = { height: _require(780).perfectSize(20), width: _require(780).perfectSize(20) };
    obj18.style = obj19;
    obj16.leftIcon = <RN.Image source={_require(689).Icons.key} />;
    items2[4] = React2.jsx(_require(671).Input, {
      placeholder: "Enter your confirm password",
      containerStyle: closure_11.containerInput,
      value: first5,
      onChangeText(arg0) {
          callback12(arg0);
        }
    });
    let jsxResult3 = tmp33;
    if (tmp33) {
      const obj20 = { error: tmp33 };
      jsxResult3 = <first1.default error={tmp33} />;
    }
    items2[5] = jsxResult3;
    obj1.children = items2;
    jsxsResult = <></>;
  }
  const items3 = [jsxsResult, ];
  const jsx2 = React2.jsx;
  const CustomButton = _require(671).CustomButton;
  if (tmp9) {
    const obj21 = { isLoading: true, containerStyle: closure_11.btn, backgroundColor: theme.primary };
    let jsx2Result = jsx2(CustomButton, obj21);
  } else {
    const obj22 = {
      btnText: mod.default.CHANGE,
      onPress() {
          if (isName) {
            callback16();
          } else {
            callback17();
          }
        },
      containerStyle: closure_11.btn
    };
    ({ primary: obj24.backgroundColor, white: obj24.textColor } = theme);
    jsx2Result = jsx2(CustomButton, obj22);
  }
  items3[1] = jsx2Result;
  obj.children = items3;
  items[1] = <RN.View style={closure_11.mainContainer} />;
  obj.children = items;
  return React2.jsxs(_require(671).Container, { style: closure_11.mainContainer });
};
