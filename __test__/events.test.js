'use strict';

'use strict';


const Events = require('events')

const events = new Events();


describe('Testing Lab11', () => {

    it('Testing Events', () => {
        
        expect(events).toBeInstanceOf(Events)
    })
})
