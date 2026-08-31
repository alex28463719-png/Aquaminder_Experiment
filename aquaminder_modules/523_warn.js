// Module ID: 523
// Function ID: 5845
// Name: warn
// Dependencies: []

// Module 523 (warn)
arg5.getDisplayName = undefined;
arg5.hasLoadedNamespace = undefined;
arg5.isObject = undefined;
arg5.isString = undefined;
arg5.loadLanguages = undefined;
arg5.loadNamespaces = undefined;
arg5.warn = undefined;
arg5.warnOnce = undefined;
function warn(services, code) {
  let obj = arg3;
  const items = [arg2, ];
  obj = { code };
  if (!arg3) {
    obj = {};
  }
  items[1] = Object.assign(obj, obj);
  if (services != null) {
    services = services.services;
    if (services != null) {
      const logger = services.logger;
      if (logger != null) {
        if (logger.forward) {
          const logger4 = services.services.logger;
          return logger4.forward(items, "warn", "react-i18next::", true);
        }
      }
    }
  }
  if (isString(items[0])) {
    const _HermesInternal = HermesInternal;
    items[0] = "react-i18next:: " + items[0];
  }
  if (services != null) {
    const services2 = services.services;
    if (services2 != null) {
      const logger2 = services2.logger;
      if (logger2 != null) {
        if (logger2.warn) {
          const logger3 = services.services.logger;
          const warn2 = logger3.warn;
          warn2.apply(logger3, items);
        }
      }
    }
  }
  if (console != null) {
    if (console.warn) {
      const _console = console;
      warn = console.warn;
      warn.apply(console, items);
    }
  }
}
arg5.warn = warn;
let closure_1 = {};
function warnOnce(arg0, arg1, arg2, arg3) {
  if (isString(arg2)) {
    const _Date = Date;
    const date = new Date();
    table[arg2] = date;
  }
  warn(arg0, arg1, arg2, arg3);
}
arg5.warnOnce = warnOnce;
function loadedClb(options, arg1) {
  closure_0 = options;
  closure_1 = arg1;
  return () => {
    if (initialized.isInitialized) {
      callback();
    } else {
      initialized = function initialized() {
        const timerId = setTimeout(() => {
          initialized.off("initialized", closure_1_0);
        }, 0);
        closure_1_1();
      };
      initialized.on("initialized", initialized);
    }
  };
}
function loadNamespaces(loadNamespaces) {
  const namespaces = loadNamespaces.loadNamespaces(arg1, loadedClb(loadNamespaces, arg2));
}
arg5.loadNamespaces = loadNamespaces;
arg5.loadLanguages = function loadLanguages(options) {
  closure_0 = options;
  let arr = arg2;
  if (isString(arg2)) {
    const items = [arg2];
    arr = items;
  }
  if (options.options.preload) {
    const preload = options.options.preload;
    if (preload.indexOf(arg1) > -1) {
      loadNamespaces(options, arr, arg3);
    }
  }
  const item = arr.forEach((arg0) => {
    const ns = options.options.ns;
    if (ns.indexOf(arg0) < 0) {
      const ns1 = options.options.ns;
      ns1.push(arg0);
    }
  });
  const languages = options.loadLanguages(arg1, loadedClb(options, arg3));
};
arg5.hasLoadedNamespace = function hasLoadedNamespace(arg0, languages) {
  closure_0 = arg0;
  if (arguments.length > 2) {
    if (arguments[2] !== undefined) {
      let obj = arguments[2];
    }
    if (languages.languages) {
      if (languages.languages.length) {
        obj = {};
        obj.lng = obj.lng;
        obj.precheck = function precheck(self, loadNotPending) {
          const bindI18n = obj.bindI18n;
          let index;
          if (bindI18n != null) {
            index = bindI18n.indexOf("languageChanging");
          }
          if (index > -1) {
            if (self.services.backendConnector.backend) {
              if (self.isLanguageChangingTo) {
                if (!loadNotPending(self.isLanguageChangingTo, closure_0)) {
                  return false;
                }
              }
            }
          }
        };
        return languages.hasLoadedNamespace(arg0, obj);
      }
    }
    obj = { languages: languages.languages };
    warnOnce(languages, "NO_LANGUAGES", "i18n.languages were undefined or empty", obj);
    return true;
  }
  obj = {};
};
arg5.getDisplayName = function getDisplayName(displayName) {
  let tmp = displayName.displayName || displayName.name;
  if (!tmp) {
    let str2 = "Unknown";
    if (isString(displayName)) {
      str2 = "Unknown";
      if (displayName.length > 0) {
        str2 = displayName;
      }
    }
    tmp = str2;
  }
  return tmp;
};
function isString(str) {
  return typeof str === "string";
}
arg5.isString = isString;
arg5.isObject = function isObject(obj) {
  let tmp = typeof obj === "object";
  if (tmp) {
    tmp = obj !== null;
  }
  return tmp;
};
