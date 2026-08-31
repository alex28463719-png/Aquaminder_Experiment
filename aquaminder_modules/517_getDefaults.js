// Module ID: 517
// Function ID: 5803
// Name: getDefaults
// Dependencies: [514, 516]

// Module 517 (getDefaults)
import getDefaults from "getDefaults" /* 514 */;
import setI18n from "setI18n" /* 516 */;

require = arg1;
const dependencyMap = arg6;
arg5.initReactI18next = undefined;
arg5.initReactI18next = {
  type: "3rdParty",
  init(options) {
    getDefaults.setDefaults(options.options.react);
    setI18n.setI18n(options);
  }
};
