const { HttpError, jwt, i18n } = require('../libs');
const { UserModel } = require('../api/users/models');

module.exports = {
  publicRoute: (req, res, next) => {
    const authToken = req.headers['authorization'];

    if (!authToken) return next();
    else return next(new HttpError(403, i18n.__('auth.midware.publicRoute')));
  },
  privateRoute: (req, res, next) => {
    const authToken = req.headers['authorization'];
    const userLocale = req.headers['accept-language'];
    if (!authToken) return next(new HttpError(401, i18n.__('auth.midware.privateRoute')));

    const { userId, userEmail } = jwt.verifyToken(authToken);
    if (!userId || !userEmail) return next(new HttpError(401, jwt.verifyToken(authToken).message))

    UserModel
      .findOne({
        $and: [
          { _id: userId },
          { email: userEmail },
          { authToken }
        ]
      }, (err, user) => {
        if (err) return next(new HttpError(500, err.message));
        if (!user) return next(new HttpError(403, i18n.__('auth.midware.userNotFound')));

        req.locals = {
          userId,
          userEmail,
          userLocale
        };

        return next();
      })
  }
}
