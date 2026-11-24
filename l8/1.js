function iterate(obj, fn) {
  for (const key of Object.keys(obj)) {
    fn(key, obj[key], obj);
  }
}

module.exports = { iterate };
