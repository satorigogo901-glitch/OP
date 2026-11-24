function remAll(arr, ...items) {
  const copy = arr.slice();
  let removed = 0;
  copy.forEach((item, i) => {
    if (items.includes(item)) {
      arr.splice(i - removed, 1);
      removed++;
    }
  });
}

module.exports = { removeElements: remAll };
