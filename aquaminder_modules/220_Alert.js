// Module ID: 220
// Function ID: 2488
// Name: Alert
// Dependencies: [221]

// Module 220 (Alert)
import Alert from "Alert" /* 221 */;

require = arg1;
const dependencyMap = arg6;
if (!alert.alert) {
  alert.alert = (arg0) => {
    Alert.default.alert("Alert", "" + arg0);
  };
}
