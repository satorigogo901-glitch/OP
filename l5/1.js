function seq(...functions) {
  for (const fn of functions) {
    if (typeof fn !== 'function') {
      throw new TypeError('Очікується функція');
    }
  }

  return function (next) {
    if (typeof next === 'number') {
      let result = next;
      for (let i = functions.length - 1; i >= 0; i--) {
        const fn = functions[i];
        result = fn(result);
      }
      return result;
    }

    return seq(...functions, next);
  };
}

module.exports = { seq };
