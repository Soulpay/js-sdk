import {
  Customer,
  Billing,
  Shipping,
  CreditCard,
  Payment,
  Recurrence,
  Recurring,
  OrderRequest
} from '../src/index.js'

const customer = new Customer()
customer.id = 1
customer.name = 'Victor Ribeiro de Lima'
customer.email = 'victorlima.12@hotmail.com'
customer.dob = '1999-04-11'
customer.ipAddress = '192.168.0.10'
customer.taxId = '42742039805'
customer.phone1 = '+55 11 38646969'
customer.phone2 = '+55 11 992559137'
customer.createdAt = '2019-11-15'
customer.newCustomer = 'true'
customer.vip = 'false'

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

const shipping = new Shipping()
;(shipping.name = 'Victor Ribeiro de Lima'),
(shipping.address = 'Avenida Paulista'),
(shipping.address2 = '123, 11º Andar'),
(shipping.district = 'Bela Vista'),
(shipping.city = 'Sao Paulo'),
(shipping.state = 'SP'),
(shipping.postalCode = '01311000'),
(shipping.country = 'BR'),
(shipping.phone = '1122334455'),
(shipping.email = 'victorlima.12@hotmail.com')

const creditCard = new CreditCard()
creditCard.cardHolderName = 'Victor R de Lima'
creditCard.number = '5293230322387851'
creditCard.expDate = '07/2024'
creditCard.cvvNumber = '200'

const payment = new Payment()
payment.chargeTotal = 20.0
payment.currencyCode = 'BRL'

const recurring = new Recurring()
recurring.startDate = '2020-10-05'
recurring.period = 'monthly'
recurring.frequency = 1
recurring.installments = 12
recurring.firstAmount = 20.0
recurring.failureThreshold = 15

const recurrence = new Recurrence()
recurrence.referenceNum = 'aaaa'
recurrence.metaData = {
  pedrinho: 'gostoso'
}
recurrence.customer = customer
recurrence.billing = billing
recurrence.shipping = shipping
recurrence.creditCard = creditCard
recurrence.payment = payment
recurrence.recurring = recurring

const orderRequest = new OrderRequest(
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjMsImlhdCI6MTU3NjA3Mzc2MiwiZXhwIjoxNTc4NjY1NzYyfQ.VjQCmYVwvvQjUEHK-wEZxwlcDQggBicssSfPmtuEawc'
)
orderRequest
  .recurrenceDevelopment(recurrence)
  .then(response => {
    console.log(response.data)
  })
  .catch(err => {
    console.error(err.response.data)
  })
