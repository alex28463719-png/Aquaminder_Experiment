// Module ID: 844
// Function ID: 9173
// Name: ForgotPasswordScreen
// Dependencies: [1, 363, 38, 2, 119, 500, 501, 827, 251, 529, 512, 644, 657, 669, 671, 689, 780]
// Exports: default

// Module 844 (ForgotPasswordScreen)
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
let closure_7 = module_1(_mod501);
let closure_8 = module_1(ErrorComponent);
const StyleSheet = get_registerCallableModule.StyleSheet;
let obj = {};
obj = { flex: 1, paddingHorizontal: require("module_25") };
obj.mainContainer = obj;
obj = { fontSize: require("module_18"), fontWeight: "400", color: "#000", marginTop: require("module_30") };
obj.titleText = obj;
obj.forgotBtn = { marginTop: require("module_50") };
let obj2 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: require("module_30"), width: "100%" };
obj.inputContainer = obj2;
let obj3 = { justifyContent: "center", alignItems: "center", height: require("module_50"), borderRadius: require("module_50"), borderWidth: 1, width: require("module_50"), marginRight: require("module_5") };
obj.input = obj3;
let obj4 = { color: "gray", fontSize: require("module_14"), fontWeight: "400", marginTop: require("module_20") };
obj.descText = obj4;
obj.linkText = { fontWeight: "600" };
const styles = StyleSheet.create(obj);

export default function ForgotPasswordScreen() {
  _require = _require(529).useNavigation();
  const t = _require(512).useTranslation().t;
  dependencyMap = t;
  let str = "";
  const defaultResult = closure_3.default(React.useState(""), 2);
  const first = defaultResult[0];
  closure_3 = defaultResult[1];
  [tmp4, get_registerCallableModule] = closure_3.default(React.useState(null), 2);
  const defaultResult1 = closure_3.default(React.useState(null), 2);
  [tmp6, closure_5] = closure_3.default(React.useState(false), 2);
  let primary = _require(644).useTheme();
  const defaultResult2 = closure_3.default(React.useState(false), 2);
  [tmp8, closure_6] = closure_3.default(React.useState(false), 2);
  const defaultResult3 = closure_3.default(React.useState(false), 2);
  [tmp10, closure_7] = closure_3.default(React.useState(false), 2);
  const defaultResult5 = closure_3.default(React.useState(false), 2);
  const first1 = defaultResult5[0];
  const React2 = defaultResult5[1];
  const defaultResult6 = closure_3.default(React.useState(""), 2);
  const first2 = defaultResult6[0];
  closure_11 = defaultResult6[1];
  const defaultResult7 = closure_3.default(React.useState(""), 2);
  const first3 = defaultResult7[0];
  closure_13 = defaultResult7[1];
  const defaultResult8 = closure_3.default(React.useState(""), 2);
  const first4 = defaultResult8[0];
  closure_15 = defaultResult8[1];
  const defaultResult9 = closure_3.default(React.useState(""), 2);
  const first5 = defaultResult9[0];
  closure_17 = defaultResult9[1];
  const defaultResult10 = closure_3.default(React.useState(""), 2);
  const first6 = defaultResult10[0];
  closure_19 = defaultResult10[1];
  const defaultResult11 = closure_3.default(React.useState(""), 2);
  const first7 = defaultResult11[0];
  closure_21 = defaultResult11[1];
  const defaultResult4 = closure_3.default(React.useState(false), 2);
  [tmp26, closure_22] = closure_3.default(React.useState(null), 2);
  const defaultResult12 = closure_3.default(React.useState(null), 2);
  const ref1 = React.useRef(null);
  const ref2 = React.useRef(null);
  const ref3 = React.useRef(null);
  const ref4 = React.useRef(null);
  const ref5 = React.useRef(null);
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
    return flag;
  }
  closure_29 = (() => {
    closure_0 = first.default(async () => {
      if (obj) {
        return obj.resume();
      } else if (closure_2_28()) {
        closure_2_9(true);
        obj = { email: closure_2_2 };
        const forgotApiResult = callback(table[13]).forgotApi(obj, {});
        callback(table[13]).forgotApi(obj, {}).then((() => {
          closure_0 = first.default(async (arg0) => {
            if (obj) {
              return obj.resume();
            } else {
              closure_5_6(false);
              closure_5_9(true);
            }
          });
          return function(arg0) {
            return callback(...arguments);
          };
        })()).catch((message) => {
          closure_3_6(false);
          closure_3_9(false);
          const Alert = closure_4_4.Alert;
          message = undefined;
          if (message != null) {
            message = message.message;
          }
          Alert.alert(message);
        });
        const nextPromise = callback(table[13]).forgotApi(obj, {}).then((() => {
          closure_0 = first.default(async (arg0) => {
            if (obj) {
              return obj.resume();
            } else {
              closure_5_6(false);
              closure_5_9(true);
            }
          });
          return function(arg0) {
            return callback(...arguments);
          };
        })());
      }
    });
    return function handlesend() {
      return callback(...arguments);
    };
  })();
  function isValidCode() {
    if (first2.trim() !== "") {
      if (first3.trim() !== "") {
        if (first4.trim() !== "") {
          if (first5.trim() !== "") {
            if (first6.trim() !== "") {
              if (first7.trim() !== "") {
                callback11(null);
                let flag = true;
              }
              return flag;
            }
          }
        }
      }
    }
    callback11(dependencyMap("Code cannot be empty."));
    flag = false;
  }
  closure_31 = (() => {
    closure_0 = first.default(async () => {
      if (obj) {
        return obj.resume();
      } else if (closure_2_30()) {
        closure_2_7(true);
        const _Number = Number;
        obj = { email: closure_2_2, otp: Number(closure_2_10 + closure_2_12 + closure_2_14 + closure_2_16 + closure_2_18 + closure_2_20) };
        const verifyEmailApiResult = callback(table[13]).verifyEmailApi(obj, {});
        callback(table[13]).verifyEmailApi(obj, {}).then((() => {
          closure_0 = first.default(async (arg0) => {
            if (obj) {
              return obj.resume();
            } else {
              closure_5_7(false);
              closure_5_9(false);
              closure_5_11("");
              closure_5_13("");
              closure_5_15("");
              closure_5_17("");
              closure_5_19("");
              closure_5_21("");
              obj = { email: closure_5_2 };
              navigation.navigate(closure_6_6.default.ResetPassword, obj);
            }
          });
          return function(arg0) {
            return callback(...arguments);
          };
        })()).catch((message) => {
          closure_3_7(false);
          closure_3_9(true);
          const Alert = closure_4_4.Alert;
          message = undefined;
          if (message != null) {
            message = message.message;
          }
          Alert.alert(message);
        });
        const nextPromise = callback(table[13]).verifyEmailApi(obj, {}).then((() => {
          closure_0 = first.default(async (arg0) => {
            if (obj) {
              return obj.resume();
            } else {
              closure_5_7(false);
              closure_5_9(false);
              closure_5_11("");
              closure_5_13("");
              closure_5_15("");
              closure_5_17("");
              closure_5_19("");
              closure_5_21("");
              obj = { email: closure_5_2 };
              navigation.navigate(closure_6_6.default.ResetPassword, obj);
            }
          });
          return function(arg0) {
            return callback(...arguments);
          };
        })());
      }
    });
    return function handleVerify() {
      return callback(...arguments);
    };
  })();
  closure_32 = (() => {
    closure_0 = first.default(async () => obj ? obj.resume() : undefined);
    return function handleResend() {
      return callback(...arguments);
    };
  })();
  let obj = {};
  obj = { isBack: true };
  if (!first1) {
    str = mod.default.ForgotPassword;
  }
  obj.title = str;
  obj.backPress = function backPress() {
    if (first1) {
      callback("");
      callback4(false);
    } else {
      navigation.goBack();
    }
  };
  const items = [React2.jsx(_require(671).Header, { isBack: true }), ];
  let obj2 = React2;
  const jsxs = React2.jsxs;
  const View = get_registerCallableModule.View;
  obj = {};
  const mainContainer = first2.mainContainer;
  if (first1) {
    const items1 = [mainContainer, ];
    const obj1 = { alignItems: "center" };
    items1[1] = obj1;
    obj.style = items1;
    obj2 = { style: first2.titleText, children: t("Enter Verification Code") };
    const items2 = [<tmp34.Text style={first2.titleText}>{t("Enter Verification Code")}</tmp34.Text>, , , ];
    const obj3 = {};
    const obj4 = { style: first2.inputContainer };
    const obj5 = { style: first2.input };
    const obj6 = {
      ref,
      keyboardType: "numeric",
      numberOfLines: 1,
      maxLength: 1,
      value: first2,
      onChangeText(str) {
          const replaced = str.replace(/[^0-9]/g, "");
          callback5(replaced);
          if (replaced) {
            if (ref1.current) {
              const current = ref1.current;
              current.focus();
            }
          }
        }
    };
    obj5.children = <tmp34.TextInput ref={ref} keyboardType="numeric" numberOfLines={1} maxLength={1} value={first2} onChangeText={function onChangeText(str) {
      const replaced = str.replace(/[^0-9]/g, "");
      callback5(replaced);
      if (replaced) {
        if (ref1.current) {
          const current = ref1.current;
          current.focus();
        }
      }
    }} />;
    const items3 = [<tmp34.View style={first2.input} />, , , , , ];
    const obj7 = { style: first2.input };
    const obj8 = {
      ref: ref1,
      keyboardType: "numeric",
      numberOfLines: 1,
      maxLength: 1,
      value: first3,
      onChangeText(str) {
          const replaced = str.replace(/[^0-9]/g, "");
          callback6(replaced);
          if (replaced) {
            if (ref2.current) {
              const current = ref2.current;
              current.focus();
            }
          }
        }
    };
    obj7.children = <tmp34.TextInput ref={ref1} keyboardType="numeric" numberOfLines={1} maxLength={1} value={first3} onChangeText={function onChangeText(str) {
      const replaced = str.replace(/[^0-9]/g, "");
      callback6(replaced);
      if (replaced) {
        if (ref2.current) {
          const current = ref2.current;
          current.focus();
        }
      }
    }} />;
    items3[1] = <tmp34.View style={first2.input} />;
    const obj9 = { style: first2.input };
    const obj10 = {
      ref: ref2,
      keyboardType: "numeric",
      numberOfLines: 1,
      maxLength: 1,
      value: first4,
      onChangeText(str) {
          const replaced = str.replace(/[^0-9]/g, "");
          callback7(replaced);
          if (replaced) {
            if (ref3.current) {
              const current = ref3.current;
              current.focus();
            }
          }
        }
    };
    obj9.children = <tmp34.TextInput ref={ref2} keyboardType="numeric" numberOfLines={1} maxLength={1} value={first4} onChangeText={function onChangeText(str) {
      const replaced = str.replace(/[^0-9]/g, "");
      callback7(replaced);
      if (replaced) {
        if (ref3.current) {
          const current = ref3.current;
          current.focus();
        }
      }
    }} />;
    items3[2] = <tmp34.View style={first2.input} />;
    const obj11 = { style: first2.input };
    const obj12 = {
      ref: ref3,
      keyboardType: "numeric",
      numberOfLines: 1,
      maxLength: 1,
      value: first5,
      onChangeText(str) {
          const replaced = str.replace(/[^0-9]/g, "");
          callback8(replaced);
          if (replaced) {
            if (ref3.current) {
              const current = ref4.current;
              current.focus();
            }
          }
        }
    };
    obj11.children = <tmp34.TextInput ref={ref3} keyboardType="numeric" numberOfLines={1} maxLength={1} value={first5} onChangeText={function onChangeText(str) {
      const replaced = str.replace(/[^0-9]/g, "");
      callback8(replaced);
      if (replaced) {
        if (ref3.current) {
          const current = ref4.current;
          current.focus();
        }
      }
    }} />;
    items3[3] = <tmp34.View style={first2.input} />;
    const obj13 = { style: first2.input };
    const obj14 = {
      ref: ref4,
      keyboardType: "numeric",
      numberOfLines: 1,
      maxLength: 1,
      value: first6,
      onChangeText(str) {
          const replaced = str.replace(/[^0-9]/g, "");
          callback9(replaced);
          if (replaced) {
            if (ref4.current) {
              const current = ref5.current;
              current.focus();
            }
          }
        }
    };
    obj13.children = <tmp34.TextInput ref={ref4} keyboardType="numeric" numberOfLines={1} maxLength={1} value={first6} onChangeText={function onChangeText(str) {
      const replaced = str.replace(/[^0-9]/g, "");
      callback9(replaced);
      if (replaced) {
        if (ref4.current) {
          const current = ref5.current;
          current.focus();
        }
      }
    }} />;
    items3[4] = <tmp34.View style={first2.input} />;
    const obj15 = { style: first2.input };
    const obj16 = {
      ref: ref5,
      keyboardType: "numeric",
      numberOfLines: 1,
      maxLength: 1,
      value: first7,
      onChangeText(str) {
          callback10(str.replace(/[^0-9]/g, ""));
        }
    };
    obj15.children = <tmp34.TextInput ref={ref5} keyboardType="numeric" numberOfLines={1} maxLength={1} value={first7} onChangeText={function onChangeText(str) {
      callback10(str.replace(/[^0-9]/g, ""));
    }} />;
    items3[5] = <tmp34.View style={first2.input} />;
    obj4.children = items3;
    const items4 = [<tmp34.View style={first2.inputContainer} />, ];
    let jsxResult = tmp26;
    if (tmp26) {
      const obj17 = { error: tmp26 };
      jsxResult = <first1.default error={tmp26} />;
    }
    items4[1] = jsxResult;
    obj3.children = items4;
    items2[1] = <tmp34.View />;
    const obj18 = { style: first2.descText };
    const items5 = [t(`${closure_7.default.IF_YOU_DIDNT_RECEIVE_A_CODE} `), ];
    const obj19 = {};
    const items6 = [first2.linkText, ];
    const obj20 = { color: primary.primary };
    items6[1] = obj20;
    obj19.style = items6;
    obj19.onPress = function onPress() {
      callback14();
    };
    obj19.children = t(mod2.default.RESEND);
    items5[1] = <get registerCallableModule.Text />;
    obj18.children = items5;
    items2[2] = <get registerCallableModule.Text style={first2.descText} />;
    const jsx2 = React2.jsx;
    const CustomButton2 = _require(671).CustomButton;
    if (tmp10) {
      const obj21 = { isLoading: true, containerStyle: first2.forgotBtn };
      primary = primary.primary;
      obj21.backgroundColor = primary;
      let jsx2Result = jsx2(CustomButton2, obj21);
    } else {
      const obj22 = {
        btnText: mod2.default.VERIFY_CODE,
        onPress() {
              callback13();
            },
        containerStyle: first2.forgotBtn
      };
      ({ primary: obj32.backgroundColor, white: obj32.textColor } = primary);
      jsx2Result = jsx2(CustomButton2, obj22);
    }
    items2[3] = jsx2Result;
    obj.children = items2;
    <View {...obj} />;
  } else {
    obj.style = mainContainer;
    const obj23 = {
      placeholder: "Enter your email",
      value: first,
      onChangeText(arg0) {
          callback(arg0);
        },
      onFocus() {
          callback3(true);
        }
    };
    let str3 = "gray";
    if (tmp6) {
      str3 = primary.primary;
    }
    obj23.borderColor = str3;
    let num = 0.5;
    if (tmp6) {
      num = 1;
    }
    obj23.borderWidth = num;
    obj23.onBlur = function onBlur() {
      callback3(false);
    };
    const obj24 = { source: _require(689).Icons.mail };
    const obj25 = { height: _require(780).perfectSize(20), width: _require(780).perfectSize(20) };
    obj24.style = obj25;
    obj23.leftIcon = <get registerCallableModule.Image source={_require(689).Icons.mail} />;
    const obj26 = { marginTop: _require(780).perfectSize(40) };
    obj23.containerStyle = obj26;
    const items7 = [
      obj2.jsx(_require(671).Input, {
          placeholder: "Enter your email",
          value: first,
          onChangeText(arg0) {
              callback(arg0);
            },
          onFocus() {
              callback3(true);
            }
        }),
  ,

    ];
    let jsxResult1 = tmp4;
    if (tmp4) {
      const obj27 = { error: tmp4 };
      jsxResult1 = <first1.default error={tmp4} />;
    }
    items7[1] = jsxResult1;
    const jsx = React2.jsx;
    const CustomButton = _require(671).CustomButton;
    if (tmp8) {
      const obj28 = { isLoading: true, containerStyle: first2.forgotBtn, backgroundColor: primary.primary };
      let jsxResult2 = <CustomButton isLoading containerStyle={first2.forgotBtn} backgroundColor={primary.primary} />;
    } else {
      const obj29 = {
        btnText: mod2.default.SEND,
        onPress() {
              callback12();
            },
        containerStyle: first2.forgotBtn
      };
      ({ primary: obj10.backgroundColor, white: obj10.textColor } = primary);
      jsxResult2 = <CustomButton btnText={mod2.default.SEND} onPress={function onPress() {
        callback12();
      }} containerStyle={first2.forgotBtn} />;
    }
    items7[2] = jsxResult2;
    obj.children = items7;
    items[1] = <View {...obj} />;
    obj.children = items;
    return React2.jsxs(_require(671).Container, obj);
  }
};
