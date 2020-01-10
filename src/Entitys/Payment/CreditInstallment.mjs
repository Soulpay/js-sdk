import CreditInstallmentModel from '../../Models/CreditInstallmentModel.mjs'
class CreditInstallment {
  constructor ({ numberOfInstallments = null, chargeInterest = null } = {}) {
    this._numberOfInstallments = numberOfInstallments
    this._chargeInterest = chargeInterest
  }

  toJson () {
    const creditInstallment = this
    const JsonObject = {}
    Object.keys(creditInstallment).map(key => {
      if (creditInstallment[key]) {
        JsonObject[CreditInstallmentModel[key]] = creditInstallment[key]
      }
    })
    return JsonObject
  }

  get numberOfInstallments () {
    return this._numberOfInstallments
  }

  set numberOfInstallments (numberOfInstallments) {
    this._numberOfInstallments = numberOfInstallments
  }

  get chargeInterest () {
    return this.chargeInterest
  }

  set chargeInterest (chargeInterest) {
    this._chargeInterest = chargeInterest
  }
}
export default CreditInstallment
