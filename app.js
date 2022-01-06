const app = require('express')()

const {
  connectMongoDB,
} = require('./libs')

const {
  appSecurity,
  appController,
  appErrorHandler,
  appRequestParser,
  appLocaleHandler
} = require('./middleware')

/**
 * Connect Databases
 */
connectMongoDB()

/**
 * Application Middlewares
 * Request parsers (body-parser)
 * App Security (helmet/cors)
 * App Internalization (i18n)
 * App Routes Controller(include static paths)
 * App Error Handler
 */

appRequestParser(app)
appSecurity(app)
appLocaleHandler(app)
appController(app)
appErrorHandler(app)

module.exports = app
