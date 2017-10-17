const express = require('express')
const http = require('http')
const path = require('path')
const socketIO = require('socket.io')

const {generateMessage} = require('./utils/message.js')
const publicPath = path.join(__dirname, '../public')
const port = process.env.PORT || 3000
var app = express()
var server = http.createServer(app)
var io = socketIO(server)

app.use(express.static(publicPath))

io.on('connection', (socket) => {
    socket.on('connect', () => {
        console.log('User connected')
    })

    socket.on('disconnect', () => {
        console.log('User disconnected')
    })

    socket.on('createMessage', (message) => {
        io.emit('newMessage', generateMessage(message.from, message.text))
    })
})

server.listen(port, () => {
    console.log(`Server is up on ${port}`)
})