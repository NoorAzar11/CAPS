'use strict';

const events = require('../events');


events.on('dileveredOrdersup',payload => {

    setTimeout(() => {
        console.log(`DRIVER: picked up ${payload.orderID}`);
        events.emit('deliveredItems',payload);
    },1000)
});

events.on('deliveredItems',payload => {
    setTimeout(() => {
        console.log(`DRIVER: picked up and dilver it : ${payload.orderID}`);
        events.emit('driverDeliverItems',payload);
    },3000);
})

//////////

module.exports =events;



// DRIVER: picked up e3669048-7313-427b-b6cc-74010ca1f8f0
// EVENT { event: 'in-transit',
//   time: 2020-03-06T18:27:18.738Z,
//   payload:
//    { store: '1-206-flowers',
//      orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
//      customer: 'Jamal Braun',
//      address: 'Schmittfort, LA' } }