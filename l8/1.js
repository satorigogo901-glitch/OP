function iterate(object, callback) {
  for (const key of Object.keys(object)) {
    callback(key, object[key], object);
  }
}

module.exports = { iterate };
