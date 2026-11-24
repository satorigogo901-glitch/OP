'use strict';

const primitiveTypes = new Map([
  [Number, 'number'],
  [String, 'string'],
  [Boolean, 'boolean'],
  [BigInt, 'bigint'],
  [Symbol, 'symbol'],
  [Function, 'function'],
]);

const matchesType = (value, type) => {
  if (type === null || type === undefined) return value === type;
  if (primitiveTypes.has(type)) {
    return typeof value === primitiveTypes.get(type);
  }
  return value instanceof type;
};

const contract = (fn, ...types) => {
  if (typeof fn !== 'function' || types.length === 0) {
    throw new TypeError('Expected a function and a return type');
  }

  const returnType = types.pop();
  return function(...args) {
    if (args.length !== types.length) {
      throw new TypeError(`Expected ${types.length} arguments`);
    }

    types.forEach((type, index) => {
      if (!matchesType(args[index], type)) {
        throw new TypeError(`Unexpected type for argument ${index + 1}`);
      }
    });

    const result = fn.apply(this, args);
    if (!matchesType(result, returnType)) {
      throw new TypeError('Unexpected return type');
    }
    return result;
  };
};

module.exports = { contract };
