const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const jwt = require('jsonwebtoken')

//Models
const User = require('./models/User')
const Book = require('./models/Book')

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
        const token = jwt.sign({userId: user._id, userStatus: user.userStatus}, 'dasjhkfsd')
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
            const token = jwt.sign({userId: user._id, userStatus: user.userStatus}, 'dasjhkfsd')
            res.json(token)
        }else{
            console.log('Invalid password')
        }
    }
})

// app.post('/sell', (res, req) => {
//         console.log(req.body)
//     Book.create({
//         tumbnail: req.body.tumbnail,
//         author: req.body.author,
//         name: req.body.name,
//         price: req.body.price
//     }).then(data => res.send(data))
// })

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

io.on('connect', socket => {
    socket.on("Data", data => {
        // const book = new Book({
        //     tumbnail: data.tumbnail,
        //     author: data.author,
        //     name: data.name,
        //     price: data.price
        // }).save().then(() => console.log('Book Added'))

        Book.create({
            tumbnail: data.tumbnail,
            author: data.author,
            name: data.name,
            price: data.price
        })
    })
})

