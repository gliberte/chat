import express from 'express'
const app = express()
import http from 'http'
import path from 'path'
import socketIO from 'socket.io'
import {generateMessage} from './utils/message'

const PORT = process.env.PORT || 7000

const server = http.createServer(app)
const io = socketIO(server)

app.use(express.static(path.join(__dirname,'../client')))

io.on('connection',(socket)=>{
    console.log("new user conected")
    socket.on('disconnect',()=>{
        console.log('user se desconecto')
    })
   socket.emit('newMessage',generateMessage('Admin','Bienvenido al chat'))
   socket.broadcast.emit('newMessage',generateMessage('Admin','Se unio un nuevo usuario'))


    socket.on('createMessage',(message,callback)=>{
        console.log('createMessage',message)
        io.emit('newMessage',generateMessage(message.from,message.text))
        callback('Esto es del server')
        // socket.broadcast.emit('newMessage',{
        //     from:message.from,
        //     text:message.text,
        //     createdAt:new Date().getTime()
        // })
    })
})

server.listen(PORT,()=>{
    console.log(`SERVIDOR INICIADO EN ${PORT}`)
})