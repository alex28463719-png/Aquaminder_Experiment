// Module ID: 45
// Function ID: 368
// Name: nullthrows
// Dependencies: []

// Module 45 (nullthrows)
function nullthrows(arg0, arg1) {
  let text = arg1;
  if (arg0 != null) {
    return arg0;
  } else {
    let _Error = Error;
    if (text === undefined) {
      text = `Got unexpected ${arg0}`;
    }
    const prototype = _Error.prototype;
    _Error = new _Error(text);
    _Error.framesToPop = 1;
    throw _Error;
  }
}
module.exports.default = nullthrows;

export default nullthrows;
