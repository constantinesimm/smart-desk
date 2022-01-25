const { Schema, model } = require('mongoose');

const PaymentPlanSchema = new Schema({
  discounts: {
    year: {
      type: Number,
      required: true
    },
    coupleMessengers: {
      type: Number,
      required: true
    },
    tripleMessengers: {
      type: Number,
      required: true
    }
  },
  paymentPeriods: {
    yearly: {
      type: Number,
      default: 365
    },
    monthly: {
      type: Number,
      default: 30
    }
  },
  messengers: [{
    _id: false,
    name: {
      type: String,
      enum: ['telegram', 'viber', 'fb-messenger'],
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  }],
  author: {
    type: Schema.Types.ObjectId,
    ref: 'UserModel'
  }
}, {
  timestamps: true,
  collection: 'payment-plans'
});

module.exports = model('PaymentPlan', PaymentPlanSchema);
