function loop(count, type, callback) {
  if (type === "f") {
    for (let i = 0; i < count; i++) {
      callback(i);
    }
  } else if (type === "w") {
    let i = 0;
    while (i < count) {
      callback(i);
      i++;
    }
  }
}

module.exports = loop;