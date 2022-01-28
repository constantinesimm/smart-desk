const {HttpError, i18n} = require('../../../libs');
const {PaymentPlanModel} = require('../models');

module.exports = {
  getPaymentsPlanData() {
    return new Promise((resolve, reject) => {
      PaymentPlanModel
        .findOne(
          {status: 'active'},
          {messengers: 0, _id: 0, author: 0, createdAt: 0, updatedAt: 0, __v: 0},
          (err, doc) => {
            if (err) return reject(new HttpError(500, err.message));

            return resolve(doc);
          })
    })
  },
  setPaymentPlanData({paymentRates, paymentPeriods, userId}) {
    return new Promise((resolve, reject) => {
      const newPaymentPlan = new PaymentPlanModel({
        paymentRates,
        paymentPeriods,
        author: userId
      });

      newPaymentPlan.save((err, doc) => {
        if (err) return reject(new HttpError(500, err.message));

        return resolve({message: i18n.__('billing.paymentPlan.create'), paymentPlan: doc});
      })
    });
  },
  calculatePaymentPlanValue({paymentPeriod}) {
    return new Promise((resolve, reject) => {
      PaymentPlanModel
        .findOne(
          {status: 'active'},
          {paymentRates: 1, paymentPeriods: 1, messengers: 1, _id: 0},
          (err, doc) => {
            if (err) return reject(new HttpError(500, err.message));
            if (!doc) return reject(new HttpError(400, i18n.__('billing.paymentPlan.noActivePaymentData')));

            const discountData = doc.paymentPeriods.filter(p => p.value === paymentPeriod && p.discount !== undefined);
            const messengersPrice = doc.messengers.map(m => m.price).reduce((curr, next) => curr + next, 0);

            const totalRateCost = doc.paymentRates.map(r => {
              let discount, multiplicator, totalPrice, discountPrice;

              if (!discountData.length) totalPrice = r.features.realBots * messengersPrice;
              else {
                discount = discountData[0].discount;
                multiplicator = discountData[0].multiplicator;

                discountPrice = r.features.realBots * ((messengersPrice - (messengersPrice * discount / 100)) * multiplicator);
                totalPrice =  r.features.realBots * (messengersPrice * multiplicator);
              }

              return {
                name: r.name,
                totalPrice,
                discountPrice
              }
            });

            return resolve(totalRateCost);
          })
    })
  }
}
