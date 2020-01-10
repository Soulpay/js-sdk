const Order = require('./OrderModel')
const transactionModel = {
  _shipping: 'shipping',
  _creditCard: 'creditCard',
  ...Order
}
module.exports = transactionModel
