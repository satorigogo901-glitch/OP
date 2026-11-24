function array() {
  const arr = [];
  const get = (i) => arr[i];
  get.push = (value) => arr.push(value);
  get.pop = () => arr.pop();

  return get;
}

module.exports = { array };
