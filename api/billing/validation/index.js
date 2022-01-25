const { validator: { Joi, billingFields, validate } } = require('../../../libs');

const messengersItems = Joi.object().keys({
  name: billingFields.messengerName,
  price: billingFields.messengerPrice
});

const paymentPlanSchema = {
  body: Joi.object({
    discounts: Joi.object().keys({
      year: billingFields.yearDiscount,
      coupleMessengers: billingFields.coupleMessengersDiscount,
      tripleMessengers: billingFields.tripleMessengersDiscount
    }),
    messengers: Joi.array().items(messengersItems)
  })
}

module.exports = {
  validate,
  paymentPlanSchema
}
