# SoulPay
 E-Commerce API SDK

## Introdução

Este documento explica realizar a integração com a API de E-Commerce
 para começar a realizar transações.

Este documento descreve o **SDK
 em Javascript** utilizado para nossa API.

## Requerimentos

- Node >= 13.2.0


## Vamos Começar

Para utilizar este SDK
 recomenda-se leitura da [documentação](https://doc-api.portalsoulpay.com.br/docs/howTo.html)
 
A API é capaz de realizar transações de **cartão de crédito**, geração de **boletos** e **recorrências** diárias, semanais, e mensais.

## Ambientes

Para fazer a escolha de qual **Environment** utilizar basta declará-lo no construtor das classes de **Request**

```Javascript
// Request para o ambiente de desenvolvimento
const userRequest = new UserRequest(
  Environment.DEVELOPMENT,
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjMsImlhdCI6MTU3NjA3Mzc2MiwiZXhwIjoxNTc4NjY1NzYyfQ.VjQCmYVwvvQjUEHK-wEZxwlcDQggBicssSfPmtuEawc'
)

// Request para o ambiente de produção
const orderRequest = new OrderRequest(
  Environment.PRODUCTION,
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjMsImlhdCI6MTU3NjA3Mzc2MiwiZXhwIjoxNTc4NjY1NzYyfQ.VjQCmYVwvvQjUEHK-wEZxwlcDQggBicssSfPmtuEawc'
)

```

## Realizar Login

Para realizar o login é necessário criar um objeto **User** e preenche-lo com os seguintes dados **Email**, **Passowrd** e **Hash**. Para enviar a request é necessário instanciar a classe **UserRequest** e utilizar o método **userLogin**.

```Javascript

import {User, UserRequest, Environment} from 'soulpay-sdk'

const user = new User()
user.email = 'testedev@dev.com'
user.password = 'testeDev'
user.hash = '2b1ba7b7a8ce5c1a003935625bf40047'

const userRequest = new UserRequest(Environment.DEVELOPMENT)
const apiResponse = await userRequest.userLogin(user)
```

## Refresh Token

Para utilizar a API é necessário ter um token JWT valido, caso o token esteja expirando é possível gerar um novo token. Caso o token já tenha expirado realizar um novo login.

Para gerar um novo token é necessário ter o **Refresh Token** adquirido ao realizar o login para colocado na classe **RefreshToken**, e também é necessário passar o token JWT como segundo parâmetro da **UserRequest**.

Apartir disso basta chamar o metodo **refreshToken** da sua instancia de **UserRequest** passando a instancia da classe **RefreshToken** com seu **Refresh Token** atribuido a ela.

```Javascript
import { RefreshToken, UserRequest, Environment } from 'soulpay-sdk'

const refreshToken = new RefreshToken()
refreshToken.refreshToken =
  'b2a86d96695a81fb46498952b7c5406a0jFshZCaYf9+kbCEoQOiRHWjSZGJA4StqgFOvmr95yWmaKRijqcg4AYJ3AIbyaAj'

const userRequest = new UserRequest(
  Environment.DEVELOPMENT,
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjMsImlhdCI6MTU3NjA3Mzc2MiwiZXhwIjoxNTc4NjY1NzYyfQ.VjQCmYVwvvQjUEHK-wEZxwlcDQggBicssSfPmtuEawc'
)
const apiResponse = await userRequest.refreshToken(refreshToken)
```

## Gerar Novo Refresh Token

Se por algum motivo for necessário gerar um novo **Refresh Token** essa função está disponivel na API.

O processo é exatamente o mesmo da funcionalidade de **Refresh Token** já explicada acima,basta ter seu **Refresh Token** atual e um token JWT ainda valido.

Só que ao invés de usar o metodo **refreshToken** use o metodo **newRefreshToken**.

```Javascript
import { RefreshToken, UserRequest, Environment } from 'soulpay-sdk'

const refreshToken = new RefreshToken()
refreshToken.refreshToken =
  'b2a86d96695a81fb46498952b7c5406a0jFshZCaYf9+kbCEoQOiRHWjSZGJA4StqgFOvmr95yWmaKRijqcg4AYJ3AIbyaAj'

const userRequest = new UserRequest(
  Environment.DEVELOPMENT,
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjMsImlhdCI6MTU3NjA3Mzc2MiwiZXhwIjoxNTc4NjY1NzYyfQ.VjQCmYVwvvQjUEHK-wEZxwlcDQggBicssSfPmtuEawc'
)
const apiResponse = await userRequest.newRefreshToken(refreshToken)
```

## Criando um Transação

Para criar uma transação é necessário preencher as informações obrigatórias descritas na [documentação](https://doc-api.portalsoulpay.com.br/docs/howTo.html).

Seguindo a mesma ideia de login é necessário instanciar os models da transação, sendo esses **Customer**, **Billing**, **Shipping**, **CreditCard**, **CreditInstallment**, **Payment**, **Transaction**. Para enviar a transação é necessário instanciar **OrderRequest** onde o Environment deve ser passado como primeiro parâmetro e o token JWT deve ser passado como segundo parâmetro.

Usuando a instancia de **OrderRequest** basta usar o método **transaction**  passando a instancia preenchida de **Transaction**
``` Javascript

import {
  Customer,
  Billing,
  Shipping,
  CreditCard,
  Payment,
  CreditInstallment,
  Transaction,
  OrderRequest,
  Environment
} from 'soulpay-sdk'
const customer = new Customer()
customer.id = 1
customer.name = 'Luke Skywalker'
customer.email = 'daddysavior@rebelion.com'
customer.dob = '1977-11-18'
customer.ipAddress = '111.222.0.10'
customer.taxId = '86587529875'
customer.phone1 = '+55 11 98563256'
customer.phone2 = '+55 11 942568223'
customer.createdAt = '2019-11-15'
customer.newCustomer = 'true'
customer.vip = 'false'

const billing = new Billing()
billing.name = 'Anakin Skywalker',
billing.address = 'Death Star',
billing.address2 = '345 setor do laser',
billing.district = 'Galaxia 6543',
billing.city = 'Orbita da lua de Endor',
billing.state = 'ER',
billing.postalCode = '09999000',
billing.country = 'EP',
billing.phone = '1122334455',
billing.email = 'childkiller@lordvader.com.br'

const shipping = new Shipping()
shipping.name = 'Anakin Skywalker',
shipping.address = 'Death Star',
shipping.address2 = '345 setor do laser',
shipping.district = 'Galaxia 6543',
shipping.city = 'Orbita da lua de Endor',
shipping.state = 'ER',
shipping.postalCode = '09999000',
shipping.country = 'EP',
shipping.phone = '1122334455',
shipping.email = 'childkiller@lordvader.com.br'

const creditCard = new CreditCard()
creditCard.cardHolderName = 'Lord Sidius'
creditCard.number = '5431372610284362'
creditCard.expDate = '07/2024'
creditCard.cvvNumber = '066'

const creditInstallment = new CreditInstallment()
creditInstallment.numberOfInstallments = 1
creditInstallment.chargeInterest = 'N'

const payment = new Payment()
payment.chargeTotal = 20.0
payment.currencyCode = 'BRL'
payment.creditInstallment = creditInstallment

const transaction = new Transaction()
transaction.referenceNum = 'do it'
transaction.metaData = {
  jedi: 'kill then all'
}
transaction.customer = customer
transaction.billing = billing
transaction.shipping = shipping
transaction.creditCard = creditCard
transaction.payment = payment

const orderRequest = new OrderRequest(
  Environment.DEVELOPMENT,
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjMsImlhdCI6MTU3ODUwMzc5MiwiZXhwIjoxNTgxMDk1NzkyfQ.wwSNY5KD08xBjPRykNe98Xn_6IzuY4qgYykrlanqF3E'
)
const apiResponse = await orderRequest.transaction(transaction)

```
## Criando uma Recorrência

Para criar uma recorrência é necessário preencher as informações obrigatórias descritas na [documentação](https://doc-api.portalsoulpay.com.br/docs/howTo.html).

Seguindo a mesma ideia de transação é necessário instanciar os models da recorrência, sendo esses **Customer**, **Billing**, **Shipping**, **CreditCard**, **Recurring**, **CreditInstallment**, **Payment**, **Recurrence**. Para enviar a recorrência é necessário instanciar **OrderRequest** onde o Environment deve ser passado como primeiro parâmetro e o token JWT deve ser passado como segundo parâmetro.

Usuando a instancia de **OrderRequest** basta usar o método **recurrence**  passando a instancia preenchida de **Recurrence**

``` Javascript

import {
  Customer,
  Billing,
  Shipping,
  CreditCard,
  Payment,
  Recurrence,
  Recurring,
  OrderRequest,
  Environment
} from 'soulpay-sdk'
const customer = new Customer()
customer.id = 1
customer.name = 'Luke Skywalker'
customer.email = 'daddysavior@rebelion.com'
customer.dob = '1977-11-18'
customer.ipAddress = '111.222.0.10'
customer.taxId = '86587529875'
customer.phone1 = '+55 11 98563256'
customer.phone2 = '+55 11 942568223'
customer.createdAt = '2019-11-15'
customer.newCustomer = 'true'
customer.vip = 'false'

const billing = new Billing()
billing.name = 'Anakin Skywalker',
billing.address = 'Death Star',
billing.address2 = '345 setor do laser',
billing.district = 'Galaxia 6543',
billing.city = 'Orbita da lua de Endor',
billing.state = 'ER',
billing.postalCode = '09999000',
billing.country = 'EP',
billing.phone = '1122334455',
billing.email = 'childkiller@lordvader.com.br'

const shipping = new Shipping()
shipping.name = 'Anakin Skywalker',
shipping.address = 'Death Star',
shipping.address2 = '345 setor do laser',
shipping.district = 'Galaxia 6543',
shipping.city = 'Orbita da lua de Endor',
shipping.state = 'ER',
shipping.postalCode = '09999000',
shipping.country = 'EP',
shipping.phone = '1122334455',
shipping.email = 'childkiller@lordvader.com.br'

const creditCard = new CreditCard()
creditCard.cardHolderName = 'Lord Sidius'
creditCard.number = '5431372610284362'
creditCard.expDate = '07/2024'
creditCard.cvvNumber = '066'

const creditInstallment = new CreditInstallment()
creditInstallment.numberOfInstallments = 1
creditInstallment.chargeInterest = 'N'

const payment = new Payment()
payment.chargeTotal = 20.0
payment.currencyCode = 'BRL'
payment.creditInstallment = creditInstallment

const recurring = new Recurring()
recurring.startDate = '2020-10-05'
recurring.period = 'monthly'
recurring.frequency = 1
recurring.installments = 12
recurring.firstAmount = 20.0
recurring.failureThreshold = 15

const recurrence = new Recurrence()
recurrence.referenceNum = 'do it'
recurrence.metaData = {
  jedi: 'kill then all'
}
recurrence.customer = customer
recurrence.billing = billing
recurrence.shipping = shipping
recurrence.creditCard = creditCard
recurrence.payment = payment
recurrence.recurring = recurring

const orderRequest = new OrderRequest(
  Environment.DEVELOPMENT,
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjMsImlhdCI6MTU3ODUwMzc5MiwiZXhwIjoxNTgxMDk1NzkyfQ.wwSNY5KD08xBjPRykNe98Xn_6IzuY4qgYykrlanqF3E'
)

const apiResponse = await orderRequest.recurrence(transaction)
```

## Gerando Boleto Bancario

Para criar uma boleto é necessário preencher as informações obrigatorias descritas na [documentação](https://doc-api.portalsoulpay.com.br/docs/howTo.html).

Seguindo a mesma ideia de transção é necessário instanciar os models da boleto, sendo esses **Customer**, **Billing**, **BankSlipPayment**, **Payment**, **BankSlip**. Para enviar o Boleto Bancario é necessário instanciar **OrderRequest** onde o Environment deve ser passado como primeiro parâmetro e o token JWT deve ser passado como segundo parâmetro.

Usuando a instancia de **OrderRequest** basta usar o método **bankSlip**  passando a instancia preenchida de **BankSlip**

```Javascript
    import {
  Customer,
  Billing,
  BankSlip,
  BankSlipPayment,
  Payment,
  OrderRequest,
  Environment
} from 'soulpay-sdk'

const customer = new Customer()
customer.name = 'Bilbo Bolseiro'
customer.taxId = '85673917295'

const billing = new Billing()
billing.name = 'Bilbo Bolseiro',
billing.address = 'O Condado',
billing.address2 = 'Bolsão numero 43',
billing.district = 'Ardor',
billing.city = 'O Condado',
billing.state = 'ER',
billing.postalCode = '05555000',
billing.country = 'ME',
billing.phone = '1122334455',
billing.email = 'dragonraider@gandalf.com'

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

const orderRequest = new OrderRequest(
  Environment.DEVELOPMENT,
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjMsImlhdCI6MTU3NjA3Mzc2MiwiZXhwIjoxNTc4NjY1NzYyfQ.VjQCmYVwvvQjUEHK-wEZxwlcDQggBicssSfPmtuEawc'
)
const apiResponse = await orderRequest.bankSlip(bankSlip)
    
```
## Consultar Transações

Para consultar a uma transação é necessário instanciar a classe **OrderRequest** e chamar o metodo get do tipo de order que é desejado consultar como no exemplo abaixo para recorrencia, deve se passar o **Order ID** como parâmetro de busca.

```Javascript

// Passar o token JWT aqui,junto com o ambiente.
const orderRequest = new OrderRequest(
  Environment.DEVELOPMENT,
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjMsImlhdCI6MTU3NjA3Mzc2MiwiZXhwIjoxNTc4NjY1NzYyfQ.VjQCmYVwvvQjUEHK-wEZxwlcDQggBicssSfPmtuEawc'
)

// Order ID
const apiResponse = await orderRequest.getRecurrence(55)

```

## Supporte

[Utilizar o issues do github](https://github.com/Soulpay/JsSDK/issues)
