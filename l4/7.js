function ages(persons) {
  const result = [];
  for (const name in persons) {
    if (Object.hasOwn(persons, name)) {
      const person = persons[name];
      result.push([name, person.died - person.born]);
    }
  }
  return Object.fromEntries(result);
}

module.exports = { ages };
