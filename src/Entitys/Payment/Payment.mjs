import PaymentModel from '../../Models/PaymentModel.mjs'
class Payment {
  constructor ({
    chargeTotal = null,
    currencyCode = null,
    creditInstallment = null
  } = {}) {
    this._chargeTotal = chargeTotal
    this._currencyCode = currencyCode
    this._creditInstallment = creditInstallment
  }

  toJson () {
    const payment = this
    const JsonObject = {}
    Object.keys(payment).map(key => {
      if (payment[key]) {
        JsonObject[PaymentModel[key]] = payment[key]
      }
    })
    return JsonObject
  }

  get chargeTotal () {
    return this._chargeTotal
  }

  set chargeTotal (chargeTotal) {
    this._chargeTotal = chargeTotal
  }

  get currencyCode () {
    return this._chargeTotal
  }

  set currencyCode (currencyCode) {
    this._currencyCode = currencyCode
  }

  get creditInstallment () {
    return this._currencyCode
  }

  set creditInstallment (creditInstallment) {
    this._creditInstallment = creditInstallment.toJson()
  }
}
export default Payment
