import Address from './Address.mjs'
import billingModel from '../../Models/BillingModel.mjs'
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
