const response = (err = null, message) => ({
  err: err ? err : undefined,
  message,
});

module.exports = response;
