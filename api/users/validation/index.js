const { validator: { Joi, userFields, validate } } = require('../../../libs');

const loginSchema = {
  body: Joi.object({
    email: userFields.email,
    secret: userFields.secret
  })
};

const registerSchema = {
  body: Joi.object({
    email: userFields.email,
    firstName: userFields.firstName,
    lastName: userFields.lastName,
    language: userFields.language
  })
};

const registerConfirmSchema = {
  body: Joi.object({
    userId: userFields.userId,
    email: userFields.email,
    secret: userFields.secret,
    confirmSecret: userFields.confirmSecret
  })
};

const passwordResetSchema = {
  body: Joi.object({
    email: userFields.email,
  })
};

const passwordUpdateSchema = {
  body: Joi.object({
    userId: userFields.userId,
    email: userFields.email,
    secret: userFields.secret,
    confirmSecret: userFields.confirmSecret
  })
};

const verificateTokenSchema = {
  params: Joi.object({
    token: userFields.token
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
