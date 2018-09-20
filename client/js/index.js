const socket = io();
socket.on('connect', () => {
    console.log("conectado")

    
})

socket.on('disconnect', () => {
    console.log('no conectado')
})

socket.on('newMessage',function (message) {
    console.log('new message',message)
})

