const Address = require('./Address')
const ShippingModel = require('../../Models/ShippingModel')
class Shipping extends Address {
  toJson () {
    const address = this
    const JsonObject = {}
    Object.keys(address).map(key => {
      if (address[key]) {
        JsonObject[ShippingModel[key]] = address[key]
      }
    })
    return JsonObject
  }
}
module.exports = Address
