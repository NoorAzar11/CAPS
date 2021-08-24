'use strict';


// const events = require('../events');
// const event = require('../events')
// require('dotenv').config()
// require('./vendor');
// require('./driver');


const io=require('socket.io-client');
let host='http//localhost:3000';

const io2=require('socket.io');

const driverConnOrdered=io.connect(host);

let date=new Date();
let year=new Intl.DateTimeFormat('en',{year:'numeric'}).format(date);
let month=new Intl.DateTimeFormat('en',{month:'numeric'}).format(date);
let day=new Intl.DateTimeFormat('en',{day:'2-digit'}).format(date);
let time=date.toLocaleDateString();


driverConnOrdered.on('connectionPickUpOrders',payload=>{
  

    console.log("pickup connection ...:)")


    console.log('EVENT:',{
        event:'pickup',
        time:`${year}-${month}-${day} Time ${time}`,
        payload:payload,

    });

    driverConnOrdered.on('connectioninTransits',payload=>{
   

    console.log('EVENT:',{
        event:'in-transit',
        time:`${year}-${month}-${day} Time ${time}`,
        payload:payload,

    });
})

driverConnOrdered.on('connectionDelivered',payload=>{
    console.log('EVENT:',{
        event:'delivered',
        time:`${year}-${month}-${day} Time ${time}`,
        payload:payload,

    });
})
    
})

module.exports =io2;

























// events.on('Pickup',payload=>{
//     console.log('EVENT:', {
//         event: 'Pickup',
//         time:`${year}-${month}-${day} Time ${time}`,
//         payload:payload
        
//     })
//     events.emit('dileveredOrdersup',payload);
// })
///////////

// events.on('transit',payload=>{
//     console.log('event:', {
//         event:'transit',
//         time:`${year}-${month}-${day} Time ${time}`,
//         payload:payload
        
//     })
//     events.emit('driver-transit',payload);

////////////////////
// events.on('transit',payload=>{
//     console.log('event:', {
//         event:'transit',
//         time:`${year}-${month}-${day}`,
//         payload:payload
        
//     })
//     events.emit('driver',payload);
// })
////////////////////////////////

// events.on('deliveredItems',payload=>{
//     console.log('event:', {
//         event:'dilvered',
//         time:`${year}-${month}-${day} Time ${time}`,
//         payload:payload
        
//     })
//     events.emit('driverDeliverItems',payload)
// })
// })
     

// module.exports =events;