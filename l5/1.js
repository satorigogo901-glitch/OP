function seq(...fns) {
  for (const fn of fns) {
    if (typeof fn !== 'function') {
      throw new TypeError('Очікується функція');
    }
  }

  return (next) => {
    if (typeof next !== 'number') {
      return seq(...fns, next);
    }

    let res = next;
    for (let i = fns.length - 1; i >= 0; i--) {
      const fn = fns[i];
      res = fn(res);
    }
    return res;
  };
}

module.exports = { seq };
