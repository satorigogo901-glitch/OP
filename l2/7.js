// У const можна змінити поле об'єкта. Новий об'єкт можна присвоїти через let.
const fn = () => {
  const first = { name: 'Максим' };
  let second = { name: 'Катя' };

  first.name = 'Нікіта';
  second.name = 'Галина';
  second = { name: 'Софія' };
  return { first, second };
};

module.exports = { fn };
