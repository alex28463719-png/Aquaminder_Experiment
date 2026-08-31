// Module ID: 859
// Function ID: 9498
// Name: buildGraph
// Dependencies: [857]

// Module 859 (buildGraph)
import keys2 from "keys" /* 857 */;

function buildGraph() {
  const obj = {};
  let num = 0;
  const keys = Object.keys(keys2);
  if (0 < keys.length) {
    do {
      obj[keys[num]] = { distance: -1, parent: null };
      num = num + 1;
    } while (num < length);
  }
  return obj;
}
function deriveBFS(arg0) {
  const tmp = buildGraph();
  const items = [arg0];
  tmp[arg0].distance = 0;
  while (items.length) {
    let arr = items.pop();
    let _Object = Object;
    let tmp5 = require;
    let tmp6 = dependencyMap;
    let keys = Object.keys(keys2[arr]);
    let length = keys.length;
    let tmp7 = tmp2;
    let tmp8 = tmp3;
    let num = 0;
    if (0 < length) {
      do {
        let tmp9 = keys[num];
        let tmp10 = tmp[tmp9];
        let tmp11 = num;
        if (tmp10.distance === -1) {
          tmp10.distance = tmp[arr].distance + 1;
          tmp10.parent = arr;
          arr = items.unshift(tmp9);
        }
        num = num + 1;
        tmp7 = tmp9;
        tmp8 = tmp10;
      } while (num < length);
    }
    tmp2 = tmp7;
    tmp3 = tmp8;
  }
  return tmp;
}
function link(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return (arg0) => callback2(callback(arg0));
}
function wrapConversion(arg0, arg1) {
  let parent3;
  const items = [arg1[arg0].parent, arg0];
  let tmp = keys2[arg1[arg0].parent][arg0];
  let parent = arg1[arg0].parent;
  let tmp2 = tmp;
  if (arg1[parent].parent) {
    do {
      let arr = items.unshift(arg1[parent].parent);
      let tmp4 = link;
      let tmp5 = require;
      let tmp6 = dependencyMap;
      tmp = link(keys2[arg1[parent].parent][parent], tmp);
      let parent2 = arg1[parent].parent;
      parent = parent2;
      tmp2 = tmp;
      parent3 = arg1[parent2].parent;
    } while (parent3);
  }
  tmp2.conversion = items;
  return tmp2;
}

export default (arg0) => {
  const tmp = deriveBFS(arg0);
  const obj = {};
  const keys = Object.keys(tmp);
  for (let num = 0; num < length; num = num + 1) {
    let tmp2 = keys[num];
    let tmp3 = num;
    if (tmp[tmp2].parent !== null) {
      let tmp4 = wrapConversion;
      obj[tmp2] = wrapConversion(tmp2, tmp);
    }
  }
  return obj;
};
