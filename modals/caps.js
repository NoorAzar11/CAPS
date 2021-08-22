'use strict';


const events = require('../events');
const event = require('../events')
require('dotenv').config()
require('./vendor');
require('./driver');


let date=new Date();
let year=new Intl.DateTimeFormat('en',{year:'numeric'}).format(date);
let month=new Intl.DateTimeFormat('en',{month:'numeric'}).format(date);
let day=new Intl.DateTimeFormat('en',{day:'2-digit'}).format(date);
let time=date.toLocaleDateString();

events.on('ordOrdersers',payload=>{
    console.log('EVENT:', {
        event: 'Orders',
        time:`${year}-${month}-${day}`,
        payload:payload
        
    })
    events.emit('dileveredOrders',payload);
})
///////////

events.on('transit',payload=>{
    console.log('event:', {
        event:'transit',
        time:`${year}-${month}-${day}`,
        payload:payload
        
    })
    events.emit('driver',payload);

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

events.on('deliveredItems',payload=>{
    console.log('event:', {
        event:'dilvered',
        time:`${year}-${month}-${day}`,
        payload:payload
        
    })
    events.emit('driverdilveredOrders',payload)
})
})
     

module.exports =events;