const dynamicData = require('./mockData/dynamic.json');
const staticData = require('./mockData/staticData.json');
const getObjectValue = require('./modules/getObjectValue');
const flatten = require('./modules/flatten');

function getStorageValue(params, path) {
  const { Storage } = params;
  if (!Array.isArray(Storage)) return params;
  const res = Storage.reduce((accu, item) => {
    return [...accu, getObjectValue(item, path)];
  }, []);

  return res;
}
const testDynamic = ["Health", "PECycle"];
const testStatic = ["Par.TotalCap", "Par.NumofPar", "Par.ParInfo"];

// const res = getStorageValue(dynamicData, testDynamic[0]);
// const res2 = getStorageValue(staticData, testStatic[2]);
const a = [1, 2, [2, 3, [3, 4]]];


// console.log('dynamic:',res);
console.log('static: \n', flatten(a));