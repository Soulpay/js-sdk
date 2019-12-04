import Order from './Order'
class Transaction extends Order {
  constructor ({
    referenceNum = null,
    customer = null,
    billing = null,
    shipping = null,
    creditCard = null,
    payment = null,
    metaData = null
  } = {}) {
    super({
      referenceNum: referenceNum,
      billing: billing,
      metaData: metaData,
      payment: payment
    })
    this._customer = customer
    this._shipping = shipping
    this._creditCard = creditCard
  }

  get customer () {
    return this._customer
  }

  set customer (customer) {
    this._customer = customer
  }

  get shipping () {
    return this._shipping
  }

  set shipping (shipping) {
    this._shipping = shipping
  }

  get creditCard () {
    return this._creditCard
  }

  set creditCard (creditCard) {
    this._creditCard = creditCard
  }
}
