const i18n = require('./i18n');

class HttpError extends Error {
  constructor(status = 500, msg = i18n.__('error.500')) {
    super(msg);
    this.status = status;
  }
}

module.exports = HttpError;
