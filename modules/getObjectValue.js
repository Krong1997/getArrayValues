function getObjectValue(obj, keys, fallback) {
  if (!obj) {
    return fallback;
  }

  if (!keys) {
    return obj
  }

  if (typeof keys === 'string') {
    keys = keys.split('.')
  }

  for (var i = 0, l = keys.length; obj && i < l; i++) {
    obj = obj[keys[i]]
  }

  if (obj === null || typeof obj === 'undefined') {
    return fallback;
  } else {
    return obj
  }
}

module.exports = getObjectValue;