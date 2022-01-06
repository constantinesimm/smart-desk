const app = require('express')()

const {
  connectMongoDB,
} = require('./libs')

const {
  appSecurity,
  appController,
  appErrorHandler,
  appRequestParser,
} = require('./middleware')

/**
 * Connect Databases
 */
connectMongoDB()

/**
 * Application Middlewares
 * Request parsers (body-parser)
 * App Security (helmet/cors)
 * App Routes Controller(include static paths)
 * App Error Handler
 */

appRequestParser(app)
appSecurity(app)
appController(app)
appErrorHandler(app)

module.exports = app
