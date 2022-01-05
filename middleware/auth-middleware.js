const { HttpError, jwt } = require('../libs');
const { UserModel } = require('../api/users/models');

module.exports = {
  publicRoute: (req, res, next) => {
    const authToken = req.headers['authorization'];

    if (!authToken) return next();
    else return next(new HttpError(403, 'Page available only for guest users'));
  },
  privateRoute: (req, res, next) => {
    const authToken = req.headers['authorization'];
    if (!authToken) return next(new HttpError(401, 'Page available only for authenticated users'));

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
        if (!user) return next(new HttpError(403, 'User not found or hasn\'t not created yet'));

        req.locals = {
          userId,
          userEmail
        };

        return next();
      })
  }
}
