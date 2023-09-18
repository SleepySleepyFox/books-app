const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const { Server } = require("socket.io");
require('dotenv').config()

//Models
const User = require('./models/User')
const Book = require('./models/Book')

const app = express()
app.use(express.json())
app.use(cors()) 

mongoose.connect(`mongodb+srv://admin:${process.env.KEY}@cluster0.och0jtq.mongodb.net/books-app`)
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
        const token = jwt.sign({userId: user._id, userStatus: user.userStatus, username: user.username}, 'dasjhkfsd')
        res.json(token)
    }catch(err){
        console.log(err)
    }
})

app.post('/auth', async (req, res) => {
    const {username, password} = req.body
    const user = await User.findOne({username})
    if(!user){
        console.log('Error user not fountd')
    }else{
        if(user.password === password){
            const token = jwt.sign({userId: user._id, userStatus: user.userStatus, username: user.username}, 'dasjhkfsd')
            res.json(token)
        }else{
            console.log('Invalid password')
        }
    }
})

app.post('/sell', async (req, res) => {
     try{
        const book = await Book.create({
            tumbnail: req.body.tumbnail,
            author: req.body.author,
            name: req.body.name,
            price: req.body.price,
            userid: req.body.userId
        })
     }catch(err){
        console.log('Error: ', err)
     }
})

app.get('/buyItems', (req, res) => {
    const items = Book.find({})
        .then(data => res.send(data))
})



const server = app.listen(4000)

const io = require("socket.io")(server, {
    cors: {
        origin: "*"
    }
})

io.on("connection", (socket) => {
    console.log('connected to sockets.io')
    Book.watch()
        .on('change', data => {
        socket.emit("Data", data)
    })
})

