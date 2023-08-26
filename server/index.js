const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const jwt = require('jsonwebtoken')

//Models
const User = require('./models/User')

const app = express()
app.use(express.json())
app.use(cors()) 

mongoose.connect(`mongodb://127.0.0.1:27017/books-app`)
    .then(() => {
        console.log('connected to mongoDB')
    })


app.post('/register', async (req, res) => {    
    try{
        const user = await User.create({
            username: req.body.username,
            password: req.body.password,
            userStatus: req.body.userStatus
        })
        const token = jwt.sign({userId: user._id}, 'dasjhkfsd')
        res.json(token)
    }catch(err){
        console.log(err)
    }
})

const server = app.listen(4000)