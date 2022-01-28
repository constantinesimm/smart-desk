const billingRouter = require('express').Router();
const billingController = require('../controllers');

const {
  validate,
  createPaymentRatesSchema,
  calculatePriceSchema
} = require('../validation');

const { authMiddleware } = require('../../../middleware');

billingRouter
  .get('/payment-plan', billingController.getPaymentPlanData);

billingRouter
  .post(
    '/payment-plan',
    authMiddleware.adminRoute,
    validate(createPaymentRatesSchema),
    billingController.setPaymentPlanData
  );

billingRouter
  .post('/payment-plan/calculate',
    validate(calculatePriceSchema),
    billingController.calculatePaymentPlan
  );

module.exports = billingRouter;
