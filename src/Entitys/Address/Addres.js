class Address {
  constructor ({
    name = null,
    address = null,
    address2 = null,
    city = null,
    district = null,
    state = null,
    postalcode = null,
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
    (this._postalcode = postalcode),
    (this._country = country),
    (this._phone = phone),
    (this._email = email)
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

  
}
export default Address
