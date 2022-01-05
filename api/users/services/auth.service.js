const bcrypt = require('bcrypt');
const { HttpError, jwt } = require('../../../libs');
const { UserModel } = require('../models');

module.exports = {
  localLogin({ email, secret }) {
    return new Promise((resolve, reject) => {
      UserModel
        .findOne({ email }, (err, user) => {
          if (err) return reject(new HttpError(500, err.message));
          if (!user) return reject(new HttpError(404, 'User not found or hasn\'t not created yet'));
          if (!user.isVerified) return reject(new HttpError(400, 'Please, confirm your email'));

          return bcrypt.compare(secret, user.hash, (err, result) => {
            if (err) return reject(new HttpError(500, err.message));
            if (!result) return reject(new HttpError(401, 'Email or password is incorrect'));

            const authToken = jwt.signToken({ userId: user._id, userEmail: user.email });

            UserModel
              .findByIdAndUpdate(user._id, { $set: { authToken } }, { new: true })
              .select({ hash: 0 })
              .populate('campaigns')
              .exec((err, doc) => {
                if (err) return reject(new HttpError(500, err.message));

                return resolve({ message: `Great to see you again, ${ doc.firstName }`, user: doc });
              })
          })
        })
    })
  },
  localLogout(userId) {
    return new Promise((resolve, reject) => {
      UserModel
        .findByIdAndUpdate(userId, { $set: { authToken: null } }, { new: true })
        .select({ firstName: 1 })
        .exec((err, doc) => {
          if (err) return reject(new HttpError(500, err.message));

          return resolve({ message: `See you soon, ${ doc.firstName }`});
        });
    })
  },
  localRegister({ email, firstName, lastName, language }) {
    return new Promise((resolve, reject) => {
      UserModel
        .findOne({ email }, (err, user) => {
          if (err) return reject(new HttpError(500, err.message));
          if (user) return reject(new HttpError(400, 'User with this email already exists. Use password recovery or enter another email'));

          let newUser = new UserModel({ email, firstName, lastName, language });

          newUser.serviceToken = jwt.signToken({ userId: newUser._id, userEmail: newUser.email }, '24h');

          newUser
            .save((err, doc) => {
              if (err) return reject(new HttpError(500, err.message));

              /** TO-DO
               * Email notifications with confirm token
               */

              return resolve({ message: 'An instruction on completing registration has been sent to your email' });
            });
        })
    })
  },
  localRegisterConfirm({ email, secret, token }) {
    return new Promise((resolve, reject) => {
      UserModel
        .findOne({ $and: [{ email }, { serviceToken: token }] }, (err, user) => {
          if (err) return reject(new HttpError(500, err.message));
          if (!user) return reject(new HttpError(404, 'User not found or hasn\'t not created yet'));

          return bcrypt.genSalt(10, (err, salt) => {
            if (err) return reject(new HttpError(500, err.message));

            return bcrypt.hash(secret, salt, (err, hash) => {
              if (err) return reject(new HttpError(500, err.message));

              const authToken = jwt.signToken({ userId: user._id, userEmail: user.email });

              UserModel
                .findByIdAndUpdate(user._id, { hash, isVerified: true, serviceToken: null, authToken }, { new: true })
                .select({ hash: 0 })
                .populate('campaigns')
                .exec((err, doc) => {
                  if (err) return reject(new HttpError(500, err.message));

                  return resolve({ message: 'Registration complete, your account verified successful!', user: doc });
                })
            })
          })
        })
    })
  },
  localPasswordReset({ email }) {
    return new Promise((resolve, reject) => {
      UserModel
        .findOne({ email }, (err, user) => {
          if (err) return reject(new HttpError(500, err.message));
          if (!user) return reject(new HttpError(404, 'User not found or hasn\'t not created yet'));

          UserModel
            .findOneAndUpdate(
              { email },
              {
                $set: {
                  hash: null,
                  isVerified: false,
                  serviceToken: jwt.signToken({ userId: user._id, userEmail: user.email }, '24h'),
                  authToken: null
                }
              },
              { new: true },
              (err, user) => {
                if (err) return reject(new HttpError(500, err.message));
                if (!user) return reject(new HttpError(404, 'User not found or hasn\'t not created yet'));

                /** TO-DO
                 * Email notifications with confirm token
                 */

                return resolve({ message: 'An instruction on completing password recovery has been sent to your email' });
              });
        })
    })
  },
  localPasswordUpdate({ email, secret, token }) {
    return new Promise((resolve, reject) => {
        UserModel
          .findOne({ $and: [{ email }, { serviceToken: token }] }, (err, user) => {
            if (err) return reject(new HttpError(500, err.message));
            if (!user) return reject(new HttpError(404, 'User not found or hasn\'t not created yet'));

            return bcrypt.genSalt(10, (err, salt) => {
              if (err) return reject(new HttpError(500, err.message));

              return bcrypt.hash(secret, salt, (err, hash) => {
                if (err) return reject(new HttpError(500, err.message));

                const authToken = jwt.signToken({ userId: user._id, userEmail: user.email });

                UserModel
                  .findByIdAndUpdate(user._id, { hash, isVerified: true, serviceToken: null, authToken }, { new: true })
                  .select({ hash: 0 })
                  .populate('campaigns')
                  .exec((err, doc) => {
                    if (err) return reject(new HttpError(500, err.message));

                    return resolve({ message: 'Password successful changed!', user: doc });
                  })
              })
            });
          });
    })
  },
  verificateToken(token) {
    return new Promise((resolve, reject) => {
      const { userId, userEmail } = jwt.verifyToken(token);

      if (!userId || userEmail) return reject(new HttpError(400, jwt.verifyToken(token).message))
      else return resolve({ id: userId, email: userEmail });
    })
  },
  socialLoginGoogle(userId, token) {
    return new Promise((resolve, reject) => {})
  },
  socialLoginFacebook(userId, token) {
    return new Promise((resolve, reject) => {})
  }
}
