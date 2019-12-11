import Request from './Request.js'

class OrderRequest extends Request {
  async bankSlipProduction (bankSlip) {
    return super.post(
      'https://api.portalsoulpay.com.br/api/v1/bankSlip',
      bankSlip.toJson()
    )
  }

  async bankSlipDevelopment (bankSlip) {
    return super.post(
      'https://dev-api.portalsoulpay.com.br/api/v1/bankSlip',
      bankSlip.toJson()
    )
  }

  async getBankSlipDevelopment (orderId) {
    return super.get(
      `https://dev-api.portalsoulpay.com.br/api/v1/bankSlip/${orderId}`
    )
  }

  async getBankSlipProduction (orderId) {
    return super.get(
      `https://api.portalsoulpay.com.br/api/v1/bankSlip/${orderId}`
    )
  }

  async recurrenceProduction (recurrence) {
    return super.post(
      'https://api.portalsoulpay.com.br/api/v1/recurrence',
      recurrence.toJson()
    )
  }

  async recurrenceDevelopment (recurrence) {
    return super.post(
      'https://dev-api.portalsoulpay.com.br/api/v1/recurrence',
      recurrence.toJson()
    )
  }

  async getRecurrenceDevelopment (orderId) {
    return super.get(
      `https://dev-api.portalsoulpay.com.br/api/v1/recurrence/${orderId}`
    )
  }

  async getRecurrenceProduction (orderId) {
    return super.get(
      `https://api.portalsoulpay.com.br/api/v1/recurrence/${orderId}`
    )
  }

  async cancelRecurrenceDevelopment (orderId) {
    return super.delete(
      `https://dev-api.portalsoulpay.com.br/api/v1/recurrence/${orderId}`
    )
  }

  async cancelRecurrenceProduction (orderId) {
    return super.delete(
      `https://api.portalsoulpay.com.br/api/v1/recurrence/${orderId}`
    )
  }

  async transactionProduction (transaction) {
    return super.post(
      'https://api.portalsoulpay.com.br/api/v1/transaction',
      transaction.toJson()
    )
  }

  async transactionDevelopment (transaction) {
    return super.post(
      'https://dev-api.portalsoulpay.com.br/api/v1/transaction',
      transaction.toJson()
    )
  }

  async getTransactionDevelopment (orderId) {
    return super.get(
      `https://dev-api.portalsoulpay.com.br/api/v1/transaction/${orderId}`
    )
  }

  async getTransactionProduction (orderId) {
    return super.get(
      `https://api.portalsoulpay.com.br/api/v1/transaction/${orderId}`
    )
  }
}

export default OrderRequest
