const billingModel = require('../../Models/BillingModel')
class Address {
  constructor ({
    name = null,
    address = null,
    address2 = null,
    city = null,
    district = null,
    state = null,
    postalCode = null,
    country = null,
    phone = null,
    email = null
  } = {}) {
    ;(this._name = name),
    (this._address = address),
    (this._address2 = address2),
    (this._city = city),
    (this._district = district),
    (this._state = state),
    (this._postalCode = postalCode),
    (this._country = country),
    (this._phone = phone),
    (this._email = email)
  }

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

  get name () {
    return this._name
  }

  set name (name) {
    this._name = name
  }

  get address () {
    return this._address
  }

  set address (address) {
    this._address = address
  }

  get address2 () {
    return this._address2
  }

  set address2 (address2) {
    this._address2 = address2
  }

  get city () {
    return this._city
  }

  set city (city) {
    this._city = city
  }

  get district () {
    return this._district
  }

  set district (district) {
    this._district = district
  }

  get state () {
    return this._state
  }

  set state (state) {
    this._state = state
  }

  get postalCode () {
    return this._postalCode
  }

  set postalCode (postalCode) {
    this._postalCode = postalCode
  }

  get country () {
    return this._country
  }

  set country (country) {
    this._country = country
  }

  get phone () {
    return this._phone
  }

  set phone (phone) {
    this._phone = phone
  }

  get email () {
    return this._email
  }

  set email (email) {
    this._email = email
  }
}
export default Address
