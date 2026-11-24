const values = [
  true, 'hello', 5, 12, -200, false, false, 'word',
  0, 'JavaScript', 3.5, true, undefined, null, 10n, Symbol('id'), [],
];

function countWithKnownTypes(values) {
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
}

function countWithDynamicTypes(values) {
  const counts = {};
  for (const value of values) {
    const type = typeof value;
    if (counts[type] === undefined) {
      counts[type] = 0;
    }
    counts[type] += 1;
  }
  return counts;
}

if (require.main === module) {
  console.dir(countWithKnownTypes(values));
  console.dir(countWithDynamicTypes(values));
}

module.exports = { countWithKnownTypes, countWithDynamicTypes };
