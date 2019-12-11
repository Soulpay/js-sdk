import {RefreshToken, UserRequest} from '../src/index.js'

const refreshToken = new RefreshToken()
refreshToken.refreshToken = 'b2a86d96695a81fb46498952b7c5406a0jFshZCaYf9+kbCEoQOiRHWjSZGJA4StqgFOvmr95yWmaKRijqcg4AYJ3AIbyaAj'

const userRequest = new UserRequest()
userRequest.refreshTokenDevelopment(refreshTokenDevelopment).then((response) => {
    console.log(response.data)
}).catch((err) => {
    console.log(err.response.data)
})