const mongoose = require('mongoose')

const Buy = new mongoose.Schema({
    book: {type: String},
    author: {type: String},
    amount: {type: String},
    price: {type: String},
    buyer: {type: String},
    seller: {type: String}
})

const model = mongoose.model("buys", Buy)

module.exports = model