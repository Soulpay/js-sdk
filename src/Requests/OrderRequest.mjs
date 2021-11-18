import Request from './Request.mjs'
let url

class OrderRequest extends Request {
  constructor(environment,jwt){
    super(jwt)
    if(environment){
      url = 'https://api.portalsoulpay.com.br/api/v1/'
    }else{
      url = 'https://dev-api.portalsoulpay.com.br/api/v1/'
    }
  }

  async bankSlip (bankSlip) {
    return super.post(
      url+'bankSlip',
      bankSlip.toJson()
    )
  }

  async getBankSlip (orderId) {
    return super.get(
      url+`bankSlip/${orderId}`
    )
  }

  async recurrence (recurrence) {
    return super.post(
      url+'recurrence',
      recurrence.toJson()
    )
  }

  async getRecurrence (orderId) {
    return super.get(
      url+`recurrence/${orderId}`
    )
  }

  async cancelRecurrence (orderId) {
    return super.delete(
      url+`recurrence/${orderId}`
    )
  }

  async editRecurrence (orderId, status) {
    return super.put(
      url+`recurrence/${orderId}`,
      {status: status}
    )
  }

  async transaction (transaction) {
    return super.post(
      url+'transaction',
      transaction.toJson()
    )
  }

  async getTransaction (orderId) {
    return super.get(
      url+`transaction/${orderId}`
    )
  }

  async getRecurrenceInstallments (orderId) {
    return super.get(
      url+`recurrence/list/${orderId}`
    )
  }

}

export default OrderRequest
