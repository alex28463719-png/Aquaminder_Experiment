// Module ID: 955
// Function ID: 9954
// Dependencies: [1, 956, 957, 960, 512]

// Module 955
import date from "date" /* 512 */;
import _callSuper2 from "_callSuper" /* 956 */;
import _mod960 from "module_960" /* 960 */;
import module_1 from "module_1" /* 1 */;
import _mergeNamespaces from "_mergeNamespaces" /* 957 */;

const _callSuper = module_1(_callSuper2);
const module_960 = module_1(_mod960);
let obj = { resources: null, lng: "en", fallbackLng: "en" };
obj = { translation: module_960.default };
obj.resources = { en: obj };
obj.interpolation = { escapeValue: false };
_callSuper.default.use(date.initReactI18next).init(obj);

export default _callSuper.default;
