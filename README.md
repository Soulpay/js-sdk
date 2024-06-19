# SoulPay
 E-Commerce API SDK

## Introdução

Este documento explica como realizar a integração com a API de E-Commerce
utilizando nosso **SDK em Javascript** para começar a realizar transações.

## Requerimentos

- Node >= 12.14.0

## Instalação com NPM

```BASH

npm install soulpay-sdk

```

## Vamos Começar

Para utilizar este SDK
 recomenda-se leitura da [documentação](https://doc-api.portalsoulpay.com.br/docs/howTo.html)
 
A API é capaz de realizar transações de **cartão de crédito**, geração de **boletos** e **recorrências** diárias, semanais, mensais ou outras escolhas de período.

## CommonJs

Embora os exemplos estejam usuando o **import do es6** nossa sdk é híbrida,portanto é possível utilizar o **require do CommonJs**.

```Javascript
//require para usuários em CommonJs
const {User, UserRequest, Environment} = require('soulpay-sdk')

const user = new User()
user.email = 'testedev@dev.com'
user.password = 'testeDev'

const userRequest = new UserRequest(Environment.DEVELOPMENT)
const apiResponse = await userRequest.userLogin(user)
```

## Ambientes

Para fazer a escolha de qual **Environment** utilizar basta declará-lo no construtor das classes de **Request**

```Javascript
// Request para o ambiente de desenvolvimento
const userRequest = new UserRequest(
  Environment.DEVELOPMENT, 'Sua chave JWT aqui'
)

// Request para o ambiente de produção
const orderRequest = new OrderRequest(
  Environment.PRODUCTION, 'Sua chave JWT aqui'
)

```

## Realizar Login

Para realizar o login é necessário criar um objeto **User**, preenche-lo com **Email**, **Password** e **Hash**. 
Logo após, é necessário instanciar a classe **UserRequest** e passar o objeto **User** (previamente criado) ao método **userLogin**.

### Vejamos um exemplo abaixo

```Javascript

import {User, UserRequest, Environment} from 'soulpay-sdk/esm'

const user = new User()
user.email = 'testedev@dev.com'
user.password = 'testeDev'
user.hash = 'Seu hash aqui'

const userRequest = new UserRequest(Environment.DEVELOPMENT)
const apiResponse = await userRequest.userLogin(user)
```

## Criando uma Transação

Para criar uma transação é necessário preencher as informações obrigatórias descritas na [documentação](https://doc-api.portalsoulpay.com.br/docs/howTo.html).

Seguindo a mesma ideia de login, é necessário instanciar os models da transação, sendo esses **Customer**, **Billing**, **Shipping**, **CreditCard**, **CreditInstallment**, **Payment**, **Transaction**.  
Para enviar a transação é necessário instanciar **OrderRequest** onde o Environment deve ser passado como primeiro parâmetro e o token JWT deve ser passado como segundo parâmetro.

Usuando a instancia de **OrderRequest** basta usar o método **transaction**  passando a instancia preenchida de **Transaction**.

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
} from 'soulpay-sdk/esm'

const customer = new Customer()
customer.name = 'Luke Skywalker'
customer.email = 'daddysavior@rebelion.com'
customer.dob = '1977-11-18'
customer.taxId = '86587529875'

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
creditInstallment.chargeInterest = 0.5

const payment = new Payment()
payment.chargeTotal = 10.5
payment.currencyCode = 'BRL'
payment.creditInstallment = creditInstallment

const transaction = new Transaction()
transaction.referenceNum = '123456'
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


Seguindo a mesma ideia de transação é necessário instanciar os models da recorrência, sendo esses **Customer**, **Billing**, **Shipping**, **CreditCard**, **Recurring**, **CreditInstallment**, **Payment**, **Recurrence**. Para enviar a recorrência é necessário instanciar **OrderRequest** onde o Environment deve ser passado como primeiro parâmetro e o token JWT deve ser passado como segundo parâmetro.

Usuando a instancia de **OrderRequest** basta usar o método **recurrence**  passando a instancia preenchida de **Recurrence**

``` Javascript

import {
  Customer,
  Billing,
  Shipping,
  CreditCard,
  CreditInstallment,
  Payment,
  Recurrence,
  Recurring,
  OrderRequest,
  Environment
} from 'soulpay-sdk/esm'

const customer = new Customer()

customer.name = 'Luke Skywalker'
customer.email = 'daddysavior@rebelion.com'
customer.dob = '1977-11-18'
customer.taxId = '86587529875'

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
creditInstallment.chargeInterest = 0.5

const payment = new Payment()
payment.chargeTotal = 10.5
payment.currencyCode = 'BRL'
payment.creditInstallment = creditInstallment

const recurring = new Recurring()
recurring.startDate = '2020-10-05'
recurring.period = 'monthly'
recurring.frequency = 1
recurring.installments = 12
recurring.firstAmount = 20.2
recurring.failureThreshold = 15

const recurrence = new Recurrence()
recurrence.metaData = {
  jedi: 'kill then all'
}
recurrence.referenceNum = '123456'
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

const apiResponse = await orderRequest.recurrence(recurrence)
```

## Ativando/desativando uma Recorrência

 Na edição de recorrência é necessário instanciar a model **OrderRequest** onde o Environment deve ser passado como primeiro parâmetro e o token JWT deve ser passado como segundo parâmetro.

Usuando a instancia de **OrderRequest** basta usar o método **editRecurrence**  passando a ação a ser executada.

``` Javascript


import {
  OrderRequest,
  Environment
} from 'soulpay-sdk/esm'

const orderRequest = new OrderRequest(
  Environment.DEVELOPMENT,
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjMsImlhdCI6MTU3ODUwMzc5MiwiZXhwIjoxNTgxMDk1NzkyfQ.wwSNY5KD08xBjPRykNe98Xn_6IzuY4qgYykrlanqF3E'
)

//Passar a ação a ser executada: disable | enable
const apiResponse = await orderRequest.editRecurrence(55, 'disable')

```

## Gerando Boleto Bancario

Para criar um boleto é necessário preencher as informações obrigatorias descritas na [documentação](https://doc-api.portalsoulpay.com.br/docs/howTo.html).

Seguindo a mesma ideia de transação é necessário instanciar os models de boleto, sendo esses **Customer**, **Billing**, **BankSlipPayment**, **Payment**, **BankSlip**.  
Para enviar o Boleto Bancario é necessário instanciar **OrderRequest** onde o Environment deve ser passado como primeiro parâmetro e o token JWT deve ser passado como segundo parâmetro.

Usuando a instancia de **OrderRequest** basta usar o método **bankSlip**  passando a instancia preenchida de **BankSlip**.

```Javascript
    import {
  Customer,
  Billing,
  BankSlip,
  BankSlipPayment,
  Payment,
  OrderRequest,
  Environment
} from 'soulpay-sdk/esm'

const customer = new Customer()
customer.name = 'Bilbo Bolseiro'
customer.visitor = 'visitor gerado pelo js'
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
bankSlip.referenceNum = '123456'
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

Para consultar uma transação, é necessário instanciar a classe **OrderRequest** e chamar o metodo get do tipo de order que é desejado consultar como no exemplo abaixo para recorrencia, deve se passar o **Order ID** como parâmetro de busca.

```Javascript

// Passar o token JWT aqui,junto com o ambiente.
const orderRequest = new OrderRequest(
  Environment.DEVELOPMENT,
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjMsImlhdCI6MTU3NjA3Mzc2MiwiZXhwIjoxNTc4NjY1NzYyfQ.VjQCmYVwvvQjUEHK-wEZxwlcDQggBicssSfPmtuEawc'
)

// Order ID
const apiResponse = await orderRequest.getTransaction(55)

```
## Consultar Boletos

Para consultar um boleto, é necessário instanciar a classe **OrderRequest** e chamar o metodo get do tipo de order que é desejado consultar como no exemplo abaixo para recorrencia, deve se passar o **Order ID** como parâmetro de busca.

```Javascript

// Passar o token JWT aqui,junto com o ambiente.
const orderRequest = new OrderRequest(
  Environment.DEVELOPMENT,
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjMsImlhdCI6MTU3NjA3Mzc2MiwiZXhwIjoxNTc4NjY1NzYyfQ.VjQCmYVwvvQjUEHK-wEZxwlcDQggBicssSfPmtuEawc'
)

// Order ID
const apiResponse = await orderRequest.getBankSlip(55)

```
## Consultar recorrências

Para consultar recorrências, é necessário instanciar a classe **OrderRequest** e chamar o metodo get do tipo de order que é desejado consultar como no exemplo abaixo para recorrencia, deve se passar o **Order ID** como parâmetro de busca.

```Javascript

// Passar o token JWT aqui,junto com o ambiente.
const orderRequest = new OrderRequest(
  Environment.DEVELOPMENT,
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjMsImlhdCI6MTU3NjA3Mzc2MiwiZXhwIjoxNTc4NjY1NzYyfQ.VjQCmYVwvvQjUEHK-wEZxwlcDQggBicssSfPmtuEawc'
)

// Order ID
const apiResponse = await orderRequest.getRecurrence(55)

```

## Suporte

[Utilizar o issues do github](https://github.com/Soulpay/js-sdk/issues)
