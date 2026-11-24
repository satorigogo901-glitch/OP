function difference(array1, array2) {
  return array1.filter(function (value) {
    return array2.includes(value) === false;
  });
}

module.exports = { difference };
