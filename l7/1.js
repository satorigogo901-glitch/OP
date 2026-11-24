'use strict';

const removeElement = (array, item) => {
  const index = array.findIndex((value) => (
    value === item || (Number.isNaN(value) && Number.isNaN(item))
  ));
  if (index !== -1) array.splice(index, 1);
};

module.exports = { removeElement };
