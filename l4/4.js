'use strict';

const sum = (...args) => {
  if (args.length === 0) return 0;

  let total = 0;
  let index = 0;
  do {
    total += args[index];
    index++;
  } while (index < args.length);
  return total;
};

module.exports = { sum };
