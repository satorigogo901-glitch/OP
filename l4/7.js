function ages(obj) {
  const res = { __proto__: null };
  for (const name in obj) {
    if (!Object.hasOwn(obj, name)) continue;
    const p = obj[name];
    res[name] = p.died - p.born;
  }
  return { ...res };
}

module.exports = { ages };
