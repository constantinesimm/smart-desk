const mongoose = require('mongoose');

const {
  database: { mongo }
} = require('../../config');

module.exports = () => mongoose
  .connect(mongo.uri, mongo.options)
  .then(() => console.info('♦♦♦♦♦ Database(mongoDB) connected ♦♦♦♦♦'))
  .catch(error => console.error(`♦♦♦♦♦ Database(mongoDB) error - ${ error } ♦♦♦♦♦`));
