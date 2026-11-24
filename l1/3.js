'use strict';

const values = [
  true, 'hello', 5, 12, -200, false, false, 'word',
  0, 'JavaScript', 3.5, true, undefined, null, 10n, Symbol('id'), [],
];

const countWithKnownTypes = (values) => {
  const counts = {
    number: 0,
    string: 0,
    boolean: 0,
    undefined: 0,
    object: 0,
    bigint: 0,
    symbol: 0,
    function: 0,
  };

  for (const value of values) {
    counts[typeof value] += 1;
  }
  return counts;
};

const countWithDynamicTypes = (values) => {
  const counts = {};
  for (const value of values) {
    const type = typeof value;
    counts[type] = (counts[type] ?? 0) + 1;
  }
  return counts;
};

if (require.main === module) {
  console.dir(countWithKnownTypes(values));
  console.dir(countWithDynamicTypes(values));
}

module.exports = { countWithKnownTypes, countWithDynamicTypes };
