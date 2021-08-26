
'use strict';


const events = require('../events');

require('dotenv').config()
require('./vendor');
require('./driver');


let date=new Date();
let year=new Intl.DateTimeFormat('en',{year:'numeric'}).format(date);
let month=new Intl.DateTimeFormat('en',{month:'numeric'}).format(date);
let day=new Intl.DateTimeFormat('en',{day:'2-digit'}).format(date);
let time=date.toLocaleDateString();

events.on('Pickup',payload=>{
    console.log('EVENT:', {
        event: 'Pickup',
        time:`${year}-${month}-${day} Time ${time}`,
        payload:payload
        
        
    })  
 
    console.log(`DRIVER: picked up ${payload.orderID}`);
    
    console.log('event:', {
        event:'in-transit',
        time:`${year}-${month}-${day} Time ${time}`,
        payload:payload
        
    })
 
    console.log(`DRIVER: delivered up : ${payload.orderID}`);
    console.log('event:', {
        event:'dilvered',
        time:`${year}-${month}-${day} Time ${time}`,
        payload:payload
        
    })
   
    events.emit('driverDelivers',payload)
})




     

module.exports =events;
