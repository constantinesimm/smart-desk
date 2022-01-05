class HttpError extends Error {
  constructor(status = 500, msg = 'Internal Server Error') {
    super(msg);
    this.status = status;
  }
}

module.exports = HttpError;
