'use strict';

const removeElements = (array, ...items) => {
  const excluded = new Set(items);
  array.reduceRight((_, value, index) => {
    if (excluded.has(value)) array.splice(index, 1);
  }, undefined);
};

module.exports = { removeElements };
