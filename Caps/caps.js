"use strict";

require('dotenv').config();
const uuid = require('uuid').v4;
const port=process.env.PORT || 3000;
const io=require('socket.io')(port);
const caps=io.of('/caps')

const messageQueue = {Duty : {}}

let time = new Date()

io.on('connection',socket=>{
    console.log('CONNECTED SUCCESSFULLY ',socket.id);
});

caps.on('connection',socket=>{
    console.log('CONNECTED SUCCESSFULLY ',socket.id);

    socket.on('pickup',payload=>{
        console.log("adding a new dudty")
        const id = uuid();
        console.log("id", id)
        messageQueue.Duty[id] = payload;
        socket.emit('addedToCaps', payload); 
        caps.emit('driverPickupToCaps',{id: id, payload: messageQueue.Duty[id]});
        console.log("after we added messageQueue ", messageQueue)
    });

    socket.on('get_all_items', ()=> {
        console.log("get_all_items : driver wants to get vendor messages ")
        Object.keys(messageQueue.Duty).forEach(id=> {
            socket.emit('driverPickupToCaps', {id: id, payload: messageQueue.Duty[id] })
        });
    });

    socket.on('received',message=>{
        console.log("received message from queue will and remove it")
        delete messageQueue.Duty[message.id];
        console.log("after We delete meassage from Queue  ", messageQueue)
        caps.emit('driverTransitToCaps',message);
    });


    socket.on('deleverd',message=>{
        console.log('event:',{
            event:'deleverd',
            time:time,
            message:message
        });
        caps.emit('deleverd',message);
        caps.emit('vendorDileverdToCaps',message);
    });


})

module.exports=caps








// 'use strict';

// const io = require('socket.io-client');
// const path = 3000 ||3001;
// const io2 = require('socket.io')(path);
// const  CapsConnectionOn = io.connect('http://localhost:5000');



// let date = new Date();
// let year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
// let month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
// let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
// let time = date.toLocaleTimeString();


// CapsConnectionOn.on('pickupItemsConnection', payload => {
//     console.log("pickup Items Connection")

//     console.log('EVENT:', {
//         event: 'pickup',
//         time: `${year}-${month}-${day} T ${time}`,
//         payload: payload,
//     });

  

// })
// CapsConnectionOn.on('in-trainstItemsConnection', payload => {

//     console.log('EVENT:', {
//         event: 'in-trainst',
//         time: `${year}-${month}-${day} T ${time}`,
//         payload: payload,
//     });


// })
// CapsConnectionOn.on('deliverdItemsConnection', payload => {
// console.log('EVENT:', {
//         event: 'deliverd',
//         time: `${year}-${month}-${day} T ${time}`,
//         payload: payload,
//     });
  

// })
// module.exports =io2