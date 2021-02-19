const CustomerModel = require('../../Models/CustomerModel')
class Customer {
  constructor ({
    id = null,
    name = null,
    visitor = null,
    email = null,
    dob = null,
    ipAddress = null,
    taxId = null,
    phone1 = null,
    phone2 = null,
    createdAt = null,
    newCustomer = null,
    vip = null
  } = {}) {
    this._id = id
    this._name = name
    this._visitor = visitor
    this._email = email
    this._dob = dob
    this._ipAddress = ipAddress
    this._taxId = taxId
    this._phone1 = phone1
    this._phone2 = phone2
    this._createdAt = createdAt
    this._new = newCustomer
    this._vip = vip
  }

  toJson(){
    const customer = this
    const JsonObject = {}
    Object.keys(customer).map(key =>{
        if(customer[key]){
            JsonObject[CustomerModel[key]] = customer[key]
        }
    })
    return JsonObject
  }

  get id () {
    return this._id
  }

  set id (id) {
    this._id = toString(id)
  }

  get name () {
    return this._name
  }

  set name (name) {
    this._name = name
  }

  get visitor () {
    return this._visitor
  }

  set visitor (visitor) {
    this._visitor = visitor
  }

  get email () {
    return this._email
  }

  set email (email) {
    this._email = email
  }

  get dob () {
    return this._dob
  }

  set dob (dob) {
    this._dob = dob
  }

  get ipAddress () {
    return this._ipAddress
  }

  set ipAddress (ipAddress) {
    this._ipAddress = ipAddress
  }

  get taxId () {
    return this._taxId
  }

  set taxId (taxId) {
    this._taxId = taxId
  }

  get phone1 () {
    return this._phone1
  }

  set phone1 (phone1) {
    this._phone1 = phone1
  }

  get phone2 () {
    return this._phone2
  }

  set phone2 (phone2) {
    this._phone2 = phone2
  }

  get createdAt () {
    return this._createdAt
  }

  set createdAt (createdAt) {
    this._createdAt = createdAt
  }

  get newCustomer () {
    return this._new
  }

  set newCustomer (newCustomer) {
    this._new = newCustomer == 'true'
  }

  get vip () {
    return this._vip
  }

  set vip (vip) {
    this._vip = vip == 'true'
  }
}
module.exports = Customer
