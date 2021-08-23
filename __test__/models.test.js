'use strict';

const events = require('../events')
const supertest = require('supertest');

  const CAPSTESting = require('../modals/caps');
  const Testingvendor = require('../modals/vendor');
  const TestDriver = require('../modals/driver');


let payload = {
    store: '1-206-flowers',
    orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
    customer: 'Jamal Braun',
    address: 'Schmittfort, LA' 

    
}

jest.useFakeTimers()

describe('Testing CAPS', () => {

    it('Testing PickUp', () => {
  
        CAPSTESting.emit('Orders', payload)
        expect(CAPSTESting.emit('Orders', payload)).toEqual(false);
    })

    it('Testing transit ', () => {
      
        CAPSTESting.emit('transit', payload)
        expect(CAPSTESting.emit('transit', payload)).toEqual(true)
    })

    // it('transit', () => {
        
    //     CAPSTESting.emit('deliveredItems', payload)
    //     expect(CAPSTESting.emit('deliveredItems', payload)).toEqual(true)
    // })

})

/////////////////////////////////////

describe('Testing Driver', () => {

    it('Testing transit', () => {
       
        TestDriver.emit('transit', payload)
        expect(TestDriver.emit('transit', payload)).toEqual(true)
    });

});


///////////////
describe('Testing Vendor', () => {
    it('Testing vendor', () => {
        Testingvendor.emit('deliveredItems', payload)
        expect(Testingvendor.emit('deliveredItems', payload)).toEqual(true)
    })

})