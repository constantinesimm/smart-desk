const { validator: { Joi, fields, validate } } = require('../../../libs');

const loginSchema = {
  body: Joi.object({
    email: fields.email,
    secret: fields.secret
  })
};

const registerSchema = {
  body: Joi.object({
    email: fields.email,
    secret: fields.secret,
    confirmSecret: fields.confirmSecret,
    firstName: fields.firstName,
    lastName: fields.lastName,
    language: fields.language
  })
};

const registerConfirmSchema = {
  body: Joi.object({
    email: fields.email,
    secret: fields.secret,
    token: fields.token
  })
};

const passwordResetSchema = {
  body: Joi.object({
    email: fields.email,
  })
};

const passwordUpdateSchema = {
  body: Joi.object({
    email: fields.email,
    secret: fields.secret,
    token: fields.token
  })
};

const verificateTokenSchema = {
  params: Joi.object({
    token: fields.token
  })
};

module.exports = {
  validate,
  loginSchema,
  registerSchema,
  registerConfirmSchema,
  passwordResetSchema,
  passwordUpdateSchema,
  verificateTokenSchema
};
