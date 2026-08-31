// Module ID: 798
// Function ID: 8409
// Name: frozen
// Dependencies: []

// Module 798 (frozen)
arg5.ANDROID_DISPLAY = undefined;
arg5.ANDROID_EVT_TYPE = undefined;
arg5.ANDROID_MODE = undefined;
arg5.DATE_SET_ACTION = undefined;
arg5.DAY_OF_WEEK = undefined;
arg5.DISMISS_ACTION = undefined;
arg5.EVENT_TYPE_DISMISSED = undefined;
arg5.EVENT_TYPE_SET = undefined;
arg5.IOS_DISPLAY = undefined;
arg5.IOS_MODE = undefined;
arg5.MIN_MS = undefined;
arg5.NEUTRAL_BUTTON_ACTION = undefined;
arg5.TIME_SET_ACTION = undefined;
arg5.WINDOWS_MODE = undefined;
arg5.MIN_MS = 60000;
arg5.ANDROID_DISPLAY = Object.freeze({ default: "default", spinner: "spinner", clock: "clock", calendar: "calendar" });
arg5.EVENT_TYPE_SET = "set";
arg5.EVENT_TYPE_DISMISSED = "dismissed";
arg5.ANDROID_EVT_TYPE = Object.freeze({ set: "set", dismissed: "dismissed", neutralButtonPressed: "neutralButtonPressed" });
arg5.IOS_DISPLAY = Object.freeze({ default: "default", spinner: "spinner", compact: "compact", inline: "inline" });
const frozen = Object.freeze({ date: "date", time: "time" });
arg5.ANDROID_MODE = frozen;
arg5.WINDOWS_MODE = frozen;
arg5.IOS_MODE = Object.freeze(Object.assign({}, frozen, { datetime: "datetime", countdown: "countdown" }));
arg5.DAY_OF_WEEK = Object.freeze({ Sunday: 0, Monday: 1, Tuesday: 2, Wednesday: 3, Thursday: 4, Friday: 5, Saturday: 6 });
arg5.DATE_SET_ACTION = "dateSetAction";
arg5.TIME_SET_ACTION = "timeSetAction";
arg5.DISMISS_ACTION = "dismissedAction";
arg5.NEUTRAL_BUTTON_ACTION = "neutralButtonAction";
