import {
  Customer,
  Billing,
  BankSlip,
  BankSlipPayment,
  Payment,
  Request
} from '../src/index.js'

const customer = new Customer()
customer.name = 'Victor Ribeiro de Lima'
customer.taxId = '42742039805'

const billing = new Billing()
;(billing.name = 'Victor Ribeiro de Lima'),
(billing.address = 'Avenida Paulista'),
(billing.address2 = '123, 11º Andar'),
(billing.district = 'Bela Vista'),
(billing.city = 'Sao Paulo'),
(billing.state = 'SP'),
(billing.postalCode = '01311000'),
(billing.country = 'BR'),
(billing.phone = '1122334455'),
(billing.email = 'billing@maxipago.com')

const bankSlipPayment = new BankSlipPayment()
bankSlipPayment.expirationDate = '2022-12-25'
bankSlipPayment.instructions = 'teste teste'

const payment = new Payment()
payment.chargeTotal = 1
payment.currencyCode = 'BRL'

const bankSlip = new BankSlip()
bankSlip.customer = customer.toJson()
bankSlip.billing = billing.toJson()
bankSlip.bankSlip = bankSlipPayment.toJson()
bankSlip.payment = payment.toJson()

const request = new Request('')
request.post('https://dev-api.portalsoulpay.com.br/api/v1/bankSlip',bankSlip.toJson()).then((response) => {
    console.log(response.data)
}).catch((err)=>{
    console.error(err.response.data)
})
