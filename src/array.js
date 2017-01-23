Array.prototype.first = function () {
  return this[0];
};

Array.prototype.last = function () {
  return this[this.length-1];
};

Array.prototype.empty = function () {
  return this.length === 0;
};

Array.prototype.clear = function () {
  this.length = 0;
  return this;
};

Array.prototype.size = function () {
  return this.length;
};

Array.prototype.sample = function () {
  return this[Math.floor(Math.random() * this.length)];
};

Array.prototype.compact = function () {
  return this.filter((value) => {
    return value;
  });
};
