var socket = io()

socket.on('connect', function () {
    console.log('Connected to server from browser')
})

socket.on('disconnect', function () {
    console.log('Disconnected to server from browser')
})

socket.on('newMessage', function (message) {
    console.log('newMessage', message)

    var li = jQuery('<li></li>')
    li.text(`${message.from}: ${message.text}`)
    jQuery('#messages').append(li)
})

socket.on('newUserBroadcast', function (user) {
    console.log(`${user.name} has joined the chat room.`)
})

socket.on('newUser', function (user) {
    console.log(`Welcome to the chat room ${user.name}`)
})

jQuery('#message-form').on('submit', function(e) {
    e.preventDefault()

    socket.emit('createMessage', {
        from: 'User',
        text: jQuery('[name=message]').val()
    })
})