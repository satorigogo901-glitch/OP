function pipe(...fns) {
  for (const fn of fns) {
    if (typeof fn !== 'function') {
      throw new TypeError('Очікується функція');
    }
  }

  return (value) => {
    let res = value;
    for (const fn of fns) {
      res = fn(res);
    }
    return res;
  };
}

module.exports = { pipe };
