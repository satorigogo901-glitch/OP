'use strict';

const compose = (...fns) => {
  const errorHandlers = [];

  const composed = value => {
    try {
      return fns.reduceRight((result, fn) => fn(result), value);
    } catch (error) {
      errorHandlers.forEach(handler => handler(error));
      return undefined;
    }
  };

  composed.on = (event, handler) => {
    if (event !== 'error') throw new TypeError('Expected the error event');
    if (typeof handler !== 'function') throw new TypeError('Expected a handler');
    errorHandlers.push(handler);
    return composed;
  };

  return composed;
};

module.exports = { compose };
