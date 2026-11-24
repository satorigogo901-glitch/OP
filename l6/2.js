function compose(...fns) {
  const handlers = [];

  function composed(value) {
    let res = value;
    try {
      for (let i = fns.length - 1; i >= 0; i--) {
        const fn = fns[i];
        res = fn(res);
      }
    } catch (err) {
      handlers.forEach((fn) => fn(err));
      return undefined;
    }
    return res;
  }

  composed.on = (event, fn) => {
    if (event !== 'error') {
      throw new TypeError('Очікується подія error');
    }
    if (typeof fn !== 'function') {
      throw new TypeError('Очікується функція');
    }
    handlers.push(fn);
    return composed;
  };

  return composed;
}

module.exports = { compose };
