const Address = require('./Address')
const billingModel = require('../../Models/BillingModel')
class Billing extends Address {
  toJson () {
    const address = this
    const JsonObject = {}
    Object.keys(address).map(key =>{
        if(address[key]){
            JsonObject[billingModel[key]] = address[key]
        }
    })
    return JsonObject
  }
}
module.exports = Billing
