'use strict';

require('dotenv').config();
let faker =require('faker');
const io=require('socket.io-client');
const path=process.env.path || 'http://localhost:3000';
const socket=io.connect(`${path}/caps`);

setInterval(() => {
    let customerOrder={
        storeName:process.env.STORENAME || 'FlowerStore',
        orderId:faker.datatype.uuid(),
        customerName:faker.name.findName(),
        address:faker.address.streetAddress()
    };
    socket.emit('pickup',customerOrder);
}, 1500);
socket.on('addedToCaps', payload=> {
    console.log("Thank you for Adding Items:.... ", payload);
});
socket.on('vendorDileverdToCaps',message=>{
    console.log(`Thank you for Delivering Items ${message.id}`);
})






















