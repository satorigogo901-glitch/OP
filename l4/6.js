function max(arr) {
  let res = -Infinity;
  for (const row of arr) {
    for (const x of row) {
      res = Math.max(res, x);
    }
  }
  return res;
}

module.exports = { max };
