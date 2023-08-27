const mongoose = require('mongoose')

const Book = new mongoose.Schema({
    tumbnail: {type: String, required: true, unique: true},
    author: {type: String, required: true},
    name: {type: String, required: true},
    price: {type: String, required: true},
})

const model = mongoose.model("Book", Book)

module.exports = model