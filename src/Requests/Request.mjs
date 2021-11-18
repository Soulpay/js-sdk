import AbstractRequest from './AbstractRequest.mjs'
import Axios from 'axios'

class Request extends AbstractRequest {
  async post (url, data) {
   return Axios.post(url,data,{headers:this.headers})
  }
  async get (url) {
    return Axios.get(url,{headers:this.headers})
  }
  async put (url, data) {
    return Axios.put(url,data,{headers:this.headers})
  }
  async delete (url) {
    return Axios.delete(url, {headers:this.headers})
  }
}

export default Request
