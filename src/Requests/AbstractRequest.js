class AbstractRequest {
  constructor (jwt) {
    this.headers = {}
    this.headers['Content-type'] = 'application/json'
    this.headers.Authorization = 'bearer ' + jwt
  }
  async post (url, data) {}
  async get (url, data,) {}
  async put (url, data,) {}
  async delete (url, data,) {}
}

export default AbstractRequest
