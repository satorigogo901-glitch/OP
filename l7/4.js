'use strict';

const difference = (array1, array2) => {
  const excluded = new Set(array2);
  return array1.filter((value) => !excluded.has(value));
};

module.exports = { difference };
