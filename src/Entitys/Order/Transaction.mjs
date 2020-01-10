import Order from './Order.mjs'
import TransactionModel from '../../Models/TransactionModel.mjs'
class Transaction extends Order {
  constructor ({
    referenceNum = null,
    customer = null,
    billing = null,
    shipping = null,
    creditCard = null,
    payment = null,
    metaData = null
  } = {}) {
    super({
      referenceNum: referenceNum,
      billing: billing,
      customer: customer,
      metaData: metaData,
      payment: payment
    })
    this._shipping = shipping
    this._creditCard = creditCard
  }

  toJson () {
    const order = this
    const JsonObject = {}
    Object.keys(order).map(key => {
      if (order[key]) {
        JsonObject[TransactionModel[key]] = order[key]
      }
    })
    return JsonObject
  }

  get shipping () {
    return this._shipping
  }

  set shipping (shipping) {
    this._shipping = shipping.toJson()
  }

  get creditCard () {
    return this._creditCard
  }

  set creditCard (creditCard) {
    this._creditCard = creditCard.toJson()
  }
}
export default Transaction
