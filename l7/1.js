function rem(arr, item) {
  let i = arr.indexOf(item);
  if (Number.isNaN(item)) {
    i = arr.findIndex(Number.isNaN);
  }
  if (i !== -1) {
    arr.splice(i, 1);
  }
}

module.exports = { removeElement: rem };
