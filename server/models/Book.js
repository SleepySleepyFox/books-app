const mongoose = require('mongoose')

const Book = new mongoose.Schema({
    tumbnail: {type: String, required: true},
    author: {type: String, required: true},
    name: {type: String, required: true},
    price: {type: Number, required: true},
    userid: {type: String, required: true},
})

const model = mongoose.model("Book", Book)

module.exports = model