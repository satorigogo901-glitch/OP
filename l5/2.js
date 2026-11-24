function array() {
  const values = [];

  function get(index) {
    return values[index];
  }

  get.push = function (value) {
    return values.push(value);
  };

  get.pop = function () {
    return values.pop();
  };

  return get;
}

module.exports = { array };
