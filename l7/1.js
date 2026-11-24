function removeElement(array, item) {
  let index = array.indexOf(item);
  if (Number.isNaN(item)) {
    index = array.findIndex(Number.isNaN);
  }
  if (index !== -1) {
    array.splice(index, 1);
  }
}

module.exports = { removeElement };
