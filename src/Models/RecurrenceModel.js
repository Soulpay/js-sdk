import Order from './OrderModel.js'
const RecurrenceModel = {
  _shipping: 'shipping',
  _creditCard: 'creditCard',
  _recurring: 'recurring',
  ...Order
}
export default RecurrenceModel
