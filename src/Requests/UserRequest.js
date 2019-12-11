import Request from './Request.js'

class UserRequest extends Request {
  async userLoginDevelopment (user) {
    return super.post(
      'https://dev-api.portalsoulpay.com.br/api/v1/auth/login',
      user.toJson()
    )
  }

  async userLoginProduction (user) {
    return super.post(
      'https://api.portalsoulpay.com.br/api/v1/auth/login',
      user.toJson()
    )
  }

  async refreshTokenDevelopment (refreshToken) {
    return super.post(
      'https://dev-api.portalsoulpay.com.br/api/v1/auth/refresh-token',
      refreshToken.toJson()
    )
  }

  async refreshTokenProduction (refreshToken) {
    return super.post(
      'https://api.portalsoulpay.com.br/api/v1/auth/refresh-token',
      refreshToken.toJson()
    )
  }

  async newRefreshTokenDevelopment (refreshToken) {
    return super.post(
      'https://dev-api.portalsoulpay.com.br/api/v1/auth/new-refresh-token',
      refreshToken.toJson()
    )
  }

  async newRefreshTokenProduction (refreshToken) {
    return super.post(
      'https://api.portalsoulpay.com.br/api/v1/auth/new-refresh-token',
      refreshToken.toJson()
    )
  }
}
export default UserRequest
