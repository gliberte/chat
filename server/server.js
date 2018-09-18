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
})

server.listen(PORT,()=>{
    console.log(`SERVIDOR INICIADO EN ${PORT}`)
})