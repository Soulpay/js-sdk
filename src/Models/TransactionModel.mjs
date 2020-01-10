import Order from './OrderModel.mjs'
const transactionModel = {
  _shipping: 'shipping',
  _creditCard: 'creditCard',
  ...Order
}
export default  transactionModel
