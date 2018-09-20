import express from 'express'
const app = express()
import http from 'http'
import path from 'path'
import socketIO from 'socket.io'

const PORT = process.env.PORT || 7000

const server = http.createServer(app)
const io = socketIO(server)

app.use(express.static(path.join(__dirname,'../client')))

io.on('connection',(socket)=>{
    console.log("new user conected")
    socket.on('disconnect',()=>{
        console.log('user se desconecto')
    })
   socket.emit('newMessage',{
       from:'Admin',
       text:'Bienvenido al chat'
   })
   socket.broadcast.emit('newMessage',{
       from:'Admin',
       text:'Un nuevo usuario se ha unido'
   })

    socket.on('createMessage',(message)=>{
        console.log('createMessage',message)
        io.emit('newMessage',{
            from:message.from,
            text:message.text,
            createdAt:new Date().getTime()
        })
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