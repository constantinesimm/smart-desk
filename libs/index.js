const HttpError = require('./http-error');
const connectMongoDB = require('./database/mongoose');
const jsonwebtoken = require('./jsonwebtoken');
const validator = require('./validation');
const i18n = require('./i18n');
const mailer = require('./mailer');

module.exports = {
  HttpError,
  connectMongoDB,
  jwt: jsonwebtoken,
  validator,
  i18n,
  mailer
}
