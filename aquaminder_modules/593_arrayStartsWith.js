// Module ID: 593
// Function ID: 6460
// Name: arrayStartsWith
// Dependencies: []

// Module 593 (arrayStartsWith)
arg5.arrayStartsWith = function arrayStartsWith(segments, segments2) {
  closure_0 = segments;
  if (segments2.length > segments.length) {
    return false;
  } else {
    return segments2.every((arg0, arg1) => arg0 === segments[arg1]);
  }
};
