import Order from './OrderModel.js'
const transactionModel = {
  _shipping: 'shipping',
  _creditCard: 'creditCard',
  ...Order
}
export default  transactionModel
