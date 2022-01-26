const { Schema, model } = require('mongoose');

const PaymentPlanSchema = new Schema({
  status: {
    type: String,
    enum: ['active', 'paused', 'archieved'],
    default: 'active'
  },
  paymentRates: [{
    _id: false,
    name: {
      type: String,
      required: true
    },
    features: {
      demoBots: {
        type: Number,
        required: true
      },
      realBots: {
        type: Number,
        required: true
      },
      botsConstructor: {
        type: Boolean,
        required: true
      },
      botsAnalytics: {
        type: Boolean,
        required: true
      },
      customersMailing: {
        type: Boolean,
        required: true
      },
      accessTransfer: {
        type: Boolean,
        required: true
      },
      employeesAccess: {
        type: Boolean,
        required: true
      },
      crmIntegrations: {
        type: Boolean,
        required: true
      },
    }
  }],
  paymentPeriods: [{
    _id: false,
    label: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true
    },
    discount: {
      type: Number,
      defaults: null
    },
    multiplicator: {
      type: Number,
      required: true
    },
  }],
  messengers: [{
    _id: false,
    name: {
      type: String,
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
