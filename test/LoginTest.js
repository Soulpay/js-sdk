import {User, UserRequest, Environment} from '../src/index.js'

const user = new User()
user.email = 'testedev@dev.com'
user.password = 'testeDev'
user.hash = '2b1ba7b7a8ce5c1a003935625bf40047'

const userRequest = new UserRequest(Environment.PRODUCTION)
userRequest.userLogin(user).then((response) => {
    console.log(response.data)
}).catch((err) => {
    console.log(err.response.data)
})