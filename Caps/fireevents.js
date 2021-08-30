// 'use strict';

// const io = require('socket.io-client');
// const faker = require('faker');

// const firingEventsConnection = io.connect('http://localhost:5000');




// setInterval(() => {
//     setTimeout(() => {
        
//         let customerOrder = {

//             store: process.env.store || 'FlowerStore',
//             orderId: faker.datatype.uuid(),
//             customerName: faker.name.findName(),
//             address: faker.address.streetAddress()
//         }

//         firingEventsConnection.emit('pickup', customerOrder)
//         firingEventsConnection.emit('in-trainst', customerOrder)
//         firingEventsConnection.emit('deliverd', customerOrder)
//         firingEventsConnection.emit('orderdItems', customerOrder.orderId)


//     }, 1500)
// }, 3000)