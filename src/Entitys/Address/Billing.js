import Address from './Address.js'
import billingModel from '../../Models/BillingModel.js'
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
export default Billing
