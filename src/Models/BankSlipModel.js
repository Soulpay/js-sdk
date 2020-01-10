const Order = require('./OrderModel')
const BankSlip = {
    _bankSlip: 'bankSlip',
    ...Order
}
module.exports = BankSlip