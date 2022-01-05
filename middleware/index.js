const appSecurity = require('./app-security');
const appController = require('./app-controller');
const appErrorHandler = require('./app-error-handler');
const appRequestParser = require('./app-request-parser');

const authMiddleware = require('./auth-middleware');

module.exports = {
  appSecurity,
  appController,
  appErrorHandler,
  appRequestParser,
  authMiddleware
}
