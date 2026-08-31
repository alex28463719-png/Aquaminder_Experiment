// Module ID: 892
// Function ID: 9654
// Name: getLabel
// Dependencies: []

// Module 892 (getLabel)
arg5.getLabel = function getLabel(label, name) {
  let title = name;
  if (label.label !== undefined) {
    title = label.label;
  } else if (label.title !== undefined) {
    title = label.title;
  }
  return title;
};
