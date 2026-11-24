function matchesType(value, type) {
  switch (type) {
    case Number:
      return typeof value === 'number';
    case String:
      return typeof value === 'string';
    case Boolean:
      return typeof value === 'boolean';
    case BigInt:
      return typeof value === 'bigint';
    case Symbol:
      return typeof value === 'symbol';
    case Function:
      return typeof value === 'function';
    case null:
    case undefined:
      return value === type;
    default:
      return value instanceof type;
  }
}

function contract(fn, ...types) {
  if (typeof fn !== 'function' || types.length === 0) {
    throw new TypeError('Потрібні функція і тип результату');
  }

  const returnType = types.pop();
  return function (...args) {
    if (args.length !== types.length) {
      throw new TypeError('Неправильна кількість аргументів');
    }

    for (let i = 0; i < args.length; i++) {
      if (matchesType(args[i], types[i]) === false) {
        throw new TypeError('Неправильний тип аргументу ' + (i + 1));
      }
    }

    const result = fn.apply(this, args);
    if (matchesType(result, returnType) === false) {
      throw new TypeError('Неправильний тип результату');
    }
    return result;
  };
}

module.exports = { contract };
