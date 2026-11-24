'use strict';

// const дозволяє змінювати поля об'єкта, але повторне присвоєння
// самому ідентифікатору спричиняє TypeError. Для let дозволено обидві дії.
const fn = () => {
  const first = { name: 'Анна' };
  let second = { name: 'Олена' };

  first.name = 'Марія';
  second.name = 'Ірина';
  second = { name: 'Софія' };

  return { first, second };
};

module.exports = { fn };
