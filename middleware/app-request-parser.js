const bodyParser = require('body-parser');

module.exports = app => {
  // request body parser
  app
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
}
