// Module ID: 840
// Function ID: 9118
// Name: SignupScreen
// Dependencies: [1, 363, 38, 2, 119, 501, 500, 712, 827, 251, 529, 644, 512, 657, 669, 671, 689, 780]
// Exports: default

// Module 840 (SignupScreen)
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
let closure_6 = module_1(_mod501);
let closure_7 = module_1(_mod500);
let closure_8 = module_1(Button);
let closure_9 = module_1(ErrorComponent);
const StyleSheet = get_registerCallableModule.StyleSheet;
let obj = { mainContainer: { flex: 1, alignItems: "center" } };
obj = { height: require("module_48"), width: "100%", alignSelf: "center", shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 2, justifyContent: "center", alignItems: "center" };
obj.loadingContainer = obj;
obj = { height: require("module_113"), width: require("module_353"), marginTop: require("module_50"), marginBottom: require("module_30"), alignSelf: "center" };
obj.logoStyle = obj;
obj.titleText = { fontSize: require("module_18"), fontWeight: "bold", marginBottom: require("module_40") };
let obj1 = { fontSize: require("module_18"), fontWeight: "bold", marginBottom: require("module_40") };
obj.linkText = { marginTop: require("module_50"), marginBottom: require("module_10"), fontSize: require("module_14"), color: "gray" };
let obj3 = { flex: 1, justifyContent: "center", width: "100%", paddingHorizontal: require("module_25") };
obj.btnContainer = obj3;
let obj2 = { marginTop: require("module_50"), marginBottom: require("module_10"), fontSize: require("module_14"), color: "gray" };
obj.containerInput = { marginTop: require("module_16") };
let obj4 = { marginTop: require("module_16") };
obj.signupBtn = { marginBottom: require("module_20"), marginTop: require("module_40") };
let obj6 = { fontSize: require("module_12"), color: "gray", alignSelf: "center", marginBottom: require("module_20"), fontWeight: "500" };
obj.dividerText = obj6;
obj.btnView = { flexDirection: "row", alignItems: "center", alignSelf: "center" };
const styles = StyleSheet.create(obj);

export default function SignupScreen() {
  _require = _require(529).useNavigation();
  const theme = _require(644).useTheme();
  const t = _require(512).useTranslation().t;
  dependencyMap = t;
  const defaultResult = closure_3.default(first1.useState(""), 2);
  const first = defaultResult[0];
  closure_3 = defaultResult[1];
  [tmp5, get_registerCallableModule] = closure_3.default(first1.useState(null), 2);
  const defaultResult2 = closure_3.default(first1.useState(""), 2);
  first1 = defaultResult2[0];
  const mod = defaultResult2[1];
  const defaultResult1 = closure_3.default(first1.useState(null), 2);
  [tmp9, closure_7] = closure_3.default(first1.useState(null), 2);
  const defaultResult3 = closure_3.default(first1.useState(null), 2);
  [tmp11, closure_8] = closure_3.default(first1.useState(false), 2);
  const defaultResult4 = closure_3.default(first1.useState(false), 2);
  [tmp13, closure_9] = closure_3.default(first1.useState(false), 2);
  const defaultResult6 = closure_3.default(first1.useState(true), 2);
  const first2 = defaultResult6[0];
  closure_11 = defaultResult6[1];
  const defaultResult7 = closure_3.default(first1.useState(""), 2);
  const first3 = defaultResult7[0];
  closure_13 = defaultResult7[1];
  const defaultResult5 = closure_3.default(first1.useState(false), 2);
  [tmp19, closure_14] = closure_3.default(first1.useState(false), 2);
  const defaultResult9 = closure_3.default(first1.useState(""), 2);
  const first4 = defaultResult9[0];
  closure_16 = defaultResult9[1];
  const defaultResult8 = closure_3.default(first1.useState(false), 2);
  [tmp23, closure_17] = closure_3.default(first1.useState(false), 2);
  const defaultResult11 = closure_3.default(first1.useState(true), 2);
  const first5 = defaultResult11[0];
  closure_19 = defaultResult11[1];
  const defaultResult10 = closure_3.default(first1.useState(false), 2);
  [tmp27, closure_20] = closure_3.default(first1.useState(null), 2);
  const defaultResult13 = closure_3.default(first1.useState(false), 2);
  closure_21 = defaultResult13[1];
  function isValidation() {
    if (first.trim() === "") {
      callback2(dependencyMap("Email cannot be empty."));
      let flag = false;
    } else if (navigation(657).validateEmail(first)) {
      tmp4(null);
      flag = true;
    } else {
      tmp4(dependencyMap("Invalid email address format."));
      flag = false;
    }
    if (first1.trim() === "") {
      callback4(dependencyMap("Password cannot be empty."));
      flag = false;
    } else if (first1.length < 6) {
      callback4(dependencyMap("Password must be at least 6 characters long."));
      flag = false;
    } else {
      callback4(null);
    }
    if (first4.trim() === "") {
      callback13(dependencyMap("Confirm password cannot be empty."));
      flag = false;
    } else if (first4.length < 6) {
      callback13(dependencyMap("Confirm password must be at least 6 characters long."));
      flag = false;
    } else if (first1 !== first4) {
      callback13(dependencyMap("Confirm passwords do not match."));
      flag = false;
    } else {
      callback13(null);
    }
    return flag;
  }
  closure_23 = (() => {
    closure_0 = first.default(async () => {
      if (signupApiResult) {
        return signupApiResult.resume();
      } else if (closure_2_22()) {
        closure_2_21(true);
        signupApiResult = {};
        if (closure_2_12) {
          let NAME = closure_2_12;
        } else {
          NAME = mod.default.NAME;
        }
        signupApiResult.name = NAME;
        signupApiResult.email = closure_2_2;
        signupApiResult.password = closure_2_5;
        signupApiResult = callback(table[14]).signupApi(signupApiResult, {});
        signupApiResult.then((() => {
          closure_0 = first.default(async (arg0) => {
            closure_5_21(false);
            closure_5_13("");
            closure_5_3("");
            closure_5_6("");
            closure_5_16("");
            yield closure_0(closure_1[13]).clearDeviceData();
            let data;
            if (arg0 != null) {
              data = arg0.data;
            }
            navigation(657).setUserData(data);
            navigation.navigate(closure_6_7.default.Main, { screen: closure_6_7.default.Home });
          });
          return function(arg0) {
            return callback(...arguments);
          };
        })()).catch((message) => {
          closure_3_21(false);
          const Alert = closure_4_4.Alert;
          message = undefined;
          if (message != null) {
            message = message.message;
          }
          Alert.alert(message);
        });
        const nextPromise = signupApiResult.then((() => {
          closure_0 = first.default(async (arg0) => {
            closure_5_21(false);
            closure_5_13("");
            closure_5_3("");
            closure_5_6("");
            closure_5_16("");
            yield closure_0(closure_1[13]).clearDeviceData();
            let data;
            if (arg0 != null) {
              data = arg0.data;
            }
            navigation(657).setUserData(data);
            navigation.navigate(closure_6_7.default.Main, { screen: closure_6_7.default.Home });
          });
          return function(arg0) {
            return callback(...arguments);
          };
        })());
      }
    });
    return function handlesignup() {
      return callback(...arguments);
    };
  })();
  let obj = {};
  obj = { style: closure_11.mainContainer };
  obj = { style: closure_11.btnContainer };
  const obj1 = { source: _require(689).Icons.logo2, style: closure_11.logoStyle };
  const items = [<get registerCallableModule.Image source={_require(689).Icons.logo2} style={closure_11.logoStyle} />, , , , , , , , ];
  const obj2 = {
    placeholder: "Enter your name",
    value: first3,
    onChangeText(arg0) {
      callback8(arg0);
    },
    onFocus() {
      callback9(true);
    }
  };
  let str = "gray";
  let str2 = "gray";
  if (tmp19) {
    str2 = theme.primary;
  }
  obj2.borderColor = str2;
  let num = 0.5;
  let num2 = 0.5;
  if (tmp19) {
    num2 = 1;
  }
  obj2.borderWidth = num2;
  obj2.onBlur = function onBlur() {
    callback9(false);
  };
  const obj3 = { source: _require(689).Icons.userIC };
  const defaultResult12 = closure_3.default(first1.useState(null), 2);
  obj3.style = { height: _require(780).perfectSize(20), width: _require(780).perfectSize(20) };
  obj2.leftIcon = <get registerCallableModule.Image source={_require(689).Icons.userIC} />;
  items[1] = first2.jsx(_require(671).Input, {
    placeholder: "Enter your name",
    value: first3,
    onChangeText(arg0) {
      callback8(arg0);
    },
    onFocus() {
      callback9(true);
    }
  });
  const obj5 = {
    placeholder: "Enter your email",
    containerStyle: closure_11.containerInput,
    value: first,
    onChangeText(arg0) {
      callback(arg0);
    },
    onFocus() {
      callback5(true);
    }
  };
  let primary = str;
  if (tmp11) {
    primary = theme.primary;
  }
  obj5.borderColor = primary;
  let num3 = num;
  if (tmp11) {
    num3 = 1;
  }
  obj5.borderWidth = num3;
  obj5.onBlur = function onBlur() {
    callback5(false);
  };
  const obj6 = { source: _require(689).Icons.mail };
  const obj4 = { height: _require(780).perfectSize(20), width: _require(780).perfectSize(20) };
  obj6.style = { height: _require(780).perfectSize(20), width: _require(780).perfectSize(20) };
  obj5.leftIcon = <get registerCallableModule.Image source={_require(689).Icons.mail} />;
  items[2] = first2.jsx(_require(671).Input, {
    placeholder: "Enter your email",
    containerStyle: closure_11.containerInput,
    value: first,
    onChangeText(arg0) {
      callback(arg0);
    },
    onFocus() {
      callback5(true);
    }
  });
  let jsxResult = tmp5;
  if (tmp5) {
    const obj8 = { error: tmp5 };
    jsxResult = <mod3.default error={tmp5} />;
  }
  items[3] = jsxResult;
  const obj9 = {
    placeholder: "Enter your password",
    containerStyle: closure_11.containerInput,
    value: first1,
    onChangeText(arg0) {
      callback3(arg0);
    }
  };
  let primary2 = str;
  if (tmp13) {
    primary2 = theme.primary;
  }
  obj9.borderColor = primary2;
  let num4 = num;
  if (tmp13) {
    num4 = 1;
  }
  obj9.borderWidth = num4;
  obj9.onFocus = function onFocus() {
    callback6(true);
  };
  obj9.onBlur = function onBlur() {
    callback6(false);
  };
  obj9.secureTextEntry = first2;
  const obj10 = { name: null, size: 20, color: "gray" };
  let str3 = "eye-off";
  let str4 = "eye-off";
  if (first2) {
    str4 = "eye";
  }
  obj10.name = str4;
  obj9.rightIcon = <mod2.default name={null} size={20} color="gray" />;
  obj9.iconPress = function iconPress() {
    callback7(!first2);
  };
  const obj11 = { source: _require(689).Icons.key };
  const obj7 = { height: _require(780).perfectSize(20), width: _require(780).perfectSize(20) };
  obj11.style = { height: _require(780).perfectSize(20), width: _require(780).perfectSize(20) };
  obj9.leftIcon = <get registerCallableModule.Image source={_require(689).Icons.key} />;
  items[4] = first2.jsx(_require(671).Input, {
    placeholder: "Enter your password",
    containerStyle: closure_11.containerInput,
    value: first1,
    onChangeText(arg0) {
      callback3(arg0);
    }
  });
  let jsxResult1 = tmp9;
  if (tmp9) {
    const obj13 = { error: tmp9 };
    jsxResult1 = <mod3.default error={tmp9} />;
  }
  items[5] = jsxResult1;
  const obj14 = {
    placeholder: "Enter your confirm password",
    containerStyle: closure_11.containerInput,
    value: first4,
    onChangeText(arg0) {
      callback10(arg0);
    }
  };
  if (tmp23) {
    str = theme.primary;
  }
  obj14.borderColor = str;
  if (tmp23) {
    num = 1;
  }
  obj14.borderWidth = num;
  obj14.onFocus = function onFocus() {
    callback11(true);
  };
  obj14.onBlur = function onBlur() {
    callback11(false);
  };
  obj14.secureTextEntry = first5;
  const obj15 = { name: null, size: 20, color: "gray" };
  if (first5) {
    str3 = "eye";
  }
  obj15.name = str3;
  obj14.rightIcon = <mod2.default name={null} size={20} color="gray" />;
  obj14.iconPress = function iconPress() {
    callback12(!first5);
  };
  const obj16 = { source: _require(689).Icons.key };
  const obj12 = { height: _require(780).perfectSize(20), width: _require(780).perfectSize(20) };
  obj16.style = { height: _require(780).perfectSize(20), width: _require(780).perfectSize(20) };
  obj14.leftIcon = <get registerCallableModule.Image source={_require(689).Icons.key} />;
  items[6] = first2.jsx(_require(671).Input, {
    placeholder: "Enter your confirm password",
    containerStyle: closure_11.containerInput,
    value: first4,
    onChangeText(arg0) {
      callback10(arg0);
    }
  });
  let jsxResult2 = tmp27;
  if (tmp27) {
    const obj18 = { error: tmp27 };
    jsxResult2 = <mod3.default error={tmp27} />;
  }
  items[7] = jsxResult2;
  const jsx = first2.jsx;
  const CustomButton = _require(671).CustomButton;
  if (defaultResult13[0]) {
    const obj19 = { isLoading: true, containerStyle: closure_11.signupBtn, backgroundColor: theme.primary };
    let jsxResult3 = <CustomButton isLoading containerStyle={closure_11.signupBtn} backgroundColor={theme.primary} />;
  } else {
    const obj20 = {
      btnText: mod.default.SIGNUP,
      onPress() {
          callback14();
        },
      containerStyle: closure_11.signupBtn
    };
    ({ primary: obj22.backgroundColor, white: obj22.textColor } = theme);
    jsxResult3 = <CustomButton btnText={mod.default.SIGNUP} onPress={function onPress() {
      callback14();
    }} containerStyle={closure_11.signupBtn} />;
  }
  items[8] = jsxResult3;
  obj.children = items;
  const items1 = [<get registerCallableModule.View style={closure_11.btnContainer} />, ];
  const obj21 = { style: closure_11.linkText };
  const items2 = [t(mod.default.ALREADY_HAVE_AN_ACCOUNT), ];
  const obj22 = {
    style: obj23,
    onPress() {
      navigation.navigate(closure_1_7.default.Login);
    }
  };
  const items3 = [" ", t(mod.default.LOGIN)];
  obj22.children = items3;
  items2[1] = <get registerCallableModule.Text style={obj23} onPress={function onPress() {
    navigation.navigate(closure_1_7.default.Login);
  }} />;
  obj21.children = items2;
  items1[1] = <get registerCallableModule.Text style={closure_11.linkText} />;
  obj.children = items1;
  obj.children = <get registerCallableModule.View style={closure_11.btnContainer} />;
  return first2.jsx(_require(671).Container, { style: closure_11.btnContainer });
};
