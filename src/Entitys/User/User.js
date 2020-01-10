const userModel = require('../../Models/UserModel')

class User {
  constructor ({ email = null, password = null, hash = null } = {}) {
    this._email = email
    this._password = password
    this._hash = hash
  }

  toJson () {
    const user = this
    const JsonObject = {}
    Object.keys(user).map(key => {
      if (user[key]) {
        JsonObject[userModel[key]] = user[key]
      }
    })
    return JsonObject
  }

  get email () {
    return this._email
  }

  set email (email) {
    this._email = email
  }

  get password () {
    return this._password
  }

  set password (password) {
    this._password = password
  }

  get hash () {
    return this._hash
  }

  set hash (hash) {
    this._hash = hash
  }
}
module.exports = User
