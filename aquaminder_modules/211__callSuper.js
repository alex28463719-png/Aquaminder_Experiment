// Module ID: 211
// Function ID: 2364
// Name: _callSuper
// Dependencies: [1, 12, 13, 23, 25, 28, 183, 20]

// Module 211 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _inherits from "_inherits" /* 28 */;
import Blob from "Blob" /* 183 */;
import module_1 from "module_1" /* 1 */;

function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const defaultResult = closure_5.default(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(defaultResult, items, closure_5.default(arg0).constructor);
  } else {
    constructResult = defaultResult.apply(arg0, items);
  }
  return closure_4.default(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
let closure_2 = module_1(_classCallCheck);
let closure_3 = module_1(_defineProperties);
let closure_4 = module_1(_possibleConstructorReturn);
let closure_5 = module_1(_getPrototypeOf);
let closure_6 = module_1(_inherits);

export default ((arg0) => {
  class File {
    constructor(arg0, arg1, arg2) {
      defaultResult = closure_1_2.default(this, File);
      tmp3 = arg0 != null;
      tmp2 = File(closure_1_1[7]);
      if (tmp3) {
        tmp3 = arg1 != null;
      }
      tmp2Result = tmp2(tmp3, "Failed to construct `File`: Must pass both `parts` and `name` arguments.");
      items = [, ];
      items[0] = arg0;
      items[1] = arg2;
      tmp5 = closure_1_7(this, File, items);
      tmp5.data.name = arg1;
      return tmp5;
    }
  }
  closure_6.default(File, arg0);
  let obj = {
    key: "name",
    get() {
      File(closure_1_1[7])(this.data.name != null, "Files must have a name set.");
      return this.data.name;
    }
  };
  let items = [obj, ];
  obj = {
    key: "lastModified",
    get() {
      return this.data.lastModified || 0;
    }
  };
  items[1] = obj;
  return closure_3.default(File, items);
})(module_1(Blob).default);
