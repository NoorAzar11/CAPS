
'use strict';

const port = process.env.PORT || 5000;
const io = require('socket.io')(port);



//////////////////////////////////////////////////
io.on('connection', (socket) => {

    socket.on('pickup', (payload) => {


        console.log('pickup', payload.orderId)

        io.emit('pickupItemsConnection', payload);
    });
        
//////////////////////////////////////////////////////
    socket.on('in-trainst', payload => {
    
        io.emit('in-trainstItemsConnection', payload);
    });
///////////////////////////////////////////////////////////
    socket.on('deliverd', payload => {


        console.log('deliverd', payload.orderId)


        io.emit('deliverdItemsConnection', payload);
    });
/////////////////////////////////////////////////////

    socket.on('orderdItems', payload => {
        
        io.emit('pickuporderItems', payload);
    });
})



module.exports = io 
