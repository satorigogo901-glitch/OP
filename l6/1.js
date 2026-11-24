function pipe(...functions) {
  for (const fn of functions) {
    if (typeof fn !== 'function') {
      throw new TypeError('Очікується функція');
    }
  }

  return function (value) {
    let result = value;
    for (const fn of functions) {
      result = fn(result);
    }
    return result;
  };
}

module.exports = { pipe };
