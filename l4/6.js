'use strict';

const max = (matrix) => {
  let largest = -Infinity;
  for (const row of matrix) {
    for (const value of row) {
      largest = Math.max(largest, value);
    }
  }
  return largest;
};

module.exports = { max };
