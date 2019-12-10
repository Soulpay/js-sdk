import RecurringModel from '../../Models/RecurringModel.js'
class Recurring {
  constructor ({
    startDate = null,
    period = null,
    frequency = null,
    installments = null,
    firstAmount = null,
    failureThreshold = null
  } = {}) {
    this._startDate = startDate
    this._period = period
    this._frequency = frequency
    this._installments = installments
    this._firstAmount = firstAmount
    this._failureThreshold = failureThreshold
  }

  toJson () {
    const recurring = this
    const JsonObject = {}
    Object.keys(recurring).map(key => {
      if (recurring[key]) {
        JsonObject[RecurringModel[key]] = recurring[key]
      }
    })
    return JsonObject
  }
  get startDate () {
    return this._startDate
  }

  set startDate (startDate) {
    this._startDate = startDate
  }

  get period () {
    return this._period
  }

  set period (period) {
    this._period = period
  }

  get frequency () {
    return this._frequency
  }

  set frequency (frequency) {
    this._frequency = frequency
  }

  get installments () {
    return this._installments
  }

  set installments (installments) {
    this._installments = installments
  }

  get firstAmount () {
    return this._firstAmount
  }

  set firstAmount (firstAmount) {
    this._firstAmount = firstAmount
  }

  get failureThreshold () {
    return this._failureThreshold
  }

  set failureThreshold (failureThreshold) {
    this._failureThreshold = failureThreshold
  }
}

export default Recurring