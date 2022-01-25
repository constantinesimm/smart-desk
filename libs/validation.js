const { validate, ValidationError, Joi } = require('express-validation');
Joi.objectId = require('joi-objectid')(Joi);

const userFields = {
  userId: Joi.objectId().required(),
  email: Joi.string().email().required(),
  secret: Joi.string().min(6).max(14).regex(/^[a-zA-Z0-9]{6,14}$/).required(),
  confirmSecret: Joi.string().required().valid(Joi.ref('secret')),
  firstName: Joi.string().min(3).max(15),
  lastName: Joi.string().min(3).max(15),
  token: Joi.string().min(100).max(275).required(),
  gender: Joi.any().allow('Male', 'Female'),
  language: Joi.any().allow('en', 'uk', 'ru'),
  role: Joi.any().allow('customer', 'admin'),
}

const billingFields = {
  yearDiscount: Joi.number().min(5).max(20).required(),
  coupleMessengersDiscount: Joi.number().min(1.5).max(2.5).required(),
  tripleMessengersDiscount: Joi.number().min(3).max(5).required(),
  yearlyPeriod: Joi.number().equal(365).required(),
  monthlyPeriod: Joi.number().equal(30).required(),
  messengerName: Joi.string().equal('telegram', 'viber', 'fb-messenger'),
  messengerPrice: Joi.number().min(250).max(500).required()
}

module.exports = {
  validate,
  ValidationError,
  Joi,
  userFields,
  billingFields
}
