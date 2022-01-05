const cors = require('cors');
const helmet = require('helmet');

const {
  cors: {
    corsOptions
  }
} = require('../config');

module.exports = app => {
  // Setting various HTTP headers
  app.use(helmet.noSniff());
  app.use(helmet.xssFilter());
  app.use(helmet.hidePoweredBy({ setTo: `Smart Bot Application` }));

  // Cross-origin resource sharing
  app.use(cors(corsOptions));
}
