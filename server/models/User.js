const mongoose = require('mongoose')

const User = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    userStatus: {type: Boolean, required: true}
})

const model = mongoose.model("User", User)

module.exports = model