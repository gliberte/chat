const socket = io();
socket.on('connect', () => {
    console.log("conectado")

    
})

socket.on('disconnect', () => {
    console.log('no conectado')
})

socket.on('newMessage',function (message) {
    console.log('new message',message)
    var li = jQuery('<li></li>')
    li.text(`${message.from}: ${message.text}`)

    jQuery('#messages').append(li)
})


jQuery('#message-form').on('submit',function (e) {
    e.preventDefault()

    socket.emit('createMessage',{
        from:'User',
        text: jQuery('[name=message]').val()
    },function () {
        
    })
})

