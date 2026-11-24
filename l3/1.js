function random(min, max) {
  if (max === undefined) {
    max = min;
    min = 0;
  }

  const count = max - min + 1;
  return min + Math.floor(Math.random() * count);
}

module.exports = { random };
