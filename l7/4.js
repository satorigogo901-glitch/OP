function difference(a, b) {
  return a.filter((item) => !b.includes(item));
}

module.exports = { difference };
