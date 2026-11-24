const fn = () => {
  const first = { name: 'Максим' };
  let second = { name: 'Катя' };

  first.name = 'Нікіта';
  second.name = 'Галина';
  second = { name: 'Софія' };
  return { first, second };
};

module.exports = {fn};
