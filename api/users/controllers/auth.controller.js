const {
  authService
} = require('../services');

module.exports = {
  localLogin: (req, res, next) => {
    authService
      .localLogin(req.body)
      .then(response => {
        res.setHeader('authorization', response.token);
        res.setHeader('accept-language', response.user.language);

        return res.json(response);
      })
      .catch(error => next(error));
  },
  localLogout: (req, res, next) => {
    authService
      .localLogout(req.locals.userId)
      .then(response => res.json(response))
      .catch(error => next(error));
  },
  localRegister: (req, res, next) => {
    authService
      .localRegister(req.body)
      .then(response => res.json(response))
      .catch(error => next(error));
  },
  localRegisterConfirm: (req, res, next) => {
    authService
      .localRegisterConfirm(req.body)
      .then(response => res.json(response))
      .catch(error => next(error));
  },
  localPasswordReset: (req, res, next) => {
    authService
      .localPasswordReset(req.body.email)
      .then(response => res.json(response))
      .catch(error => next(error));
  },
  localPasswordUpdate: (req, res, next) => {
    authService
      .localPasswordUpdate(req.body)
      .then(response => res.json(response))
      .catch(error => next(error));
  },
  verificateToken: (req, res, next) => {
    authService
      .verificateToken(req.params.token)
      .then(response => res.json(response))
      .catch(error => next(error));
  },
  socialLoginGoogle: (req, res, next) => {
    authService
      .socialLoginGoogle(req.locals.userId, req.body.token)
      .then(response => res.json(response))
      .catch(error => next(error));
  },
  socialLoginFacebook: (req, res, next) => {
    authService
      .socialLoginFacebook(req.locals.userId, req.body.token)
      .then(response => res.json(response))
      .catch(error => next(error));
  }
}
