'use strict';

const seq = (...fns) => {
  if (!fns.every(fn => typeof fn === 'function')) {
    throw new TypeError('seq expects functions before the final number');
  }

  return next => {
    if (typeof next === 'number') {
      return fns.reduceRight((value, fn) => fn(value), next);
    }
    return seq(...fns, next);
  };
};

module.exports = { seq };
