

'use strict';

const events = require('../events');
require('./vendor')


events.on('driverDelivers',payload => {

    setTimeout(() => {
      
        events.emit('driverDeliverItems',payload);
    },1000)
});


module.exports =events;
