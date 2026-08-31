// Module ID: 669
// Function ID: 7608
// Name: addMyDeviceColorApi
// Dependencies: [1, 363, 657, 670]
// Exports: addMyDeviceColorApi, changePasswordApi, contactUsApi, deleteAccountApi, deleteDeviceApi, deleteMyDeviceColorApi, deleteScheduleApi, editProfileApi, editScheduleApi, forgotApi, getDiscoverApi, getFaqApi, getImageApi, getMyDeviceColorApi, getMyDevicesApi, getProfileApi, getScheduleApi, loginApi, logoutApi, registerDeviceApi, resetPasswordApi, signupApi, storeScheduleApi, verifyEmailApi

// Module 669 (addMyDeviceColorApi)
import asyncGeneratorStep from "asyncGeneratorStep" /* 363 */;
import module_1 from "module_1" /* 1 */;

let closure_2 = module_1(asyncGeneratorStep);

export function addMyDeviceColorApi(arg0, arg1) {
  if (arguments.length > 0) {
    if (arguments[0] !== undefined) {
      const first = arguments[0];
    }
    closure_0 = {};
    if (arguments.length > 1) {
      if (arguments[1] !== undefined) {
        let obj = arguments[1];
      }
      const promise = new Promise((closure_0, closure_1) => {
        const callback = closure_0;
        const apiPostResult = callback(obj[2]).apiPost(callback(obj[3]).DEVICE_COLOR, callback, closure_1);
        callback(obj[2]).apiPost(callback(obj[3]).DEVICE_COLOR, callback, closure_1).then((() => {
          closure_0 = closure_2_2.default(async (arg0) => {
            if (obj) {
              return obj.resume();
            } else {
              callback(arg0);
            }
          });
          return function(arg0) {
            return callback(...arguments);
          };
        })()).catch((arg0) => {
          callback(arg0);
        });
      });
      return promise;
    }
    obj = {};
  }
}
export function changePasswordApi(arg0, arg1) {
  if (arguments.length > 0) {
    if (arguments[0] !== undefined) {
      const first = arguments[0];
    }
    closure_0 = {};
    if (arguments.length > 1) {
      if (arguments[1] !== undefined) {
        let obj = arguments[1];
      }
      const promise = new Promise((closure_0, closure_1) => {
        const callback = closure_0;
        const apiPostResult = callback(obj[2]).apiPost(callback(obj[3]).CHANGE_PASSWORD, callback, closure_1);
        callback(obj[2]).apiPost(callback(obj[3]).CHANGE_PASSWORD, callback, closure_1).then((() => {
          closure_0 = closure_2_2.default(async (arg0) => {
            if (obj) {
              return obj.resume();
            } else {
              callback(arg0);
            }
          });
          return function(arg0) {
            return callback(...arguments);
          };
        })()).catch((arg0) => {
          callback(arg0);
        });
      });
      return promise;
    }
    obj = {};
  }
}
export function contactUsApi(arg0, arg1) {
  if (arguments.length > 0) {
    if (arguments[0] !== undefined) {
      const first = arguments[0];
    }
    closure_0 = {};
    if (arguments.length > 1) {
      if (arguments[1] !== undefined) {
        let obj = arguments[1];
      }
      const promise = new Promise((closure_0, closure_1) => {
        const callback = closure_0;
        const apiPostResult = callback(obj[2]).apiPost(callback(obj[3]).CONTACT_US, callback, closure_1);
        callback(obj[2]).apiPost(callback(obj[3]).CONTACT_US, callback, closure_1).then((() => {
          closure_0 = closure_2_2.default(async (arg0) => {
            if (obj) {
              return obj.resume();
            } else {
              callback(arg0);
            }
          });
          return function(arg0) {
            return callback(...arguments);
          };
        })()).catch((arg0) => {
          callback(arg0);
        });
      });
      return promise;
    }
    obj = {};
  }
}
export function deleteAccountApi(arg0, arg1) {
  if (arguments.length > 0) {
    if (arguments[0] !== undefined) {
      const first = arguments[0];
    }
  }
  if (arguments.length > 1) {
    closure_0 = {};
    if (arguments.length > 2) {
      if (arguments[2] !== undefined) {
        let obj = arguments[2];
      }
      const promise = new Promise((closure_1, closure_12) => {
        const callback = closure_1;
        closure_1 = closure_12;
        const apiDeleteResult = callback(obj[2]).apiDelete(callback(obj[3]).DELETE_ACCOUNT, callback, closure_1);
        callback(obj[2]).apiDelete(callback(obj[3]).DELETE_ACCOUNT, callback, closure_1).then((() => {
          closure_0 = closure_2_2.default(async (arg0) => {
            if (obj) {
              return obj.resume();
            } else {
              callback(arg0);
            }
          });
          return function(arg0) {
            return callback(...arguments);
          };
        })()).catch((arg0) => {
          callback(arg0);
        });
      });
      return promise;
    }
    obj = {};
  }
}
export function deleteDeviceApi(id, arg1, arg2) {
  if (arguments.length > 0) {
    if (arguments[0] !== undefined) {
      const first = arguments[0];
    }
    closure_0 = {};
    if (arguments.length > 1) {
      if (arguments[1] !== undefined) {
        let obj = arguments[1];
      }
      if (arguments.length > 2) {
        if (arguments[2] !== undefined) {
          obj = arguments[2];
        }
        const promise = new Promise((arg0, closure_1) => {
          const callback = arg0;
          const apiDeleteResult = callback(obj[2]).apiDelete(callback(obj[3]).MY_DEVICES + "/" + callback, closure_1, obj);
          callback(obj[2]).apiDelete(callback(obj[3]).MY_DEVICES + "/" + callback, closure_1, obj).then((() => {
            closure_0 = obj.default(async (arg0) => {
              if (obj) {
                return obj.resume();
              } else {
                callback(arg0);
              }
            });
            return function(arg0) {
              return callback(...arguments);
            };
          })()).catch((arg0) => {
            callback(arg0);
          });
        });
        return promise;
      }
      obj = {};
    }
    obj = {};
  }
}
export function deleteMyDeviceColorApi() {
  if (arguments.length > 0) {
    if (arguments[0] !== undefined) {
      const first = arguments[0];
    }
    closure_0 = {};
    if (arguments.length > 1) {
      if (arguments[1] !== undefined) {
        let obj = arguments[1];
      }
      if (arguments.length > 2) {
        if (arguments[2] !== undefined) {
          obj = arguments[2];
        }
        const promise = new Promise((arg0, closure_1) => {
          const callback = arg0;
          const apiDeleteResult = callback(obj[2]).apiDelete(callback(obj[3]).DEVICE_COLOR + "/" + callback, closure_1, obj);
          callback(obj[2]).apiDelete(callback(obj[3]).DEVICE_COLOR + "/" + callback, closure_1, obj).then((() => {
            closure_0 = obj.default(async (arg0) => {
              if (obj) {
                return obj.resume();
              } else {
                callback(arg0);
              }
            });
            return function(arg0) {
              return callback(...arguments);
            };
          })()).catch((arg0) => {
            callback(arg0);
          });
        });
        return promise;
      }
      obj = {};
    }
    obj = {};
  }
}
export function deleteScheduleApi(id, arg1, arg2) {
  if (arguments.length > 0) {
    if (arguments[0] !== undefined) {
      const first = arguments[0];
    }
    closure_0 = {};
    if (arguments.length > 1) {
      if (arguments[1] !== undefined) {
        let obj = arguments[1];
      }
      if (arguments.length > 2) {
        if (arguments[2] !== undefined) {
          obj = arguments[2];
        }
        const promise = new Promise((arg0, closure_1) => {
          const callback = arg0;
          const apiDeleteResult = callback(obj[2]).apiDelete(callback(obj[3]).SCHEDULE + "/" + callback, closure_1, obj);
          callback(obj[2]).apiDelete(callback(obj[3]).SCHEDULE + "/" + callback, closure_1, obj).then((() => {
            closure_0 = obj.default(async (arg0) => {
              if (obj) {
                return obj.resume();
              } else {
                callback(arg0);
              }
            });
            return function(arg0) {
              return callback(...arguments);
            };
          })()).catch((arg0) => {
            callback(arg0);
          });
        });
        return promise;
      }
      obj = {};
    }
    obj = {};
  }
}
export function editProfileApi(arg0, arg1) {
  if (arguments.length > 0) {
    if (arguments[0] !== undefined) {
      const first = arguments[0];
    }
    closure_0 = {};
    if (arguments.length > 1) {
      if (arguments[1] !== undefined) {
        let obj = arguments[1];
      }
      const promise = new Promise((closure_0, closure_1) => {
        const callback = closure_0;
        const apiPutResult = callback(obj[2]).apiPut(callback(obj[3]).EDIT_PROFILE, callback, closure_1);
        callback(obj[2]).apiPut(callback(obj[3]).EDIT_PROFILE, callback, closure_1).then((() => {
          closure_0 = closure_2_2.default(async (arg0) => {
            if (obj) {
              return obj.resume();
            } else {
              callback(arg0);
            }
          });
          return function(arg0) {
            return callback(...arguments);
          };
        })()).catch((arg0) => {
          callback(arg0);
        });
      });
      return promise;
    }
    obj = {};
  }
}
export function editScheduleApi(closure_2_3, arg1, arg2) {
  if (arguments.length > 0) {
    if (arguments[0] !== undefined) {
      const first = arguments[0];
    }
    closure_0 = {};
    if (arguments.length > 1) {
      if (arguments[1] !== undefined) {
        let obj = arguments[1];
      }
      if (arguments.length > 2) {
        if (arguments[2] !== undefined) {
          obj = arguments[2];
        }
        const promise = new Promise((arg0, closure_0) => {
          const callback = arg0;
          closure_1 = closure_0;
          const apiPutResult = callback(obj[2]).apiPut(callback(obj[3]).SCHEDULE + "/" + callback, closure_1, obj);
          callback(obj[2]).apiPut(callback(obj[3]).SCHEDULE + "/" + callback, closure_1, obj).then((() => {
            closure_0 = obj.default(async (arg0) => {
              if (obj) {
                return obj.resume();
              } else {
                callback(arg0);
              }
            });
            return function(arg0) {
              return callback(...arguments);
            };
          })()).catch((arg0) => {
            callback(arg0);
          });
        });
        return promise;
      }
      obj = {};
    }
    obj = {};
  }
}
export function forgotApi(arg0, arg1) {
  if (arguments.length > 0) {
    if (arguments[0] !== undefined) {
      const first = arguments[0];
    }
    closure_0 = {};
    if (arguments.length > 1) {
      if (arguments[1] !== undefined) {
        let obj = arguments[1];
      }
      const promise = new Promise((closure_0, closure_1) => {
        const callback = closure_0;
        const apiPostResult = callback(obj[2]).apiPost(callback(obj[3]).FORGOT_PASSWORD, callback, closure_1);
        callback(obj[2]).apiPost(callback(obj[3]).FORGOT_PASSWORD, callback, closure_1).then((() => {
          closure_0 = closure_2_2.default(async (arg0) => {
            if (obj) {
              return obj.resume();
            } else {
              callback(arg0);
            }
          });
          return function(arg0) {
            return callback(...arguments);
          };
        })()).catch((arg0) => {
          callback(arg0);
        });
      });
      return promise;
    }
    obj = {};
  }
}
export function getDiscoverApi(arg0, arg1) {
  if (arguments.length > 0) {
    if (arguments[0] !== undefined) {
      const first = arguments[0];
    }
  }
  if (arguments.length > 1) {
    closure_0 = {};
    if (arguments.length > 2) {
      if (arguments[2] !== undefined) {
        let obj = arguments[2];
      }
      const promise = new Promise((closure_1, closure_12) => {
        const callback = closure_1;
        closure_1 = closure_12;
        const apiGetResult = callback(obj[2]).apiGet(callback(obj[3]).DISCOVER, callback, closure_1);
        callback(obj[2]).apiGet(callback(obj[3]).DISCOVER, callback, closure_1).then((() => {
          closure_0 = closure_2_2.default(async (arg0) => {
            if (obj) {
              return obj.resume();
            } else {
              callback(arg0);
            }
          });
          return function(arg0) {
            return callback(...arguments);
          };
        })()).catch((arg0) => {
          callback(arg0);
        });
      });
      return promise;
    }
    obj = {};
  }
}
export function getFaqApi(arg0, arg1) {
  if (arguments.length > 0) {
    if (arguments[0] !== undefined) {
      const first = arguments[0];
    }
  }
  if (arguments.length > 1) {
    closure_0 = {};
    if (arguments.length > 2) {
      if (arguments[2] !== undefined) {
        let obj = arguments[2];
      }
      const promise = new Promise((closure_1, closure_12) => {
        const callback = closure_1;
        closure_1 = closure_12;
        const apiGetResult = callback(obj[2]).apiGet(callback(obj[3]).FAQ, callback, closure_1);
        callback(obj[2]).apiGet(callback(obj[3]).FAQ, callback, closure_1).then((() => {
          closure_0 = closure_2_2.default(async (arg0) => {
            if (obj) {
              return obj.resume();
            } else {
              callback(arg0);
            }
          });
          return function(arg0) {
            return callback(...arguments);
          };
        })()).catch((arg0) => {
          callback(arg0);
        });
      });
      return promise;
    }
    obj = {};
  }
}
export function getImageApi(arg0, arg1) {
  if (arguments.length > 0) {
    if (arguments[0] !== undefined) {
      const first = arguments[0];
    }
  }
  if (arguments.length > 1) {
    closure_0 = {};
    if (arguments.length > 2) {
      if (arguments[2] !== undefined) {
        let obj = arguments[2];
      }
      const promise = new Promise((closure_1, closure_12) => {
        const callback = closure_1;
        closure_1 = closure_12;
        const apiGetResult = callback(obj[2]).apiGet(callback(obj[3]).DEVICE_IMAGE, callback, closure_1);
        callback(obj[2]).apiGet(callback(obj[3]).DEVICE_IMAGE, callback, closure_1).then((() => {
          closure_0 = closure_2_2.default(async (arg0) => {
            if (obj) {
              return obj.resume();
            } else {
              callback(arg0);
            }
          });
          return function(arg0) {
            return callback(...arguments);
          };
        })()).catch((arg0) => {
          callback(arg0);
        });
      });
      return promise;
    }
    obj = {};
  }
}
export function getMyDeviceColorApi(id, arg1, arg2) {
  if (arguments.length > 0) {
    if (arguments[0] !== undefined) {
      const first = arguments[0];
    }
    closure_0 = {};
    if (arguments.length > 1) {
      if (arguments[1] !== undefined) {
        let obj = arguments[1];
      }
      if (arguments.length > 2) {
        if (arguments[2] !== undefined) {
          obj = arguments[2];
        }
        const promise = new Promise((arg0, closure_1) => {
          const callback = arg0;
          const apiGetResult = callback(obj[2]).apiGet(callback(obj[3]).DEVICE_COLOR + "/" + callback, closure_1, obj);
          callback(obj[2]).apiGet(callback(obj[3]).DEVICE_COLOR + "/" + callback, closure_1, obj).then((() => {
            closure_0 = obj.default(async (arg0) => {
              if (obj) {
                return obj.resume();
              } else {
                callback(arg0);
              }
            });
            return function(arg0) {
              return callback(...arguments);
            };
          })()).catch((arg0) => {
            callback(arg0);
          });
        });
        return promise;
      }
      obj = {};
    }
    obj = {};
  }
}
export function getMyDevicesApi(id, arg1, arg2) {
  if (arguments.length > 0) {
    if (arguments[0] !== undefined) {
      const first = arguments[0];
    }
    closure_0 = {};
    if (arguments.length > 1) {
      if (arguments[1] !== undefined) {
        let obj = arguments[1];
      }
      if (arguments.length > 2) {
        if (arguments[2] !== undefined) {
          obj = arguments[2];
        }
        const promise = new Promise((arg0, closure_1) => {
          const callback = arg0;
          const apiGetResult = callback(obj[2]).apiGet(callback(obj[3]).MY_DEVICES + "/" + callback, closure_1, obj);
          callback(obj[2]).apiGet(callback(obj[3]).MY_DEVICES + "/" + callback, closure_1, obj).then((() => {
            closure_0 = obj.default(async (arg0) => {
              if (obj) {
                return obj.resume();
              } else {
                callback(arg0);
              }
            });
            return function(arg0) {
              return callback(...arguments);
            };
          })()).catch((arg0) => {
            callback(arg0);
          });
        });
        return promise;
      }
      obj = {};
    }
    obj = {};
  }
}
export function getProfileApi(id, arg1, arg2) {
  if (arguments.length > 0) {
    if (arguments[0] !== undefined) {
      const first = arguments[0];
    }
    closure_0 = {};
    if (arguments.length > 1) {
      if (arguments[1] !== undefined) {
        let obj = arguments[1];
      }
      if (arguments.length > 2) {
        if (arguments[2] !== undefined) {
          obj = arguments[2];
        }
        const promise = new Promise((arg0, closure_1) => {
          const callback = arg0;
          const apiGetResult = callback(obj[2]).apiGet(callback(obj[3]).PROFILE + "/" + callback, closure_1, obj);
          callback(obj[2]).apiGet(callback(obj[3]).PROFILE + "/" + callback, closure_1, obj).then((() => {
            closure_0 = obj.default(async (arg0) => {
              if (obj) {
                return obj.resume();
              } else {
                callback(arg0);
              }
            });
            return function(arg0) {
              return callback(...arguments);
            };
          })()).catch((arg0) => {
            callback(arg0);
          });
        });
        return promise;
      }
      obj = {};
    }
    obj = {};
  }
}
export function getScheduleApi(arg0, arg1, arg2) {
  if (arguments.length > 0) {
    if (arguments[0] !== undefined) {
      const first = arguments[0];
    }
    closure_0 = {};
    if (arguments.length > 1) {
      if (arguments[1] !== undefined) {
        let obj = arguments[1];
      }
      if (arguments.length > 2) {
        if (arguments[2] !== undefined) {
          obj = arguments[2];
        }
        const promise = new Promise((arg0, closure_1) => {
          const callback = arg0;
          const apiGetResult = callback(obj[2]).apiGet(callback(obj[3]).SCHEDULE + "/" + callback, closure_1, obj);
          callback(obj[2]).apiGet(callback(obj[3]).SCHEDULE + "/" + callback, closure_1, obj).then((() => {
            closure_0 = obj.default(async (arg0) => {
              if (obj) {
                return obj.resume();
              } else {
                callback(arg0);
              }
            });
            return function(arg0) {
              return callback(...arguments);
            };
          })()).catch((arg0) => {
            callback(arg0);
          });
        });
        return promise;
      }
      obj = {};
    }
    obj = {};
  }
}
export function loginApi(arg0, arg1) {
  if (arguments.length > 0) {
    if (arguments[0] !== undefined) {
      const first = arguments[0];
    }
    closure_0 = {};
    if (arguments.length > 1) {
      if (arguments[1] !== undefined) {
        let obj = arguments[1];
      }
      const promise = new Promise((closure_0, closure_1) => {
        const callback = closure_0;
        const apiPostResult = callback(obj[2]).apiPost(callback(obj[3]).LOGIN_API, callback, closure_1);
        callback(obj[2]).apiPost(callback(obj[3]).LOGIN_API, callback, closure_1).then((() => {
          closure_0 = closure_2_2.default(async (arg0) => {
            if (obj) {
              return obj.resume();
            } else {
              callback(arg0);
            }
          });
          return function(arg0) {
            return callback(...arguments);
          };
        })()).catch((arg0) => {
          callback(arg0);
        });
      });
      return promise;
    }
    obj = {};
  }
}
export function logoutApi() {
  if (arguments.length > 0) {
    if (arguments[0] !== undefined) {
      const first = arguments[0];
    }
  }
  if (arguments.length > 1) {
    closure_0 = {};
    if (arguments.length > 2) {
      if (arguments[2] !== undefined) {
        let obj = arguments[2];
      }
      const promise = new Promise((closure_0, closure_1) => {
        const callback = closure_0;
        const apiPostResult = callback(obj[2]).apiPost(callback(obj[3]).LOGOUT, callback, closure_1);
        callback(obj[2]).apiPost(callback(obj[3]).LOGOUT, callback, closure_1).then((() => {
          closure_0 = closure_2_2.default(async (arg0) => {
            if (obj) {
              return obj.resume();
            } else {
              callback(arg0);
            }
          });
          return function(arg0) {
            return callback(...arguments);
          };
        })()).catch((arg0) => {
          callback(arg0);
        });
      });
      return promise;
    }
    obj = {};
  }
}
export function registerDeviceApi(arg0, arg1) {
  if (arguments.length > 0) {
    if (arguments[0] !== undefined) {
      const first = arguments[0];
    }
    closure_0 = {};
    if (arguments.length > 1) {
      if (arguments[1] !== undefined) {
        let obj = arguments[1];
      }
      const promise = new Promise((closure_0, closure_1) => {
        const callback = closure_0;
        const apiPostResult = callback(obj[2]).apiPost(callback(obj[3]).MY_DEVICES, callback, closure_1);
        callback(obj[2]).apiPost(callback(obj[3]).MY_DEVICES, callback, closure_1).then((() => {
          closure_0 = closure_2_2.default(async (arg0) => {
            if (obj) {
              return obj.resume();
            } else {
              callback(arg0);
            }
          });
          return function(arg0) {
            return callback(...arguments);
          };
        })()).catch((arg0) => {
          callback(arg0);
        });
      });
      return promise;
    }
    obj = {};
  }
}
export function resetPasswordApi(arg0, arg1) {
  if (arguments.length > 0) {
    if (arguments[0] !== undefined) {
      const first = arguments[0];
    }
    closure_0 = {};
    if (arguments.length > 1) {
      if (arguments[1] !== undefined) {
        let obj = arguments[1];
      }
      const promise = new Promise((closure_0, closure_1) => {
        const callback = closure_0;
        const apiPostResult = callback(obj[2]).apiPost(callback(obj[3]).RESET_PASSWORD, callback, closure_1);
        callback(obj[2]).apiPost(callback(obj[3]).RESET_PASSWORD, callback, closure_1).then((() => {
          closure_0 = closure_2_2.default(async (arg0) => {
            if (obj) {
              return obj.resume();
            } else {
              callback(arg0);
            }
          });
          return function(arg0) {
            return callback(...arguments);
          };
        })()).catch((arg0) => {
          callback(arg0);
        });
      });
      return promise;
    }
    obj = {};
  }
}
export function signupApi(signupApiResult, arg1) {
  if (arguments.length > 0) {
    if (arguments[0] !== undefined) {
      const first = arguments[0];
    }
    closure_0 = {};
    if (arguments.length > 1) {
      if (arguments[1] !== undefined) {
        let obj = arguments[1];
      }
      const promise = new Promise((closure_0, closure_1) => {
        const callback = closure_0;
        const apiPostResult = callback(obj[2]).apiPost(callback(obj[3]).REGISTER_API, callback, closure_1);
        callback(obj[2]).apiPost(callback(obj[3]).REGISTER_API, callback, closure_1).then((() => {
          closure_0 = closure_2_2.default(async (arg0) => {
            if (obj) {
              return obj.resume();
            } else {
              callback(arg0);
            }
          });
          return function(arg0) {
            return callback(...arguments);
          };
        })()).catch((arg0) => {
          callback(arg0);
        });
      });
      return promise;
    }
    obj = {};
  }
}
export function storeScheduleApi(arg0, arg1) {
  if (arguments.length > 0) {
    if (arguments[0] !== undefined) {
      const first = arguments[0];
    }
    closure_0 = {};
    if (arguments.length > 1) {
      if (arguments[1] !== undefined) {
        let obj = arguments[1];
      }
      const promise = new Promise((closure_0, closure_1) => {
        const callback = closure_0;
        const apiPostResult = callback(obj[2]).apiPost(callback(obj[3]).SCHEDULE, callback, closure_1);
        callback(obj[2]).apiPost(callback(obj[3]).SCHEDULE, callback, closure_1).then((() => {
          closure_0 = closure_2_2.default(async (arg0) => {
            if (obj) {
              return obj.resume();
            } else {
              callback(arg0);
            }
          });
          return function(arg0) {
            return callback(...arguments);
          };
        })()).catch((arg0) => {
          callback(arg0);
        });
      });
      return promise;
    }
    obj = {};
  }
}
export function verifyEmailApi(arg0, arg1) {
  if (arguments.length > 0) {
    if (arguments[0] !== undefined) {
      const first = arguments[0];
    }
    closure_0 = {};
    if (arguments.length > 1) {
      if (arguments[1] !== undefined) {
        let obj = arguments[1];
      }
      const promise = new Promise((closure_0, closure_1) => {
        const callback = closure_0;
        const apiPostResult = callback(obj[2]).apiPost(callback(obj[3]).VERIFY_OTP, callback, closure_1);
        callback(obj[2]).apiPost(callback(obj[3]).VERIFY_OTP, callback, closure_1).then((() => {
          closure_0 = closure_2_2.default(async (arg0) => {
            if (obj) {
              return obj.resume();
            } else {
              callback(arg0);
            }
          });
          return function(arg0) {
            return callback(...arguments);
          };
        })()).catch((arg0) => {
          callback(arg0);
        });
      });
      return promise;
    }
    obj = {};
  }
}
