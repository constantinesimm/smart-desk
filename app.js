const app = require('express')();

const {
  appSecurity,
  appController,
  appErrorHandler,
  appRequestParser
} = require('./middleware');

//add app request parser middleware
appRequestParser(app);

//add app security middleware
appSecurity(app);

//connect app controllers
appController(app);

//added error handlers
appErrorHandler(app);


module.exports = app;
