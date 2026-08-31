// Module ID: 891
// Function ID: 9652
// Name: getHeaderTitle
// Dependencies: []

// Module 891 (getHeaderTitle)
arg5.getHeaderTitle = function getHeaderTitle(options, name) {
  let title = name;
  if (typeof options.headerTitle === "string") {
    title = options.headerTitle;
  } else if (options.title !== undefined) {
    title = options.title;
  }
  return title;
};
