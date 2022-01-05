const authRouter = require('express').Router();
const { authController } = require('../controllers');

const { authMiddleware } = require('../../../middleware');
const {
  validate,
  loginSchema,
  registerSchema,
  registerConfirmSchema,
  passwordResetSchema,
  passwordUpdateSchema,
  verificateTokenSchema
} = require('../validation');

authRouter
  .post(
    '/local/login',
    authMiddleware.publicRoute,
    validate(loginSchema, {}, {}),
    authController.localLogin
  );

authRouter
  .post(
    '/local/logout',
    authMiddleware.privateRoute,
    authController.localLogout
  );

authRouter
  .post(
    '/local/register',
    authMiddleware.publicRoute,
    validate(registerSchema),
    authController.localRegister
  );

authRouter
  .put(
    '/local/register/confirm',
    authMiddleware.publicRoute,
    validate(registerConfirmSchema),
    authController.localRegisterConfirm
  );

authRouter
  .post(
    '/local/password/reset',
    authMiddleware.publicRoute,
    validate(passwordResetSchema),
    authController.localPasswordReset
  );

authRouter
  .put(
    '/local/password/update',
    authMiddleware.publicRoute,
    validate(passwordUpdateSchema),
    authController.localPasswordUpdate
  );

authRouter
  .get(
    '/token/verificate/:token',
    authMiddleware.publicRoute,
    validate(verificateTokenSchema),
    authController.verificateToken
  );

authRouter
  .post(
    '/social/google',
    authMiddleware.publicRoute,
    authController.socialLoginGoogle
  );

authRouter
  .post(
    '/social/facebook',
    authMiddleware.publicRoute,
    authController.socialLoginFacebook
  );

module.exports = authRouter;
