'use strict';

const faker=require('faker');
const io=require('socket.io-client');
// const socket2=require('socket.io')

let host='http://localhost:3000';

const capsconOrdered=io.connect(host);


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
    },1500)
},3000)

// module.exports =socket2;