'use strict';

const range = (start, end) => {
  const numbers = [];
  for (let number = start; number <= end; number++) {
    numbers.push(number);
  }
  return numbers;
};

module.exports = { range };
