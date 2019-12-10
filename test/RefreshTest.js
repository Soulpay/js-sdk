import {RefreshToken, Request} from '../src/index.js'

const refreshToken = new RefreshToken()
refreshToken.refreshToken = ''

const request = new Request('')
request.post('https://dev-api.portalsoulpay.com.br/api/v1/auth/refresh-token', refreshToken.toJson()).then((response) => {
    console.log(response.data)
}).catch((err) => {
    console.log(err.response.data)
})