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

const paymentPlanFields = {
  tariffName: Joi.string().required(),
  tariffFeatures: Joi.object().keys({
    demoBots: Joi.number().required(),
    realBots: Joi.number().required(),
    botsConstructor: Joi.boolean().required(),
    botsAnalytics: Joi.boolean().required(),
    customersMailing: Joi.boolean().required(),
    accessTransfer: Joi.boolean().required(),
    employeesAccess: Joi.boolean().required(),
    crmIntegrations: Joi.boolean().required(),
  }),
  messengerName: Joi.string().required(),
  messengerPrice: Joi.number().required()
}

module.exports = {
  validate,
  ValidationError,
  Joi,
  userFields,
  paymentPlanFields
}
