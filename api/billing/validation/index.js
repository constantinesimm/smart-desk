const { validator: { Joi, paymentPlanFields, validate } } = require('../../../libs');

const paymentRatesSchema = Joi.object().keys({
  name: paymentPlanFields.tariffName,
  features: paymentPlanFields.tariffFeatures
});

const paymentPeriodsSchema = Joi.object().keys({
  label: Joi.string().required(),
  value: Joi.number().required(),
  discount: Joi.number(),
  multiplicator: Joi.number().required(),
});

const messengersPriceSchema = Joi.object().keys({
  name: Joi.string().required(),
  price: Joi.number().required()
});

const paymentDiscountsSchema = Joi.object().keys({
  productCount: Joi.number().required(),
  discountPercent: Joi.number().required()
});


const createPaymentRatesSchema = {
  body: Joi.object().keys({
    paymentRates: Joi.array().items(paymentRatesSchema),
    paymentPeriods: Joi.array().items(paymentPeriodsSchema),
    messengers: Joi.array().items(messengersPriceSchema),
    discounts: Joi.array().items(paymentDiscountsSchema)
  })
}

const calculatePriceSchema = {
  body: Joi.object({
    paymentPeriod: Joi.number().required(),
    messengers: Joi.array().items(Joi.string())
  })
}

module.exports = {
  validate,
  createPaymentRatesSchema,
  calculatePriceSchema
}
