const { validate, ValidationError, Joi } = require('express-validation');

const fields = {
  email: Joi.string().email().required(),
  secret: Joi.string().min(6).max(14).regex(/^[a-zA-Z0-9]{6,14}$/).required(),
  firstName: Joi.string().min(3).max(15),
  lastName: Joi.string().min(3).max(15),
  token: Joi.string().token().required(),
  gender: Joi.any().allow('Male', 'Female'),
  language: Joi.any().allow('en', 'uk', 'ru'),
  role: Joi.any().allow('customer', 'admin'),
}

module.exports = {
  validate, ValidationError, Joi, fields
}
