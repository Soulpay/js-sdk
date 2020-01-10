const Order = require('./OrderModel')
const RecurrenceModel = {
  _shipping: 'shipping',
  _creditCard: 'creditCard',
  _recurring: 'recurring',
  ...Order
}
module.exports = RecurrenceModel
