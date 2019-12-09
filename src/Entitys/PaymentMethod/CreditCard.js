class CreditCard {
  constructor ({
    cardHolderName = null,
    number = null,
    expDate = null,
    cvvNumber = null
  } = {}) {
    this._cardHolderName = cardHolderName
    this._number = number
    this._expDate = expDate
    this._cvvNumber = cvvNumber
  }

  get cardHolderName () {
    return this._cardHolderName
  }

  set cardHolderName (cardHolderName) {
    this._cardHolderName = cardHolderName
  }

  get number () {
    return this._number
  }

  set number (number) {
    this._number = number
  }

  get cvvNumber () {
    return this._cvvNumber
  }

  set cvvNumber (cvvNumber) {
    this._cvvNumber = cvvNumber
  }
}
export default CreditCard
