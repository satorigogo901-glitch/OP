'use strict';

const rangeOdd = (start, end) => {
  const numbers = [];
  const first = start % 2 === 0 ? start + 1 : start;
  for (let number = first; number <= end; number += 2) {
    numbers.push(number);
  }
  return numbers;
};

module.exports = { rangeOdd };
