import Address from './Address.js'
import ShippingModel from '../../Models/ShippingModel.js'
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
export default Shipping
