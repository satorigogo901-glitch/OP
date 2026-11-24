function sum(...args) {
  let res = 0;
  for (const x of args) {
    res += x;
  }
  return res;
}

module.exports = { sum };
