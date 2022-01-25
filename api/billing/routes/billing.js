const billingRouter = require('express').Router();
const billingController = require('../controllers');

const {
  validate,
  paymentPlanSchema
} = require('../validation');

const { authMiddleware } = require('../../../middleware');

billingRouter
  .post(
    '/payment-plan',
    authMiddleware.adminRoute,
    validate(paymentPlanSchema),
    billingController.setPaymentPlanData
  );

billingRouter
  .post('/payment-plan/calculate',
    billingController.calculatePaymentPlan
  );

module.exports = billingRouter;
