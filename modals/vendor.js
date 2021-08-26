'use strict';

require('dotenv').config();

const events=require('../events');
const faker=require('faker');

setInterval(() => {
    setTimeout(() => {
        let customerorder={

            Store:process.env.STORE||'Flowers Store',
            orderID:faker.datatype.uuid(),
            customer:faker.name.findName(),
            address:faker.address.streetAddress(),


        };
        events.emit('Pickup',customerorder)
    },5000);
},5000);


events.on('driverDeliverItems',payload=>{
 console.log(`VENDOR: Thank you for delivering ${payload.orderID}`);

})



// payload:
// { store: '1-206-flowers',
//   orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
//   customer: 'Jamal Braun',
//   address: 'Schmittfort, LA' } }

module.exports =events;