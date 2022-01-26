const billingService = require('../services/billing.service');

module.exports = {
  getPaymentPlanData: (req, res, next) => {
    billingService
      .getPaymentsPlanData()
      .then(response => res.json(response))
      .catch(error => next(error))
  },
  setPaymentPlanData: (req, res, next) => {
    billingService
      .setPaymentPlanData({ ...req.body, userId: req.locals.userId })
      .then(response => res.json(response))
      .catch(error => next(error))
  },
  calculatePaymentPlan: (req, res, next) => {
    billingService
      .calculatePaymentPlanValue(req.body)
      .then(response => res.json(response))
      .catch(error => next(error))
  }
}
