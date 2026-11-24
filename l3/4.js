function introspect(iface) {
  const res = [];
  for (const key of Object.keys(iface)) {
    const fn = iface[key];
    if (typeof fn === 'function') {
      res.push([key, fn.length]);
    }
  }
  return res;
}

module.exports = { introspect };
