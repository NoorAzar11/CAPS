'use strict';

// require('dotenv').config();

// const events=require('../events');
// const faker=require('faker');

const io=require('socket.io-client');
const pickup=io.connect('http://localhost:3001');
const port=3000||3001;
const io2=require('socket.io')(port);



pickup.on('pickup',payload => {
    console.log('Thank You for Dilvering',payload)
});

module.exports =io2;














// setInterval(() => {
//     setTimeout(() => {
//         let customerorder={

//             Store:process.env.STORE||'Flowers Store',
//             orderID:faker.datatype.uuid(),
//             customer:faker.name.findName(),
//             address:faker.address.streetAddress(),


//         };
//         events.emit('Pickup',customerorder)
//     },5000);
// },5000);


// events.on('VendorDeliveredItems',payload=>{
//  console.log(`Thank you for delivering ${payload.orderID}`);
//     events.emit('deliveredItems',payload)

// })



// payload:
// { store: '1-206-flowers',
//   orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
//   customer: 'Jamal Braun',
//   address: 'Schmittfort, LA' } }

// module.exports =events;