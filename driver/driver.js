'use strict';

// const port = process.env.PORT || 5000;
// const io = require('socket.io')(port);



require('dotenv').config();
const io=require('socket.io-client');
const path=process.env.path || 'http://localhost:3000';
const socket=io.connect(`${path}/caps`);

socket.emit('get_all_items');

socket.on('driverPickupToCaps', meassage=>{
    setTimeout(()=>{
        console.log('DRIVER: picked up vendor meassage :',meassage.id);
        socket.emit('received',meassage);
    },5000);
});


socket.on('driverTransitToCaps',meassage=>{
    setTimeout(()=>{
        console.log(`DRIVER: Delivered The Items ${meassage.id}`);
        socket.emit('deleverd',meassage);
        
    },3000)
});






































// //////////////////////////////////////////////////
// io.on('connection', (socket) => {

//     socket.on('pickup', (payload) => {


//         console.log('pickup', payload.orderId)

//         io.emit('pickupItemsConnection', payload);
//     });
        
// //////////////////////////////////////////////////////
//     socket.on('in-trainst', payload => {
    
//         io.emit('in-trainstItemsConnection', payload);
//     });
// ///////////////////////////////////////////////////////////
//     socket.on('deliverd', payload => {


//         console.log('deliverd', payload.orderId)


//         io.emit('deliverdItemsConnection', payload);
//     });
// /////////////////////////////////////////////////////

//     socket.on('orderdItems', payload => {
        
//         io.emit('pickuporderItems', payload);
//     });
// })



// module.exports = io 