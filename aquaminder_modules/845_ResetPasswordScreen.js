// Module ID: 845
// Function ID: 9214
// Name: ResetPasswordScreen
// Dependencies: [1, 363, 38, 2, 119, 712, 827, 501, 500, 251, 644, 512, 529, 669, 671, 780, 689]
// Exports: default

// Module 845 (ResetPasswordScreen)
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
let closure_6 = module_1(Button);
let closure_7 = module_1(ErrorComponent);
let closure_8 = module_1(_mod501);
let closure_9 = module_1(_mod500);
const StyleSheet = get_registerCallableModule.StyleSheet;
let obj = {};
obj = { flex: 1, paddingHorizontal: require("module_25") };
obj.mainContainer = obj;
obj = { marginTop: require("module_16") };
obj.containerInput = obj;
let obj1 = { fontSize: require("module_22"), textAlign: "center", flex: 1 };
obj.headerText = obj1;
obj.sendBtn = { marginTop: require("module_50") };
const styles = StyleSheet.create(obj);

export default function ResetPasswordScreen(navigation) {
  navigation = navigation.navigation;
  const email = navigation.route.params.email;
  const theme = navigation(email[10]).useTheme();
  const t = navigation(email[11]).useTranslation().t;
  closure_2 = t;
  const defaultResult = first.default(React.useState(""), 2);
  first = defaultResult[0];
  const RN = defaultResult[1];
  [tmp5, closure_5] = first.default(React.useState(null), 2);
  const defaultResult1 = first.default(React.useState(null), 2);
  [tmp7, closure_6] = first.default(React.useState(false), 2);
  const defaultResult3 = first.default(React.useState(true), 2);
  const first1 = defaultResult3[0];
  const mod2 = defaultResult3[1];
  const defaultResult4 = first.default(React.useState(""), 2);
  const first2 = defaultResult4[0];
  const React2 = defaultResult4[1];
  const defaultResult2 = first.default(React.useState(false), 2);
  [tmp13, closure_11] = first.default(React.useState(false), 2);
  const defaultResult6 = first.default(React.useState(true), 2);
  const first3 = defaultResult6[0];
  closure_13 = defaultResult6[1];
  const defaultResult5 = first.default(React.useState(false), 2);
  [tmp17, closure_14] = first.default(React.useState(null), 2);
  const defaultResult8 = first.default(React.useState(false), 2);
  closure_15 = defaultResult8[1];
  const items = [navigation];
  const effect = React.useEffect(() => navigation.addListener("beforeRemove", (preventDefault) => {
    preventDefault.preventDefault();
  }), items);
  const focusEffect = navigation(email[12]).useFocusEffect(React.useCallback(() => {
    closure_0 = lib.BackHandler.addEventListener("hardwareBackPress", function onBackPress() {
      return true;
    });
    return () => closure_0.remove();
  }, []));
  function isValidation() {
    if (first.trim() === "") {
      callback(t("New password cannot be empty."));
      let flag = false;
    } else if (first.length < 6) {
      callback(t("New password must be at least 6 characters long."));
      flag = false;
    } else {
      callback(null);
      flag = true;
    }
    if (first2.trim() === "") {
      callback7(t("Confirm password cannot be empty."));
      flag = false;
    } else if (first2.length < 6) {
      callback7(t("Confirm password must be at least 6 characters long."));
      flag = false;
    } else if (first !== first2) {
      callback7(t("Confirm passwords do not match."));
      flag = false;
    } else {
      callback7(null);
    }
    return flag;
  }
  function handleSend() {
    if (isValidation()) {
      callback8(true);
      const obj = { email, password: first };
      const resetPasswordApiResult = navigation(email[13]).resetPasswordApi(obj, {});
      navigation(email[13]).resetPasswordApi(obj, {}).then((() => {
        closure_0 = closure_2.default(async (arg0) => {
          if (obj) {
            return obj.resume();
          } else {
            closure_3_15(false);
            closure_3_4("");
            closure_3_10("");
            closure_3_0.navigate(first2.default.Login);
          }
        });
        return function(arg0) {
          return callback(...arguments);
        };
      })()).catch((message) => {
        closure_1_15(false);
        Alert = Alert.Alert;
        message = undefined;
        if (message != null) {
          message = message.message;
        }
        Alert.alert(message);
      });
      const nextPromise = navigation(email[13]).resetPasswordApi(obj, {}).then((() => {
        closure_0 = closure_2.default(async (arg0) => {
          if (obj) {
            return obj.resume();
          } else {
            closure_3_15(false);
            closure_3_4("");
            closure_3_10("");
            closure_3_0.navigate(first2.default.Login);
          }
        });
        return function(arg0) {
          return callback(...arguments);
        };
      })());
    }
  }
  let obj = {};
  obj = { title: t("Reset Password"), titleStyle: closure_11.headerText };
  const items1 = [React2.jsx(navigation(email[14]).Header, { title: t("Reset Password"), titleStyle: closure_11.headerText }), ];
  obj = { style: closure_11.mainContainer };
  const obj1 = { placeholder: "Enter New password" };
  const obj2 = { marginTop: navigation(email[15]).perfectSize(40) };
  obj1.containerStyle = obj2;
  obj1.value = first;
  obj1.onChangeText = function onChangeText(arg0) {
    lib(arg0);
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
  obj1.onFocus = function onFocus() {
    callback2(true);
  };
  obj1.onBlur = function onBlur() {
    callback2(false);
  };
  obj1.secureTextEntry = first1;
  const obj3 = { name: null, size: 20, color: "gray" };
  let str3 = "eye-off";
  let str4 = "eye-off";
  if (first1) {
    str4 = "eye";
  }
  obj3.name = str4;
  obj1.rightIcon = <mod.default name={null} size={20} color="gray" />;
  obj1.iconPress = function iconPress() {
    callback3(!first1);
  };
  const obj4 = { source: navigation(email[16]).Icons.key };
  const defaultResult7 = first.default(React.useState(null), 2);
  obj4.style = { height: navigation(email[15]).perfectSize(20), width: navigation(email[15]).perfectSize(20) };
  obj1.leftIcon = <RN.Image source={navigation(email[16]).Icons.key} />;
  const items2 = [React2.jsx(navigation(email[14]).Input, { placeholder: "Enter New password" }), , , , ];
  let jsxResult = tmp5;
  if (tmp5) {
    const obj6 = { error: tmp5 };
    jsxResult = <first1.default error={tmp5} />;
  }
  items2[1] = jsxResult;
  const obj7 = {
    placeholder: "Enter your Confirm password",
    containerStyle: closure_11.containerInput,
    value: first2,
    onChangeText(arg0) {
      callback4(arg0);
    }
  };
  if (tmp13) {
    str = theme.primary;
  }
  obj7.borderColor = str;
  if (tmp13) {
    num = 1;
  }
  obj7.borderWidth = num;
  obj7.onFocus = function onFocus() {
    callback5(true);
  };
  obj7.onBlur = function onBlur() {
    callback5(false);
  };
  obj7.secureTextEntry = first3;
  const obj8 = { name: null, size: 20, color: "gray" };
  if (first3) {
    str3 = "eye";
  }
  obj8.name = str3;
  obj7.rightIcon = <mod.default name={null} size={20} color="gray" />;
  obj7.iconPress = function iconPress() {
    callback6(!first3);
  };
  const obj9 = { source: navigation(email[16]).Icons.key };
  const obj5 = { height: navigation(email[15]).perfectSize(20), width: navigation(email[15]).perfectSize(20) };
  obj9.style = { height: navigation(email[15]).perfectSize(20), width: navigation(email[15]).perfectSize(20) };
  obj7.leftIcon = <RN.Image source={navigation(email[16]).Icons.key} />;
  items2[2] = React2.jsx(navigation(email[14]).Input, {
    placeholder: "Enter your Confirm password",
    containerStyle: closure_11.containerInput,
    value: first2,
    onChangeText(arg0) {
      callback4(arg0);
    }
  });
  let jsxResult1 = tmp17;
  if (tmp17) {
    const obj11 = { error: tmp17 };
    jsxResult1 = <first1.default error={tmp17} />;
  }
  items2[3] = jsxResult1;
  const jsx = React2.jsx;
  const CustomButton = navigation(email[14]).CustomButton;
  if (defaultResult8[0]) {
    const obj12 = { isLoading: true, containerStyle: closure_11.sendBtn, backgroundColor: theme.primary };
    let jsxResult2 = <CustomButton isLoading containerStyle={closure_11.sendBtn} backgroundColor={theme.primary} />;
  } else {
    const obj13 = {
      btnText: mod2.default.SEND,
      onPress() {
          handleSend();
        },
      containerStyle: closure_11.sendBtn
    };
    ({ primary: obj15.backgroundColor, white: obj15.textColor } = theme);
    jsxResult2 = <CustomButton btnText={mod2.default.SEND} onPress={function onPress() {
      handleSend();
    }} containerStyle={closure_11.sendBtn} />;
  }
  items2[4] = jsxResult2;
  obj.children = items2;
  items1[1] = <RN.View style={closure_11.mainContainer} />;
  obj.children = items1;
  return React2.jsxs(navigation(email[14]).Container, { style: closure_11.mainContainer });
};
