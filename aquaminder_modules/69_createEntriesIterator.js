// Module ID: 69
// Function ID: 995
// Name: createEntriesIterator
// Dependencies: []

// Module 69 (createEntriesIterator)
arg5.createEntriesIterator = function* createEntriesIterator(arg0) {
  let num = 0;
  if (0 < arg0.length) {
    const items = [num, arg0[num]];
    yield items;
    do {
      num = num + 1;
    } while (num < arg0.length);
  }
};
arg5.createKeyIterator = function* createKeyIterator(arg0) {
  let num = 0;
  if (0 < arg0.length) {
    yield num;
    do {
      num = num + 1;
    } while (num < arg0.length);
  }
};
arg5.createValueIterator = function* createValueIterator(arg0) {
  let num = 0;
  if (0 < arg0.length) {
    yield arg0[num];
    do {
      num = num + 1;
    } while (num < arg0.length);
  }
};
