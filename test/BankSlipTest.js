import {
  Customer,
  Billing,
  BankSlip,
  BankSlipPayment,
  Payment,
  OrderRequest
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
bankSlip.customer = customer
bankSlip.billing = billing
bankSlip.bankSlip = bankSlipPayment
bankSlip.payment = payment

const orderRequest = new OrderRequest('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjMsImlhdCI6MTU3NjA3Mzc2MiwiZXhwIjoxNTc4NjY1NzYyfQ.VjQCmYVwvvQjUEHK-wEZxwlcDQggBicssSfPmtuEawc')
orderRequest.bankSlipDevelopment(bankSlip).then((response) => {
    console.log(response.data)
}).catch((err)=>{
    console.error(err.response.data)
})
