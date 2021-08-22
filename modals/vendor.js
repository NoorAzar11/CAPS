'use strict';

require('dotenv').config();

const events=require('../events');
const faker=require('faker');

setInterval(() => {
    setTimeout(() => {
        let CstOrder={

            Store:process.env.STORE||'Flowers Store',
            orderID:faker.datatype.uuid(),
            customer:faker.name.findName(),
            address:faker.address.streetAddress()


        }
        events.emit('Orders',CstOrder)
    },5000);
},5000);


events.on('deliveredItems',payload=>{
    console.log(`Dilvered Items ${payload.orderID}`);
    events.emit('deliveredItems',payload)

})



// payload:
// { store: '1-206-flowers',
//   orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
//   customer: 'Jamal Braun',
//   address: 'Schmittfort, LA' } }