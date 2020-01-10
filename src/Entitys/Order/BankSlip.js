const Order = require('./Order')
const BankSlipModel = require('../../Models/BankSlipModel')
class BankSlip extends Order {
  constructor ({
    referenceNum = null,
    billing = null,
    customer = null,
    payment = null,
    metaData = null,
    bankSlip = null
  } = {}) {
    super({
      referenceNum: referenceNum,
      billing: billing,
      customer: customer,
      metaData: metaData,
      payment: payment
    })
    this._bankSlip = bankSlip
  }

  toJson () {
    const order = this
    const JsonObject = {}
    Object.keys(order).map(key => {
      if(order[key]){
        JsonObject[BankSlipModel[key]] = order[key]
      }
    })
    return JsonObject
  }

  get bankSlip () {
    return this._bankSlip
  }

  set bankSlip (bankSlip) {
    this._bankSlip = bankSlip.toJson()
  }
}
module.exports = BankSlip
