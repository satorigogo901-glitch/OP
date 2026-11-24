'use strict';

const pipe = (...fns) => {
  if (!fns.every((fn) => typeof fn === 'function')) {
    throw new TypeError('pipe expects functions');
  }
  return (value) => fns.reduce((result, fn) => fn(result), value);
};

module.exports = { pipe };
