import {User, Request} from '../src/index.js'

const user = new User()
user.email = ''
user.password = ''
user.hash = ''

const request = new Request()
request.post('https://dev-api.portalsoulpay.com.br/api/v1/auth/login',user.toJson()).then((response) => {
    console.log(response.data)
}).catch((err) => {
    console.log(err.response.data)
})