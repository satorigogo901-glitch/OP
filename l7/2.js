function removeElements(array, ...items) {
  // Видаляємо елементи з кінця, щоб попередні індекси не зміщувались.
  array.reduceRight(function (result, value, index) {
    if (items.includes(value)) {
      array.splice(index, 1);
    }
  }, undefined);
}

module.exports = { removeElements };
