function compose(...functions) {
  const errorHandlers = [];

  function composed(value) {
    let result = value;
    try {
      for (let i = functions.length - 1; i >= 0; i--) {
        const fn = functions[i];
        result = fn(result);
      }
    } catch (error) {
      for (const handler of errorHandlers.slice()) {
        handler(error);
      }
      return undefined;
    }
    return result;
  }

  composed.on = function (event, handler) {
    if (event !== 'error') {
      throw new TypeError('Очікується подія error');
    }
    if (typeof handler !== 'function') {
      throw new TypeError('Очікується функція');
    }
    errorHandlers.push(handler);
    return composed;
  };

  return composed;
}

module.exports = { compose };
