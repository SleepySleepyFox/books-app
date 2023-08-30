const mongoose = require('mongoose')

const Buy = new mongoose.Schema({
    buy: {type: String}
})

const model = mongoose.model("buys", Buy)

module.exports = model