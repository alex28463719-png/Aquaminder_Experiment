// Module ID: 484
// Function ID: 5381
// Name: Share
// Dependencies: [1, 12, 13, 451, 485, 20]

// Module 484 (Share)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import ActionSheetManager2 from "ActionSheetManager" /* 451 */;
import ShareModule from "ShareModule" /* 485 */;
import module_1 from "module_1" /* 1 */;

let closure_2 = module_1(_classCallCheck);
let closure_3 = module_1(_defineProperties);
const ActionSheetManager = module_1(ActionSheetManager2);
let closure_4 = module_1(ShareModule);
let tmp4 = (() => {
  class Share {
    constructor() {
      defaultResult = closure_1_2.default(this, Share);
      return;
    }
  }
  const items = [
    {
      key: "share",
      value: function share(obj, dialogTitle) {
        if (arguments.length > 1) {
          if (arguments[1] !== undefined) {
            obj = arguments[1];
          }
          let tmp4 = typeof obj === "object";
          if (tmp4) {
            tmp4 = obj !== null;
          }
          Share(closure_1_1[5])(tmp4, "Content to share must be a valid object");
          let tmp10 = typeof obj.url === "string";
          const tmp3 = Share(closure_1_1[5]);
          if (!tmp10) {
            tmp10 = typeof obj.message === "string";
          }
          Share(closure_1_1[5])(tmp10, "At least one of URL or message is required");
          let tmp15 = typeof obj === "object";
          const tmp9 = Share(closure_1_1[5]);
          if (tmp15) {
            tmp15 = obj !== null;
          }
          Share(closure_1_1[5])(tmp15, "Options must be a valid object");
          Share(closure_1_1[5])(closure_1_4.default, "ShareModule should be registered on Android.");
          let tmp24 = obj.title == null;
          const tmp14 = Share(closure_1_1[5]);
          if (!tmp24) {
            tmp24 = typeof obj.title === "string";
          }
          Share(closure_1_1[5])(tmp24, "Invalid title: title should be a string.");
          obj = { title: obj.title };
          let message;
          if (typeof obj.message === "string") {
            message = obj.message;
          }
          obj.message = message;
          const _default = closure_1_4.default;
          const tmp22 = Share(closure_1_1[5]);
          return closure_1_4.default.share(obj, obj.dialogTitle).then((arg0) => Object.assign({ activityType: null }, arg0));
        }
        obj = {};
      }
    }
  ];
  return closure_3.default(Share, null, items);
})();
tmp4.sharedAction = "sharedAction";
tmp4.dismissedAction = "dismissedAction";

export default tmp4;
