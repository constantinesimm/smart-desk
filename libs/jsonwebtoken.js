const jwt = require('jsonwebtoken');
const { secretKeys } = require('../config');

module.exports = {
  signToken(userData, expires = '9h') {
    return jwt.sign(userData, secretKeys.token, { expiresIn: expires });
  },
  verifyToken(token) {
    return jwt.verify(token, secretKeys.token, {}, (err, decoded) => err ? err : decoded);
  }
}
