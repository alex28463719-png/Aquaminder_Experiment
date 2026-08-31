// Module ID: 512
// Function ID: 5752
// Name: date
// Dependencies: [513, 518, 519, 520, 524, 514, 516, 517, 526, 525, 527, 528]

// Module 512 (date)
const require = arg1;
const dependencyMap = arg6;
let obj = {
  enumerable: true,
  get() {
    return require(513) /* I18nContext */.I18nContext;
  }
};
Object.defineProperty(arg5, "I18nContext", obj);
obj = {
  enumerable: true,
  get() {
    return require(518) /* I18nextProvider */.I18nextProvider;
  }
};
Object.defineProperty(arg5, "I18nextProvider", obj);
obj = {
  enumerable: true,
  get() {
    return require(519) /* Trans */.Trans;
  }
};
Object.defineProperty(arg5, "Trans", obj);
Object.defineProperty(arg5, "TransWithoutContext", {
  enumerable: true,
  get() {
    return require(520) /* Trans */.Trans;
  }
});
Object.defineProperty(arg5, "Translation", {
  enumerable: true,
  get() {
    return require(524) /* Translation */.Translation;
  }
});
Object.defineProperty(arg5, "composeInitialProps", {
  enumerable: true,
  get() {
    return require(513) /* I18nContext */.composeInitialProps;
  }
});
arg5.date = undefined;
Object.defineProperty(arg5, "getDefaults", {
  enumerable: true,
  get() {
    return require(514) /* getDefaults */.getDefaults;
  }
});
Object.defineProperty(arg5, "getI18n", {
  enumerable: true,
  get() {
    return require(516) /* setI18n */.getI18n;
  }
});
Object.defineProperty(arg5, "getInitialProps", {
  enumerable: true,
  get() {
    return require(513) /* I18nContext */.getInitialProps;
  }
});
Object.defineProperty(arg5, "initReactI18next", {
  enumerable: true,
  get() {
    return require(517) /* getDefaults */.initReactI18next;
  }
});
arg5.number = undefined;
arg5.plural = undefined;
arg5.select = undefined;
arg5.selectOrdinal = undefined;
Object.defineProperty(arg5, "setDefaults", {
  enumerable: true,
  get() {
    return require(514) /* getDefaults */.setDefaults;
  }
});
Object.defineProperty(arg5, "setI18n", {
  enumerable: true,
  get() {
    return require(516) /* setI18n */.setI18n;
  }
});
arg5.time = undefined;
Object.defineProperty(arg5, "useSSR", {
  enumerable: true,
  get() {
    return require(526) /* useSSR */.useSSR;
  }
});
Object.defineProperty(arg5, "useTranslation", {
  enumerable: true,
  get() {
    return require(525) /* useTranslation */.useTranslation;
  }
});
Object.defineProperty(arg5, "withSSR", {
  enumerable: true,
  get() {
    return require(527) /* withSSR */.withSSR;
  }
});
Object.defineProperty(arg5, "withTranslation", {
  enumerable: true,
  get() {
    return require(528) /* withTranslation */.withTranslation;
  }
});
arg5.date = function date(uTCDate) {
  return "";
};
arg5.time = function time() {
  return "";
};
arg5.number = function number() {
  return "";
};
arg5.select = function select() {
  return "";
};
arg5.plural = function plural() {
  return "";
};
arg5.selectOrdinal = function selectOrdinal() {
  return "";
};
