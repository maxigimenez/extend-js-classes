// Methods from https://gist.github.com/FGRibreau/1748259

Number.prototype.times = function (cb) {
  var i = -1;

  while (++i < this) {
    cb(i);
  }

  return +this;
};

Number.prototype.upto = function (t, cb) {
  var i = this;

  if(t < this) {
    return +this;
  }

  while (i <= t) {
    cb(i++);
  }

  return +this;
};

Number.prototype.downto = function (t, cb) {
  var i = this;

  if(t > this) {
    return +this;
  }

  while (i >= t) {
    cb(i--);
  }

  return +this;
};
