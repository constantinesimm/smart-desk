const { HttpError, i18n } = require('../../../libs');
const { PaymentPlanModel } = require('../models');

module.exports = {
  setPaymentPlanData({ discounts, messengers, userId }) {
    return new Promise((resolve, reject) => {
      const newPaymentPlan = new PaymentPlanModel({
        discounts,
        messengers,
        author: userId
      });

      newPaymentPlan.save((err, doc) => {
        if (err) return reject(new HttpError(500, err.message));

        return resolve({ message: i18n.__('billing.paymentPlan.create'), paymentPlan: doc });
      })
    });
  },
  calculatePaymentPlanValue({ period, messengers }) {
    return new Promise((resolve, reject) => {

    })
  }
}
