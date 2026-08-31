// Module ID: 498
// Function ID: 5430
// Name: TabNavigator
// Dependencies: [1, 363, 38, 99, 119, 499, 785, 786, 787, 789, 790, 791, 813, 814, 821, 840, 658, 500, 841, 842, 843, 844, 845, 2, 846, 847, 848, 849, 251, 850, 939, 673, 644, 689, 780, 529]
// Exports: default

// Module 498 (TabNavigator)
import _slicedToArray from "_slicedToArray" /* 38 */;
import _defineProperty from "_defineProperty" /* 99 */;
import getIteratorFn from "getIteratorFn" /* 119 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 363 */;
import DeviceSearchScreen from "DeviceSearchScreen" /* 499 */;
import _mod500 from "module_500" /* 500 */;
import _mod658 from "module_658" /* 658 */;
import DeviceConnTipScreen from "DeviceConnTipScreen" /* 785 */;
import DeviceChooseVariantScreen from "DeviceChooseVariantScreen" /* 786 */;
import DevicesScreen from "DevicesScreen" /* 787 */;
import HomeScreen from "HomeScreen" /* 789 */;
import SchedulesScreen from "SchedulesScreen" /* 790 */;
import ScheduleEditScreen from "ScheduleEditScreen" /* 791 */;
import DiscoverScreen from "DiscoverScreen" /* 813 */;
import UserScreen from "UserScreen" /* 814 */;
import LoginScreen from "LoginScreen" /* 821 */;
import SignupScreen from "SignupScreen" /* 840 */;
import items2 from "items" /* 841 */;
import FAQScreen from "FAQScreen" /* 842 */;
import items3 from "items" /* 843 */;
import ForgotPasswordScreen from "ForgotPasswordScreen" /* 844 */;
import ResetPasswordScreen from "ResetPasswordScreen" /* 845 */;
import ContactUsScreen from "ContactUsScreen" /* 846 */;
import DiscoverDetailScreen from "DiscoverDetailScreen" /* 847 */;
import ProfileScreen from "ProfileScreen" /* 848 */;
import ProfileEditScreen from "ProfileEditScreen" /* 849 */;
import _mod850 from "module_850" /* 850 */;
import SceneStyleInterpolators from "SceneStyleInterpolators" /* 939 */;
import module_1 from "module_1" /* 1 */;
import closure_24 from "get registerCallableModule" /* 2 */;
import closure_29 from "jsxProd" /* 251 */;

let closure_2 = module_1(asyncGeneratorStep);
let closure_3 = module_1(_slicedToArray);
let closure_4 = module_1(_defineProperty);
let closure_5 = _interopRequireWildcard(getIteratorFn);
let closure_6 = module_1(DeviceSearchScreen);
let closure_7 = module_1(DeviceConnTipScreen);
let closure_8 = module_1(DeviceChooseVariantScreen);
let closure_9 = module_1(DevicesScreen);
let closure_10 = module_1(HomeScreen);
let closure_11 = module_1(SchedulesScreen);
let closure_12 = module_1(ScheduleEditScreen);
let closure_13 = module_1(DiscoverScreen);
let closure_14 = module_1(UserScreen);
let closure_15 = module_1(LoginScreen);
let closure_16 = module_1(SignupScreen);
let closure_17 = module_1(_mod658);
let closure_18 = module_1(_mod500);
let closure_19 = module_1(items2);
let closure_20 = module_1(FAQScreen);
let closure_21 = module_1(items3);
let closure_22 = module_1(ForgotPasswordScreen);
let closure_23 = module_1(ResetPasswordScreen);
let closure_25 = module_1(ContactUsScreen);
let closure_26 = module_1(DiscoverDetailScreen);
let closure_27 = module_1(ProfileScreen);
let closure_28 = module_1(ProfileEditScreen);
let closure_30 = _mod850.createNativeStackNavigator();
let closure_31 = SceneStyleInterpolators.createBottomTabNavigator();
function TabNavigator() {
  _require = _require(673).useSafeAreaInsets();
  dependencyMap = _require(644).useTheme();
  ({ default: _default, default: _default2, default: _default3, default: _default4 } = closure_4);
  const _default4Result = _default4({}, mod12.default.Home, _require(689).Icons.homeFill);
  const _default3Result = _default3(_default4({}, mod12.default.Home, _require(689).Icons.homeFill), mod12.default.Devices, _require(689).Icons.menuFill);
  closure_2 = _default(_default2(_default3(_default4({}, mod12.default.Home, _require(689).Icons.homeFill), mod12.default.Devices, _require(689).Icons.menuFill), mod12.default.Discover, _require(689).Icons.lightFill), mod12.default.Schedules, _require(689).Icons.clockFill);
  ({ default: _default5, default: _default6, default: _default7, default: _default8 } = closure_4);
  const _default2Result = _default2(_default3(_default4({}, mod12.default.Home, _require(689).Icons.homeFill), mod12.default.Devices, _require(689).Icons.menuFill), mod12.default.Discover, _require(689).Icons.lightFill);
  const _default8Result = _default8({}, mod12.default.Home, _require(689).Icons.home);
  const _default7Result = _default7(_default8({}, mod12.default.Home, _require(689).Icons.home), mod12.default.Devices, _require(689).Icons.menu);
  closure_3 = _default5(_default6(_default7(_default8({}, mod12.default.Home, _require(689).Icons.home), mod12.default.Devices, _require(689).Icons.menu), mod12.default.Discover, _require(689).Icons.lightMenu), mod12.default.Schedules, _require(689).Icons.clock);
  let obj = {
    screenOptions(route) {
      route = route.route;
      let obj = {
        tabBarIcon(focused) {
          ({ color, size } = focused);
          if (focused.focused) {
            let tmp3 = closure_1_2[route.name];
          } else {
            tmp3 = closure_1_3[route.name];
          }
          let obj = { source: tmp3 };
          obj = {};
          let num = 24;
          let num2 = 24;
          if (size != null) {
            num2 = size;
          }
          obj.width = num2;
          if (size != null) {
            num = size;
          }
          obj.height = num;
          obj.resizeMode = "contain";
          obj.style = obj;
          return <closure_2_24.Image />;
        },
        tabBarActiveTintColor: closure_1.primary2,
        tabBarInactiveTintColor: closure_1.white,
        headerShown: false
      };
      obj = { backgroundColor: closure_1.bottomtab, height: callback(closure_1[34]).perfectSize(55) + route.bottom, paddingBottom: route.bottom, borderTopWidth: 0, elevation: 0 };
      obj.tabBarStyle = obj;
      obj = { fontSize: callback(closure_1[34]).perfectSize(12), fontWeight: "500", marginTop: 2 };
      obj.tabBarLabelStyle = obj;
      obj.tabBarItemStyle = { flexDirection: "column", alignItems: "center", justifyContent: "center" };
      return obj;
    }
  };
  obj = { name: mod12.default.Home, component: mod5.default };
  const items = [<closure_31.Screen name={mod12.default.Home} component={mod5.default} />, , , ];
  obj = { name: mod12.default.Devices, component: mod4.default };
  items[1] = <closure_31.Screen name={mod12.default.Devices} component={mod4.default} />;
  items[2] = <closure_31.Screen name={mod12.default.Discover} component={mod8.default} />;
  items[3] = <closure_31.Screen name={mod12.default.Schedules} component={mod6.default} />;
  obj.children = items;
  return <closure_31.Navigator name={mod12.default.Devices} component={mod4.default} />;
}

export default function AppNavigator() {
  const defaultResult = closure_3.default(React.useState(null), 2);
  const first = defaultResult[0];
  const _require = defaultResult[1];
  const theme = _require(644).useTheme();
  const effect = React.useEffect(() => {
    callback();
  }, []);
  dependencyMap = (() => {
    closure_0 = closure_1_2.default(async () => {
      try {
        if (yield _default.getItem("userData")) {
          tmp2("Main");
        } else {
          tmp2(closure_3_18.default.Login);
        }
      } catch (err) {
        callback(closure_3_18.default.Login);
      }
    });
    return function checkUserData() {
      return callback(...arguments);
    };
  })();
  if (first) {
    let obj = {};
    obj = { initialRouteName: first };
    obj = {};
    const obj1 = { backgroundColor: theme.white };
    obj.headerStyle = obj1;
    obj.headerTintColor = theme.primary;
    obj.headerTitleStyle = { fontWeight: "600", fontSize: 18 };
    const obj2 = { backgroundColor: theme.white };
    obj.contentStyle = obj2;
    obj.screenOptions = obj;
    const obj3 = { name: mod12.default.Login, component: mod10.default };
    const obj4 = { headerShown: false };
    obj3.options = obj4;
    const items = [<closure_30.Screen name={mod12.default.Login} component={mod10.default} />, , , , , , , , , , , , , , , , ];
    const obj5 = { name: mod12.default.Signup, component: mod11.default };
    const obj6 = { headerShown: false };
    obj5.options = obj6;
    items[1] = <closure_30.Screen name={mod12.default.Signup} component={mod11.default} />;
    const obj7 = { name: mod12.default.Main, component: TabNavigator };
    const obj8 = { headerShown: false };
    obj7.options = obj8;
    items[2] = <closure_30.Screen name={mod12.default.Main} component={TabNavigator} />;
    const obj9 = { name: mod12.default.DeviceSearch, component: mod.default };
    const obj10 = { headerShown: false };
    obj9.options = obj10;
    items[3] = <closure_30.Screen name={mod12.default.DeviceSearch} component={mod.default} />;
    const obj11 = { name: mod12.default.DeviceConnTip, component: mod2.default, options: { headerShown: false, headerBackTitle: "Back" } };
    items[4] = <closure_30.Screen name={mod12.default.DeviceConnTip} component={mod2.default} options={{ headerShown: false, headerBackTitle: "Back" }} />;
    const obj12 = { name: mod12.default.DeviceChooseVariant, component: mod3.default, options: { title: "Choose Variant", headerShown: false } };
    items[5] = <closure_30.Screen name={mod12.default.DeviceChooseVariant} component={mod3.default} options={{ title: "Choose Variant", headerShown: false }} />;
    const obj13 = { name: mod12.default.ScheduleEdit, component: mod7.default, options: { title: "Edit Schedule", headerShown: false } };
    items[6] = <closure_30.Screen name={mod12.default.ScheduleEdit} component={mod7.default} options={{ title: "Edit Schedule", headerShown: false }} />;
    const obj14 = { name: mod12.default.About, component: mod13.default };
    const obj15 = { headerShown: false };
    obj14.options = obj15;
    items[7] = <closure_30.Screen name={mod12.default.About} component={mod13.default} />;
    const obj16 = { name: mod12.default.FAQ, component: mod14.default };
    const obj17 = { headerShown: false };
    obj16.options = obj17;
    items[8] = <closure_30.Screen name={mod12.default.FAQ} component={mod14.default} />;
    const obj18 = { name: mod12.default.Settings, component: mod15.default };
    const obj19 = { headerShown: false };
    obj18.options = obj19;
    items[9] = <closure_30.Screen name={mod12.default.Settings} component={mod15.default} />;
    const obj20 = { name: mod12.default.ForgotPassword, component: mod16.default };
    const obj21 = { headerShown: false };
    obj20.options = obj21;
    items[10] = <closure_30.Screen name={mod12.default.ForgotPassword} component={mod16.default} />;
    const obj22 = { name: mod12.default.ResetPassword, component: mod17.default };
    const obj23 = { headerShown: false };
    obj22.options = obj23;
    items[11] = <closure_30.Screen name={mod12.default.ResetPassword} component={mod17.default} />;
    const obj24 = { name: mod12.default.User, component: mod9.default, options: { headerShown: false, gestureEnabled: false } };
    items[12] = <closure_30.Screen name={mod12.default.User} component={mod9.default} options={{ headerShown: false, gestureEnabled: false }} />;
    const obj25 = { name: mod12.default.ContactUs, component: mod18.default };
    const obj26 = { headerShown: false };
    obj25.options = obj26;
    items[13] = <closure_30.Screen name={mod12.default.ContactUs} component={mod18.default} />;
    const obj27 = { name: mod12.default.DiscoverDetail, component: mod19.default };
    const obj28 = { headerShown: false };
    obj27.options = obj28;
    items[14] = <closure_30.Screen name={mod12.default.DiscoverDetail} component={mod19.default} />;
    const obj29 = { name: mod12.default.Profile, component: mod20.default };
    const obj30 = { headerShown: false };
    obj29.options = obj30;
    items[15] = <closure_30.Screen name={mod12.default.Profile} component={mod20.default} />;
    const obj31 = { name: mod12.default.ProfileEdit, component: mod21.default };
    const obj32 = { headerShown: false };
    obj31.options = obj32;
    items[16] = <closure_30.Screen name={mod12.default.ProfileEdit} component={mod21.default} />;
    obj.children = items;
    obj.children = <closure_30.Navigator />;
    return React2.jsx(_require(529).NavigationContainer, {});
  } else {
    return null;
  }
};
