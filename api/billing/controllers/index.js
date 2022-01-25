const billingService = require('../services/billing.service');

module.exports = {
  setPaymentPlanData: (req, res, next) => {
    billingService
      .setPaymentPlanData({ ...req.body, userId: req.locals.userId })
      .then(response => res.json(response))
      .catch(error => next(error))
  },
  calculatePaymentPlan: (req, res, next) => {
    billingService
      .calculatePaymentPlanValue()
      .then(response => res.json(response))
      .catch(error => next(error))
  }
}
