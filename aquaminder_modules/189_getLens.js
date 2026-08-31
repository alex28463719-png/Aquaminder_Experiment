// Module ID: 189
// Function ID: 2065
// Name: getLens
// Dependencies: []

// Module 189 (getLens)
function getLens(arr) {
  if (arr.length % 4 > 0) {
    const _Error = Error;
    const error = new Error("Invalid string. Length must be a multiple of 4");
    throw error;
  } else {
    let index = arr.indexOf("=");
    if (index === -1) {
      index = length;
    }
    let num2 = 0;
    if (index !== length) {
      num2 = 4 - index % 4;
    }
    items = [index, num2];
    return items;
  }
}
function _byteLength(arg0, first, arg2) {
  return (first + arg2) * 3 / 4 - arg2;
}
function tripletToBase64(arg0) {
  return items[arg0 >> 18 & 63] + items[arg0 >> 12 & 63] + items[arg0 >> 6 & 63] + items[arg0 & 63];
}
function encodeChunk(arg0, arg1, arg2) {
  let sum = arg1;
  items = [];
  if (arg1 < arg2) {
    do {
      let tmp2 = tripletToBase64;
      let arr = items.push(tripletToBase64((arg0[sum] << 16 & 16711680) + (arg0[sum + 1] << 8 & 65280) + (arg0[sum + 2] & 255)));
      sum = sum + 3;
    } while (sum < arg2);
  }
  return items.join("");
}
arg5.byteLength = function byteLength(arr) {
  const tmp = getLens(arr);
  return (tmp[0] + tmp[1]) * 3 / 4 - tmp[1];
};
arg5.toByteArray = function toByteArray(_response) {
  const tmp = getLens(_response);
  const first = tmp[0];
  const tmp4 = new closure_2(_byteLength(undefined, first, tmp[1]));
  let diff = first;
  if (tmp[1] > 0) {
    diff = first - 4;
  }
  let num2 = 0;
  let num3 = 0;
  let num4 = 0;
  let num5 = 0;
  if (0 < diff) {
    do {
      let tmp6 = items1;
      let tmp8 = items1;
      let tmp7 = items1[_response.charCodeAt(_response, num3)] << 18;
      let tmp10 = items1;
      let tmp9 = items1[_response.charCodeAt(_response, num3 + 1)] << 12;
      let tmp12 = items1;
      let tmp11 = items1[_response.charCodeAt(_response, num3 + 2)] << 6;
      let tmp13 = tmp7 | tmp9 | tmp11 | items1[_response.charCodeAt(_response, num3 + 3)];
      let tmp14 = +num2;
      tmp4[tmp14] = tmp13 >> 16 & 255;
      let tmp15 = +tmp14 + 1;
      tmp4[tmp15] = tmp13 >> 8 & 255;
      let tmp16 = +tmp15 + 1;
      num2 = tmp16 + 1;
      tmp4[tmp16] = tmp13 & 255;
      num3 = num3 + 4;
      num4 = num2;
      num5 = num3;
    } while (num3 < diff);
  }
  let sum = num4;
  if (tmp[1] === 2) {
    sum = tmp21 + 1;
    tmp4[+num4] = (items1[_response.charCodeAt(_response, num5)] << 2 | items1[_response.charCodeAt(_response, num5 + 1)] >> 4) & 255;
    const tmp19 = items1[_response.charCodeAt(_response, num5)] << 2;
  }
  if (tmp[1] === 1) {
    const tmp23 = items1[_response.charCodeAt(_response, num5)] << 10;
    const tmp27 = tmp23 | items1[_response.charCodeAt(_response, num5 + 1)] << 4 | items1[_response.charCodeAt(_response, num5 + 2)] >> 2;
    tmp4[+sum] = tmp27 >> 8 & 255;
    tmp4[++sum + 1] = tmp27 & 255;
    const tmp25 = items1[_response.charCodeAt(_response, num5 + 1)] << 4;
  }
  return tmp4;
};
arg5.fromByteArray = function fromByteArray(uint8Array) {
  let sum;
  const result = length % 3;
  items = [];
  const diff = length - result;
  let num = 0;
  if (0 < diff) {
    do {
      sum = num + 16383;
      let tmp5 = num;
      let tmp6 = sum;
      let tmp3 = encodeChunk;
      if (sum > diff) {
        tmp6 = diff;
      }
      let arr = items.push(tmp3(uint8Array, num, tmp6));
      num = sum;
    } while (sum < diff);
  }
  if (result === 1) {
    items.push(`${items[uint8Array[length - 1] >> 2]}${items[uint8Array[length - 1] << 4 & 63]}==`);
  } else if (result === 2) {
    const sum1 = (uint8Array[length - 2] << 8) + uint8Array[length - 1];
    items.push(`${items[tmp12 >> 10]}${items[tmp12 >> 4 & 63]}${items[tmp12 << 2 & 63]}=`);
  }
  return items.join("");
};
let items = [];
const items1 = [];
let closure_2 = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
for (let num = 0; num < "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".length; num = num + 1) {
  items[num] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[num];
  let charCodeAt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt;
  items1["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt(num)] = num;
}
items1[require("module_0")] = 62;
items1[require("module_0")] = 63;
