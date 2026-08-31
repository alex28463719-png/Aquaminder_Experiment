// Module ID: 821
// Function ID: 9000
// Name: LoginScreen
// Dependencies: [1, 363, 38, 2, 119, 822, 501, 500, 712, 827, 251, 529, 644, 512, 828, 839, 669, 657, 671, 689, 780]
// Exports: default

// Module 821 (LoginScreen)
import _slicedToArray from "_slicedToArray" /* 38 */;
import getIteratorFn from "getIteratorFn" /* 119 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 363 */;
import _mod500 from "module_500" /* 500 */;
import _mod501 from "module_501" /* 501 */;
import Button from "Button" /* 712 */;
import PREDEF_RES from "PREDEF_RES" /* 780 */;
import appleAuth from "appleAuth" /* 822 */;
import ErrorComponent from "ErrorComponent" /* 827 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_11 from "jsxProd" /* 251 */;

let closure_2 = module_1(asyncGeneratorStep);
let closure_3 = module_1(_slicedToArray);
let closure_5 = _interopRequireWildcard(getIteratorFn);
let closure_6 = module_1(appleAuth);
let closure_7 = module_1(_mod501);
let closure_8 = module_1(_mod500);
let closure_9 = module_1(Button);
let closure_10 = module_1(ErrorComponent);
const StyleSheet = get_registerCallableModule.StyleSheet;
let obj = { mainContainer: { flex: 1, alignItems: "center" } };
obj = { flex: 1, justifyContent: "center", width: "100%", paddingHorizontal: require("module_25") };
obj.subContainer = obj;
obj = { height: require("module_48"), width: require("module_48"), borderWidth: 0.2, borderColor: "gray", borderRadius: require("module_48"), alignItems: "center", justifyContent: "center" };
obj.loadingContainer = obj;
obj.logoStyle = { height: require("module_113"), width: require("module_353"), marginTop: require("module_50"), marginBottom: require("module_20"), alignSelf: "center" };
let obj1 = { height: require("module_113"), width: require("module_353"), marginTop: require("module_50"), marginBottom: require("module_20"), alignSelf: "center" };
obj.titleText = { fontSize: require("module_18"), fontWeight: "bold" };
let obj2 = { fontSize: require("module_18"), fontWeight: "bold" };
obj.linkText = { marginTop: require("module_50"), marginBottom: require("module_5"), fontSize: require("module_14"), color: "gray" };
let obj3 = { marginTop: require("module_50"), marginBottom: require("module_5"), fontSize: require("module_14"), color: "gray" };
obj.containerInput = { marginTop: require("module_16") };
let obj5 = { fontSize: require("module_12"), color: "gray", alignSelf: "center", marginBottom: require("module_20"), fontWeight: "500" };
obj.dividerText = obj5;
let obj4 = { marginTop: require("module_16") };
obj.forgotText = { marginBottom: require("module_40"), alignSelf: "flex-end", fontSize: require("module_12"), fontWeight: "400", marginTop: require("module_10") };
let obj6 = { marginBottom: require("module_40"), alignSelf: "flex-end", fontSize: require("module_12"), fontWeight: "400", marginTop: require("module_10") };
obj.loginBtn = { marginBottom: require("module_20") };
obj.btnView = { flexDirection: "row", alignItems: "center", alignSelf: "center" };
const styles = StyleSheet.create(obj);

export default function LoginScreen() {
  _require = _require(529).useNavigation();
  const theme = _require(644).useTheme();
  const defaultResult = first.default(React.useState(false), 2);
  dependencyMap = defaultResult[1];
  const t = _require(512).useTranslation().t;
  closure_2 = t;
  const defaultResult1 = first.default(React.useState(""), 2);
  first = defaultResult1[0];
  const RN = defaultResult1[1];
  [tmp6, closure_5] = first.default(React.useState(null), 2);
  const defaultResult3 = first.default(React.useState(""), 2);
  const first1 = defaultResult3[0];
  const mod = defaultResult3[1];
  const defaultResult2 = first.default(React.useState(null), 2);
  [tmp10, closure_8] = first.default(React.useState(null), 2);
  const defaultResult4 = first.default(React.useState(null), 2);
  [tmp12, closure_9] = first.default(React.useState(false), 2);
  const defaultResult5 = first.default(React.useState(false), 2);
  [tmp14, closure_10] = first.default(React.useState(false), 2);
  const defaultResult7 = first.default(React.useState(true), 2);
  const first2 = defaultResult7[0];
  closure_12 = defaultResult7[1];
  const defaultResult6 = first.default(React.useState(false), 2);
  [tmp18, _interopRequireWildcard] = first.default(React.useState(false), 2);
  const defaultResult8 = first.default(React.useState(false), 2);
  [tmp20, closure_14] = first.default(React.useState(false), 2);
  const focusEffect = _require(529).useFocusEffect(React.useCallback(() => {
    closure_0 = lib.BackHandler.addEventListener("hardwareBackPress", function onBackPress() {
      return true;
    });
    return () => closure_0.remove();
  }, []));
  closure_15 = (() => {
    closure_0 = t.default(async () => {
      closure_2_1(true);
      try {
        const GoogleSignin = navigation(828).GoogleSignin;
        let obj = { iosClientId: navigation(839).GOOGLE_IOS_CLIENT_ID, webClientId: navigation(839).GOOGLE_WEB_CLIENT_ID, offlineAccess: true };
        GoogleSignin.configure(obj);
        const GoogleSignin2 = navigation(828).GoogleSignin;
        obj = { showPlayServicesUpdateDialog: true };
        yield GoogleSignin2.hasPlayServices(obj);
        const GoogleSignin3 = navigation(828).GoogleSignin;
        const tmp9 = yield GoogleSignin3.signIn();
        let type;
        if (tmp9 != null) {
          type = tmp10.type;
        }
        if (type === "cancelled") {
          const Alert = closure_4.Alert;
          Alert.alert("Cancelled", "Google sign-in was cancelled by the user.");
          closure_2_1(false);
        } else {
          let id;
          if (tmp10 != null) {
            const data = tmp10.data;
            if (data != null) {
              const user = tmp15.user;
              if (user != null) {
                id = user.id;
              }
            }
          }
          let str2 = id;
          if (!id) {
            str2 = "";
          }
          obj = {};
          let email;
          if (tmp10 != null) {
            const data2 = tmp10.data;
            if (data2 != null) {
              const user2 = tmp23.user;
              if (user2 != null) {
                email = user2.email;
              }
            }
          }
          let str3 = email;
          if (!email) {
            str3 = "";
          }
          obj.email = str3;
          obj.social_login = true;
          let name;
          if (tmp10 != null) {
            const data3 = tmp9.data;
            if (data3 != null) {
              const user3 = tmp28.user;
              if (user3 != null) {
                name = user3.name;
              }
            }
          }
          let str4 = name;
          if (!name) {
            str4 = "";
          }
          obj.name = str4;
          obj.provider = "google";
          obj.id_token = str2;
          obj.user_social_id = str2;
          const tmp33 = yield closure_0(closure_1[16]).loginApi(obj, {});
          closure_2_1(false);
          if (tmp33 != null) {
            const data4 = tmp33.data;
          }
          yield closure_0(closure_1[17]).setUserData(data4);
          const obj1 = { screen: closure_3_8.default.Home };
          navigation.navigate(closure_3_8.default.Main, obj1);
        }
      } catch (tmp47) {
        closure_2_1(false);
        const code = tmp47.code;
        let str8 = "Failed to sign in with Google. Please try again.";
        if (tmp47.code === "SIGN_IN_CANCELLED") {
          str8 = "Sign-in was cancelled";
        } else if (tmp48.code === "SIGN_IN_REQUIRED") {
          str8 = "User has not signed in yet";
        } else {
          if (tmp48.code === "PLAY_SERVICES_NOT_AVAILABLE") {
            str8 = "Play services not available or outdated";
          } else if (tmp48.code !== "SIGN_IN_FAILED") {
            if (tmp48.message) {
              str8 = tmp47.message;
            }
          }
          str8 = "Sign in failed. Please check your internet connection and try again.";
        }
        const Alert2 = closure_4.Alert;
        Alert2.alert("Google Sign-In Error", str8);
      }
    });
    return function handleGoogleLogin() {
      return callback(...arguments);
    };
  })();
  closure_16 = (() => {
    closure_0 = t.default(async () => {
      closure_2_14(true);
      try {
        let obj = { requestedOperation: first1.default.Operation.LOGIN };
        const items = [first1.default.Scope.FULL_NAME, first1.default.Scope.EMAIL];
        obj.requestedScopes = items;
        const tmp4 = yield first1.default.performRequest(obj);
        if (tmp4) {
          if (tmp5.user) {
            const user = tmp5.user;
            ({ email, fullName } = tmp5);
            const _HermesInternal = HermesInternal;
            let combined = "" + user + "@apple-user.com";
            if (fullName == null) {
              let str5 = "Name Name";
              if (tmp14 != null) {
                str5 = "Name Name";
              }
              obj = {};
              if (email) {
                combined = email;
              }
              obj.email = combined;
              obj.social_login = true;
              obj.name = str5;
              obj.provider = "apple";
              obj.id_token = tmp5.identityToken;
              obj.user_social_id = user;
              const tmp32 = yield closure_0(closure_1[16]).loginApi(obj, {});
              if (tmp32) {
                closure_2_14(false);
                if (tmp33 != null) {
                  const data = tmp32.data;
                }
                yield closure_0(closure_1[17]).setUserData(data);
                obj = { screen: closure_3_8.default.Home };
                navigation.navigate(closure_3_8.default.Main, obj);
              }
              closure_2_14(false);
            }
            let givenName;
            if (fullName != null) {
              givenName = tmp14.givenName;
            }
            let str6 = "";
            if (givenName != null) {
              str6 = givenName;
            }
            let familyName;
            if (fullName != null) {
              familyName = fullName.familyName;
            }
            let str7 = "";
            if (familyName != null) {
              str7 = familyName;
            }
            const _HermesInternal2 = HermesInternal;
            str5 = "" + str6 + " " + str7.trim();
            const str9 = "" + str6 + " " + str7;
          }
        }
        const _Error = Error;
        const error = new Error("Apple Sign-In failed");
        throw error;
      } catch (tmp45) {
        closure_2_14(false);
        throw tmp45;
      }
    });
    return function handleAppleLogin() {
      return callback(...arguments);
    };
  })();
  function isValidation() {
    if (first.trim() === "") {
      callback(t("Email cannot be empty."));
      let flag = false;
    } else if (navigation(657).validateEmail(first)) {
      tmp4(null);
      flag = true;
    } else {
      tmp4(t("Invalid email address format."));
      flag = false;
    }
    if (first1.trim() === "") {
      callback3(t("Password cannot be empty."));
      flag = false;
    } else if (first1.length < 6) {
      callback3(t("Password must be at least 6 characters long."));
      flag = false;
    } else {
      callback3(null);
    }
    return flag;
  }
  function handleLogin() {
    if (isValidation()) {
      callback7(true);
      let obj = { email: first, password: first1, social_login: false };
      const loginApiResult = navigation(669).loginApi(obj, {});
      navigation(669).loginApi(obj, {}).then((() => {
        closure_0 = closure_2.default(async (arg0) => {
          if (obj) {
            return obj.resume();
          } else {
            closure_3_13(false);
            closure_3_4("");
            closure_3_7("");
            let data;
            if (arg0 != null) {
              data = arg0.data;
            }
            callback(table[17]).setUserData(data);
            obj = { screen: closure_4_8.default.Home };
            closure_3_0.navigate(closure_4_8.default.Main, obj);
          }
        });
        return function(arg0) {
          return callback(...arguments);
        };
      })()).catch((message) => {
        closure_1_13(false);
        Alert = Alert.Alert;
        message = undefined;
        if (message != null) {
          message = message.message;
        }
        Alert.alert(message);
      });
      const nextPromise = navigation(669).loginApi(obj, {}).then((() => {
        closure_0 = closure_2.default(async (arg0) => {
          if (obj) {
            return obj.resume();
          } else {
            closure_3_13(false);
            closure_3_4("");
            closure_3_7("");
            let data;
            if (arg0 != null) {
              data = arg0.data;
            }
            callback(table[17]).setUserData(data);
            obj = { screen: closure_4_8.default.Home };
            closure_3_0.navigate(closure_4_8.default.Main, obj);
          }
        });
        return function(arg0) {
          return callback(...arguments);
        };
      })());
    }
  }
  let obj = {};
  obj = { style: closure_12.mainContainer };
  obj = { style: closure_12.subContainer };
  let obj1 = { source: _require(689).Icons.logo2, style: closure_12.logoStyle };
  let items = [<RN.Image source={_require(689).Icons.logo2} style={closure_12.logoStyle} />, , , , , , , , ];
  const obj2 = {
    placeholder: "Enter your email",
    value: first,
    onChangeText(arg0) {
      lib(arg0);
    },
    onFocus() {
      callback4(true);
    }
  };
  let str = "gray";
  let str2 = "gray";
  if (tmp12) {
    str2 = theme.primary;
  }
  obj2.borderColor = str2;
  let num = 0.5;
  let num2 = 0.5;
  if (tmp12) {
    num2 = 1;
  }
  obj2.borderWidth = num2;
  obj2.onBlur = function onBlur() {
    callback4(false);
  };
  const obj3 = { source: _require(689).Icons.mail };
  const defaultResult9 = first.default(React.useState(false), 2);
  obj3.style = { height: _require(780).perfectSize(20), width: _require(780).perfectSize(20) };
  obj2.leftIcon = <RN.Image source={_require(689).Icons.mail} />;
  items[1] = first2.jsx(_require(671).Input, {
    placeholder: "Enter your email",
    value: first,
    onChangeText(arg0) {
      lib(arg0);
    },
    onFocus() {
      callback4(true);
    }
  });
  let jsxResult = tmp6;
  if (tmp6) {
    const obj5 = { error: tmp6 };
    jsxResult = <mod3.default error={tmp6} />;
  }
  items[2] = jsxResult;
  const obj6 = {
    placeholder: "Enter your password",
    containerStyle: closure_12.containerInput,
    value: first1,
    onChangeText(arg0) {
      callback2(arg0);
    }
  };
  if (tmp14) {
    str = theme.primary;
  }
  obj6.borderColor = str;
  if (tmp14) {
    num = 1;
  }
  obj6.borderWidth = num;
  obj6.onFocus = function onFocus() {
    callback5(true);
  };
  obj6.onBlur = function onBlur() {
    callback5(false);
  };
  obj6.secureTextEntry = first2;
  const obj7 = { name: null, size: 20, color: "gray" };
  let str3 = "eye-off";
  if (first2) {
    str3 = "eye";
  }
  obj7.name = str3;
  obj6.rightIcon = <mod2.default name={null} size={20} color="gray" />;
  obj6.iconPress = function iconPress() {
    callback6(!first2);
  };
  const obj8 = { source: _require(689).Icons.key };
  const obj4 = { height: _require(780).perfectSize(20), width: _require(780).perfectSize(20) };
  obj8.style = { height: _require(780).perfectSize(20), width: _require(780).perfectSize(20) };
  obj6.leftIcon = <RN.Image source={_require(689).Icons.key} />;
  items[3] = first2.jsx(_require(671).Input, {
    placeholder: "Enter your password",
    containerStyle: closure_12.containerInput,
    value: first1,
    onChangeText(arg0) {
      callback2(arg0);
    }
  });
  let jsxResult1 = tmp10;
  if (tmp10) {
    const obj10 = { error: tmp10 };
    jsxResult1 = <mod3.default error={tmp10} />;
  }
  items[4] = jsxResult1;
  const obj9 = { height: _require(780).perfectSize(20), width: _require(780).perfectSize(20) };
  const items1 = [closure_12.forgotText, { color: theme.primary }];
  items[5] = <RN.Text style={items1} onPress={function onPress() {
    navigation.navigate(closure_1_8.default.ForgotPassword);
  }}>{t("Forgot Password")}</RN.Text>;
  const jsx = first2.jsx;
  const CustomButton = _require(671).CustomButton;
  if (tmp18) {
    const obj12 = { isLoading: true, containerStyle: closure_12.loginBtn, backgroundColor: theme.primary };
    let jsxResult2 = <CustomButton isLoading containerStyle={closure_12.loginBtn} backgroundColor={theme.primary} />;
  } else {
    const obj13 = {
      btnText: mod.default.LOGIN,
      onPress() {
          handleLogin();
        },
      containerStyle: closure_12.loginBtn
    };
    ({ primary: obj15.backgroundColor, white: obj15.textColor } = theme);
    jsxResult2 = <CustomButton btnText={mod.default.LOGIN} onPress={function onPress() {
      handleLogin();
    }} containerStyle={closure_12.loginBtn} />;
  }
  items[6] = jsxResult2;
  items[7] = <RN.Text style={closure_12.dividerText}>{"Or login using"}</RN.Text>;
  const obj15 = { style: closure_12.btnView };
  ({ jsx: jsx2, jsxs } = first2);
  if (defaultResult[0]) {
    const obj16 = { style: closure_12.loadingContainer };
    const obj17 = { size: "small", color: theme.primary };
    obj16.children = <RN.ActivityIndicator size="small" color={theme.primary} />;
    let jsx2Result = jsx2(RN.View, obj16);
  } else {
    const obj18 = {
      isSocial: true,
      rightIcon: _require(689).Icons.googleLogo,
      onPress() {
          callback8();
        }
    };
    jsx2Result = jsx2(_require(671).CustomButton, obj18);
  }
  const items2 = [jsx2Result, ];
  if (RN.Platform.OS !== "ios") {
    items2[1] = null;
    obj15.children = items2;
    items[8] = <RN.View {...obj15} />;
    obj.children = items;
    const items3 = [<RN.View {...obj} />, ];
    const obj19 = { style: closure_12.linkText };
    const items4 = [t(mod.default.DONT_HAVE_AN_ACCOUNT), ];
    const obj20 = {};
    const obj21 = { color: theme.primary, fontWeight: "600" };
    obj20.style = obj21;
    obj20.onPress = function onPress() {
      navigation.navigate(closure_1_8.default.Signup);
    };
    const items5 = [" ", t(mod.default.REGISTER)];
    obj20.children = items5;
    items4[1] = <RN.Text />;
    obj19.children = items4;
    items3[1] = <RN.Text style={closure_12.linkText} />;
    obj.children = items3;
    obj.children = <RN.View {...obj} />;
    return first2.jsx(_require(671).Container, obj);
  } else {
    let ActivityIndicator = first2;
    const jsx3 = first2.jsx;
    if (tmp20) {
      const obj22 = { style: closure_12.loadingContainer };
      ActivityIndicator = RN.ActivityIndicator;
      const obj23 = { size: "small", color: theme.primary };
      obj22.children = <ActivityIndicator size="small" color={theme.primary} />;
      let jsx3Result = jsx3(RN.View, obj22);
    } else {
      const obj24 = {
        isSocial: true,
        rightIcon: _require(689).Icons.appleLogo,
        rightTintColor: "#000",
        onPress() {
              callback9();
            },
        btnText: "Google"
      };
      const obj25 = { marginLeft: _require(780).perfectSize(10) };
      obj24.socialContainerStyle = obj25;
      jsx3Result = jsx3(_require(671).CustomButton, obj24);
    }
  }
};
