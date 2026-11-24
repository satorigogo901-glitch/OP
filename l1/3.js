const values = [
  true, 'hello', 5, 12, -200, false, false, 'word',
  0, 'JavaScript', 3.5, true, undefined, null, 10n, Symbol('id'), [],
];

function countWithKnownTypes(arr) {
  const res = {
    number: 0,
    string: 0,
    boolean: 0,
    undefined: 0,
    object: 0,
    bigint: 0,
    symbol: 0,
    function: 0,
  };

  for (const value of arr) {
    const type = typeof value;
    res[type]++;
  }
  return res;
}

function dt(arr) {
  const res = {};
  for (const value of arr) {
    const type = typeof value;
    if (res[type] === undefined) {
      res[type] = 0;
    }
    res[type]++;
  }
  return res;
}

if (require.main === module) {
  console.dir(countWithKnownTypes(values));
  console.dir(dt(values));
}

module.exports = { countWithKnownTypes, countWithDynamicTypes: dt, dt };
