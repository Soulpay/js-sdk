import AbstractRequest from './AbstractRequest.js'
import Axios from 'axios'

class Request extends AbstractRequest {
  async post (url, data) {
   return Axios.post(url,data,{headers:this.headers})
  }
  async get (url, data,) {}
  async put (url, data,) {}
  async delete (url, data,) {}
}

export default Request
