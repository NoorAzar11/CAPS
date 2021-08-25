'use strict';



const io = require('socket.io-client');
const pickup = io.connect('http://localhost:5000');
const port = 8000 ||3000;
const io2 = require('socket.io')(port);


pickup.on('pickuporderItems', payload => {
    console.log('Thank you for Delivering', payload)
});





module.exports = io2
