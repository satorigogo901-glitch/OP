function unique(array) {
  const values = new Set(array);
  return Array.from(values);
}

module.exports = { unique };
