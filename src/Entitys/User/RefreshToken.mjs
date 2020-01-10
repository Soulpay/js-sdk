import refreshTokenModel from '../../Models/RefreshTokenModel.mjs'
class RefreshToken {
  constructor ({ refreshToken = null } = {}) {
    this._refreshToken = refreshToken
  }

  toJson () {
    const refreshToken = this
    const JsonObject = {}
    Object.keys(refreshToken).map(key => {
      if (refreshToken[key]) {
        JsonObject[refreshTokenModel[key]] = refreshToken[key]
      }
    })
    return JsonObject
  }

  get refreshToken () {
    return this._refreshToken
  }

  set refreshToken (refreshToken) {
    this._refreshToken = refreshToken
  }
}
export default RefreshToken
