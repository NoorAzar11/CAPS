'use strict';

const io=require('socket.io-client');

let host='http://localhost:3000';
const faker=require('faker');

const capsconOrdered=io.connect(host);
const pickup=io.connect('`${host}/pickup');

setInterval(() => {
    setTimeout(() => {
        
        let customerorder={

           Store:process.env.STORE||'Flowers Store',
        orderID:faker.datatype.uuid(),
    customer:faker.name.findName(),
       address:faker.address.streetAddress(),
            
            
              }
              capsconOrdered.emit('pickup', customerorder)
              capsconOrdered.emit('in-transit', customerorder)
              capsconOrdered.emit('delivered', customerorder)
              capsconOrdered.emit('DilveredOrder', customerorder.orderID)
    },3000)
},1500)