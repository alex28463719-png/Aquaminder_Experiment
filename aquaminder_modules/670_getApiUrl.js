// Module ID: 670
// Function ID: 7777
// Name: getApiUrl
// Dependencies: []

// Module 670 (getApiUrl)
arg5.API_BASE_URL = undefined;
arg5.CHANGE_PASSWORD = undefined;
arg5.CONTACT_US = undefined;
arg5.DELETE_ACCOUNT = undefined;
arg5.DEVICE_COLOR = undefined;
arg5.DEVICE_IMAGE = undefined;
arg5.DISCOVER = undefined;
arg5.EDIT_PROFILE = undefined;
arg5.FAQ = undefined;
arg5.FORGOT_PASSWORD = undefined;
arg5.LOGIN_API = undefined;
arg5.LOGOUT = undefined;
arg5.MY_DEVICES = undefined;
arg5.PROFILE = undefined;
arg5.REGISTER_API = undefined;
arg5.RESET_PASSWORD = undefined;
arg5.SCHEDULE = undefined;
arg5.VERIFY_OTP = undefined;
arg5.getApiUrl = undefined;
arg5.API_BASE_URL = "http://64.227.128.210/api/v1/";
function getApiUrl(faq) {
  return "" + "http://64.227.128.210/api/v1/" + faq;
}
arg5.getApiUrl = getApiUrl;
arg5.LOGIN_API = getApiUrl("login");
arg5.REGISTER_API = getApiUrl("register");
arg5.PROFILE = getApiUrl("profile");
arg5.FAQ = getApiUrl("faq");
arg5.LOGOUT = getApiUrl("logout");
arg5.FORGOT_PASSWORD = getApiUrl("forgot-password");
arg5.VERIFY_OTP = getApiUrl("verify-otp");
arg5.RESET_PASSWORD = getApiUrl("reset-password");
arg5.SCHEDULE = getApiUrl("schedule");
arg5.MY_DEVICES = getApiUrl("ble/devices");
arg5.DEVICE_COLOR = getApiUrl("device-colors");
arg5.DEVICE_IMAGE = getApiUrl("device-images");
arg5.CONTACT_US = getApiUrl("contact-us");
arg5.DISCOVER = getApiUrl("discover-images");
arg5.EDIT_PROFILE = getApiUrl("edit-profile");
arg5.CHANGE_PASSWORD = getApiUrl("change-password");
arg5.DELETE_ACCOUNT = getApiUrl("delete-account");
