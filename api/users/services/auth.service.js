const axios = require('axios');
const bcrypt = require('bcrypt');
const { OAuth2Client } = require('google-auth-library');
const { vendors: { googleClientId } } = require('../../../config');
const { HttpError, jwt, i18n, mailer } = require('../../../libs');

const { UserModel } = require('../models');

module.exports = {
  localLogin({ email, secret }) {
    return new Promise((resolve, reject) => {
      UserModel
        .findOne({ email }, (err, user) => {
          if (err) return reject(new HttpError(500, err.message));
          if (!user) return reject(new HttpError(404, i18n.__('auth.error.userNotFound')));
          if (!user.isVerified) return reject(new HttpError(400, i18n.__('auth.error.notVerified')));
          if (!user.hash && (!!user.googleId || !!user.facebookId)) {
            UserModel
              .findByIdAndUpdate(
                user._id,
                {
                  serviceToken: jwt.signToken({ userId: user._id, userEmail: user.email }, '24h'),
                  authToken: null,
                  isVerified: false,
                },
                { new: true },
                (err, doc) => {
                  if (err) return reject(new HttpError(500, err.message));
                  if (!doc) return reject(new HttpError(404, i18n.__('auth.error.userNotFound')));

                  mailer(doc.email, 'passwordCreate', doc.firstName, doc.serviceToken);

                  return resolve({ message: i18n.__('auth.success.passwordCreateMessage'), action: 'create-password' });
                });
          } else {
            return bcrypt.compare(secret, user.hash, (err, result) => {
              if (err) return reject(new HttpError(500, err.message));
              if (!result) return reject(new HttpError(401, i18n.__('auth.error.invalidCredentials')));

              const authToken = jwt.signToken({ userId: user._id, userEmail: user.email });

              UserModel
                .findByIdAndUpdate(user._id, { $set: { authToken } }, { new: true })
                .select({ hash: 0, serviceToken: 0, authToken: 0 })
                //.populate('campaigns')
                .exec((err, doc) => {
                  if (err) return reject(new HttpError(500, err.message));

                  return resolve({ message: i18n.__('auth.success.loginMessage', { name: doc.firstName }), action: 'sign-in', token: authToken, user: doc });
                })
            })
          }
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

          return resolve({ message: i18n.__('auth.success.logoutMessage', { name: doc.firstName }) });
        });
    })
  },
  localRegister({ email, firstName, lastName, language }) {
    return new Promise((resolve, reject) => {
      UserModel
        .findOne({ email }, (err, user) => {
          if (err) return reject(new HttpError(500, err.message));
          if (user) return reject(new HttpError(400, i18n.__('auth.error.userExists')));

          let newUser = new UserModel({ email, firstName, lastName, language });

          newUser.serviceToken = jwt.signToken({ userId: newUser._id, userEmail: newUser.email }, '24h');

          newUser
            .save((err, doc) => {
              if (err) return reject(new HttpError(500, err.message));

              mailer(doc.email, 'register', doc.firstName, doc.serviceToken);

              return resolve({ message: i18n.__('auth.success.registerMessage') });
            });
        })
    })
  },
  localRegisterConfirm({ userId, email, secret }) {
    return new Promise((resolve, reject) => {
      UserModel
        .findById(userId, (err, user) => {
          if (err) return reject(new HttpError(500, err.message));
          if (!user) return reject(new HttpError(404, i18n.__('auth.error.userNotFound')));

          return bcrypt.genSalt(10, (err, salt) => {
            if (err) return reject(new HttpError(500, err.message));

            return bcrypt.hash(secret, salt, (err, hash) => {
              if (err) return reject(new HttpError(500, err.message));

              const authToken = jwt.signToken({ userId: user._id, userEmail: user.email });

              UserModel
                .findByIdAndUpdate(user._id, { hash, isVerified: true, serviceToken: null, authToken }, { new: true })
                .select({ hash: 0, serviceToken: 0, authToken: 0 })
                //.populate('campaigns')
                .exec((err, doc) => {
                  if (err) return reject(new HttpError(500, err.message));

                  return resolve({ message: i18n.__('auth.success.emailConfirmMessage'), token: authToken, user: doc });
                })
            })
          })
        })
    })
  },
  localPasswordReset(email) {
    return new Promise((resolve, reject) => {
      UserModel
        .findOne({ email }, (err, user) => {
          if (err) return reject(new HttpError(500, err.message));
          if (!user) return reject(new HttpError(404, i18n.__('auth.error.userNotFound')));

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
                if (!user) return reject(new HttpError(404, i18n.__('auth.error.userNotFound')));

                mailer(user.email, 'passwordRecovery', user.firstName, user.serviceToken);

                return resolve({ message: i18n.__('auth.success.passwordResetMessage') });
              });
        })
    })
  },
  localPasswordUpdate({ userId, email, secret }) {
    return new Promise((resolve, reject) => {
      UserModel
        .findById(userId, (err, user) => {
          if (err) return reject(new HttpError(500, err.message));
          if (!user) return reject(new HttpError(404, i18n.__('auth.error.userNotFound')));

            return bcrypt.genSalt(10, (err, salt) => {
              if (err) return reject(new HttpError(500, err.message));

              return bcrypt.hash(secret, salt, (err, hash) => {
                if (err) return reject(new HttpError(500, err.message));

                const authToken = jwt.signToken({ userId: user._id, userEmail: user.email });

                UserModel
                  .findByIdAndUpdate(user._id, { hash, isVerified: true, serviceToken: null, authToken }, { new: true })
                  .select({ hash: 0, serviceToken: 0, authToken: 0 })
                  //.populate('campaigns')
                  .exec((err, doc) => {
                    if (err) return reject(new HttpError(500, err.message));

                    return resolve({ message: i18n.__('auth.success.passwordUpdateMessage'), token: authToken, user: doc });
                  })
              })
            });
          });
    })
  },
  verificateToken(token) {
    return new Promise((resolve, reject) => {
      const { userId, userEmail } = jwt.verifyToken(token);

      if (!userId || !userEmail) return reject(new HttpError(400, jwt.verifyToken(token).message))
      else {
        UserModel
          .findOne({
            $and: [
              { _id: userId },
              {
                $or: [
                  { authToken: token },
                  { serviceToken: token }
                ]
              }
            ]
          })
          .select({ language: 1 })
          .exec((err, user) => {
            if (err) return reject(new HttpError(500, err.message));
            if (!user) return reject(new HttpError(401, i18n.__('auth.error.invalidToken')));

            return resolve({ language: user.language, email: userEmail, userId });
          })
      }
    })
  },
  socialLoginGoogle({ googleIdToken, language }) {
    return new Promise(async (resolve, reject) => {
      try {
        const client = new OAuth2Client(googleClientId);

        const ticket = await client.verifyIdToken({
          idToken: googleIdToken,
          audience: googleClientId
        });

        const googleUserProfile = ticket.getPayload();

        UserModel
          .findOne({ email: googleUserProfile.email }, (err, user) => {
            if (err) return reject(new HttpError(500, err.message));
            // check if no user found with fb profile email -> next create user
            if (!user) {
              let newUser = new UserModel({
                email: googleUserProfile.email,
                firstName: googleUserProfile.given_name,
                lastName: googleUserProfile.family_name,
                isVerified: true,
                language,
                googleId: googleUserProfile.sub
              });

              newUser.authToken = jwt.signToken({ userId: newUser._id, userEmail: newUser.email });

              newUser
                .save((err, doc) => {
                  if (err) return reject(new HttpError(500, err.message));

                  const formattedUser = doc;
                  delete formattedUser.hash;
                  delete formattedUser.serviceToken;
                  delete formattedUser.authToken;

                  return resolve({ message: i18n.__('auth.success.socialSignUp', { name: doc.firstName }), token: newUser.authToken, user: doc });
                });
            } else {
              const authToken = jwt.signToken({ userId: user._id, userEmail: user.email });

              UserModel
                .findByIdAndUpdate(
                  user._id,
                  { authToken, googleId: googleUserProfile.sub, isVerified: true, serviceToken: null },
                  { new: true })
                .select({ hash: 0, serviceToken: 0, authToken: 0 })
                .exec((err, doc) => {
                  if (err) return reject(new HttpError(500, err.message));

                  return resolve({ message: i18n.__('auth.success.loginMessage', { name: doc.firstName }), token: authToken, user: doc });
                })
            }
          });
      } catch (error) {
        return reject(new HttpError(400, error.message));
      }
    })
  },
  socialLoginFacebook({ facebookUserId, facebookAccessToken, language }) {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await axios({
          method: 'GET',
          url: 'https://graph.facebook.com/v12.0/me',
          params: {
            fields: 'id,last_name,first_name,email',
            access_token: facebookAccessToken
          }
        });

        UserModel
          .findOne({ email: data.email }, (err, user) => {
            console.log('user', user)
            if (err) return reject(new HttpError(500, err.message));
            // check if no user found with fb profile email -> next create user
            if (!user) {
              let newUser = new UserModel({
                email: data.email,
                firstName: data.first_name,
                lastName: data.last_name,
                isVerified: true,
                language,
                facebookId: facebookUserId
              });

              newUser.authToken = jwt.signToken({ userId: newUser._id, userEmail: newUser.email });

              newUser
                .save((err, doc) => {
                  if (err) return reject(new HttpError(500, err.message));

                  const formattedUser = doc;
                  delete formattedUser.hash;
                  delete formattedUser.serviceToken;
                  delete formattedUser.authToken;

                  return resolve({ message: i18n.__('auth.success.socialSignUp', { name: doc.firstName }), token: newUser.authToken, user: doc });
                })
            }
            else {
              const authToken = jwt.signToken({ userId: user._id, userEmail: user.email });

              UserModel
                .findByIdAndUpdate(
                  user._id,
                  { authToken, facebookId: facebookUserId, isVerified: true, serviceToken: null },
                  { new: true })
                .select({ hash: 0, serviceToken: 0, authToken: 0 })
                .exec((err, doc) => {
                  if (err) return reject(new HttpError(500, err.message));

                  return resolve({ message: i18n.__('auth.success.loginMessage', { name: doc.firstName }), token: authToken, user: doc });
                })
            }
          })
      } catch (error) {
        return reject(new HttpError(400, error.response.data.error.message));
      }
    })
  }
}
