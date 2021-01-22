const flatten = require('../modules/flatten');

function getObjectValues(obj, keys, fallback) {
  if (!obj) {
    return fallback;
  }

  if (!keys) {
    return obj
  }

  if (typeof keys === 'string') {
    keys = keys.split('.')
  }

  for (let i = 0, l = keys.length; obj && i < l; i++) {
    if (Array.isArray(obj)) {
      obj = flatten(obj);
      obj = flatten(obj.map(item => item[keys[i]]));
    }
    if (!Array.isArray(obj)) {
      obj = obj[keys[i]];
    }
  }

  if (obj === null || typeof obj === 'undefined') {
    return fallback;
  } else {
    if(Array.isArray(obj)) return obj;
    return [obj];
  }
}

module.exports = getObjectValues;