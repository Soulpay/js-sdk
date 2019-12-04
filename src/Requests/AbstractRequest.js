class AbstractRequest {
  async post (url, data) {}
  async get (url, data) {}
  async put (url, data) {}
  async delete (url, data) {}
}

module.exports = AbstractRequest
