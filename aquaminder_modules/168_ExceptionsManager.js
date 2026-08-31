// Module ID: 168
// Function ID: 1768
// Name: ExceptionsManager
// Dependencies: [36]

// Module 168 (ExceptionsManager)
import requireModule2 from "requireModule" /* 36 */;

let requireModule = _interopRequireWildcard(requireModule2);
const enforcing = requireModule.getEnforcing("ExceptionsManager");
requireModule = {
  reportFatalException(message, stack, id) {
    closure_0.reportFatalException(message, stack, id);
  },
  reportSoftException(message, stack, id) {
    closure_0.reportSoftException(message, stack, id);
  },
  dismissRedbox() {
    if (closure_0.dismissRedbox) {
      closure_0.dismissRedbox();
    }
  },
  reportException(isFatal) {
    if (closure_0.reportException) {
      closure_0.reportException(isFatal);
    } else if (isFatal.isFatal) {
      obj.reportFatalException(isFatal.message, isFatal.stack, isFatal.id);
    } else {
      obj.reportSoftException(isFatal.message, isFatal.stack, isFatal.id);
    }
  }
};

export default requireModule;
