// Module ID: 586
// Function ID: 6400
// Dependencies: []

// Module 586

export default (str, str2) => {
  if (typeof str === "string") {
    if (typeof str2 === "string") {
      if (str2 === "") {
        const items = [str];
        return items;
      } else {
        const index = str.indexOf(str2);
        if (index === -1) {
          const items1 = [str];
          return items1;
        } else {
          const items2 = [str.slice(0, index), str.slice(index + str2.length)];
          return items2;
        }
      }
    }
  }
  const typeError = new TypeError("Expected the arguments to be of type `string`");
  throw typeError;
};
