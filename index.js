module.exports = function(opts, fn) {
  if ('function' !== typeof fn) {
    fn = opts;
    opts = {};
  }

  opts || (opts = {});
  opts.max || (opts.max = 50);
  opts.interval || (opts.interval = 1000);

  var start = process.hrtime();

  setInterval(function(){
    var delta = process.hrtime(start);
    var nanosec = delta[0] * 1e9 + delta[1];
    var ms = nanosec / 1e6;
    var n = ms - opts.interval;
    if (n > opts.max) fn(Math.round(n));
    start = process.hrtime();
  }, opts.interval).unref();
};