const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    trim: true,
    required: true,
    set: v => v.toLowerCase()
  },
  googleId: {
    type: String,
    default: null
  },
  facebookId: {
    type: String,
    default: null
  },
  hash: {
    type: String,
    default: null
  },
  authToken: {
    type: String,
    default: null
  },
  serviceToken: {
    type: String,
    default: null
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  isBlocked: {
    type: Boolean,
    default: false
  },
  language: {
    type: String,
    enum: ['en', 'uk', 'ru'],
    default: 'en'
  },
  role: {
    type: String,
    enum: ['customer', 'admin'],
    default: 'customer'
  },
  gender: {
    type: String,
    enum: ['male', 'female']
  },
  phones: [{
    type: String
  }],
  campaigns: [{
    type: Schema.Types.ObjectId,
    ref: 'Campaigns'
  }]
}, {
  collection: 'users'
});

module.exports = model('User', UserSchema);
