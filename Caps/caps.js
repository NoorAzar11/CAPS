

'use strict';

const io = require('socket.io-client');
const path = 3000 ||3001;
const io2 = require('socket.io')(path);
const  CapsConnectionOn = io.connect('http://localhost:5000');



let date = new Date();
let year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
let month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
let time = date.toLocaleTimeString();


CapsConnectionOn.on('pickupItemsConnection', payload => {
    console.log("pickup Items Connection")

    console.log('EVENT:', {
        event: 'pickup',
        time: `${year}-${month}-${day} T ${time}`,
        payload: payload,
    });

  

})
CapsConnectionOn.on('in-trainstItemsConnection', payload => {

    console.log('EVENT:', {
        event: 'in-trainst',
        time: `${year}-${month}-${day} T ${time}`,
        payload: payload,
    });


})
CapsConnectionOn.on('deliverdItemsConnection', payload => {
console.log('EVENT:', {
        event: 'deliverd',
        time: `${year}-${month}-${day} T ${time}`,
        payload: payload,
    });
  

})
module.exports =io2
